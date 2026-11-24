# 溯洄研究系统（P1–P3）—— 放置说明与验收

> ⚠️ **待验证项与风险备忘统一放在 [docs/RESEARCH_VERIFY.md](docs/RESEARCH_VERIFY.md)**，
> 改 AStages 限制前先看一眼 recipe 的 `//` 格式（写错会崩服）。

> 与既有 `research/` 系列脚本**互不修改**，仅通过同一套 JSON 配置交互。
> 状态不再使用 `global`（KubeJS 2101 禁止 server 脚本写 global）。

## 1. 文件树（修复后的最终结构）

```
kubejs/config/sinkresearch/
  version.json            存档数据版本（当前 1）
  manifest.json           页面清单（新增页面必须登记）
  migrations.json         老存档回填规则
  nodes/era_steam.json    P1 三个研究节点（2 craft + 1 milestone）
kubejs/startup_scripts/research_core/
  station_startup.js      机器注册 + 速率/门槛 behavior（必须在 startup）
kubejs/server_scripts/research_core/
  core.js                 图加载/校验、解锁表、末影龙里程碑、迁移、配方生成、/research 全部命令
  station_structure.js    研究站 3x3x3 多方块结构
  station.js              已废弃占位（可删）
  tools.js                已废弃占位（可删）
kubejs/client_scripts/research_core/
  hints.js                JEI 池说明（只展示，不判定）
```

## 2. 本轮修复记录（对应日志里的三条报错）

| 报错 | 原因 | 修法 |
|---|---|---|
| `core.js#17: 'global' cannot be assigned to in client or server scripts` | KubeJS 2101 禁止 server/client 脚本给 `global` 赋值 | 删除全部 `global.SR`，改为单文件局部状态；跨文件状态只走 `server.persistentData` |
| `station.js#56: Tried to register event handler 'mmcr.startup' for invalid script type SERVER` | `MMCREvents.startup` 只能在 STARTUP 脚本 | 机器注册拆到 `startup_scripts/research_core/station_startup.js` |
| `No controller registered for machine: sinkjourney:research_station` | 上一条的连带后果（机器没注册，结构里 controller('F') 找不到控制器） | 同上，机器注册成功后自动消失 |
| `tools.js#152: Cannot find function also` | 该 Brigadier 版本没有 `also(Consumer)` | 删掉 `also`，draft/balance 合并进 core.js 的同一个 `/research` 根节点 |

## 2.1 第二轮修复（`/reload` 后仍报错）

| 现象 | 原因 | 修法 |
|---|---|---|
| `[SR] 研究图校验通过，共 0 个节点` | `JsonIO.parse` 返回的是 **Java JsonElement**，`manifest.pages` 取到 `undefined`，页面循环一次都没进 | 改用 `JsonIO.readString` 取文本 + Gson `JsonParser` 解析，再递归转成纯 JS 对象/数组 |
| `No controller registered for machine: sinkjourney:research_station` 仍在 | 该机器在 `startup_scripts` 注册，**`/reload` 不会加载 startup 脚本**；当时 startup.log 只有 6 个脚本，没有 `station_startup.js` | 必须**完全重启游戏**（退出到主菜单再进 / 重启客户端），不是 `/reload` |
| `Failed to create a 'kubejs:shaped' recipe ... research_station_controller` | 连带上一条：控制器物品没注册，引用即失败 | 已给该配方包 try/catch；机器注册成功后自动恢复 |

## 2.2 第三轮修复（重启后）

日志证据：
```
[SR] JSON.parse 失败(...manifest.json, len=85)，改用 Gson: InternalError: TypeError: redeclaration of var obj.
[SR] Gson 解析失败 ... -> InternalError: TypeError: redeclaration of var Parser.
[SR] 启动读取节点配置失败: InternalError: TypeError: redeclaration of var manifest.
```

原因：**KubeJS 的 Rhino 把 `const`/`let` 当脚本级 var 处理**，函数里同名 `const` 重复出现（或与别的脚本同名）会抛
`redeclaration of var`。`len=85` 说明文件读取本身是好的（manifest 只有 85 字符），纯粹是声明冲突。

修法：`research_core/` 下 4 个脚本里 **所有 `const`/`let` 一律改成 `var`**（共 222 处），逻辑不变。
以后在本目录写脚本请统一用 `var`，或保证函数内不出现同名 `const`。

## 2.3 P2：解锁限制（AStages，手工配置）

限制不再由脚本生成，`kubejs/config/sinkresearch/gates.json` 和 `astages_gate.js` 均已移除。
唯一来源是 AStages 自己的配置文件：

- `config/astages/simple/astages/item.json` / `recipe.json`：JSON 数组，一条 = `{ id, stage, object }`
- AStages 在 `ServerStartingEvent` 直接读取，改完需重启生效
- `stage` 就是研究系统授予的阶段名（`era.kinetic` / `era.ember` / `era.radiance` / `era.electric`）
- recipe 限制的 `object` 必须写成 `<配方类型>//<配方 id>`，裸 id 会让 `ASimpleElaborator`
  抛 `ArrayIndexOutOfBoundsException` 崩服；不想冒险就让 `recipe.json` 保持 `[]`

阶段的授予和撤销仍由 `core.js` 负责：
`astages server add <stage>`（解锁）/ `astages server remove <stage>`（`/research reset`）。

## 2.4 P3.1：研究网络（成员登记 + 算力聚合）

新增：
- `kubejs/startup_scripts/research_core/network_blocks.js` —— 6 个构件方块
  （网络中心 1、计算机 3 级、数据库 2 级），贴图已生成到
  `kubejs/assets/kubejs/textures/block/*.png`
- `kubejs/server_scripts/research_core/network.js` —— 聚合逻辑 + `/research net`

**状态模型**（全部在 `server.persistentData`，不写方块 NBT，避免迁移）：

```
sinkresearch.net.index        -> "x_y_z;x_y_z;..."
sinkresearch.net.<x>_<y>_<z>  -> {"compute":n,"capacity":n,"stations":n,"ts":t}
```

- 只在**网络中心**的方块实体 tick 里工作，且 `gameTime % 20 == 0` 才扫，扫描盒 13×7×13（约 1183 次方块查询/秒/中心）
- 算力：中心基线 1（`base_compute`）+ 计算机 基础 1 / 进阶 2 / 精英 4；并发容量：数据库 基础 1 / 进阶 2
- 心跳：每次扫描刷新 `ts`；`/research net` 里超过 45 秒没心跳显示 `[离线]`，
  研究站判定在线用的是 `net_ttl_ms`（默认 15 秒）
- 研究站查询：`station_startup.js` 读同一份 persistentData，找 **16 格内** 最近的中心，
  时长 `factor /= (1 + 0.15 × min(算力, 20))`，总下限 0.25（即最快 4 倍速）

**验收：**

1. 放一个网络中心 + 2 台基础计算机 + 1 台基础数据库（彼此 6 格内）
2. 日志：`[SRN] 新网络登记 x_y_z 算力=2 并发=1`
3. `/research net` → `§a[在线] x_y_z 算力=2 并发=1 研究站=0 心跳=3s`
4. 在 16 格内放研究站，跑一条研究：日志/时长对比应比无网络时快约 `1/1.3`
5. 拆掉网络中心 → `/research net` 45 秒后变 `[离线]`，研究站回到 1.0 倍速

**本阶段未做（留到 P3.2）：** 数据库容量对**并发研究数**的硬性限制、断电/断网时"暂停并保留进度"的显式状态机
（目前进度由 MMCR 自己保存，缺料/缺电会停在那一步，不清零）。

## 2.4.1 算力门槛（2026-11 补齐：`inputs.compute` 从"只显示"变成"要判定"）

节点 JSON 里的 `inputs.compute` 以前只在终端成本行里显示，判定里没有任何读取方，
所以精英计算机（算力 4）除了提速毫无意义。现在它是一条**硬门槛**：

- `beforeStart` 依次过三道关：前置 → 并发位 → **算力**（`node.inputs.compute`）。
  网络算力不足时 `ctx.cancel()` + 就近玩家提示
  `研究站拒绝开工：算力不足（需要 4，网络只有 1）——加研究计算机`，日志留一行
  `[SR] 算力不足 1/4，拒绝开工: <recipe>`。
- 网络中心自身提供 `base_compute`（默认 1），但研究站现在最低的节点也要 2 点算力
  （电力：基础笔记），所以**光放中心开不了工**：要加一台基础计算机（+1）；
  电网调度要 4 点 = 基座 1 + 精英计算机 4，或基座 1 + 三台基础计算机。
  `base_compute: 0` 可恢复"中心不给算力"。
- 算力同时仍是速度系数（`/(1 + 0.15 × min(算力, 20))`），门槛与提速共用同一个数。
- 终端详情页在算力那一行标红 `（不足，网络只有 N）`，悬停提示同样标；`/research tree`
  末尾多一行当前位置的 `算力 / 并发`（没网时直接说"站在离网络中心 16 格内才能给研究站供网"）。

## 2.4.2 解锁路线：电力以前靠笔记，电力以后靠研究站（2026-11 改）

**改之前的现状**：五个时代 stage（`era.kinetic / steam / ember / radiance / electric`）
全部由溯洄研究站的 craft 节点发放；原始研究台与机械研究台产出的笔记只是材料，
拿到手不会解锁任何东西。也就是说"机械研究台 → 笔记"这条线在解锁上是断的，
玩家自然会以为研究站是唯一入口，而研究站又要网络、要算力、要并发位——
于是前中期的研究体验全压在电力时代才该出场的那套设备上。

**改之后**：解锁只看"东西从哪来"——所有时代 stage 都由"拿到笔记/蓝图"触发，
研究站不负责开发解锁的门，它只负责电力以后把材料换成演算数据（目前两个节点）。

| 时代 / 门槛 | 触发 | 触发物 | 出处 |
|---|---|---|---|
| `era.kinetic` | 拿到 | `kubejs:research_notes` | 原始研究台（纸 + 墨囊） |
| `era.steam`（钢）+ `recipe.create:precision_mechanism` | 拿到 | `kubejs:blueprint_steam`（蓝图·机械） | 机械研究台 |
| `era.ember` | 拿到 | `kubejs:research_notes_ember` | 机械研究台 |
| `era.radiance` | 拿到 | `kubejs:research_notes_radiance` | 机械研究台 |
| `gate.enter_end` | 进末地 | — | 玩法（`dimension_enter`） |
| `gate.end` | 亲手杀龙 | — | 玩法（`entity_death`） |
| `era.electric` | 拿到 | `kubejs:research_notes_electric` | 机械研究台（晶圆元件 ×8 + 数据 ×16 + 纸） |

节点总数 9 个，分三页（`config/sinkresearch/nodes/`）：

| 页 | 节点 | 类型 | 前置 | 触发 / 成本 | 算力 | unlock |
|---|---|---|---|---|---|---|
| 笔记时代 | 机动：第一份笔记 | milestone | — | 拿到研究笔记 | — | `era.kinetic` |
| | 蒸汽：机械蓝图 | milestone | 第一份笔记 | 拿到蓝图·机械 | — | `era.steam`、`recipe.create:precision_mechanism` |
| | 余烬：热循环笔记 | milestone | 机械蓝图 | 拿到研究笔记·余烬 | — | `era.ember` |
| | 星辉：共鸣笔记 | milestone | 余烬笔记 | 拿到研究笔记·星辉 | — | `era.radiance` |
| 末地与龙 | 末地：门的另一侧 | milestone | 机械蓝图 | 进入末地 | — | `gate.enter_end` |
| | 末地：龙之证 | milestone | 机械蓝图 | 亲手击杀末影龙 | — | `gate.end` |
| 基础电力 | 电力：基础笔记 | milestone | 龙之证 | 拿到研究笔记·电力 | — | `era.electric` |
| | 电力：绕组与线圈 | craft | 基础笔记 | 电子管 ×8 + 晶圆元件 ×4 + 数据 ×8 + FE 6000，900 秒 | 3 | `recipe.industrialupgrade:basemachine3/rolling_machine` |
| | 电力：电网调度 | craft | 绕组与线圈 | 钢板 ×8 + 精密构件 ×2 + 数据 ×12 + FE 12000，1200 秒 | 4 | `recipe.industrialupgrade:basemachine3/generator_iu` |

三条实现细节：

1. **笔记里程碑会补发**：`item_obtain` 只在物品进背包那一刻触发一次，如果当时前置还没完成
   （先刻出余烬笔记、后拿到机械蓝图），这次就永远错过了。所以 `core.js` 每 10 秒（200 tick）
   扫一遍在线背包，发现"触发物品在身上 + 前置已补齐"就补发一次，日志写
   `[SR] 补发笔记解锁: <节点>（背包里有 <物品>）`。笔记被消耗掉了也不会掉 stage——已发的解锁在
   `sinkresearch.unlocks` 里。
2. **老存档有回填**：`migrations.json` 加了 v3 → v4，按背包里的笔记/蓝图补发 era stage
   （`item_any_player` 规则，幂等）。玩家把笔记吃掉了就补不到，但原先解锁过的 stage 本来就在。
3. **研究站本身没设门槛**：它的控制器配方还是 `blueprint_primitive`，前期就能造出来；
   只是电力之前的节点都不在它身上了，所以造出来也没东西可跑。想彻底拦住可以在
   `config/astages/simple/astages/item.json` 里给 `mmcr:research_station_controller`
   挂一个前置 era stage——那是 AStages 那一半，按需自己配。

`recipe.*` 键现在仍然只是键，不拦配方；要真拦，在 `recipe.json` 里写
`{ "id": "...", "stage": "<键>", "object": "<配方类型>//<配方 id>" }`（两段式，写错会崩服）。

新增/改动节点后跑三件事：

```
python tools/check_research_nodes.py     # 节点/前置/成环/lang/阶段对照
python tools/gen_research_book.py        # 重生成 Patchouli 手册条目
python tools/check_js_balance.py         # 改过 .js 才需要
```

JEI 信息页、`/research tree`、终端详情、研究手册都是读节点 JSON 自动生成的。

### 笔记配方（`config/sinkresearch/notes.json`，唯一来源）

| 产物 | 机器 | 材料 | 时间 | 应力 |
|---|---|---|---|---|
| 演算数据 ×2 | 机械研究台 | 研究基质 ×1、纸 ×1 | 6 秒 | 8 @32RPM |
| 蓝图·机械 ×1 | 机械研究台 | 空白蓝图 ×1、演算数据 ×6、黄铜板 ×4 | 12 秒 | 16 @32RPM |
| 研究笔记·余烬 ×1 | 机械研究台 | 黎明石锭 ×4、演算数据 ×4、纸 ×1 | 30 秒 | 16 @32RPM |
| 研究笔记·星辉 ×1 | 机械研究台 | 星金属锭 ×4、演算数据 ×8、纸 ×1 | 45 秒 | 32 @32RPM |
| 研究笔记·电力 ×1 | 机械研究台 | 晶圆 ×4、演算数据 ×8、纸 ×1 | 60 秒 | 32 @32RPM |

**研究笔记只当门票，不当耗材**：拿到笔记那一刻解锁对应时代（节点是 `item_obtain`
里程碑），此后配方里**不再消耗任何笔记**。演算数据改成「研究基质 + 纸 → 数据 ×2」，
星辉笔记也不再要「余烬笔记 ×1」。原始研究台仍然是唯一的笔记来源，它的用途只剩两件：
第一份研究笔记（开机动）、以及誊抄成蓝图·原始（造机械研究台）。

改动前后的差异（为什么这么调）：

- `演算数据` 不再吃研究笔记：现在用研究基质 + 纸。笔记是"读过就记住了"的门票，
  科技解锁之后还要继续手抄笔记才能出数据，等于逼玩家回原始台罚站。
- `星辉笔记` 去掉 `余烬笔记 ×1`：余烬笔记已经当过解锁门票，不该再被消耗一次。
- `蓝图·机械` 去掉 `精密构件 ×2`：这个蓝图本身就在发 `recipe.create:precision_mechanism`
  这个键，配方里再要它就成了循环依赖（虽然 AStages 现在没接线所以没真卡住）。
- 余烬 / 星辉 / 电力笔记的数据需求分别 8 → 4、12 → 8、16 → 8；电力笔记的晶圆 8 → 4。

## 2.5 P3.2：并发限制 + 网络准入

新增 `kubejs/config/sinkresearch/network.json`：

```json
{ "require_network": true, "default_capacity": 1, "job_ttl_ms": 10000, "search_radius": 16 }
```

**准入**：研究站 `beforeStart` 时，若 16 格内没有在线的网络中心 → `ctx.cancel()`，日志
`[SR] 未接入研究网络，拒绝开工`。调试可把 `require_network` 设 false。

**并发**：数据库容量（基础 1 / 进阶 2）就是"同一网络里同时可跑的研究数"；
没有数据库时用 `default_capacity`（默认 1）。

- 占位存 `server.persistentData` → `sinkresearch.jobs.<netToken>` = `{"x_y_z": ts}`
- `beforeStart` 抢位，`recipeTick` 每 40 tick（2 秒）刷心跳，`beforeFinish` 释放
- `job_ttl_ms`（默认 10 秒）内的占位才算数：服务器崩了 / 机器被拆，脏占位会自动过期，
  不会永久占着并发位

**关于"断网中断"**（当前实现）：MMCR 的 `RecipeTickContext` 没有 `cancel()`，所以分两级处理：

1. `recipeTick` 每 20 tick 检查网络，一旦发现中心不在 → 立刻尝试 `controller.pause()`
   （依次试 `controller.pause` / `factoryScheduler().pause` / `componentRuntime().pause`，
   成功一次就记住入口，日志 `断网中断：已在控制器上暂停（入口 #n）`）
2. 同时写 `sinkresearch.abort.<x_y_z>` 标记；若暂停入口不可用，则在 `beforeFinish` 里
   `discardOutputs() + cancel()`，**这一条研究作废、产出丢弃**，并发位由 TTL 回收

网络恢复后重新开工从头开始（上一次已作废）。

**验收：**

1. 没有网络中心时研究站开工 → 日志 `未接入研究网络，拒绝开工`
2. 放中心（无数据库）→ 可开工 1 条；同时开第二条 → `并发已满 1/1，拒绝开工`
3. 加一台基础数据库 → 可同时跑 2 条
4. 跑一条研究时拆掉机器 → 10 秒后该占位过期，并发位自动释放

## 2.6 P4：研究终端（双通道）

新增：
- `startup_scripts/research_core/terminal_block.js` —— `kubejs:research_terminal` 方块
- `server_scripts/research_core/terminal.js` —— 界面 + 聊天版命令

**通道 1（一定可用）**：聊天版
- `/research tree` —— 树形列表，`✔ 已完成 / ▶ 可研究 / ✘ 锁定`，带 `(已完成数/总数)`
- `/research need <物品id>` —— 反向查询：哪个节点产出/解锁它、成本、前置

**通道 2（尽力而为）**：LDLib2 方块界面
- 事件 `LDLib2UI.block('sink_research_terminal', ...)`（从 `UIEvents` 字节码确认的事件组是 `LDLib2UI`，
  带 `player / block / item` 三个 targeted handler）
- 界面内容：一个 `Label`，文本就是 `/research tree` 那份列表
- 打开：`LDKJSMenuTypes.openBlockUI(player, pos, 'sink_research_terminal')`
- 全过程 try/catch：**失败只打日志，不崩服**，玩家会收到"请用 /research tree"提示

已知：LDLib 的界面搭建 API 没有文档，`Label` 的尺寸/布局没设，可能出现"打开了但看不见/尺寸不对"，
这种情况直接用聊天版；界面打磨需要一次游戏内迭代。

### 2.6.1 界面改版（2026-11，修"界面太小 / 字显示不全"）

原界面是左列 76×20 的格子 + 右侧 216px 详情，节点名被切成 6 个字、描述按"每行 19 字"硬换行，
所以看起来又小又缺字。改版后的 `terminal_ui.js`：

**布局（普通视图，纵向）**
1. 标题栏：`溯洄研究终端` + 右侧按钮 `展开科技树`
2. 状态行：进度 / 研究网络（算力、并发）/ 进行中的研究
3. 科技树缩略带：按页面（时代）分行，左边是时代名，右边是节点小卡（`✔ 已完成 / ▶ 可研究 / ✘ 锁定`），
   点小卡 → 下方详情主体切到那个节点
4. 详情主体：占满剩余高度，分 `成本 / 前置 / 产出 / 解锁 / 说明` 五段

**完整树视图**（按钮切换）：按节点 JSON 的 `ui.x / ui.y` 还原网格，同行的前置画连线，整页铺满窗口；
点任一节点自动收起并跳到它的详情。两个视图构建时都建好，切换只改 `display`，不动窗口尺寸。

**尺寸与文字**
- 窗口按内容算（上限 620×屏幕高-24），实际每段高度都用像素硬算，`normalView` 各段高度之和 == 窗口内容高度
- 字号用 `TextStyle.fontSize` 放大（单位是像素，原版 9；绘制缩放 = fontSize/9，行高 = fontSize + lineSpacing）：
  标题 16 / 正文 12 / 状态与小卡 11
- 折行用原版 `Font.width` 量像素宽度自己切（`SRTU_wrap`），行首禁则（，。、；：！？）」』】》）不让标点落行首，
  装不下才 `SRTU_elide` 加省略号；小卡与网格节点的完整名放在悬停提示里
- 屏幕高度不够时先压详情行数（最少 3 行，末行换 `…`），保证窗口不会顶出屏幕

## 2.6.9 调试命令一览（`/research`，根节点 0 级，子命令各自 2 级）

| 命令 | 作用 |
|---|---|
| `/research tree` | 聊天版研究树（`✔ 已完成 / ▶ 可研究 / ✘ 锁定`，末尾给当前位置的算力/并发） |
| `/research need <物品id>` | 反向查询：哪个节点产出/解锁它、成本、前置 |
| `/research list` | 每个节点的状态与 rank |
| `/research dump` | 已解锁的 key 与来源（`by=…`），排查"它凭什么能做这个" |
| `/research validate` | 图校验错误列表（前置缺失、环、重复 key） |
| `/research unlock <key>` | 解锁单个 key |
| `/research unlockall`（别名 `/research all`） | **科技全开**：图里所有节点的 unlock key 一次发下去 |
| `/research reset` | 清空全部解锁，并 `astages server remove` 撤销 stage |
| `/research draft` / `balance` | 生成草稿候选（`config/sinkresearch/candidates.json`）/ 静态成本统计 |
| `/research net` | 研究网络：每个中心的算力、并发、心跳 |

`unlockall` 与 `reset` 的语义：

- `unlockall` 走的是正常的 `srGrant` 路径，所以每个 key 都会顺手 `astages server add` 镜像一次，
  AStages 里 `era.steam` / `era.electric` 那些物品限制会一并放开；`recipe.*` 这类"还没接 AStages"
  的键也会发下去，效果等于"所有节点都已完成"。
- 两者都写 `server.persistentData`，**对当前存档永久生效**（解锁本来就是全服共享的），
  不是只影响这一次登录。想回到零状态就 `/research reset`。
- 只发解锁、不产出物品：需要材料/机器还得自己搞；研究站的配方仍然要投料。

## 2.7 P5：剧情对接（FTB Quests + Patchouli）

**FTB Quests**：研究不再单独占一章，每个环节写进它所属的时代章节（任务 id 固定，
老存档进度不会丢）：

| 章节 | 文件 | 研究任务 |
|---|---|---|
| 原始时代 | `3f5a7c2b9e1d4a60` | 第一份笔记（原始研究台） |
| 工业之始 | `5fe0048b1a2b6a65` | 演算数据、机械蓝图（机械研究台） |
| 余烬初火 | `676f67c1de6cc626` | 余烬笔记 |
| 星界探索 | `6bb0d29314d7c897` | 星辉笔记 |
| 电力时代 | `e1c0000000000000` | 研究笔记·电力（原本就在）、绕组与线圈、电网调度 |
| 征战末地 | `1615b92ec329cc3d` | 不新增：已有「进入末地」「击杀末影龙」 |

任务描述里的材料 / 耗时 / 应力**直接从配方读**，不是手写的：

- 配方来源：`config/sinkresearch/notes.json`（机械研究台五条笔记配方）+ 节点 JSON 的 craft 节点
- 生成器：`python tools/gen_research_quests.py`（按 id 原地替换，跑多少遍都一样）
- 语言文件：`tools/fix_quest_lang.py` 里的小工具负责块级读写，
  避免按行增删把多行数组的头尾吃错（这个坑真踩过，`--dry` 可以只报告不写盘）

`recipe.*` 类 unlock 键仍然只是键，不拦配方；要真拦就和以前一样写 AStages 的 `recipe.json`。

**Patchouli**：新增 `kubejs/data/patchouli/patchouli_books/research_manual/`
- 书 id `patchouli:research_manual`，书名「溯洄研究手册」
- 分类 1 个（研究基础）、条目 3 个手写（研究站 / 研究网络 / 时代门槛）+ 每个节点 1 个自动生成
- 手册本体由 `guide.js` 加配方：纸 + 研究基质 + 空白蓝图

**验收：**
1. 进游戏打开任务书 → 原始时代 / 工业之始 / 余烬初火 / 星界探索 / 电力时代 五章里能看到研究任务
2. 任务描述里的材料与 JEI 里对应配方一致（改配方后重跑生成器即可）
3. `/give @s patchouli:guide_book{patchouli:book:"patchouli:research_manual"}` 或按配方合成手册

## 2.8 里程碑触发类型（P3 扩展）

`kind: "milestone"` 的节点由玩法事件推进，`core.js` 的 `srRegisterMilestones()` 按节点声明注册监听：

| `trigger.type` | 字段 | 触发 |
|---|---|---|
| `entity_death` | `entity`、`dimension?`、`require_player_kill?` | 实体死亡；要求玩家亲手时非玩家击杀不算 |
| `advancement` | `advancement` | 玩家拿到指定成就 |
| `item_obtain` | `item` | 物品进背包（`PlayerEvents.inventoryChanged`） |
| `dimension_enter` | `dimension` | 换维度进入指定维度（每 10 tick 比对 `sinkresearch.lastdim`） |

触发后还要过 `requires`，前置没完成只写日志。加新类型：在 `srRegisterMilestones()` 里加一个
分支，并在节点 JSON 里写对应 `trigger`。

## 2.9 节点显示名与语言文件

每个节点在 `assets/kubejs/lang/{zh_cn,en_us}.json` 里有：

- `research.node.<短 id>.name` —— 显示名，如 `research.node.kinetic_brass.name` = 机动：黄铜配比
- `research.<短 id>.desc` —— 长描述（节点 JSON 的 `ui.doc` 指向它）

用到名字的地方：研究终端格子与详情标题、`/research tree` 聊天列表、JEI 信息页首行、
Patchouli 条目（`kubejs/tools/gen_research_book.py` 生成时读 lang）。缺 key 时各处会退回短 id。

时代解锁只从节点的 `unlock` 走：`core.js` 不再监听"物品进背包发时代"，
想让"拿到笔记才解锁"就加 `kind: milestone` + `trigger: { type: "item_obtain", item: ... }` 的节点。

## 3. 对既有文件的改动（纯追加，共 2 处）

1. `kubejs/assets/kubejs/lang/zh_cn.json` —— 追加 6 个键（机器名 / JEI 说明 / 节点描述）
2. `config/ftbquests/quests/lang/zh_cn.snbt` —— 追加 1 个章节标题 + 3 个任务标题与描述

两处都是纯追加，没有删改任何原有键。

## 4. 验收步骤

1. **重启游戏**（机器注册只在 startup 生效，`/reload` 不够）。
2. 日志应出现：
   `[SR] 启动缓存节点 9 个` → `[SR] 已注册研究站 sinkjourney:research_station`
   → `[SR] 页面 notes 载入 4 个节点` / `end 载入 2 个` / `era_electric 载入 3 个`
   → `[SR] 研究图校验通过，共 9 个节点` → `[SR] 就绪：节点 9，已解锁 0 项`
   → 3 行 `[SR] 生成研究配方 ...`（只有电力页三个 craft 节点生成配方）。
3. `/research list` → 只有 `sink:notes_primitive` 是可研究（其余锁定）。
4. 原始研究台：纸 + 墨囊 → 研究笔记 → 聊天栏广播 `§b[研究] 已解锁：§eera.kinetic`，
   日志 `[SR] 解锁 era.kinetic 原因=milestone:kubejs:research_notes`。
5. 机械研究台：空白蓝图 + 演算数据 ×6 + 精密构件 ×2 + 应力 → 蓝图·机械 →
   `era.steam` 与 `recipe.create:precision_mechanism` 一起解锁（钢类物品随之可用）。
6. 机械研究台再出研究笔记·余烬 / 星辉 → `era.ember` / `era.radiance`。
7. 进末地 → `gate.enter_end`；**亲手**击杀末影龙 → `gate.end`。
8. 机械研究台：晶圆元件 ×8 + 演算数据 ×16 + 纸 + 应力 32 → 900 秒出研究笔记·电力 →
   解锁 `era.electric`（通用机械 / AE2 主机同时可用）。
9. 想用研究站：3×3×3 黄铜壳 + 16 格内网络中心 + 算力 ≥3 → 投料「绕组与线圈」→ 电力数据产线。
10. 保存退出重进 → `/research dump` 保持；老存档若原本有 era stage，迁移 v3→v4 不会收回。

## 5. 已知限制

- 研究站是新机器，不是 `trace_nexus`：MMCR 的 `recipeBehavior` 只能在 `createMachine()` 时挂载。
- `/research balance` 只统计静态成本，不含并行与提速。
- `advancement_any_player` 回填依赖 `player.advancements` 的实际形状，失败会静默跳过（物品回填不受影响）。
- JEI 不会隐藏未解锁配方（recipe 限制需手写进 `config/astages/simple/astages/recipe.json`，默认留空）。
- 笔记解锁判定的是"物品进背包的那一刻"：如果那时前置还没完成，10 秒一次的补扫只在笔记/蓝图**还留在背包里**时有效；吃掉或丢掉了就要再弄一份。
- 研究站是电力以后的设备，但控制器配方仍然只要 `blueprint_primitive`，前期造得出来（造出来也没东西可跑）。要硬拦就给它挂 AStages 前置时代。
