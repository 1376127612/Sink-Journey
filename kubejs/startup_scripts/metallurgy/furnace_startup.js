// ============================================================
// 初期冶金 —— 炭炉机器注册（Multiblocked2 多方块，startup）
// 位置：kubejs/startup_scripts/metallurgy/furnace_startup.js
// ------------------------------------------------------------
// 3×3×3 砖砌外壳（无输入/输出仓，物料进出全走控制器自己的槽位）：
//   正面中间 = 控制器；炉膛正中（控制器正后方）= 篝火；
//   篝火上方留一格烟道直通天空。
// 配方类型 sinkjourney:charcoal_furnace，配方见 server_scripts/metallurgy/furnace_recipes.js。
// 炉况门槛（server_scripts/metallurgy/furnace_events.js）：
//   1. 炉膛篝火必须点燃（lit=true）——先点火后封砖；被浇灭即停工
//   2. 炉体外壁贴 embers:atmospheric_bellows = 鼓风，本批时长 ×0.8
//      只用 Embers 陶风箱，不接 Create 的鼓风/风扇。
// 多方块图案在 StartupEvents.postInit 里挂到 definition 上：
// MBD2 的 Builder 没有 pattern 方法，只能等注册完成后再设 blockPatternFactory。
// 本文件只在游戏启动时加载，/reload 不会重载。
// ============================================================

(function () {
    var MACHINE_ID = 'kubejs:charcoal_furnace'
    var RECIPE_TYPE_ID = 'sinkjourney:charcoal_furnace'
    var BLOCK_MODEL_ID = 'minecraft:block/bricks'

    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
    var IO = Java.loadClass('com.lowdragmc.mbd2.api.capability.recipe.IO')
    var Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
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

    var FactoryBlockPattern = Java.loadClass('com.lowdragmc.mbd2.api.pattern.FactoryBlockPattern')
    var Predicates = Java.loadClass('com.lowdragmc.mbd2.api.pattern.Predicates')
    var MultiblockShapeInfo = Java.loadClass('com.lowdragmc.mbd2.api.pattern.MultiblockShapeInfo')
    // java.lang.reflect.Array 被 KubeJS 类过滤器拒绝；借 Guava 生成真正的 Java 数组。
    var JavaCollections = Java.loadClass('java.util.Collections')
    var GuavaIterables = Java.loadClass('com.google.common.collect.Iterables')
    var MBDRegistries = Java.loadClass('com.lowdragmc.mbd2.api.registry.MBDRegistries')

    // ---- 原生进度条 -------------------------------------------
    // 用 MBD2 自带的 gui/arrow_bar.png 画进度：这张图上半 20×20 是空箭头，
    // 下半 20×20 是填充箭头，MBD2 自己的机器界面和配方页面都是这么用的。
    // LDLib2 的 ProgressBar 默认带 4px 内边距和 MC 主题灰条，塞进 8px 高度后
    // 填充被压成 0，只剩一条空框——所以按 MBD2 的画法重做一个：
    // 容器铺空箭头，进度靠裁切 20×20 的填充箭头实现。
    // lss 里 sprite(...) 的参数是逗号分隔的（x, y, w, h），空格会被当成路径的一部分
    var ARROW_BG = 'sprite(mbd2:textures/gui/arrow_bar.png, 0, 0, 20, 20)'
    var ARROW_BAR = 'sprite(mbd2:textures/gui/arrow_bar.png, 0, 20, 20, 20)'

    // 加号套一个定宽盒子再居中：Label 的宽度是按字形算的，宽度往往比字形还窄，
    // 直接摆在行里会贴着后一个槽位，看着像整体偏右。
    var plusSign = function () {
        var box = new UIElement()
        box.lss('width', 12, StyleOrigin.INLINE)
        box.lss('height', 20, StyleOrigin.INLINE)
        box.lss('flex-direction', FlexDirection.ROW, StyleOrigin.INLINE)
        box.lss('align-items', AlignItems.CENTER, StyleOrigin.INLINE)
        box.lss('justify-content', JustifyContent.CENTER, StyleOrigin.INLINE)
        var plus = new Label()
        plus.setText('+')
        box.addChild(plus)
        return box
    }

    var nativeProgressBar = function (id) {
        var bar = new ProgressBar()
        bar.setId(id)
        bar.setRange(0, 1)
        bar.lss('width', 20, StyleOrigin.INLINE)
        bar.lss('height', 20, StyleOrigin.INLINE)
        try {
            // bar.barContainer / bar.bar / bar.label 这三个字段和同名 DSL 方法
            // 撞名，Rhino 取到的是 FieldAndMethods（一个函数），对它们调 lss 会报
            // "Cannot find function lss"。所以按子元素取，结构固定：
            // barContainer[ barBackground[ bar, label ] ]
            var container = bar.getChildren().get(0)
            var inner = container.getChildren().get(0).getChildren()
            var fillBox = inner.get(0)
            var textLabel = inner.get(1)

            // 容器铺空箭头，填充盒裁掉没走完的那段，进度就是箭头被填充的长度
            container.lss('padding-all', 0, StyleOrigin.INLINE)
            container.lss('background', ARROW_BG, StyleOrigin.INLINE)
            fillBox.lss('background', 'empty', StyleOrigin.INLINE)
            fillBox.lss('overflow', 'hidden', StyleOrigin.INLINE)
            textLabel.lss('display', 'none', StyleOrigin.INLINE)

            var arrow = new UIElement()
            arrow.lss('width', 20, StyleOrigin.INLINE)
            arrow.lss('height', 20, StyleOrigin.INLINE)
            arrow.lss('background', ARROW_BAR, StyleOrigin.INLINE)
            fillBox.addChild(arrow)
            console.info('[UI] 原生箭头进度条已应用: ' + id)
        } catch (err) {
            // 内部结构万一变了，退回 LDLib2 默认进度条，别拖垮机器注册
            console.error('[UI] 箭头进度条样式失败，退回默认进度条: ' + err)
        }
        return bar
    }

    // ---- JEI 配方界面模板 -------------------------------------
    var buildXeiTemplate = function () {
        var root = new UIElement()
        root.addClass('panel_bg')
        root.lss('width', 176, StyleOrigin.INLINE)
        root.lss('height', 48, StyleOrigin.INLINE)
        root.lss('flex-direction', FlexDirection.COLUMN, StyleOrigin.INLINE)
        root.lss('padding-all', 7, StyleOrigin.INLINE)
        root.lss('gap-all', 4, StyleOrigin.INLINE)

        // 槽位、箭头进度条、输出槽排在同一行：行高按箭头高度取 20，
        // 槽位只有 18 高，居中后就自动对齐了。
        var row = new UIElement()
        row.lss('flex-direction', FlexDirection.ROW, StyleOrigin.INLINE)
        row.lss('align-items', AlignItems.CENTER, StyleOrigin.INLINE)
        row.lss('justify-content', JustifyContent.CENTER, StyleOrigin.INLINE)
        row.lss('width', 'stretch', StyleOrigin.INLINE)
        row.lss('height', 20, StyleOrigin.INLINE)
        row.lss('gap-all', 4, StyleOrigin.INLINE)

        var addSlot = function (id) {
            var slot = new ItemSlot()
            slot.setId(id)
            row.addChild(slot)
        }
        addSlot('@item_import_0')
        row.addChild(plusSign())
        addSlot('@item_import_1')
        row.addChild(plusSign())
        addSlot('@item_import_2')
        row.addChild(nativeProgressBar('@progress_bar'))
        addSlot('@item_export_0')
        root.addChild(row)

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
        recipeType.setUiSize(Size.of(176, 48))
        xeiTemplateApplied = true
    }
    // JEI 模板 id 约定：输入 @item_import_<index> / 输出 @item_export_<index>，
    // 进度条 @progress_bar、时长 @duration（MBD2 的 bindCapIOUI 按此绑定内容）。
    MBDRegistryEvents.recipeType(function (event) {
        event.createRecipeType(RL.parse(RECIPE_TYPE_ID))
            .setXEIVisible(true)


        console.info('[CF] 配方类型 ' + RECIPE_TYPE_ID + ' 已注册')
    })

    // ---- 物品槽 trait -----------------------------------------
    // 名字决定 UI id 前缀：input -> ui:input_0..2
    var inputTrait = new ItemSlotCapabilityTraitDefinition()
    inputTrait.setName('input')
    inputTrait.setSlotSize(3)
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
    // 元素 id 约定见 primitive_mbd2.js 文件头。
    // 样式一律写成 .lss('属性', 值, StyleOrigin.INLINE)：模板要序列化
    // 成 NBT，而 UIElement 只保存 INLINE 源的样式，默认的 lss(属性, 值)
    // 是 STYLESHEET 源，会在 UITemplate.of() 里被清空，进游戏后槽位会
    // 退回默认的纵向排列。
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
        root.lss('width', 176, StyleOrigin.INLINE)
        root.lss('height', 146, StyleOrigin.INLINE)
        root.lss('flex-direction', FlexDirection.COLUMN, StyleOrigin.INLINE)
        root.lss('padding-all', 7, StyleOrigin.INLINE)
        root.lss('gap-all', 5, StyleOrigin.INLINE)

        var title = label('炭炉', 'ui:machine_name')
        title.lss('color', '#404040', StyleOrigin.INLINE)    // 原版标题灰
        root.addChild(title)

        // 3 个输入槽 → 原生箭头进度条 → 1 个输出槽，一行排开。
        // 行高取箭头高度 20，槽位 18 高居中，槽位中心和箭头中心在同一条线上。
        var row = new UIElement()
        row.lss('width', 'stretch', StyleOrigin.INLINE)
        row.lss('height', 20, StyleOrigin.INLINE)
        row.lss('flex-direction', FlexDirection.ROW, StyleOrigin.INLINE)
        row.lss('align-items', AlignItems.CENTER, StyleOrigin.INLINE)
        row.lss('justify-content', JustifyContent.CENTER, StyleOrigin.INLINE)
        row.lss('gap-all', 4, StyleOrigin.INLINE)
        row.addChild(itemSlot('ui:input_0'))
        row.addChild(plusSign())
        row.addChild(itemSlot('ui:input_1'))
        row.addChild(plusSign())
        row.addChild(itemSlot('ui:input_2'))
        row.addChild(nativeProgressBar('ui:progress_bar'))
        row.addChild(itemSlot('ui:output_0'))
        root.addChild(row)

        // 一行小字提示炉况门槛，比空着好看也实用
        var hint = label('篝火需点燃 · 贴陶风箱加速')
        hint.lss('color', '#808080', StyleOrigin.INLINE)
        root.addChild(hint)

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
    // alwaysModifyRecipe：默认连续同一配方不会重新走 onBeforeRecipeModify，
    // 开关鼓风后要等原料变化才生效；打开它每批都从原始配方重新改时长。
    var recipeLogic = ConfigRecipeLogicSettings.builder()
        .name('main')
        .recipeType(RL.parse(RECIPE_TYPE_ID))
        .threads(1)
        .enable(true)
        .alwaysModifyRecipe(true)
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
        event.create('multiblock', RL.parse(MACHINE_ID))
            .rootState(rootState)
            .blockProperties(blockProperties)
            .machineSettings(getMachineSettings)
            .recipeLogicSettings(recipeLogic)
    })

    // ---- 多方块图案（注册完成后挂上去） -----------------------
    StartupEvents.postInit(function () {
        var definition = MBDRegistries.MACHINE_DEFINITIONS.get(RL.parse(MACHINE_ID))
        if (definition === null) {
            console.error('[CF] 找不到机器定义 ' + MACHINE_ID + '，多方块图案未设置')
            return
        }

        // 切片顺序 = 后墙 -> 炉膛 -> 正面；控制器在最后一层（正面），
        // 归一化后 y=-1 底层 / y=0 控制器+篝火层 / y=+1 顶层烟道。
        var pattern = FactoryBlockPattern.start()
            .aisle('XXX', 'XXX', 'XXX') // 后墙
            .aisle('XXX', 'XFX', 'X X') // 炉膛：篝火居中，顶心烟道
            .aisle('XXX', 'XCX', 'XXX') // 正面：中格控制器
            .where('X', Predicates.blocks(Blocks.BRICKS))
            .where('F', Predicates.blocks(Blocks.CAMPFIRE))
            .where('C', Predicates.controller(Predicates.blocks(definition.block())))
            .where(' ', Predicates.air())
            .build()

        definition.blockPatternFactory(function (machine) {
            return pattern
        })

        // JEI 结构预览走 shapeInfoFactory，KubeJS 注册路径不自动生成，
        // 缺了它 PatternPreview 会 NPE，这里从同一个 pattern 补一份。
        // 必须返回真的 MultiblockShapeInfo[]（JS 数组不会被自动转换）。
        // 预览失败不能拖垮机器注册，所以单独兜底。
        try {
            var shapeInfo = new MultiblockShapeInfo(pattern.getPreview([1, 1, 1]))
            var shapeInfos = GuavaIterables.toArray(JavaCollections.singletonList(shapeInfo), MultiblockShapeInfo)
            definition.shapeInfoFactory(function () {
                return shapeInfos
            })
        } catch (err) {
            console.error('[CF] 结构预览生成失败（机器仍可用，JEI 预览会报错）: ' + err)
        }

        console.info('[CF] 已注册炭炉 ' + MACHINE_ID + '（3×3×3 砖壳 + 炉膛篝火），控制器物品即机器本体')
    })
})()
