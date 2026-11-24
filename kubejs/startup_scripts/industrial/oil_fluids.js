// ============================================================
// 石油线 —— 石脑油（startup）
// ------------------------------------------------------------
// 石脑油是常压分馏出来的裂解原料：不进燃料池，只喂给 IU 气体混合器
// 做蒸汽裂解，或者进高级炼油厂重整成汽油。
//
// 常压分馏本身用气动工艺的精馏塔（PneumaticCraft Refinery），
// 配方在 server_scripts/industrial/iu_oil_line.js。
//
// 注意：流体注册属于 startup 阶段，改完要整个重启游戏，/reload 不生效。
// ============================================================

StartupEvents.registry('fluid', event => {
    // 石脑油：无色偏黄的轻质馏分，密度小于水
    event.create('naphtha', 'thin')
        .displayName('石脑油')
        .translationKey('fluid.kubejs.naphtha')
        .renderType('translucent')
        .tint(0xE6D9A8)
        .type(type => {
            type.renderType('translucent')
                .density(720)
                .viscosity(500)
                .temperature(300)
        })
        .tag(['c:naphtha'])
})
