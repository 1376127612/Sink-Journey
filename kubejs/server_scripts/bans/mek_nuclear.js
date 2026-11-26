// ============================================================
// Mekanism 聚变 / 裂变 / 反物质链：封禁获取
// ------------------------------------------------------------
// 包里的核能线是 NuclearCraft 与 IU 那套反应堆；Mek 的裂变堆、聚变堆和
// 反物质（SPS）属于平行体系，留着只会让玩家绕开既有阶梯，所以整链封掉。
//
// 封的是方块本体（装配部件），所以整座堆既造不出也补不齐：
//   裂变：燃料组件 / 堆壳 / 端口 / 逻辑适配器 / 控制棒组件 / 反应堆玻璃 /
//         饱和冷凝器 / 过热元件
//   聚变：控制器 / 框架 / 端口 / 逻辑适配器 / 激光聚焦矩阵
//   反物质：太阳能中子激活器（SPS）/ SPS 外壳 / SPS 端口
//
// 蒸汽涡轮（turbine_*）与电磁线圈不封：那是通用蒸汽设备，IU 的锅炉也能喂。
// ============================================================

ServerEvents.recipes(event => {
    const NUCLEAR_BLOCKS = [
        // 裂变
        'mekanismgenerators:fission_fuel_assembly',
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:fission_reactor_port',
        'mekanismgenerators:fission_reactor_logic_adapter',
        'mekanismgenerators:control_rod_assembly',
        'mekanismgenerators:reactor_glass',
        'mekanismgenerators:saturating_condenser',
        'mekanism:superheating_element',
        // 聚变
        'mekanismgenerators:fusion_reactor_controller',
        'mekanismgenerators:fusion_reactor_frame',
        'mekanismgenerators:fusion_reactor_port',
        'mekanismgenerators:fusion_reactor_logic_adapter',
        'mekanismgenerators:laser_focus_matrix',
        // 反物质
        'mekanism:solar_neutron_activator',
        'mekanism:sps_casing',
        'mekanism:sps_port'
    ]

    for (const block of NUCLEAR_BLOCKS) event.remove({ output: block })

    console.info('[核能] Mek 聚变/裂变/反物质链已封禁（' + NUCLEAR_BLOCKS.length + ' 种方块）')
})
