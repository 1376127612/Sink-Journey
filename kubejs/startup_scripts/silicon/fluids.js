// ============================================================
// 晶圆产线 —— 硅化工流体（startup）
// ------------------------------------------------------------
// 三氯硅烷 SiHCl3：氯化段产物，也是循环载体
// 硅烷 SiH4：歧化提纯段产物，进结晶器沉积多晶硅
// 四氯化硅 SiCl4：歧化副产，配氢还原后回到三氯硅烷
//
// 流体的显示名取自 FluidType（fluid_type.kubejs.<id>），外层
// displayName 只覆盖方块与桶，不覆盖液体本身，所以 type() 里
// 必须再设一次同名，否则名字会退回 KubeJS 自动生成的英文 ID 名。
//
// 配方在 server_scripts/silicon/wafer_line.js
// 说明文档：kubejs/docs/SILICON_WAFER_LINE.md
// ============================================================

StartupEvents.registry('fluid', event => {
    // 三氯硅烷：无色微黄、密度大于水
    const trichlorosilaneName = '三氯硅烷'
    event.create('trichlorosilane', 'thin')
        .displayName(trichlorosilaneName)
        .renderType('translucent')
        .tint(0xD4E6C3)
        .type(type => {
            type.displayName(trichlorosilaneName)
            type.renderType('translucent')
                .density(1340)
                .viscosity(1000)
                .temperature(300)
        })
        .tag(['c:trichlorosilane'])

    // 高纯三氯硅烷：精馏塔出来的精料，只给西门子沉积段用
    const purifiedTcsName = '高纯三氯硅烷'
    event.create('purified_tcs', 'thin')
        .displayName(purifiedTcsName)
        .renderType('translucent')
        .tint(0xE8F2D8)
        .type(type => {
            type.displayName(purifiedTcsName)
            type.renderType('translucent')
                .density(1340)
                .viscosity(1000)
                .temperature(300)
        })
        .tag(['c:purified_trichlorosilane'])

    // 硅烷：常温气体，极轻
    const silaneName = '硅烷'
    event.create('silane', 'thin')
        .displayName(silaneName)
        .renderType('translucent')
        .tint(0xC9D9E6)
        .type(type => {
            type.displayName(silaneName)
            type.renderType('translucent')
                .density(1)
                .viscosity(200)
                .temperature(300)
        })
        .tag(['c:silane'])

    // 四氯化硅：无色重液，遇水水解
    const siliconTetrachlorideName = '四氯化硅'
    event.create('silicon_tetrachloride', 'thin')
        .displayName(siliconTetrachlorideName)
        .renderType('translucent')
        .tint(0xE3DCC4)
        .type(type => {
            type.displayName(siliconTetrachlorideName)
            type.renderType('translucent')
                .density(1480)
                .viscosity(1200)
                .temperature(300)
        })
        .tag(['c:silicon_tetrachloride'])
})
