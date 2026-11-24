# OneEnough 精修指南（Sink Journey）

矿辞统一分两层，各管各的：

| 层 | 负责 | 配置位置 |
| --- | --- | --- |
| 批量统一 | Almost Unified + InstantUnify：按 `c:*` tag 把整条 tag 合并到 canonical 物品 | `config/almostunified/`、`config/instantunify-common.toml` |
| 逐物品精修 | OneEnough Item / Block / Fluid：按物品 id、方块 id、流体 id 做定点替换 | `kubejs/data/oei/replacements/*.json`（方块 `oeb`、流体 `oef`） |

优先级固定为：

```
industrialupgrade（IU） > create > minecraft / kubejs > 其他模组
```

也就是 **IU 有该形态时一律统一到 IU，IU 没有时才轮到 Create**。
改优先级只改 `unify_tags.py` 的 `BASE_PRIORITY`，然后 `review` + `apply`；
不要为了某几个物品把整个模组往前挪。

## 什么时候用 OneEnough

以下情况 Almost Unified / InstantUnify 覆盖不到，才写 OneEnough 规则：

- 配方里写死物品 id、不引用 tag 的（例如 `roots:pyre` 这类自定义配方类型）；
- 只改 tag 会连带改坏的特殊物品（进度物品、矿石方块、充能水晶等）；
- 方块、流体域：AU / InstantUnify 只处理物品 tag；
- 某个模组的物品需要单独指向另一个物品，而不是整条 tag 合并。

**不要**把已经在 `unify-tags.json` 里 `unify=true` 的 tag 再整条写进 OneEnough，
两层同时改会互相覆盖，出问题很难查。

## 规则文件

放在数据包里，路径：

```
kubejs/data/oei/replacements/<任意名字>.json
```

命名空间**必须是 `oei`**，和流体域的 `oef` 同理：`Oneenoughitem` 里
`DataRegistry.registerWithNamespaces(Replacements.class, CODEC, "oei")` 只登记了这一个命名空间，
`MixinUtils$ReplacementLoader` 的加载谓词也写死了 `"oei".equals(rl.getNamespace())`；
放在 `sinkjourney` 或别的命名空间下**不会被读**（1.0.10 实测字节码如此）。

文件名随意。文件内容可以是单个对象，也可以是对象数组（`Replacements` 上的
`@DataDriven(folder = "replacements", syncToClient = true, supportArray = true)` 两条读取路径都认），
但本包按“一个文件一个物品”的约定统一写单对象，回滚和定位都更方便。

### 格式

```json
{
  "matchItems": ["create:iron_sheet"],
  "resultItems": "industrialupgrade:itemplates/iron_plate",
  "rules": {
    "data": {
      "recipe": "replace",
      "advancement": "replace",
      "loot_table": "retain"
    }
  }
}
```

| 字段 | 说明 |
| --- | --- |
| `matchItems` | 要被替换的物品 id 列表；写 `#c:dusts/iron` 表示按 tag 匹配（tag 匹配会走 tag 规则，慎用） |
| `resultItems` | 替换后的物品 id，必须是真实存在的物品，不能再被别的规则替换 |
| `rules.data` | 按数据目录控制：`recipe`（配方）、`advancement`（进度）、`loot_table`（战利品表），值 `replace` / `retain` |
| `rules` | 可省略；省略时用 OneEnough 的默认规则 |

方块 / 流体把字段换成对应域的名字（`matchBlocks` / `resultBlocks`、
`matchFluids` / `resultFluids`），具体以 OneEnoughBlock / OneEnoughFluid 的编辑器导出为准。
最稳妥的做法是在游戏里用 OneEnough 自带的替换编辑器选好物品，保存后直接得到同格式的 JSON。

## 约定

1. **一次只修一个物品**，规则文件按用途拆开（例如 `plates.json`、`ae2_crystals.json`），
   出问题容易定位，也方便回滚。
2. 不动进度物品：`c:gems/energized_*`、`c:gems/overload_crystal`、
   `c:ingots/lithium`、`c:ingots/uranium`、`c:ores/*` 这些保持各自独立。
3. 改完执行 `/reload`（或完全重启）验证；AU 的 tag 统一仍然只在启动时生效，
   所以新增 tag 白名单必须重启。
4. 精修规则只补 AU / InstantUnify 的漏，不替代它们；如果发现某个 tag 整体都该统一，
   应该回到 `unify-tags.json` 改决定，而不是堆 OneEnough 规则。

## 排查：看着“没统一”先排除阶段锁定

AStages 会把同一材料的多个物品一起挂在某个阶段上（`config/astages/simple/astages/item.json`）。
例如钢的 7 个条目都在 `era.steam`：

```
steam_gate_i0..i6
  industrialupgrade:itemingots/steel_ingot
  industrialupgrade:itemplates/steel_plate
  industrialupgrade:blockresource/steel_block
  industrialupgrade:casing/steel
  mekanism:ingot_steel
  ad_astra:steel_ingot
  nuclearcraftneohaul:steel_alloy
```

阶段没解锁时这些物品的获取/使用被限制，JEI 里仍然会看到多个条目，很容易误判成
“矿辞没统一”。实际上 Almost Unified 已经在 tag 层合并了，判断依据看
`logs/almostunified/almostunified.log`：

```
[AutoHiding] Hiding 3/4 items for tag '#c:ingots/steel' -> [ad_astra:steel_ingot, mekanism:ingot_steel, nuclearcraftneohaul:steel_alloy]
```

有这行就说明统一配置生效了，剩下的差异来自阶段锁定、已存在的旧物品或创造模式物品栏。
验证统一效果前，先把对应阶段加上（AStages 的 add 命令，或用已经解锁该阶段的存档）。

另外 `c:nuggets/steel` 的 canonical 是 `mekanism:nugget_steel`，因为 IU 没有“钢粒”物品，
这条不是漏配。

## 相关文件

- `unify_tags.py`：批量统一的唯一入口（`review` / `apply` / `status`）
- `unify-tags.json`：每个 tag 的统一决定与当前优先级
- `kubejs/data/oei/replacements/`：物品域逐条规则（例如 `ad_astra_steel_plate.json`：
  Ad Astra 的 `ad_astra:steel_plate` → IU 的 `industrialupgrade:itemplates/steel_plate`）
- `kubejs/docs/ORE_ITEM_MAP.md`：统一后的 canonical 物品对照表
- `config/almostunified/unification/materials.json`、`config/instantunify-common.toml`：生成结果，不要手改

## 流体域（OneEnoughFluid）

流体的批量统一由 **OneEnoughFluid（OEF）** 承担，Almost Unified / InstantUnify 不处理流体，OEB 只管方块。

### 规则文件位置（注意命名空间）

```
kubejs/data/oef/replacements/<名字>.json
```

命名空间**必须是 `oef`**：OEF 源码里的加载谓词写死了 `"oef".equals(rl.getNamespace())`，放在 `sinkjourney` 或别的命名空间下不会被读。

**一个文件只能写一个对象**（OEF 只解析 `root.isJsonObject()`，写成数组会被静默忽略；OEI 才支持数组）：

```json
{
  "matchFluid": ["nuclearcraftneohaul:sulfuric_acid"],
  "resultFluid": "industrialupgrade:iufluidsulfuricacid"
}
```

一个文件里 `matchFluid` 可以写多个源 id，但只能有一个 `resultFluid`。不许写链式规则
（resultFluid 不能再出现在别的匹配里），OEF 不做多级替换。

### 必须同时打开的配置

`config/oef/common.json`：

```json
"Default_Rules_data": { "recipe": "replace", "advancement": "replace", "loot_table": "retain" },
"Default_Rules_tag": {}
```

`Default_Rules_data` 为空时，规则**只对 `FluidStack` 构造生效、不改配方 JSON**（默认就是空的）。
`Default_Rules_tag` 保持空：流体 tag 由 `kubejs/data/c/tags/fluid/*.json` 显式追加 IU 条目，
不再让 OEF 重写 tag 内容，免得模组自己的 tag 记录被抹掉。

### 替换覆盖到哪一层

OEF 在 `FluidStack` 构造函数里把源流体换成目标流体，并扩展了 `isFluidEqual`，
所以**代码硬编码的配方也会命中**（IU 的冶炼厂配方就是这样被转到 molten 系列的）。
覆盖不到的两处：

- 世界里已经放置的流体方块、机器里已经抽进去的旧流体，不会追溯转换；
- `flowing_*` 流动流体不在替换范围，tag 也带不到。

### 溶液 / 液体 / 气体

只合并**化学上同物、且同态**的流体。中文名带"溶液/液态/熔融/低压/过热"的一律另行处理：

- 溶液 ≠ 熔体：核科技的 `naoh`（熔融氢氧化钠）和 `sodium_hydroxide_solution`（氢氧化钠溶液）是两回事；
- 液态 ≠ 气态：`qmd:liquid_oxygen`（液氧）不能当 IU 的"氧"用；
- 酸盐的态要看实际工艺：IU 的"氢氯酸"是 `H₂ + Cl₂` 在气体混合机里合成的 **HCl 气体**，
  所以气动的 / 机械动力的 HCl 气体可以并进它，**QMD 的盐酸（水溶液）不能并**。

### 相关文件

- `kubejs/data/oef/replacements/`：逐条替换规则，按用途命名（`iu_internal_*` / `embers_*` / `nc_molten_*` / `nc_chem_*` …）
- `kubejs/data/c/tags/fluid/`：把 IU 流体追加进已有的 `c:` 网格
- `kubejs/assets/industrialupgrade/lang/zh_cn.json`：IU 流体中文名修正（`硫氧化物` → `二氧化硫`、第二个"冷却剂" → `冷冻剂`）
- `unify-fluids-review.md`：流体统一的决定清单与依据

### 不要给 Mekanism 写流体规则

OEF 改配方时是按**字符串值**匹配的，不是按字段名：配方 JSON 里任何值等于被匹配 id 的字符串都会被换成目标 id。
Mekanism 的化学品和流体**共用同一个 id**（`mekanism:oxygen` 既是化学注册项也是流体），于是
`chemical_infusing` / `separator` / `rotary` 这些配方里的化学品 id 会被改写成 IU 的流体 id，
变成 `Unknown registry key in ResourceKey[minecraft:root / mekanism:chemical]`，整条 Mekanism 化学线解析失败。

所以 Mekanism 只能靠 `c:` 标签互通，**不要写 OEF 规则**。同理：给某个模组写规则前，确认它的这个 id 不会
在别的注册表（化学、能量等）里出现。

### 合并掉的旧 id 要在 JEI 里隐藏

OEF 只改使用处，不会注销注册项，被替换掉的源流体仍然存在于注册表里，于是 JEI 会出现两个同名条目
（例：`iufluidiron` 和 `iufluidmolteniron` 都叫"熔融铁"）。
`kubejs/client_scripts/fluid_unify_hide.js` 想用 `RecipeViewerEvents.removeEntries('fluid', ...)` 把它们从 JEI/EMI 里摘掉，
列表里是**全部被合并的源 id**（现在 75 个），新增合并项时记得同步这个列表。

**但这个办法目前没生效**：直接传 id 字符串会抛
`Error in 'RecipeViewerEvents.removeEntries': Failed to read FluidIngredient`（普通 id 不是 KubeJS 的流体 ingredient 语法，
处理器整体中断，一条也没藏住）。现在脚本改成了 `event.remove(Fluid.of(id, 1000))` 加逐条 try/catch，
但 KubeJS 2101 的 `FluidWrapper` 只有 `of(FluidStack…)` 重载、没有 String 重载，**大概率仍然失败，尚未验证**。
要真正去掉重复条目，下一步试：KubeJS 的流体 ingredient 写法（`命名空间:*` 或正则），或直接走 JEI 的隐藏机制。

反过来说：**目标 id 必须确认真的注册过**。IU 的 `iufluidheavy_water` 就是一个只有 lang 键、
没有实际注册的假 id —— 写进 `c:heavy_water` 会让 tag 变成空（日志 `missing following references`），
连带把核科技的重水配方解析坏。写规则前先确认目标 id 能在注册表里找到。

### 基准必须是有独立贴图的那一套

IU 的流体分两代命名：`iufluid<金属>` 和 `iufluidmolten<金属>`。后者**没有逐金属贴图**，
`FluidName.getTextureLocation()` 对所有 `fluidmolten*` 都返回同一张 `block/fluid/molten_still.png`，
而这张图是纯深红占位图（像素均值 RGB 55,0,0）。所以熔融金属统一到 molten 系列会让 JEI 和世界里整片发红。
统一基准只能是短名系列；IU 没有短名版的金属（铅、锌、铀、铂、钴、锇、铋…）就不要统一。
