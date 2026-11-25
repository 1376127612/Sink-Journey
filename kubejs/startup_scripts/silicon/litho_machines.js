// ============================================================
// 光刻机（MMCR）—— 机器注册（startup）
// ------------------------------------------------------------
// 四台单腔机器，共用一个 3x3x3 结构模板，只有光源世代、外壳外观和配方池不同：
//   Mk.I   g 线 436 nm / NA 0.28   印 1.5 µm、800 nm
//   Mk.II  i 线 365 nm / NA 0.55   加 350 nm
//   Mk.III KrF  248 nm / NA 0.70   加 180 nm
//   Mk.IV  ArF  193 nm / NA 1.35   加 90 nm、28 nm（双重曝光）
// 另有一台晶圆切割机 wafer_dicer：吃曝光晶圆 + 规格单，切出分级裸片。
//
// 能印多细由 λ/NA 算，配方表见 server_scripts/silicon/litho_recipes.js；
// 结构见 server_scripts/silicon/litho_structure.js；
// 数值口径：tools/gen_chip_overhaul.py。
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
