// ============================================================
// 区域熔炼炉 —— 结构与配方
// ------------------------------------------------------------
// 结构 3 x 3 x 4（卧式石英管）：
//   z0  北端：物品输入口
//   z1  中段：西面应力输入、东面物品输出，管顶放加热圈（等级槽）
//   z2  中段：空腔
//   z3  南端：控制器
// 控制器朝南时：北墙中间是输入，西墙是应力，东墙是输出，管顶是加热圈。
//
// 工艺只有“加热 + 移动”：输入冶金硅，输出多晶硅棒，
// 不消耗任何流体或化学品。铁圈扫一遍 60 秒，换更好的圈只会缩短时间。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    event.createStructure('sinkjourney:zone_refiner')
        .pattern(['XXX', 'XIX', 'XXX'])
        .pattern(['XRX', 'S O', 'XXX'])
        .pattern(['XXX', 'X X', 'XXX'])
        .pattern(['XXX', 'XFX', 'XXX'])
        .set('X', api.block('minecraft:quartz_block'))
        .set('I', 'mmcr:item_input_bus_steam')
        .set('O', api.anyOfItemOutput())
        .set('S', api.anyStressInput())
        .set('R', api.levelSlot('sinkjourney:zone_heater'))
        .controller('F')
        .build()
})

ServerEvents.recipes(event => {
    const SILICON = 'nuclearcraftneohaul:silicon_gem'
    const POLY = 'industrialupgrade:crafting_elements/crafting_492_element'

    // 控制器：石英管 + 安山机壳 + 精密构件，机械动力阶段就能做
    event.shaped('mmcr:zone_refiner_controller', [
        'QSQ',
        'SCS',
        'QSQ'
    ], {
        Q: 'minecraft:quartz_block',
        S: 'create:andesite_casing',
        C: 'create:precision_mechanism'
    }).id('kubejs:sink_silicon/zone_refiner')

    // 铁圈：60 秒扫一遍，4 份冶金硅出 1 根多晶硅棒
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:zone_refiner',
        tick_time: 1200,
        requirements: [
            {
                type: 'mmcr:level',
                io: 'input',
                level_type: 'sinkjourney:zone_heater',
                level: 'sinkjourney:zone_heater_iron'
            },
            { type: 'create:stress', io: 'input', stress: 24, min_rpm: 32 },
            { type: 'minecraft:item', io: 'input', item: { item: SILICON }, count: 4 },
            { type: 'minecraft:item', io: 'output', stack: { id: POLY, count: 1 } }
        ]
    }).id('kubejs:zone_refiner/polysilicon_iron')

    // 钻石圈：同样料，30 秒扫完
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:zone_refiner',
        tick_time: 600,
        requirements: [
            {
                type: 'mmcr:level',
                io: 'input',
                level_type: 'sinkjourney:zone_heater',
                level: 'sinkjourney:zone_heater_diamond'
            },
            { type: 'create:stress', io: 'input', stress: 32, min_rpm: 32 },
            { type: 'minecraft:item', io: 'input', item: { item: SILICON }, count: 4 },
            { type: 'minecraft:item', io: 'output', stack: { id: POLY, count: 1 } }
        ]
    }).id('kubejs:zone_refiner/polysilicon_diamond')

    console.info('[晶圆线] 区域熔炼炉已装载：4× 冶金硅 + 应力 -> 1× 多晶硅棒（纯物理）')
})
