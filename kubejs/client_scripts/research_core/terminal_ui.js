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
var SRTU_pageTitles = {}

var SRTU_load = function () {
    SRTU_nodes = {}
    SRTU_order = []
    SRTU_pageTitles = {}
    var man = SRTU_readJson('kubejs/config/sinkresearch/manifest.json')
    if (!man || !man.pages) return
    for (var i = 0; i < man.pages.length; i++) {
        var page = SRTU_readJson('kubejs/config/sinkresearch/' + String(man.pages[i]))
        if (!page || !page.nodes) continue
        // 树面板要按页分带排布，所以节点必须记住自己属于哪一页
        var pid = String(page.page || man.pages[i])
        if (page.title_key) SRTU_pageTitles[pid] = String(page.title_key)
        for (var k = 0; k < page.nodes.length; k++) {
            var n = page.nodes[k]
            n.page = pid
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

// ---- 服务端推送的状态快照 ------------------------------------
// 打开终端时服务端先发一包 sinkresearch:state（见 terminal.js）：
//   unlocks: "era.kinetic,era.steam"
//   running: "sink:ember_notes|x_y_z|剩余毫秒;..."
// 包在同一连接上是 FIFO，所以界面构建时一般已经拿到；拿不到就退回本地读
// persistentData（单人模式一直有效），专用服才真正依赖这包数据。
var SRTU_REMOTE_TTL_MS = 600000
var SRTU_remote = null

NetworkEvents.dataReceived('sinkresearch:state', function (ev) {
    try {
        var tag = ev.data
        var unlocks = {}
        var parts = String(tag.getString('unlocks') || '').split(',')
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].length > 0) unlocks[parts[i]] = true
        }
        var running = []
        var raw = String(tag.getString('running') || '')
        if (raw.length > 0) {
            var items = raw.split(';')
            for (var k = 0; k < items.length; k++) {
                var f = String(items[k]).split('|')
                if (f.length < 3) continue
                running.push({ at: 0, id: f[0], left: Number(f[2]), pos: f[1] })
            }
        }
        SRTU_remote = { unlocks: unlocks, running: running, at: Date.now() }
    } catch (e) {
        console.warn('[SRTU] 状态快照解析失败（退回本地读取）: ' + e)
    }
})

// 汇总：[headerCount, nodeRows[{line, tips}]]，专用服模式 noData=true
var SRTU_model = function (server) {
    var unlocks = null
    var running = []
    if (SRTU_remote && (Date.now() - SRTU_remote.at) < SRTU_REMOTE_TTL_MS) {
        unlocks = SRTU_remote.unlocks
        running = SRTU_remote.running
    } else {
        unlocks = SRTU_unlocks(server)
        if (unlocks !== null) running = SRTU_jobs(server)
    }
    if (unlocks === null) {
        var info = { noData: true, done: 0, total: 0, rows: [], running: [], unlocks: {} }
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
    return { noData: false, done: done, total: rows.length, rows: rows, running: running, unlocks: unlocks }
}

// ---- 界面构建 ------------------------------------------------

var SRTU_mkLabel = function (Label, text) {
    var lab = new Label()
    lab.setText(text)
    return lab
}

var SRTU_short = function (id, max) {
    var s = String(id)
    var at = s.indexOf(':')
    if (at >= 0) s = s.substring(at + 1)
    var lim = max || 10
    if (s.length > lim) s = s.substring(0, lim)
    return s
}

var SRTU_wrap = function (text, per) {
    var out = []
    var s = String(text || '')
    var lim = per || 19
    while (s.length > lim) {
        out.push(s.substring(0, lim))
        s = s.substring(lim)
    }
    if (s.length > 0) out.push(s)
    return out
}

var SRTU_lang = function (key) {
    if (!key) return ''
    try {
        var t = String(Text.translatable(String(key)).getString())
        if (t.length > 0 && t !== String(key)) return t
    } catch (e) { }
    return ''
}

// 真树界面：左列是按节点 JSON 的 ui.x / ui.y 还原出来的格子图（按页面分带，
// 同行的前置用 1px 细线连起来），右列是选中节点的详情。
// 只用 LDLib2 里已验证可用的 API：lss(...) 写布局、style(...) 写背景与 tooltip、
// Label 收 mouseDown、setText 改文本。整段仍在外层 try/catch 里，出错退纯文本版。
var SRTU_openStyled = function (ev, model) {
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
    var SDFRectTexture = Java.loadClass('com.lowdragmc.lowdraglib2.gui.texture.SDFRectTexture')
    var FlexDirection = Java.loadClass('dev.vfyjxf.taffy.style.FlexDirection')
    var StyleOrigin = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.style.StyleOrigin')
    var INLINE = StyleOrigin.INLINE

    var NODE_W = 76
    var NODE_H = 20
    var GAP_W = 12
    var ROW_GAP = 6
    var DETAIL_W = 216
    var PAD = 8

    var unlocks = model.unlocks || {}

    // ---- 每页的网格坐标：ui.x / ui.y 去重排序后当列号 / 行号 --------------
    var pages = []
    var byPage = {}
    for (var i = 0; i < SRTU_order.length; i++) {
        var nd = SRTU_nodes[SRTU_order[i]]
        if (!nd) continue
        var pid = String(nd.page || 'default')
        if (!byPage[pid]) {
            byPage[pid] = { id: pid, items: [], xs: [], ys: [] }
            pages.push(byPage[pid])
        }
        var uiDef = nd.ui || {}
        byPage[pid].items.push({
            node: nd,
            x: Number(uiDef.x) || 0,
            y: Number(uiDef.y) || 0,
            gx: 0,
            gy: 0
        })
    }

    var maxCols = 1
    var pagesH = 0
    for (var p = 0; p < pages.length; p++) {
        var page = pages[p]
        for (var a = 0; a < page.items.length; a++) {
            if (page.xs.indexOf(page.items[a].x) < 0) page.xs.push(page.items[a].x)
            if (page.ys.indexOf(page.items[a].y) < 0) page.ys.push(page.items[a].y)
        }
        page.xs.sort(function (m, n) { return m - n })
        page.ys.sort(function (m, n) { return m - n })
        for (var b = 0; b < page.items.length; b++) {
            page.items[b].gx = page.xs.indexOf(page.items[b].x)
            page.items[b].gy = page.ys.indexOf(page.items[b].y)
        }
        if (page.xs.length > maxCols) maxCols = page.xs.length
        pagesH += 11 + page.ys.length * NODE_H + (page.ys.length - 1) * ROW_GAP + 8
    }
    var treeW = maxCols * NODE_W + (maxCols - 1) * GAP_W

    var findAt = function (page, c, r) {
        for (var i2 = 0; i2 < page.items.length; i2++) {
            if (page.items[i2].gx === c && page.items[i2].gy === r) return page.items[i2]
        }
        return null
    }
    var findInPage = function (page, id) {
        for (var i3 = 0; i3 < page.items.length; i3++) {
            if (String(page.items[i3].node.id) === String(id)) return page.items[i3]
        }
        return null
    }
    var requireList = function (node) {
        var req = node.requires || {}
        return req.or || req.and || []
    }
    // 只有"左邻列同一行"的前置画线；跨行/跨列的前置在右侧详情里列出来
    var hasLink = function (page, c, r) {
        var child = findAt(page, c + 1, r)
        if (!child) return false
        var list = requireList(child.node)
        for (var i4 = 0; i4 < list.length; i4++) {
            var par = findInPage(page, String(list[i4]))
            if (par && par.gx === c && par.gy === r) return true
        }
        return false
    }

    // ---- 右列：详情 ----------------------------------------------------
    var detailTitle = SRTU_mkLabel(Label, '§b—')
    var detailBody = SRTU_mkLabel(Label, '§8点一个节点看详情')
    detailBody.lss('width', 'stretch', INLINE)

    var showDetail = function (node) {
        var st = SRTU_mark(node, unlocks)
        var lines = []
        lines.push('§7状态 §f' + st[1] + ' §8· §7' + SRTU_eraName(node.era))

        var inputs = node.inputs || {}
        var inItems = inputs.items || []
        for (var i5 = 0; i5 < inItems.length; i5++) {
            lines.push('§8· §7' + SRTU_short(inItems[i5].id, 18) + ' §f×' + inItems[i5].count)
        }
        var inFluids = inputs.fluids || []
        for (var i6 = 0; i6 < inFluids.length; i6++) {
            lines.push('§8· §7' + SRTU_short(inFluids[i6].id, 14) + ' §f' + inFluids[i6].amount + 'mB')
        }
        if (inputs.energy) lines.push('§8· §7能量 §f' + inputs.energy + ' FE')
        if (inputs.compute) lines.push('§8· §7算力需求 §f' + inputs.compute)
        if (node.duration) lines.push('§8· §7时长 §f' + Math.round(Number(node.duration) / 20) + 's')

        var req = requireList(node)
        if (req.length > 0) lines.push('§7前置 §f' + req.join('§7, §f'))

        var outItems = (node.outputs || {}).items || []
        for (var i7 = 0; i7 < outItems.length; i7++) {
            lines.push('§7产出 §f' + SRTU_short(outItems[i7].id, 16) + '§7 ×' + outItems[i7].count)
        }
        var keys = node.unlock || []
        if (keys.length > 0) lines.push('§7解锁 §f' + keys.join('§7, §f'))

        var doc = SRTU_lang((node.ui || {}).doc)
        if (doc.length > 0) {
            lines.push('')
            var wrapped = SRTU_wrap(doc, 19)
            for (var i8 = 0; i8 < wrapped.length; i8++) lines.push('§8' + wrapped[i8])
        }

        detailTitle.setText('§b' + SRTU_short(node.id, 18))
        detailBody.setText(lines.join('\n'))
    }

    // ---- 左列：格子 -----------------------------------------------------
    // 格子用 Label 而不是 UIElement：挖雷界面里 Label 的 mouseDown 是验证过的，
    // UIElement 收不收鼠标事件没试过。
    var makeNode = function (node) {
        var mark = SRTU_mark(node, unlocks)
        var bg = 858008112
        var border = -11906984
        if (mark[0] === '§a✔') {
            bg = 858417978
            border = -10835862
        } else if (mark[0] === '§e▶') {
            bg = 862673450
            border = -3562969
        }
        var box = new Label()
        box.setText(mark[0] + ' §f' + SRTU_short(node.id, 8))
        box.lss('width', NODE_W, INLINE)
        box.lss('height', NODE_H, INLINE)
        box.lss('padding-all', 3, INLINE)
        box.style(function (s) {
            s.background(SDFRectTexture.of(bg).setRadius(3).setBorderColor(border).setStroke(1))
            try {
                var tips = SRTU_tips(node, unlocks)
                if (tips.length > 0) s.tooltips(tips)
            } catch (eTip) { }
        })
        try {
            box.addEventListener('mouseDown', function (e) { showDetail(node) })
        } catch (eClick) {
            console.warn('[SRTU] 节点点击监听失败: ' + eClick)
        }
        return box
    }

    var runH = (model.running && model.running.length > 0) ? (10 + model.running.length * (NODE_H - 2) + 6) : 0
    var leftH = 12 + 4 + 10 + 4 + runH + 4 + 1 + 4 + pagesH + 8
    var totalW = PAD * 2 + treeW + 8 + DETAIL_W
    var totalH = PAD * 2 + Math.max(leftH, 160) + 8

    var root = new UIElement()
    root.lss('width', totalW, INLINE)
    root.lss('height', totalH, INLINE)
    root.lss('flex-direction', FlexDirection.ROW, INLINE)
    root.lss('padding-all', PAD, INLINE)
    root.lss('gap-all', 8, INLINE)
    root.style(function (s) {
        s.background(SDFRectTexture.of(-267381734).setRadius(6).setBorderColor(-12103588).setStroke(1))
    })

    var left = new UIElement()
    left.lss('width', treeW, INLINE)
    left.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    left.lss('gap-all', 4, INLINE)
    root.addChild(left)

    left.addChild(SRTU_mkLabel(Label, '§b§l溯洄研究终端'))
    var prog = model.noData
        ? ('§7节点 §f' + model.total + ' §8· 进度待同步')
        : ('§7已完成 §f' + model.done + '§7/§f' + model.total)
    left.addChild(SRTU_mkLabel(Label, prog))

    if (model.running && model.running.length > 0) {
        left.addChild(SRTU_mkLabel(Label, '§6进行中 §7' + model.running.length + ' 条'))
        for (var r1 = 0; r1 < model.running.length; r1++) {
            var job = model.running[r1]
            var jrow = new UIElement()
            jrow.lss('width', 'stretch', INLINE)
            jrow.lss('padding-all', 2, INLINE)
            jrow.style(function (s) {
                s.background(SDFRectTexture.of(776616474).setRadius(3))
            })
            jrow.addChild(SRTU_mkLabel(Label, '§e- §f' + SRTU_short(job.id, 16) + ' §7' + SRTU_fmtLeft(job.left)))
            left.addChild(jrow)
        }
    }

    var sep = new UIElement()
    sep.lss('width', 'stretch', INLINE)
    sep.lss('height', 1, INLINE)
    sep.style(function (s) {
        s.background(SDFRectTexture.of(-13024949))
    })
    left.addChild(sep)

    for (var p2 = 0; p2 < pages.length; p2++) {
        var page2 = pages[p2]
        var ptitle = SRTU_lang(SRTU_pageTitles[page2.id])
        left.addChild(SRTU_mkLabel(Label, '§8§l' + (ptitle.length > 0 ? ptitle : page2.id)))

        for (var r2 = 0; r2 < page2.ys.length; r2++) {
            var rowEl = new UIElement()
            rowEl.lss('width', treeW, INLINE)
            rowEl.lss('height', NODE_H, INLINE)
            rowEl.lss('flex-direction', FlexDirection.ROW, INLINE)

            for (var c2 = 0; c2 < page2.xs.length; c2++) {
                var slot = findAt(page2, c2, r2)
                if (slot) {
                    rowEl.addChild(makeNode(slot.node))
                } else {
                    var blank = new UIElement()
                    blank.lss('width', NODE_W, INLINE)
                    blank.lss('height', NODE_H, INLINE)
                    rowEl.addChild(blank)
                }

                if (c2 < page2.xs.length - 1) {
                    var link = new UIElement()
                    link.lss('width', GAP_W, INLINE)
                    link.lss('height', NODE_H, INLINE)
                    if (hasLink(page2, c2, r2)) {
                        link.lss('padding-top', NODE_H / 2 - 1, INLINE)
                        var bar = new UIElement()
                        bar.lss('width', GAP_W, INLINE)
                        bar.lss('height', 1, INLINE)
                        bar.style(function (s) {
                            s.background(SDFRectTexture.of(-9532518))
                        })
                        link.addChild(bar)
                    }
                    rowEl.addChild(link)
                }
            }
            left.addChild(rowEl)
        }
    }

    var detail = new UIElement()
    detail.lss('width', DETAIL_W, INLINE)
    detail.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    detail.lss('padding-all', 6, INLINE)
    detail.lss('gap-all', 4, INLINE)
    detail.style(function (s) {
        s.background(SDFRectTexture.of(772806688).setRadius(4).setBorderColor(-11906984).setStroke(1))
    })
    detail.addChild(detailTitle)
    detail.addChild(detailBody)
    root.addChild(detail)

    // 默认选中第一条"可研究"的节点
    var pick = null
    for (var i9 = 0; i9 < SRTU_order.length; i9++) {
        var cand = SRTU_nodes[SRTU_order[i9]]
        if (!cand) continue
        if (!pick && SRTU_ready(cand, unlocks) && !SRTU_done(cand, unlocks)) pick = cand
    }
    if (!pick && SRTU_order.length > 0) pick = SRTU_nodes[SRTU_order[0]]
    if (pick) showDetail(pick)

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
                    plain.push('§6进行中 ' + model.running.length + ' 条')
                    for (var q = 0; q < model.running.length; q++) {
                        plain.push('§e- §f' + model.running[q].id + ' §7' + SRTU_fmtLeft(model.running[q].left))
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
