// ============================================================
// 溯洄研究系统 —— 研究网络（P3.1：成员登记 + 算力聚合）
// 位置：kubejs/server_scripts/research_core/network.js
// ------------------------------------------------------------
// 设计约束：
//   * 不做每 tick 全量扫描：只在"网络中心"方块实体的 tick 里，每 20 tick 扫一次，
//     且扫描范围是有界的 13x7x13 盒子。
//   * 网络状态存 server.persistentData，键：
//       sinkresearch.net.index            -> "x_y_z;x_y_z;..."
//       sinkresearch.net.<x>_<y>_<z>      -> {"compute":n,"capacity":n,"stations":n,"ts":t}
//   * 中心方块被拆/区块卸载 -> 条目 40 tick 内不再刷新，视为离线（下次扫描时清理）。
//
// 本文件禁止使用 const/let。
// ============================================================

var SRN_HUB_ID = 'kubejs:network_hub'
var SRN_INDEX = 'sinkresearch.net.index'
var SRN_PREFIX = 'sinkresearch.net.'

var SRN_COMPUTE = {
    'kubejs:research_computer_basic': 1,
    'kubejs:research_computer_advanced': 2,
    'kubejs:research_computer_elite': 4
}
var SRN_CAPACITY = {
    'kubejs:research_database_basic': 1,
    'kubejs:research_database_advanced': 2
}

var SRN_RADIUS_XZ = 6
var SRN_RADIUS_Y = 3

// 中心本身提供的基线算力：没有计算机时网络也算力 1，够开第一条研究，
// 第二条（compute=2）才逼玩家去造研究计算机。可在 network.json 里改。
var SRN_CFG = { base_compute: 1, purge_every: 20 }

var SRN_loadCfg = function () {
    try {
        var text = String(JsonIO.readString('kubejs/config/sinkresearch/network.json'))
        var cfg = JSON.parse(text)
        if (cfg) {
            if (cfg.base_compute !== undefined) SRN_CFG.base_compute = Number(cfg.base_compute) || 0
            if (cfg.purge_every !== undefined) SRN_CFG.purge_every = Math.max(1, Number(cfg.purge_every) || 20)
        }
    } catch (e) {
        console.warn('[SRN] 读取 network.json 失败，使用默认值: ' + e)
    }
}
SRN_loadCfg()

// token 形如 "minecraft:overworld@12_64_-30"；老格式（无 @）按主世界处理
var SRN_token = function (level, pos) {
    var dim = 'minecraft:overworld'
    try { dim = String(level.dimension) } catch (e) { dim = 'minecraft:overworld' }
    return dim + '@' + pos.getX() + '_' + pos.getY() + '_' + pos.getZ()
}

var SRN_splitToken = function (token) {
    var out = { dim: 'minecraft:overworld', x: 0, y: 0, z: 0, ok: false }
    var t = String(token)
    var at = t.indexOf('@')
    if (at >= 0) {
        out.dim = t.substring(0, at)
        t = t.substring(at + 1)
    }
    var p = t.split('_')
    if (p.length < 3) return out
    out.x = Number(p[0])
    out.y = Number(p[1])
    out.z = Number(p[2])
    out.ok = !isNaN(out.x) && !isNaN(out.y) && !isNaN(out.z)
    return out
}

var SRN_key = function (token) {
    return SRN_PREFIX + token
}

var SRN_readIndex = function (server) {
    var out = []
    try {
        var raw = String(server.persistentData.getString(SRN_INDEX) || '')
        if (raw.length === 0) return out
        var parts = raw.split(';')
        for (var i = 0; i < parts.length; i++) if (parts[i].length > 0) out.push(parts[i])
    } catch (e) { }
    return out
}

var SRN_writeIndex = function (server, list) {
    try {
        server.persistentData.putString(SRN_INDEX, list.join(';'))
    } catch (e) {
        console.warn('[SRN] 写索引失败: ' + e)
    }
}

// ---- 扫描与聚合（每 20 tick，仅中心方块所在区块加载时） --------

var SRN_scanCount = 0

var SRN_scan = function (event) {
    var level = event.level
    var pos = event.block.pos
    var server = level.server

    var compute = SRN_CFG.base_compute
    var capacity = 0
    var stations = 0

    for (var dx = -SRN_RADIUS_XZ; dx <= SRN_RADIUS_XZ; dx++) {
        for (var dz = -SRN_RADIUS_XZ; dz <= SRN_RADIUS_XZ; dz++) {
            for (var dy = -SRN_RADIUS_Y; dy <= SRN_RADIUS_Y; dy++) {
                var p = pos.offset(dx, dy, dz)
                var id = ''
                try {
                    id = String(level.getBlockState(p).block.id)
                } catch (e) {
                    continue
                }
                if (SRN_COMPUTE[id]) compute += SRN_COMPUTE[id]
                else if (SRN_CAPACITY[id]) capacity += SRN_CAPACITY[id]
                else if (id === 'mmcr:research_station_controller') stations++
            }
        }
    }

    var token = SRN_token(level, pos)
    var key = SRN_key(token)
    var payload = JSON.stringify({
        dim: token.substring(0, token.indexOf('@')),
        compute: compute,
        capacity: capacity,
        stations: stations,
        ts: Date.now()
    })

    try {
        server.persistentData.putString(key, payload)
    } catch (e) {
        console.warn('[SRN] 写网络状态失败: ' + e)
    }

    var index = SRN_readIndex(server)
    if (index.indexOf(token) < 0) {
        index.push(token)
        SRN_writeIndex(server, index)
        console.info('[SRN] 新网络登记 ' + token + ' 算力=' + compute + ' 并发=' + capacity)
    }

    // 顺手清理失效条目（中心被拆 / 区块已卸载很久）。
    // 清理要遍历索引并对每个条目做方块查询，没必要每秒跑一遍：每 purge_every 次扫描清一次。
    SRN_scanCount++
    if (SRN_scanCount % SRN_CFG.purge_every === 0) SRN_purge(server, level, 15000)
}

// 清理：条目超过 staleMs 没有心跳，且该坐标已经不是网络中心 -> 删除
var SRN_purge = function (server, level, staleMs) {
    var index = SRN_readIndex(server)
    if (index.length === 0) return 0

    var now = Date.now()
    var keep = []
    var removed = 0

    for (var i = 0; i < index.length; i++) {
        var token = index[i]
        var info = SRN_splitToken(token)
        var raw = ''
        try { raw = String(server.persistentData.getString(SRN_key(token)) || '') } catch (e) { raw = '' }

        var stale = true
        if (raw.length > 0) {
            var state = null
            try { state = JSON.parse(raw) } catch (e) { state = null }
            if (state && (now - Number(state.ts || 0)) < staleMs) stale = false
        }

        if (!stale) {
            keep.push(token)
            continue
        }

        // 只有在"能确认那个位置已经不是中心方块"时才删除；
        // 区块没加载 / 不在当前维度 -> 验证不了 -> 保留（只是显示离线）
        var verified = false
        var stillHub = false
        try {
            if (info.ok && level && String(level.dimension) === info.dim) {
                var p = new (Java.loadClass('net.minecraft.core.BlockPos'))(info.x, info.y, info.z)
                stillHub = String(level.getBlockState(p).block.id) === SRN_HUB_ID
                verified = true
            }
        } catch (e) {
            verified = false
        }

        if (!verified || stillHub) {
            keep.push(token)
            continue
        }

        try { server.persistentData.remove(SRN_key(token)) } catch (e) { }
        removed++
        console.info('[SRN] 清理失效网络 ' + token)
    }

    if (removed > 0) SRN_writeIndex(server, keep)
    return removed
}

// 中心被拆：立刻从索引和状态里摘掉，不用等心跳超时
BlockEvents.broken(SRN_HUB_ID, function (event) {
    try {
        var server = event.level.server
        var token = SRN_token(event.level, event.block.pos)
        var index = SRN_readIndex(server)
        var keep = []
        for (var i = 0; i < index.length; i++) if (index[i] !== token) keep.push(index[i])
        SRN_writeIndex(server, keep)
        try { server.persistentData.remove(SRN_key(token)) } catch (e) { }
        console.info('[SRN] 网络中心被拆除，已注销 ' + token)
    } catch (e) {
        console.warn('[SRN] 注销失败: ' + e)
    }
})

BlockEvents.blockEntityTick(SRN_HUB_ID, function (event) {
    var gt = 0
    try {
        gt = event.level.getGameTime ? Number(event.level.getGameTime()) : Number(event.level.time)
    } catch (e) {
        gt = 0
    }
    if (gt % 20 !== 0) return
    try {
        SRN_scan(event)
    } catch (e) {
        console.warn('[SRN] 扫描失败: ' + e)
    }
})

// ---- 研究站查询：找最近的在线网络中心 -------------------------

var SRN_nearest = function (server, pos, maxDist, dim) {
    if (!server) return null
    var best = null
    var bestD = maxDist * maxDist
    var index = SRN_readIndex(server)
    for (var i = 0; i < index.length; i++) {
        var info0 = SRN_splitToken(index[i])
        if (!info0.ok) continue
        if (dim && String(dim) !== info0.dim) continue
        var dx = info0.x - pos.getX()
        var dy = info0.y - pos.getY()
        var dz = info0.z - pos.getZ()
        var d = dx * dx + dy * dy + dz * dz
        if (d > bestD) continue
        var raw = ''
        try { raw = String(server.persistentData.getString(SRN_PREFIX + index[i]) || '') } catch (e) { continue }
        if (raw.length === 0) continue
        var info = null
        try { info = JSON.parse(raw) } catch (e) { continue }
        if (!info) continue
        bestD = d
        best = info
    }
    return best
}

// ---- 构件配方（复用既有材料，不新增平行物品） -----------------

ServerEvents.recipes(function (event) {
    // 网络中心：黄铜骨架 + 精密构件组
    event.shaped('kubejs:network_hub', [
        'BSB',
        'SCS',
        'BSB'
    ], {
        B: 'create:brass_sheet',
        S: 'create:andesite_casing',
        C: 'kubejs:precision_component_group'
    }).id('kubejs:sink_research/network_hub')

    var computers = [
        ['basic', 'create:electron_tube', 1],
        ['advanced', 'create:precision_mechanism', 2],
        ['elite', 'kubejs:research_data', 4]
    ]
    for (var i = 0; i < computers.length; i++) {
        var tier = computers[i][0]
        var core = computers[i][1]
        event.shaped('kubejs:research_computer_' + tier, [
            'BSB',
            'SCS',
            'BSB'
        ], {
            B: 'create:brass_sheet',
            S: core,
            C: 'kubejs:research_substrate'
        }).id('kubejs:sink_research/research_computer_' + tier)
    }

    var databases = [
        ['basic', 'minecraft:book', 1],
        ['advanced', 'create:precision_mechanism', 2]
    ]
    for (var k = 0; k < databases.length; k++) {
        var dTier = databases[k][0]
        var dCore = databases[k][1]
        event.shaped('kubejs:research_database_' + dTier, [
            'BSB',
            'SCS',
            'BSB'
        ], {
            B: 'create:brass_sheet',
            S: dCore,
            C: 'kubejs:blank_blueprint'
        }).id('kubejs:sink_research/research_database_' + dTier)
    }
})

// ---- 命令：/research net -------------------------------------

ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands

    var root = Commands.literal('research')
        .requires(function (src) { return src.hasPermission(2) })

    root.then(Commands.literal('net').executes(function (ctx) {
        var src = ctx.getSource()
        var server = src.getServer()
        var index = SRN_readIndex(server)
        src.sendSystemMessage(Text.of('§b[研究网络] §f在线中心 ' + index.length + ' 个'))
        var now = Date.now()
        for (var i = 0; i < index.length; i++) {
            var raw = ''
            try { raw = String(server.persistentData.getString(SRN_PREFIX + index[i]) || '') } catch (e) { continue }
            if (raw.length === 0) continue
            var info = null
            try { info = JSON.parse(raw) } catch (e) { continue }
            if (!info) continue
            var age = Math.round((now - Number(info.ts || 0)) / 1000)
            var online = age < 45
            src.sendSystemMessage(Text.of(
                (online ? '§a[在线] ' : '§c[离线] ') + '§f' + index[i] +
                ' §7算力=' + info.compute + ' 并发=' + info.capacity +
                ' 研究站=' + info.stations + ' 心跳=' + age + 's'
            ))
        }
        return 1
    }))

    event.register(root)
})
