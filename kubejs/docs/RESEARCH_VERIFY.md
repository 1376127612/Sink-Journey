# 溯洄研究系统 —— 待验证清单与风险备忘

> 更新时间：2026-11-19
> 用途：记录"代码已写但**尚未在游戏里实际验证**"的部分。每项都给了步骤、期望日志、失败判定和回滚方式。
> 验证完一项就把对应的 ✅ 勾上并写日期，避免以后重复踩坑。

---

## 0. 系统总览

| 子系统 | 文件 | 状态 |
|---|---|---|
| 研究图 / 解锁表 / 里程碑 / 命令 | `server_scripts/research_core/core.js` | ✅ 已验证（节点加载、末影龙解锁、/research list）；⚠️ 笔记解锁与补扫见 V7 |
| 研究站机器 + 配方生成 | `startup_scripts/research_core/station_startup.js`、`server_scripts/.../station_structure.js` | ✅ 已验证（出研究数据、解锁生效） |
| AStages 限制（手工配置） | `config/astages/simple/astages/{item,recipe}.json` | ✅ item 格式已验证；recipe 保持 `[]` |
| 研究网络（算力聚合） | `startup_scripts/.../network_blocks.js`、`server_scripts/.../network.js` | ⚠️ 未完整验证（只确认过不崩） |
| 网络并发限制 | `station_startup.js` 内 `srNetState/srJobs*` | ⚠️ 未验证 |
| 断网中断 | `station_startup.js` 内 `srTryStop` | ⚠️ 未验证（含两级兜底） |
| 终端 GUI | `server_scripts/.../terminal.js` + `client_scripts/.../terminal_ui.js` | ⚠️ 双端注册已补（2026-11-18 崩溃修复），待实测 |

---

## 1. 待验证清单（按优先级）

### V1. 网络并发限制是否真的生效 ⚠️高

**步骤**
1. 放 1 个网络中心 + 研究站（16 格内），**不要**放数据库
2. 投料跑第 1 条研究
3. 立刻在第二台研究站投料跑第 2 条

**期望**：第 2 条开始时报 `[SR] 并发已满 1/1，拒绝开工`，机器不出货。
**失败判定**：两条同时跑 → `srNetState` 或 jobs 写入有问题。
**回滚**：`network.json` → `"default_capacity": 99` 即可放开。

### V2. 断网中断走的是哪一级 ⚠️高

**步骤**
1. 研究跑到一半，**拆掉网络中心**
2. 观察日志与控制器界面

**期望 A（最好）**：`[SR] 断网中断：已在控制器上暂停（入口 #n）`，进度条停住；
放回中心后继续。

**期望 B（兜底）**：`[SR] 断网中断：控制器没有可用暂停入口，退化为"完成后作废"`，
跑完后 `[SR] 断网中断：研究作废，产出已丢弃` 且不出货。

**说明**：MMCR 的 tick 上下文没有 cancel，入口 #0/#1/#2 是从运行时类推断的。
如果两个都不是，说明 `mc.controller()` 拿到的对象没有这些方法 → 需要改用
`FactoryRuntime`（`pause()/resume()`）或换成"拆中心时直接清配方"方案。

### V4. 网络清理时机 ⚠️低

1. 放中心 → `/research net` 有条目
2. 拆中心 → 条目应立刻消失（`BlockEvents.broken`）
3. 中心放在未加载区块 → 条目保留但显示 `[离线]`（这是有意为之，防止误删）

### V7. 9 节点 + 笔记解锁（2026-11 改版）⚠️高

**步骤**
1. 重启后看日志：`研究图校验通过，共 9 个节点` + 2 行 `生成研究配方`
   （只有电力页的「绕组与线圈」「电网调度」是 craft 节点）
2. `/research list`：只有 `sink:notes_primitive` 可研究
3. 原始研究台做研究笔记 → 应广播 `已解锁：era.kinetic`，日志
   `[SR] 解锁 era.kinetic 原因=milestone:kubejs:research_notes`
4. 机械研究台刻蓝图·机械 → 解锁 `era.steam`（钢类物品立即可用）
5. 机械研究台出余烬笔记 / 星辉笔记 → `era.ember` / `era.radiance`
6. 杀龙后：机械研究台用晶圆元件 ×8 + 数据 ×16 + 纸刻电力笔记 → `era.electric`
7. 打开终端 → 三页：`笔记时代` 一行四格、`末地与龙` 一行两格、`基础电力` 一列三格

**补发扫描要单独验一次**：先做出余烬笔记（前置蓝图·机械还没拿），此时不该解锁；
再拿到一张蓝图·机械 → 10 秒内应自动补发，日志 `[SR] 补发笔记解锁: sink:ember_notes`。

**失败判定**
- 拿笔记没有任何广播 → 先看 `[SR] 里程碑 <节点> 前置未满足，跳过`；若一直不补发，
  说明 `PlayerEvents.tick` 里取不到 server（补发失效，但不崩服；手动再拿一份笔记即可）
- 机械研究台找不到电力笔记配方 → 看 `kubejs:mechanical_lab/electric_notes` 有没有注册失败
- `/research list` 里电力页节点显示"可研究"却没杀龙 → 前置写错
- 手册里出现已删除节点（黄铜配比 / 精密构件 / 压床试制…）→ 重跑
  `python tools/gen_research_book.py`

**回滚**：节点 JSON 改回 craft 版本即可；老存档的 stage 不会因为删节点被收回。

### V6. 算力门槛（2026-11 新增，`inputs.compute` 判定）⚠️高

**步骤**
1. 只放网络中心（不造计算机）→ 投料 `sink:kinetic_brass`（`compute: 1`）→ 应能开工
2. 同一网络投料 `sink:steam_precision`（`compute: 2`）→ 应被拒
3. 加一台研究计算机·基础（+1 算力）→ 同一条应能开工

**期望**：第 2 步聊天提示 `研究站拒绝开工：算力不足（需要 2，网络只有 1）——加研究计算机`，
日志 `[SR] 算力不足 1/2，拒绝开工: <recipe>`；终端详情算力行显示 `§c（不足，网络只有 1）`。
**失败判定**：算力不足仍开工 → `srNet` 读到的 compute 不对，先看 `/research net` 那行的算力值。
**回滚**：节点 JSON 删掉 `inputs.compute`（缺省 0 = 不设门槛）；或 `network.json` 加 `"base_compute": 99`。

> 前提：`network.json` 的 `base_compute`（默认 1）决定"只放中心"时算力为几；
> 改成 0 会让 `compute: 1` 的节点在没计算机时也开不了工。

### V4.5 终端界面（P4）⚠️中

`/research tree` 与 `/research need <id>` 是纯聊天输出，一定可用。

> **2026-11-18 崩溃记录（已修）**：右键终端打开 GUI → 客户端渲染 NPE
> `Cannot read field "slots" because "this.menu" is null`
> （crash-2026-11-18_12.36.37-client.txt）。
> 根因（javap 反编译 `KJSBlockUIMenuType` 确认）：同一 UI id 会先以
> `ScriptType.SERVER` 再以 `ScriptType.CLIENT` 各触发一次 `UIEvents.BLOCK` 事件；
> 只在 server_scripts 注册时客户端拿不到 `ev.modularUI`，菜单构建返回 null。
> **修法**：新增 `client_scripts/research_core/terminal_ui.js`，与 terminal.js
> 注册同一个 UI id（`sink_research_terminal`），客户端负责真正构建界面。
> 客户端读不到解锁数据时（专用服）自动降级为提示文本。

LDLib 方块界面需要验证：
1. 日志里有没有 `[SRT] 已注册 LDLib2 方块界面 sink_research_terminal`
   **和** `[SRTU] 已注册客户端 LDLib2 界面 sink_research_terminal`（两条都要有）
2. 右键终端方块有没有打开窗口（此前会直接崩客户端）
3. 如果窗口是空白/尺寸为 0 → `Label` 需要设布局尺寸（`layout/width/height` 相关 API 未验证）
4. 如果日志是 `[SRT] LDLib2UI 注册失败` → 说明事件组名或签名不对，
   把那一行发我（`LDLib2UI` 这个名字是从 `UIEvents.class` 的 `EventGroup.of("LDLib2UI")` 读出来的）

> **2026-11-22 改版（待实测）**：界面重排为"上方科技树缩略带 + 下方详情主体"，
> 右上角 `展开科技树` 按钮切到整页树，树里点节点会自动收起。字号放大、按像素折行。
> 这次要额外看的点：
>
> 1. 窗口尺寸（正常应为 620×约 420，按屏幕高度自动收）有没有超出屏幕或塌成 0
> 2. 顶部三段（标题 / 状态 / 缩略带）有没有和详情面板重叠
> 3. 长描述（`research.electric_notes.desc`，88 字）是否完整折行、不被截断
> 4. 点 `展开科技树` → 整页树；点树里的节点 → 自动收起并跳到该节点详情
> 5. 字号：正文 12px、标题 16px 是否明显比原来大（`fontSize` 单位是像素，原版 9）
>
> 出问题先看日志里有没有 `[SRTU] 界面构建失败` / `视图切换失败` / `节点点击监听失败`，
> 这几条都会让界面退回纯文本兜底版，不会崩客户端。

---

## 2. 已知限制（不是 bug，是设计取舍）

1. **断网中断不能保证立刻**：MMCR tick 上下文没有 cancel，见 V2。
2. **并发限制只统计"研究站"**：其他机器不受影响；并发位靠 10 秒心跳维持，
   服务器卡顿时可能出现短暂误判。
3. **算力是门槛 + 提速**：`node.inputs.compute` 不够直接拒绝开工（见 V6），够用后按
   `/(1 + 0.15 × min(算力, 20))` 提速；不影响产量，速度收益 20 点封顶。
4. **网络扫描是 13×7×13 盒**：中心离计算机超过 6 格就统计不到。
5. **研究节点 JSON 不支持热改**：改 `nodes/*.json` 需 `/reload`（配方会重算）。
6. **AStages item 限制会拦"使用/放置"**：已放置的旧机器在未解锁时也点不动，
   老存档靠 `migrations.json` 回填 `era.electric` 避免被锁死。
7. **KubeJS 的 Rhino 对 `const` 不友好**：本目录所有脚本统一用 `var`，
   新加文件请沿用，否则会 `redeclaration of var` 报错。

---

## 3. 一键关闭开关

| 想关掉什么 | 改哪里 | 值 |
|---|---|---|
| 研究网络准入 | `config/sinkresearch/network.json` | `require_network: false` |
| 算力门槛 | 同上 | `base_compute: 99`（或节点里删 `inputs.compute`） |
| 并发限制 | 同上 | `default_capacity: 99` |
| 全部 AStages 拦截 | 把 `config/astages/simple/astages/` 下两个 json 改成 `[]` | — |
| 整个研究系统 | 把 `research_core/` 目录改名为 `research_core.off` | — |

---

## 4. 数据与存储位置

| 数据 | 位置 |
|---|---|
| 研究节点定义 | `kubejs/config/sinkresearch/nodes/*.json`（新页面要在 `manifest.json` 登记） |
| 存档版本 / 回填规则 | `config/sinkresearch/version.json`、`migrations.json` |
| 已解锁列表 | `server.persistentData` → `sinkresearch.unlocks`（逗号分隔） |
| 数据版本 | `sinkresearch.data_version` |
| 网络索引 | `sinkresearch.net.index`（`dim@x_y_z` 用 `;` 分隔） |
| 单网络状态 | `sinkresearch.net.<dim@x_y_z>`（JSON：compute/capacity/stations/ts） |
| 并发占位 | `sinkresearch.jobs.<网络token>`（JSON：`{"x_y_z": 时间戳}`） |
| 断网作废标记 | `sinkresearch.abort.<x_y_z>` |
| AStages 限制 | `config/astages/simple/astages/{item,recipe}.json` |
| AStages 阶段 | `saves/<world>/astages/server/permanent/server.json` |

---

## 5. 下一步（P4 终端 GUI）前置问题

P4 要用 LDLib2（jar 内已确认有 `LDLibKubeJSPlugin`、`LDKJSMenuTypes.openPlayerUI/openBlockUI`），
但**还没有验证 KubeJS 侧注册 UI 的事件名**。开工前必须先确认：

1. 是否有 `UIEvents.playerUI(...)` 之类的注册入口（typings 里只有类成员，没有静态注册签名）
2. `ModularUI` 在 JS 里怎么构造（元素树 vs `UITemplate.of(NBT)`）
3. 客户端 `registerMenuScreens` 是否由插件自动完成

推荐先写一个只会打印反射结果的探针命令，拿到输出再动 UI，否则很可能又是一轮报错。
