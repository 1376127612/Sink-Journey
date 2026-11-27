// ============================================================
// EnderIO 第一部分 —— 改良电力时代的机壳与合金
// ============================================================
//
// EIO 在本包分两段走，口径同工业先锋：
//   第一部分（本文件）：虚空框架 -> 合金炉 / 研磨机 -> 导电合金 -> 能量导管
//   第二部分（L3）：充能合金 / 脉冲合金 / 暗钢 / 灵魂机器，挂在充能合金与暗钢上，本轮不动
//
// 原配方的问题和 IF 第二阶段一样：EIO 用「铁锭 + 铁齿轮」当骨架，铁在蒸汽时代就过剩，
// 这一步等于白送。改成 304 板与镍铬板之后，EIO 的第一台机器恰好座落在
// 「不锈钢与镍铬已经量产」的改良电力时代：
//
//   虚空框架   5 铁锭 + 4 无限粒        -> 5 块 304 板 + 4 无限粒
//   合金炉     2 铁锭 + ...             -> 2 块镍铬板（发热体）+ 铁齿轮 + 熔炉 + 黑曜石
//   研磨机     2 铁锭 + ...             -> 2 块 304 板（磨盘与机座）+ 铁齿轮 + 燧石 + 活塞
//   导电合金   铁 + 铜锭                -> 铁 + 4N 电解铜（kubejs:electrolytic_copper）
//
// 最后一条是把 EIO 的导电件接在本章的材料纪律上：能导电的铜是电解精炼出来的，
// 火法粗铜进不了导管。无限粒本身的门槛（基岩上火烧）不动，那是 EIO 自己的第一道关。
// ============================================================

ServerEvents.recipes(event => {
    var fShaped = function (id, output, pattern, key, count) {
        event.remove({ id: id })
        event.shaped(Item.of(output, count || 1), pattern, key).id(id)
    }

    // ---- 1. 虚空框架（EIO 的「机壳」，所有机器都长在它上面） ----
    fShaped('enderio:void_chassis',
        'enderio:void_chassis',
        ['IGI', 'G G', 'IGI'],
        {
            I: '#c:plates/stainlesssteel',
            G: '#c:dusts/grains_of_infinity'
        })

    // ---- 2. 合金炉 ----
    fShaped('enderio:alloy_smelter',
        'enderio:alloy_smelter',
        ['GFG', 'FVF', 'IOI'],
        {
            G: '#c:gears/iron',
            F: 'minecraft:furnace',
            V: 'enderio:void_chassis',
            I: '#c:plates/nichrome',
            O: '#c:obsidians'
        })

    // ---- 3. 研磨机 ----
    fShaped('enderio:sag_mill',
        'enderio:sag_mill',
        ['GFG', 'IVI', 'OPO'],
        {
            G: '#c:gears/iron',
            F: 'minecraft:flint',
            I: '#c:plates/stainlesssteel',
            V: 'enderio:void_chassis',
            O: '#c:obsidians',
            P: 'minecraft:piston'
        })

    // ---- 4. 导电合金：铜换成 4N 电解铜 ----
    event.remove({ id: 'enderio:alloy_smelting/conductive_alloy_ingot' })
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 3200,
        experience: 0.3,
        inputs: [
            { count: 1, tag: 'c:ingots/iron' },
            { count: 1, item: 'kubejs:electrolytic_copper' }
        ],
        output: { count: 2, id: 'enderio:conductive_alloy_ingot' }
    }).id('kubejs:enderio/conductive_alloy_l2')

    console.info('[EIO] 改良电力时代 EnderIO 第一部分已开：虚空框架 / 合金炉 / 研磨机改用 304 + 镍铬，导电合金改用 4N 电解铜')
})
