// ============================================================
// 化学反应釜 —— JEI 说明（client）
// 机器注册：startup_scripts/industrial/chemical_reactor.js
// 结构与配方：server_scripts/industrial/chemical_reactor.js
// 设计文档：kubejs/docs/CHEMICAL_REACTOR.md
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    const GRADES = ['kinetic', 'steam', 'basic', 'improved', 'advanced', 'perfect']

    for (const id of GRADES) {
        event.add('mmcr:chemical_reactor_' + id + '_controller', [
            Text.translatable('jei.kubejs.chemical_reactor.info'),
            Text.translatable('jei.kubejs.chemical_reactor.tiers'),
            Text.translatable('jei.kubejs.chemical_reactor.info2'),
            Text.translatable('jei.kubejs.chemical_reactor.mechanics')
        ])
    }
})
