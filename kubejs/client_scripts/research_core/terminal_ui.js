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

// 汇总：[headerCount, nodeRows[{line, tips}]]，专用服模式 noData=true
var SRTU_model = function (server) {
    var unlocks = SRTU_unlocks(server)
    if (unlocks === null) {
        var info = { noData: true, done: 0, total: 0, rows: [] }
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
    return { noData: false, done: done, total: rows.length, rows: rows }
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
    var YogaFlexDirection = Java.loadClass('org.appliedenergistics.yoga.YogaFlexDirection')
    var Size = Java.loadClass('com.lowdragmc.lowdraglib2.math.Size')

    var root = new UIElement()
    root.layout(function (l) {
        l.width(236)
        l.flexDirection(YogaFlexDirection.COLUMN)
        l.paddingAll(8)
        l.gapAll(4)
    })
    root.style(function (s) {
        s.background(SDFRectTexture.of(0xF010141A).setRadius(6).setBorderColor(0xFF47505C).setStroke(1))
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
    sep.layout(function (l) {
        l.widthStretch()
        l.height(1)
    })
    sep.style(function (s) {
        s.background(SDFRectTexture.of(0xFF39414B))
    })
    root.addChild(sep)

    // 节点行
    for (var i = 0; i < model.rows.length; i++) {
        var row = new UIElement()
        row.layout(function (l) {
            l.widthStretch()
            l.paddingAll(3)
        })
        row.style(function (s) {
            s.background(SDFRectTexture.of(0x2E7A8794).setRadius(4))
        })
        try {
            var tips = model.rows[i].tips
            if (tips.length > 0) {
                var arr = []
                for (var t = 0; t < tips.length; t++) arr.push(tips[t])
                s.tooltips(arr)
            }
        } catch (eTip) {
            console.warn('[SRTU] 节点悬停提示设置失败（不影响显示）: ' + eTip)
        }
        row.addChild(SRTU_mkLabel(Label, model.rows[i].line))
        root.addChild(row)
    }

    // 页脚
    var foot = new UIElement()
    foot.layout(function (l) {
        l.widthStretch()
        l.heightAuto()
    })
    foot.addChild(SRTU_mkLabel(Label, '§8/research tree · /research need <物品id>'))
    root.addChild(foot)

    // 动态窗口高度：按行数估算
    var rowsH = 0
    for (var r = 0; r < model.rows.length; r++) rowsH += 20
    var totalH = 16 + 12 + 4 + 10 + 4 + 1 + 4 + rowsH + 4 + 10
    if (model.rows.length === 0) totalH = 60

    ev.modularUI = ModularUI.of(UI.of(root, function (size) {
        return Size.of(236, totalH)
    }), ev.player)
}

// 兜底：样式版构建失败时退回纯文本版，保证一定能打开
// 顺便放一个扫雷入口：通关后由服务端加速原始研究台当前进度
var SRTU_openPlain = function (ev, lines) {
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var Button = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Button')
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')

    var width = 240
    var height = Math.max(60, lines.length * 10 + 44)

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

    var btn = new Button()
    btn.setText('§e扫雷 §7· 通关加速原始研究台')
    btn.lss('width', 'stretch')
    btn.lss('height', 16)
    btn.setOnClick(function () {
        try {
            // 由服务端 /sweeper 打开玩家界面
            ev.player.connection.sendCommand('sweeper')
        } catch (e2) {
            console.warn('[SRTU] 打开扫雷失败: ' + e2)
            try { ev.player.tell(Text.of('§7扫雷打不开，用 §e/sweeper')) } catch (e3) { }
        }
    })
    root.addChild(btn)

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
