// ============================================================
// 电解 —— 机器与内件注册（startup）
// ------------------------------------------------------------
//   sinkjourney:molten_salt_cell_basic      3×3×5  基础仓  基础并行 1
//   sinkjourney:molten_salt_cell_advanced   3×3×6  高级仓  基础并行 2
//
// 水溶液电解（电积 / 电解精炼 / 氯碱）已经交给核电工艺的电解池
// （nuclearcraftneohaul:electrolyzer_controller）：配方、阳极、阴极、隔膜、
// 电解液全部走 NC 自己的数据驱动接口，见
// kubejs/data/nuclearcraftneohaul/ 与 docs/ELECTROLYSIS_LINE.md §1.4。
// 本文件只剩熔盐电解槽——熔盐要做电解液流体，NC 的池子放不进去。
//
// 熔盐槽配方池：electrolysis_fused
// 四个内件槽：ms_anode 阳极 / ms_cathode 阴极 / ms_lining 内衬 / ms_rectifier 整流
//
// 配方与结构在 server_scripts/industrial/electrolysis.js。改完本文件要**完全重启**。
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    // ---- 熔盐电解槽 ----
    // 电流比水溶液槽高一个数量级，整流器没有更低档：结构里那个槽位本身就是门槛。
    const MS_GRADES = [
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', 1],
        ['advanced', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 2]
    ]

    for (const [id, casing, parallel] of MS_GRADES) {
        event.createMachine('sinkjourney:molten_salt_cell_' + id)
            .displayNameKey('machine.sinkjourney.molten_salt_cell_' + id)
            .recipePool('sinkjourney:electrolysis_fused')
            .appearance(casing)
            .allowModifiers()
            .allowParallelism()
            .maxParallelAmount(parallel)
            .register()
    }

    const MS_TYPES = [
        ['ms_anode', 'level.sinkjourney.ms_anode'],
        ['ms_cathode', 'level.sinkjourney.ms_cathode'],
        ['ms_lining', 'level.sinkjourney.ms_lining'],
        ['ms_rectifier', 'level.sinkjourney.ms_rectifier']
    ]

    for (const [type, key] of MS_TYPES) {
        event.createLevelType('sinkjourney:' + type)
            .displayNameKey(key)
            .register()
    }

    const MS_LEVELS = {
        ms_anode: [
            ['graphite', 0, 'minecraft:coal_block', 1.00, 1.00, 0],
            ['inert', 1, 'industrialupgrade:baseblockalloy1/cobalt_chrome', 0.95, 0.90, 1]
        ],
        ms_cathode: [
            ['steel', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['molybdenum', 1, 'industrialupgrade:baseblockingot2/molybdenum', 0.95, 0.95, 1]
        ],
        ms_lining: [
            ['refractory', 0, 'minecraft:bricks', 1.00, 1.00, 0],
            ['carbon', 1, 'minecraft:polished_blackstone', 0.98, 0.95, 0]
        ],
        ms_rectifier: [
            ['selenium', 0, 'kubejs:selenium_rectifier_block', 1.10, 1.10, 0],
            ['silicon', 1, 'kubejs:silicon_rectifier_block', 1.00, 1.00, 0],
            ['thyristor', 2, 'kubejs:thyristor_rectifier_block', 0.92, 0.85, 2]
        ]
    }

    for (const type in MS_LEVELS) {
        for (const [name, priority, state, duration, energy, parallel] of MS_LEVELS[type]) {
            event.createLevel('sinkjourney:' + type + '_' + name)
                .type('sinkjourney:' + type)
                .priority(priority)
                .state(state)
                .modifier(api.modifierDefinition([
                    api.modifier('duration', 'input', duration, 'multiply', false),
                    api.modifier('energy', 'input', energy, 'multiply', false),
                    api.modifier('parallelism', 'machine', parallel, 'add', false)
                ]))
                .register()
        }
    }

    console.info('[电解] 熔盐槽两档 + 四内件已注册；水溶液槽走核电工艺电解池')
})
