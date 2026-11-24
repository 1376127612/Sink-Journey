// ============================================================
// 分级仓 —— 配方
// ------------------------------------------------------------
// 仓本体由 Sink Journey Core 注册（namespace 仍是 mmcr），
// 这里给 8 个时代的物品输入/输出总线、流体输入/输出仓写转换配方：
//
//   P P P        P = 该时代的板
//   P H P        H = 同尺寸的原版 (MMCR) 仓
//   P P P
//
// 也就是「拿一台普通仓 + 8 块本时代板」换成该时代专用仓。
// 想改成本时代材料直接改 PLATE 那一列即可；换成别的底料就改 BASE 那一列。
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
    })
})()
