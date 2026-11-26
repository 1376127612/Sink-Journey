// ============================================================
// 通用选矿线 —— 物料注册（startup）
// ------------------------------------------------------------
// 只注册物料，不做逻辑。配方在 server_scripts/industrial/ore_line.js，
// 设计说明：kubejs/docs/ORE_UNIVERSAL_LINE.md
//
//   xanthate         黄药      浮选捕收剂（烷基黄原酸盐），硫化矿浮选的标配
//   tailings_slurry  尾矿浆    洗选与选别的脉石浆，P2 接离心出砂/石粉
//
// 其余物料全部复用 IU 现有 id：raw_metals / crushed / purifiedcrushed / itemdust，
// 所以选矿线**不新增任何金属物品**，JEI 里也不会出现"第二种铜粉"。
// 贴图目录：kubejs/assets/kubejs/models/item/<id>.json。改完本文件要**完全重启**。
// ============================================================

StartupEvents.registry('item', event => {
    event.create('xanthate')
        .displayName('黄药')
        .tooltip('§7烷基黄原酸盐，硫化矿浮选的捕收剂：让铜镍钴锌铅的硫化物表面变疏水')
})

StartupEvents.registry('fluid', event => {
    const addFluid = (id, name, tint, density, viscosity) => {
        event.create(id, 'thin')
            .displayName(name)
            .renderType('translucent')
            .tint(tint)
            .type(type => {
                type.displayName(name)
                type.renderType('translucent')
                    .density(density)
                    .viscosity(viscosity)
                    .temperature(300)
            })
    }

    addFluid('tailings_slurry', '尾矿浆', 0x6B6257, 1400, 900)
})
