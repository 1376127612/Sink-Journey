// ============================================================
// 不锈钢（304）：金属粉配料 -> 混合 -> 烧炼
// ============================================================
//
// IU 原本只在合金炉里出不锈钢，配方被机器等级卡住；机壳 138 改成 304 之后
// 需要一条更早、也更像真实工艺的路线：
//
//   7 铁粉 + 2 铬粉 + 1 镍粉  ──机械搅拌器──▶ 10 不锈钢粉
//                                  └──熔炉/高炉──▶ 不锈钢锭（IU 自带 furnace_303 / blasting_304）
//   不锈钢锭 ──压板──▶ 不锈钢板（冷轧，喂 c:plates/stainlesssteel）
//
// 配比就是 304 的名义成分：Fe 70 / Cr 20 / Ni 10（现实 72/19/9）。
// 铬与镍粉来自 IU 的粉碎机，铁粉来自 IU/通用机械，都是电力时代既有产物。
// 碳、锰、硅在游戏里省略：真实含量都在 2% 以下，做不到一颗粉的粒度。
//
// 粉料直接烧炼成锭的配方 IU 已经自带（industrialupgrade:alloydust/stainless_steel
// -> alloyingot/stainless_steel），这里不重复注册，避免两条熔炉配方。
// ============================================================

ServerEvents.recipes(event => {
    var DUST = 'industrialupgrade:itemdust/iron_dust'
    var CHROME = 'industrialupgrade:itemdust/chromium_dust'
    var NICKEL = 'industrialupgrade:itemdust/nickel_dust'
    var STAINLESS_DUST = 'industrialupgrade:alloydust/stainless_steel'
    var STAINLESS_INGOT = 'industrialupgrade:alloyingot/stainless_steel'
    var STAINLESS_PLATE = 'industrialupgrade:alloyplate/stainless_steel'

    // ---- 1. 混粉：7 铁 + 2 铬 + 1 镍 -> 10 不锈钢粉 ----
    // 机械搅拌器是"混合"，不需要加热；加热留给下一步的熔炼。
    var blend = [
        Item.of(DUST, 7),
        Item.of(CHROME, 2),
        Item.of(NICKEL, 1)
    ]
    try {
        event.recipes.create.mixing(Item.of(STAINLESS_DUST, 10), blend)
            .id('kubejs:stainless_steel/blend')
    } catch (e) {
        console.error('[不锈钢] Create 搅拌注册失败，回退到工作台: ' + e)
        try {
            event.shapeless(Item.of(STAINLESS_DUST, 10), blend)
                .id('kubejs:stainless_steel/blend_fallback')
        } catch (e2) {
            console.error('[不锈钢] 回退配方也注册失败: ' + e2)
        }
    }

    // ---- 2. 冷轧：不锈钢锭 -> 不锈钢板 ----
    // IU 的轧机对合金的支持取决于内部名单，这里补一条 Create 压板保证 138 不会卡死。
    try {
        event.custom({
            type: 'create:pressing',
            ingredients: [{ item: STAINLESS_INGOT }],
            results: [{ id: STAINLESS_PLATE }]
        }).id('kubejs:stainless_steel/pressing')
    } catch (e) {
        console.error('[不锈钢] Create 压板注册失败: ' + e)
    }

    console.info('[不锈钢] 304 混粉路线已注册：7 铁粉 + 2 铬粉 + 1 镍粉 -> 10 粉 -> 烧炼 -> 锭 -> 冷轧板')
})
