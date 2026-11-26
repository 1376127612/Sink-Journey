// ============================================================
// 稀土湿法线 —— 物品与流体注册（startup）
// ------------------------------------------------------------
// 只注册物料，不做逻辑。配方在 server_scripts/industrial/rare_earth_line.js，
// 熔铸 / 封直炼在 kubejs/sjcore/rare_earth.json，设计说明：kubejs/docs/RARE_EARTH_LINE.md
//
// 物品（13 个）—— 全是真实存在的稀土化合物/中间体，没有"元素杂志"式的假产物：
//   rare_earth_concentrate       稀土精矿      浮选后的独居石型稀土精矿（REO 60%）
//   rare_earth_hydroxide         氢氧化稀土    浓碱分解产物，磷酸根进洗水
//   mixed_rare_earth_oxide       混合稀土氧化物 氧化焙烧产物，铈已被氧化成四价
//   cerium_rich_residue          富铈渣        CeO2 为主，盐酸溶不掉的那部分
//   iron_thorium_residue         铁钍渣        中和除杂与溶铈段的不溶渣（含钍，放射性）
//   lanthanum_oxide              氧化镧        La2O3
//   cerium_oxide                 氧化铈        CeO2，抛光粉与催化剂的老本行
//   prnd_oxide                   镨钕氧化物    Pr6O11+Nd2O3 的混合氧化物（镨钕不分家）
//   gadolinium_oxide             氧化钆        Gd2O3
//   yttrium_oxide                氧化钇        Y2O3
//   prnd_fluoride                氟化镨钕      (Pr,Nd)F3，钙热还原的料
//   gadolinium_fluoride          氟化钆        GdF3
//   yttrium_fluoride             氟化钇        YF3
//
// 流体（15 个）—— 液相中间体，沿用本包 kubejs:* 的习惯：
//   rare_earth_chloride          氯化稀土料液   优溶后的混合氯化稀土（pH 4）
//   ra_purified_chloride         净化氯化稀土   中和除杂后的萃取进料
//   ra_light_chloride            轻稀土氯化液   La/Ce/Pr/Nd
//   ra_middle_chloride           中重稀土氯化液 Sm~Lu + Y
//   ra_la_chloride               氯化镧液       P507 萃余相
//   ra_prnd_chloride             镨钕氯化液     P507 反萃相
//   ra_gd_chloride               钆富集液       P507 中重分组
//   ra_heavy_chloride            重稀土液       Tb~Lu + Y
//   ra_y_chloride                钇富集液       P507 提钇反萃相
//   ra_heavy_raffinate           重稀土残液     Er/Tm/Yb/Lu 富集物（无下游，外售）
//   sodium_phosphate_solution    磷酸三钠液     碱分解洗水
//   cerium_nitrate               硝酸铈液       富铈渣硝酸溶解
//   oxalic_acid                  草酸溶液       H2C2O4，稀土沉淀剂
//   p204                         萃取剂 P204    D2EHPA，分轻/中重
//   p507                         萃取剂 P507    HEH(EHP)，分单元素
//
// 贴图目录：kubejs/assets/kubejs/models/item/<id>.json（指向 IU 现有材质，
// 缺图只会发白，不影响运行）。改完本文件要**完全重启**。
// ============================================================

StartupEvents.registry('item', event => {
    const addItem = (id, name, tip) => {
        const it = event.create(id).displayName(name)
        if (tip) it.tooltip(tip)
    }

    addItem('monazite', '独居石', '§7独居石型稀土磷酸盐，(Ce,La,Nd)PO₄；浮选的进料，一份矿里同时带铈镧钕钆钇')
    addItem('rare_earth_concentrate', '稀土精矿', '§7独居石型稀土精矿，REO 约 60%；碱分解的进料')
    addItem('rare_earth_hydroxide', '氢氧化稀土', '§7浓碱分解产物，磷酸根以磷酸三钠进洗水')
    addItem('mixed_rare_earth_oxide', '混合稀土氧化物', '§7氧化焙烧产物：铈已被氧化成 Ce⁴⁺，这是后面优溶分铈的前提')
    addItem('cerium_rich_residue', '富铈渣', '§7CeO₂ 为主，盐酸无还原剂时溶不掉 —— 铈在这里被分出')
    addItem('iron_thorium_residue', '铁钍渣', '§7中和除杂与溶铈段的不溶渣，含钍，放射性，需封存')
    addItem('lanthanum_oxide', '氧化镧', '§7La₂O₃，稀土抛光粉与催化剂的原料')
    addItem('cerium_oxide', '氧化铈', '§7CeO₂，玻璃抛光的经典磨料，也是稀土改性分子筛的组分')
    addItem('prnd_oxide', '镨钕氧化物', '§7Pr₆O₁₁ + Nd₂O₃ 混合氧化物：工业上镨钕不分家，磁材用的就是这一对')
    addItem('gadolinium_oxide', '氧化钆', '§7Gd₂O₃，中子吸收与磁制冷材料')
    addItem('yttrium_oxide', '氧化钇', '§7Y₂O₃，YBCO 与钇铝石榴石的原料')
    addItem('prnd_fluoride', '氟化镨钕', '§7(Pr,Nd)F₃，钙热还原的料')
    addItem('gadolinium_fluoride', '氟化钆', '§7GdF₃')
    addItem('yttrium_fluoride', '氟化钇', '§7YF₃')
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

    addFluid('rare_earth_chloride', '氯化稀土料液', 0x4E7A3A, 1200, 420, 350)
    addFluid('ra_purified_chloride', '净化氯化稀土', 0x578A46, 1190, 400, 345)
    addFluid('ra_light_chloride', '轻稀土氯化液', 0x6E8F45, 1180, 400, 340)
    addFluid('ra_middle_chloride', '中重稀土氯化液', 0x8A7B3C, 1210, 430, 340)
    addFluid('ra_la_chloride', '氯化镧液', 0x7FA05A, 1160, 380, 330)
    addFluid('ra_prnd_chloride', '镨钕氯化液', 0x5F7F63, 1190, 400, 330)
    addFluid('ra_gd_chloride', '钆富集液', 0x9A8A55, 1220, 440, 330)
    addFluid('ra_heavy_chloride', '重稀土液', 0x6B6B4A, 1240, 460, 330)
    addFluid('ra_y_chloride', '钇富集液', 0x8C9A6B, 1210, 420, 330)
    addFluid('ra_heavy_raffinate', '重稀土残液', 0x4A4438, 1260, 520, 330)
    addFluid('sodium_phosphate_solution', '磷酸三钠液', 0x9FB8B0, 1180, 300, 340)
    addFluid('cerium_nitrate', '硝酸铈液', 0xC0703A, 1290, 340, 340)
    addFluid('oxalic_acid', '草酸溶液', 0xBFC9C4, 1030, 220, 320)
    addFluid('p204', '萃取剂 P204', 0xC8B87A, 970, 900, 320)
    addFluid('p507', '萃取剂 P507', 0xB9A868, 960, 950, 320)
})

// 独居石矿 —— 稀土湿法线的矿源（火星）
// 稀土不做单元素矿：现实里独居石一份矿同时含铈、镧、钕、钆、钇，元素是在萃取段才拆开的。
// 掉落见 server_scripts/industrial/rare_earth_ore.js，配方见 server_scripts/industrial/rare_earth_line.js。
StartupEvents.registry('block', event => {
    event.create('monazite_ore')
        .displayName('独居石矿')
        .soundType('stone')
        .hardness(4.5)
        .resistance(9.0)
        .requiresTool()
        .tagBlock('minecraft:mineable/pickaxe')
        .item(item => item.displayName('独居石矿'))
        .texture('kubejs:block/monazite_ore')
})
