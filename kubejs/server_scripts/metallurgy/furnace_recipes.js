// ============================================================
// 初期冶金 —— 炭炉配方 + 控制器合成（server）
// 位置：kubejs/server_scripts/metallurgy/furnace_recipes.js
// ------------------------------------------------------------
// 机器定义见 startup_scripts/metallurgy/furnace_startup.js（MBD2 多方块）。
// 配方类型 sinkjourney:charcoal_furnace：
//   碎银×2 + 煤×1 -> 银粒×7      800t（40s）
//   碎金×2 + 煤×1 -> 金粒×7      800t
//   金锭×1 + 银锭×1 + 煤×1 -> 琥珀金锭×2   1200t（60s）
// 燃料 = 煤炭类 tag minecraft:coals（煤/木炭通用）；锭类 tag 覆盖全家族。
// ============================================================

(function () {
    var ITEM_CAP = Java.loadClass(
        'com.lowdragmc.mbd2.common.capability.recipe.ItemRecipeCapability'
    ).CAP
    var TagKey = Java.loadClass('net.minecraft.tags.TagKey')
    var Registries = Java.loadClass('net.minecraft.core.registries.Registries')
    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation')

    // SizedIngredient 用 KubeJS 的全局包装类：ofTag 是唯一的 tag 入口，
    // 直接调 Java 的 SizedIngredient.of 会撞上 of(ItemLike,int) 重载歧义。
    var tag = function (id, count) {
        return SizedIngredient.ofTag(TagKey.create(Registries.ITEM, RL.parse(id)), count)
    }

    ServerEvents.recipes(function (event) {
        var add = function (id, duration, inputs, outputs) {
            var recipe = event.recipes.sinkjourney.charcoal_furnace()
            inputs.forEach(function (input) { recipe.inputs(ITEM_CAP, input) })
            outputs.forEach(function (output) { recipe.outputs(ITEM_CAP, output) })
            recipe.duration(duration)
            recipe.id(id)
        }

        // ---- 炭炉配方 ----
        // 输出写统一后的 canonical 粒（AU 改写不了嵌套内容里的物品 id）
        add('kubejs:charcoal_furnace/smelt_silver', 800,
            [Item.of('industrialupgrade:crushed/silver', 2), tag('minecraft:coals', 1)],
            [Item.of('mekmm:nugget_silver', 7)])

        add('kubejs:charcoal_furnace/smelt_gold', 800,
            [Item.of('industrialupgrade:crushed/gold', 2), tag('minecraft:coals', 1)],
            [Item.of('minecraft:gold_nugget', 7)])

        // 琥珀金（L1 唯一合金；银锭用 tag 覆盖全家族）
        add('kubejs:charcoal_furnace/electrum', 1200,
            [tag('c:ingots/gold', 1), tag('c:ingots/silver', 1), tag('minecraft:coals', 1)],
            [Item.of('industrialupgrade:itemingots/electrum_ingot', 2)])

        // 渣回收：IU 的 slag 物品实际未注册（只有模型/语言键，引用会报 Unknown registry key），删。

        // ---- 控制器合成 ----
        // 原版砖块 + 黏土（砌泥）+ 煤炭类 tag，不碰 Embers 材质
        try {
            event.shaped('kubejs:charcoal_furnace', [
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
})()
