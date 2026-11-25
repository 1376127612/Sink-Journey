// ============================================================
// 化学反应釜（六档）—— 机器注册
// ------------------------------------------------------------
//   sinkjourney:chemical_reactor_kinetic     机动     并行 1
//   sinkjourney:chemical_reactor_steam       蒸汽     并行 2
//   sinkjourney:chemical_reactor_basic       IU 基础  并行 2
//   sinkjourney:chemical_reactor_improved    IU 改良  并行 4
//   sinkjourney:chemical_reactor_advanced    IU 高级  并行 6
//   sinkjourney:chemical_reactor_perfect     IU 完美  并行 8
//
// 仓的阶梯是「两个早期时代 + IU 四档机器等级」：
//
//   档位   物品 / 流体仓        能量仓              单档并行
//   机动   mmcr:*_kinetic      energy_input_hatch_small      1
//   蒸汽   mmcr:*_steam        energy_input_hatch            2
//   IU 基础 mmcr:*_basic        energy_input_hatch_reinforced 2
//   IU 改良 mmcr:*_improved     energy_input_hatch_big        4
//   IU 高级 mmcr:*_advanced     energy_input_hatch_huge       6
//   IU 完美 mmcr:*_perfect      energy_input_hatch_ludicrous  8
//
// 前两档是原本那套时代仓；后面四档是照 IU 自己的机器等级
// （基础 → 改良 → 高级 → 完美，basemachine → …per）另注册的一套仓，
// 容量接在蒸汽之后继续往上：32k → 64k → 128k → 256k。
//
// 六台共用六个配方池（按工艺类别分，JEI 一池一页签）：
//   recycle 氯循环 / polymer 聚合与固化 / leach 浸出与腐蚀 /
//   gas 气体合成 / liquid 液相反应 / solid 固相合成
// 升级只换机器，配方不翻倍。
// 并行的意义在批量：氯回收一次吃 3000 mB 四氯化硅，并行 8 就是 24000 mB，
// 所以「想要多大吞吐」和「能做到哪一档的仓」是同一件事。
//
// 釜自身的机制（v2 起）：
//   气压接口   加压液相反应（聚合 5 bar、加氢 10 bar）要在釜里压着做
//   搅拌槽     桨式 → 涡轮 → 螺带，高黏聚合与硝化要涡轮，浸出要桨式
//   衬里槽     搪玻璃 → 不锈钢 → 钛，酸介质、混酸、氯介质各自要耐蚀衬里
// 三条都在 server 脚本的结构里有固定位置，配方写 mmcr:level / pneumaticcraft:air 门槛。
//
// 结构 / 配方：server_scripts/industrial/chemical_reactor.js
// 设计文档：kubejs/docs/CHEMICAL_REACTOR.md
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    const GRADES = [
        ['kinetic', 'create:brass_casing', 1],
        ['steam', 'industrialupgrade:blockresource/steel_block', 2],
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', 2],
        ['improved', 'industrialupgrade:baseblockalloy/inconel', 4],
        ['advanced', 'industrialupgrade:baseblockingot/titanium', 6],
        ['perfect', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 8]
    ]

    for (const [id, casing, parallel] of GRADES) {
        event.createMachine('sinkjourney:chemical_reactor_' + id)
            .displayNameKey('machine.sinkjourney.chemical_reactor_' + id)
            .recipePool(
                'sinkjourney:chemical_reactor_recycle',
                'sinkjourney:chemical_reactor_polymer',
                'sinkjourney:chemical_reactor_leach',
                'sinkjourney:chemical_reactor_gas',
                'sinkjourney:chemical_reactor_liquid',
                'sinkjourney:chemical_reactor_solid'
            )
            .appearance(casing)
            .allowModifiers()
            .allowParallelism()
            .maxParallelAmount(parallel)
            .register()
    }

    // ---- 釜的内件：搅拌与衬里 ----
    const TYPES = [
        ['agitator', 'level.sinkjourney.agitator'],
        ['lining', 'level.sinkjourney.lining']
    ]

    for (const [type, key] of TYPES) {
        event.createLevelType('sinkjourney:' + type)
            .displayNameKey(key)
            .register()
    }

    // [等级名, priority, 方块, 时长乘数, 能耗乘数, 并行加成]
    // 搅拌越快传质越好；衬里只决定能不能耐住介质，不改动力学
    const LEVELS = {
        agitator: [
            ['paddle', 0, 'industrialupgrade:blockresource/steel_block', 1.00, 1.00, 0],
            ['turbine', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 0.85, 0.85, 2],
            ['ribbon', 2, 'industrialupgrade:baseblockalloy/inconel', 0.72, 0.72, 4]
        ],
        lining: [
            ['glass', 0, 'industrialupgrade:blockresource/tempered_glass', 1.00, 1.00, 0],
            ['stainless', 1, 'industrialupgrade:baseblockalloy/stainless_steel', 1.00, 1.00, 0],
            ['titanium', 2, 'industrialupgrade:baseblockingot/titanium', 1.00, 1.00, 0]
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

    console.info('[化工] 化学反应釜六档已注册：机动 / 蒸汽 / IU 基础 / 改良 / 高级 / 完美（搅拌 3 级 / 衬里 3 级）')
})
