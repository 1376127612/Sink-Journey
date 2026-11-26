# Multiblocked2 使用手册（本整合包实装版）

> 适用版本：MC 1.21.1 NeoForge + KubeJS 2101.7.2 + Multiblocked2 21.1.3 + LDLib2 2.2.46.a（JEI 负责结构预览）。
> 本文只记录**本包已经跑通**的写法，不是 MBD2 全功能文档；所有 API 都已对照 MBD2 源码核实。
>
> 参考实现：
> - 单方块机：`startup_scripts/research/primitive_mbd2.js`（原始研究台）
> - 多方块 L1：`startup_scripts/metallurgy/furnace_startup.js`（炭炉）
> - 多方块 L2：`startup_scripts/metallurgy/blast_furnace_startup.js`（土高炉）
> - 配方：`server_scripts/metallurgy/furnace_recipes.js`、`blast_furnace_recipes.js`、`research/primitive.js`
> - 机器事件：`server_scripts/metallurgy/furnace_events.js`

---

## 0. 文件分工

| 位置 | 负责什么 | 生效方式 |
|---|---|---|
| `startup_scripts/` | 配方类型、机器定义、物品槽 trait、UI 模板、方块外观、多方块图案 | **只在游戏启动时加载**，改完必须重启游戏 |
| `server_scripts/` | 注册配方、机器事件（开工判定、改时长、掉落等） | `/reload` 即可 |
| `client_scripts/` | 打开界面后补按钮之类的客户端逻辑 | 重进世界 |

> startup 脚本里不能假设注册已完成。凡是要拿 `MBDRegistries` 里的机器定义（多方块图案、JEI 预览），一律放 `StartupEvents.postInit`。

所有脚本都包一层 IIFE、内部只用 `var`：KubeJS 的 Rhino 各脚本共享顶层作用域，顶层 `const/let` 重名会直接报错。

---

## 1. 注册一台机器：完整流程

MBD2 的注册分两个独立事件组，顺序无所谓，但**每一步的对象都要先构造好**：

1. `MBDRegistryEvents.recipeType` —— 注册配方类型
2. `ItemSlotCapabilityTraitDefinition` —— 声明物品槽（配方的输入/输出走这里）
3. UI 模板（`UITemplate.of`）
4. `ConfigMachineSettings.builder()` —— 把 trait 和 UI 组装起来
5. `ConfigRecipeLogicSettings.builder()` —— 配方逻辑
6. `ConfigBlockProperties` + `MachineState` —— 方块属性与外观
7. `MBDRegistryEvents.machine` —— 机器定义（同时生成方块 + 控制器物品）
8. （仅多方块）`StartupEvents.postInit` —— 挂图案 + JEI 结构预览

文件头统一准备这些类（完整清单见 `furnace_startup.js` 开头）：

```js
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
var ConfigMultiblockSettings = Java.loadClass(
    'com.lowdragmc.mbd2.common.machine.definition.config.ConfigMultiblockSettings'
)
var MachineState = Java.loadClass(
    'com.lowdragmc.mbd2.common.machine.definition.config.MachineState'
)
```

### 1.1 配方类型

```js
MBDRegistryEvents.recipeType(function (event) {
    event.createRecipeType(RL.parse(RECIPE_TYPE_ID)).setXEIVisible(true)
})
```

- 机器 ID 和配方类型 ID 分开起名，本包惯例：机器 `kubejs:xxx`，配方类型 `sinkjourney:xxx`。
- `setXEIVisible(true)` 让该配方类型出现在 JEI 里。
- 服务端注册配方时，方法路径 = 配方类型 id 的命名空间 + 路径：
  `sinkjourney:charcoal_furnace` → `event.recipes.sinkjourney.charcoal_furnace()`。

### 1.2 物品槽 trait

机器"自带槽位"，不需要输入/输出仓方块。物品进出全靠 trait：

```js
// 名字决定 UI id 前缀：input -> ui:input_0..2
var inputTrait = new ItemSlotCapabilityTraitDefinition()
inputTrait.setName('input')
inputTrait.setSlotSize(3)
inputTrait.setRecipeHandlerIO(IO.IN)   // 配方逻辑从这里取料
inputTrait.setGuiIO(IO.BOTH)           // 玩家可放可拿
inputTrait.setSlotLimit(64)
inputTrait.setDropItems(true)          // 拆机器时掉内容物

var outputTrait = new ItemSlotCapabilityTraitDefinition()
outputTrait.setName('output')
outputTrait.setSlotSize(1)
outputTrait.setRecipeHandlerIO(IO.OUT) // 配方产物放这里
outputTrait.setGuiIO(IO.OUT)           // 玩家只能拿不能放
outputTrait.setSlotLimit(64)
outputTrait.setDropItems(true)

var traitDefinitions = new ArrayList()
traitDefinitions.add(inputTrait)
traitDefinitions.add(outputTrait)
```

| 方法 | 作用 |
|---|---|
| `setName('input')` | 槽位组名，同时决定 UI id 前缀 `ui:input_0`、`ui:input_1`… |
| `setSlotSize(n)` | 这组槽的格子数 |
| `setRecipeHandlerIO(IO.IN / IO.OUT)` | 配方逻辑的读写方向 |
| `setGuiIO(IO.BOTH / IO.OUT / IO.IN)` | 玩家界面里的读写权限 |
| `setSlotLimit(n)` | 单格堆叠上限 |
| `setDropItems(true)` | 机器被拆除时是否掉落内容物 |

> 加输入槽：先改 `setSlotSize(n)`，再到 UI 模板里补 `ui:input_<n-1>`，两边必须对齐。

### 1.3 UI 模板

MBD2 的界面是 LDLib2 的 UI 树：`UIElement` 容器 + `lss(属性, 值)` 布局 + `addChild`。改界面只动这一段：

```js
var label = function (text, id) {
    var element = new Label()      // com.lowdragmc.lowdraglib2.gui.ui.elements.Label
    element.setText(text)
    if (id) element.setId(id)
    return element
}

var itemSlot = function (id) {
    var slot = new ItemSlot()      // com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot
    slot.setId(id)
    return slot
}

// 样式第三个参数必须是 StyleOrigin.INLINE，见下面那段说明
var StyleOrigin = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.style.StyleOrigin')

var buildUiTemplate = function () {
    var root = new UIElement()
    root.addClass('panel_bg')
    root.lss('width', 176, StyleOrigin.INLINE)
    root.lss('height', 155, StyleOrigin.INLINE)
    root.lss('flex-direction', 'column', StyleOrigin.INLINE)
    root.lss('padding-all', 7, StyleOrigin.INLINE)
    root.lss('gap-all', 5, StyleOrigin.INLINE)

    root.addChild(label('土高炉', 'ui:machine_name'))

    // 3 个输入槽 + 1 个输出槽，一行排开
    var row = new UIElement()
    row.lss('width', 'stretch', StyleOrigin.INLINE)
    row.lss('height', 18, StyleOrigin.INLINE)
    row.lss('flex-direction', 'row', StyleOrigin.INLINE)
    row.lss('align-items', 'center', StyleOrigin.INLINE)
    row.lss('gap-all', 4, StyleOrigin.INLINE)
    row.addChild(itemSlot('ui:input_0'))
    row.addChild(label('+'))
    row.addChild(itemSlot('ui:input_1'))
    row.addChild(label('+'))
    row.addChild(itemSlot('ui:input_2'))
    row.addChild(label('→'))
    row.addChild(itemSlot('ui:output_0'))
    root.addChild(row)

    var bar = new ProgressBar()    // com.lowdragmc.lowdraglib2.gui.ui.elements.ProgressBar
    bar.setId('ui:progress_bar')
    bar.setRange(0, 1)
    bar.lss('width', 'stretch', StyleOrigin.INLINE)
    bar.lss('height', 8, StyleOrigin.INLINE)
    root.addChild(bar)

    root.addChild(new InventorySlots())  // 玩家背包

    return UITemplate.of(root, StylesheetManager.MC_MERGED)
}

// **样式源是必须写对的一步**：模板要过一遍 `root.serializeNBT()`，
// 而 `Style.serializeNBT()` 只导出 INLINE 源的候选
// （`getInline(property)`）。`lss(属性, 值)` 用的是 STYLESHEET 源，
// 序列化时会被整段丢掉，进游戏后宽高/方向/间距全部回默认——
// LayoutProperties 的默认 `flex-direction` 是 `column`，
// 于是槽位会竖着叠成一列，`panel_bg` 背景也没有，看着就是一坨。
// 第三个参数传 `StyleOrigin.INLINE` 就正常了（MBD2 官方测试用例也是这么写的）。
// 顺带一句：颜色要写 `'#404040'` 这种字符串，`ColorValue` 不吃 `0x404040`。
```

**UI 元素 id 约定（MBD2 自动绑定，改名即失效）：**

| id | 绑定对象 |
|---|---|
| `ui:machine_name` | 机器名 |
| `ui:progress_bar` | 主配方逻辑进度（0..1） |
| `ui:input_0`…`ui:input_<n-1>` | trait 名 `input` 的槽位，后缀是槽位序号 |
| `ui:output_0`… | trait 名 `output` 的槽位 |

> 模板会经过一次 NBT 序列化，构造期注册的交互监听不保证跟着走。按钮之类的东西放到 `client_scripts/`，界面打开后再插进去（见 `primitive_mbd2.js` 文件头注释）。

### 1.4 机器设置（延迟构建）

`UITemplate.of` 在注册阶段才能安全访问内部注册表，所以 `ConfigMachineSettings` 用惰性构建：

```js
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
```

### 1.5 配方逻辑

```js
var recipeLogic = ConfigRecipeLogicSettings.builder()
    .name('main')
    .recipeType(RL.parse(RECIPE_TYPE_ID))
    .threads(1)
    .enable(true)
    .alwaysModifyRecipe(true)          // 每批都重走 onBeforeRecipeModify
    .consumeInputsAfterWorking(false)  // false=开工扣料；true=完工扣料
    .build()
```

- `alwaysModifyRecipe(true)`：不开的话，连续做同一配方时 MBD2 会直接沿用上一批改过的配方，`onBeforeRecipeModify` 不再触发。需要按炉况改时长时必须开（炭炉鼓风提速就靠它）。
- `consumeInputsAfterWorking(false)` 是默认值：**开工时扣输入**；设 `true` 则完工时才扣（中途取消不吞料）。

### 1.6 方块属性与外观

```js
var blockProperties = ConfigBlockProperties.builder()
    .destroyTime(2.5)
    .explosionResistance(6.0)
    .build()

var rootState = MachineState.baseBuilder()
    .modelRenderer(RL.parse('kubejs:block/charcoal_furnace_controller'))
    .shape(Shapes.block())
    .lightLevel(0)
    .build()
```

- `modelRenderer` 填任意方块模型 id。要用自己的贴图就在 `kubejs/assets/kubejs/models/block/` 放模型、`textures/block/` 放图，
  引用写 `kubejs:block/<名字>`（KubeJS 的 `assets/` 本身就是一张资源包）。
- 机器方块的模型**按 `facing` 属性整体旋转**（`ModelFactory.getRotation`），模型自己的 `north` 面就是机器正面，
  所以正面贴图照原版 `block/orientable` 的写法给（`top` / `front` / `side` 三个纹理键），不用写 blockstate。
- 机器方块和控制器物品不需要单独写模型 JSON：物品也走这台机器的渲染器。

### 1.7 机器定义

```js
// 多方块专属设置：builder 是 MultiblockMachineDefinition.Builder（运行时类型），
// 所以 .multiblockSettings(...) 只能写在 create('multiblock', ...) 的返回上
var multiblockSettings = null
var getMultiblockSettings = function () {
    if (multiblockSettings === null) {
        multiblockSettings = ConfigMultiblockSettings.builder()
            .showUIWhenClickStructure(true)   // 点结构任意格开界面
            .build()
    }
    return multiblockSettings
}

MBDRegistryEvents.machine(function (event) {
    var builder = event.create('multiblock', RL.parse(MACHINE_ID))
    // multiblockSettings 只在多方块 builder 上；包一层 try，
    // 免得以后 API 变动把整台机器的注册一起带下去
    try {
        builder.multiblockSettings(getMultiblockSettings)
    } catch (err) {
        console.error('[XX] 点结构开界面设置失败: ' + err)
    }
    builder
        .rootState(rootState)
        .blockProperties(blockProperties)
        .machineSettings(getMachineSettings)
        .recipeLogicSettings(recipeLogic)
})
```

- `create('multiblock', ...)` 只做多方块；单方块用 `create('single', ...)`（见 `primitive_mbd2.js`），单方块**没有** `multiblockSettings`。
- 该方法会**同时生成方块和同名控制器物品**，所以服务端合成配方直接写 `kubejs:charcoal_furnace` 即可。
- `machineSettings` / `multiblockSettings` 都传函数而不是对象（见 1.4）。

### 1.8 点结构任意格开界面

`ConfigMultiblockSettings.builder().showUIWhenClickStructure(true)`（默认 `false`）开启后，**不用对准控制器**：
MBD2 在 `PlayerInteractEvent.RightClickBlock` 里遍历覆盖该坐标的所有控制器，只要图案匹配时把这一格记进了
`openUIMask`（`PatternPredicate.allowOpenUI`，默认 `true`），就由控制器负责开界面，砖壳、篝火、风口格都算数。

三个配套条件，缺一个都点不开：

| 条件 | 说明 |
|---|---|
| `hasUI(true)` | 机器得有界面 |
| `showUIOnlyFormed`（默认 `true`） | 结构成型后才点得开；想未成型也能开就设 `false` |
| 不潜行、手上不是 MBD2 调试工具 | MBD2 在这些情况下主动让位，免得挡住放方块 |

> 点击**未成型**的控制器不是这个开关管的：那是 1.7 里控制器方块自己的右键逻辑
> （`MBDMachine.shouldOpenUI` → `openUI`），只对控制器那一格生效。

---

## 2. 多方块图案（FactoryBlockPattern）

MBD2 的 Builder **没有** pattern 方法，图案必须在 `StartupEvents.postInit` 里挂到已注册的定义上：

```js
StartupEvents.postInit(function () {
    var definition = MBDRegistries.MACHINE_DEFINITIONS.get(RL.parse(MACHINE_ID))
    if (definition === null) return

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
})
```

### 2.1 坐标语义（按本包实装）

- **每个 `.aisle(...)` 是一层切片（z 轴）**：第一个 aisle 是后墙，最后一个 aisle 是控制器所在的正面，中间是炉膛。
- **每个 aisle 里的字符串是行（y 轴）**：第一个字符串是最底层，最后一个是最上层。
- **每行里的字符是列（x 轴）**，从左到右。
- 控制器必须恰好出现一次，`Predicates.controller(...)` 同时决定结构原点和方向；游戏里摆放时 MBD2 会按控制器朝向自动旋转整张图案，建壳不用管东南西北。

对照土高炉（3×3×4，正面底格风口、上一排控制器）：

```js
.aisle('XEX', 'XCX', 'XXX', 'XXX') // 正面：底格 E=琥珀金风口，第二格 C=控制器
```

### 2.2 字符与 Predicates

| 写法 | 含义 |
|---|---|
| `Predicates.blocks(Blocks.BRICKS)` | 指定方块 |
| `Predicates.blocks(ventBlock)` | 指定方块（运行时从注册表取到的 Block 对象） |
| `Predicates.controller(Predicates.blocks(def.block()))` | 控制器所在格，必须且只能有一处 |
| `Predicates.air()` | 必须是空气 |
| `' '`（不写 `where`） | 默认匹配**任意方块** |
| `.where(' ', Predicates.air())` | 覆盖默认值，空格必须为空气（烟道需要） |

> 想要"任意方块"就别写 `where(' ', ...)`；写了 `Predicates.air()` 就是硬性要求空气。

---

## 3. JEI 结构预览（shapeInfoFactory）

**不补这段不影响机器使用，但 JEI 里查看结构预览会直接 NPE**：`PatternPreview` 内部是 `Arrays.stream(definition.shapeInfoFactory().apply(definition))`，KubeJS 注册路径不会自动生成该工厂。

在同一个 postInit 里补：

```js
var MultiblockShapeInfo = Java.loadClass('com.lowdragmc.mbd2.api.pattern.MultiblockShapeInfo')
// java.lang.reflect.Array 被 KubeJS 类过滤器拒绝；借 Guava 生成真正的 Java 数组。
var JavaCollections = Java.loadClass('java.util.Collections')
var GuavaIterables = Java.loadClass('com.google.common.collect.Iterables')

try {
    var shapeInfo = new MultiblockShapeInfo(pattern.getPreview([1, 1, 1]))
    var shapeInfos = GuavaIterables.toArray(
        JavaCollections.singletonList(shapeInfo), MultiblockShapeInfo)
    definition.shapeInfoFactory(function () {
        return shapeInfos
    })
} catch (err) {
    console.error('[CF] 结构预览生成失败（机器仍可用，JEI 预览会报错）: ' + err)
}
```

### 3.1 `getPreview(int[])` 的参数

参数是**每个 aisle 的重复次数**，不是控制器坐标。常规结构每个 aisle 只出现一次，按 aisle 数量传全 1：

- 3 层切片：`pattern.getPreview([1, 1, 1])`
- 数组长度只要 ≥ aisle 数即可，多余的项会被忽略（少传会越界报错）。

### 3.2 必须返回真正的 Java `MultiblockShapeInfo[]`

| 坑 | 原因 |
|---|---|
| 直接 `return [shapeInfo]` | `Function.apply` 的返回类型是无界泛型 `R`，KubeJS 不会把 JS 数组转成 Java 数组，运行时 CCE |
| `java.lang.reflect.Array.newInstance(...)` | 默认类过滤器含 `- java.lang`，`java.lang.reflect.Array` 被拒绝，**整个 startup 脚本会中止** |
| Guava `Iterables.toArray(iterable, Class)` | MC 自带 Guava，且该方法在 32.x 只有一个公开重载，Rhino 不会撞重载歧义 ✔ |

`NativeJavaArray` 实现了 KubeJS 的 `Wrapper`，会被自动解包成真实数组，所以经 Guava 产出的结果可以安全 `return`。

`try/catch` 不要省：预览生成失败只应影响 JEI 预览，不能连累机器注册。

---

## 4. 服务端：注册配方（MBDRecipeJS）

配方写在 `server_scripts/`，`/reload` 生效。

```js
(function () {
    var ITEM_CAP = Java.loadClass(
        'com.lowdragmc.mbd2.common.capability.recipe.ItemRecipeCapability'
    ).CAP
    var TagKey = Java.loadClass('net.minecraft.tags.TagKey')
    var Registries = Java.loadClass('net.minecraft.core.registries.Registries')
    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation')

    // SizedIngredient 用 KubeJS 的全局包装类：ofTag 是唯一的 tag 入口，
    // 直接调 SizedIngredient.of(TagKey, int) 会撞上 of(ItemLike,int) 重载歧义。
    var tag = function (id, count) {
        return SizedIngredient.ofTag(TagKey.create(Registries.ITEM, RL.parse(id)), count)
    }

    ServerEvents.recipes(function (event) {
        var recipe = event.recipes.sinkjourney.charcoal_furnace()
        recipe.inputs(ITEM_CAP, Item.of('industrialupgrade:crushed/silver', 2))
        recipe.inputs(ITEM_CAP, tag('minecraft:coals', 1))
        recipe.outputs(ITEM_CAP, Item.of('mekmm:nugget_silver', 7))
        recipe.duration(800)
        recipe.id('kubejs:charcoal_furnace/smelt_silver')
    })
})()
```

要点：

- `event.recipes.<命名空间>.<路径>()`，命名空间/路径来自配方类型 id。
- 输入输出都走 `ItemRecipeCapability.CAP`，`inputs/outputs(cap, ...)` 是变长参数；**逐条调用**最稳，避免往 `Object...` 里塞 JS 数组。
- 物品用 `Item.of('id', n)`；tag 用 `SizedIngredient.ofTag(...)`（见上面注释，`of` 有重载歧义）。
- `recipe.id(...)` 固定配方 id，方便排查和覆盖。

### 4.1 常用 MBDRecipeJS 方法

| 方法 | 说明 |
|---|---|
| `.duration(int)` | 加工时长（tick），默认 100 |
| `.priority(int)` | 同输入多配方时的匹配优先级 |
| `.isXEIHidden(true)` | 在 JEI 里隐藏该配方 |
| `.inputs(cap, ...)` / `.outputs(cap, ...)` | 通用输入/输出 |
| `.inputItems(...)` / `.outputItems(...)` | 物品专用简写（收 `SizedIngredient`） |
| `.inputFluids(...)` / `.outputFluids(...)` | 流体（`SizedFluidIngredient`） |
| `.inputFE(int)` / `.outputFE(int)` | FE 能量 |
| `.inputHeat/outputHeat`、`.inputStress/outputStress`、`.inputRPM/outputRPM` | 其他数值能力 |
| `.perTick(true)` | 按 tick 消耗 |
| `.chance(0..1)` / `.tierChanceBoost(...)` | 产出概率 |
| `.addDataString/Number/Boolean(key, v)` | 自定义数据，机器事件里读取 |
| `.dimension(RL)` / `.biome(RL)` / `.light(...)` / `.redstoneSignal(...)` | 配方生效条件 |
| `.blocksInStructure(min, max, ...blocks)` / `.machineLevel(int)` | 结构类条件 |

> 需要"机器等级"玩法时，配 `machineLevel` 条件 + 方块名区分等级，比 split 成多个配方类型省事。

---

## 5. 机器事件（server）

写法：`MBDMachineEvents.<事件名>(机器ID, function (event) { ... })`，事件对象在 `event.event`：

```js
MBDMachineEvents.onBeforeRecipeWorking('kubejs:charcoal_furnace', function (event) {
    var machine = event.event.getMachine()
    var level = machine.getLevel()
    var pos = machine.getPos()
    // 判定 …
    event.event.setCanceled(true) // 可取消事件才有
})
```

### 5.1 服务端事件表

| 事件 | 时机 | 可取消 | 常用用途 |
|---|---|---|---|
| `onBeforeRecipeWorking` | 每批开工前 | ✔ | 炉况门槛、环境判定 |
| `onAfterRecipeWorking` | 每批开工后 | ✘ | 统计、额外效果 |
| `onBeforeRecipeModify` | 配方定稿前 | ✘（改 recipe 本身） | 按条件改时长/产出 |
| `onAfterRecipeModify` | 配方定稿后 | ✘ | 读取最终配方 |
| `onRecipeWorking` / `onRecipeWaiting` | 工作中/等待中每 tick | ✘ | 动态状态 |
| `onRecipeFinish` | 配方完成 | ✘ | 奖励、提示 |
| `onStructureFormed` / `onStructureInvalid` | 结构成型/散架 | ✘ | 提示玩家 |
| `onNeighborChanged` | 邻居变化 | ✘ | 缓存失效 |
| `onTick` | 每 tick | ✘ | 轻量逻辑（注意性能） |
| `onDrops` / `onPlaced` / `onRemoved` | 拆除/放置/移除 | 视事件 | 掉落物处理 |
| `onUseWithoutItem` / `onOpenUI` / `onUI` | 交互/开界面 | 视事件 | 右键行为 |
| `onStateChanged` | 机器状态切换 | ✘ | 联动方块 |

### 5.2 示例：炉况门槛 + 鼓风提速

```js
MBDMachineEvents.onBeforeRecipeWorking(CF, function (event) {
    var machine = event.event.getMachine()
    var level = machine.getLevel()
    var pos = machine.getPos()

    var fire = findCampfire(level, pos)
    if (fire !== null && !isLit(level, fire)) {
        event.event.setCanceled(true)   // 篝火灭了就停工
        return
    }
    if (!hasBellowsAround(level, pos, -2, 2)) return
    // …
})

// 改时长必须拿 copy，注册的配方本身不能动
MBDMachineEvents.onBeforeRecipeModify(CF, function (event) {
    var recipe = event.event.getRecipe()
    if (recipe === null) return
    var copy = recipe.copy()
    copy.duration = Math.max(40, Math.floor(copy.duration * 0.8))
    event.event.setRecipe(copy)
})
```

配套要点：

- 改时长的逻辑要配 `alwaysModifyRecipe(true)`（见 1.5），否则连续同配方不会重新触发。
- 拒绝原因做缓存（本包用 `机器id@x,y,z -> reason` 的字典），只在状态切换时打一行日志，避免每次重试刷屏。
- 结构判定统一围绕控制器坐标扫描（`pos.offset(dx, dy, dz)`），与机器朝向无关。

---

## 6. 验收清单

新增一台 MBD2 机器后按顺序过一遍：

- [ ] 启动日志出现注册成功行（如 `[CF] 已注册炭炉 …`），主菜单无 KubeJS 报错界面
- [ ] `/give @s <机器id>` 能拿到控制器物品，放下后是机器方块
- [ ] 按图案搭壳，结构正确成型；JEI 结构预览与实际一致（或预览报错但机器可用时，检查 `shapeInfoFactory`）
- [ ] 打开控制器界面：槽位数量、输出槽只出不进、进度条可见
- [ ] 点外壳任意一格（不对准控制器、不潜行）也能开同一个界面；潜行时点砖可以正常放方块
- [ ] 投料 + 满足炉况 → 开工，进度走完产出正确、时长符合预期
- [ ] 不满足炉况 → 拒绝开工，日志只打一行、不刷屏
- [ ] 拆机器 → 内容物正常掉落（`setDropItems(true)`）
- [ ] `/reload` 后服务端配方/事件改动生效；startup 改动则重启游戏验证

---

## 7. 已知坑与排错

1. **`/reload` 不重载 startup**：机器定义、trait、UI、图案、`shapeInfoFactory` 改了都要重启游戏。
2. **`java.lang` 被类过滤器拒绝**：MBD2 默认过滤器含 `- java.lang`，`java.lang.reflect.Array` 会让整个 startup 脚本中止（表现为主菜单 KubeJS 报错 GUI，不是 JVM 崩溃，日志在 `logs/kubejs/startup.log`）。数组就用 Guava `Iterables.toArray`。
3. **Rhino 重载歧义**：参数个数相同的 Java 重载（如 `SizedIngredient.of`）会报 ambiguous，优先找无歧义的入口（`ofTag`、变长参数逐个传）。
4. **`shapeInfoFactory` 返回 JS 数组**：运行时 CCE，必须返回真 Java 数组（§3.2）。
5. **图案里 `' '` 默认任意方块**：要"必须空"就得显式 `.where(' ', Predicates.air())`。
6. **旧 MMCR 机器已退役**：`mmcr:charcoal_furnace_controller` 等旧方块不再注册，旧存档里会显示为未知方块；新机器 id 是 `kubejs:charcoal_furnace` / `kubejs:earth_blast_furnace`。
7. **UI 样式必须用 `StyleOrigin.INLINE`**：`lss(属性, 值)` 是 STYLESHEET 源，序列化时被丢弃，界面会塌回默认的纵向排列（见 §1.3）。
8. **`machineSettings` 不要提前构建**：`UITemplate.of` 必须在注册阶段执行（§1.4）。
9. **日志位置**：`logs/kubejs/startup.log`（startup 脚本）、`logs/kubejs/server.log`（server 脚本）、`logs/latest.log`（整体）。
