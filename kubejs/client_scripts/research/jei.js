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

// ---- 研究节点：产物上的 JEI 信息页（数据驱动） -----------------
// 节点 JSON 是唯一来源，新加节点不用再手写 JEI 文案。
// JEI 信息页是静态的，看不到"当前玩家解锁没解锁"，所以这里只写门槛，
// 实时状态去研究终端看（/research tree 也行）。

var SRJ_nodes = []

var SRJ_readJson = function (path) {
    try {
        return JSON.parse(String(JsonIO.readString(path)))
    } catch (e) {
        return null
    }
}

var SRJ_load = function () {
    SRJ_nodes = []
    var man = SRJ_readJson('kubejs/config/sinkresearch/manifest.json')
    if (!man || !man.pages) return
    for (var i = 0; i < man.pages.length; i++) {
        var page = SRJ_readJson('kubejs/config/sinkresearch/' + String(man.pages[i]))
        if (!page || !page.nodes) continue
        for (var k = 0; k < page.nodes.length; k++) SRJ_nodes.push(page.nodes[k])
    }
}
SRJ_load()

var SRJ_costLine = function (node) {
    var parts = []
    var inputs = node.inputs || {}
    var items = inputs.items || []
    for (var i = 0; i < items.length; i++) parts.push(String(items[i].id) + ' x' + items[i].count)
    var fluids = inputs.fluids || []
    for (var k = 0; k < fluids.length; k++) parts.push(String(fluids[k].id) + ' ' + fluids[k].amount + 'mB')
    if (inputs.energy) parts.push(inputs.energy + ' FE')
    if (node.duration) parts.push(Math.round(Number(node.duration) / 20) + 's')
    return parts.length > 0 ? parts.join(', ') : '无（里程碑）'
}

RecipeViewerEvents.addInformation('item', event => {
    for (var i = 0; i < SRJ_nodes.length; i++) {
        var node = SRJ_nodes[i]
        var outs = (node.outputs || {}).items || []
        if (outs.length === 0) continue
        var req = node.requires || {}
        var reqList = req.or || req.and || []
        var lines = []
        lines.push('研究节点：' + String(node.id))
        lines.push('前置：' + (reqList.length > 0 ? reqList.join(', ') : '无'))
        lines.push('成本：' + SRJ_costLine(node))
        var keys = node.unlock || []
        if (keys.length > 0) lines.push('解锁：' + keys.join(', '))
        lines.push('在溯洄研究终端里看完整图谱；前置没完成时研究站会拒绝开工。')
        var comps = []
        for (var t = 0; t < lines.length; t++) comps.push(Text.of(lines[t]))
        event.add(String(outs[0].id), comps)
    }
})
