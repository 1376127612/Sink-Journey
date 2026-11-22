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
// 布局（2026-11 改版：原界面 76×20 格子 + 216px 详情，字全被截断）：
//   A 普通视图（纵向三段）
//     1) 标题栏：标题 + 「展开科技树」按钮
//     2) 状态行：进度 / 研究网络 / 进行中的研究
//     3) 科技树缩略带：按时代（页面）分行，每行是节点小卡，点卡看详情
//     4) 详情主体：占满剩余高度的大块文字（成本 / 前置 / 产出 / 解锁 / 说明）
//   B 完整树视图（由按钮切换）：按节点 JSON 的 ui.x / ui.y 还原网格并画前置连线，
//     整页铺满窗口；点任一节点会自动收起并跳到它的详情。
//   两种视图在构建时一次性建好，切换只改 display，不动窗口尺寸。
//
// 文字尺寸（反编译 TextElement 确认）：
//   TextStyle.fontSize 的单位是像素，原版字号是 9；绘制缩放 = fontSize / 9，
//   行高 = fontSize + lineSpacing，整块文字高度 = 行数 × (fontSize + lineSpacing) - lineSpacing。
//   所以这里用 fontSize 直接把字放大，并用原版 Font.width 量出像素宽度自己折行，
//   不再按"每行 19 个字"硬切。
//
// 布局 API（从 ldlib2 jar 反编译确认）：
//   UIElement.layout(Consumer<LayoutStyle>)  -> flexbox（Taffy/Yoga）
//   UIElement.style(Consumer<BasicStyle>)    -> background(SDFRectTexture)
//   SDFRectTexture.of(argb).setRadius(n).setBorderColor(argb).setStroke(n)
//   TextElement.setText(String) 支持 \n 分行与 § 颜色码
//   UI.of(element) + ModularUI.of(ui, player) 定窗口尺寸
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
    var map = { kinetic: '机动', steam: '蒸汽', ember: '余烬', radiance: '星辉', electric: '电力', end: '末地' }
    return map[String(era)] ? map[String(era)] : String(era)
}

// 节点状态优先用服务端快照算好的（SRTU_states，来自 terminal.js 的 states 字段），
// 没有快照时才在本地按 requires 推一遍。两条路径的结果必须一致，
// 但规则只有服务端那一处是权威：以后改解锁规则不用再同步客户端。
var SRTU_states = null

var SRTU_stateOf = function (node, unlocks) {
    if (SRTU_states) {
        var known = SRTU_states[String(node.id)]
        if (known) return known
    }
    if (SRTU_done(node, unlocks)) return 'done'
    if (SRTU_ready(node, unlocks)) return 'ready'
    return 'locked'
}

// 节点状态 -> [符号, 状态文本]
var SRTU_mark = function (node, unlocks) {
    var st = SRTU_stateOf(node, unlocks)
    if (st === 'done') return ['§a✔', '已完成']
    if (st === 'ready') return ['§e▶', '可研究']
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
        var net = null
        var netRaw = String(tag.getString('net') || '')
        if (netRaw.length > 0) {
            if (netRaw === '0') {
                net = { online: false, compute: 0, capacity: 0, running: 0 }
            } else {
                var nf = netRaw.split('|')
                if (nf.length >= 4) {
                    net = {
                        online: true,
                        compute: Number(nf[1]) || 0,
                        capacity: Number(nf[2]) || 0,
                        running: Number(nf[3]) || 0
                    }
                }
            }
        }
        var states = null
        var stRaw = String(tag.getString('states') || '')
        if (stRaw.length > 0) {
            states = {}
            var stItems = stRaw.split(';')
            for (var si = 0; si < stItems.length; si++) {
                var pair = String(stItems[si]).split('=')
                if (pair.length === 2 && pair[0].length > 0) states[pair[0]] = pair[1]
            }
        }
        SRTU_states = states
        SRTU_remote = { unlocks: unlocks, running: running, net: net, states: states, at: Date.now() }
    } catch (e) {
        console.warn('[SRTU] 状态快照解析失败（退回本地读取）: ' + e)
    }
})

// 汇总：noData=true 表示读不到服务端状态（专用服且包还没到）
var SRTU_model = function (server) {
    var unlocks = null
    var running = []
    var net = null
    if (SRTU_remote && (Date.now() - SRTU_remote.at) < SRTU_REMOTE_TTL_MS) {
        unlocks = SRTU_remote.unlocks
        running = SRTU_remote.running
        net = SRTU_remote.net || null
    } else {
        SRTU_states = null
        unlocks = SRTU_unlocks(server)
        if (unlocks !== null) running = SRTU_jobs(server)
    }
    if (unlocks === null) {
        var info = { noData: true, done: 0, total: 0, rows: [], running: [], unlocks: {}, net: net }
        if (SRTU_nodes && SRTU_order.length > 0) {
            for (var i = 0; i < SRTU_order.length; i++) {
                var n0 = SRTU_nodes[SRTU_order[i]]
                info.rows.push({ line: '§f' + SRTU_nodeName(n0) + ' §8· ' + SRTU_eraName(n0.era), tips: [] })
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
            if (SRTU_stateOf(n, unlocks) === 'done') done++
            rows.push({ line: st[0] + ' §f' + SRTU_nodeName(n) + ' §8· ' + SRTU_eraName(n.era), tips: SRTU_tips(n, unlocks) })
        }
    }
    return { noData: false, done: done, total: rows.length, rows: rows, running: running, unlocks: unlocks, net: net }
}

// ---- 文本度量与折行 ------------------------------------------
// 字号一律按"像素"理解：原版 = 9。SRTU_units 返回字号 9 下的像素宽度
// （§ 颜色码不计宽），SRTU_px 再按目标字号换算。

var SRTU_mcClass = null
var SRTU_mcInst = null
var SRTU_fontObj = null

var SRTU_mc = function () {
    if (SRTU_mcInst !== null) return SRTU_mcInst
    if (SRTU_mcClass === null) {
        try {
            SRTU_mcClass = Java.loadClass('net.minecraft.client.Minecraft')
        } catch (e0) {
            SRTU_mcClass = false
        }
    }
    if (SRTU_mcClass === false) return null
    try {
        SRTU_mcInst = SRTU_mcClass.getInstance()
    } catch (e1) {
        SRTU_mcInst = null
    }
    return SRTU_mcInst
}

var SRTU_font = function () {
    if (SRTU_fontObj !== null) return SRTU_fontObj === false ? null : SRTU_fontObj
    var mc = SRTU_mc()
    if (!mc) {
        SRTU_fontObj = false
        return null
    }
    try {
        SRTU_fontObj = mc.font
    } catch (e) {
        SRTU_fontObj = false
    }
    if (!SRTU_fontObj) {
        SRTU_fontObj = false
        return null
    }
    return SRTU_fontObj
}

var SRTU_units = function (s) {
    var text = String(s === null || s === undefined ? '' : s)
    var f = SRTU_font()
    if (f) {
        try {
            return Number(f.width(text))
        } catch (e0) { }
    }
    // 拿不到客户端字体时的保守估计：CJK 9px、其余 6px
    var w = 0
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i)
        if (ch === '§') {
            i += 1
            continue
        }
        w += text.charCodeAt(i) > 0x2e7f ? 9 : 6
    }
    return w
}

var SRTU_px = function (s, fs) {
    return SRTU_units(s) * (fs > 0 ? fs : 9) / 9
}

// § 与紧跟的格式码绑成一整块（宽度 0），其余每字符一块：折行时不会把「§a」劈成两半
var SRTU_chunks = function (s) {
    var text = String(s === null || s === undefined ? '' : s)
    var out = []
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i)
        if (ch === '§' && i + 1 < text.length) {
            out.push({ t: ch + text.charAt(i + 1), w: 0 })
            i += 1
        } else {
            out.push({ t: ch, w: SRTU_units(ch) })
        }
    }
    return out
}

// 行首禁则：这些标点不放到下一行行首
var SRTU_NO_HEAD = '，。、；：！？）」』】》,.;:!?)'

var SRTU_wrapUnits = function (text, maxUnits) {
    var out = []
    var chunks = SRTU_chunks(text)
    var line = ''
    var lineW = 0
    for (var i = 0; i < chunks.length; i++) {
        var ck = chunks[i]
        if (lineW + ck.w > maxUnits && lineW > 0) {
            if (SRTU_NO_HEAD.indexOf(ck.t) >= 0 && lineW + ck.w <= maxUnits + 9) {
                out.push(line + ck.t)
                line = ''
                lineW = 0
                continue
            }
            out.push(line)
            line = ''
            lineW = 0
        }
        line += ck.t
        lineW += ck.w
    }
    if (line.length > 0) out.push(line)
    if (out.length === 0) out.push('')
    return out
}

// 按像素宽度折行（fs 为字号），文本里原有的 \n 当作硬换行
var SRTU_wrap = function (text, maxPx, fs) {
    var lim = maxPx * 9 / (fs > 0 ? fs : 9)
    var paras = String(text === null || text === undefined ? '' : text).split('\n')
    var out = []
    for (var i = 0; i < paras.length; i++) {
        var rows = SRTU_wrapUnits(paras[i], lim)
        for (var k = 0; k < rows.length; k++) out.push(rows[k])
    }
    return out
}

// 截断到像素宽度（装得下就原样返回），末尾加省略号
var SRTU_elide = function (text, maxPx, fs) {
    var full = String(text === null || text === undefined ? '' : text)
    var lim = maxPx * 9 / (fs > 0 ? fs : 9)
    var chunks = SRTU_chunks(full)
    var total = 0
    for (var t = 0; t < chunks.length; t++) total += chunks[t].w
    if (total <= lim) return full
    var w = 0
    var out = ''
    for (var i = 0; i < chunks.length; i++) {
        if (w + chunks[i].w > lim - 11) break
        out += chunks[i].t
        w += chunks[i].w
    }
    return out + '…'
}

var SRTU_short = function (id, max) {
    var s = String(id)
    var at = s.indexOf(':')
    if (at >= 0) s = s.substring(at + 1)
    var lim = max || 10
    if (s.length > lim) s = s.substring(0, lim)
    return s
}

var SRTU_lang = function (key) {
    if (!key) return ''
    try {
        var t = String(Text.translatable(String(key)).getString())
        if (t.length > 0 && t !== String(key)) return t
    } catch (e) { }
    return ''
}

// 节点显示名：lang 里的 research.node.<短 id>.name，没有就退回短 id
var SRTU_nodeName = function (node, max) {
    var shortId = String(node.id).split(':').pop()
    var name = SRTU_lang('research.node.' + shortId + '.name')
    var out = name.length > 0 ? name : SRTU_short(node.id, 14)
    var lim = max || 0
    if (lim > 0 && out.length > lim) out = out.substring(0, lim)
    return out
}

// 物品中文名；拿不到就退回注册 id 的短名
var SRTU_itemName = function (id) {
    try {
        var name = String(Item.of(String(id)).getHoverName().getString())
        if (name.length > 0 && name !== String(id)) return name
    } catch (e) { }
    return SRTU_short(id, 22)
}

// ---- 界面构建：三段式（标题 / 科技树缩略带 / 详情主体）+ 完整树视图 ----
// 只用 LDLib2 里已验证可用的 API：lss(...) 写布局、style(...) 写背景与 tooltip、
// Label 收 mouseDown、Button.setOnClick、setText 改文本。整段仍在外层 try/catch 里，
// 出错退纯文本版。
var SRTU_openStyled = function (ev, model) {
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var Button = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Button')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
    var SDFRectTexture = Java.loadClass('com.lowdragmc.lowdraglib2.gui.texture.SDFRectTexture')
    var FlexDirection = Java.loadClass('dev.vfyjxf.taffy.style.FlexDirection')
    var StyleOrigin = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.style.StyleOrigin')
    var INLINE = StyleOrigin.INLINE

    // 字号：原版 9 为基准，这里整体放大（fontSize 的单位是像素）
    var FS_TITLE = 18
    var FS_BODY = 13
    var FS_META = 12
    var LH_TITLE = 19
    var LH_BODY = 14
    var LH_META = 13

    var PAD = 10
    var GAP = 6
    var HEADER_H = 20
    var CHIP_H = 20
    var CHIP_GAP = 5
    var PANEL_PAD = 7
    var PAGE_LABEL_W = 76

    // 颜色（有符号 ARGB：Rhino 会把超过 int 上限的字面量当 double）
    var C_PANEL = 772806688
    var C_BORDER = -11906984
    var C_LINK = -9532518

    var hasData = !model.noData
    var unlocks = model.unlocks || {}

    // ---- 窗口尺寸：按内容算，但不能顶出屏幕 ----
    var sw = 640
    var sh = 400
    try {
        var win = SRTU_mc().getWindow()
        sw = Number(win.getGuiScaledWidth())
        sh = Number(win.getGuiScaledHeight())
    } catch (eWin) { }
    var W = Math.min(700, Math.max(380, sw - 40))
    var innerW = W - PAD * 2

    var mkLabel = function (text, fs) {
        var lab = new Label()
        lab.setText(String(text))
        if (fs && fs !== 9) {
            try {
                lab.textStyle(function (s) { s.fontSize(fs) })
            } catch (e0) { }
        }
        return lab
    }

    var fill = function (el) {
        el.lss('width', 'stretch', INLINE)
    }

    // ---- 节点按页面（时代）分组，并算出完整树视图要用的网格坐标 ----
    var pageList = []
    var pageIndex = {}
    var maxCols = 1
    var totalRows = 0
    for (var i0 = 0; i0 < SRTU_order.length; i0++) {
        var nd0 = SRTU_nodes[SRTU_order[i0]]
        if (!nd0) continue
        var pid0 = String(nd0.page || 'default')
        if (!pageIndex[pid0]) {
            pageIndex[pid0] = { id: pid0, title: SRTU_lang(SRTU_pageTitles[pid0]), nodes: [], xs: [], ys: [], cells: [] }
            pageList.push(pageIndex[pid0])
        }
        pageIndex[pid0].nodes.push(nd0)
    }
    for (var p0 = 0; p0 < pageList.length; p0++) {
        var pg0 = pageList[p0]
        for (var a0 = 0; a0 < pg0.nodes.length; a0++) {
            var ui0 = pg0.nodes[a0].ui || {}
            var nx = Number(ui0.x) || 0
            var ny = Number(ui0.y) || 0
            if (pg0.xs.indexOf(nx) < 0) pg0.xs.push(nx)
            if (pg0.ys.indexOf(ny) < 0) pg0.ys.push(ny)
        }
        pg0.xs.sort(function (m, n) { return m - n })
        pg0.ys.sort(function (m, n) { return m - n })
        for (var b0 = 0; b0 < pg0.nodes.length; b0++) {
            var ui1 = pg0.nodes[b0].ui || {}
            pg0.cells.push({
                node: pg0.nodes[b0],
                col: pg0.xs.indexOf(Number(ui1.x) || 0),
                row: pg0.ys.indexOf(Number(ui1.y) || 0)
            })
        }
        if (pg0.xs.length > maxCols) maxCols = pg0.xs.length
        totalRows += pg0.ys.length
    }

    // ---- 详情内容（按像素宽度折行） ----
    var bodyWrapW = innerW - PANEL_PAD * 2 - 2

    var reqName = function (id) {
        var n = SRTU_nodes[String(id)]
        return n ? SRTU_nodeName(n) : SRTU_short(id, 18)
    }

    // maxLines > 0 时把内容压到这么多行（末行换成省略号），保证窗口装得下
    var buildDetail = function (node, maxLines) {
        var mark = hasData ? SRTU_mark(node, unlocks) : ['§8·', '待同步']
        var lines = []

        var section = function (name, rows) {
            if (rows.length === 0) return
            if (lines.length > 0) lines.push('')
            lines.push('§8§l' + name)
            for (var i = 0; i < rows.length; i++) lines.push(rows[i])
        }

        var inputs = node.inputs || {}
        var cost = []
        var items = inputs.items || []
        for (var i1 = 0; i1 < items.length; i1++) {
            cost.push('§7· §f' + SRTU_itemName(items[i1].id) + ' §7×§f' + items[i1].count)
        }
        var fluids = inputs.fluids || []
        for (var i2 = 0; i2 < fluids.length; i2++) {
            cost.push('§7· §f' + SRTU_short(fluids[i2].id, 24) + ' §7§f' + fluids[i2].amount + ' mB')
        }
        if (inputs.energy) cost.push('§7· 能量 §f' + inputs.energy + ' FE')
        if (inputs.compute) cost.push('§7· 算力 §f' + inputs.compute)
        if (node.duration) cost.push('§7· 时长 §f' + Math.round(Number(node.duration) / 20) + ' 秒')
        section('成本', cost)

        var req = (node.requires || {}).and || (node.requires || {}).or || []
        var pre = []
        for (var i3 = 0; i3 < req.length; i3++) pre.push('§7· §f' + reqName(req[i3]))
        section('前置', pre)

        var out = []
        var outs = (node.outputs || {}).items || []
        for (var i4 = 0; i4 < outs.length; i4++) {
            out.push('§7· §f' + SRTU_itemName(outs[i4].id) + ' §7×§f' + outs[i4].count)
        }
        section('产出', out)

        var keys = node.unlock || []
        if (keys.length > 0) section('解锁', ['§7· §f' + keys.join('§7、§f')])

        var doc = SRTU_lang((node.ui || {}).doc)
        if (doc.length > 0) {
            var rows = SRTU_wrap(doc, bodyWrapW, FS_BODY)
            var text = []
            for (var i5 = 0; i5 < rows.length; i5++) text.push('§7' + rows[i5])
            section('说明', text)
        }

        if (maxLines > 0 && lines.length > maxLines) {
            lines = lines.slice(0, maxLines)
            lines[maxLines - 1] = '§8…'
        }
        var meta = '§7' + SRTU_eraName(node.era) + ' §8· '
        meta += hasData ? (mark[0] + ' §7' + mark[1]) : '§7状态待同步'
        return { title: SRTU_nodeName(node), meta: meta, lines: lines }
    }

    // 默认选中第一条"可研究"的节点，没有就取第一个
    var pick = null
    for (var i6 = 0; i6 < SRTU_order.length; i6++) {
        var cand = SRTU_nodes[SRTU_order[i6]]
        if (!cand) continue
        if (hasData && SRTU_stateOf(cand, unlocks) === 'ready') {
            pick = cand
            break
        }
    }
    if (!pick && SRTU_order.length > 0) pick = SRTU_nodes[SRTU_order[0]]

    // ---- 状态行 ----
    var statusLines = []
    var progLine = model.noData
        ? ('§7节点 §f' + SRTU_order.length + ' §8· §7状态待同步')
        : ('§7已完成 §f' + model.done + '§7 / §f' + model.total)
    if (model.net) {
        progLine += model.net.online
            ? ('   §8|   §7网络 §f在线 §8算力§f' + model.net.compute +
                ' §8并发§f' + model.net.running + '/' + (model.net.capacity > 0 ? model.net.capacity : 1))
            : '   §8|   §8研究网络离线'
    }
    statusLines.push(progLine)
    if (model.running && model.running.length > 0) {
        var jobs = []
        for (var r0 = 0; r0 < model.running.length; r0++) {
            jobs.push('§e' + SRTU_nodeName(SRTU_byRecipe(model.running[r0].id) || { id: model.running[r0].id }) +
                ' §7' + SRTU_fmtLeft(model.running[r0].left))
        }
        statusLines.push('§6进行中 §7' + jobs.join(' §8| §7'))
    }
    var statusH = statusLines.length * LH_META - 1

    // ---- 科技树缩略带：每个时代一行，节点小卡按宽度自动换行 ----
    var chipMaxW = innerW - PANEL_PAD * 2 - PAGE_LABEL_W - 5
    var bandPages = []
    var bandH = 0
    for (var p1 = 0; p1 < pageList.length; p1++) {
        var pg1 = pageList[p1]
        var rows1 = []
        var cur = []
        var curW = 0
        for (var c1 = 0; c1 < pg1.nodes.length; c1++) {
            var node1 = pg1.nodes[c1]
            var mark1 = hasData ? SRTU_mark(node1, unlocks)[0] : '§8·'
            var text1 = mark1 + ' §f' + SRTU_nodeName(node1)
            var w1 = Math.round(SRTU_px(text1, FS_META)) + 12
            if (w1 > 170) w1 = 170
            if (w1 < 52) w1 = 52
            if (cur.length > 0 && curW + CHIP_GAP + w1 > chipMaxW) {
                rows1.push(cur)
                cur = []
                curW = 0
            }
            cur.push({
                node: node1,
                text: SRTU_elide(text1, w1 - 8, FS_META),
                tips: SRTU_tips(node1, unlocks),
                state: hasData ? SRTU_stateOf(node1, unlocks) : 'unknown',
                w: w1
            })
            curW += (cur.length > 1 ? CHIP_GAP : 0) + w1
        }
        if (cur.length > 0) rows1.push(cur)
        bandPages.push({ id: pg1.id, title: pg1.title, rows: rows1 })
        bandH += rows1.length * CHIP_H + (rows1.length - 1) * 4
        if (p1 < pageList.length - 1) bandH += 5
    }
    if (pageList.length === 0) bandH = CHIP_H
    var treeH = PANEL_PAD * 2 + LH_META + 4 + bandH

    // ---- 详情面板高度（受屏幕高度上限约束） ----
    var fixedDetailH = PANEL_PAD * 2 + LH_TITLE + 4 + LH_META + 6
    var headBlockH = HEADER_H + GAP + statusH + GAP + treeH + GAP
    var capH = Math.max(260, sh - 24)
    var bodyAvail = capH - (PAD * 2 + headBlockH + fixedDetailH)
    var maxBodyLines = Math.max(3, Math.floor((bodyAvail + 1) / LH_BODY))

    var detail = pick ? buildDetail(pick, maxBodyLines)
        : { title: '暂无节点', meta: '§8未加载到研究节点配置', lines: ['§8检查 kubejs/config/sinkresearch/manifest.json'] }

    // 详情面板按"最长的那条节点说明"定高：切节点时不会因为内容变长而顶出面板
    var detailCache = {}
    var detailOf = function (node) {
        var key = String(node.id)
        if (!detailCache[key]) detailCache[key] = buildDetail(node, maxBodyLines)
        return detailCache[key]
    }
    var longestLines = detail.lines.length
    for (var i7 = 0; i7 < SRTU_order.length; i7++) {
        var node7 = SRTU_nodes[SRTU_order[i7]]
        if (!node7) continue
        var rows7 = detailOf(node7).lines.length
        if (rows7 > longestLines) longestLines = rows7
    }
    var bodyH = longestLines * LH_BODY - 1
    var detailH = fixedDetailH + bodyH

    var H = PAD * 2 + headBlockH + detailH
    if (H > capH) H = capH

    // ---- 详情控件（先建出来，切换节点时只改文本） ----
    var detailTitle = mkLabel('§b—', FS_TITLE)
    detailTitle.lss('height', LH_TITLE, INLINE)
    var detailMeta = mkLabel('§8—', FS_META)
    detailMeta.lss('height', LH_META, INLINE)
    var detailBody = mkLabel('', FS_BODY)
    fill(detailBody)
    detailBody.lss('height', bodyH, INLINE)

    var showDetail = function (node) {
        var d = detailOf(node)
        detailTitle.setText('§b§l' + d.title)
        detailMeta.setText(d.meta)
        detailBody.setText(d.lines.join('\n'))
        var h = d.lines.length * LH_BODY - 1
        detailBody.lss('height', h, INLINE)
    }

    // 普通视图 / 完整树视图切换：两个视图构建时都建好，切换只改 display，
    // 窗口尺寸不变，所以没有重排风险
    var setMode = function (expanded) {
        try {
            normalView.setDisplay(!expanded)
            treeView.setDisplay(expanded)
        } catch (e0) {
            try {
                normalView.lss('display', expanded ? 'none' : 'flex', INLINE)
                treeView.lss('display', expanded ? 'flex' : 'none', INLINE)
            } catch (e1) {
                console.warn('[SRTU] 视图切换失败: ' + e1)
            }
        }
    }

    // 状态配色：已完成 / 可研究 / 其余
    var chipColors = function (state) {
        if (state === 'done') return { bg: 858417978, border: -10835862 }
        if (state === 'ready') return { bg: 862673450, border: -3562969 }
        return { bg: 858008112, border: C_BORDER }
    }

    // 缩略带里的小卡
    var makeChip = function (chip) {
        var col = chipColors(chip.state)
        var box = mkLabel(chip.text, FS_META)
        box.lss('width', chip.w, INLINE)
        box.lss('height', CHIP_H, INLINE)
        box.lss('padding-all', 3, INLINE)
        box.style(function (s) {
            s.background(SDFRectTexture.of(col.bg).setRadius(3).setBorderColor(col.border).setStroke(1))
            try {
                if (chip.tips.length > 0) s.tooltips(chip.tips)
            } catch (eTip) { }
        })
        try {
            box.addEventListener('mouseDown', function (e) { showDetail(chip.node) })
        } catch (eClick) {
            console.warn('[SRTU] 小卡点击监听失败: ' + eClick)
        }
        return box
    }

    // 完整树里的网格节点：点一下看详情并收起，回到普通视图
    var makeCell = function (node, cellW, cellH) {
        var state = hasData ? SRTU_stateOf(node, unlocks) : 'unknown'
        var col = chipColors(state)
        var mark = hasData ? SRTU_mark(node, unlocks)[0] : '§8·'
        var cell = mkLabel(SRTU_elide(mark + ' §f' + SRTU_nodeName(node), cellW - 10, FS_META), FS_META)
        cell.lss('width', cellW, INLINE)
        cell.lss('height', cellH, INLINE)
        cell.lss('padding-all', 2, INLINE)
        cell.style(function (s) {
            s.background(SDFRectTexture.of(col.bg).setRadius(3).setBorderColor(col.border).setStroke(1))
            try {
                var tp = SRTU_tips(node, unlocks)
                if (tp.length > 0) s.tooltips(tp)
            } catch (eTip2) { }
        })
        try {
            cell.addEventListener('mouseDown', function (e) {
                showDetail(node)
                setMode(false)
            })
        } catch (eClick2) {
            console.warn('[SRTU] 网格点击监听失败: ' + eClick2)
        }
        return cell
    }

    // ---- 普通视图：标题栏 + 状态 + 缩略树 + 详情 ----
    var normalView = new UIElement()
    fill(normalView)
    normalView.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    normalView.lss('gap-all', GAP, INLINE)

    var header = new UIElement()
    fill(header)
    header.lss('height', HEADER_H, INLINE)
    header.lss('flex-direction', FlexDirection.ROW, INLINE)
    header.lss('gap-all', 8, INLINE)

    var titleLab = mkLabel('§b§l溯洄研究终端', FS_TITLE)
    titleLab.lss('height', LH_TITLE, INLINE)
    header.addChild(titleLab)
    var headerSpacer = new UIElement()
    headerSpacer.lss('width', 'stretch', INLINE)
    header.addChild(headerSpacer)

    var statusLab = mkLabel(statusLines.join('\n'), FS_META)
    fill(statusLab)
    statusLab.lss('height', statusH, INLINE)

    var treePanel = new UIElement()
    fill(treePanel)
    treePanel.lss('height', treeH, INLINE)
    treePanel.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    treePanel.lss('padding-all', PANEL_PAD, INLINE)
    treePanel.lss('gap-all', 4, INLINE)
    treePanel.style(function (s) {
        s.background(SDFRectTexture.of(C_PANEL).setRadius(4).setBorderColor(C_BORDER).setStroke(1))
    })
    var bandTitle = mkLabel('§8§l科技树', FS_META)
    bandTitle.lss('height', LH_META, INLINE)
    treePanel.addChild(bandTitle)

    for (var p2 = 0; p2 < bandPages.length; p2++) {
        var bp = bandPages[p2]
        var prow = new UIElement()
        fill(prow)
        prow.lss('flex-direction', FlexDirection.ROW, INLINE)
        prow.lss('gap-all', 5, INLINE)

        var ptitle = (bp.title.length > 0 ? bp.title : bp.id)
        var plab = mkLabel('§8' + SRTU_elide(ptitle, PAGE_LABEL_W - 4, FS_META), FS_META)
        plab.lss('width', PAGE_LABEL_W, INLINE)
        plab.lss('height', CHIP_H, INLINE)
        prow.addChild(plab)

        var pcol = new UIElement()
        fill(pcol)
        pcol.lss('flex-direction', FlexDirection.COLUMN, INLINE)
        pcol.lss('gap-all', 4, INLINE)

        for (var r1 = 0; r1 < bp.rows.length; r1++) {
            var rowEl = new UIElement()
            fill(rowEl)
            rowEl.lss('height', CHIP_H, INLINE)
            rowEl.lss('flex-direction', FlexDirection.ROW, INLINE)
            rowEl.lss('gap-all', CHIP_GAP, INLINE)

            var row = bp.rows[r1]
            for (var c2 = 0; c2 < row.length; c2++) {
                rowEl.addChild(makeChip(row[c2]))
            }
            pcol.addChild(rowEl)
        }
        prow.addChild(pcol)
        treePanel.addChild(prow)
    }

    var detailPanel = new UIElement()
    fill(detailPanel)
    detailPanel.lss('height', detailH, INLINE)
    detailPanel.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    detailPanel.lss('padding-all', PANEL_PAD, INLINE)
    detailPanel.lss('gap-all', 4, INLINE)
    detailPanel.style(function (s) {
        s.background(SDFRectTexture.of(C_PANEL).setRadius(4).setBorderColor(C_BORDER).setStroke(1))
    })
    var dHead = new UIElement()
    fill(dHead)
    dHead.lss('height', LH_TITLE, INLINE)
    dHead.lss('flex-direction', FlexDirection.ROW, INLINE)
    dHead.addChild(detailTitle)
    detailPanel.addChild(dHead)
    detailPanel.addChild(detailMeta)
    detailPanel.addChild(detailBody)

    normalView.addChild(header)
    normalView.addChild(statusLab)
    normalView.addChild(treePanel)
    normalView.addChild(detailPanel)

    // ---- 完整树视图：按 ui.x / ui.y 还原网格 + 前置连线 ----
    var treeView = new UIElement()
    fill(treeView)
    treeView.lss('height', H - PAD * 2, INLINE)
    treeView.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    treeView.lss('gap-all', GAP, INLINE)

    var tHeader = new UIElement()
    fill(tHeader)
    tHeader.lss('height', HEADER_H, INLINE)
    tHeader.lss('flex-direction', FlexDirection.ROW, INLINE)
    tHeader.lss('gap-all', 8, INLINE)
    tHeader.addChild(mkLabel('§b§l完整科技树', FS_TITLE))
    var tProg = mkLabel(progLine, FS_META)
    tProg.lss('height', LH_META, INLINE)
    tHeader.addChild(tProg)
    var tSpacer = new UIElement()
    tSpacer.lss('width', 'stretch', INLINE)
    tHeader.addChild(tSpacer)
    treeView.addChild(tHeader)

    var gridPanel = new UIElement()
    fill(gridPanel)
    gridPanel.lss('height', H - PAD * 2 - HEADER_H - GAP, INLINE)
    gridPanel.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    gridPanel.lss('padding-all', PANEL_PAD, INLINE)
    gridPanel.lss('gap-all', 5, INLINE)
    gridPanel.style(function (s) {
        s.background(SDFRectTexture.of(C_PANEL).setRadius(4).setBorderColor(C_BORDER).setStroke(1))
    })
    treeView.addChild(gridPanel)

    var gridW = innerW - PANEL_PAD * 2
    var gridAvailH = H - PAD * 2 - HEADER_H - GAP - PANEL_PAD * 2 - pageList.length * (LH_META + 3)
    var cellH = 22
    if (totalRows > 0) {
        cellH = Math.floor((gridAvailH - (totalRows - 1) * 4) / totalRows)
        if (cellH > 26) cellH = 26
        if (cellH < 12) cellH = 12
    }
    var cellW = Math.floor((gridW - (maxCols - 1) * GAP) / Math.max(1, maxCols))
    if (cellW > 150) cellW = 150
    if (cellW < 56) cellW = 56

    var findCell = function (pg, c, r) {
        for (var i = 0; i < pg.cells.length; i++) {
            if (pg.cells[i].col === c && pg.cells[i].row === r) return pg.cells[i].node
        }
        return null
    }
    // 只有"左邻列同一行"的前置画线；跨行/跨列的前置在详情里列出来
    var hasLink = function (pg, c, r) {
        var child = findCell(pg, c + 1, r)
        if (!child) return false
        var list = (child.requires || {}).and || (child.requires || {}).or || []
        for (var i = 0; i < list.length; i++) {
            var par = findCell(pg, c, r)
            if (par && String(par.id) === String(list[i])) return true
        }
        return false
    }

    for (var p3 = 0; p3 < pageList.length; p3++) {
        var pg3 = pageList[p3]
        var pt = mkLabel('§8§l' + (pg3.title.length > 0 ? pg3.title : pg3.id), FS_META)
        pt.lss('height', LH_META, INLINE)
        gridPanel.addChild(pt)

        for (var r3 = 0; r3 < pg3.ys.length; r3++) {
            var gRow = new UIElement()
            fill(gRow)
            gRow.lss('height', cellH, INLINE)
            gRow.lss('flex-direction', FlexDirection.ROW, INLINE)
            gRow.lss('gap-all', GAP, INLINE)

            for (var c3 = 0; c3 < pg3.xs.length; c3++) {
                var cellNode = findCell(pg3, c3, r3)
                if (cellNode) {
                    gRow.addChild(makeCell(cellNode, cellW, cellH))
                } else {
                    var blank = new UIElement()
                    blank.lss('width', cellW, INLINE)
                    blank.lss('height', cellH, INLINE)
                    gRow.addChild(blank)
                }

                if (c3 < pg3.xs.length - 1) {
                    var gapEl = new UIElement()
                    gapEl.lss('width', GAP, INLINE)
                    gapEl.lss('height', cellH, INLINE)
                    if (hasLink(pg3, c3, r3)) {
                        gapEl.lss('padding-top', Math.max(0, Math.floor(cellH / 2)), INLINE)
                        var bar = new UIElement()
                        bar.lss('width', GAP, INLINE)
                        bar.lss('height', 1, INLINE)
                        bar.style(function (s) {
                            s.background(SDFRectTexture.of(C_LINK))
                        })
                        gapEl.addChild(bar)
                    }
                    gRow.addChild(gapEl)
                }
            }
            gridPanel.addChild(gRow)
        }
    }

    // ---- 切换按钮 ----
    var expandBtn = new Button()
    expandBtn.setText('展开科技树')
    expandBtn.lss('width', 74, INLINE)
    expandBtn.lss('height', 16, INLINE)
    expandBtn.setOnClick(function (e) {
        setMode(true)
    })
    header.addChild(expandBtn)

    var backBtn = new Button()
    backBtn.setText('收起')
    backBtn.lss('width', 44, INLINE)
    backBtn.lss('height', 16, INLINE)
    backBtn.setOnClick(function (e) {
        setMode(false)
    })
    tHeader.addChild(backBtn)

    // 点小卡 / 网格节点：看详情；完整树里点完自动收起
    // ---- 根节点 ----
    var root = new UIElement()
    root.lss('width', W, INLINE)
    root.lss('height', H, INLINE)
    root.lss('flex-direction', FlexDirection.COLUMN, INLINE)
    root.lss('padding-all', PAD, INLINE)
    root.lss('gap-all', GAP, INLINE)
    root.style(function (s) {
        s.background(SDFRectTexture.of(-267381734).setRadius(6).setBorderColor(-12103588).setStroke(1))
    })
    root.addChild(normalView)
    root.addChild(treeView)

    // 先写默认内容，再定死显示状态（完整树默认收起）
    if (pick) showDetail(pick)
    setMode(false)

    ev.modularUI = ModularUI.of(UI.of(root), ev.player)
}

// 兜底：样式版构建失败时退回纯文本版，保证一定能打开
var SRTU_openPlain = function (ev, lines) {
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')

    var width = 260
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
                if (model.net) {
                    plain.push(model.net.online
                        ? ('§7网络 在线 · 算力 ' + model.net.compute + ' · 并发 ' + model.net.running + '/' +
                            (model.net.capacity > 0 ? model.net.capacity : 1))
                        : '§8研究网络离线')
                }
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
