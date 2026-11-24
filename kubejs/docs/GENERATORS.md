# 五台发电机（MMCR）

> 适用版本：MC 1.21.1 / NeoForge / KubeJS 2101 / MMCR 0.1.7 / Create 6 / IU 3.4.0.11
> 脚本：
> - `kubejs/startup_scripts/power/generators.js`（机器注册 + 场地机制，改完**重启游戏**）
> - `kubejs/server_scripts/power/generators.js`（结构、配方、控制器，`/reload` 生效）
> - `kubejs/config/sinkpower/generators.json`（**全部数值在这里填**）
> 语言文件：`kubejs/assets/kubejs/lang/zh_cn.json`、`en_us.json`

---

## 1. 一句话分工

| 机器 | id | 结构 | 燃料 | 场地条件 | 功率 |
|---|---|---|---|---|---|
| 水力发电机 | `sinkjourney:hydro_generator` | 3×3×3 铜机壳 | 水 250 mB/轮 | 无 | 96 FE/t |
| 潮汐发电机 | `sinkjourney:tidal_generator` | 3×3×4 黄铜机壳 | 水 600 mB + 16 应力 @32RPM | **必须在海边** | 平潮 128 / 涨潮 384 FE/t |
| 应力发电机 | `sinkjourney:stress_generator` | 3×3×3 工业铁机壳 | 32 应力 @64RPM | 无 | 448 FE/t |
| 地磁发电机 | `sinkjourney:geomagnetic_generator` | 3×3×5 基础机壳 + 磁石核心 | 红石粉 ×1/轮 | **必须在基岩层** | 640 FE/t |
| 燃油发电机 | `sinkjourney:fuel_generator` | 3×3×4 钢机壳 | LPG / 汽油 / 柴油 / 重油 + 压缩空气 | **排气口必须露天** | 256 ~ 1280 FE/t |

「轮」= 40 tick = 2 秒：燃料按轮一次性扣掉，电力按 tick 结算。
表里的数字是 `kubejs/config/sinkpower/generators.json` 的默认值，全部可改。

---

## 2. 场地机制

机制写在 startup 脚本的 `recipeBehavior.beforeStart` 里，每轮开工时判定一次，
所以潮汐会随昼夜自己变功率，玩家挪机器后也不用重启。

### 2.1 潮汐发电机：海边 + 早晚涨潮

- **海边**：控制器所在生物群系必须命中 `seaside_biome_tags`（默认
  `minecraft:is_ocean`、`minecraft:is_beach`）。不满足 → 本轮取消，并给 20 格内玩家
  发一条提示（同一台机器 10 秒内只提醒一次）。
- **潮窗**：`tide_windows` 默认 `[0, 2000]`（日出 06:00-08:00）与 `[11000, 14000]`
  （日落 17:00-20:00）。落在窗内按 `fe_per_tick_tide` 发电，其余时段按 `fe_per_tick_slack`。
- 实现方式：`beforeStart` 里把配方中的能量**输出**需求换成当前功率
  （`RecipeStartContext.setRequirements`），MMCR 的 `ActiveMachineRecipe` 用的就是这份
  运行期需求，所以涨潮那两轮是真的按高功率推电。

### 2.2 地磁发电机：基岩层

- 控制器 `Y > max_y`（默认 -56）→ 本轮取消，提示当前 Y 与要求值。
- 为什么用 Y 而不是"下面必须是基岩"：机器 3×3×5，要挖出 5 格高的空腔，
  Y ≤ -56 已经意味着整台机器贴在基岩顶上（基岩层 -64 ~ -60）；Y 判定更好建也更好调。

### 2.3 燃油发电机：排气露天

- 排气口 = 控制器正上方第 `vent_offset` 格（默认 3，也就是机壳顶上那格空气）。
  该位置 `canSeeSky` 为假（有屋顶、有方块压着）→ 本轮取消并提示。
- 建议把机器贴着露天建，或者塔顶留一格通天的排气井；埋在地下就必须凿到地面。
- 关掉这条机制把 `require_open_sky` 设成 `false`，调高度改 `vent_offset`。
- 判定失败时直接放行（不会因为判定异常把机器锁死）。

> 场地机制改动要**重启游戏**（startup 阶段）；只改数值的话 `/reload` 就够。

---

## 3. 结构

字母约定：`X` 外壳，`C` 控制器，`E` 能量输出仓，`A` 空腔，其余按图。
图按**从上到下**排：`y=2` 在最左，`y=0`（底层）在最右；每组的第二行是中层。

### 3.1 水力发电机（3×3×3，`create:copper_casing`）

```
y=2  XXX        y=1  XFX        y=0  XXX
     XXX             XAE             XXX
     XXX             XCX             XXX
```

- `F` = 北墙中层**机动流体输入仓**（水，`mmcr:kinetic_fluid_input_hatch`；分级输入仓见 `PORT_TIERS.md`，下同）
- `E` = 东墙中层**能量输出仓**
- `C` = 南墙中层控制器

### 3.2 潮汐发电机（3×3×4，`create:brass_casing`）

```
y=3  XXX        y=2  XXX        y=1  XFX        y=0  XXX
     XXX             SAX             XAE             XXX
     XXX             XXX             XCX             XXX
```

- `F` = y=1 层北墙中层机动流体输入仓（水，`mmcr:kinetic_fluid_input_hatch`）
- `S` = y=2 层**西墙中层**应力输入接口 —— 贴 Create 的轴/齿轮箱
- `E` = y=1 层东墙中层能量输出仓，`C` = y=1 层南墙中层控制器

### 3.3 应力发电机（3×3×3，`create:industrial_iron_block`）

```
y=2  XXX        y=1  XSX        y=0  XXX
     XXX             XAE             XXX
     XXX             XCX             XXX
```

- `S` = 北墙中层应力输入接口（最低 64 RPM）

### 3.4 地磁发电机（3×3×5，`mmcr:basic_casing`）

```
y=4  XXX        y=3  XXX        y=2  XXX        y=1  XIX        y=0  XXX
     XXX             XAX             XAE             XMX             XXX
     XXX             XXX             XCX             XXX             XXX
```

- `I` = 北墙中层机动物品输入总线（红石粉，`mmcr:kinetic_item_input_bus`）
- `M` = **y=1 层腔体正中**那块磁石，被机壳完全包住；不放磁石组不起来
- `E` = y=2 层东墙能量输出仓，`C` = y=2 层南墙控制器

### 3.5 燃油发电机（3×3×4，`industrialupgrade:blockresource/steel_block`）

```
y=3  XPX        y=2  XFX        y=1  XXX        y=0  XXX
     XXX             XXX             XAE             XXX
     XXX             XXX             XCX             XXX
```

- `P` = 顶层北墙中层**气压输入接口**，接压缩空气（`pneumaticcraft:air` 需求）
- `F` = 第二层北墙中层流体输入仓，进 LPG / 汽油 / 柴油 / 重油
- `E` = y=1 层东墙中层能量输出仓，`C` = y=1 层南墙中层控制器
- 排气口在控制器正上方第 3 格：结构盖好后，那块位置的上空必须能看到天

> 能量输出仓吞吐：微型 500 FE/t、小型 1000、普通 2000。潮汐涨潮 384、地磁 640 与
> 燃油最高 1280 都建议**小型及以上**；水力用微型仓也不会卡。

---

## 4. 控制器配方

| 控制器 | 配方（3×3，从上到下） | 材料口径 |
|---|---|---|
| `mmcr:hydro_generator_controller` | 铜壳 / 钢板 · `create:water_wheel` · 铜壳 | 机械动力阶段即可 |
| `mmcr:tidal_generator_controller` | 黄铜壳 / 钢板 · `minecraft:sea_lantern` · 黄铜壳 | 海晶灯=海底神殿门票 |
| `mmcr:stress_generator_controller` | 工业铁块 / 银锭 · `create:precision_mechanism` · 工业铁块 | 银=电力时代导体 |
| `mmcr:geomagnetic_generator_controller` | 镍板 / 银板 · `minecraft:lodestone` · 镍板 | 磁石=下界合金级门槛 |
| `mmcr:fuel_generator_controller` | 钢管 / 钢板 · `create:precision_mechanism` · 钢管 | 精密构件=机动时代发动机 |

五台机器的外壳都要自己砌：铜壳、黄铜壳、工业铁块、基础机壳、钢块。
地磁机另外要一块磁石塞进腔内。

---

## 5. 数值文件（`kubejs/config/sinkpower/generators.json`）

```json
{
    "hydro":       { "water_mb": 250, "fe_per_tick": 96 },
    "tidal": {
        "water_mb": 600,
        "stress": 16,
        "min_rpm": 32,
        "fe_per_tick_tide": 384,
        "fe_per_tick_slack": 128,
        "require_seaside": true,
        "seaside_biome_tags": ["minecraft:is_ocean", "minecraft:is_beach"],
        "tide_windows": [[0, 2000], [11000, 14000]]
    },
    "stress":      { "stress": 32, "min_rpm": 64, "fe_per_tick": 448 },
    "geomagnetic": { "redstone": 1, "fe_per_tick": 640, "max_y": -56 },
    "fuel": {
        "air_per_tick": 20,
        "min_pressure": 2.0,
        "require_open_sky": true,
        "vent_offset": 3,
        "fuels": {
            "lpg":      { "fluid": "pneumaticcraft:lpg",                "mb": 400, "fe_per_tick": 1280 },
            "gasoline": { "fluid": "industrialupgrade:iufluidgasoline", "mb": 500, "fe_per_tick": 1024 },
            "diesel":   { "fluid": "industrialupgrade:iufluiddiesel",   "mb": 500, "fe_per_tick": 768 },
            "residue":  { "fluid": "industrialupgrade:iufluidblackoil", "mb": 500, "fe_per_tick": 256 }
        }
    }
}
```

| 字段 | 含义 |
|---|---|
| `water_mb` | 每轮消耗的水（mB），不是每 tick |
| `fe_per_tick` / `*_tide` / `*_slack` | 每 tick 输出多少 FE |
| `stress` / `min_rpm` | 需要的 Create 应力与最低转速 |
| `redstone` | 每轮消耗的红石粉数量 |
| `require_seaside` | 关掉就不检查生物群系（调试用） |
| `seaside_biome_tags` | 算「海边」的生物群系标签，可加模组的海洋群系 |
| `tide_windows` | 涨潮窗口，单位是 `dayTime % 24000`（0=06:00，6000=12:00，12000=18:00） |
| `max_y` | 地磁机允许的最高控制器 Y |
| `fuel.air_per_tick` | 燃油机每 tick 消耗的压缩空气；设 0 就去掉进气需求 |
| `fuel.min_pressure` | 燃油机要求的最低气压（bar） |
| `fuel.require_open_sky` | 关掉就不检查排气口是否露天（调试用） |
| `fuel.vent_offset` | 排气口在控制器上方第几格，默认 3 |
| `fuel.fuels.<名字>` | 每种燃料的 `fluid` / `mb`（每轮消耗）/ `fe_per_tick` |

改了缺字段不要紧：脚本自带一份同值默认，缺哪项补哪项。
想调「单桶水换多少电」，只改 `water_mb` 与 `fe_per_tick` 的比例即可：

```
每桶水 = fe_per_tick × 40 / water_mb × 1000   (FE)
```

燃油按同一口径（每桶 1000 mB）：LPG 128000 / 汽油 81920 / 柴油 61440 / 重油 20480 FE。
重油是给「渣油没处去」准备的兜底，效率最低；LPG 最好，但它在四层精馏里产量最少。

参照系：本包电力机器的耗电是 32 FE/t（Mk.I 光刻）到 2048 FE/t（Mk.IV 光刻），
单晶反应釜 256 FE/t、磁控直拉炉 512 FE/t。
