// ============================================================
// 溯洄研究阵列 —— JEI 说明
// ============================================================

MMCREvents.client(event => {
    event.addRecipePoolInfo('sinkjourney:mechanical_lab', 'jei.sinkjourney.mechanical_lab.info')
    event.addRecipePoolInfo('sinkjourney:trace_nexus', 'jei.sinkjourney.trace_nexus.info')
    event.addRecipePoolInfo('sinkjourney:trace_compute', 'jei.sinkjourney.trace_compute.info')
    event.addRecipePoolInfo('sinkjourney:trace_cooling', 'jei.sinkjourney.trace_cooling.info')

    // 逐条配方的名字（JEI 配方详情页）
    event.addRecipeInfo('kubejs:mechanical_lab/ember_notes', 'jei.sinkjourney.mechanical_lab.ember_notes')
    event.addRecipeInfo('kubejs:mechanical_lab/radiance_notes', 'jei.sinkjourney.mechanical_lab.radiance_notes')
})

// ---- 原始研究台：自定义 JEI 配方类别无需手写 -------------------
// 配方类型 sinkjourney:primitive_research 由 Multiblocked2 自动
// 注册 JEI 类别，配方内容也由 MBD2 读取，这里只保留信息页。
// 本文件禁止使用 const/let。

// ---- 原始研究台：信息页 ---------------------------------------

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:primitive_research_table', [
        Text.translatable('jei.sinkjourney.primitive_research.info'),
        Text.translatable('jei.sinkjourney.primitive_research.info2'),
        Text.translatable('jei.sinkjourney.primitive_research.info3')
    ])
})
