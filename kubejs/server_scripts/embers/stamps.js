// ============================================================
// 余烬：压模与灰泥（原 kubejsstudio 迁入）
// ============================================================
//
// 余烬原本六种压模（粒/锭/板/扁/齿轮/灰泥板）都在工作台直接合成，
// 等于跳过柴堆。这里统一改成「原始压模 → 柴堆烧制 → 成品压模」，
// 并把灰泥（caminite）也一起压到柴堆上：
//
//   raw_*_stamp + 黏土 + 盐块 + 煤 + 沙  ──柴堆──▶ *_stamp
//   caminite_blend ×4 + 煤                 ──柴堆──▶ caminite_brick ×4
//   黏土 + 沙 + 盐                         ──工作台──▶ caminite_blend ×2
//
// 全部是 generateData（roots:pyre 是自定义配方类型），/reload 不生效，改完重启。
// 原工作台配方在同一个文件里删掉，避免两条来源。
// ============================================================

ServerEvents.generateData('after_mods', event => {
    // ---- 1. 六种压模：raw -> 成品 ----
    var stamps = ['nugget', 'ingot', 'plate', 'flat', 'gear']
    for (var i = 0; i < stamps.length; i++) {
        var s = stamps[i]
        event.json('kubejs:recipe/embers/pyre/stamp/' + s,
            {
                'type': 'roots:pyre',
                'data': {
                    'ingredients': [
                        { 'item': 'minecraft:clay' },
                        { 'item': 'mekanism:block_salt' },
                        { 'tag': 'minecraft:coals' },
                        { 'tag': 'minecraft:sand' },
                        { 'item': 'embers:raw_' + s + '_stamp' }
                    ],
                    'result': { 'id': 'embers:' + s + '_stamp', 'count': 1 },
                    'priority': 0
                }
            })
    }
    // 灰泥板是第六种，名字不跟 raw_<x>_stamp 的规律
    event.json('kubejs:recipe/embers/pyre/stamp/caminite_plate',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'minecraft:clay' },
                    { 'item': 'mekanism:block_salt' },
                    { 'tag': 'minecraft:coals' },
                    { 'tag': 'minecraft:sand' },
                    { 'item': 'embers:raw_caminite_plate' }
                ],
                'result': { 'id': 'embers:caminite_plate', 'count': 1 },
                'priority': 0
            }
        })

    // ---- 2. 灰泥砖：四份灰泥 + 煤 ----
    event.json('kubejs:recipe/embers/pyre/caminite_brick',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'embers:caminite_blend' },
                    { 'item': 'embers:caminite_blend' },
                    { 'tag': 'minecraft:coals' },
                    { 'item': 'embers:caminite_blend' },
                    { 'item': 'embers:caminite_blend' }
                ],
                'result': { 'id': 'embers:caminite_brick', 'count': 4 },
                'priority': 0
            }
        })

    // ---- 3. 灰泥：黏土 + 沙 + 盐 ----
    event.json('embers:recipe/caminite_blend',
        {
            'type': 'kubejs:shaped',
            'result': { 'id': 'embers:caminite_blend', 'count': 2 },
            'pattern': ['#A#', 'ABA', '#A#'],
            'key': {
                '#': { 'item': 'minecraft:clay_ball' },
                'A': { 'item': 'minecraft:sand' },
                'B': { 'item': 'mekanism:salt' }
            }
        })
})

ServerEvents.recipes(event => {
    // 六种压模不再能工作台直合，只能从柴堆来
    var stampIds = [
        'embers:nugget_stamp',
        'embers:ingot_stamp',
        'embers:caminite_plate',
        'embers:plate_stamp',
        'embers:flat_stamp',
        'embers:gear_stamp'
    ]
    for (var i = 0; i < stampIds.length; i++) event.remove({ id: stampIds[i] })
})
