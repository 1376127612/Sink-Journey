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
// root 上带 sweeper_host 这个 class，客户端只往带它的界面里插按钮，
// 土高炉/炭炉这些别的 MBD2 机器界面不会出现扫雷入口。
// 高度已经按内容算好并给按钮留了 16px（见 buildUiTemplate）。
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

    // 布局枚举直接传实例：lss 传字符串时 flex-direction / align-items 不会被解析
    var FlexDirection = Java.loadClass('dev.vfyjxf.taffy.style.FlexDirection')
    var AlignItems = Java.loadClass('dev.vfyjxf.taffy.style.AlignItems')
    var JustifyContent = Java.loadClass('dev.vfyjxf.taffy.style.JustifyContent')
    var Size = Java.loadClass('com.lowdragmc.lowdraglib2.math.Size')
    var StylesheetManager = Java.loadClass(
        'com.lowdragmc.lowdraglib2.gui.ui.style.StylesheetManager'
    )
    // 样式必须用 INLINE 源写入：UIElement 序列化只保存 INLINE 源，
    // lss(name, value) 走的是 STYLESHEET 源，过一遍 UITemplate 就被清空。
    var StyleOrigin = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.style.StyleOrigin')

    // ---- JEI 配方界面模板 -------------------------------------
    var buildXeiTemplate = function () {
        var root = new UIElement()
        root.addClass('panel_bg')
        root.lss('width', 176, StyleOrigin.INLINE)
        root.lss('height', 58, StyleOrigin.INLINE)
        root.lss('flex-direction', FlexDirection.COLUMN, StyleOrigin.INLINE)
        root.lss('padding-all', 7, StyleOrigin.INLINE)
        root.lss('gap-all', 4, StyleOrigin.INLINE)

        var row = new UIElement()
        row.lss('flex-direction', FlexDirection.ROW, StyleOrigin.INLINE)
        row.lss('align-items', AlignItems.CENTER, StyleOrigin.INLINE)
        row.lss('justify-content', JustifyContent.CENTER, StyleOrigin.INLINE)
        row.lss('width', 'stretch', StyleOrigin.INLINE)
        row.lss('height', 18, StyleOrigin.INLINE)
        row.lss('gap-all', 4, StyleOrigin.INLINE)

        var addSlot = function (id) {
            var slot = new ItemSlot()
            slot.setId(id)
            row.addChild(slot)
        }
        var addLabel = function (text) {
            var element = new Label()
            element.setText(text)
            row.addChild(element)
        }
        addSlot('@item_import_0')
        addLabel('+')
        addSlot('@item_import_1')
        addLabel('→')
        addSlot('@item_export_0')
        root.addChild(row)

        var bar = new ProgressBar()
        bar.setId('@progress_bar')
        bar.setRange(0, 1)
        bar.lss('width', 'stretch', StyleOrigin.INLINE)
        bar.lss('height', 8, StyleOrigin.INLINE)
        root.addChild(bar)

        var duration = new Label()
        duration.setId('@duration')
        duration.lss('color', '#808080', StyleOrigin.INLINE)
        root.addChild(duration)

        return UITemplate.of(root, StylesheetManager.MC_MERGED)
    }

    // 启动期是 modloading 线程，Minecraft 还没建好，new Label 会 NPE；
    // 所以模板等机器设置真正构建时（字体已就绪）再挂到配方类型上。
    var xeiTemplateApplied = false
    var applyXeiTemplate = function () {
        if (xeiTemplateApplied) return
        var recipeType = MBDRegistries.RECIPE_TYPES.get(RL.parse(RECIPE_TYPE_ID))
        if (recipeType === null) return
        recipeType.setUiTemplate(buildXeiTemplate())
        recipeType.setUiSize(Size.of(176, 58))
        xeiTemplateApplied = true
    }
    // JEI 模板 id 约定：输入 @item_import_<index> / 输出 @item_export_<index>，
    // 进度条 @progress_bar、时长 @duration（MBD2 的 bindCapIOUI 按此绑定内容）。
    MBDRegistryEvents.recipeType(function (event) {
        event.createRecipeType(RL.parse(RECIPE_TYPE_ID))
            .setXEIVisible(true)


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
    // 样式用 .lss('属性', 值, StyleOrigin.INLINE)。
    // 第三个参数不能省：模板要序列化成 NBT，而 UIElement 只保存
    // INLINE 源的样式；默认的 lss(属性, 值) 是 STYLESHEET 源，会在
    // UITemplate.of() 里被整个丢掉，进游戏后就是一堆零散元素挤在一起。
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
        // 客户端扫雷按钮只在带这个 class 的界面上挂载（别的机器界面不放）
        root.addClass('sweeper_host')
        root.lss('width', 206, StyleOrigin.INLINE)
        // 高度按内容算：8 + 9 标题 + 6 + 18 槽位行 + 6 + 8 进度条 + 6
        //   + 16 扫雷按钮 + 6 + 77 背包 + 8 = 168，留 4px 余量
        root.lss('height', 172, StyleOrigin.INLINE)
        root.lss('flex-direction', FlexDirection.COLUMN, StyleOrigin.INLINE)
        root.lss('padding-all', 8, StyleOrigin.INLINE)
        root.lss('gap-all', 6, StyleOrigin.INLINE)

        root.addChild(label('原始研究台', 'ui:machine_name'))

        // 输入 0 + 输入 1 -> 输出 0
        var row = new UIElement()
        row.lss('width', 'stretch', StyleOrigin.INLINE)
        row.lss('height', 18, StyleOrigin.INLINE)
        row.lss('flex-direction', FlexDirection.ROW, StyleOrigin.INLINE)
        row.lss('align-items', AlignItems.CENTER, StyleOrigin.INLINE)
        row.lss('justify-content', JustifyContent.CENTER, StyleOrigin.INLINE)
        row.lss('gap-all', 4, StyleOrigin.INLINE)
        row.addChild(itemSlot('ui:input_0'))
        row.addChild(label('+'))
        row.addChild(itemSlot('ui:input_1'))
        row.addChild(label('→'))
        row.addChild(itemSlot('ui:output_0'))
        root.addChild(row)

        var bar = new ProgressBar()
        bar.setId('ui:progress_bar')
        bar.setRange(0, 1)
        bar.lss('width', 'stretch', StyleOrigin.INLINE)
        bar.lss('height', 8, StyleOrigin.INLINE)
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
            applyXeiTemplate()
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
