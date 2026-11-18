// ============================================================
// 溯洄研究系统 —— 客户端说明（JEI 提示）
// 位置：kubejs/client_scripts/research_core/hints.js
// 注意：这里只做"看得见的说明"。解锁判定完全在服务端，
//       客户端不参与任何 gating 逻辑。
// ============================================================

MMCREvents.client(event => {
    event.addRecipePoolInfo('sinkjourney:research_station', 'jei.sinkjourney.research_station.info')
})
