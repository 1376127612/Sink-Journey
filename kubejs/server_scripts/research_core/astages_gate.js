// ============================================================
// 溯洄研究系统 —— 解锁拦截（P2，纯 AStages）
// 位置：kubejs/server_scripts/research_core/astages_gate.js
// ------------------------------------------------------------
// 实测结论（2026-11-18）：
//   * AStages 的 simple restriction = { id, stage, object }
//   * 存储路径：config/astages/simple/astages/{item,recipe}.json（JSON 数组）
//   * Java 入口：ASimpleRestrictionManager.addRestriction(type, id, stage, object)
//     - ITEM 类型实测可用（会写文件）
//     - RECIPE 类型会抛异常，原因待定，所以本文件对每条限制独立尝试，
//       不再"一次失败就全程走命令"（那是上一版不生效的根因）
//   * /astages_simple 命令链在 runCommandSilent 下不落地，不可依赖
//
// 因此策略：API 优先 -> 命令兜底 -> 最后无论如何都把 JSON 文件写出来，
// 让 AStages 下次 ServerStarting 时自己读（确定生效）。
//
// 本文件禁止使用 const/let（Rhino 会抛 redeclaration）。
// ============================================================

var SRA_CFG = 'kubejs/config/sinkresearch/gates.json'
var SRA_DIR = 'config/astages/simple/astages/'
var SRA_MARK = 'sinkresearch.astages_applied'
var SRA_MAP = 'sinkresearch.recipe_ids'

var SRA_gates = []
var SRA_settings = { recipe_restrictions: false, recipe_separator: '//' }
var SRA_recipeIds = {}
var SRA_lastApiError = ''

// ---- JSON 读写 ----------------------------------------------

var SRA_toJs = function (el) {
    if (!el) return null
    try {
        if (el.isJsonArray()) {
            var arr = el.getAsJsonArray()
            var outA = []
            for (var i = 0; i < arr.size(); i++) outA.push(SRA_toJs(arr.get(i)))
            return outA
        }
        if (el.isJsonObject()) {
            var obj = el.getAsJsonObject()
            var outO = {}
            var it = obj.entrySet().iterator()
            while (it.hasNext()) {
                var e = it.next()
                outO[String(e.getKey())] = SRA_toJs(e.getValue())
            }
            return outO
        }
        if (el.isJsonPrimitive()) {
            var p = el.getAsJsonPrimitive()
            if (p.isBoolean()) return p.getAsBoolean()
            if (p.isNumber()) return p.getAsDouble()
            return p.getAsString()
        }
        return null
    } catch (e) {
        return null
    }
}

var SRA_readText = function (path) {
    try {
        return String(JsonIO.readString(path))
    } catch (e1) {
        var P = Java.loadClass('java.nio.file.Path')
        return String(JsonIO.readString(P.of(path)))
    }
}

var SRA_readJson = function (path) {
    var text = ''
    try {
        text = SRA_readText(path)
    } catch (e) {
        console.error('[SRA] 读取失败 ' + path + ' -> ' + e)
        return null
    }
    try {
        var o = JSON.parse(text)
        if (o) return o
    } catch (e) {
        console.warn('[SRA] JSON.parse 失败(' + path + '): ' + e)
    }
    try {
        var Parser = Java.loadClass('com.google.gson.JsonParser')
        try { return SRA_toJs(Parser.parseString(text)) } catch (e3) { return SRA_toJs(new Parser().parse(text)) }
    } catch (e4) {
        console.error('[SRA] Gson 失败: ' + e4)
        return null
    }
}

var SRA_writeText = function (path, content) {
    try {
        var Path = Java.loadClass('java.nio.file.Path')
        var Files = Java.loadClass('java.nio.file.Files')
        var p = Path.of(path)
        Files.createDirectories(p.getParent())
        Files.writeString(p, content)
        return true
    } catch (e1) {
        try {
            JsonIO.write(path, JsonIO.parseRaw(content))
            return true
        } catch (e2) {
            console.error('[SRA] 写入失败 ' + path + ' -> ' + e1 + ' / ' + e2)
            return false
        }
    }
}

var SRA_loadGates = function () {
    var data = SRA_readJson(SRA_CFG)
    if (!data || !data.gates) {
        console.warn('[SRA] gates.json 缺失，拦截层关闭')
        SRA_gates = []
        return
    }
    SRA_gates = data.gates
    if (data.settings) {
        SRA_settings.recipe_restrictions = !!data.settings.recipe_restrictions
        SRA_settings.recipe_separator = String(data.settings.recipe_separator || '//')
    }
    console.info('[SRA] 载入 ' + SRA_gates.length + ' 条拦截规则，配方限制=' + SRA_settings.recipe_restrictions)
}

SRA_loadGates()

// ---- 1. 配方事件：产物 id -> 真实配方 id ---------------------

// 取配方的 RecipeType id：AStages 的 recipe 限制对象要求 "<type>//<id>"
var SRA_recipeTypeOf = function (recipe) {
    try {
        if (!recipe.getRecipeType) return ''
        var t = recipe.getRecipeType()
        if (!t) return ''
        if (t.id) return String(t.id)
        if (t.unwrapKey) {
            var key = t.unwrapKey()
            if (key.isPresent && key.isPresent()) return String(key.get().location())
        }
        return ''
    } catch (e) {
        return ''
    }
}

ServerEvents.recipes(function (event) {
    if (SRA_gates.length === 0) SRA_loadGates()

    if (!SRA_settings.recipe_restrictions) {
        console.info('[SRA] 配方限制开关关闭，本阶段只做 item 限制（gates.json → settings.recipe_restrictions）')
        return
    }

    var server = event.server ? event.server : null
    var payload = []

    for (var g = 0; g < SRA_gates.length; g++) {
        var gate = SRA_gates[g]
        var gateId = String(gate.id)
        var ids = []
        var outputs = gate.outputs || []
        for (var i = 0; i < outputs.length; i++) {
            var outId = String(outputs[i])
            try {
                event.forEachRecipe({ output: outId }, function (recipe) {
                    var rid = String(recipe.getId())
                    var rtype = SRA_recipeTypeOf(recipe)
                    if (rtype.length === 0 || rid.length === 0) return
                    var composed = rtype + SRA_settings.recipe_separator + rid
                    if (ids.indexOf(composed) < 0 && ids.length < 64) ids.push(composed)
                })
            } catch (e) {
                console.warn('[SRA] 收集配方失败 ' + outId + ': ' + e)
            }
        }
        SRA_recipeIds[gateId] = ids
        payload.push(gateId + '=' + ids.join('|'))
        console.info('[SRA] ' + gateId + ' 收集到 ' + ids.length + ' 条配方 id')
    }

    if (server) {
        try { server.persistentData.putString(SRA_MAP, payload.join(';')) } catch (e) { }
    }
})

// ---- 2. 应用：API / 命令（逐条独立尝试） ---------------------

var SRA_tryApi = function (kind, id, stage, object) {
    var Types = Java.loadClass('com.alessandro.astages.engine.store.ASimpleRestrictionTypes')
    var Mgr = Java.loadClass('com.alessandro.astages.engine.ASimpleRestrictionManager')
    var type = (kind === 'recipe') ? Types.RECIPE : Types.ITEM
    Mgr.addRestriction(type, id, stage, object)
}

var SRA_tryCmd = function (server, kind, id, stage, object) {
    server.runCommandSilent('astages_simple restrict ' + id + ' stage ' + stage + ' ' + kind + ' ' + object)
}

var SRA_applyOne = function (server, kind, id, stage, object) {
    try {
        SRA_tryApi(kind, id, stage, object)
        return 'api'
    } catch (e) {
        if (SRA_lastApiError !== String(e)) {
            SRA_lastApiError = String(e)
            console.warn('[SRA] API 失败（' + kind + ' ' + object + '）: ' + e)
        }
    }
    try {
        SRA_tryCmd(server, kind, id, stage, object)
        return 'cmd'
    } catch (e2) {
        return 'none'
    }
}

// ---- 3. 兜底：直接生成 AStages 的 json，下次启动必生效 --------

var SRA_writeRestrictionFiles = function () {
    var items = []
    var recipes = []

    for (var g = 0; g < SRA_gates.length; g++) {
        var gate = SRA_gates[g]
        var gateId = String(gate.id)
        var stage = String(gate.unlock)

        var blocks = gate.blocks || []
        for (var k = 0; k < blocks.length; k++) {
            items.push({ id: gateId + '_i' + k, stage: stage, object: String(blocks[k]) })
        }

        var rid = SRA_recipeIds[gateId] || []
        for (var i = 0; i < rid.length; i++) {
            recipes.push({ id: gateId + '_r' + i, stage: stage, object: String(rid[i]) })
        }
        var explicit = gate.recipes || []
        for (var m = 0; m < explicit.length; m++) {
            recipes.push({ id: gateId + '_x' + m, stage: stage, object: String(explicit[m]) })
        }
    }

    if (!SRA_settings.recipe_restrictions) recipes = []

    var okI = SRA_writeText(SRA_DIR + 'item.json', JSON.stringify(items, null, 2))
    var okR = SRA_writeText(SRA_DIR + 'recipe.json', JSON.stringify(recipes, null, 2))
    console.info('[SRA] 兜底文件写入 item=' + okI + '(' + items.length + ') recipe=' + okR + '(' + recipes.length + ')')
    return items.length + recipes.length
}

// ---- 4. 主流程 ------------------------------------------------

var SRA_readMap = function (server) {
    var out = {}
    for (var k in SRA_recipeIds) out[k] = SRA_recipeIds[k]
    try {
        var raw = String(server.persistentData.getString(SRA_MAP) || '')
        if (raw.length === 0) return out
        var groups = raw.split(';')
        for (var i = 0; i < groups.length; i++) {
            var kv = groups[i].split('=')
            if (kv.length < 2) continue
            if (out[kv[0]]) continue
            out[kv[0]] = kv[1].length > 0 ? kv[1].split('|') : []
        }
    } catch (e) { }
    return out
}

var SRA_ensure = function (server, verbose, force) {
    if (!server) return 0
    if (SRA_gates.length === 0) SRA_loadGates()

    var map = SRA_readMap(server)
    var applied = 0
    var viaApi = 0
    var viaCmd = 0

    for (var g = 0; g < SRA_gates.length; g++) {
        var gate = SRA_gates[g]
        var gateId = String(gate.id)
        var stage = String(gate.unlock)
        var rid = SRA_settings.recipe_restrictions ? (map[gateId] || []) : []

        for (var i = 0; i < rid.length; i++) {
            var r = SRA_applyOne(server, 'recipe', gateId + '_r' + i, stage, rid[i])
            if (r === 'api') viaApi++
            if (r === 'cmd') viaCmd++
            if (r !== 'none') applied++
        }

        var blocks = gate.blocks || []
        for (var k = 0; k < blocks.length; k++) {
            var b = SRA_applyOne(server, 'item', gateId + '_i' + k, stage, String(blocks[k]))
            if (b === 'api') viaApi++
            if (b === 'cmd') viaCmd++
            if (b !== 'none') applied++
        }

        var explicit = gate.recipes || []
        for (var m = 0; m < explicit.length; m++) {
            var x = SRA_applyOne(server, 'recipe', gateId + '_x' + m, stage, String(explicit[m]))
            if (x === 'api') viaApi++
            if (x === 'cmd') viaCmd++
            if (x !== 'none') applied++
        }
    }

    // 兜底文件始终按当前数据重写（内容稳定，不会重复膨胀）
    var filesTotal = SRA_writeRestrictionFiles()

    try {
        server.persistentData.putString(SRA_MARK, 'api=' + viaApi + ',cmd=' + viaCmd + ',files=' + filesTotal)
    } catch (e) { }

    if (verbose) {
        console.info('[SRA] 应用完成：api=' + viaApi + ' cmd=' + viaCmd + ' 兜底文件条目=' + filesTotal)
    }
    return applied
}

// ---- 5. 触发点 ------------------------------------------------

ServerEvents.loaded(function (event) {
    SRA_ensure(event.server, true)
})

PlayerEvents.loggedIn(function (event) {
    try { SRA_ensure(event.server, false) } catch (e) { console.warn('[SRA] 登录补应用失败: ' + e) }
})

// ---- 6. 命令 --------------------------------------------------

ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands

    var root = Commands.literal('research')
        .requires(function (src) { return src.hasPermission(2) })

    var gateNode = Commands.literal('gate')
        .executes(function (ctx) {
            var src = ctx.getSource()
            var map = SRA_readMap(src.getServer())
            src.sendSystemMessage(Text.of('§b[AStages] §f规则 ' + SRA_gates.length + '，目录 ' + SRA_DIR))
            for (var g = 0; g < SRA_gates.length; g++) {
                var gate = SRA_gates[g]
                var rid = map[String(gate.id)] || []
                src.sendSystemMessage(Text.of('§f' + gate.id + ' §7stage=' + gate.unlock + ' 配方=' + rid.length + ' 方块=' + ((gate.blocks || []).length)))
            }
            if (SRA_lastApiError.length > 0) {
                src.sendSystemMessage(Text.of('§7最近 API 错误: ' + SRA_lastApiError))
            }
            return 1
        })

    gateNode.then(Commands.literal('apply').executes(function (ctx) {
        var src = ctx.getSource()
        var n = SRA_ensure(src.getServer(), true, true)
        src.sendSystemMessage(Text.of('§a[AStages] 应用 ' + n + ' 条，兜底文件已重写'))
        return 1
    }))

    gateNode.then(Commands.literal('probe').executes(function (ctx) {
        var src = ctx.getSource()
        try {
            var Types = Java.loadClass('com.alessandro.astages.engine.store.ASimpleRestrictionTypes')
            src.sendSystemMessage(Text.of('§a[SRA] ASimpleRestrictionTypes 已加载'))
            try {
                src.sendSystemMessage(Text.of('§7RECIPE=' + Types.RECIPE + ' ITEM=' + Types.ITEM))
            } catch (e1) {
                src.sendSystemMessage(Text.of('§c取字段失败: ' + e1))
            }
        } catch (e0) {
            src.sendSystemMessage(Text.of('§c类加载失败: ' + e0))
        }
        try {
            var Mgr = Java.loadClass('com.alessandro.astages.engine.ASimpleRestrictionManager')
            var ms = Mgr.getMethods()
            var names = []
            for (var i = 0; i < ms.length && names.length < 10; i++) {
                var nm = String(ms[i].getName())
                if (nm.indexOf('add') >= 0 || nm.indexOf('remove') >= 0) names.push(nm)
            }
            src.sendSystemMessage(Text.of('§7Manager 方法: ' + names.join(', ')))
        } catch (e2) {
            src.sendSystemMessage(Text.of('§cManager 反射失败: ' + e2))
        }
        src.sendSystemMessage(Text.of('§7最近 API 错误: ' + (SRA_lastApiError || '(无)')))
        return 1
    }))

    root.then(gateNode)
    event.register(root)
})
