// ============================================================
// 机械动力（Create）机壳套娃链
// ============================================================
//
// 一条链：五级机壳 + 一级机身，每级都在上一级的基础上加一样东西：
//
//   余烬机械核心 + 安山合金    --机械手-->  安山机壳
//   安山机壳     + 铜锭        --机械手-->  铜机壳
//   铜机壳       + 黄铜锭      --机械手-->  黄铜机壳
//   黄铜机壳     + 黑曜石板    --机械手-->  列车机壳
//   列车机壳 + 铁板 ×8 + 青铜板 ×2   --工作台-->  蒸汽机壳
//   蒸汽机壳 ×8 + 黄铜之心     --工作台-->  蒸汽机机身
//
// 前四级只能用机械手（Deployer）完成，玩家无法右键手搓：
//   这里用的是 create:deploying（DeployerApplicationRecipe），
//   而不是 create:item_application（ManualApplicationRecipe）。
//   item_application 本身就会注册“玩家右键方块施加物品”的行为，
//   只要用 item_application，玩家就能手动做出机壳。
//   deploying 只会在机械手处理置物台 / 传送带上的物品时被检索，
//   右键不触发，因此能真正做到“只能用机械手”。
//
//   实际操作：把底料（如铜机壳）放在置物台或传送带上，
//   机械手手持下一级材料（如黄铜锭），加工出下一级机壳。
//
// 机械手自己也要黄铜机壳（黄铜机壳 ← 机械手 ← 黄铜机壳），
//   这个死锁由 create_hand_made:pointer 解开：
//   第一个黄铜机壳用指杆手搓，见任务「手搓仙人」（4717D5F0DFBD7A6C）。
//
// 修改须知：
//   本文件里出现的这些 id 都由脚本管理，Studio 再写同一个 id 会被覆盖：
//     create:crafting/kinetics/deployer
//     kubejs:andesite_casing_from_mechanical_core
//     kubejs:copper_casing_from_andesite_casing
//     kubejs:brass_casing_from_copper_casing
//     kubejs:railway_casing_from_brass_casing
//     kubejs:crafting/steam_casing
//     kubejs:steam_machine_from_steam_casing
//   链条说明：kubejs/docs/CASING_PROGRESSION.md
// ============================================================

ServerEvents.recipes(event => {
    // ---- 1. 清掉原版所有「右键施加」机壳配方 ----
    // 去皮原木 / 去皮木两种变体，安山 / 铜 / 黄铜各一对
    event.remove({ id: 'create:item_application/andesite_casing_from_log' })
    event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
    event.remove({ id: 'create:item_application/copper_casing_from_log' })
    event.remove({ id: 'create:item_application/copper_casing_from_wood' })
    event.remove({ id: 'create:item_application/brass_casing_from_log' })
    event.remove({ id: 'create:item_application/brass_casing_from_wood' })

    // 列车机壳的物品施加配方（否则玩家仍能右键手搓）
    event.remove({ id: 'create:item_application/railway_casing' })

    // 兜底：清掉其它模组可能添加的同产物配方
    event.remove({ output: 'create:andesite_casing' })
    event.remove({ output: 'create:copper_casing' })
    event.remove({ output: 'create:brass_casing' })
    event.remove({ output: 'create:railway_casing' })

    // ---- 2. 机械手改用黄铜机壳 ----
    // 原：电子管 + 安山机壳 + 黄铜手。抬到黄铜机壳，机械手才属于黄铜时代。
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

    // 3.1 安山机壳：余烬机械核心 + 安山合金
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

    // 3.2 铜机壳：安山机壳 + 铜锭
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

    // 3.3 黄铜机壳：铜机壳 + 黄铜锭
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

    // 3.4 列车机壳：黄铜机壳 + 黑曜石板
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

    // ---- 4. 蒸汽机壳：铁板 ×8 + 青铜板 ×2 + 列车机壳 ----
    // 唯一一条不是机械手的机壳配方：这一步是「把铁壳铆在列车机壳上」，
    // 用工作台拼装。方块定义见 startup_scripts/custom_blocks.js。
    event.shaped('kubejs:steam_casing', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create:iron_sheet',
        B: 'industrialupgrade:itemplates/bronze_plate',
        C: 'create:railway_casing'
    }).id('kubejs:crafting/steam_casing')

    // ---- 5. 蒸汽机机身：蒸汽机壳 ×8 + 黄铜之心 ----
    // 原配方是 8 铝青铜板；这里整条接管成「8 蒸汽机壳 + 黄铜之心」，
    // 把 IU 蒸汽机绑在 Create 机壳链的末端。黄铜之心不消耗。
    event.remove({ output: 'industrialupgrade:blockresource/steam_machine' })
    event.shaped('industrialupgrade:blockresource/steam_machine', [
        'PPP',
        'PNP',
        'PPP'
    ], {
        P: 'kubejs:steam_casing',
        N: 'kubejs:brass_heart'
    }).keepIngredient('kubejs:brass_heart').id('kubejs:steam_machine_from_steam_casing')

    console.info('[Create] 机壳链：安山 → 铜 → 黄铜 → 列车（机械手）→ 蒸汽机壳 / 蒸汽机（工作台）')
})
