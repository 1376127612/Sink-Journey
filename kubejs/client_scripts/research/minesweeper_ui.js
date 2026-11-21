// ============================================================
// 扫雷小游戏 —— 客户端界面
// ------------------------------------------------------------
// 入口：/sweeper（服务端 server_scripts/research/minesweeper.js）
// 玩法：
//   左键揭开、右键插旗；第一次点击保证不踩雷。
//   每揭开一格都要等一次"扫描"，点"加速"在 ×1/×2/×4 之间切换，
//   扫描间隔 8/4/2 tick（连开的格子按队列逐格扫描）。
//
// 为什么逻辑放在客户端：玩法本身不产出物品；
// 通关时只发一条 /sweeper win 给服务端，
// 由 server_scripts/research/minesweeper.js 加速原始研究台当前进度。
//
// 本文件禁止使用 const/let（KubeJS 的 Rhino 顶层作用域共享）。
// ============================================================

var SM_UI_ID = 'sink_minesweeper'
var SM_W = 9
var SM_H = 9
var SM_MINES = 10
var SM_SPEEDS = [8, 4, 2]
var SM_SPEED_NAMES = ['×1', '×2', '×4']
var SM_UI_W = 190
var SM_UI_H = 260

// 1..8 的数字配色
var SM_COLORS = ['', '§9', '§a', '§c', '§5', '§6', '§b', '§f', '§8']

var SM_in = function (x, y) {
    return x >= 0 && y >= 0 && x < SM_W && y < SM_H
}

var SM_newState = function (cells) {
    var g = {
        cells: cells,
        mine: [], nums: [], reveal: [], flag: [], queued: [],
        started: false, over: false, win: false,
        flagCount: 0, revealedCount: 0,
        queue: [], cooldown: 0, ticks: 0, speed: 0,
        info: null, status: null
    }
    for (var y = 0; y < SM_H; y++) {
        var rm = [], rn = [], rr = [], rf = [], rq = []
        for (var x = 0; x < SM_W; x++) {
            rm.push(false)
            rn.push(0)
            rr.push(false)
            rf.push(false)
            rq.push(false)
        }
        g.mine.push(rm)
        g.nums.push(rn)
        g.reveal.push(rr)
        g.flag.push(rf)
        g.queued.push(rq)
    }
    return g
}

var SM_countMines = function (g, x, y) {
    var n = 0
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue
            var nx = x + dx
            var ny = y + dy
            if (SM_in(nx, ny) && g.mine[ny][nx]) n++
        }
    }
    return n
}

// 首点安全：第一次点开的格子及其 8 邻域不放雷
var SM_generate = function (g, sx, sy) {
    var placed = 0
    while (placed < SM_MINES) {
        var x = Math.floor(Math.random() * SM_W)
        var y = Math.floor(Math.random() * SM_H)
        if (Math.abs(x - sx) <= 1 && Math.abs(y - sy) <= 1) continue
        if (g.mine[y][x]) continue
        g.mine[y][x] = true
        placed++
    }
    for (var yy = 0; yy < SM_H; yy++) {
        for (var xx = 0; xx < SM_W; xx++) {
            g.nums[yy][xx] = SM_countMines(g, xx, yy)
        }
    }
}

var SM_paint = function (g, x, y) {
    var cell = g.cells[y][x]
    if (g.reveal[y][x]) {
        if (g.mine[y][x]) {
            cell.setText('§4✹')
        } else {
            var n = g.nums[y][x]
            cell.setText(n === 0 ? '§8·' : (SM_COLORS[n] + n))
        }
        return
    }
    cell.setText(g.flag[y][x] ? '§c⚑' : '§8▪')
}

var SM_hud = function (g) {
    if (g.info) {
        var secs = (g.ticks / 20).toFixed(1)
        g.info.setText('§7剩余雷 §f' + (SM_MINES - g.flagCount) +
            '   §7用时 §f' + secs + 's   §7扫描 §f' + SM_SPEED_NAMES[g.speed])
    }
    if (g.status && !g.over) {
        g.status.setText(g.started ? '§7左键揭开 · 右键插旗' : '§7点击任意格子开始')
    }
}

var SM_notifyWin = function (g) {
    var p = g.player
    if (!p) return
    try {
        // 不带斜杠；服务端 /sweeper win 负责加速原始研究台
        p.connection.sendCommand('sweeper win')
    } catch (e) {
        console.warn('[SM] 通关结算上报失败: ' + e)
    }
}

var SM_finish = function (g, win) {
    g.over = true
    g.win = win
    if (win) SM_notifyWin(g)
    for (var y = 0; y < SM_H; y++) {
        for (var x = 0; x < SM_W; x++) {
            if (win) {
                if (g.mine[y][x] && !g.flag[y][x]) {
                    g.flag[y][x] = true
                    g.flagCount++
                }
            } else if (g.mine[y][x]) {
                g.reveal[y][x] = true
            }
            SM_paint(g, x, y)
        }
    }
    if (g.status) {
        g.status.setText(win
            ? ('§a§l通关！§r §7用时 §f' + (g.ticks / 20).toFixed(1) + 's')
            : '§c§l踩雷了§r §7—— 点“重开”再来一局')
    }
    SM_hud(g)
}

var SM_revealOne = function (g, x, y) {
    if (g.over) return
    if (g.reveal[y][x] || g.flag[y][x]) return
    g.reveal[y][x] = true
    g.revealedCount++
    SM_paint(g, x, y)
    if (g.mine[y][x]) {
        SM_finish(g, false)
        return
    }
    // 空格向 8 邻域扩散，交给扫描队列逐格处理（加速才有意义）
    if (g.nums[y][x] === 0) {
        for (var dy = -1; dy <= 1; dy++) {
            for (var dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue
                var nx = x + dx
                var ny = y + dy
                if (!SM_in(nx, ny)) continue
                if (g.reveal[ny][nx] || g.flag[ny][nx] || g.mine[ny][nx]) continue
                if (g.queued[ny][nx]) continue
                g.queued[ny][nx] = true
                g.queue.push([nx, ny])
            }
        }
    }
    if (g.revealedCount >= SM_W * SM_H - SM_MINES) SM_finish(g, true)
}

var SM_onCell = function (g, x, y, button) {
    if (g.over) return
    if (button === 1) {
        // 右键：插旗 / 取消插旗
        if (g.reveal[y][x]) return
        g.flag[y][x] = !g.flag[y][x]
        g.flagCount += g.flag[y][x] ? 1 : -1
        SM_paint(g, x, y)
        SM_hud(g)
        return
    }
    if (g.flag[y][x] || g.reveal[y][x]) return
    if (!g.started) {
        SM_generate(g, x, y)
        g.started = true
    }
    SM_revealOne(g, x, y)
    g.cooldown = SM_SPEEDS[g.speed]
    SM_hud(g)
}

var SM_tick = function (g) {
    if (!g.started || g.over) return
    g.ticks++
    while (g.cooldown <= 0 && g.queue.length > 0) {
        var p = g.queue.shift()
        g.queued[p[1]][p[0]] = false
        SM_revealOne(g, p[0], p[1])
        if (g.over) break
        g.cooldown = SM_SPEEDS[g.speed]
    }
    if (g.cooldown > 0) g.cooldown--
    SM_hud(g)
}

var SM_reset = function (g) {
    for (var y = 0; y < SM_H; y++) {
        for (var x = 0; x < SM_W; x++) {
            g.mine[y][x] = false
            g.nums[y][x] = 0
            g.reveal[y][x] = false
            g.flag[y][x] = false
            g.queued[y][x] = false
            SM_paint(g, x, y)
        }
    }
    g.started = false
    g.over = false
    g.win = false
    g.flagCount = 0
    g.revealedCount = 0
    g.queue = []
    g.cooldown = 0
    g.ticks = 0
    SM_hud(g)
}

// ---- 界面构建 -------------------------------------------------

var SM_buildUI = function (ev) {
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var Button = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Button')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
    var SDFRectTexture = Java.loadClass('com.lowdragmc.lowdraglib2.gui.texture.SDFRectTexture')
    var Horizontal = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.data.Horizontal')
    var Vertical = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.data.Vertical')

    var cells = []
    var g = SM_newState(cells)
    g.player = ev.player

    // Rhino 会把 LayoutStyle 上"有 getter 同名但参数类型不匹配"的方法解析成
    // 属性对象（flexDirection 就是），直接调用会抛 not a function。
    // 统一改用 lss(字符串属性) 设布局，避开方法解析。
    var tryStyle = function (el, fn) {
        try {
            el.style(fn)
        } catch (e0) {
            console.warn('[SM] 样式设置失败: ' + e0)
        }
    }

    var makeCell = function (x, y) {
        var cell = new Label()
        cell.setText('§8▪')
        cell.lss('width', 18)
        cell.lss('height', 18)
        try {
            cell.textStyle(function (s) {
                s.textAlignHorizontal(Horizontal.CENTER)
                s.textAlignVertical(Vertical.CENTER)
            })
        } catch (e1) {
            console.warn('[SM] 文本对齐设置失败: ' + e1)
        }
        tryStyle(cell, function (s) {
            // 0xF0202429：Rhino 会把超过 int 上限的字面量当 double，
            // 转 int 直接抛错，这里写等值的负数（有符号 ARGB）
            s.background(SDFRectTexture.of(-266329047).setRadius(2))
        })
        cell.addEventListener('mouseDown', function (e) {
            SM_onCell(g, x, y, e.button)
        })
        return cell
    }

    var root = new UIElement()
    // 宽高必须显式写死：ModularUI.init 在没有 dynamicSize 时
    // 只从 root 的 WIDTH/HEIGHT 取窗口尺寸，缺 height 会得到 0
    root.lss('width', SM_UI_W)
    root.lss('height', SM_UI_H)
    root.lss('flex-direction', 'column')
    root.lss('padding-all', 6)
    root.lss('gap-all', 2)
    tryStyle(root, function (s) {
        // 0xF010141A / 0xFF47505C 的有符号写法
        s.background(SDFRectTexture.of(-267381734).setRadius(6).setBorderColor(-12103588).setStroke(1))
    })

    var title = new Label()
    title.setText('§b§l扫雷')
    title.lss('width', 'stretch')
    root.addChild(title)

    var info = new Label()
    info.lss('width', 'stretch')
    root.addChild(info)
    g.info = info

    for (var y = 0; y < SM_H; y++) {
        var row = new UIElement()
        row.lss('flex-direction', 'row')
        row.lss('gap-all', 2)
        g.cells.push([])
        for (var x = 0; x < SM_W; x++) {
            var cell = makeCell(x, y)
            g.cells[y].push(cell)
            row.addChild(cell)
        }
        root.addChild(row)
    }

    var status = new Label()
    status.lss('width', 'stretch')
    root.addChild(status)
    g.status = status

    var bar = new UIElement()
    bar.lss('flex-direction', 'row')
    bar.lss('gap-all', 4)

    var accel = new Button()
    accel.setText('加速 ' + SM_SPEED_NAMES[0])
    accel.lss('width', 64)
    accel.lss('height', 16)
    accel.setOnClick(function () {
        g.speed = (g.speed + 1) % SM_SPEEDS.length
        accel.setText('加速 ' + SM_SPEED_NAMES[g.speed])
        SM_hud(g)
    })
    bar.addChild(accel)

    var again = new Button()
    again.setText('重开')
    again.lss('width', 48)
    again.lss('height', 16)
    again.setOnClick(function () {
        SM_reset(g)
    })
    bar.addChild(again)

    var hint = new Label()
    hint.setText('§8右键插旗')
    bar.addChild(hint)
    root.addChild(bar)

    root.addEventListener('tick', function () {
        SM_tick(g)
    })
    SM_hud(g)

    // 不能用 UI.of(root, function) 传 DynamicSizeProvider：
    // 它继承了 Function 的桥接方法，Rhino 无法把 JS 函数转成该接口，
    // 只会当成 List/Stylesheet[]/String[] 的重载竞争而报 ambiguous。
    ev.modularUI = ModularUI.of(UI.of(root), ev.player)
}

// ---- 注册 -----------------------------------------------------

try {
    LDLib2UI.player(SM_UI_ID, function (ev) {
        try {
            SM_buildUI(ev)
        } catch (e) {
            console.error('[SM] 构建扫雷界面失败: ' + e)
            // 兜底：不要让 modularUI 为 null，否则客户端渲染会 NPE
            try {
                var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
                var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
                var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
                var label = new Label()
                label.setText('§c扫雷界面构建失败，看日志 [SM]')
                label.lss('width', 180)
                label.lss('height', 20)
                ev.modularUI = ModularUI.of(UI.of(label), ev.player)
            } catch (e2) {
                console.error('[SM] 兜底界面也失败: ' + e2)
            }
        }
    })
    console.info('[SM] 已注册客户端扫雷界面 ' + SM_UI_ID)
} catch (e) {
    console.error('[SM] LDLib2UI 客户端注册失败: ' + e)
}

// ---- 原始研究台界面里的「扫雷」按钮 ---------------------------
// 机器界面来自 startup_scripts/research/primitive_mbd2.js 的 UITemplate。
// 模板要先序列化成 NBT、再还原成元素，而元素的交互监听是在构造器里
// 注册的（Button 的 mouseDown/mouseUp 等），模板这条路不保证带着走。
// 所以按钮干脆不在模板里建：客户端等界面打开后自己 new 一个插进去，
// 监听、点击都在客户端本地，不依赖序列化。
// 模板 root 已经给按钮留了 16px + 6 间距。
//
// 只往原始研究台的界面里插：它的 UI 模板 root 带 sweeper_host class
// （见 startup_scripts/research/primitive_mbd2.js）。土高炉、炭炉这些
// 别的 MBD2 机器界面也有 ui:progress_bar，没有这个标记就会被误插。

var SM_TABLE_BTN_ID = 'sweeper_btn'
var SM_HOST_CLASS = 'sweeper_host'
var SM_uiScreen = null
var SM_uiHandled = false
var SM_uiTries = 0
var SM_ButtonClass = null
var SM_StyleOriginClass = null

// 插进机器界面的元素用 INLINE 源写样式：界面已经挂上 stylesheet，
// STYLESHEET 源的行内候选会被样式表重算清掉。
var SM_styleOrigin = function () {
    if (SM_StyleOriginClass === null) {
        SM_StyleOriginClass = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.style.StyleOrigin')
    }
    return SM_StyleOriginClass.INLINE
}

var SM_buttonClass = function () {
    if (SM_ButtonClass === null) {
        SM_ButtonClass = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Button')
    }
    return SM_ButtonClass
}

var SM_findById = function (element, id) {
    if (!element) return null
    try {
        if (id === String(element.getId())) return element
    } catch (e) { }
    var kids = element.getChildren()
    for (var i = 0; i < kids.size(); i++) {
        var found = SM_findById(kids.get(i), id)
        if (found) return found
    }
    return null
}

var SM_childIndex = function (root, id) {
    try {
        var kids = root.getChildren()
        for (var i = 0; i < kids.size(); i++) {
            if (id === String(kids.get(i).getId())) return i
        }
    } catch (e) { }
    return -1
}

// 容器界面把 ModularUI 挂在 menu 上，纯 UI 界面（玩家界面）挂在 screen 上
var SM_getModularUI = function (screen) {
    var menu = null
    try { menu = screen.getMenu() } catch (e) { menu = null }
    if (menu) {
        try {
            var a = menu.getModularUI()
            if (a) return a
        } catch (e) { }
        try {
            if (menu.modularUI) return menu.modularUI
        } catch (e) { }
    }
    try {
        var b = screen.getModularUI()
        if (b) return b
    } catch (e) { }
    try {
        if (screen.modularUI) return screen.modularUI
    } catch (e) { }
    return null
}

// 返回 true：这个界面已经判定过（宿主已插好，或别的机器界面直接放过）
var SM_tryAttach = function (mu) {
    var root = null
    try { root = mu.ui.rootElement } catch (e) { return false }
    if (!root) return false

    // 只有原始研究台在模板 root 上带 sweeper_host；别的机器界面到此为止
    var isHost = false
    try { isHost = root.hasClass(SM_HOST_CLASS) } catch (e) { isHost = false }
    if (!isHost) return true

    // 宿主界面的结构校验：没有进度条就没法把按钮放在进度条下面
    var bar = null
    try { bar = mu.getElementById('ui:progress_bar') } catch (e) { bar = null }
    if (!bar) bar = SM_findById(root, 'ui:progress_bar')
    if (!bar) {
        console.warn('[SM] 原始研究台界面里没找到 ui:progress_bar，跳过插按钮')
        return true
    }

    var btn = null
    try { btn = mu.getElementById(SM_TABLE_BTN_ID) } catch (e) { btn = null }
    if (!btn) btn = SM_findById(root, SM_TABLE_BTN_ID)
    if (!btn) {
        var Button = SM_buttonClass()
        btn = new Button()
        btn.setId(SM_TABLE_BTN_ID)
        btn.setText('§e扫雷 §7· 通关加速进度')
        var origin = SM_styleOrigin()
        btn.lss('width', 'stretch', origin)
        btn.lss('height', 16, origin)
        var at = SM_childIndex(root, 'ui:progress_bar')
        at = at < 0 ? root.getChildren().size() : at + 1
        root.addChildAt(btn, at)
        console.info('[SM] 已在原始研究台界面插入扫雷按钮')
    }

    btn.setOnClick(function () {
        try {
            var mc = Java.loadClass('net.minecraft.client.Minecraft').getInstance()
            // 不带斜杠；服务端 /sweeper 负责打开玩家界面
            if (mc.player) mc.player.connection.sendCommand('sweeper')
        } catch (e) {
            console.warn('[SM] 打开扫雷失败: ' + e)
        }
    })
    return true
}

ClientEvents.tick(function () {
    try {
        var mc = Java.loadClass('net.minecraft.client.Minecraft').getInstance()
        var screen = mc.screen
        if (screen !== SM_uiScreen) {
            SM_uiScreen = screen
            SM_uiHandled = false
            SM_uiTries = 0
        }
        if (!screen || SM_uiHandled) return

        var mu = SM_getModularUI(screen)
        if (!mu) {
            SM_uiHandled = true
            var cn = ''
            try { cn = String(screen.getClass().getName()) } catch (e) { }
            if (cn.indexOf('lowdragmc') >= 0) {
                console.warn('[SM] 读不到 LDLib2 界面的 ModularUI: ' + cn)
            }
            return
        }
        if (SM_tryAttach(mu)) {
            SM_uiHandled = true
            return
        }
        // 界面可能还没建完，多试几个 tick
        SM_uiTries++
        if (SM_uiTries > 40) SM_uiHandled = true
    } catch (e) {
        console.warn('[SM] 研究台扫雷按钮挂载失败: ' + e)
        SM_uiHandled = true
    }
})
