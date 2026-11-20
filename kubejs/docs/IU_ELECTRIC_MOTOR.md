# Industrial Upgrade 电动机专家链魔改说明

> 适用版本：Minecraft 1.21.1 / NeoForge / KubeJS 2101 / Industrial Upgrade 3.4.0.11 / kubejs_iu 1.0.2。  
> 最后核对：2026-11-20。  
> 实装脚本：[iu_electric_motor.js](../server_scripts/industrial/iu_electric_motor.js)。

---

## 0. 结论速查

这次改的不是单条电动机配方，而是整条前置链：

| 环节 | 原配方 | 新配方 |
| --- | --- | --- |
| 线圈 crafting_294_element | 8 铜导线 + 1 铁锭 | 4 铜导线 + 4 铁板 + 1 红铜锭 |
| 能源元件 crafting_60_element | 3 高级RE电池 + 1 元件模板 | 4 高级RE电池 + 2 线圈 + 2 金板 + 1 元件模板 |
| 电动机 crafting_276_element | 1 锡外壳 + 2 线圈 + 1 能源元件 + 1 电子电路 | 1 青铜外壳 + 2 线圈 + 1 能源元件 + 1 电子电路 |
| 红铜来源 | 只能合金炉 | 新增加热搅拌：3 铜锭 + 1 黄铜锭 -> 1 红铜锭 |

单电机折合：

- 4 个线圈 = 16 铜导线 + 16 铁板 + 4 红铜锭
- 4 个高级RE电池
- 2 金板 + 1 元件模板
- 1 青铜外壳 + 1 电子电路

电子电路 crafting_272_element 的配方**没有动**，只作为原料使用。

---

## 1. 编号与 ID 对照

IU 把大量元件命名成 crafting_数字_element。本链涉及的编号：

| 编号 | 中文名 | 完整物品 ID | 本链角色 |
| ---: | --- | --- | --- |
| 21 | 元件模板 | industrialupgrade:crafting_elements/crafting_21_element | 能源元件原料；已有 Create 序列装配专家配方 |
| 60 | 元件:能源 | industrialupgrade:crafting_elements/crafting_60_element | 电动机前置件，本次重做 |
| 272 | 电子电路 | industrialupgrade:crafting_elements/crafting_272_element | 电动机原料，配方不动 |
| 276 | 电动机 | industrialupgrade:crafting_elements/crafting_276_element | 本链最终产物 |
| 294 | 线圈 | industrialupgrade:crafting_elements/crafting_294_element | 能源元件/电动机前置件，本次重做 |

> 注意：276 是**电动机**，272 才是**电子电路**。写脚本时不要看反。

完整编号表由脚本生成：

- [IU_ITEM_NAMES.md](IU_ITEM_NAMES.md)
- kubejs/config/iu_item_names.json
- 生成器：[gen_iu_item_map.py](../tools/gen_iu_item_map.py)

重新生成：

    python kubejs/tools/gen_iu_item_map.py

---

## 2. 为什么只用 KubeJS，不用 kubejs_iu

IU 有两套配方系统：

| | 工作台配方 | 机器加工配方 |
| --- | --- | --- |
| 位置 | data/industrialupgrade/recipe/*.json | Java 内存 RecipesCore.map_recipes |
| 例子 | 线圈、能源元件、电动机、机器方块 | 粉碎机、齿轮机、铁砧、合金炉 |
| 有 id | 有，文件名就是 id | 没有 id |
| KubeJS 能改 | 能，ServerEvents.recipes | 不能直接改，需要 kubejs_iu 的桥 |

本链的线圈、能源元件、电动机都是 industrialupgrade:shaped_recipe 数据包配方，所以只需要 KubeJS 的 remove + custom，**不需要 kubejs_iu**。

红铜来源用的是 Create 的 mixing 配方，同样走 KubeJS Create 接口，不是 IU 机器配方。

---

## 3. 原配方与配方 ID

三个目标配方都在 IU jar 内：

| 配方 ID | 文件 | 产物 |
| --- | --- | --- |
| industrialupgrade:industrialupgrade_1606 | data/industrialupgrade/recipe/industrialupgrade_1606.json | 线圈 294 |
| industrialupgrade:industrialupgrade_730 | data/industrialupgrade/recipe/industrialupgrade_730.json | 能源元件 60 |
| industrialupgrade:industrialupgrade_735 | data/industrialupgrade/recipe/industrialupgrade_735.json | 电动机 276 |

原配方内容：

**线圈 1606**

    A A A
    A B A
    A A A

- A = industrialupgrade:wiring/copper x8
- B = minecraft:iron_ingot x1

**能源元件 730**

    A A A
      B
       

- A = industrialupgrade:battery/advanced_re_battery x3
- B = industrialupgrade:crafting_elements/crafting_21_element x1

**电动机 735**

      A
    B C B
      D

- A = industrialupgrade:casing/tin x1
- B = industrialupgrade:crafting_elements/crafting_294_element x2
- C = industrialupgrade:crafting_elements/crafting_60_element x1
- D = industrialupgrade:crafting_elements/crafting_272_element x1，带 level_microchip = 2 组件

---

## 4. 新配方

### 4.1 线圈 294

    C I C
    I P I
    C I C

- C = 铜导线 industrialupgrade:wiring/copper x4
- I = 铁板 create:iron_sheet x4
- P = 红铜锭 industrialupgrade:alloyingot/red_brass x1

铜导线由 primal_wire_insulator 生产，是电动机之前的机器，不会死锁。

### 4.2 能源元件 60

    B C B
    G T G
    B C B

- B = 高级RE电池 industrialupgrade:battery/advanced_re_battery x4
- C = 线圈 294 x2
- G = 金板 create:golden_sheet x2
- T = 元件模板 21 x1

### 4.3 电动机 276

      A
    B C B
      D

- A = 青铜外壳 industrialupgrade:casing/bronze x1
- B = 线圈 294 x2
- C = 能源元件 60 x1
- D = 电子电路 272 x1，保留 level_microchip = 2 组件

### 4.4 单电机总物料

| 物料 | 数量 | 备注 |
| --- | ---: | --- |
| 线圈 294 | 4 | 电机直接 2 个 + 能源元件内 2 个 |
| 铜导线 | 16 | 每个线圈 4 个 |
| 铁板 | 16 | 每个线圈 4 个 |
| 红铜锭 | 4 | 每个线圈 1 个 |
| 高级RE电池 | 4 | 能源元件内 |
| 金板 | 2 | 能源元件内 |
| 元件模板 21 | 1 | 能源元件内 |
| 青铜外壳 | 1 | 电动机外壳 |
| 电子电路 272 | 1 | 电动机内 |

红铜锭 4 个 = 4 批加热搅拌 = **12 铜锭 + 4 黄铜锭**。

另外，4 个高级RE电池内部还要 16 个青铜外壳；加上电动机自己的 1 个，整条链共 **17 个青铜外壳**。

---

## 5. 红铜来源与循环依赖

### 5.1 为什么不能直接用 IU 的红铜

在原版 IU 里，红铜锭只能通过合金炉获得，而合金炉方块配方 industrialupgrade_1450 里有：

    industrialupgrade:crafting_elements/crafting_276_element

也就是**合金炉需要电动机**。如果电动机反过来要求红铜，就会死锁。

### 5.2 为什么不用红铜齿轮

红铜齿轮 industrialupgrade:alloygear/red_brass 看起来更合理，但 IU 的齿轮机方块配方 industrialupgrade_1321 里同样有 crafting_276_element。用红铜齿轮也会死锁。

所以线圈中心使用**红铜锭**，不用红铜齿轮，也不依赖铁砧压红铜板。

### 5.3 新增的红铜来源

在电动机链之前加一条 Create 加热搅拌：

    3 铜锭 + 1 黄铜锭 -> 1 红铜锭

对应代码：

    event.recipes.create.mixing(
        '1x industrialupgrade:alloyingot/red_brass',
        ['3x minecraft:copper_ingot', '1x create:brass_ingot']
    ).heated().id('kubejs:red_brass_from_copper_and_brass')

如果当前 KubeJS Create 接口不可用，脚本会回退到工作台无序配方：

    event.shapeless(
        '1x industrialupgrade:alloyingot/red_brass',
        ['3x minecraft:copper_ingot', '1x create:brass_ingot']
    ).id('kubejs:red_brass_from_copper_and_brass_fallback')

回退只用于防止死锁，正常情况下走加热搅拌。合金炉仍然是后期的批量红铜路线。

---

## 6. 可复用的魔改步骤

### 6.1 找到配方 ID

1. 在 JEI 里确认配方出现在**工作台网格**，不是机器界面。
2. 打开 mods/IndustrialUpgrade-*.jar，进入 data/industrialupgrade/recipe/。
3. 文件名去掉 .json，加上 industrialupgrade: 前缀，就是配方 ID；如果文件在子目录里，子目录也要保留（例如 recipe/misc/foo.json -> industrialupgrade:misc/foo）。

例如：

    industrialupgrade_735.json -> industrialupgrade:industrialupgrade_735

### 6.2 读原 JSON

重点看四个字段：

- type：IU 工作台配方是 industrialupgrade:shaped_recipe 或 industrialupgrade:shapeless_recipe。
- key 与 pattern：有形体配方。
- result：IU 用 { count, id }，不是 { item }。
- components：带 NBT/数据组件的原料，必须原样复制。

### 6.3 删除并重建

核心套路：

    var ID = 'industrialupgrade:industrialupgrade_1606'
    event.remove({ id: ID })
    event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        key: {
            C: { item: 'industrialupgrade:wiring/copper' },
            I: { item: 'create:iron_sheet' },
            P: { item: 'industrialupgrade:alloyingot/red_brass' }
        },
        pattern: ['CIC', 'IPI', 'CIC'],
        result: { count: 1, id: 'industrialupgrade:crafting_elements/crafting_294_element' },
        show_notification: false
    }).id(ID)

要点：

- event.remove 只对数据包原生配方生效，同一 id 重建不会删掉自己。
- 新配方必须复用原 id，JEI 才会覆盖原配方。
- IU 配方没有 schema，replaceInput 无效，只能逐条 remove + custom。
- 标签不要带 #，例如 { tag: 'c:plates/iron' }；但本链为了避开跨模组标签污染，直接写精确物品 ID。

### 6.4 保留组件

电子电路必须带原来的等级组件：

    var CIRCUIT = {
        type: 'neoforge:components',
        items: 'industrialupgrade:crafting_elements/crafting_272_element',
        components: {
            'industrialupgrade:level_microchip': 2,
            'minecraft:attribute_modifiers': { modifiers: [] },
            'minecraft:enchantments': { levels: {} },
            'minecraft:lore': [],
            'minecraft:max_stack_size': 64,
            'minecraft:rarity': 'common',
            'minecraft:repair_cost': 0
        }
    }

组件少写或写错，配方会匹配不到原电路。

### 6.5 处理循环依赖

在专家包里加前置件之前，先检查它是否依赖目标产物：

- 合金炉 industrialupgrade_1450 -> 需要电动机 276
- 齿轮机 industrialupgrade_1321 -> 需要电动机 276
- 高级RE电池 -> 需要青铜外壳，但青铜外壳是铁砧早期配方，可用

所以本链：

- 不用钢/青铜锭直接做电动机，避免合金炉循环。
- 不用红铜齿轮，避免齿轮机循环。
- 红铜改用新增的 Create 搅拌来源。
- 铜导线用 primal wire insulator，早期可用。

### 6.6 加日志

脚本末尾输出关键日志，方便 /reload 后确认：

    [IU] 专家链已重建：线圈 294 / 能源元件 60 / 电动机 276
    [IU] 电动机单次成本：1 青铜外壳 + 2 线圈 + 1 能源元件 + 1 电子电路
    [IU] 折合：4 线圈 + 4 高级RE电池 + 2 金板 + 1 元件模板 + 1 青铜外壳 + 1 电子电路
    [IU] 红铜来源：加热搅拌 3 铜锭 + 1 黄铜锭 -> 1 红铜锭（单电机共需 4 个红铜锭）

---

## 7. 文件与工具

| 文件 | 作用 |
| --- | --- |
| kubejs/server_scripts/industrial/iu_electric_motor.js | 本链实装脚本 |
| kubejs/tools/gen_iu_item_map.py | 扫描 IU jar，生成编号对照表 |
| kubejs/docs/IU_ITEM_NAMES.md | 788 个编号元件的中英文对照 |
| kubejs/config/iu_item_names.json | 同上的机器可读版本 |
| kubejs/docs/IU_ELECTRIC_MOTOR.md | 本文档 |

编号对照表不是手写的，换 IU 版本后重跑生成器即可。

---

## 8. 验证与生效

### 8.1 脚本级验证

本链用 Node 模拟 ServerEvents.recipes 跑过：

- 正常路径：红铜搅拌 + 3 个 remove + 3 个 custom 全部捕获。
- 回退路径：模拟 Create 接口抛错，红铜回退到 shapeless，3 个 IU 配方仍然注册。
- 网格数量：线圈 C4/I4/P1，能源 B4/C2/G2/T1，电动机 A1/B2/C1/D1。

这只能证明脚本逻辑和网格数量，不能替代游戏内加载。

### 8.2 游戏内验证

1. 进游戏执行 /reload。
2. 打开 logs/kubejs/server.log，搜索 [IU] 专家链已重建。
3. JEI 搜索“线圈”“元件:能源”“电动机”，确认新配方。
4. 如果没生效，执行 /kubejs errors 看脚本报错。
5. server_scripts 改动不需要重启游戏；如果改的是 startup_scripts 才需要重启。

---

## 9. 调整与维护

### 9.1 想再提高强度

当前单电机已经是 4 线圈 + 4 电池 + 4 红铜锭。继续加码的选项：

- 电动机改成 2 个能源元件：ACA / BCB / D，会变成 8 电池 + 6 线圈。
- 线圈改成 2 个红铜锭或红铜板：需要重新设计图案，并确认红铜板来源。
- 能源元件加电子电路：会再消耗 1 个 272，但 272 本身配方不变。

### 9.2 想降低强度

- 能源元件退回 3 电池 + 1 线圈。
- 线圈退回 2 铜导线 + 4 铁板 + 1 红铜锭。
- 红铜搅拌改成不加热，或提高输出数量。

### 9.3 IU 更新后

重点复查：

- 三个配方 id 是否还在 industrialupgrade_1606/730/735。
- crafting_272_element 的 level_microchip 是否还是 2。
- 红铜锭、铜导线、青铜外壳的 ID 是否变化。
- 合金炉/齿轮机是否仍然依赖电动机。

### 9.4 金属约束检查

本链直接出现的金属：

- 铁：create:iron_sheet
- 铜：industrialupgrade:wiring/copper、minecraft:copper_ingot
- 金：create:golden_sheet
- 青铜：industrialupgrade:casing/bronze
- 黄铜：create:brass_ingot（用于红铜搅拌）
- 铅：高级RE电池内部的 c:dusts/lead
- 红铜：industrialupgrade:alloyingot/red_brass

没有铱、钨、钛、锇、铂等。  
如果后续要加新金属，先对照允许列表，再检查它的前置是否又绕回电动机。

---

## 10. 已知限制

- 红铜来源优先走 Create 加热搅拌；如果 KubeJS Create 接口不可用，会回退到工作台无序配方。两条都失败时，红铜不可获得，日志会有 [IU] 红铜...注册失败。
- 本链假设 primal_wire_insulator 和铁砧（青铜外壳）在电动机之前可获得。原版电动机本来就依赖锡外壳和线圈，这个假设与原进度一致。
- crafting_21_element 的专家配方由 kubejs/server_scripts/kubejsstudio/recipes.js 提供，本文档不重复修改。
- crafting_272_element 按需求保持原配方，只作为原料。
- 当前环境没有启动游戏，本文档和脚本做过 Node 模拟验证，但没有实机 /reload 验收。
- 无关告警：kubejs/server_scripts/bans/iu_handcraft.js 第 47 行有未定义的 i('anvil')，每次 reload 会报错；它不影响本脚本，但会在日志里出现。

---

## 11. 变更记录

| 日期 | 变更 |
| --- | --- |
| 2026-11-20 | 初版：电动机改为铁/铜/金，线圈与能源元件专家化 |
| 2026-11-20 | 线圈改用铜导线 + 红铜锭；红铜增加 Create 加热搅拌来源；能源元件加到 4 电池 + 2 线圈 |
