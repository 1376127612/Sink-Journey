// ============================================================
// 溯洄研究系统 —— 手册与终端配方（P5）
// 位置：kubejs/server_scripts/research_core/guide.js
// 手册本体：kubejs/data/patchouli/patchouli_books/research_manual/
// ============================================================

ServerEvents.recipes(function (event) {
    // 手册：Patchouli 的 guide_book + patchouli:book 组件指向我们的书
    try {
        event.shaped(Item.of('patchouli:guide_book[patchouli:book="patchouli:research_manual"]'), [
            'PSP',
            'SBS',
            'PSP'
        ], {
            P: 'minecraft:paper',
            S: 'kubejs:research_substrate',
            B: 'kubejs:blank_blueprint'
        }).id('kubejs:sink_research/research_manual')
    } catch (e) {
        console.warn('[SR] 手册配方生成失败: ' + e)
    }
})
