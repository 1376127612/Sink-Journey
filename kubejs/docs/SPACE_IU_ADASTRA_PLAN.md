# IU 太空 × Ad Astra 整合：已落地版本

> 更新：2026-11-26。本文替换掉上一版「35 天体全量合并」的方案稿——方向定了：
> **Ad Astra 独占载人与环境，IU 只保留无人探测/远征/殖民地**，IU 那 34 个太空维度不再可达。
>
> 硬约束（不要违背）：
> 1. **矿物生成不动**。后期矿（难熔金属/稀土）已经由 `config/paxi/datapacks/sj-oregen` 投到 Ad Astra 的四颗行星上，
>    见 `ORE_GENERATION.md` §4.4；Ad Astra 的群系、维度、`placed_feature` 一律不覆盖。
> 2. **`Ad Astra: More Structures` 必须正常生成**。它的 8 个结构全部挂在 `ad_astra:*` 群系/标签上，
>    靠 Ad Astra 原生维度生成；只要不覆盖 Ad Astra 的维度与群系，它就不受影响（校验结果见 §4）。

---

## 0. 一句话

载人太空只有一条路：Ad Astra 的发射台 + 火箭。IU 的星门被四层封死，IU 剩下的只有
「研究天体 → 造探测器/卫星/漫游车/火箭 → 远征拿资源 → 建殖民地」这条无人工业线。

---

## 1. 为什么必须动 Java 侧

| 想做的事 | 配置/数据包能做到吗 | 原因 |
| --- | --- | --- |
| 阻止玩家传送进 IU 维度 | **不能** | 载人入口是手持星门 `industrialupgrade:space/planetary_translocator`，右键开界面 → `PacketPlanetaryTeleportRequest` → `SpaceTeleportController.requestTeleport`。IU 没有对应 config，也没有可取消的事件。删配方只能拦住「合成」，创造模式/老存档/别的途径拿到的物品照样能用。 |
| 让 IU 的环境判定别管 Ad Astra 的维度 | **不能** | `SpaceRuntimeEvents` 用 `level.dimension().location().getPath()` 查天体表——**只看 path，命名空间已经丢了**。所以 `ad_astra:moon` 会被当成 IU 的月球。要拿到命名空间只能在方法入口拦。拦在 `SpaceBodyProfiles.byDimensionPath` 不行，那一层已经只有 `"moon"`，拦下去会连 IU 自己的维度一起废掉。 |

结论：这两件事写进了包里已有的 `Sink-Journey-Core`（它本来就在 mixin IU 的污染视觉），
没有去改 IU 本体，也没有在 jar 里打补丁。

---

## 2. 落地的改动

### 2.1 `Sink-Journey-Core`（Java 侧，已构建并装入 `mods/`）

| 文件 | 作用 |
| --- | --- |
| `mixin/IuSpaceTravelBlockMixin.java` | `SpaceTeleportController.requestTeleport` 头部取消（连会话都不建、能量不扣）；`finishOutbound` 头部取消 + 清会话（兜住「加模组前已在途」的存档，玩家留在出发维度，不会掉进虚空）。**返航不拦**，留一条回家的路。 |
| `mixin/IuSpaceTranslocatorItemMixin.java` | 星门右键不再开星际跃迁界面；例外：玩家已经在 `industrialupgrade:*` 维度里时放行，界面还能点返航。 |
| `mixin/IuSpaceEnvironmentScopeMixin.java` | `SpaceRuntimeEvents.onLivingTick` / `onLevelTick` 只对 `industrialupgrade` 命名空间生效。这一条同时修掉三个既有 bug：Ad Astra 月球的双掉氧、金星命中 IU `pressure=true` 的 1000 点秒杀、Ad Astra 星球的白天被 IU 按天体表改写。 |
| `mixin/IuSpaceDimensionRegistrationMixin.java` + `mixin/FileToIdConverterPrefixAccessor.java` | **让 34 个太空维度压根不注册**：在 `RegistryDataLoader.loadContentsFromManager` 取文件列表那一步，把 `dimension` 注册表里 `industrialupgrade:*` 的文件摘掉（`earth` 例外）。原版会给注册表里每个 LevelStem 各建一个 `ServerLevel`，不注册就没有这 34 份常驻开销，`/execute in industrialupgrade:mars` 也会直接报维度不存在。 |
| `SJCore.java` | 新增 `onSpaceTravelBlocked()`（统一回绝提示 + 每个天体一条日志）与 `onSpaceDimensionsDropped()`（记录本次少注册了几个维度）。 |
| `assets/sinkjourneycore/lang/{zh_cn,en_us}.json` | 回绝文案。 |

四个注入都写了 `require = 1`：IU 升级后如果方法改名、或者原版注册表加载路径变了，会在类加载时直接报错，而不是悄悄放行。

### 2.2 KubeJS（配方 / JEI）

| 文件 | 改动 |
| --- | --- |
| `server_scripts/bans/iu_space.js` | **新增**删星门配方（id `industrialupgrade:industrialupgrade_2508` + 按产物 `industrialupgrade:space/planetary_translocator` 兜一遍）。早先误封的 `basemachine3/teleporter_iu`（同位面成对传送机器，`BlockEntityTeleporter` 只换坐标不换维度）已**解禁**，复制机的配方链随之恢复。 |
| `client_scripts/bans/iu_space_jei.js` | JEI/EMI 里隐藏星门；`teleporter_iu` 已从隐藏列表移除。 |

### 2.3 AStages

`config/astages/simple/astages/item.json` 里 `era.no_iu_space` 的锁从 `teleporter_iu` 换成星门
`space/planetary_translocator`（stage 永不授予）。这一层只影响「已有的星门也被锁」，是 mixin 之外的第三道。

### 2.4 没动的部分（有意为之）

- `config/ad_astra.jsonc`：**一个开关都不动**。Ad Astra 的氧气/温度/重力照常，宇航服体系继续有效。
- Ad Astra 的维度、群系、星球表、`placed_feature`：不动。`sj-oregen` 只往 Ad Astra 群系里加 IU 的矿（`neoforge:add_features`），不覆盖原文件。
- `Ad Astra: More Structures` 的 8 个结构：不动，见 §4。
- IU 的四台航天器装配机、发射台、空间研究台、全息投影、太空模块、殖民地：不动。
- IU 的 34 个太空维度：**不再注册**（见 §2.1 的 `IuSpaceDimensionRegistrationMixin`），`industrialupgrade:earth` 例外。
  `sj-oregen` 里那份「把维度覆盖成虚空」的数据包（`gen_oregen.py: void_iu_space()`）保留成备份：
  注册层拦掉之后它们连解析都不会发生，留着只在 mixin 万一失效时兜底。

---

## 3. 玩家看到的分工

| 需求 | 走哪条线 | 说明 |
| --- | --- | --- |
| 上月球/火星/金星/水星/霜原 | Ad Astra 发射台 + 对应阶火箭 | 环境用 Ad Astra 的氧气/温度/重力，宇航服、氧气温室重新变成必需品 |
| 后期矿（钨钼钽铌、稀土、钕、钕钆钇、锆铪…） | 在 Ad Astra 行星上挖 | `sj-oregen` 的既有投矿位置，未改动 |
| 星球遗迹/地牢 | Ad Astra 原生 + More Structures 新增 8 种 | §4 |
| IU 的天体研究、探测器/卫星/漫游车/火箭远征、殖民地 | IU 空间研究台 + 发射台 | 纯模拟，产出 IU 太空矿；**玩家不再需要、也无法亲自落地** |
| 星门 / 行星跃迁 | 已封禁 | 唯一载人入口 |

任务侧**不用改**：`ORE_GENERATION.md` §4.4 与 §14.2 已经把关卡矿（月球钛/钒/锆、水星钨钼钽铌、
火星钕钆钇铪、冰星锂铍）全部投在 **Ad Astra 的行星**上，任务「触及星辰」也是按 Ad Astra 行星写的；
IU 侧的「第一小步」「外星科技」仍然是探测器/火箭/殖民地那条无人线，两边都不受这次封禁影响。

---

## 4. `Ad Astra: More Structures` 生成校验

8 个结构逐个核对（结构定义 → 结构集 → 群系引用是否真实存在）：

| 结构 | 群系引用 | 结构集 |
| --- | --- | --- |
| `moon_tower_dungeon` | `ad_astra:lunar_wastelands` | ✓ |
| `mars_tower_dungeon` | `#ad_astra:has_structure/mars_temple`（标签存在，含 martian_wastelands / martian_canyon_creek） | ✓ |
| `mercury_arena_dungeon` | `ad_astra:mercury_deltas` | ✓ |
| `venus_tree_dungeon` | `ad_astra:venus_wastelands` | ✓ |
| `glacio_tower_dungeon` | `glacio_snowy_barrens` + `glacio_ice_peaks` | ✓ |
| `abandoned_base` | 9 个行星群系 | ✓ |
| `rocket_launch_t1` | 9 个行星群系 | ✓ |
| `mystical_tree` | 8 个行星群系 | ✓ |

结论：8/8 的群系引用都能解析，8/8 都登记在 `structure_set` 里。生成链路完全依赖 Ad Astra 原生维度，
本次改动没有触碰，保持原样即可。

---

## 5. 验收清单

- [ ] 服务端启动无 mixin 报错（`require = 1` 若签名不匹配会直接崩，崩了说明 IU 版本变了）
- [ ] 合成表里搜不到星门；JEI 里也看不到
- [ ] 创造模式拿一个星门右键：只出提示，不开界面
- [ ] 老存档里正处在跃迁途中的玩家：不会被送进虚空，留在出发维度
- [ ] `ad_astra:moon` 穿 Ad Astra 宇航服不再掉氧；不穿则按 Ad Astra 的规则掉氧
- [ ] `ad_astra:venus` 不再被 IU 的 1000 点气压伤害秒杀
- [ ] Ad Astra 星球白天正常循环（不再被 IU 按月长改写）
- [ ] IU 空间研究台 / 探测器 / 卫星 / 漫游车 / 火箭 / 殖民地全部照常
- [ ] `/locate structure ad_astra_more_structures:moon_tower_dungeon` 在 Ad Astra 月球能定位到
- [ ] 未生成区块里 Ad Astra 行星矿仍然正常（`sj-oregen` 未改动）

---

## 6. 遗留决策

1. IU 的星际界面里仍有 35 个天体（只能研究、不能去）。是否要在任务里写一段「只能探测不能去」的说明，
   或者干脆做成图鉴式的收集目标。
2. 要不要给 Ad Astra 补数据驱动的额外星球（比如把水星/塞德娜这类挪过来）。当前不做，
   因为 IU 的维度不成熟、而且会牵动矿物生成。
3. `industrialupgrade:earth` 维度现在没人能进（星门封了），要不要也一起摘掉。留着是因为
   包里的回程逻辑对它有特判，摘之前得先确认没有别的路径依赖它。
