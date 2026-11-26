// ============================================================
// 稀土湿法线 —— 26 条配方
// ------------------------------------------------------------
// 池子：sinkjourney:chemical_reactor_hydromet（釜的「稀土湿法」页签）
//       氧化焙烧那一条在 sinkjourney:reactor_fluidized（通用反应器·流化床）
// 物品 / 流体：startup_scripts/industrial/rare_earth_items.js
// 熔铸 / 封直炼：kubejs/sjcore/rare_earth.json
// 设计说明与验收：kubejs/docs/RARE_EARTH_LINE.md
//
// 整条线按现实的独居石湿法排（包头碱法 + 酸法优溶的组合）：
//
//   4 独居石 --浮选(脂肪酸, 2 bar)--> 稀土精矿
//   精矿 --浓碱分解--> 氢氧化稀土 + 磷酸三钠
//   氢氧化稀土 --氧化焙烧(600℃, 空气)--> 混合稀土氧化物（Ce³⁺ → Ce⁴⁺）
//   混合氧化物 --盐酸优溶--> 氯化稀土料液 + 富铈渣（CeO₂ 不溶于盐酸）
//   氯化稀土料液 --中和除杂--> 净化氯化稀土 + 铁钍渣
//   净化液 --P204 分组--> 轻稀土（La~Nd） / 中重稀土（Sm~Lu+Y）
//   轻稀土 --P507--> 氯化镧（萃余） / 镨钕氯化液（反萃）
//   中重   --P507--> 钆富集液 / 重稀土液 --P507--> 钇富集液 / 重稀土残液
//   各段 --草酸沉淀 + 焙烧--> 氧化物 --HF 氟化--> 氟化稀土 --钙热还原--> 稀土粉 --熔铸--> 锭
//   富铈渣 --硝酸溶解 + 草酸沉淀 + 焙烧--> 氧化铈
//   氧化镧 + 氧化铈 --稀土交换--> 稀土改性分子筛催化剂（石油线 G2 催化剂床）
//
// 门槛（釜南墙三个口 + 通用反应器，规则见 CHEMICAL_REACTOR.md）：
//   搅拌   浮选/浸出/沉淀要桨式；萃取（混合澄清槽的多级逆流）与草酸合成用涡轮
//   衬里   浓碱分解、萃取、钙热还原、氟化用不锈钢（碱与有机相都要镍基/不锈钢；HF 三种衬里
//          都吃，不锈钢是"最不坏"的那个）；酸溶、优溶、草酸沉淀用搪玻璃；溶铈用钛
//          （硝酸 + 氯离子的热溶液对不锈钢是应力腐蚀，工业上这一段走钛材）
//   料比   萃取段按"有机相 : 水相 = 1 : 3"给，皂化剂 NaOH 直接写进配方（皂化率 ~35%）
//
// 收率口径：1 份稀土精矿（= 4 份独居石）出
//   钕（镨钕）1、钆 0.25、钇 0.25、氧化镧 0.5、氧化铈 0.5。
// 镨与钕、钐铕与钆不再细分：现实里镨钕分离系数只有 1.5，要上百级萃取，
// 磁材工业直接卖镨钕合金 —— 本包的「钕锭」就是镨钕金属，镨作为伴生组分不单列物品。
// 铽镝不单出：没有下游，出了就是两堆没处用的粉（与 PGM 线不收铑钌同一个理由）。
// ============================================================

ServerEvents.tags('item', event => {
    // 进料是独居石本身（`kubejs:monazite`，从火星的独居石矿来，一块矿掉两份）。
    // 以前这里挂的是 IU 的三种纯净碎稀土矿（钕/钇/钆）——那三种矿石与粗制原矿
    // 已经整层删掉（ORE_GENERATION.md §7.3），因为一份矿出三种元素本来就是错的：
    // 现实里是同一份独居石里同时有铈镧钕钆钇，元素要到萃取段才拆开。
    event.add('sinkjourney:rare_earth_feed', 'kubejs:monazite')
})

ServerEvents.recipes(event => {
    const recipe = (pool, id, tick, requirements) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: pool,
            tick_time: tick,
            requirements: requirements
        }).id(id)
    }
    const HYDRO = 'sinkjourney:chemical_reactor_hydromet'
    const FLUID_BED = 'sinkjourney:reactor_fluidized'

    const HCL = 'qmd:hydrochloric_acid'
    const HNO3 = 'industrialupgrade:iufluidnitricacid'
    const HF = 'industrialupgrade:iufluidfluorhyd'
    const NAOH = 'industrialupgrade:iufluidsodiumhydroxide'
    const H3PO4 = 'industrialupgrade:iufluidorthophosphoricacid'
    const EHOL = 'industrialupgrade:iufluidethylhexanol'
    const CO = 'industrialupgrade:iufluidcarbonmonoxide'
    const CO2 = 'industrialupgrade:iufluidcarbondioxide'
    const O2 = 'industrialupgrade:iufluidoxygen'
    const H2 = 'industrialupgrade:iufluidhydrogen'
    const SEED_OIL = 'industrialupgrade:iufluidseedoil'
    const WATER = 'minecraft:water'

    const CA = 'industrialupgrade:itemdust/calcium_dust_dust'
    const CAF2 = 'industrialupgrade:itemdust/calcium_fluoride_dust'
    const NA3PO4 = 'industrialupgrade:itemdust/sodium_phosphate_dust'
    const STONE = 'industrialupgrade:itemdust/stone_dust'
    const ND_DUST = 'industrialupgrade:itemdust/neodymium_dust'
    const GD_DUST = 'industrialupgrade:itemdust/gadolinium_dust'
    const Y_DUST = 'industrialupgrade:itemdust/yttrium_dust'
    const ALUMINA_CAT = 'kubejs:catalyst_silica_alumina'
    const MOLSIEVE = 'kubejs:catalyst_molecular_sieve'

    const CONC = 'kubejs:rare_earth_concentrate'
    const HYDR = 'kubejs:rare_earth_hydroxide'
    const MIX_OX = 'kubejs:mixed_rare_earth_oxide'
    const CE_RES = 'kubejs:cerium_rich_residue'
    const TH_RES = 'kubejs:iron_thorium_residue'
    const LA2O3 = 'kubejs:lanthanum_oxide'
    const CEO2 = 'kubejs:cerium_oxide'
    const PRND_OX = 'kubejs:prnd_oxide'
    const GD2O3 = 'kubejs:gadolinium_oxide'
    const Y2O3 = 'kubejs:yttrium_oxide'
    const PRND_F3 = 'kubejs:prnd_fluoride'
    const GDF3 = 'kubejs:gadolinium_fluoride'
    const YF3 = 'kubejs:yttrium_fluoride'

    const RE_CL = 'kubejs:rare_earth_chloride'
    const RE_CL_PURE = 'kubejs:ra_purified_chloride'
    const RA_LIGHT = 'kubejs:ra_light_chloride'
    const RA_MIDDLE = 'kubejs:ra_middle_chloride'
    const RA_LA = 'kubejs:ra_la_chloride'
    const RA_PRND = 'kubejs:ra_prnd_chloride'
    const RA_GD = 'kubejs:ra_gd_chloride'
    const RA_HEAVY = 'kubejs:ra_heavy_chloride'
    const RA_Y = 'kubejs:ra_y_chloride'
    const RA_RAFF = 'kubejs:ra_heavy_raffinate'
    const NA3PO4_SOL = 'kubejs:sodium_phosphate_solution'
    const CE_NITRATE = 'kubejs:cerium_nitrate'
    const OXALIC = 'kubejs:oxalic_acid'
    const P204 = 'kubejs:p204'
    const P507 = 'kubejs:p507'

    const fluidIn = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: { fluid: fluid }, amount: amount })
    const fluidOut = (fluid, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: fluid, amount: amount } })
    const itemIn = (item, count) => ({ type: 'minecraft:item', io: 'input', item: { item: item }, count: count })
    const itemOut = (item, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: item, count: count } })
    const tagIn = (tag, count) => ({ type: 'minecraft:item', io: 'input', item: { tag: tag }, count: count })
    const fe = (perTick) => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: perTick })
    const air = (perTick, bar) => ({ type: 'pneumaticcraft:air', io: 'input', air_per_tick: perTick, min_pressure: bar })
    const agitator = (level) => ({ type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:agitator', level: 'sinkjourney:agitator_' + level })
    const lining = (level) => ({ type: 'mmcr:level', io: 'input', level_type: 'sinkjourney:lining', level: 'sinkjourney:lining_' + level })

    // ---- 1. 浮选 ----
    // 现实：氟碳铈矿/独居石用脂肪酸类捕收剂（塔尔油/油酸）浮选，水玻璃抑制硅酸盐脉石，
    // 粗精矿再精选到 REO 60% 以上。种子油在这里代表脂肪酸捕收剂。
    // 进料是 4 份独居石（矿里带磷、钍与脉石），浮出 1 份精矿，石粉进尾矿。
    recipe(HYDRO, 'kubejs:chem_reactor/re/flotation', 200, [
        tagIn('sinkjourney:rare_earth_feed', 4),
        fluidIn(SEED_OIL, 500),
        fluidIn(WATER, 2000),
        air(20, 2.0),
        agitator('paddle'),
        lining('glass'),
        itemOut(CONC, 1),
        itemOut(STONE, 2),
        fe(192)
    ])

    // ---- 2. 浓碱分解 ----
    // 现实：独居石 + 50% NaOH，140~170 ℃ 煮 4 h，稀土变成氢氧化物，磷以 Na3PO4 进洗水。
    // 这是独居石法绕开硫酸焙烧放氟的关键一步；浓碱对搪玻璃不友好，用不锈钢。
    recipe(HYDRO, 'kubejs:chem_reactor/re/alkali_crack', 480, [
        itemIn(CONC, 1),
        fluidIn(NAOH, 2000),
        fluidIn(WATER, 1000),
        agitator('paddle'),
        lining('stainless'),
        itemOut(HYDR, 1),
        fluidOut(NA3PO4_SOL, 2000),
        fe(320)
    ])

    // ---- 3. 磷酸三钠结晶 ----
    // 现实：碱分解洗水蒸发浓缩、冷却结晶出 Na3PO4·12H2O，磷不废。
    recipe(HYDRO, 'kubejs:chem_reactor/re/na3po4_crystallize', 160, [
        fluidIn(NA3PO4_SOL, 2000),
        agitator('paddle'),
        lining('glass'),
        itemOut(NA3PO4, 2),
        fluidOut(WATER, 2000),
        fe(64)
    ])

    // ---- 4. 氧化焙烧 ----
    // 现实：600~700 ℃ 空气焙烧，氢氧化物脱水成氧化物，同时把 Ce³⁺ 氧化成 Ce⁴⁺，
    // 这是下一步"优溶分铈"成立的前提（CeO₂ 在盐酸里不溶）。
    // 流态化焙烧炉 —— 用通用反应器的流化床段。
    recipe(FLUID_BED, 'kubejs:reactors/re_roast', 400, [
        itemIn(HYDR, 2),
        fluidIn(O2, 1000),
        itemOut(MIX_OX, 2),
        fluidOut(WATER, 1000),
        fe(256)
    ])

    // ---- 5. 盐酸优溶 ----
    // 现实：控制酸量把 La/Pr/Nd/Gd/Y 溶出来，CeO₂（以及钍、脉石）留在渣里 ——
    // 铈的第一道分离不在萃取槽，而在这里。工业上叫"优先溶解"。
    recipe(HYDRO, 'kubejs:chem_reactor/re/hcl_leach', 240, [
        itemIn(MIX_OX, 2),
        fluidIn(HCL, 3000),
        agitator('paddle'),
        lining('glass'),
        fluidOut(RE_CL, 3000),
        itemOut(CE_RES, 1),
        fe(224)
    ])

    // ---- 6. 中和除杂 ----
    // 现实：用碱液把 pH 提到 3.5~4，铁、钍、磷酸根水解成渣，稀土留在液相。
    // 钍是稀土矿的天然伴生放射性核素，这一段就是稀土的环保成本所在。
    recipe(HYDRO, 'kubejs:chem_reactor/re/neutralize', 180, [
        fluidIn(RE_CL, 3000),
        fluidIn(NAOH, 800),
        agitator('paddle'),
        lining('glass'),
        fluidOut(RE_CL_PURE, 3000),
        itemOut(TH_RES, 1),
        fe(160)
    ])

    // ---- 7. 富铈渣溶铈 ----
    // 现实：富铈渣用硝酸加热溶解（必要时加少量还原剂把 Ce⁴⁺ 拉回 Ce³⁺），
    // 钍与脉石不溶，留在渣里。硝酸 + 氯离子对不锈钢不友好，这一段用钛。
    recipe(HYDRO, 'kubejs:chem_reactor/re/ce_dissolve', 300, [
        itemIn(CE_RES, 1),
        fluidIn(HNO3, 2000),
        agitator('paddle'),
        lining('titanium'),
        fluidOut(CE_NITRATE, 2000),
        itemOut(TH_RES, 1),
        fe(256)
    ])

    // ---- 8. 铈沉淀 + 焙烧 ----
    // 现实：硝酸铈液加草酸得草酸铈，800 ℃ 焙烧成 CeO₂；硝酸回到溶铈段。
    // 沉淀与焙烧合成一条，与 PGM 线"釜里做煅烧、温度用能耗表达"同一套抽象。
    recipe(HYDRO, 'kubejs:chem_reactor/re/ce_oxide', 400, [
        fluidIn(CE_NITRATE, 2000),
        fluidIn(OXALIC, 1000),
        agitator('paddle'),
        lining('glass'),
        itemOut(CEO2, 1),
        fluidOut(HNO3, 1000),
        fluidOut(CO2, 500),
        fe(320)
    ])

    // ---- 9. 草酸合成 ----
    // 现实：一氧化碳与氢氧化钠先成甲酸钠，再高温脱氢偶联成草酸钠，酸化得草酸。
    // 这里合成一条，副产氢回还原段，酸根按草酸直接给。
    recipe(HYDRO, 'kubejs:chem_reactor/re/oxalic_synthesis', 300, [
        fluidIn(CO, 2000),
        fluidIn(NAOH, 4000),
        agitator('turbine'),
        lining('stainless'),
        fluidOut(OXALIC, 2000),
        fluidOut(H2, 1000),
        fe(256)
    ])

    // ---- 10. P204 合成 ----
    // 现实：P204 = 二(2-乙基己基)磷酸，由 2-乙基己醇与磷酸（工业上走 POCl₃）酯化得到。
    // 本包没有 POCl₃，用正磷酸 + 乙基己醇一步酯化代表，产物按萃取剂计。
    recipe(HYDRO, 'kubejs:chem_reactor/re/p204_synthesis', 240, [
        fluidIn(H3PO4, 1000),
        fluidIn(EHOL, 2000),
        agitator('paddle'),
        lining('glass'),
        fluidOut(P204, 2000),
        fluidOut(WATER, 1000),
        fe(192)
    ])

    // ---- 11. P507 合成 ----
    // 现实：P507 = 2-乙基己基膦酸单 2-乙基己基酯，比 P204 多一个酯基、分离系数更高，
    // 单元素分离全靠它。同样用一步酯化代表。
    recipe(HYDRO, 'kubejs:chem_reactor/re/p507_synthesis', 240, [
        fluidIn(P204, 2000),
        fluidIn(EHOL, 1000),
        agitator('paddle'),
        lining('glass'),
        fluidOut(P507, 2000),
        fluidOut(WATER, 500),
        fe(192)
    ])

    // ---- 12. P204 分组萃取 ----
    // 现实：皂化 P204 把中重稀土（Sm~Lu、Y）拉进有机相，La~Nd 留在水相；
    // 有机相用 0.5~1 M 盐酸反萃回中重稀土氯化液。混合澄清槽多级逆流，用涡轮代表传质。
    recipe(HYDRO, 'kubejs:chem_reactor/re/p204_group', 300, [
        fluidIn(RE_CL_PURE, 3000),
        fluidIn(P204, 1000),
        fluidIn(NAOH, 500),
        agitator('turbine'),
        lining('stainless'),
        fluidOut(RA_LIGHT, 2000),
        fluidOut(RA_MIDDLE, 1000),
        fe(256)
    ])

    // ---- 13. P507 轻稀土分组 ----
    // 现实：P507 上镧几乎不被萃取、留在萃余相；镨钕进有机相再反萃。
    // 镧与镨钕的分家就是这一步，也是"镧最便宜"的原因。
    recipe(HYDRO, 'kubejs:chem_reactor/re/p507_light_split', 400, [
        fluidIn(RA_LIGHT, 2000),
        fluidIn(P507, 1000),
        fluidIn(NAOH, 500),
        agitator('turbine'),
        lining('stainless'),
        fluidOut(RA_LA, 1000),
        fluidOut(RA_PRND, 1000),
        fe(320)
    ])

    // ---- 14. P507 中重分组 ----
    // 现实：中重稀土里钆是中点，P507 把钆以前的（Sm/Eu/Gd）与铽以后的（Tb~Lu）分开。
    // 钐铕在本包没有下游，跟着钆富集液走，进氧化钆。
    recipe(HYDRO, 'kubejs:chem_reactor/re/p507_middle_split', 400, [
        fluidIn(RA_MIDDLE, 1000),
        fluidIn(P507, 500),
        fluidIn(NAOH, 250),
        agitator('turbine'),
        lining('stainless'),
        fluidOut(RA_GD, 500),
        fluidOut(RA_HEAVY, 500),
        fe(320)
    ])

    // ---- 15. P507 提钇 ----
    // 现实：钇在 P507 上的位置落在铒附近，重稀土料多级萃取后钇进反萃液，
    // 镱镥留在残液里单独外售。钇的化学性质像重稀土，但地壳丰度像轻稀土，这条线就是它的出处。
    recipe(HYDRO, 'kubejs:chem_reactor/re/p507_yttrium', 400, [
        fluidIn(RA_HEAVY, 500),
        fluidIn(P507, 500),
        fluidIn(NAOH, 250),
        agitator('turbine'),
        lining('stainless'),
        fluidOut(RA_Y, 500),
        fluidOut(RA_RAFF, 200),
        fe(320)
    ])

    // ---- 16. 镧沉淀 + 焙烧 ----
    // 现实：氯化镧液 + 草酸 -> 草酸镧 -> 800 ℃ 焙烧 -> La₂O₃，滤液是盐酸，回优溶段。
    recipe(HYDRO, 'kubejs:chem_reactor/re/la_oxide', 320, [
        fluidIn(RA_LA, 1000),
        fluidIn(OXALIC, 1000),
        agitator('paddle'),
        lining('glass'),
        itemOut(LA2O3, 1),
        fluidOut(HCL, 1000),
        fluidOut(CO2, 500),
        fe(256)
    ])

    // ---- 17. 镨钕沉淀 + 焙烧 ----
    // 现实：镨钕氯化液 + 草酸 -> 草酸镨钕 -> 焙烧 -> 镨钕氧化物（磁材的前驱体）。
    recipe(HYDRO, 'kubejs:chem_reactor/re/prnd_oxide', 320, [
        fluidIn(RA_PRND, 1000),
        fluidIn(OXALIC, 1000),
        agitator('paddle'),
        lining('glass'),
        itemOut(PRND_OX, 1),
        fluidOut(HCL, 1000),
        fluidOut(CO2, 500),
        fe(256)
    ])

    // ---- 18. 钆沉淀 + 焙烧 ----
    // 钆富集液按 2:1 沉淀：钆在稀土里的丰度只有钕的几分之一，靠凑批表达收率。
    recipe(HYDRO, 'kubejs:chem_reactor/re/gd_oxide', 320, [
        fluidIn(RA_GD, 2000),
        fluidIn(OXALIC, 1000),
        agitator('paddle'),
        lining('glass'),
        itemOut(GD2O3, 1),
        fluidOut(HCL, 1000),
        fluidOut(CO2, 500),
        fe(256)
    ])

    // ---- 19. 钇沉淀 + 焙烧 ----
    recipe(HYDRO, 'kubejs:chem_reactor/re/y_oxide', 320, [
        fluidIn(RA_Y, 2000),
        fluidIn(OXALIC, 1000),
        agitator('paddle'),
        lining('glass'),
        itemOut(Y2O3, 1),
        fluidOut(HCL, 1000),
        fluidOut(CO2, 500),
        fe(256)
    ])

    // ---- 20~22. 氟化 ----
    // 现实：氧化物 + 过量 HF -> 氟化稀土 + 水，110~150 ℃ 干燥。
    // HF 三种衬里都怕（见 CHEMICAL_REACTOR.md 的萤石那条），不锈钢是"最不坏"的那个。
    const fluoride = (id, oxide, out, tick) => {
        recipe(HYDRO, id, tick, [
            itemIn(oxide, 1),
            fluidIn(HF, 2000),
            agitator('paddle'),
            lining('stainless'),
            itemOut(out, 1),
            fluidOut(WATER, 1000),
            fe(224)
        ])
    }
    fluoride('kubejs:chem_reactor/re/prnd_fluoride', PRND_OX, PRND_F3, 240)
    fluoride('kubejs:chem_reactor/re/gd_fluoride', GD2O3, GDF3, 240)
    fluoride('kubejs:chem_reactor/re/y_fluoride', Y2O3, YF3, 240)

    // ---- 23~25. 钙热还原 ----
    // 现实：2REF₃ + 3Ca -> 2RE + 3CaF₂，1000~1500 ℃、氩气保护或真空，产物再真空蒸馏除钙。
    // 本包没有还原炉与真空蒸馏炉，用釜的高能耗代表这一段（与 PGM 线煅烧/氢还原同理）。
    // 现实里钕的工业路线是 NdF₃-LiF 熔盐电解，本包没有电解槽，统一走钙热还原（钆/钇本来就是钙热）。
    const calciothermic = (id, fluorideItem, dust) => {
        recipe(HYDRO, id, 400, [
            itemIn(fluorideItem, 2),
            itemIn(CA, 3),
            agitator('ribbon'),
            lining('stainless'),
            itemOut(dust, 2),
            itemOut(CAF2, 3),
            fe(384)
        ])
    }
    calciothermic('kubejs:chem_reactor/re/prnd_reduce', PRND_F3, ND_DUST)
    calciothermic('kubejs:chem_reactor/re/gd_reduce', GDF3, GD_DUST)
    calciothermic('kubejs:chem_reactor/re/y_reduce', YF3, Y_DUST)

    // ---- 26. 稀土改性分子筛催化剂 ----
    // 现实：FCC 催化剂的活性组分是稀土交换的 Y 型分子筛（REY），镧铈交换后焙烧固定，
    // 稀土在这里换来的是催化剂的水热稳定性 —— 这是镧铈最值钱的老本行。
    // 分子筛晶化那一步本包没有，用硅铝催化剂代表母体。
    recipe(HYDRO, 'kubejs:chem_reactor/re/re_zeolite', 400, [
        itemIn(ALUMINA_CAT, 1),
        itemIn(LA2O3, 1),
        itemIn(CEO2, 1),
        fluidIn(WATER, 1000),
        itemOut(MOLSIEVE, 2),
        fe(320)
    ])

    // 矿直接烧成锭的直炼配方封在同文件的 sjcore 补丁里（furnace 池）；原版熔炉也封掉，
    // 否则 IU 矿在原版炉子里照样一步出锭。
    const RE_INGOTS = [
        'industrialupgrade:itemingots/neodymium',
        'industrialupgrade:itemingots/yttrium',
        'industrialupgrade:itemingots/gadolinium'
    ]
    RE_INGOTS.forEach(ingot => {
        event.remove({ type: 'minecraft:smelting', output: ingot })
        event.remove({ type: 'minecraft:blasting', output: ingot })
    })

    console.info('[化工] 稀土湿法线 26 条已装入 sinkjourney:chemical_reactor_hydromet（浮选 → 碱分解 → 优溶分铈 → P204/P507 → 草酸 → 氟化 → 钙热还原）')
})
