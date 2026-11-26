// ============================================================
// 电解 —— 结构、配方、控制器（server）
// ------------------------------------------------------------
// 机器注册见 startup_scripts/industrial/electrolysis.js。
//
// 水溶液电解（电积 / 电解精炼 / 氯碱）已经迁到核电工艺的电解池：
// 配方在 kubejs/data/nuclearcraftneohaul/recipe/multiblock_electrolyzer/，
// 阳极 / 阴极 / 隔膜 / 电解液在 kubejs/data/nuclearcraftneohaul/data_maps/。
// 本文件只剩熔盐电解槽、釜里的湿法辅助段，以及整流器方块。
//
// 熔盐槽结构（控制器朝南；阳极在上、阴极在下、内衬居中、整流在底）：
//
//   y0  XCX      C = 控制器（北墙中层）
//       XXX
//       XXX
//   y1  XGX      G = 本档流体输出仓（北墙，氯气 / CO2）
//       XXX
//       XXX
//   y2  XAX      A = 阳极槽（南墙中）  H = 物品输出总线（西墙）
//       HXL      L = 内衬槽（南墙东角）K = 阴极槽（南墙西角）
//       XKX
//   +N  XXX      （高级档多一层空壳）
//       XXX
//       XFX      F/J = 本档流体输入仓（北墙 / 东墙）
//       IXJ      I   = 本档物品输入总线（西墙，熔盐料）
//       XXX
//       XEX      E = 本档能量输入仓
//       XXX
//       XRX      R = 整流槽（南墙中）
//
// 配方池：electrolysis_fused。
//
// 内件只做 modifier，不在配方里写死等级：
//   裸槽 → 石墨阳极 / 钢阴极 / 耐火内衬 → 惰性阳极 + 钼阴极 + 碳内衬 + 晶闸管。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    // ---- 熔盐电解槽 ----
    //   集气罩在最上一层的北墙，电解室居中，熔盐与物料从下一层进，底部是能量与整流。
    const MS_GRADES = [
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', 'advanced', 'mmcr:energy_input_hatch_huge', 0],
        ['advanced', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 'perfect', 'mmcr:energy_input_hatch_ludicrous', 1]
    ]

    const registerMolten = (id, casing, era, energy, padding) => {
        var structureId = 'sinkjourney:molten_salt_cell_' + id

        var layers = [
            ['XCX', 'XXX', 'XXX'],
            ['XGX', 'XXX', 'XXX'],
            ['XAX', 'HXL', 'XKX']
        ]
        for (var pi = 0; pi < padding; pi++) layers.push(['XXX', 'XXX', 'XXX'])
        layers.push(['XFX', 'IXJ', 'XXX'])
        layers.push(['XEX', 'XXX', 'XRX'])

        try {
            var built = event.createStructure(structureId)
            for (var li = 0; li < layers.length; li++) built.pattern(layers[li])

            built
                .set('X', api.block(casing))
                .set('I', 'mmcr:item_input_bus_' + era)
                .set('H', 'mmcr:item_output_bus_' + era)
                .set('F', 'mmcr:fluid_input_hatch_' + era)
                .set('J', 'mmcr:fluid_input_hatch_' + era)
                .set('G', 'mmcr:fluid_output_hatch_' + era)
                .set('E', energy)
                .set('A', api.levelSlot('sinkjourney:ms_anode'))
                .set('K', api.levelSlot('sinkjourney:ms_cathode'))
                .set('L', api.levelSlot('sinkjourney:ms_lining'))
                .set('R', api.levelSlot('sinkjourney:ms_rectifier'))
                .controller('C')
                .build()
        } catch (err) {
            console.warn('[电解] 结构 ' + structureId + ' 本次没有重新注册（同一会话里已注册过，重启生效）：' + err)
        }
    }

    for (var mi = 0; mi < MS_GRADES.length; mi++) {
        registerMolten(MS_GRADES[mi][0], MS_GRADES[mi][1], MS_GRADES[mi][2], MS_GRADES[mi][3], MS_GRADES[mi][4])
    }
})

ServerEvents.recipes(event => {
    const H2SO4 = 'industrialupgrade:iufluidsulfuricacid'
    const CU_SO4 = 'industrialupgrade:iufluidcoppersulfate'
    const NI_SO4 = 'kubejs:nickel_sulfate'
    const ZN_SO4 = 'kubejs:zinc_sulfate'
    const CO_SO4 = 'kubejs:cobalt_sulfate'
    const O2 = 'industrialupgrade:iufluidoxygen'
    const H2 = 'industrialupgrade:iufluidhydrogen'
    const CL2 = 'industrialupgrade:iufluidchlorum'

    const SALT = 'kubejs:sodium_chloride'
    const BRINE = 'kubejs:brine'
    const ZRCL4 = 'kubejs:zirconium_chloride'
    const WATER = 'minecraft:water'
    const SLIME = 'kubejs:anode_slime'
    const SE = 'kubejs:selenium_dust'

    // ---- 熔盐槽控制器 ----
    const MS_CONTROLLERS = [
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', { tag: 'c:plates/steel' }],
        ['advanced', 'industrialupgrade:baseblockalloy1/cobalt_chrome', { item: 'industrialupgrade:itemplates/titanium_plate' }]
    ]

    for (const [id, casing, plate] of MS_CONTROLLERS) {
        event.shaped('mmcr:molten_salt_cell_' + id + '_controller', [
            'PCP',
            'CSC',
            'PCP'
        ], {
            P: casing,
            C: plate,
            S: 'create:precision_mechanism'
        }).id('kubejs:electrolysis/' + id + '_molten_controller')
    }

    const itemIn = (item, count) => ({ type: 'minecraft:item', io: 'input', item: { item: item }, count: count })
    const itemOut = (item, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: item, count: count } })
    const fluidIn = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: { fluid: fluid }, amount: amount })
    const fluidOut = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: fluid, amount: amount } })
    const fe = (perTick) => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: perTick })

    const add = (id, pool, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:' + pool,
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }

    // ---- 熔盐电解：铝 / 镁 / 钕 ----
    // 槽电压 4.2 V（铝）、6 V（镁）、REF3-LiF（钕），能耗口径见 docs/ELECTROLYSIS_LINE.md §7。
    add('kubejs:electrolysis/fused/aluminium', 'electrolysis_fused', 2400, [
        itemIn('kubejs:aluminium_oxide', 8),
        itemIn('kubejs:cryolite', 1),
        itemIn('industrialupgrade:itemdust/coal_dust', 1),
        itemOut('industrialupgrade:itemingots/aluminium_ingot', 4),
        fluidOut('industrialupgrade:iufluidcarbondioxide', 2000),
        fe(42)
    ])

    add('kubejs:electrolysis/fused/magnesium', 'electrolysis_fused', 2800, [
        itemIn('kubejs:magnesium_chloride', 8),
        itemOut('industrialupgrade:itemdust/magnesium_dust', 4),
        fluidOut(CL2, 4000),
        fe(41)
    ])

    add('kubejs:electrolysis/fused/neodymium', 'electrolysis_fused', 3000, [
        itemIn('kubejs:prnd_fluoride', 5),
        itemIn('industrialupgrade:itemdust/coal_dust', 1),
        itemOut('industrialupgrade:itemdust/neodymium_dust', 5),
        fluidOut('industrialupgrade:iufluidcarbondioxide', 1500),
        fe(36)
    ])

    // ---- R4 浸出段：粉 + 硫酸（+ 氧）-> 硫酸盐液 ----
    // 这是"选别出粉"之后的湿法入口：粉 2 -> 液 2,000（1,000 mB/锭），收率不变，
    // 它买到的是 R5 的电积资格（阳极泥、酸再生、4N）与酸闭路。
    // 硫的回收（焙烧 -> SO₂ -> 硫酸）要等硫化精矿物品，见 docs/ORE_UNIVERSAL_LINE.md §10。
    add('kubejs:chem_reactor/leach/copper', 'chemical_reactor_leach', 240, [
        itemIn('industrialupgrade:itemdust/copper_dust', 2),
        fluidIn(H2SO4, 1000),
        fluidIn(O2, 500),
        fluidOut(CU_SO4, 2000),
        fe(80)
    ])

    add('kubejs:chem_reactor/leach/nickel', 'chemical_reactor_leach', 260, [
        itemIn('industrialupgrade:itemdust/nickel_dust', 2),
        fluidIn(H2SO4, 1000),
        fluidIn(O2, 500),
        fluidOut(NI_SO4, 2000),
        fe(88)
    ])

    add('kubejs:chem_reactor/leach/cobalt', 'chemical_reactor_leach', 260, [
        itemIn('industrialupgrade:itemdust/cobalt_dust', 2),
        fluidIn(H2SO4, 1000),
        fluidIn(O2, 500),
        fluidOut(CO_SO4, 2000),
        fe(88)
    ])

    add('kubejs:chem_reactor/leach/zinc', 'chemical_reactor_leach', 220, [
        itemIn('industrialupgrade:itemdust/zinc_dust', 2),
        fluidIn(H2SO4, 1000),
        fluidOut(ZN_SO4, 2000),
        fluidOut(H2, 1000),
        fe(72)
    ])

    add('kubejs:chem_reactor/leach/cadmium', 'chemical_reactor_leach', 220, [
        itemIn('industrialupgrade:itemdust/cadmium_dust', 2),
        fluidIn(H2SO4, 1000),
        fluidOut('kubejs:cadmium_sulfate', 2000),
        fluidOut(H2, 1000),
        fe(72)
    ])

    add('kubejs:chem_reactor/leach/manganese', 'chemical_reactor_leach', 240, [
        itemIn('industrialupgrade:itemdust/manganese_dust', 2),
        fluidIn(H2SO4, 1000),
        fluidOut('kubejs:manganese_sulfate', 2000),
        fluidOut(H2, 1000),
        fe(80)
    ])

    // ---- 氯碱与氯化物：把氯从"一次性耗材"变成闭环 ----
    // 氯化钠：钠 + 氯直接合成（现实里也是这个反应，工业上则来自岩盐/海水）
    add('kubejs:chem_reactor/chloralkali/salt', 'chemical_reactor_leach', 180, [
        itemIn('industrialupgrade:itemdust/sodium_dust', 2),
        fluidIn(CL2, 1000),
        itemOut(SALT, 2),
        fe(64)
    ])

    // 精制盐水：电解食盐水前的溶解与精制（钙镁杂质抽象成石粉）
    add('kubejs:chem_reactor/chloralkali/brine', 'chemical_reactor_leach', 120, [
        itemIn(SALT, 2),
        fluidIn(WATER, 2000),
        fluidOut(BRINE, 2000),
        itemOut('industrialupgrade:itemdust/stone_dust', 1),
        fe(32)
    ])

    // 四氯化氯化锆：锆 + 氯（工业上由 ZrO2 氯化，这里用金属粉直接氯化，省掉锆英石）
    add('kubejs:chem_reactor/zrcl4', 'chemical_reactor_leach', 300, [
        itemIn('industrialupgrade:itemdust/zirconium_dust', 2),
        fluidIn(CL2, 2000),
        itemOut(ZRCL4, 2),
        fe(112)
    ])

    // ---- 熔盐：钠 / 锆 ----
    add('kubejs:electrolysis/fused/sodium', 'electrolysis_fused', 2400, [
        itemIn(SALT, 8),
        itemOut('industrialupgrade:itemdust/sodium_dust', 4),
        fluidOut(CL2, 4000),
        fe(33)
    ])

    add('kubejs:electrolysis/fused/zirconium', 'electrolysis_fused', 4000, [
        itemIn(ZRCL4, 5),
        itemIn('industrialupgrade:itemdust/coal_dust', 1),
        itemOut('industrialupgrade:itemdust/zirconium_dust', 5),
        fluidOut(CL2, 2500),
        fe(45)
    ])

    // ---- 阳极泥分硒：硒粉 + 铂族精矿（接 PGM_LINE 的王水段）----
    add('kubejs:chem_reactor/anode_slime/selenium', 'chemical_reactor_leach', 240, [
        itemIn(SLIME, 2),
        fluidIn(H2SO4, 1000),
        fluidIn(O2, 500),
        itemOut(SE, 1),
        itemOut('kubejs:pgm_concentrate', 1),
        fe(96)
    ])

    // ---- 核电工艺电解池的本包化：控制器、端子、外壳与三种端口 ----
    // NC 原配方吃 machine_chassis / hard_carbon_alloy / sintered_steel / servomechanism，
    // 整条链要硼与锂的核工艺线，会把电解（电力时代 R5）推到核电章节后面。
    // 这里只改电解池用得到的那几件，换成钢、青铜、不锈钢与精密机构；
    // machine_chassis 与 NC 的内脏一件不动，核电自己的机器成本不变。
    const NC_BRONZE = { tag: 'c:ingots/bronze' }
    const NC_STEEL_PLATE = { tag: 'c:plates/steel' }
    const NC_COPPER_PLATE = { tag: 'c:plates/copper' }
    const NC_SOLENOID = { item: 'nuclearcraftneohaul:copper_solenoid' }

    const NC_OVERRIDES = [
        ['machine_casing', [' B ', 'BCB', ' B '], 8, { B: NC_BRONZE, C: NC_STEEL_PLATE }],
        ['electrolyzer_controller', ['PCP', 'CSC', 'PCP'], 1, {
            P: { item: 'industrialupgrade:baseblockalloy/stainless_steel' },
            C: NC_STEEL_PLATE,
            S: { item: 'create:precision_mechanism' }
        }],
        ['electrolyzer_anode_terminal', ['BSB', 'LTL', 'BSB'], 2, {
            B: NC_BRONZE,
            S: NC_SOLENOID,
            L: { item: 'minecraft:lapis_lazuli' },
            T: NC_COPPER_PLATE
        }],
        ['electrolyzer_cathode_terminal', ['BSB', 'RTR', 'BSB'], 2, {
            B: NC_BRONZE,
            S: NC_SOLENOID,
            R: { item: 'minecraft:redstone' },
            T: NC_COPPER_PLATE
        }],
        ['machine_process_port', ['BHB', 'STS', 'BHB'], 4, {
            B: NC_BRONZE,
            H: { item: 'minecraft:hopper' },
            S: NC_SOLENOID,
            T: NC_STEEL_PLATE
        }],
        ['machine_reservoir_port', ['BHB', 'SMS', 'BHB'], 4, {
            B: NC_BRONZE,
            H: { item: 'minecraft:hopper' },
            S: NC_SOLENOID,
            M: NC_STEEL_PLATE
        }],
        ['machine_power_port', ['BCB', 'RMR', 'BCB'], 4, {
            B: NC_BRONZE,
            C: { tag: 'c:ingots/copper' },
            R: { item: 'minecraft:redstone' },
            M: NC_COPPER_PLATE
        }]
    ]

    for (const [id, pattern, count, keys] of NC_OVERRIDES) {
        event.remove({ id: 'nuclearcraftneohaul:' + id })
        event.shaped(Item.of('nuclearcraftneohaul:' + id, count), pattern, keys)
            .id('kubejs:electrolysis/nc_' + id)
    }

    // ---- 电解池的三档外壳 ----
    // 铜壳是核电工艺原版 machine_casing，不锈钢 / 钛壳是本包的两档升级件（Sink Journey Core 注册）。
    // 整圈换成同一档才算升级：混着铺或者还剩铜壳，速度按铜壳算（见 ElectrolyzerFrameTierMixin）。
    event.shaped(Item.of('sinkjourneycore:electrolyzer_frame_stainless', 8), [
        'PPP',
        'PBP',
        'PPP'
    ], {
        P: { tag: 'c:plates/steel' },
        B: { item: 'industrialupgrade:baseblockalloy/stainless_steel' }
    }).id('kubejs:electrolysis/frame_stainless')

    event.shaped(Item.of('sinkjourneycore:electrolyzer_frame_titanium', 8), [
        'PPP',
        'PBP',
        'PPP'
    ], {
        P: { tag: 'c:plates/steel' },
        B: { item: 'industrialupgrade:baseblockingot/titanium' }
    }).id('kubejs:electrolysis/frame_titanium')

    // ---- 整流器（方块）----
    event.shaped('kubejs:selenium_rectifier_block', [
        'SPS',
        'PCP',
        'SPS'
    ], {
        S: SE,
        P: { tag: 'c:plates/lead' },
        C: { tag: 'c:plates/copper' }
    }).id('kubejs:electrolysis/selenium_rectifier')

    event.shaped('kubejs:silicon_rectifier_block', [
        'APA',
        'PWP',
        'APA'
    ], {
        A: { item: 'industrialupgrade:itemplates/aluminium_plate' },
        P: { tag: 'c:plates/copper' },
        W: 'kubejs:wafer_9n'
    }).id('kubejs:electrolysis/silicon_rectifier')

    event.shaped('kubejs:thyristor_rectifier_block', [
        'APA',
        'PCP',
        'APA'
    ], {
        A: { item: 'industrialupgrade:itemplates/aluminium_plate' },
        P: { tag: 'c:plates/copper' },
        C: 'kubejs:chip_m4_i9'
    }).id('kubejs:electrolysis/thyristor_rectifier')

    console.info('[电解] 熔盐槽结构就绪；电积/精炼/氯碱走核电工艺电解池（data/nuclearcraftneohaul），熔盐 5 条 / 浸出 6 条 / 阳极泥分硒 1 条')
})
