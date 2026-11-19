// ============================================================
// 原始研究台 —— Multiblocked2 单方块机（阶段一）
// ------------------------------------------------------------
// 这个文件只负责「机器定义」：
//   1. 配方类型 sinkjourney:primitive_research
//   2. 单方块机器 kubejs:primitive_research_table
//   3. 两个物品槽 trait：input（2 格，只进）/ output（1 格，只出）
//   4. UI 模板（改界面只动 buildUiTemplate 这一段）
//   5. 方块渲染模型 kubejs:block/primitive_research_table
//
// 配方在 server_scripts/research/primitive.js 里用
//   event.recipes.sinkjourney.primitive_research()
// 注册，研究时长由每条配方的 .duration(ticks) 决定。
//
// UI 元素 id 约定（MBD2 自动绑定，改名会导致槽位/进度条失效）：
//   ui:machine_name   机器名
//   ui:progress_bar   进度条（0..1，绑定主配方逻辑）
//   ui:input_0/1      输入槽（trait 名 input，_后面的数字即槽位序号）
//   ui:output_0       输出槽（trait 名 output）
// 新加输入槽：先改 inputTrait.setSlotSize(n)，再加一个 ui:input_<n-1>。
//
// 扫雷按钮不在这里建：模板要过一遍 NBT 序列化，元素构造期注册的
// 交互监听不保证跟着走。按钮由客户端在界面打开后自己 new 一个插进来：
//   client_scripts/research/minesweeper_ui.js（SM_tryAttach）。
// 这里只把 root 高度留够（见 buildUiTemplate）。
//
// 所有代码包在 IIFE 里：KubeJS 的 Rhino 各脚本共享顶层作用域，
// 顶层 const/let 重名会直接报错，包起来最省事。
// ============================================================

(function () {
    var MACHINE_ID = 'kubejs:primitive_research_table'
    var RECIPE_TYPE_ID = 'sinkjourney:primitive_research'
    var BLOCK_MODEL_ID = 'kubejs:block/primitive_research_table'

    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
    var IO = Java.loadClass('com.lowdragmc.mbd2.api.capability.recipe.IO')
    var Shapes = Java.loadClass('net.minecraft.world.phys.shapes.Shapes')
    var ArrayList = Java.loadClass('java.util.ArrayList')
    var ItemSlotCapabilityTraitDefinition = Java.loadClass(
        'com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition'
    )
    var ConfigMachineSettings = Java.loadClass(
        'com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings'
    )
    var ConfigRecipeLogicSettings = Java.loadClass(
        'com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings'
    )
    var ConfigBlockProperties = Java.loadClass(
        'com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties'
    )
    var MachineState = Java.loadClass(
        'com.lowdragmc.mbd2.common.machine.definition.config.MachineState'
    )

    var UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement')
    var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
    var ProgressBar = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ProgressBar')
    var ItemSlot = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot')
    var InventorySlots = Java.loadClass(
        'com.lowdragmc.lowdraglib2.gui.ui.elements.inventory.InventorySlots'
    )
    var UITemplate = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UITemplate')
    var StylesheetManager = Java.loadClass(
        'com.lowdragmc.lowdraglib2.gui.ui.style.StylesheetManager'
    )

    // ---- 配方类型 ---------------------------------------------
    MBDRegistryEvents.recipeType(function (event) {
        event.createRecipeType(RL.parse(RECIPE_TYPE_ID)).setXEIVisible(true)
        console.info('[MBD2] 配方类型 ' + RECIPE_TYPE_ID + ' 已注册')
    })

    // ---- 物品槽 trait -----------------------------------------
    // 名字决定 UI id 前缀：input -> ui:input_0 / ui:input_1
    var inputTrait = new ItemSlotCapabilityTraitDefinition()
    inputTrait.setName('input')
    inputTrait.setSlotSize(2)
    inputTrait.setRecipeHandlerIO(IO.IN)
    inputTrait.setGuiIO(IO.BOTH)
    inputTrait.setSlotLimit(64)
    inputTrait.setDropItems(true)

    var outputTrait = new ItemSlotCapabilityTraitDefinition()
    outputTrait.setName('output')
    outputTrait.setSlotSize(1)
    outputTrait.setRecipeHandlerIO(IO.OUT)
    outputTrait.setGuiIO(IO.OUT)
    outputTrait.setSlotLimit(64)
    outputTrait.setDropItems(true)

    var traitDefinitions = new ArrayList()
    traitDefinitions.add(inputTrait)
    traitDefinitions.add(outputTrait)

    // ============================================================
    // UI 模板 —— 想改界面就只改这一段
    // ------------------------------------------------------------
    // 样式用 .lss('属性', 值)，规则与 LDLib2 的 lss 一致。
    // 元素 id 见文件头约定；ui: 前缀的 id 不要加别的后缀。
    // ============================================================
    var label = function (text, id) {
        var element = new Label()
        element.setText(text)
        if (id) element.setId(id)
        return element
    }

    var itemSlot = function (id) {
        var slot = new ItemSlot()
        slot.setId(id)
        return slot
    }

    var buildUiTemplate = function () {
        var root = new UIElement()
        root.addClass('panel_bg')
        root.lss('width', 206)
        // 比原来高 24：给客户端插入的扫雷按钮留位（16px 按钮 + 6 间距）
        root.lss('height', 194)
        root.lss('flex-direction', 'column')
        root.lss('padding-all', 8)
        root.lss('gap-all', 6)

        root.addChild(label('原始研究台', 'ui:machine_name'))

        // 输入 0 + 输入 1 -> 输出 0
        var row = new UIElement()
        row.lss('width', 'stretch')
        row.lss('height', 18)
        row.lss('flex-direction', 'row')
        row.lss('align-items', 'center')
        row.lss('gap-all', 4)
        row.addChild(itemSlot('ui:input_0'))
        row.addChild(label('+'))
        row.addChild(itemSlot('ui:input_1'))
        row.addChild(label('→'))
        row.addChild(itemSlot('ui:output_0'))
        root.addChild(row)

        var bar = new ProgressBar()
        bar.setId('ui:progress_bar')
        bar.setRange(0, 1)
        bar.lss('width', 'stretch')
        root.addChild(bar)

        // 扫雷按钮由客户端插在进度条和背包之间（见文件头说明）

        root.addChild(new InventorySlots())

        return UITemplate.of(root, StylesheetManager.MC_MERGED)
    }

    // 机器设置延迟构建：UITemplate.of 会序列化 UI，
    // 放到注册阶段再执行，避免脚本解析期访问尚未就绪的内部注册表。
    var machineSettings = null
    var getMachineSettings = function () {
        if (machineSettings === null) {
            machineSettings = ConfigMachineSettings.builder()
                .hasUI(true)
                .traitDefinitions(traitDefinitions)
                .uiTemplate(buildUiTemplate())
                .build()
        }
        return machineSettings
    }

    // ---- 配方逻辑 ---------------------------------------------
    var recipeLogic = ConfigRecipeLogicSettings.builder()
        .name('main')
        .recipeType(RL.parse(RECIPE_TYPE_ID))
        .threads(1)
        .enable(true)
        .consumeInputsAfterWorking(false)
        .build()

    // ---- 方块外观 ---------------------------------------------
    var blockProperties = ConfigBlockProperties.builder()
        .destroyTime(2.5)
        .explosionResistance(6.0)
        .build()

    var rootState = MachineState.baseBuilder()
        .modelRenderer(RL.parse(BLOCK_MODEL_ID))
        .shape(Shapes.block())
        .lightLevel(0)
        .build()

    // ---- 机器定义 ---------------------------------------------
    MBDRegistryEvents.machine(function (event) {
        event.create('single', RL.parse(MACHINE_ID))
            .rootState(rootState)
            .blockProperties(blockProperties)
            .machineSettings(getMachineSettings)
            .recipeLogicSettings(recipeLogic)

        console.info('[MBD2] 单方块机器 ' + MACHINE_ID + ' 已注册')
    })
})()
