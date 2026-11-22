// ============================================================
// 磁控直拉炉（MCZ）—— T4 提纯工艺的机器
// ------------------------------------------------------------
// 纯度到 11N 之后，再往上拼的不是化学，是晶体质量：
// 熔体里的热对流会把氧和杂质搅进晶棒，磁场把它按下去，
// 于是长出来的是低氧、径向偏析很小的 12N 单晶。
//
// 机器：sinkjourney:mcz_puller
// 结构：server_scripts/silicon/mcz_recipes.js（3x3x3，带流体输入仓）
// 配方：同文件下半部分（11N 多晶硅 + 液氦 + 铌钛线圈 -> 12N 单晶棒）
// ============================================================

MMCREvents.startup(event => {
    event.createMachine('sinkjourney:mcz_puller')
        .displayNameKey('machine.sinkjourney.mcz_puller')
        .recipePool('sinkjourney:mcz_puller')
        .appearance('minecraft:netherite_block')
        .register()
})
