// ============================================================
// Industrial Upgrade 基础电力时代（electric）配方魔改
// ============================================================
//
// 时代约束（本时代唯一白名单）：
//   铜、锡、锌、铅、铁、金、银、琥珀金、青铜、黄铜、红铜、钢、镍。
//   钛、钨、锇、铱、铂、锗、钒、钴、铪、铌、钇、钡、锶、镁、锰、铋、
//   镍铬、因科镍、因瓦、铝青铜、镍钛诺、不锈钢、维塔利姆……
//   一律不出现。
//
// 说明：IU 把第一批电力机器全写成钛板 / 钨板 / 锗板 / 镍铬齿轮 /
//      因科镍板，等于把电力时代锁在后期金属后面。这里把电力主线
//      上真正会挡路的几条改成 钢 / 银 / 铅 / 镍，形状与数量保持原样：
//
//       钢 = 结构件（板 / 锭）
//       银 = 导体（板 / 锭）
//       铅 = 密封与屏蔽（板）
//       镍 = 抗蚀与耐热（板 / 锭）
//
// 不改的东西：
//   - 元件模板 21（kubejsstudio 序列装配已接管）；
//   - 电动机 276 / 线圈 294 / 能源元件 60（iu_electric_motor.js 专家链）；
//   - 基础电路板 circuit_part1（silicon/iu_chip.js 已改成吃晶圆）；
//   - 元件 354 激光器（iu_primal_recipes.js 已改成金板）；
//   - 蒸汽时代那一批（iu_steam_recipes.js）。
//
// 详细说明：kubejs/docs/BASIC_ELECTRIC_AGE.md
// ============================================================

ServerEvents.tags('item', event => {
    // IU 有镍板物品但没有 c:plates/nickel 标签，这里补上，
    // 让后面 AE、工业先锋和别的脚本都能按标签写配方。
    event.add('c:plates/nickel', 'industrialupgrade:itemplates/nickel_plate')
    event.add('c:casings/nickel', 'industrialupgrade:casing/nickel')
})

ServerEvents.recipes(event => {
    var E_PLATE = {
        steel:  { tag: 'c:plates/steel' },
        silver: { tag: 'c:plates/silver' },
        lead:   { tag: 'c:plates/lead' },
        nickel: { item: 'industrialupgrade:itemplates/nickel_plate' },
        iron:   { tag: 'c:plates/iron' },
        zinc:   { tag: 'c:plates/zinc' }
    }
    var E_INGOT = {
        steel:  { tag: 'c:ingots/steel' },
        silver: { tag: 'c:ingots/silver' },
        lead:   { tag: 'c:ingots/lead' },
        nickel: { tag: 'c:ingots/nickel' }
    }
    var E_ELEM = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }
    var eItem = function (id) {
        return { item: id }
    }

    var eShaped = function (id, pattern, key, output, count) {
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

    // ---- 1. 元件:水（101）----
    // 原来要 锗板 / 锗齿轮 / 镍铬齿轮 / 维塔利姆板。
    // 水冷与导热：银板打底，镍锭做耐蚀触头，铅板做密封。
    eShaped('industrialupgrade:industrialupgrade_1102',
        ['CCC', 'BAB', 'DED'],
        {
            A: eItem(E_ELEM(21)),
            B: E_PLATE.silver,
            C: E_INGOT.nickel,
            D: E_PLATE.lead,
            E: E_PLATE.steel
        },
        E_ELEM(101))

    // ---- 2. 元件:流体（27）----
    // 原来要 镁齿轮，电解器与电力干燥机都用它。镁不在白名单，
    // 换成镍板：耐腐蚀的流体腔体。
    eShaped('industrialupgrade:industrialupgrade_824',
        ['CBC', 'CBC', 'CAC'],
        {
            A: eItem(E_ELEM(21)),
            B: E_PLATE.nickel,
            C: eItem('industrialupgrade:itemcell/itemcell')
        },
        E_ELEM(27))

    // ---- 3. 元件:水箱（43）----
    // 原来中心是 镍钨合金板（655），钨不属于本时代。
    eShaped('industrialupgrade:industrialupgrade_852',
        ['BCB', 'BAB', 'BCB'],
        {
            A: eItem(E_ELEM(21)),
            B: eItem('industrialupgrade:itemcell/itemcell'),
            C: E_PLATE.nickel
        },
        E_ELEM(43))

    // ---- 4. 轧辊（200）----
    // 原来要 钛板 + 铝板。铝要到太空线，钛更晚。
    eShaped('industrialupgrade:industrialupgrade_752',
        ['AAA', 'BCB', '   '],
        {
            A: E_PLATE.zinc,
            B: E_PLATE.iron,
            C: E_PLATE.steel
        },
        E_ELEM(200))

    // ---- 5. 轧辊组（164）----
    // 原来 6 块钨板。改钢板：手工轧机的核心件。
    eShaped('industrialupgrade:industrialupgrade_756',
        ['BAB', 'B B', 'BAB'],
        {
            A: eItem(E_ELEM(200)),
            B: E_PLATE.steel
        },
        E_ELEM(164))

    // ---- 6. 元件:无线（90）----
    // 原来 米哈伊尔齿轮 / 铂齿轮 / 红铜双板，无线供能器要用。
    eShaped('industrialupgrade:industrialupgrade_1127',
        ['BBB', 'DAD', 'EEE'],
        {
            A: eItem(E_ELEM(21)),
            B: E_PLATE.silver,
            D: E_INGOT.nickel,
            E: E_PLATE.steel
        },
        E_ELEM(90))

    // ---- 7. 无线供能器 ----
    // 原来 3 块因科镍板。改成钢板，保留原来的等级结构。
    eShaped('industrialupgrade:industrialupgrade_1006',
        ['AAA', 'CBE', ' D '],
        {
            A: E_PLATE.steel,
            B: eItem('industrialupgrade:blockresource/advanced_machine'),
            C: eItem(E_ELEM(90)),
            D: eItem('industrialupgrade:motors_with_improved_bearings_'),
            E: eItem(E_ELEM(614))
        },
        'industrialupgrade:basemachine3/machine_charger')

    console.info('[IU] 电力时代魔改已应用：元件 水/流体/水箱/无线、轧辊与轧辊组、无线供能器改用 钢/银/铅/镍')
})
