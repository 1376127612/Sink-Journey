// ============================================================
// 区域熔炼炉（MMCR）—— 前期物理提纯
// ------------------------------------------------------------
// 一根石英管，里面套一圈高温加热圈：加热圈从管底慢慢扫到管顶，
// 杂质被熔区带着往两端跑，切掉两端就得到更纯的硅。全过程只有
// 加热和移动，不用任何化学品，所以它比三氯硅烷线更早可用。
//
// 机器：sinkjourney:zone_refiner
// 结构：server_scripts/silicon/zone_refiner.js
// 配方：同文件下半部分 + server_scripts/silicon/wafer_line.js
// ============================================================

MMCREvents.startup(event => {
    const api = event.getAPI()

    event.createMachine('sinkjourney:zone_refiner')
        .displayNameKey('machine.sinkjourney.zone_refiner')
        .recipePool('sinkjourney:zone_refiner')
        .appearance('minecraft:quartz_block')
        .register()

    // 加热圈材质：铁 → 金 → 钻石，越热的圈扫得越快
    event.createLevelType('sinkjourney:zone_heater')
        .displayNameKey('level.sinkjourney.zone_heater')
        .register()

    const rings = [
        ['iron', 0, 'minecraft:iron_block', 1.0],
        ['gold', 1, 'minecraft:gold_block', 0.85],
        ['diamond', 2, 'minecraft:diamond_block', 0.7]
    ]

    for (const [name, priority, state, duration] of rings) {
        event.createLevel(`sinkjourney:zone_heater_${name}`)
            .type('sinkjourney:zone_heater')
            .priority(priority)
            .state(state)
            .modifier(api.modifierDefinition([
                api.modifier('duration', 'input', duration, 'multiply', false)
            ]))
            .register()
    }
})
