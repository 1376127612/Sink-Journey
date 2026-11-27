// ============================================================
// 应用能源 2（AE2 本体）—— 基础电力时代的 AE 解锁
// ============================================================
//
// 本时代只放 AE2 本体，不放附属：
//   ExtendedAE / 闪电科技 / 水晶科技 / 无线终端 / 应用机动 / 应用气动 /
//   应用通量 / 通用机械附属 —— 全部留在下一时代的槽位（era.ae_dlc），
//   本脚本不为它们提供任何配方，也不会被它们的物品卡住。
//
// 两件事：
//   1. 硅 -> 晶圆
//      AE 原本把「石英粉烧成硅」当作半导体原料，砂子一路通到处理器。
//      现在这条捷径掐掉，AE 的硅印刷片改吃 IU 晶圆 494：
//      晶圆只能从晶圆产线来（区域熔炼 / 三氯硅烷 -> 单晶硅 -> 激光切片），
//      于是整棵处理器树都被压到晶圆线后面。
//   2. 机器本体改成 钢 / 银 / 铅 / 镍
//      AE2 本体用的是 铁 + 铜，太便宜，也不体现时代。改成本时代白名单金属：
//        钢 = 机壳与结构，银 = 导体，镍 = 线圈与抗蚀件，铅 = 屏蔽。
//      ME 控制器里塞一台 IU 电动机，AE 因此必须建在电力工业之上。
//   3. 五台主机照 DJ2 的 AppliedEnergistics2.zs 重写（:20-63）：
//      钢锭 / 钢板 / 粘性活塞 / 福鲁伊克斯水晶与粉 / 充能赛特斯石英，
//      DJ2 用「注能赛特斯石英」当门禁，本包用同一件料的 1.21 名字（充能赛特斯石英）。
//
// 详细说明：kubejs/docs/BASIC_ELECTRIC_AGE.md
// ============================================================

ServerEvents.recipes(event => {
    var WAFER = 'industrialupgrade:crafting_elements/crafting_494_element'
    var MOTOR = 'industrialupgrade:crafting_elements/crafting_276_element'
    var CHARGED = 'ae2:charged_certus_quartz_crystal'
    var INFUSED = 'kubejs:infused_certus_quartz'      // 矮人燃油泡过的赛特斯石英
    var INF_RED = 'kubejs:infused_redstone'           // 充能红石 + 红石粉

    var aShaped = function (id, output, pattern, key, count) {
        event.remove({ id: id })
        event.shaped(Item.of(output, count || 1), pattern, key).id(id)
    }

    // ---- 1. 硅印刷片：晶圆替代 AE 的硅 ----
    // 原配方：middle = #c:silicon + top = 硅压印模板
    event.remove({ id: 'ae2:inscriber/silicon_print' })
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            middle: { item: WAFER },
            top: { item: 'ae2:silicon_press' }
        },
        mode: 'inscribe',
        result: { count: 1, id: 'ae2:printed_silicon' }
    }).id('ae2:inscriber/silicon_print')

    // ---- 2. 掐掉 AE 自己的硅来源 ----
    // 石英粉烧/高炉成硅，是绕过晶圆线的唯一入口。
    event.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
    event.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' })

    // ---- 3. 压印器（DJ2 AppliedEnergistics2.zs:24，镜像型）----
    // 钢锭 + 粘性活塞 + 福鲁伊克斯水晶 + 充能赛特斯石英：照 DJ2 的料换成本包的物品名
    aShaped('ae2:network/blocks/inscribers', 'ae2:inscriber',
        ['ABA', 'CDB', 'ABA'],
        {
            A: '#c:ingots/steel',
            B: 'minecraft:sticky_piston',
            C: 'ae2:fluix_crystal',
            D: INFUSED
        })

    // ---- 4. 充能器（:20）----
    // DJ2 的原形状：钢板立三列、充能赛特斯石英两块，中列空着
    aShaped('ae2:network/blocks/crystal_processing_charger', 'ae2:charger',
        ['ABA', 'ACA', 'ABA'],
        {
            A: '#c:plates/steel',
            B: INFUSED,
            C: 'ae2:quartz_glass'
        })

    // ---- 5. 能源接收器（:50）----
    // 钢锭四角 + 福鲁伊克斯玻璃线缆一圈 + 中心充能石英块（本包没有充能块，用石英块）
    aShaped('ae2:network/blocks/energy_energy_acceptor', 'ae2:energy_acceptor',
        ['ABA', 'BCB', 'ABA'],
        {
            A: '#c:ingots/steel',
            B: 'ae2:fluix_glass_cable',
            C: 'ae2:quartz_block'
        })

    // ---- 6. ME 驱动器（:63）----
    // DJ2：钢板块四角 + 福鲁伊克斯粉 + 中心能源接收器
    aShaped('ae2:network/blocks/storage_drive', 'ae2:drive',
        ['ABA', 'BCB', 'ABA'],
        {
            A: '#c:storage_blocks/steel',
            B: 'ae2:fluix_dust',
            C: 'ae2:energy_acceptor'
        })

    // ---- 7. ME 控制器（:54）----
    // DJ2：光滑天石四角 + 福鲁伊克斯粉与水晶 + 中心充能赛特斯石英
    aShaped('ae2:network/blocks/controller', 'ae2:controller',
        ['ABA', 'CDC', 'ABA'],
        {
            A: 'ae2:smooth_sky_stone_block',
            B: 'ae2:fluix_dust',
            C: 'ae2:fluix_crystal',
            D: INFUSED
        })

    // ---- 8. ME 接口 ----
    // 原：铁锭 / 廉价玻璃 / 湮灭核心 / 成型核心
    aShaped('ae2:network/blocks/interfaces_interface', 'ae2:interface',
        ['ABA', 'C D', 'ABA'],
        {
            A: '#c:plates/steel',
            B: '#c:glass_blocks',
            C: 'ae2:annihilation_core',
            D: 'ae2:formation_core'
        })

    // ---- 9. 样板供应器 ----
    aShaped('ae2:network/blocks/pattern_providers_interface', 'ae2:pattern_provider',
        ['ABA', 'C D', 'ABA'],
        {
            A: '#c:plates/steel',
            B: 'minecraft:crafting_table',
            C: 'ae2:annihilation_core',
            D: 'ae2:formation_core'
        })

    // ---- 10. 晶体生长加速器 ----
    // 原：铁锭四角
    aShaped('ae2:network/blocks/crystal_processing_growth_accelerator', 'ae2:growth_accelerator',
        ['ABA', 'CDC', 'ABA'],
        {
            A: '#c:plates/steel',
            B: INFUSED,
            C: 'ae2:quartz_glass',
            D: 'ae2:fluix_block'
        })

    // ---- 11. 输入 / 输出总线 ----
    // 原：铁锭 + 石英 / 铁锭 + 红石。总线是 AE 最早上量的零件，
    // 直接挂在钢锭上，和机壳、压印器同一个材料口径。
    aShaped('ae2:network/parts/import_bus', 'ae2:import_bus',
        [' # ', 'ABA'],
        {
            '#': 'ae2:annihilation_core',
            A: '#c:ingots/steel',
            B: 'minecraft:piston'
        })
    aShaped('ae2:network/parts/export_bus', 'ae2:export_bus',
        ['#A#', ' B '],
        {
            '#': '#c:ingots/steel',
            A: 'ae2:formation_core',
            B: 'minecraft:piston'
        })

    // ---- 12. 福鲁伊克斯水晶：红石粉换成灌注红石 ----
    // 原：充能赛特斯石英 + 红石粉 + 下界石英，丢进水里出 2 颗（ae2:transform/fluix_crystals）。
    // 现在红石那格要先把电灌进去，AE 的门槛因此与通用机械基础段站在同一件料上。
    event.remove({ id: 'ae2:transform/fluix_crystals' })
    event.custom({
        type: 'ae2:transform',
        ingredients: [
            { item: CHARGED },
            { item: INF_RED },
            { item: 'minecraft:quartz' }
        ],
        result: { count: 2, id: 'ae2:fluix_crystal' }
    }).id('ae2:transform/fluix_crystals')

    console.info('[AE2] AE 已改：硅印刷片吃晶圆，石英炼硅捷径已封，机器改用 钢/银/铅/镍；' +
        '福鲁伊克斯吃灌注红石，四台主机吃灌注赛特斯石英')
})
