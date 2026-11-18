// ============================================================
// 溯洄研究阵列 —— 研究物品
// 贴图目录：kubejs/assets/kubejs/textures/item/<name>.png
// ============================================================

StartupEvents.registry('item', event => {
    // 原始阶段
    event.create('research_notes')
        .displayName('研究笔记')
        .tooltip('§7原始研究台的产物，机械研究台的基础资料')

    event.create('blueprint_primitive')
        .displayName('蓝图·原始')
        .tooltip('§7用于制造机械研究台')

    // 基础材料
    event.create('research_substrate')
        .displayName('研究基质')
        .tooltip('§7溯洄阵列的演算燃料，持续送入演算核心')

    event.create('research_data')
        .displayName('演算数据')
        .tooltip('§7研究枢纽刻录蓝图所需的演算产物')

    event.create('blank_blueprint')
        .displayName('空白蓝图')
        .tooltip('§7放入研究枢纽，配合演算数据刻录蓝图')

    // 蓝图成品
    event.create('blueprint_steam')
        .displayName('蓝图·蒸汽时代')
        .tooltip('§7用于合成升级模块')

    event.create('blueprint_ember')
        .displayName('蓝图·余烬熔炉')
        .tooltip('§7用于合成升级模块')

    event.create('blueprint_radiance')
        .displayName('蓝图·星辉观测')
        .tooltip('§7用于合成升级模块')

    event.create('blueprint_end')
        .displayName('蓝图·终界门')
        .tooltip('§7用于合成升级模块')
})
