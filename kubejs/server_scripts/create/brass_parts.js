// ============================================================
// 黄铜期的两个 Create 序列装配（原 kubejsstudio/recipes.js 迁入）
// ============================================================
//
// 1. 精密构件：把 Create 原本的「金板 → 精密构件」改成三环序列装配，
//    每环都要部署一次齿轮 / 大齿轮 / 铁粒，产出概率 120%（即 1 个 + 20% 第二个）。
//    id 是 Create 自己的，必须原样覆盖。
// 2. 空白模板（IU 元件 21）：黄铜板起手，三环部署精密构件 / 挤压 / 齿轮 / 铁板。
//    这是 IU 元件模板的唯一来源，IU 原来的工作台配方已在
//    iu_primal_recipes.js 里删掉。
//
// 这两个配方是 generateData（虚拟数据包），/reload 不生效，改完重启游戏。
// ============================================================

ServerEvents.recipes(event => {
    // IU 原来的工作台配方（元件模板 21）删掉：精密构件 + 四角齿轮那套，
    // 会绕过黄铜序列装配。id 来自 IU jar：industrialupgrade_726。
    event.remove({ id: 'industrialupgrade:industrialupgrade_726' })
})

ServerEvents.generateData('after_mods', event => {
    // ---- 1. 精密构件 ----
    event.json('create:recipe/sequenced_assembly/precision_mechanism',
        {
            'type': 'create:sequenced_assembly',
            'ingredient': { 'tag': 'c:plates/gold' },
            'loops': 3,
            'results': [{ 'chance': 120.0, 'id': 'create:precision_mechanism' }],
            'sequence': [
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        { 'item': 'create:incomplete_precision_mechanism' },
                        { 'item': 'create:cogwheel' }
                    ],
                    'results': [{ 'id': 'create:incomplete_precision_mechanism' }]
                },
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        { 'item': 'create:incomplete_precision_mechanism' },
                        { 'item': 'create:large_cogwheel' }
                    ],
                    'results': [{ 'id': 'create:incomplete_precision_mechanism' }]
                },
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        { 'item': 'create:incomplete_precision_mechanism' },
                        { 'tag': 'c:nuggets/iron' }
                    ],
                    'results': [{ 'id': 'create:incomplete_precision_mechanism' }]
                }
            ],
            'transitional_item': { 'id': 'create:incomplete_precision_mechanism' }
        })

    // ---- 2. 空白模板（IU 元件 21）----
    event.json('kubejs:recipe/brass/blank_template',
        {
            'type': 'create:sequenced_assembly',
            'ingredient': { 'item': 'create:brass_sheet' },
            'loops': 3,
            'results': [{ 'id': 'industrialupgrade:crafting_elements/crafting_21_element' }],
            'sequence': [
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        { 'item': 'industrialupgrade:crafting_elements/crafting_21_element' },
                        { 'item': 'create:precision_mechanism' }
                    ],
                    'results': [{ 'id': 'industrialupgrade:crafting_elements/crafting_21_element' }]
                },
                {
                    'type': 'create:pressing',
                    'ingredients': [{ 'item': 'industrialupgrade:crafting_elements/crafting_21_element' }],
                    'results': [{ 'id': 'industrialupgrade:crafting_elements/crafting_21_element' }]
                },
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        { 'item': 'industrialupgrade:crafting_elements/crafting_21_element' },
                        { 'item': 'kubejs:brass_gear' }
                    ],
                    'results': [{ 'id': 'industrialupgrade:crafting_elements/crafting_21_element' }]
                },
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        { 'item': 'industrialupgrade:crafting_elements/crafting_21_element' },
                        { 'item': 'create:iron_sheet' }
                    ],
                    'results': [{ 'id': 'industrialupgrade:crafting_elements/crafting_21_element' }]
                }
            ],
            'transitional_item': { 'id': 'industrialupgrade:crafting_elements/crafting_21_element' }
        })
})
