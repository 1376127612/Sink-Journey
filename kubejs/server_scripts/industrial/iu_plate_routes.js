// ============================================================
// IU 板材的三条生产路线
// ============================================================
//
// IU 的铁砧被封禁以后，板材需要别的出口。按金属性质分工：
//
//   路线       判据              覆盖金属（只补没有现成配方的）
//   --------   ---------------   --------------------------------------------
//   余烬压印   熔点 ≤ 1100℃      锡、铅、锌、铜、金、银、琥珀金、青铜
//   Create压板 硬度 ≤ 3（莫氏）   锡、锌、琥珀金、青铜、红铜
//   IU 挤压机  全部金属          以上全部 + 铁、钢、钛、钨……
//
// 铜/铁/金已经有 Create 自带的压板配方，铅/银有 Embers 自带的 Create 压板配方；
// 再注册一遍会在 JEI 里出现两条同样的压板配方（金板就是这种情况）。
// 那些配方不用补，Almost Unified 会把它们产出的板统一成 IU 板。
//
// 三条路线都产 IU 自己的板（`industrialupgrade:itemplates/*_plate`），
// 这样 JEI 里不管从哪条线进来，拿到的都是同一个物品。
//
// 齿轮：余烬的压印本来就是齿轮的主要来源（brass/bronze 走 kubejs 齿轮，
// zinc/silver/electrum 走 IU 齿轮），这里把这三样 IU 齿轮显式挂到压印上。
// 铁与钢熔点超过 1500℃，余烬压印不适用；铁保留 Create 冷压，钢只走 IU 挤压机。
//
// 详细说明：kubejs/docs/IU_PRIMAL_STEAM.md
// ============================================================

ServerEvents.recipes(event => {
    var PLATE = function (metal) {
        return 'industrialupgrade:itemplates/' + metal + '_plate'
    }

    // ---- 路线 1：余烬压印（低熔点：熔融金属 + 压板模）----
    var embersPlate = [
        ['tin', 'c:molten_tin', PLATE('tin')],
        ['lead', 'c:molten_lead', PLATE('lead')],
        ['zinc', 'c:molten_zinc', PLATE('zinc')],
        ['copper', 'c:molten_copper', PLATE('copper')],
        ['gold', 'c:molten_gold', PLATE('gold')],
        ['silver', 'c:molten_silver', PLATE('silver')],
        ['electrum', 'c:molten_electrum', PLATE('electrum')],
        ['bronze', 'c:molten_bronze', PLATE('bronze')]
    ]
    embersPlate.forEach(function (row) {
        try {
            event.custom({
                type: 'embers:stamping',
                fluid: { amount: 90, tag: row[1] },
                output: { item: row[2] },
                stamp: { item: 'embers:plate_stamp' }
            }).id('kubejs:iu_plate/embers/' + row[0])
        } catch (e) {
            console.error('[IU] 余烬压板注册失败 ' + row[0] + ': ' + e)
        }
    })

    // ---- 路线 1b：余烬压印齿轮（IU 齿轮）----
    var embersGear = [
        ['zinc', 'c:molten_zinc', 'industrialupgrade:gear/zinc'],
        ['silver', 'c:molten_silver', 'industrialupgrade:gear/silver'],
        ['electrum', 'c:molten_electrum', 'industrialupgrade:gear/electrum']
    ]
    embersGear.forEach(function (row) {
        try {
            event.custom({
                type: 'embers:stamping',
                fluid: { amount: 180, tag: row[1] },
                output: { item: row[2] },
                stamp: { item: 'embers:gear_stamp' }
            }).id('kubejs:iu_gear/embers/' + row[0])
        } catch (e) {
            console.error('[IU] 余烬压齿轮注册失败 ' + row[0] + ': ' + e)
        }
    })

    // ---- 路线 2：Create 压板（低硬度：固态挤压）----
    // 只列没有现成 Create 压板配方的金属：
    //   铜/铁/金   -> create:pressing/*_ingot
    //   铅/银      -> embers:create/pressing/*_plate
    // 这些配方产出会被 Almost Unified 换成 IU 板，重复注册没有意义。
    var createPlate = [
        ['tin', 'c:ingots/tin', PLATE('tin')],
        ['zinc', 'c:ingots/zinc', PLATE('zinc')],
        ['electrum', 'c:ingots/electrum', PLATE('electrum')],
        ['bronze', 'c:ingots/bronze', PLATE('bronze')],
        ['redbrass', 'c:ingots/redbrass', 'industrialupgrade:alloyplate/red_brass']
    ]
    createPlate.forEach(function (row) {
        try {
            event.custom({
                type: 'create:pressing',
                ingredients: [{ tag: row[1] }],
                results: [{ id: row[2] }]
            }).id('kubejs:iu_plate/create/' + row[0])
        } catch (e) {
            console.error('[IU] Create 压板注册失败 ' + row[0] + ': ' + e)
        }
    })

    console.info('[IU] 板材路线：余烬压印 8 种 / Create 压板 5 种 / IU 挤压机全通用')
})
