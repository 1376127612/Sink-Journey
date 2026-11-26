// ============================================================
// L2 土高炉 —— 配方 + 控制器合成 + 旧铁路封堵（server）
// 位置：kubejs/server_scripts/metallurgy/blast_furnace_recipes.js
// ------------------------------------------------------------
// 机器定义见 startup_scripts/metallurgy/blast_furnace_startup.js（MBD2 多方块）。
// 土高炉（L2，强制鼓风 + 熔剂 + 木炭还原），配方类型 sinkjourney:earth_blast_furnace：
//   碎铁×2 + 方解石×1 + 煤/木炭×2 -> 铁锭×2   1400t（70s）
// 土高炉只炼铁：渗碳钢已删除，钢改由 IU 高炉出（见 iu_blast_furnace.js）。
// 拟真要点：
//   - 破碎：研钵碎矿增大反应界面（原料必须先是 crushed/iron）；
//   - 鼓风：提高焦炭燃烧速率，炉温过铁熔点，并生成 CO 还原铁氧化物；
//   - 方解石：高温分解出 CaO，与脉石造渣，降低渣黏度、减少铁损；
//   - 省略炒铁/锻打：本包土高炉直接浇铸出可用铁锭（明确的玩法抽象）。
// 旧铁路封堵：柴堆不再给「碎铁直出铁锭/净化碎铁」的路线（柴堆只有
//   6 铁粒，见 misc/metallurgy.js）；原版熔炉/高炉对 铁矿、生铁、
//   碎铁、净化碎铁、铁粉 的直烧全部移除。
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
        // ---- 土高炉炼铁 ----
        var recipe = event.recipes.sinkjourney.earth_blast_furnace()
        recipe.inputs(ITEM_CAP, Item.of('industrialupgrade:crushed/iron', 2))
        recipe.inputs(ITEM_CAP, Item.of('minecraft:calcite', 1))
        recipe.inputs(ITEM_CAP, tag('minecraft:coals', 2))
        recipe.outputs(ITEM_CAP, Item.of('minecraft:iron_ingot', 2))
        recipe.duration(1400)
        recipe.id('kubejs:earth_blast_furnace/smelt_iron')

        // ---- 控制器合成 ----
        // 泥砖炉体 + 黏土封泥 + 两锭琥珀金（风口镶件）
        try {
            event.shaped('kubejs:earth_blast_furnace', [
                '#E#',
                '#B#',
                '#E#'
            ], {
                '#': 'minecraft:mud_bricks',
                'E': '#c:ingots/electrum',
                'B': 'minecraft:clay_ball'
            }).id('kubejs:earth_blast_furnace/controller')
        } catch (err) {
            console.warn('[EBF] 控制器物品不存在（土高炉注册失败），跳过控制器配方: ' + err)
        }

        // ---- 封堵旧铁路：原版直烧不再产出铁锭 ----
        var ironBypass = [
            '#c:ores/iron',
            '#c:raw_materials/iron',
            '#c:dusts/iron',
            'industrialupgrade:crushed/iron',
            'industrialupgrade:purifiedcrushed/iron'
        ]
        event.remove({ type: 'minecraft:smelting', input: ironBypass })
        event.remove({ type: 'minecraft:blasting', input: ironBypass })
    })
})()
