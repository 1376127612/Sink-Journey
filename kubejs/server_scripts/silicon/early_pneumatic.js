// ============================================================
// 前期起步：蚀刻路线（PneumaticCraft 桥）
// ------------------------------------------------------------
// 分工要分清：
//   · 气动工艺做的是**蚀刻板**——空 PCB → UV 曝光箱 → 蚀刻槽（酸）→ 装元件
//     → printed_circuit_board。它是化学蚀刻，不是光刻，也不该用光刻机。
//   · 光刻机属于电力时代（FE 驱动），只管把掩模打到晶圆上出芯片。
//
// 前期的死锁在别处：IU 的电动机(276)原配方要「电子电路 Lv2」，Lv2 又要
// 电路板制造厂 + 电子装配机，两台都要电。所以这里用**蚀刻板**把前期接上：
//
//   1. 基础模板(电路板 487)  ← 蚀刻板(printed_circuit_board) + 铜板×2
//   2. 电子电路(272)         ← 电路板 + 电容 + 铜板（手工焊一版，平电路）
//   3. 电动机(276)           ← 钢板×3 + 蚀刻板 + 铜 + 红石（绕过 Lv2 电路）
//
// 这三条都不碰光刻机：有压缩空气和蚀刻槽就能做，拿到电以后再上光刻线。
// ============================================================

ServerEvents.recipes(event => {
    const CE = (m) => `industrialupgrade:crafting_elements/crafting_${m}_element`
    const PCB = 'pneumaticcraft:printed_circuit_board'

    // 1. 电路板：蚀刻板铺铜，早期就能做出掩模用的基础模板（这一步是蚀刻，不是光刻）
    event.shapeless(CE(487), [
        PCB,
        '#c:plates/copper',
        '#c:plates/copper'
    ]).id('kubejs:sink_early/board_from_pcb')

    // 2. 手工电子电路：不经过电路板制造厂，先是平的 Lv0 电路（供手工配方用）
    event.shapeless(CE(272), [
        CE(487),
        'industrialupgrade:circuit/circuit_part1',
        '#c:plates/copper'
    ]).id('kubejs:sink_early/circuit_by_hand')

    // 3. 电动机：IU 原配方要「电子电路 Lv2」，那条路要电，改成气动电路板直做
    event.shaped(CE(276), [
        'SSS',
        'PCP',
        'R R'
    ], {
        S: '#c:plates/steel',
        P: PCB,
        C: '#c:ingots/copper',
        R: 'minecraft:redstone'
    }).id('kubejs:sink_early/elemotor_from_pcb')

    console.info('[芯片线] 蚀刻起步配方已装载：电路板 / 手工电路 / 电动机')
})
