// ============================================================
// 灌注红石 / 灌注赛特斯石英：两件中间物，与它们的第一道门
// ------------------------------------------------------------
// 本包锇来得晚，而通用机械的基础段原本要过锇：
//   基础电路 = 锇锭 + 红石 → 富集仓 / 通电冶炼炉 / 粉碎机 / 锇压缩机全卡在它上面。
// 现在基础段改吃「灌注红石」，锇只从第二段（锇压缩机 → 锇荧锭）开始出现。
//
//   灌注红石         IU 充能红石居中 + 8 撮红石粉围一圈 → 8
//   灌注赛特斯石英   余烬的矮人燃油 1000 mB 泡 8 颗赛特斯石英 → 8（Create 搅拌盆）
//   基础电路         灌注红石灌 20 mB 红石（原配方是锇锭）
//
// 三台基础机器与冶金灌注机的配方在 mek_dj2.js 里，四角/中列已换成灌注红石；
// 高级、精英、终极三段这一轮不动，等后面的关键物件定案再补。
// AE 侧见 ae2_core.js：福鲁伊克斯吃灌注红石，四台主机吃灌注赛特斯石英。
// 设计说明：kubejs/docs/INFUSED_REDSTONE_QUARTZ.md
// ============================================================

ServerEvents.recipes(event => {
    var INF_RED = 'kubejs:infused_redstone'
    var INF_QUARTZ = 'kubejs:infused_certus_quartz'

    // ---- 1. 灌注红石：充能红石当芯，红石粉围一圈 ----
    event.shaped('8x ' + INF_RED, ['RRR', 'RCR', 'RRR'], {
        R: 'minecraft:redstone',
        C: 'industrialupgrade:charged_redstone'
    }).id('kubejs:infused_redstone')

    // ---- 2. 灌注赛特斯石英：矮人燃油泡八颗 ----
    // DJ2 在 1.12 用「液体当合成材料」的工作台配方（8 颗石英 + 1000 mB 油）；
    // 1.21 没有这种写法，改成 Create 搅拌盆，比例照原样：1000 mB 兑 8 颗。
    event.recipes.create.mixing(
        '8x ' + INF_QUARTZ,
        ['8x ae2:certus_quartz_crystal', Fluid.of('embers:dwarven_oil', 1000)]
    ).id('kubejs:infused_certus_quartz')

    // ---- 3. 基础电路：锇锭换成灌注红石 ----
    // 原：锇锭 + 20 mB 红石（mekanism:control_circuit/basic）
    event.remove({ id: 'mekanism:control_circuit/basic' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemical_input: { amount: 20, tag: 'mekanism:redstone' },
        item_input: { count: 1, item: INF_RED },
        output: { count: 1, id: 'mekanism:basic_control_circuit' },
        per_tick_usage: false
    }).id('mekanism:control_circuit/basic')

    console.info('[MEK] 灌注红石：充能红石 + 8 红石粉 → 8；基础电路与基础三台改吃它，第一段不再要锇')
    console.info('[MEK] 灌注赛特斯石英：矮人燃油 1000 mB + 8 赛特斯石英 → 8（Create 搅拌盆）')
})

// ============================================================
// 第一块充能红石：末影龙掉落
// ------------------------------------------------------------
// 充能红石走 IU 的晶体充能器（电力时代那台，红石丢进去就出），
// 但开张那一步放在龙身上：击杀末影龙掉 1 块，玩家拿它先去把充能器与灌注红石这条链点起来。
// IU 自己的「水里丢红石 + 钋粉 + 琥珀金锭」是事件处理器里的硬编码，KubeJS 删不掉，
// 由 mods/sinkjourneycore 的 IuChargedRedstoneWaterMixin 关掉（见 kubejs/docs/INFUSED_REDSTONE_QUARTZ.md）。
// ============================================================
EntityEvents.death('minecraft:ender_dragon', event => {
    var entity = event.entity
    if (!entity) return
    var stack = Item.of('industrialupgrade:charged_redstone', 1)
    try {
        var level = entity.level
        var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')
        level.addFreshEntity(new ItemEntity(level, entity.x, entity.y + 1.0, entity.z, stack))
        console.info('[MEK] 末影龙掉落：充能红石 ×1')
    } catch (err) {
        try {
            entity.block.popItem(stack)
        } catch (err2) {
            try {
                if (event.source && event.source.player) event.source.player.give(stack)
            } catch (err3) {
                console.error('[MEK] 充能红石掉落失败：' + err3)
            }
        }
    }
})
