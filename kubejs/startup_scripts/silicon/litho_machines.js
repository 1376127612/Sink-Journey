// ============================================================
// 光刻机（MMCR）—— 机器注册（startup）
// ------------------------------------------------------------
// 四台单腔机器，共用一个 3x3x3 结构模板，只有外壳外观和配方池不同：
//   Mk.I 接触式   recipe_pool sinkjourney:litho_mk1   只认 M1/M2 + H1
//   Mk.II i-line  recipe_pool sinkjourney:litho_mk2   到 M3，H1/H2
//   Mk.III DUV    recipe_pool sinkjourney:litho_mk3   到 M4，H2/H3
//   Mk.IV EUV     recipe_pool sinkjourney:litho_mk4   到 M6，H3/H4
// 另有一台晶圆切割机 wafer_dicer：吃曝光晶圆 + 规格单，切出分级裸片。
//
// 结构和配方：
//   server_scripts/silicon/litho_structure.js
//   server_scripts/silicon/litho_recipes.js
// 数值口径：tools/gen_chip_overhaul.py（与下面 TIERS 必须一致）
// ============================================================

MMCREvents.startup(event => {
    const TIERS = [
        ['wafer_dicer', 'minecraft:stonecutter'],
        ['litho_mk1', 'minecraft:iron_block'],
        ['litho_mk2', 'minecraft:copper_block'],
        ['litho_mk3', 'minecraft:gold_block'],
        ['litho_mk4', 'minecraft:diamond_block']
    ]

    for (const [id, skin] of TIERS) {
        event.createMachine(`sinkjourney:${id}`)
            .displayNameKey(`machine.sinkjourney.${id}`)
            .recipePool(`sinkjourney:${id}`)
            .appearance(skin)
            .register()
    }
})
