// ============================================================
// 芯片阶段接线（方案 A）：把光刻产物接到 IU 的装配机器上
// ------------------------------------------------------------
// 两条硬约束决定了这里的写法：
//
// 1) 12 条电路配方不能重写。它们的产物是带 LEVEL_MICROCHIP 组件的电路
//    （getLevelCircuit），而 kubejs_iu 桥接只能用 ItemStack 造普通物品。
//    IU 的原料匹配（InputItemStack.matches → ModUtils.checkItemEquality →
//    areAllDataComponentsEqual）要求「配方原料的组件必须全在物品上」，
//    所以重写出的普通电路匹配不上下游任何 Lv1..Lv12 配方。
//    → 闸门改装在**制程模板**上（普通物品），12 条电路原样不动。
//
// 2) 芯片要通用：同一片裸片按报废率分成 i3/i5/i7/i9，高档能顶低档用，
//    低档顶不了高档。所以每个用途都按「档位 ≥ 门槛」注册多个变体：
//      处理器 要 i5 以上（i5/i7/i9 都能做）
//      内存   要 i3 以上（四档都能做）
//      存储   要 i3 以上（四档都能做）
//    制程模板 491/486 收 i7 或 i9，485/490 只收 i9。
//
// 处理器不再吃上一代处理器，内存/存储也不再逐级升级：同一用途里换的只有
// 「哪一代芯片 + 哪一档无源件」。处理器配方里也没有硬盘外壳那种东西了。
// ============================================================

// ---------------- 一、闸门：制程模板 ----------------
ServerEvents.recipes(event => {
    const CE = (m) => `industrialupgrade:crafting_elements/crafting_${m}_element`

    const TEMPLATE_IDS = {
        491: 'industrialupgrade:industrialupgrade_1240',
        486: 'industrialupgrade:industrialupgrade_1241',
        485: 'industrialupgrade:industrialupgrade_1243',
        490: 'industrialupgrade:industrialupgrade_1244'
    }

    // 每层：上一级模板 + 两种板 + 可用的芯片档位（高档能顶低档）
    const TEMPLATES = [
        { out: 491, prev: 488, plateA: 'barium', plateB: 'gadolinium', chips: ['chip_m1_i7', 'chip_m1_i9'] },
        { out: 486, prev: 491, plateA: 'duralumin', plateB: 'redbrass', chips: ['chip_m2_i7', 'chip_m2_i9'] },
        { out: 485, prev: 486, plateA: 'osmiridium', plateB: 'tantalumtungstenhafnium', chips: ['chip_m3_i9'] },
        { out: 490, prev: 485, plateA: 'nitenol', plateB: 'zeliber', chips: ['chip_m4_i9'] }
    ]

    for (const t of TEMPLATES) {
        event.remove({ id: TEMPLATE_IDS[t.out] })
        t.chips.forEach((chip, i) => {
            event.custom({
                type: 'industrialupgrade:shaped_recipe',
                category: 'misc',
                key: {
                    A: { item: CE(t.prev) },
                    B: { tag: `c:plates/${t.plateA}` },
                    C: { tag: `c:plates/${t.plateB}` },
                    D: { item: `kubejs:${chip}` }
                },
                pattern: ['C C', 'BAB', ' D '],
                result: { count: 1, id: CE(t.out) },
                show_notification: false
            }).id(`${TEMPLATE_IDS[t.out]}_${i}`)
        })
    }

    console.info('[芯片线] 制程模板已挂接分级芯片：491/486 收 i7+i9，485/490 收 i9')
})

// ---------------- 二、装配：处理器 / 内存 / 存储 ----------------
ServerEvents.loaded(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')
    if (!iu.isReady()) {
        console.warn('[芯片线] IU 配方系统未就绪，本轮跳过装配配方重建')
        return
    }

    const CE = (m) => `industrialupgrade:crafting_elements/crafting_${m}_element`

    // 无源件（IU 现有元件，全是普通物品）
    const DATA_PORT = CE(574)   // 数据接口（金手指/接口）
    const HDD_SHELL = CE(578)   // 硬盘外壳（只给存储用）
    const POWER_CONN = CE(593)  // 电源连接器
    const COOL = { 1: CE(588), 2: CE(588), 3: CE(598), 4: CE(598), 5: CE(592), 6: CE(594) }
    const COIL = { 1: CE(582), 2: CE(582), 3: CE(599), 4: CE(599), 5: CE(583), 6: CE(597) } // 铜扭线/铁氧体/螺线管/坡莫合金
    const DIODE = { 1: CE(568), 2: CE(568), 3: CE(567), 4: CE(567), 5: CE(565), 6: CE(565) } // 二极管/锗/砷化镓
    const WIRE = { 1: CE(580), 2: CE(560), 3: CE(589), 4: CE(596), 5: CE(596), 6: CE(596) }  // 数据线/数据总线
    const BUS = { 1: CE(569), 2: CE(569), 3: CE(591), 4: CE(561), 5: CE(561), 6: CE(561) }   // 寻址总线
    const MODULE = { 1: CE(576), 2: CE(566), 3: CE(584), 4: CE(564), 5: CE(564), 6: CE(564) } // 存储模块
    const CAP = {
        1: 'industrialupgrade:circuit/circuit_part1',
        2: 'industrialupgrade:circuit/advanced_part1',
        3: 'industrialupgrade:circuit/nanocircuit_part1',
        4: 'industrialupgrade:circuit/quantumcircuit_part1',
        5: 'industrialupgrade:circuit/spectralcircuit_part1',
        6: 'industrialupgrade:circuit/photon_part1'
    }

    // 处理器：meta / 芯片代（十条处理器摊到六代）
    const CPU = [
        [533, 1], [541, 1], [543, 2], [545, 2], [549, 3],
        [551, 3], [555, 4], [556, 4], [558, 5], [534, 6]
    ]
    // 内存 / 存储
    const RAM = [
        [538, 1], [557, 1], [552, 2], [542, 2], [540, 3], [548, 4], [536, 5], [554, 6]
    ]
    const SSD = [
        [539, 1], [547, 1], [535, 2], [544, 3], [553, 4], [550, 5], [537, 6], [546, 6]
    ]

    // 档位门槛：高档能顶低档用，低档顶不了高档
    const CPU_GRADES = ['i5', 'i7', 'i9']
    const MEM_GRADES = ['i3', 'i5', 'i7', 'i9']

    iu.clearMachine('electronics')

    let n = 0
    const add = (inIds, inCounts, out, energy) => {
        if (iu.addMultiRecipe('electronics', inIds, inCounts, CE(out), 1, energy, 0)) n++
        else console.warn('[芯片线] 配方注册失败：' + out)
    }

    // 处理器 = 本代芯片 + 同代电容×2 + 电感 + 二极管 + 冷却系统
    for (const [meta, gen] of CPU) {
        for (const g of CPU_GRADES) {
            add(
                [`kubejs:chip_m${gen}_${g}`, CAP[gen], COIL[gen], DIODE[gen], COOL[gen]],
                [1, 2, 1, 1, 1],
                meta,
                2000
            )
        }
    }

    // 内存 = 本代芯片 + 数据线 + 寻址总线 + 同代电容 + 数据接口
    for (const [meta, gen] of RAM) {
        for (const g of MEM_GRADES) {
            add(
                [`kubejs:chip_m${gen}_${g}`, WIRE[gen], BUS[gen], CAP[gen], DATA_PORT],
                [1, 1, 1, 1, 1],
                meta,
                1200
            )
        }
    }

    // 存储 = 本代芯片 + 存储模块 + 硬盘外壳 + 电源连接器 + 数据接口
    for (const [meta, gen] of SSD) {
        for (const g of MEM_GRADES) {
            add(
                [`kubejs:chip_m${gen}_${g}`, MODULE[gen], HDD_SHELL, POWER_CONN, DATA_PORT],
                [1, 1, 1, 1, 1],
                meta,
                800
            )
        }
    }

    // ---------------- 封装：裸片 → IU 的 SOIC / QFP 芯片 ----------------
    // 12 条电路吃的是 IU 自己的 circuit/*_part3（QFP），那两种芯片原本能在工作台
    // 用「锌棍 + 电容」直接合出来，绕开整条光刻线。所以工作台配方已在
    // litho_recipes.js 里删掉，这里把封装挪进电子装配机：
    //   该代 i9 裸片 ×2 → 该代 QFP；该代 i7 裸片 ×2 → 该代 SOIC
    const QFP = {
        1: 'industrialupgrade:circuit/circuit_part3',
        2: 'industrialupgrade:circuit/advanced_part3',
        3: 'industrialupgrade:circuit/nanocircuit_part3',
        4: 'industrialupgrade:circuit/quantumcircuit_part3',
        5: 'industrialupgrade:circuit/spectralcircuit_part3',
        6: 'industrialupgrade:circuit/photon_part3'
    }
    const SOIC = {
        1: 'industrialupgrade:circuit/circuit_part2',
        2: 'industrialupgrade:circuit/advanced_part2',
        3: 'industrialupgrade:circuit/nanocircuit_part2',
        4: 'industrialupgrade:circuit/quantumcircuit_part2',
        5: 'industrialupgrade:circuit/spectralcircuit_part2',
        6: 'industrialupgrade:circuit/photon_part2'
    }
    const SOLDER = CE(262) // 元件:焊接

    let pkg = 0
    const addPkg = (inIds, inCounts, out, energy) => {
        if (iu.addMultiRecipe('electronics', inIds, inCounts, out, 1, energy, 0)) pkg++
        else console.warn('[芯片线] 封装配方注册失败：' + out)
    }

    for (let gen = 1; gen <= 6; gen++) {
        addPkg([`kubejs:chip_m${gen}_i9`, SOLDER, DATA_PORT, CAP[gen], COOL[gen]], [2, 1, 1, 1, 1], QFP[gen], 1500)
        addPkg([`kubejs:chip_m${gen}_i7`, SOLDER, DATA_PORT, CAP[gen], COOL[gen]], [2, 1, 1, 1, 1], SOIC[gen], 1200)
    }

    console.info(`[芯片线] 封装 ${pkg} 条（i9 裸片 → QFP，i7 裸片 → SOIC）`)
    console.info(`[芯片线] 电子装配机已重建 ${n} 条配方（芯片按档位向下通用，无逐级升级）`)
})
