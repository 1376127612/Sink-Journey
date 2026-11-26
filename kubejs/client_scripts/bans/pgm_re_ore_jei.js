// ============================================================
// 在 JEI/EMI 中隐藏铂族与稀土的矿石方块 / 粗制原矿 / 粗制原矿块
// （与 server_scripts/bans/pgm_re_ore_bans.js 一致：这两种金属只能从湿法线来，
//   它们的原矿是绕过处理线的捷径，已经连世界生成一起删掉了）
//
// 只隐藏"矿"这一层：crushed / purifiedcrushed / raw_ingot 是下游形态，
// 稀土线的浮选段还引用 purifiedcrushed/*，留着不影响。
// ============================================================

(function () {
    const ORE_BLOCKS = [
        'industrialupgrade:baseore/platinum',
        'industrialupgrade:baseore2/palladium',
        'industrialupgrade:baseore/iridium',
        'industrialupgrade:baseore2/neodymium',
        'industrialupgrade:baseore2/gadolinium',
        'industrialupgrade:baseore2/yttrium'
    ]
    const RAW_METALS = ['platinum', 'palladium', 'iridium', 'neodymium', 'gadolinium', 'yttrium']

    RecipeViewerEvents.removeEntriesCompletely('item', event => {
        for (const block of ORE_BLOCKS) {
            if (Item.exists(block)) event.remove(block)
        }
        for (const metal of RAW_METALS) {
            const raw = 'industrialupgrade:raw_metals/raw_' + metal
            const rawBlock = 'industrialupgrade:raw_block/raw_' + metal
            if (Item.exists(raw)) event.remove(raw)
            if (Item.exists(rawBlock)) event.remove(rawBlock)
        }
    })
})()
