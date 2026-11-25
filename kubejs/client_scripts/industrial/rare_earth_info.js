// ============================================================
// 稀土湿法线 —— JEI 说明（client）
// 配方：server_scripts/industrial/rare_earth_line.js
// 设计文档：kubejs/docs/RARE_EARTH_LINE.md
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:rare_earth_concentrate', [
        Text.translatable('jei.kubejs.rare_earth_concentrate.info'),
        Text.translatable('jei.kubejs.rare_earth_concentrate.steps')
    ])

    event.add('industrialupgrade:itemingots/neodymium', [
        Text.translatable('jei.kubejs.rare_earth_ingot.info')
    ])

    event.add('industrialupgrade:itemingots/gadolinium', [
        Text.translatable('jei.kubejs.rare_earth_ingot.info')
    ])

    event.add('industrialupgrade:itemingots/yttrium', [
        Text.translatable('jei.kubejs.rare_earth_ingot.info')
    ])

    event.add('kubejs:cerium_rich_residue', [
        Text.translatable('jei.kubejs.cerium_rich_residue.info')
    ])

    event.add('kubejs:iron_thorium_residue', [
        Text.translatable('jei.kubejs.iron_thorium_residue.info')
    ])

    event.add('kubejs:prnd_oxide', [
        Text.translatable('jei.kubejs.prnd_oxide.info')
    ])
})
