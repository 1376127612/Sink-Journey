// ============================================================
// 溯洄研究系统 —— 研究站机器注册（startup）
// 位置：kubejs/startup_scripts/research_core/station_startup.js
// ------------------------------------------------------------
// 注意：本文件只在**游戏启动**时加载，/reload 不会重载它。
// 说明：KubeJS 的 JsonIO.parse 返回 Java JsonElement，不能直接 .pages 取值，
//       这里用 Gson 解析后自己转成纯 JS 对象。
// ============================================================

var SR_STATION_ID = 'sinkjourney:research_station'
var SR_STATION_POOL = 'sinkjourney:research_station'
var SR_CFG_DIR = 'kubejs/config/sinkresearch/'
var SR_UNLOCK_KEY = 'sinkresearch.unlocks'

// ---- JSON 读取（Gson -> 纯 JS） ------------------------------

var srToJs = (el) => {
    if (!el) return null
    try {
        if (el.isJsonArray()) {
            var out = []
            var arr = el.getAsJsonArray()
            for (var i = 0; i < arr.size(); i++) out.push(srToJs(arr.get(i)))
            return out
        }
        if (el.isJsonObject()) {
            var out = {}
            var obj = el.getAsJsonObject()
            var it = obj.entrySet().iterator()
            while (it.hasNext()) {
                var entry = it.next()
                out[String(entry.getKey())] = srToJs(entry.getValue())
            }
            return out
        }
        if (el.isJsonPrimitive()) {
            var p = el.getAsJsonPrimitive()
            if (p.isBoolean()) return p.getAsBoolean()
            if (p.isNumber()) return p.getAsDouble()
            return p.getAsString()
        }
        return null
    } catch (err) {
        return null
    }
}

var srReadJson = (rel) => {
    var path = SR_CFG_DIR + rel

    var text = ''
    try {
        text = String(JsonIO.readString(path))
    } catch (err) {
        try {
            var Path = Java.loadClass('java.nio.file.Path')
            text = String(JsonIO.readString(Path.of(path)))
        } catch (err2) {
            console.error('[SR] 读取失败 ' + path + ' -> ' + err + ' / ' + err2)
            return null
        }
    }

    try {
        var obj = JSON.parse(text)
        if (obj) return obj
    } catch (err) {
        console.warn('[SR] JSON.parse 失败(' + path + ', len=' + text.length + ')，改用 Gson: ' + err)
    }

    try {
        var Parser = Java.loadClass('com.google.gson.JsonParser')
        try {
            return srToJs(Parser.parseString(text))
        } catch (err) {
            return srToJs(new Parser().parse(text))
        }
    } catch (err) {
        console.error('[SR] Gson 解析失败 ' + path + ' -> ' + err)
        return null
    }
}

// ---- 启动时读一次节点配置（只读缓存） ------------------------

// 网络参数（可热改，重启生效）
// net_ttl_ms：网络中心心跳超过这么久就当离线（中心被拆/区块卸载后状态条目还会留着，
// 不判离线会让研究站在断网状态下继续跑）。
var srNetCfg = {
    require_network: true,
    default_capacity: 1,
    job_ttl_ms: 10000,
    search_radius: 16,
    net_ttl_ms: 15000
}

var srLoadNetCfg = () => {
    try {
        var cfg = srReadJson('network.json')
        if (cfg) {
            if (cfg.require_network !== undefined) srNetCfg.require_network = !!cfg.require_network
            if (cfg.default_capacity !== undefined) srNetCfg.default_capacity = Number(cfg.default_capacity) || 1
            if (cfg.job_ttl_ms !== undefined) srNetCfg.job_ttl_ms = Number(cfg.job_ttl_ms) || 10000
            if (cfg.search_radius !== undefined) srNetCfg.search_radius = Number(cfg.search_radius) || 16
            if (cfg.net_ttl_ms !== undefined) srNetCfg.net_ttl_ms = Number(cfg.net_ttl_ms) || 15000
        }
    } catch (e) {
        console.warn('[SR] 读取 network.json 失败，使用默认值: ' + e)
    }
}

var srNodesById = {}

var srLoadNodeCache = () => {
    try {
        var manifest = srReadJson('manifest.json')
        var pages = (manifest && manifest.pages) ? manifest.pages : []
        for (var i = 0; i < pages.length; i++) {
            var data = srReadJson(String(pages[i]))
            if (!data) continue
            var nodes = data.nodes || []
            for (var k = 0; k < nodes.length; k++) {
                var node = nodes[k]
                srNodesById[String(node.id)] = {
                    id: String(node.id),
                    kind: node.kind,
                    duration: Number(node.duration) || 200,
                    unlock: node.unlock || [],
                    requires: node.requires || { and: [] },
                    inputs: node.inputs || {},
                    recipe_id: node.recipe_id ? String(node.recipe_id) : null
                }
            }
        }
        console.info('[SR] 启动缓存节点 ' + Object.keys(srNodesById).length + ' 个')
    } catch (err) {
        console.error('[SR] 启动读取节点配置失败: ' + err)
    }
}

srLoadNodeCache()
srLoadNetCfg()

// ---- 运行时读解锁集合（服务端权威，来自 persistentData） -------

var srReadUnlocks = (server) => {
    var set = {}
    if (!server) return set
    try {
        var raw = String(server.persistentData.getString(SR_UNLOCK_KEY) || '')
        if (raw.length > 0) {
            var parts = raw.split(',')
            for (var i = 0; i < parts.length; i++) if (parts[i].length > 0) set[parts[i]] = true
        }
    } catch (err) {
        console.warn('[SR] 读取解锁集合失败（本次不做门槛判定）: ' + err)
    }
    return set
}

var srServerOf = (ctx) => {
    try {
        var level = ctx.machineContext().level()
        if (level.server) return level.server
        if (level.getServer) return level.getServer()
    } catch (err) {
        // 上下文不可用 -> 返回 null，调用方降级为"不拦截"
    }
    return null
}

var srNodeDone = (nodeId, unlocks) => {
    var node = srNodesById[nodeId]
    if (!node) return false
    var keys = node.unlock || []
    if (keys.length === 0) return true
    for (var i = 0; i < keys.length; i++) if (unlocks[String(keys[i])]) return true
    return false
}

var srRequirementsMet = (node, unlocks) => {
    var req = node.requires || {}
    var op = req.or ? 'or' : 'and'
    var children = req.or || req.and || []
    if (children.length === 0) return true
    if (op === 'or') {
        for (var i = 0; i < children.length; i++) if (srNodeDone(String(children[i]), unlocks)) return true
        return false
    }
    for (var i = 0; i < children.length; i++) if (!srNodeDone(String(children[i]), unlocks)) return false
    return true
}

// 网络查询：读 network.js 维护的 persistentData，找 search_radius 格内最近的**在线**中心。
// 心跳（ts）超过 net_ttl_ms 视为离线——中心被拆/区块卸载后，状态条目可能还留着，
// 拿它当"有网络"会让研究站在断网状态下继续跑。
// 返回 { token, compute, capacity, stations } 或 null。
var srNet = (server, pos, dim) => {
    if (!server || !pos) return null
    var best = null
    var radius = Number(srNetCfg.search_radius) || 16
    var bestD = radius * radius
    var now = Date.now()
    try {
        var raw = String(server.persistentData.getString('sinkresearch.net.index') || '')
        if (raw.length === 0) return null
        var list = raw.split(';')
        for (var i = 0; i < list.length; i++) {
            // token 形如 "minecraft:overworld@12_64_-30"
            var token = String(list[i])
            if (token.length === 0) continue
            var tokDim = 'minecraft:overworld'
            var coords = token
            var at = token.indexOf('@')
            if (at >= 0) {
                tokDim = token.substring(0, at)
                coords = token.substring(at + 1)
            }
            if (dim && String(dim) !== tokDim) continue
            var p = coords.split('_')
            if (p.length < 3) continue
            var dx = Number(p[0]) - pos.getX()
            var dy = Number(p[1]) - pos.getY()
            var dz = Number(p[2]) - pos.getZ()
            var d = dx * dx + dy * dy + dz * dz
            if (d > bestD) continue
            var state = ''
            try { state = String(server.persistentData.getString('sinkresearch.net.' + token) || '') } catch (e) { continue }
            if (state.length === 0) continue
            var info = null
            try { info = JSON.parse(state) } catch (e) { continue }
            if (!info) continue
            if (now - (Number(info.ts) || 0) > srNetCfg.net_ttl_ms) continue
            bestD = d
            best = {
                token: token,
                compute: Number(info.compute) || 0,
                capacity: Number(info.capacity) || 0,
                stations: Number(info.stations) || 0
            }
        }
    } catch (e) { }
    return best
}

// 速率：f(已解锁时代数, 并行, 网络算力)。P3.2 再接入供电与等级。
var srSpeedFactor = (ctx, unlocks) => {
    var eras = 0
    for (var key in unlocks) if (key.indexOf('era.') === 0) eras++
    var factor = 1.0 - 0.10 * Math.min(eras, 5)

    var parallel = 1
    try { parallel = Number(ctx.parallelism()) || 1 } catch (err) { parallel = 1 }
    factor = factor * (1 + 0.03 * Math.min(parallel, 8))

    // 网络算力：线性收益 + 20 点封顶（边际递减）
    var compute = 0
    try {
        var mc = ctx.machineContext()
        var dim = ''
        try { dim = String(mc.level().dimension) } catch (e) { dim = '' }
        var net = srNet(srServerOf(ctx), mc.controllerPos(), dim)
        compute = net ? net.compute : 0
    } catch (err) { compute = 0 }
    factor = factor / (1 + 0.15 * Math.min(compute, 20))

    return Math.max(0.25, Math.min(1.0, factor))
}

var srNodeByRecipeId = (recipeId) => {
    for (var id in srNodesById) {
        if (srNodesById[id].recipe_id === recipeId) return srNodesById[id]
    }
    return null
}

// ---- 网络状态与并发（P3.2） ----------------------------------

var srJobsKey = (token) => 'sinkresearch.jobs.' + token

var srReadJobs = (server, token) => {
    try {
        var raw = String(server.persistentData.getString(srJobsKey(token)) || '')
        if (raw.length === 0) return {}
        var obj = JSON.parse(raw)
        return obj ? obj : {}
    } catch (e) {
        return {}
    }
}

var srWriteJobs = (server, token, jobs) => {
    try { server.persistentData.putString(srJobsKey(token), JSON.stringify(jobs)) } catch (e) { }
}

// 占位记录有两种形状：老存档是数字（时间戳），新版是 { ts, node }。
// 带 node 是为了让终端能显示"正在跑哪条研究"，只存时间戳做不到这一点。
var srJobsEntryTs = (v) => {
    if (typeof v === 'number') return v
    if (v && typeof v === 'object' && v.ts !== undefined) return Number(v.ts) || 0
    return Number(v) || 0
}

// 心跳超过 10 秒的占位视为失效（崩溃/拆机留下的脏数据）
var srPurgeJobs = (jobs, ttlMs) => {
    var now = Date.now()
    var out = {}
    for (var k in jobs) {
        if (now - srJobsEntryTs(jobs[k]) < ttlMs) out[k] = jobs[k]
    }
    return out
}

var srStationKey = (pos) => pos.getX() + '_' + pos.getY() + '_' + pos.getZ()

// ---- 拒绝开工要说给玩家听 ------------------------------------
// 以前只有日志：机器立在那儿不动，玩家不知道是没网络、并发满了，还是前置没做。
// 每个站点每种原因 4 秒最多提示一次，避免开工失败时每 tick 刷屏。
var srNotifyState = {}
var SR_NOTIFY_COOLDOWN = 4000

var srNotifyNear = (ctx, code, msg) => {
    try {
        var mc = ctx.machineContext()
        var level = mc.level()
        var pos = mc.controllerPos()
        var key = srStationKey(pos) + '@' + code
        var now = Date.now()
        if (srNotifyState[key] && now - srNotifyState[key] < SR_NOTIFY_COOLDOWN) return
        srNotifyState[key] = now
        var r2 = 12 * 12
        var players = level.players()
        for (var i = 0; i < players.size(); i++) {
            var p = players.get(i)
            var bp = p.blockPosition()
            var dx = bp.getX() - pos.getX()
            var dy = bp.getY() - pos.getY()
            var dz = bp.getZ() - pos.getZ()
            if (dx * dx + dy * dy + dz * dz > r2) continue
            p.tell(Text.of('§b[研究] §f' + msg))
        }
    } catch (e) { }
}

// ---- 断网中断（P3.2） ----------------------------------------
// MMCR 的 RecipeTickContext 没有 cancel，只能尝试在控制器上找暂停入口；
// 找不到就退化为"完成时作废"（beforeFinish 里 cancel + discardOutputs）。
var srAbortKey = (stationKey) => 'sinkresearch.abort.' + stationKey
var srStopLogged = false

var srTryStop = (controller) => {
    var attempts = [
        function () { controller.pause() },
        function () { controller.factoryScheduler().pause() },
        function () { controller.componentRuntime().pause() }
    ]
    for (var i = 0; i < attempts.length; i++) {
        try {
            attempts[i]()
            if (!srStopLogged) {
                srStopLogged = true
                console.info('[SR] 断网中断：已在控制器上暂停（入口 #' + i + '）')
            }
            return true
        } catch (e) { }
    }
    if (!srStopLogged) {
        srStopLogged = true
        console.warn('[SR] 断网中断：控制器没有可用暂停入口，退化为"完成后作废"')
    }
    return false
}

// ---- 机器注册 ------------------------------------------------

MMCREvents.startup(event => {
    event.createMachine(SR_STATION_ID)
        .displayNameKey('machine.sinkjourney.research_station')
        .recipePool(SR_STATION_POOL)
        .appearance('create:brass_casing')
        .allowParallelism()
        .maxParallelAmount(4)
        .recipeBehavior(behavior => {
            behavior.beforeStart(ctx => {
                var recipeId = String(ctx.recipeId())
                var node = srNodeByRecipeId(recipeId)
                if (!node) return

                var server = srServerOf(ctx)
                var unlocks = srReadUnlocks(server)

                if (!srRequirementsMet(node, unlocks)) {
                    try { ctx.cancel() } catch (err) { console.warn('[SR] 无法取消配方（版本差异）') }
                    console.info('[SR] 拒绝未解锁研究: ' + recipeId)
                    var missing = []
                    try {
                        var req = node.requires || {}
                        var children = req.or || req.and || []
                        for (var mi = 0; mi < children.length; mi++) {
                            if (!srNodeDone(String(children[mi]), unlocks)) missing.push(String(children[mi]))
                        }
                    } catch (eMiss) { }
                    srNotifyNear(ctx, 'req', '研究站拒绝开工：前置研究未完成' +
                        (missing.length > 0 ? '（还差 ' + missing.join('、') + '）' : ''))
                    return
                }

                // ---- 网络与并发（P3.2）----
                var mc = ctx.machineContext()
                var pos = mc.controllerPos()
                var dim = ''
                try { dim = String(mc.level().dimension) } catch (e) { dim = '' }
                var stationKey = srStationKey(pos)

                // 开工前清掉上一次的作废标记
                try { server.persistentData.remove(srAbortKey(srStationKey(pos))) } catch (e) { }

                var net = srNet(server, pos, dim)
                if (!net) {
                    if (srNetCfg.require_network) {
                        try { ctx.cancel() } catch (e) { }
                        console.info('[SR] 未接入研究网络，拒绝开工: ' + recipeId)
                        srNotifyNear(ctx, 'net', '研究站拒绝开工：16 格内没有在线的研究网络中心')
                        return
                    }
                    // 调试模式：不要求网络，直接按默认时长开工
                    var dbgTicks = Math.max(40, Math.floor(node.duration * srSpeedFactor(ctx, unlocks)))
                    try { ctx.setDuration(dbgTicks) } catch (e) { }
                    return
                }

                var cap = net.capacity > 0 ? net.capacity : srNetCfg.default_capacity
                var jobs = srPurgeJobs(srReadJobs(server, net.token), srNetCfg.job_ttl_ms)
                var running = Object.keys(jobs).length
                if (!jobs[stationKey] && running >= cap) {
                    try { ctx.cancel() } catch (e) { }
                    console.info('[SR] 并发已满 ' + running + '/' + cap + '，拒绝开工: ' + recipeId)
                    srNotifyNear(ctx, 'cap', '研究站拒绝开工：并发已满 ' + running + '/' + cap +
                        '，加数据库或等一条跑完')
                    return
                }

                // ---- 算力门槛：节点 inputs.compute 是"研究本身要多少算力"，不是速度加成 ----
                // 以前这个字段只在终端里显示，精英计算机/数据库对能否开工毫无影响。
                var needCompute = Number((node.inputs || {}).compute) || 0
                if (needCompute > net.compute) {
                    try { ctx.cancel() } catch (e) { }
                    console.info('[SR] 算力不足 ' + net.compute + '/' + needCompute + '，拒绝开工: ' + recipeId)
                    srNotifyNear(ctx, 'compute', '研究站拒绝开工：算力不足（需要 ' + needCompute +
                        '，网络只有 ' + net.compute + '）——加研究计算机')
                    return
                }
                // ts 是心跳（每次都刷），start 是这次开工的时间（只写一次），
                // 终端的"还剩多久"要按 start 算，不能按心跳刷新的 ts 算。
                var prevJob = jobs[stationKey]
                var startedAt = (prevJob && prevJob.start) ? Number(prevJob.start) : Date.now()
                jobs[stationKey] = { ts: Date.now(), start: startedAt, node: recipeId }
                srWriteJobs(server, net.token, jobs)

                var ticks = Math.max(40, Math.floor(node.duration * srSpeedFactor(ctx, unlocks)))
                try { ctx.setDuration(ticks) } catch (err) { console.warn('[SR] 无法改写时长: ' + err) }
            })

            // 心跳：每 40 tick（2 秒）刷一次占位时间，防止崩溃后脏数据永久占用并发。
            // 占位 TTL 是 10 秒，2 秒的心跳留了 5 次容错，同时把 persistentData 的写盘减半。
            behavior.recipeTick(ctx => {
                try {
                    if (Number(ctx.currentTick()) % 40 !== 0) return
                    var server = srServerOf(ctx)
                    var mc = ctx.machineContext()
                    var pos = mc.controllerPos()
                    var dim = String(mc.level().dimension)
                    var key = srStationKey(pos)
                    var net = srNet(server, pos, dim)

                    if (!net) {
                        // 断网：尝试立刻停住；并把这一条标记为作废（完成时丢产出）
                        try { srTryStop(mc.controller()) } catch (e) { }
                        try { server.persistentData.putString(srAbortKey(key), '1') } catch (e) { }
                        return
                    }

                    var jobs = srPurgeJobs(srReadJobs(server, net.token), srNetCfg.job_ttl_ms)
                    if (jobs[key]) {
                        var prev = jobs[key]
                        jobs[key] = {
                            ts: Date.now(),
                            start: (prev && prev.start) ? Number(prev.start) : Number(srJobsEntryTs(prev)),
                            node: (prev && prev.node) ? prev.node : ''
                        }
                        srWriteJobs(server, net.token, jobs)
                    }
                } catch (e) { }
            })

            // 完成/中断：释放并发位
            behavior.beforeFinish(ctx => {
                try {
                    var server = srServerOf(ctx)
                    var mc = ctx.machineContext()
                    var pos = mc.controllerPos()
                    var key = srStationKey(pos)

                    // 断网作废：丢弃产出并让这一条失败
                    var aborted = false
                    try { aborted = String(server.persistentData.getString(srAbortKey(key)) || '') === '1' } catch (e) { aborted = false }
                    if (aborted) {
                        try { ctx.discardOutputs() } catch (e) { }
                        try { ctx.cancel() } catch (e) { }
                        try { server.persistentData.remove(srAbortKey(key)) } catch (e) { }
                        console.info('[SR] 断网中断：研究作废，产出已丢弃')
                    }

                    var dim = String(mc.level().dimension)
                    var net = srNet(server, pos, dim)
                    if (!net) return
                    var jobs = srReadJobs(server, net.token)
                    delete jobs[key]
                    srWriteJobs(server, net.token, jobs)
                } catch (e) { }
            })
        })
        .register()

    console.info('[SR] 已注册研究站 ' + SR_STATION_ID)
})
