ServerEvents.recipes(event => {
    event.recipes.oraculumworktables.mason_shaped(
        'notreepunchingremastered:flint_hoe',
        ['#AA', 'B  ', 'B  '],
        {
            '#': 'notreepunchingremastered:plant_string',
            'A': 'notreepunchingremastered:flint_shard',
            'B': 'minecraft:stick'
        }
    )
    .tools([{ tag: 'minecraft:pickaxes', damage: 20 }]) // 工具标签：tag 字段，不带 #
    .secondaryIngredients(['#minecraft:oak_log'])      // 副材料标签：字符串带 # 
})