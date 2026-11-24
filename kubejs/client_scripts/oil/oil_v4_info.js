// ============================================================
// 石油—石化线 v4 —— JEI 说明（client）
// 配方本体：server_scripts/oil/g1_recipes.js
// 设计文档：kubejs/docs/OIL_LINE_V2.md
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    event.add('mmcr:naphtha_hydrotreater_controller', [
        Text.translatable('jei.kubejs.hydrotreater.info')
    ])
    event.add('mmcr:steam_cracker_controller', [
        Text.translatable('jei.kubejs.steam_cracker.info'),
        Text.translatable('jei.kubejs.steam_cracker.info2')
    ])
    event.add('kubejs:treated_naphtha', [
        Text.text('精制石脑油：石脑油经加氢脱硫后的裂解原料，硫以硫化氢形式摘掉。')
    ])
    event.add('kubejs:petroleum_coke', [
        Text.text('石油焦：裂解与焦化的副产。可进 IU 石墨池做石墨电极，也能当燃料。')
    ])
})
