// ============================================================
// 晶圆产线（KubeJS 配方）
// ------------------------------------------------------------
// 路线：
//   石英 + 碳 ──合金炉──> 冶金硅
//   冶金硅 + 盐酸 ──流体富集器──> 三氯硅烷
//   三氯硅烷 ──化学反应釜(歧化)──> 硅烷 + 四氯化硅
//   四氯化硅 + 氢气 ──化学反应釜──> 三氯硅烷 + 盐酸（闭路回收）
//   硅烷 ──结晶器──> 硅晶体 493（电子级多晶硅，硅烷法不用再过 IU 提纯）
//   493 ──熔炉──> 熔融硅
//   熔融硅 ──结晶器(qmd 自带)──> 单晶硅棒
//   单晶硅棒 ──制造机(qmd 自带)──> 晶圆 ×4
//
// 机器：核科技 合金炉 / 流体富集器 / 化学反应釜 / 结晶器 / 熔炉
//       + qmd 结晶器、核科技 制造机（后两段是原版自带配方）
//
// 说明文档：kubejs/docs/SILICON_WAFER_LINE.md
// ============================================================

ServerEvents.recipes(event => {
    // 冶金级硅（核科技「硅」）
    var SILICON = 'nuclearcraftneohaul:silicon_gem'
    // 电子级多晶硅：IU 的硅晶体。硅烷法直接产出，区域熔炼的 492 则要先提纯到这一级
    var EG_SI = 'industrialupgrade:crafting_elements/crafting_493_element'
    var TCS = 'kubejs:trichlorosilane'
    var SILANE = 'kubejs:silane'
    var STC = 'kubejs:silicon_tetrachloride'
    var HCL = 'qmd:hydrochloric_acid'
    var MOLTEN = 'nuclearcraftneohaul:silicon'

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

    // ---- 5. 沉积：硅烷 -> 电子级多晶硅 ------------------
    // SiH4 -> Si + 2H2（800°C 热分解）。硅烷法本身就是提纯手段，
    // 出来的直接是电子级 493，不需要温室再长一次。
    event.custom({
        type: 'nuclearcraftneohaul:crystallizer_recipe',
        fluidIngredients: [
            { amount: 1000, ingredient: { fluid: SILANE } }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: EG_SI } }
        ],
        powerModifier: 3.0,
        radiation: 0.0,
        timeModifier: 6.0
    }).id('kubejs:silicon/polysilicon_deposition')

    // ---- 6. 熔融：电子级多晶硅 -> 熔融硅 ----------------
    // 只有提纯后的 493 能进熔炉；1296mB 正好是一根单晶硅棒的料
    event.custom({
        type: 'nuclearcraftneohaul:melter_recipe',
        itemIngredients: [
            { count: 1, ingredient: { item: EG_SI } }
        ],
        fluidProducts: [
            { amount: 1296, ingredient: { fluid: MOLTEN } }
        ],
        powerModifier: 2.0,
        radiation: 0.0,
        timeModifier: 2.0
    }).id('kubejs:silicon/molten_silicon')

    console.info('[晶圆线] 已装载：石英->冶金硅->三氯硅烷->硅烷->电子级多晶硅->熔融硅，单晶/切片沿用 qmd 配方')
})
