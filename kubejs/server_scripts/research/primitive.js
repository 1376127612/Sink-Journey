// ============================================================
// 原始研究台 —— 单方块阶段（界面 + 研究逻辑）
// ------------------------------------------------------------
// 两条配方：
//   槽0 纸 + 槽1 墨囊        -> 槽2 研究笔记 x2      （3s）
//   槽0 研究笔记 x4 + 槽1 纸 -> 槽2 蓝图·原始 x1     （6s）
// 右键打开 LDLib2 界面，点击「开始研究」后材料立即扣除，
// 进度由方块实体 tick 推进，结果写入槽2。
//
// 界面 id 与 client_scripts/research/primitive_ui.js 共用，
// 两边的元素/槽位/服务端事件注册顺序必须完全一致，
// 否则菜单槽位与 RPC 编号会错位。
// ============================================================

const PRIMITIVE_TABLE = 'kubejs:primitive_research_table'
const PRT_UI_ID = 'sink_primitive_research'

const PRT_RECIPES = {
    notes: {
        main: 'minecraft:paper', mainCount: 1,
        extra: 'minecraft:ink_sac', extraCount: 1,
        out: 'kubejs:research_notes', outCount: 2,
        ticks: 60, name: '研究笔记'
    },
    blueprint: {
        main: 'kubejs:research_notes', mainCount: 4,
        extra: 'minecraft:paper', extraCount: 1,
        out: 'kubejs:blueprint_primitive', outCount: 1,
        ticks: 120, name: '蓝图·原始'
    }
}

// 方块实体：{ be, inv }，inv 是槽0/1/2 的物品栏
const prtState = (level, pos) => {
    const be = level.getBlockEntity(pos)
    if (!be || !be.attachments) return null
    const inv = be.attachments.get('inv')
    if (!inv) return null
    return { be: be, inv: inv }
}

const prtStart = (player, level, pos) => {
    const st = prtState(level, pos)
    if (!st) return

    const data = st.be.data
    if (data.getInt('prt_state') === 1) {
        player.setStatusMessage(Text.of('§7研究台正在演算，请稍候'))
        return
    }

    const main = st.inv.getStackInSlot(0)
    const extra = st.inv.getStackInSlot(1)
    const out = st.inv.getStackInSlot(2)

    let key = null
    if (!main.isEmpty() && !extra.isEmpty()) {
        if (main.id === 'minecraft:paper' && extra.id === 'minecraft:ink_sac') key = 'notes'
        else if (main.id === 'kubejs:research_notes' && extra.id === 'minecraft:paper') key = 'blueprint'
    }
    if (!key) {
        player.setStatusMessage(Text.of('§c槽0 放纸、槽1 放墨囊；或槽0 放研究笔记×4、槽1 放纸'))
        return
    }

    const r = PRT_RECIPES[key]
    if (main.count < r.mainCount || extra.count < r.extraCount) {
        player.setStatusMessage(Text.of('§c材料不足：需要 ' + r.main + '×' + r.mainCount
            + ' + ' + r.extra + '×' + r.extraCount))
        return
    }
    if (!out.isEmpty() && (out.id !== r.out || out.count + r.outCount > out.getMaxStackSize())) {
        player.setStatusMessage(Text.of('§c产物槽放不下 ' + r.name + '×' + r.outCount))
        return
    }

    st.inv.extractItem(0, r.mainCount, false)
    st.inv.extractItem(1, r.extraCount, false)

    data.putInt('prt_state', 1)
    data.putInt('prt_progress', 0)
    data.putInt('prt_total', r.ticks)
    data.putString('prt_recipe', key)
    st.be.sync()

    player.setStatusMessage(Text.of('§7研究开始：' + r.name + '（' + Math.round(r.ticks / 20) + 's）'))
}

const prtFinish = (level, pos, st, data) => {
    const r = PRT_RECIPES[data.getString('prt_recipe')]
    if (r) {
        const remain = st.inv.insertItem(2, Item.of(r.out, r.outCount), false)
        if (!remain.isEmpty()) level.getBlock(pos).popItem(remain)
    }
    data.putInt('prt_state', 0)
    data.putInt('prt_progress', 0)
    st.be.sync()
}

BlockEvents.blockEntityTick(PRIMITIVE_TABLE, event => {
    const be = event.block.getEntity()
    if (!be || !be.data) return
    const data = be.data
    if (data.getInt('prt_state') !== 1) return

    const total = data.getInt('prt_total')
    const progress = data.getInt('prt_progress') + 1
    if (total <= 0 || progress >= total) {
        const st = prtState(event.level, event.block.pos)
        if (st) prtFinish(event.level, event.block.pos, st, data)
        return
    }
    data.putInt('prt_progress', progress)
    be.sync()
})

// ---- 界面 ----------------------------------------------------

const prtLabel = (Label, text) => {
    const label = new Label()
    label.setText(text)
    return label
}

const prtBuildUi = ev => {
    const UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    const Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    const Button = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Button')
    const ProgressBar = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ProgressBar')
    const ItemSlot = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot')
    const InventorySlots = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.inventory.InventorySlots')
    const UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
    const ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
    const SDFRectTexture = Java.loadClass('com.lowdragmc.lowdraglib2.gui.texture.SDFRectTexture')
    const YogaFlexDirection = Java.loadClass('org.appliedenergistics.yoga.YogaFlexDirection')
    const YogaAlign = Java.loadClass('org.appliedenergistics.yoga.YogaAlign')
    const Size = Java.loadClass('com.lowdragmc.lowdraglib2.math.Size')

    const st = prtState(ev.level, ev.pos)
    if (!st) throw new Error('研究台方块实体缺失')

    const root = new UIElement()
    root.layout(l => {
        l.width(206)
        l.flexDirection(YogaFlexDirection.COLUMN)
        l.paddingAll(8)
        l.gapAll(4)
    })
    root.style(s => {
        s.background(SDFRectTexture.of(0xF010141A).setRadius(6).setBorderColor(0xFF47505C).setStroke(1))
    })

    root.addChild(prtLabel(Label, '§b§l原始研究台'))

    const row = new UIElement()
    row.layout(l => {
        l.widthStretch()
        l.height(20)
        l.flexDirection(YogaFlexDirection.ROW)
        l.alignItems(YogaAlign.CENTER)
        l.gapAll(6)
    })

    const slot0 = new ItemSlot()
    slot0.bind(st.inv, 0)
    const slot1 = new ItemSlot()
    slot1.bind(st.inv, 1)
    const slot2 = new ItemSlot()
    slot2.bind(st.inv, 2)

    row.addChild(slot0)
    row.addChild(prtLabel(Label, '§7+'))
    row.addChild(slot1)
    row.addChild(prtLabel(Label, '§7→'))
    row.addChild(slot2)
    root.addChild(row)

    const bar = new ProgressBar()
    bar.setRange(0, 100)
    bar.setProgress(0)
    bar.layout(l => l.widthStretch())
    root.addChild(bar)

    const status = prtLabel(Label, '§7待机')
    root.addChild(status)

    const button = new Button()
    button.setText('§f开始研究')
    button.layout(l => {
        l.widthStretch()
        l.height(18)
    })
    button.setOnServerClick(function () {
        prtStart(ev.player, ev.level, ev.pos)
    })
    root.addChild(button)

    root.addChild(new InventorySlots())

    ev.modularUI = ModularUI.of(UI.of(root, function (size) {
        return Size.of(206, 192)
    }), ev.player)
}

try {
    LDLib2UI.block(PRT_UI_ID, function (ev) {
        try {
            prtBuildUi(ev)
        } catch (e) {
            console.error('[PRT] 服务端界面构建失败: ' + e)
        }
    })
    console.info('[PRT] 已注册服务端 LDLib2 界面 ' + PRT_UI_ID)
} catch (e) {
    console.error('[PRT] LDLib2UI 服务端注册失败: ' + e)
}

BlockEvents.rightClicked(PRIMITIVE_TABLE, event => {
    const hand = String(event.hand)
    if (hand !== 'MAIN_HAND' && hand !== 'main_hand') return

    try {
        const Types = Java.loadClass('com.lowdragmc.lowdraglib2.integration.kjs.ui.LDKJSMenuTypes')
        if (!Types.openBlockUI(event.player, event.block.pos, PRT_UI_ID)) {
            event.player.tell(Text.of('§7研究台界面未就绪'))
        }
    } catch (e) {
        event.player.tell(Text.of('§c研究台界面不可用'))
        console.warn('[PRT] openBlockUI 失败: ' + e)
    }
    event.cancel()
})
