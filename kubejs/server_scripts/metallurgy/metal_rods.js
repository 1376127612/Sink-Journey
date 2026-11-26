// 质棍（server）：2 锭 → 1 棍；Ad Astra 的铁棍 / 钢棍全线下架。
// 机器配方（切割机出棍、挤出机清空）在 kubejs/sjcore/rods.json，改完 /sjcore iu reload。

const RODS = {
    iron: { rod: 'kubejs:iron_rod', ingot: '#c:ingots/iron' },
    copper: { rod: 'kubejs:copper_rod', ingot: '#c:ingots/copper' },
    tin: { rod: 'kubejs:tin_rod', ingot: '#c:ingots/tin' },
    lead: { rod: 'kubejs:lead_rod', ingot: '#c:ingots/lead' },
    gold: { rod: 'kubejs:gold_rod', ingot: '#c:ingots/gold' },
    steel: { rod: 'kubejs:steel_rod', ingot: '#c:ingots/steel' },
    bronze: { rod: 'kubejs:bronze_rod', ingot: '#c:ingots/bronze' }
}

ServerEvents.tags('item', event => {
    for (const metal in RODS) {
        event.add('c:rods/' + metal, RODS[metal].rod)
    }
    event.remove('c:rods/iron', 'ad_astra:iron_rod')
    event.remove('c:rods/steel', 'ad_astra:steel_rod')
})

ServerEvents.recipes(event => {
    for (const metal in RODS) {
        event.shaped(Item.of(RODS[metal].rod), ['#', '#'], {
            '#': RODS[metal].ingot
        }).id('kubejs:metallurgy/' + metal + '_rod')
    }

    event.remove({ id: 'ad_astra:iron_rod' })
    event.remove({ id: 'ad_astra:steel_rod' })
    event.remove({ output: 'ad_astra:iron_rod' })
    event.remove({ output: 'ad_astra:steel_rod' })
    event.replaceInput({}, 'ad_astra:iron_rod', RODS.iron.rod)
    event.replaceInput({}, 'ad_astra:steel_rod', RODS.steel.rod)

    console.info('[ROD] 质棍：2 锭 → 1 棍；ad_astra:iron_rod / steel_rod 下架')
})
