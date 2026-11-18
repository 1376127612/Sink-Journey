// ============================================================
// 溯洄研究阵列 —— 机器 / 等级 / 升级注册
// ------------------------------------------------------------
// 结构：
//   sinkjourney:trace_nexus   溯洄研究枢纽（主机，刻录蓝图）
//   sinkjourney:trace_compute 溯洄演算核心（模块，CPU，产演算数据）
//   sinkjourney:trace_cooling 逆熵冷却核心（模块，回收蒸汽）
// 两个模块必须通过模块桥接器连接到主机后才能运行配方。
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    // ---- 阶段二：机械研究台（小型多方块） ----
    event.createMachine('sinkjourney:mechanical_lab')
        .displayNameKey('machine.sinkjourney.mechanical_lab')
        .recipePool('sinkjourney:mechanical_lab')
        .appearance('create:brass_casing')
        .allowModifiers()
        .allowParallelism()
        .maxParallelAmount(4)
        .register()

    // ---- 阶段三：溯洄研究阵列 ----
    // ---- 主机：溯洄研究枢纽 ----
    event.createMachine('sinkjourney:trace_nexus')
        .displayNameKey('machine.sinkjourney.trace_nexus')
        .recipePool('sinkjourney:trace_nexus')
        .appearance('create:brass_casing')
        .allowModifiers()
        .allowParallelism()
        .allowMultithreading()
        .maxParallelAmount(16)
        .host('sinkjourney:trace_compute', 'sinkjourney:trace_cooling')
        .register()

    // ---- 模块：溯洄演算核心 ----
    event.createMachine('sinkjourney:trace_compute')
        .displayNameKey('machine.sinkjourney.trace_compute')
        .recipePool('sinkjourney:trace_compute')
        .appearance('create:copper_casing')
        .allowModifiers()
        .allowParallelism()
        .maxParallelAmount(16)
        .module()
        .register()

    // ---- 模块：逆熵冷却核心 ----
    event.createMachine('sinkjourney:trace_cooling')
        .displayNameKey('machine.sinkjourney.trace_cooling')
        .recipePool('sinkjourney:trace_cooling')
        .appearance('create:industrial_iron_block')
        .allowModifiers()
        .allowParallelism()
        .maxParallelAmount(16)
        .module()
        .register()

    // ---- 研究核心等级 ----
    event.createLevelType('sinkjourney:research_tier')
        .displayNameKey('level.sinkjourney.research_tier')
        .register()

    const tiers = [
        ['copper', 0, 'minecraft:copper_block', 0.95, 2],
        ['iron', 1, 'minecraft:iron_block', 0.85, 4],
        ['gold', 2, 'minecraft:gold_block', 0.75, 6],
        ['diamond', 3, 'minecraft:diamond_block', 0.6, 10]
    ]

    for (const [name, priority, state, duration, parallelism] of tiers) {
        event.createLevel(`sinkjourney:research_tier_${name}`)
            .type('sinkjourney:research_tier')
            .priority(priority)
            .state(state)
            .modifier(api.modifierDefinition([
                api.modifier('duration', 'input', duration, 'multiply', false),
                api.modifier('parallelism', 'machine', parallelism, 'add', false)
            ]))
            .register()
    }

    // ---- 升级模块 ----
    const upgrades = [
        ['overclock', 'kubejs:overclock_module',
            [api.modifier('duration', 'input', 0.85, 'multiply', false)]],
        ['parallel', 'kubejs:parallel_module',
            [api.modifier('parallelism', 'machine', 4, 'add', false)]],
        ['energy_saving', 'kubejs:efficiency_module',
            [api.modifier('energy', 'input', 0.8, 'multiply', false)]],
        ['thermal', 'kubejs:thermal_module',
            [
                api.modifier('duration', 'input', 0.9, 'multiply', false),
                api.modifier('energy', 'input', 0.9, 'multiply', false)
            ]]
    ]

    for (const [id, blockItem, modifiers] of upgrades) {
        event.registerModifier(`sinkjourney:${id}`, api.modifierDefinition(modifiers))
        event.registerModifierItem(blockItem, `sinkjourney:${id}`)
    }
})
