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

    // 原始研究台已迁移到 Multiblocked2，见 primitive_mbd2.js
})
