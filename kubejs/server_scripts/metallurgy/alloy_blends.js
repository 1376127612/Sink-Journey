// ============================================================
// 合金混粉：细比例合金一律走"粉料配比 -> 搅拌 -> 合金粉 -> 烧炼"
// ============================================================
//
// IU 的合金炉只能表达"整颗锭"的比例（2/3/4/5 个进料槽），
// 组元占比 <10% 或组元数超过槽位的合金在炉里做不对，所以把配方挪到这里：
//
//   N 颗金属粉 + M 颗金属粉 ──机械搅拌器──▶ N+M 颗合金粉
//                                  └──熔炉/高炉──▶ 合金锭（IU 自带 furnace_2xx / blasting_2xx）
//
// 与 alloy 炉的分工见 kubejs/docs/IU_ALLOY_PLAN.md §2、§10：
//   P0（kubejs/sjcore/alloys.json）把这些合金从炉里删掉，这里补上唯一来源。
//
// 比例口径：1 颗 = 5~10%，按每炉 10–50 颗给整数；取整误差写在每条注释里。
// 粉料用 IU 自己的 itemdust（统一层里 IU 优先级最高，写死 id 不会被换掉）；
// IU 没有的三种粉（钢/锂/铍）写统一层里的 canonical id（mekanism 钢/锂、核电铍）。
// ============================================================

ServerEvents.recipes(event => {
    var DUST = 'industrialupgrade:itemdust/'
    var ALLOY_DUST = 'industrialupgrade:alloydust/'

    // [合金, 产出粉数, [[粉, 颗数], ...], 说明]
    var BLENDS = [
        ['red_brass', 20, [['copper', 17], ['zinc', 1], ['tin', 1], ['lead', 1]],
            '红黄铜 Cu-15Zn-5Sn-5Pb：85/5/5/5'],
        ['aluminum_bronze', 20, [['copper', 16], ['aluminium', 2], ['iron', 1], ['nickel', 1]],
            '铝青铜 Cu-10Al-5Fe-5Ni：80/10/5/5（原配方多一颗锡，锡不属于铝青铜）'],
        ['beryllium_bronze', 20, [['copper', 19], ['nuclearcraftneohaul:beryllium_dust', 1]],
            '铍青铜 Cu-2Be：95/5，铍取上限让一颗粉看得见'],
        ['duralumin', 20, [['aluminium', 18], ['copper', 1], ['magnesium', 1]],
            '硬铝 2024 Al-4.4Cu-1.5Mg：90/5/5，铜取上限（原配方缺铜）'],
        ['aluminium_silicon', 10, [['aluminium', 9], ['silicon', 1]],
            '铝硅 AlSi10：90/10（原配方用燧石当硅源，镁不是组元）'],
        ['aluminium_lithium_alloy', 20, [['aluminium', 18], ['copper', 1], ['mekanism:dust_lithium', 1]],
            '铝锂 2195 Al-4Cu-1Li：90/5/5（原配方缺铜）'],
        ['alumel', 50, [['nickel', 48], ['manganese', 1], ['aluminium', 1]],
            '阿卢梅尔 Ni-2Mn-2Al-1Si：96/2/2，硅省略；原配方是 Al+Ti，不是热电偶合金'],
        ['molybdenum_steel', 50, [['mekanism:dust_steel', 48], ['chromium', 1], ['molybdenum', 1]],
            '钼钢 2.25Cr-1Mo：96/2/2（原配方含铊，铊在冶金里没有这个用法）'],
        ['permalloy', 20, [['nickel', 16], ['iron', 3], ['molybdenum', 1]],
            '超坡莫 Ni79Fe16Mo5：80/15/5（原配方加了 2 颗煤粉，碳不进坡莫）'],
        ['stellite', 20, [['cobalt', 11], ['chromium', 6], ['tungsten', 2], ['coal', 1]],
            '司太立 Co-30Cr-12W-2C：55/30/10/5，碳用煤粉，铁换掉'],
        ['tantalum_tungsten_hafnium', 20, [['tantalum', 18], ['tungsten', 1], ['hafnium', 1]],
            'TTH Ta-8W-2Hf：90/5/5（炉里那条 1:1:1 是等原子，偏铪 60 倍）'],
        ['alcled', 20, [['aluminium', 19], ['magnesium', 1]],
            '铝镁 5052 Al-2.5Mg：95/5（原配方 Al+Mg+Mn 是各三分之一，33% 镁不是铝合金）'],
        ['inconel', 20, [['nickel', 13], ['chromium', 4], ['molybdenum', 2], ['iron', 1]],
            '因科镍 625 Ni-22Cr-9Mo-4Fe：65/20/10/5（原配方 1:1:1:1 各 25%）']
    ]

    BLENDS.forEach(function (entry) {
        var alloy = entry[0]
        var out = entry[1]
        var parts = entry[2]
        var note = entry[3]

        var inputs = parts.map(function (p) {
            // IU 有这种粉就写 itemdust/<name>_dust；IU 没有的（钢/锂/铍）直接写统一后的那个 id，
            // 不用 #tag 是怕 'Nx #tag' 的计数写法在 Create 的松散 ingredient 里解析成单件
            var id = p[0].indexOf(':') >= 0 ? p[0] : DUST + p[0] + '_dust'
            return p[1] + 'x ' + id
        })

        event.recipes.create.mixing(out + 'x ' + ALLOY_DUST + alloy, inputs)
            .id('kubejs:alloy_blends/' + alloy)
        console.info('[合金混粉] ' + alloy + '：' + out + ' 颗 ← ' + note)
    })

    // 碳化铪留在合金炉里做（19 铪 + 1 碳，两槽就够），不在这里重复。
    console.info('[合金混粉] 已注册 ' + BLENDS.length + ' 条混粉配方；合金粉烧锭沿用 IU 自带的 furnace_2xx / blasting_2xx')
})
