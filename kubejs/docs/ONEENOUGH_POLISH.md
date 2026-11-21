# OneEnough 精修指南（Sink Journey）

矿辞统一分两层，各管各的：

| 层 | 负责 | 配置位置 |
| --- | --- | --- |
| 批量统一 | Almost Unified + InstantUnify：按 `c:*` tag 把整条 tag 合并到 canonical 物品 | `config/almostunified/`、`config/instantunify-common.toml` |
| 逐物品精修 | OneEnough Item / Block / Fluid：按物品 id、方块 id、流体 id 做定点替换 | `kubejs/data/<namespace>/replacements/*.json` |

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
kubejs/data/<namespace>/replacements/<任意名字>.json
```

`<namespace>` 用整合包自己的命名空间即可（例如 `sinkjourney`），文件名随意。
OneEnoughItem 1.0.10 会读取 `data/*/replacements/**.json`，文件内容可以是单个对象，也可以是对象数组。

### 格式

```json
[
  {
    "matchItems": [
      "create:iron_sheet"
    ],
    "resultItems": "industrialupgrade:itemplates/iron_plate",
    "rules": {
      "data": {
        "recipe": "replace",
        "advancement": "replace",
        "loot_table": "retain"
      }
    }
  }
]
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

## 相关文件

- `unify_tags.py`：批量统一的唯一入口（`review` / `apply` / `status`）
- `unify-tags.json`：每个 tag 的统一决定与当前优先级
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
