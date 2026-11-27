// ============================================================
// 钼线 —— 物品与流体注册（startup）
// ------------------------------------------------------------
// 只注册物料，不做逻辑。配方在 server_scripts/industrial/moly_line.js，
// 电炉端的"垂熔 + 封直烧"补丁在 kubejs/sjcore/moly.json，
// 设计说明：kubejs/docs/IU_L2_IMPROVED_ELECTRIC.md §4.1 / §6.3。
//
// 物品（2 个）
//   moly_oxide   氧化钼       MoO₃，焙烧产物（三氧化钼，工业上叫"钼焙砂"）
//   moly_powder  高纯钼粉     钼酸铵氢还原产物，只它能在电炉里垂熔成锭
//
// 流体（1 个）
//   ammonium_molybdate 钼酸铵液  (NH₄)₂MoO₄，氨浸产物
//
// 链路：纯净碎钼矿 → 焙烧 → 氧化钼 → 氨浸 → 钼酸铵液 → 氢还原 → 高纯钼粉 → 垂熔 → 钼锭
// 改完本文件要**完全重启**。
// ============================================================

StartupEvents.registry('item', event => {
    const addItem = (id, name, tip) => {
        const it = event.create(id).displayName(name)
        if (tip) it.tooltip(tip)
    }

    addItem('moly_oxide', '氧化钼', '§7MoO₃，钼焙砂：硫化钼精矿在流化床里氧化焙烧的产物')
    addItem('moly_powder', '高纯钼粉', '§7钼酸铵氢还原得到的金属钼粉；垂熔成锭前的最后一步，纯度决定钼材能不能用')
})

StartupEvents.registry('fluid', event => {
    // 流体显示名要同时设在最外层与 type 上，否则游戏里会退回英文 id
    const addFluid = (id, name, tint, density, viscosity, temperature) => {
        event.create(id, 'thin')
            .displayName(name)
            .renderType('translucent')
            .tint(tint)
            .type(type => {
                type.displayName(name)
                type.renderType('translucent')
                    .density(density)
                    .viscosity(viscosity)
                    .temperature(temperature)
            })
    }

    addFluid('ammonium_molybdate', '钼酸铵液', 0xB9C46A, 1180, 420, 340)
})
