// ============================================================
// 通用反应器（两台）—— 机器与内件注册
// ------------------------------------------------------------
//   sinkjourney:universal_reactor   通用反应器  3×3×6
//     pools: reactor_gas_solid / reactor_fluidized / reactor_high_pressure / reactor_cracking
//   sinkjourney:column_reactor      通用塔器        3×3×8
//     pools: reactor_gas_liquid / reactor_reactive_distillation
//   大型机型分三档（不锈钢 → 钛 → 钴铬），与 IU 的机器等级同序，仓也锁在同档：
//
//   sinkjourney:large_reactor_stainless   5×5×7  改良仓 + 大型能量仓     并行 8
//   sinkjourney:large_reactor_titanium    5×5×8  高级仓 + 巨型能量仓     并行 10
//   sinkjourney:large_reactor_cobalt      5×5×9  完美仓 + 超级能量仓     并行 12
//   sinkjourney:large_column_inconel      5×5×9  改良仓 + 大型能量仓     并行 3
//   sinkjourney:large_column_titanium     5×5×10 高级仓 + 巨型能量仓     并行 4
//   sinkjourney:large_column_cobalt       5×5×11 完美仓 + 超级能量仓     并行 6
//
// 通用性靠三层判定，不靠机器名：
//   能力池   机器入几个池，配方面向池；控制器界面里选池
//   内件     等级槽（催化剂 / 耐压容器 / 塔板 / 树脂）决定能跑哪条配方
//   条件     配方自己写气压、排热、料比
//
// 所以加一条反应只加配方，加一台机器只声明它入哪个池。
//
// 结构 / 配方：server_scripts/industrial/reactors_v2.js
// 设计文档：kubejs/docs/REACTOR_TYPES_PLAN.md
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    // ---- 机器：一台多池 ----
    event.createMachine('sinkjourney:universal_reactor')
        .displayNameKey('machine.sinkjourney.universal_reactor')
        .recipePool(
            'sinkjourney:reactor_gas_solid',
            'sinkjourney:reactor_fluidized',
            'sinkjourney:reactor_high_pressure',
            'sinkjourney:reactor_cracking'
        )
        .appearance('industrialupgrade:baseblockalloy/inconel')
        .allowModifiers()
        .allowParallelism()
        .maxParallelAmount(4)
        .register()

    // 大型反应器三档：同一套结构与池，换壳换仓换并行
    const LARGE_REACTOR_GRADES = [
        ['stainless', 'industrialupgrade:baseblockalloy/stainless_steel', 8],
        ['titanium', 'industrialupgrade:baseblockingot/titanium', 10],
        ['cobalt', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 12]
    ]

    for (const [id, casing, parallel] of LARGE_REACTOR_GRADES) {
        event.createMachine('sinkjourney:large_reactor_' + id)
            .displayNameKey('machine.sinkjourney.large_reactor_' + id)
            .recipePool(
                'sinkjourney:reactor_gas_solid',
                'sinkjourney:reactor_fluidized',
                'sinkjourney:reactor_high_pressure',
                'sinkjourney:reactor_cracking'
            )
            .appearance(casing)
            .allowModifiers()
            .allowParallelism()
            .maxParallelAmount(parallel)
            .register()
    }

    event.createMachine('sinkjourney:column_reactor')
        .displayNameKey('machine.sinkjourney.column_reactor')
        .recipePool(
            'sinkjourney:reactor_gas_liquid',
            'sinkjourney:reactor_reactive_distillation'
        )
        .appearance('industrialupgrade:baseblockalloy/stainless_steel')
        .allowModifiers()
        .allowParallelism()
        .maxParallelAmount(2)
        .register()

    // 大型塔器三档
    const LARGE_COLUMN_GRADES = [
        ['inconel', 'industrialupgrade:baseblockalloy/inconel', 3],
        ['titanium', 'industrialupgrade:baseblockingot/titanium', 4],
        ['cobalt', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 6]
    ]

    for (const [id, casing, parallel] of LARGE_COLUMN_GRADES) {
        event.createMachine('sinkjourney:large_column_' + id)
            .displayNameKey('machine.sinkjourney.large_column_' + id)
            .recipePool(
                'sinkjourney:reactor_gas_liquid',
                'sinkjourney:reactor_reactive_distillation'
            )
            .appearance(casing)
            .allowModifiers()
            .allowParallelism()
            .maxParallelAmount(parallel)
            .register()
    }

    // ---- 内件类型 ----
    const TYPES = [
        ['catalyst', 'level.sinkjourney.catalyst'],
        ['pressure_vessel', 'level.sinkjourney.pressure_vessel'],
        ['resin', 'level.sinkjourney.resin']
    ]

    for (const [type, key] of TYPES) {
        event.createLevelType('sinkjourney:' + type)
            .displayNameKey(key)
            .register()
    }

    // ---- 内件等级 ----
    // [等级名, priority, 方块, 时长乘数, 能耗乘数, 并行加成]
    // 催化剂按现实活性排：镍转化 → 铁铬变换 → 铜锌/钒 → 铁系合成 → 铂铑网
    const LEVELS = {
        catalyst: [
            ['nickel_alumina', 0, 'industrialupgrade:baseblockalloy/inconel', 1.00, 1.00, 0],
            ['iron_chromia', 1, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['copper_zinc', 2, 'industrialupgrade:baseblockalloy/stainless_steel', 0.85, 0.85, 2],
            ['vanadia', 3, 'industrialupgrade:baseblockalloy1/molybdenum_steel', 0.85, 0.85, 2],
            ['iron_promoted', 4, 'industrialupgrade:baseblockalloy1/cobalt_chrome', 0.72, 0.72, 4],
            ['platinum_rhodium', 5, 'industrialupgrade:baseblockingot/electrum', 0.72, 0.72, 4]
        ],
        // 耐压容器：只做门槛，不改速度——换壁厚不会让反应变快
        pressure_vessel: [
            ['forged_steel', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['multilayer', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 1.00, 1.00, 0],
            ['wire_wound', 2, 'industrialupgrade:baseblockingot/titanium', 1.00, 1.00, 0]
        ],
        // 离子交换树脂：催化精馏用，交联度越高活性越好
        resin: [
            ['gel', 0, 'industrialupgrade:blockresource/tempered_glass', 1.00, 1.00, 0],
            ['macroporous', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 0.85, 0.85, 2]
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

    console.info('[化工] 通用反应器已注册：标准反应器 + 大型三档 / 标准塔器 + 大型三档；催化剂 6 级 / 耐压 3 级 / 树脂 2 级')
})
