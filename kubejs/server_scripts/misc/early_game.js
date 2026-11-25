// ============================================================
// 前期手工链（原 kubejsstudio/recipes.js 迁入）
// ============================================================
//
// 这一段是「进 IU 之前」的东西：无树打制（NTP）的燧石工具、
// Roots 的柴堆与符文石、原版箱子/桶/工作台/熔炉的门槛。
// 它们原来由 KubeJS Studio 的虚拟数据包写入，id 带 kubejsstudio 前缀；
// 现在按主题归到这里，id 保持不变（存档里的配方引用不受影响）。
//
// 分两类：
//   1. generateData：覆盖别的模组已有的配方文件（NTP 工具、Roots 仪式、箱子/桶）
//      —— 注意 /reload 不生效，改完要重启；
//   2. ServerEvents.recipes：删原配方 + 用同一 id 写回。
// ============================================================

ServerEvents.generateData('after_mods', event => {
    // ---- NTP 燧石工具：把木棍换成草纤维 + 燧石 ----
    event.json('notreepunchingremastered:recipe/tool/flint_axe',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'equipment',
            'pattern': ['#A', 'B#'],
            'key': {
                '#': { 'item': 'notreepunchingremastered:grass_fiber' },
                'A': { 'item': 'kubejs:flint_axe_head_top' },
                'B': { 'item': 'kubejs:handle' }
            },
            'result': { 'id': 'notreepunchingremastered:flint_axe', 'count': 1 }
        })
    event.json('notreepunchingremastered:recipe/tool/flint_pickaxe',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'equipment',
            'pattern': ['#A', 'B#'],
            'key': {
                '#': { 'item': 'notreepunchingremastered:grass_fiber' },
                'A': { 'item': 'kubejs:flint_pickaxe_head_top' },
                'B': { 'item': 'kubejs:handle' }
            },
            'result': { 'id': 'notreepunchingremastered:flint_pickaxe', 'count': 1 }
        })

    // ---- Roots：铜镐、柴堆、符文石、林地合成器 ----
    event.json('roots:recipe/copper_pickaxe',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'equipment',
            'pattern': ['###', ' A ', ' A '],
            'key': {
                '#': { 'item': 'minecraft:copper_ingot' },
                'A': { 'tag': 'c:rods/wooden' }
            },
            'result': { 'id': 'roots:copper_pickaxe', 'count': 1 }
        })
    event.json('roots:recipe/pyre',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'misc',
            'pattern': ['#A#', 'BBB'],
            'key': {
                '#': { 'tag': 'c:stripped_woods' },
                'A': { 'tag': 'minecraft:coals' },
                'B': { 'tag': 'roots:runestone' }
            },
            'result': { 'id': 'roots:pyre', 'count': 1 }
        })
    event.json('roots:recipe/runestone_simple_crafting',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'building',
            'pattern': ['###', '#A#', '###'],
            'key': {
                '#': { 'tag': 'roots:stonelike' },
                'A': { 'tag': 'roots:runestone_herbs' }
            },
            'result': { 'id': 'roots:runestone', 'count': 1 }
        })
    event.json('roots:recipe/grove_crafter',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'misc',
            'pattern': ['#A#', 'BCB', 'BDB'],
            'key': {
                '#': { 'item': 'roots:cloud_berry' },
                'A': { 'item': 'roots:wildroot' },
                'B': { 'item': 'roots:runestone' },
                'C': { 'item': 'roots:grove_moss' },
                'D': { 'item': 'roots:chiseled_runestone' }
            },
            'result': { 'id': 'roots:grove_crafter', 'count': 1 }
        })

    // ---- 打火器 ----
    event.json('firestarters:recipe/fire_starter',
        {
            'type': 'minecraft:crafting_shaped',
            'pattern': ['#  ', ' #A', ' AB'],
            'key': {
                '#': { 'tag': 'c:stripped_woods' },
                'A': { 'item': 'notreepunchingremastered:flint_shard' },
                'B': { 'item': 'notreepunchingremastered:stone_rock' }
            },
            'result': { 'id': 'firestarters:fire_starter', 'count': 1 }
        })

    // ---- 原版容器：箱子与桶都要铁粒 / 铁板 ----
    event.json('minecraft:recipe/chest',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'misc',
            'pattern': ['#A#', 'ABA', '#A#'],
            'key': {
                '#': { 'tag': 'minecraft:oak_logs' },
                'A': { 'tag': 'minecraft:planks' },
                'B': { 'item': 'minecraft:iron_nugget' }
            },
            'result': { 'id': 'minecraft:chest', 'count': 1 }
        })
    event.json('roots:recipe/wildwood_chest_from_logs_planks',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'misc',
            'pattern': ['#A#', 'ABA', '#A#'],
            'key': {
                '#': { 'tag': 'roots:logs/wildwood' },
                'A': { 'tag': 'roots:planks/wildwood' },
                'B': { 'item': 'minecraft:iron_nugget' }
            },
            'result': { 'id': 'roots:wildwood_chest', 'count': 1 }
        })
    event.json('minecraft:recipe/bucket',
        {
            'type': 'minecraft:crafting_shaped',
            'category': 'misc',
            'pattern': ['# #', ' # '],
            'key': { '#': { 'item': 'create:iron_sheet' } },
            'result': { 'id': 'minecraft:bucket', 'count': 1 }
        })
})

ServerEvents.recipes(event => {
    // ---- 草纤维 -> 植物纤维 ----
    event.shapeless('notreepunchingremastered:plant_string',
        [
            'notreepunchingremastered:grass_fiber',
            'notreepunchingremastered:grass_fiber',
            'notreepunchingremastered:grass_fiber',
            'notreepunchingremastered:grass_fiber'
        ]).id('notreepunchingremastered:plant_string')

    // ---- 燧石工具头与手柄 ----
    event.shaped('kubejs:flint_axe_head_top', ['#A', 'AB'], {
        '#': 'minecraft:flint',
        'A': 'notreepunchingremastered:flint_shard',
        'B': 'notreepunchingremastered:plant_string'
    }).id('kubejs:flint_axe_head_top')
    event.shaped('kubejs:flint_pickaxe_head_top', ['#A', 'B#'], {
        '#': 'notreepunchingremastered:flint_shard',
        'A': 'minecraft:flint',
        'B': 'notreepunchingremastered:plant_string'
    }).id('kubejs:flint_pickaxe_head_top')
    event.shaped('kubejs:handle', [' #', '#A'], {
        '#': 'minecraft:stick',
        'A': 'notreepunchingremastered:plant_string'
    }).id('kubejs:handle')

    // ---- 工作台与熔炉：都要先有皮革 / 符文黑曜石 ----
    event.remove({ id: 'minecraft:crafting_table' })
    event.shaped('minecraft:crafting_table', ['##', 'AA'], {
        '#': 'minecraft:leather',
        'A': '#minecraft:logs'
    }).id('kubejs:misc/crafting_table')

    event.remove({ id: 'minecraft:furnace' })
    event.shaped('minecraft:furnace', ['#A#', 'ABA', '#A#'], {
        '#': '#c:cobblestones',
        'A': '#minecraft:coals',
        'B': 'roots:runed_obsidian'
    }).id('kubejs:misc/furnace_stone')

    event.remove({ id: 'roots:grove_pedestal' })
})
