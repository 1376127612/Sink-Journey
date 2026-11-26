// ============================================================
// 在 JEI/EMI 中隐藏 Mek 聚变/裂变/反物质方块
// （与 server_scripts/bans/mek_nuclear.js 的名单保持一致）
//
// 只影响展示；存档里已有的方块照旧可拆可放，只是没有配方再造一座。
// ============================================================

(function () {
    const NUCLEAR_BLOCKS = [
        'mekanismgenerators:fission_fuel_assembly',
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:fission_reactor_port',
        'mekanismgenerators:fission_reactor_logic_adapter',
        'mekanismgenerators:control_rod_assembly',
        'mekanismgenerators:reactor_glass',
        'mekanismgenerators:saturating_condenser',
        'mekanism:superheating_element',
        'mekanismgenerators:fusion_reactor_controller',
        'mekanismgenerators:fusion_reactor_frame',
        'mekanismgenerators:fusion_reactor_port',
        'mekanismgenerators:fusion_reactor_logic_adapter',
        'mekanismgenerators:laser_focus_matrix',
        'mekanism:solar_neutron_activator',
        'mekanism:sps_casing',
        'mekanism:sps_port'
    ]

    RecipeViewerEvents.removeEntriesCompletely('item', event => {
        NUCLEAR_BLOCKS.forEach(id => {
            // 名字写错/物品被别家改名的条目会让整个 hide 事件在收尾时抛错，
            // 后半个名单（聚变四件 + SPS 三件）就一起失效，所以先判存在。
            if (!Item.exists(id)) return
            event.remove(id)
        })
    })
})()
