// ============================================================
// 机械动力（Create）机壳 / 机械手套娃魔改
//
// 机械手（Deployer）：
//   电子管 + 黄铜机壳 + 黄铜手
//   （原来是 电子管 + 安山机壳 + 黄铜手）
//
// 机壳链（全部只能由机械手完成，玩家无法右键手搓）：
//   余烬机械核心 + 安山合金   -> 安山机壳
//   安山机壳     + 铜锭       -> 铜机壳
//   铜机壳       + 黄铜锭     -> 黄铜机壳
//   黄铜机壳     + 黑曜石板   -> 列车机壳（保持原配方，随黄铜机壳一起被抬高门槛）
//
// 实现方式说明：
//   这里用的是 create:deploying（DeployerApplicationRecipe），
//   而不是 create:item_application（ManualApplicationRecipe）。
//   item_application 本身就会注册“玩家右键方块施加物品”的行为，
//   所以只要用 item_application，玩家就能手动做出机壳。
//   deploying 只会在机械手处理置物台/传送带上的物品时被检索，
//   玩家右键不会触发，因此能真正做到“只能用机械手”。
//
//   实际操作方法：把底料（如铜机壳）放在置物台或传送带上，
//   机械手手持黄铜锭，即可加工成下一级机壳。
//
// 注意：机械手需要黄铜机壳，而黄铜机壳又需要机械手，
//       这是故意保留的套娃死锁，由整合包作者自行解决。
// ============================================================



ServerEvents.recipes(event => {
    // ---- 1. 删掉原版“去皮原木 / 去皮木”机壳配方 ----
    event.remove({ id: 'create:item_application/andesite_casing_from_log' })
    event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
    event.remove({ id: 'create:item_application/copper_casing_from_log' })
    event.remove({ id: 'create:item_application/copper_casing_from_wood' })
    event.remove({ id: 'create:item_application/brass_casing_from_log' })
    event.remove({ id: 'create:item_application/brass_casing_from_wood' })

    // 删掉原版列车机壳的物品施加配方（否则玩家仍能右键手搓）
    event.remove({ id: 'create:item_application/railway_casing' })

    // 兜底：清掉其它模组可能添加的同产物配方
    event.remove({ output: 'create:andesite_casing' })
    event.remove({ output: 'create:copper_casing' })
    event.remove({ output: 'create:brass_casing' })
    event.remove({ output: 'create:railway_casing' })

    // ---- 2. 机械手改用黄铜机壳 ----
    event.remove({ output: 'create:deployer' })
    event.shaped('create:deployer', [
        'B',
        'C',
        'I'
    ], {
        B: 'create:electron_tube',
        C: 'create:brass_casing',
        I: 'create:brass_hand'
    }).id('create:crafting/kinetics/deployer')

    // ---- 3. 机壳套娃：机械手施加（create:deploying 仅机械手可用） ----
    // 安山机壳：余烬机械核心 + 安山合金
    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'embers:mechanical_core' },
            { item: 'create:andesite_alloy' }
        ],
        results: [
            { id: 'create:andesite_casing' }
        ]
    }).id('kubejs:andesite_casing_from_mechanical_core')

    // 铜机壳：安山机壳 + 铜锭
    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'create:andesite_casing' },
            { tag: 'c:ingots/copper' }
        ],
        results: [
            { id: 'create:copper_casing' }
        ]
    }).id('kubejs:copper_casing_from_andesite_casing')

    // 黄铜机壳：铜机壳 + 黄铜锭
    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'create:copper_casing' },
            { tag: 'c:ingots/brass' }
        ],
        results: [
            { id: 'create:brass_casing' }
        ]
    }).id('kubejs:brass_casing_from_copper_casing')

    // 列车机壳：黄铜机壳 + 黑曜石板
    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'create:brass_casing' },
            { tag: 'c:plates/obsidian' }
        ],
        results: [
            { id: 'create:railway_casing' }
        ]
    }).id('kubejs:railway_casing_from_brass_casing')

    //蒸汽机壳：列车机壳+铝青铜板
    event.shaped('kubejs:steam_casing',[
        'PPP',
        'PNP',
        'PPP'
    ],
    {
        P:'industrialupgrade:alloyplate/aluminum_bronze',
        N:'create:railway_casing'
    }).id('kubejs:steam_casing_from_railway_casing')

    //蒸汽机机身：蒸汽机壳+黄铜之心
    event.remove({ output: 'industrialupgrade:blockresource/steam_machine' })
    event.shaped('industrialupgrade:blockresource/steam_machine',[
        'PPP',
        'PNP',
        'PPP'
    ],
    {
        P:'kubejs:steam_casing',
        N:'kubejs:brass_heart'
    }).keepIngredient('kubejs:brass_heart').id('kubejs:steam_machine_from_steam_casing')

})
