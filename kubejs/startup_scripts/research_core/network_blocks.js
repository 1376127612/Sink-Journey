// ============================================================
// 溯洄研究系统 —— 网络构件方块（P3.1）
// 位置：kubejs/startup_scripts/research_core/network_blocks.js
// ------------------------------------------------------------
// 贴图：kubejs/assets/kubejs/textures/block/<id>.png（已生成）
// 说明：这些方块只承载"网络成员"的物理存在，状态全部由
//       server_scripts/research_core/network.js 扫描聚合，
//       不往方块实体里写业务数据（避免 NBT 迁移麻烦）。
// ============================================================

StartupEvents.registry('block', event => {
    var defs = [
        ['network_hub', '研究网络中心'],
        ['research_computer_basic', '研究计算机·基础'],
        ['research_computer_advanced', '研究计算机·进阶'],
        ['research_computer_elite', '研究计算机·精英'],
        ['research_database_basic', '研究数据库·基础'],
        ['research_database_advanced', '研究数据库·进阶']
    ]

    for (var i = 0; i < defs.length; i++) {
        var id = defs[i][0]
        var name = defs[i][1]
        event.create(id)
            .displayName(name)
            .soundType('metal')
            .hardness(4)
            .resistance(8)
            .requiresTool()
            .tag('minecraft:mineable/pickaxe')
            .blockEntity(function (info) {
                info.serverTicking()
            })
            .texture('kubejs:block/' + id)
            .item(function (item) {
                item.displayName(name)
            })
    }
})
