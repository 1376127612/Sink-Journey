// ============================================================
// 通用选矿线 —— 机器与内件注册（startup）
// ------------------------------------------------------------
//   sinkjourney:ore_beneficiator_basic      3×3×4  基础仓  并行 2
//   sinkjourney:ore_beneficiator_improved   3×3×5  改良仓  并行 4
//
// 两台共用七个配方池（JEI 一池一页签）：
//   ore_beneficiator_crush        磨矿   raw → 碎矿 ×2
//   ore_beneficiator_wash         洗选   碎矿 ×2 + 水 → 净碎 ×2 + 尾矿浆
//   ore_beneficiator_A..E         选别   按工艺族分页：浮选 / 磁选 / 重选
//
// 内件两个 `mmcr:level` 槽（和化学反应釜的搅拌/衬里同一套写法）：
//   mill        钢球 / 陶瓷球 / 砾磨        时长与能耗
//   separation  磁选 / 浮选 / 重选          速度与能耗的修正器（族由药剂与充气决定）
//
// 配方与结构在 server_scripts/industrial/ore_line.js（/reload 生效）。
// 本文件改完必须**完全重启**。设计说明：kubejs/docs/ORE_UNIVERSAL_LINE.md
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    // id / 机壳 / 并行
    const GRADES = [
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', 2],
        ['improved', 'industrialupgrade:baseblockalloy/inconel', 4]
    ]

    for (const [id, casing, parallel] of GRADES) {
        event.createMachine('sinkjourney:ore_beneficiator_' + id)
            .displayNameKey('machine.sinkjourney.ore_beneficiator_' + id)
            .recipePool(
                'sinkjourney:ore_beneficiator_crush',
                'sinkjourney:ore_beneficiator_wash',
                'sinkjourney:ore_beneficiator_A',
                'sinkjourney:ore_beneficiator_B',
                'sinkjourney:ore_beneficiator_C',
                'sinkjourney:ore_beneficiator_D',
                'sinkjourney:ore_beneficiator_E'
            )
            .appearance(casing)
            .allowModifiers()
            .allowParallelism()
            .maxParallelAmount(parallel)
            .register()
    }

    // ---- 内件 ----
    const TYPES = [
        ['mill', 'level.sinkjourney.mill'],
        ['separation', 'level.sinkjourney.separation']
    ]

    for (const [type, key] of TYPES) {
        event.createLevelType('sinkjourney:' + type)
            .displayNameKey(key)
            .register()
    }

    // [等级名, priority, 方块, 时长乘数, 能耗乘数, 并行加成]
    // 磨介：钢球基准，陶瓷省电慢，砾磨快但费电。
    // 选别：磁选省电、浮选略费电、重选均衡 —— 只是修正器，不是族门槛：
    // MMCR 的等级门槛是"priority >= 要求"，互斥的族没法用等级槽表达（会互相满足）。
    const LEVELS = {
        mill: [
            ['steel', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['ceramic', 1, 'industrialupgrade:blockresource/tempered_glass', 1.10, 0.85, 0],
            ['pebble', 2, 'minecraft:cobblestone', 0.90, 1.15, 1]
        ],
        separation: [
            ['magnetic', 0, 'industrialupgrade:baseblockingot2/neodymium', 1.00, 1.00, 0],
            ['flotation', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 1.00, 1.10, 0],
            ['gravity', 2, 'industrialupgrade:blockresource/bronze_block', 1.20, 0.80, 0]
        ]
    }

    for (const type in LEVELS) {
        for (const [name, priority, state, duration, energy, parallel] of LEVELS[type]) {
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

    console.info('[选矿] 通用选矿机两档已注册（磨介 3 级 / 选别 3 级）')
})
