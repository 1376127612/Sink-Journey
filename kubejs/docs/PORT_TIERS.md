# 分级输入仓（时代仓）

> 适用版本：MC 1.21.1 / NeoForge / MMCR 0.1.7 / Sink Journey Core 0.1.0+
> 代码：`Sink-Journey-Core/src/main/java/com/vbiafe/sjcore/port/SinkPorts.java`（改容量 / 加时代）
> 配方：`kubejs/server_scripts/ports/era_hatches.js`（`/reload` 生效）
> 结构：`kubejs/server_scripts/power/generators.js` 等（**改结构要重启**，见 §4 末尾）

> **MMCR 0.1.7 的一个坑**：同一次游戏会话里，同一个结构 id 不能注册第二次。
> 会话中途保存结构脚本会触发一次热重载，MMCR 直接抛
> `Dynamic structure already registered: <机器 id>`，并且**中断这个处理器里后面所有结构的注册**。
> 所以结构脚本一律按「每台机器各自 try/catch」写（化学反应釜就是样板），
> 撞到了只记一条警告；真要换结构形状，重启游戏。

---

## 1. 为什么要这一层

MMCR 自带的物品输入总线只有 7 档尺寸（微型 1 格 → 超级 32 格），而且机器的端口要求只支持
**「至少 N 档」**，没有「只能是第 N 档」的写法。结果是：微型仓太小不好用，但把大仓塞进
前期机器又没人管。

所以这里做两件事：

1. **按整合包时代各注册一套仓**（物品输入/输出总线 + 流体输入/输出仓三种共四类），
   id、名字、配方按时代区分，容量沿用 MMCR 的档位。仓本体是真正的 MMCR 端口，
   GUI、自动输入输出、能力接口、JEI 结构预览都和原版仓一致——只是多了个时代身份。
2. **结构图案里直接写方块 id**，把端口位锁成某一种仓。MMCR 的 `.set()` 接受方块 id 字符串，
   所以锁定是零成本的：

```js
.set('I', 'mmcr:item_input_bus_kinetic')   // 这个位置只认机动物品输入总线
```

放别的仓（原版普通仓、其它时代的仓）都组不起来，控制器会直接报结构不匹配。

---

## 2. 时代与容量

每个时代有四个方块，写成 `mmcr:<仓名>_<时代 id>`：

| 仓 | 仓名 |
|---|---|
| 物品输入总线 | `item_input_bus_<时代>` |
| 物品输出总线 | `item_output_bus_<时代>` |
| 流体输入仓 | `fluid_input_hatch_<时代>` |
| 流体输出仓 | `fluid_output_hatch_<时代>` |

| 时代 id | 中文 | 物品槽 | 流体容量 |
|---|---|---|---|
| `primitive` | 原始 | 4 | 4,000 mB |
| `root` | 根源 | 6 | 8,000 mB |
| `ember` | 余烬 | 9 | 16,000 mB |
| `kinetic` | 机动 | 9 | 16,000 mB |
| `steam` | 蒸汽 | 12 | 32,000 mB |
| `pneumatic` | 气动 | 16 | 64,000 mB |
| `end` | 末地 | 32 | 128,000 mB |
| `radiance` | 星辉 | 32 | 256,000 mB |

> **id 命名不是随便起的**：MMCR 靠 id 前缀判断「右键该开哪个界面」和「查哪套能力」
> （`item_input_bus` / `item_output_bus` / `fluid_input_hatch` / `fluid_output_hatch` / `energy_*_hatch` …）。
> 写成 `primitive_item_input_bus` 这种时代在前面的形式，点右键会没反应、界面也没标题。

原始档就是给「微型 1 格太小」这件事准备的：4 格起步，前期一台机器能塞一组料。

### IU 机器四档

蒸汽之后接的不是时代，而是 **IU 自己的四档机器等级**（`basemachine` → `basemachine1/adv` →
`basemachine2/imp` → `basemachine3/per`，中文顺序是 基础 → 改良 → 高级 → 完美）。
电力时代的机器本来就按这四档出，所以仓也照这四档另注册一套，id 后缀是档名，不带 `iu`：

| 档位 id | 中文 | 物品槽 | 流体容量 |
|---|---|---|---|
| `basic` | 基础 | 12 | 32,000 mB |
| `improved` | 改良 | 16 | 64,000 mB |
| `advanced` | 高级 | 32 | 128,000 mB |
| `perfect` | 完美 | 32 | 256,000 mB |

写法与时代仓完全一样：`mmcr:item_input_bus_basic`、`mmcr:fluid_output_hatch_perfect` 等。
这批容量接在蒸汽（12 / 32,000）之后继续往上走，所以它和时代仓是同一条阶梯的两段：
**原始 → 机动 → 蒸汽 → IU 基础 → IU 改良 → IU 高级 → IU 完美**。

容量写在 `SinkPorts.ERAS` / `SinkPorts.GRADES` 里，改 `ItemBusSize` / `FluidHatchSize` 后**重启游戏**并重编 core mod。
MMCR 的档位只有固定几种（物品 1/4/6/9/12/16/32 格，流体 1k/4k/8k/16k/32k/64k/128k/256k），
想要中间值就得改 MMCR 本体，不建议。

---

## 3. 配方

四类仓、八档都是同一个形状：普通仓 + 8 块本时代板。

```
P P P        P = 该时代的板
P H P        H = 同尺寸的原版 MMCR 输入仓
P P P
```

底料就是「同尺寸的原版仓」，后缀跟着档位走（normal 档没有后缀）：

| 时代 | 板 | 档位后缀 |
|---|---|---|
| 原始 | `c:plates/copper` | `_small` |
| 根源 | `c:plates/iron` | 无 |
| 余烬 | `industrialupgrade:itemplates/bronze_plate` | `_reinforced` |
| 机动 | `create:brass_sheet` | `_reinforced` |
| 蒸汽 | `industrialupgrade:itemplates/steel_plate` | `_big` |
| 气动 | `c:plates/silver` | `_huge` |
| 末地 | `c:plates/obsidian` | `_ludicrous` |
| 星辉 | `c:plates/gold` | `_ludicrous`（流体是 `_vacuum`） |

IU 机器四档同理，底料换成同尺寸的原版仓，板按 IU 的金属阶梯：

| 档位 | 板 | 档位后缀 |
|---|---|---|
| 基础 | `c:plates/steel` | `_big` |
| 改良 | `industrialupgrade:itemplates/nickel_plate` | `_huge` |
| 高级 | `c:plates/titanium` | `_ludicrous` |
| 完美 | `c:plates/niobiumtitanium` | `_ludicrous`（流体是 `_vacuum`） |

表在 `kubejs/server_scripts/ports/era_hatches.js` 顶部的 `ERAS` / `GRADES`，改一行就换材料。

---

## 4. 给机器上锁

把结构脚本里对应端口的 `api.anyOf...()` 换成方块 id 字符串：

```js
// 之前：任何物品输入总线都能用
.set('I', api.anyOfItemInput())

// 之后：只认机动物品输入总线
.set('I', 'mmcr:kinetic_item_input_bus')
```

### 已经锁好的机器

| 机器 | 时代 | 改在哪 |
|---|---|---|
| `hydro_generator` / `tidal_generator`（进水） | 机动 | `power/generators.js` |
| `geomagnetic_generator`（红石进料） | 机动 | `power/generators.js` |
| `research_station`（研究站，黄铜壳） | 机动 | `research_core/station_structure.js` |
| `mechanical_lab`（机械研究台，黄铜壳） | 机动 | `research/structures.js` |
| `trace_nexus`（溯洄研究枢纽） | 根源 | `research/structures.js` |
| `trace_compute`（演算核心，物品 + 水） | 根源 | `research/structures.js` |
| `cz_reactor` / `zone_refiner` / `mcz_puller` | 蒸汽 | `silicon/*.js` |
| `wafer_dicer` / `litho_mk1..4` | 蒸汽 | `silicon/litho_structure.js` |
| `chemical_reactor_kinetic`（机动） | 机动 | `industrial/chemical_reactor.js` |
| `chemical_reactor_steam`（蒸汽） | 蒸汽 | `industrial/chemical_reactor.js` |
| `chemical_reactor_basic`（IU 基础） | 基础 | `industrial/chemical_reactor.js` |
| `chemical_reactor_improved`（IU 改良） | 改良 | `industrial/chemical_reactor.js` |
| `chemical_reactor_advanced`（IU 高级） | 高级 | `industrial/chemical_reactor.js` |
| `chemical_reactor_perfect`（IU 完美） | 完美 | `industrial/chemical_reactor.js` |

**注意**：世界里已经搭好的机器要换成本时代的仓才会重新组装。

化学反应釜那六台是**全锁**的样板：物品 / 流体仓锁档位，能量仓锁 MMCR 原生档位
（`energy_input_hatch_small` → `energy_input_hatch` → `_reinforced` → `_big` → `_huge` → `_ludicrous`），
所以一台机器的输入输出仓、能量仓一起构成它的等级。六档的对照表与并行关系见
`docs/CHEMICAL_REACTOR.md`。

其它机器（发电机、光刻、研究站…）的能量仓仍是原版行为（`api.anyOfEnergyInput/Output()`）：
要分级就照化学反应釜的写法，把 `E` 位换成对应的 `mmcr:energy_input_hatch_*`。
原始 / 根源 / 余烬 / 气动 / 末地 / 星辉这几个时代仓此刻仍没有 MMCR 机器用到，留待对应时代的机器落地。

新写结构脚本时照这个形状包一层，别让一台机器把整批注册带死：

```js
for (const machine of LIST) {
    try {
        event.createStructure('sinkjourney:' + machine).pattern(...)...build()
    } catch (err) {
        console.warn('[结构] ' + machine + ' 本次没有重新注册（同一会话已注册过，重启生效）：' + err)
    }
}
```

---

## 5. 加新东西

- **加时代**：在 `SinkPorts.ERAS` 里加一行（id / 中英文名 / 物品档 / 流体档），
  重编 core mod 并重启；同时在 `era_hatches.js` 的 `ERAS` 里补一行配方。
  中文名在 `Sink-Journey-Core/src/main/resources/assets/mmcr/lang/zh_cn.json`。
- **加 IU 机器档**：同上，但改的是 `SinkPorts.GRADES` 与 `era_hatches.js` 的 `GRADES`，
  并且要补 core mod 的方块标签（`data/mmcr/tags/block/` 下 8 个文件）。
- **加仓种类**（比如能量输入仓）：在 `SinkPorts.registerAll()` 里照 `registerPort(...)` 再来一行，
  kind 用 `PortKinds.EnergyHatchKind`，方块实体用 `EnergyInputHatchBlockEntity::new`，
  **id 仍然要以 `energy_input_hatch` 这类原版仓名开头**，否则界面打不开。
- **不要走 `PortKinds.register()`**：MMCR 在静态初始化时就 `PortDefinitionRegistry.freeze()` 了，
  再走官方注册会抛「Port definitions are frozen」。`SinkPorts` 的做法是：
  - 方块 / 方块实体 / 物品：直接往 `ModBlocks.BLOCKS` / `ModBlockEntities.BES` / `ModItems.ITEMS` 补条目；
  - 端口种类 / 端口定义：反射塞进 `PortKinds` 与 `PortDefinitionRegistry` 的内部表
    （必须塞，否则端口 GUI 的网络同步按 id 查不到种类，NeoForge 能力注册也会漏掉这批仓）。
  
  这两步**必须在 MMCR 构造完成之后**执行，所以 `neoforge.mods.toml` 里对 `mmcr`
  声明了 `ordering="AFTER"`。
- **端口标签**：新增仓会自动出现在 `mmcr:ports` / `mmcr:machines` / `mmcr:item_ports`
  / `mmcr:item_input_ports`（流体同理）这些标签里，标签文件在
  `Sink-Journey-Core/src/main/resources/data/mmcr/tags/block/`，加仓种类时记得补一组。
