// ============================================================
// 石油—石化线 v4 —— JEI 说明（client）
// 加氢精制与裂解已并入通用反应器，机器说明在 client_scripts/industrial/reactors_v2_info.js
// 设计文档：kubejs/docs/OIL_LINE_V2.md
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:petroleum_coke', [
        Text.of('石油焦：裂解与焦化的副产。可进 IU 石墨池做石墨电极，也能当燃料。')
    ])
})

RecipeViewerEvents.addInformation('fluid', event => {
    event.add('kubejs:treated_naphtha', [
        Text.of('精制石脑油：石脑油经加氢脱硫后的裂解原料，硫以硫化氢形式摘掉。')
    ])
})
