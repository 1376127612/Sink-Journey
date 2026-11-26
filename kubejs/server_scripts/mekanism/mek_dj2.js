// ============================================================
// 通用机械 · 照 DJ2 的 Mekanism.zs 搬过来的配方
// ------------------------------------------------------------
// 原脚本：Divine Journey 2 / scripts/ModSpecific/Mekanism.zs（756 行）
// 形状、位置、相对成本一律照原样，只把 DJ2 那套材料换成本包有的东西：
//
//   DJ2                        →  本包
//   钢锭 thermalfoundation:352 →  #c:ingots/steel
//   板 immersiveengineering:2  →  #c:plates/steel
//   钢质机壳 basicblock:8      →  mekanism:steel_casing
//   注能锇锭                   →  kubejs:alloy_osmium_lumen_black
//   锇荧黑曜合金 osgloglas     →  kubejs:alloy_osmium_lumen_black
//   富集合金 enrichedalloy     →  mekanism:alloy_infused
//   红合金锭 ore:ingotRedAlloy →  enderio:redstone_alloy_ingot
//   充能合金（银）锭           →  enderio:energetic_alloy_ingot
//   强化胶 enriched_gum        →  enderio:conduit_binder
//   硅 item_material:68        →  enderio:silicon
//   八倍电容                   →  enderio:octadic_capacitor
//   强化储罐 block_tank:1      →  enderio:fluid_tank
//   玄钢块 block_alloy:6       →  enderio:dark_steel_block
//   石英催生仓                 →  ae2:quartz_growth_accelerator
//
// 每段注释后面的行号是 DJ2 原脚本里的位置，方便对着看。
// ============================================================

ServerEvents.recipes(event => {
    const STEEL = '#c:ingots/steel'
    const PLATE = '#c:plates/steel'
    const CASING = 'mekanism:steel_casing'
    const ALLOY = 'kubejs:alloy_osmium_lumen_black'
    const INFUSED = 'mekanism:alloy_infused'
    const REINFORCED = 'mekanism:alloy_reinforced'
    const ATOMIC = 'mekanism:alloy_atomic'
    const CIRCUIT = '#c:circuits/basic'
    const CIRCUIT2 = '#c:circuits/advanced'
    const CIRCUIT3 = '#c:circuits/elite'
    const CIRCUIT4 = '#c:circuits/ultimate'
    const RED = 'enderio:redstone_alloy_ingot'
    const ENERGETIC = 'enderio:energetic_alloy_ingot'
    const GUM = 'enderio:conduit_binder'

    const add = (id, out, count, pattern, keys) => {
        event.remove({ id: id })
        event.shaped(Item.of(out, count || 1), pattern, keys).id(id)
    }

    // Steel Casing（:9）钢棍四角 + 钢板四边 + 中心蒸汽机机身
    // DJ2 中心是注能锇锭；本包把中心换成蒸汽机机身，四角换成钢质棍，
    // 钢质机壳因此落在蒸汽线之后，合金留给第三段的电解分离机。
    event.remove({ id: 'mekanism:steel_casing' })
    event.shaped('mekanism:steel_casing', ['ABA', 'BCB', 'ABA'], {
        A: 'kubejs:steel_rod', B: PLATE, C: 'industrialupgrade:blockresource/steam_machine'
    }).id('mekanism:steel_casing')

    // Metallurgic Infuser（:13）铁皮三列 + 熔炉 + 钢质机壳，DJ2 是镜像型
    event.remove({ id: 'mekanism:metallurgic_infuser' })
    event.shaped('mekanism:metallurgic_infuser', ['FAF', 'FCF', 'FAF'], {
        F: PLATE, A: 'minecraft:furnace', C: CASING
    }).id('mekanism:metallurgic_infuser')

    // Enrichment Chamber（:17）红合金角 + 基础电路 + 两侧灌注合金 + 钢质机壳
    // DJ2 两侧是 AE 的晶体催生仓；本包 AE 排在通用机械后面，这里换成灌注合金，
    // 免得第一段机器要靠后一章的方块才能做。
    add('mekanism:enrichment_chamber', 'mekanism:enrichment_chamber', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: RED, B: CIRCUIT, C: INFUSED, D: CASING })

    // Crusher（:21）
    add('mekanism:crusher', 'mekanism:crusher', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: RED, B: CIRCUIT, C: PLATE, D: CASING })

    // Energized Smelter（:25）
    add('mekanism:energized_smelter', 'mekanism:energized_smelter', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: RED, B: CIRCUIT, C: 'minecraft:furnace', D: CASING })

    // Advanced Control Circuit（:29）
    add('mekanism:advanced_control_circuit', 'mekanism:advanced_control_circuit', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: ENERGETIC, B: INFUSED, C: 'mekanism:basic_control_circuit' })

    // Elite Control Circuit（:84）
    add('mekanism:elite_control_circuit', 'mekanism:elite_control_circuit', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: ENERGETIC, B: REINFORCED, C: 'mekanism:advanced_control_circuit' })

    // Ultimate Control Circuit（:88）DJ2 边角用「提升锭」，这里用原子合金与终极电路自洽
    add('mekanism:ultimate_control_circuit', 'mekanism:ultimate_control_circuit', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: ATOMIC, B: REINFORCED, C: 'mekanism:elite_control_circuit' })

    // Osmium Compressor（:33）强化胶角 + 高级电路 + 桶 + 钢质机壳
    add('mekanism:osmium_compressor', 'mekanism:osmium_compressor', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: GUM, B: CIRCUIT2, C: 'minecraft:bucket', D: CASING })

    // Precision Sawmill（:40）红合金角 + 基础电路 + 金刚石锯 + 钢质机壳
    add('mekanism:precision_sawmill', 'mekanism:precision_sawmill', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: RED, B: CIRCUIT, C: '#c:gems/diamond', D: CASING })

    // 工厂五台（:44-66）红合金角 + 基础电路 + 两台对应机器
    const FACTORY = {
        basic_smelting_factory: 'mekanism:energized_smelter',
        basic_enriching_factory: 'mekanism:enrichment_chamber',
        basic_crushing_factory: 'mekanism:crusher',
        basic_compressing_factory: 'mekanism:osmium_compressor',
        basic_infusing_factory: 'mekanism:metallurgic_infuser',
        basic_sawing_factory: 'mekanism:precision_sawmill'
    }
    for (const [out, machine] of Object.entries(FACTORY)) {
        add('mekanism:' + out, 'mekanism:' + out, 1,
            ['ABA', 'CDC', 'ABA'],
            { A: RED, B: CIRCUIT, C: machine, D: GUM })
    }

    // Electric Pump（:68）
    add('mekanism:electric_pump', 'mekanism:electric_pump', 1,
        ['ABA', 'CCC', 'DCD'],
        { A: CIRCUIT2, B: CASING, C: 'minecraft:bucket', D: STEEL })

    // Energy Tablet（:72）
    add('mekanism:energy_tablet', 'mekanism:energy_tablet', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: STEEL, B: INFUSED, C: ALLOY })

    // Chargepad（:76）
    add('mekanism:chargepad', 'mekanism:chargepad', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: 'minecraft:stone_pressure_plate', B: STEEL, C: 'mekanism:energy_tablet', D: PLATE })

    // Logistical Sorter（:80）
    add('mekanism:logistical_sorter', 'mekanism:logistical_sorter', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: STEEL, B: CIRCUIT, C: 'minecraft:piston', D: ALLOY })

    // 通用线缆四档（:100-114）6 / 3 / 3 / 3 根
    add('mekanism:basic_universal_cable', 'mekanism:basic_universal_cable', 6,
        ['ABA', 'CDC', 'ABA'],
        { A: PLATE, B: 'minecraft:redstone', C: ALLOY, D: PLATE })
    const CABLES = [
        ['advanced_universal_cable', 'mekanism:basic_universal_cable', RED],
        ['elite_universal_cable', 'mekanism:advanced_universal_cable', REINFORCED],
        ['ultimate_universal_cable', 'mekanism:elite_universal_cable', ATOMIC]
    ]
    for (const [tier, lower, alloy] of CABLES) {
        add('mekanism:' + tier, 'mekanism:' + tier, 3,
            ['ABA', 'CCC', 'ABA'],
            { A: RED, B: alloy, C: lower })
    }

    // 机械管道 / 加压管道 / 物流管道（:116-130、:195-200、:383-397）
    const TRANSPORT = [
        ['mechanical_pipe', 'minecraft:bucket'],
        ['pressurized_tube', PLATE],
        ['logistical_transporter', CIRCUIT]
    ]
    // 三档数组必须放在循环外：Rhino 会把循环体里的 const 提升到函数作用域，
    // 第二次迭代就会抛 redeclaration of var。
    const PIPE_TIERS = [
        ['advanced', 'basic', CIRCUIT2],
        ['elite', 'advanced', CIRCUIT3],
        ['ultimate', 'elite', CIRCUIT4]
    ]
    for (const [kind, filler] of TRANSPORT) {
        add('mekanism:basic_' + kind, 'mekanism:basic_' + kind, 6,
            ['ABA', 'BCB', 'ABA'],
            { A: PLATE, B: filler, C: PLATE })
        for (const [tier, lower, circuit] of PIPE_TIERS) {
            add('mekanism:' + tier + '_' + kind, 'mekanism:' + tier + '_' + kind, 3,
                ['ABA', 'CCC', 'ABA'],
                { A: PLATE, B: circuit, C: 'mekanism:' + lower + '_' + kind })
        }
    }

    // 能量立方四档（:147-166、:199-212）
    add('mekanism:basic_energy_cube', 'mekanism:basic_energy_cube', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: ALLOY, B: 'mekanism:energy_tablet', C: STEEL, D: PLATE })
    add('mekanism:advanced_energy_cube', 'mekanism:advanced_energy_cube', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: ENERGETIC, B: 'mekanism:energy_tablet', C: ALLOY, D: 'mekanism:basic_energy_cube' })
    add('mekanism:elite_energy_cube', 'mekanism:elite_energy_cube', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: REINFORCED, B: 'mekanism:energy_tablet', C: ENERGETIC, D: 'mekanism:advanced_energy_cube' })
    add('mekanism:ultimate_energy_cube', 'mekanism:ultimate_energy_cube', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: ATOMIC, B: 'mekanism:energy_tablet', C: REINFORCED, D: 'mekanism:elite_energy_cube' })

    // 流体储罐四档（:239-288）
    add('mekanism:basic_fluid_tank', 'mekanism:basic_fluid_tank', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: PLATE, B: STEEL, C: 'minecraft:bucket' })
    const TANKS = [
        ['advanced_fluid_tank', 'basic_fluid_tank', ALLOY],
        ['elite_fluid_tank', 'advanced_fluid_tank', REINFORCED],
        ['ultimate_fluid_tank', 'elite_fluid_tank', ATOMIC]
    ]
    for (const [tier, lower, ring] of TANKS) {
        add('mekanism:' + tier, 'mekanism:' + tier, 1,
            ['ABA', 'CDC', 'ABA'],
            { A: ring, B: PLATE, C: 'mekanism:' + lower, D: PLATE })
    }

    // 化学品储罐四档（:346-373）
    add('mekanism:basic_chemical_tank', 'mekanism:basic_chemical_tank', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: PLATE, B: 'mekanism:alloy_infused', C: 'mekanism:enriched_iron' })
    const CHEM_TANKS = [
        ['advanced_chemical_tank', 'basic_chemical_tank', ALLOY],
        ['elite_chemical_tank', 'advanced_chemical_tank', REINFORCED],
        ['ultimate_chemical_tank', 'elite_chemical_tank', ATOMIC]
    ]
    for (const [tier, lower, ring] of CHEM_TANKS) {
        add('mekanism:' + tier, 'mekanism:' + tier, 1,
            ['ABA', 'CDC', 'ABA'],
            { A: ring, B: PLATE, C: 'mekanism:' + lower, D: PLATE })
    }

    // 速度 / 能量 / 降噪升级（:304-317）
    add('mekanism:upgrade_speed', 'mekanism:upgrade_speed', 1,
        ['AAA', 'BCB', 'AAA'],
        { A: STEEL, B: INFUSED, C: 'mekanism:dust_osmium' })
    add('mekanism:upgrade_energy', 'mekanism:upgrade_energy', 1,
        ['AAA', 'BCB', 'AAA'],
        { A: STEEL, B: INFUSED, C: ALLOY })
    add('mekanism:upgrade_muffling', 'mekanism:upgrade_muffling', 1,
        ['AAA', 'BCB', 'AAA'],
        { A: STEEL, B: INFUSED, C: 'minecraft:note_block' })

    // 电解核心（:335）硅 + 红石合金 + 八倍电容，DJ2 原样
    add('mekanism:electrolytic_core', 'mekanism:electrolytic_core', 1,
        ['ABA', 'CDE', 'FAF'],
        {
            A: 'enderio:silicon',
            B: 'enderio:octadic_capacitor',
            C: 'enderio:redstone_alloy_ingot',
            D: 'enderio:dark_steel_ingot',
            E: '#c:ingots/iron',
            F: '#c:dusts/gold'
        })

    // 电解分离机（DJ2 :339）不放这里：它要吃锇莹黑合金，
    // 配方在 mek_osmium_alloy.js，属第三段门禁，免得两条 shaped 抢同一个 recipe id。

    // 动态储罐（:219）钢板 + 钢锭 + 富集合金
    add('mekanism:dynamic_tank', 'mekanism:dynamic_tank', 4,
        ['ABA', 'BCB', 'ABA'],
        { A: PLATE, B: STEEL, C: INFUSED })

    // 结构玻璃（:223）
    add('mekanism:structural_glass', 'mekanism:structural_glass', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: 'minecraft:glass', B: INFUSED, C: PLATE })

    // 化学结晶器 / 氧化机 / 压射室 / 溶解室 / 清洗机（:431-528）DJ2 的共通写法
    const CHEM = [
        ['chemical_crystallizer', 'minecraft:bucket', CIRCUIT2],
        ['chemical_oxidizer', 'minecraft:bucket', CIRCUIT2],
        ['chemical_injection_chamber', 'mekanism:enrichment_chamber', CIRCUIT2],
        ['chemical_dissolution_chamber', 'minecraft:bucket', CIRCUIT2],
        ['chemical_washer', 'minecraft:bucket', CIRCUIT2]
    ]
    for (const [out, middle, circuit] of CHEM) {
        add('mekanism:' + out, 'mekanism:' + out, 1,
            ['ABA', 'CDC', 'ABA'],
            { A: ALLOY, B: circuit, C: CASING, D: middle })
    }

    // 提纯仓（:407）、化学灌注器（:516）
    add('mekanism:purification_chamber', 'mekanism:purification_chamber', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: RED, B: CIRCUIT2, C: 'mekanism:enrichment_chamber', D: CASING })
    add('mekanism:chemical_infuser', 'mekanism:chemical_infuser', 1,
        ['ABA', 'CDC', 'ABA'],
        { A: ALLOY, B: CIRCUIT2, C: 'mekanism:steel_casing', D: 'mekanism:basic_chemical_tank' })

    // 感应外壳（:423）
    add('mekanism:induction_casing', 'mekanism:induction_casing', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: PLATE, B: STEEL, C: INFUSED })

    // 热力蒸馏方块（:411）
    add('mekanism:thermal_evaporation_block', 'mekanism:thermal_evaporation_block', 1,
        ['ABA', 'BCB', 'ABA'],
        { A: PLATE, B: 'mekanism:alloy_reinforced', C: INFUSED })

    // 数字型采矿机（:540）
    add('mekanism:digital_miner', 'mekanism:digital_miner', 1,
        ['ABA', 'CDC', 'EFE'],
        { A: CIRCUIT3, B: CASING, C: PLATE, D: 'mekanism:logistical_sorter', E: ALLOY, F: ENERGETIC })

    console.info('[MEK] DJ2 的通用机械配方已搬入：钢质机壳 / 三台主机 / 工厂六台 / 线缆管道四档 / 能量立方四档 / 储罐 / 升级 / 电解核心与分离机')
})
