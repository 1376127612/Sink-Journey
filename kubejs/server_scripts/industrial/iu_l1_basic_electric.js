// ============================================================
// IU L1 基础电力（baseElectric）阶段配方魔改
// ============================================================
//
// 阶段定义（详见 kubejs/docs/IU_L1_BASIC_ELECTRIC.md）：
//   L1 = IU guidebook 的「基础电力时代」页签。
//   入口：钢锭（高级机身 = 钢板、元件:合金 = 致密钢板）；出口：第一块 304 不锈钢（→ 138 改良外壳 = L2）。
//
// 白名单：铁、钢、铜、锡、锌、铅、银、镍 + 二元合金（青铜、红铜、殷钢、锰铁、坡莫、琥珀金）。
// 铬只允许出现在 L1 的出口工序（304），所以 镍铬 / 不锈钢 / 钛 / 锗 / 钴 / 铝 / 米哈洛夫
// 一律不得出现在本阶段的机器件里。
//
// 本文件做 P1（L1 自举，7 条）+ P2 的塑料线前置（元件 98 / 33）。改完 P1，
// simplemachine 四机、moremachine2 三机、齿轮机、洗矿机、离心机、固体冰箱
// 都只是「机身 + 元件」，会自动变成可造。
//
// 还没动的（等确认，见文档 §11）：
//   P3：铀线四台加阶段锁、元件 101 的银板降成银粒（都需要单独决定）
// 通用矿处 basic 机壳保持 304（方案 A：它是 L1 的收尾礼物，见文档 §7.3）
//
// 不改的东西：iu_electric_recipes.js 已定的 水 / 流体 / 水箱 / 无线 / 阳极阴极 / RE 电池 / 电子装配机，
// 以及 iu_primal_* 与 iu_steam_* 那两批（原始 / 蒸汽）。/reload 生效。
// ============================================================

ServerEvents.recipes(event => {
    var E = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }

    // 通用：删旧配方 + 用同一 id 写回
    var shaped = function (id, pattern, key, output, count) {
        event.remove({ id: id })
        event.custom({
            type: 'industrialupgrade:shaped_recipe',
            category: 'misc',
            key: key,
            pattern: pattern,
            result: { count: count || 1, id: output },
            show_notification: false
        }).id(id)
    }

    // ---- 1. 冷却水箱（72）：铜导热 + 镍水道 ----
    // 原配方：真空腔室 + 米哈洛夫板 + 钴板。米哈洛夫是木卫二矿，把 8 台基础机器的公共件
    // 锁在太空线上——这是 L1 唯一的真死锁。冷却水走铜管、箱体要耐蚀，用铜 + 镍。
    shaped('industrialupgrade:industrialupgrade_743',
        [' B ', 'BAB', 'CCC'],
        {
            A: { item: E(46) },
            B: { tag: 'c:plates/copper' },
            C: { tag: 'c:plates/nickel' }
        },
        E(72))

    // ---- 2. 真空腔室（46）：铁壳 + 铜密封面 ----
    // 原配方：铁板 + 铝板。铝要 Hall-Héroult（电力后段），L1 拿不到。
    shaped('industrialupgrade:industrialupgrade_741',
        [' A ', 'ABA', 'ABA'],
        {
            A: { tag: 'c:plates/iron' },
            B: { tag: 'c:plates/copper' }
        },
        E(46))

    // ---- 3. 元件:板（73）：钢板 + 锡板 + 铜板 ----
    // 原配方：铬板 + 锡板 + 金板。铬是 L1 的出口材料，金不做结构件；
    // 板材加工元件的骨架是钢，焊点是锡，滚轮面是铜。
    shaped('industrialupgrade:industrialupgrade_813',
        ['CCC', 'BAB', 'D D'],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/tin' },
            C: { tag: 'c:plates/steel' },
            D: { tag: 'c:plates/copper' }
        },
        E(73))

    // ---- 4. 元件:矿石粉碎（34）：高锰钢衬板 + 锰齿轮 ----
    // 原配方：锰板 + 铝齿轮。铝在 L1 不可得；粉碎元件的耐磨件就是高锰钢（锰铁）。
    shaped('industrialupgrade:industrialupgrade_838',
        ['CBC', 'BCB', ' A '],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/ferromanganese' },
            C: { tag: 'c:gears/manganese' }
        },
        E(34))

    // ---- 5. 元件:热量（39）：铜导热 + 镍发热带 ----
    // 原配方：蒙茨板 + 镍铬板。蒙茨是 Cu-Zn-Pb 三元（L2 炉档），镍铬要铬（L1 出口后）。
    // L1 的发热体就是镍带，镍铬留到 L2 升级。
    shaped('industrialupgrade:industrialupgrade_847',
        ['CCC', 'BAB', 'BBB'],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/copper' },
            C: { tag: 'c:plates/nickel' }
        },
        E(39))

    // ---- 6. 元件:塑料合成（65）：钢机筒 + 铜加热圈 ----
    // 原配方：锗板 + 铬板。锗是区熔产物，L1 没有；挤出机的机筒是钢，加热圈是铜。
    shaped('industrialupgrade:industrialupgrade_1366',
        ['BBB', ' A ', 'CCC'],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/steel' },
            C: { tag: 'c:plates/copper' }
        },
        E(65))

    // ---- 7. 元件:焊接（262）：红铜焊嘴 + 铜极头 + 钢机架 ----
    // 原配方：阿卢梅尔齿轮 + 铝青铜板 + 钛板。阿卢梅尔是 K 型热电偶负极、铝青铜要铝、钛更晚；
    // 焊接件的现实材料是铜（导电 + 导热），机架是钢。
    shaped('industrialupgrade:industrialupgrade_1588',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(21) },
            B: { tag: 'c:gears/redbrass' },
            C: { tag: 'c:plates/copper' },
            D: { tag: 'c:plates/steel' },
            E: { tag: 'c:plates/iron' }
        },
        E(262))


    // ---- 8. 元件:石油合成（98，六条同形）：锌齿轮 + 钢板 ----
    // 原配方：镁齿轮 + 钛板。镁要熔盐电解、钛要 Kroll，都在 L1 之外；
    // 石油合成元件的现实材料是耐蚀管道（钢）与阀件传动（锌齿轮，镀锌件）。
    // 六条只差"装的原油种类"，用循环原样保留各自那一格。
    var OIL_CELLS = [
        [890, 'iufluidpetroleum'],
        [891, 'iufluidsour_light_oil'],
        [892, 'iufluidsour_medium_oil'],
        [893, 'iufluidsour_heavy_oil'],
        [894, 'iufluidsweet_medium_oil'],
        [895, 'iufluidsweet_heavy_oil']
    ]
    for (var oi = 0; oi < OIL_CELLS.length; oi++) {
        var oid = 'industrialupgrade:industrialupgrade_' + OIL_CELLS[oi][0]
        event.remove({ id: oid })
        event.custom({
            type: 'industrialupgrade:shaped_recipe',
            category: 'misc',
            key: {
                A: { item: E(21) },
                B: {
                    type: 'neoforge:components',
                    items: 'industrialupgrade:itemcell/itemcell',
                    components: {
                        'industrialupgrade:fluid': { amount: 1000, id: 'industrialupgrade:' + OIL_CELLS[oi][1] },
                        'minecraft:attribute_modifiers': { modifiers: [] },
                        'minecraft:enchantments': { levels: {} },
                        'minecraft:lore': [],
                        'minecraft:max_stack_size': 64,
                        'minecraft:rarity': 'common',
                        'minecraft:repair_cost': 0
                    }
                },
                C: { tag: 'c:gears/zinc' },
                D: { tag: 'c:plates/steel' }
            },
            pattern: ['CBC', 'BAB', 'DBD'],
            result: { count: 1, id: E(98) },
            show_notification: false
        }).id(oid)
    }

    // ---- 9. 元件:精炼（33）：铜板 + 镍壳 + 锰齿轮 + 铅壳 + 钢双板 ----
    // 原配方：钒板 + 镍壳 + 锰齿轮 + 米哈洛夫壳 + 钛双板。石油精炼塔的现实材料是
    // 碳钢塔体 + 镍基内件 + 铅衬里（环烷酸腐蚀），钒与钛都是 L3。
    shaped('industrialupgrade:industrialupgrade_833',
        ['DCD', 'BAB', 'EFE'],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/copper' },
            C: { tag: 'c:casings/nickel' },
            D: { tag: 'c:gears/manganese' },
            E: { tag: 'c:casings/lead' },
            F: { tag: 'c:doubleplate/steel' }
        },
        E(33))

    console.info('[IU] L1 基础电力 P2 塑料线已改：元件 98（石油合成，6 条）/ 33（精炼）改用 锌齿轮/钢/铜/镍/铅')

    // ---- 10. 元件:矿物（205）：锰齿轮 + 钢板 ----
    // 原配方：钴齿轮 + 复合金属板 + 钛板 + 塑料板。钴是镍线副产（L3 前后），钛更晚；
    // 矿物处理元件的耐磨件用高锰钢（锰齿轮），塔体用钢。
    shaped('industrialupgrade:industrialupgrade_1144',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(21) },
            B: { tag: 'c:gears/manganese' },
            C: { item: E(274) },
            D: { tag: 'c:plates/steel' },
            E: { item: 'industrialupgrade:plastic_plate' }
        },
        E(205))

    // ---- 11. 元件:气流（71）：铜双板 + 锌齿轮 + 红铜齿轮 + 钢双板 ----
    // 原配方：铱双板 + 锗齿轮 + 红铜齿轮 + 维塔利姆双板。风道要导热与耐蚀，用铜；
    // 风机叶轮是锌合金压铸件；壳体从植入体合金（维塔利姆）换成钢。
    shaped('industrialupgrade:industrialupgrade_883',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(21) },
            B: { tag: 'c:doubleplate/copper' },
            C: { tag: 'c:gears/zinc' },
            D: { tag: 'c:gears/redbrass' },
            E: { tag: 'c:doubleplate/steel' }
        },
        E(71))

    // ---- 12. 元件:燃气发电机（263）：铜双板 ----
    // 原配方：镍铬双板。燃气轮机的热端确实要镍铬，但那是 L2 的升级；L1 先用铜做集热件。
    shaped('industrialupgrade:industrialupgrade_1619',
        [' C ', 'BAB', 'DDD'],
        {
            A: { item: E(21) },
            B: { tag: 'c:doubleplate/copper' },
            C: { item: 'industrialupgrade:battery/energy_crystal' },
            D: { item: 'industrialupgrade:itemcell/itemcell' }
        },
        E(263))

    // ---- 13. 元件:工艺（128）：银板 ----
    // 原配方：铂板。铂族是克级触头材料，L1 用银板（仍是触头/镀层级，单条 ≤2）。
    shaped('industrialupgrade:industrialupgrade_1113',
        ['DCD', 'BAB', ' E '],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/silver' },
            C: { item: 'minecraft:crafting_table' },
            D: { tag: 'c:plates/tin' },
            E: { tag: 'c:plates/iron' }
        },
        E(128))

    // ---- 14. 冷却机（1458）：电动机 276 + 镍板 ----
    // 原配方要「高级电动机 96」（L3）和坡莫板。制冷机的压缩机用 L1 电动机，
    // 冷凝器用镍板（耐蚀），坡莫留给 L2 的磁屏蔽件。
    shaped('industrialupgrade:industrialupgrade_1458',
        ['BAB', ' C ', 'EDE'],
        {
            A: { item: E(11) },
            B: { item: E(72) },
            C: { item: 'industrialupgrade:basemachine3/fluid_cooling' },
            D: { item: E(276) },
            E: { tag: 'c:plates/nickel' }
        },
        'industrialupgrade:basemachine3/cooling')

    // ---- 15. 燃气混合室（1025）：电动机 276 ----
    // 原配方用「改良电机」标签（L2 件），L1 换成普通电动机。
    shaped('industrialupgrade:industrialupgrade_1025',
        [' A ', 'EBC', ' D '],
        {
            A: { item: 'industrialupgrade:gas_chamber/primal_gas_chamber' },
            B: { item: 'industrialupgrade:blockresource/advanced_machine' },
            C: { item: E(263) },
            D: { item: E(276) },
            E: { item: E(267) }
        },
        'industrialupgrade:basemachine3/gas_combiner')

    console.info('[IU] L1 基础电力 P2 已收尾：元件 205/71/263/128、冷却机 1458、燃气混合室 1025 改用 锰/铜/锌/银/镍/钢')

    console.info('[IU] L1 基础电力 P1 已改：冷却水箱/真空腔室/元件:板/矿石粉碎/热量/塑料合成/焊接 改用 铜/镍/钢/锰铁/红铜')
})
