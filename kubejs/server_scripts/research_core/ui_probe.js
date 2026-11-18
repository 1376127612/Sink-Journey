// ============================================================
// 溯洄研究系统 —— P4 终端 GUI 前置探针
// 位置：kubejs/server_scripts/research_core/ui_probe.js
// ------------------------------------------------------------
// 只做反射打印，不注册任何 UI、不改任何状态。
// 用法：/research ui probe
// 目的：确认 LDLib2 的 KubeJS 绑定到底暴露了哪些入口，
//       拿到结果再写真正的终端界面，避免盲写报错。
// ============================================================

var SRU_CLASSES = [
    'com.lowdragmc.lowdraglib2.integration.kjs.ui.LDKJSMenuTypes',
    'com.lowdragmc.lowdraglib2.integration.kjs.ui.UIEvents',
    'com.lowdragmc.lowdraglib2.integration.kjs.ui.UIEventJS',
    'com.lowdragmc.lowdraglib2.gui.ui.ModularUI'
]

ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands

    var root = Commands.literal('research')
        .requires(function (src) { return src.hasPermission(2) })

    var ui = Commands.literal('ui')

    ui.then(Commands.literal('probe').executes(function (ctx) {
        var src = ctx.getSource()
        var player = ctx.getSource().getPlayer()

        for (var i = 0; i < SRU_CLASSES.length; i++) {
            var name = SRU_CLASSES[i]
            try {
                var cls = Java.loadClass(name)
                src.sendSystemMessage(Text.of('§a[UI] 类可用: ' + name))
                try {
                    var ms = cls.getDeclaredMethods()
                    var names = []
                    for (var k = 0; k < ms.length && names.length < 12; k++) {
                        var mod = String(ms[k].getModifiers())
                        var mn = String(ms[k].getName())
                        if (mn.indexOf('$') === 0) continue
                        names.push(mn)
                    }
                    if (names.length > 0) src.sendSystemMessage(Text.of('§7  方法: ' + names.join(', ')))
                } catch (e1) {
                    src.sendSystemMessage(Text.of('§7  (反射方法失败: ' + e1 + ')'))
                }
            } catch (e0) {
                src.sendSystemMessage(Text.of('§c[UI] 类不可用: ' + name + ' -> ' + e0))
            }
        }

        // 尝试打开一个不存在的 UI，只用来看报错信息是什么形态
        if (player) {
            try {
                var Types = Java.loadClass('com.lowdragmc.lowdraglib2.integration.kjs.ui.LDKJSMenuTypes')
                var ok = Types.openPlayerUI(player, 'sinkresearch_terminal_probe')
                src.sendSystemMessage(Text.of('§7[UI] openPlayerUI 返回: ' + ok))
            } catch (e2) {
                src.sendSystemMessage(Text.of('§c[UI] openPlayerUI 抛错: ' + e2))
            }
        } else {
            src.sendSystemMessage(Text.of('§7[UI] 需要玩家执行才能测 openPlayerUI'))
        }

        src.sendSystemMessage(Text.of('§7[UI] 把以上内容发我，就能确定 P4 的注册入口'))
        return 1
    }))

    root.then(ui)
    event.register(root)
})
