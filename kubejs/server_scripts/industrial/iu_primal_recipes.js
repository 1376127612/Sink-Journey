// ============================================================
// Industrial Upgrade 原始时代（primal）配方魔改
// ============================================================
//
// 时代约束：
//   原始时代只允许「基础金属」——铁、铜、锡、铅、金、银、琥珀金；
//   铱、钛、钨、锇、镍铬、铝青铜、因瓦、铋、钡、锶、铊等一律不出现。
//
// IU 原配方把原始时代的一堆机器写成了铱/钛/锰铁（ferromanganese）/
// 因瓦（invar）板，导致这些机器实际上只有电力时代才做得出来。
// 这里按 IU 自己的「原始时代」定位把它们改回基础金属：
//
//   熔炼砖坯  : 2 黏土 + 沙 + 砂砾 -> 4 熔炼砖坯（原来要尖晶石/钇粒）
//   粉碎原型机: 粉碎球 + 铁板 + 铜板
//   挤压原型机: 挤压部件 + 铁板 + 木板
//   原型流式腐蚀釜: 琥珀金板 + 铁板 + 铜板 + 琥珀金锅炉
//   激光器    : 红宝石 + 金板 + 红石
//   激光抛光原型机 / 原型模板刷机 / 电子工作台: 铁板 + 激光器 / 铜板 / 玻璃
//   熔炼炉炉缸 / 燃料箱 / 浇注块: 锡板 / 铅板
//   铸型模具  : 铁板 + 铁锭
//
// 原来由 KubeJS Studio 写入的原始时代配方（铁砧、原型流体加热器、
// 烙铁、铜锅炉、元件 76/41/141/142/144/158/588）已在本文件末尾迁入，
// id 一律改回 IU 自己的配方 id，只剩这一处来源。
//
// 不动的东西：
//   - 原型泵（1260）、原始包线机（1967）、原型晶体生长室（1255）、
//     干燥原型机（1251）、锻造锤（1649/1650）、熔炼炉控制器/炉体/
//     浇注块底座（1740/1922）本来就是基础材料，不改。
//
// 详细说明：kubejs/docs/IU_PRIMAL_STEAM.md
// ============================================================

ServerEvents.recipes(event => {
    // 基础金属板材
    var P_MAT = {
        iron:    { tag: 'c:plates/iron' },
        copper:  { tag: 'c:plates/copper' },
        tin:     { tag: 'c:plates/tin' },
        lead:    { tag: 'c:plates/lead' },
        gold:    { tag: 'c:plates/gold' },
        // 青铜板用 IU 的物品 id：这里没有 c:plates/bronze 标签，
        // 缺了这一项会让用到它的三条配方（加热器 1254、挤出机 751、切割机 754）
        // 在加载时变成 key=null 而整条失败。
        bronze:  { tag: 'c:plates/bronze' }
    }
    var P_ELEM = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }

    // 通用：删旧配方 + 用同一 id 写回
    var pShaped = function (id, pattern, key, output, count) {
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
    var pShapeless = function (id, ingredients, output, count) {
        event.remove({ id: id })
        event.custom({
            type: 'industrialupgrade:shapeless_recipe',
            category: 'misc',
            ingredients: ingredients,
            result: { count: count || 1, id: output },
            show_notification: false
        }).id(id)
    }

    // ---- 1. 熔炼砖坯：黏土 + 沙 + 砂砾 ----
    // 原来要 2 尖晶石粒 + 2 钇粒，那是电力时代的金属
    pShapeless('industrialupgrade:industrialupgrade_2422', [
        { item: 'minecraft:clay_ball' },
        { item: 'minecraft:clay_ball' },
        { item: 'minecraft:sand' },
        { item: 'minecraft:gravel' }
    ], P_ELEM(773), 4)

    // ---- 2. 粉碎原型机 ----
    pShaped('industrialupgrade:industrialupgrade_1249',
        ['C C', 'BAB', 'CBC'],
        { A: { item: P_ELEM(41) }, B: P_MAT.iron, C: P_MAT.copper },
        'industrialupgrade:macerator/macerator')

    // ---- 3. 挤压原型机 ----
    // 铁砧封禁后板子只能靠它自己压出来，所以本体不吃板，只吃铁锭
    pShaped('industrialupgrade:industrialupgrade_1250',
        ['C C', 'BAB', 'CBC'],
        {
            A: { item: P_ELEM(76) },
            B: { tag: 'c:ingots/iron' },
            C: { item: 'minecraft:oak_planks' }
        },
        'industrialupgrade:compressor/compressor')

    // ---- 4. 原型流式腐蚀釜 ----
    // 原来要琥珀金板（铁砧敲不出来），改用琥珀金锅炉 + 金板
    pShaped('industrialupgrade:industrialupgrade_1253',
        ['A A', 'ACA', 'EDE'],
        {
            A: P_MAT.gold,
            C: P_MAT.iron,
            D: { item: 'kubejs:copper_boiler' },
            E: P_MAT.copper
        },
        'industrialupgrade:primal_fluid_integrator/primal_fluid_integrator')

    // ---- 4.2 乳胶提取机（1252）----
    // 原来吃琥珀金锅炉，统一换成 kubejs 的铜锅炉
    pShaped('industrialupgrade:industrialupgrade_1252',
        ['CEC', 'CBC', 'CDC'],
        {
            B: { item: 'minecraft:glass' },
            C: { item: 'minecraft:oak_planks' },
            D: { item: 'kubejs:copper_boiler' },
            E: { item: 'industrialupgrade:tools/treetap' }
        },
        'industrialupgrade:block_squeezer/squeezer')

    // ---- 5. 激光器（元件 354）----
    pShaped('industrialupgrade:industrialupgrade_976',
        ['BAB', 'BAB', 'BDB'],
        {
            A: { tag: 'c:gems/ruby' },
            B: P_MAT.gold,
            D: { tag: 'c:dusts/redstone' }
        },
        P_ELEM(354))

    // ---- 6. 激光抛光原型机 ----
    pShaped('industrialupgrade:industrialupgrade_1256',
        [' B ', 'ADA', 'ACA'],
        {
            A: P_MAT.iron,
            B: { item: 'minecraft:glass' },
            C: { item: P_ELEM(354) },
            D: P_MAT.gold
        },
        'industrialupgrade:primal_laser_polisher/primal_laser_polisher')

    // ---- 7. 原型模板刷机 ----
    pShaped('industrialupgrade:industrialupgrade_1257',
        [' B ', 'ADA', 'ACA'],
        {
            A: P_MAT.iron,
            B: { item: 'minecraft:glass' },
            C: { item: P_ELEM(354) },
            D: P_MAT.copper
        },
        'industrialupgrade:primal_programming_table/primal_programming_table')

    // ---- 8. 电子工作台 ----
    pShaped('industrialupgrade:industrialupgrade_1258',
        [' B ', 'ADA', 'ACA'],
        {
            A: P_MAT.iron,
            B: { item: 'minecraft:glass' },
            C: { item: 'industrialupgrade:solderingiron' },
            D: P_MAT.copper
        },
        'industrialupgrade:primal_soldering_mechanism/primal_soldering_mechanism')

    // ---- 9. 熔炼炉炉缸 ----
    pShaped('industrialupgrade:industrialupgrade_1920',
        [' C ', 'DAD', ' B '],
        {
            A: { item: 'industrialupgrade:basemachine3/oak_tank' },
            B: { item: 'industrialupgrade:smeltery/smeltery_casing' },
            C: P_MAT.tin,
            D: P_MAT.lead
        },
        'industrialupgrade:smeltery/smeltery_tank')

    // ---- 10. 熔炼炉燃料箱 ----
    pShaped('industrialupgrade:industrialupgrade_1921',
        [' C ', 'ABA', ' D '],
        {
            A: { item: 'industrialupgrade:basemachine3/oak_tank' },
            B: { item: 'industrialupgrade:smeltery/smeltery_casing' },
            C: { item: 'minecraft:lava_bucket' },
            D: P_MAT.lead
        },
        'industrialupgrade:smeltery/smeltery_fuel_tank')

    // ---- 11. 熔炼炉浇注块 ----
    pShaped('industrialupgrade:industrialupgrade_1741',
        [' C ', 'CBC', ' C '],
        {
            B: { item: 'industrialupgrade:smeltery/smeltery_furnace' },
            C: P_MAT.tin
        },
        'industrialupgrade:smeltery/smeltery_casting')

    // ---- 12. 铸型模具 ----
    pShaped('industrialupgrade:industrialupgrade_1917',
        ['AAA', 'ABA', 'AAA'],
        {
            A: P_MAT.iron,
            B: { tag: 'c:ingots/iron' }
        },
        P_ELEM(496))

    // ---- 13. 轧辊（200）----
    // 原来要 钛板 + 铝板。手工轧机是原始时代的机器，轧辊只能是铜和铁。
    pShaped('industrialupgrade:industrialupgrade_752',
        ['AAA', 'BCB', '   '],
        {
            A: P_MAT.copper,
            B: P_MAT.iron,
            C: P_MAT.iron
        },
        P_ELEM(200))

    // ---- 14. 轧辊组（164）----
    // 原来 6 块钨板。手工轧机的主件，改铁板。
    pShaped('industrialupgrade:industrialupgrade_756',
        ['BAB', 'B B', 'BAB'],
        {
            A: { item: P_ELEM(200) },
            B: P_MAT.iron
        },
        P_ELEM(164))

    // ============================================================
    // 15 起：原 kubejsstudio/recipes.js 迁入（id 一律用 IU 自己的配方 id）
    // ============================================================
    // 这一段原先由 Studio 用另一个 id 追加、再单删原配方，等于一个物品两处来源。
    // 现在统一成「删原 id + 用原 id 写回」，形状与材料保持 Studio 的版本。

    // ---- 15. 铜锅炉（kubejs 物品，原始/蒸汽通用的热源）----
    event.shaped('kubejs:copper_boiler', ['###', '#A#', '#B#'], {
        '#': 'create:copper_sheet',
        'A': 'create:copper_casing',
        'B': 'minecraft:furnace'
    }).id('kubejs:copper_boiler')

    // ---- 16. 原型流体加热器（1254）----
    pShaped('industrialupgrade:industrialupgrade_1254',
        ['#A#', '#A#', 'BCB'],
        {
            '#': P_MAT.bronze,
            A: { item: 'kubejs:copper_boiler' },
            B: { item: 'create:brass_sheet' },
            C: { item: 'kubejs:bronze_gear' }
        },
        'industrialupgrade:primal_fluid_heater/primal_fluid_heater')

    // ---- 17. 烙铁（1926）：电子管 + 金板 + 钢锭 ----
    pShaped('industrialupgrade:industrialupgrade_1926',
        [' A ', ' C ', ' B '],
        {
            A: { item: 'create:electron_tube' },
            B: { tag: 'c:ingots/steel' },
            C: P_MAT.gold
        },
        'industrialupgrade:solderingiron')

    // ---- 18. 铁砧方块（1066）：两块铁板 + 原版铁砧 ----
    pShaped('industrialupgrade:industrialupgrade_1066',
        ['###', ' A '],
        {
            '#': { item: 'create:iron_sheet' },
            A: { item: 'minecraft:anvil' }
        },
        'industrialupgrade:block_anvil/block_anvil')

    // ---- 19. 粉碎球（41）：燧石 + 铁锭 ----
    pShaped('industrialupgrade:industrialupgrade_740',
        ['###', 'AAA', '###'],
        {
            '#': { item: 'minecraft:flint' },
            A: { tag: 'c:ingots/iron' }
        },
        P_ELEM(41))

    // ---- 20. 挤压部件（76）：铁板包铁块 ----
    pShaped('industrialupgrade:industrialupgrade_755',
        ['###', ' A ', '###'],
        {
            '#': { item: 'create:iron_sheet' },
            A: { item: 'minecraft:iron_block' }
        },
        P_ELEM(76))

    // ---- 21. 萃取器（141）：铁板 + 铁杆 + 蓝色玻璃 ----
    pShaped('industrialupgrade:industrialupgrade_753',
        ['###', '  A', 'BBB'],
        {
            '#': { item: 'create:iron_sheet' },
            A: { item: 'ad_astra:iron_rod' },
            B: { item: 'minecraft:blue_stained_glass' }
        },
        P_ELEM(141))

    // ---- 22. 挤出机（142）----
    pShaped('industrialupgrade:industrialupgrade_751',
        ['###', 'AAA', 'BCB'],
        {
            '#': { item: 'minecraft:blue_stained_glass' },
            A: { item: 'minecraft:light_blue_stained_glass' },
            B: P_MAT.bronze,
            C: { item: 'create:iron_sheet' }
        },
        P_ELEM(142))

    // ---- 23. 切割机（144）----
    pShaped('industrialupgrade:industrialupgrade_754',
        ['###', ' A ', 'BB '],
        {
            '#': P_MAT.bronze,
            A: { item: 'minecraft:blue_stained_glass' },
            B: { item: 'create:iron_sheet' }
        },
        P_ELEM(144))

    // ---- 24. 采石场（158）：钻石工具头 + 齿轮组 ----
    pShaped('industrialupgrade:industrialupgrade_1121',
        ['#AB', 'CDC', 'EEE'],
        {
            '#': { item: 'minecraft:diamond_axe' },
            A: { item: 'minecraft:diamond_pickaxe' },
            B: { item: 'minecraft:diamond_shovel' },
            C: { item: 'kubejs:bronze_gear' },
            D: { item: P_ELEM(21) },
            E: { item: 'kubejs:brass_gear' }
        },
        P_ELEM(158))

    // ---- 25. 冷却系统（588）：蓝冰 + 铁板 ----
    pShaped('industrialupgrade:industrialupgrade_1245',
        ['##A', '#AA', '##A'],
        {
            '#': { item: 'minecraft:blue_ice' },
            A: { item: 'create:iron_sheet' }
        },
        P_ELEM(588))

    console.info('[IU] 原始时代魔改已应用：熔炼砖 / 粉碎机 / 挤压机 / 腐蚀釜 / 激光链 / 熔炼炉 / 铸型模具 / 轧辊 / 铜锅炉 / 烙铁 / 铁砧 / 粉碎球 / 挤压部件 / 三台原型加工件 / 采石场 / 冷却系统')
})
