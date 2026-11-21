// ============================================================
// 溯洄研究系统 —— 核心（全服作用域）
// 位置：kubejs/server_scripts/research_core/core.js
// ------------------------------------------------------------
// 修复记录：KubeJS 2101 禁止在 server 脚本里赋值 global -> 全部改为文件内局部状态
// 职责：图加载/校验、解锁表、末影龙里程碑、迁移回填、研究站配方生成、调试命令
// ============================================================

var SR_DIR = 'kubejs/config/sinkresearch/'

// 文件内单例（KubeJS 每个脚本独立作用域，跨文件不共享）
var SR = {
    nodes: {},        // id -> node
    order: [],        // 加载顺序
    unlockKeys: {},   // unlock key -> node id
    unlocks: {},      // 已解锁 key -> { at, by }
    recipeIndex: {},  // 产物 id -> 配方 id 列表（草稿用）
    dataVersion: 0,
    loaded: false,
    errors: []
}

var srLog = (msg) => console.info('[SR] ' + msg)
var srWarn = (msg) => console.warn('[SR] ' + msg)
var srErr = (msg) => console.error('[SR] ' + msg)

// JsonIO.parse 返回的是 Java 的 JsonElement，直接取 .pages 会得到 undefined，
// 所以自己用 Gson 解析再转成纯 JS 对象/数组。
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

var srParseGson = (text) => {
    var Parser = Java.loadClass('com.google.gson.JsonParser')
    try {
        return srToJs(Parser.parseString(text))
    } catch (err) {
        // 老版本 Gson 没有静态 parseString，用实例方法
        return srToJs(new Parser().parse(text))
    }
}

var srReadText = (path) => {
    try {
        return String(JsonIO.readString(path))
    } catch (err) {
        var Path = Java.loadClass('java.nio.file.Path')
        return String(JsonIO.readString(Path.of(path)))
    }
}

var srReadJson = (rel) => {
    var path = SR_DIR + rel

    var text = ''
    try {
        text = srReadText(path)
    } catch (err) {
        srErr('读取失败 ' + path + ' -> ' + err)
        return null
    }

    // 首选引擎自带的 JSON.parse：直接产出纯 JS 对象/数组，最稳
    try {
        var obj = JSON.parse(text)
        if (obj) return obj
    } catch (err) {
        srWarn('JSON.parse 失败(' + path + ', len=' + text.length + ')，改用 Gson: ' + err)
    }

    // 兜底：Gson 解析 + 手工转 JS
    try {
        var obj = srParseGson(text)
        if (obj) return obj
        srErr('Gson 解析得到空值: ' + path)
    } catch (err) {
        srErr('解析失败 ' + path + ' -> ' + err)
    }
    return null
}

var srAsList = (value) => {
    if (!value) return []
    if (typeof value === 'string') return value.split(',').filter(s => s.length > 0)
    var out = []
    for (var i = 0; i < value.length; i++) out.push(String(value[i]))
    return out
}

// ---- 1. 图加载与校验 -----------------------------------------

var srNormalizeRequires = (requires) => {
    if (!requires) return { op: 'and', children: [] }
    var op = requires.or ? 'or' : 'and'
    var raw = requires.or || requires.and || []
    var children = []
    for (var i = 0; i < raw.length; i++) children.push(String(raw[i]))
    return { op: op, children: children }
}

var srRegisterNode = (node, pageId) => {
    var id = String(node.id)
    if (SR.nodes[id]) {
        SR.errors.push('节点 id 重复: ' + id + ' (页面 ' + pageId + ')')
        return
    }
    node.id = id
    node.page = pageId
    node.requires = srNormalizeRequires(node.requires)
    SR.nodes[id] = node
    SR.order.push(id)

    var keys = node.unlock || []
    for (var i = 0; i < keys.length; i++) {
        var key = String(keys[i])
        if (SR.unlockKeys[key]) {
            SR.errors.push('解锁 key 重复: ' + key + ' (节点 ' + id + ' 与 ' + SR.unlockKeys[key] + ')')
        } else {
            SR.unlockKeys[key] = id
        }
    }
}

var srValidate = () => {
    for (var id of SR.order) {
        var node = SR.nodes[id]
        for (var child of node.requires.children) {
            if (!SR.nodes[child]) SR.errors.push('前置节点不存在: 节点 ' + id + ' 引用了 ' + child)
        }
    }
    var state = {}
    var dfs = (id, stack) => {
        if (state[id] === 2) return
        if (state[id] === 1) {
            SR.errors.push('研究图存在环: ' + stack.join(' -> ') + ' -> ' + id)
            return
        }
        state[id] = 1
        var node = SR.nodes[id]
        if (node) {
            for (var child of node.requires.children) {
                if (SR.nodes[child]) dfs(child, stack.concat([id]))
            }
        }
        state[id] = 2
    }
    for (var id of SR.order) dfs(id, [])
}

var srLoadGraph = () => {
    SR.nodes = {}
    SR.order = []
    SR.unlockKeys = {}
    SR.errors = []

    var manifest = srReadJson('manifest.json')
    if (!manifest) {
        srErr('manifest.json 缺失，研究图未加载')
        return false
    }
    var pages = srAsList(manifest.pages)
    for (var page of pages) {
        var data = srReadJson(page)
        if (!data) continue
        var pageId = data.page ? String(data.page) : page
        var nodes = data.nodes || []
        for (var i = 0; i < nodes.length; i++) srRegisterNode(nodes[i], pageId)
        srLog('页面 ' + pageId + ' 载入 ' + nodes.length + ' 个节点')
    }

    srValidate()
    if (SR.errors.length > 0) {
        for (var e of SR.errors) srErr('校验失败: ' + e)
    } else {
        srLog('研究图校验通过，共 ' + SR.order.length + ' 个节点')
    }

    var version = srReadJson('version.json')
    if (version && version.data_version !== undefined) SR.dataVersion = Number(version.data_version)
    SR.loaded = true
    return SR.errors.length === 0
}

// ---- 2. 解锁状态（全服，持久化在 server.persistentData） -------

var SR_UNLOCK_KEY = 'sinkresearch.unlocks'
var SR_VERSION_KEY = 'sinkresearch.data_version'

var srPersistUnlocks = (server) => {
    try {
        server.persistentData.putString(SR_UNLOCK_KEY, Object.keys(SR.unlocks).join(','))
    } catch (err) {
        srWarn('persistentData 写入失败（本次解锁仅内存生效）: ' + err)
    }
}

var srLoadUnlocks = (server) => {
    SR.unlocks = {}
    try {
        var raw = server.persistentData.getString(SR_UNLOCK_KEY)
        for (var key of srAsList(String(raw || ''))) SR.unlocks[key] = { at: 0, by: 'persisted' }
    } catch (err) {
        srWarn('persistentData 读取失败: ' + err)
    }
}

var srHas = (key) => !!SR.unlocks[key]

var srNodeDone = (nodeId) => {
    var node = SR.nodes[nodeId]
    if (!node) return false
    var keys = node.unlock || []
    if (keys.length === 0) return true
    for (var key of keys) if (srHas(String(key))) return true
    return false
}

var srRequirementsMet = (nodeId) => {
    var node = SR.nodes[nodeId]
    if (!node) return false
    var children = node.requires.children
    if (children.length === 0) return true
    if (node.requires.op === 'or') {
        for (var child of children) if (srNodeDone(child)) return true
        return false
    }
    for (var child of children) if (!srNodeDone(child)) return false
    return true
}

var srGrant = (server, keys, reason, silent) => {
    if (!server) return false
    var changed = false
    for (var key of keys) {
        var k = String(key)
        if (SR.unlocks[k]) continue
        SR.unlocks[k] = { at: Date.now(), by: reason || 'unknown' }
        changed = true
    }
    if (!changed) return false

    srPersistUnlocks(server)

    for (var key of keys) {
        try {
            server.runCommandSilent('astages server add ' + String(key))
        } catch (err) {
            srWarn('AStages 镜像失败 ' + key + '（不影响本系统解锁表）: ' + err)
        }
    }

    if (!silent) {
        var msg = Text.of('§b[研究] §f已解锁：§e' + keys.join('§7, §e'))
        try {
            server.players.forEach(p => p.tell(msg))
        } catch (err) {
            srWarn('广播失败: ' + err)
        }
        srLog('解锁 ' + keys.join(',') + ' 原因=' + (reason || 'unknown'))
    }
    return true
}

// ---- 3. 里程碑：kind = milestone 的节点由玩法事件推进 -----------
// 支持的 trigger.type（加新类型：这里加一个分支 + 节点 JSON 里写对应 trigger）：
//   entity_death     { entity, dimension?, require_player_kill? }
//   advancement      { advancement }
//   item_obtain      { item }
//   dimension_enter  { dimension }
// 触发后仍要过前置（srRequirementsMet）：里程碑不能绕过研究树。

var srMilestoneNodes = () => {
    var out = []
    for (var id of SR.order) {
        var node = SR.nodes[id]
        if (node && node.kind === 'milestone') out.push(node)
    }
    return out
}

var srFireMilestone = (server, node, reason, info) => {
    if (!server) return
    var trigger = node.trigger || {}
    if (trigger.dimension && info && info.dimension &&
        String(trigger.dimension) !== String(info.dimension)) {
        srLog('里程碑 ' + node.id + ' 维度不符（' + info.dimension + '），跳过')
        return
    }
    if (trigger.require_player_kill && info && !info.player) {
        srLog('里程碑 ' + node.id + ' 要求玩家亲手完成，跳过（' + reason + '）')
        return
    }
    if (!srRequirementsMet(node.id)) {
        srLog('里程碑 ' + node.id + ' 前置未满足，跳过')
        return
    }
    srGrant(server, node.unlock || [], reason)
}

var srRegisterMilestones = () => {
    var nodes = srMilestoneNodes()
    if (nodes.length === 0) return

    var entityIds = []
    var advIds = []
    var itemIds = []
    var needTick = false

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i]
        var t = node.trigger || {}
        if (t.type === 'entity_death' && t.entity) {
            if (entityIds.indexOf(String(t.entity)) < 0) entityIds.push(String(t.entity))
        } else if (t.type === 'advancement' && t.advancement) {
            if (advIds.indexOf(String(t.advancement)) < 0) advIds.push(String(t.advancement))
        } else if (t.type === 'item_obtain' && t.item) {
            if (itemIds.indexOf(String(t.item)) < 0) itemIds.push(String(t.item))
        } else if (t.type === 'dimension_enter') {
            needTick = true
        } else {
            srWarn('里程碑 ' + node.id + ' 的 trigger.type 不认识: ' + t.type)
        }
    }

    var fireByType = (server, type, match, reason, info) => {
        var all = srMilestoneNodes()
        for (var k = 0; k < all.length; k++) {
            var t2 = all[k].trigger || {}
            if (t2.type !== type) continue
            if (!match(t2)) continue
            srFireMilestone(server, all[k], reason, info)
        }
    }

    var bindEntity = (entityId) => {
        EntityEvents.death(entityId, event => {
            var server = event.level && event.level.server ? event.level.server : null
            if (!server) return
            var killer = null
            try { killer = event.source && event.source.player ? event.source.player : null } catch (err) { killer = null }
            var dimension = ''
            try { dimension = String(event.entity.level.dimension) } catch (err) { dimension = '' }
            fireByType(server, 'entity_death', t => String(t.entity) === String(entityId),
                'milestone:' + entityId, { player: killer, dimension: dimension })
        })
    }
    for (var e = 0; e < entityIds.length; e++) bindEntity(entityIds[e])

    var bindAdvancement = (advId) => {
        PlayerEvents.advancement(advId, event => {
            var advDim = ''
            try { advDim = String(event.player.level.dimension) } catch (e) { advDim = '' }
            fireByType(event.server, 'advancement', t => String(t.advancement) === String(advId),
                'advancement:' + advId, { player: event.player, dimension: advDim })
        })
    }
    for (var a = 0; a < advIds.length; a++) bindAdvancement(advIds[a])

    var bindItem = (itemId) => {
        PlayerEvents.inventoryChanged(itemId, event => {
            var itemDim = ''
            try { itemDim = String(event.player.level.dimension) } catch (e) { itemDim = '' }
            fireByType(event.server, 'item_obtain', t => String(t.item) === String(itemId),
                'item:' + itemId, { player: event.player, dimension: itemDim })
        })
    }
    for (var m = 0; m < itemIds.length; m++) bindItem(itemIds[m])

    if (needTick) {
        var dimKey = 'sinkresearch.lastdim'
        PlayerEvents.tick(event => {
            try {
                var player = event.player
                if (!player) return
                var level = player.level
                // 每 10 tick 查一次，且只在真的换了维度时才继续
                if (Number(level.gameTime || 0) % 10 !== 0) return
                var dim = String(level.dimension)
                var last = ''
                try { last = String(player.persistentData.getString(dimKey) || '') } catch (e0) { return }
                if (last === dim) return
                try { player.persistentData.putString(dimKey, dim) } catch (e1) { }
                // 第一次记录（新玩家/老存档第一次进）不算"进入"
                if (last.length === 0) return
                var server = null
                try { server = player.server } catch (e2) { server = null }
                fireByType(server, 'dimension_enter', t => !t.dimension || String(t.dimension) === dim,
                    'dimension:' + dim, { player: player, dimension: dim })
            } catch (e) { }
        })
    }
}

// ---- 3b. 研究笔记：解锁机械时代（电力前唯一的时代入口） --------

PlayerEvents.inventoryChanged('kubejs:research_notes', event => {
    srGrant(event.server, ['era.kinetic'], 'item:research_notes')
})

PlayerEvents.inventoryChanged('kubejs:research_notes_ember', event => {
    srGrant(event.server, ['era.ember'], 'item:research_notes_ember')
})

PlayerEvents.inventoryChanged('kubejs:research_notes_radiance', event => {
    srGrant(event.server, ['era.radiance'], 'item:research_notes_radiance')
})

PlayerEvents.inventoryChanged('kubejs:research_notes_electric', event => {
    srGrant(event.server, ['era.electric'], 'item:research_notes_electric')
})

// ---- 4. 存档迁移 / 回填 --------------------------------------

var srPlayerHasItem = (server, itemId) => {
    try {
        for (var player of server.players) {
            var inv = player.inventory
            for (var slot = 0; slot < inv.slots; slot++) {
                var stack = inv.getStackInSlot(slot)
                if (!stack.isEmpty() && stack.id === itemId) return true
            }
        }
    } catch (err) {
        srWarn('扫描玩家物品失败: ' + err)
    }
    return false
}

var srAnyPlayerHasAdvancement = (server, advancementId) => {
    try {
        for (var player of server.players) {
            var adv = player.advancements
            if (!adv) continue
            var progress = adv.get ? adv.get(advancementId) : null
            if (progress && progress.isDone && progress.isDone()) return true
        }
    } catch (err) {
        srWarn('扫描成就失败（回填规则降级）: ' + err)
    }
    return false
}

var srRunMigrations = (server) => {
    var data = srReadJson('migrations.json')
    if (!data) return

    var current = 0
    try { current = Number(server.persistentData.getInt(SR_VERSION_KEY) || 0) } catch (err) { current = 0 }

    var list = data.migrations || []
    for (var i = 0; i < list.length; i++) {
        var migration = list[i]
        if (Number(migration.from) < current) continue
        srLog('执行迁移 v' + migration.from + ' -> v' + migration.to)

        var rules = migration.rules || []
        for (var k = 0; k < rules.length; k++) {
            var rule = rules[k]
            var when = rule.when || {}
            var hit = false
            if (when.advancement_any_player) hit = srAnyPlayerHasAdvancement(server, String(when.advancement_any_player))
            else if (when.item_any_player) hit = srPlayerHasItem(server, String(when.item_any_player))
            if (!hit) continue
            srGrant(server, rule.grant || [], 'migration:' + rule.id, true)
            srLog('回填命中: ' + rule.id)
        }

        try { server.persistentData.putInt(SR_VERSION_KEY, Number(migration.to)) } catch (err) {
            srWarn('迁移版本号写入失败: ' + err)
        }
    }
}

// ---- 5. 从节点 JSON 生成研究站配方（数据驱动） -----------------

ServerEvents.recipes(event => {
    // 5.1 先建草稿索引（产物 -> 配方 id），供 /research draft 使用
    event.forEachRecipe({ type: 'minecraft:crafting_shaped' }, recipe => {
        try {
            var json = recipe.json
            var result = json.get('result')
            if (!result) return
            var outId = result.get('id') ? result.get('id').getAsString()
                : (result.get('item') ? result.get('item').getAsString() : null)
            if (!outId) return
            var ns = outId.split(':')[0]
            if (['create', 'mekanism', 'ae2', 'embers', 'astralsorcery', 'pneumaticcraft', 'immersiveengineering', 'spectrum'].indexOf(ns) < 0) return
            if (!SR.recipeIndex[outId]) SR.recipeIndex[outId] = []
            if (SR.recipeIndex[outId].length < 6) SR.recipeIndex[outId].push(String(recipe.getId()))
        } catch (err) {
            // 单条配方解析失败不影响整体
        }
    })
    srLog('草稿索引完成，产物条目 ' + Object.keys(SR.recipeIndex).length)

    // 5.2 生成研究站配方
    if (!SR.loaded) {
        srWarn('研究图未加载，跳过研究站配方生成')
        return
    }

    for (var id of SR.order) {
        var node = SR.nodes[id]
        if (node.kind !== 'craft') continue

        var requirements = []
        var inputs = node.inputs || {}

        var items = inputs.items || []
        for (var i = 0; i < items.length; i++) {
            requirements.push({
                type: 'minecraft:item', io: 'input',
                item: { item: String(items[i].id) },
                count: Number(items[i].count) || 1
            })
        }
        var fluids = inputs.fluids || []
        for (var i = 0; i < fluids.length; i++) {
            requirements.push({
                type: 'minecraft:fluid', io: 'input',
                fluid: { fluid: String(fluids[i].id) },
                amount: Number(fluids[i].amount) || 1000
            })
        }
        if (inputs.energy) {
            requirements.push({
                type: 'neoforge:energy', io: 'input',
                fe_per_tick: Math.max(1, Math.floor(Number(inputs.energy) / 100))
            })
        }
        var outItems = (node.outputs || {}).items || []
        for (var i = 0; i < outItems.length; i++) {
            requirements.push({
                type: 'minecraft:item', io: 'output',
                stack: { id: String(outItems[i].id), count: Number(outItems[i].count) || 1 }
            })
        }

        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: node.recipe_pool || 'sinkjourney:research_station',
            tick_time: Number(node.duration) || 200,
            requirements: requirements
        }).id(node.recipe_id || ('kubejs:research_station/' + id.replace(':', '_')))

        srLog('生成研究配方 ' + node.id)
    }

    // 5.3 控制器配方：用既有蓝图·原始作门槛
    // 注意：控制器物品由 MMCR 在 startup 注册；若机器没注册成功，这里会抛错，包一层防止连累整段配方。
    try {
        event.shaped('mmcr:research_station_controller', [
            'BSB',
            'SCS',
            'BSB'
        ], {
            B: 'create:brass_sheet',
            S: 'create:andesite_casing',
            C: 'kubejs:blueprint_primitive'
        }).id('kubejs:sink_research/research_station')
    } catch (err) {
        srWarn('控制器配方跳过（机器未注册？）: ' + err)
    }
})

// ---- 6. 草稿 / 平衡 ------------------------------------------

var srBuildDraft = () => {
    var ranked = Object.keys(SR.recipeIndex).sort()
    var nodes = []
    for (var i = 0; i < ranked.length; i++) {
        var outId = ranked[i]
        var slug = outId.replace(':', '_').replace(/[^a-z0-9_]/gi, '_')
        nodes.push({
            id: 'sink:draft_' + slug,
            kind: 'craft',
            era: 'TBD',
            rank: 0,
            requires: { and: [] },
            inputs: { items: [], fluids: [], energy: 1000, compute: 1 },
            duration: 300,
            outputs: { items: [{ id: outId, count: 1 }] },
            unlock: ['draft.' + slug],
            ui: { x: 0, y: 0, doc: 'research.draft.' + slug + '.desc' },
            _source_recipes: SR.recipeIndex[outId],
            _note: '自动生成草稿，请人工补齐 inputs/requires 后并入 nodes/*.json'
        })
    }
    var payload = { _comment: '/research draft 生成，非最终文件', generated_total: nodes.length, nodes: nodes }
    try {
        JsonIO.write(SR_DIR + 'candidates.json', JsonIO.parseRaw(JSON.stringify(payload)))
        return { ok: true, count: nodes.length, path: SR_DIR + 'candidates.json' }
    } catch (err) {
        srWarn('写 candidates.json 失败: ' + err)
        return { ok: false, count: nodes.length, error: String(err) }
    }
}

var srSimulateBalance = () => {
    var list = SR.order.map(id => SR.nodes[id]).filter(n => n.kind === 'craft')
    list.sort((a, b) => (Number(a.rank) || 0) - (Number(b.rank) || 0))

    var totalItems = {}
    var totalFluids = {}
    var totalTicks = 0
    var totalFe = 0

    for (var i = 0; i < list.length; i++) {
        var node = list[i]
        totalTicks += Number(node.duration) || 0
        var inputs = node.inputs || {}
        var items = inputs.items || []
        for (var k = 0; k < items.length; k++) {
            var id = String(items[k].id)
            totalItems[id] = (totalItems[id] || 0) + (Number(items[k].count) || 0)
        }
        var fluids = inputs.fluids || []
        for (var k = 0; k < fluids.length; k++) {
            var id = String(fluids[k].id)
            totalFluids[id] = (totalFluids[id] || 0) + (Number(fluids[k].amount) || 0)
        }
        totalFe += Math.max(1, Math.floor((Number(inputs.energy) || 0) / 100))
    }

    return {
        nodes: list.length,
        total_ticks: totalTicks,
        total_minutes: Math.round(totalTicks / 20 / 60 * 10) / 10,
        total_fe_per_tick: totalFe,
        items: totalItems,
        fluids: totalFluids
    }
}

// ---- 7. 启动入口 ---------------------------------------------

ServerEvents.loaded(event => {
    var server = event.server
    if (!SR.loaded || SR.order.length === 0) srLoadGraph()
    srLoadUnlocks(server)
    srRunMigrations(server)
    srLog('就绪：节点 ' + SR.order.length + '，已解锁 ' + Object.keys(SR.unlocks).length + ' 项')
})

// ---- 8. 调试命令 /research ... -------------------------------

var srFormatState = (node) => {
    var done = srNodeDone(node.id)
    var ready = srRequirementsMet(node.id)
    var mark = done ? '§a[已完成]' : (ready ? '§e[可研究]' : '§7[锁定]')
    return mark + ' §f' + node.id + ' §7(' + node.kind + ', rank ' + node.rank + ')'
}

ServerEvents.commandRegistry(event => {
    var { commands: Commands, arguments: Arguments } = event

    // 根节点对所有人开放（玩家用的 tree/need 在 terminal.js 里），
    // 调试子命令各自要 2 级：两个文件注册同名根时 Brigadier 会合并子节点，
    // 权限写在根上会让"谁能用 /research tree"取决于加载顺序。
    var root = Commands.literal('research')
        .requires(src => src.hasPermission(0))
        .executes(ctx => {
            ctx.getSource().sendSystemMessage(Text.of('§b[研究] §flist | dump | validate | unlock <key> | reset | draft | balance'))
            return 1
        })

    root.then(Commands.literal('list').requires(src => src.hasPermission(2)).executes(ctx => {
        var source = ctx.getSource()
        source.sendSystemMessage(Text.of('§b[研究] §f节点总数 ' + SR.order.length))
        for (var id of SR.order) source.sendSystemMessage(Text.of(srFormatState(SR.nodes[id])))
        return 1
    }))

    root.then(Commands.literal('validate').requires(src => src.hasPermission(2)).executes(ctx => {
        var source = ctx.getSource()
        if (SR.errors.length === 0) {
            source.sendSystemMessage(Text.of('§a[研究] 校验通过，无错误'))
            return 1
        }
        for (var e of SR.errors) source.sendSystemMessage(Text.of('§c[研究] ' + e))
        return 0
    }))

    root.then(Commands.literal('dump').requires(src => src.hasPermission(2)).executes(ctx => {
        var source = ctx.getSource()
        source.sendSystemMessage(Text.of('§b[研究] §f已解锁 ' + Object.keys(SR.unlocks).length + ' 项'))
        for (var key of Object.keys(SR.unlocks)) {
            source.sendSystemMessage(Text.of(' §e' + key + ' §7by=' + SR.unlocks[key].by))
        }
        return 1
    }))

    root.then(Commands.literal('unlock').requires(src => src.hasPermission(2))
        .then(Commands.argument('key', Arguments.STRING.create(event))
            .executes(ctx => {
                var key = String(Arguments.STRING.getResult(ctx, 'key'))
                var ok = srGrant(ctx.getSource().getServer(), [key], 'command')
                ctx.getSource().sendSystemMessage(Text.of(ok ? '§a已解锁 ' + key : '§7已存在 ' + key))
                return ok ? 1 : 0
            })))

    root.then(Commands.literal('reset').requires(src => src.hasPermission(2)).executes(ctx => {
        var server = ctx.getSource().getServer()
        var keys = Object.keys(SR.unlocks)
        SR.unlocks = {}
        srPersistUnlocks(server)
        for (var key of keys) {
            try { server.runCommandSilent('astages server remove ' + key) } catch (err) { srWarn('撤销 stage 失败 ' + key) }
        }
        ctx.getSource().sendSystemMessage(Text.of('§c已清空 ' + keys.length + ' 项解锁'))
        return 1
    }))

    root.then(Commands.literal('draft').requires(src => src.hasPermission(2)).executes(ctx => {
        var result = srBuildDraft()
        ctx.getSource().sendSystemMessage(Text.of('§b[研究] §f草稿 ' + result.count + ' 条' + (result.ok ? '，已写入 ' + result.path : '，写入失败 ' + result.error)))
        return 1
    }))

    root.then(Commands.literal('balance').requires(src => src.hasPermission(2)).executes(ctx => {
        var source = ctx.getSource()
        var sim = srSimulateBalance()
        source.sendSystemMessage(Text.of('§b[研究] §f节点 ' + sim.nodes + '，全解锁约 ' + sim.total_minutes + ' 分钟（' + sim.total_ticks + ' ticks）'))
        for (var id in sim.items) source.sendSystemMessage(Text.of(' §7物品 ' + id + ' x' + sim.items[id]))
        for (var id in sim.fluids) source.sendSystemMessage(Text.of(' §7流体 ' + id + ' x' + sim.fluids[id] + ' mB'))
        return 1
    }))

    event.register(root)
})

srLoadGraph()
srRegisterMilestones()

srLog('core.js 已加载')
