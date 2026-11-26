// ============================================================
// 电解线的前驱体 —— 拜耳法、氟化盐、氯化镁（server）
// ------------------------------------------------------------
// 铝的三段前驱 + 冰晶石的氟闭环 + 镁的氯化，全部复用既有机器：
//   溶出 / 晶种分解 / 氟化 / 氯化  -> 化学反应釜（浸出与腐蚀池）
//   氢氧化铝焙烧                  -> 通用反应器 · 流化床
//
//   粗制铝矿石 + 氢氧化钠 --溶出--> 偏铝酸钠液 + 赤泥（石粉）
//   偏铝酸钠液 + 水       --分解--> 氢氧化铝 + 氢氧化钠液（回溶出）
//   氢氧化铝              --焙烧--> 氧化铝 + 水
//   氢氟酸 + 氢氧化钠     --> 氟化钠
//   氢氟酸 + 氢氧化铝     --> 氟化铝
//   氟化钠 + 氟化铝       --> 冰晶石（只补槽里的损耗）
//   镁粉 + 盐酸           --> 氯化镁 + 氢
//
// 现实依据：拜耳法用 50% NaOH 在 150~250 ℃ 溶出铝土矿，赤泥是副产；
// 冰晶石 Na3AlF6 由 NaF 与 AlF3 按 3:1 配；镁电解用无水 MgCl2。
// 设计说明：kubejs/docs/ELECTROLYSIS_LINE.md §6.5
// ============================================================

ServerEvents.recipes(event => {
    const NaOH = 'industrialupgrade:iufluidsodiumhydroxide'
    const HF = 'industrialupgrade:iufluidfluorhyd'
    const HCL = 'qmd:hydrochloric_acid'
    const H2 = 'industrialupgrade:iufluidhydrogen'
    const WATER = 'minecraft:water'
    const AL_ORE = 'industrialupgrade:raw_metals/raw_aluminium'
    const AL_OH3 = 'kubejs:aluminium_hydroxide'
    const AL2O3 = 'kubejs:aluminium_oxide'
    const NAF = 'kubejs:sodium_fluoride'
    const ALF3 = 'kubejs:aluminium_fluoride'
    const CRYOLITE = 'kubejs:cryolite'
    const MGCL2 = 'kubejs:magnesium_chloride'

    const itemIn = (item, count) => ({ type: 'minecraft:item', io: 'input', item: { item: item }, count: count })
    const itemOut = (item, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: item, count: count } })
    const fluidIn = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: { fluid: fluid }, amount: amount })
    const fluidOut = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: fluid, amount: amount } })
    const fe = (perTick) => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: perTick })

    const add = (id, pool, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: pool,
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }

    const LEACH = 'sinkjourney:chemical_reactor_leach'
    const FLUIDIZED = 'sinkjourney:reactor_fluidized'

    // ---- 拜耳法 ----
    add('kubejs:chem_reactor/bayer/digest', LEACH, 480, [
        itemIn(AL_ORE, 2),
        fluidIn(NaOH, 2000),
        fluidIn(WATER, 1000),
        fluidOut('kubejs:sodium_aluminate', 2000),
        itemOut('industrialupgrade:itemdust/stone_dust', 1),
        fe(160)
    ])

    add('kubejs:chem_reactor/bayer/precipitation', LEACH, 240, [
        fluidIn('kubejs:sodium_aluminate', 2000),
        fluidIn(WATER, 2000),
        itemOut(AL_OH3, 2),
        fluidOut(NaOH, 1000),
        fe(96)
    ])

    add('kubejs:chem_reactor/bayer/calcination', FLUIDIZED, 200, [
        itemIn(AL_OH3, 4),
        itemOut(AL2O3, 2),
        fluidOut(WATER, 2000),
        fe(64)
    ])

    // ---- 冰晶石（氟闭环）----
    add('kubejs:chem_reactor/cryolite/sodium_fluoride', LEACH, 180, [
        fluidIn(HF, 1000),
        fluidIn(NaOH, 500),
        itemOut(NAF, 1),
        fluidOut(WATER, 500),
        fe(64)
    ])

    add('kubejs:chem_reactor/cryolite/aluminium_fluoride', LEACH, 200, [
        fluidIn(HF, 3000),
        itemIn(AL_OH3, 2),
        itemOut(ALF3, 2),
        fluidOut(WATER, 1500),
        fe(72)
    ])

    add('kubejs:chem_reactor/cryolite/bath', LEACH, 220, [
        itemIn(NAF, 3),
        itemIn(ALF3, 1),
        itemOut(CRYOLITE, 1),
        fe(80)
    ])

    // ---- 氯化镁 ----
    add('kubejs:chem_reactor/mgcl2', LEACH, 200, [
        itemIn('industrialupgrade:itemdust/magnesium_dust', 2),
        fluidIn(HCL, 2000),
        itemOut(MGCL2, 2),
        fluidOut(H2, 1000),
        fe(72)
    ])

    console.info('[电解] 前驱体 7 条就绪（拜耳法 3 / 冰晶石 3 / 氯化镁 1）')
})
