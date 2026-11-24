// ============================================================
// 四台发电机 —— 结构与配方
// ------------------------------------------------------------
// 控制器一律在南墙中层，东墙中层是能量输出仓，输入口按燃料放另外三面：
//
//   水力   3×3×3 铜壳      北墙 流体输入（水）
//   潮汐   3×3×4 黄铜壳    北墙 流体输入（水）+ 西墙 应力接口（潮汐轮）
//   应力   3×3×3 工业铁壳  北墙 应力接口
//   地磁   3×3×5 基础机壳  北墙 物品输入（红石）；腔内正中必须是磁石
//
// 数值全部来自 kubejs/config/sinkpower/generators.json（改完 /reload 生效）。
// 场地机制（海边 / 潮窗 / 基岩层）写在 startup_scripts/power/generators.js，
// 改那两类条件要重启游戏。
// ============================================================

(function () {
    var CFG_PATH = 'kubejs/config/sinkpower/generators.json'

    var DEFAULTS = {
        hydro: { water_mb: 250, fe_per_tick: 96 },
        tidal: {
            water_mb: 600,
            stress: 16,
            min_rpm: 32,
            fe_per_tick_tide: 384,
            fe_per_tick_slack: 128,
            require_seaside: true,
            seaside_biome_tags: ['minecraft:is_ocean', 'minecraft:is_beach'],
            tide_windows: [[0, 2000], [11000, 14000]]
        },
        stress: { stress: 32, min_rpm: 64, fe_per_tick: 448 },
        geomagnetic: { redstone: 1, fe_per_tick: 640, max_y: -56 }
    }

    var mergeCfg = (base, over) => {
        var out = {}
        for (var k in base) {
            if (!Object.prototype.hasOwnProperty.call(base, k)) continue
            if (over && Object.prototype.hasOwnProperty.call(over, k) && over[k] !== null && over[k] !== undefined) {
                if (typeof base[k] === 'object' && !Array.isArray(base[k]) && typeof over[k] === 'object' && !Array.isArray(over[k])) {
                    out[k] = mergeCfg(base[k], over[k])
                } else {
                    out[k] = over[k]
                }
            } else {
                out[k] = base[k]
            }
        }
        return out
    }

    var readCfgText = () => String(JsonIO.readString(CFG_PATH))

    var loadCfg = () => {
        try {
            return mergeCfg(DEFAULTS, JSON.parse(readCfgText()))
        } catch (err) {
            console.warn('[电力] 读不到 ' + CFG_PATH + '，改用脚本默认值：' + err)
            return DEFAULTS
        }
    }

    var CFG = loadCfg()

    // 一轮 40 tick = 2 秒：燃料按轮消耗，功率按 tick 输出
    var TICK = 40

    MMCREvents.server(event => {
        var api = event.getAPI()

        // ---- 水力发电机：3×3×3，北面进水，东面出电 ----
        event.createStructure('sinkjourney:hydro_generator')
            .pattern(['XXX', 'XXX', 'XXX'])
            .pattern(['XFX', 'XAE', 'XCX'])
            .pattern(['XXX', 'XXX', 'XXX'])
            .set('X', api.block('create:copper_casing'))
            .set('F', 'mmcr:fluid_input_hatch_kinetic')
            .set('E', api.anyOfEnergyOutput())
            .set('A', api.air())
            .controller('C')
            .build()

        // ---- 潮汐发电机：3×3×4，北面进水、西面接轴、东面出电 ----
        event.createStructure('sinkjourney:tidal_generator')
            .pattern(['XXX', 'XXX', 'XXX'])
            .pattern(['XFX', 'XAE', 'XCX'])
            .pattern(['XXX', 'SAX', 'XXX'])
            .pattern(['XXX', 'XXX', 'XXX'])
            .set('X', api.block('create:brass_casing'))
            .set('F', 'mmcr:fluid_input_hatch_kinetic')
            .set('S', api.anyStressInput())
            .set('E', api.anyOfEnergyOutput())
            .set('A', api.air())
            .controller('C')
            .build()

        // ---- 应力发电机：3×3×3，北面接轴，东面出电 ----
        event.createStructure('sinkjourney:stress_generator')
            .pattern(['XXX', 'XXX', 'XXX'])
            .pattern(['XSX', 'XAE', 'XCX'])
            .pattern(['XXX', 'XXX', 'XXX'])
            .set('X', api.block('create:industrial_iron_block'))
            .set('S', api.anyStressInput())
            .set('E', api.anyOfEnergyOutput())
            .set('A', api.air())
            .controller('C')
            .build()

        // ---- 地磁发电机：3×3×5，腔内磁石作场源，北面投红石，东面出电 ----
        event.createStructure('sinkjourney:geomagnetic_generator')
            .pattern(['XXX', 'XXX', 'XXX'])
            .pattern(['XIX', 'XMX', 'XXX'])
            .pattern(['XXX', 'XAE', 'XCX'])
            .pattern(['XXX', 'XAX', 'XXX'])
            .pattern(['XXX', 'XXX', 'XXX'])
            .set('X', api.block('mmcr:basic_casing'))
            .set('I', 'mmcr:item_input_bus_kinetic')
            .set('M', api.block('minecraft:lodestone'))
            .set('E', api.anyOfEnergyOutput())
            .set('A', api.air())
            .controller('C')
            .build()
    })

    ServerEvents.recipes(event => {
        // ---- 控制器 ----

        // 水力：铜壳 + 钢板，中间压一台水车
        event.shaped('mmcr:hydro_generator_controller', [
            'CSC',
            'SWS',
            'CSC'
        ], {
            C: 'create:copper_casing',
            S: '#c:plates/steel',
            W: 'create:water_wheel'
        }).id('kubejs:sink_power/hydro_generator_controller')

        // 潮汐：黄铜壳 + 钢板，中间一颗海晶灯当潮位标
        event.shaped('mmcr:tidal_generator_controller', [
            'BSB',
            'SWS',
            'BSB'
        ], {
            B: 'create:brass_casing',
            S: '#c:plates/steel',
            W: 'minecraft:sea_lantern'
        }).id('kubejs:sink_power/tidal_generator_controller')

        // 应力：工业铁块 + 银导体，中间一台精密构件
        event.shaped('mmcr:stress_generator_controller', [
            'ISI',
            'SMS',
            'ISI'
        ], {
            I: 'create:industrial_iron_block',
            S: '#c:ingots/silver',
            M: 'create:precision_mechanism'
        }).id('kubejs:sink_power/stress_generator_controller')

        // 地磁：镍板 + 银板，中间一块磁石（磁石核心同样是结构里的那格磁石）
        event.shaped('mmcr:geomagnetic_generator_controller', [
            'NSN',
            'SMS',
            'NSN'
        ], {
            N: '#c:plates/nickel',
            S: '#c:plates/silver',
            M: 'minecraft:lodestone'
        }).id('kubejs:sink_power/geomagnetic_generator_controller')

        // ---- 发电配方 ----

        // 水力：水 -> FE
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:hydro_generator',
            tick_time: TICK,
            requirements: [
                {
                    type: 'minecraft:fluid', io: 'input',
                    fluid: { fluid: 'minecraft:water' }, amount: Number(CFG.hydro.water_mb)
                },
                { type: 'neoforge:energy', io: 'output', fe_per_tick: Number(CFG.hydro.fe_per_tick) }
            ]
        }).id('kubejs:power/hydro_generator')

        // 潮汐：水 + 应力 -> FE。这里的功率是"平潮"值，涨潮由 startup 的
        // beforeStart 在每轮开工时改成 fe_per_tick_tide。
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:tidal_generator',
            tick_time: TICK,
            requirements: [
                {
                    type: 'minecraft:fluid', io: 'input',
                    fluid: { fluid: 'minecraft:water' }, amount: Number(CFG.tidal.water_mb)
                },
                {
                    type: 'create:stress', io: 'input',
                    stress: Number(CFG.tidal.stress), min_rpm: Number(CFG.tidal.min_rpm)
                },
                { type: 'neoforge:energy', io: 'output', fe_per_tick: Number(CFG.tidal.fe_per_tick_slack) }
            ]
        }).id('kubejs:power/tidal_generator')

        // 应力：旋转应力 -> FE
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:stress_generator',
            tick_time: TICK,
            requirements: [
                {
                    type: 'create:stress', io: 'input',
                    stress: Number(CFG.stress.stress), min_rpm: Number(CFG.stress.min_rpm)
                },
                { type: 'neoforge:energy', io: 'output', fe_per_tick: Number(CFG.stress.fe_per_tick) }
            ]
        }).id('kubejs:power/stress_generator')

        // 地磁：红石 -> FE（Y 位置由 startup 判定）
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'sinkjourney:geomagnetic_generator',
            tick_time: TICK,
            requirements: [
                {
                    type: 'minecraft:item', io: 'input',
                    item: { item: 'minecraft:redstone' }, count: Number(CFG.geomagnetic.redstone)
                },
                { type: 'neoforge:energy', io: 'output', fe_per_tick: Number(CFG.geomagnetic.fe_per_tick) }
            ]
        }).id('kubejs:power/geomagnetic_generator')

        console.info('[电力] 四台发电机已装载：水力 ' + Number(CFG.hydro.fe_per_tick)
            + ' / 潮汐 ' + Number(CFG.tidal.fe_per_tick_slack) + '-' + Number(CFG.tidal.fe_per_tick_tide)
            + ' / 应力 ' + Number(CFG.stress.fe_per_tick)
            + ' / 地磁 ' + Number(CFG.geomagnetic.fe_per_tick) + ' FE/t')
    })
})()
