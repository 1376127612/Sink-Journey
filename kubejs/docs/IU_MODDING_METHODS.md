# Industrial Upgrade（IU）魔改方法总览

> 版本：Minecraft 1.21.1 / NeoForge / **IU 3.4.0.11** / KubeJS 2101.7.2
> 桥接模组：`mods/kubejs_iu-1.0.2.jar`（`com.kubejsiu.recipe.IURecipeBridge`）
> 专题文档：`IU_PRIMAL_STEAM.md`、`BASIC_ELECTRIC_AGE.md`、`IU_ELECTRIC_MOTOR.md`、
> `IU_CHIP_OVERHAUL.md`、`SILICON_WAFER_LINE.md`、`IU_ITEM_NAMES.md`、`ORE_ITEM_MAP.md`
> 本文只讲「方法和边界」，具体某条产线的数字在对应专题里。

---

## 0. 一页速查

| 想改的东西 | 走哪条通道 | 写在哪 | 生效时机 |
|---|---|---|---|
| 工作台配方（合成表） | 数据包配方：`event.remove` + `event.custom`，**沿用原 id** | `ServerEvents.recipes` | 资源重载 |
| 给机器加/换/删配方 | ① `universal_recipe` 数据包 ② `kubejs_iu` 桥 | `ServerEvents.recipes` / `ServerEvents.loaded` | 见第 3 节 |
| 想让机器"自动长出新配方" | 只补 `c:` 标签 | `ServerEvents.tags('item')` | `TagsUpdatedEvent` |
| 机器能耗 / 时长 / 容量 / 效率 | `config/industrialupgrade-common.toml` | 配置文件 | 重启或重进世界 |
| 矿脉、油田、污染、辐射、变压器档位 | 同上 | 同上 | 同上 |
| 机器等级、升级模块、能量网络、新物品 | 只能改 Java（mixin / 自建桥模组） | — | 编译期 |

---

## 1. 先分清两类配方，这是所有坑的根源

IU 同时存在两套互不相通的配方系统：

| | 工作台配方 | 机器配方 |
|---|---|---|
| 载体 | `data/industrialupgrade/recipe/*.json` | Java 内存 `com.denfop.api.recipe.RecipesCore.map_recipes` |
| 数量 | 2850 条（shaped 2153 / shapeless 356 / smelting 188 / blasting 153） | 115 个「配方池」，每池若干条，代码生成 |
| 有没有 id | 有（`industrialupgrade:industrialupgrade_1252`） | 没有 |
| 怎么改 | `event.remove` + `event.custom` | 桥 API / `universal_recipe` / 标签 |
| 重载行为 | 数据包重读，改完即生效 | `TagsUpdatedEvent` 里重放"新增/删除登记表" |

已核实：jar 内 `data/industrialupgrade/recipe/` 下**没有任何机器配方 JSON**，全是工作台/熔炉类；
机器配方由 `com.denfop.recipes.*`（如 `CompressorRecipe`）、`com.denfop.recipes.BaseRecipes`
和 `RecipesCore.init()` 在 Java 侧生成。所以 `event.remove({type:...})` 对机器配方完全无效。

另外注意：IU 的机器配方池初始化挂在 NeoForge 的 `TagsUpdatedEvent`
（`com.denfop.IUCore#getore`），流程是

```
IUCore.getore(TagsUpdatedEvent)
  → MaceratorRecipe.recipe() / CompressorRecipe.recipe() / …（按标签生成配方）
  → Recipes.recipes.initializationRecipes()      // 注册 115 个池，各 IHasRecipe.init()
  → removeAllRecipesFromList()                   // 重放删除登记
  → addAllRecipesFromList()                      // 重放新增登记
```

这段**晚于** KubeJS 的 `ServerEvents.tags` 与 `ServerEvents.recipes`（两者在 IU 重建配方时
标签还没绑定，`Ingredient.of('#c:plates')` 只能拿到 1 个 barrier 占位栈），
所以凡是碰机器配方的脚本必须写在 `ServerEvents.loaded`（或 `afterRecipes`），
而且写标签要在 `ServerEvents.tags` 里先加好。

---

## 2. 通道 A：工作台配方（数据包，本包已在用）

### 2.1 两种序列化器的字段

`industrialupgrade:shaped_recipe`

| 字段 | 类型 | 说明 |
|---|---|---|
| `category` | string | 一般 `"misc"` |
| `key` | object | 字符 → `{item:id}` / `{tag:"c:plates/iron"}` |
| `pattern` | string[] | 最多 3×3，空格表示空位 |
| `result` | `{id,count}` | |
| `show_notification` | bool | IU 自己的配方全写 `false` |
| `group` | string | 可选，用于分组排序 |

`industrialupgrade:shapeless_recipe`：`type` + `category` + `ingredients[]` + `result`。

`minecraft:smelting` / `minecraft:blasting` 就是原版格式（IU 自带熔炉 188 条 / 高炉 153 条），KubeJS 的
`event.smelting/blasting` 直接可用。

### 2.2 标准替换模板（沿用原 id）

**沿用原 id 是关键**：FTB 任务、指南书、其他模组的引用都按 id 找配方，
换 id 等于让任务书指向空气。

```js
ServerEvents.recipes(event => {
    event.remove({ id: 'industrialupgrade:industrialupgrade_1288' })
    event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        pattern: ['ECE', 'ABA', 'ECE'],
        key: {
            A: { tag: 'c:plates/iron' },
            B: { item: 'industrialupgrade:crafting_elements/crafting_21_element' },
            C: { tag: 'c:plates/bronze' },
            E: { tag: 'c:plates/copper' }
        },
        result: { count: 1, id: 'industrialupgrade:crafting_elements/crafting_267_element' },
        show_notification: false
    }).id('industrialupgrade:industrialupgrade_1288')
})
```

批量删除整类（本包曾试过，后来因为会连带删掉玩家要的手搓而放弃）：

```js
event.remove({ type: 'industrialupgrade:shaped_recipe' })     // 全部工作台配方
event.remove({ output: 'industrialupgrade:itemplates/steel_plate' })
```

注意 KubeJS 自己 `event.shaped(...)` 注册的是 `minecraft:crafting_shaped`，
不会被按类型删除波及。

---

## 3. 通道 B：机器配方（三条路，按代价从低到高）

### B1 `industrialupgrade:universal_recipe` —— 官方数据包通道，不需要桥模组

IU 自带一个通用机器配方序列化器，写进数据包/KubeJS 后由
`IURecipeSerializer` 调用 `Recipes.recipes.addAdderRecipe(...)`，
登记进"新增表"，**每次重载自动重放**，不需要脚本重跑。

| 字段 | 类型 | 说明 |
|---|---|---|
| `recipe_type` | string | 目标配方池名，见附录 A（如 `compressor`、`gearing`、`laser`） |
| `isFluidRecipe` | bool | 可选，默认 false；流体机器置 true |
| `inputs` | array | 每项 `{type:"item"\|"tag"\|"fluid", id, amount}` |
| `outputs` | array | 每项 `{type:"item"\|"fluid", id, amount}` |
| `params` | object | 数值参数，见下 |

```js
event.custom({
    type: 'industrialupgrade:universal_recipe',
    recipe_type: 'anvil',
    inputs: [{ type: 'item', id: 'industrialupgrade:itemingots/tin_ingot', amount: 1 }],
    outputs: [{ type: 'item', id: 'industrialupgrade:itemplates/tin_plate', amount: 1 }],
    params: {}
})
```

删除用配套的序列化器（同样登记进删除表，重载后依然有效）：

```js
event.custom({
    type: 'industrialupgrade:universal_recipe_delete',
    recipe_type: 'compressor',
    output: [{ type: 'item', id: 'industrialupgrade:itemplates/iron_plate', amount: 1 }],
    isRemoveAll: true          // true = 删掉所有该产物的条目；false = 只删第一条
})
```

坑：

- `params` 在 codec 里只接受 **字符串或数字**，且数字一律按 `putDouble` 存。机器读
  `getDouble("energy")` 的场合（分子变换器一族）没问题；读 `getShort("temperature")`
  的场合会被读成 0，温度类配方请改用桥的 `addRecipeEx(...,"temperature=1200")`。
- `params` 里的字符串会被静默丢弃。
- 新增登记表不清空，每 `/reload` 会再追加一次同样的条目，JEI 里可能出现重复；
  需要干净列表就配一条 `universal_recipe_delete` 或改用桥。
- 本通道代码路径已核实（`IURecipeSerializer` → `addAdderRecipe`），**尚未在本包实测**，
  首次使用建议只加一条配方、进游戏用 `/kubejs_iu recipes <池名>` 确认。

### B2 `kubejs_iu` 桥 —— 运行时 Java API（本包主用做法）

`mods/kubejs_iu-1.0.2.jar` 把 `RecipesCore` 的方法包了一层静态方法，
KubeJS 里 `Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')` 直接用。

```js
ServerEvents.loaded(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')
    if (!iu.isReady()) return

    iu.removeByOutput('laser', 'kubejs:wafer_9n', 4)   // 先删，避免反复 reload 叠条目
    iu.addItemRecipe('laser', 'kubejs:mono_9n', 1, 'kubejs:wafer_9n', 4)
})
```

常用方法：

| 方法 | 作用 |
|---|---|
| `addItemRecipe(池, 入id, 入数量, 出id, 出数量)` | 单输入单输出 |
| `addMultiRecipe(池, 入id[], 入数量[], 出id, 出数量[, 能量[, 温度]])` | 多输入 |
| `addMachineRecipe(池, 入, 入数, 出, 出数, 能量)` | 带 `energy` 元数据（分子变换器用） |
| `addRecipeEx(池, 入id[], 入数[], 入流体, 入mb, 出id[], 出数[], 出流体, 出mb, "energy=1e6,temperature=1200")` | 多入多出 + 任意元数据 |
| `addFluidRecipe` / `addFluidItemRecipe` | 流体机器 |
| `addCentrifugeRecipe(入, 入数, 出, 出数)` | 离心机专用 |
| `addItemRecipeTag(池, "#c:xx", 入数, 出, 出数)` | 按标签展开成 N 条 |
| `removeByInput(池, 入id, 数量)` | 删掉**所有**输入匹配的条目 |
| `removeByOutput(池, 出id, 数量)` | 删掉**第一条**产物匹配的条目 |
| `clearMachine(池)` | 清空整池，返回清掉的条数 |
| `replaceItemRecipe(池, …)` | = `clearMachine` + `addItemRecipe` |
| `listMachines()` / `describeMachine(池)` / `countRecipes(池)` / `listRecipes(池)` | 自查 |

语义要点（都读过 `RecipesCore` 源码确认）：

- **`removeByOutput` 只删第一条匹配**。IU 同一产物常有多条配方，要全删就循环调用，
  或者直接 `Java.loadClass('com.denfop.api.Recipes').recipes.removeAllRecipe(池, true, new RecipeOutput(...))`。
- **数量参数不参与匹配**：`ModUtils.checkItemEquality` 只比物品和 NBT，不比 count。
- **直接 `addRecipe` 不进"新增登记表"**，所以每次 `/reload`、每次世界加载都必须重跑脚本
  （放在 `ServerEvents.loaded` 里天然满足），并且要先删后加，否则条目越积越多。
- **`removeByInput` 是全删、`removeByOutput` 是删一条**，这俩不对称，别用混。
- 桥的方法都会在日志打 `[KubeJS IU]` 前缀，参数错（物品 id 不存在、池名写错）会直接返回 false。

游戏内自查命令：

```
/kubejs_iu machines          # 列出 115 个配方池 + 槽位/是否消耗/是否必需
/kubejs_iu recipes <池名>     # 列出该池全部条目（含流体表）
/kubejs_iu dump              # 全量写日志
```

### B3 标签驱动的"自动配方" —— 最省事的一种

IU 大量机器配方根本不是手写的，而是**按标签前缀 × 金属名单循环生成**。
以挤压机为例（`com.denfop.recipes.CompressorRecipe#recipe`）：

```java
addcompressor("c:storage_blocks/" + name, 1, "c:doubleplate/" + name);
addcompressor("c:smalldust/" + name, 9, "c:dusts/" + name);
addcompressor("c:plates/" + name, 1, "c:doubleplate/" + name);
```

推论（这才是"最便宜的魔改"）：

- 你想让某金属在挤压机里能压双板 → 只补 `c:doubleplate/<金属>` 标签 + 该金属在
  `CompressorRecipe.itemNames*()` 名单里，配方自动出现。
- 你想掐掉某金属的自动配方 → 从对应 `c:` 标签里移除物品（`event.remove` 标签），
  下次 `TagsUpdatedEvent` 就不会生成。
- 代码里写的是大写金属名（`"c:plates/Iron"`），但 `InputOreDict` 构造时会
  `toLowerCase()`，所以标签实际按小写解析，KubeJS 侧照常用小写。
- 冲压机（`gearing`）有专门的静态入口，本包正在用：
  `BlockEntityGearMachine.addrecipe(输入标签, 输出标签)`，输入数量固定 4。

---

## 4. 通道 C：数值与机制（配置文件，零代码）

`config/industrialupgrade-common.toml`，835 个键：

| 分组 | 键数 | 能改什么 |
|---|---|---|
| `[mechanisms_unique]` | 756 | 逐台机器的 `_energy_per_tick`、`_operation_length`、`_capacity`、`_radius_or_size`、`_efficiency` |
| `[items_unique]` | 25 | 逐件物品的属性（`canister_capacity`、`base_rod_durability`…） |
| `["Oil Vein"]` | 18 | 油田生成 |
| `[Veins]` | 8 | 矿脉储量、气体矿脉、群系加权 |
| `[Ability]` | 5 | 连锁挖矿/伐木是否允许、是否耗饱食度 |
| `[Radiation]` / `[pollution]` / `["Pressure Network"]` | 4 / 2 / 1 | 环境系统总开关与强度 |
| `[TransformerMode]` / `[VillagerProfessions]` | 5 / 7 | 变压器档位、村民职业 |

命名规律：机器名小写 + 下划线 + 参数名，注释里带着 `old value`：

```toml
[mechanisms_unique]
	improved_scanner_operation_length = 2500
	improved_alloy_smelter_energy_per_tick = 1
```

改这里不需要任何脚本，重启或重进世界即生效；`-common.toml` 是服务端侧配置，
多人服务器只认服务端那份。

---

## 5. 通道 D：硬编码，只能改 Java

以下东西没有配置项、没有数据包口子，只能 mixin 或另写桥模组：

- 机器的等级体系（基础/改良/高级/完美/光子/生物…）与升级模块的乘算规则；
- 能量网络的电压/电流/导线损耗；
- 物品与方块注册表：`ItemCraftingElements.Types` 这类枚举是固定编号，**新物品只能自己注册**
  （本包用 KubeJS `startup_scripts` 建 `kubejs:*` 物品来绕开）；
- 指南书 `GuideBookCore` 的章节结构；
- 特殊机器的界面槽位布局。

桥模组的成本其实很低：`kubejs_iu` 全部产物就是 4 个 class、约 30 KB，
做法就是"一个 `public final class` + 一堆 `public static` 方法，方法体里转发到 IU 的静态 API"，
KubeJS 侧 `Java.loadClass` 即可。要暴露新的硬编码入口，照抄它的结构加方法就行。

---

## 6. 物品 ID 体系（改配方时查得最多的东西）

| 前缀 | 例子 | 说明 |
|---|---|---|
| `crafting_elements/crafting_<N>_element` | `crafting_21_element`（元件模板） | N 是枚举序号，编号→名字查 `IU_ITEM_NAMES.md` |
| `itemplates/<metal>_plate` | `itemplates/iron_plate` | 板 |
| `casing/<metal>` | `casing/bronze` | 外壳（注意是单数 `casing`，不是 `casings`） |
| `itemingots/<metal>_ingot` | `itemingots/steel_ingot` | 锭 |
| `alloyingot/<metal>` | `alloyingot/red_brass` | 合金锭 |
| `wiring/<kind>` | `wiring/copper`、`wiring/steam` | 导线/管道 |
| `circuit/<part>` | `circuit/circuit_part1` | 电路件 |
| `baseore2/<metal>` | `baseore2/thallium` | 矿石 |
| `blockresource/<name>` | `blockresource/steel_block` | 方块 |
| `fluid/<name>` / `blockfluid/<name>` | — | 流体与流体方块 |

两条经验：

1. **写配方尽量用 `c:` 标签**而不是具体 id。本包装了 Almost Unified 一类的统一模组，
   同一个产物会被替换成别家的板/锭，硬写 id 会在统一之后变成拿不到的东西。
2. 产物 id 需要精确时，先 `/kubejs_iu recipes <池>` 或 JEI 里确认——IU 的编号物品
   光看名字猜不出来（`crafting_492_element` 是区熔粗硅）。

---

## 7. 调试与验收

```text
1. /kubejs_iu machines                池名是否存在
2. /kubejs_iu recipes <池>             改动前后的条目对比
3. JEI                                 产物、数量、机器分类是否对
4. /reload 连做两次                     条目没有翻倍（桥直连 addRecipe 的经典坑）
5. 新世界/重进世界                       config 与标签生成的配方是否重放
6. logs/latest.log 搜 "[KubeJS IU]"      参数错误会在这里报
```

---

## 8. 症状 → 原因 → 处理

| 症状 | 原因 | 处理 |
|---|---|---|
| `event.remove` 删不掉机器配方 | 机器配方不在数据包里 | 走桥或 `universal_recipe_delete` |
| 脚本里 `Recipes.recipes` 是 null / 配方注册失败 | 在 `ServerEvents.recipes` 阶段跑，IU 还没初始化 | 挪到 `ServerEvents.loaded` |
| `Ingredient.of('#c:plates')` 只拿到 1 个 barrier | 标签未绑定（tags 事件时 IU 还没 init） | 同上，或者改成在 tags 事件里补标签 |
| `/reload` 之后配方翻倍 | 桥直连 `addRecipe`，不在重放表里，脚本重跑又加一遍 | 每次先 `removeByOutput` / `clearMachine` 再加 |
| 加了标签但机器没配方 | 金属名不在该机器的 `itemNames()` 名单里，或池子按大写查而标签是小写 | 换标签名验证；必要时改用桥显式加 |
| `universal_recipe` 的温度/特殊参数不生效 | `params` 只能数字且存成 double，short 字段读成 0 | 改用桥的 `addRecipeEx` 传字符串元数据 |
| 统一模组换掉了产物，配方成了空 | 硬写了具体 id | 改回 `c:` 标签 |

---

## 附录 A：机器配方池全表（115 个，取自 `RecipesCore.init()`）

| 配方池 | 槽位 | 消耗输入 | 必需全匹配 |
|---|---|---|---|
| `active_matter_factory` | 1 | 是 | 是 |
| `advalloysmelter` | 3 | 是 | — |
| `aercollector` | 1 | 是 | 是 |
| `alloysmelter` | 2 | 是 | — |
| `antiupgradeblock` | 1 | 是 | — |
| `anvil` | 1 | 是 | 是 |
| `aquacollector` | 1 | 是 | 是 |
| `battery_factory` | 9 | 是 | 是 |
| `biomass` | 1 | 是 | 是 |
| `brewing` | 2 | 是 | 否 |
| `cannerbottle` | 2 | 是 | 是 |
| `cannerenrich` | 2 | 是 | 是 |
| `centrifuge` | 1 | 是 | 否 |
| `charger` | 1 | 是 | 是 |
| `comb_macerator` | 1 | 是 | 是 |
| `compressor` | 1 | 是 | 是 |
| `converter` | 1 | 否 | 是 |
| `cutting` | 1 | 是 | 是 |
| `cyclotron` | 1 | 是 | 否 |
| `defaultcollector` | 1 | 是 | 是 |
| `doublemolecular` | 2 | 是 | — |
| `earthcollector` | 1 | 是 | 是 |
| `elec_refractory_furnace` | 1 | 是 | 是 |
| `electronics` | 5 | 是 | 否 |
| `empty` | 1 | 否 | 是 |
| `enchanter_books` | 2 | 是 | 是 |
| `endcollector` | 1 | 是 | 是 |
| `enrichment` | 2 | 是 | — |
| `extractor` | 1 | 是 | 是 |
| `extruding` | 1 | 是 | 是 |
| `farmer` | 1 | 是 | 是 |
| `fluid_adapter` | 2 | 是 | 否 |
| `fluid_integrator` | 1 | 是 | 是 |
| `furnace` | 1 | 是 | 是 |
| `gearing` | 1 | 是 | 否 |
| `genadditionstone` | 2 | 是 | 否 |
| `genetic_centrifuge` | 1 | 是 | 否 |
| `genetic_polymerizer` | 5 | 是 | 是 |
| `genetic_stabilizer` | 1 | 是 | 否 |
| `genetic_transposer` | 4 | 是 | 否 |
| `genstone` | 2 | 否 | — |
| `graphite_recipe` | 2 | 是 | 是 |
| `handlerho` | 1 | 是 | 是 |
| `impalloysmelter` | 4 | 是 | — |
| `incubator` | 1 | 是 | 否 |
| `inoculator` | 2 | 是 | 否 |
| `insulator` | 1 | 是 | 否 |
| `item_divider` | 1 | 是 | 是 |
| `item_divider_fluid` | 1 | 是 | 是 |
| `laser` | 1 | 是 | 是 |
| `macerator` | 1 | 是 | 是 |
| `matter` | 1 | 否 | 否 |
| `matterAmplifier` | 1 | 是 | 是 |
| `microchip` | 5 | 是 | — |
| `molecular` | 1 | 是 | — |
| `nethercollector` | 1 | 是 | 是 |
| `neutron_separator` | 1 | 是 | 是 |
| `ore_purifier` | 1 | 是 | 否 |
| `orewashing` | 1 | 是 | 否 |
| `painter` | 2 | 是 | — |
| `peralloysmelter` | 5 | 是 | — |
| `plastic` | 2 | 是 | — |
| `plasticplate` | 1 | 是 | — |
| `positrons` | 2 | 是 | 否 |
| `primal_fluid_integrator` | 1 | 是 | 是 |
| `primal_laser_polisher` | 1 | 是 | 否 |
| `probeassembler` | 36 | 是 | 是 |
| `programming` | 1 | 是 | 否 |
| `quantummolecular` | 2 | 是 | 是 |
| `radioactive_handler` | 1 | 是 | 否 |
| `reactor_dual_rod` | 3 | 是 | 是 |
| `reactor_quad_rod` | 7 | 是 | 是 |
| `reactor_simple_rod` | 5 | 是 | 是 |
| `recycler` | 1 | 是 | 是 |
| `refractory_furnace` | 1 | 是 | 是 |
| `replicator` | 1 | 否 | 否 |
| `rna_collector` | 1 | 是 | 否 |
| `rocketassembler` | 37 | 是 | 是 |
| `rod_assembler` | 6 | 是 | 是 |
| `rolling` | 1 | 是 | 是 |
| `rotor_assembler` | 5 | 是 | 是 |
| `rotor_upgrade` | 2 | 否 | 是 |
| `roverassembler` | 40 | 是 | 是 |
| `roverupgradeblock` | 2 | 是 | 是 |
| `satelliteassembler` | 36 | 是 | 是 |
| `sawmill` | 1 | 是 | 否 |
| `scrap` | 1 | 是 | 是 |
| `sharpener` | 1 | 是 | 否 |
| `silicon_recipe` | 2 | 是 | 是 |
| `single_fluid_adapter` | 1 | 是 | 否 |
| `smeltery` | 1 | 是 | 否 |
| `socket_factory` | 6 | 是 | 是 |
| `solar_glass_recipe` | 1 | 是 | 是 |
| `solid_electrolyzer` | 1 | 是 | 是 |
| `solid_fluid_mixer` | 1 | 是 | 是 |
| `solid_mixer` | 2 | 是 | 否 |
| `squeezer` | 1 | 是 | 是 |
| `stamp_capacitor` | 4 | 是 | 否 |
| `stamp_coolant` | 4 | 是 | 否 |
| `stamp_exchanger` | 4 | 是 | 否 |
| `stamp_plate` | 4 | 是 | 否 |
| `stamp_vent` | 4 | 是 | 否 |
| `strong_anvil` | 1 | 是 | 是 |
| `sunnurium` | 4 | 是 | — |
| `sunnuriumpanel` | 2 | 是 | — |
| `synthesis` | 2 | 是 | — |
| `triple_solid_mixer` | 3 | 是 | 否 |
| `upgrade_machine` | 9 | 是 | 是 |
| `upgradeblock` | 2 | 是 | — |
| `waste_recycler` | 1 | 是 | 是 |
| `water_rotor_assembler` | 5 | 是 | 是 |
| `water_rotor_upgrade` | 2 | 否 | 是 |
| `welding` | 2 | 是 | 是 |
| `wire_insulator` | 2 | 是 | 是 |
| `wither` | 7 | 是 | 是 |

`describeMachine` 会额外打印 `require`（是否要求全部槽位匹配）与 `workbench`（是否工作台式）。

## 附录 B：本文的核实方式

- 配方类型与数量：直接读 IU jar 内 `data/industrialupgrade/recipe/*.json` 统计。
- 池表：解析 `com.denfop.api.recipe.RecipesCore#init` 的 `addRecipeManager` 调用。
- 重放逻辑：`RecipesCore.addRemoveRecipe / addAdderRecipe / removeAllRecipesFromList /
  addAllRecipesFromList / removeRecipe(String, RecipeOutput) / removeRecipe(String, ItemStack)` 源码。
- 初始化时机：`com.denfop.IUCore#getore(TagsUpdatedEvent)` 字节码。
- 序列化器字段：CFR 反编译 `IURecipeSerializer` / `IUDeleteRecipeSerializer`。
- 标签生成：反编译 `CompressorRecipe`、`InputOreDict`。
- 桥 API：`kubejs_iu-1.0.2.jar` 的 `javap` 签名与反编译源码。
- 唯一未实测项：`universal_recipe` 通道（代码路径已核实，本包尚未使用）。
