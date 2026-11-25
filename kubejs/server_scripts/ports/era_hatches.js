// ============================================================
// 分级仓 —— 配方
// ------------------------------------------------------------
// 仓本体由 Sink Journey Core 注册（namespace 仍是 mmcr），
// 这里给两套仓写转换配方：8 个时代 + IU 机器四档。
//
//   P P P        P = 该档位的板
//   P H P        H = 同尺寸的原版 (MMCR) 仓
//   P P P
//
// 也就是「拿一台普通仓 + 8 块本档位板」换成该档位专用仓。
// 时代表在 ERAS（板直接写标签 id），IU 四档在 GRADES（板可以写标签或物品 id）。
// 想换材料改对应的 PLATE 那一列即可；换成别的底料就改 H 的那一列。
// ============================================================

(function () {
    // MMCR 的仓 id 后缀：normal 档没有后缀
    var SUFFIX = { small: '_small', normal: '', reinforced: '_reinforced', big: '_big', huge: '_huge', ludicrous: '_ludicrous' }

    var ERAS = [
        { id: 'primitive', plate: 'c:plates/copper', item: 'small', fluid: 'small' },
        { id: 'root', plate: 'c:plates/iron', item: 'normal', fluid: 'normal' },
        { id: 'ember', plate: 'industrialupgrade:itemplates/bronze_plate', item: 'reinforced', fluid: 'reinforced' },
        { id: 'kinetic', plate: 'create:brass_sheet', item: 'reinforced', fluid: 'reinforced' },
        { id: 'steam', plate: 'industrialupgrade:itemplates/steel_plate', item: 'big', fluid: 'big' },
        { id: 'pneumatic', plate: 'c:plates/silver', item: 'huge', fluid: 'huge' },
        { id: 'end', plate: 'c:plates/obsidian', item: 'ludicrous', fluid: 'ludicrous' },
        { id: 'radiance', plate: 'c:plates/gold', item: 'ludicrous', fluid: 'vacuum' }
    ]

    // IU 机器四档的仓（SinkJourneyCore 另一张表）：底料是同尺寸的 MMCR 原版仓，
    // 板按 IU 自己的金属阶梯走 —— 钢 → 镍 → 钛 → 铌钛。
    var GRADES = [
        { id: 'basic', plate: { tag: 'c:plates/steel' }, item: 'big', fluid: 'big' },
        { id: 'improved', plate: { item: 'industrialupgrade:itemplates/nickel_plate' }, item: 'huge', fluid: 'huge' },
        { id: 'advanced', plate: { tag: 'c:plates/titanium' }, item: 'ludicrous', fluid: 'ludicrous' },
        { id: 'perfect', plate: { tag: 'c:plates/niobiumtitanium' }, item: 'ludicrous', fluid: 'vacuum' }
    ]

    var SHAPE = ['PPP', 'PHP', 'PPP']

    ServerEvents.recipes(function (event) {
        ERAS.forEach(function (era) {
            var itemBase = SUFFIX[era.item]
            var fluidBase = era.fluid === 'vacuum' ? '_vacuum' : SUFFIX[era.fluid]

            var pairs = [
                ['item_input_bus', itemBase],
                ['item_output_bus', itemBase],
                ['fluid_input_hatch', fluidBase],
                ['fluid_output_hatch', fluidBase]
            ]

            pairs.forEach(function (pair) {
                event.shaped('mmcr:' + pair[0] + '_' + era.id, SHAPE, {
                    P: { tag: era.plate },
                    H: 'mmcr:' + pair[0] + pair[1]
                }).id('kubejs:sink_ports/' + era.id + '_' + pair[0])
            })
        })

        GRADES.forEach(function (grade) {
            var itemBase = SUFFIX[grade.item]
            var fluidBase = grade.fluid === 'vacuum' ? '_vacuum' : SUFFIX[grade.fluid]

            var pairs = [
                ['item_input_bus', itemBase],
                ['item_output_bus', itemBase],
                ['fluid_input_hatch', fluidBase],
                ['fluid_output_hatch', fluidBase]
            ]

            pairs.forEach(function (pair) {
                event.shaped('mmcr:' + pair[0] + '_' + grade.id, SHAPE, {
                    P: grade.plate,
                    H: 'mmcr:' + pair[0] + pair[1]
                }).id('kubejs:sink_ports/' + grade.id + '_' + pair[0])
            })
        })
    })
})()
