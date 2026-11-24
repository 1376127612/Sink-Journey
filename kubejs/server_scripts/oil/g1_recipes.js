// ============================================================
// 石油—石化线 v4 —— G1 装置的结构与配方
// ------------------------------------------------------------
//   sinkjourney:naphtha_hydrotreater  石脑油加氢精制釜 3×3×4
//   sinkjourney:steam_cracker         蒸汽裂解炉       3×3×6
//
// 结构字母：
//   X 机壳（钢）      C 控制器        E 能量输入仓
//   I/J 流体输入仓    O/K 流体输出仓  a~e 流体输出仓（裂解产物）
//   A 气压输入接口    R 等级槽        P 物品输出总线（石油焦）
//
// 为什么先做这两台：
//   塑料这条线在电力初期只需要"脱硫 + 裂解"，聚合一端沿用 IU。
//   裂解气分离塔（C4 抽提、氢回收）留到电力中期，与 PP 一起上（G2），
//   所以这里裂解炉直接把五股馏分打出来，不经过中间气。
//
// 数值设计见 kubejs/docs/OIL_LINE_V2.md 第 6 节。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()
    const STEEL = 'industrialupgrade:blockresource/steel_block'

    // ---- 精制釜 3×3×4 ----
    event.createStructure('sinkjourney:naphtha_hydrotreater')
        .pattern(['XXX', 'XCX', 'XXX'])   // y0 底层：控制器
        .pattern(['XIX', 'XAX', 'XJX'])   // y1：石脑油进 / 气压 / 氢进
        .pattern(['XOX', 'XRX', 'XKX'])   // y2：精制石脑油出 / 等级槽 / H2S 出
        .pattern(['XEX', 'XXX', 'XXX'])   // y3 顶层：能量
        .set('X', api.block(STEEL))
        .set('I', api.anyOfFluidInput())
        .set('J', api.anyOfFluidInput())
        .set('O', api.anyOfFluidOutput())
        .set('K', api.anyOfFluidOutput())
        .set('A', api.anyOfAirInput())
        .set('R', api.levelSlot('sinkjourney:catalyst_bed'))
        .set('E', api.anyOfEnergyInput())
        .controller('C')
        .build()

    // ---- 裂解炉 3×3×6 ----
    event.createStructure('sinkjourney:steam_cracker')
        .pattern(['XXX', 'XCX', 'XXX'])   // y0：控制器
        .pattern(['XIX', 'XJX', 'XAX'])   // y1：精制石脑油进 / 过热蒸汽进 / 气压
        .pattern(['XaX', 'XbX', 'XcX'])   // y2：乙烯 / 丙烯 / 丁烯
        .pattern(['XdX', 'XeX', 'XPX'])   // y3：裂解汽油 / 甲烷 / 石油焦
        .pattern(['XRX', 'XXX', 'XXX'])   // y4：炉管等级槽
        .pattern(['XEX', 'XXX', 'XXX'])   // y5：能量
        .set('X', api.block(STEEL))
        .set('I', api.anyOfFluidInput())
        .set('J', api.anyOfFluidInput())
        .set('a', api.anyOfFluidOutput())
        .set('b', api.anyOfFluidOutput())
        .set('c', api.anyOfFluidOutput())
        .set('d', api.anyOfFluidOutput())
        .set('e', api.anyOfFluidOutput())
        .set('P', api.anyOfItemOutput())
        .set('A', api.anyOfAirInput())
        .set('R', api.levelSlot('sinkjourney:furnace_tube'))
        .set('E', api.anyOfEnergyInput())
        .controller('C')
        .build()
})

ServerEvents.recipes(event => {
    const STEEL_PLATE = '#c:plates/steel'
    const PIPE = 'create:fluid_pipe'
    const MECH = 'create:precision_mechanism'

    // ---- 控制器 ----
    event.shaped('mmcr:naphtha_hydrotreater_controller', [
        'SPS',
        'PCP',
        'SPS'
    ], { S: STEEL_PLATE, P: PIPE, C: MECH }).id('kubejs:oil/hydrotreater_controller')

    event.shaped('mmcr:steam_cracker_controller', [
        'SBS',
        'PCP',
        'SBS'
    ], { S: STEEL_PLATE, B: 'minecraft:blast_furnace', P: PIPE, C: MECH })
        .id('kubejs:oil/steam_cracker_controller')

    // ---- 石脑油加氢精制 ----
    // 甜油：硫少，耗氢少
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:naphtha_hydrotreater',
        tick_time: 300,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst_bed',
                level: 'sinkjourney:catalyst_bed_silica_alumina'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'kubejs:naphtha' }, amount: 8000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 240 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 2.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'kubejs:treated_naphtha', amount: 7850 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogensulfide', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 200 }
        ]
    }).id('kubejs:oil/hydrotreater_sweet')

    // 酸油：硫多，耗氢翻倍，H2S 更多
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:naphtha_hydrotreater',
        tick_time: 360,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst_bed',
                level: 'sinkjourney:catalyst_bed_silica_alumina'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'kubejs:naphtha' }, amount: 8000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 480 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 2.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'kubejs:treated_naphtha', amount: 7760 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogensulfide', amount: 220 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 200 }
        ]
    }).id('kubejs:oil/hydrotreater_sour')

    // ---- 蒸汽裂解 ----
    // 炉管等级决定裂解深度：钢 → 钼钢 → 因科镍 → 钛
    // 产物：[乙烯, 丙烯, 丁烯, 裂解汽油, 甲烷]，结焦以石油焦的物品产出表达
    const CRACK = [
        ['steel', 1920, 1120, 720, 1600, 2400, 0.50],
        ['molybdenum', 2240, 1240, 720, 1520, 2280, 0.30],
        ['inconel', 2560, 1360, 720, 1440, 1920, 0.15],
        ['titanium', 2880, 1400, 680, 1320, 1720, 0.05]
    ]

    for (const [tube, c2, c3, c4, pyr, ch4, cokeChance] of CRACK) {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:steam_cracker',
            tick_time: 400,
            requirements: [
                {
                    type: 'mmcr:level', io: 'input',
                    level_type: 'sinkjourney:furnace_tube',
                    level: `sinkjourney:furnace_tube_${tube}`
                },
                { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'kubejs:treated_naphtha' }, amount: 8000 },
                { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsuperheated_steam' }, amount: 4000 },
                { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 2.0 },
                { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidethylene', amount: c2 } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpropylene', amount: c3 } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidbutene', amount: c4 } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidgasoline', amount: pyr } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethane', amount: ch4 } },
                { type: 'minecraft:item', io: 'output', stack: { id: 'kubejs:petroleum_coke', count: 1 }, chance: cokeChance },
                { type: 'neoforge:energy', io: 'input', fe_per_tick: 480 }
            ]
        }).id(`kubejs:oil/cracker_${tube}`)
    }

    console.info('[石油线 v4] G1 装置就绪：石脑油加氢精制釜 + 蒸汽裂解炉（钢→钛 四级炉管）')
})
