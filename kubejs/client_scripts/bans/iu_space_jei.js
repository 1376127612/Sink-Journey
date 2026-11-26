// ============================================================
// 在 JEI/EMI 中隐藏 IU 星门（载人太空入口）
// （与 server_scripts/bans/iu_space.js 一致：只隐藏「玩家进入太空」这一件）
//
// 无人远征的探测器/卫星/漫游车/火箭、空间研究台、发射台、太空模块都还在，不隐藏。
// 同位面传送机器（basemachine3/teleporter_iu）已解禁，正常显示。
// ============================================================

(function () {
    RecipeViewerEvents.removeEntriesCompletely('item', event => {
        const STARGATE = 'industrialupgrade:space/planetary_translocator'
        if (!Item.exists(STARGATE)) {
            console.warn('[封禁] JEI 里找不到 IU 星门，已跳过')
            return
        }
        event.remove(STARGATE)
    })
})()
