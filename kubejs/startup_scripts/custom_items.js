// ============================================================
// 自定义物品注册
//   精密构件组 / 黄铜之心 / 未完成的黄铜之心 /蒸汽机壳
// 说明：材质留空，未指定 texture，补图时把 PNG 放到
//       kubejs/assets/kubejs/textures/item/ 下即可：
//         precision_component_group.png
//         brass_heart.png
//         incomplete_brass_heart.png
// ============================================================

StartupEvents.registry('item', event => {
    event.create('precision_component_group')
        .displayName('精密构件组')

    event.create('brass_heart')
        .displayName('黄铜之心')

    // 序列装配的中间产物
    event.create('incomplete_brass_heart')
        .displayName('未完成的黄铜之心')
    
    event.create('steam_casing')
        .displayName('蒸汽机壳')
})
