// ============================================================
// L2 土高炉 —— 机器注册（Multiblocked2 多方块，startup）
// 位置：kubejs/startup_scripts/metallurgy/blast_furnace_startup.js
// ------------------------------------------------------------
// 3×3×4 泥砖外壳（无输入/输出仓，物料进出全走控制器自己的槽位）：
//   正面底格中间 = 琥珀金块（风口），上一排中间 = 控制器；
//   炉膛正中（控制器正后方）= 篝火，上方两格烟道直通天空。
// 配方类型 sinkjourney:earth_blast_furnace，配方见 blast_furnace_recipes.js。
// 炉况门槛（L2 比 L1 多一道硬门槛，见 furnace_events.js）：
//   1. 炉膛篝火必须点燃（点炉后封砖；被浇灭即停工）
//   2. 强制鼓风：炉体下半部（风口高度及以下）外壁必须贴
//      embers:atmospheric_bellows，否则直接拒绝开工。
//      只用 Embers 陶风箱，不接 Create 的鼓风/风扇。
// 本文件只在游戏启动时加载，/reload 不会重载。
// ============================================================

(function () {
    var MACHINE_ID = 'kubejs:earth_blast_furnace'
    var RECIPE_TYPE_ID = 'sinkjourney:earth_blast_furnace'
    var BLOCK_MODEL_ID = 'minecraft:block/mud_bricks'
    var VENT_BLOCK_ID = 'industrialupgrade:baseblockingot/electrum'

    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
    var IO = Java.loadClass('com.lowdragmc.mbd2.api.capability.recipe.IO')
    var Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
    var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
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

    var FactoryBlockPattern = Java.loadClass('com.lowdragmc.mbd2.api.pattern.FactoryBlockPattern')
    var Predicates = Java.loadClass('com.lowdragmc.mbd2.api.pattern.Predicates')
    var MultiblockShapeInfo = Java.loadClass('com.lowdragmc.mbd2.api.pattern.MultiblockShapeInfo')
    // java.lang.reflect.Array 被 KubeJS 类过滤器拒绝；借 Guava 生成真正的 Java 数组。
    var JavaCollections = Java.loadClass('java.util.Collections')
    var GuavaIterables = Java.loadClass('com.google.common.collect.Iterables')
    var MBDRegistries = Java.loadClass('com.lowdragmc.mbd2.api.registry.MBDRegistries')

    // ---- 配方类型 ---------------------------------------------
    MBDRegistryEvents.recipeType(function (event) {
        event.createRecipeType(RL.parse(RECIPE_TYPE_ID)).setXEIVisible(true)
        console.info('[EBF] 配方类型 ' + RECIPE_TYPE_ID + ' 已注册')
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
        root.lss('height', 170)
        root.lss('flex-direction', 'column')
        root.lss('padding-all', 8)
        root.lss('gap-all', 6)

        root.addChild(label('土高炉', 'ui:machine_name'))

        // 3 个输入槽 + 1 个输出槽
        var row = new UIElement()
        row.lss('width', 'stretch')
        row.lss('height', 18)
        row.lss('flex-direction', 'row')
        row.lss('align-items', 'center')
        row.lss('gap-all', 4)
        row.addChild(itemSlot('ui:input_0'))
        row.addChild(label('+'))
        row.addChild(itemSlot('ui:input_1'))
        row.addChild(label('+'))
        row.addChild(itemSlot('ui:input_2'))
        row.addChild(label('→'))
        row.addChild(itemSlot('ui:output_0'))
        root.addChild(row)

        var bar = new ProgressBar()
        bar.setId('ui:progress_bar')
        bar.setRange(0, 1)
        bar.lss('width', 'stretch')
        root.addChild(bar)

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
            console.error('[EBF] 找不到机器定义 ' + MACHINE_ID + '，多方块图案未设置')
            return
        }

        var ventBlock = BuiltInRegistries.BLOCK.get(RL.parse(VENT_BLOCK_ID))
        if (ventBlock === null) {
            console.error('[EBF] 找不到风口方块 ' + VENT_BLOCK_ID + '，多方块图案未设置')
            return
        }

        // 切片顺序 = 后墙 -> 炉膛 -> 正面；控制器在最后一层（正面），
        // 归一化后 y=-1 底座+风口 / y=0 控制器+篝火 / y=+1..+2 烟道。
        var pattern = FactoryBlockPattern.start()
            .aisle('XXX', 'XXX', 'XXX', 'XXX') // 后墙
            .aisle('XXX', 'XFX', 'X X', 'X X') // 炉膛：篝火居中，上方两格烟道
            .aisle('XEX', 'XCX', 'XXX', 'XXX') // 正面：底格风口，上排控制器
            .where('X', Predicates.blocks(Blocks.MUD_BRICKS))
            .where('E', Predicates.blocks(ventBlock))
            .where('F', Predicates.blocks(Blocks.CAMPFIRE))
            .where('C', Predicates.controller(Predicates.blocks(definition.block())))
            .where(' ', Predicates.air())
            .build()

        definition.blockPatternFactory(function (machine) {
            return pattern
        })

        // JEI 结构预览走 shapeInfoFactory，KubeJS 注册路径不自动生成，
        // 缺了它 JEI 注册时会 NPE，这里从同一个 pattern 补一份。
        // 必须返回真的 MultiblockShapeInfo[]（JS 数组不会被自动转换）。
        // 预览失败不能拖垮机器注册，所以单独兜底。
        try {
            var shapeInfo = new MultiblockShapeInfo(pattern.getPreview([1, 1, 1, 1]))
            var shapeInfos = GuavaIterables.toArray(JavaCollections.singletonList(shapeInfo), MultiblockShapeInfo)
            definition.shapeInfoFactory(function () {
                return shapeInfos
            })
        } catch (err) {
            console.error('[EBF] 结构预览生成失败（机器仍可用，JEI 预览会报错）: ' + err)
        }

        console.info('[EBF] 已注册土高炉 ' + MACHINE_ID + '（3×3×4 泥砖壳 + 篝火 + 强制鼓风），控制器物品即机器本体')
    })
})()
