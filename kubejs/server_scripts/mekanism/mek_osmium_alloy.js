// ============================================================
// 锇莹黑合金 · 通用机械门禁
// ------------------------------------------------------------
// 合金只留一条路，走 EIO 合金炉（DJ2 那里是灌注机 + 灌装机，本包换成合金炉当升级配方）：
//
//   合金（EIO 合金炉）  2× 锇荧锭 + 1× 强化黑曜石锭  → 6× 合金
//
// 上一版的工作台环形配方（8 围 1 出 8）已经删掉：一件锇荧锭只换一件。
// 现在只留 EIO 合金炉这条路，一件锇荧锭换三件，是本包「升级配方」的位置。
//
// 门禁按 DJ2 的三段来分：
//   第一段 直接给：钢外壳 / 冶金灌注机 / 富集仓 / 通电冶炼炉 / 粉碎机 —— 原版配方，不碰锇
//   第二段 要锇：锇压缩机 → 锇荧锭 → EIO 合金炉 → 锇莹黑合金
//   第三段 要电解核心：电解分离机（电解核心 + 锇莹黑合金）
// 本包锇来得晚，第一段要是不留干净的，通用机械整章都得陪着锇一起卡住。
// ============================================================

ServerEvents.recipes(event => {
    var ALLOY = 'kubejs:alloy_osmium_lumen_black'
    var GLOW = 'mekanism:ingot_refined_glowstone'
    var OBSIDIAN = 'mekanism:ingot_refined_obsidian'

    // ---- 1. 合金：EIO 合金炉，一件锇荧锭换三件 ----
    event.remove({ id: 'kubejs:mekanism/osmium_lumen_black' })
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 3200,
        experience: 0.3,
        inputs: [
            { count: 2, item: GLOW },
            { count: 1, item: OBSIDIAN }
        ],
        output: { count: 6, id: ALLOY }
    }).id('kubejs:mekanism/osmium_lumen_black_alloy_smelting')

    // ---- 2. 电解分离机：第三段，电解核心 + 锇莹黑合金 ----
    // 原：灌注合金 ×2 / 电解核心 / 铁锭 ×4 / 红石粉 ×2
    event.remove({ id: 'mekanism:electrolytic_separator' })
    event.shaped('mekanism:electrolytic_separator', ['IAI', 'A#A', 'IAI'], {
        I: '#c:ingots/iron',
        A: ALLOY,
        '#': 'mekanism:electrolytic_core'
    }).id('mekanism:electrolytic_separator')

    // 富集仓 / 通电冶炼炉 / 粉碎机 / 冶金灌注机 / 锇压缩机不吃合金，一律用原版配方：
    // 它们属于第一、第二段，吃了合金整条线就得等锇，而锇在这个包来得很晚。
    // 上一版写过 `mekanism:enrichment_chamber` / `mekanism:energized_smelter` 的覆写，
    // 删掉那两段就等于回原版，不需要再 remove 一次。

    console.info('[MEK] 锇莹黑合金：EIO 合金炉 2 锇荧锭 + 1 强化黑曜石锭 → 6；电解分离机吃电解核心 + 合金')
})
