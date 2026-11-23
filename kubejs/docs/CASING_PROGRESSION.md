# 机壳套娃链（Create → IU 蒸汽机）

> 适用版本：MC 1.21.1 / NeoForge / Create 6 / IU 3.4.0.11
> 脚本：`kubejs/server_scripts/create/casing_progression.js`（`/reload` 生效）
> 方块定义：`kubejs/startup_scripts/custom_blocks.js`（`kubejs:steam_casing`，改完要重启）
> 前置：`kubejs/server_scripts/create/brass_heart.js`（黄铜之心）

---

## 1. 一条链

```
余烬机械核心 + 安山合金
        │ 机械手
        ▼
    安山机壳 ──+ 铜锭 ──机械手──▶ 铜机壳 ──+ 黄铜锭 ──机械手──▶ 黄铜机壳
                                                                    │
                                                          + 黑曜石板 ──机械手──▶ 列车机壳
                                                                                    │
                       铁板 ×8 + 青铜板 ×2 + 列车机壳 ×1 ──工作台──▶ 蒸汽机壳
                                                                                    │
                                        蒸汽机壳 ×8 + 黄铜之心 ×1 ──工作台──▶ 蒸汽机机身
```

| 级 | 产物 | 配方 id | 方法 | 底料 | 施加 / 配料 |
|---|---|---|---|---|---|
| 1 | `create:andesite_casing` 安山机壳 | `kubejs:andesite_casing_from_mechanical_core` | 机械手 | `embers:mechanical_core` 余烬机械核心 | `create:andesite_alloy` 安山合金 |
| 2 | `create:copper_casing` 铜机壳 | `kubejs:copper_casing_from_andesite_casing` | 机械手 | 安山机壳 | `#c:ingots/copper` 铜锭 |
| 3 | `create:brass_casing` 黄铜机壳 | `kubejs:brass_casing_from_copper_casing` | 机械手 | 铜机壳 | `#c:ingots/brass` 黄铜锭 |
| 4 | `create:railway_casing` 列车机壳 | `kubejs:railway_casing_from_brass_casing` | 机械手 | 黄铜机壳 | `#c:plates/obsidian` 黑曜石板 |
| 5 | `kubejs:steam_casing` 蒸汽机壳 | `kubejs:crafting/steam_casing` | 工作台 | 列车机壳 ×1 | 铁板 ×8 + 青铜板 ×2 |
| 6 | `industrialupgrade:blockresource/steam_machine` 蒸汽机机身 | `kubejs:steam_machine_from_steam_casing` | 工作台 | 黄铜之心 ×1（不消耗） | 蒸汽机壳 ×8 |

第 5 级的形状：

```
A A A          A = create:iron_sheet（铁板）×8
B C B          B = industrialupgrade:itemplates/bronze_plate（青铜板）×2
A A A          C = create:railway_casing（列车机壳）×1
```

第 6 级的形状：

```
P P P          P = kubejs:steam_casing（蒸汽机壳）×8
P N P          N = kubejs:brass_heart（黄铜之心）×1，keepIngredient，不消耗
P P P
```

---

## 2. 前四级为什么只能是机械手

原版 Create 的机壳是 `create:item_application`（右键把材料施加到方块上）。
这种配方类型本身就注册了「玩家右键触发」的行为，只要用它，机壳就能手搓，
套娃链等于不存在。

所以这里全部改用 `create:deploying`（DeployerApplicationRecipe）：
它只在机械手处理置物台 / 传送带上的物品时被检索，玩家右键不触发。

脚本会先把原版的施加配方**按 id 逐个删掉**（`*_from_log` / `*_from_wood` 各三对，
加列车机壳），再用 `event.remove({ output: ... })` 兜底清掉其它模组可能加的同产物配方，
最后才写入新的 `deploying` 配方。改这条链时，这三步的顺序不要动。

实际玩法：把底料（如铜机壳）放上置物台或传送带，机械手手持下一级材料（如黄铜锭），
加工出下一级机壳。

---

## 3. 机械手死锁：第一个黄铜机壳怎么来

链条自己咬自己：

```
黄铜机壳 ← 机械手（要黄铜机壳）← 黄铜机壳
```

这个死锁是**故意保留**的，出口不在 Create 里，而在 `create_hand_made` 的指杆
（`create_hand_made:pointer`）：用指杆手搓出**第一个**黄铜机壳，做出第一台机械手，
之后整条链才能自动化。任务「手搓仙人」（`4717D5F0DFBD7A6C`）写的就是这件事。

所以 `create_hand_made:*` 那一套手搓工具**不能删**，删了整条机壳链会断在黄铜。

---

## 4. 蒸汽机壳与蒸汽机

这两级是这条链唯一的手工拼装，目的是把 IU 的蒸汽机绑在 Create 机壳链的末端：

- **蒸汽机壳**（`kubejs:steam_casing`）：自定义方块，铁壳材质，8 铁板 + 2 青铜板 + 1 列车机壳。
  它同时是任务「蒸汽时代」（`0706F92EF2C236B8`）要交的 8 个物品。
- **蒸汽机机身**（`industrialupgrade:blockresource/steam_machine`）：原来吃 8 铝青铜板，
  现在整条接管成 8 蒸汽机壳 + 黄铜之心，黄铜之心不消耗。

`industrialupgrade:blockresource/steam_machine` 是 IU 蒸汽机器的通用机身：
蒸汽锅炉、蒸汽粉碎机、蒸汽挤压机、蒸汽流体加热器等都以它为基础，
所以这一步实际上决定了整个蒸汽时代的门槛。

> 历史：蒸汽机壳的配方原来写在 `kubejs/server_scripts/kubejs_editor/recipes.js`
> （旧 KubeJS Editor 生成的文件，id 是 `kubejs_editor:recipe_1`）。那个文件被删掉后，
> `kubejs:steam_casing` 有一段时间**没有任何配方**，蒸汽机做不出来。
> 现在配方回到本脚本，id 改成 `kubejs:crafting/steam_casing`，以本脚本为唯一来源。

---

## 5. 谁在吃这些机壳

抬机壳门槛等于同时抬了下面这些机器的门槛，改链条前先过一眼：

| 机壳 | 用途 |
|---|---|
| 安山机壳 | 硅片线掩模 / 精炼区控制器（`silicon/zone_refiner.js`）、研究站部分结构件 |
| 铜机壳 | 水力发电机 3×3×3 外壳、铜锅炉、研究阵列「溯源计算」模块、研究站升级槽 |
| 黄铜机壳 | 机械手本体、动力合成器、潮汐发电机 3×3×4 外壳、研究站 / 机械实验室外壳 |
| 列车机壳 | 只用于蒸汽机壳 |
| 蒸汽机壳 | 只用于蒸汽机机身（+ 任务交付 8 个） |
| 蒸汽机机身 | IU 全部蒸汽机器 |

---

## 6. 维护规则

1. **这些 id 归脚本所有**，Studio / 其它工具写同一个 id 都会失效：
   `create:crafting/kinetics/deployer`、
   `kubejs:andesite_casing_from_mechanical_core`、
   `kubejs:copper_casing_from_andesite_casing`、
   `kubejs:brass_casing_from_copper_casing`、
   `kubejs:railway_casing_from_brass_casing`、
   `kubejs:crafting/steam_casing`、
   `kubejs:steam_machine_from_steam_casing`。
   原因同「简陋机器框架」那次：`ServerEvents.recipes` 在数据包之后执行，
   `remove + add` 同 id 会把 Studio 的 `generateData` 版本盖掉。
2. 想改某一级，就在本脚本里改，别去 Studio 改同一条。
3. 加新的一级时，记得同步：
   - 本脚本的链首注释；
   - 本文件第 1 节的表格；
   - 若产物被任务引用，`kubejs/tools/gen_iu_quests.py` 里的 id。
