# 矿石生成：维度分层 + 原生 feature

> 基线：MC 1.21.1 / NeoForge / IU 3.4.0.11 / KubeJS 2101.7.2 / Paxi 5.1.3 / Ad Astra 1.16.26 / AdLods 9.1.7.0
> 定位：**IU 矿脉机制禁用之后，主世界的矿从哪来**。本文只回答"哪种矿、在哪个维度、多密、怎么挖、
> 什么工具能挖"，不碰选矿与冶金段。
> 相关：`ORE_UNIVERSAL_LINE.md`（R0–R6 加工阶梯）、`METAL_PROGRESSION.md`（逐金属首次可得阶段）、
> `PROGRESSION_MINERAL.md`（矿物处理支线的任务排布）、`MIDGAME_PLAN.md`（末地=中期）、
> `PGM_LINE.md`（锇/铱的唯一来源）、`ORE_ITEM_MAP.md`（物品统一口径）、`EARLY_METALLURGY.md`（L0–L2 炉子）
>
> 状态：**已落地**。数据包 `config/paxi/datapacks/sj-oregen`（332 个 JSON）由
> `kubejs/tools/gen_oregen.py` 生成；封禁脚本与 AdLods 修正在 §7 / §8。**待进游戏验收**（§12）。
> 任务书侧：三章 21 格由 `kubejs/tools/gen_mining_quests.py` 生成，落点见 **§14**。

---

## 0. 一句话

**维度就是门**：主世界只做常见矿并还原原版节奏，下界做火山热液，末地做镍与两种复合矿，
难熔金属进 Ad Astra 的行星；铜铁煤各给一条原生大矿脉。**铂族与稀土没有矿**：它们的原矿
（矿石方块 + 粗制原矿）整层删掉了，这两种金属只能从湿法线来（§4.6、§7.3）。实现全部是原版
`configured_feature` + `placed_feature` + `biome_modifier`，一条 `/place feature` 就能验。

---

## 1. 现状审计

### 1.1 五条事实

| # | 事实 | 依据 |
| --- | --- | --- |
| 1 | IU 默认矿表关闭：`["Generation ores"] defaultSpawnEnabled = false` | `config/industrialupgrade-common.toml` |
| 2 | IU 矿脉被数据包关掉：`vein_modifier`、`remove_default_ores` 都改成 `neoforge:none` | `config/paxi/datapacks/sj-no-ore-veins/` |
| 3 | 第 2 条顺带让 IU「删原版矿」那步失效，原版矿仍在正常生成 | IU jar 内该 biome_modifier 原列 20 条 `minecraft:ore_*` |
| 4 | `global_ores` 在 `defaultSpawnEnabled=false` 时**直接 return false** | `GlobalOreFeature#place` 字节码首段 |
| 5 | 该特征只挂 `#minecraft:is_overworld`，太空/行星矿不受它影响 | `global_ores_modifier.json` |

结论：**主世界一块 IU 矿都没有**。油脉/气脉不受影响（`sj-no-ore-veins` 的描述就是"只保留油脉与气脉"）。

### 1.2 当时谁在长矿

原版全套（煤铜铁金银红石青金钻石绿宝石、下界石英/金、远古残骸）；Mekanism 锡/锇/铀/萤石；
mekmm + enderio_evolution 银；NuclearCraft 硼/铅/锂/镁/钍/锡/铀；Create 锌；
AA 黑石英、AE2cs 赛特斯、Spectrum 光谱矿、ElementalCraft 惰性水晶；末地与 Ad Astra 行星各有自带矿。

### 1.3 缺口

**32 种金属没有主世界来源**：镍钴锰铬钛钒钼钨、镉铋砷、镉铋砷铊、镓锗、锶钡钙、锂铍硼、铝镁、
钽铌铌锆铪、钕钆钇、铂钯铱；外加硫、氟磷灰石、霞石、磷酸盐、硝石，29 种重矿
（磁铁矿/方铅矿/黄铁矿/白钨矿/磷钇矿/铱锇矿…）与宝石。

这条链当时是断的：`ore_line.js` 的 87 条配方、蒸汽矿物分离器、
`iu_chem_migration.js:586` 那条"黄铁矿 ×4 + 氧 → 铁粉 + 硫氧化物"的釜配方，全在等料。

---

## 2. 四条原则

1. **维度就是门。** 矿在哪一层由维度决定，不靠删配方、不靠物品 stage 锁。
   现实里的金属本来就按地质环境分布，维度的"环境差异"正好当分层依据。
2. **常见矿还原原版节奏。** 原版 20 条 ore feature 一条不动；新加的常见矿按原版的
   `count / size / height_range` 口径给（小脉、多层、数量适中），不做"一进洞全是矿"。
3. **只补缺口，冲突按 IU 优先。** 同一个金属有多份来源时按 `IU > NuclearCraft`、`IU > Mekanism`
   合并，只留一份；Mek 独有的（萤石）与 PGM 副产的（锇）不动。
4. **大矿脉用原生手法。** `minecraft:ore` 的大 `size` + `rarity_filter` + `discard_chance_on_air_exposure`，
   和原版 `ore_diamond_large` 同款；不引入第二套矿脉系统（AdLods 只当调味，见 §8）。

**不做清单**：不做 IU `orespawn` 接管（没有维度/群系字段）、不做维度专属机器、
不给原矿物品挂 AStages、不为了"看起来丰富"而在主世界堆后期金属。

---

## 3. 维度地图

| 维度 | 可替换方块 | 门槛 | 矿组 |
| --- | --- | --- | --- |
| 主世界 | `#minecraft:stone_ore_replaceables` + `#minecraft:deepslate_ore_replaceables` | 无 | 常见矿 + 铜/铁/煤大矿脉 |
| 下界 | `#minecraft:base_stone_nether`（下界岩/玄武岩/黑石） | 下界门 | 硫、砷、铋、铊、8 种玄武岩重矿 |
| 末地 | `minecraft:end_stone` | `gate.end`（蒸汽末期） | 镍、钴、铬、锰、铂族、钍、宝石 |
| Ad Astra 月球 | `ad_astra:moon_stone`、`ad_astra:moon_deepslate` | 太空章节 | 钛、钒、锆 |
| Ad Astra 水星 | `ad_astra:mercury_stone` | 太空章节 | 钨、钼、钽、铌 |
| Ad Astra 火星 | `ad_astra:mars_stone` | 太空章节 | 钕、钆、钇、铪 |
| Ad Astra 冰星 | `ad_astra:glacio_stone` | 太空章节 | 锂、铍 |
| IU 太空 34 维 | — | **玩家入口封禁**（§7.1） | 维度覆盖成虚空；无人远征保留，出矿按 §4.7 |

**为什么镍在末地**：`MIDGAME_PLAN.md:158` 早就写了"末地镍矿由冒险侧落点，科技侧只接产物"，
而末地是蒸汽末期的门票，正好对上镍钴的电力段门槛。镍钴是超基性/硫化矿组合，末地石 + 陨铁的
设定也比"主世界深板岩里冒镍"更像回事。铂族与镍同层，接 `PGM_LINE.md` 的"镍阳极泥 → 铂族"。

**为什么难熔金属进 Ad Astra**：`METAL_PROGRESSION.md` 把锆铪铀钍排在"触及星辰/深入原子"，
钨钼钽铌靠氢还原与垂熔，都属于后期。Ad Astra 是本包实际在用的太空体系（IU 那套封了玩家入口），
所以后期矿落在它的四颗行星上，每颗按现实气质分工：水星金属富集 → 难熔金属；火星风化层 →
稀土与锆铪；月球斜长岩/钛铁矿 → 钛钒；冰星挥发分 → 锂铍。

---

## 4. 矿表

### 4.1 主世界（常见矿）

| 矿 | 石质方块 | 深板岩方块 | y | count × size | 期望块/区块 |
| --- | --- | --- | --- | --- | ---: |
| 锡 | `classicore/tin` | `deepore2/deep_tin_ore` | −16..96 | 4×8 | 32 |
| 铅 | `classicore/lead` | `deepore2/deep_lead_ore` | −32..64 | 3×7 | 21 |
| 锌 | `baseore/zinc` | `deepore/deep_zinc_ore` | 0..80 | 3×7 | 21 |
| 银 | `baseore/silver` | `deepore/deep_silver_ore` | −48..32 | 2×6 | 12 |
| 铝（铝土） | `baseore/aluminium` | `deepore/deep_aluminium_ore` | 48..96 | 3×8 | 24 |
| 铀 | `classicore/uranium` | `deepore2/deep_uranium_ore` | −56..16 | 2×5 | 10 |
| 硫 | `baseore2/sulfur` | `deepore2/deep_sulfur_ore` | −48..16 | 3×7 | 21 |
| 硝石 | `baseore1/saltpeter` | — | 32..80 | 2×6 | 12 |
| 硼砂 | `baseore1/bor` | — | 16..64 | 1×4 | 4 |
| 钙 | `baseore1/calcium` | `deepore1/deep_calcium_ore` | 8..56 | 1×4 | 4 |
| 锶 | `baseore2/strontium` | `deepore2/deep_strontium_ore` | −32..24 | 1×4 | 4 |
| 钡 | `baseore2/barium` | `deepore1/deep_barium_ore` | −32..24 | 1×4 | 4 |
| 镓（伴生） | `baseore2/gallium` | `deepore1/deep_gallium_ore` | −48..0 | 1×3 | 3 |
| 锗（伴生） | `baseore/germanium` | `deepore/deep_germanium_ore` | −48..0 | 1×3 | 3 |

方块 id 全部加前缀 `industrialupgrade:`。一个 feature 写两个 targets（石质 tag / 深板岩 tag），
原版铜铁同款写法，所以 y<0 也有矿。

### 4.2 下界（火山热液）

| 矿 | 方块 | y | count × size | 期望块/区块 |
| --- | --- | --- | --- | ---: |
| 砷 | `baseore2/arsenic` | 0..64 | 2×6 | 12 |
| 铋 | `baseore2/bismuth` | 0..48 | 1×4 | 4 |
| 铊 | `baseore2/thallium` | 0..32 | 1×3 | 3 |
| 磁铁矿 | `basaltheavyore/magnetite` | 0..64 | 1×8，rarity 2 | 4 |
| 黄铁矿 | `basaltheavyore/pyrite` | 0..64 | 1×8，rarity 2 | 4 |
| 方铅矿 | `basaltheavyore/galena` | 0..64 | 1×8，rarity 2 | 4 |
| 镍铁矿 | `basaltheavyore/nickelite` | 0..64 | 1×8，rarity 2 | 4 |
| 钛铁矿 | `basaltheavyore/ilmenite` | 0..64 | 1×8，rarity 2 | 4 |
| 白钨矿 | `basaltheavyore/sheelite` | 0..64 | 1×8，rarity 2 | 4 |
| 石英岩 | `basaltheavyore/quartzite` | 0..64 | 1×8，rarity 2 | 4 |
| 硅钙铀钍矿 | `basaltheavyore/uranite` | 0..64 | 1×8，rarity 2 | 4 |

`basaltheavyore*` 是 IU 的"玄武岩底重矿"，贴图本来就是玄武岩，放在下界比放主世界合适。
黄铁矿/方铅矿从这里出，蒸汽矿物分离器与硫酸线就有料了（`iu_chem_migration.js:586` 吃黄铁矿）。

### 4.3 末地（镍与电力段）

| 矿 | 方块 | y | count × size | 期望块/区块 |
| --- | --- | --- | --- | ---: |
| 镍 | `baseore/nickel` | 0..80 | 6×8 | 48 |
| 钴 | `baseore/cobalt` | 0..80 | 5×7 | 35 |
| 铬 | `baseore/chromium` | 0..64 | 3×6 | 18 |
| 锰 | `baseore/manganese` | 0..64 | 3×6 | 18 |
| 钍 | `thorium_ore/thorium_ore` | 16..56 | 1×4，rarity 2 | 2 |
| 硫镍钯铂矿 / 铱锇矿 | `mineral/braggite`、`mineral/iridosmine` | 8..48 | 1×6，rarity 2 | 各 3 |
| 红宝石 | `blockpreciousore/ruby_ore` | 24..56 | 1×3，rarity 2 | 1.5 |
| 蓝宝石 | `blockpreciousore/sapphire_ore` | 24..56 | 1×3，rarity 2 | 1.5 |
| 黄玉 | `blockpreciousore/topaz_ore` | 24..56 | 1×3，rarity 2 | 1.5 |
| 宝石石英 | `blockpreciousore/quartz_ore` | 24..56 | 1×3，rarity 2 | 1.5 |

> 高度全部压在末地石真正存在的那一段（实测末地石集中在 y=0..79，y<0 是空气）：
> 原先宝石写 −64..−16、钍写 −48..16，扫存档发现这五种一块都没生成，已抬到 24..56 / 16..56。

末地石只有一种，所以每个 feature 只写一个 `block_match: minecraft:end_stone` target，文件最短。
`mineral/iridosmine` 是 `PGM_LINE.md` 的进料之一（铱锇渣 → 四氧化锇 → 锇粉），
所以 Mek 的锇矿可以放心关（§6.2）。

> **铂 / 钯 / 铱的矿已删**（2026-11-26）：这三种金属在同层原来各摊 2 块/区块，
> 但只要有粗制原矿，IU 的粉碎→洗净→离心、Create 的 `crushing/raw_platinum`、
> NC 的熔盐炉都能把它换成锭，等于绕开 16 步湿法线。现在末地这一层只留镍与两种复合矿，
> 铂族从镍精矿与阳极泥来（`PGM_LINE.md`）。

### 4.4 Ad Astra（后期维度）

| 行星 | 矿 | 方块 | count × size | 期望块/区块 |
| --- | --- | --- | --- | ---: |
| 月球 | 钛 / 钒 / 锆 | `baseore/titanium`、`baseore/vanadium`、`baseore2/zirconium` | 2×6 / 1×5 / 1×6 | 12 / 5 / 6 |
| 水星 | 钨 / 钼 | `baseore/tungsten`、`baseore2/molybdenum` | 2×8 | 各 16 |
| 水星 | 钽 / 铌 | `baseore1/tantalum`、`baseore2/niobium` | 1×6 | 各 6 |
| 火星 | 独居石 | `kubejs:monazite_ore`（KubeJS 注册） | 3×6 | 18 |
| 火星 | 铪 | `baseore2/hafnium` | 1×6 | 6 |
| 冰星 | 锂 / 铍 | `baseore1/lithium`、`baseore1/beryllium` | 1×4 | 各 4 |

> **钕 / 钆 / 钇的矿已删，换成一份独居石**（2026-11-26）：那三种单元素矿既能被 IU 的三段机器
> 换成粉、又能被 NC 熔盐炉换成熔融金属，都是绕开湿法线的路子，所以连粗制原矿一起删掉（§7.3）。
> 稀土改由 `kubejs:monazite_ore`（独居石矿）供给：一块掉 2 份独居石，4 份浮选出 1 份精矿，
> 与原先"1 份稀土原矿 → 0.5 份精矿"的口径一致。一份矿里同时含铈镧钕钆钇，正是现实独居石的样子。
> 方块与掉落见 `RARE_EARTH_LINE.md` §9.1。

Ad Astra 的 biome 不是靠 biome_modifier 挂矿的（它的矿写在 biome JSON 的 `features` 里），
所以我们反向操作：自己建 `#sj:{moon,mercury,mars,glacio}` 四个 biome tag，用
`neoforge:add_features` 把 feature 叠到它上面。它自带的 ostrom/calorite/desh/冰晶/铁铜一个不动。

### 4.5 大矿脉（原生）

铜、铁、煤各一条：

| 参数 | 值 | 说明 |
| --- | --- | --- |
| `size` | 48 | 原版大矿脉的量级（`ore_copper_large` 是 20，`ore_diamond_large` 是 12） |
| `count` | 1 | 每区块只试一次 |
| `rarity_filter` | 16 | 十六分之一区块才会试 |
| `discard_chance_on_air_exposure` | 0.6 | 露出空气就六成丢弃，避免刷在地表 |
| `height_range` | 铜/铁 −32..72，煤 0..128 | trapezoid 更贴近原版，这里用 uniform 便于读 |

平均只摊 3 块/区块，撞上就是几百块的一整条矿体——这是"原生的大型矿脉"，
原版自带的噪声矿脉（`ore_veins_enabled: true`，大铜/铁脉）保持开启，两者不冲突。

### 4.6 不生成的

| 条目 | 理由 |
| --- | --- |
| `blockradiationore/{americium,curium,neptunium}`、`polonium` | 天然不存在，应来自反应堆/粒子 |
| `platinum` / `palladium` / `iridium` 矿 | 铂族是硫化物固溶体，工业来源是镍精矿与阳极泥；有矿就能绕过湿法线（§7.3） |
| `neodymium` / `gadolinium` / `yttrium` 矿 | 稀土不做单元素矿；有矿就能绕过稀土湿法线（§7.3） |
| `invar` / `electrum` 矿 | 自然界没有合金矿 |
| `mikhail` / `spinel` 的深层版本 | 虚构磨料，主世界浅层够了（本次未放，留给后期按需补） |

> 例外：完美级航天器才到得了的五颗远处天体仍出这六种单元素矿，见 §4.7。

### 4.7 IU 太空远征（无人，不生成方块）

IU 的探测器 / 卫星 / 漫游车 / 火箭（太空模块「采矿」那条线）给的是**矿块物品**，
不生成方块，所以 §4.1–§4.4 的维度分层管不到它；IU 自己那张表又是写死的，
30 个可采天体各 2~6 种矿，里面有"月球出锡和陨铁"这种随机分配，也有 §4.6 已经删掉的
铂 / 钯 / 铱 / 钕 / 钆 / 钇单元素矿——拿到矿块就能走 IU 的粉碎→洗净，等于绕开湿法线。

现在整张表按本文的分层重排（`sinkjourneycore` 的 `IuSpaceCatalogMixin` + `SpaceOreTable`）：
**天体按地质归到已有的某一层，只出那一层的矿**。坩埚里没有的矿石不再从太空来。

| 层 | 天体 | 出矿（沿用 §4 的方块） |
| --- | --- | --- |
| 月球层 §4.4 | moon、phobos、deimos、proteus | 钛 / 钒 / 锆 / 陨铁 |
| 水星层 §4.4 | mercury | 钨 / 钼 / 钽 / 铌 |
| 火星层 §4.4 | mars | 独居石（给物品 `kubejs:monazite`，按一块矿掉 2 份翻倍）/ 铪 |
| 冰星层 §4.4 | europe、ganymede、callisto、enceladus、rhea、tethys、titania、oberon、ariel | 锂 / 铍 |
| 末地层 §4.3 | asteroids | 镍 / 钴 / 铬 / 锰 + 硫镍钯铂矿 / 铱锇矿（复合矿，不是单元素铂族） |
| 下界层 §4.2 | venus、io | 砷 / 铋 / 铊 / 硫 |
| 主世界层 §4.1 | ceres | 锡 / 铅 / 锌 / 银 / 铝 |
| 主世界层 §4.1（挥发分 / 盐类） | titan、dione、mimas、umbriel、miranda、triton | 硼砂 / 钙 / 锶 / 钡 / 镓 |
| **完美级层（后期例外）** | pluto、charon、eris、makemake、haumea | 铂 / 钯 / 铱 + 钕 / 钆 / 钇（单元素矿，见下） |

三条约定：

1. **只换矿种，不换节奏**。每个天体原来有几条"卫星 / 火箭出矿"的条目，替换后还是几条，
   `count / chance / percent` 原样沿用，矿种按上表循环填。石头、卵石、流体资源不动。
2. **殖民地一起改**。殖民地的采矿产出走 `ColonyNet` 的另一张表，同样是矿块物品；
   只改远征的话，铂族与单元素稀土还会从殖民地漏出来，所以那张表按同一份对照重排，等级与数量不变。
3. **单元素铂族 / 稀土只在完美级天体出**。铂钯铱在别处只从 `PGM_LINE.md` 的镍精矿 / 阳极泥来，
   钕钆钇只从独居石来；只有 `EnumRoversLevel.FOUR`（完美级）才到得了的五颗远处天体
   ——pluto、charon、eris、makemake、haumea——照旧直接出这六种单元素矿。
   这是 §4.6「有矿就绕开湿法线」的唯一例外，理由很简单：绕开只在最后一档航天器上解锁，
   而不是中期的月球 / 水星就能拿到。
4. **虚构矿留在原处**。米哈洛夫、尖晶石、精金、秘银、山铜、龙矿、血石这几种现实里没有的矿
   矿物文档没有分层，也就不参与重排，仍按 IU 原来的分配留在 europe / umbriel / mars / mercury /
   deimos / ariel / mimas，免得 IU 自己那套用它们的配方断料。

实现位置：`Sink-Journey-Core/src/main/java/com/vbiafe/sjcore/space/SpaceOreTable.java`
（`ORE_BY_BODY` 一张表，改矿只改这张表），挂在
`SpaceBootstrap.ensureSpaceCatalogInitialized` 的返回点，只跑一次。启动日志会打
「IU 太空矿表已按矿物文档重排：N 个天体、M 条远征出矿、K 条殖民地出矿」。

---

## 5. 三道门

| 门 | 手段 | 效果 |
| --- | --- | --- |
| **维度门** | §3 的分层 | 镍要过末地门，难熔金属与稀土要进太空 |
| **工具门** | 方块 tag `#minecraft:needs_iron_tool`（35 块）/ `#minecraft:needs_diamond_tool`（15 块），其余 20 块不挂 tag | IU 三个矿块类构造里都有 `requiresCorrectToolForDrops()`，tag 直接生效：末地层与下界重矿要铁镐，铂族/钍/难熔金属与稀土要钻石镐，主世界常见矿与原版同级 |
| **工艺门** | R0 直烧 1.0 → R1 起要粉碎机 | 挖到不等于能用；粉碎/洗选/选矿都在 `era.electric` 之后（`config/astages/simple/astages/item.json`） |

**为什么不给原矿挂 AStages**：`METAL_PROGRESSION.md §8` 的口径是"门在工艺，不在矿石颜色"。

**工具门的一个坑（已修）**：`gen_oregen.py` 早先写的是
`(iron_tool if tool == "iron" else diamond_tool)`——表里 `stone` 一级的行也被塞进了
`needs_diamond_tool`，于是主世界的铜铁煤矿、锌铝硫、钙锶钡硼硝石全要求钻石镐。
钻石镐要铁镐才挖得到，铁镐又要钻石镐才挖得了铁：直接死锁。现在只有 `iron` / `diamond`
两档进 tag，`stone` 一级不挂（回到原版木头/石镐的节奏），`test_oregen.py` 多一条
「原版级矿不被钻石镐锁死」兜住。
把镍原矿锁到电力时代，会出现"在末地挖到了却拿不起来"，而 R0 只给 1.0 锭已经足够。

---

## 6. 冲突合并（IU 优先）

同一金属多份来源会在世界里互相稀释、在 JEI 里出现两套矿块，所以按 §2 原则 3 合并。

### 6.1 NuclearCraft：14 条 biome_modifier 关掉

`boron / lead / lithium / magnesium / thorium / tin / uranium` 的 `*_large` 与 `*_small`
全部覆盖成 `{"type": "neoforge:none"}`（数据包里同路径覆盖）。

NC 自己的冶炼配方只吃它的矿块，失效后不影响燃料线——它吃 `c:` 标签，IU 的原矿/碎矿统一后照样进得去。

### 6.2 Mekanism：3 条 biome_modifier 关掉

`tin / uranium / osmium` 覆盖成 `neoforge:none`；萤石不动（Mek 独有）。

锇之所以能关：`PGM_LINE.md` 的铱锇渣 → 四氧化锇 → 氯锇酸液 → 锇粉 已经是完整的锇来源，
末地还放了 `mineral/iridosmine` 当进料。至此锡/铀/锇都只剩一条来源。

### 6.3 其余重复矿：一次列全

| 模组 | 关掉的 biome_modifier | 金属 | 为什么 |
| --- | --- | --- | --- |
| NuclearCraft | `*_large` + `*_small`（7 种 × 2） | 硼/铅/锂/镁/钍/锡/铀 | 全部由 IU 矿块供给 |
| Mekanism | `tin` / `uranium` / `osmium` | 锡/铀/锇 | 锇改由 `PGM_LINE` 处理（萤石保留，Mek 独有） |
| Create | `zinc_ore` | 锌 | IU `baseore/zinc` 已在主世界放了 21 块/区块 |
| mekmm | `silver` | 银 | 与 IU 银重复 |
| EnderIO Evolution | `silver_ore_overworld`、`silver_ore_badlands` | 银 | 同上 |
| neoecoae | `ore_end` | 铝/钨 | IU 的铝在主世界、钨在水星，末地不需要第二份 |
| Roots | `silver_ore` | 银 | 同上；`EARLY_METALLURGY` 的银链已改吃 IU 银原矿（研钵吃 tag，不受影响） |

合计 23 条覆盖。**判断标准只有一条**：这个金属已经由 IU 矿块供给，就不允许第二份生成。
`kubejs/tools/test_oregen.py` 会把"同一金属被两份不同矿块生成"直接判红——Create 锌就是这么发现的。

### 6.4 铀与钍补进主世界/末地

NC 关掉后铀钍不能断：铀放主世界（`classicore/uranium` + 深板岩版，10 块/区块），
钍放末地（`thorium_ore/thorium_ore`，2 块/区块，与稀土同层）。

---

## 7. 封禁清单

### 7.1 IU 太空：只封「玩家亲自进去」

IU 的太空有两层含义，必须分开：

| 层 | 内容 | 处置 |
| --- | --- | --- |
| 玩家进入 | 星门（`industrialupgrade:space/planetary_translocator`，配方 `industrialupgrade_2508`）——唯一能把玩家传送进 34 个太空维度的手持设备 | **封禁**：删配方 + output 删除 + JEI 隐藏 + AStages `era.no_iu_space` 锁（stage 永不授予）+ `sinkjourneycore` 的 `IuSpaceTravelBlockMixin` 兜底（创造模式/老存档拿到的也点不开） |
| 无人远征 | 四台航天器装配机、发射台、空间研究台、全息图、7 块太空模块、探测器/卫星/漫游车/火箭 | **保留**：产物是资源，玩家不进去；出矿表按本文分层重排，见 §4.7 |

**维度本身**：数据包删不掉注册表条目，但能把 `data/industrialupgrade/dimension/*.json`
整份覆盖成空生成器——

```json
{ "type": "industrialupgrade:asteroid_type",
  "generator": { "type": "minecraft:flat",
    "settings": { "layers": [], "biome": "minecraft:the_void",
                  "features": false, "lakes": false, "structure_overrides": [] } } }
```

34 个太空维度都覆盖了（`earth` 例外：它是 IU 太空的"母星"，覆盖了怕回程逻辑踩空）。
效果：维度还在（IU 的太空界面不会崩），但进去是一整片虚空，什么也不生成。

为什么封入口而不封内容：IU 的行星矿本来就不生成（`global_ores` 只挂主世界），
玩家进去只能看到普通地形；后期矿已经由 §4.4 投到 Ad Astra，两条太空线不再并行。

**注意三件事**（2026-11-26 补）：

1. 上面这张表早期把 `basemachine3/teleporter_iu` 当成了载人入口，其实那是**同位面**成对传送的
   机器方块（`BlockEntityTeleporter` 只改坐标、不换维度，靠频率传输器配对、红石触发、按载重扣电）。
   真正的载人入口是手持的星门 `space/planetary_translocator`，现在已按上表封死；`teleporter_iu`
   已**解禁**，复制机（`basemachine3/replicator_iu`）的配方链随之恢复。
2. IU 的太空环境判定按维度 **path** 找天体（`ad_astra:moon` 会被当成 IU 的月球），
   现在由 `sinkjourneycore` 的 `IuSpaceEnvironmentScopeMixin` 限定在 `industrialupgrade` 命名空间内，
   Ad Astra 行星的环境交回 Ad Astra 自己算。
3. 维度侧在下面那层「覆盖成虚空」之外又加了一层更硬的：`IuSpaceDimensionRegistrationMixin`
   在 `RegistryDataLoader` 取文件列表那一步就把这 34 个维度摘掉，条目**根本不注册**，
   连带省掉原版给每个 LevelStem 建的 `ServerLevel`。void 数据包保留成备份。

### 7.2 Mekanism 聚变 / 裂变 / 反物质

包里的核能线是 NuclearCraft 与 IU 那套反应堆，Mek 的裂变堆、聚变堆、反物质（SPS）是第三套平行体系。
按 output 删掉 16 种方块，JEI 同步隐藏：

| 组 | 方块 |
| --- | --- |
| 裂变（8） | `fission_fuel_assembly`、`fission_reactor_casing`、`fission_reactor_port`、`fission_reactor_logic_adapter`、`control_rod_assembly`、`reactor_glass`、`saturating_condenser`、`superheating_element` |
| 聚变（5） | `fusion_reactor_controller`、`fusion_reactor_frame`、`fusion_reactor_port`、`fusion_reactor_logic_adapter`、`laser_focus_matrix` |
| 反物质（3） | `solar_neutron_activator`（SPS）、`sps_casing`、`sps_port` |

（前 13 个在 `mekanismgenerators:` 下，后 3 个在 `mekanism:` 下。）

蒸汽涡轮（`turbine_*`）与电磁线圈**不封**：那是通用蒸汽设备，IU 的锅炉也能喂。

只封「获取」：存档里已经摆好的方块照旧可拆可放，只是没有配方再造一座。

### 7.3 铂族与稀土的原矿（矿 + 粗矿）

铂、钯、铱、钕、钆、钇这六种金属**没有矿**。删的是三层：

| 层 | 做法 | 文件 |
| --- | --- | --- |
| 世界生成 | `TABLE` 里删掉 6 行，重新生成数据包（feature / placed_feature / biome_modifier / `c:ores` tag 一起消失） | `kubejs/tools/gen_oregen.py` |
| 配方 | 按产物删掉这六种矿石方块、`raw_metals/raw_<m>`、`raw_block/raw_<m>` 的全部配方 | `kubejs/server_scripts/bans/pgm_re_ore_bans.js` |
| JEI / EMI | 同 18 个物品 `removeEntriesCompletely` | `kubejs/client_scripts/bans/pgm_re_ore_jei.js` |

为什么连矿一起删、而不是逐台机器封：只要粗制原矿存在，至少有三条捷径——
IU 的粉碎→洗净→离心出粉（`centrifuge` 池已按产物封过，但 `handlerho`/`熔盐炉` 这些
没有逐台封）、Create 的 `create:crushing/raw_platinum`、NC 的
`melter/molten_gadolinium_from_raw_block`（粗制稀土块 → 熔融金属 → 铸锭）。
每装一个模组就多一条路，逐台封是打地鼠；矿不在，捷径就没有入口。

保留下来的：`nickel`（铂族唯一进料）、`mineral/iridosmine`、`mineral/braggite`（两种复合矿，
本身没有碎矿形态，不构成捷径）、`hafnium`（通用选矿线在用，不属于稀土湿法线）。

> 稀土湿法线的进料随之换成独居石矿（`kubejs:monazite_ore`，火星，§4.4），
> 掉落与浮选口径见 `RARE_EARTH_LINE.md` §9.1。

---

## 8. AdLods 巨矿：修好，不是关掉

AdLods 的 30 份矿床配置里，地表指示物引用 `silentgems` / `surfacesamples` / `adfinders`——
三个模组都没装，所以巨矿一直在生成、却完全没有地表提示。处置是把指示物换成已装方块，
并把不该在主世界的矿床关掉：

| 处置 | 数量 | 名单 |
| --- | ---: | --- |
| 保留 + 修指示物 | 16 | copper、iron、gold、coal、lapis、redstone、diamond、emerald、tin、lead、silver、zinc、aluminum、ancient_debris、nether_gold、nether_quartz |
| 关闭 | 14 | nickel、cobalt、iridium、osmium、palladium、platinum、rhodium、ruthenium、uranium、ruby、sapphire、topaz、amethyst、gas_pocket |

- **指示物**：主世界用 `minecraft:{orange_tulip, poppy, cornflower, lily_of_the_valley}` +
  `botania:orange_mystical_flower`，半径 3/3/6/6/6；下界用
  `minecraft:{crimson_fungus, warped_fungus, crimson_roots, nether_sprouts}`（下界地表是基岩顶，
  原版花放不住）。
- **为什么关那 14 份**：后期金属已经进末地/Ad Astra，不能让巨矿从主世界漏出来；宝石在末地；
  `amethyst` 有原版紫水晶洞；`gas_pocket` 引用的是没装的 `adpother`。
- **主配置**：`spawnPebbles` / `spawnSurfaceSamples` 改成 `NOWHERE`——分别依赖 AdFinders 与
  Surface Samples，都没装，留着只是每区块空跑。

脚本：`kubejs/tools/fix_adlods.py`，幂等，可重复跑。

---

## 9. 落地

### 9.1 目录

```
config/paxi/datapacks/sj-oregen/          338 个 JSON（Paxi 全局加载）
├── pack.mcmeta
└── data/
    ├── sj/
    │   ├── worldgen/configured_feature/   55  矿本体（targets 决定石/深板岩/末地石/下界岩/行星石）
    │   ├── worldgen/placed_feature/       55  count / rarity / height_range / in_square / biome
    │   ├── neoforge/biome_modifier/       55  #minecraft:is_overworld / is_nether / is_end / #sj:<planet>
    │   └── tags/worldgen/biome/            4  moon / mercury / mars / glacio
    ├── minecraft/tags/block/               2  needs_iron_tool / needs_diamond_tool
    ├── c/tags/{block,item}/ores/         110  逐金属 c:ores/<metal>（采石场 / JER / 其他模组识别）
    ├── nuclearcraftneohaul/…              14  NC 重复矿 → neoforge:none
    ├── mekanism/…                          3  Mek 重复矿 → neoforge:none
    ├── create/ mekmm/ enderio_evolution/    5  锌 / 银 重复矿 → neoforge:none
    ├── neoecoae/ roots/                     2  末地铝钨 / 银 重复矿 → neoforge:none
    └── industrialupgrade/dimension/       34  IU 太空维度 → 虚空生成器
```

**不动的东西**：`industrialupgrade-common.toml`（`defaultSpawnEnabled` 保持 false）、
`sj-no-ore-veins`、原版 20 条 ore feature、Ad Astra 自带矿、IU 油/气脉。

### 9.2 生成器

`kubejs/tools/gen_oregen.py`：一张 `TABLE`（55 行）→ 全套 JSON，跑一次重写整个数据包。

```bash
python kubejs/tools/gen_oregen.py     # 重写数据包并打印每区块期望矿块
python kubejs/tools/fix_adlods.py     # 修 AdLods 指示物（幂等）
python kubejs/tools/test_oregen.py    # 自动验收：31 条静态检查，全绿退出码 0
```

调密度只改 `TABLE` 里的 `count / size / rarity` 三列；加一颗行星只加几行 + 一个 biome tag。
IU 升级后如果新增太空维度，`void_iu_space()` 会从 jar 里读维度表自动跟上。

### 9.3 与现有系统的接缝

| 系统 | 怎么接上 |
| --- | --- |
| IU 原矿链路 | IU 矿块 drop `IUItem.rawMetals`（`raw_*`），研钵/粉碎机/洗矿机直接吃 |
| 选矿线 R0–R6 | 输入是 `c:raw_materials/*` 与 `crushed/*`，与原矿链路一致 |
| 蒸汽矿物分离器 | 吃 `heavyore/*` / `basaltheavyore/*`，下界已放 |
| PGM 线 | 末地 `mineral/iridosmine` 是铱锇渣的独立进料；主料 `纯净碎镍矿` 来自末地镍矿 |
| 稀土线 | 进料是火星的 `kubejs:monazite_ore`（独居石矿），一块掉 2 份独居石 |
| 采石场 / JER | `c:ores/<metal>` 方块 tag |
| IU 太空远征 / 殖民地 | `Sink-Journey-Core` 的 `SpaceOreTable` 按 §4.7 重排出矿表（改矿只改那张 `ORE_BY_BODY`） |

---

## 10. 数值预算

| 维度 | 条目 | 期望块/区块合计 |
| --- | ---: | ---: |
| 主世界（含 3 条大矿脉） | 17 | ≈ 184（大矿脉只摊 9，其余是常见矿） |
| 下界 | 11 | ≈ 51 |
| 末地 | 11 | ≈ 133 |
| Ad Astra 四行星 | 11 | 月球 23 / 水星 44 / 火星 24 / 冰星 8 |

原版主世界的矿粗估 150–250 块/区块，加上这些是可控的；想更稀/更密只动 §9.2 的三列。

---

## 11. 坑

| 坑 | 说明 | 对策 |
| --- | --- | --- |
| 深板岩 | y<0 是深板岩，只写 stone target 会白跑 | 一个 feature 写两个 targets（原版铜铁同款） |
| 末地/下界没有 `*_ore_replaceables` | 那套 tag 只覆盖主世界 | 末地用 `block_match: end_stone`，下界用 `#minecraft:base_stone_nether` |
| Ad Astra 没有 biome_modifier | 它的矿写在 biome JSON 的 `features` 里 | 自建 `#sj:<planet>` biome tag，用 `neoforge:add_features` 叠加 |
| 数据包删不掉维度 | 维度是注册表条目 | 只能覆盖维度 JSON 换生成器（虚空），老档已生成的区块保留 |
| 老存档 | 只影响新生成区块/新维度 | 验收用新世界，老档靠远行 |
| `chance` 是每条矿脉的概率 | 只对 IU `orespawn` 成立；原生 feature 用 `count` × `rarity_filter` | 两套口径不要混 |
| AdLods 指示物 | 默认引用未安装模组 | `fix_adlods.py` 换成原生花草/菌菇 |
| `c:ores/*` 副作用 | 打 tag 后 Mek 富集等"2× 矿石"路径也能吃 | 可接受（Mek 在 `era.electric` 之后）；不接受就只留工具门 |

---

## 12. 验收清单

### 12.0 先跑自动验收

```bash
python kubejs/tools/test_oregen.py
```

31 条静态检查，不需要启动游戏：数据包结构（49 条矿 × 3 类文件、308 个 JSON 可解析、pack_format）、
引用链（placed → configured → biome_modifier）、方块/biome/维度类型 id 是否存在、
**同一金属是否被两份不同矿块生成**、封禁清单（NC/Mek/Create/mekmm/EnderIO/neoecoae/Roots + IU 导航器 +
Mek 核能 16 方块 + IU 矿脉与默认矿表仍关）、工具门不重叠、`c:ores` 指向真实物品、
34 个虚空维度、AdLods 指示物无未安装模组、文档章节与矿表覆盖。任何一条红就退出码 1。

### 12.1 进游戏验（新世界）

1. 启动日志无 `sj-oregen` 报错，`/datapack list` 里有 `sj-oregen`；
2. `/place feature sj:ore_tin`（主世界）、`sj:ore_nickel`（末地）、`sj:ore_tungsten`（水星）各出一片矿；
3. 主世界 y=64 / y=16 横切 16×16×3：锡铅锌银铝硫各至少 1 处；原版铜铁煤密度与改动前一致；
4. 500 区块内遇到 1–2 条铜/铁大矿脉（size 48 的整条矿体）；
5. 下界能挖到硫/黄铁矿/方铅矿，蒸汽矿物分离器与釜配方可跑；
6. 末地能挖到镍/钴/铬/锰、硫镍钯铂矿、铱锇矿；石镐挖镍矿不掉落，铁镐掉 `raw_nickel`；
   搜 JEI 的「粗制铂矿石 / 粗制钕矿石」应当什么都没有，`/place feature sj:ore_platinum` 也找不到该 feature；
   火星能挖到**独居石矿**（挖一块掉 2 份独居石）与铪矿；
7. 水星能挖到钨/钼；Ad Astra 原有的 ostrom/calorite/desh/冰晶不受影响；
8. NC 的铅/锡/硼/锂/镁/钍/铀、Mek 的锡/铀/锇都不再生成；
9. IU 的行星跃迁导航器在 JEI 里消失、无法合成，旧导航器右键无效；探测器/卫星/漫游车/火箭、
   空间研究台、发射台仍可合成；
10. `/execute in industrialupgrade:asteroid run tp @s 0 64 0` 进去是虚空；
11. Mek 的裂变堆壳/端口/燃料组件、聚变控制器/框架、SPS 激活器都无法合成且 JEI 不显示，
    蒸汽涡轮与电磁线圈仍在；
12. 找到一处 AdLods 巨矿，地表应有一圈花（下界是菌菇），半径最大 6 格。
13. IU 太空远征（§4.7）：启动日志里有「IU 太空矿表已按矿物文档重排：30 个天体、226 条远征出矿、
    N 条殖民地出矿」；打开水星 / 月球 / 火星的远征界面，出矿分别是钨钼钽铌 / 钛钒锆 / 独居石与铪；
    冰壳卫星（如 ganymede、callisto）只出锂铍；铂/钯/铱/钕/钆/钇单元素矿只出现在
    pluto / charon / eris / makemake / haumea（完美级航天器才到得了），其余天体搜不到这六种矿块。

### 12.2 扫存档验（自动，读真实方块）

12.1 那几条要人肉看，另一种办法是直接读存档：`kubejs/tools/scan_world.py` 解 Anvil 区域文件
（`.mca` → NBT → 每层调色板），统计**真实生成出来的矿石方块**，和本文件的矿表逐项对比。

```bash
python kubejs/tools/scan_world.py                 # 最新存档，所有维度
python kubejs/tools/scan_world.py "新的世界 (3)"    # 指定存档
python kubejs/tools/scan_world.py --max-chunks 200 # 每维度最多读多少区块
```

判定规则：

- 每个维度按矿表比对：矿表里有、实测 0 块 → ✘；密度低于期望 30% → ✔（偏稀，提示）；
  高于 500% → ✔（过密，提示查第二份矿源）。铜/铁/煤原版自己也在生成，只验"有没有"。
- 按 y 分布核对高度范围（`y 分布` 一列是所在层的取整，误差 ±15 格以内属正常）。
- 数据包里被覆盖成 `neoforge:none` 的 30 种矿块，只要出现就 ✘（`封禁矿块` 列出来）。
- `industrialupgrade:*` 维度必须一块矿都没有（虚空生成器生效）；其它不在矿表里的维度只报不判。
- 全通过退出码 0。

**必须用新生成的区块。** 旧区块的矿是写死在存档里的，改了数据包也不会重写——
所以老存档扫出来会同时看到本表的矿（新区块）和 create 锌、根深银这类已封禁的重复矿（旧区块）。

让区块生成出来（不用人飞过去，`forceload` 会强制生成）：

```
/forceload add -80 -80 80 80
/execute in minecraft:the_nether run forceload add -80 -80 80 80
/execute in minecraft:the_end run forceload add -80 -80 80 80
/execute in ad_astra:moon run forceload add -80 -80 80 80
/execute in ad_astra:mercury run forceload add -80 -80 80 80
/execute in ad_astra:mars run forceload add -80 -80 80 80
/execute in ad_astra:glacio run forceload add -80 -80 80 80
```

等十来秒让区块生成完（`/forceload query` 能看），`/save-all` 后退出存档，再跑脚本。
每个范围是 11×11 区块（121 个），够量了。

---

## 13. 待确认

1. **金星还没有专属矿**：硫已在主世界/下界，要给它加砷铋富集按 §4.4 加一行即可。
2. **镓/锗**：现在是极稀伴生矿；也可以完全不给矿，改成拜耳母液 / 锌渣副产配方。
3. **宝石**：现在在末地，量为钻石同级；要不要再稀一点。
4. **`mineral/crystal`**：IU 的水晶矿没放，等有用途再定。
5. **主世界大矿脉数量**：现在是铜/铁/煤各一条；加到四条（比如加锡）会让"找大矿"更常见，
   但也会稀释"稀有"的感觉。

---

## 14. 任务书落点：三章 21 格

矿石来源在任务书里没有位置，因为三章一直是空的（`quests: [ ]`）。现在填进去，
按 `QUEST_LINES.md` 的格律：主线横铺 `y = 0`、一格 2.0、第 N 格只依赖第 N−1 格；
支线落在 `y = −4 / −8`，根节点竖直挂在主线上，支线内部单链；`hexagon` 只给收尾工程。

生成器：`kubejs/tools/gen_mining_quests.py`（可重复跑，按 id 就地更新，章节文件整体重写）。
文案全部进 `config/ftbquests/quests/lang/zh_cn.snbt`。

### 14.1 星界探索（9 格：主线 6 + 支线 3）

`6bb0d29314d7c897.snbt`，分组「初来乍到」，`order_index: 3`。讲下界与末地这两处「异界」。
主线第一格挂在工业之始的「蒸汽矿物分离器」`285AC19CE5FBC3ED` 上——那台机器吃的正是
§4.2 的下界重矿。

| 主/支 | 任务 | id | 坐标 | 依赖 | 副标题 |
| --- | --- | --- | --- | --- | --- |
| 主 1 | 下界：火山热液 | `6BB00000000000C1` | (0, 0) | `285AC19CE5FBC3ED` | 硫 · 砷 · 铋 · 铊 · 铁镐 |
| 主 2 | 玄武岩重矿：八种复合矿 | `6BB00000000000C2` | (2, 0) | C1 | 矿块进料 · 各 4 块/区块 |
| 主 3 | 末地：镍 | `6BB00000000000C3` | (4, 0) | C2 | 6×8 · 铁镐 · 48 块/区块 |
| 主 4 | 末地：钴 · 铬 · 锰 | `6BB00000000000C4` | (6, 0) | C3 | 三种合金金属 · 铁镐 |
| 主 5 | 末地：镍与两种复合矿 | `6BB00000000000C5` | (8, 0) | C4 | 钻石镐 · 镍 4 / 复合矿各 2 |
| 主 6 | 末地：宝石与铱锇矿 | `6BB00000000000C6` | (10, 0) | C5 | 四宝石 · 24..56（六边形） |
| 支 1 | 铁镐：末地层的门票 | `6BB00000000000C7` | (4, −4) | C3 | 35 个矿块 · needs_iron_tool |
| 支 2 | 钻石镐：另一半矿 | `6BB00000000000C8` | (6, −4) | C7 | 9 个矿块 · needs_diamond_tool |
| 支 3 | 地表先看草：巨矿的指示物 | `6BB00000000000C9` | (0, −8) | C1 | 主世界 16 份巨矿 |

### 14.2 触及星辰（7 格：主线 5 + 支线 2）

`6cd44026301f6f75.snbt`，分组「科技革命」，`order_index: 4`。四颗行星一章一颗。
入口接星界探索的出口 `6BB00000000000C6`。

> **2026-11-27 现状**：这个章节文件已被删掉（那七格从来没在游戏里落盘，文件一直是 0 格空壳）。
> 太空这一段现在由「第一小步」`25acb136e49b8bb8` 承担，共 29 格：月球线 10 格 + 二阶火星线 6 格 +
> 铂族 6 格 + IU 无人线 7 格。前置是 NASA 工作台、发射台、炼油厂、氧气装载机，月球层由「月球钛」「月球钒」
> 两格承担，回程把粗钛做成釜的钛衬里。
> 二阶一支从「着陆月球」岔出：月球戴斯 → 二阶火箭 → 着陆火星 → 火星独居石 → 火星铪 → 二阶收口。
> 火星层的两种矿（独居石、铪）由此落盘。水星（钨钼钽铌，Ad Astra tier 3）与冰星（锂铍，tier 4）
> 仍待开写，届时从「二阶收口」`25AC0000000000E6` 往下接。

| 主/支 | 任务 | id | 坐标 | 依赖 | 副标题 |
| --- | --- | --- | --- | --- | --- |
| 主 1 | 月球：钛 · 钒 · 锆 | `6CD40000000000C1` | (0, 0) | `6BB00000000000C6` | 月岩 · 12 / 5 / 6 块每区块 |
| 主 2 | 水星：钨 · 钼 | `6CD40000000000C2` | (2, 0) | C1 | 2×8 · 各 16 块/区块 |
| 主 3 | 水星：钽 · 铌 | `6CD40000000000C3` | (4, 0) | C2 | 1×6 · 各 6 块/区块 |
| 主 4 | 火星：独居石 · 铪 | `6CD40000000000C4` | (6, 0) | C3 | 稀土矿与难熔伴生 · 18 / 6 块每区块 |
| 主 5 | 冰星：锂 · 铍 | `6CD40000000000C5` | (8, 0) | C4 | 1×4 · 各 4 块/区块（六边形） |
| 支 1 | 出发前先换镐子 | `6CD40000000000C6` | (0, −4) | C1 | 行星上的工具档 |
| 支 2 | 行星石本身也是料 | `6CD40000000000C7` | (0, −8) | C1 | 月岩 / 水星石 / 火星石 / 冰星石 |

### 14.3 深入原子（5 格：主线 4 + 支线 1）

`7c4e2f5cb393c0ae.snbt`，分组「科技革命」，`order_index: 7`。只写矿与提纯入口，
反应堆、燃料棒留给核章节。入口接星界探索的出口（放射体在末地与下界）。

| 主/支 | 任务 | id | 坐标 | 依赖 | 副标题 |
| --- | --- | --- | --- | --- | --- |
| 主 1 | 铀：主世界的 10 块/区块 | `7C4E0000000000C1` | (0, 0) | `6BB00000000000C6` | 2×5 · −56..16 · 铁镐 |
| 主 2 | 硅钙铀钍矿：下界的复合矿 | `7C4E0000000000C2` | (2, 0) | C1 | 一块矿里两种放射体 |
| 主 3 | 钍：末地的 16..56 | `7C4E0000000000C3` | (4, 0) | C2 | 1×4 · rarity 2 · 钻石镐 |
| 主 4 | 料齐了：三条来源都通 | `7C4E0000000000C4` | (6, 0) | C3 | 铀 · 钍 · 复合矿（六边形） |
| 支 1 | 粗铀：下一步才是浓缩 | `7C4E0000000000C5` | (0, −4) | C1 | 粗铀 → 铀-235 / 238 |

### 14.4 三条约定

1. **一格一个维度段，不按金属发卡。** 同一段里几种金属一起要（铁镐那张要三种、
   铂族那张要三种），因为玩家去一趟末地不会只搬一种矿。
2. **任务物品统一到 canonical id。** 原矿用 `raw_metals/raw_*` 或 `ORE_ITEM_MAP.md`
   指定的统一目标（铀 `mekanism:raw_uranium`、钍 `nuclearcraftneohaul:thorium_raw`、
   锂 `nuclearcraftneohaul:lithium_raw`）；「仅矿石方块」的重矿直接要矿块，因为它们本来就不掉碎矿。
3. **文案三段**：这一层有什么 → 现实里为什么在这里 → 往后接哪一格。第三段是
   `QUEST_LINES.md` 的规矩，玩家靠它知道这一格是不是必经。

### 14.5 验收

```bash
python kubejs/tools/gen_mining_quests.py      # 重写三章 + 21 格文案（幂等）
python kubejs/tools/check_snbt.py config/ftbquests/quests/chapters/*.snbt \
                                  config/ftbquests/quests/lang/zh_cn.snbt
```

进游戏后 `/ftbquests reload`，从「初来乍到 → 星界探索」第 1 格一路点到「深入原子」第 4 格：
主线应是一条直线，两条支线挂在主线下方；每格都有标题、副标题、两到三段正文。
