// ============================================================
// Industrial Upgrade 蒸汽时代（steam）配方魔改
// ============================================================
//
// 时代约束：
//   蒸汽时代只允许 铜、锡、锌、铅、铁、金、银、琥珀金、青铜、黄铜；
//   钢只允许出现在蒸汽时代末期（见 iu_steam_steel 部分与土高炉渗碳）。
//   铝青铜（aluminumbronze）、铱、钛、锇、铋、镍铬、因瓦、镓砷等
//   一律不出现。
//
// 说明：IU 把蒸汽机器全都写成铝青铜板 / 钛板 / 锇板 / 钢板 / 因瓦齿轮，
//      这里统一换成青铜 / 黄铜 / 铁 / 铅 / 铜，并保持原配方的形状与数量。
//
// 不动的东西：
//   - kubejsstudio/recipes.js 里已有的改动（元件 32 / 123 / 76 / 41、
//     蒸汽齿轮、原型流体加热器、电镀外壳用到的 137 除外）一律保持；
//   - 元件 32（元件:蒸汽）、元件 123（元件:蒸发）、元件 69/63（粉碎/挤压）
//     已经是作者改好的青铜/黄铜配方，这里直接引用，不重写。
//
// 详细说明：kubejs/docs/IU_PRIMAL_STEAM.md
// ============================================================

ServerEvents.recipes(event => {
    var S_PLATE = {
        iron:   { tag: 'c:plates/iron' },
        copper: { tag: 'c:plates/copper' },
        tin:    { tag: 'c:plates/tin' },
        lead:   { tag: 'c:plates/lead' },
        bronze: { tag: 'c:plates/bronze' },
        brass:  { tag: 'c:plates/brass' },
        steel:  { tag: 'c:plates/steel' }
    }
    var S_CASING = {
        bronze: { tag: 'c:casings/bronze' },
        copper: { tag: 'c:casings/copper' },
        iron:   { tag: 'c:casings/iron' }
    }
    var S_BRONZE_GEAR = { item: 'kubejs:bronze_gear' }
    var COPPER_BOILER = 'kubejs:copper_boiler'
    var S_ELEM = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }
    var sItem = function (id) {
        return { item: id }
    }

    var sShaped = function (id, pattern, key, output, count) {
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

    // ---- 0. 元件:混合（267）----
    // 原来要 双层钇板 / 双层锶板 / 铌板，蒸汽泵与固液反应釜都要用
    sShaped('industrialupgrade:industrialupgrade_1288',
        ['ECE', 'ABA', 'ECE'],
        {
            A: S_PLATE.iron,
            B: sItem(S_ELEM(21)),
            C: S_PLATE.bronze,
            E: S_PLATE.copper
        },
        S_ELEM(267))

    // ---- 1. 元件:控制器（42）----
    sShaped('industrialupgrade:industrialupgrade_739',
        ['AAA', 'CBC', '   '],
        {
            A: { tag: 'c:ingots/bronze' },
            B: sItem('industrialupgrade:circuit/circuit_part3'),
            C: sItem('minecraft:redstone')
        },
        S_ELEM(42))

    // ---- 2. 镍铬灯（650）-> 青铜灯座 ----
    // 元件模板的原始配方要用到它
    sShaped('industrialupgrade:industrialupgrade_1007',
        [' A ', 'CBC', 'C C'],
        {
            A: sItem('industrialupgrade:blockresource/tempered_glass'),
            B: sItem('minecraft:redstone'),
            C: S_CASING.bronze
        },
        S_ELEM(650), 2)

    // ---- 3. 电镀外壳（137）----
    // 原来要精加工钛钢板（501）
    sShaped('industrialupgrade:industrialupgrade_757',
        ['BA ', 'AB ', '   '],
        {
            A: S_PLATE.bronze,
            B: S_PLATE.iron
        },
        S_ELEM(137), 2)

    // ---- 4. 蒸汽机机身：不改 ----
    // 原配方是 8 铝青铜板，但 create/casing_progression.js 已经把
    // industrialupgrade:blockresource/steam_machine 的产出整条接管成
    // 「8 蒸汽机壳 + 黄铜之心」，这里再补一条青铜板配方只会绕过作者的进度，
    // 所以留空。

    // ---- 5. 蒸汽管道 ----
    sShaped('industrialupgrade:industrialupgrade_1263',
        ['BBB', 'AAA', 'BBB'],
        {
            A: S_PLATE.copper,
            B: S_CASING.bronze
        },
        'industrialupgrade:wiring/steam', 6)

    // ---- 6. 蒸汽储存器 ----
    sShaped('industrialupgrade:industrialupgrade_1971',
        [' A ', 'ABA', ' A '],
        {
            A: S_CASING.bronze,
            B: sItem(COPPER_BOILER)
        },
        'industrialupgrade:basemachine3/steam_storage')

    // ---- 7. 蒸汽矿物分离器 ----
    sShaped('industrialupgrade:industrialupgrade_1294',
        ['DAE', 'FBF', 'HCH'],
        {
            A: sItem(S_ELEM(32)),
            B: sItem(S_ELEM(51)),
            C: sItem('industrialupgrade:blockresource/steam_machine'),
            D: sItem(S_ELEM(123)),
            E: sItem(S_ELEM(219)),
            F: S_PLATE.bronze,
            H: S_PLATE.lead
        },
        'industrialupgrade:basemachine3/steam_handler_ore')

    // ---- 8. 蒸汽电解器 ----
    sShaped('industrialupgrade:industrialupgrade_1286',
        ['DEA', 'BBB', 'FCF'],
        {
            A: sItem(S_ELEM(32)),
            B: sItem('industrialupgrade:basemachine3/oak_tank'),
            C: sItem('industrialupgrade:blockresource/steam_machine'),
            D: sItem(S_ELEM(123)),
            E: sItem('industrialupgrade:battery/advanced_re_battery'),
            F: S_PLATE.brass
        },
        'industrialupgrade:basemachine3/steam_electrolyzer')

    // ---- 9. 蒸汽储罐（原钢储罐）----
    sShaped('industrialupgrade:industrialupgrade_1916',
        ['CCC', 'ABA', 'CCC'],
        {
            A: S_PLATE.bronze,
            B: sItem('industrialupgrade:basemachine3/oak_tank'),
            C: S_PLATE.iron
        },
        'industrialupgrade:basemachine3/steel_tank')

    // ---- 10. 高压蒸汽锅炉 ----
    sShaped('industrialupgrade:industrialupgrade_1292',
        ['AAA', 'ABA', ' C '],
        {
            A: S_PLATE.bronze,
            B: sItem('industrialupgrade:basemachine3/steamboiler'),
            C: sItem('industrialupgrade:basemachine3/steel_tank')
        },
        'industrialupgrade:basemachine3/steam_converter')

    // ---- 11. 蒸汽锅炉多方块 ----
    sShaped('industrialupgrade:industrialupgrade_1980',
        ['CAC', 'ABA', 'CAC'],
        {
            A: S_CASING.bronze,
            B: sItem('minecraft:copper_block'),
            C: S_CASING.iron
        },
        'industrialupgrade:steam_boiler/steam_boiler_casing')

    sShaped('industrialupgrade:industrialupgrade_1982',
        [' B ', ' A ', ' C '],
        {
            A: sItem('industrialupgrade:steam_boiler/steam_boiler_casing'),
            B: sItem('industrialupgrade:primal_fluid_heater/primal_fluid_heater'),
            C: S_BRONZE_GEAR
        },
        'industrialupgrade:steam_boiler/steam_boiler_heater')

    sShaped('industrialupgrade:industrialupgrade_1983',
        [' B ', 'CAC', ' B '],
        {
            A: sItem('industrialupgrade:steam_boiler/steam_boiler_casing'),
            B: sItem(S_ELEM(356)),
            C: S_BRONZE_GEAR
        },
        'industrialupgrade:steam_boiler/steam_boiler_heat_exchanger')

    sShaped('industrialupgrade:industrialupgrade_1984',
        ['CBC', 'DAD', '   '],
        {
            A: sItem('industrialupgrade:steam_boiler/steam_boiler_casing'),
            B: {
                type: 'neoforge:components',
                items: S_ELEM(272),
                components: {
                    'industrialupgrade:level_microchip': 2,
                    'minecraft:attribute_modifiers': { modifiers: [] },
                    'minecraft:enchantments': { levels: {} },
                    'minecraft:lore': [],
                    'minecraft:max_stack_size': 64,
                    'minecraft:rarity': 'common',
                    'minecraft:repair_cost': 0
                }
            },
            C: S_PLATE.bronze,
            D: S_CASING.copper
        },
        'industrialupgrade:steam_boiler/steam_boiler_controller')

    // ---- 12. 气体混合室 ----
    sShaped('industrialupgrade:industrialupgrade_1676',
        ['ABA', 'BBB', 'CAC'],
        {
            A: sItem(COPPER_BOILER),
            B: S_PLATE.iron,
            C: S_BRONZE_GEAR
        },
        'industrialupgrade:gas_chamber/primal_gas_chamber')

    // ---- 13. 微型熔炉 ----
    sShaped('industrialupgrade:industrialupgrade_1969',
        ['ACA', 'EDE', 'BBB'],
        {
            A: S_BRONZE_GEAR,
            B: sItem('industrialupgrade:smeltery/smeltery_casing'),
            C: sItem(S_ELEM(496)),
            D: sItem('industrialupgrade:basemachine3/oak_tank'),
            E: S_PLATE.bronze
        },
        'industrialupgrade:mini_smeltery/mini_smeltery')

    // ---- 14. 强化铁砧（蒸汽时代末期：钢板）----
    // 原配方 industrialupgrade_1968 被 kubejsstudio/recipes.js 删掉后没有补回，
    // 导致蒸汽轧机无法制造。kubejsstudio 在 industrial/ 之后加载，会再删一次
    // 同 id 的配方，所以这里用独立 id 注册。
    sShaped('kubejs:iu_steam/strong_anvil',
        ['CCC', 'ADA', '   '],
        {
            A: S_PLATE.bronze,
            C: S_PLATE.steel,
            D: sItem('industrialupgrade:block_anvil/block_anvil')
        },
        'industrialupgrade:block_strong_anvil/block_strong_anvil')

    // ---- 15. 琥珀金锅炉（601）全面换成 kubejs 铜锅炉 ----
    // 601 原本要 8 块琥珀金板，把蒸汽整条线锁在轧机后面；
    // 现在统一用作者注册的铜锅炉，下面这些机器一并改掉。
    sShaped('industrialupgrade:industrialupgrade_1972',
        ['AED', ' B ', ' C '],
        {
            A: sItem(S_ELEM(123)),
            B: sItem(COPPER_BOILER),
            C: sItem('industrialupgrade:blockresource/steam_machine'),
            D: sItem(S_ELEM(32)),
            E: sItem('industrialupgrade:charged_redstone')
        },
        'industrialupgrade:basemachine3/steam_crystal_charge')

    sShaped('industrialupgrade:industrialupgrade_1973',
        ['AED', ' B ', ' C '],
        {
            A: sItem(S_ELEM(123)),
            B: sItem(COPPER_BOILER),
            C: sItem('industrialupgrade:blockresource/steam_machine'),
            D: sItem(S_ELEM(32)),
            E: sItem('industrialupgrade:primal_fluid_heater/primal_fluid_heater')
        },
        'industrialupgrade:basemachine3/steam_fluid_heater')

    sShaped('industrialupgrade:industrialupgrade_1289',
        ['DAE', 'BBB', ' C '],
        {
            A: sItem(S_ELEM(32)),
            B: sItem(COPPER_BOILER),
            C: sItem('industrialupgrade:blockresource/steam_machine'),
            D: sItem(S_ELEM(123)),
            E: sItem(S_ELEM(267))
        },
        'industrialupgrade:basemachine3/steam_solid_fluid_mixer')

    sShaped('industrialupgrade:industrialupgrade_1981',
        [' B ', ' A ', ' C '],
        {
            A: sItem('industrialupgrade:steam_boiler/steam_boiler_casing'),
            B: sItem(COPPER_BOILER),
            C: sItem(S_ELEM(154))
        },
        'industrialupgrade:steam_boiler/steam_boiler_tank')

    // 电力时代的两个液体机器也用 601，一并统一
    sShaped('industrialupgrade:industrialupgrade_1048',
        ['AAA', 'CBE', ' D '],
        {
            A: sItem(COPPER_BOILER),
            B: sItem('industrialupgrade:blockresource/machine'),
            C: sItem(S_ELEM(154)),
            D: sItem(S_ELEM(276)),
            E: sItem(S_ELEM(27))
        },
        'industrialupgrade:basemachine3/fluid_separator')

    sShaped('industrialupgrade:industrialupgrade_1049',
        ['AFA', 'CBE', ' D '],
        {
            A: sItem(COPPER_BOILER),
            B: sItem('industrialupgrade:blockresource/machine'),
            C: sItem(S_ELEM(98)),
            D: sItem(S_ELEM(276)),
            E: sItem(S_ELEM(79)),
            F: sItem(S_ELEM(154))
        },
        'industrialupgrade:basemachine3/polymerizer')

    console.info('[IU] 蒸汽时代魔改已应用：机身 / 管道 / 锅炉多方块 / 储罐 / 矿分 / 电解 / 微型熔炉 / 强化铁砧 / 铜锅炉统一')
})
