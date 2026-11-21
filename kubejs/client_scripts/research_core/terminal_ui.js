// ============================================================
// 溯洄研究系统 —— 研究终端 GUI（客户端侧）
// 位置：kubejs/client_scripts/research_core/terminal_ui.js
// ------------------------------------------------------------
// 崩溃修复记录（crash-2026-11-18_12.36.37-client.txt）：
//   KJSBlockUIMenuType 在服务端用 ScriptType.SERVER、在客户端用
//   ScriptType.CLIENT 各触发一次 UIEvents.BLOCK 事件（javap 反编译确认）。
//   只在 server_scripts 注册时，客户端 create() 拿不到 modularUI，
//   屏幕带 null menu 渲染 -> AbstractContainerScreen.render NPE 崩溃。
//   因此本文件必须与 server_scripts/research_core/terminal.js 成对存在，
//   两边注册同一个 UI id，客户端负责真正的界面构建。
//
// 布局 API（从 ldlib2 jar 反编译确认）：
//   UIElement.layout(Consumer<LayoutStyle>)  -> flexbox（Taffy/Yoga）
//   UIElement.style(Consumer<BasicStyle>)    -> background(SDFRectTexture)
//   SDFRectTexture.of(argb).setRadius(n).setBorderColor(argb).setStroke(n)
//   TextElement.setText(String) 支持 \n 分行与 § 颜色码
//   UI.of(element, Function<Size,Size>) 动态窗口尺寸
//
// 本文件禁止使用 const/let。
// ============================================================

var SRTU_UI_ID = 'sink_research_terminal'

// ---- 数据加载（与 server 版同一套 JSON） ----------------------

var SRTU_readJson = function (path) {
    var text = ''
    try {
        text = String(JsonIO.readString(path))
    } catch (e1) {
        try {
            var P = Java.loadClass('java.nio.file.Path')
            text = String(JsonIO.readString(P.of(path)))
        } catch (e2) {
            return null
        }
    }
    try {
        var o = JSON.parse(text)
        if (o) return o
    } catch (e) { }
    return null
}

var SRTU_nodes = null
var SRTU_order = null

var SRTU_load = function () {
    SRTU_nodes = {}
    SRTU_order = []
    var man = SRTU_readJson('kubejs/config/sinkresearch/manifest.json')
    if (!man || !man.pages) return
    for (var i = 0; i < man.pages.length; i++) {
        var page = SRTU_readJson('kubejs/config/sinkresearch/' + String(man.pages[i]))
        if (!page || !page.nodes) continue
        for (var k = 0; k < page.nodes.length; k++) {
            var n = page.nodes[k]
            SRTU_nodes[String(n.id)] = n
            SRTU_order.push(String(n.id))
        }
    }
}
SRTU_load()

// ---- 服务端数据访问 ------------------------------------------

// 客户端 Level.getServer() 永远是 null（专用服/内置服都一样），
// 单人模式走 Minecraft 单机服入口拿内置服；专用服拿不到 -> 返回 null。
var SRTU_server = function (ev) {
    try {
        var s = ev.player.level.server
        if (s) return s
    } catch (e) { }
    try {
        var Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
        var mc = Minecraft.getInstance()
        var sp = mc.getSingleplayerServer()
        return sp ? sp : null
    } catch (e) {
        return null
    }
}

var SRTU_unlocks = function (server) {
    var set = {}
    if (!server) return null
    try {
        var raw = String(server.persistentData.getString('sinkresearch.unlocks') || '')
        if (raw.length > 0) {
            var parts = raw.split(',')
            for (var i = 0; i < parts.length; i++) if (parts[i].length > 0) set[parts[i]] = true
        }
    } catch (e) { }
    return set
}

// unlock 为数组时任一 key 解锁即算完成（与 server 版 srNodeDone 一致）
var SRTU_done = function (node, unlocks) {
    var keys = node.unlock || []
    if (keys.length === 0) return true
    for (var i = 0; i < keys.length; i++) if (unlocks[String(keys[i])]) return true
    return false
}

// 前置是否满足（与 server 版 SRT_ready 一致）
var SRTU_ready = function (node, unlocks) {
    var req = node.requires || {}
    var children = req.or || req.and || []
    if (children.length === 0) return true
    var op = req.or ? 'or' : 'and'
    if (op === 'or') {
        for (var i = 0; i < children.length; i++) {
            var c = SRTU_nodes[String(children[i])]
            if (c && SRTU_done(c, unlocks)) return true
        }
        return false
    }
    for (var k = 0; k < children.length; k++) {
        var d = SRTU_nodes[String(children[k])]
        if (!d || !SRTU_done(d, unlocks)) return false
    }
    return true
}

var SRTU_eraName = function (era) {
    var map = { kinetic: '机动', steam: '蒸汽', end: '末地', electric: '电力' }
    return map[String(era)] ? map[String(era)] : String(era)
}

// 节点状态 -> [符号, 状态文本]
var SRTU_mark = function (node, unlocks) {
    var done = SRTU_done(node, unlocks)
    var ready = SRTU_ready(node, unlocks)
    if (done) return ['§a✔', '已完成']
    if (ready) return ['§e▶', '可研究']
    return ['§8✘', '锁定']
}

// 悬停提示：成本 + 前置
var SRTU_tips = function (node, unlocks) {
    var out = []
    var inputs = node.inputs || {}
    var items = inputs.items || []
    for (var i = 0; i < items.length; i++) {
        out.push('§7物品 §f' + items[i].id + ' §7×' + items[i].count)
    }
    var fluids = inputs.fluids || []
    for (var k = 0; k < fluids.length; k++) {
        out.push('§7流体 §f' + fluids[k].id + ' §7' + fluids[k].amount + 'mB')
    }
    if (inputs.energy) out.push('§7能量 §f' + inputs.energy + ' FE')
    if (node.duration) out.push('§7时长 §f' + Math.round(Number(node.duration) / 20) + 's')
    var req = (node.requires || {}).and || (node.requires || {}).or || []
    if (req.length > 0) out.push('§7前置 §f' + req.join('§7, §f'))
    var state = SRTU_mark(node, unlocks)
    out.push('§7状态 §f' + state[1])
    return out
}

// ---- 进行中的研究 --------------------------------------------
// 研究站把占位写进 server.persistentData（见 station_startup.js）：
//   sinkresearch.net.index     -> "dim@x_y_z;..."
//   sinkresearch.jobs.<token>  -> {"x_y_z": {"ts":..., "node":"<配方 id>"}}
// 客户端在单人模式能读到同一个 persistentData，所以终端能显示"正在跑什么"；
// 专用服读不到 server（返回空表），退化成只显示节点列表。

var SRTU_byRecipe = function (recipeId) {
    if (!recipeId) return null
    for (var i = 0; i < SRTU_order.length; i++) {
        var n = SRTU_nodes[SRTU_order[i]]
        if (n && String(n.recipe_id || '') === String(recipeId)) return n
    }
    return null
}

var SRTU_fmtLeft = function (ms) {
    if (ms < 0) return '剩余未知'
    var sec = Math.round(ms / 1000)
    if (sec >= 60) return '剩 ' + Math.floor(sec / 60) + 'm' + (sec % 60) + 's'
    return '剩 ' + sec + 's'
}

var SRTU_jobs = function (server) {
    var out = []
    if (!server) return out
    var now = Date.now()
    try {
        var idx = String(server.persistentData.getString('sinkresearch.net.index') || '')
        if (idx.length === 0) return out
        var tokens = idx.split(';')
        for (var i = 0; i < tokens.length; i++) {
            var tok = String(tokens[i])
            if (tok.length === 0) continue
            var raw = ''
            try {
                raw = String(server.persistentData.getString('sinkresearch.jobs.' + tok) || '')
            } catch (e0) { continue }
            if (raw.length === 0) continue
            var jobs = null
            try { jobs = JSON.parse(raw) } catch (e1) { continue }
            if (!jobs) continue
            for (var k in jobs) {
                var entry = jobs[k]
                var ts = (typeof entry === 'number') ? Number(entry) : Number((entry && entry.ts) || 0)
                // 心跳每秒刷一次；超过 30 秒没心跳说明机器/服务器已经不在跑了，
                // 这种脏占位不该出现在"进行中"里
                if (!ts || now - ts > 30000) continue
                var recipeId = (entry && entry.node) ? String(entry.node) : ''
                var startedAt = (entry && entry.start) ? Number(entry.start) : ts
                var node = SRTU_byRecipe(recipeId)
                var totalMs = node ? Number(node.duration || 0) * 50 : 0
                out.push({
                    at: startedAt,
                    id: node ? String(node.id) : (recipeId || '未知研究'),
                    left: totalMs > 0 ? Math.max(0, totalMs - (now - startedAt)) : -1,
                    pos: String(k)
                })
            }
        }
    } catch (e) { }
    out.sort(function (a, b) { return a.at - b.at })
    return out
}

// 汇总：[headerCount, nodeRows[{line, tips}]]，专用服模式 noData=true
var SRTU_model = function (server) {
    var unlocks = SRTU_unlocks(server)
    if (unlocks === null) {
        var info = { noData: true, done: 0, total: 0, rows: [], running: [] }
        if (SRTU_nodes && SRTU_order.length > 0) {
            for (var i = 0; i < SRTU_order.length; i++) {
                var n0 = SRTU_nodes[SRTU_order[i]]
                info.rows.push({ line: '§f' + n0.id + ' §8· ' + SRTU_eraName(n0.era), tips: [] })
            }
            info.total = SRTU_order.length
        }
        return info
    }
    var rows = []
    var done = 0
    if (SRTU_nodes && SRTU_order.length > 0) {
        for (var j = 0; j < SRTU_order.length; j++) {
            var n = SRTU_nodes[SRTU_order[j]]
            var st = SRTU_mark(n, unlocks)
            if (st[0] === '§a✔') done++
            rows.push({ line: st[0] + ' §f' + n.id + ' §8· ' + SRTU_eraName(n.era), tips: SRTU_tips(n, unlocks) })
        }
    }
    return { noData: false, done: done, total: rows.length, rows: rows, running: SRTU_jobs(server) }
}

// ---- 界面构建 ------------------------------------------------

var SRTU_mkLabel = function (Label, text) {
    var lab = new Label()
    lab.setText(text)
    return lab
}

var SRTU_openStyled = function (ev, model) {
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
    var SDFRectTexture = Java.loadClass('com.lowdragmc.lowdraglib2.gui.texture.SDFRectTexture')
    var FlexDirection = Java.loadClass('dev.vfyjxf.taffy.style.FlexDirection')
    var StyleOrigin = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.style.StyleOrigin')
    var INLINE = StyleOrigin.INLINE

    // 这个界面之前一次都没成功过，三处都是独立踩坑（日志里那条
    // "样式版界面构建失败，退回纯文本版" 是第一条）：
    //   1) layout(l => l.flexDirection(...))：LayoutStyle 同时有 setter 和
    //      getFlexDirection() getter，Rhino 取成员先命中 getter，拿到的是
    //      FlexDirection 对象，再当函数调用就抛 "not a function, it is object"。
    //      -> 布局一律走 lss(...)，并且显式传 StyleOrigin.INLINE
    //   2) UI.of(root, function)：DynamicSizeProvider 继承 Function 的桥接方法，
    //      Rhino 转不了 JS 函数（会当 List/Stylesheet[]/String[] 重载竞争）。
    //      -> 尺寸直接写在 root 的 lss 上，UI.of(root) 单参
    //   3) SDFRectTexture.of(0xF010141A)：超过 int 上限的字面量在 Rhino 里是
    //      double，传给 int 参数会抛错 -> 一律写等值的有符号 ARGB 负数。
    var WIDTH = 236
    var rowsH = 0
    for (var r = 0; r < model.rows.length; r++) rowsH += 20
    var runH = (model.running && model.running.length > 0) ? (10 + model.running.length * 20 + 4) : 0
    var height = Math.max(60, 16 + 12 + 4 + 10 + 4 + 1 + 4 + runH + rowsH + 4 + 10)

    var root = new UIElement()
    root.lss('width', WIDTH, INLINE)
    root.lss('height', height, INLINE)
    root.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    root.lss('padding-all', 8, INLINE)
    root.lss('gap-all', 4, INLINE)
    root.style(function (s) {
        s.background(SDFRectTexture.of(-267381734).setRadius(6).setBorderColor(-12103588).setStroke(1))
    })

    // 标题
    var head = SRTU_mkLabel(Label, '§b§l溯洄研究终端')
    root.addChild(head)

    // 进度
    var progText = model.noData
        ? ('§7节点 §f' + model.total + ' §8（专用服模式，进度以 /research tree 为准）')
        : ('§7已完成 §f' + model.done + '§7/§f' + model.total)
    root.addChild(SRTU_mkLabel(Label, progText))

    // 分隔线
    var sep = new UIElement()
    sep.lss('width', 'stretch', INLINE)
    sep.lss('height', 1, INLINE)
    sep.style(function (s) {
        s.background(SDFRectTexture.of(-13024949))
    })
    root.addChild(sep)

    // 进行中：研究站此刻在跑哪条、大概还剩多久
    if (model.running && model.running.length > 0) {
        root.addChild(SRTU_mkLabel(Label, '§6▣ 进行中 §7' + model.running.length + ' 条'))
        for (var q = 0; q < model.running.length; q++) {
            var job = model.running[q]
            var jrow = new UIElement()
            jrow.lss('width', 'stretch', INLINE)
            jrow.lss('padding-all', 3, INLINE)
            jrow.style(function (s) {
                s.background(SDFRectTexture.of(776616474).setRadius(4))
            })
            jrow.addChild(SRTU_mkLabel(Label, '§e▸ §f' + job.id + ' §7' + SRTU_fmtLeft(job.left) + ' §8@' + job.pos))
            root.addChild(jrow)
        }
    }

    // 节点行
    for (var i = 0; i < model.rows.length; i++) {
        var row = new UIElement()
        row.lss('width', 'stretch', INLINE)
        row.lss('padding-all', 3, INLINE)
        // 悬停提示必须在 style 回调里设置（原来写在回调外，那里没有 s 变量，
        // ReferenceError 被 catch 吞掉，tooltips 从来没生效过）
        var tips = model.rows[i].tips || []
        row.style(function (s) {
            s.background(SDFRectTexture.of(779782036).setRadius(4))
            try {
                if (tips.length > 0) s.tooltips(tips)
            } catch (eTip) {
                console.warn('[SRTU] 节点悬停提示设置失败（不影响显示）: ' + eTip)
            }
        })
        row.addChild(SRTU_mkLabel(Label, model.rows[i].line))
        root.addChild(row)
    }

    // 页脚
    var foot = new UIElement()
    foot.lss('width', 'stretch', INLINE)
    foot.addChild(SRTU_mkLabel(Label, '§8/research tree · /research need <物品id>'))
    root.addChild(foot)

    ev.modularUI = ModularUI.of(UI.of(root), ev.player)
}

// 兜底：样式版构建失败时退回纯文本版，保证一定能打开
var SRTU_openPlain = function (ev, lines) {
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')

    var width = 240
    var height = Math.max(60, lines.length * 10 + 28)

    var root = new UIElement()
    root.lss('width', width)
    root.lss('height', height)
    root.lss('flex-direction', 'column')
    root.lss('padding-all', 6)
    root.lss('gap-all', 4)

    var label = new Label()
    label.setText(lines.join('\n'))
    label.lss('width', 'stretch')
    root.addChild(label)

    ev.modularUI = ModularUI.of(UI.of(root), ev.player)
}

// ---- 注册 ----------------------------------------------------

try {
    LDLib2UI.block(SRTU_UI_ID, function (ev) {
        var lines = ['§c界面构建失败', '§7请使用 §e/research tree']
        try {
            var model = SRTU_model(SRTU_server(ev))
            try {
                SRTU_openStyled(ev, model)
                return
            } catch (eStyled) {
                console.warn('[SRTU] 样式版界面构建失败，退回纯文本版: ' + eStyled)
            }
            // 纯文本版
            var plain = []
            if (model.noData) {
                plain.push('§b研究终端 §8(专用服模式)')
                for (var i = 0; i < model.rows.length; i++) plain.push(model.rows[i].line)
                plain.push('§7进度请用 §e/research tree')
            } else {
                plain.push('§b研究树 §7(' + model.done + '/' + model.total + ' 已完成)')
                if (model.running && model.running.length > 0) {
                    plain.push('§6▣ 进行中 ' + model.running.length + ' 条')
                    for (var q = 0; q < model.running.length; q++) {
                        plain.push('§e▸ §f' + model.running[q].id + ' §7' + SRTU_fmtLeft(model.running[q].left))
                    }
                }
                for (var j = 0; j < model.rows.length; j++) plain.push(model.rows[j].line)
            }
            SRTU_openPlain(ev, plain)
        } catch (e0) {
            console.error('[SRTU] 构建界面失败: ' + e0)
            try {
                SRTU_openPlain(ev, lines)
            } catch (e1) {
                console.error('[SRTU] 兜底界面也失败: ' + e1)
            }
        }
    })
    console.info('[SRTU] 已注册客户端 LDLib2 界面 ' + SRTU_UI_ID)
} catch (e) {
    console.error('[SRTU] LDLib2UI 客户端注册失败（终端界面不可用，聊天版仍可用）: ' + e)
}
