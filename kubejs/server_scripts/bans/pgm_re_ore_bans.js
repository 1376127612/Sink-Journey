// ============================================================
// 铂族 / 稀土：矿石与粗制原矿从整合包里删掉
// ------------------------------------------------------------
// 这两种金属只能从湿法线来（PGM_LINE.md / RARE_EARTH_LINE.md），但只要原矿还在，
// 就还有第二条路：IU 的粉碎→洗净→离心、Create 的粉碎（raw_platinum → crushed_raw_platinum）、
// NC 的熔盐炉（粗制稀土块 → 熔融钕/钆 → 铸锭）都能把粗制原矿换成锭。
// 逐台机器封是打地鼠——每加一个模组就多一条路，所以直接删源头：
//
//   sj-oregen          六种矿不再生成（tools/gen_oregen.py 的 TABLE 已删行）
//   本文件（server）    删掉产出这六种矿石 / 粗制原矿 / 粗制原矿块的配方
//   bans/*_jei.js       JEI/EMI 里把矿石方块、粗制原矿、粗制原矿块一并隐藏
//
// 保留的矿：
//   nickel              铂族的唯一进料（9 份纯净碎镍矿 → 铂族精矿）
//   iridosmine          铱锇矿，PGM_LINE 的独立进料
//   braggite            硫镍钯铂矿，只有矿石方块、没有碎矿形态，不构成捷径
//   hafnium             通用选矿线在选它，不属于稀土湿法线
// ============================================================

ServerEvents.recipes(event => {
    // 矿石方块（只挂世界生成，本来没有配方；按产物兜一遍，防止将来有人加回来）
    const ORE_BLOCKS = [
        'industrialupgrade:baseore/platinum',
        'industrialupgrade:baseore2/palladium',
        'industrialupgrade:baseore/iridium',
        'industrialupgrade:baseore2/neodymium',
        'industrialupgrade:baseore2/gadolinium',
        'industrialupgrade:baseore2/yttrium'
    ]

    // 粗制原矿与粗制原矿块（九换一、拆块那两条）
    const RAW_METALS = ['platinum', 'palladium', 'iridium', 'neodymium', 'gadolinium', 'yttrium']

    for (const block of ORE_BLOCKS) event.remove({ output: block })
    for (const metal of RAW_METALS) {
        event.remove({ output: 'industrialupgrade:raw_metals/raw_' + metal })
        event.remove({ output: 'industrialupgrade:raw_block/raw_' + metal })
    }

    console.info('[封禁] 铂族 / 稀土的矿石方块与粗制原矿已删：铂钯铱走镍精矿与阳极泥，钕钆钇走稀土湿法线')
})
