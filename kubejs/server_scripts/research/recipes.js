// ============================================================
// 溯洄研究阵列 —— 配方
// ------------------------------------------------------------
// 研究分三个阶段：
//   原始研究台（单方块）：纸 + 墨囊 -> 研究笔记；笔记 + 纸 -> 蓝图·原始
//   机械研究台（3x3x3）：研究笔记 -> 演算数据；刻录蓝图·蒸汽
//   溯洄研究枢纽（7x7x5 + 模块）：刻录余烬 / 星辉 / 终界蓝图
//
// 资源循环（阶段三）：
//   演算核心：研究基质 + 水 + FE -> 演算数据 + 蒸汽 + 热量
//   冷却核心：蒸汽 + FE -> 热量（把蒸汽抽走）
//   研究枢纽：空白蓝图 + 演算数据 + 时代材料 + FE -> 蓝图
// 冷却核心停转时蒸汽排不出去，演算核心会被自身产物堵死。
// ============================================================

ServerEvents.recipes(event => {
    // ---- 阶段二：机械研究台 ----
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:mechanical_lab',
        tick_time: 100,
        parallelized: true,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:research_notes' }, count: 2 },
            { type: 'minecraft:item', io: 'input', item: { item: 'minecraft:paper' }, count: 1 },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 64 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'kubejs:research_data', count: 1 } }
        ]
    }).id('kubejs:mechanical_lab/research_data')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:mechanical_lab',
        tick_time: 200,
        parallelized: true,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:blank_blueprint' }, count: 1 },
            { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:research_data' }, count: 6 },
            { type: 'minecraft:item', io: 'input', item: { item: 'create:precision_mechanism' }, count: 2 },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'kubejs:blueprint_steam', count: 1 } }
        ]
    }).id('kubejs:mechanical_lab/blueprint_steam')

    // ---- 阶段三：主机蓝图刻录 ----
    const blueprints = [
        {
            id: 'blueprint_ember',
            tier: 'copper',
            data: 16,
            materials: [{ item: 'embers:dawnstone_ingot', count: 4 }]
        },
        {
            id: 'blueprint_radiance',
            tier: 'iron',
            data: 24,
            materials: [{ item: 'astralsorcery:starmetal_ingot', count: 4 }]
        },
        {
            id: 'blueprint_end',
            tier: 'gold',
            data: 32,
            materials: [
                { item: 'minecraft:ender_eye', count: 2 },
                { item: 'minecraft:popped_chorus_fruit', count: 8 }
            ]
        }
    ]

    // 每条配方单独构建，避免循环体内 const 数组被 Rhino 复用
    const addBlueprintRecipe = (job) => {
        const requirements = [
            {
                type: 'mmcr:level',
                io: 'input',
                level_type: 'sinkjourney:research_tier',
                level: `sinkjourney:research_tier_${job.tier}`
            },
            { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:blank_blueprint' }, count: 1 },
            { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:research_data' }, count: job.data }
        ]

        for (const material of job.materials) {
            requirements.push({
                type: 'minecraft:item', io: 'input',
                item: { item: material.item }, count: material.count
            })
        }

        requirements.push(
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 512 },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: { id: `kubejs:${job.id}`, count: 1 }
            }
        )

        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:trace_nexus',
            tick_time: 200,
            parallelized: true,
            requirements: requirements
        }).id(`kubejs:trace_nexus/${job.id}`)
    }

    for (const job of blueprints) {
        addBlueprintRecipe(job)
    }

    // ---- 演算核心：持续消耗基质与水，产出数据并排热 ----
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:trace_compute',
        tick_time: 100,
        required_host_ids: ['sinkjourney:trace_nexus'],
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:research_substrate' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 500 },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'kubejs:research_data', count: 2 } },
            {
                type: 'mekanism:chemical', io: 'output', kind: 'chemical',
                id: 'mekanism:steam', amount: 500
            },
            { type: 'mekanism:heat', io: 'output', value: 80 }
        ]
    }).id('kubejs:trace_compute/research_data')

    // ---- 冷却核心：抽走蒸汽并排热 ----
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:trace_cooling',
        tick_time: 100,
        required_host_ids: ['sinkjourney:trace_nexus'],
        requirements: [
            {
                type: 'mekanism:chemical', io: 'input', kind: 'chemical',
                id: 'mekanism:steam', amount: 500
            },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 64 },
            { type: 'mekanism:heat', io: 'output', value: 160 }
        ]
    }).id('kubejs:trace_cooling/condense_steam')

    // ---- 阶段一：原始研究台 ----
    event.shaped('kubejs:primitive_research_table', [
        'PPP',
        'WIW',
        'WWW'
    ], {
        P: 'minecraft:paper',
        W: '#minecraft:planks',
        I: 'minecraft:ink_sac'
    }).id('kubejs:sink_research/primitive_research_table')

    // ---- 机器控制器 ----
    // 控制器物品 id = mmcr:<机器路径>_controller
    event.shaped('mmcr:mechanical_lab_controller', [
        'BSB',
        'SCS',
        'BSB'
    ], {
        B: 'create:brass_sheet',
        S: 'create:andesite_casing',
        C: 'kubejs:blueprint_primitive'
    }).id('kubejs:sink_research/mechanical_lab')

    const addModuleController = (machine, casing) => {
        event.shaped(`mmcr:${machine}_controller`, [
            'BCB',
            'BSB',
            'BBB'
        ], {
            B: casing,
            S: 'create:precision_mechanism',
            C: 'kubejs:blueprint_steam'
        }).id(`kubejs:sink_research/${machine}`)
    }

    addModuleController('trace_nexus', 'mmcr:basic_casing')
    addModuleController('trace_compute', 'create:copper_casing')
    addModuleController('trace_cooling', 'create:industrial_iron_block')

    // ---- 基础物品 ----
    event.shaped('2x kubejs:blank_blueprint', [
        'PPP',
        'PIP',
        'PPP'
    ], {
        P: 'minecraft:paper',
        I: 'minecraft:ink_sac'
    }).id('kubejs:sink_research/blank_blueprint')

    event.shaped('4x kubejs:research_substrate', [
        'AGA',
        'GPG',
        'AGA'
    ], {
        A: 'minecraft:amethyst_shard',
        G: 'minecraft:glowstone_dust',
        P: 'minecraft:paper'
    }).id('kubejs:sink_research/research_substrate')

    // ---- 升级模块：每种蓝图解锁一种 ----
    const addUpgradeModule = (module, side, blueprint) => {
        event.shaped(`kubejs:${module}`, [
            'BSB',
            'SCS',
            'BSB'
        ], {
            B: 'create:brass_sheet',
            S: side,
            C: blueprint
        }).id(`kubejs:sink_research/${module}`)
    }

    addUpgradeModule('overclock_module', 'minecraft:redstone_block', 'kubejs:blueprint_steam')
    addUpgradeModule('parallel_module', 'create:precision_mechanism', 'kubejs:blueprint_ember')
    addUpgradeModule('thermal_module', 'minecraft:magma_block', 'kubejs:blueprint_radiance')
    addUpgradeModule('efficiency_module', 'minecraft:lapis_block', 'kubejs:blueprint_end')
})
