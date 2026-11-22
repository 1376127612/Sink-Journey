// ============================================================
// 晶圆产线 —— 硅化工流体（startup）
// ------------------------------------------------------------
// 三氯硅烷 SiHCl3：氯化段产物，也是循环载体
// 硅烷 SiH4：歧化提纯段产物，进结晶器沉积多晶硅
// 四氯化硅 SiCl4：歧化副产，配氢还原后回到三氯硅烷
//
// 配方在 server_scripts/silicon/wafer_line.js
// 说明文档：kubejs/docs/SILICON_WAFER_LINE.md
// ============================================================

StartupEvents.registry('fluid', event => {
    // 三氯硅烷：无色微黄、密度大于水
    event.create('trichlorosilane', 'thin')
        .displayName('三氯硅烷')
        .translationKey('fluid.kubejs.trichlorosilane')
        .renderType('translucent')
        .tint(0xD4E6C3)
        .type(type => {
            type.renderType('translucent')
                .density(1340)
                .viscosity(1000)
                .temperature(300)
        })
        .tag(['c:trichlorosilane'])

    // 高纯三氯硅烷：精馏塔出来的精料，只给西门子沉积段用
    event.create('purified_tcs', 'thin')
        .displayName('高纯三氯硅烷')
        .translationKey('fluid.kubejs.purified_tcs')
        .renderType('translucent')
        .tint(0xE8F2D8)
        .type(type => {
            type.renderType('translucent')
                .density(1340)
                .viscosity(1000)
                .temperature(300)
        })
        .tag(['c:purified_trichlorosilane'])

    // 硅烷：常温气体，极轻
    event.create('silane', 'thin')
        .displayName('硅烷')
        .translationKey('fluid.kubejs.silane')
        .renderType('translucent')
        .tint(0xC9D9E6)
        .type(type => {
            type.renderType('translucent')
                .density(1)
                .viscosity(200)
                .temperature(300)
        })
        .tag(['c:silane'])

    // 四氯化硅：无色重液，遇水水解
    event.create('silicon_tetrachloride', 'thin')
        .displayName('四氯化硅')
        .translationKey('fluid.kubejs.silicon_tetrachloride')
        .renderType('translucent')
        .tint(0xE3DCC4)
        .type(type => {
            type.renderType('translucent')
                .density(1480)
                .viscosity(1200)
                .temperature(300)
        })
        .tag(['c:silicon_tetrachloride'])
})
