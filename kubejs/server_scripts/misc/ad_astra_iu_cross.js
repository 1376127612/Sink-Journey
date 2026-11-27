// ============================================================
// Ad Astra × 工业升级：太空部分交叉魔改
// ============================================================
// 两条太空线原来各走各的：Ad Astra 管载人（火箭、行星、氧气），
// IU 管无人（装配机、发射台、研究台、太空模块）。这里让它们互相吃对方的件，
// 谁也不能单干。每条改动都有实体理由，不为了交叉而交叉：
//
//   Ad Astra → IU
//     * 火箭装配台吃戴斯贮箱：戴斯是耐热合金，IU 自己不炼戴斯，贮箱只做一种；
//     * IU 发射台吃 Ad Astra 钢贮箱：同一套承压件，燃料罐不必再造一套；
//     * 太空模块吃真星球料：太阳能模块吃掉 Ad Astra 的电池板（戴斯框 + 光伏片），
//       耐热模块吃戴斯板，耐寒模块吃冰晶 —— 模块本来就是为天体环境做的。
//
//   IU → Ad Astra
//     * 发射台台面铺 IU 的 304 不锈钢板：尾焰冲刷的台面不能是普通钢；
//     * 炼油厂塔体用 304 不锈钢板：含硫原油的塔器在包内只有这一种材料；
//     * 二阶火箭的两块钛块（见 ad_astra_l2.js）已经是 IU 的承压钛。
//
// 改法：IU 的机器是 industrialupgrade:shaped_recipe，删掉原 id 再按原 type 写回，
// 配方 id 一律不动（进度、JEI、解锁都挂在 id 上）。Ad Astra 的两条是 crafting_shaped，同样写回。
// 口径与阶数表见 kubejs/docs/SPACE_IU_ADASTRA_PLAN.md §8。
// ============================================================

ServerEvents.recipes(event => {
    const iu = (id, key, pattern, result) => event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        key: key,
        pattern: pattern,
        result: { count: 1, id: result },
        show_notification: false
    }).id(id)

    // ---------- Ad Astra → IU ----------

    // 火箭装配台：戴斯贮箱两只（原来只有高级机壳 + 改良电机 + 元件）
    event.remove({ id: 'industrialupgrade:industrialupgrade_2199' })
    iu('industrialupgrade:industrialupgrade_2199', {
        A: { item: 'industrialupgrade:blockresource/advanced_machine' },
        B: { item: 'industrialupgrade:motors_with_improved_bearings_' },
        C: { item: 'industrialupgrade:crafting_elements/crafting_684_element' },
        E: { item: 'industrialupgrade:crafting_elements/crafting_243_element' },
        H: { item: 'industrialupgrade:crafting_elements/crafting_52_element' },
        D: { item: 'ad_astra:desh_tank' }
    }, ['DHD', 'CAE', ' B '], 'industrialupgrade:basemachine3/rocket_assembler')

    // IU 火箭发射台：两只 Ad Astra 钢贮箱做燃料罐
    event.remove({ id: 'industrialupgrade:industrialupgrade_2202' })
    iu('industrialupgrade:industrialupgrade_2202', {
        A: { item: 'industrialupgrade:blockresource/advanced_machine' },
        B: { item: 'industrialupgrade:motors_with_improved_bearings_' },
        C: { item: 'industrialupgrade:crafting_elements/crafting_684_element' },
        E: { item: 'industrialupgrade:crafting_elements/crafting_680_element' },
        D: { item: 'ad_astra:steel_tank' }
    }, ['D D', 'CAE', ' B '], 'industrialupgrade:basemachine3/rocket_launch_pad')

    // 太空模块：太阳能 —— 两片 Ad Astra 光伏电池板
    event.remove({ id: 'industrialupgrade:industrialupgrade_2098' })
    iu('industrialupgrade:industrialupgrade_2098', {
        A: { item: 'industrialupgrade:spaceupgrademodule_schedule' },
        B: { tag: 'c:plates/woods' },
        C: { tag: 'c:plates/berylliumbronze' },
        E: { tag: 'c:plates/nitenol' },
        S: { item: 'ad_astra:solar_panel' }
    }, [' B ', 'CAC', 'SES'], 'industrialupgrade:spaceupgrademodules/space_upgrademodule')

    // 太空模块：耐热 —— 两块戴斯板
    event.remove({ id: 'industrialupgrade:industrialupgrade_2096' })
    iu('industrialupgrade:industrialupgrade_2096', {
        A: { item: 'industrialupgrade:spaceupgrademodule_schedule' },
        B: { item: 'industrialupgrade:itemplates/adamantium' },
        C: { tag: 'c:plates/redbrass' },
        E: { tag: 'c:plates/palladium' },
        D: { item: 'ad_astra:desh_plate' }
    }, [' B ', 'CAC', 'DED'], 'industrialupgrade:spaceupgrademodules/space_upgrademodule1')

    // 太空模块：耐寒 —— 两块冰晶（月面与火星的冰晶矿）
    event.remove({ id: 'industrialupgrade:industrialupgrade_2097' })
    iu('industrialupgrade:industrialupgrade_2097', {
        A: { item: 'industrialupgrade:spaceupgrademodule_schedule' },
        B: { tag: 'c:plates/hafniumcarbide' },
        C: { tag: 'c:plates/osmiridium' },
        E: { tag: 'c:plates/niobiumtitanium' },
        D: { item: 'ad_astra:ice_shard' }
    }, [' B ', 'CAC', 'DED'], 'industrialupgrade:spaceupgrademodules/space_upgrademodule2')

    console.info('[太空交叉] IU 装配台与发射台改用 Ad Astra 贮箱；太阳能 / 耐热 / 耐寒模块改吃电池板 / 戴斯板 / 冰晶')

    // ---------- IU → Ad Astra ----------

    // 发射台台面：四块钢、三根钢棍，加两块 304 不锈钢（本包 c:plates/stainlesssteel）
    event.remove({ id: 'ad_astra:launch_pad' })
    event.shaped('ad_astra:launch_pad', [
        '#|#',
        '|#|',
        'N#N'
    ], {
        '#': { tag: 'ad_astra:steel_plates' },
        '|': { tag: 'ad_astra:steel_rods' },
        N: { tag: 'c:plates/stainlesssteel' }
    }).id('ad_astra:launch_pad')

    // 炼油厂塔体：六块钢的四面各留两块给 304
    event.remove({ id: 'ad_astra:fuel_refinery' })
    event.shaped('ad_astra:fuel_refinery', [
        '#N#',
        'BFB',
        '#N#'
    ], {
        '#': { tag: 'ad_astra:steel_plates' },
        N: { tag: 'c:plates/stainlesssteel' },
        B: { item: 'minecraft:bucket' },
        F: { item: 'minecraft:furnace' }
    }).id('ad_astra:fuel_refinery')

    console.info('[太空交叉] Ad Astra 发射台与炼油厂改用本包 304 不锈钢板')
})
