// ============================================================
// 化工迁移：IU 反应釜 / 腐蚀釜类机器的配方全部搬到 MMCR 化学反应釜
// ------------------------------------------------------------
// IU 侧这九个池子整池封禁（`kubejs/sjcore/iu_chem.json` 的 op=clear）：
//
//   gas_combiner            气体混合器
//   fluid_mixer             流体反应釜
//   solid_fluid_mixer       固液反应釜 / 蒸汽固液反应釜（同一池）
//   polymerizer             高分子聚合器
//   solid_fluid_integrator  液体固化反应釜
//   solid_mixer             固体反应釜
//   triple_solid_mixer      三重固态反应釜
//   fluid_integrator        流式腐蚀釜
//   gas_chamber             气体混合室（原始时代那台，池名就是 gas_chamber）
//
// 原型流式腐蚀釜（primal_fluid_integrator）**不在这批里**：那是原始时代的手工浸渍机，
// 原始章的出口任务就挂在它身上，禁掉会把「工业之始」整章的入口断在还没法造釜的年代。
//
// 封禁之前，这里把池子里的每一条配方原样重建到 sinkjourney:chemical_reactor：
// 料与产物的比例、数量都不动，只换机器与能耗口径。IU 那几台都是 1 EU/t × 100 tick，
// 这里统一换成 192 FE/t × 100 tick（固体反应釜 128 FE/t、三重固态 192 FE/t × 200 tick）——
// 迁移改的是产能与门槛，不改化学。
//
// 釜的内件门槛（v2）：南墙三个口给了釜三种机制，迁进来的配方按现实挂上去——
//   气压     聚合 5 bar（浆液聚合）、乙烯/丁二烯/醛/苯的加氢 10 bar
//   搅拌     聚合与混酸硝化要涡轮，硫酸浸出要桨式
//   衬里     硫酸浸出用搪玻璃，混酸硝化用不锈钢，氯介质与氟化氢用钛
// 门槛只加在配方上，料耗与产物一个不动。
//
// 不迁移的：
//   1. 乙炔 + 氢 -> 乙烯、丙烷 + 溴 -> 二溴丙烷，以及腐蚀釜里的二溴丙烷 + 锌 -> 丙烯：
//      本包石油线刻意删掉的塑料捷径，见 docs/OIL_LINE.md「删掉了什么」。
//   2. 与现有化学同式、且已经搬到通用反应器上的几条：
//      氨合成（N2 + 3H2）、硝酸吸收（NO2 + 水）、氨氧化（NH3 + O2）去了 reactors_v2.js 的
//      高压合成池与塔器池；CO + H2 -> 甲醇、SO2 + O2 -> SO3、SO3 + 水 -> 硫酸同理。
//      同一反应不摆两遍，大产量交给并行，门槛交给通用反应器。
//   3. 气体混合室（gas_chamber）池内 5 条一条都没迁：两条是上面那类捷径，
//      H2S 氧化与 SO2 氧化跟反应釜重复，SO3 + 蒸汽 -> 硫酸只是吸收剂从水换成蒸汽。
//      封它主要是堵「乙炔 + 氢 -> 乙烯」这条绕开石油线的口子。
//
// 结构上多一个物品输出口（六档釜的 y2 西墙），所以改完要**重启**一次，
// 老的釜补一个物品输出总线即可重新组起来。
// 挨了封禁的 IU 机器一并从合成表与 JEI 里拿掉（server_scripts/bans/iu_useless_chem_machines.js）。
// 设计文档：kubejs/docs/CHEMICAL_REACTOR.md
// ============================================================

ServerEvents.recipes(event => {
    // 配方池按「工艺类别」拆开，JEI 就会按池各自出一个页签给反应釜：
    //   polymer  聚合与固化   gas      气体合成
    //   leach    浸出与腐蚀   liquid   液相反应
    //   solid    固相合成     recycle  氯循环
    // 拆池的判定放在一处，加一条迁移配方不用再手写池名。
    const poolOf = id => {
        if (id.indexOf('/iu_polymerizer/') >= 0 || id.indexOf('/iu_solid_fluid_integrator/') >= 0) {
            return 'sinkjourney:chemical_reactor_polymer'
        }
        if (id.indexOf('/iu_solid_fluid_mixer/') >= 0 || id.indexOf('/iu_fluid_integrator/') >= 0) {
            return 'sinkjourney:chemical_reactor_leach'
        }
        if (id.indexOf('/iu_solid_mixer/') >= 0 || id.indexOf('/iu_triple_solid_mixer/') >= 0) {
            return 'sinkjourney:chemical_reactor_solid'
        }
        if (id.indexOf('/iu_fluid_mixer/') >= 0) {
            return 'sinkjourney:chemical_reactor_liquid'
        }
        return 'sinkjourney:chemical_reactor_gas'
    }

    const recipe = (id, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: poolOf(id),
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }


    // ---- 气体混合器（IU gas_combiner，池内 37 条） ----
    recipe('kubejs:chem_reactor/iu_gas_combiner/1', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcreosote' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpetroleum' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidindustrialoil', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/2', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcreosote' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsweet_medium_oil' }, amount: 800 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidindustrialoil', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/3', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcreosote' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsweet_heavy_oil' }, amount: 600 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidindustrialoil', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/4', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcreosote' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsour_light_oil' }, amount: 1100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidindustrialoil', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/5', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcreosote' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsour_medium_oil' }, amount: 1300 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidindustrialoil', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/6', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidfluor' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidfluorhyd', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/7', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcreosote' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsour_heavy_oil' }, amount: 1500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidindustrialoil', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/8', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbiomass' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidglucose', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/9', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogensulfide' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidoxygen' }, amount: 300 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsulfuroxide', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/11', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitrogenoxy' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidoxygen' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogendioxide', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/13', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_turbine' },
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtoluene' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitricacid' }, amount: 600 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidtrinitrotoluene', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/14', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 10.0 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidethane', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/15', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidethanol', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/16', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpolybutadiene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpolyacrylonitrile' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidbutadiene_nitrile', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/17', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogenchloride' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidchloroethane', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/18', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidchlorum' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogenchloride', amount: 400 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/19', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidgasoline' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtetraethyllead' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpetrol90', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/20', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpetrol90' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtetraethyllead' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpetrol95', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/21', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 10.0 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbutadiene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidbutene', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/22', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbutene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsulfuricacid' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidtertbutylsulfuricacid', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/23', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidisobutylene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethanol' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidtertbutylmethylether', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/24', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpetrol95' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtertbutylmethylether' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpetrol100', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/25', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpetrol100' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtertbutylmethylether' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpetrol105', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/26', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 10.0 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethylpentanal' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidethylhexanol', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/27', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethylcyclohexylnitrate' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluiddiesel' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluida_diesel', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/28', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethylcyclohexylnitrate' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluida_diesel' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidaa_diesel', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/29', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 10.0 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbenzene' }, amount: 300 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 900 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidcyclohexane', amount: 300 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/30', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcyclohexane' }, amount: 300 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitricacid' }, amount: 300 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethylcyclohexylnitrate', amount: 300 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/31', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylhexylnitrate' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidaa_diesel' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidaaa_diesel', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_gas_combiner/32', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylhexylnitrate' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidaaa_diesel' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidaaaa_diesel', amount: 500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 流体反应釜（IU fluid_mixer，池内 16 条） ----
    recipe('kubejs:chem_reactor/iu_fluid_mixer/1', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitricoxide' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogen', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/3', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethane' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbromine' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogenbromide', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethylbromide', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/4', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpropionic_acid' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogen', amount: 500 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidacetic_acid', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/5', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_titanium' },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidaniline' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidchlorum' }, amount: 300 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidtrichloroaniline', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogenchloride', amount: 150 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/6', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethylsulfate' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtrichloroaniline' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethyltrichloroaniline', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsulfuricacid', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/7', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethanol' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethyltrichloroaniline' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidweed_ex', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethylchloride', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/8', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethanol' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsulfuricacid' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethylsulfate', amount: 250 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/9', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbenzene' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethylbromide' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogenbromide', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidtoluene', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/10', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpolyprop' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitrogenoxy' }, amount: 600 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidacrylonitrile', amount: 400 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogen', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/11', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidtertbutylsulfuricacid' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidtertbutylalcohol', amount: 400 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsulfuricacid', amount: 400 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/12', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylhexanol' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitricacid' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidethylhexylnitrate', amount: 400 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 400 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/13', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcyclohexane' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethylbromide' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmethylcyclohexane', amount: 400 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogenbromide', amount: 400 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/14', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsodiumhydroxide' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidchlorum' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsodium_hypochlorite', amount: 500 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/15', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitrogenhydride' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsodium_hypochlorite' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrazine', amount: 250 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_mixer/16', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmethanol' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrazine' }, amount: 250 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluiddimethylhydrazine', amount: 250 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 固液反应釜 / 蒸汽固液反应釜（IU solid_fluid_mixer，池内 7 条） ----
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/1', 100, [
            { type: 'minecraft:item', io: 'input', item: { tag: 'c:dusts/coal' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitricoxide' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogen', amount: 200 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidcarbondioxide', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/2', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_paddle' },
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_glass' },
            { type: 'minecraft:item', io: 'input', item: { item: 'minecraft:copper_ingot' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsulfuricacid' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidcoppersulfate', amount: 200 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 50 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/3', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_titanium' },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/iron_chloride_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbenzene' }, amount: 200 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidmonochlorobenzene', amount: 150 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogenchloride', amount: 50 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/4', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:smalldust/sulfur' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidwastesulfuricacid' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsulfurtrioxide', amount: 100 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 25 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/5', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/sulfur_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidwastesulfuricacid' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsulfurtrioxide', amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/6', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/sodium_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsodiumhydroxide', amount: 250 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogen', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_mixer/7', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:crafting_elements/crafting_295_element' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsteam_oil', amount: 500 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidoxygen', amount: 125 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 高分子聚合器（IU polymerizer，池内 6 条） ----
    recipe('kubejs:chem_reactor/iu_polymerizer/1', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 5.0 },
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_turbine' },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidethylene' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpolyeth', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_polymerizer/2', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 5.0 },
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_turbine' },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpropylene' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpolyprop', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_polymerizer/3', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidacetylene' }, amount: 900 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidbenzene', amount: 300 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_polymerizer/4', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 5.0 },
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_turbine' },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidbutadiene' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpolybutadiene', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_polymerizer/5', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 5.0 },
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_turbine' },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidacrylonitrile' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidpolyacrylonitrile', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_polymerizer/6', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhoney' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidbiomass', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 液体固化反应釜（IU solid_fluid_integrator，池内 5 条） ----
    recipe('kubejs:chem_reactor/iu_solid_fluid_integrator/1', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitrogenhydride' }, amount: 135 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidchlorum' }, amount: 100 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/ammonium_chloride_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogen', amount: 10 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_integrator/2', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitrogenhydride' }, amount: 400 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmonochlorobenzene' }, amount: 200 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/ammonium_chloride_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidaniline', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_integrator/3', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidmotoroil' }, amount: 500 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcoolant' }, amount: 500 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:cooling_mixture', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogen', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_integrator/4', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidoxygen' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpolyprop' }, amount: 250 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crafting_elements/crafting_484_element', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidcarbonmonoxide', amount: 50 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_solid_fluid_integrator/5', 100, [
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidoxygen' }, amount: 100 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidpolyeth' }, amount: 250 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crafting_elements/crafting_483_element', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidcarbonmonoxide', amount: 50 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 固体反应釜（IU solid_mixer，池内 1 条） ----
    recipe('kubejs:chem_reactor/iu_solid_mixer/1', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/ammonium_chloride_dust' }, count: 1 },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/silver_nitrate_dust' }, count: 1 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/silver_chloride_dust', count: 1 } },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crafting_elements/crafting_461_element', count: 3 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 128 }
    ])

    // ---- 三重固态反应釜（IU triple_solid_mixer，池内 3 条） ----
    recipe('kubejs:chem_reactor/iu_triple_solid_mixer/1', 200, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/calcium_phosphate_dust' }, count: 2 },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/silicon_dust' }, count: 6 },
            { type: 'minecraft:item', io: 'input', item: { tag: 'c:dusts/coal' }, count: 10 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/calcium_silicate_dust', count: 6 } },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:white_phosphorus', count: 1 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_triple_solid_mixer/2', 200, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:nuclearresource/unprocessed_radioactive_uranium' }, count: 1 },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/polonium_dust' }, count: 3 },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/silver_nitrate_dust' }, count: 1 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crushed/uranium', count: 1 } },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/stone_dust', count: 1 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_triple_solid_mixer/3', 200, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/silicon_dioxide_dust' }, count: 2 },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/zirconium_dust' }, count: 1 },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:crafting_elements/crafting_499_element' }, count: 3 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:graphene', count: 1 } },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/sulfur_dust', count: 1 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 流式腐蚀釜（IU fluid_integrator，池内 16 条） ----
    recipe('kubejs:chem_reactor/iu_fluid_integrator/1', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:crafting_elements/crafting_482_element' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 200 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/slaked_lime_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidacetylene', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/2', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'minecraft:stone' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidblackoil' }, amount: 100 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:blockresource/asphalt', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidcarbonmonoxide', amount: 20 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/3', 100, [
            { type: 'minecraft:item', io: 'input', item: { tag: 'c:dusts/coal' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhydrogen' }, amount: 200 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crafting_elements/crafting_498_element', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'minecraft:water', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/4', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/aluminumsulfide_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 300 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:smalldust/aluminium', count: 4 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogensulfide', amount: 150 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/5', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:wolframite' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidquartz' }, amount: 90 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:blockresource/tempered_glass', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidoxygen', amount: 20 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/6', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:heavyore/pyrite' }, count: 4 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidoxygen' }, amount: 1100 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:smalldust/iron', count: 10 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidsulfuroxide', amount: 800 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/7', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'minecraft:sand' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidconstruction_foam' }, amount: 500 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:blockresource/reinforced_stone', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhot_water', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/8', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:crafting_elements/crafting_489_element' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidcoppersulfate' }, amount: 250 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crafting_elements/crafting_487_element', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidwastesulfuricacid', amount: 250 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/9', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:crafting_elements/crafting_492_element' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 250 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:crafting_elements/crafting_493_element', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidhydrogen', amount: 50 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/10', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'minecraft:dirt' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidhoney' }, amount: 1000 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'minecraft:mycelium', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidoxygen', amount: 75 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/11', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemingots/silver_ingot' }, count: 4 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidnitricacid' }, amount: 200 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/silver_nitrate_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidnitrogendioxide', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    // 萤石 + 浓硫酸 -> 硫酸钙 + 氟化氢。现实里这一步用蒙乃尔合金或铅衬转炉：
    // 搪玻璃会被 HF 吃掉，钛遇 HF 是剧烈反应，不锈钢也只是三种里最不坏的选择。
    recipe('kubejs:chem_reactor/iu_fluid_integrator/12', 100, [
            { type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_stainless' },
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/calcium_fluoride_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'industrialupgrade:iufluidsulfuricacid' }, amount: 200 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/calcium_sulfate_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidfluorhyd', amount: 200 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/13', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/sodium_phosphate_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 100 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/sodium_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidorthophosphoricacid', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/14', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/potassium_phosphate_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 100 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/potassium_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidorthophosphoricacid', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])
    recipe('kubejs:chem_reactor/iu_fluid_integrator/15', 100, [
            { type: 'minecraft:item', io: 'input', item: { item: 'industrialupgrade:itemdust/calcium_phosphate_dust' }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: 'minecraft:water' }, amount: 100 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'industrialupgrade:itemdust/calcium_dust_dust', count: 1 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: 'industrialupgrade:iufluidorthophosphoricacid', amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
    ])

    // ---- 气体混合室（IU gas_chamber，池内 5 条） ----
    // 这一池没有需要迁的：不是石油线捷径，就是反应釜已有同式反应

    console.info('[化工] IU 反应釜配方已迁到 MMCR 化学反应釜：气体混合器 32 条 / 流体反应釜 16 条 / 固液反应釜 / 蒸汽固液反应釜 7 条 / 高分子聚合器 6 条 / 液体固化反应釜 5 条 / 固体反应釜 1 条 / 三重固态反应釜 3 条 / 流式腐蚀釜 15 条 / 气体混合室 0 条')
})
