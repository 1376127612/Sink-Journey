// ============================================================
// 溯洄研究系统 —— 研究站结构（server）
// 位置：kubejs/server_scripts/research_core/station_structure.js
// 3x3x3：X=铜机壳 I=物品输入 E=能量输入 O=物品输出 U=升级槽(铜机壳) F=控制器
// 形状复用既有 mechanical_lab，材料换成黄铜/铜壳，避免和枢纽抢空间。
// ============================================================

MMCREvents.server(event => {
    var api = event.getAPI()

    event.createStructure('sinkjourney:research_station')
        .pattern(['XXX', 'XIX', 'UXU'])
        .pattern(['XXX', 'E O', 'XXX'])
        .pattern(['XXX', 'XFX', 'UXU'])
        .set('X', api.block('create:brass_casing'))
        .set('I', api.anyOfItemInput())
        .set('O', api.anyOfItemOutput())
        .set('E', api.anyOfEnergyInput())
        .set('U', api.block('create:brass_casing'))
        .controller('F')
        .build()
})
