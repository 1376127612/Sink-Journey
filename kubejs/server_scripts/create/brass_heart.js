// ============================================================
// 自定义物品配方
//
// 精密构件组：8 个精密构件 + 中间 1 个粘液球
//   P P P
//   P S P
//   P P P
//
// 黄铜之心：序列装配，以精密构件组为底料，
//   每轮循环依次：
//     1. 机械手施加 1 个扩展构件
//     2. 机械手施加 1 个精密构件组
//     3. 压床压制
//   共循环 8 次
//
// 嵌套工厂：原配方中的精密构件替换为黄铜之心
// ============================================================

ServerEvents.recipes(event => {
    // ---- 精密构件组 ----
    event.shaped('kubejs:precision_component_group', [
        'PPP',
        'PSP',
        'PPP'
    ], {
        P: 'create:precision_mechanism',
        S: 'minecraft:slime_ball'
    }).id('kubejs:crafting/precision_component_group')

    // ---- 黄铜之心：序列装配，8 次循环 ----
    event.remove({ id: 'kubejs:crafting/brass_heart' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'kubejs:precision_component_group'
        },
        results: [
            { id: 'kubejs:brass_heart' }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'kubejs:incomplete_brass_heart' },
                    { item: 'create_nested_factory:space_expand_mechanism' }
                ],
                results: [
                    { id: 'kubejs:incomplete_brass_heart' }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'kubejs:incomplete_brass_heart' },
                    { item: 'kubejs:precision_component_group' }
                ],
                results: [
                    { id: 'kubejs:incomplete_brass_heart' }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    { item: 'kubejs:incomplete_brass_heart' }
                ],
                results: [
                    { id: 'kubejs:incomplete_brass_heart' }
                ]
            }
        ],
        transitional_item: {
            id: 'kubejs:incomplete_brass_heart'
        },
        loops: 8
    }).id('kubejs:sequenced_assembly/brass_heart')

    // ---- 嵌套工厂：精密构件 -> 黄铜之心 ----
    event.remove({ id: 'create_nested_factory:nested_factory' })
    event.shaped('create_nested_factory:nested_factory', [
        'BEB',
        'SCS',
        'BHB'
    ], {
        B: 'create:brass_sheet',
        E: 'create:electron_tube',
        S: 'create:sturdy_sheet',
        C: 'create:bound_cardboard_block',
        H: 'kubejs:brass_heart'
    }).id('create_nested_factory:nested_factory')
})
