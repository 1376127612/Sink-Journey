// ============================================================
// 通用反应器（两台）—— 结构与配方
// ------------------------------------------------------------
// 机器与内件注册见 startup_scripts/industrial/reactors_v2.js。
//
//   通用反应器     3×3×6   气固 / 流化 / 高压 / 管式裂解（控制器里选池）
//   通用塔器       3×3×8   塔器（气液吸收 / 反应精馏）
//
// 通用反应器结构（控制器朝北时为列，C 在北墙中层）：
//
//   y0  XXX      F = 流体输入（北）      I = 物品输入（西）   J = 流体输入（东）
//       XCX      R = 催化剂等级槽（北）  G/K = 流体输出（北/东）
//       XXX      O = 物品输出（西）      P = 耐压容器槽（北）
//   y1  XFX      E = 能量输入（南）      H = 热量仓（北，可选：机壳或热量仓）
//       I J
//       XXX
//   y2  XRX      T = 炉管等级槽（南，管式裂解用）
//       X X
//       XTX
//   y3  XGX
//       O K
//       XXX
//   y4  XPX
//       X X
//       XEX
//   y5  XHX
//       X X
//       XXX
//
// 塔器结构：
//
//   y0  XXX      C = 控制器（北墙中层）
//       XCX
//       XXX
//   y1  XFX      F = 气体输入（北，塔底进气）  O = 液体输出（南，塔底釜液）
//       X X
//       XOX
//   y2  XXX
//       X X
//       XXX
//   y3  XTX      T = 塔板等级槽（北）
//       X X
//       XXX
//   y4  XXX
//       X X
//       XXX
//   y5  XRX      R = 树脂等级槽（北，反应精馏用）
//       X X
//       XXX
//   y6  XAX      A = 液体输入（北，塔顶回流/吸收剂）  K = 气体输出（南，尾气）
//       X X
//       XKX
//   y7  XEX      E = 能量输入（北）  H = 热量仓（南，可选）
//       X X
//       XHX
//
// 温度门槛（mmcr:heat_input_hatch + mekanism:temperature）先不写进配方：
// 本包还没有热输入来源，热源链条要在中期验证后再收紧。热量仓位置已经留出来了。
//
// 设计文档：kubejs/docs/REACTOR_TYPES_PLAN.md
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    const CATALYST = 'industrialupgrade:baseblockalloy/inconel'
    const COLUMN = 'industrialupgrade:baseblockalloy/stainless_steel'

    // 每台结构单独 try：MMCR 0.1.7 同一会话不允许结构 id 注册第二次。
    const registerStructure = (id, layers, casing, ports) => {
        try {
            var built = event.createStructure(id)
            for (var li = 0; li < layers.length; li++) built.pattern(layers[li])
            built.set('X', api.block(casing))
            for (var key in ports) built.set(key, ports[key])
            built.controller('C').build()
        } catch (err) {
            console.warn('[化工] 结构 ' + id + ' 本次没有重新注册（同一会话里已注册过，重启生效）：' + err)
        }
    }

    registerStructure('sinkjourney:universal_reactor', [
        ['XXX', 'XCX', 'XXX'],
        ['XFX', 'I J', 'XXX'],
        ['XRX', 'X X', 'XTX'],
        ['XGX', 'O K', 'XXX'],
        ['XPX', 'X X', 'XEX'],
        ['XHX', 'X X', 'XXX']
    ], CATALYST, {
        F: api.anyOfFluidInput(),
        J: api.anyOfFluidInput(),
        G: api.anyOfFluidOutput(),
        K: api.anyOfFluidOutput(),
        I: api.anyOfItemInput(),
        O: api.anyOfItemOutput(),
        R: api.levelSlot('sinkjourney:catalyst'),
        T: api.levelSlot('sinkjourney:furnace_tube'),
        P: api.levelSlot('sinkjourney:pressure_vessel'),
        E: api.anyOfEnergyInput(),
        H: api.anyOf(api.block(CATALYST), api.anyOfHeatPorts())
    })

    registerStructure('sinkjourney:column_reactor', [
        ['XXX', 'XCX', 'XXX'],
        ['XFX', 'X X', 'XOX'],
        ['XXX', 'X X', 'XXX'],
        ['XTX', 'X X', 'XXX'],
        ['XXX', 'X X', 'XXX'],
        ['XRX', 'X X', 'XXX'],
        ['XAX', 'X X', 'XKX'],
        ['XEX', 'X X', 'XHX']
    ], COLUMN, {
        F: api.anyOfFluidInput(),
        A: api.anyOfFluidInput(),
        O: api.anyOfFluidOutput(),
        K: api.anyOfFluidOutput(),
        T: api.levelSlot('sinkjourney:tray'),
        R: api.levelSlot('sinkjourney:resin'),
        E: api.anyOfEnergyInput(),
        H: api.anyOf(api.block(COLUMN), api.anyOfHeatPorts())
    })

    // ---- 大型通用反应器（三档：不锈钢 → 钛 → 钴铬）----
    // 5×5 底，高度 7/8/9；仓锁在本档，放别的档的仓组不起来（与六档釜同一套规则）。
    // 端口按大宗与多股工艺留：4 流体进 / 5 流体出 / 1 物品对，两路能量、热量进出口各一。
    const LARGE_REACTOR = [
        ['stainless', 'industrialupgrade:baseblockalloy/stainless_steel', 'improved', 'mmcr:energy_input_hatch_big', 0],
        ['titanium', 'industrialupgrade:baseblockingot/titanium', 'advanced', 'mmcr:energy_input_hatch_huge', 1],
        ['cobalt', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 'perfect', 'mmcr:energy_input_hatch_ludicrous', 2]
    ]

    const registerLargeReactor = (id, casing, era, energy, padding) => {
        var layers = [
            ['XXCXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
            ['XFIFX', 'J   K', 'X   X', 'X   X', 'XXAXX'],
            ['XXRXX', 'X   X', 'X   X', 'X   X', 'XXXXX'],
            ['XXPXX', 'X   X', 'X   X', 'X   X', 'XXTXX']
        ]
        for (var pi = 0; pi < padding; pi++) layers.push(['XXXXX', 'X   X', 'X   X', 'X   X', 'XXXXX'])
        layers.push(['XGOGX', 'M   N', 'X   X', 'X   X', 'XXSXX'])
        layers.push(['XXEXX', 'H   W', 'X   X', 'X   X', 'XXEXX'])
        layers.push(['XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'])

        registerStructure('sinkjourney:large_reactor_' + id, layers, casing, {
            F: 'mmcr:fluid_input_hatch_' + era,
            J: 'mmcr:fluid_input_hatch_' + era,
            K: 'mmcr:fluid_input_hatch_' + era,
            I: 'mmcr:item_input_bus_' + era,
            A: api.anyOfAirInput(),
            R: api.levelSlot('sinkjourney:catalyst'),
            P: api.levelSlot('sinkjourney:pressure_vessel'),
            T: api.levelSlot('sinkjourney:furnace_tube'),
            G: 'mmcr:fluid_output_hatch_' + era,
            M: 'mmcr:fluid_output_hatch_' + era,
            N: 'mmcr:fluid_output_hatch_' + era,
            S: 'mmcr:fluid_output_hatch_' + era,
            O: 'mmcr:item_output_bus_' + era,
            E: energy,
            H: api.anyOf(api.block(casing), api.anyOfHeatPorts()),
            W: api.anyOf(api.block(casing), api.anyOfHeatPorts())
        })
    }

    for (var ri = 0; ri < LARGE_REACTOR.length; ri++) {
        registerLargeReactor(LARGE_REACTOR[ri][0], LARGE_REACTOR[ri][1], LARGE_REACTOR[ri][2], LARGE_REACTOR[ri][3], LARGE_REACTOR[ri][4])
    }

    // ---- 大型塔器（三档）----
    // 5×5 底，高度 9/10/11；两个塔板槽分上下两段，树脂槽在塔顶下沿，
    // 气体两路进、液体两路进（塔顶回流 + 塔底回流），塔底三路出、塔顶一路尾气。
    const LARGE_COLUMN = [
        ['inconel', 'industrialupgrade:baseblockalloy/inconel', 'improved', 'mmcr:energy_input_hatch_big', 0],
        ['titanium', 'industrialupgrade:baseblockingot/titanium', 'advanced', 'mmcr:energy_input_hatch_huge', 1],
        ['cobalt', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 'perfect', 'mmcr:energy_input_hatch_ludicrous', 2]
    ]

    const registerLargeColumn = (id, casing, era, energy, padding) => {
        var layers = [
            ['XXCXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
            ['XFFXX', 'J   K', 'X   X', 'X   X', 'XOOOX'],
            ['XXXXX', 'X   X', 'X   X', 'X   X', 'XXXXX']
        ]
        for (var ci = 0; ci < padding; ci++) layers.push(['XXXXX', 'X   X', 'X   X', 'X   X', 'XXXXX'])
        layers.push(['XXTXX', 'X   X', 'X   X', 'X   X', 'XXXXX'])
        layers.push(['XXXXX', 'X   X', 'X   X', 'X   X', 'XXXXX'])
        layers.push(['XXTXX', 'X   X', 'X   X', 'X   X', 'XXXXX'])
        layers.push(['XXRXX', 'X   X', 'X   X', 'X   X', 'XXXXX'])
        layers.push(['XXAXX', 'X   X', 'X   X', 'X   X', 'XXQXX'])
        layers.push(['XXEXX', 'X   X', 'X   X', 'X   X', 'XXWXX'])

        registerStructure('sinkjourney:large_column_' + id, layers, casing, {
            F: 'mmcr:fluid_input_hatch_' + era,
            J: 'mmcr:fluid_input_hatch_' + era,
            K: 'mmcr:fluid_input_hatch_' + era,
            O: 'mmcr:fluid_output_hatch_' + era,
            T: api.levelSlot('sinkjourney:tray'),
            R: api.levelSlot('sinkjourney:resin'),
            A: 'mmcr:fluid_input_hatch_' + era,
            Q: 'mmcr:fluid_output_hatch_' + era,
            E: energy,
            W: api.anyOf(api.block(casing), api.anyOfHeatPorts())
        })
    }

    for (var ci2 = 0; ci2 < LARGE_COLUMN.length; ci2++) {
        registerLargeColumn(LARGE_COLUMN[ci2][0], LARGE_COLUMN[ci2][1], LARGE_COLUMN[ci2][2], LARGE_COLUMN[ci2][3], LARGE_COLUMN[ci2][4])
    }
})

ServerEvents.recipes(event => {
    const SILICON = 'nuclearcraftneohaul:silicon_gem'
    const TCS = 'kubejs:trichlorosilane'
    const SILANE = 'kubejs:silane'
    const STC = 'kubejs:silicon_tetrachloride'
    const HCL_GAS = 'industrialupgrade:iufluidhydrogenchloride'
    const HCL_ACID = 'qmd:hydrochloric_acid'
    const HYDROGEN = 'industrialupgrade:iufluidhydrogen'
    const METHANE = 'industrialupgrade:iufluidmethane'
    const STEAM = 'industrialupgrade:iufluidsteam'
    const WATER = 'minecraft:water'
    const CO = 'industrialupgrade:iufluidcarbonmonoxide'
    const CO2 = 'industrialupgrade:iufluidcarbondioxide'
    const OXYGEN = 'industrialupgrade:iufluidoxygen'
    const NITROGEN = 'industrialupgrade:iufluidnitrogen'
    const AMMONIA = 'industrialupgrade:iufluidnitrogenhydride'
    const NITRIC_OXIDE = 'industrialupgrade:iufluidnitricoxide'
    const NITROGEN_DIOXIDE = 'industrialupgrade:iufluidnitrogendioxide'
    const NITRIC_ACID = 'industrialupgrade:iufluidnitricacid'
    const METHANOL = 'industrialupgrade:iufluidmethanol'
    const NAPHTHA = 'kubejs:naphtha'
    const TREATED = 'kubejs:treated_naphtha'
    const SUPERHEATED = 'industrialupgrade:iufluidsuperheated_steam'
    const HYDROGEN_SULFIDE = 'industrialupgrade:iufluidhydrogensulfide'
    const ETHYLENE = 'industrialupgrade:iufluidethylene'
    const PROPYLENE = 'industrialupgrade:iufluidpropylene'
    const BUTENE = 'industrialupgrade:iufluidbutene'
    const GASOLINE = 'industrialupgrade:iufluidgasoline'
    const PETCOKE = 'kubejs:petroleum_coke'
    const SO2 = 'industrialupgrade:iufluidsulfuroxide'
    const SO3 = 'industrialupgrade:iufluidsulfurtrioxide'
    const SULFURIC = 'industrialupgrade:iufluidsulfuricacid'

    // ---- 控制器 ----
    event.shaped('mmcr:universal_reactor_controller', [
        'PCP',
        'CSC',
        'PCP'
    ], {
        P: 'industrialupgrade:baseblockalloy/inconel',
        C: 'industrialupgrade:itemplates/titanium_plate',
        S: 'create:precision_mechanism'
    }).id('kubejs:reactors/universal_reactor_controller')

    const LARGE_CONTROLLERS = [
        ['large_reactor_stainless', 'industrialupgrade:baseblockalloy/stainless_steel', { tag: 'c:plates/steel' }],
        ['large_reactor_titanium', 'industrialupgrade:baseblockingot/titanium', { item: 'industrialupgrade:itemplates/titanium_plate' }],
        ['large_reactor_cobalt', 'industrialupgrade:baseblockalloy1/cobalt_chrome', { tag: 'c:plates/niobiumtitanium' }],
        ['large_column_inconel', 'industrialupgrade:baseblockalloy/inconel', { item: 'industrialupgrade:itemplates/nickel_plate' }],
        ['large_column_titanium', 'industrialupgrade:baseblockingot/titanium', { item: 'industrialupgrade:itemplates/titanium_plate' }],
        ['large_column_cobalt', 'industrialupgrade:baseblockalloy1/cobalt_chrome', { tag: 'c:plates/niobiumtitanium' }]
    ]

    for (var xi = 0; xi < LARGE_CONTROLLERS.length; xi++) {
        var row = LARGE_CONTROLLERS[xi]
        event.shaped('mmcr:' + row[0] + '_controller', [
            'PCP',
            'CSC',
            'PCP'
        ], {
            P: row[1],
            C: row[2],
            S: 'create:precision_mechanism'
        }).id('kubejs:reactors/' + row[0] + '_controller')
    }

    event.shaped('mmcr:column_reactor_controller', [
        'PCP',
        'CSC',
        'PCP'
    ], {
        P: 'industrialupgrade:baseblockalloy/stainless_steel',
        C: 'industrialupgrade:itemplates/steel_plate',
        S: 'create:precision_mechanism'
    }).id('kubejs:reactors/column_reactor_controller')

    // 内件不另造方块：催化剂槽与耐压槽放的就是等级定义里的那些合金块（见 startup 脚本），
    // 台子上要换催化剂，把槽里的块换掉就行——这就是"内件决定工艺"的操作面。

    // ============================================================
    // 通用反应器 · 气固固定床（reactor_gas_solid）
    // ============================================================

    // 蒸汽重整：CH4 + H2O -> CO + 3H2，镍催化，现实 850~900℃、2~3 MPa
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_solid',
        tick_time: 200,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_nickel_alumina'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: METHANE }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: STEAM }, amount: 1000 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 3.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: CO, amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HYDROGEN, amount: 3000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 320 }
        ]
    }).id('kubejs:reactors/reforming')

    // 一氧化碳变换：CO + H2O -> CO2 + H2，铁铬催化，350~450℃ 绝热床
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_solid',
        tick_time: 120,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_iron_chromia'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: CO }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: STEAM }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: CO2, amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HYDROGEN, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 160 }
        ]
    }).id('kubejs:reactors/water_gas_shift')

    // 二氧化硫氧化：2SO2 + O2 -> 2SO3，V2O5 四段绝热床，420~450℃，段间换热
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_solid',
        tick_time: 150,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_vanadia'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: SO2 }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: OXYGEN }, amount: 500 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: SO3, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 }
        ]
    }).id('kubejs:reactors/so2_oxidation')

    // 氨氧化（Ostwald）：4NH3 + 5O2 -> 4NO + 6H2O，铂铑网 800~900℃，常压
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_solid',
        tick_time: 120,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_platinum_rhodium'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: AMMONIA }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: OXYGEN }, amount: 1250 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: NITRIC_OXIDE, amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: WATER, amount: 1500 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 224 }
        ]
    }).id('kubejs:reactors/ammonia_oxidation')

    // ============================================================
    // 通用反应器 · 流化床（reactor_fluidized）
    // ============================================================

    // 沸腾氯化：Si + 3HCl -> SiHCl3 + H2，硅粉 300~350℃、0.3 MPa 流化床
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_fluidized',
        tick_time: 120,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: SILICON }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HCL_GAS }, amount: 1000 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 3.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: TCS, amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HYDROGEN, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 192 }
        ]
    }).id('kubejs:reactors/chlorination')

    // 冷氢化：Si + 2H2 + 3SiCl4 -> 4SiHCl3，铜基催化，500~550℃、3 MPa
    // 现实里这是氯闭路的关键一步：把歧化出来的四氯化硅直接变回三氯硅烷。
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_fluidized',
        tick_time: 240,
        requirements: [
            { type: 'minecraft:item', io: 'input', item: { item: SILICON }, count: 1 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: STC }, amount: 3000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 2000 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 20.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: TCS, amount: 4000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 320 }
        ]
    }).id('kubejs:reactors/cold_hydrogenation')

    // ============================================================
    // 通用反应器 · 高压合成（reactor_high_pressure）
    // ============================================================

    // 甲醇合成（CO 路线）：CO + 2H2 -> CH3OH，Cu/ZnO/Al2O3，250~280℃、5~10 MPa
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_high_pressure',
        tick_time: 160,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_copper_zinc'
            },
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:pressure_vessel',
                level: 'sinkjourney:pressure_vessel_multilayer'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: CO }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 2000 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 20.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: METHANOL, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 }
        ]
    }).id('kubejs:reactors/methanol_from_co')

    // 甲醇合成（CO2 路线）：CO2 + 3H2 -> CH3OH + H2O
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_high_pressure',
        tick_time: 180,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_copper_zinc'
            },
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:pressure_vessel',
                level: 'sinkjourney:pressure_vessel_multilayer'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: CO2 }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 3000 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 20.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: METHANOL, amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: WATER, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 224 }
        ]
    }).id('kubejs:reactors/methanol_from_co2')

    // 氨合成：N2 + 3H2 -> 2NH3，熔铁催化，400~500℃、15~30 MPa，循环气
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_high_pressure',
        tick_time: 200,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst',
                level: 'sinkjourney:catalyst_iron_promoted'
            },
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:pressure_vessel',
                level: 'sinkjourney:pressure_vessel_wire_wound'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: NITROGEN }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 3000 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 20.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: AMMONIA, amount: 2000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 320 }
        ]
    }).id('kubejs:reactors/ammonia_synthesis')

    // ============================================================
    // 塔器 · 气液逆流吸收（reactor_gas_liquid）
    // ============================================================

    // 三氧化硫吸收：SO3 + H2O -> H2SO4，现实是 98% 硫酸循环吸收、吸收塔 + 酸冷却器
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_liquid',
        tick_time: 120,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:tray',
                level: 'sinkjourney:tray_stainless'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: SO3 }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: WATER }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: SULFURIC, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 160 }
        ]
    }).id('kubejs:reactors/so3_absorption')

    // 硝酸吸收：3NO2 + H2O -> 2HNO3 + NO，水逆流吸收，30~50℃ 需冷却，NO 回氧化段
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_liquid',
        tick_time: 140,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:tray',
                level: 'sinkjourney:tray_steel'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: NITROGEN_DIOXIDE }, amount: 3000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: WATER }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: NITRIC_ACID, amount: 2000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: NITRIC_OXIDE, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 160 }
        ]
    }).id('kubejs:reactors/nitric_absorption')

    // 氯化氢吸收：HCl 气体 + 水 -> 盐酸，尾气洗涤同一条塔
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_liquid',
        tick_time: 100,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:tray',
                level: 'sinkjourney:tray_steel'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HCL_GAS }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: WATER }, amount: 1000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HCL_ACID, amount: 1000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 96 }
        ]
    }).id('kubejs:reactors/hcl_absorption')

    // ============================================================
    // 塔器 · 反应精馏（reactor_reactive_distillation）
    // ============================================================

    // 歧化：4SiHCl3 -> SiH4 + 3SiCl4，离子交换树脂催化精馏，50~80℃
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_reactive_distillation',
        tick_time: 300,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:resin',
                level: 'sinkjourney:resin_gel'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: TCS }, amount: 4000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: SILANE, amount: 1000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: STC, amount: 3000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 }
        ]
    }).id('kubejs:reactors/disproportionation')


    // ============================================================
    // 通用反应器 · 气固固定床：石脑油加氢精制（原 sinkjourney:naphtha_hydrotreater）
    // ============================================================
    // 现实：Co-Mo/Al2O3 固定床，300~350℃、2~4 MPa，硫以 H2S 摘掉。这里用硅铝催化剂床，
    // 2 bar 气压当压缩段门槛（气动上限 20 bar，不假装 4 MPa）。

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_solid',
        tick_time: 300,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst_bed',
                level: 'sinkjourney:catalyst_bed_silica_alumina'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: NAPHTHA }, amount: 8000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 240 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 2.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: TREATED, amount: 7850 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HYDROGEN_SULFIDE, amount: 100 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 200 }
        ]
    }).id('kubejs:reactors/hydrotreater_sweet')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:reactor_gas_solid',
        tick_time: 360,
        requirements: [
            {
                type: 'mmcr:level', io: 'input',
                level_type: 'sinkjourney:catalyst_bed',
                level: 'sinkjourney:catalyst_bed_silica_alumina'
            },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: NAPHTHA }, amount: 8000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 480 },
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 2.0 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: TREATED, amount: 7760 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HYDROGEN_SULFIDE, amount: 220 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 200 }
        ]
    }).id('kubejs:reactors/hydrotreater_sour')

    // ============================================================
    // 通用反应器 · 管式裂解（reactor_cracking，原 sinkjourney:steam_cracker）
    // ============================================================
    // 现实：外热列管、850℃ 左右、停留时间零点几秒，炉管材质决定裂解深度与结焦。
    // 与蒸汽转化炉同一类设备（都是 fired tubular furnace），所以并进同一台机器，
    // 内件换成炉管等级：钢 → 钼钢 → 因科镍 → 钛。
    const CRACK = [
        ['steel', 1920, 1120, 720, 1600, 2400, 0.50],
        ['molybdenum', 2240, 1240, 720, 1520, 2280, 0.30],
        ['inconel', 2560, 1360, 720, 1440, 1920, 0.15],
        ['titanium', 2880, 1400, 680, 1320, 1720, 0.05]
    ]

    for (const [tube, c2, c3, c4, pyr, ch4, cokeChance] of CRACK) {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:reactor_cracking',
            tick_time: 400,
            requirements: [
                {
                    type: 'mmcr:level', io: 'input',
                    level_type: 'sinkjourney:furnace_tube',
                    level: 'sinkjourney:furnace_tube_' + tube
                },
                { type: 'minecraft:fluid', io: 'input', fluid: { fluid: TREATED }, amount: 8000 },
                { type: 'minecraft:fluid', io: 'input', fluid: { fluid: SUPERHEATED }, amount: 4000 },
                { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 40, min_pressure: 2.0 },
                { type: 'minecraft:fluid', io: 'output', stack: { id: ETHYLENE, amount: c2 } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: PROPYLENE, amount: c3 } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: BUTENE, amount: c4 } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: GASOLINE, amount: pyr } },
                { type: 'minecraft:fluid', io: 'output', stack: { id: METHANE, amount: ch4 } },
                { type: 'minecraft:item', io: 'output', stack: { id: PETCOKE, count: 1 }, chance: cokeChance },
                { type: 'neoforge:energy', io: 'input', fe_per_tick: 480 }
            ]
        }).id('kubejs:reactors/cracker_' + tube)
    }

    console.info('[化工] 通用反应器就绪：反应器 15 条（固定床 6 / 流化床 2 / 高压 3 / 管式裂解 4）、塔器 4 条（吸收 3 / 精馏 1）；大型各三档')
})
