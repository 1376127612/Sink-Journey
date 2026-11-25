// ============================================================
// 铂族精炼 —— 物品与流体注册（startup）
// ------------------------------------------------------------
// 只注册物料，不做逻辑。配方全在 server_scripts/industrial/pgm_line.js，
// 熔铸补丁在 kubejs/sjcore/pgm.json，设计说明：kubejs/docs/PGM_LINE.md
//
// 物品（9 个）——整条线的固体中间体，全是真实存在的化合物/金属形态：
//   pgm_concentrate              铂族精矿      镍精矿加压氧浸的浸出渣
//   iridosmine_residue           铱锇渣        王水不溶部分
//   iridium_residue              铱渣          锇蒸馏后的残渣
//   ammonium_chloroplatinate     氯铂酸铵      (NH4)2PtCl6
//   ammonium_chloropalladate     氯钯酸铵      (NH4)2PdCl6
//   ammonium_chloroosmate        氯锇酸铵      (NH4)2OsCl6
//   ammonium_chloroiridate       氯铱酸铵      (NH4)2IrCl6
//   platinum_sponge              海绵铂        煅烧产物
//   palladium_sponge             海绵钯        肼还原产物
//
// 流体（8 个）——液相中间体，命名沿用本包 kubejs:* 的习惯：
//   aqua_regia                   王水          HCl:HNO3 = 3:1
//   pgm_chloride                 铂钯氯合液    H2PtCl6 + H2PdCl4
//   denitrated_pgm               赶硝液        赶掉硝酸后的氯合液
//   palladium_chloride           氯亚钯酸液    沉铂后的母液
//   nickel_sulfate               硫酸镍溶液    镍精矿浸出液
//   osmium_tetroxide             四氧化锇      OsO4，挥发性的锇载体
//   chloroosmic_acid             氯锇酸液      H2OsCl6
//   chloroiridic_acid            氯铱酸液      H2IrCl6
//
// 贴图目录：kubejs/assets/kubejs/models/item/<id>.json（指向 IU 现有材质，
// 缺图只会发白，不影响运行）。改完本文件要**完全重启**。
// ============================================================

StartupEvents.registry('item', event => {
    const addItem = (id, name, tip) => {
        const it = event.create(id).displayName(name)
        if (tip) it.tooltip(tip)
    }

    addItem('pgm_concentrate', '铂族精矿', '§7镍精矿加压氧浸的浸出渣：铂、钯、铱、锇都富集在这里')
    addItem('iridosmine_residue', '铱锇渣', '§7王水溶不掉的那部分：铱、锇、钌的富集渣')
    addItem('iridium_residue', '铱渣', '§7锇被氧化蒸馏带走以后剩下的残渣，氯压浸出取铱')
    addItem('ammonium_chloroplatinate', '氯铂酸铵', '§7(NH₄)₂PtCl₆，柠檬黄色沉淀，煅烧得海绵铂')
    addItem('ammonium_chloropalladate', '氯钯酸铵', '§7(NH₄)₂PdCl₆，氯气氧化后才能沉干净')
    addItem('ammonium_chloroosmate', '氯锇酸铵', '§7(NH₄)₂OsCl₆，氢还原得锇粉')
    addItem('ammonium_chloroiridate', '氯铱酸铵', '§7(NH₄)₂IrCl₆，氢还原得铱粉')
    addItem('platinum_sponge', '海绵铂', '§7氯铂酸铵 900 ℃ 煅烧产物，熔铸前的金属态铂')
    addItem('palladium_sponge', '海绵钯', '§7水合肼还原产物，熔铸前的金属态钯')
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

    addFluid('aqua_regia', '王水', 0xE0A32E, 1180, 400, 320)
    addFluid('pgm_chloride', '铂钯氯合液', 0xA8452A, 1250, 500, 350)
    addFluid('denitrated_pgm', '赶硝液', 0xC96F2E, 1200, 420, 350)
    addFluid('palladium_chloride', '氯亚钯酸液', 0x7A3B22, 1150, 380, 330)
    addFluid('nickel_sulfate', '硫酸镍溶液', 0x2F7A4E, 1300, 600, 360)
    addFluid('osmium_tetroxide', '四氧化锇', 0xD9D2B8, 40, 200, 400)
    addFluid('chloroosmic_acid', '氯锇酸液', 0x8C5B3A, 1240, 460, 340)
    addFluid('chloroiridic_acid', '氯铱酸液', 0x6B4A2F, 1260, 480, 340)
})
