ServerEvents.recipes(event => {
    const toModify = []

    // 先遍历收集，避免边遍历边移除
    event.forEachRecipe({ type: 'embers:stamping' }, recipe => {
        const json = recipe.json
        const fluid = json.get('fluid')
        if (fluid && fluid.has('amount') && fluid.get('amount').getAsInt() === 180) {
            toModify.push({
                id: recipe.getId().toString(),
                json: json.deepCopy()
            })
        }
    })

    // 再统一处理：移除原配方 + 注册修改后的配方
    toModify.forEach(({ id, json }) => {
        json.get('fluid').addProperty('amount', 360)
        event.remove({ id: id })
        event.custom(json)
    })

    console.info(`[embers] 已修改 ${toModify.length} 个压印配方的流体消耗 180 -> 360`)

    event.custom({
        type: 'embers:stamping',
        fluid: {
            amount: 360,
            tag: 'c:molten_brass'
        },
        output: {item:'kubejs:brass_gear'},
        stamp: {
            item: 'embers:gear_stamp'
        }
    })

    event.custom({
        type: 'embers:stamping',
        fluid: {
            amount: 360,
            tag: 'c:molten_bronze'
        },
        output: {item:'kubejs:bronze_gear'},
        stamp: {
            item: 'embers:gear_stamp'
        }
    })
})