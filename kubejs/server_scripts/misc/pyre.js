// 柴堆烧玻璃：generateData 配方，/reload 不生效，需重启游戏
ServerEvents.generateData('after_mods', event => {
    event.json(
        'kubejs:recipe/misc/pyre/glass',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'tag': 'minecraft:smelts_to_glass' },
                    { 'tag': 'minecraft:smelts_to_glass' },
                    { 'tag': 'minecraft:coals' },
                    { 'tag': 'minecraft:coals' },
                    { 'tag': 'minecraft:logs' }
                ],
                'result': { 'id': 'minecraft:glass', 'count': 2 },
                'priority': 0
            }
        }
    )
})

// ============================================================
// Roots 柴堆：草药与仪式（原 kubejsstudio 迁入）
// ============================================================
// 这几条覆盖 Roots 自带的柴堆配方（下界扩展的菌菇 / 草药 / 野根生长仪式），
// id 沿用 Roots 自己的 recipe/pyre/<name>，覆盖关系不变。
// generateData，/reload 不生效，改完重启。
// ============================================================
ServerEvents.generateData('after_mods', event => {
    event.json('roots:recipe/pyre/bafflecap',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'netherexp:warped_sporeshroom' },
                    { 'item': 'netherexp:crimson_sporeshroom' },
                    { 'item': 'netherexp:shroomnight' },
                    { 'tag': 'c:fertilizers' },
                    { 'tag': 'roots:herbs/wildroot' }
                ],
                'priority': 0,
                'result': { 'count': 2, 'id': 'roots:bafflecap' }
            }
        })
    event.json('roots:recipe/pyre/pereskia',
        {
            'type': 'roots:pyre',
            'data': {
                'chance_outputs': [
                    { 'chance': 0.6, 'output': { 'count': 2, 'id': 'roots:pereskia_bulb' } }
                ],
                'ingredients': [
                    { 'item': 'netherexp:weeping_ivy' },
                    { 'item': 'minecraft:sugar' },
                    { 'item': 'netherexp:phasmo_shard' },
                    { 'tag': 'netherexp:shroomlights' },
                    { 'tag': 'roots:crops/aubergine' }
                ],
                'priority': 0,
                'result': { 'count': 1, 'id': 'roots:pereskia' }
            }
        })
    event.json('roots:recipe/pyre/moonglow',
        {
            'type': 'roots:pyre',
            'data': {
                'chance_outputs': [
                    { 'chance': 0.6, 'output': { 'count': 2, 'id': 'roots:moonglow_seeds' } }
                ],
                'ingredients': [
                    { 'item': 'netherexp:bone_pike' },
                    { 'item': 'netherexp:phasmo_shard' },
                    { 'item': 'netherexp:blotted_netherrack' },
                    { 'tag': 'c:nuggets/iron' },
                    { 'item': 'minecraft:warped_wart_block' }
                ],
                'priority': 0,
                'result': { 'count': 1, 'id': 'roots:moonglow' }
            }
        })
    event.json('roots:recipe/pyre/stalicripe',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'minecraft:glow_lichen' },
                    { 'item': 'netherexp:pale_soul_slate' },
                    { 'item': 'minecraft:bone_block' },
                    { 'item': 'minecraft:obsidian' },
                    { 'tag': 'c:raw_materials/iron' }
                ],
                'priority': 0,
                'result': { 'count': 2, 'id': 'roots:stalicripe' }
            }
        })
    event.json('roots:recipe/pyre/inferno_bulb',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'netherexp:fossil_fuel' },
                    { 'item': 'netherexp:wraithing_flesh' },
                    { 'item': 'netherexp:soul_magma_block' },
                    { 'item': 'minecraft:chain' },
                    { 'item': 'netherexp:quartz_crystal' }
                ],
                'priority': 0,
                'result': { 'count': 2, 'id': 'roots:inferno_bulb' }
            }
        })
    event.json('roots:recipe/pyre/cloud_berry',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'item': 'minecraft:dandelion' },
                    { 'item': 'netherexp:ochre_frogmist' },
                    { 'tag': 'minecraft:leaves' },
                    { 'item': 'netherexp:pearlescent_frogmist' },
                    { 'item': 'netherexp:verdant_frogmist' }
                ],
                'priority': 0,
                'result': { 'count': 2, 'id': 'roots:cloud_berry' }
            }
        })
    event.json('roots:recipe/pyre/wildroot_growth',
        {
            'type': 'roots:pyre',
            'data': {
                'ingredients': [
                    { 'tag': 'roots:herbs/wildroot' },
                    { 'tag': 'minecraft:logs' },
                    { 'tag': 'minecraft:logs' },
                    { 'item': 'roots:pereskia_bulb' },
                    { 'tag': 'minecraft:saplings' }
                ],
                'level_conditions': [
                    {
                        'type': 'roots:block_state_property_condition',
                        'name': 'mature_wildroot_crop',
                        'test': {
                            'partial_block_state': {
                                'block': 'roots:wildroot_crop',
                                'properties': { 'age': '3' }
                            }
                        }
                    }
                ],
                'priority': 0
            },
            'ritual': 'roots:wildroot_growth'
        })
})
