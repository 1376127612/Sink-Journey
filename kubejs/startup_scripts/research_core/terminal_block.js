// ============================================================
// 溯洄研究系统 —— 研究终端方块（P4）
// 位置：kubejs/startup_scripts/research_core/terminal_block.js
// 贴图：kubejs/assets/kubejs/textures/block/research_terminal.png
// ============================================================

StartupEvents.registry('block', event => {
    event.create('research_terminal')
        .displayName('研究终端')
        .soundType('metal')
        .hardness(3)
        .resistance(6)
        .requiresTool()
        .tag('minecraft:mineable/pickaxe')
        .texture('kubejs:block/research_terminal')
        .item(function (item) {
            item.displayName('研究终端')
            item.tooltip('§7右键打开研究终端；打不开时请用 /research tree')
        })
})
