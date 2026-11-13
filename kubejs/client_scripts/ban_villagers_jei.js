// ============================================================
// 在 JEI 中隐藏村民交易配方类别
// （与服务端 ban_villagers.js 配套）
//
// 说明：JEI 本体在 1.21 已不再显示村民交易，
//       这里显示的交易类别来自 JustEnoughResources (JER)，
//       类别 ID 为 jeresources:villager（村民 + 流浪商人都在里面）。
// ============================================================

RecipeViewerEvents.removeCategories(event => {
    event.remove('jeresources:villager')
})
