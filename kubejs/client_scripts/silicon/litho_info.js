// ============================================================
// 光刻世代 —— JEI 说明（client）
// 机器注册：startup_scripts/silicon/litho_machines.js
// 结构与配方：server_scripts/silicon/litho_{structure,recipes}.js
// 设计文档：kubejs/docs/IU_CHIP_OVERHAUL.md
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    for (const t of [1, 2, 3, 4]) {
        event.add('mmcr:litho_mk' + t + '_controller', [
            Text.translatable('jei.kubejs.litho_mk' + t + '.info'),
            Text.translatable('jei.kubejs.litho_common.info')
        ])
    }

    event.add('kubejs:photoresist', [
        Text.translatable('jei.kubejs.photoresist.info')
    ])

    for (const o of ['glass', 'quartz', 'caf2', 'immersion']) {
        event.add('kubejs:optics_' + o, [
            Text.translatable('jei.kubejs.optics.info')
        ])
    }
})
