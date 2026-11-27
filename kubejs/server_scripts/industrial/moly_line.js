// ============================================================
// 钼线 —— 焙烧 / 氨浸 / 氢还原（三段湿法 + 一段火法）
// ============================================================
//
// 设计见 kubejs/docs/IU_L2_IMPROVED_ELECTRIC.md §4.1（出口方案 A）与 §6.3。
// L2 的出口是 316L，而 316L 的 2~3% 钼必须有一条"真工序"来支撑；
// 这条线**不封**矿粉直烧的老路——两份矿直烧只出一块锭，走这条湿法出三块，
// 复杂度换产率，而不是拿墙挡人（2026-11-27 按这条口径改）。
//
//   2 纯净碎钼矿 --焙烧(流化床, 氧)--> 3 氧化钼 + 二氧化硫
//   3 氧化钼 --氨浸(桨式, 不锈钢)--> 3000 钼酸铵液
//   3000 钼酸铵液 --氢还原(涡轮, 不锈钢)--> 3 高纯钼粉 + 氨(回收) + 水
//   高纯钼粉 --垂熔(电炉, 见 kubejs/sjcore/moly.json)--> 钼锭（12000 FE）
//
// 现实锚点：钼精矿（MoS₂）先在 600~700 ℃ 多膛炉/流化床里氧化成 MoO₃（钼焙砂），
// 氨水浸出成钼酸铵液，净化后氢还原得到金属钼粉，最后电弧熔炼或垂熔烧结成锭。
// 硫以 SO₂ 走掉，正好接本包的硫酸线（ORE_UNIVERSAL_LINE.md 的 R4 焙烧段缺的就是它）。
//
// 机器：焙烧走通用反应器·流化床（sinkjourney:reactor_fluidized），
// 两段湿法走六档釜的「浸出与腐蚀」页签（sinkjourney:chemical_reactor_leach）。
// 物品/流体：startup_scripts/industrial/moly_items.js（改完要重启）。
// /reload 生效（本文件）。
// ============================================================

ServerEvents.recipes(event => {
    const recipe = (pool, id, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: pool,
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }

    const LEACH = 'sinkjourney:chemical_reactor_leach'
    const FLUID_BED = 'sinkjourney:reactor_fluidized'

    const O2 = 'industrialupgrade:iufluidoxygen'
    const H2 = 'industrialupgrade:iufluidhydrogen'
    const SO2 = 'industrialupgrade:iufluidsulfuroxide'
    const AMMONIA = 'industrialupgrade:iufluidnitrogenhydride'
    const WATER = 'minecraft:water'

    const MO_CONC = 'industrialupgrade:purifiedcrushed/molybdenum'
    const MO_OXIDE = 'kubejs:moly_oxide'
    const MO_POWDER = 'kubejs:moly_powder'
    const MO_LIQUOR = 'kubejs:ammonium_molybdate'

    const fluidIn = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: { fluid: fluid }, amount: amount })
    const fluidOut = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: fluid, amount: amount } })
    const itemIn = (item, count) => ({ type: 'minecraft:item', io: 'input', item: { item: item }, count: count })
    const itemOut = (item, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: item, count: count } })
    const fe = (perTick) => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: perTick })
    const agitator = (level) => ({ type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_' + level })
    const lining = (level) => ({ type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_' + level })

    // ---- 1. 氧化焙烧：MoS₂ + O₂ → MoO₃ + SO₂ ----
    // 流态化焙烧炉，600~700 ℃。硫必须在这里赶掉，否则后面的氨浸会把硫代钼酸铵也带进液相。
    recipe(FLUID_BED, 'kubejs:reactors/mo_roast', 400, [
        itemIn(MO_CONC, 2),
        fluidIn(O2, 2000),
        itemOut(MO_OXIDE, 3),
        fluidOut(SO2, 2000),
        fe(256)
    ])

    // ---- 2. 氨浸：MoO₃ + 2NH₄OH → (NH₄)₂MoO₄ + H₂O ----
    // 氨水浸出是钼冶炼的标准第二步：铜、铁留在渣里，钼进液相。
    // 碱性 + 含氨的料对搪玻璃不友好，不锈钢是这一段的标准衬里。
    recipe(LEACH, 'kubejs:chem_reactor/mo_ammonia_leach', 240, [
        itemIn(MO_OXIDE, 3),
        fluidIn(AMMONIA, 2000),
        fluidIn(WATER, 500),
        agitator('paddle'),
        lining('stainless'),
        fluidOut(MO_LIQUOR, 3000),
        fe(160)
    ])

    // ---- 3. 氢还原：钼酸铵 + 3H₂ → Mo + 2NH₃ + 4H₂O ----
    // 工业上分两段（MoO₃→MoO₂ 约 500 ℃，MoO₂→Mo 约 1000 ℃），这里合成一段：
    // 还原氛与氨的回收都留在同一个涡轮搅拌的高压釜里，氨回上一段用。
    recipe(LEACH, 'kubejs:chem_reactor/mo_h2_reduction', 600, [
        fluidIn(MO_LIQUOR, 3000),
        fluidIn(H2, 4000),
        agitator('turbine'),
        lining('stainless'),
        itemOut(MO_POWDER, 3),
        fluidOut(AMMONIA, 1500),
        fluidOut(WATER, 2000),
        fe(480)
    ])

    console.info('[钼线] 已装载：2 矿 → 3 焙砂 → 钼酸铵液 → 3 高纯钼粉（产率 1.5 倍）；垂熔入口在 sjcore/moly.json')
})
