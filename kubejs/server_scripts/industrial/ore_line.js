// ============================================================
// 通用选矿线 —— 结构、配方、控制器（server）
// ------------------------------------------------------------
// 机器注册见 startup_scripts/industrial/ore_line.js。
//
// 结构（控制器朝南，底下一层控制器，顶上能量仓）：
//
//   y0  XCX      C = 控制器（北墙中层）
//       XXX
//       XXX
//   y1  XFX      F/J = 本档流体输入仓（洗水，北墙 / 东墙）
//       IXJ      I   = 本档物品输入总线（西墙）
//       XAX      A   = 气压输入接口（南墙，浮选充气）
//   y2  XGX      G/K = 本档流体输出仓（尾矿浆，北墙 / 东墙）
//       OXK      O   = 本档物品输出总线（西墙）
//       XMX      M   = 磨机槽（南墙，磨介等级）
//   y3  XEX      E   = 本档能量输入仓
//       XXX
//       XRX      R   = 选别槽（南墙，选别方式）
//
// 配方按工艺族分五个池，族表就是下面这张 ORE_TABLE。加一种矿只加一行。
// 产率口径见 kubejs/docs/ORE_UNIVERSAL_LINE.md §4：
//   磨矿 raw 1 → 碎矿 2
//   洗选 碎矿 2 + 水 → 净碎 2 + 尾矿浆
//   选别 净碎 2 + 药剂/气 → 金属粉 3 + 尾矿浆      （R3：3.0 锭/矿）
// 粉 → 锭 走 IU 电炉既有链路，本线不自建熔炼。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    // id / 机壳 / 仓后缀 / 能量仓 / 额外机壳层数（与化学反应釜同构）
    const GRADES = [
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', 'basic', 'mmcr:energy_input_hatch_reinforced', 0],
        ['improved', 'industrialupgrade:baseblockalloy/inconel', 'improved', 'mmcr:energy_input_hatch_big', 1]
    ]

    // Rhino 会把函数体里的 const/let 提到外层作用域，同一结构函数调用第二次就抛
    // redeclaration。所以下面局部变量一律 var，派发循环也用带下标的 var 循环。
    const registerGrade = (id, casing, era, energy, padding) => {
        var structureId = 'sinkjourney:ore_beneficiator_' + id

        var layers = [
            ['XCX', 'XXX', 'XXX'],
            ['XFX', 'IXJ', 'XAX']
        ]
        for (var pi = 0; pi < padding; pi++) layers.push(['XXX', 'XXX', 'XXX'])
        layers.push(['XGX', 'OXK', 'XMX'])
        layers.push(['XEX', 'XXX', 'XRX'])

        try {
            var built = event.createStructure(structureId)
            for (var li = 0; li < layers.length; li++) built.pattern(layers[li])

            built
                .set('X', api.block(casing))
                .set('I', 'mmcr:item_input_bus_' + era)
                .set('O', 'mmcr:item_output_bus_' + era)
                .set('F', 'mmcr:fluid_input_hatch_' + era)
                .set('J', 'mmcr:fluid_input_hatch_' + era)
                .set('G', 'mmcr:fluid_output_hatch_' + era)
                .set('K', 'mmcr:fluid_output_hatch_' + era)
                .set('E', energy)
                .set('A', api.anyOfAirInput())
                .set('M', api.levelSlot('sinkjourney:mill'))
                .set('R', api.levelSlot('sinkjourney:separation'))
                .controller('C')
                .build()
        } catch (err) {
            console.warn('[选矿] 结构 ' + structureId + ' 本次没有重新注册（同一会话里已注册过，重启生效）：' + err)
        }
    }

    for (var gi = 0; gi < GRADES.length; gi++) {
        registerGrade(GRADES[gi][0], GRADES[gi][1], GRADES[gi][2], GRADES[gi][3], GRADES[gi][4])
    }
})

ServerEvents.recipes(event => {
    // 控制器：八块本档机壳 + 四块本档板 + 一个精密机构
    const CONTROLLERS = [
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', { tag: 'c:plates/steel' }],
        ['improved', 'industrialupgrade:baseblockalloy/inconel', { item: 'industrialupgrade:itemplates/nickel_plate' }]
    ]

    for (const [id, casing, plate] of CONTROLLERS) {
        event.shaped('mmcr:ore_beneficiator_' + id + '_controller', [
            'PCP',
            'CSC',
            'PCP'
        ], {
            P: casing,
            C: plate,
            S: 'create:precision_mechanism'
        }).id('kubejs:ore_line/' + id + '_controller')
    }

    // ---- 族表 ----
    // [金属, 族, 选别等级, 是否有药剂浮选]
    // A 硫化矿：浮选（黄药 + 充气）
    // B 氧化矿：磁选
    // C/D/E：重选（水介质）
    const ORE_TABLE = [
        ['copper', 'A'], ['nickel', 'A'], ['cobalt', 'A'], ['zinc', 'A'], ['lead', 'A'],
        ['molybdenum', 'A'], ['cadmium', 'A'], ['bismuth', 'A'], ['arsenic', 'A'], ['thallium', 'A'],

        ['iron', 'B'], ['manganese', 'B'], ['chromium', 'B'], ['vanadium', 'B'],
        ['titanium', 'B'], ['tin', 'B'], ['mikhail', 'B'], ['spinel', 'B'],

        ['tungsten', 'C'], ['tantalum', 'C'], ['niobium', 'C'], ['zirconium', 'C'], ['hafnium', 'C'],

        ['aluminium', 'D'], ['magnesium', 'D'], ['barium', 'D'], ['strontium', 'D'],

        ['gallium', 'E'], ['germanium', 'E']
    ]

    const REAGENT = 'kubejs:xanthate'
    const TAILINGS = 'kubejs:tailings_slurry'
    const WATER = 'minecraft:water'

    const itemIn = (item, count) => ({ type: 'minecraft:item', io: 'input', item: { item: item }, count: count })
    const itemOut = (item, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: item, count: count } })
    const fluidIn = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: { fluid: fluid }, amount: amount })
    const fluidOut = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: fluid, amount: amount } })
    const fe = (perTick) => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: perTick })
    const air = (perTick, bar) => ({ type: 'pneumaticcraft:air', io: 'input', air_per_tick: perTick, min_pressure: bar })

    const add = (id, pool, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:' + pool,
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }

    // 黄药：乙基黄原酸钠。现实是乙醇 + CS₂ + NaOH，包里没有 CS₂，压成"硫 + 碳 + 烧碱"的一步。
    // 放釜里而不是工作台，是为了不依赖金属钠 —— 钠要到熔盐电解才有，会把浮选段提前卡死。
    // 注意：这行必须排在 itemIn/fluidIn 等箭头函数赋值之后，否则 Rhino 提升 const 后拿到 undefined。
    add('kubejs:ore_line/xanthate', 'chemical_reactor_leach', 160, [
        itemIn('industrialupgrade:itemdust/sulfur_dust', 1),
        itemIn('industrialupgrade:itemdust/coal_dust', 1),
        fluidIn('industrialupgrade:iufluidsodiumhydroxide', 1000),
        itemOut('kubejs:xanthate', 4),
        fe(64)
    ])

    // Rhino 的坑：循环体里再写 const/let 会在第二次迭代抛 "redeclaration of var"，
    // 所以循环内一律不声明局部变量，金属 id 直接拼进字符串。
    for (const [metal, family] of ORE_TABLE) {
        // 1. 磨矿：原矿 1 -> 碎矿 2
        // 铁与铜没有 IU 的 raw_metals 物品（原版就有 raw_iron / raw_copper），单独走原版 id。
        add('kubejs:ore_line/crush/' + metal, 'ore_beneficiator_crush', 100, [
            metal === 'iron' ? itemIn('minecraft:raw_iron', 1)
                : metal === 'copper' ? itemIn('minecraft:raw_copper', 1)
                : itemIn('industrialupgrade:raw_metals/raw_' + metal, 1),
            itemOut('industrialupgrade:crushed/' + metal, 2),
            fe(4)
        ])

        // 2. 洗选：碎矿 2 + 水 500 -> 净碎 2 + 尾矿浆 250
        add('kubejs:ore_line/wash/' + metal, 'ore_beneficiator_wash', 120, [
            itemIn('industrialupgrade:crushed/' + metal, 2),
            fluidIn(WATER, 500),
            itemOut('industrialupgrade:purifiedcrushed/' + metal, 2),
            fluidOut(TAILINGS, 250),
            fe(5)
        ])

        // 3. 选别：净碎 2 -> 金属粉 3 + 尾矿浆 250
        //    族的门槛写在"药剂 + 充气"上，不在等级槽上：MMCR 的等级匹配是
        //    "已装 priority >= 配方要求 priority"，三个互斥的选别方式会互相满足，
        //    所以等级槽只做 modifier（速度/能耗），族靠黄药与 2 bar 空气区分。
        if (family === 'A') {
            add('kubejs:ore_line/separate/' + metal, 'ore_beneficiator_A', 160, [
                itemIn('industrialupgrade:purifiedcrushed/' + metal, 2),
                itemIn(REAGENT, 1),
                air(10, 2.0),
                itemOut('industrialupgrade:itemdust/' + metal + '_dust', 3),
                fluidOut(TAILINGS, 250),
                fe(8)
            ])
        } else if (family === 'B') {
            add('kubejs:ore_line/separate/' + metal, 'ore_beneficiator_B', 160, [
                itemIn('industrialupgrade:purifiedcrushed/' + metal, 2),
                itemOut('industrialupgrade:itemdust/' + metal + '_dust', 3),
                fluidOut(TAILINGS, 250),
                fe(8)
            ])
        } else {
            add('kubejs:ore_line/separate/' + metal, 'ore_beneficiator_' + family, 160, [
                itemIn('industrialupgrade:purifiedcrushed/' + metal, 2),
                fluidIn(WATER, 500),
                itemOut('industrialupgrade:itemdust/' + metal + '_dust', 3),
                fluidOut(TAILINGS, 250),
                fe(8)
            ])
        }
    }

    // ---- 尾矿浆的出路 ----
    // 选矿机自己把尾矿浆洗成砂与石粉（P2 的尾矿再选第一段）；
    // 釜里那条中和保留，给不想摆第二台选矿机的人一个兜底。
    add('kubejs:ore_line/tailings_wash', 'ore_beneficiator_wash', 100, [
        fluidIn(TAILINGS, 1000),
        fluidIn(WATER, 250),
        itemOut('minecraft:sand', 1),
        itemOut('industrialupgrade:itemdust/stone_dust', 1),
        fe(4)
    ])

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:chemical_reactor_leach',
        tick_time: 80,
        requirements: [
            fluidIn(TAILINGS, 500),
            itemOut('industrialupgrade:itemdust/stone_dust', 1),
            fluidOut(WATER, 250),
            fe(48)
        ]
    }).id('kubejs:chem_reactor/tailings_neutralize')

    console.info('[选矿] 通用选矿机结构与 ' + (ORE_TABLE.length * 3) + ' 条配方就绪（磨矿 / 洗选 / 选别）')
})
