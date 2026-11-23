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
//
// 例外：简陋机器框架（machine_frame_pity）已经整条交给 KubeJS Studio，
//   Studio 用 ServerEvents.generateData 写虚拟数据包，这里再 remove + add
//   会把它的版本盖掉。详见下面「1. 简陋机器框架」的注释。
// ============================================================

ServerEvents.recipes(event => {
    var FRAME = '#industrialforegoing:machine_frame/pity'

    var fShaped = function (id, output, pattern, key, count) {
        event.remove({ id: id })
        event.shaped(Item.of(output, count || 1), pattern, key).id(id)
    }

    // ---- 1. 简陋机器框架 ----
    // 这条配方已交给 KubeJS Studio 管理：见
    // server_scripts/kubejsstudio/kubejsstudio.js 里
    // industrialforegoing:recipe/machine_frame_pity 的 generateData 覆盖。
    //
    // 这里不要再写 event.remove + event.shaped —— recipe 事件在数据包阶段
    // 之后执行，同一 id 再加一次会把 Studio 的版本盖掉，
    // 表现就是「Studio 里改了，进游戏却没生效」。

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
            G: '#c:storage_blocks/redstone',
            B: 'minecraft:bucket',
            M: FRAME,
            F: 'minecraft:furnace'
        })

    console.info('[IF] 电力时代工业先锋已改：怜悯发电机 / 流体提取机 / 乳胶处理单元改用钢板（机器框架由 KubeJS Studio 接管）')
})
