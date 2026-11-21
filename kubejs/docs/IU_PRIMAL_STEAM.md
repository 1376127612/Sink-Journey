# Industrial Upgrade：原始时代与蒸汽时代（任务 + 魔改）

> 版本：本包 1.21.1 / IU 3.4.0.11
> 脚本：
> - `kubejs/server_scripts/industrial/iu_primal_recipes.js`（原始时代配方）
> - `kubejs/server_scripts/industrial/iu_steam_recipes.js`（蒸汽时代配方）
> - `kubejs/server_scripts/industrial/iu_plate_routes.js`（余烬压印 / Create 压板）
> - `kubejs/server_scripts/bans/iu_anvil_ban.js`（铁砧封禁 + 熔炼炉禁钢）
> - `kubejs/server_scripts/metallurgy/blast_furnace_recipes.js`（新增渗碳钢）
> - `config/astages/simple/astages/item.json`（钢锁在 era.steam）
> 任务：
> - `config/ftbquests/quests/chapters/3f5a7c2b9e1d4a60.snbt`「原始时代」（16 步）
> - `config/ftbquests/quests/chapters/5fe0048b1a2b6a65.snbt`「工业之始」（26 步）
> 生成器：`kubejs/tools/gen_iu_quests.py`、`gen_iu_quest_lang.py`

---

## 1. 时代金属白名单

| 时代 | 允许 | 禁止 |
|---|---|---|
| 原始时代 | 铜、锡、铅、铁、金、银、琥珀金 | 青铜、黄铜、钢、铝、钛、铱、钨、锇、铋、钡、锶、铊、因瓦、铝青铜、镍铬、镓砷、锰铁…… |
| 蒸汽时代 | 铜、锡、锌、铅、铁、金、银、琥珀金、青铜、黄铜、红铜 | 铝、钛、铱、钨、锇、铋、钡、锶、铊、因瓦、铝青铜、镍铬、镓砷、锰铁…… |
| 蒸汽时代末期 | 以上 + **钢** | 其它仍禁止 |

---

## 2. 板材的三条路线（iu_plate_routes.js）

铁砧封禁后，板材按金属性质分流，三条路线都产出 IU 自己的板
（`industrialupgrade:itemplates/*_plate`），拿到的永远是同一个物品。

| 路线 | 判据 | 覆盖金属 | 做法 |
|---|---|---|---|
| 余烬压印 | 熔点 ≤ 1100℃ | 锡、铅、锌、铜、金、银、琥珀金、青铜 | 90mB 熔融金属 + `embers:plate_stamp` |
| Create 压板 | 硬度 ≤ 3（莫氏） | 锡、锌、琥珀金、青铜、红铜 | 锭 → 辊压 |
| IU 挤压机 | 全部金属 | 以上全部 + 铁、钢、钛、钨…… | `compressor` 配方池，全通用 |

- Create 压板只给**没有现成配方**的金属补路线：铜/铁/金用 Create 自带的
  `create:pressing/*_ingot`，铅/银用 Embers 自带的 `embers:create/pressing/*_plate`。
  这些配方的产出会被 Almost Unified 换成 IU 板，所以不再重复注册（否则金板会出现两条压板配方）。
- 铁 1538℃、钢 ~1450℃，余烬压印不适用；铁仍有 Create 的冷压路线，钢只走 IU 挤压机。
- 齿轮：
  - 余烬压印：kubejs 黄铜/青铜齿轮（`embers/gears.js`），本次另把 IU 的锌/银/琥珀金齿轮
    显式挂上去（180mB + `embers:gear_stamp`）。
  - IU 冲压机（gearing）：kubejs 的黄铜/青铜齿轮不在 `c:gears/*` 标签里，冲压机自动生成不出配方。
    本次给它们建了 `kubejs:gears/kb_brass` / `kb_bronze` 两个专用标签，并调用
    `BlockEntityGearMachine.addrecipe('c:ingots/brass', 'kubejs:gears/kb_brass')`
    （和 `industrial/if_gears.js` 给 IF 齿轮加配方用的是同一个接口）。4 锭 → 1 齿轮。
- 红铜没有对应的熔融流体，所以只有 Create 压板与 IU 挤压机两条路。

---

## 3. 铜锅炉（统一替换琥珀金锅炉 601）

`crafting_601_element`（琥珀金锅炉）原本要 8 块琥珀金板，把蒸汽线整条锁在轧机后面。
现在所有用到它的配方统一换成 `kubejs:copper_boiler`（作者注册的铜锅炉）：

| 配方 id | 产物 |
|---|---|
| `industrialupgrade_1252` | 乳胶提取机（原始） |
| `industrialupgrade_1253` | 原型流式腐蚀釜 |
| `industrialupgrade_1676` | 气体混合室 |
| `industrialupgrade_1971` | 蒸汽储存器 |
| `industrialupgrade_1972` | 蒸汽晶体充能器 |
| `industrialupgrade_1973` | 蒸汽流体加热器 |
| `industrialupgrade_1289` | 蒸汽固液反应釜 |
| `industrialupgrade_1981` | 蒸汽锅炉储罐 |
| `industrialupgrade_1048` | 流体分离器（电力） |
| `industrialupgrade_1049` | 聚合机（电力） |

601 本身不再被任何配方使用（`industrialupgrade_1923` 保持 IU 原样，成为死配方）。

---

## 4. 铁砧：封禁

`bans/iu_anvil_ban.js` 在 `ServerEvents.loaded`（晚于 IU 的 TagsUpdatedEvent）里删掉：

- `锭 → 板`：铁、铜、锡、铅、金、青铜、钢
- `板 → 2 外壳`：铁、铜、锡、青铜

铁砧方块保留（蒸汽挤出机、蒸汽轧机的配方里还把它当零件），但不再能敲出东西。
板材与外壳整体交给**挤压原型机**（IU 的 MetalFormer，`compressor` 池：`c:ingots/X→板`、
`c:plates/X→2 外壳`，已在字节码里核对）。所以挤压原型机自己不吃板：

| 配方 id | 产物 | 改为 |
|---|---|---|
| `industrialupgrade_1250` | 挤压原型机 | 挤压部件 ×1 + 铁锭 ×2 + 木板 ×4 |

---

## 5. 原始时代配方（iu_primal_recipes.js）

| 配方 id | 产物 | 原关键材料 | 改为 |
|---|---|---|---|
| `industrialupgrade_2422` | 熔炼砖坯 ×4 | 2 黏土 + 2 尖晶石粒 + 2 钇粒 + 沙 + 砂砾 | 2 黏土 + 沙 + 砂砾 |
| `industrialupgrade_1250` | 挤压原型机 | 锰铁板 ×2、挤压部件、木板 | 铁锭 ×2、挤压部件、木板 |
| `industrialupgrade_1249` | 粉碎原型机 | 锰铁板 ×2、因瓦板 ×4、粉碎球 | 铁板 ×2、铜板 ×4、粉碎球 |
| `industrialupgrade_1252` | 乳胶提取机 | 琥珀金锅炉 601 | 铜锅炉 |
| `industrialupgrade_1253` | 原型流式腐蚀釜 | 琥珀金板、因瓦板、锰铁板、601 | 金板、铁板、铜板、铜锅炉 |
| `industrialupgrade_976` | 激光器（354） | 红宝石、钛板、红石粉 | 红宝石、金板、红石粉 |
| `industrialupgrade_1256` | 激光抛光原型机 | 钛板 ×4、金板、玻璃、激光器 | 铁板 ×4、金板、玻璃、激光器 |
| `industrialupgrade_1257` | 原型模板刷机 | 钛板 ×4、碳板、玻璃、激光器 | 铁板 ×4、铜板、玻璃、激光器 |
| `industrialupgrade_1258` | 电子工作台 | 钛板 ×4、铁板、玻璃、焊锡铁 | 铁板 ×4、铜板、玻璃、焊锡铁 |
| `industrialupgrade_1920` | 熔炼炉炉缸 | 钋板、钡板 | 锡板、铅板 |
| `industrialupgrade_1921` | 熔炼炉燃料箱 | 锶板 | 铅板 |
| `industrialupgrade_1741` | 熔炼炉浇注块 | 铊板 ×4 | 锡板 ×4 |
| `industrialupgrade_1917` | 铸型模具（496） | 钛板 ×8 + 铁锭 | 铁板 ×8 + 铁锭 |

---

## 6. 蒸汽时代配方（iu_steam_recipes.js）

| 配方 id | 产物 | 原关键材料 | 改为 |
|---|---|---|---|
| `industrialupgrade_1288` | 元件:混合（267） | 双层钇板、双层、双层锶板、铌板 | 铁板、青铜板、铜板 |
| `industrialupgrade_739` | 元件:控制器（42） | 钨锭 ×3 | 青铜锭 ×3 |
| `industrialupgrade_1007` | 镍铬灯（650） | 镍铬外壳 | 青铜外壳 |
| `industrialupgrade_757` | 电镀外壳（137） | 精加工钛钢板 | 青铜板 + 铁板 |
| `industrialupgrade_1263` | 蒸汽管道 ×6 | 钋板、铝青铜外壳 | 铜板、青铜外壳 |
| `industrialupgrade_1971` | 蒸汽储存器 | 铝青铜外壳 + 601 | 青铜外壳 + 铜锅炉 |
| `industrialupgrade_1294` | 蒸汽矿物分离器 | 钛板、铋板 | 青铜板、铅板 |
| `industrialupgrade_1286` | 蒸汽电解器 | 镓砷合金板 | 黄铜板 |
| `industrialupgrade_1916` | 蒸汽储罐 | 钢板、铁板 | 青铜板、铁板 |
| `industrialupgrade_1292` | 高压蒸汽锅炉 | 钢板 ×7 | 青铜板 ×7 |
| `industrialupgrade_1980` | 蒸汽锅炉外壳 | 钢外壳、铱块、铝青铜外壳 | 铁外壳、铜块、青铜外壳 |
| `industrialupgrade_1982` | 蒸汽锅炉加热器 | 因瓦齿轮 | 青铜齿轮 |
| `industrialupgrade_1983` | 蒸汽锅炉热交换器 | 因瓦齿轮 | 青铜齿轮 |
| `industrialupgrade_1984` | 蒸汽锅炉控制器 | 锇板、铋外壳 | 青铜板、铜外壳 |
| `industrialupgrade_1676` | 气体混合室 | 因瓦齿轮 + 601 | 青铜齿轮 + 铜锅炉 |
| `industrialupgrade_1969` | 微型熔炉 | 锰铁齿轮、铱板 | 青铜齿轮、青铜板 |
| `kubejs:iu_steam/strong_anvil` | 强化铁砧 | **原配方被删后没有补回** | 钢板 ×3 + 青铜板 ×2 + 铁砧 |

蒸汽机机身（`industrialupgrade_758`）**没有动**：`create/casing_progression.js`
已经把它的产出接管成「8 蒸汽机壳 + 黄铜之心」。
强化铁砧用独立 id 注册，因为 `kubejsstudio/recipes.js` 在 `industrial/` 之后加载，
会按 id 再删一次 `industrialupgrade_1968`。

---

## 7. 钢（蒸汽时代末期）

1. **土高炉渗碳**：铁锭 ×2 + 方解石 ×1 + 煤/木炭 ×4 → 钢锭 ×1，120 秒。
2. **熔炼炉禁钢**：`iu_anvil_ban.js` 删掉熔炼炉 `ingot_casting` / `smeltery` 两个池里的
   钢锭 / 钢板 / 钢块 / 钢外壳产物——它本来能用「熔融铁 + 熔融碳」混出熔融钢再浇注。
3. **阶段锁**：7 个钢类物品锁在 `era.steam`（由研究节点 `sink:steam_precision` 授予）。
4. **下游**：钢板 → 强化铁砧 → 蒸汽轧机，是这条线的终点。

---

## 8. 任务依赖

两章都是单线：第 N 个任务只依赖第 N-1 个。入口分别挂在上一章。

### 8.1 原始时代（group `705D4C8363D05D0F`，order 1）

| # | 任务 | 依赖 |
| ---: | --- | --- |
| 1 | 挤压部件 `E1A0000000000051` | `5F132AD862CA787E` |
| 2 | 挤压原型机 `E1A0000000000052` | `E1A0000000000051` |
| 3 | 铁板 `E1A0000000000053` | `E1A0000000000052` |
| 4 | 粉碎球 `E1A0000000000054` | `E1A0000000000053` |
| 5 | 粉碎原型机 `E1A0000000000055` | `E1A0000000000054` |
| 6 | 干燥原型机 `E1A0000000000056` | `E1A0000000000055` |
| 7 | 原型泵 `E1A0000000000057` | `E1A0000000000056` |
| 8 | 熔炼砖 `E1A0000000000058` | `E1A0000000000057` |
| 9 | 熔炼炉体 `E1A0000000000059` | `E1A0000000000058` |
| 10 | 熔炼炉炉缸 `E1A000000000005A` | `E1A0000000000059` |
| 11 | 熔炼炉控制器 `E1A000000000005B` | `E1A000000000005A` |
| 12 | 熔炼炉 `E1A000000000005C` | `E1A000000000005B` |
| 13 | 铸型模具 `E1A000000000005D` | `E1A000000000005C` |
| 14 | 原始包线机 `E1A000000000005E` | `E1A000000000005D` |
| 15 | 铜锅炉 `E1A000000000005F` | `E1A000000000005E` |
| 16 | 原型流式腐蚀釜 `E1A0000000000060` | `E1A000000000005F` |

### 8.2 工业之始（group `705D4C8363D05D0F`，order 2）

| # | 任务 | 依赖 |
| ---: | --- | --- |
| 1 | 好用的合金 `6BDDB3A36AADF646` | `E1A0000000000060` |
| 2 | 蒸汽时代 `0706F92EF2C236B8` | `6BDDB3A36AADF646` |
| 3 | 蒸汽管道 `2C027D8994527225` | `0706F92EF2C236B8` |
| 4 | 蒸汽锅炉 `4C2722480E36EC49` | `2C027D8994527225` |
| 5 | 蒸汽流体加热器 `0FEC076007556020` | `4C2722480E36EC49` |
| 6 | 过热蒸汽 `50FFF3DA2CF84C7F` | `0FEC076007556020` |
| 7 | 蒸汽压力调节器 `79789218839D6E7D` | `50FFF3DA2CF84C7F` |
| 8 | 蒸汽粉碎机 `553DE08FF8207EFC` | `79789218839D6E7D` |
| 9 | 蒸汽挤压机 `160B66057D2A2BC2` | `553DE08FF8207EFC` |
| 10 | 蒸汽切割机 `E1B0000000000001` | `160B66057D2A2BC2` |
| 11 | 蒸汽挤出机 `E1B0000000000002` | `E1B0000000000001` |
| 12 | 蒸汽提取机 `E1B0000000000003` | `E1B0000000000002` |
| 13 | 蒸汽抛光机 `E1B0000000000004` | `E1B0000000000003` |
| 14 | 蒸汽乳胶提取机 `E1B0000000000005` | `E1B0000000000004` |
| 15 | 蒸汽泵 `E1B0000000000006` | `E1B0000000000005` |
| 16 | 蒸汽包线机 `22372738BD8CBD0F` | `E1B0000000000006` |
| 17 | 蒸汽储存器 `E1B0000000000007` | `22372738BD8CBD0F` |
| 18 | 蒸汽电解器 `E1B0000000000008` | `E1B0000000000007` |
| 19 | 蒸汽矿物分离器 `E1B0000000000009` | `E1B0000000000008` |
| 20 | 蒸汽锅炉（多方块） `E1B000000000000A` | `E1B0000000000009` |
| 21 | 电动蒸汽发生器 `E1B000000000000B` | `E1B000000000000A` |
| 22 | 蒸汽采石机 `E1B000000000000C` | `E1B000000000000B` |
| 23 | 微型熔炉 `E1B000000000000D` | `E1B000000000000C` |
| 24 | 渗碳成钢 `E1B000000000000E` | `E1B000000000000D` |
| 25 | 强化铁砧 `E1B000000000000F` | `E1B000000000000E` |
| 26 | 蒸汽轧机 `35B9A0B50B6D5A7C` | `E1B000000000000F` |

---

## 9. 对既有内容的改动（全部列出）

1. `metallurgy/blast_furnace_recipes.js`：**新增**一条渗碳钢，其余未动。
2. `config/astages/simple/astages/item.json`：**追加** 7 条 `steam_gate_i*`，原 39 条未动。
3. `config/ftbquests/quests/chapters/5fe0048b1a2b6a65.snbt`：
   保留 11 个原有任务（id / 任务 id / 奖励不变，重排依赖与坐标）；
   **删除** `42E849ED292EF5E7`（熔炼炉，搬到原始章并拆成 4 步）；新增 15 个任务；
   `order_index` 1 → 2。
4. `config/ftbquests/quests/lang/zh_cn.snbt`：替换 3 条旧文案，追加 167 行。
5. 未改动：`kubejsstudio/recipes.js`、`iu_electric_motor.js`、`if_gears.js`、`iu_chip.js`、
   `iu_crystal.js`、`create/casing_progression.js`、`embers/gears.js`。

---

## 10. 验收

1. 重启（AStages 阶段表只在 ServerStartingEvent 读），之后 `/reload`。
2. 日志：`[IU] 原始时代魔改已应用`、`[IU] 蒸汽时代魔改已应用`、
   `[IU] 板材路线：余烬压印 8 种 / Create 压板 5 种 / IU 挤压机全通用`、
   `[IU] 铁砧敲板已封禁`、`[IU] 熔炼炉禁用钢产出 … -> true`。
3. JEI：铁砧没有「锭→板」；挤压原型机有「锭→板 / 板→外壳」；
   余烬压印有 IU 板（锡/铅/锌/铜/金/银/琥珀金/青铜）；Create 辊压有 9 种 IU 板；
   熔炼炉查不到钢锭；所有铜锅炉机器不再显示琥珀金锅炉。
4. 任务书：「工业起步」顺序 机械动力 → 原始时代（16）→ 工业之始（26）。
