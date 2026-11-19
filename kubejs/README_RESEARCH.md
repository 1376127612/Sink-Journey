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
- 算力：计算机 基础 1 / 进阶 2 / 精英 4；并发容量：数据库 基础 1 / 进阶 2
- 心跳：每次扫描刷新 `ts`；`/research net` 里超过 45 秒没心跳显示 `[离线]`
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
- `beforeStart` 抢位，`recipeTick` 每 20 tick 刷心跳，`beforeFinish` 释放
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

## 2.7 P5：剧情对接（FTB Quests + Patchouli）

**FTB Quests**：新增 `config/ftbquests/quests/chapters/a1b2c3d4e5f60718.snbt`
- 章节「研究图谱」，挂在现有分组「工业革命」`1D6589548F232270`，order_index 9
- 3 个任务：机动研究（演算数据 ×2）→ 蒸汽精度（×4）→ 龙之证（龙蛋）
- 只用 `type: "item"` 任务，**没有**用 command / stage 奖励（AStages 的任务类型没验证过，避免搞坏任务加载）

**Patchouli**：新增 `kubejs/data/patchouli/patchouli_books/research_manual/`
- 书 id `patchouli:research_manual`，书名「溯洄研究手册」
- 分类 1 个（研究基础）、条目 3 个（研究站 / 研究网络 / 时代门槛），全部纯文本页
- 手册本体由 `guide.js` 加配方：纸 + 研究基质 + 空白蓝图

**验收：**
1. 进游戏打开任务书 → 「工业革命」组里多一章「研究图谱」
2. `/give @s patchouli:guide_book{patchouli:book:"patchouli:research_manual"}` 或按配方合成手册
3. 手册能翻页、三个条目可读

## 3. 对既有文件的改动（纯追加，共 2 处）

1. `kubejs/assets/kubejs/lang/zh_cn.json` —— 追加 6 个键（机器名 / JEI 说明 / 节点描述）
2. `config/ftbquests/quests/lang/zh_cn.snbt` —— 追加 1 个章节标题 + 3 个任务标题与描述

两处都是纯追加，没有删改任何原有键。

## 4. 验收步骤

1. **重启游戏**（机器注册只在 startup 生效，`/reload` 不够）。
2. 日志应出现：
   `[SR] 启动缓存节点 3 个` → `[SR] 已注册研究站 sinkjourney:research_station`
   → `[SR] 页面 era_steam 载入 3 个节点` → `[SR] 研究图校验通过，共 3 个节点`
   → `[SR] 就绪：节点 3，已解锁 0 项`。
3. `/research list` → `§e[可研究] sink:kinetic_brass`、`§7[锁定] sink:steam_precision`、`§7[锁定] sink:gate_dragon`。
4. 用 `mmcr:research_station_controller` 搭 3×3×3 黄铜壳研究站。
5. 投料安山合金 ×32 + 研究基质 ×4 + 水 500mB + FE → 约 15 秒出 `kubejs:research_data ×2`。
6. `/research dump` → 出现 `era.kinetic`。
7. 末地杀龙（玩家击杀）→ 广播 `[研究] 已解锁：era.electric`。
8. 保存退出重进 → `/research dump` 保持。

## 5. 已知限制

- 研究站是新机器，不是 `trace_nexus`：MMCR 的 `recipeBehavior` 只能在 `createMachine()` 时挂载。
- `/research balance` 只统计静态成本，不含并行与提速。
- `advancement_any_player` 回填依赖 `player.advancements` 的实际形状，失败会静默跳过（物品回填不受影响）。
- JEI 不会隐藏未解锁配方（recipe 限制需手写进 `config/astages/simple/astages/recipe.json`，默认留空）。
