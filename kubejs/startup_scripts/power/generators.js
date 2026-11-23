// ============================================================
// 四台发电机（MMCR）—— 机器注册 + 场地机制（startup）
// ------------------------------------------------------------
//   水力发电机  sinkjourney:hydro_generator        水管进水
//   潮汐发电机  sinkjourney:tidal_generator        必须建在海边；涨潮时段功率翻倍
//   应力发电机  sinkjourney:stress_generator       只吃 Create 旋转应力
//   地磁发电机  sinkjourney:geomagnetic_generator  必须建在基岩层；红石励磁
//
// 数值全部在 kubejs/config/sinkpower/generators.json 里改（改完重启游戏）。
// 结构和配方：server_scripts/power/generators.js
// 摆法与机制说明：docs/GENERATORS.md
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

    // ---- 配置读取 ----
    // 注意：KubeJS 的类过滤把 java.nio.file.* 全挡了（Files、Path 都不给 loadClass），
    // 所以这里一个 Java 类都不加载，直接给 JsonIO.readString 一个字符串路径，
    // 由 KubeJS 自己做 String -> Path 的转换（和 research_core/core.js 同一套写法）。
    // JSON.parse 在 startup 里是可用的。

    // 缺字段就落回默认值，避免半份配置把机器弄哑
    var mergeCfg = (base, over) => {
        var out = {}
        var k
        for (k in base) {
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
            var text = readCfgText()
            var parsed
            try {
                parsed = JSON.parse(text)
            } catch (e) {
                parsed = JsonIO.parse(text)
            }
            return mergeCfg(DEFAULTS, parsed)
        } catch (err) {
            console.warn('[电力] 读不到 ' + CFG_PATH + '，改用脚本默认值：' + err)
            return DEFAULTS
        }
    }

    var CFG = loadCfg()

    // ---- 场地判定 ----
    // KubeJS 的类过滤随时可能挡掉某个类，这里一律"能拿到就用，拿不到就退化"，
    // 绝不让一个 loadClass 失败把整台机器的注册带死。
    var tryLoad = (name) => {
        try {
            return Java.loadClass(name)
        } catch (err) {
            console.warn('[电力] 类被过滤，机制退化：' + name)
            return null
        }
    }

    var TagKey = tryLoad('net.minecraft.tags.TagKey')
    var Registries = tryLoad('net.minecraft.core.registries.Registries')
    var RL = tryLoad('net.minecraft.resources.ResourceLocation')

    // 海边 = 生物群系属于给定的海洋 / 沙滩标签。判定出错时放行，宁可少机制也不要卡死机器。
    var seasideErrorLogged = false

    var isSeaside = (level, pos) => {
        if (!TagKey || !Registries || !RL) return true
        try {
            var biome = level.getBiome(pos)
            var tags = CFG.tidal.seaside_biome_tags
            for (var i = 0; i < tags.length; i++) {
                var key = TagKey.create(Registries.BIOME, RL.parse(String(tags[i])))
                if (biome.is(key)) return true
            }
            return false
        } catch (err) {
            if (!seasideErrorLogged) {
                seasideErrorLogged = true
                console.warn('[电力] 海边判定失败，本次运行按"在海边"处理：' + err)
            }
            return true
        }
    }

    // 涨潮 = dayTime 落在任一潮窗内（默认日出 0-2000、日落 11000-14000）
    var isHighTide = (level) => {
        var t = Number(level.getDayTime()) % 24000
        var windows = CFG.tidal.tide_windows
        for (var i = 0; i < windows.length; i++) {
            var w = windows[i]
            if (t >= Number(w[0]) && t < Number(w[1])) return true
        }
        return false
    }

    // ---- 改写本轮的产能：把配方里的能量输出需求换成当前功率 ----
    var EnergyRequirement = tryLoad('cn.howxu.mmcr.api.recipe.requirement.EnergyRequirement')
    var IOType = tryLoad('cn.howxu.mmcr.api.recipe.modifier.RecipeModifier$IOType')

    var setEnergyOutput = (ctx, fe) => {
        if (!EnergyRequirement || !IOType) return
        try {
            var rate = Math.max(1, Math.floor(Number(fe)))
            var reqs = ctx.requirements()
            var list = []
            for (var i = 0; i < reqs.size(); i++) {
                var r = reqs.get(i)
                if (String(r.type().id()) === 'neoforge:energy') continue
                list.push(r)
            }
            list.push(new EnergyRequirement(IOType.OUTPUT, rate))
            ctx.setRequirements(list)
        } catch (err) {
            console.warn('[电力] 改写产能失败（按配方默认值跑）：' + err)
        }
    }

    // ---- 附近玩家提示（同一台机器 10 秒内不重复）----
    var notifyAt = {}

    var notifyNear = (ctx, code, msg) => {
        try {
            var mc = ctx.machineContext()
            var level = mc.level()
            var pos = mc.controllerPos()
            var key = pos.toString() + '@' + code
            var now = Number(ctx.gameTime())
            if (notifyAt[key] !== undefined && now - notifyAt[key] < 200) return
            notifyAt[key] = now
            var players = level.players()
            for (var i = 0; i < players.size(); i++) {
                var p = players.get(i)
                var bp = p.blockPosition()
                var dx = bp.getX() - pos.getX()
                var dy = bp.getY() - pos.getY()
                var dz = bp.getZ() - pos.getZ()
                if (dx * dx + dy * dy + dz * dz > 400) continue
                p.tell(Text.of('§b[电力] §f' + msg))
            }
        } catch (e) { }
    }

    // ---- 注册 ----
    MMCREvents.startup(event => {
        event.createMachine('sinkjourney:hydro_generator')
            .displayNameKey('machine.sinkjourney.hydro_generator')
            .recipePool('sinkjourney:hydro_generator')
            .appearance('minecraft:copper_block')
            .register()

        event.createMachine('sinkjourney:tidal_generator')
            .displayNameKey('machine.sinkjourney.tidal_generator')
            .recipePool('sinkjourney:tidal_generator')
            .appearance('create:brass_casing')
            .recipeBehavior(behavior => {
                behavior.beforeStart(ctx => {
                    var mc = ctx.machineContext()
                    if (CFG.tidal.require_seaside && !isSeaside(mc.level(), mc.controllerPos())) {
                        ctx.cancel()
                        notifyNear(ctx, 'sea', '潮汐发电机拒绝开工：控制器不在海边（海洋 / 沙滩生物群系）')
                        return
                    }
                    setEnergyOutput(ctx, isHighTide(mc.level())
                        ? CFG.tidal.fe_per_tick_tide
                        : CFG.tidal.fe_per_tick_slack)
                })
            })
            .register()

        event.createMachine('sinkjourney:stress_generator')
            .displayNameKey('machine.sinkjourney.stress_generator')
            .recipePool('sinkjourney:stress_generator')
            .appearance('create:industrial_iron_block')
            .register()

        event.createMachine('sinkjourney:geomagnetic_generator')
            .displayNameKey('machine.sinkjourney.geomagnetic_generator')
            .recipePool('sinkjourney:geomagnetic_generator')
            .appearance('minecraft:lodestone')
            .recipeBehavior(behavior => {
                behavior.beforeStart(ctx => {
                    var mc = ctx.machineContext()
                    var y = mc.controllerPos().getY()
                    if (y > Number(CFG.geomagnetic.max_y)) {
                        ctx.cancel()
                        notifyNear(ctx, 'y', '地磁发电机拒绝开工：控制器必须位于基岩层（Y ≤ '
                            + Number(CFG.geomagnetic.max_y) + '），当前 Y = ' + y)
                    }
                })
            })
            .register()
    })
})()
