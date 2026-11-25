// ============================================================
// 石油—石化线 v4 —— G1 等级体系（startup）
// ------------------------------------------------------------
// 机器已经不在这里：石脑油加氢精制与蒸汽裂解在 v2 之后并入通用反应器
// （sinkjourney:universal_reactor 的 reactor_gas_solid 与 reactor_cracking 两个池）。
// 本文件只留等级体系——塔板、炉管、催化剂床、压缩机、真空系统，
// 通用反应器与塔器都在用。
//
// 等级体系（全部按 BASIC_ELECTRIC_AGE.md 的材料分级排）
//   furnace_tube  炉管    钢 → 钼钢 → 因科镍 → 钛
//   tray          塔板    钢 → 不锈钢 → 因科镍 → 钛
//   catalyst_bed  催化剂床 硅铝 → 分子筛 → 铂铼
//   compressor    压缩机  钢(2bar) → 不锈钢(5) → 因科镍(10) → 钛(20)
//   vacuum_system 真空系统 单级钢 → 双级不锈钢 → 蒸汽喷射
//
// 等级方块全部借用 IU 的合金块，不新造方块：
//   钢          industrialupgrade:blockresource/steel_block
//   钼钢        industrialupgrade:baseblockalloy1/molybdenum_steel
//   不锈钢      industrialupgrade:baseblockalloy/stainless_steel
//   因科镍      industrialupgrade:baseblockalloy/inconel
//   钛          industrialupgrade:baseblockingot/titanium
//   钴铬        industrialupgrade:baseblockalloy1/cobalt_chrome
//
// 结构与配方：server_scripts/industrial/reactors_v2.js
// 设计文档：kubejs/docs/OIL_LINE_V2.md、kubejs/docs/REACTOR_TYPES_PLAN.md
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    // ---- 等级类型 ----
    const TYPES = [
        ['furnace_tube', 'level.sinkjourney.furnace_tube'],
        ['tray', 'level.sinkjourney.tray'],
        ['catalyst_bed', 'level.sinkjourney.catalyst_bed'],
        ['compressor', 'level.sinkjourney.compressor'],
        ['vacuum_system', 'level.sinkjourney.vacuum_system']
    ]

    for (const [type, key] of TYPES) {
        event.createLevelType(`sinkjourney:${type}`)
            .displayNameKey(key)
            .register()
    }

    // ---- 等级定义 ----
    // [等级名, priority, 方块, 时长乘数, 能耗乘数, 并行加成]
    const LEVELS = {
        // 炉管：耐温与耐结焦，越高级裂解越深
        furnace_tube: [
            ['steel', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['molybdenum', 1, 'industrialupgrade:baseblockalloy1/molybdenum_steel', 0.85, 0.85, 2],
            ['inconel', 2, 'industrialupgrade:baseblockalloy/inconel', 0.72, 0.72, 4],
            ['titanium', 3, 'industrialupgrade:baseblockingot/titanium', 0.60, 0.60, 8]
        ],
        // 塔板：分馏精度
        tray: [
            ['steel', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['stainless', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 0.85, 0.85, 2],
            ['inconel', 2, 'industrialupgrade:baseblockalloy/inconel', 0.72, 0.72, 4],
            ['titanium', 3, 'industrialupgrade:baseblockingot/titanium', 0.60, 0.60, 8]
        ],
        // 催化剂床：活性直接换算成时长
        catalyst_bed: [
            ['silica_alumina', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['molecular_sieve', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 0.85, 0.85, 2],
            ['pt_re', 2, 'industrialupgrade:baseblockalloy1/cobalt_chrome', 0.72, 0.72, 4]
        ],
        // 压缩机：压力门槛写在配方里，这里给速度
        compressor: [
            ['steel', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['stainless', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 0.85, 0.85, 2],
            ['inconel', 2, 'industrialupgrade:baseblockalloy/inconel', 0.72, 0.72, 4],
            ['titanium', 3, 'industrialupgrade:baseblockingot/titanium', 0.60, 0.60, 8]
        ],
        // 真空系统：减压深拔
        vacuum_system: [
            ['single', 0, 'industrialupgrade:baseblockalloy/stainless_steel', 1.00, 1.00, 0],
            ['double', 1, 'industrialupgrade:baseblockalloy/inconel', 0.85, 0.85, 2],
            ['ejector', 2, 'industrialupgrade:baseblockingot/titanium', 0.72, 0.72, 4]
        ]
    }

    for (const type in LEVELS) {
        for (const [name, priority, state, duration, energy, parallel] of LEVELS[type]) {
            event.createLevel(`sinkjourney:${type}_${name}`)
                .type(`sinkjourney:${type}`)
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
})
