// ============================================================
// 石油—石化线 v4 —— 流体与物品（startup）
// ------------------------------------------------------------
// 设计文档：kubejs/docs/OIL_LINE_V2.md
// 本文件只注册"新物质"，配方在 server_scripts/oil/ 下。
//
// 流体：
//   treated_naphtha  精制石脑油 —— 加氢脱硫后的裂解原料（替代直接烧生石脑油）
//   vgo              减压蜡油   —— 中期减压塔产物，FCC / 加氢裂化 / 润滑油的进料
//   vacuum_residue   减压渣油   —— 中期减压塔底产物，焦化 / 沥青的进料
//
// 物品：
//   petroleum_coke        石油焦 —— 焦化副产，接 IU 石墨池做石墨电极
//   paraffin              石蜡   —— 润滑油脱蜡副产
//   catalyst_silica_alumina 硅铝催化剂   —— G1 催化剂床（电力初期）
//   catalyst_molecular_sieve 分子筛催化剂 —— G2 催化剂床（电力中期）
//   catalyst_pt_re        铂铼催化剂     —— G3 催化剂床（电力后期）
//   catalyst_nimo         镍钼加氢催化剂 —— 加氢精制 / 加氢裂化
//   initiator_peroxide    过氧化物引发剂 —— 高压法 LDPE 的引发剂
//
// 注意：流体注册属于 startup，改完必须重启游戏，/reload 不生效。
// ============================================================

StartupEvents.registry('fluid', event => {
    // 精制石脑油：加氢后颜色变浅、硫被摘掉
    event.create('treated_naphtha', 'thin')
        .displayName('精制石脑油')
        .translationKey('fluid.kubejs.treated_naphtha')
        .renderType('translucent')
        .tint(0xF0E7C8)
        .type(type => {
            type.renderType('translucent')
                .density(700)
                .viscosity(450)
                .temperature(300)
        })
        .tag(['c:treated_naphtha'])

    // 减压蜡油：深琥珀色、黏度大
    event.create('vgo', 'thick')
        .displayName('减压蜡油')
        .translationKey('fluid.kubejs.vgo')
        .renderType('translucent')
        .tint(0x6B4A1E)
        .type(type => {
            type.renderType('translucent')
                .density(900)
                .viscosity(1800)
                .temperature(340)
        })
        .tag(['c:vgo'])

    // 减压渣油：接近沥青，几乎不流动
    event.create('vacuum_residue', 'thick')
        .displayName('减压渣油')
        .translationKey('fluid.kubejs.vacuum_residue')
        .renderType('translucent')
        .tint(0x1C1512)
        .type(type => {
            type.renderType('translucent')
                .density(1020)
                .viscosity(6000)
                .temperature(380)
        })
        .tag(['c:vacuum_residue'])
})

StartupEvents.registry('item', event => {
    event.create('petroleum_coke')
        .displayName('石油焦')

    event.create('paraffin')
        .displayName('石蜡')

    event.create('catalyst_silica_alumina')
        .displayName('硅铝催化剂')

    event.create('catalyst_molecular_sieve')
        .displayName('分子筛催化剂')

    event.create('catalyst_pt_re')
        .displayName('铂铼重整催化剂')

    event.create('catalyst_nimo')
        .displayName('镍钼加氢催化剂')

    event.create('initiator_peroxide')
        .displayName('过氧化物引发剂')
})
