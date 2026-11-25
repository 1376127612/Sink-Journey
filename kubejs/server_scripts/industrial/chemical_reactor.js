// ============================================================
// 化学反应釜 —— 结构与配方（六档）
// ------------------------------------------------------------
// 机器注册见 startup_scripts/industrial/chemical_reactor.js。
//
//   机动    3×3×4  机动仓   + 小型能量仓      并行 1
//   蒸汽    3×3×4  蒸汽仓   + 普通能量仓      并行 2
//   IU 基础 3×3×5  basic 仓 + 强化能量仓      并行 2
//   IU 改良 3×3×5  improved + 大型能量仓      并行 4
//   IU 高级 3×3×6  advanced + 巨型能量仓      并行 6
//   IU 完美 3×3×7  perfect  + 超级能量仓      并行 8
//
// 结构都是「控制器在下、进料在中、出料在上、能量封顶」：
//
//   y0  XCX        C = 控制器（北墙中层）
//       XXX
//       XXX
//   y1  XFX        F/J = 本档流体输入仓（北墙、东墙）
//       IXJ        I   = 本档物品输入总线（西墙）
//       XAX        A   = 气压输入接口（南墙，加压液相反应用）
//   y2  XGX        G/K = 本档流体输出仓（北墙、东墙）
//       OXK        O   = 本档物品输出总线（西墙，固体反应釜类配方用）
//       XRX        R   = 搅拌槽（南墙，桨式 / 涡轮 / 螺带）
//   y3  XEX        E   = 本档能量输入仓
//       XXX
//       XLX        L   = 衬里槽（南墙，搪玻璃 / 不锈钢 / 钛）
//
// 蒸汽之后的每一档在进料层与出料层之间多垫机壳层（0/1/1/2/3 层），
// 体积就是它们的材料成本；换档只换机壳与仓，不动配方池。
//
// 配方池按工艺类别拆开（见下），JEI 每池一个页签：
//   chemical_reactor_recycle 氯循环      chemical_reactor_polymer 聚合与固化
//   chemical_reactor_leach   浸出与腐蚀  chemical_reactor_gas     气体合成
//   chemical_reactor_liquid  液相反应    chemical_reactor_solid   固相合成
//
// 气固催化、流化床、高压合成、气液吸收、反应精馏这五类已经在通用反应器上
// （startup / server 的 reactors_v2.js）：
//
//   蒸汽重整 / 变换 / SO2 氧化 / 氨氧化 / 甲醇 / 氨合成 / 氯化 / 冷氢化 -> 通用反应器（三个池）
//   SO3 吸收 / 硝酸吸收 / HCl 吸收 / 歧化                          -> 塔器（两个池）
//
// 留在这里的是釜本来就该干的活：氯回收的催化加氢，以及 iu_chem_migration.js 迁进来的
// 液相聚合、固化、浸出、卤化、硝化、中和那一批（82 条）。
//
// 釜的机制（v2）：南墙三个口——气压接口（加压液相反应）、搅拌槽（传质）、衬里槽（耐蚀）。
// 配方用 pneumaticcraft:air 与 mmcr:level 写门槛：聚合 5 bar + 涡轮，加氢 10 bar，
// 混酸硝化要涡轮 + 不锈钢衬里，硫酸浸出要桨式 + 搪玻璃，氯介质要钛衬里。
// 温度门槛不在这里，那是通用反应器的判定面。
//
// 设计说明：kubejs/docs/CHEMICAL_REACTOR.md
// 分级仓说明：kubejs/docs/PORT_TIERS.md
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    // id / 机壳 / 仓后缀 / 能量仓 / 额外机壳层数
    const GRADES = [
        ['kinetic', 'create:brass_casing', 'kinetic', 'mmcr:energy_input_hatch_small', 0],
        ['steam', 'industrialupgrade:blockresource/steel_block', 'steam', 'mmcr:energy_input_hatch', 0],
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', 'basic', 'mmcr:energy_input_hatch_reinforced', 1],
        ['improved', 'industrialupgrade:baseblockalloy/inconel', 'improved', 'mmcr:energy_input_hatch_big', 1],
        ['advanced', 'industrialupgrade:baseblockingot/titanium', 'advanced', 'mmcr:energy_input_hatch_huge', 2],
        ['perfect', 'industrialupgrade:baseblockalloy1/cobalt_chrome', 'perfect', 'mmcr:energy_input_hatch_ludicrous', 3]
    ]

    // 坑：Rhino 会把函数体里的 const/let 提到外层函数作用域，同一个结构函数被调用第二次
    // 就抛 InternalError: redeclaration of var。所以下面的局部变量一律用 var，
    // 派发循环也用带下标的 var 循环——否则六档会一台都注册不上（日志里每台一条 redeclaration）。
    //
    // 每条结构单独 try：MMCR 0.1.7 在同一次游戏会话里不允许同一个结构 id 注册第二次
    // （改了结构脚本后热重载会撞到 "Dynamic structure already registered"，
    // 一旦抛出就会把后面几档一起中断）。撞上了只记一条警告，结构本身用会话里已有的那份，
    // 想要新形状就重启游戏。
    //
    const registerGrade = (id, casing, era, energy, padding) => {
        var structureId = 'sinkjourney:chemical_reactor_' + id

        var layers = [
            ['XCX', 'XXX', 'XXX'],
            ['XFX', 'IXJ', 'XAX']
        ]
        for (var pi = 0; pi < padding; pi++) layers.push(['XXX', 'XXX', 'XXX'])
        layers.push(['XGX', 'OXK', 'XRX'])
        layers.push(['XEX', 'XXX', 'XLX'])

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
                .set('R', api.levelSlot('sinkjourney:agitator'))
                .set('L', api.levelSlot('sinkjourney:lining'))
                .controller('C')
                .build()
        } catch (err) {
            console.warn('[化工] 结构 ' + structureId + ' 本次没有重新注册（同一会话里已注册过，重启生效）：' + err)
        }
    }

    for (var gi = 0; gi < GRADES.length; gi++) {
        registerGrade(GRADES[gi][0], GRADES[gi][1], GRADES[gi][2], GRADES[gi][3], GRADES[gi][4])
    }
})

ServerEvents.recipes(event => {
    const TCS = 'kubejs:trichlorosilane'
    const STC = 'kubejs:silicon_tetrachloride'
    const HCL = 'qmd:hydrochloric_acid'
    const HYDROGEN = 'industrialupgrade:iufluidhydrogen'

    // ---- 控制器 ----
    // 八块本档机壳 + 四块本档板 + 一个本档核心。
    const CONTROLLERS = [
        ['kinetic', 'create:brass_casing', { item: 'create:brass_sheet' }],
        ['steam', 'industrialupgrade:blockresource/steel_block', { item: 'industrialupgrade:itemplates/steel_plate' }],
        ['basic', 'industrialupgrade:baseblockalloy/stainless_steel', { tag: 'c:plates/steel' }],
        ['improved', 'industrialupgrade:baseblockalloy/inconel', { item: 'industrialupgrade:itemplates/nickel_plate' }],
        ['advanced', 'industrialupgrade:baseblockingot/titanium', { item: 'industrialupgrade:itemplates/titanium_plate' }],
        ['perfect', 'industrialupgrade:baseblockalloy1/cobalt_chrome', { tag: 'c:plates/niobiumtitanium' }]
    ]

    for (const [id, casing, plate] of CONTROLLERS) {
        event.shaped('mmcr:chemical_reactor_' + id + '_controller', [
            'PCP',
            'CSC',
            'PCP'
        ], {
            P: casing,
            C: plate,
            S: 'create:precision_mechanism'
        }).id('kubejs:chem_reactor/' + id + '_controller')
    }

    // ---- 氯回收：四氯化硅 + 氢 -> 三氯硅烷 + 盐酸 ----
    // 催化加氢，现实在 500~600℃、加压下做；釜这一档只要求氢压，温度留给通用反应器。
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'sinkjourney:chemical_reactor_recycle',
        tick_time: 300,
        requirements: [
            { type: 'pneumaticcraft:air', io: 'input', air_per_tick: 20, min_pressure: 10.0 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: STC }, amount: 3000 },
            { type: 'minecraft:fluid', io: 'input', fluid: { fluid: HYDROGEN }, amount: 3000 },
            { type: 'minecraft:fluid', io: 'output', stack: { id: TCS, amount: 3000 } },
            { type: 'minecraft:fluid', io: 'output', stack: { id: HCL, amount: 3000 } },
            { type: 'neoforge:energy', io: 'input', fe_per_tick: 256 }
        ]
    }).id('kubejs:chem_reactor/stc_recycle')

    console.info('[化工] 化学反应釜六档结构与配方就绪（共用池 sinkjourney:chemical_reactor，液相釜式反应 + IU 迁入配方）')
})
