# 初期矿物冶炼系统设计方案 v3（拟真：产出链 + 炉况等级）

> 定位：**era.kinetic（机械动力）之前**的核心冶金玩法。
> v2 变更：铜链已在 L0（Roots 柴堆）实装；铜移入 L0；删除青铜；
> L1 合金改为**琥珀金（electrum，Au+Ag）**。
> v3 变更：**L2 土高炉已实装**——强制鼓风 + 方解石熔剂 + 琥珀金风口，直接出可用铁锭
> （省略炒铁/锻打）；铁只在土高炉还原，柴堆净化碎铁与原版直烧全部封堵。

---

## 0. 实装状态速查（2026-11）

| 环节 | 状态 | 载体 |
|---|---|---|
| 燧石工具（镐/斧） | ✔ 已实装 | notreepunchingremastered + kubejs 镐头/手柄 |
| 铜镐 | ✔ 已实装 | `roots:copper_pickaxe`（模板配方在 recipes.js）；**铜镐挖铁**，琥珀金镐留给下一级 |
| 破磨（研钵） | ✔ 已实装 | `roots:mortar`，raw → `industrialupgrade:crushed/*`（铜铁+金银锡铅，见 misc/metallurgy.js） |
| L0 熔炼（柴堆） | ✔ 铜锡铅正常链；银金无配方（柴堆炼不了贵金属） | `roots:pyre` 数据配方（misc/metallurgy.js） |
| 铁净化（熔剂） | ✘ 已退役 | 柴堆净化碎铁配方删除，由 L2 土高炉接管 |
| 琥珀金合金 | ✔ 已实装（炭炉） | 金锭(tag)+银锭(tag)+煤/木炭(tag) → 2 琥珀金，60s（metallurgy/furnace_recipes.js） |
| L1 炭炉 | ✔ 已实装 | MMCR 3×3×3 砖砌外壳，炉膛中心点燃篝火；风箱提速 20%；金银 nugget×7、琥珀金合金 |
| L2 土高炉 | ✔ 已实装 | MMCR 3×3×4 泥砖外壳 + 琥珀金风口；**强制鼓风**；碎铁+方解石+煤 → 铁锭×2 |

> B 档已实装（`startup_scripts/metallurgy/furnace_startup.js` + `server_scripts/metallurgy/furnace_structure.js` + `furnace_recipes.js` + `client_scripts/metallurgy/jei_info.js`）。
> 结构：3×3×3 原版砖块外壳。正面一排是「输入口 / 控制器 / 输出口」，篝火在控制器正后方的炉膛正中，
> 顶部中心留一格烟道（可不填）可以看到火光。
> 控制器右键开 MMCR 机器 UI（套熔炉使用体验：输入口投料、输出口取粒）。
> 点炉仪式：先放篝火并点燃（燧石/firestarters 都行），再封砖；篝火被水/雪铲浇灭即停工。
>
> L2 土高炉（`blast_furnace_startup.js` + `blast_furnace_structure.js` + `blast_furnace_recipes.js`）：
> 3×3×4 泥砖壳，正面底格中间嵌**琥珀金块**（风口，9 锭一次性投入），上一排「输入口 / 控制器 / 输出口」；
> 炉膛篝火 + **炉体下半部外壁必须有陶风箱**（强制鼓风），两者缺一不开工。

---

## 1. 设计原则（不变，微调）

1. **产出有损**：矿石到锭全程收率 < 100%，损失变渣。
2. **炉况即门槛**（v2 改名）：不叫"熔点门槛"——L0 明火其实烧不化高熔点金属，
   但为了玩法节奏，铜/锡/铅被放在 L0。拟真解释改为**气氛与可控性**：
   - L0 柴堆＝开放明火、氧化性气氛：贱金属粗炼可以，贵金属会被烧损，合金无法控比；
   - L1 炭炉＝砖砌封闭炉膛、煤炭还原气氛、鼓风控温：能炼贵金属、能**按配比出合金**；
   - L2 土高炉＝强制鼓风+熔剂：能处理铁（已实装，直接出可用铁锭）。
   贵金属直接不给柴堆配方（不存在"烧错"，只有"烧不了"）。
3. **半成品可触摸**：研钵要磨 N 次、合金要配比，劳动可感知。
4. **不锁死下游**：粒一律写统一后的 canonical id——铜 `create:copper_nugget`（已实装）、
   锡/铅 `mekanism:nugget_tin` / `mekanism:nugget_lead`、银 `mekmm:nugget_silver`、金 `minecraft:gold_nugget`；
   琥珀金走 `c:ingots/electrum`（配方判定用 tag，canonical 取 `industrialupgrade:itemingots/electrum_ingot`）。
   > 自定义配方类型（如 `roots:pyre` 的 `data.result`）不在 Almost Unified 的改写范围内，必须手写 canonical id。
5. **升级不淘汰**：Create/Mekanism 时代机器产线量大收率低，手动链保留为高收率产线。

---

## 2. 可复用资源盘点（v2 修正）

| 资源 | 已有内容 | 用途 |
|---|---|---|
| roots 柴堆 pyre | 明火热源，`roots:pyre` 数据配方（现有铜链已用） | **L0 热源** |
| roots 研钵 mortar | 右键交互 N 次出料（`times` 字段） | 破磨 |
| roots 矿物 | 自带 `silver_ore`、`raw_silver`、`copper_pickaxe` | 银矿来源；铜镐已是现有工具 |
| IndustrialUpgrade | `raw_tin/lead`、全套 `crushed/*`、`baseblockingot/electrum` | 碎矿统一走 IU 物品，避免自建。**仅借用物品 id，获取仍靠研钵**（原始时代没有别的来源；IU 电动破碎机属 era.electric，被 gates.json 锁住，不会提前漏出碎矿）；`purifiedcrushed/iron` 已从链路退役，土高炉直接吃 `crushed/iron` |
| Embers | `atmospheric_bellows`（风箱方块，L1 复用；炉体材质已改用原版砖块，不再用 caminite） | L1 鼓风 |
| IndustrialUpgrade | `itemingots/electrum_ingot` + 全套 electrum 粒/粉/板/齿轮 | 琥珀金 canonical 物品（`c:ingots/electrum` 唯一成员）与奖励 |
| firestarters | fire_starter | 点燃柴堆/炭炉 |
| electroenergetics | `electrum_wire`、`electrum_wire_spool` | 琥珀金下游（蒸汽时代电线） |
| NuclearCraft | 合金炉：金1+银1→琥珀金×2（`c:ingots/electrum`） | L1 琥珀金配比的对标参考 |

> v2 关键决定：**碎矿/精矿不再自建 kubejs 物品**，统一用 `industrialupgrade:crushed/<metal>`；
> 本阶段新增自定义内容压缩到 **1 个方块（炭炉）**。

---

## 3. 总览：v3 流程

```
矿脉(铜/锡/铅 = L0 ｜ 银/金 = L1 ｜ 铁 = L2)
    │ 燧石镐/铜镐挖掘 → 掉 raw_*（原版 raw / roots raw_silver / IU raw_tin·lead）
    ▼
roots:mortar 研磨（右键 5 次或 ×5 批量 15 次）
    │  研钵是原始时代唯一碎矿手段：徒手/熔炉都磨不出碎矿
    ▼
industrialupgrade:crushed/<metal>
    │
    ├─ L0 柴堆（明火）：铜✔ / 锡 / 铅
    │     crushed×2 + 煤×2 + 原木×1 → nugget×6（铜已实装，锡铅同模板）
    │     ✘ 柴堆烧碎银/碎金 → 无配方（贵金属不给明火路线）
    │
    ├─ L1 炭炉（3×3×3 砖壳 + 炉膛篝火 + 煤 + 鼓风）
          crushed/silver ×2 + 煤 → silver_nugget ×7
          crushed/gold   ×2 + 煤 → gold_nugget   ×7
          合金：gold_ingot ×1 + silver_ingot ×1 + 煤 → 琥珀金锭 ×2（tag c:ingots/electrum）
          （铁：不在炭炉炼，L2 土高炉见下）

    └─ L2 土高炉（3×3×4 泥砖壳 + 琥珀金风口 + 篝火 + 强制鼓风）
          crushed/iron ×2 + 方解石 ×1 + 煤/木炭 ×2 → iron_ingot ×2
          （旧路径已封堵：柴堆净化碎铁删除；原版熔炉/高炉直烧
            铁矿、生铁、碎铁、净化碎铁、铁粉全部移除）
```

---

## 4. 炉况等级（v3）

| 等级 | 炉 | 构成 | 气氛/能力 | 产出规则 |
|---|---|---|---|---|
| L0 | 柴堆 | roots pyre（已实装） | 明火、氧化性；**不能控比** | 贱金属出锭（碎）；贵金属无配方 |
| L1 | 炭炉 | MMCR 3×3×3 砖壳，炉膛中心篝火（须点燃）；燃料煤/木炭（`minecraft:coals` tag）；炉体外壁任意位置贴 `embers:atmospheric_bellows` = L1+（提速 20%） | 封闭还原、可配比 | 金银出锭（碎）、**琥珀金合金** |
| L2 | 土高炉 | MMCR 3×3×4 泥砖壳 + 琥珀金块风口（须点燃篝火）；燃料煤/木炭（`minecraft:coals` tag）；**炉体下半部外壁必须有 `embers:atmospheric_bellows`** | 强制鼓风、CO 还原 + CaO 造渣 | 铁锭（本包省略炒铁/锻打） |

判定方式：MMCR 结构成型 + `recipeBehavior`：
- 点炉判定：炉膛中心篝火 `lit=true`（先点火后封砖；被浇灭停工；L1 / L2 通用）；
- 风箱判定（L1）：炉体外壁任意位置存在 `embers:atmospheric_bellows` → 提速（以控制器为中心扫 XZ 半径 3 / Y 半径 2）；
- 风箱判定（L2）：**炉体下半部**（风口高度及以下，Y ≤ 0）必须有陶风箱，否则拒绝开工——强制鼓风不是加速，是开工条件；
- 温度不足的失败路径与铜链同风格：**在配方层物理隔断**（金银配方只注册进炭炉 recipe pool，
  铁配方只注册进土高炉 pool；柴堆界面里根本没有这两类配方）。

---

## 5. 金属逐条流程（v2）

### 5.1 铜（✔ 已实装，记录现状作为基准）

- 挖掘：燧石镐 → raw_copper（原版掉落）；
- 研磨：roots mortar，raw ×1 → `industrialupgrade:crushed/copper` ×1（交互 5 次）；×5 → ×5（15 次）；
- 熔炼：柴堆 crushed ×2 + 煤 ×2 + 原木 ×1 → `create:copper_nugget` ×6；
- 收率：1 矿 ≈ 0.67 锭（9 nugget 合 1 锭）；
- 工具：`roots:copper_pickaxe`（已实装配方）——铜镐接替燧石镐挖铁矿（拟真进度线）。

### 5.2 锡 / 铅（L0，复用铜链模板）

- 矿源：IU `raw_tin` / `raw_lead`；研磨 → `crushed/tin`、`crushed/lead`；
- 柴堆：crushed ×2 + 煤 ×2 + 原木 ×1 → 对应 nugget ×6（锡 `mekanism:nugget_tin`、铅 `mekanism:nugget_lead`）；
- 铅初期无大用（拟真彩蛋：炼得成用不上），锡为 L1 前储备（见 §10 待定项）。

### 5.3 银 / 金（L1 主线原料）

- 挖掘：铜镐即可（拟真：金银矿软）；roots `silver_ore` → `raw_silver`；金走原版 raw_gold；
- 研磨：mortar → `crushed/silver`、`crushed/gold`；
- **L0 删除**：碎银/碎金没有任何柴堆配方（负反馈方案已废弃）；
- 炭炉：crushed ×2 + 煤 ×1 → 对应 nugget ×7（银 `mekmm:nugget_silver`、金 `minecraft:gold_nugget`；还原气氛收率高，≈0.78 锭/矿）；
- 银/金锭由 9 nugget 合成（原版路径不变）。

### 5.4 琥珀金 electrum（L1 唯一合金，替代青铜位）

- 配比：`c:ingots/gold` ×1 + `c:ingots/silver` ×1 + 煤 ×1 → `c:ingots/electrum` ×2
  （1:1 配比，与 NC 合金炉数值对齐；canonical 物品 `industrialupgrade:itemingots/electrum_ingot`）；
- 拟真点：**合金只在炭炉**——柴堆无法控比，是"必须升级炉子"的核心动机；
- 下游即期价值：`electroenergetics:electrum_wire`（蒸汽时代电线）直接吃 `c:ingots/electrum`；
- **工具奖励注意**：全包目前**没有**琥珀金镐/斧物品（embers 只有贴图纹理，未注册物品，
  IU 只有粉/粒/板/齿轮）。若要"琥珀金镐解锁下一级矿"，需后续用 kubejs 注册工具物品
  并复用 embers 的 `pickaxe_electrum.png` 等现成贴图，或改由铜镐→蒸汽镐的路线接管。
- 琥珀金镐设定为**可挖铁矿**（与铜镐同级或略高，二选一，见 §10 待定项）。

### 5.5 铁（L2 土高炉，✔ 已实装）

- 矿源：铜镐挖铁 → `raw_iron`；研钵 → `industrialupgrade:crushed/iron`（kubejsstudio 既有配方，保留）；
- 还原：土高炉 `crushed/iron ×2 + 方解石 ×1 + 煤/木炭 ×2` → `iron_ingot ×2`（70s）；
- 收率：每 2 碎铁出 2 锭，与旧"净化碎铁→熔炉"持平（≈1.0 锭/矿），成本换成了强制鼓风与琥珀金风口；
- **科学性**：
  - 破碎增大反应界面；
  - 强制鼓风让焦炭/木炭燃烧生成 CO，炉温过铁熔点，CO 把铁氧化物还原成铁；
  - 方解石高温分解为 CaO，与硅铝脉石造渣（降低渣黏度、减少铁损、保护炉衬）；
  - 泥砖炉衬是廉价黏土质耐火材料，可反复修补；
  - 琥珀金块镶风口/出铁口：Au-Ag 合金高温不易氧化、与铁水不润湿（9 锭一次投入，
    这就是 L1 的琥珀金作为 L1→L2 衔接件的用途）；
  - **省略炒铁/锻打**：本包明确抽象，土高炉直接浇铸可用铁锭。
- 旧路封堵：柴堆净化碎铁配方删除；原版熔炉/高炉对 `#c:ores/iron`、`#c:raw_materials/iron`、
  `#c:dusts/iron`、`crushed/iron`、`purifiedcrushed/iron` 的直烧全部移除。

---

## 6. 新增/改动内容清单（v2 大幅缩减）

**新增自定义（3 项）：**

| 内容 | 说明 |
|---|---|
| `kubejs:charcoal_furnace` 炭炉（方块） | MMCR 多方块；控制器右键开 UI，输入口投料、输出口取料 |
| `kubejs:earth_blast_furnace` 土高炉（方块） | MMCR 3×3×4 多方块；强制鼓风 + 熔剂；L1 琥珀金块作为风口镶件 |
| ~~`kubejs:oxidized_dross`~~ | 已废弃（负反馈方案取消，未注册） |

**配方改动：**

| 类型 | 内容 |
|---|---|
| `roots:mortar` | 新增 raw_silver / raw_gold / raw_tin / raw_lead 的 1:1 与 5:5 批量（模板照抄现有铜配方） |
| `roots:pyre` | 新增锡、铅（nugget×6 模板）；金银不注册柴堆配方；**柴堆炼铁配方删除** |
| 炭炉 recipe pool | 银/金 nugget×7、琥珀金合金 |
| 土高炉 recipe pool | 碎铁×2 + 方解石×1 + 煤×2 → 铁锭×2（1400t） |
| 原版熔炉/高炉 | 铁相关直烧全部 remove（ore / raw / dust / crushed / purifiedcrushed） |
| 合成 | 炭炉本体：minecraft:bricks ×7 + 黏土球 ×2 + 煤/木炭 tag；土高炉控制器：泥砖 ×6 + 琥珀金锭 ×2 + 黏土球 |

**不需要做的（v2 决定）：** 自建碎矿/精矿物品（用 IU）、陶坩埚（柴堆+炭炉已覆盖）、
青铜及其全部配方、resgister 竖炉。

---

## 7. 数值平衡（v2）

| 金属 | 挖1矿→锭期望 | 主损失点 | 备注 |
|---|---|---|---|
| 铜 | 0.67（已实装） | 研磨无损耗、柴堆碎炼 | 基准线 |
| 锡/铅 | 0.67 | 同铜 | 同模板 |
| 银/金 | 0.78（炭炉） | 明火路线只有 0.15 回收 | L0 故意亏，逼玩家升级炭炉 |
| 琥珀金 | 1.0（金银 2:2 → 2 锭，净 +1 银锭价值） | — | 合金奖励，鼓励走 L1 |
| 铁 | 1.0（L2 土高炉，2 碎铁 → 2 锭） | 研磨无损耗、熔剂造渣 | 与旧净化链持平，门槛换成强制鼓风+琥珀金风口 |

时间成本：柴堆锡链与铜一致；炭炉单批 40s（L1+ 鼓风 32s）；
琥珀金合金 60s（配比操作感 > 速度）；土高炉单批 70s（强制鼓风不计提速，本身就是开工条件）。
**燃料**：木炭在 L1 消耗 ×1.5（拟真：还原气氛吃碳），推动木炭窑/林业循环。

---

## 8. 与现有系统衔接（v2）

| 系统 | 衔接点 |
|---|---|
| sinkresearch | 冶金页节点：`研磨与柴堆`（已实装，可补登记）、`耐火炭炉`（金银+鼓风）、`琥珀金`（合金，unlock `era.metallurgy.electrum`）、`土高炉`（铁，下一版登记） |
| FTB 任务 | 「熔炉之始」章节调整为：燧石镐→磨铜→柴堆铜锭→耐火砖炭炉→第一块琥珀金（删青铜任务位） |
| Embers | `atmospheric_bellows` 直接复用不改动；琥珀金工具不存在（未注册），奖励位暂由电线/IU 件接管 |
| 蒸汽时代 | `electroenergetics` 电线/线轴吃 `c:ingots/electrum`，琥珀金成为通往电气的第一座桥 |
| Create（era.kinetic 后） | basin+blaze burner 承接金银熔炼（收率 70%），手动炭炉保留 78% 高收率 |

---

## 9. 实现分层

### A 档：纯数据配方（✔ 已完成，已被 B 档部分覆盖）
- mortar/pyre 新配方全部走 `ServerEvents.generateData` JSON（现有铜链同路径）；
- A 档过渡配方（柴堆金银 nugget×4、琥珀金合成台）已按 B 档退役：柴堆金银配方彻底删除，
  琥珀金只在炭炉合成。

### B 档：MMCR 炭炉（✔ 已实现）
- `kubejs/startup_scripts/metallurgy/furnace_startup.js`：
  注册 `kubejs:charcoal_furnace` 机器 + `recipeBehavior`（炉膛篝火点燃判定、
  风箱判定（炉体外壁半径 3 内） → `setDuration` ×0.8）；
- `kubejs/server_scripts/metallurgy/furnace_structure.js`：
  3×3×3 砖壳：z=-1 后墙全砖、z=0 炉膛（篝火居中 + 顶心烟道）、
  z=+1 正面「输入口 I / 控制器 C / 输出口 O」，`/reload` 可热重载；
- `kubejs/server_scripts/metallurgy/furnace_recipes.js`：
  银金 nugget×7、琥珀金合金（银锭/金锭用 tag 输入）、
  控制器合成（minecraft:bricks + 黏土球 + 煤 tag）；
- `kubejs/client_scripts/metallurgy/jei_info.js` + 双语 lang：JEI 配方池说明。

### B2 档：MMCR 土高炉（✔ 已实现，L2）
- `kubejs/startup_scripts/metallurgy/blast_furnace_startup.js`：
  注册 `kubejs:earth_blast_furnace` + `recipeBehavior`：篝火 `lit=true` 判定 +
  **下半部风箱强制判定**（XZ 半径 3 / Y -2..0，缺失直接 `cancel()`）；
  拒绝原因按控制器坐标缓存，只在状态切换时打日志；
- `kubejs/server_scripts/metallurgy/blast_furnace_structure.js`：
  3×3×4 泥砖壳：z=-1 后墙全泥砖；z=0 炉膛（篝火居中 + 上方两格烟道）；
  z=+1 正面底格中间 = 琥珀金块 `industrialupgrade:baseblockingot/electrum`（风口），
  上一排「输入口 I / 控制器 C / 输出口 O」，其余泥砖；`/reload` 可热重载；
- `kubejs/server_scripts/metallurgy/blast_furnace_recipes.js`：
  碎铁×2 + 方解石×1 + 煤×2 → 铁锭×2（1400t）；控制器合成（泥砖 + 琥珀金锭 tag + 黏土球）；
  remove 原版熔炉/高炉的铁直烧（ore / raw / dust / crushed / purifiedcrushed）；
- `kubejs/server_scripts/kubejsstudio/kubejsstudio.js`：删除柴堆净化碎铁配方 `roots:pyre/crushed/iron1`；
- `kubejs/client_scripts/metallurgy/jei_info.js` + 双语 lang：土高炉 JEI 说明（含琥珀金风口与强制鼓风）。

### 验收清单（B 档，需完全重启）
1. 重启日志出现 `[CF] 已注册炭炉 kubejs:charcoal_furnace`；
2. mortar 磨 raw_silver/raw_gold/raw_tin/raw_lead 出对应 `industrialupgrade:crushed/*`；
3. 柴堆对碎银/碎金无任何配方（JEI 柴堆分类里搜不到）；
4. 摆放：3×3×3 砖壳，**正面一排 = 输入口 | 控制器 | 输出口**；
   篝火放在控制器正后方的炉膛正中并点燃（顶部中心留一格烟道即可看到火光）；
   控制器合成 `mmcr:charcoal_furnace_controller`；篝火未点燃机器不开工；
5. 输入口投 碎银×2+煤×1 → 40s 出 `mekmm:nugget_silver` ×7；贴风箱后 32s；
6. 金锭+银锭+煤/木炭 → `industrialupgrade:itemingots/electrum_ingot` ×2（60s）；
7. 琥珀金锭可合成下游（IU 齿轮/板、蒸汽电线）；
8. `/research tree` 冶金页节点（研究挂钩另行排期）。

### 验收清单（L2 土高炉，需完全重启）
1. 重启日志出现 `[EBF] 已注册土高炉 kubejs:earth_blast_furnace`；
2. JEI 里原版熔炉/高炉烧铁矿、生铁、碎铁、净化碎铁、铁粉全部消失（只剩土高炉配方）；
3. 柴堆里搜不到净化碎铁配方；
4. 摆放：3×3×4 泥砖壳，正面底格中间嵌 `industrialupgrade:baseblockingot/electrum`（琥珀金块），
   上一排「输入口 | 控制器 | 输出口」；篝火在控制器正后方并点燃；上方两格烟道通到天空；
5. 不放风箱 → 机器拒绝开工（日志提示"下半部外壁没有陶风箱"）；
   下半部外壁贴 `embers:atmospheric_bellows` 后开工；
6. 输入口投 碎铁×2 + 方解石×1 + 煤×2 → 70s 出 `minecraft:iron_ingot` ×2；
7. 控制器合成 `mmcr:earth_blast_furnace_controller`：泥砖×6 + 琥珀金锭×2 + 黏土球。

---

## 10. 待定项

1. ~~挖掘等级~~ **已定**：铜镐挖铁（`roots:copper_pickaxe` 已实装），琥珀金镐解锁下一级。
2. **锡的定位**：琥珀金取代合金位后，锡初期只剩"炼了存着"。可选：
   a) 锡留给蒸汽时代焊料/白镴；b) 锡+银出低配琥珀金（收率 80%）作为缺金过渡。
3. ~~氧化渣回收率~~ 已随负反馈方案废弃。
4. ~~炭炉 UI~~ **已定**：控制器右键开 MMCR 机器 UI（熔炉使用体验：输入口投料、输出口取粒），3×3×3 砖壳、正面「输入口 / 控制器 / 输出口」一排。

---

## 11. 风险与备注

- **generateData 的 id 是文件路径**：`event.json` 的第一个参数必须带 `recipe/` 前缀
  （如 `kubejs:recipe/metallurgy/pyre/tin`），写成 `kubejs:metallurgy/...` 会把 JSON
  写到配方目录外，游戏内完全不显示且**不报错**（第一版踩过）。
- **roots pyre/mortar 是数据驱动配方**：走 `roots:pyre` / `roots:mortar` 类型 JSON
  （kubejsstudio.js 已有可用样例），改配方后需完全重启（generateData 不吃 /reload）。
- **Rhino `const` 冲突**：server_scripts 内新脚本统一用 `var`（research_core 先例）。
- **AStages 格式坑**：若锁炭炉，gates.json 只用 `blocks` 锁，不碰 `recipes`
  （README_RESEARCH.md §2.1 有崩服先例）。
- **c:ingots/electrum 空标签条件**：embers/NC 的琥珀金配方都带
  `tag_empty` 条件守卫，包内 tag 已被 Embers 填充，新增配方无需再写条件。
- 数值为纸面推导，上线后按实测调：目标"进 Create 前 2~3 个游戏日内凑齐 1 组琥珀金锭"。
- **琥珀金块是结构件**：`industrialupgrade:baseblockingot/electrum` 有 blockstate 与 item model，按方块注册；
  若以后 IU 变动，需在 `blast_furnace_structure.js` 换成 `c:storage_blocks/electrum` 的其它成员
  （`api.block()` 只接单个 id，不能直接写 tag）。
- **铁直烧 remove 的影响面**：`#c:ores/iron` / `#c:raw_materials/iron` / `#c:dusts/iron` 覆盖所有模组变体，
  其它模组若依赖原版熔炉炼铁会一起断——这是本次"铁只能从土高炉出"的设计意图。
- **土高炉的强制鼓风判定在 Y≤0**：只认风口层及以下的风箱；风箱贴到炉身上部不会生效，JEI/日志已写明。
