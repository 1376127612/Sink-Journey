// ============================================================
// 铂族精炼线 —— 16 条配方，全部落在化学反应釜的共用池
// ------------------------------------------------------------
// 池子：sinkjourney:chemical_reactor_leach（釜的「浸出与腐蚀」页签，见 industrial/chemical_reactor.js）
// 物品 / 流体：startup_scripts/industrial/pgm_items.js
// 熔铸（海绵/粉末 -> 锭）：kubejs/sjcore/pgm.json 的 furnace 补丁
// 设计说明与验收：kubejs/docs/PGM_LINE.md
//
// 整条线按现实的湿法铂族精炼排：
//
//   镍精矿 --加压氧浸--> 铂族精矿 + 硫酸镍液 --氢还原--> 镍粉 + 硫酸（循环）
//   铂族精矿 --王水溶解--> 铂钯氯合液 + 铱锇渣
//   铂钯氯合液 --赶硝--> --氯化铵沉铂--> 氯铂酸铵 --煅烧--> 海绵铂 --熔铸--> 铂锭
//                                     \-> 氯亚钯酸液 --氯气+氯化铵--> 氯钯酸铵 --肼还原--> 海绵钯 --> 钯锭
//   铱锇渣 --氧化蒸馏--> 四氧化锇 --盐酸吸收--> 氯锇酸液 --氯化铵--> 氯锇酸铵 --氢还原--> 锇粉 --> 锇锭
//                     \-> 铱渣 --氯压浸出--> 氯铱酸液 --氯化铵--> 氯铱酸铵 --氢还原--> 铱粉 --> 铱锭
//
// 门槛（釜南墙三个口，与 CHEMICAL_REACTOR.md 的规则一致）：
//   气压   浸出与氯压段要加压：镍氧浸 5 bar、镍氢还原 10 bar、铱氯压浸 10 bar
//   搅拌   传质：矿浆与金属渣浸出用桨式，还原与氯压段用涡轮
//   衬里   钛用在真正需要它的地方：加压氧浸（钛衬高压釜）、氯压浸铱（氯气+盐酸+10 bar）、
//          氯气氧化沉钯，以及热的浓氯化物溶液段（氯铂酸铵沉铂、氯铱酸铵沉铱 —— 氯离子对
//          不锈钢是应力腐蚀，工业上这些段统一走钛材）；
//          搪玻璃留给王水配制/溶解/赶硝（王水不咬玻璃，实验室与精炼厂都拿玻璃装）、
//          锇段（OsO4 蒸馏与盐酸吸收都在玻璃蒸馏器里做）与煅烧（石英/陶瓷炉衬）；
//          氢还原段（镍、钯、锇、铱）是不锈钢，氢气和稀盐酸对搪玻璃与钛都不友好
//
// 收率口径：9 份镍精矿（IU 纯净碎镍矿）= 1 铂 + 1 钯 + 0.25 锇 + 0.25 铱，
// 镍只回收 2 份（原来直接离心的 9 份镍换成 2 份铂钯，现在镍与铂族分开计价）。
// 铑、钌留在残液里不出：本包没有这两种金属的物品与下游，硬加等于造两堆没处用的粉。
// ============================================================

ServerEvents.recipes(event => {
    const recipe = (id, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:chemical_reactor_leach',
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }

    const HCL = 'qmd:hydrochloric_acid'
    const HNO3 = 'industrialupgrade:iufluidnitricacid'
    const CL2 = 'industrialupgrade:iufluidchlorum'
    const H2 = 'industrialupgrade:iufluidhydrogen'
    const O2 = 'industrialupgrade:iufluidoxygen'
    const H2SO4 = 'industrialupgrade:iufluidsulfuricacid'
    const NO2 = 'industrialupgrade:iufluidnitrogendioxide'
    const N2 = 'industrialupgrade:iufluidnitrogen'
    const HYDRAZINE = 'industrialupgrade:iufluidhydrazine'
    const WATER = 'minecraft:water'

    // IU 的既有无机盐与金属粉，不另注册
    const NH4CL = 'industrialupgrade:itemdust/ammonium_chloride_dust'
    const NI_CONC = 'industrialupgrade:purifiedcrushed/nickel'
    const NI_DUST = 'industrialupgrade:itemdust/nickel_dust'
    const OS_DUST = 'industrialupgrade:itemdust/osmium_dust'
    const IR_DUST = 'industrialupgrade:itemdust/iridium_dust'
    const SILICA = 'industrialupgrade:itemdust/silicon_dioxide_dust'

    // 本线新增的中间体（pgm_items.js）
    const PGMC = 'kubejs:pgm_concentrate'
    const IR_OS_RES = 'kubejs:iridosmine_residue'
    const IR_RES = 'kubejs:iridium_residue'
    const AMM_PT = 'kubejs:ammonium_chloroplatinate'
    const AMM_PD = 'kubejs:ammonium_chloropalladate'
    const AMM_OS = 'kubejs:ammonium_chloroosmate'
    const AMM_IR = 'kubejs:ammonium_chloroiridate'
    const PT_SPONGE = 'kubejs:platinum_sponge'
    const PD_SPONGE = 'kubejs:palladium_sponge'
    const AQUA = 'kubejs:aqua_regia'
    const PGM_SOL = 'kubejs:pgm_chloride'
    const DENT_PGM = 'kubejs:denitrated_pgm'
    const PD_SOL = 'kubejs:palladium_chloride'
    const NI_SO4 = 'kubejs:nickel_sulfate'
    const OSO4 = 'kubejs:osmium_tetroxide'
    const H2OSCL6 = 'kubejs:chloroosmic_acid'
    const H2IRCL6 = 'kubejs:chloroiridic_acid'

    const fluidIn = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: { fluid: fluid }, amount: amount })
    const fluidOut = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: fluid, amount: amount } })
    const itemIn = (item, count) => ({ type: 'minecraft:item', io: 'input', item: { item: item }, count: count })
    const itemOut = (item, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: item, count: count } })
    const fe = (perTick) => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: perTick })
    const air = (perTick, bar) => ({ type: 'pneumaticcraft:air', io: 'input', air_per_tick: perTick, min_pressure: bar })
    const agitator = (level) => ({ type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_' + level })
    const lining = (level) => ({ type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_' + level })

    // ---- 1. 镍精矿加压氧浸 ----
    // 现实：镍铜硫化精矿在 130~150 ℃、0.5 MPa 氧压下浸出，镍进硫酸镍液，
    // 铂族因为电位高、硫化物难破，全部留在浸出渣里 —— 这就是"铂族精矿"。
    recipe('kubejs:chem_reactor/pgm/nickel_leach', 400, [
        itemIn(NI_CONC, 9),
        fluidIn(H2SO4, 3000),
        fluidIn(O2, 1000),
        air(20, 5.0),
        agitator('paddle'),
        lining('titanium'),
        fluidOut(NI_SO4, 3000),
        itemOut(PGMC, 1),
        fe(256)
    ])

    // ---- 2. 硫酸镍氢还原（INCO 法）----
    // 现实：NiSO4 + H2 -> Ni + H2SO4，180 ℃、3 MPa 下氢还原出镍粉，酸回到浸出段。
    recipe('kubejs:chem_reactor/pgm/nickel_reduction', 300, [
        fluidIn(NI_SO4, 3000),
        fluidIn(H2, 2000),
        air(20, 10.0),
        agitator('turbine'),
        lining('stainless'),
        itemOut(NI_DUST, 2),
        fluidOut(H2SO4, 1000),
        fe(256)
    ])

    // ---- 3. 王水配制 ----
    // 现实：浓盐酸 : 浓硝酸 = 3 : 1（体积），现配现用，放久了失效。
    recipe('kubejs:chem_reactor/pgm/aqua_regia', 60, [
        fluidIn(HCL, 3000),
        fluidIn(HNO3, 1000),
        lining('glass'),
        fluidOut(AQUA, 4000),
        fe(64)
    ])

    // ---- 4. 王水溶解 ----
    // 现实：90 ℃ 王水把 Pt、Pd、Au 溶成氯合酸，Ir、Os、Ru 基本不溶，留在渣里。
    // 这一步是整条线的分岔口：溶液走铂钯，渣走铱锇。
    recipe('kubejs:chem_reactor/pgm/aqua_regia_dissolve', 400, [
        itemIn(PGMC, 1),
        fluidIn(AQUA, 4000),
        agitator('paddle'),
        lining('glass'),
        fluidOut(PGM_SOL, 4000),
        itemOut(IR_OS_RES, 1),
        fe(256)
    ])

    // ---- 5. 赶硝 ----
    // 现实：王水带进来的硝酸会把后面的氯化铵氧化掉，必须先加盐酸反复蒸干赶尽硝酸。
    // 简化成一次加盐酸、出一股氮氧化物。
    recipe('kubejs:chem_reactor/pgm/denitration', 240, [
        fluidIn(PGM_SOL, 4000),
        fluidIn(HCL, 1000),
        agitator('paddle'),
        lining('glass'),
        fluidOut(DENT_PGM, 4000),
        fluidOut(NO2, 500),
        fluidOut(WATER, 1000),
        fe(224)
    ])

    // ---- 6. 氯化铵沉铂 ----
    // 现实：H2PtCl6 + 2NH4Cl -> (NH4)2PtCl6↓ + 2HCl，铂以柠檬黄色铵盐析出，
    // 钯留在母液里 —— 这就是铂钯分离。氯化铵过量一点，保证沉干净。
    recipe('kubejs:chem_reactor/pgm/pt_precipitate', 240, [
        fluidIn(DENT_PGM, 4000),
        itemIn(NH4CL, 3),
        agitator('paddle'),
        lining('titanium'),
        itemOut(AMM_PT, 1),
        fluidOut(PD_SOL, 4000),
        fe(192)
    ])

    // ---- 7. 氯铂酸铵煅烧 ----
    // 现实：(NH4)2PtCl6 在 900 ℃ 分解成海绵铂，副产氯化铵与氯气，两者都能回用。
    // 釜里做煅烧是抽象：没有热输入来源之前，温度用能耗表达。
    recipe('kubejs:chem_reactor/pgm/pt_calcine', 500, [
        itemIn(AMM_PT, 1),
        lining('glass'),
        itemOut(PT_SPONGE, 1),
        itemOut(NH4CL, 2),
        fluidOut(CL2, 1000),
        fe(320)
    ])

    // ---- 8. 氯气氧化沉钯 ----
    // 现实：母液里的 Pd(II) 要先通氯氧化成 Pd(IV)，再加氯化铵才沉得下 (NH4)2PdCl6。
    // 直接加氯化铵只能得到可溶的二氯二氨钯，所以这里必须有氯气。
    recipe('kubejs:chem_reactor/pgm/pd_precipitate', 240, [
        fluidIn(PD_SOL, 4000),
        itemIn(NH4CL, 2),
        fluidIn(CL2, 500),
        agitator('paddle'),
        lining('titanium'),
        itemOut(AMM_PD, 1),
        fluidOut(HCL, 2000),
        fe(224)
    ])

    // ---- 9. 水合肼还原钯 ----
    // 现实：(NH4)2PdCl6 + N2H4 -> Pd + 2NH4Cl + 2HCl + N2，室温就能还原干净。
    recipe('kubejs:chem_reactor/pgm/pd_reduce', 240, [
        itemIn(AMM_PD, 1),
        fluidIn(HYDRAZINE, 500),
        agitator('turbine'),
        lining('stainless'),
        itemOut(PD_SPONGE, 1),
        itemOut(NH4CL, 2),
        fluidOut(HCL, 1000),
        fluidOut(N2, 200),
        fe(192)
    ])

    // ---- 10. 氧化蒸馏锇 ----
    // 现实：含锇渣通氧焙烧，Os 被氧化成挥发性 OsO4 随气流带走，铱留在渣里。
    // 四份铱锇渣凑一批：锇在精矿里的品位比铂钯低一个数量级，收率靠凑批表达。
    recipe('kubejs:chem_reactor/pgm/os_distill', 500, [
        itemIn(IR_OS_RES, 4),
        fluidIn(O2, 2000),
        lining('glass'),
        fluidOut(OSO4, 1000),
        itemOut(IR_RES, 1),
        fe(320)
    ])

    // ---- 11. 四氧化锇吸收 ----
    // 现实：OsO4 + 10HCl -> H2OsCl6 + 4H2O + 2Cl2，用浓盐酸吸收成氯锇酸。
    recipe('kubejs:chem_reactor/pgm/os_absorb', 120, [
        fluidIn(OSO4, 1000),
        fluidIn(HCL, 10000),
        agitator('paddle'),
        lining('glass'),
        fluidOut(H2OSCL6, 1000),
        fluidOut(WATER, 4000),
        fluidOut(CL2, 2000),
        fe(128)
    ])

    // ---- 12. 氯化铵沉锇 ----
    // 现实：H2OsCl6 + 2NH4Cl -> (NH4)2OsCl6↓ + 2HCl。
    recipe('kubejs:chem_reactor/pgm/os_precipitate', 120, [
        fluidIn(H2OSCL6, 1000),
        itemIn(NH4CL, 2),
        agitator('paddle'),
        lining('glass'),
        itemOut(AMM_OS, 1),
        fluidOut(HCL, 2000),
        fe(128)
    ])

    // ---- 13. 氢还原锇 ----
    // 现实：(NH4)2OsCl6 + 2H2 -> Os + 2NH4Cl + 4HCl，700 ℃ 氢还原得海绵锇。
    recipe('kubejs:chem_reactor/pgm/os_reduce', 240, [
        itemIn(AMM_OS, 1),
        fluidIn(H2, 2000),
        lining('stainless'),
        itemOut(OS_DUST, 1),
        itemOut(NH4CL, 2),
        fluidOut(HCL, 4000),
        fe(224)
    ])

    // ---- 14. 氯压浸铱 ----
    // 现实：铱是铂族里最难溶的，要在 0.6~1 MPa 氯压下用盐酸慢慢啃，
    // 生成氯铱酸 H2IrCl6；不溶的二氧化硅等脉石作尾渣排出。
    recipe('kubejs:chem_reactor/pgm/ir_leach', 500, [
        itemIn(IR_RES, 1),
        fluidIn(HCL, 4000),
        fluidIn(CL2, 2000),
        air(20, 10.0),
        agitator('turbine'),
        lining('titanium'),
        fluidOut(H2IRCL6, 2000),
        itemOut(SILICA, 1),
        fe(320)
    ])

    // ---- 15. 氯化铵沉铱 ----
    // 现实：H2IrCl6 + 2NH4Cl -> (NH4)2IrCl6↓ + 2HCl。
    recipe('kubejs:chem_reactor/pgm/ir_precipitate', 120, [
        fluidIn(H2IRCL6, 2000),
        itemIn(NH4CL, 2),
        agitator('paddle'),
        lining('titanium'),
        itemOut(AMM_IR, 1),
        fluidOut(HCL, 2000),
        fe(128)
    ])

    // ---- 16. 氢还原铱 ----
    // 现实：(NH4)2IrCl6 + 2H2 -> Ir + 2NH4Cl + 4HCl，900 ℃ 氢还原得铱粉。
    recipe('kubejs:chem_reactor/pgm/ir_reduce', 240, [
        itemIn(AMM_IR, 1),
        fluidIn(H2, 2000),
        lining('stainless'),
        itemOut(IR_DUST, 1),
        itemOut(NH4CL, 2),
        fluidOut(HCL, 4000),
        fe(224)
    ])

    console.info('[化工] 铂族精炼线 16 条已装入 sinkjourney:chemical_reactor_leach（镍氧浸 → 王水 → 铂钯/铱锇分家）')
})
