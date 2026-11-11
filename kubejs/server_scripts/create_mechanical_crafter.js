// ============================================================
// 动力合成器（Mechanical Crafter）配方魔改
//
// 原配方：电子管 + 黄铜机壳 + 工作台 -> 3 个动力合成器
//
// 新配方（3×3）：
//   工作台   电子管    工作台
//   工作台   黄铜机壳  工作台
//   工作台   精密构件  工作台
//   -> 1 个动力合成器
//
// 即：6 个工作台分列左右两边，中间保留电子管与黄铜机壳，
//     最下面中间改为精密构件。
// ============================================================

ServerEvents.recipes(event => {
    event.remove({ output: 'create:mechanical_crafter' })

    event.shaped(Item.of('create:mechanical_crafter', 1), [
        'RBR',
        'RCR',
        'RPR'
    ], {
        R: 'minecraft:crafting_table',
        B: 'create:electron_tube',
        C: 'create:brass_casing',
        P: 'create:precision_mechanism'
    }).id('create:crafting/kinetics/mechanical_crafter')

    console.info('[create_mechanical_crafter] 动力合成器配方已替换（产出 1 个）')
})
