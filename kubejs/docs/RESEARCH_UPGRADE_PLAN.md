# 溯洄研究系统 —— 改进方案

> 先说结论：现在的系统**不是"简陋的树"，而是"6 个时代开关"**。
> 每个节点基本只做一件事——产出一张笔记 / 一个 unlock key 去开门，
> 研究数据只是货币，没有任何"研究"本身的决策。
> 终端界面又从来没成功过（一直降级成纯文本），所以看起来格外简陋。
> 下面按"先修坏掉的 -> 再补结构 -> 再做表现"排。

## 0. 现状盘点（都是代码事实）

| 项 | 现状 | 依据 |
|---|---|---|
| 节点数 | 6 个：craft 5 + milestone 1，分 3 页 | `config/sinkresearch/nodes/*.json` |
| 解锁粒度 | 一个节点 = 一个 `unlock` key（时代 stage），没有"单项科技" | `era_steam/ember/electric.json` |
| 研究数据 | `kubejs:research_data` 只是配方输入货币，无消费端、无累积 | 同上 |
| 时代解锁 | **物品入包就送 stage**，绕过了研究站节点 | `core.js` `PlayerEvents.inventoryChanged` |
| 站点准入 | 无网络 / 并发满 / 前置不足 → 只写日志，玩家零反馈 | `station_startup.js` beforeStart |
| 终端 | 样式版 100% 构建失败 → 纯文本列表；专用服无数据 | `logs/latest.log` `[SRTU] 样式版界面构建失败` |
| 图逻辑 | core.js / terminal.js / terminal_ui.js **三份重复实现** | 三个文件各自 `srLoadGraph` 同构代码 |
| 死字段 | `node.inputs.compute`、`node.ui.x/y`、`node.rank` 无任何读取方 | `grep compute` 只命中网络侧 |
| 权限 | `/research` 两个根注册权限不一致：core 要 2，terminal 要 0 | `core.js` vs `terminal.js` |

`node.inputs.compute` 属于"写了但没接"的典型：把它接进准入判定，就是现成的
"这条研究需要多少算力"的门槛，一行逻辑的事。

## 1. P0 让现有的东西能用（约 1 天）

> 进度：P0 的 1.1–1.5 全部实现（1.4 完成了数据源部分，逻辑去重留给 P1）。
> 扫雷**保留在原始研究台界面**（它本来就是那里的玩法），只是不再出现在研究终端。

**1.1 终端样式版修复（已完成）**
三处独立 bug 叠在一起，所以从来没进过样式版：
`layout(l -> l.flexDirection(...))` 被 Rhino 解析成 getter、`UI.of(root, fn)` 转不了
`DynamicSizeProvider`、`SDFRectTexture.of(0xF0...)` 超 int 上限。已改为 `lss(...)` +
显式 `StyleOrigin.INLINE` + 有符号 ARGB + `UI.of(root)` 单参。

**1.2 拒绝开工必须有玩家反馈（已完成）**
`station_startup.js` 三处 `ctx.cancel()` 旁边加"12 格内玩家 tell 原因 + 缺什么"（同站同因 4 秒去重）：
- `未接入研究网络（需要 研究网络中心）`
- `并发已满 2/2：去加数据库或等这条跑完`
- `前置未完成：sink:steam_precision`
日志留着，但不能只有日志。

**1.3 终端要显示"正在跑什么"（已完成）**
占位记录原来是纯时间戳，服务端根本不知道在跑哪条，所以先把它改成
`{ ts, start, node }`（`ts` 是心跳、`start` 是开工时间），终端据此显示
「进行中：节点 id + 预计剩余」，超过 30 秒没心跳的脏占位不显示。

**1.4 去掉三份重复实现，改单一数据源（数据源已完成）**
服务端在 `terminal.js` 里把解锁集合与进行中列表打包，右键时先
`player.sendData('sinkresearch:state', tag)` 再开界面（同一连接 FIFO，界面构建时已有数据）；
客户端 `NetworkEvents.dataReceived` 只存不判，`SRTU_model` 优先用这份快照，
本地 `persistentData` 读取降级成兜底。收益：专用服终端终于有进度数据。

**仍未做**：图加载/判定在 core.js（服务端）、terminal.js（服务端）、terminal_ui.js（客户端）
各有一份，属于"改一条规则要改三处"。真正的去重需要把节点图下沉成一份共享数据
（或把客户端完全改成只渲染服务端快照），建议与 P1 的节点重构一起做，别单独动。

**1.5 命令权限统一（已完成）**
`/research` 原来两个根注册权限不同（core 2 / terminal 0），实际能用什么命令取决于加载顺序。
已改成根节点 0 级、调试子命令各自 2 级。

## 2. P1 把"6 个开关"变成一条研究线（3–5 天）

**2.1 节点粒度下沉到"科技"而不是"时代"**
每个时代 6–10 个节点，节点产出分三类，都已在数据模型里能表达：
- `outputs.items`：研究笔记 / 数据
- `unlock`：`recipe.<id>`（解锁某条配方，AStages 已有）、`machine.<id>`、`era.<x>`
- `requires` 从线性链改成有分叉的 DAG（`or` 已经支持，只是没人用）

**2.2 把 `compute` 接进准入**
`beforeStart` 里比较 `net.compute` 与 `node.inputs.compute`：不够就拒绝并告诉玩家
"需要算力 4，当前 2"。这样精英计算机/数据库才有存在意义，而不是只影响速度。

**2.3 研究队列（2–4 条）**
研究站现在一次一条 + 并发靠数据库。加队列后：投料即排队，站点按并发数推进，
终端的「进行中」列表就是队列视图。取消队列里的条目要退料（`discardOutputs` 的反向）。

**2.4 解锁范围先定下来**
现在是全服共享（`server.persistentData` + `astages server add`）。
单人整合包这样没问题；多人要么写清"团队共享"，要么改成每人一份
（`player.persistentData` + 客户端各自同步，数据版本升 v3 并写迁移）。

**2.5 关掉"物品入包直接送时代"的口子**
`PlayerEvents.inventoryChanged` 那 4 段让时代解锁与研究方向脱钩：原始研究台做出笔记
就把 `era.kinetic` 送出去了，`sink:kinetic_brass` 这个节点变成可选路径。
要么删掉这 4 段、让 stage 只从节点走；要么把它们降级成"回填/迁移专用"（只在
`srRunMigrations` 里用，不做常驻监听）。

## 3. P2 让终端看起来像个研究系统（3–4 天）

**3.1 真树而不是列表（已完成）**
节点 JSON 里的 `ui.x / ui.y` 已经用起来了：每页把 ui.x / ui.y 的去重值当列号/行号，
还原成格子（不同页各自分带，页之间用标题隔开），同一行左邻列的前置之间画 1px 细线；
节点格子按状态着色（已完成绿、可研究琥珀、锁定灰），悬停仍给成本提示。
跨行/跨列的前置不画线（当前数据里没有），改在右侧详情里列出来。

**3.2 点击节点 → 右侧详情（已完成）**
点格子后右侧显示：状态 / 时代 / 成本（物品、流体、能量、算力、时长）/ 前置 /
产出 / 解锁的 stage / `ui.doc` 那段说明文字（`Text.translatable` 取出来按 19 字换行）。
打开时默认选中第一条「可研究」的节点。

**3.3 未解锁配方在 JEI 里可见但标灰**
硬隐藏要靠 AStages 的 `recipe.json` 手写 `<类型>//<id>`，很容易崩服。
折中：`RecipeViewerEvents` 给未解锁产物加一行"未解锁：需要 sink:xxx"，
比"看不见"更友好，也不会碰 AStages 的坑。

**3.4 Patchouli 手册与节点数据同步**
现在手册 3 个条目是手写的。节点数一多就会漂移：改成 core.js 在
`ServerEvents.loaded` 里按节点生成手册条目（Patchouli 支持 datapack 目录热读），
或至少把手册页码从节点 `ui.doc` 反推。

## 4. P3 机制层面（可选，做完 P1/P2 再评估）

- **给扫雷补一个说得通的解释**：它现在只加速原始研究台（手抄阶段），正好对得上
  "原始时代没有机械、只能靠人熬时间"的设定，但加速比例 50% 太便宜。
  可选做法：改成"通关一次推进 25%，每天/每局上限 2 次"，或者把奖励换成"多产出一份笔记"。
  终端里不要放（研究阶段已经进入机械时代，手动小游戏不再是叙事的一部分）。
- **失败/回退**：高 rank 节点有失败率，失败退回部分材料并留下"废稿"，废稿可再研究。
- **里程碑触发类型扩展**：现在只有 `entity_death`。加 `dimension_enter`（到达末地/月球）、
  `recipe_first_output`（第一次做出某产物）、`item_obtain`，让里程碑承担"玩法验证"而不是只有打龙。

## 5. 数据模型 v3 建议（若做 1.4 + 2.4）

```json
// 现在
"sinkresearch.unlocks": "era.kinetic,recipe.create:precision_mechanism"
// 建议
"sinkresearch.state": { "v": 3, "unlocks": { "era.kinetic": { "at": 0, "by": "node:sink:kinetic_brass" } } }
```
`unlocks` 从逗号串升级成带来源的 JSON：终端可以显示"什么时候、因为哪条研究解锁的"，
排查"为什么它能做这个"时不用翻日志。迁移规则写进 `migrations.json`（现有机制够用）。

## 6. 验收清单

1. 放研究站 + 网络中心，右键研究终端 → 深色面板、标题、进度、节点行、悬停有成本
2. 拆掉网络中心 → 开工被拒 **并且收到聊天提示**
3. 终端能看到正在跑的研究与剩余时间
4. 专用服（或非单机）也能看到完整终端
5. `/research tree` 与终端内容一致（同一份数据源）
6. 未解锁的节点在终端里是锁定态，点击后有详情与前置链
