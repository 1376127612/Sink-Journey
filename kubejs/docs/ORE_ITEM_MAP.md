# 矿物 → 物品对照表（Sink Journey）

> 本文按**材料**列出整合包里每一种矿及其加工形态，标出统一后的 canonical 物品。
> 数据来源：`unify-tags.json`（152 个候选 tag）、`config/almostunified/unification/materials.json`、
> `config/instantunify-common.toml`，以及 `mods/*.jar` 内的 `data/*/tags/item/*`。
> 最后核对：2026-11-21。本文档由 `unify-tags.json` 与 `mods/*.jar` 内的 tag 扫描生成；改配置后需同步更新本文档。
>
> **统一优先级**：`industrialupgrade`（IU）> `create` > `minecraft` / `kubejs` > 其他模组。
> IU 有该形态时一律统一到 IU；IU 没有该形态时才落到 Create，再往后才是原版和其他模组。
> 需要逐物品例外（AU / InstantUnify 覆盖不到的自定义配方、方块、流体）时，
> 不要加进 tag 白名单，改用 OneEnough 系列精修，见 `kubejs/docs/ONEENOUGH_POLISH.md`。

## 0. 读法与统计

| 符号 / 写法 | 含义 |
| --- | --- |
| **粗体** | 统一后保留的 canonical 物品；其他同 tag 物品会被隐藏/替换 |
| ✅ 统一 | 该 tag 已写入 AU + IU 配置，多个模组的物品合并为一个 |
| ❌ 不统一 | 该 tag 有意保留多个物品，不写入统一配置 |
| 唯一 | 该 tag 只有一个物品，本来就不需要统一 |
| — | 该形态不存在 |

统计：

| 项目 | 数量 |
| --- | --- |
| 候选 tag（同 tag ≥2 个模组物品） | 152 |
| 已统一 | 131 |
| 不统一 | 21 |
| `c:ores/*` 材料 | 113（铝的 `aluminum` / `aluminium` 分开计） |
| 其中多模组矿石 | 15（矿石方块全部不统一，产物照常统一） |
| 其中单模组矿石 | 98（矿石无需统一） |

> **矿石为什么不统一**：主世界矿、深层矿、小行星矿、行星/卫星矿是不同方块、不同产出，
> 统一会把太空矿替换成主世界矿，直接丢掉矿种。因此 15 个多模组 `c:ores/*` 全部保持原样，
> 只统一它们的产物（原矿、碎矿、锭、粒、粉、板、块）。

> **命名分裂提醒**：铝有两套拼写。`aluminum`（NeoEcoAE + NuclearCraft）已统一；
> `aluminium`（IndustrialUpgrade）是另一套 tag，两者**没有**互相统一。写配方时按模组用对应拼写。

## 1. 多模组矿石（15 种）

每种矿先列矿石方块（保留），再列产物（统一）。

> 「产物」表里的「唯一」表示该形态只有一个物品（例如碎矿只有 IU 的 `crushed/*`），本来就不需要统一；
> 只有出现两个以上模组的物品时才会标 ✅ / ❌。初期冶金研钵产出的碎矿就是这套 `c:crushed/*`。

### 1.1 **铜** copper

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `minecraft:copper_ore` |
| 深层 | `minecraft:deepslate_copper_ore` |
| 小行星 | `industrialupgrade:asteroidore/asteroid_copper_ore` |
| 行星/卫星 | `industrialupgrade:blockspace/ceres_copper_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/copper` | `minecraft:raw_copper` | — | 唯一 |
| 碎矿 | `c:crushed/copper` | `industrialupgrade:crushed/copper` | — | 唯一 |
| 锭 | `c:ingots/copper` | `minecraft:copper_ingot` | — | 唯一 |
| 粒 | `c:nuggets/copper` | **`create:copper_nugget`** | `embers:copper_nugget`、`pneumaticcraft:copper_nugget`、`roots:copper_nugget` | ✅ 统一 |
| 粉 | `c:dusts/copper` | **`industrialupgrade:itemdust/copper_dust`** | `enderio:powdered_copper`、`mekanism:dust_copper`、`nuclearcraftneohaul:copper_dust` | ✅ 统一 |
| 板 | `c:plates/copper` | **`industrialupgrade:itemplates/copper_plate`** | `create:copper_sheet`、`embers:copper_plate` | ✅ 统一 |
| 块 | `c:storage_blocks/copper` | `minecraft:copper_block` | — | 唯一 |
| 原矿块 | `c:storage_blocks/raw_copper` | `minecraft:raw_copper_block` | — | 唯一 |

> 矿石结论：❌ 不统一。IndustrialUpgrade 只有小行星/行星铜矿，没有主世界铜矿；统一会把太空矿变成主世界铜矿

### 1.2 **金** gold

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `minecraft:gold_ore` |
| 深层 | `minecraft:deepslate_gold_ore` |
| 下界 | `minecraft:nether_gold_ore` |
| 小行星 | `industrialupgrade:asteroidore1/asteroid_gold_ore` |
| 行星/卫星 | `industrialupgrade:blockspace2/makemake_gold` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/gold` | `minecraft:raw_gold` | — | 唯一 |
| 碎矿 | `c:crushed/gold` | `industrialupgrade:crushed/gold` | — | 唯一 |
| 锭 | `c:ingots/gold` | `minecraft:gold_ingot` | — | 唯一 |
| 粒 | `c:nuggets/gold` | `minecraft:gold_nugget` | — | 唯一 |
| 粉 | `c:dusts/gold` | **`industrialupgrade:itemdust/gold_dust`** | `enderio:powdered_gold`、`mekanism:dust_gold` | ✅ 统一 |
| 板 | `c:plates/gold` | **`industrialupgrade:itemplates/gold_plate`** | `create:golden_sheet` | ✅ 统一 |
| 块 | `c:storage_blocks/gold` | `minecraft:gold_block` | — | 唯一 |
| 原矿块 | `c:storage_blocks/raw_gold` | `minecraft:raw_gold_block` | — | 唯一 |
| 齿轮 | `c:gears/gold` | `industrialforegoing:gold_gear` | — | 唯一 |

> 矿石结论：❌ 不统一。IndustrialUpgrade 只有小行星/行星金矿，没有主世界金矿；统一会把太空矿变成主世界金矿

### 1.3 **铁** iron

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `minecraft:iron_ore` |
| 深层 | `minecraft:deepslate_iron_ore` |
| 小行星 | `industrialupgrade:asteroidore1/asteroid_iron_ore` |
| 行星/卫星 | `industrialupgrade:blockspace/ceres_iron_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/iron` | `minecraft:raw_iron` | — | 唯一 |
| 碎矿 | `c:crushed/iron` | `industrialupgrade:crushed/iron` | — | 唯一 |
| 锭 | `c:ingots/iron` | `minecraft:iron_ingot` | — | 唯一 |
| 粒 | `c:nuggets/iron` | `minecraft:iron_nugget` | — | 唯一 |
| 粉 | `c:dusts/iron` | **`industrialupgrade:itemdust/iron_dust`** | `enderio:powdered_iron`、`mekanism:dust_iron`、`neoecoae:iron_dust` | ✅ 统一 |
| 板 | `c:plates/iron` | **`industrialupgrade:itemplates/iron_plate`** | `ad_astra:iron_plate`、`create:iron_sheet`、`embers:iron_plate` | ✅ 统一 |
| 块 | `c:storage_blocks/iron` | `minecraft:iron_block` | — | 唯一 |
| 原矿块 | `c:storage_blocks/raw_iron` | `minecraft:raw_iron_block` | — | 唯一 |
| 齿轮 | `c:gears/iron` | — | `enderio:iron_gear`、`industrialforegoing:iron_gear` | ❌ 不统一 |

> 矿石结论：❌ 不统一。IndustrialUpgrade 只有小行星/行星铁矿，没有主世界铁矿；统一会把太空矿变成主世界铁矿

### 1.4 **铅** lead

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `embers:lead_ore`<br>`industrialupgrade:classicore/lead`<br>`mekanism:lead_ore`<br>`nuclearcraftneohaul:lead_ore` |
| 深层 | `embers:deepslate_lead_ore`<br>`industrialupgrade:deepore2/deep_lead_ore`<br>`mekanism:deepslate_lead_ore`<br>`nuclearcraftneohaul:lead_deepslate_ore` |
| 小行星 | `industrialupgrade:asteroidore1/asteroid_lead_ore` |
| 行星/卫星 | `industrialupgrade:blockspace/dione_lead_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/lead` | **`industrialupgrade:raw_metals/raw_lead`** | `embers:raw_lead`、`mekanism:raw_lead`、`nuclearcraftneohaul:lead_raw` | ✅ 统一 |
| 碎矿 | `c:crushed/lead` | `industrialupgrade:crushed/lead` | — | 唯一 |
| 锭 | `c:ingots/lead` | **`industrialupgrade:itemingots/lead_ingot`** | `embers:lead_ingot`、`mekanism:ingot_lead`、`nuclearcraftneohaul:lead_ingot` | ✅ 统一 |
| 粒 | `c:nuggets/lead` | **`mekanism:nugget_lead`** | `embers:lead_nugget`、`nuclearcraftneohaul:lead_nugget` | ✅ 统一 |
| 粉 | `c:dusts/lead` | **`industrialupgrade:itemdust/lead_dust`** | `mekanism:dust_lead`、`nuclearcraftneohaul:lead_dust` | ✅ 统一 |
| 板 | `c:plates/lead` | **`industrialupgrade:itemplates/lead_plate`** | `embers:lead_plate` | ✅ 统一 |
| 块 | `c:storage_blocks/lead` | **`industrialupgrade:blockresource/lead_block`** | `embers:lead_block`、`mekanism:block_lead`、`nuclearcraftneohaul:lead_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_lead` | **`industrialupgrade:raw_block/raw_lead`** | `embers:raw_lead_block`、`mekanism:block_raw_lead`、`nuclearcraftneohaul:raw_lead_block` | ✅ 统一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.5 **银** silver

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `embers:silver_ore`<br>`enderio_evolution:silver_ore`<br>`industrialupgrade:baseore/silver`<br>`mekmm:silver_ore`<br>`roots:silver_ore` |
| 深层 | `embers:deepslate_silver_ore`<br>`enderio_evolution:deepslate_silver_ore`<br>`industrialupgrade:deepore/deep_silver_ore`<br>`mekmm:deepslate_silver_ore`<br>`roots:deepslate_silver_ore` |
| 小行星 | `industrialupgrade:asteroidore2/asteroid_silver_ore` |
| 行星/卫星 | `industrialupgrade:blockspace2/makemake_silver` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/silver` | **`industrialupgrade:raw_metals/raw_silver`** | `embers:raw_silver`、`enderio_evolution:raw_silver`、`mekmm:raw_silver`、`roots:raw_silver` | ✅ 统一 |
| 碎矿 | `c:crushed/silver` | `industrialupgrade:crushed/silver` | — | 唯一 |
| 锭 | `c:ingots/silver` | **`industrialupgrade:itemingots/silver_ingot`** | `embers:silver_ingot`、`enderio_evolution:silver_ingot`、`mekmm:ingot_silver`、`nuclearcraftneohaul:silver_ingot`、`roots:silver_ingot` | ✅ 统一 |
| 粒 | `c:nuggets/silver` | **`industrialupgrade:nugget/silver`** | `embers:silver_nugget`、`enderio_evolution:silver_nugget`、`mekmm:nugget_silver`、`roots:silver_nugget` | ✅ 统一 |
| 粉 | `c:dusts/silver` | **`industrialupgrade:itemdust/silver_dust`** | `mekmm:dust_silver`、`nuclearcraftneohaul:silver_dust` | ✅ 统一 |
| 板 | `c:plates/silver` | **`industrialupgrade:itemplates/silver_plate`** | `embers:silver_plate` | ✅ 统一 |
| 块 | `c:storage_blocks/silver` | **`industrialupgrade:baseblockingot/silver`** | `embers:silver_block`、`enderio_evolution:silver_block`、`mekmm:block_silver`、`nuclearcraftneohaul:silver_block`、`roots:silver_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_silver` | **`industrialupgrade:raw_block/raw_silver`** | `embers:raw_silver_block`、`enderio_evolution:raw_silver_block`、`mekmm:block_raw_silver`、`roots:raw_silver_block` | ✅ 统一 |
| 齿轮 | `c:gears/silver` | `industrialupgrade:gear/silver` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.6 **锡** tin

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:classicore/tin`<br>`mekanism:tin_ore`<br>`nuclearcraftneohaul:tin_ore` |
| 深层 | `industrialupgrade:deepore2/deep_tin_ore`<br>`mekanism:deepslate_tin_ore`<br>`nuclearcraftneohaul:tin_deepslate_ore` |
| 小行星 | `industrialupgrade:asteroidore2/asteroid_tin_ore` |
| 行星/卫星 | `industrialupgrade:blockspace3/moon_tin_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/tin` | **`industrialupgrade:raw_metals/raw_tin`** | `mekanism:raw_tin`、`nuclearcraftneohaul:tin_raw` | ✅ 统一 |
| 碎矿 | `c:crushed/tin` | `industrialupgrade:crushed/tin` | — | 唯一 |
| 锭 | `c:ingots/tin` | **`industrialupgrade:itemingots/tin_ingot`** | `mekanism:ingot_tin`、`nuclearcraftneohaul:tin_ingot` | ✅ 统一 |
| 粒 | `c:nuggets/tin` | **`mekanism:nugget_tin`** | `nuclearcraftneohaul:tin_nugget` | ✅ 统一 |
| 粉 | `c:dusts/tin` | **`industrialupgrade:itemdust/tin_dust`** | `enderio:powdered_tin`、`mekanism:dust_tin`、`nuclearcraftneohaul:tin_dust` | ✅ 统一 |
| 板 | `c:plates/tin` | `industrialupgrade:itemplates/tin_plate` | — | 唯一 |
| 块 | `c:storage_blocks/tin` | **`industrialupgrade:blockresource/tin_block`** | `mekanism:block_tin`、`nuclearcraftneohaul:tin_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_tin` | **`industrialupgrade:raw_block/raw_tin`** | `mekanism:block_raw_tin`、`nuclearcraftneohaul:raw_tin_block` | ✅ 统一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.7 **钨** tungsten

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:baseore/tungsten`<br>`neoecoae:tungsten_ore` |
| 深层 | `industrialupgrade:deepore/deep_tungsten_ore` |
| 小行星 | `industrialupgrade:asteroidore2/asteroid_tungsten_ore` |
| 行星/卫星 | `industrialupgrade:blockspace2/ganymede_tungsten_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/tungsten` | **`industrialupgrade:raw_metals/raw_tungsten`** | `neoecoae:raw_tungsten_ore` | ✅ 统一 |
| 碎矿 | `c:crushed/tungsten` | `industrialupgrade:crushed/tungsten` | — | 唯一 |
| 锭 | `c:ingots/tungsten` | **`industrialupgrade:itemingots/tungsten_ingot`** | `neoecoae:tungsten_ingot`、`qmd:ingot_tungsten` | ✅ 统一 |
| 粒 | `c:nuggets/tungsten` | `industrialupgrade:nugget/tungsten` | — | 唯一 |
| 粉 | `c:dusts/tungsten` | **`industrialupgrade:itemdust/tungsten_dust`** | `neoecoae:tungsten_dust`、`qmd:dust_tungsten` | ✅ 统一 |
| 板 | `c:plates/tungsten` | `industrialupgrade:itemplates/tungsten_plate` | — | 唯一 |
| 块 | `c:storage_blocks/tungsten` | **`industrialupgrade:baseblockingot/tungsten`** | `neoecoae:tungsten_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_tungsten` | **`industrialupgrade:raw_block/raw_tungsten`** | `neoecoae:raw_tungsten_block` | ✅ 统一 |
| 齿轮 | `c:gears/tungsten` | `industrialupgrade:gear/tungsten` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.8 **铀** uranium

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:classicore/uranium`<br>`mekanism:uranium_ore`<br>`nuclearcraftneohaul:uranium_ore` |
| 深层 | `industrialupgrade:deepore2/deep_uranium_ore`<br>`mekanism:deepslate_uranium_ore`<br>`nuclearcraftneohaul:uranium_deepslate_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/uranium` | **`mekanism:raw_uranium`** | `nuclearcraftneohaul:uranium_raw` | ✅ 统一 |
| 碎矿 | `c:crushed/uranium` | `industrialupgrade:crushed/uranium` | — | 唯一 |
| 锭 | `c:ingots/uranium` | — | `industrialupgrade:itemiucrafring/itemuraningot`、`mekanism:ingot_uranium`、`nuclearcraftneohaul:uranium_ingot` | ❌ 不统一 |
| 粒 | `c:nuggets/uranium` | **`mekanism:nugget_uranium`** | `nuclearcraftneohaul:uranium_nugget` | ✅ 统一 |
| 粉 | `c:dusts/uranium` | **`mekanism:dust_uranium`** | `nuclearcraftneohaul:uranium_dust` | ✅ 统一 |
| 块 | `c:storage_blocks/uranium` | **`industrialupgrade:blockresource/uranium_block`** | `mekanism:block_uranium`、`nuclearcraftneohaul:fertile_isotope_uranium_block`、`nuclearcraftneohaul:uranium_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_uranium` | **`mekanism:block_raw_uranium`** | `nuclearcraftneohaul:raw_uranium_block` | ✅ 统一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过
>
> 注：`c:storage_blocks/uranium` 里的 `nuclearcraftneohaul:fertile_isotope_uranium_block` 在 AU 的 `ignored_items` 中，不会被替换——它是 NC 的增殖同位素块，不是普通铀块。
>
> 注：`c:ingots/uranium` 不统一：IU 的 `itemiucrafring/itemuraningot` 是特殊进度物品，不能当普通锭。

### 1.9 **锌** zinc

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `create:zinc_ore`<br>`industrialupgrade:baseore/zinc` |
| 深层 | `create:deepslate_zinc_ore`<br>`industrialupgrade:deepore/deep_zinc_ore` |
| 小行星 | `industrialupgrade:asteroidore3/asteroid_zinc_ore` |
| 行星/卫星 | `industrialupgrade:blockspace/charon_zinc` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/zinc` | **`industrialupgrade:raw_metals/raw_zinc`** | `create:raw_zinc` | ✅ 统一 |
| 碎矿 | `c:crushed/zinc` | `industrialupgrade:crushed/zinc` | — | 唯一 |
| 锭 | `c:ingots/zinc` | **`industrialupgrade:itemingots/zinc_ingot`** | `create:zinc_ingot`、`qmd:ingot_zinc` | ✅ 统一 |
| 粒 | `c:nuggets/zinc` | **`industrialupgrade:nugget/zinc`** | `create:zinc_nugget` | ✅ 统一 |
| 粉 | `c:dusts/zinc` | **`industrialupgrade:itemdust/zinc_dust`** | `qmd:dust_zinc` | 唯一 |
| 板 | `c:plates/zinc` | `industrialupgrade:itemplates/zinc_plate` | — | 唯一 |
| 块 | `c:storage_blocks/zinc` | **`industrialupgrade:baseblockingot/zinc`** | `create:zinc_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_zinc` | **`industrialupgrade:raw_block/raw_zinc`** | `create:raw_zinc_block` | ✅ 统一 |
| 齿轮 | `c:gears/zinc` | `industrialupgrade:gear/zinc` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.10 **锇** osmium

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:baseore1/osmium`<br>`mekanism:osmium_ore` |
| 深层 | `industrialupgrade:deepore1/deep_osmium_ore`<br>`mekanism:deepslate_osmium_ore` |
| 小行星 | `industrialupgrade:asteroidore2/asteroid_osmium_ore` |
| 行星/卫星 | `industrialupgrade:blockspace4/rhea_osmium_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/osmium` | **`industrialupgrade:raw_metals/raw_osmium`** | `mekanism:raw_osmium` | ✅ 统一 |
| 碎矿 | `c:crushed/osmium` | `industrialupgrade:crushed/osmium` | — | 唯一 |
| 锭 | `c:ingots/osmium` | **`industrialupgrade:itemingots/osmium`** | `mekanism:ingot_osmium`、`qmd:ingot_osmium` | ✅ 统一 |
| 粒 | `c:nuggets/osmium` | **`industrialupgrade:nugget/osmium`** | `mekanism:nugget_osmium` | ✅ 统一 |
| 粉 | `c:dusts/osmium` | **`industrialupgrade:itemdust/osmium_dust`** | `mekanism:dust_osmium`、`qmd:dust_osmium` | ✅ 统一 |
| 板 | `c:plates/osmium` | `industrialupgrade:itemplates/osmium` | — | 唯一 |
| 块 | `c:storage_blocks/osmium` | **`industrialupgrade:baseblockingot1/osmium`** | `mekanism:block_osmium` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_osmium` | **`industrialupgrade:raw_block/raw_osmium`** | `mekanism:block_raw_osmium` | ✅ 统一 |
| 齿轮 | `c:gears/osmium` | `industrialupgrade:gear/osmium` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.11 **镁** magnesium

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:baseore/magnesium`<br>`nuclearcraftneohaul:magnesium_ore` |
| 深层 | `industrialupgrade:deepore/deep_magnesium_ore`<br>`nuclearcraftneohaul:magnesium_deepslate_ore` |
| 小行星 | `industrialupgrade:asteroidore1/asteroid_magnesium`<br>`industrialupgrade:asteroidore1/asteroid_magnesium_ore` |
| 行星/卫星 | `industrialupgrade:blockspace/enceladus_magnesium_ore`<br>`industrialupgrade:blockspace/eris_magnesium` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/magnesium` | **`industrialupgrade:raw_metals/raw_magnesium`** | `nuclearcraftneohaul:magnesium_raw` | ✅ 统一 |
| 碎矿 | `c:crushed/magnesium` | `industrialupgrade:crushed/magnesium` | — | 唯一 |
| 锭 | `c:ingots/magnesium` | **`industrialupgrade:itemingots/magnesium_ingot`** | `nuclearcraftneohaul:magnesium_ingot` | ✅ 统一 |
| 粒 | `c:nuggets/magnesium` | **`industrialupgrade:nugget/magnesium`** | `nuclearcraftneohaul:magnesium_nugget` | ✅ 统一 |
| 粉 | `c:dusts/magnesium` | **`industrialupgrade:itemdust/magnesium_dust`** | `nuclearcraftneohaul:magnesium_dust` | ✅ 统一 |
| 板 | `c:plates/magnesium` | `industrialupgrade:itemplates/magnesium_plate` | — | 唯一 |
| 块 | `c:storage_blocks/magnesium` | **`industrialupgrade:baseblockingot/magnesium`** | `nuclearcraftneohaul:magnesium_block` | ✅ 统一 |
| 原矿块 | `c:storage_blocks/raw_magnesium` | **`industrialupgrade:raw_block/raw_magnesium`** | `nuclearcraftneohaul:raw_magnesium_block` | ✅ 统一 |
| 齿轮 | `c:gears/magnesium` | `industrialupgrade:gear/magnesium` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.12 **锂** lithium

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:baseore1/lithium`<br>`nuclearcraftneohaul:lithium_ore` |
| 深层 | `nuclearcraftneohaul:lithium_deepslate_ore` |
| 小行星 | `industrialupgrade:asteroidore1/asteroid_lithium_ore` |
| 行星/卫星 | `industrialupgrade:blockspace/callisto_lithium_ore`<br>`industrialupgrade:blockspace2/haumea_lithium` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/lithium` | `nuclearcraftneohaul:lithium_raw` | — | 唯一 |
| 锭 | `c:ingots/lithium` | — | `industrialupgrade:crafting_elements/crafting_447_element`、`nuclearcraftneohaul:lithium_ingot` | ❌ 不统一 |
| 粒 | `c:nuggets/lithium` | `nuclearcraftneohaul:lithium_nugget` | — | 唯一 |
| 粉 | `c:dusts/lithium` | **`mekanism:dust_lithium`** | `nuclearcraftneohaul:lithium_dust` | ✅ 统一 |
| 板 | `c:plates/lithium` | `industrialupgrade:crafting_elements/crafting_450_element` | — | 唯一 |
| 块 | `c:storage_blocks/lithium` | `nuclearcraftneohaul:lithium_block` | — | 唯一 |
| 原矿块 | `c:storage_blocks/raw_lithium` | `nuclearcraftneohaul:raw_lithium_block` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过
>
> 注：`c:ingots/lithium` 不统一：IU 的 `crafting_elements/crafting_447_element` 是特殊进度物品；`c:plates/lithium` 同样是 IU 的进度物品。

### 1.13 **硼** boron

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `nuclearcraftneohaul:boron_ore` |
| 深层 | `nuclearcraftneohaul:boron_deepslate_ore` |
| 小行星 | `industrialupgrade:asteroidore/asteroid_boron_ore` |
| 行星/卫星 | `industrialupgrade:blockspace3/pluto_boron` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/boron` | `nuclearcraftneohaul:boron_raw` | — | 唯一 |
| 锭 | `c:ingots/boron` | `nuclearcraftneohaul:boron_ingot` | — | 唯一 |
| 粒 | `c:nuggets/boron` | `nuclearcraftneohaul:boron_nugget` | — | 唯一 |
| 粉 | `c:dusts/boron` | `nuclearcraftneohaul:boron_dust` | — | 唯一 |
| 块 | `c:storage_blocks/boron` | `nuclearcraftneohaul:boron_block` | — | 唯一 |
| 原矿块 | `c:storage_blocks/raw_boron` | `nuclearcraftneohaul:raw_boron_block` | — | 唯一 |

> 矿石结论：❌ 不统一。IndustrialUpgrade 只有太空硼矿，没有主世界硼矿；统一会把太空矿变成主世界矿

### 1.14 **钍** thorium

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:thorium_ore/thorium_ore`<br>`nuclearcraftneohaul:thorium_ore` |
| 深层 | `industrialupgrade:deepore2/deep_thorium_ore`<br>`nuclearcraftneohaul:thorium_deepslate_ore` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 原矿 | `c:raw_materials/thorium` | `nuclearcraftneohaul:thorium_raw` | — | 唯一 |
| 锭 | `c:ingots/thorium` | `nuclearcraftneohaul:thorium_ingot` | — | 唯一 |
| 粒 | `c:nuggets/thorium` | `nuclearcraftneohaul:thorium_nugget` | — | 唯一 |
| 粉 | `c:dusts/thorium` | `nuclearcraftneohaul:thorium_dust` | — | 唯一 |
| 块 | `c:storage_blocks/thorium` | `nuclearcraftneohaul:thorium_block` | — | 唯一 |
| 原矿块 | `c:storage_blocks/raw_thorium` | `nuclearcraftneohaul:raw_thorium_block` | — | 唯一 |
| 宝石 | `c:gems/thorium` | `industrialupgrade:reactors/toriy` | — | 唯一 |

> 矿石结论：❌ 不统一。矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过

### 1.15 **石英** quartz

**矿石方块（❌ 不统一，按种类保留）**

| 类别 | 物品 |
| --- | --- |
| 主世界 | `industrialupgrade:blockpreciousore/quartz_ore`<br>`roots:granite_quartz_ore` |
| 深层 | `industrialupgrade:deepore2/deep_quartz_ore` |
| 下界 | `minecraft:nether_quartz_ore` |
| 小行星 | `industrialupgrade:asteroidore2/asteroid_quartz_ore` |
| 行星/卫星 | `industrialupgrade:blockspace2/haumea_quartz` |

**产物**

| 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- |
| 粉 | `c:dusts/quartz` | **`industrialupgrade:itemdust/quartz_dust`** | `ae2cs:nether_quartz_dust`、`enderio:powdered_quartz`、`mekanism:dust_quartz`、`nuclearcraftneohaul:quartz_gem_dust` | ✅ 统一 |
| 块 | `c:storage_blocks/quartz` | `minecraft:quartz_block` | — | 唯一 |
| 宝石 | `c:gems/quartz` | `minecraft:quartz` | — | 唯一 |

> 矿石结论：❌ 不统一。下界石英、花岗岩石英和 IndustrialUpgrade 石英是不同石种，不能合并

## 2. 单模组矿石（98 种）

这些矿石只出现在一个模组里，矿石方块本身不存在重复，不需要统一。
若某种材料的粉/锭/块同时被其他模组添加，会在「备注」里标出统一目标。
备注里的「粉→」「锭→」「块→」分别对应 `c:dusts/<材料>`、`c:ingots/<材料>`、`c:storage_blocks/<材料>` 等 tag。

### 2.1 IndustrialUpgrade（87 种）

> 下表 IU 物品省略 `industrialupgrade:` 前缀，例如 `baseore/copper` 实际是 `industrialupgrade:baseore/copper`。
> IU 的矿脉分四层：`baseore*` / `classicore` / `blockpreciousore` 等主世界矿名 = 主世界，`deepore*` = 深层，
> `asteroidore*` = 小行星，`blockspace*` = 行星/卫星。`basaltheavyore*` / `heavyore*` / `mineral` /
> `apatite` / `blockradiationore` / `thorium_ore` 等也都是主世界矿。
>
> IU 单模组材料的产物命名基本固定：原矿 `raw_metals/raw_<mat>`、碎矿 `crushed/<mat>`、锭 `itemingots/<mat>`
> （部分带 `_ingot`）、粒 `nugget/<mat>`、粉 `itemdust/<mat>_dust`、板 `itemplates/<mat>`（部分带 `_plate`）、
> 块 `baseblockingot*/<mat>`、原矿块 `raw_block/raw_<mat>`。下表「产物」列只标存在的形态，具体 id 以游戏内 JEI/REI 为准。

| 材料 | 主世界 | 深层 | 小行星 | 行星/卫星 | 产物 | 备注（已统一形态 → canonical） |
| --- | --- | --- | --- | --- | --- | --- |
| **精金** adamantium | — | — | `asteroidore/asteroid_adamantium_ore` | `blockspace2/mars_adamantium_ore` | 锭、板、块 | — |
| **alfildit** | `basaltheavyore/alfildit`<br>`heavyore/alfildit` | — | — | — | 仅矿石方块 | — |
| **铝** aluminium | `baseore/aluminium` | `deepore/deep_aluminium_ore` | `asteroidore/asteroid_aluminium_ore` | `blockspace2/ganymede_aluminium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | —<br>英式拼写，与 `aluminum` 不互通 |
| **americium** | `blockradiationore/americium_ore` | `deepore2/deep_americium_ore` | — | — | 块、宝石 | — |
| **磷灰石** apatite | — | — | `asteroidore/asteroid_apatite_ore` | `blockspace2/haumea_apatite` | 仅矿石方块 | — |
| **砷** arsenic | `baseore2/arsenic` | `deepore1/deep_arsenic_ore` | `asteroidore/asteroid_arsenic_ore` | `blockspace/charon_arsenic` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 粉→`industrialupgrade:itemdust/arsenic_dust` |
| **arsenopyrite** | `basaltheavyore1/arsenopyrite`<br>`mineral/arsenopyrite` | — | — | — | 仅矿石方块 | — |
| **azurite** | `basaltheavyore/azurite`<br>`heavyore/azurite` | — | — | — | 仅矿石方块 | — |
| **钡** barium | `baseore2/barium` | `deepore1/deep_barium_ore` | — | `blockspace/asteroid_barium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **铍** beryllium | `baseore1/beryllium` | — | `asteroidore/asteroid_beryllium_ore` | `blockspace2/ganymede_beryllium` | 锭、粉、板、块、宝石 | — |
| **铋** bismuth | `baseore2/bismuth` | `deepore1/deep_bismuth_ore` | `asteroidore/asteroid_bismuth_ore` | `blockspace2/makemake_bismuth` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 粉→`industrialupgrade:itemdust/bismuth_dust` |
| **血石** bloodstone | — | — | `asteroidore/asteroid_bloodstone` | `blockspace3/mimas_bloodstone` | 锭、板、块 | — |
| **bor** | `baseore1/bor` | — | — | — | 板、宝石 | — |
| **braggite** | `basaltheavyore1/braggite`<br>`mineral/braggite` | — | — | — | 仅矿石方块 | — |
| **镉** cadmium | `baseore1/cadmium` | `deepore1/deep_cadmium_ore` | — | `blockspace/asteroid_cadmium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **calaverite** | `basaltheavyore/calaverite`<br>`heavyore/calaverite` | — | — | — | 仅矿石方块 | — |
| **钙** calcium | `baseore1/calcium` | — | `asteroidore/asteroid_calcium_ore` | `blockspace2/ganymede_calcium` | 仅矿石方块 | — |
| **calciumphosphate** | `apatite/calcium_phosphate` | `deepore1/deep_calcium_ore` | — | — | 仅矿石方块 | — |
| **celestine** | `basaltheavyore1/celestine`<br>`mineral/celestine` | — | — | — | 仅矿石方块 | — |
| **铬** chromium | `baseore/chromium` | `deepore/deep_chromium_ore` | `asteroidore/asteroid_chromium_ore` | `blockspace3/mercury_chromium_ore`<br>`blockspace4/rhea_chromium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **钴** cobalt | `baseore/cobalt` | `deepore/deep_cobalt_ore` | `asteroidore/asteroid_cobalt_ore` | `blockspace3/mars_cobalt_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 块→`industrialupgrade:baseblockingot/cobalt` |
| **coltan** | `basaltheavyore1/coltan`<br>`mineral/coltan` | — | — | — | 仅矿石方块 | — |
| **crocoite** | `basaltheavyore1/crocoite`<br>`mineral/crocoite` | — | — | — | 仅矿石方块 | — |
| **crystal** | `mineral/crystal` | — | — | — | 仅矿石方块 | — |
| **curium** | `blockradiationore/curium_ore` | `deepore2/deep_curium_ore` | — | — | 块、宝石 | — |
| **钻石** diamond | — | — | `asteroidore/asteroid_diamond_ore` | `blockspace2/haumea_diamond`<br>`blockspace4/venus_diamond_ore` | 粉、宝石、齿轮 | 粉→`mekanism:dust_diamond` |
| **draconium** | — | — | `asteroidore/asteroid_ariel_draconium` | `blockspace/ariel_draconium` | 仅矿石方块 | — |
| **绿宝石** emerald | — | — | `asteroidore/asteroid_emerald_ore` | `blockspace2/io_emerald_ore` | 粉 | 粉→`mekanism:dust_emerald` |
| **euxenite** | `basaltheavyore/euxenite`<br>`heavyore/euxenite` | — | — | — | 仅矿石方块 | — |
| **fergusonite** | `basaltheavyore1/fergusonite`<br>`mineral/fergusonite` | — | — | — | 仅矿石方块 | — |
| **ferroaugite** | `basaltheavyore/ferroaugite`<br>`heavyore/ferroaugite` | — | — | — | 仅矿石方块 | — |
| **fluorapatite** | `apatite/fluorapatite` | `deepore2/deep_fluorapatite_ore` | — | — | 仅矿石方块 | — |
| **钆** gadolinium | `baseore2/gadolinium` | `deepore1/deep_gadolinium_ore` | `asteroidore/asteroid_gadolinium_ore` | `blockspace3/oberon_gadolinium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 锭→`industrialupgrade:itemingots/gadolinium`<br>粉→`industrialupgrade:itemdust/gadolinium_dust`<br>块→`industrialupgrade:baseblockingot2/gadolinium` |
| **方铅矿** galena | `basaltheavyore/galena`<br>`heavyore/galena` | — | — | — | 仅矿石方块 | — |
| **镓** gallium | `baseore2/gallium` | `deepore1/deep_gallium_ore` | `asteroidore1/asteroid_gallium_ore` | `blockspace4/tethys_gallium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **germanite** | `basaltheavyore1/germanite`<br>`mineral/germanite` | — | — | — | 仅矿石方块 | — |
| **germanium** | `baseore/germanium` | `deepore/deep_germanium_ore` | — | — | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **铪** hafnium | `baseore2/hafnium` | `deepore1/deep_hafnium_ore` | `asteroidore1/asteroid_hafnium_ore` | `blockspace3/oberon_hafnium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **ilmenite** | `basaltheavyore/ilmenite`<br>`heavyore/ilmenite` | — | — | — | 仅矿石方块 | — |
| **铱** iridium | `baseore/iridium` | `deepore/deep_iridium_ore` | `asteroidore1/asteroid_iridium_ore` | `blockspace2/haumea_iridium`<br>`blockspace3/pluto_iridium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **iridosmine** | `basaltheavyore1/iridosmine`<br>`mineral/iridosmine` | — | — | — | 仅矿石方块 | — |
| **青金石** lapis | — | — | `asteroidore1/asteroid_lapis_ore` | `blockspace/callisto_lapis_ore` | 粉、板、宝石 | 粉→`mekanism:dust_lapis_lazuli` |
| **磁铁矿** magnetite | `basaltheavyore/magnetite`<br>`heavyore/magnetite` | — | — | — | 仅矿石方块 | — |
| **锰** manganese | `baseore/manganese` | `deepore/deep_manganese_ore` | `asteroidore1/asteroid_manganese` | `blockspace/eris_manganese` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 锭→`industrialupgrade:itemingots/manganese_ingot`<br>粉→`industrialupgrade:itemdust/manganese_dust`<br>块→`industrialupgrade:baseblockingot1/manganese` |
| **陨铁** meteoric | — | — | — | `blockspace3/moon_meteoric_iron_ore` | 锭、板、块 | — |
| **mikhail** | `baseore/mikhail` | `deepore/deep_mikhail_ore` | `asteroidore1/asteroid_mikhail_ore` | `blockspace2/europa_mikhail_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **秘银** mithril | — | — | `asteroidore1/asteroid_mithril_ore` | `blockspace3/mercury_mithril_ore` | 锭、板、块 | — |
| **钼** molybdenum | `baseore2/molybdenum` | `deepore1/deep_molybdenum_ore` | `asteroidore1/asteroid_molybdenum_ore` | `blockspace4/tethys_molybdenum_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 粉→`industrialupgrade:itemdust/molybdenum_dust`<br>块→`industrialupgrade:baseblockingot2/molybdenum` |
| **钕** neodymium | `baseore2/neodymium` | `deepore1/deep_neodymium_ore` | `asteroidore1/asteroid_neodymium_ore` | `blockspace4/triton_neodymium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **nepheline** | `apatite/nepheline` | `deepore2/deep_nepheline_ore` | — | — | 仅矿石方块 | — |
| **neptunium** | `blockradiationore/neptunium_ore` | `deepore2/deep_neptunium_ore` | — | — | 块、宝石 | — |
| **镍** nickel | `baseore/nickel` | `deepore/deep_nickel_ore` | `asteroidore1/asteroid_nickel_ore` | `blockspace4/titan_nickel_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 块→`industrialupgrade:baseblockingot/nickel` |
| **nickelite** | `basaltheavyore/nickelite`<br>`heavyore/nickelite` | — | — | — | 仅矿石方块 | — |
| **铌** niobium | `baseore2/niobium` | `deepore1/deep_niobium_ore` | `asteroidore2/asteroid_niobium_ore` | `blockspace3/proteus_niobium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **山铜** orichalcum | — | — | `asteroidore2/asteroid_orichalcum_ore` | `blockspace/deimos_orichalcum_ore` | 锭、板、块 | — |
| **钯** palladium | `baseore2/palladium` | `deepore1/deep_palladium_ore` | `asteroidore2/asteroid_palladium_ore` | `blockspace3/proteus_palladium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 锭→`industrialupgrade:itemingots/palladium`<br>粉→`industrialupgrade:itemdust/palladium_dust`<br>块→`industrialupgrade:baseblockingot2/palladium` |
| **铂** platinum | `baseore/platinum` | `deepore/deep_platinum_ore` | `asteroidore2/asteroid_platinum_ore` | `blockspace/dione_platinum_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 块→`industrialupgrade:baseblockingot/platinum` |
| **polonium** | `baseore2/polonium` | `deepore1/deep_polonium_ore` | `asteroidore2/asteroid_polonium_ore` | `blockspace4/titania_polonium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 粉→`industrialupgrade:itemdust/polonium_dust` |
| **potassiumphosphate** | `apatite/potassium_phosphate` | `deepore3/deep_potassium_phosphate_ore` | — | — | 仅矿石方块 | — |
| **黄铁矿** pyrite | `basaltheavyore/pyrite`<br>`heavyore/pyrite` | — | — | — | 仅矿石方块 | — |
| **quartzite** | `basaltheavyore/quartzite`<br>`heavyore/quartzite` | — | — | — | 仅矿石方块 | — |
| **红石** redstone | — | — | `asteroidore2/asteroid_redstone_ore` | `blockspace/callisto_redstone_ore` | 粉、宝石 | — |
| **rhodonite** | `basaltheavyore/rhodonite`<br>`heavyore/rhodonite` | — | — | — | 仅矿石方块 | — |
| **红宝石** ruby | `blockpreciousore/ruby_ore` | `deepore2/deep_ruby_ore` | — | — | 块、宝石 | 宝石→`industrialupgrade:preciousgem/ruby_gem` |
| **硝石** saltpeter | `baseore1/saltpeter` | — | — | — | 仅矿石方块 | — |
| **蓝宝石** sapphire | `blockpreciousore/sapphire_ore` | `deepore2/deep_sapphire_ore` | — | — | 块、宝石 | 宝石→`industrialupgrade:preciousgem/sapphire_gem` |
| **白钨矿** sheelite | `basaltheavyore/sheelite`<br>`heavyore/sheelite` | — | — | — | 仅矿石方块 | — |
| **silver_stone** | — | `deepore3/deep_silver_stone_ore` | — | — | 仅矿石方块 | — |
| **smithsonite** | `basaltheavyore/smithsonite`<br>`heavyore/smithsonite` | — | — | — | 仅矿石方块 | — |
| **sodiumphosphate** | `apatite/sodium_phosphate` | `deepore3/deep_sodium_phosphate_ore` | — | — | 仅矿石方块 | — |
| **尖晶石** spinel | `baseore/spinel` | `deepore/deep_spinel_ore` | `asteroidore2/asteroid_spinel_ore` | `blockspace4/umbriel_spinel_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **锶** strontium | `baseore2/strontium` | `deepore2/deep_strontium_ore` | `asteroidore2/asteroid_strontium_ore` | `blockspace4/triton_strontium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **硫** sulfur | `baseore2/sulfur` | `deepore2/deep_sulfur_ore` | `asteroidore2/asteroid_sulfur_ore` | `blockspace2/io_sulfur` | 粉 | 粉→`mekanism:dust_sulfur` |
| **钽** tantalum | `baseore1/tantalum` | `deepore1/deep_tantalum_ore` | — | `blockspace3/phobos_tantalum` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **黝铜矿** tetrahedrite | `basaltheavyore1/tetrahedrite`<br>`mineral/tetrahedrite` | — | — | — | 仅矿石方块 | — |
| **铊** thallium | `baseore2/thallium` | `deepore2/deep_thallium_ore` | `asteroidore2/asteroid_thallium_ore` | `blockspace3/miranda_thallium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **theophrastite** | `basaltheavyore1/theophrastite`<br>`mineral/theophrastite` | — | — | — | 仅矿石方块 | — |
| **钛** titanium | `baseore/titanium` | `deepore/deep_titanium_ore` | `asteroidore2/asteroid_titanium_ore` | `blockspace4/titan_titanium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **todorokite** | `basaltheavyore/todorokite`<br>`heavyore/todorokite` | — | — | — | 仅矿石方块 | — |
| **黄玉** topaz | `blockpreciousore/topaz_ore` | `deepore2/deep_topaz_ore` | — | — | 块、宝石 | — |
| **铀矿** uranite | `basaltheavyore/uranite`<br>`heavyore/uranite` | — | — | — | 仅矿石方块 | — |
| **钒** vanadium | `baseore/vanadium` | `deepore/deep_vanadium_ore` | `asteroidore3/asteroid_vanadium_ore` | `blockspace4/rhea_vanadium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **黑钨矿** wolframite | `basaltheavyore1/wolframite`<br>`mineral/wolframite` | — | — | — | 仅矿石方块 | — |
| **磷钇矿** xenotime | `basaltheavyore1/xenotime`<br>`mineral/xenotime` | — | — | — | 仅矿石方块 | — |
| **钇** yttrium | `baseore2/yttrium` | `deepore1/deep_yttrium_ore` | `asteroidore3/asteroid_yttrium_ore` | `blockspace4/titania_yttrium` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | — |
| **锆石** zircon | `basaltheavyore1/zircon`<br>`mineral/zircon` | — | — | — | 仅矿石方块 | — |
| **锆** zirconium | `baseore2/zirconium` | — | `asteroidore3/asteroid_zirconium_ore` | `blockspace3/miranda_zirconium`<br>`blockspace3/phobos_zirconium_ore` | 原矿、碎矿、锭、粒、粉、板、块、原矿块、齿轮 | 锭→`industrialupgrade:itemingots/zirconium`<br>粉→`industrialupgrade:itemdust/zirconium_dust`<br>块→`industrialupgrade:baseblockingot2/zirconium` |

### 2.2 其他模组（11 种）

| 材料 | 模组 | 矿石 | 产物 | 备注（已统一形态 → canonical） |
| --- | --- | --- | --- | --- |
| **铝** aluminum | neoecoae | `neoecoae:aluminum_ore` | 原矿、锭、粉、块、原矿块 | 锭→`nuclearcraftneohaul:aluminum_ingot`<br>粉→`nuclearcraftneohaul:aluminum_dust`<br>块→`nuclearcraftneohaul:aluminum_block` |
| **黑石英** black_quartz | actuallyadditions | `actuallyadditions:black_quartz_ore` | 块、宝石 | — |
| **卡洛里特** calorite | ad_astra | `ad_astra:deepslate_calorite_ore`<br>`ad_astra:venus_calorite_ore` | 原矿、锭、粒、板、块、原矿块 | — |
| **赛特斯石英** certus_quartz | ae2cs | `ae2cs:certus_quartz_ore`<br>`ae2cs:charged_certus_quartz_ore`<br>`ae2cs:deepslate_certus_quartz_ore`<br>`ae2cs:deepslate_charged_certus_quartz_ore` | 粉、块、宝石 | — |
| **戴斯** desh | ad_astra | `ad_astra:deepslate_desh_ore`<br>`ad_astra:moon_desh_ore` | 原矿、锭、粒、板、块、原矿块 | — |
| **维度碎片** dimensional_shard | rftoolsbase | `rftoolsbase:dimensionalshard_end`<br>`rftoolsbase:dimensionalshard_nether`<br>`rftoolsbase:dimensionalshard_overworld` | 仅矿石方块 | — |
| **萤石** fluorite | mekanism | `mekanism:deepslate_fluorite_ore`<br>`mekanism:fluorite_ore` | 粉、块、宝石 | 粉→`mekanism:dust_fluorite`<br>宝石→`mekanism:fluorite_gem` |
| **冰晶** ice_shard | ad_astra | `ad_astra:deepslate_ice_shard_ore`<br>`ad_astra:glacio_ice_shard_ore`<br>`ad_astra:mars_ice_shard_ore`<br>`ad_astra:moon_ice_shard_ore` | 仅矿石方块 | — |
| **惰性水晶** inert_crystal | elementalcraft | `elementalcraft:deepslate_inert_crystal_ore`<br>`elementalcraft:inert_crystal_ore` | 仅矿石方块 | — |
| **奥斯特姆** ostrum | ad_astra | `ad_astra:deepslate_ostrum_ore`<br>`ad_astra:mars_ostrum_ore` | 原矿、锭、粒、板、块、原矿块 | — |
| **星辉金属** starmetal | astralsorcery | `astralsorcery:starmetal_ore` | 原矿、锭、原矿块 | — |

## 3. 无矿石材料

这些材料没有 `c:ores/*` tag，但存在多模组重复，按 tag 统一。

| 材料 | 形态 | tag | 统一目标 | 同 tag 其他物品 | 状态 |
| --- | --- | --- | --- | --- | --- |
| **青铜** bronze | 锭 | `c:ingots/bronze` | **`industrialupgrade:itemingots/bronze_ingot`** | `mekanism:ingot_bronze`、`nuclearcraftneohaul:bronze_alloy` | ✅ 统一 |
|  | 粒 | `c:nuggets/bronze` | `mekanism:nugget_bronze` | — | 唯一 |
|  | 粉 | `c:dusts/bronze` | **`industrialupgrade:itemdust/bronze_dust`** | `mekanism:dust_bronze` | ✅ 统一 |
|  | 板 | `c:plates/bronze` | `industrialupgrade:itemplates/bronze_plate` | — | 唯一 |
|  | 块 | `c:storage_blocks/bronze` | **`industrialupgrade:blockresource/bronze_block`** | `mekanism:block_bronze` | ✅ 统一 |
| **钢** steel | 锭 | `c:ingots/steel` | **`industrialupgrade:itemingots/steel_ingot`** | `ad_astra:steel_ingot`、`mekanism:ingot_steel`、`nuclearcraftneohaul:steel_alloy` | ✅ 统一 |
|  | 粒 | `c:nuggets/steel` | **`mekanism:nugget_steel`** | `ad_astra:steel_nugget` | ✅ 统一 |
|  | 粉 | `c:dusts/steel` | `mekanism:dust_steel` | — | 唯一 |
|  | 板 | `c:plates/steel` | **`industrialupgrade:itemplates/steel_plate`** | `ad_astra:steel_plate` | ✅ 统一 |
|  | 块 | `c:storage_blocks/steel` | **`industrialupgrade:blockresource/steel_block`** | `ad_astra:steel_block`、`mekanism:block_steel` | ✅ 统一 |
| **硅** silicon | 硅 | `c:silicon` | **`ae2:silicon`** | `enderio:silicon` | ✅ 统一 |
|  | 粉 | `c:dusts/silicon` | `industrialupgrade:itemdust/silicon_dust` | — | 唯一 |
|  | 块 | `c:storage_blocks/silicon` | **`extendedae:silicon_block`** | `ae2cs:silicon_block`、`ae2lt:silicon_block` | ✅ 统一 |
|  | 宝石 | `c:gems/silicon` | `nuclearcraftneohaul:silicon_gem` | — | 唯一 |
| **黑曜石** obsidian | 粉 | `c:dusts/obsidian` | **`industrialupgrade:itemdust/obsidian_dust`** | `create:powdered_obsidian`、`enderio:powdered_obsidian`、`mekanism:dust_obsidian`、`nuclearcraftneohaul:obsidian_gem_dust` | ✅ 统一 |
|  | 板 | `c:plates/obsidian` | **`industrialupgrade:itemplates/obsidian_plate`** | `create:sturdy_sheet` | ✅ 统一 |
| **煤** coal | 粉 | `c:dusts/coal` | **`industrialupgrade:itemdust/coal_dust`** | `enderio:powdered_coal`、`mekanism:dust_coal`、`nuclearcraftneohaul:coal_gem_dust` | ✅ 统一 |
|  | 块 | `c:storage_blocks/coal` | `minecraft:coal_block` | — | 唯一 |
| **末影珍珠** ender_pearl | 粉 | `c:dusts/ender_pearl` | **`ae2:ender_dust`** | `enderio:powdered_ender_pearl` | ✅ 统一 |
| **硫酸钙** calcium_sulfate | 粉 | `c:dusts/calcium_sulfate` | **`industrialupgrade:itemdust/calcium_sulfate_dust`** | `nuclearcraftneohaul:calcium_sulfate` | ✅ 统一 |
| **充能水晶** energized_crystal | 粉 | `c:dusts/energized_crystal` | `neoecoae:energized_crystal_dust` | — | 唯一 |
|  | 块 | `c:storage_blocks/energized_crystal` | `neoecoae:energized_crystal_block` | — | 唯一 |
|  | 宝石 | `c:gems/energized_crystal` | — | `ae2cs:purified_energized_certus_quartz_crystal`、`neoecoae:energized_crystal` | ❌ 不统一 |
| **充能福鲁伊克斯水晶** energized_fluix_crystal | 粉 | `c:dusts/energized_fluix_crystal` | `neoecoae:energized_fluix_crystal_dust` | — | 唯一 |
|  | 块 | `c:storage_blocks/energized_fluix_crystal` | `neoecoae:energized_fluix_crystal_block` | — | 唯一 |
|  | 宝石 | `c:gems/energized_fluix_crystal` | — | `ae2cs:purified_energized_fluix_crystal`、`neoecoae:energized_fluix_crystal` | ❌ 不统一 |
| **超载水晶** overload_crystal | 宝石 | `c:gems/overload_crystal` | — | `ae2cs:purified_overload_crystal`、`ae2lt:overload_crystal` | ❌ 不统一 |

## 4. 不统一清单（21 个 tag）

| tag | 物品 | 原因 |
| --- | --- | --- |
| `c:gears/iron` | `enderio:iron_gear`<br>`industrialforegoing:iron_gear` | EnderIO 与 IndustrialForegoing 的铁齿轮不是同一个物品，保持各自配方；IF 齿轮改用 IU 冲压机 |
| `c:gems/energized_crystal` | `ae2cs:purified_energized_certus_quartz_crystal`<br>`neoecoae:energized_crystal` | ae2cs 的 purified_energized_certus_quartz_crystal 和 neoecoae 的 energized_crystal 是不同进度物品 |
| `c:gems/energized_fluix_crystal` | `ae2cs:purified_energized_fluix_crystal`<br>`neoecoae:energized_fluix_crystal` | 同上，两个模组的充能福鲁伊克斯水晶不是同一个东西 |
| `c:gems/overload_crystal` | `ae2cs:purified_overload_crystal`<br>`ae2lt:overload_crystal` | ae2cs 的 purified_overload_crystal 与 ae2lt 的 overload_crystal 进度不同 |
| `c:ingots/lithium` | `industrialupgrade:crafting_elements/crafting_447_element`<br>`nuclearcraftneohaul:lithium_ingot` | IndustrialUpgrade 的 crafting_elements/crafting_447_element 是特殊进度物品，不是普通锭 |
| `c:ingots/uranium` | `industrialupgrade:itemiucrafring/itemuraningot`<br>`mekanism:ingot_uranium`<br>`nuclearcraftneohaul:uranium_ingot` | IndustrialUpgrade 的 itemiucrafring/itemuraningot 是特殊进度物品，不是普通锭 |
| `c:ores/boron` | `industrialupgrade:asteroidore/asteroid_boron_ore`<br>`industrialupgrade:blockspace3/pluto_boron`<br>`nuclearcraftneohaul:boron_deepslate_ore`<br>`nuclearcraftneohaul:boron_ore` | IndustrialUpgrade 只有太空硼矿，没有主世界硼矿；统一会把太空矿变成主世界矿 |
| `c:ores/copper` | `industrialupgrade:asteroidore/asteroid_copper_ore`<br>`industrialupgrade:blockspace/ceres_copper_ore`<br>`minecraft:copper_ore`<br>`minecraft:deepslate_copper_ore` | IndustrialUpgrade 只有小行星/行星铜矿，没有主世界铜矿；统一会把太空矿变成主世界铜矿 |
| `c:ores/gold` | `industrialupgrade:asteroidore1/asteroid_gold_ore`<br>`industrialupgrade:blockspace2/makemake_gold`<br>`minecraft:deepslate_gold_ore`<br>`minecraft:gold_ore`<br>`minecraft:nether_gold_ore` | IndustrialUpgrade 只有小行星/行星金矿，没有主世界金矿；统一会把太空矿变成主世界金矿 |
| `c:ores/iron` | `industrialupgrade:asteroidore1/asteroid_iron_ore`<br>`industrialupgrade:blockspace/ceres_iron_ore`<br>`minecraft:deepslate_iron_ore`<br>`minecraft:iron_ore` | IndustrialUpgrade 只有小行星/行星铁矿，没有主世界铁矿；统一会把太空矿变成主世界铁矿 |
| `c:ores/lead` | `embers:deepslate_lead_ore`<br>`embers:lead_ore`<br>`industrialupgrade:asteroidore1/asteroid_lead_ore`<br>`industrialupgrade:blockspace/dione_lead_ore`<br>`industrialupgrade:classicore/lead`<br>`industrialupgrade:deepore2/deep_lead_ore`<br>`mekanism:deepslate_lead_ore`<br>`mekanism:lead_ore`<br>`nuclearcraftneohaul:lead_deepslate_ore`<br>`nuclearcraftneohaul:lead_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/lithium` | `industrialupgrade:asteroidore1/asteroid_lithium_ore`<br>`industrialupgrade:baseore1/lithium`<br>`industrialupgrade:blockspace/callisto_lithium_ore`<br>`industrialupgrade:blockspace2/haumea_lithium`<br>`nuclearcraftneohaul:lithium_deepslate_ore`<br>`nuclearcraftneohaul:lithium_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/magnesium` | `industrialupgrade:asteroidore1/asteroid_magnesium`<br>`industrialupgrade:asteroidore1/asteroid_magnesium_ore`<br>`industrialupgrade:baseore/magnesium`<br>`industrialupgrade:blockspace/enceladus_magnesium_ore`<br>`industrialupgrade:blockspace/eris_magnesium`<br>`industrialupgrade:deepore/deep_magnesium_ore`<br>`nuclearcraftneohaul:magnesium_deepslate_ore`<br>`nuclearcraftneohaul:magnesium_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/osmium` | `industrialupgrade:asteroidore2/asteroid_osmium_ore`<br>`industrialupgrade:baseore1/osmium`<br>`industrialupgrade:blockspace4/rhea_osmium_ore`<br>`industrialupgrade:deepore1/deep_osmium_ore`<br>`mekanism:deepslate_osmium_ore`<br>`mekanism:osmium_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/quartz` | `industrialupgrade:asteroidore2/asteroid_quartz_ore`<br>`industrialupgrade:blockpreciousore/quartz_ore`<br>`industrialupgrade:blockspace2/haumea_quartz`<br>`industrialupgrade:deepore2/deep_quartz_ore`<br>`minecraft:nether_quartz_ore`<br>`roots:granite_quartz_ore` | 下界石英、花岗岩石英和 IndustrialUpgrade 石英是不同石种，不能合并 |
| `c:ores/silver` | `embers:deepslate_silver_ore`<br>`embers:silver_ore`<br>`enderio_evolution:deepslate_silver_ore`<br>`enderio_evolution:silver_ore`<br>`industrialupgrade:asteroidore2/asteroid_silver_ore`<br>`industrialupgrade:baseore/silver`<br>`industrialupgrade:blockspace2/makemake_silver`<br>`industrialupgrade:deepore/deep_silver_ore`<br>`mekmm:deepslate_silver_ore`<br>`mekmm:silver_ore`<br>`roots:deepslate_silver_ore`<br>`roots:silver_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/thorium` | `industrialupgrade:deepore2/deep_thorium_ore`<br>`industrialupgrade:thorium_ore/thorium_ore`<br>`nuclearcraftneohaul:thorium_deepslate_ore`<br>`nuclearcraftneohaul:thorium_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/tin` | `industrialupgrade:asteroidore2/asteroid_tin_ore`<br>`industrialupgrade:blockspace3/moon_tin_ore`<br>`industrialupgrade:classicore/tin`<br>`industrialupgrade:deepore2/deep_tin_ore`<br>`mekanism:deepslate_tin_ore`<br>`mekanism:tin_ore`<br>`nuclearcraftneohaul:tin_deepslate_ore`<br>`nuclearcraftneohaul:tin_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/tungsten` | `industrialupgrade:asteroidore2/asteroid_tungsten_ore`<br>`industrialupgrade:baseore/tungsten`<br>`industrialupgrade:blockspace2/ganymede_tungsten_ore`<br>`industrialupgrade:deepore/deep_tungsten_ore`<br>`neoecoae:tungsten_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/uranium` | `industrialupgrade:classicore/uranium`<br>`industrialupgrade:deepore2/deep_uranium_ore`<br>`mekanism:deepslate_uranium_ore`<br>`mekanism:uranium_ore`<br>`nuclearcraftneohaul:uranium_deepslate_ore`<br>`nuclearcraftneohaul:uranium_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |
| `c:ores/zinc` | `create:deepslate_zinc_ore`<br>`create:zinc_ore`<br>`industrialupgrade:asteroidore3/asteroid_zinc_ore`<br>`industrialupgrade:baseore/zinc`<br>`industrialupgrade:blockspace/charon_zinc`<br>`industrialupgrade:deepore/deep_zinc_ore` | 矿石含主世界/深层/太空等多种变种，统一会丢失种类，全部跳过 |

## 5. 维护流程

1. 改矿石/材料的统一决定：编辑 `unify-tags.json` 里的 `unify`，或改 `unify_tags.py` 的 `DEFAULT_UNIFY` / `TAG_OVERRIDES`。
2. 重新生成配置：

   ```
   python unify_tags.py review   # 重新扫描 jar，刷新 unify-tags.json / unify-review.md
   python unify_tags.py apply    # 写入 Almost Unified 与 InstantUnify 配置
   python unify_tags.py status   # 复核 131 true / 21 false
   ```

3. 完全退出游戏再启动。Almost Unified 在启动时读取 tag 并改写配方，`/reload` 不会重新加载。
4. 自定义配方类型（如 `roots:pyre` 的 `data.result`）不受 AU 改写，必须手写本文档里的 canonical id。
5. 本文档的 canonical 目标按 `unify-tags.json` 的 `mod_priorities` 取「该 tag 内优先级最高的模组物品」；
   改优先级后需要同步更新本文档。

## 6. 其他已统一的 tag（60 个）

前文按矿石和材料列出的 tag 之外，还有这些已统一的多模组 tag（含 QMD 等新模组材料）；
这里只列 canonical 目标，未并入前面的材料小节。

| tag | 统一目标 | 同 tag 其他物品 |
| --- | --- | --- |
| `c:dusts/aluminum` | **`nuclearcraftneohaul:aluminum_dust`** | `neoecoae:aluminum_dust` |
| `c:dusts/arsenic` | **`industrialupgrade:itemdust/arsenic_dust`** | `nuclearcraftneohaul:arsenic_gem_dust` |
| `c:dusts/barium` | **`industrialupgrade:itemdust/barium_dust`** | `qmd:dust_barium` |
| `c:dusts/bismuth` | **`industrialupgrade:itemdust/bismuth_dust`** | `nuclearcraftneohaul:bismuth_dust` |
| `c:dusts/chromium` | **`industrialupgrade:itemdust/chromium_dust`** | `qmd:dust_chromium` |
| `c:dusts/cobalt` | **`industrialupgrade:itemdust/cobalt_dust`** | `qmd:dust_cobalt` |
| `c:dusts/diamond` | **`industrialupgrade:itemdust/diamond_dust`** | `appflux:diamond_dust`、`mekanism:dust_diamond`、`nuclearcraftneohaul:diamond_gem_dust` |
| `c:dusts/emerald` | **`industrialupgrade:itemdust/emerald_dust`** | `appflux:emerald_dust`、`mekanism:dust_emerald` |
| `c:dusts/fluorite` | **`mekanism:dust_fluorite`** | `nuclearcraftneohaul:fluorite_gem_dust` |
| `c:dusts/gadolinium` | **`industrialupgrade:itemdust/gadolinium_dust`** | `nuclearcraftneohaul:gadolinium_dust` |
| `c:dusts/hafnium` | **`industrialupgrade:itemdust/hafnium_dust`** | `qmd:dust_hafnium` |
| `c:dusts/iridium` | **`industrialupgrade:itemdust/iridium_dust`** | `qmd:dust_iridium` |
| `c:dusts/lapis` | **`industrialupgrade:itemdust/lapis_dust`** | `enderio:powdered_lapis_lazuli`、`mekanism:dust_lapis_lazuli` |
| `c:dusts/manganese` | **`industrialupgrade:itemdust/manganese_dust`** | `nuclearcraftneohaul:manganese_dust` |
| `c:dusts/molybdenum` | **`industrialupgrade:itemdust/molybdenum_dust`** | `nuclearcraftneohaul:molybdenum_dust` |
| `c:dusts/neodymium` | **`industrialupgrade:itemdust/neodymium_dust`** | `qmd:dust_neodymium` |
| `c:dusts/nickel` | **`industrialupgrade:itemdust/nickel_dust`** | `qmd:dust_nickel` |
| `c:dusts/niobium` | **`industrialupgrade:itemdust/niobium_dust`** | `qmd:dust_niobium` |
| `c:dusts/palladium` | **`industrialupgrade:itemdust/palladium_dust`** | `nuclearcraftneohaul:palladium_dust` |
| `c:dusts/platinum` | **`industrialupgrade:itemdust/platinum_dust`** | `qmd:dust_platinum` |
| `c:dusts/polonium` | **`industrialupgrade:itemdust/polonium_dust`** | `nuclearcraftneohaul:polonium_dust` |
| `c:dusts/potassium` | **`industrialupgrade:itemdust/potassium_dust`** | `qmd:dust_potassium` |
| `c:dusts/salt` | **`mekanism:salt`** | `qmd:chemical_dust_sodium_chloride` |
| `c:dusts/sodium` | **`industrialupgrade:itemdust/sodium_dust`** | `qmd:dust_sodium` |
| `c:dusts/strontium` | **`industrialupgrade:itemdust/strontium_dust`** | `qmd:dust_strontium` |
| `c:dusts/sulfur` | **`industrialupgrade:itemdust/sulfur_dust`** | `mekanism:dust_sulfur`、`nuclearcraftneohaul:sulfur_gem_dust` |
| `c:dusts/titanium` | **`industrialupgrade:itemdust/titanium_dust`** | `qmd:dust_titanium` |
| `c:dusts/yttrium` | **`industrialupgrade:itemdust/yttrium_dust`** | `qmd:dust_yttrium` |
| `c:dusts/zirconium` | **`industrialupgrade:itemdust/zirconium_dust`** | `nuclearcraftneohaul:zirconium_dust` |
| `c:gems/fluorite` | **`mekanism:fluorite_gem`** | `nuclearcraftneohaul:fluorite_gem` |
| `c:gems/ruby` | **`industrialupgrade:preciousgem/ruby_gem`** | `projectred_core:ruby` |
| `c:gems/sapphire` | **`industrialupgrade:preciousgem/sapphire_gem`** | `projectred_core:sapphire` |
| `c:ingots/aluminum` | **`nuclearcraftneohaul:aluminum_ingot`** | `neoecoae:aluminum_ingot` |
| `c:ingots/barium` | **`industrialupgrade:itemingots/barium`** | `qmd:ingot_barium` |
| `c:ingots/chromium` | **`industrialupgrade:itemingots/chromium_ingot`** | `qmd:ingot_chromium` |
| `c:ingots/cobalt` | **`industrialupgrade:itemingots/cobalt_ingot`** | `qmd:ingot_cobalt` |
| `c:ingots/gadolinium` | **`industrialupgrade:itemingots/gadolinium`** | `nuclearcraftneohaul:gadolinium_ingot` |
| `c:ingots/hafnium` | **`industrialupgrade:itemingots/hafnium`** | `qmd:ingot_hafnium` |
| `c:ingots/iridium` | **`industrialupgrade:itemingots/iridium_ingot`** | `qmd:ingot_iridium` |
| `c:ingots/manganese` | **`industrialupgrade:itemingots/manganese_ingot`** | `nuclearcraftneohaul:manganese_ingot` |
| `c:ingots/neodymium` | **`industrialupgrade:itemingots/neodymium`** | `qmd:ingot_neodymium` |
| `c:ingots/nichrome` | **`industrialupgrade:alloyingot/nichrome`** | `qmd:ingot_nichrome` |
| `c:ingots/nickel` | **`industrialupgrade:itemingots/nickel_ingot`** | `qmd:ingot_nickel` |
| `c:ingots/niobium` | **`industrialupgrade:itemingots/niobium`** | `qmd:ingot_niobium` |
| `c:ingots/osmiridium` | **`industrialupgrade:alloyingot/osmiridium`** | `qmd:ingot_osmiridium` |
| `c:ingots/palladium` | **`industrialupgrade:itemingots/palladium`** | `nuclearcraftneohaul:palladium_ingot` |
| `c:ingots/platinum` | **`industrialupgrade:itemingots/platinum_ingot`** | `qmd:ingot_platinum` |
| `c:ingots/strontium` | **`industrialupgrade:itemingots/strontium`** | `qmd:ingot_strontium` |
| `c:ingots/titanium` | **`industrialupgrade:itemingots/titanium_ingot`** | `qmd:ingot_titanium` |
| `c:ingots/yttrium` | **`industrialupgrade:itemingots/yttrium`** | `qmd:ingot_yttrium` |
| `c:ingots/zirconium` | **`industrialupgrade:itemingots/zirconium`** | `nuclearcraftneohaul:zirconium_ingot` |
| `c:storage_blocks/aluminum` | **`nuclearcraftneohaul:aluminum_block`** | `neoecoae:aluminum_block` |
| `c:storage_blocks/cobalt` | **`industrialupgrade:baseblockingot/cobalt`** | `nuclearcraftneohaul:cobalt_block` |
| `c:storage_blocks/gadolinium` | **`industrialupgrade:baseblockingot2/gadolinium`** | `nuclearcraftneohaul:gadolinium_block` |
| `c:storage_blocks/manganese` | **`industrialupgrade:baseblockingot1/manganese`** | `nuclearcraftneohaul:manganese_block` |
| `c:storage_blocks/molybdenum` | **`industrialupgrade:baseblockingot2/molybdenum`** | `nuclearcraftneohaul:molybdenum_block` |
| `c:storage_blocks/nickel` | **`industrialupgrade:baseblockingot/nickel`** | `nuclearcraftneohaul:nickel_block` |
| `c:storage_blocks/palladium` | **`industrialupgrade:baseblockingot2/palladium`** | `nuclearcraftneohaul:palladium_block` |
| `c:storage_blocks/platinum` | **`industrialupgrade:baseblockingot/platinum`** | `nuclearcraftneohaul:platinum_block` |
| `c:storage_blocks/zirconium` | **`industrialupgrade:baseblockingot2/zirconium`** | `nuclearcraftneohaul:zirconium_block` |

