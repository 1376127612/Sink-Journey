// ============================================================
// 初期冶金 —— 炭炉配方 + 控制器合成（server）
// 位置：kubejs/server_scripts/metallurgy/furnace_recipes.js
// ------------------------------------------------------------
// 炭炉（L1，封闭还原气氛，燃料=煤炭类 tag minecraft:coals，煤/木炭通用）：
//   碎银×2 + 煤×1 -> 银粒×7      800t（40s）
//   碎金×2 + 煤×1 -> 金粒×7      800t
//   金锭×1 + 银锭(tag)×1 + 煤×1 -> 琥珀金锭×2   1200t（60s，配比操作感）
// requirements 的 item 字段是原版 Ingredient，支持 tag。
// ============================================================

var CF_POOL = 'kubejs:charcoal_furnace'

var cfItemIn = (id, count) => ({ type: 'minecraft:item', io: 'input', item: { item: String(id) }, count: count })
var cfTagIn = (tag, count) => ({ type: 'minecraft:item', io: 'input', item: { tag: String(tag) }, count: count })
var cfOut = (id, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: String(id), count: count } })

ServerEvents.recipes(event => {
    // ---- 炭炉配方 ----
    // 输出必须写统一后的 canonical 粒（同 pyre：mmcr 的 stack.id 也是嵌套字段，AU 改写不了）
    var smelt = {
        silver: 'mekmm:nugget_silver',
        gold: 'minecraft:gold_nugget'
    }
    Object.keys(smelt).forEach(function (metal) {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: CF_POOL,
            tick_time: 800,
            requirements: [
                cfItemIn('industrialupgrade:crushed/' + metal, 2),
                cfTagIn('minecraft:coals', 1),
                cfOut(smelt[metal], 7)
            ]
        }).id('kubejs:charcoal_furnace/smelt_' + metal)
    })

    // 琥珀金（L1 唯一合金；银锭用 tag 覆盖全家族）
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: CF_POOL,
        tick_time: 1200,
        requirements: [
            cfTagIn('c:ingots/gold', 1),
            cfTagIn('c:ingots/silver', 1),
            cfTagIn('minecraft:coals', 1),
            cfOut('industrialupgrade:itemingots/electrum_ingot', 2)
        ]
    }).id('kubejs:charcoal_furnace/electrum')

    // 渣回收：IU 的 slag 物品实际未注册（只有模型/语言键，引用会报 Unknown registry key），删。

    // ---- 控制器合成（机器注册失败时物品不存在，包一层防连累） ----
    // 原版砖块 + 黏土（砌泥）+ 煤炭类 tag，不碰 Embers 材质
    try {
        event.shaped('mmcr:charcoal_furnace_controller', [
            '#A#',
            '#B#',
            '#A#'
        ], {
            '#': 'minecraft:bricks',
            'A': 'minecraft:clay_ball',
            'B': '#minecraft:coals'
        }).id('kubejs:charcoal_furnace/controller')
    } catch (err) {
        console.warn('[CF] 控制器物品不存在（炭炉注册失败），跳过控制器配方: ' + err)
    }
})
