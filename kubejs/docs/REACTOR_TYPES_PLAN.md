# 通用反应器（反应器 + 塔器 + 六个能力池）

> 状态：**已实现（v2，石油线并入）**。基线 MC 1.21.1 / NeoForge / MMCR 0.1.7 / IU 3.4.0.11 /
> KubeJS 2101.7.2 / PneumaticCraft:R 8.2.24 / Mekanism 10.7.19 / Sink Journey Core 0.1.0
> 机器与内件：`startup_scripts/industrial/reactors_v2.js`（**改完完全重启**）
> 结构与配方：`server_scripts/industrial/reactors_v2.js`（`/reload` 生效）
> 内件等级：`startup_scripts/oil/g1_machines.js`（炉管 / 塔板 / 催化剂床）+ 本文件机器脚本（催化剂 / 耐压 / 树脂）
> JEI 说明：`client_scripts/industrial/reactors_v2_info.js`
> 釜的分工：`CHEMICAL_REACTOR.md`；石油线：`OIL_LINE_V2.md`

---

## 0. 判定权在谁手里

一台机器能做多少配方不是通用性，**谁来判定能不能做**才是。现在的判定是三层：

| 层 | 决定什么 | 机制 | 状态 |
| --- | --- | --- | --- |
| 能力池 | 这台机器属于哪类接触方式 | `recipePool(A, B, C, D)` 多池 + 控制器界面选池 | 已用 |
| 内件 | 装的是催化床、耐压筒、炉管还是塔板 | `api.levelSlot()` + 配方 `mmcr:level` | 已用 |
| 条件 | 这条反应此刻跑不跑得动 | 气压 / 料比 / 温度 | 气压已用，温度预留未启用 |

所以：加一条反应只加配方；加一类工艺只要它落进已有池；加一台机器只声明它入哪个池。

---

## 1. 通用反应器 `sinkjourney:universal_reactor`

因科镍机壳，3×3×6，并行 4，入四个池：

| 池 | 中文 | 承接 |
| --- | --- | --- |
| `sinkjourney:reactor_gas_solid` | 气固固定床 | 蒸汽重整、变换、SO₂ 氧化、氨氧化、石脑油加氢精制 |
| `sinkjourney:reactor_fluidized` | 流化床 | 沸腾氯化、冷氢化 |
| `sinkjourney:reactor_high_pressure` | 高压合成 | 甲醇（CO / CO₂）、氨合成 |
| `sinkjourney:reactor_cracking` | 管式裂解 | 石脑油蒸汽裂解（钢 → 钼钢 → 因科镍 → 钛 炉管） |

```
y0  XXX      F/J = 流体输入（北/东）   I = 物品输入（西）
    XCX      G/K = 流体输出（北/东）   O = 物品输出（西）
    XXX
y1  XFX      C = 控制器（北墙中层）
    I J
    XXX
y2  XRX      R = 催化剂槽（北）        T = 炉管槽（南）
    X X
    XTX
y3  XGX
    O K
    XXX
y4  XPX      P = 耐压容器槽（北）      E = 能量输入（南）
    X X
    XEX
y5  XHX      H = 热量仓（北，可选：机壳或热量仓）
    X X
    XXX
```

三个内件槽，放等级定义里的合金块就是换工艺；**三个槽都要有方块才能组成**，
不用的那个放本类型最低级（催化剂放因科镍块、耐压放钢块、炉管放钢块）：

| 槽 | 等级 | 方块 | 用途 |
| --- | --- | --- | --- |
| 催化剂 | `catalyst_nickel_alumina` → `iron_chromia` → `copper_zinc` → `vanadia` → `iron_promoted` → `platinum_rhodium` | 因科镍 / 钢 / 不锈钢 / 钼钢 / 钴铬 / 金银 | 重整、变换、甲醇、SO₂ 氧化、氨合成、氨氧化 |
| 耐压容器 | `forged_steel` → `multilayer` → `wire_wound` | 钢 / 不锈钢 / 钛 | 甲醇（多层包扎）、氨合成（绕带式） |
| 炉管 | `furnace_tube_steel` → `molybdenum` → `inconel` → `titanium` | 钢 / 钼钢 / 因科镍 / 钛 | 石脑油裂解深度与结焦 |

催化剂还带活性加成（×1.00 → ×0.85 / 并行 +2 → ×0.72 / +4）；炉管决定裂解产物分布；
耐压容器只做门槛，不改动力学。

## 2. 通用塔器 `sinkjourney:column_reactor`

不锈钢机壳，3×3×8，并行 2，入两个池：`reactor_gas_liquid`（SO₃ 吸收、硝酸吸收、HCl 吸收）
与 `reactor_reactive_distillation`（三氯硅烷歧化）。塔板复用 `sinkjourney:tray`（钢 → 不锈钢 →
因科镍 → 钛），树脂槽两级（凝胶 / 大孔）。结构与验收见上一版说明，未改动。

---

## 3. 大型机型（三档，放大与拓展）

标准机型只有一档，大型机型分三档，与六档釜同一套规则：**换壳、换仓、换并行，三个一起抬**，
中间多垫机壳层当材料成本。它们入同样的池、跑同样的配方，所以以后加新工艺只加配方，要放大就换机型。

| 档 | 反应器 | 塔器 | 仓 | 反应器并行 / 塔器并行 |
| --- | --- | --- | --- | --- |
| 一 | `large_reactor_stainless` 5×5×7 不锈钢壳 | `large_column_inconel` 5×5×9 因科镍壳 | 改良仓 + 大型能量仓 | 8 / 3 |
| 二 | `large_reactor_titanium` 5×5×8 钛壳 | `large_column_titanium` 5×5×10 钛壳 | 高级仓 + 巨型能量仓 | 10 / 4 |
| 三 | `large_reactor_cobalt` 5×5×9 钴铬壳 | `large_column_cobalt` 5×5×11 钴铬壳 | 完美仓 + 超级能量仓 | 12 / 6 |

端口数按"大型"这一级定死，三档一致，放别的档的仓组不起来（和六档釜一个规矩）：

| | 标准机型 | 大型机型（三档同） |
| --- | --- | --- |
| 反应器 | 3×3×6，2 流体进 / 2 流体出 / 1 物品对 | 5×5×7~9，**4 流体进 / 5 流体出 / 1 物品对**，2 能量仓，热量进出口 |
| 塔器 | 3×3×8，2 进 / 2 出，1 塔板槽 | 5×5×9~11，**5 进 / 4 出，2 塔板槽（上下两段）** |

大型反应器（C 控制器在地板北侧，内件三槽规则不变；中间垫层数随档 +0/+1/+2）：

```
y0  XXCXX      F/J/K = 流体输入（本档流体仓）  I = 物品输入（本档总线）
    XXXXX      G/M/N/S = 流体输出（本档仓）    O = 物品输出（本档总线）
    XXXXX      R = 催化剂槽   P = 耐压容器槽   T = 炉管槽
    XXXXX      A = 气压输入   E = 能量（本档仓，两路）
    XXXXX      H = 热量输入   W = 热量输出（都可留机壳）
y1  XFIFX
    J   K
    X   X
    X   X
    XXAXX
y2  XXRXX
y3  XXPXX  …  XXTXX
垫层（0~2 层，随档）
y4  XGOGX  …  M   N  …  XXSXX
y5  XXEXX  …  H   W  …  XXEXX
y6  XXXXX（封顶）
```

大型塔器：气体两路（北墙）、液体三路（西/东墙 + 塔顶回流），塔底三路出料（釜液、循环液、侧线）、
塔顶尾气一路；两个塔板槽分别在中间两段，树脂槽在其上，能量与热量出口在塔顶。

> 大型塔器的两个塔板槽放同一等级，避免等级要求在两个槽之间判定歧义。

**为什么要"端口冗余"而不是"再来一条产线"**：裂解一台机器出五股馏分，标准机型只有两个流体出口，
玩家得在外面搭分流器；大型机型五股各占一口，管线一眼能看懂。同样地，大型塔器的两段塔板让
"吸收 + 精馏"在同一壳体内接起来，而不是两台塔串着摆。

## 4. 配方与门槛（19 条）

| 配方 | 池 | 内件门槛 | 气压 | tick / FE |
| --- | --- | --- | --- | --- |
| 蒸汽重整 `CH₄+H₂O→CO+3H₂` | gas_solid | 镍催化剂 | 3 bar | 200 / 320 |
| 变换 `CO+H₂O→CO₂+H₂` | gas_solid | 铁铬催化剂 | — | 120 / 160 |
| SO₂ 氧化 `2SO₂+O₂→2SO₃` | gas_solid | 钒催化剂 | — | 150 / 256 |
| 氨氧化 `4NH₃+5O₂→4NO+6H₂O` | gas_solid | 铂铑网 | — | 120 / 224 |
| 石脑油加氢精制（甜油） | gas_solid | 硅铝催化剂床 | 2 bar | 300 / 200 |
| 石脑油加氢精制（酸油） | gas_solid | 硅铝催化剂床 | 2 bar | 360 / 200 |
| 氯化 `Si+3HCl→SiHCl₃+H₂` | fluidized | 硅粉物品 | 3 bar | 120 / 192 |
| 冷氢化 `Si+2H₂+3SiCl₄→4SiHCl₃` | fluidized | 硅粉物品 | 20 bar | 240 / 320 |
| 甲醇（CO） | high_pressure | 铜锌 + 多层包扎 | 20 bar | 160 / 256 |
| 甲醇（CO₂） | high_pressure | 铜锌 + 多层包扎 | 20 bar | 180 / 224 |
| 氨合成 `N₂+3H₂→2NH₃` | high_pressure | 铁系 + 绕带式 | 20 bar | 200 / 320 |
| 裂解 · 钢炉管 | cracking | 钢 | 2 bar | 400 / 480 |
| 裂解 · 钼钢炉管 | cracking | 钼钢 | 2 bar | 400 / 480 |
| 裂解 · 因科镍炉管 | cracking | 因科镍 | 2 bar | 400 / 480 |
| 裂解 · 钛炉管 | cracking | 钛 | 2 bar | 400 / 480 |
| SO₃ 吸收 | gas_liquid | 不锈钢塔板 | — | 120 / 160 |
| 硝酸吸收 `3NO₂+H₂O→2HNO₃+NO` | gas_liquid | 钢塔板 | — | 140 / 160 |
| HCl 吸收 | gas_liquid | 钢塔板 | — | 100 / 96 |
| 歧化 `4SiHCl₃→SiH₄+3SiCl₄` | reactive_distillation | 凝胶树脂 | — | 300 / 256 |

裂解四条共用同一配方表（`CRACK`），炉管等级决定乙烯/丙烯/丁烯/裂解汽油/甲烷的分配与结焦概率：
钢 1920 → 钼钢 2240 → 因科镍 2560 → 钛 2880（乙烯 mB），石油焦概率 0.50 → 0.05。

**压力上限 20 bar（2 MPa）**：气动工艺压缩机的顶格。甲醇 5~10 MPa、氨合成 15~30 MPa、
冷氢化 3 MPa 都超出，高压段用耐压容器等级表达（锻钢 → 多层包扎 → 绕带式），气压只当
"压缩段实际可达压力"。这是抽象取舍，写进 JEI，不假装能到 30 MPa。

**温度门槛没启用**：`H` 位留着，配方里没有 `mekanism:temperature` 要求。原因是本包没有热输入来源，
热源（热力锅炉 / 裂变堆余热）在中期的可达性没验证。

---

## 5. 迁移

| 反应 | 原来 | 现在 |
| --- | --- | --- |
| 石脑油加氢精制（甜 / 酸） | `sinkjourney:naphtha_hydrotreater`（3×3×4 专机） | `reactor_gas_solid` 池 + 硅铝催化剂床 + 2 bar |
| 蒸汽裂解（四级炉管） | `sinkjourney:steam_cracker`（3×3×6 专机） | `reactor_cracking` 池 + 炉管槽 |
| 氯化、歧化、重整、变换、甲醇 ×2、SO₂ 氧化、SO₃ 吸收 | 六档釜 | 反应器 / 塔器（上表） |
| 氨合成、硝酸吸收、氨氧化 | IU 气体混合器 → 釜池 | 高压池 / 塔器池 |
| 氯回收、IU 迁入的聚合/固化/浸出/硝化（82 条） | 六档釜 | **不动** |

两台石油专机已经从注册表与配方里移除：`server_scripts/oil/g1_recipes.js` 删除、
`startup_scripts/oil/g1_machines.js` 只留等级体系。**旧的 `mmcr:naphtha_hydrotreater_controller` 与
`mmcr:steam_cracker_controller` 不再存在**，存档里已摆的两台装置要拆掉，改摆通用反应器；
电力时代任务线的两格已经改指通用反应器与钼钢炉管。

---

## 6. 还没验的三项（进游戏实测）

1. **多池 + 选池**：一台机器入四个池时，控制器界面的池选择是否列出全部、切过去后 JEI 是否只出该池。
   实测不符就把反应器按池拆成薄机器，配方要求照旧。
2. **温度门槛**：`mmcr:heat_input_hatch` 接 Mekanism 热源后能否满足 `mekanism:temperature`；
   顺手验 `mekanism:heat` 输出（放热必须接冷却）会不会真的卡住。
3. **槽位判定**：三个内件槽同时存在时，配方只认自己那一类的等级块（例如裂解配方只匹配炉管槽），
   换错槽的方块应被判为不匹配。

---

## 7. 验收

1. JEI 搜「通用反应器」，控制器说明里能看到四个池与三槽内件的用法。
2. 摆一台：因科镍壳 3×3×6；R 因科镍块、P 钢块、T 钢块 → 组成后选 `reactor_gas_solid`，
   蒸汽重整可跑（气压 ≥ 3 bar）。
3. 切到 `reactor_cracking`：T 放钢块跑钢炉管那条（乙烯 1920 + 石油焦），换钛块后乙烯 2880、焦炭概率降。
4. 切到 `reactor_high_pressure`：R 换钴铬块、P 换钛块 → 氨合成可跑；甲醇因缺多层包扎应阻塞。
5. 塔器：SO₃ 吸收与歧化分别在自己的池里可跑；换错塔板等级应阻塞。
6. 六档釜：聚合要 5 bar + 涡轮，加氢要 10 bar，混酸硝化要涡轮 + 不锈钢衬里（见 `CHEMICAL_REACTOR.md`）。
7. JEI 页签：反应釜六个（聚合与固化 / 浸出与腐蚀 / 气体合成 / 液相反应 / 固相合成 / 氯循环）、
   通用反应器四个、塔器两个，一共十二个池页签；同一台机器的控制器会作为多个页签的催化剂图标出现。
8. 老存档：已摆的两台石油专机拆掉改建通用反应器；六档釜结构变了（南墙三块），补齐后重启。
9. 大型机型分级：摆 `large_reactor_stainless`（5×5×7，不锈钢壳 + 改良仓），三槽放因科镍/钢/钢块，
   切到管式裂解池后五股产物各走一口；放蒸汽档的仓应组不起来。换 `large_reactor_cobalt`（钛/钴铬档）
   后并行上限从 8 抬到 12。
10. 日志：`[化工] 通用反应器已注册：反应器 4 池 / 塔器 2 池，标准与大型各一台`、
   `[化工] 通用反应器就绪：反应器 15 条（固定床 6 / 流化床 2 / 高压 3 / 管式裂解 4）、塔器 4 条`。

---

## 8. 报错速查（都踩过）

| 日志 | 原因 | 处理 |
| --- | --- | --- |
| `InternalError: TypeError: redeclaration of var structure`（每台机器一条） | 结构函数体里用了 `const`/`let`。Rhino 把函数体里的声明提到外层作用域，函数第二次被调用就是「重复声明」，于是六档一台都注册不上 | 结构函数里的局部变量一律 `var`，派发循环也用带下标的 `var` 循环。反应釜与通用反应器都已按这个改过 |
| `Dynamic structure already registered: <id>` | 同一次游戏会话里第二次注册同一个结构（改了形状后热重载） | 结构只认第一次注册；改了形状要**重启**。脚本里每台单独 try，所以只留一条警告，不影响其它机器 |
| `Failed to read ingredient from mmcr:<id>: Item with ID ... does not exist!` | JEI 说明脚本引用了不存在的控制器（档位改名、机器没注册上）。这个异常会**中断整个 addInformation 回调**，后面所有说明页一起消失 | 说明页按 id 表格化，每个 id 单独 try/catch；改档位时只改表格 |
| JEI 里搜不到「通用反应器」的配方页 | ①结构没注册成功（看上面第一条）；②该池一条配方都没有 | 先看日志里有没有 `[化工] 通用反应器就绪：反应器 15 条`，再确认控制器能组起来 |

### JEI 是怎么分页的

MMCR 在 JEI 里给**每个配方池**建一个独立分类（`JeiMachineRecipeTypes.forPool`），分类标题就是
`recipe_pool.<命名空间>.<池名>` 这个 lang key——所以我们补的那些 `recipe_pool.sinkjourney.*` 直接变成
JEI 页签名字：

| 页签 | 来自 |
| --- | --- |
| 通用反应器 · 气固固定床 / 流化床 / 高压合成 / 管式裂解 | `reactor_gas_solid` / `reactor_fluidized` / `reactor_high_pressure` / `reactor_cracking` |
| 塔器 · 气液吸收 / 反应精馏 | `reactor_gas_liquid` / `reactor_reactive_distillation` |
| 反应釜 · 聚合与固化 / 浸出与腐蚀 / 气体合成 / 液相反应 / 固相合成 / 氯循环 | `chemical_reactor_<类别>` 六个池 |

三个要点：

1. 页签按池，不按机器。一台机器挂四个池，就是四个页签，页签里 catalyst 图标是这台机器的控制器。
2. 池子必须有机器认领，否则配方被跳过，日志里会出现
   `Skipping JEI recipe <配方> for unknown recipe pool <池>`。
3. 另有**结构预览**分类（`jei.mmcr.multiblock_structure`），列出每台机器的分层蓝图。
   它读的是结构注册：结构注册失败时机器还在、配方页签也在，但结构预览页里是空的——
   「机器做出来了、JEI 里却找不到它的结构」就是这个原因。

### 写新机器/新池时的三条规矩

1. 结构脚本里的局部变量用 `var`，别在会被调用多次的函数里写 `const`。
2. 每个结构各自 try/catch，一台失败不影响其它台。
3. JEI 说明按 id 名册挂，别在循环里解构 `const`。
