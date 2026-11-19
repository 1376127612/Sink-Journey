// ============================================================
// 扫雷小游戏 —— 服务端入口
// ------------------------------------------------------------
// 职责：
//   1. 注册玩家界面 id（客户端同名界面见 client_scripts/research/minesweeper_ui.js）
//   2. /sweeper 打开界面；/sweeper win 是客户端通关后的结算入口
//   3. 结算：把玩家正在用的原始研究台（MBD2 单方块机）当前进度往前推
//
// 结算目标的选择顺序：
//   a. 玩家最近右键过的原始研究台（BlockEvents.rightClicked 记录在 player.persistentData）
//   b. 玩家周围 16x6x16 内最近的原始研究台
// 只动原始研究台，研究站 / 研究网络 / 其他机器一律不碰。
//
// 注意：LDLib2 的 KubeJS 界面需要在服务端和客户端各注册一次，
// 只注册一侧会导致菜单为 null（研究终端踩过这个坑）。
//
// 本文件禁止使用 const/let。
// ============================================================

var SM_UI_ID = 'sink_minesweeper'
var SM_TABLE_ID = 'kubejs:primitive_research_table'
var SM_TABLE_KEY = 'sinkresearch.sweeper.table'
var SM_WIN_KEY = 'sinkresearch.sweeper.lastwin'
var SM_BOOST_RATIO = 0.5       // 一次通关推进当前配方的 50%
var SM_WIN_COOLDOWN = 10000    // 防止命令刷进度
var SM_SCAN_XZ = 16
var SM_SCAN_Y = 6

try {
    LDLib2UI.player(SM_UI_ID, function (ev) {
        try {
            // 服务端这棵树只用于占位，真正的界面由客户端构建
            var Label = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.Label')
            var UI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UI')
            var ModularUI = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.ModularUI')
            var label = new Label()
            label.setText('§b扫雷')
            ev.modularUI = ModularUI.of(UI.of(label), ev.player)
        } catch (e) {
            console.error('[SM] 服务端界面构建失败: ' + e)
        }
    })
    console.info('[SM] 已注册服务端扫雷界面 ' + SM_UI_ID)
} catch (e) {
    console.error('[SM] LDLib2UI 服务端注册失败: ' + e)
}

// ---- 记录玩家最近使用的原始研究台 -----------------------------

BlockEvents.rightClicked(SM_TABLE_ID, function (event) {
    var player = event.player
    if (!player) return
    try {
        var pos = event.block.pos
        var dim = String(event.level.dimension)
        player.persistentData.putString(SM_TABLE_KEY,
            dim + '@' + pos.getX() + '_' + pos.getY() + '_' + pos.getZ())
    } catch (e) {
        console.warn('[SM] 记录研究台位置失败: ' + e)
    }
})

// ---- 结算：加速原始研究台 -------------------------------------

var SM_scanTable = function (player) {
    var BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
    var level = player.level
    var base = player.blockPosition()
    var best = null
    var bestD = 2147483647
    for (var dx = -SM_SCAN_XZ; dx <= SM_SCAN_XZ; dx++) {
        for (var dz = -SM_SCAN_XZ; dz <= SM_SCAN_XZ; dz++) {
            for (var dy = -SM_SCAN_Y; dy <= SM_SCAN_Y; dy++) {
                var pos = new BlockPos(base.getX() + dx, base.getY() + dy, base.getZ() + dz)
                if (!level.hasChunkAt(pos)) continue
                var state = level.getBlockState(pos)
                if (String(state.block.id) !== SM_TABLE_ID) continue
                var d = dx * dx + dy * dy + dz * dz
                if (d < bestD) {
                    bestD = d
                    best = pos
                }
            }
        }
    }
    return best
}

var SM_tablePos = function (player) {
    var raw = ''
    try { raw = String(player.persistentData.getString(SM_TABLE_KEY) || '') } catch (e) { raw = '' }
    if (raw.length > 0) {
        var at = raw.indexOf('@')
        var dim = at >= 0 ? raw.substring(0, at) : 'minecraft:overworld'
        var rest = at >= 0 ? raw.substring(at + 1) : raw
        var parts = rest.split('_')
        if (parts.length >= 3) {
            var x = Number(parts[0])
            var y = Number(parts[1])
            var z = Number(parts[2])
            if (!isNaN(x) && !isNaN(y) && !isNaN(z) && String(player.level.dimension) === dim) {
                var BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
                return new BlockPos(x, y, z)
            }
        }
    }
    return SM_scanTable(player)
}

var SM_boostTable = function (player) {
    var now = Date.now()
    var last = 0
    try { last = Number(player.persistentData.getLong(SM_WIN_KEY) || 0) } catch (e) { last = 0 }
    if (now - last < SM_WIN_COOLDOWN) {
        return '§7结算太频繁，' + Math.ceil((SM_WIN_COOLDOWN - (now - last)) / 1000) + 's 后再试'
    }

    var pos = SM_tablePos(player)
    if (!pos) return '§7附近没找到原始研究台（先右键一次研究台）'

    var machine = null
    try {
        var IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        machine = IMachine.ofMachine(player.level, pos).orElse(null)
    } catch (e) {
        console.warn('[SM] 读取研究台失败: ' + e)
        return '§7原始研究台读取失败，看日志 [SM]'
    }
    if (!machine) return '§7那里已经找不到原始研究台了'

    var logic = null
    try { logic = machine.getRecipeLogic() } catch (e) { logic = null }
    if (!logic || !logic.isWorking()) return '§7原始研究台当前没有在运行研究'

    var max = logic.getMaxProgress()
    if (max <= 0) return '§7研究进度读取失败'

    var before = logic.getProgress()
    var add = Math.max(1, Math.floor(max * SM_BOOST_RATIO))
    var after = Math.min(max, before + add)
    logic.setProgress(after)

    try { player.persistentData.putLong(SM_WIN_KEY, now) } catch (e) { }
    return '§b[扫雷] §f原始研究台加速 §7' + before + ' §f→ §7' + after + '§7 / ' + max + ' tick'
}

// ---- 命令 -----------------------------------------------------

ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands
    var root = Commands.literal('sweeper')
        .requires(function (src) { return src.hasPermission(0) })
        .executes(function (ctx) {
            var player
            try {
                player = ctx.getSource().getPlayerOrException()
            } catch (e0) {
                return 0
            }
            try {
                var Types = Java.loadClass('com.lowdragmc.lowdraglib2.integration.kjs.ui.LDKJSMenuTypes')
                if (!Types.openPlayerUI(player, SM_UI_ID)) {
                    player.tell(Text.of('§7扫雷界面未就绪（看日志 [SM]）'))
                }
            } catch (e) {
                player.tell(Text.of('§7扫雷界面不可用，看日志 [SM]'))
                console.warn('[SM] openPlayerUI 失败: ' + e)
            }
            return 1
        })

    // 客户端通关后调用：/sweeper win
    root.then(Commands.literal('win').executes(function (ctx) {
        var player
        try {
            player = ctx.getSource().getPlayerOrException()
        } catch (e0) {
            return 0
        }
        try {
            player.tell(Text.of(SM_boostTable(player)))
        } catch (e) {
            console.warn('[SM] 结算失败: ' + e)
            player.tell(Text.of('§7扫雷结算失败，看日志 [SM]'))
        }
        return 1
    }))

    event.register(root)
})
