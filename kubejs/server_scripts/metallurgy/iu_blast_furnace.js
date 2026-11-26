// ============================================================
// IU 高炉（Industrial Upgrade 多方块）—— 炼钢 + 蒸汽时代末期获取
// 位置：kubejs/server_scripts/metallurgy/iu_blast_furnace.js  (server)
// ------------------------------------------------------------
// 钢的产线从土高炉（kubejs:earth_blast_furnace 渗碳）搬到 IU 自己的高炉：
// 高炉控制器（industrialupgrade:blastfurnace/blast_furnace_main）的产物表是
// 写死在 BlockEntityBlastFurnaceMain 里的，铁锭 -> 钢锭（IUItem.advIronIngot
// 就是 itemingots/steel_ingot 的 meta 23），3600t 一批，要满热 + 蒸汽。
// 所以这里只改「怎么拿到这座高炉」，不动它的配方表。
//
// 获取定位：蒸汽时代末期（与 era.steam / 精密构件同一节点），
//   原版 IU 的高炉零件要镁 / 因瓦 / 钢板储罐，镁在蒸汽时代根本不存在，
//   等于整座炉子在电力时代之前拿不到。这里把三类被镁挡住零件换成蒸汽材料：
//     高炉混合料 2423  镁锭 x2        -> 铁粉 x2（黏土 + 氧化铁 + 砂石骨料）
//     高炉输入 688     因瓦齿轮 x4    -> 青铜齿轮 x4
//     高炉流体输入 689 钢制储罐       -> 铜锅炉（钢要等这座炉子，不能自锁）
//     高炉控制器 691   电子电路       -> 机械动力「精密构件」
//   加热泵 687 与输出 690 保持原样（原型流体加热器 / 琥珀金齿轮，蒸汽时代可造）。
//
// 顺带把热源接上：高炉要「加热泵满热」才开工，而唯一的热源机器
//   industrialupgrade:basemachine3/fluid_heat（液体加热器）原配方是电力时代的
//   元件:发电机 + 电动机 + 元件:流体，蒸汽末期根本造不出来：
//     热水箱 744       真空腔室(铝板) + 镁板 x3 -> 铜锅炉 + 铁板 x3
//     液体加热器 1456  电力三件套             -> 蒸发元件 + 液体储存元件 + 铜锅炉
//   液体加热器烧岩浆就能把 1000 热推满，贴着加热泵外墙放即可直连（IU 没给热管配方）。
//   元件:流体（824）不在这里动 —— 那是电力时代的镍板版本（iu_electric_recipes.js）。
//
// 上游脚本：iu_steam_recipes.js（蒸汽机台）、iu_primal_recipes.js（原型加热器）。
// 阶段锁：config/astages/simple/astages/item.json 的 steam_gate_bf0..5。
// ============================================================

ServerEvents.recipes(event => {
    var ELEM = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }
    var PART = 'industrialupgrade:blastfurnace/blast_furnace_part'
    var BOILER = 'kubejs:copper_boiler'
    var BRONZE_GEAR = { item: 'kubejs:bronze_gear' }

    var sShaped = function (id, pattern, key, output, count) {
        event.remove({ id: id })
        event.custom({
            type: 'industrialupgrade:shaped_recipe',
            category: 'misc',
            key: key,
            pattern: pattern,
            result: { count: count || 1, id: output },
            show_notification: false
        }).id(id)
    }

    // ---- 0. 高炉混合料（770）：黏土 + 铁粉 + 砂石，烧成高炉砖 ----
    // 耐火泥：黏土做结合相，铁粉（氧化铁）当矿化剂，砂与砂砾是熟料骨料。
    event.remove({ id: 'industrialupgrade:industrialupgrade_2423' })
    event.custom({
        type: 'industrialupgrade:shapeless_recipe',
        category: 'misc',
        ingredients: [
            { item: 'minecraft:clay_ball' },
            { item: 'minecraft:clay_ball' },
            { tag: 'c:dusts/iron' },
            { tag: 'c:dusts/iron' },
            { item: 'minecraft:sand' },
            { item: 'minecraft:gravel' }
        ],
        result: { count: 4, id: ELEM(770) },
        show_notification: false
    }).id('industrialupgrade:industrialupgrade_2423')

    // ---- 1. 高炉输入（688）：四个高炉块 + 一插槽元件 + 青铜齿轮 ----
    sShaped('industrialupgrade:industrialupgrade_688',
        ['CAC', 'ABA', 'CAC'],
        {
            A: { item: PART },
            B: { item: ELEM(44) },
            C: BRONZE_GEAR
        },
        'industrialupgrade:blastfurnace/blast_furnace_input')

    // ---- 2. 高炉流体输入（689）：铜锅炉顶替钢制储罐 ----
    sShaped('industrialupgrade:industrialupgrade_689',
        [' A ', 'ABA', ' A '],
        {
            A: { item: PART },
            B: { item: BOILER }
        },
        'industrialupgrade:blastfurnace/blast_furnace_input_fluid')

    // ---- 3. 高炉控制器（691）：中心由电子电路换成精密构件 ----
    // 精密构件与 era.steam 同一个研究节点解锁，控制器因此天然卡在蒸汽时代末期。
    sShaped('industrialupgrade:industrialupgrade_691',
        [' A ', 'ABA', ' A '],
        {
            A: { item: PART },
            B: { item: 'create:precision_mechanism' }
        },
        'industrialupgrade:blastfurnace/blast_furnace_main')

    // ---- 4. 热水箱（744）：铜锅炉 + 铁板 + 铜板（原真空腔室 + 镁板）----
    // 液体加热器（热源）的零件，原子配方要铝板和镁板，蒸汽时代一样造不出来。
    sShaped('industrialupgrade:industrialupgrade_744',
        [' B ', 'BAB', 'CCC'],
        {
            A: { item: BOILER },
            B: { tag: 'c:plates/iron' },
            C: { tag: 'c:plates/copper' }
        },
        ELEM(70))

    // ---- 5. 液体加热器（1456）：热源本体改成蒸汽零件 ----
    // 原子配方要 元件:发电机 + 电动机 + 元件:流体，三件全是电力时代的东西，
    // 蒸汽末期只能干看着。这里换成蒸汽时代的液体件：蒸发元件 + 液体储存元件
    // + 热水箱 + 铜锅炉（烧岩浆/汽油的那口锅）。
    // 元件:流体（824）不在这里改 —— 那是电力时代的镍板版本（iu_electric_recipes.js）。
    sShaped('industrialupgrade:industrialupgrade_1456',
        ['D D', 'BAE', ' C '],
        {
            A: { item: 'industrialupgrade:blockresource/machine' },
            B: { item: ELEM(123) },
            C: { item: BOILER },
            D: { item: ELEM(70) },
            E: { item: ELEM(154) }
        },
        'industrialupgrade:basemachine3/fluid_heat')
})
