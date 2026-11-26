# 质棍

IU 的棍只覆盖它自己那批金属；铁、铜、锡、铅、金、钢、青铜有锭没棍，这里补齐，
并把 Ad Astra 的 `iron_rod` / `steel_rod` 换成它们。

| 物品 | 锭标签 | 贴图取色 |
| --- | --- | --- |
| `kubejs:iron_rod` 铁质棍 | `c:ingots/iron` | 原版 `iron_ingot` |
| `kubejs:copper_rod` 铜质棍 | `c:ingots/copper` | 原版 `copper_ingot` |
| `kubejs:tin_rod` 锡质棍 | `c:ingots/tin` | IU `item/tin` |
| `kubejs:lead_rod` 铅质棍 | `c:ingots/lead` | IU `item/lead` |
| `kubejs:gold_rod` 金质棍 | `c:ingots/gold` | 原版 `gold_ingot` |
| `kubejs:steel_rod` 钢质棍 | `c:ingots/steel` | IU `item/steel` |
| `kubejs:bronze_rod` 青铜棍 | `c:ingots/bronze` | IU `item/bronze` |

- 工作台：2 锭 → 1 棍（`kubejs:metallurgy/<metal>_rod`）；七根棍进 `c:rods/<metal>`。
- 切割机：1 锭 → 2 棍（七条）。
- 挤出机：`extruding` 池整池清空，棍只留切割机。
- Ad Astra 铁棍 / 钢棍：原配方删除，全包配方里的原料用 `replaceInput` 换成质棍，JEI 里隐藏。

## 文件

| 文件 | 作用 |
| --- | --- |
| `kubejs/startup_scripts/metallurgy/metal_rods.js` | 物品注册 |
| `kubejs/server_scripts/metallurgy/metal_rods.js` | 工作台配方 / 标签 / 替换 |
| `kubejs/client_scripts/metallurgy/jei_hide_rods.js` | JEI 隐藏 Ad Astra 两根棍 |
| `kubejs/sjcore/rods.json` | 机器配方补丁（切割机 add、挤出机 clear） |
| `kubejs/tools/gen_metal_rods.py` | 贴图生成 |

## 生效

startup 改动要重启；工作台与标签 `/reload`；机器配方 `/sjcore iu reload`。
贴图重生成：`python kubejs/tools/gen_metal_rods.py`。
