// ============================================================
// L2 土高炉 —— 配方 + 控制器合成 + 旧铁路封堵（server）
// 位置：kubejs/server_scripts/metallurgy/blast_furnace_recipes.js
// ------------------------------------------------------------
// 土高炉（L2，强制鼓风 + 熔剂 + 木炭还原）：
//   碎铁×2 + 方解石×1 + 煤/木炭×2 -> 铁锭×2   1400t（70s）
// 拟真要点：
//   - 破碎：研钵碎矿增大反应界面（原料必须先是 crushed/iron）；
//   - 鼓风：提高焦炭燃烧速率，炉温过铁熔点，并生成 CO 还原铁氧化物；
//   - 方解石：高温分解出 CaO，与脉石造渣，降低渣黏度、减少铁损；
//   - 省略炒铁/锻打：本包土高炉直接浇铸出可用铁锭（明确的玩法抽象）。
// 旧铁路封堵：柴堆净化碎铁配方删除（见 kubejsstudio.js）；
//   原版熔炉/高炉对 铁矿、生铁、碎铁、净化碎铁、铁粉 的直烧全部移除。
// ============================================================

var EBF_POOL = 'kubejs:earth_blast_furnace'

var ebfItemIn = (id, count) => ({ type: 'minecraft:item', io: 'input', item: { item: String(id) }, count: count })
var ebfTagIn = (tag, count) => ({ type: 'minecraft:item', io: 'input', item: { tag: String(tag) }, count: count })
var ebfOut = (id, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: String(id), count: count } })

ServerEvents.recipes(event => {
    // ---- 土高炉炼铁 ----
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: EBF_POOL,
        tick_time: 1400,
        requirements: [
            ebfItemIn('industrialupgrade:crushed/iron', 2),
            ebfItemIn('minecraft:calcite', 1),
            ebfTagIn('minecraft:coals', 2),
            ebfOut('minecraft:iron_ingot', 2)
        ]
    }).id('kubejs:earth_blast_furnace/smelt_iron')

    // ---- 控制器合成（机器注册失败时物品不存在，包一层防连累） ----
    // 泥砖炉体 + 黏土封泥 + 两锭琥珀金（风口镶件）
    try {
        event.shaped('mmcr:earth_blast_furnace_controller', [
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
