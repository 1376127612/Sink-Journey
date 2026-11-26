// ============================================================
// 电解矿物处理 —— 物料注册（startup）
// ------------------------------------------------------------
// 只注册物料，不做逻辑。机器在 startup_scripts/industrial/electrolysis.js，
// 配方在 server_scripts/industrial/electrolysis.js，
// 水溶液电解的配方与内件在 kubejs/data/nuclearcraftneohaul/（核电工艺电解池），
// 设计说明：kubejs/docs/ELECTROLYSIS_LINE.md
//
// 物品（6）：
//   anode_slime            阳极泥      电解精炼的阳极残渣：贵金属 + 硒的载体
//   selenium_dust          硒粉        铜阳极泥里唯一值得回收的半导体元素
//   electrolytic_copper    电解铜 4N   母线、真空件、超导的原料
//   electrolytic_nickel    电解镍 4N
//   aluminium_oxide        氧化铝      Al2O3，Hall-Héroult 的料
//   cryolite               冰晶石      Na3AlF6，电解质，只补损耗
//
// 方块（3）：整流器。熔盐槽的"整流"槽要放方块，所以整流器做成方块而不是物品。
//   selenium_rectifier_block    硒整流器    铜阳极泥 -> 硒 -> 硒整流（熔盐槽的降级档）
//   silicon_rectifier_block     硅整流器    硅线的第一个工业级用途；熔盐槽的开工前置
//   thyristor_rectifier_block   晶闸管整流器 芯片线的后期件，并行 +2
//
// 流体（4）：电解液。硫酸铜液用 IU 自带的 iufluidcoppersulfate，
// 硫酸镍液沿用 pgm_items.js 已有的 kubejs:nickel_sulfate，这里只补四种：
//   zinc_sulfate      硫酸锌液   ZnSO4/H2SO4
//   cobalt_sulfate    硫酸钴液   CoSO4/H2SO4
//   cadmium_sulfate   硫酸镉液   CdSO4/H2SO4
//   manganese_sulfate 硫酸锰液   MnSO4/H2SO4
//   sodium_aluminate  偏铝酸钠液 NaAlO2，拜耳法溶出的中间液
//   brine             精制盐水   氯碱的进料
//
// 改完本文件要**完全重启**。
// ============================================================

StartupEvents.registry('item', event => {
    const addItem = (id, name, tip) => {
        const it = event.create(id).displayName(name)
        if (tip) it.tooltip(tip)
    }

    addItem('anode_slime', '阳极泥', '§7电解精炼的阳极残渣：金、银、硒与铂族都富集在这里')
    addItem('selenium_dust', '硒粉', '§7铜阳极泥里唯一值得单独回收的半导体元素；整流器的原料')
    addItem('electrolytic_copper', '电解铜（4N）', '§7纯度 99.99% 的阴极铜：母线、真空件、超导的原料')
    addItem('electrolytic_nickel', '电解镍（4N）', '§7纯度 99.99% 的阴极镍')
    addItem('aluminium_oxide', '氧化铝', '§7Al₂O₃，拜耳法产物；Hall-Héroult 熔盐电解的料')
    addItem('cryolite', '冰晶石', '§7Na₃AlF₆，铝电解的电解质，只补损耗')
    addItem('aluminium_hydroxide', '氢氧化铝', '§7Al(OH)₃，拜耳法晶种分解的产物；焙烧后就是氧化铝')
    addItem('sodium_fluoride', '氟化钠', '§7NaF，冰晶石的钠端')
    addItem('aluminium_fluoride', '氟化铝', '§7AlF₃，冰晶石的铝端')
    addItem('magnesium_chloride', '氯化镁', '§7MgCl₂，熔盐电解炼镁的料（6 V 槽，阳极出氯）')
    addItem('sodium_chloride', '氯化钠', '§7NaCl，氯碱的盐水与熔盐电解钠的料')
    addItem('zirconium_chloride', '四氯化锆', '§7ZrCl₄，熔盐电解锆的料（阳极出氯）')
})

StartupEvents.registry('block', event => {
    const addRectifier = (id, name, tip) => {
        event.create(id)
            .displayName(name)
            .soundType('metal')
            .hardness(3)
            .resistance(6)
            .requiresTool()
            .tag('minecraft:mineable/pickaxe')
            .item(item => {
                item.displayName(name)
                if (tip) item.tooltip(tip)
            })
            .texture('kubejs:block/' + id)
    }

    addRectifier('selenium_rectifier_block', '硒整流器', '§7硒整流机组：熔盐槽的降级档（能耗 ×1.10，没有它也能开工）')
    addRectifier('silicon_rectifier_block', '硅整流器', '§7硅整流机组：熔盐电解槽的开工前置（大电流直流）')
    addRectifier('thyristor_rectifier_block', '晶闸管整流器', '§7相控整流：熔盐槽并行 +2，能耗 ×0.85')
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
                    .temperature(320)
            })
    }

    addFluid('zinc_sulfate', '硫酸锌液', 0x7FA8C4, 1300, 420)
    addFluid('cobalt_sulfate', '硫酸钴液', 0xA8563C, 1300, 430)
    addFluid('cadmium_sulfate', '硫酸镉液', 0x8C7A9E, 1340, 440)
    addFluid('manganese_sulfate', '硫酸锰液', 0x9E8C7A, 1340, 450)
    addFluid('sodium_aluminate', '偏铝酸钠液', 0xB8A98C, 1250, 380)
    addFluid('brine', '精制盐水', 0x9FB8C8, 1200, 300)
})
