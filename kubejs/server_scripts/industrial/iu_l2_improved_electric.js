// ============================================================
// IU L2 改良电力（improvedElectric）阶段配方魔改
// ============================================================
//
// 阶段定义与全量盘点见 kubejs/docs/IU_L2_IMPROVED_ELECTRIC.md：
//   L2 = IU guidebook 的「改良电力时代」页签（105 格）。
//   入口：304 不锈钢 → 138 改良外壳（iu_metal_realism.js 已实装）；
//   出口：钼 → 316L → 139 高级外壳（钼线属 P3，见文档 §4.1）。
//
// 本文件做 P1（入口解锁，5 条）+ P2（改良元件换材料，13 条）+ P3-2（采石场元件 1 条）。
// P1 把 138 一族（double_* / adv_*，35 台机器）的上游元件从后期金属上拆下来，
// 改完改良合金炉 1451 与全部改良机器都只是「外壳 + 电动机 + 插槽元件」，自动可造。
//
// 为什么不改 25 改良元件模板：IU 的 736 要 651 镍钨合金灯（三颗），
// 而 651 的 1008 只是因为外壳用了 505 镍钨合金才吃钨。改 1008 一处，
// 25 / 23 / 24 三块模板同时解开，比逐块换 736 的角料省，也不动 count。
//
// 阿卢梅尔（Ni-Mn-Al-Si）与硬铝（Al-Cu-Mg）都含铝，但铝不是 L3 金属：
// 电力时代末段的熔盐槽（拜耳 → Hall-Héroult）就能出锭，所以本阶段不用铝做合金件，
// 只在 MFE 母排上留一处——那是铝在现实里的岗位（大电流母排 + 铜铝过渡片）。
// 其余一律换成镍铬 / 坡莫 / 镍 / 304：功能不变，材料回到 L2 窗口。
// 镍铬的铬来自 L1 出口（304 配料），坡莫是 Ni-Fe 二元，L1 就有。
//
// 不改的东西：iu_metal_realism.js 的 137/138/139/140 四条机壳，iu_l1_basic_electric.js 的 L1 那批，
// iu_electric_recipes.js 的电力元件。/reload 生效。
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

    // ============================================================
    // P1：入口解锁（5 条）
    // ============================================================

    // ---- 1. 镍钨合金灯 651（1008）：钢化玻璃 + 红石 + 304 板 ----
    // 原配方：钢化玻璃 + 红石 + 505 镍钨合金外壳。灯座只是灯座，钨要留给 L4 的垂熔件；
    // 304 耐蚀、好焊，正好是 L2 的通用件。改完 25 / 23 / 24 三块模板同时解开。
    shaped('industrialupgrade:industrialupgrade_1008',
        [' A ', 'CBC', 'C C'],
        {
            A: { item: 'industrialupgrade:blockresource/tempered_glass' },
            B: { item: 'minecraft:redstone' },
            C: { tag: 'c:plates/stainlesssteel' }
        },
        E(651), 2)

    // ---- 2. 改良电动机 20（727）：热电偶对改用 镍铬 + 坡莫 ----
    // 原配方：琥珀金双板 + 阿卢梅尔双板。阿卢梅尔是 K 型热电偶的负极腿（Ni-Mn-Al-Si），
    // 含铝；坡莫（Ni-Fe）同样是镍基、同样不进磁路，作为负腿的替身不改变功能。
    shaped('industrialupgrade:industrialupgrade_727',
        ['ABA', 'ECD', '   '],
        {
            A: { tag: 'c:doubleplate/electrum' },
            B: { tag: 'c:doubleplate/permalloy' },
            C: { item: E(276) },
            D: { item: E(16) },
            E: { item: E(614) }
        },
        E(20))

    // ---- 3. 改良元件:合金 235（1487）：镍铬板 + 304 板 + 锰铁板 ----
    // 原配方：阿卢梅尔板 + 硬铝板 + 锰铁板。合金炉的内胆要耐热（镍铬）、炉壳要耐蚀（304）、
    // 衬板要耐磨（锰铁），三种都是 L2 能拿到的。硬铝与阿卢梅尔都要铝。
    shaped('industrialupgrade:industrialupgrade_1487',
        ['B B', 'DAD', 'CCC'],
        {
            A: { item: E(25) },
            B: { tag: 'c:plates/nichrome' },
            C: { tag: 'c:plates/ferromanganese' },
            D: { tag: 'c:plates/stainlesssteel' }
        },
        E(235))

    // ---- 4. 元件:改良水箱 45（853）：镍板 ----
    // 原配方：4 角阿卢梅尔板。水箱的内胆是镍（L1 已注册 c:plates/nickel），
    // 阿卢梅尔那套热电偶合金不该出现在流体件上。
    shaped('industrialupgrade:industrialupgrade_853',
        ['BCB', 'BAB', 'BCB'],
        {
            A: { item: E(21) },
            B: { item: 'industrialupgrade:itemcell/itemcell' },
            C: { tag: 'c:plates/nickel' }
        },
        E(45))

    // ---- 5. MFE 储能（33）：304 双板 + 铝排 + 4N 铜排 ----
    // 原配方：4 角铝青铜双板。MFE 的壳是承压件，304 双板是 L2 的标准答案。
    // 母排分两段：厂房级大电流走铝排（同重量导电率约铜的两倍），接头一侧要 4N 铜排，
    // 铝铜相接就是现实里的过渡片。铝来自电力时代的熔盐槽，所以它进 L2 不越阶段。
    shaped('industrialupgrade:industrialupgrade_33',
        ['ACA', 'CBC', 'EDE'],
        {
            A: { tag: 'c:doubleplate/stainlesssteel' },
            B: { item: 'industrialupgrade:wiring_storage/cesu_iu' },
            C: { item: 'industrialupgrade:battery/energy_crystal' },
            D: { item: 'kubejs:electrolytic_copper' },
            E: { tag: 'c:plates/aluminium' } // l2-allow: aluminium  MFE 母排
        },
        'industrialupgrade:wiring_storage/mfe_iu')

    console.info('[IU] L2 改良电力 P1 已改：灯座/改良电动机/改良元件:合金/改良水箱/MFE 改用 304 + 镍铬 + 坡莫 + 镍；MFE 母线 = 铝排 + 4N 铜排')

    // ============================================================
    // P2：改良/高级元件的材料归位（13 条）
    // 口径见文档 §3.1：L2 允许 铁/钢/铜/锡/锌/铅/银/镍/锰/铬（以镍铬、304 的形式）
    // + 青铜/黄铜/红铜/蒙茨/因瓦/坡莫/锰铁 + 304/316L；钛钨锗铂族镁铝一律不出现。
    // 高级档（80/81/83/130）按 304 写，因为它们的机壳就是 139 那一档。
    // ============================================================

    // ---- 6. 改良元件:风（3）：镍铬双板 + 锰铁齿轮 + 红铜齿轮 ----
    // 原配方：铱双板 + 锗齿轮 + 红铜齿轮。风机叶轮要耐磨（高锰钢），轴与壳体要耐蚀（镍铬）。
    shaped('industrialupgrade:industrialupgrade_885',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(25) },
            B: { tag: 'c:doubleplate/nichrome' },
            C: { tag: 'c:gears/ferromanganese' },
            D: { tag: 'c:gears/redbrass' },
            E: { item: E(275) }
        },
        E(3))

    // ---- 7. 改良元件:水（4）：304 双板 + 锌齿轮 + 镍铬齿轮 ----
    // 原配方：锗双板 + 锗齿轮 + 镍铬齿轮。水泵过流件是不锈钢，叶轮是锌合金压铸件。
    shaped('industrialupgrade:industrialupgrade_1103',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(25) },
            B: { tag: 'c:doubleplate/stainlesssteel' },
            C: { tag: 'c:gears/zinc' },
            D: { tag: 'c:gears/nichrome' },
            E: { item: E(275) }
        },
        E(4))

    // ---- 8. 改良元件:流动（6）：锌齿轮 ----
    // 原配方：镁齿轮。镁是 L3 熔盐电解产物，锌 L1 就有。
    shaped('industrialupgrade:industrialupgrade_825',
        ['CBC', 'CBC', 'CAC'],
        {
            A: { item: E(25) },
            B: { tag: 'c:gears/zinc' },
            C: { item: 'industrialupgrade:itemcell/itemcell' }
        },
        E(6))

    // ---- 9. 改良元件:精炼（9）：铜板 + 镍壳 + 铅壳 + 304 双板 ----
    // 原配方：钒板 + 镍壳 + 锰齿轮 + 米哈洛夫壳 + 钛双板。精炼塔＝铜导热、镍内件、铅衬里、不锈钢塔体。
    shaped('industrialupgrade:industrialupgrade_834',
        ['DCD', 'BAB', 'EFE'],
        {
            A: { item: E(25) },
            B: { tag: 'c:plates/copper' },
            C: { tag: 'c:casings/nickel' },
            D: { tag: 'c:gears/manganese' },
            E: { tag: 'c:casings/lead' },
            F: { tag: 'c:doubleplate/stainlesssteel' }
        },
        E(9))

    // ---- 10. 改良元件:矿石淘洗（12）：锰板 + 锰齿轮 ----
    // 原配方：铝齿轮。淘洗槽的耐磨件就是高锰钢；铝是 L3 后段。
    shaped('industrialupgrade:industrialupgrade_839',
        ['CBC', 'BCB', ' A '],
        {
            A: { item: E(25) },
            B: { tag: 'c:plates/manganese' },
            C: { tag: 'c:gears/manganese' }
        },
        E(12))

    // ---- 11. 元件:聚合（56）：八种 L2 合金各一块板 ----
    // 原配方：铝镁 / 阿卢梅尔 / 维塔利姆 / 红铜 / 蒙茨 / 镍铬 / 铝钒 / 硬铝。
    // 这一格是「这个阶段能拿到的八种合金」的展示件，换成 青铜 / 304 / 镍铬 / 红铜 / 坡莫 / 蒙茨 / 锰铁 / 因瓦。
    shaped('industrialupgrade:industrialupgrade_858',
        ['FBG', 'CAD', 'HEJ'],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/stainlesssteel' },
            C: { tag: 'c:plates/nichrome' },
            D: { tag: 'c:plates/redbrass' },
            E: { tag: 'c:plates/permalloy' },
            F: { tag: 'c:plates/muntsa' },
            G: { tag: 'c:plates/ferromanganese' },
            H: { tag: 'c:plates/bronze' },
            J: { tag: 'c:plates/invar' }
        },
        E(56))

    // ---- 12. 高级元件:气流（80）：镍铬双板 + 锌齿轮 ----
    // 原配方：铱双板 + 锗齿轮。高级档里只有过流件换 316L（81），气流件仍用镍铬（耐热）。
    shaped('industrialupgrade:industrialupgrade_886',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(23) },
            B: { tag: 'c:doubleplate/nichrome' },
            C: { tag: 'c:gears/zinc' },
            D: { tag: 'c:gears/redbrass' },
            E: { item: 'industrialupgrade:quantumitems2' }
        },
        E(80))

    // ---- 13. 高级元件:水（81）：304 双板 + 锌齿轮 ----
    // 原配方：锗双板 + 锗齿轮。高级档的过流件按 139 那一档写，304 先顶上；
    // 316L 版本等 P3 的钼线落地后再升（同一位置换 c:doubleplate/stainlesssteel 的 316L 变体）。
    shaped('industrialupgrade:industrialupgrade_1104',
        ['CCC', 'BAB', 'DED'],
        {
            A: { item: E(23) },
            B: { tag: 'c:doubleplate/stainlesssteel' },
            C: { tag: 'c:gears/zinc' },
            D: { tag: 'c:gears/nichrome' },
            E: { item: 'industrialupgrade:quantumitems2' }
        },
        E(81))

    // ---- 14. 高级元件:流体（83）：锌齿轮 ----
    // 原配方：镁齿轮。
    shaped('industrialupgrade:industrialupgrade_826',
        ['CBC', 'CBC', 'CAC'],
        {
            A: { item: E(23) },
            B: { tag: 'c:gears/zinc' },
            C: { item: 'industrialupgrade:itemcell/itemcell' }
        },
        E(83))

    // ---- 15. 改良元件:工艺（129）：银板 ----
    // 原配方：铂板。和 128（元件:工艺，L1 已改银板）保持一致；铂留给 L3 的催化件。
    shaped('industrialupgrade:industrialupgrade_1114',
        ['DCD', 'BAB', ' E '],
        {
            A: { item: E(25) },
            B: { tag: 'c:plates/silver' },
            C: { item: 'minecraft:crafting_table' },
            D: { tag: 'c:plates/tin' },
            E: { tag: 'c:plates/iron' }
        },
        E(129))

    // ---- 16. 高级元件:工艺（130）：304 板 ----
    // 原配方：铂板。高级档的机架用不锈钢，铂同样留给 L3。
    shaped('industrialupgrade:industrialupgrade_1115',
        ['DCD', 'BAB', ' E '],
        {
            A: { item: E(23) },
            B: { tag: 'c:plates/stainlesssteel' },
            C: { item: 'minecraft:crafting_table' },
            D: { tag: 'c:plates/tin' },
            E: { tag: 'c:plates/iron' }
        },
        E(130))

    // ---- 17. 改良元件:混合（135）：镍铬双板 + 因瓦双板 ----
    // 原配方：维塔利姆双板 + 因瓦双板。搅拌桨要耐磨耐蚀，镍铬是 L2 的上限；因瓦是精密件。
    shaped('industrialupgrade:industrialupgrade_1108',
        ['CBC', 'BAB', ' B '],
        {
            A: { item: E(25) },
            B: { tag: 'c:doubleplate/nichrome' },
            C: { tag: 'c:doubleplate/invar' }
        },
        E(135))

    // ---- 18. 元件:变压器（156）：铜板 ----
    // 原配方：锗板。变压器的绕组是铜、铁芯是钢；锗是半导体材料，不该出现在这里。
    shaped('industrialupgrade:industrialupgrade_1120',
        [' C ', 'BAB', ' D '],
        {
            A: { item: E(21) },
            B: { tag: 'c:plates/copper' },
            C: { item: E(60) },
            D: { item: E(11) }
        },
        E(156))

    // ---- 19. 元件:沙砾 231（1481）：锰齿轮 ----
    // 原配方：尖晶石齿轮。尖晶石是太空/晶簇线的磨料，L2 的耐磨件用高锰钢。
    // 采石场（1281）吃这一颗，所以它决定采石支线能不能起步。
    shaped('industrialupgrade:industrialupgrade_1481',
        ['CCC', 'BAB', '   '],
        {
            A: { item: E(21) },
            B: { tag: 'c:gears/ferromanganese' },
            C: { item: 'minecraft:gravel' }
        },
        E(231))


    // ---- 20. 改良控制器 16（732）：加一颗电容（晶圆门槛）----
    // 原配方：6 青铜板 + 控制器 + 2 锡板。改良档的控制器要一颗电容，而电容现在吃一片 6N 晶圆，
    // 所以「IU 升级」这件事与半导体线是绑在一起的：没有晶圆线就没有改良机器。
    shaped('industrialupgrade:industrialupgrade_732',
        ['AAA', 'CBC', 'D  '],
        {
            A: { tag: 'c:plates/bronze' },
            B: { item: E(42) },
            C: { tag: 'c:plates/tin' },
            D: { item: 'industrialupgrade:circuit/circuit_part1' }
        },
        E(16))


    console.info('[IU] L2 改良电力 P2 已改：风/水/流动/精炼/矿石淘洗/聚合/气流/水(高级)/流体/工艺/混合/变压器 改用 304 + 镍铬 + 坡莫 + 锌/锰齿轮')
})
