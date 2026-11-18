// ============================================================
// 溯洄研究系统 —— 研究终端（P4）
// 位置：kubejs/server_scripts/research_core/terminal.js
// ------------------------------------------------------------
// 两条通道，互为兜底：
//   1) LDLib2 方块界面：LDLib2UI.block('sink_research_terminal', ...) + openBlockUI
//      （LDLib 的 KubeJS 绑定是官方插件，但界面搭建 API 没有文档，用 try 包住）
//   2) 聊天版：/research tree、/research need <物品>，零依赖、一定可用
//
// 本文件自带图加载（KubeJS 每个脚本独立作用域），禁止 const/let。
// ============================================================

var SRT_DIR = 'kubejs/config/sinkresearch/'
var SRT_NODES = {}
var SRT_ORDER = []
var SRT_UI_ID = 'sink_research_terminal'

// ---- 图加载 ------------------------------------------------

var SRT_readJson = function (path) {
    var text = ''
    try {
        text = String(JsonIO.readString(path))
    } catch (e1) {
        try {
            var P = Java.loadClass('java.nio.file.Path')
            text = String(JsonIO.readString(P.of(path)))
        } catch (e2) {
            return null
        }
    }
    try {
        var o = JSON.parse(text)
        if (o) return o
    } catch (e) { }
    return null
}

var SRT_load = function () {
    SRT_NODES = {}
    SRT_ORDER = []
    var man = SRT_readJson(SRT_DIR + 'manifest.json')
    if (!man || !man.pages) return
    for (var i = 0; i < man.pages.length; i++) {
        var page = SRT_readJson(SRT_DIR + String(man.pages[i]))
        if (!page || !page.nodes) continue
        for (var k = 0; k < page.nodes.length; k++) {
            var n = page.nodes[k]
            SRT_NODES[String(n.id)] = n
            SRT_ORDER.push(String(n.id))
        }
    }
}
SRT_load()

var SRT_unlocks = function (server) {
    var set = {}
    try {
        var raw = String(server.persistentData.getString('sinkresearch.unlocks') || '')
        if (raw.length > 0) {
            var parts = raw.split(',')
            for (var i = 0; i < parts.length; i++) if (parts[i].length > 0) set[parts[i]] = true
        }
    } catch (e) { }
    return set
}

var SRT_done = function (node, unlocks) {
    var keys = node.unlock || []
    if (keys.length === 0) return true
    for (var i = 0; i < keys.length; i++) if (unlocks[String(keys[i])]) return true
    return false
}

var SRT_ready = function (node, unlocks) {
    var req = node.requires || {}
    var children = req.or || req.and || []
    if (children.length === 0) return true
    var op = req.or ? 'or' : 'and'
    if (op === 'or') {
        for (var i = 0; i < children.length; i++) {
            var c = SRT_NODES[String(children[i])]
            if (c && SRT_done(c, unlocks)) return true
        }
        return false
    }
    for (var k = 0; k < children.length; k++) {
        var d = SRT_NODES[String(children[k])]
        if (!d || !SRT_done(d, unlocks)) return false
    }
    return true
}

var SRT_costLine = function (node) {
    var out = []
    var inputs = node.inputs || {}
    var items = inputs.items || []
    for (var i = 0; i < items.length; i++) out.push(items[i].id + '×' + items[i].count)
    var fluids = inputs.fluids || []
    for (var k = 0; k < fluids.length; k++) out.push(fluids[k].id + ' ' + fluids[k].amount + 'mB')
    if (inputs.energy) out.push('FE ' + inputs.energy)
    if (node.duration) out.push('基础 ' + Math.round(Number(node.duration) / 20) + 's')
    if (node.kind === 'milestone') out.push('§d[里程碑] ' + (node.trigger ? JSON.stringify(node.trigger) : ''))
    return out.join(' §7/ ')
}

var SRT_lines = function (server) {
    var unlocks = SRT_unlocks(server)
    var lines = []
    var done = 0
    for (var i = 0; i < SRT_ORDER.length; i++) {
        var n = SRT_NODES[SRT_ORDER[i]]
        var isDone = SRT_done(n, unlocks)
        var ready = SRT_ready(n, unlocks)
        if (isDone) done++
        var mark = isDone ? '§a✔' : (ready ? '§e▶' : '§7✘')
        lines.push(mark + ' §f' + n.id + ' §7(' + n.era + ')')
    }
    var head = '§b研究树 §7(' + done + '/' + SRT_ORDER.length + ' 已完成)'
    return { head: head, lines: lines }
}

// ---- 聊天版终端 ---------------------------------------------

ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands
    var root = Commands.literal('research')
        .requires(function (src) { return src.hasPermission(0) })

    root.then(Commands.literal('tree').executes(function (ctx) {
        var src = ctx.getSource()
        var data = SRT_lines(src.getServer())
        src.sendSystemMessage(Text.of(data.head))
        for (var i = 0; i < data.lines.length; i++) src.sendSystemMessage(Text.of(data.lines[i]))
        src.sendSystemMessage(Text.of('§7/research need <物品id> 查某个产物还差什么'))
        return 1
    }))

    root.then(Commands.literal('need')
        .then(Commands.argument('target', event.arguments.STRING.create(event))
            .executes(function (ctx) {
                var src = ctx.getSource()
                var target = String(event.arguments.STRING.getResult(ctx, 'target'))
                var unlocks = SRT_unlocks(src.getServer())
                var found = false
                for (var i = 0; i < SRT_ORDER.length; i++) {
                    var n = SRT_NODES[SRT_ORDER[i]]
                    var outs = (n.outputs || {}).items || []
                    var hit = false
                    for (var k = 0; k < outs.length; k++) if (String(outs[k].id) === target) hit = true
                    var keys = n.unlock || []
                    for (var m = 0; m < keys.length; m++) if (String(keys[m]).indexOf(target) >= 0) hit = true
                    if (!hit) continue
                    found = true
                    src.sendSystemMessage(Text.of('§b' + n.id + ' §7(' + (SRT_done(n, unlocks) ? '§a已完成§7)' : '§c未完成§7)')))
                    src.sendSystemMessage(Text.of(' §7成本: ' + SRT_costLine(n)))
                    var req = (n.requires || {}).and || (n.requires || {}).or || []
                    if (req.length > 0) src.sendSystemMessage(Text.of(' §7前置: ' + req.join(', ')))
                }
                if (!found) src.sendSystemMessage(Text.of('§7没有节点产出/解锁 ' + target))
                return 1
            })))

    event.register(root)
})

// ---- LDLib2 方块界面（失败只打日志，不影响游戏） ---------------

var SRT_buildText = function (server) {
    var d = SRT_lines(server)
    var all = [d.head]
    for (var i = 0; i < d.lines.length; i++) all.push(d.lines[i])
    return all.join('\n')
}

try {
    LDLib2UI.block(SRT_UI_ID, function (ev) {
        try {
            var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
            var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
            var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
            var label = new Label()
            try { label.setText(Text.of(SRT_buildText(ev.player.level.server))) } catch (e1) {
                label.setValue(Text.of(SRT_buildText(ev.player.level.server)))
            }
            ev.modularUI = ModularUI.of(UI.of(label), ev.player)
        } catch (e) {
            console.error('[SRT] 构建终端界面失败: ' + e)
        }
    })
    console.info('[SRT] 已注册 LDLib2 方块界面 ' + SRT_UI_ID)
} catch (e) {
    console.error('[SRT] LDLib2UI 注册失败（界面不可用，聊天版仍可用）: ' + e)
}

BlockEvents.rightClicked('kubejs:research_terminal', function (event) {
    var player = event.player
    if (!player) return
    try {
        var Types = Java.loadClass('com.lowdragmc.lowdraglib2.integration.kjs.ui.LDKJSMenuTypes')
        var opened = Types.openBlockUI(player, event.block.pos, SRT_UI_ID)
        if (!opened) {
            player.tell(Text.of('§7终端界面未就绪，请用 §e/research tree'))
        }
    } catch (e) {
        player.tell(Text.of('§7终端界面不可用，请用 §e/research tree'))
        console.warn('[SRT] openBlockUI 失败: ' + e)
    }
})

// ---- 终端方块配方 -------------------------------------------

ServerEvents.recipes(function (event) {
    event.shaped('kubejs:research_terminal', [
        'BSB',
        'SCS',
        'BSB'
    ], {
        B: 'create:brass_sheet',
        S: 'minecraft:glass_pane',
        C: 'kubejs:blank_blueprint'
    }).id('kubejs:sink_research/research_terminal')
})
