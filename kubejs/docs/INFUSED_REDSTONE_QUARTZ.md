# 灌注红石与灌注赛特斯石英：基础段的新门

> 日期：2026-11-27（第二轮可玩性改动）
> 物品：`kubejs:infused_redstone`「灌注红石」、`kubejs:infused_certus_quartz`「灌注赛特斯石英」
> 脚本：`kubejs/startup_scripts/mekanism/infused_items.js`（注册）、
> `kubejs/server_scripts/mekanism/infused_gates.js`（两件料的配方、基础电路）、
> `kubejs/server_scripts/mekanism/mek_dj2.js`（四台基础机器）、
> `kubejs/server_scripts/ae2/ae2_core.js`（AE 五处）
> 任务书：「外星科技」`514fd6a3f6ee847d.snbt`，45 格（新增两格）
> 贴图：以原图打底改色的 16×16，生成器 `kubejs/tools/gen_infused_textures.py`
> ——`infused_redstone.png` 用原版红石（`minecraft:item/redstone`）的粒堆，色板不动，正中 2×2 换成琥珀当芯；
> `infused_certus_quartz.png` 用 AE2 的赛特斯石英（`ae2:item/certus_quartz_crystal`）那丛晶体，
> 最底一行与左下、右下两丛按亮度换成琥珀，上面那根长晶柱仍是青白（沁油的那几丛）。
> 模型 `assets/kubejs/models/item/infused_redstone.json`、`infused_certus_quartz.json` 的 layer0 指向 `kubejs:item/<同名>`

---

## 1. 为什么换这道门

锇在这个包来得很晚（第二段才出现），但通用机械的第一段原本要靠它：
`基础电路 = 锇锭 + 20 mB 红石`，而富集仓、通电冶炼炉、粉碎机、锇压缩机全都要基础电路。
结果「基础五台」和锇捆在一起，锇不来，整章动不了。

现在第一段改吃**灌注红石**，锇退到第二段（锇压缩机 → 锇荧锭）。

```
灌注红石（工作台）
  → 基础电路（灌注红石 + 20 mB 红石，冶金灌注机）
  → 冶金灌注机 / 富集仓 / 通电冶炼炉 / 粉碎机
  → 第二段：锇压缩机 → 锇荧锭 → EIO 合金炉 → 锇莹黑合金（照旧）
```

## 2. 两件料

### 2.1 灌注红石（工作台）

```
8× 红石粉 围一圈  +  1× 充能红石（industrialupgrade:charged_redstone）居中
  →  8× kubejs:infused_redstone
```

充能红石走 IU 的**晶体充能器**（`industrialupgrade:basemachine3/crystal_charge`，
电力时代那一章已经有一格教它）：红石丢进去，出来就是充能红石；蒸汽档是同一台机器的蒸汽版。

**开张那一块打末影龙掉**：`EntityEvents.death('minecraft:ender_dragon')` 在龙尸位置掉 1 块
（见 `infused_gates.js`），玩家拿它先把晶体充能器与灌注红石这条链点起来。

> IU 自己的「水里」配方（4 撮红石粉 + 1 撮钋粉 + 1 块琥珀金锭丢进水里）已经关掉：
> 它写在 `IUEventHandler.checkAndTransform` 里，是**事件处理器硬编码**，不是数据包配方，
> KubeJS 的 `event.remove` 碰不到，所以由本包的 `sinkjourneycore` 用 mixin
> `IuChargedRedstoneWaterMixin` 在方法头直接返回 `null`（调用方只在非 null 时才生成实体）。
> 日志里会出现一次 `[SJCore] IU 的「水里做充能红石」已禁用`。

### 2.2 灌注赛特斯石英（Create 搅拌盆）

```
8× 赛特斯石英（ae2:certus_quartz_crystal）  +  1000 mB 矮人燃油（embers:dwarven_oil）
  →  8× kubejs:infused_certus_quartz
```

- 矮人燃油从余烬的搅拌机（Embers Mixer）来，也可用 `embers:dwarven_oil_bucket` 搬运；
- DJ2 在 1.12 用的是「液体当合成材料」的工作台配方（8 颗石英 + 1000 mB 油 → 8 颗），
  1.21 的 KubeJS / CraftTweaker 都没有这种写法，于是换成 Create 搅拌盆，**比例照原样**。

## 3. 改了哪些配方

| 配方 | 原来 | 现在 |
| --- | --- | --- |
| 基础电路 `mekanism:control_circuit/basic` | 锇锭 + 20 mB 红石 | **灌注红石** + 20 mB 红石 |
| 冶金灌注机 | 钢板 ×5 + 熔炉 + 机壳 | 钢板 ×4 + **灌注红石 ×2** + 熔炉 ×2 + 机壳 |
| 富集仓 | 灌注红石四角（原 DJ2：红合金四角） | 四角换 **灌注红石**，两侧仍是灌注合金 |
| 通电冶炼炉 | 红合金四角 | 四角换 **灌注红石** |
| 粉碎机 | 红合金四角 | 四角换 **灌注红石** |
| 福鲁伊克斯水晶 `ae2:transform/fluix_crystals` | 充能石英 + **红石粉** + 下界石英 | 充能石英 + **灌注红石** + 下界石英 |
| 充能器 / 压印器 / ME 控制器 | 充能赛特斯石英 | **灌注赛特斯石英** |
| 水晶催生仓 | 福鲁伊克斯玻璃线缆压边 | **灌注赛特斯石英** 压边 |

**高级 / 精英 / 终极三段这一轮留空**：高级电路、精英电路、终极电路与对应的工厂、机器保持原样，
等后面的关键物件定案再补门禁（Dj2 那里是「注能锇锭」一条线往上收）。

## 4. 任务书

「外星科技」章从 43 格补到 **45 格**：

- `5E5CB95D81DA624D`「把电灌进红石」：挂在「是」下，通用机械主线的第一格，奖励红石粉 ×16；
- `7619F0B43B6DBDA6`「矮人燃油泡石英」：挂在「是」下，AE 主线的第一格，奖励赛特斯石英 ×8；
- 两条主线整体右移两格（x +2），支线仍挂在正下方，生成器算完坐标后检查：**0 交叉、0 穿格**；
- 文案改口的地方：钢外壳（「另外要两块灌注红石」）、冶金灌注机、灌注合金与基础电路（基础电路改吃灌注红石）、
  富集仓、通电冶炼炉、粉碎机、福鲁伊克斯（灌注红石）、充能器 / 压印器 / 控制器 / 催生仓（灌注赛特斯石英）。

## 5. 验收

1. **完全重启游戏**（startup 注册了新物品；`/reload` 不重载 startup）。
2. 日志：`[MEK] 灌注红石：充能红石 + 8 红石粉 → 8；基础电路与基础三台改吃它，第一段不再要锇`；
   `[MEK] 灌注赛特斯石英：矮人燃油 1000 mB + 8 赛特斯石英 → 8（Create 搅拌盆）`；
   `[AE2] … 福鲁伊克斯吃灌注红石，四台主机吃灌注赛特斯石英`。
3. JEI：灌注红石是 8 颗一组的工作台配方；灌注石英在 Create 搅拌里；基础电路里没有锇；
   AE 充能器 / 压印器 / 控制器 / 催生仓的格子里能看到灌注石英。
4. 任务书：「外星科技」两条主线各多一格在最左边，形状与上一轮一致。

## 6. 已知边界与风险

- **充能红石的来路**：晶体充能器（红石 → 充能红石）是正路，第一块由末影龙掉落。整条门因此挂在
  **电力时代**，不再等核电线。
- **IU 的水里配方已禁用**：`sinkjourneycore` 的 `IuChargedRedstoneWaterMixin` 在
  `IUEventHandler#checkAndTransform` 头部返回 `null`，红石/钋粉/琥珀金锭丢进水里不再变成充能红石。
  这个 mixin 的 `require` 是 0：IU 换版本、方法名对不上时静默跳过，游戏照常进，
  只是水里那条路会回来——升级 IU 之后记得看一眼日志有没有那行 `[SJCore]`。
- **灌注石英走 Create**：余烬之后就是机动时代，顺序上不越级；但它确实要求先有一台机械搅拌器。
- **高级 / 精英 / 终极没有门**：这一轮按需求留空，它们现在与基础段同一批料，后面要补。
- **本轮没有进游戏实机验收**：配方用脚本核对 JSON 结构，SNBT 用 `check_snbt.py` 解析通过，
  任务书用 `check_quests.py` 验过 id / 依赖 / 坐标 / 文案，中文文案用 `lint_quest_text.py` 过了一遍。
