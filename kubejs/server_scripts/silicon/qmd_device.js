// ============================================================
// qmd 器件支线 —— 晶圆分级在 qmd 侧的执行者
// ------------------------------------------------------------
// qmd 原来一条路走到底：熔融硅 -> 晶柱 -> 晶圆 -> 掺杂 -> 三个处理器，
// 和晶圆分级完全不挂钩。现在按等级分两段：
//
//   T3（11N，qmd 结晶器直拉）       qmd 晶圆 -> N 型片 -> 基础处理器
//   T4（12N，磁控直拉炉）          器件级晶柱 -> 器件级晶圆 -> N/P 型片 -> 高级处理器
//                                                                      -> 精英处理器（间接）
//
// 这样「高级处理器必须高纯低氧的片子」这条就落到配方里，
// 和 IU 那侧「M1/M2 只要 6N、M3 起要 9N」是同一个逻辑。
//
// 机器：制造机（切片）、裂变辐照器（N 型中子嬗变）、组装机（P 型硼扩散 + 处理器总装）
// ============================================================

ServerEvents.recipes(event => {
    const BOULE_12N = 'kubejs:boule_12n'
    const DEVICE = 'kubejs:device_wafer'
    const DEVICE_N = 'kubejs:device_n_doped'
    const DEVICE_P = 'kubejs:device_p_doped'
    const BORON = 'nuclearcraftneohaul:boron_dust'

    // ---- 1. 切片：器件级晶柱 -> 器件级晶圆 ----
    event.custom({
        type: 'nuclearcraftneohaul:manufactory_recipe',
        itemIngredients: [
            { count: 1, ingredient: { item: BOULE_12N } }
        ],
        itemProducts: [
            { count: 4, ingredient: { item: DEVICE } }
        ],
        powerModifier: 1.5,
        radiation: 0.0,
        timeModifier: 1.5
    }).id('kubejs:qmd_device/slice_device_wafer')

    // ---- 2. N 型：中子嬗变掺磷（和 qmd 原配方同一套通量口径） ----
    event.custom({
        type: 'nuclearcraftneohaul:fission_irradiator_recipe',
        irradiatorBaseProcessRadiation: 0.0,
        irradiatorFluxRequired: 120000,
        irradiatorHeatPerFlux: 0.0,
        irradiatorMaxFluxPerTick: 9223372036854775807,
        irradiatorMinFluxPerTick: 0,
        irradiatorProcessEfficiency: 0.0,
        itemIngredient: { count: 1, ingredient: { item: DEVICE } },
        itemProduct: { count: 1, ingredient: { item: DEVICE_N } }
    }).id('kubejs:qmd_device/device_n_doped')

    // ---- 3. P 型：硼扩散 ----
    event.custom({
        type: 'nuclearcraftneohaul:assembler_recipe',
        itemIngredients: [
            { count: 1, ingredient: { item: DEVICE } },
            { count: 1, ingredient: { item: BORON } }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: DEVICE_P } }
        ],
        powerModifier: 1.0,
        radiation: 0.0,
        timeModifier: 1.0
    }).id('kubejs:qmd_device/device_p_doped')

    // ---- 4. 高级处理器改吃器件级 P 型片 ----
    // 原配方：基础处理器 + 红石 + 氧化铪 + 普通 P 型片
    // 现在 P 型那格必须是 12N 器件级片，高级处理器因此被压在磁控直拉后面。
    event.remove({ id: 'qmd:assembler/advanced_processor' })
    event.custom({
        type: 'nuclearcraftneohaul:assembler_recipe',
        itemIngredients: [
            { count: 1, ingredient: { tag: 'c:processors/basic' } },
            { count: 4, ingredient: { tag: 'c:dusts/redstone' } },
            { count: 1, ingredient: { tag: 'c:dusts/hafnium_oxide' } },
            { count: 1, ingredient: { item: DEVICE_P } }
        ],
        itemProducts: [
            { count: 1, ingredient: { item: 'qmd:semiconductor_advanced_processor' } }
        ],
        powerModifier: 1.0,
        radiation: 0.0,
        timeModifier: 1.0
    }).id('qmd:assembler/advanced_processor')

    console.info('[晶圆线] qmd 器件支线已分级：晶柱/晶圆 -> N/P 器件片 -> 高级处理器')
})
