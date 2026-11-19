// ============================================================
// 原始研究台 —— Multiblocked2 配方（阶段一）
// ------------------------------------------------------------
// 机器定义见 startup_scripts/research/primitive_mbd2.js。
// 新增配方用下面的 research()：
//   research('<配方 id>', <时长 tick>, [输入...], [输出...])
//   - 时长 20 tick = 1 秒，也就是机器里转多久才出产物
//   - 输入最多 2 种（对应研究台的 2 个输入槽），输出 1 种
//   - 物品写 Item.of('<id>', 数量)，数量不写就是 1
//
//   纸 + 墨囊          -> 研究笔记 x2      （5min / 6000 ticks）
//   研究笔记 x4 + 纸   -> 蓝图·原始 x1     （5min / 6000 ticks）
//
// 所有配方统一 5 分钟；扫雷通关一次推进当前进度的 50%
// （见 server_scripts/research/minesweeper.js）。
// ============================================================

ServerEvents.recipes(function (event) {
    var ITEM_CAP = Java.loadClass(
        'com.lowdragmc.mbd2.common.capability.recipe.ItemRecipeCapability'
    ).CAP

    var research = function (id, duration, inputs, outputs) {
        var recipe = event.recipes.sinkjourney.primitive_research()
        inputs.forEach(function (stack) {
            recipe.inputs(ITEM_CAP, stack)
        })
        outputs.forEach(function (stack) {
            recipe.outputs(ITEM_CAP, stack)
        })
        recipe.duration(duration)
        recipe.id(id)
    }

    // 纸 + 墨囊 -> 研究笔记 x2
    research(
        'kubejs:primitive_research/notes',
        6000,
        [Item.of('minecraft:paper'), Item.of('minecraft:ink_sac')],
        [Item.of('kubejs:research_notes', 2)]
    )

    // 研究笔记 x4 + 纸 -> 蓝图·原始 x1
    research(
        'kubejs:primitive_research/blueprint',
        6000,
        [Item.of('kubejs:research_notes', 4), Item.of('minecraft:paper')],
        [Item.of('kubejs:blueprint_primitive', 1)]
    )
})
