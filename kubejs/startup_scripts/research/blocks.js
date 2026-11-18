// ============================================================
// 溯洄研究阵列 —— 升级模块方块
// 贴图目录：kubejs/assets/kubejs/textures/block/<name>.png
// 用法：放入研究枢纽 / 演算核心 / 冷却核心结构中的升级槽位
// ============================================================

StartupEvents.registry('block', event => {
    const upgradeBlock = (id, name) => {
        event.create(id)
            .displayName(name)
            .soundType('metal')
            .hardness(4)
            .resistance(10)
            .requiresTool()
            .tag('minecraft:mineable/pickaxe')
            .item(item => item.displayName(name))
            .texture(`kubejs:block/${id}`)
    }

    upgradeBlock('overclock_module', '超频晶振')
    upgradeBlock('parallel_module', '并行协处理器')
    upgradeBlock('thermal_module', '热补偿器')
    upgradeBlock('efficiency_module', '节能核心')

    // 原始阶段：单方块研究台
    // 槽位 0：主料（纸 / 研究笔记）；槽位 1：辅料（墨囊 / 纸）；槽位 2：产物
    event.create('primitive_research_table')
        .displayName('原始研究台')
        .soundType('wood')
        .hardness(2.5)
        .resistance(6)
        .tag('minecraft:mineable/axe')
        .texture('kubejs:block/primitive_research_table')
        .item(item => item.displayName('原始研究台'))
        .blockEntity(info => {
            info.inventory('inv', Java.loadClass('java.util.Collections').emptySet(), 3, 1)
            info.serverTicking()
            info.enableSync()
        })
})
