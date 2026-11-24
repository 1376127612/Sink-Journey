// ============================================================
// 溯洄研究阵列 —— 多方块结构
// ------------------------------------------------------------
// 坐标约定：每个 pattern(...) 是一个 z 切片，切片内每行对应 y，
// 每行字符对应 x；空格表示不约束。作者视角为控制器朝南。
//
// 主机「溯洄研究枢纽」7 x 7 x 5：
//   北墙 I/E/O = 物品输入 / 能量输入 / 物品输出
//   西墙 L = 研究等级槽（放入铜/铁/金/钻石块）
//   四面 U = 升级槽（基础外壳，可替换为升级模块方块）
//   南墙 C = 控制器，上方 R = 工厂控制器；北墙 P = 并行控制器
//   屋顶 B = 模块桥接器（可装演算核心 / 冷却核心）
//
// 机械研究台「机械研究台」3 x 3 x 3：
//   北墙 I = 物品输入，西墙 E = 应力输入，东墙 O = 物品输出
//   南墙 F = 控制器，顶层四角 U = 升级槽
//
// 两个模块都是 3 x 3 x 4：
//   底层只有中心桥接器，直接坐在主机屋顶的桥接器上；
//   朝向由各自控制器（模块南面）决定。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    const UPGRADES = [
        ['overclock', 'kubejs:overclock_module'],
        ['parallel', 'kubejs:parallel_module'],
        ['energy_saving', 'kubejs:efficiency_module'],
        ['thermal', 'kubejs:thermal_module']
    ]

    // 各结构共用的 U 升级槽：基础外壳 + 四种升级模块
    const applyUpgradeSlots = (structure, casing) => {
        structure.set('U', api.block(casing))
        for (const [id, item] of UPGRADES) {
            structure.modifier('U', api.modifierUse(`sinkjourney:${id}`, api.block(item)))
        }
        return structure
    }

    // ---- 阶段二：机械研究台 ----
    const mechanicalLab = event.createStructure('sinkjourney:mechanical_lab')
        .pattern(['XXX', 'XIX', 'UXU'])
        .pattern(['XXX', 'E O', 'XXX'])
        .pattern(['XXX', 'XFX', 'UXU'])
        .set('X', api.block('create:brass_casing'))
        .set('I', 'mmcr:item_input_bus_kinetic')
        .set('O', api.anyOfItemOutput())
        .set('E', api.anyStressInput())

    applyUpgradeSlots(mechanicalLab, 'create:brass_casing')
        .controller('F')
        .build()

    // ---- 主机：溯洄研究枢纽 ----
    const traceNexus = event.createStructure('sinkjourney:trace_nexus')
        .pattern(['XXXXXXX', 'XXIEOXX', 'XXXXXXX', 'XXXPXXX', 'XXXXXXX'])
        .pattern(['XXXXXXX', 'U     X', 'X     X', 'X     X', 'XXXXXXX'])
        .pattern(['XXXXXXX', 'X     U', 'X     X', 'X     X', 'XBXXXBX'])
        .pattern(['XXXXXXX', 'L     X', 'X     X', 'X     X', 'XXXXXXX'])
        .pattern(['XXXXXXX', 'X     U', 'X     X', 'X     X', 'XXXXXXX'])
        .pattern(['XXXXXXX', 'U     X', 'X     X', 'X     X', 'XXXXXXX'])
        .pattern(['XXXXXXX', 'XXXXXXX', 'XXXCXXX', 'XXXRXXX', 'XXXXXXX'])
        .set('X', api.block('mmcr:basic_casing'))
        .set('I', 'mmcr:item_input_bus_root')
        .set('O', api.anyOfItemOutput())
        .set('E', api.anyOfEnergyInput())
        .set('L', api.levelSlot('sinkjourney:research_tier'))
        .set('P', api.anyOf(api.block('mmcr:basic_casing'), api.parallelControllers()))
        .set('R', api.anyOf(api.block('mmcr:basic_casing'), api.factoryController()))

    applyUpgradeSlots(traceNexus, 'mmcr:basic_casing')
        .set('B', api.coupler())
        .controller('C')
        .build()

    // ---- 模块：溯洄演算核心 ----
    //   C = 蒸汽输出  D = 水输入  G = 能量输入
    //   I = 研究基质输入  O = 演算数据输出
    //   H = 热量输出  P = 并行器  F = 控制器  U = 升级槽
    const traceCompute = event.createStructure('sinkjourney:trace_compute')
        .pattern(['   ', 'CDG', 'U U', 'XXX'])
        .pattern([' E ', 'I O', 'U U', 'XPX'])
        .pattern(['   ', 'HFX', 'U U', 'XXX'])
        .set('X', api.block('create:copper_casing'))
        .set('C', api.anyOfChemicalPorts())
        .set('D', 'mmcr:fluid_input_hatch_root')
        .set('G', api.anyOfEnergyInput())
        .set('I', 'mmcr:item_input_bus_root')
        .set('O', api.anyOfItemOutput())
        .set('H', api.anyOfHeatPorts())
        .set('P', api.anyOf(api.block('create:copper_casing'), api.parallelControllers()))

    applyUpgradeSlots(traceCompute, 'create:copper_casing')
        .set('E', api.coupler())
        .controller('F')
        .build()

    // ---- 模块：逆熵冷却核心 ----
    //   S = 蒸汽输入  G = 能量输入  H = 热量输出
    //   P = 并行器  F = 控制器  U = 升级槽
    const traceCooling = event.createStructure('sinkjourney:trace_cooling')
        .pattern(['   ', 'SGX', 'U U', 'XXX'])
        .pattern([' E ', '   ', 'U U', 'XPX'])
        .pattern(['   ', 'HFX', 'U U', 'XXX'])
        .set('X', api.block('create:industrial_iron_block'))
        .set('S', api.anyOfChemicalPorts())
        .set('G', api.anyOfEnergyInput())
        .set('H', api.anyOfHeatPorts())
        .set('P', api.anyOf(api.block('create:industrial_iron_block'), api.parallelControllers()))

    applyUpgradeSlots(traceCooling, 'create:industrial_iron_block')
        .set('E', api.coupler())
        .controller('F')
        .build()
})
