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
