// ============================================================
// 磁控直拉炉 —— 结构与配方
// ------------------------------------------------------------
//   z0  XEX        E = 能量输入仓
//       XIC        I = 物品输入总线，C = 控制器
//       XXX
//   z1  XFX        F = 流体输入仓（液氦）
//       XRX        R = 空（生长腔）
//       XXX
//   z2  XXX
//       XOX        O = 物品输出总线
//       XXX
//
// 控制器朝南时：北面中层左格进料与能量，第二层左侧进液氦，南面中层出料。
// 和光刻机共用同一套 3x3x3 摆法，只是多一格流体仓。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    event.createStructure('sinkjourney:mcz_puller')
        .pattern(['XEX', 'XIC', 'XXX'])
        .pattern(['XFX', 'XRX', 'XXX'])
        .pattern(['XXX', 'XOX', 'XXX'])
        .set('X', api.block('mmcr:basic_casing'))
        .set('E', api.anyOfEnergyInput())
        .set('I', api.anyOfItemInput())
        .set('F', api.anyOfFluidInput())
        .set('O', api.anyOfItemOutput())
        .set('R', api.air())
        .controller('C')
        .build()
})

ServerEvents.recipes(event => {
    const POLY_11N = 'kubejs:poly_11n'
    const BOULE_12N = 'kubejs:boule_12n'
    const COIL = 'kubejs:mcz_coil'
    const HELIUM = 'nuclearcraftneohaul:liquid_helium'

    // 控制器：铌钛外壳 + 玻璃观察窗 + 高级电路
    event.shaped('mmcr:mcz_puller_controller', [
        'SGS',
        'GCG',
        'SGS'
    ], {
        S: '#c:plates/niobiumtitanium',
        G: 'minecraft:glass',
        C: 'industrialupgrade:circuit/advanced_part2'
    }).id('kubejs:sink_mcz/mcz_puller_controller')

    // 铌钛超导线圈：NbTi 是现实里的低温超导线材，套在坩埚外围产生磁场
    event.shaped('kubejs:mcz_coil', [
        ' T ',
        'T T',
        ' T '
    ], {
        T: '#c:plates/niobiumtitanium'
    }).id('kubejs:sink_mcz/mcz_coil')

    // 磁控直拉：2× 11N 多晶硅 + 液氦（磁体冷却） -> 器件级单晶硅棒（12N）
    // 必须从多晶硅重新长，不能拿 11N 单晶「洗一遍」升级：
    // 控氧控偏析只发生在熔体里，这一条就是防套娃的硬约束。
    // 一根晶棒两个去处：激光处理厂切成 12N 光刻晶圆，制造机锯成器件级晶圆。
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:mcz_puller',
        tick_time: 1800,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: POLY_11N }, count: 2 },
            { type: 'minecraft:item', io: 'input', item: { item: COIL }, count: 1, consume_chance: 0.08 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HELIUM }, amount: 2000 },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 512 },
            { type: 'minecraft:item', io: 'output', stack: { id: BOULE_12N, count: 1 } }
        ]
    }).id('kubejs:mcz/pull_12n')

    console.info('[晶圆线] 磁控直拉炉已装载：2× 11N 多晶硅 + 2000mB 液氦 + 铌钛线圈 -> 器件级单晶硅棒（90 秒 / 512 FE/t）')
})
