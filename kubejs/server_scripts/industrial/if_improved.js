// ============================================================
// 工业先锋（Industrial Foregoing）—— 改良电力时代第二阶段
// ============================================================
//
// 第一阶段（if_electric.js）只开到「简陋机器框架」这一层：
//   怜悯发电机 -> 简陋机器框架 -> 流体提取机 / 乳胶处理单元 / 溶解室
//
// 第二阶段把「基础机器框架」（machine_frame_simple）拿回本包的材料盘：
// IF 原配方是在溶解室里烧「塑料 + 简陋框架 + 下界砖 + 铁锭 + 金齿轮」，
// 材料与本时代脱节（下界砖把线拽去下界，铁锭又太低阶）。改成
// 304 板 + 镍铬板 + 简陋框架的手工配方后，基础框架恰好座落在
// 「不锈钢与镍铬已经量产」的改良电力时代，吃它的机器自然打开：
//   镭射钻 / 发酵站 / 水培床 / 植物肥料 / 生物探测器 / 海上捕捞机
//
// 高级框架（machine_frame/advanced）与完美框架仍是溶解室产物，
// 需要以太气体与下界合金，留给后面的时代，这里不动。
// ============================================================

ServerEvents.recipes(event => {
    var SIMPLE = '#industrialforegoing:machine_frame/simple'

    var fShaped = function (id, output, pattern, key, count) {
        event.remove({ id: id })
        event.shaped(Item.of(output, count || 1), pattern, key).id(id)
    }

    // ---- 1. 基础机器框架 ----
    // 原：溶解室内烧塑料 / 简陋框架 / 下界砖 / 铁锭 / 金齿轮。
    // 现在：简陋框架外面裹一圈 304 板与镍铬板，热端和耐蚀件都在 L2 手里。
    fShaped('industrialforegoing:simple_machine_frame',
        'industrialforegoing:machine_frame_simple',
        ['ABA', 'BMB', 'ABA'],
        {
            A: '#c:plates/stainlesssteel',
            B: '#c:plates/nichrome',
            M: '#industrialforegoing:machine_frame/pity'
        })

    // ---- 2. 镭射钻 ----
    // 原：塑料 + 钻石齿轮 + 金齿轮。塑料保留（一次性绝缘件），
    // 骨架换成 304，钻石齿轮留在原位——它是这条线唯一的高价件。
    fShaped('industrialforegoing:laser_drill',
        'industrialforegoing:laser_drill',
        ['AFA', 'BMB', 'GRG'],
        {
            A: '#c:plates/stainlesssteel',
            F: '#c:gears/diamond',
            B: 'minecraft:piston',
            M: SIMPLE,
            G: '#c:gears/gold',
            R: 'minecraft:redstone'
        })

    // ---- 3. 发酵站 ----
    fShaped('industrialforegoing:fermentation_station',
        'industrialforegoing:fermentation_station',
        ['AWA', 'WGW', 'AMA'],
        {
            A: '#c:plates/stainlesssteel',
            W: '#minecraft:logs',
            G: '#c:gears/gold',
            M: SIMPLE
        })

    // ---- 4. 水培床 ----
    fShaped('industrialforegoing:hydroponic_bed',
        'industrialforegoing:hydroponic_bed',
        ['ADA', 'SBS', 'GMG'],
        {
            A: '#c:plates/stainlesssteel',
            D: 'minecraft:dirt',
            S: 'minecraft:sugar_cane',
            B: 'industrialforegoing:fertilizer',
            G: '#c:gears/nichrome',
            M: SIMPLE
        })

    // ---- 5. 植物肥料（机器） ----
    fShaped('industrialforegoing:plant_fertilizer',
        'industrialforegoing:plant_fertilizer',
        ['ABA', 'LML', 'GRG'],
        {
            A: '#c:plates/stainlesssteel',
            B: 'minecraft:glass_bottle',
            L: 'minecraft:leather',
            M: SIMPLE,
            G: '#c:gears/iron',
            R: 'minecraft:redstone'
        })

    // ---- 6. 生物探测器 ----
    fShaped('industrialforegoing:mob_detector',
        'industrialforegoing:mob_detector',
        ['AAA', 'RCR', 'OMO'],
        {
            A: '#c:plates/stainlesssteel',
            R: 'minecraft:repeater',
            C: 'minecraft:comparator',
            O: 'minecraft:observer',
            M: SIMPLE
        })

    // ---- 7. 海上捕捞机 ----
    fShaped('industrialforegoing:marine_fisher',
        'industrialforegoing:marine_fisher',
        ['AFA', 'BMB', 'GRG'],
        {
            A: '#c:plates/stainlesssteel',
            F: 'minecraft:fishing_rod',
            B: 'minecraft:bucket',
            M: SIMPLE,
            G: '#c:gears/iron',
            R: 'minecraft:redstone'
        })

    console.info('[IF] 改良电力时代工业先锋已开：基础机器框架 / 镭射钻 / 发酵站 / 水培床 / 植物肥料 / 生物探测器 / 海上捕捞机')
})
