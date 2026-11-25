// ============================================================
// 光刻机 / 晶圆切割机 —— 结构（3x3x3，五台共用一套模板）
// ------------------------------------------------------------
//   z0  XEX        E = 能量输入仓
//       XIC        I = 蒸汽级物品输入总线，C = 控制器
//       XXX
//   z1  XFX        F = 蒸汽级流体输入仓（显影液 NaOH）
//       XRX        R = 空（光刻腔）
//       XXX
//   z2  XXX
//       XOX        O = 物品输出总线
//       XXX
//
// 五台机器（Mk.I–IV + 晶圆切割机）结构完全一样，只是控制器/外观与配方池不同。
// 控制器朝南（z 正方向）时：北面中层左格是能量、同层中格进料，上一层的北墙进显影液，
// 南面中层出料。
//
// 显影液是真实光刻必需的一步（涂胶 → 曝光 → 显影），所以这一版把流体仓加进了结构；
// 晶圆切割机用不到流体，但共用模板，空着即可。
//
// 注册放在函数里、按 id 逐个调用：KubeJS 的 Rhino 会把循环体里的 const 提到函数作用域，
// 同一个循环里声明第二次就报 "redeclaration of var"，所以循环体里不写声明。
// 每个结构单独 try：MMCR 0.1.7 同一次会话里不允许同一结构 id 注册第二次
// （热重载会抛 Dynamic structure already registered 并中断这一批后面的机器）。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    const MACHINES = ['wafer_dicer', 'litho_mk1', 'litho_mk2', 'litho_mk3', 'litho_mk4']

    const register = (structureId) => {
        try {
            event.createStructure(structureId)
                .pattern(['XEX', 'XIC', 'XXX'])
                .pattern(['XFX', 'XRX', 'XXX'])
                .pattern(['XOX', 'XXX', 'XXX'])
                .set('X', api.block('mmcr:basic_casing'))
                .set('E', api.anyOfEnergyInput())
                .set('I', 'mmcr:item_input_bus_steam')
                .set('F', 'mmcr:fluid_input_hatch_steam')
                .set('O', api.anyOfItemOutput())
                .set('R', api.air())
                .controller('C')
                .build()
        } catch (err) {
            console.warn('[光刻线] 结构 ' + structureId + ' 本次没有重新注册（同一会话里已注册过，重启生效）：' + err)
        }
    }

    for (const id of MACHINES) register('sinkjourney:' + id)
})
