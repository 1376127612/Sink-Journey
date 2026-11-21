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
//
// 详细说明：kubejs/docs/BASIC_ELECTRIC_AGE.md
// ============================================================

ServerEvents.recipes(event => {
    var WAFER = 'industrialupgrade:crafting_elements/crafting_494_element'
    var MOTOR = 'industrialupgrade:crafting_elements/crafting_276_element'

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

    // ---- 3. 压印器 ----
    // 原：铁锭 / 活塞 / 铜锭
    aShaped('ae2:network/blocks/inscribers', 'ae2:inscriber',
        ['ABA', 'C A', 'ABA'],
        {
            A: '#c:ingots/steel',
            B: 'minecraft:piston',
            C: '#c:ingots/silver'
        })

    // ---- 4. 充能器 ----
    // 原：铁锭 / 铜锭
    aShaped('ae2:network/blocks/crystal_processing_charger', 'ae2:charger',
        ['ABA', 'A  ', 'ABA'],
        {
            A: '#c:plates/steel',
            B: '#c:ingots/silver'
        })

    // ---- 5. 能量接收器 ----
    // 原：铁锭 / 石英玻璃 / 铜锭
    aShaped('ae2:network/blocks/energy_energy_acceptor', 'ae2:energy_acceptor',
        ['ABA', 'BCB', 'ABA'],
        {
            A: '#c:plates/steel',
            B: 'ae2:quartz_glass',
            C: '#c:ingots/nickel'
        })

    // ---- 6. ME 驱动器 ----
    // 原：铁锭 / 工程处理器 / 福鲁伊克斯玻璃线缆
    aShaped('ae2:network/blocks/storage_drive', 'ae2:drive',
        ['ABA', 'C C', 'ABA'],
        {
            A: '#c:plates/steel',
            B: 'ae2:engineering_processor',
            C: 'ae2:fluix_glass_cable'
        })

    // ---- 7. ME 控制器 ----
    // 原：平滑天石 / 福鲁伊克斯水晶 / 工程处理器。
    // 中心换成 IU 电动机：没有电力工业就没有 ME 网络。
    aShaped('ae2:network/blocks/controller', 'ae2:controller',
        ['ABA', 'BMB', 'ABA'],
        {
            A: 'ae2:smooth_sky_stone_block',
            B: 'ae2:fluix_crystal',
            M: MOTOR
        })

    // ---- 8. ME 接口 ----
    // 原：铁锭 / 廉价玻璃 / 湮灭核心 / 成型核心
    aShaped('ae2:network/blocks/interfaces_interface', 'ae2:interface',
        ['ABA', 'C D', 'ABA'],
        {
            A: '#c:plates/steel',
            B: '#c:glass_blocks/cheap',
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
            B: 'ae2:fluix_glass_cable',
            C: 'ae2:quartz_glass',
            D: 'ae2:fluix_block'
        })

    console.info('[AE2] 电力时代 AE 已改：硅印刷片吃晶圆，石英炼硅捷径已封，机器改用 钢/银/铅/镍')
})
