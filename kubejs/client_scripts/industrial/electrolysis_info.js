// ============================================================
// 电解 —— JEI 说明（client）
// ------------------------------------------------------------
// 水溶液电解的配方与内件都在核电工艺的电解池上：
//   kubejs/data/nuclearcraftneohaul/recipe/multiblock_electrolyzer/
//   kubejs/data/nuclearcraftneohaul/data_maps/
// 熔盐电解仍是本包的熔盐槽（server_scripts/industrial/electrolysis.js）。
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    event.add('nuclearcraftneohaul:electrolyzer_controller', [
        Text.translatable('jei.kubejs.nc_electrolyzer.info'),
        Text.translatable('jei.kubejs.nc_electrolyzer.info2'),
        Text.translatable('jei.kubejs.nc_electrolyzer.info3')
    ])
    event.add('kubejs:anode_slime', [
        Text.translatable('jei.kubejs.anode_slime.info')
    ])
    event.add('kubejs:electrolytic_copper', [
        Text.translatable('jei.kubejs.electrolytic_copper.info')
    ])
    event.add('kubejs:electrolytic_nickel', [
        Text.translatable('jei.kubejs.electrolytic_nickel.info')
    ])
    event.add('kubejs:selenium_dust', [
        Text.translatable('jei.kubejs.selenium_dust.info')
    ])
    event.add('sinkjourneycore:electrolyzer_frame_stainless', [
        Text.translatable('jei.kubejs.electrolyzer_frame.info')
    ])
    event.add('sinkjourneycore:electrolyzer_frame_titanium', [
        Text.translatable('jei.kubejs.electrolyzer_frame.info')
    ])
    event.add('mmcr:molten_salt_cell_basic_controller', [
        Text.translatable('jei.kubejs.molten_salt_cell.info')
    ])
})
