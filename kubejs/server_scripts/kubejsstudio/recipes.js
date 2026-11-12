// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('notreepunchingremastered:recipe/tool/flint_axe', {"type":"minecraft:crafting_shaped","category":"equipment","pattern":["#A","B "],"key":{"#":{"item":"notreepunchingremastered:plant_string"},"A":{"item":"notreepunchingremastered:flint_shard"},"B":{"item":"minecraft:stick"}},"result":{"id":"notreepunchingremastered:flint_axe","count":1}})
})
ServerEvents.recipes(event => {
    event.shapeless('notreepunchingremastered:plant_string', ['notreepunchingremastered:grass_fiber', 'notreepunchingremastered:grass_fiber', 'notreepunchingremastered:grass_fiber', 'notreepunchingremastered:grass_fiber']).id('notreepunchingremastered:plant_string')
    event.shaped('kubejs:gunmu', ['##', '# '], { '#': 'notreepunchingremastered:flint_shard' }).id('kubejsstudio:gunmu')
})
