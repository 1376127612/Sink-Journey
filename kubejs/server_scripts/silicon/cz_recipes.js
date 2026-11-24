// ============================================================
// 单晶反应釜 —— 结构与配方
// ------------------------------------------------------------
//   z0  XEX        E = 能量输入仓
//       XIC        I = 物品输入总线，C = 控制器
//       XXX
//   z1  XXX
//       XRX        R = 空（拉晶腔）
//       XXX
//   z2  XXX
//       XOX        O = 物品输出总线
//       XXX
//
// 3×3×3，和光刻机同一套摆法：北面中层进料与能量，南面中层出料。
// 控制器朝南时：北面左格是能量仓，同层中格是控制器。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    event.createStructure('sinkjourney:cz_reactor')
        .pattern(['XEX', 'XIC', 'XXX'])
        .pattern(['XXX', 'XRX', 'XXX'])
        .pattern(['XXX', 'XOX', 'XXX'])
        .set('X', api.block('mmcr:basic_casing'))
        .set('E', api.anyOfEnergyInput())
        .set('I', 'mmcr:item_input_bus_steam')
        .set('O', api.anyOfItemOutput())
        .set('R', api.air())
        .controller('C')
        .build()
})

ServerEvents.recipes(event => {
    const SIEMENS = 'kubejs:siemens_poly'
    const MONO_9N = 'kubejs:mono_9n'
    const POLY_11N = 'kubejs:poly_11n'
    const MONO_11N = 'kubejs:mono_11n'

    // 控制器：石英炉膛 + 钢板 + 精密构件，机动阶段就能做
    event.shaped('mmcr:cz_reactor_controller', [
        'SQS',
        'QCQ',
        'SQS'
    ], {
        S: '#c:plates/steel',
        Q: 'minecraft:quartz_block',
        C: 'create:precision_mechanism'
    }).id('kubejs:sink_cz/cz_reactor_controller')

    // T2：西门子棒直拉成 9N 单晶
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:cz_reactor',
        tick_time: 1200,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: SIEMENS }, count: 1 },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 },
            { type: 'minecraft:item', io: 'output', stack: { id: MONO_9N, count: 1 } }
        ]
    }).id('kubejs:cz/pull_9n')

    // T3：11N 多晶硅直拉成 11N 单晶
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:cz_reactor',
        tick_time: 1200,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: POLY_11N }, count: 1 },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 },
            { type: 'minecraft:item', io: 'output', stack: { id: MONO_11N, count: 1 } }
        ]
    }).id('kubejs:cz/pull_11n')

    console.info('[晶圆线] 单晶反应釜已装载：西门子棒 -> 9N 单晶、11N 多晶硅 -> 11N 单晶（60 秒 / 256 FE/t）')
})
