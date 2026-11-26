// ============================================================
// 工业先锋（Industrial Foregoing）—— 基础电力时代
// ============================================================
//
// 工业先锋在本包只开放到「简陋机器框架」这一层：
//   怜悯发电机 -> 简陋机器框架 -> 流体提取机 / 乳胶处理单元 / 溶解室
// 更高级的框架（简易 / 高级 / 完美）要塑料、下界合金与以太气体，
// 不在本时代范围内，配方保持原样，靠材料自然挡在后面。
//
// 改动只有一件事：把铁锭换成钢板。
//   IF 原本四台基础机器全是 c:ingots/iron，等于 Create 时代就能造，
//   与本时代「先用上电，再用上机器」的顺序不符。改成 c:plates/steel
//   之后，工业先锋整体座落在电力时代，并且和 IU 的钢板压力机同源。
//
// 齿轮（铁 / 金 / 钻石）已在 industrial/if_gears.js 改成 IU 冲压机产物，
// 这里不再动。
// ============================================================

ServerEvents.recipes(event => {
    var FRAME = '#industrialforegoing:machine_frame/pity'

    var fShaped = function (id, output, pattern, key, count) {
        event.remove({ id: id })
        event.shaped(Item.of(output, count || 1), pattern, key).id(id)
    }

    // ---- 1. 简陋机器框架 ----
    // 原：铁锭四角 + 铁块。现在四角是钢板，中心塞一台 IU 机身，
    // 于是 IF 的整条机器线都压在「蒸汽机机身」之后。
    fShaped('industrialforegoing:machine_frame_pity',
        'industrialforegoing:machine_frame_pity',
        ['WIW', 'IRI', 'WIW'],
        {
            I: '#c:plates/steel',
            R: 'industrialupgrade:blockresource/machine',
            W: '#minecraft:logs'
        })

    // ---- 2. 怜悯发电机 ----
    // 原：金锭 + 铁栏杆。把铁栏杆换成钢板，发电机才是电的东西。
    fShaped('industrialforegoing:pitiful_generator',
        'industrialforegoing:pitiful_generator',
        ['PDP', 'GMG', 'PFP'],
        {
            P: 'minecraft:cobblestone',
            D: '#c:ingots/gold',
            G: '#c:plates/steel',
            M: FRAME,
            F: 'minecraft:furnace'
        })

    // ---- 3. 流体提取机 ----
    fShaped('industrialforegoing:fluid_extractor',
        'industrialforegoing:fluid_extractor',
        ['IGI', 'CMC', 'IPI'],
        {
            I: '#c:plates/steel',
            G: 'minecraft:light_weighted_pressure_plate',
            C: '#c:cobblestones',
            M: FRAME,
            P: 'minecraft:piston'
        })

    // ---- 4. 乳胶处理单元 ----
    fShaped('industrialforegoing:latex_processing_unit',
        'industrialforegoing:latex_processing_unit',
        ['IGI', 'BMB', 'IFI'],
        {
            I: '#c:plates/steel',
            G: 'minecraft:redstone_block',
            B: 'minecraft:bucket',
            M: FRAME,
            F: 'minecraft:furnace'
        })

    console.info('[IF] 电力时代工业先锋已改：怜悯发电机 / 流体提取机 / 乳胶处理单元改用钢板（机器框架由 KubeJS Studio 接管）')
})
