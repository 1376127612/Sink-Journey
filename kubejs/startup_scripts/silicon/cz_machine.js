// ============================================================
// 单晶反应釜（直拉炉）—— T2 / T3 的拉晶段
// ------------------------------------------------------------
// 分级路线里，西门子棒（9N）和硅烷料（11N）都要再拉一次单晶才能切片。
// 这一步原来挂在 IU 晶体生长室的桥接配方上，等于把分级的关键一环交给别的 mod；
// 现在给它一台自己的 MMCR 机器：
//
//   sinkjourney:cz_reactor
//   recipe_pool sinkjourney:cz_reactor
//     西门子多晶硅棒 ×1 -> 9N 单晶硅 ×1
//     11N 多晶硅     ×1 -> 11N 单晶硅 ×1
//
// T1 的 492 -> 493 -> 495 仍然留在 IU 生长室（前期原型机就能跑），
// T4 的 12N 走磁控直拉炉（要磁场与液氦），三档各自有各自的炉子。
//
// 结构和配方：server_scripts/silicon/cz_recipes.js
// ============================================================

MMCREvents.startup(event => {
    event.createMachine('sinkjourney:cz_reactor')
        .displayNameKey('machine.sinkjourney.cz_reactor')
        .recipePool('sinkjourney:cz_reactor')
        .appearance('minecraft:quartz_block')
        .register()
})
