// ============================================================
// 光刻机 —— 结构（3x3x3，四台共用一套模板）
// ------------------------------------------------------------
//   z0  XEX        E = 能量输入仓（普通档）
//       XIC        I = 物品输入总线，C = 控制器
//       XXX
//   z1  XRX        R = 空（光刻腔）
//       XXX
//       XXX
//   z2  XXX
//       XOX        O = 物品输出总线
//       XXX
//
// 五台机器（四台光刻机 + 晶圆切割机）结构完全一样，只是控制器/外观不同。
// 控制器朝南（z 正方向）时：北面中层左格进料，同层中格是控制器，南面中层出料。
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    const MACHINES = ['wafer_dicer', 'litho_mk1', 'litho_mk2', 'litho_mk3', 'litho_mk4']

    for (const id of MACHINES) {
        event.createStructure(`sinkjourney:${id}`)
            .pattern(['XEX', 'XIC', 'XXX'])
            .pattern(['XXX', 'XRX', 'XXX'])
            .pattern(['XXX', 'XOX', 'XXX'])
            .set('X', api.block('mmcr:basic_casing'))
            .set('E', api.anyOfEnergyInput())
            .set('I', api.anyOfItemInput())
            .set('O', api.anyOfItemOutput())
            .set('R', api.air())
            .controller('C')
            .build()
    }
})
