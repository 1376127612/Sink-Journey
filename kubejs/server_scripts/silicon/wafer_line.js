// ============================================================
// 晶圆产线（KubeJS 配方）
// ------------------------------------------------------------
// 路线：
//   石英 + 碳 ──合金炉──> 冶金硅
//   冶金硅 + 盐酸 ──流体富集器──> 三氯硅烷
//   三氯硅烷 ──蒸馏器(精馏)──> 高纯三氯硅烷 + 四氯化硅（西门子法入口）
//   高纯三氯硅烷 ──结晶器──> 西门子多晶硅棒（9N，T2）
//   三氯硅烷 ──化学反应釜(歧化)──> 硅烷 + 四氯化硅
//   四氯化硅 + 氢气 ──化学反应釜──> 三氯硅烷 + 盐酸（闭路回收）
//   硅烷 ──结晶器──> 11N 多晶硅（T3）
//   11N 多晶硅 ──熔炉──> 熔融硅
//   熔融硅 ──结晶器(qmd 自带)──> qmd 单晶硅棒
//   单晶硅棒 ──制造机(qmd 自带)──> qmd 晶圆 ×4
//
// 五级硅的归属见 kubejs/docs/SILICON_WAFER_TIERS.md：
//   T1 区熔 + IU 直拉（6N，494）｜T2 改良西门子（9N）｜T3 硅烷裂解（11N）
//   T4 磁控直拉（12N，见 mcz_recipes.js）｜T5 同位素（暂缓）
//
// 机器：核科技 合金炉 / 流体富集器 / 化学反应釜 / 结晶器 / 熔炉 / 蒸馏器
//       + qmd 结晶器、核科技 制造机（后两段是原版自带配方）
//
// 说明文档：kubejs/docs/SILICON_WAFER_LINE.md
// ============================================================

ServerEvents.recipes(event => {
    // 冶金级硅（核科技「硅」）
    var SILICON = 'nuclearcraftneohaul:silicon_gem'
    var TCS = 'kubejs:trichlorosilane'
    var PT_TCS = 'kubejs:purified_tcs'
    var SILANE = 'kubejs:silane'
    var STC = 'kubejs:silicon_tetrachloride'
    var HCL = 'qmd:hydrochloric_acid'
    var MOLTEN = 'nuclearcraftneohaul:silicon'
    // 提纯工序的中间体：西门子棒（9N）、硅烷料（11N）
    var SIEMENS = 'kubejs:siemens_poly'
    var POLY11 = 'kubejs:poly_11n'

    // ---- 0. 拆掉三条捷径 ------------------------------------
    // 沙子 1:1 出硅
    event.remove({ id: 'nuclearcraftneohaul:manufactory/silicon_gem' })
    // 二氧化硅直接烧成硅
    event.remove({ id: 'nuclearcraftneohaul:silicon_gem_from_smelting_silica' })
    event.remove({ id: 'nuclearcraftneohaul:silicon_gem_from_blasting_silica' })
    // 冶金硅直接熔成单晶硅原料（三条熔炼配方全删）
    //   molten_silicon_from_gem / molten_silicon_from_block：按标签匹配
    //   silicon_from_：单独一条按物品匹配的 144mB 熔炼，最容易漏
    event.remove({ id: 'nuclearcraftneohaul:melter/molten_silicon_from_gem' })
    event.remove({ id: 'nuclearcraftneohaul:melter/molten_silicon_from_block' })
    event.remove({ id: 'nuclearcraftneohaul:melter/silicon_from_' })

    // ---- 1. 碳热还原：石英 + 碳 -> 冶金硅 ----------------
    // SiO2 + 2C -> Si + 2CO，产物是 98% 的冶金级硅，只能拿去氯化
    event.custom({
        type: 'nuclearcraftneohaul:alloy_furnace_recipe',
        itemIngredients: [
            { count: 2, ingredient: { item: 'minecraft:quartz' } },
            {
                count: 2,
                ingredient: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:charcoal' }
                ]
            }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: SILICON } }
        ],
        powerModifier: 1.5,
        radiation: 0.0,
        timeModifier: 2.0
    }).id('kubejs:silicon/mg_silicon')

    // ---- 2. 氯化：冶金硅 + 盐酸 -> 三氯硅烷 --------------
    // Si + 3HCl -> SiHCl3 + H2，副产氢气直接排空
    event.custom({
        type: 'nuclearcraftneohaul:enricher_recipe',
        itemIngredients: [
            { count: 1, ingredient: { item: SILICON } }
        ],
        fluidIngredients: [
            { amount: 1000, ingredient: { fluid: HCL } }
        ],
        fluidProducts: [
            { amount: 1000, ingredient: { fluid: TCS } }
        ],
        powerModifier: 2.0,
        radiation: 0.0,
        timeModifier: 3.0
    }).id('kubejs:silicon/trichlorosilane')

    // ---- 3. 歧化提纯：三氯硅烷 -> 硅烷 + 四氯化硅 --------
    // 4SiHCl3 -> SiH4 + 3SiCl4，硅烷沸点 -112°C，是整条线的提纯节点
    event.custom({
        type: 'nuclearcraftneohaul:chemical_reactor_recipe',
        fluidIngredients: [
            { amount: 4000, ingredient: { fluid: TCS } }
        ],
        fluidProducts: [
            { amount: 1000, ingredient: { fluid: SILANE } },
            { amount: 3000, ingredient: { fluid: STC } }
        ],
        powerModifier: 3.0,
        radiation: 0.0,
        timeModifier: 6.0
    }).id('kubejs:silicon/tcs_disproportionation')

    // ---- 4. 尾气回收：四氯化硅 + 氢气 -> 三氯硅烷 + 盐酸 --
    // SiCl4 + H2 -> SiHCl3 + HCl，把 3/4 的氯重新送回氯化段
    event.custom({
        type: 'nuclearcraftneohaul:chemical_reactor_recipe',
        fluidIngredients: [
            { amount: 3000, ingredient: { fluid: STC } },
            { amount: 3000, ingredient: { tag: 'c:hydrogen' } }
        ],
        fluidProducts: [
            { amount: 3000, ingredient: { fluid: TCS } },
            { amount: 3000, ingredient: { fluid: HCL } }
        ],
        powerModifier: 2.0,
        radiation: 0.0,
        timeModifier: 3.0
    }).id('kubejs:silicon/stc_recycle')

    // ---- 4.5 精馏：三氯硅烷粗料 -> 高纯三氯硅烷（西门子法入口） ----
    // 现实里靠多级精馏塔按沸点切掉 BCl3（低沸）与 PCl3（高沸），
    // 这一步决定硼磷残留，也是 6N 与 9N 的分界；切下来的重组分回氯循环。
    event.custom({
        type: 'nuclearcraftneohaul:multiblock_distiller_recipe',
        fluidIngredients: [
            { amount: 1000, ingredient: { fluid: TCS } }
        ],
        fluidProducts: [
            { amount: 850, ingredient: { fluid: PT_TCS } },
            { amount: 150, ingredient: { fluid: STC } }
        ],
        powerModifier: 2.0,
        timeModifier: 2.0
    }).id('kubejs:silicon/tcs_rectification')

    // ---- 4.6 西门子沉积：高纯三氯硅烷 -> 多晶硅棒（9N） ----
    // SiHCl3 在炽热的硅芯上分解沉积成棒。温度不够只会得到粉料，
    // 所以这里走结晶器，不放进普通熔炉。
    event.custom({
        type: 'nuclearcraftneohaul:crystallizer_recipe',
        fluidIngredients: [
            { amount: 850, ingredient: { fluid: PT_TCS } }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: SIEMENS } }
        ],
        powerModifier: 3.0,
        radiation: 0.0,
        timeModifier: 6.0
    }).id('kubejs:silicon/siemens_deposition')

    // ---- 5. 沉积：硅烷 -> 11N 多晶硅 ------------------
    // SiH4 -> Si + 2H2（800°C 热分解）。硅烷沸点 -112°C，本身又是一次
    // 精馏级提纯，所以出来的料比西门子棒再高一档（11N）。
    event.custom({
        type: 'nuclearcraftneohaul:crystallizer_recipe',
        fluidIngredients: [
            { amount: 1000, ingredient: { fluid: SILANE } }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: POLY11 } }
        ],
        powerModifier: 3.0,
        radiation: 0.0,
        timeModifier: 6.0
    }).id('kubejs:silicon/polysilicon_deposition')

    // ---- 6. 熔融：11N 多晶硅 -> 熔融硅 ----------------
    // 只有 11N 的料能进熔炉；1296mB 正好是一根单晶硅棒的料。
    // qmd 晶柱走这条支线，所以 qmd 器件也被压在硅烷线后面。
    event.custom({
        type: 'nuclearcraftneohaul:melter_recipe',
        itemIngredients: [
            { count: 1, ingredient: { item: POLY11 } }
        ],
        fluidProducts: [
            { amount: 1296, ingredient: { fluid: MOLTEN } }
        ],
        powerModifier: 2.0,
        radiation: 0.0,
        timeModifier: 2.0
    }).id('kubejs:silicon/molten_silicon')

    // ---- 7. P 型掺杂：硅晶圆 + 硼扩散 ------------------
    // qmd 的 N 型走裂变辐照（中子嬗变出磷），P 型一直没有上游，
    // 高级处理器因此够不到。这里补上硼扩散：硼粉贴片在组装机里扩散进晶圆。
    event.custom({
        type: 'nuclearcraftneohaul:assembler_recipe',
        itemIngredients: [
            { count: 1, ingredient: { tag: 'c:wafers/silicon' } },
            { count: 1, ingredient: { item: 'nuclearcraftneohaul:boron_dust' } }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: 'qmd:semiconductor_silicon_p_doped' } }
        ],
        powerModifier: 1.0,
        radiation: 0.0,
        timeModifier: 1.0
    }).id('kubejs:silicon/p_doped_wafer')

    console.info('[晶圆线] 已装载：精馏/西门子(9N) + 歧化/硅烷裂解(11N) + 熔融硅 + 硼扩散 P 型掺杂')
})
