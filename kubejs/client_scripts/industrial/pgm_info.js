// ============================================================
// 铂族精炼 —— JEI 说明（client）
// 配方：server_scripts/industrial/pgm_line.js
// 设计文档：kubejs/docs/PGM_LINE.md
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:pgm_concentrate', [
        Text.translatable('jei.kubejs.pgm_concentrate.info'),
        Text.translatable('jei.kubejs.pgm_concentrate.steps')
    ])

    event.add('industrialupgrade:itemingots/platinum_ingot', [
        Text.translatable('jei.kubejs.pgm_ingot.info')
    ])
})
