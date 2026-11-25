// ============================================================
// 初期冶金链 L0/L1（A 档：纯数据配方，铜/铁/银/金/锡/铅同一套规则）
// ------------------------------------------------------------
// 输入一律用 c: tag（一条配方覆盖 embers/IU/roots/NC/mekmm 所有 raw 家族）
// 研钵 mortar：#c:raw_materials/<m> -> industrialupgrade:crushed/<m>（1:1 times=5，×5 批量 times=15）
// 柴堆 pyre：
//   锡/铅（L0 正常链）  crushed×2 + 煤×2 + 原木×1 -> nugget×6（同铜模板）
//   银/金：无柴堆配方（直接删，金银熔炼只在炭炉）
// 琥珀金（L1）已迁入炭炉（furnace_recipes.js），此处不再提供合成台过渡配方
// 移除 bypass：金银锡铅 raw 直接熔炉/高炉出锭（铜不动，沿用既有链）
// 注意：本文件用 var（Rhino redeclaration 先例），配方为 generateData，/reload 不生效需重启
// ============================================================

ServerEvents.generateData('after_mods', event => {
    // ---- 研钵：raw -> crushed（tag 输入，覆盖全部模组 raw 家族） ----
    // 注意：event.json 的 id 是文件路径，必须带 recipe/ 前缀（模板：kubejs:recipe/metallurgy/mortar/crushed/copper）
    var metals = ['silver', 'gold', 'tin', 'lead']
    for (var i = 0; i < metals.length; i++) {
        var metal = metals[i]
        // 1:1，交互 5 次（模板：kubejs:recipe/metallurgy/mortar/crushed/copper）
        event.json(
            'kubejs:recipe/metallurgy/mortar/crushed/' + metal,
            {
                'type': 'roots:mortar',
                'data': {
                    'ingredients': [{ 'tag': 'c:raw_materials/' + metal }],
                    'priority': 0,
                    'result': { 'count': 1, 'id': 'industrialupgrade:crushed/' + metal }
                },
                'times': 5
            }
        )
        // 5:5 批量，交互 15 次（模板：kubejs:recipe/metallurgy/mortar/crushed/copper_batch）
        var five = []
        for (var k = 0; k < 5; k++) five.push({ 'tag': 'c:raw_materials/' + metal })
        event.json(
            'kubejs:recipe/metallurgy/mortar/crushed/' + metal + '_batch',
            {
                'type': 'roots:mortar',
                'data': {
                    'ingredients': five,
                    'priority': 0,
                    'result': { 'count': 5, 'id': 'industrialupgrade:crushed/' + metal }
                },
                'times': 15
            }
        )
    }

    // ---- 柴堆：L0 熔炼 ----
    // 正常链（锡/铅，同铜模板：crushed×2 + 煤×2 + 原木×1 -> nugget×6）
    // 输出必须写统一后的 canonical 粒：roots:pyre 是自定义配方类型，
    // Almost Unified 只处理顶层 result，无法改写 data.result，写非 canonical id 会绕过统一。
    var normal = {
        tin: 'mekanism:nugget_tin',
        lead: 'mekanism:nugget_lead'
    }
    // 银/金：不注册任何柴堆配方（明火炼不了贵金属，直接删，不做负反馈）
    var pyreGroups = [
        { prefix: '', table: normal, count: 6 }
    ]
    for (var g = 0; g < pyreGroups.length; g++) {
        var group = pyreGroups[g]
        var keys = Object.keys(group.table)
        for (var m = 0; m < keys.length; m++) {
            var mm = keys[m]
            event.json(
                'kubejs:recipe/metallurgy/pyre/' + mm + group.prefix,
                {
                    'type': 'roots:pyre',
                    'data': {
                        'ingredients': [
                            { 'item': 'industrialupgrade:crushed/' + mm },
                            { 'item': 'industrialupgrade:crushed/' + mm },
                            { 'tag': 'minecraft:coals' },
                            { 'tag': 'minecraft:coals' },
                            { 'tag': 'minecraft:logs' }
                        ],
                        'result': { 'id': group.table[mm], 'count': group.count },
                        'priority': 0
                    }
                }
            )
        }
    }
})

ServerEvents.recipes(event => {
    // ---- 琥珀金已迁入炭炉（metallurgy/furnace_recipes.js），不再提供合成台过渡配方 ----

    // ---- 移除 raw 直烧 bypass（金银锡铅，tag 全覆盖；铜链不动） ----
    var rawBypass = [
        '#c:raw_materials/silver',
        '#c:raw_materials/gold',
        '#c:raw_materials/tin',
        '#c:raw_materials/lead'
    ]
    event.remove({ type: 'minecraft:smelting', input: rawBypass })
    event.remove({ type: 'minecraft:blasting', input: rawBypass })
})

// ============================================================
// 铜 / 铁：研钵与柴堆（原 kubejsstudio 模板转正）
// ============================================================
// 这两条本来只以 kubejsstudio 的样板形式存在（铜链），
// 上面那段按模板复制了银/金/锡/铅，却没有正式的铜/铁条目。
// 这里把它们并进同一套 id 规则，模板从此不再有第二个来源。
// 铁柴堆要配方解石（造渣），铜柴堆跟锡/铅一样只吃煤与原木。
// ============================================================
ServerEvents.generateData('after_mods', event => {
    var simple = ['copper', 'iron']
    for (var i = 0; i < simple.length; i++) {
        var m = simple[i]
        event.json('kubejs:recipe/metallurgy/mortar/crushed/' + m,
            {
                'type': 'roots:mortar',
                'data': {
                    'ingredients': [{ 'tag': 'c:raw_materials/' + m }],
                    'priority': 0,
                    'result': { 'count': 1, 'id': 'industrialupgrade:crushed/' + m }
                },
                'times': 5
            })
        var five = []
        for (var k = 0; k < 5; k++) five.push({ 'tag': 'c:raw_materials/' + m })
        event.json('kubejs:recipe/metallurgy/mortar/crushed/' + m + '_batch',
            {
                'type': 'roots:mortar',
                'data': {
                    'ingredients': five,
                    'priority': 0,
                    'result': { 'count': 5, 'id': 'industrialupgrade:crushed/' + m }
                },
                'times': 15
            })
    }

    // 铜：crushed×2 + 煤×2 + 原木 -> 铜粒×6
    event.json('kubejs:recipe/metallurgy/pyre/copper',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'industrialupgrade:crushed/copper' },
                    { 'item': 'industrialupgrade:crushed/copper' },
                    { 'tag': 'minecraft:coals' },
                    { 'tag': 'minecraft:coals' },
                    { 'tag': 'minecraft:logs' }
                ],
                'result': { 'id': 'create:copper_nugget', 'count': 6 },
                'priority': 0
            }
        })
    // 铁：crushed×2 + 方解石×2 + 煤 -> 铁粒×6
    event.json('kubejs:recipe/metallurgy/pyre/iron',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'industrialupgrade:crushed/iron' },
                    { 'item': 'minecraft:calcite' },
                    { 'tag': 'minecraft:coals' },
                    { 'item': 'industrialupgrade:crushed/iron' },
                    { 'item': 'minecraft:calcite' }
                ],
                'result': { 'id': 'minecraft:iron_nugget', 'count': 6 },
                'priority': 0
            }
        })
})
