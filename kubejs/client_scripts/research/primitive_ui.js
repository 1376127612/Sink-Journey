// ============================================================
// 原始研究台 —— 客户端界面
// ------------------------------------------------------------
// 与 server_scripts/research/primitive.js 中的 sink_primitive_research
// 成对注册：两边元素顺序必须一致（三个 ItemSlot / 一个服务端按钮），
// 否则菜单槽位与 RPC 编号错位。
// 进度读取客户端方块实体的 data（服务端每秒同步一次）。
// 本文件禁止使用 const/let。
// ============================================================

var PRTU_UI_ID = 'sink_primitive_research'
var PRTU_RECIPE_NAME = { notes: '研究笔记', blueprint: '蓝图·原始' }

var PRTU_state = function (level, pos) {
    var be = level.getBlockEntity(pos)
    if (!be || !be.attachments) return null
    var inv = be.attachments.get('inv')
    if (!inv) return null
    return { be: be, inv: inv }
}

var PRTU_label = function (Label, text) {
    var label = new Label()
    label.setText(text)
    return label
}

var PRTU_build = function (ev) {
    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var Button = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Button')
    var ProgressBar = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ProgressBar')
    var ItemSlot = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot')
    var InventorySlots = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.inventory.InventorySlots')
    var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
    var SDFRectTexture = Java.loadClass('com.lowdragmc.lowdraglib2.gui.texture.SDFRectTexture')
    var YogaFlexDirection = Java.loadClass('org.appliedenergistics.yoga.YogaFlexDirection')
    var YogaAlign = Java.loadClass('org.appliedenergistics.yoga.YogaAlign')
    var Size = Java.loadClass('com.lowdragmc.lowdraglib2.math.Size')

    var st = PRTU_state(ev.level, ev.pos)
    if (!st) throw new Error('研究台方块实体缺失')

    var root = new UIElement()
    root.layout(function (l) {
        l.width(206)
        l.flexDirection(YogaFlexDirection.COLUMN)
        l.paddingAll(8)
        l.gapAll(4)
    })
    root.style(function (s) {
        s.background(SDFRectTexture.of(0xF010141A).setRadius(6).setBorderColor(0xFF47505C).setStroke(1))
    })

    root.addChild(PRTU_label(Label, '§b§l原始研究台'))

    var row = new UIElement()
    row.layout(function (l) {
        l.widthStretch()
        l.height(20)
        l.flexDirection(YogaFlexDirection.ROW)
        l.alignItems(YogaAlign.CENTER)
        l.gapAll(6)
    })

    var slot0 = new ItemSlot()
    slot0.bind(st.inv, 0)
    var slot1 = new ItemSlot()
    slot1.bind(st.inv, 1)
    var slot2 = new ItemSlot()
    slot2.bind(st.inv, 2)

    row.addChild(slot0)
    row.addChild(PRTU_label(Label, '§7+'))
    row.addChild(slot1)
    row.addChild(PRTU_label(Label, '§7→'))
    row.addChild(slot2)
    root.addChild(row)

    var bar = new ProgressBar()
    bar.setRange(0, 100)
    bar.setProgress(0)
    bar.layout(function (l) { l.widthStretch() })
    root.addChild(bar)

    var status = PRTU_label(Label, '§7待机')
    root.addChild(status)

    var button = new Button()
    button.setText('§f开始研究')
    button.layout(function (l) {
        l.widthStretch()
        l.height(18)
    })
    // 只负责把点击发到服务端；真正的逻辑在 server 侧同名注册里
    button.setOnServerClick(function () { })
    root.addChild(button)

    root.addChild(new InventorySlots())

    // 进度刷新：客户端 tick 由 ModularUI.screenTick 每帧派发，
    // 只在数值变化时更新文本/进度条。
    var lastState = -1
    var lastPct = -1
    var lastKey = ''
    root.addEventListener('tick', function () {
        var be = ev.level.getBlockEntity(ev.pos)
        if (!be || !be.data) return
        var data = be.data
        var state = data.getInt('prt_state')
        var total = data.getInt('prt_total')
        var progress = data.getInt('prt_progress')
        var key = data.getString('prt_recipe')
        var pct = total > 0 ? Math.round(progress * 100 / total) : 0
        if (state === lastState && pct === lastPct && key === lastKey) return
        lastState = state
        lastPct = pct
        lastKey = key
        bar.setProgress(pct)
        if (state === 1) {
            status.setText('§e研究中：§f' + (PRTU_RECIPE_NAME[key] || key) + ' §7' + pct + '%')
        } else {
            status.setText('§7待机：槽0 主料 / 槽1 辅料 / 槽2 产物')
        }
    })

    ev.modularUI = ModularUI.of(UI.of(root, function (size) {
        return Size.of(206, 192)
    }), ev.player)
}

try {
    LDLib2UI.block(PRTU_UI_ID, function (ev) {
        try {
            PRTU_build(ev)
        } catch (e) {
            console.error('[PRTU] 客户端界面构建失败: ' + e)
        }
    })
    console.info('[PRTU] 已注册客户端 LDLib2 界面 ' + PRTU_UI_ID)
} catch (e) {
    console.error('[PRTU] LDLib2UI 客户端注册失败: ' + e)
}
