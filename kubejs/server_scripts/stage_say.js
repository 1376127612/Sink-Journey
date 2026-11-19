// ============================================================================
// /stage_say <剧本> —— 播放一段「逐条延时 + 逐字十六进制颜色」的台词
// ----------------------------------------------------------------------------
// 用法：
//   /stage_say stage1        播放 stage1 剧本
//   /stage_say               不带参数时列出所有可用剧本
//
// 十六进制颜色：在文本里写 [c=#RRGGBB]，它后面（直到下一个标记）的文字会变成该颜色，
// 所以可以让每一个字都不一样：
//   '这[c=#ff0000]是[c=#00ff00]彩[c=#0000ff]色'
// 也可以用 gradient() 自动铺一层逐字渐变：
//   { delay: 2, text: gradient('渐变色台词', '#ff8844', '#4488ff') }
// 另外每条台词还可以用 color 指定整条的默认颜色。
// 标记也可以写成 [c=#ff0000:字]，直接给单个字上色。
//
// 延时 delay：数字 = 秒（可写 0.5）；字符串支持 '40t'(tick)、'2s'(秒)、'500ms'。
//
// ---------------------------------------------------------------------------
// 每条台词除了 text，还可以附带下面这些「同一时刻触发」的动作（都不写就不触发）：
//
//   title / subtitle / actionbar      屏幕文字（支持 titleColor 等单独配色）
//   fadeIn / stay / fadeOut           title 时间，单位 tick，默认 10/40/20
//
//   sound / volume / pitch            音效，如 sound: 'minecraft:ui.toast.in'
//   particle / count / speed          粒子，如 particle: 'minecraft:flame'
//   spreadX / spreadY / spreadZ       粒子散布范围，默认 0.6 / 1.2 / 0.6
//   particleMode                      normal | force，默认 normal
//
//   give                              发物品，写 /give 的参数部分，如 'minecraft:bread 3'
//   cmd                               任意原版命令；里面的 @p 会替换成发起剧本的玩家
//   to                                只对指定玩家生效（名字，逗号分隔），默认全服
//
// 例子：
//   { delay: 2, text: '活下去', sound: 'minecraft:entity.ender_dragon.growl',
//     title: '活 下 去', titleColor: '#ff4d4f',
//     particle: 'minecraft:totem_of_undying', count: 30,
//     give: 'minecraft:bread 3', cmd: 'effect give @p minecraft:regeneration 5 1' }
//
// ⚠ 注意：这里原来用的是 <#RRGGBB> 标记，但本实例的 rhino-2101.2.8 有一个 bug：
//   「包含花括号的正则字面量」（例如 /\{6\}/）会被解析坏，匹配不到任何东西。
//   所以已经改成不含花括号的 [c=#RRGGBB]，旧写法不再生效，请按新写法填文本。
//   （title/actionbar 走 JSON，会自动去掉 [c=...] 标记，配色请用 titleColor 这类字段）
//
// 改完存盘，在游戏里执行 /reload 即可生效（server_scripts 不用重启游戏）。
// ============================================================================

// ============================ 剧本数据 =====================================
// 每个剧本是一个数组，按顺序播放；delay 是「距离上一条」的延时时长。
const STAGES = {
    stage1: [
    { delay: 0, color: '#adb5bd', text: '该死的盒饭...烧得胃里像有火在烧...',
      sound: 'minecraft:entity.player.burp', volume: 0.6, pitch: 0.8 },
    { delay: 2, color: '#ced4da', text: '我...这是在哪？',
      particle: 'minecraft:smoke', count: 12, speed: 0.02 },
    { delay: 2.5, color: '#495057', text: '......' },
    { delay: 2, color: '#adb5bd', text: '呃...头好疼，像要裂开一样...',
      sound: 'minecraft:entity.player.hurt', volume: 0.7, pitch: 0.9 },
    { delay: 2.5, color: '#6c757d', text: '？？？：博士......我们的[c=#ff4d4f]计划[c=#adb5bd]...好像[c=#ff4d4f]失败[c=#adb5bd]了...[c=#6c757d]@@@@￥#%...',
      sound: 'minecraft:block.note_block.bass', volume: 0.8, pitch: 0.6,
      particle: 'minecraft:soul', count: 20, speed: 0.03 },
    { delay: 3, text: '[c=#ffd700]叮[c=#ffffff]，[c=#4dabf7]系[c=#20c997]统[c=#ffffff]已[c=#ff6b6b]激[c=#cc5de8]活',
      sound: 'minecraft:ui.toast.challenge_complete', volume: 1.0, pitch: 1.0,
      particle: 'minecraft:end_rod', count: 40, spreadY: 2.0, speed: 0.1,
      title: '系 统 已 激 活', titleColor: '#4dabf7',
      subtitle: '正在为你分配身份', subtitleColor: '#adb5bd',
      fadeIn: 10, stay: 50, fadeOut: 20 },
    { delay: 2, text: '[c=#ffffff]这里是，[c=#ff6b6b]边[c=#ffa94d]缘[c=#fcc419]世[c=#51cf66]界[c=#339af0]！',
      particle: 'minecraft:totem_of_undying', count: 30, speed: 0.15,
      title: '边 缘 世 界', titleColor: '#ffffff',
      subtitle: '第 一 章 · 错 误 登 录', subtitleColor: '#adb5bd' },
    { delay: 2, text: '[c=#ffffff]现在，请[c=#ff4d4f]活[c=#ffffff]下去[c=#ff4d4f]！活[c=#ffffff]下[c=#ff4d4f]去[c=#ffffff]！',
      sound: 'minecraft:entity.ender_dragon.growl', volume: 0.5, pitch: 1.3,
      title: '活 下 去', titleColor: '#ff4d4f',
      fadeIn: 5, stay: 60, fadeOut: 30,
      give: 'minecraft:bread 3',
      actionbar: '已获得：面包 x3', actionbarColor: '#ffd43b' }
],

    stage2: [
        {
            delay: 0,
            text: '[c=#ff0000]只[c=#ff8800]要[c=#ffff00]你[c=#00ff00]愿[c=#00ffff]意[c=#0000ff]，' +
                '[c=#ff00ff]火[c=#ff0000]就[c=#ff8800]不[c=#ffff00]会[c=#00ff00]熄[c=#00ffff]灭[c=#0000ff]。'
        },
        { delay: 2, color: '#ffd43b', text: '——守着火的人，终会被火记住。' }
    ]
}

// ============================ 配置 =========================================
const PERMISSION_LEVEL = 2 // 需要 OP（2 级）；想所有人都能用就改成 0

// ============================ 工具函数 =====================================

/** 去掉开头的 '#'（不用正则，规避 Rhino 的问题） */
function stripHash(s) {
    return s.charAt(0) === '#' ? s.substring(1) : s
}

/** 是否是 6 位十六进制字符串 */
function isHex6(s) {
    if (s.length !== 6) {
        return false
    }
    var i, c, ok
    for (i = 0; i < 6; i++) {
        c = s.charAt(i)
        ok = (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F')
        if (!ok) {
            return false
        }
    }
    return true
}

/** 解析 '#RRGGBB' / 'RRGGBB' / '#RGB' 为 [r, g, b]，非法返回 null */
function parseHex(color) {
    var s = stripHash(String(color == null ? '' : color).trim())
    if (s.length === 3) {
        s = s.charAt(0) + s.charAt(0) + s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2)
    }
    if (!isHex6(s)) {
        return null
    }
    return [
        parseInt(s.substring(0, 2), 16),
        parseInt(s.substring(2, 4), 16),
        parseInt(s.substring(4, 6), 16)
    ]
}

/** 0-255 数字转两位十六进制 */
function toHex2(n) {
    var v = Math.max(0, Math.min(255, Math.round(n))).toString(16)
    return v.length === 1 ? '0' + v : v
}

/**
 * 逐字渐变：把一段文字转成带 [c=#RRGGBB] 标记的字符串（每个字一个颜色）。
 * 返回值可以直接当 text 用。
 *
 * 循环体里只做赋值，变量全部预先声明（见 buildMessage 的说明）。
 */
function gradient(text, from, to) {
    var a = parseHex(from) || [255, 255, 255]
    var b = parseHex(to) || a
    var src = String(text == null ? '' : text)
    var chars = []
    var i, ch, t, out
    for (i = 0; i < src.length; i++) {
        chars.push(src.charAt(i))
    }
    var last = Math.max(chars.length - 1, 1)
    out = ''
    for (i = 0; i < chars.length; i++) {
        t = i / last
        out += '[c=#' +
            toHex2(a[0] + (b[0] - a[0]) * t) +
            toHex2(a[1] + (b[1] - a[1]) * t) +
            toHex2(a[2] + (b[2] - a[2]) * t) + ']' + chars[i]
    }
    return out
}

/**
 * delay -> tick 数
 *   number  : 秒（0.5 = 10 tick）
 *   string  : '40t' / '2s' / '500ms'
 *
 * 手写解析，不用正则：既能避开 Rhino 的正则问题，也不怕各种边界写法。
 *
 * ⚠ 循环体内不要声明 const/let（见 buildMessage 上的说明）：
 *   这版 Rhino 会让循环内的块级变量在下一轮「卡住」，
 *   表现为数字扫到字符串末尾、单位丢失（'500ms' 会被当成 500 秒）。
 */
function toTicks(delay) {
    if (delay == null) {
        return 0
    }
    if (typeof delay === 'number') {
        return Math.max(0, Math.round(delay * 20))
    }
    var s = String(delay).trim().toLowerCase()
    var numEnd = 0
    var c
    for (; numEnd < s.length; numEnd++) {
        c = s.charAt(numEnd)
        if ((c >= '0' && c <= '9') || c === '.') {
            continue
        }
        if (numEnd === 0 && (c === '-' || c === '+')) {
            continue
        }
        break
    }
    if (numEnd === 0) {
        return 0
    }
    var v = parseFloat(s.substring(0, numEnd))
    if (isNaN(v)) {
        return 0
    }
    var unit = s.substring(numEnd).trim()
    if (unit === 't' || unit === 'tick' || unit === 'ticks') {
        return Math.max(0, Math.round(v))
    }
    if (unit === 'ms') {
        return Math.max(0, Math.round(v / 50))
    }
    return Math.max(0, Math.round(v * 20))
}

/** 单段文字 -> 带颜色的组件 */
function colorPart(str, color) {
    const c = Text.literal(str)
    return color ? c.color(color) : c
}

/**
 * 把带颜色标记的文本转成 Minecraft 文本组件。
 *
 * 支持的标记（都不含花括号）：
 *   [c=#RRGGBB]      之后的文字用这个颜色，直到下一个标记
 *   [c=#RRGGBB:文字] 只给「文字」这一截上色
 *
 * ⚠ 本实例的 rhino-2101.2.8 有两个坑，这里都绕开了：
 *   1. 含花括号的正则字面量（如 /\{6\}/）会被解析坏 —— 所以不用花括号正则；
 *   2. while/for 循环体内声明 const/let 并调用会记录状态的宿主方法时，
 *      该变量在下一轮循环中可能被「卡住」，导致死循环 —— 所以循环体内
 *      一律只做赋值，变量都在循环外预先声明。
 */
function buildMessage(text, baseColor) {
    var raw = String(text == null ? '' : text)
    var root = Text.literal('')
    var OPEN = '[c='
    var color = baseColor || null
    var pos = 0
    var count = 0
    var start, end, body, inline, colon, parsed

    for (; pos < raw.length;) {
        start = raw.indexOf(OPEN, pos)
        if (start < 0) {
            root.append(colorPart(raw.substring(pos), color))
            count++
            break
        }
        end = raw.indexOf(']', start)
        if (end < 0) {
            // 标记没闭合，剩下的当普通文字，避免吞字
            root.append(colorPart(raw.substring(pos), color))
            count++
            break
        }
        if (start > pos) {
            root.append(colorPart(raw.substring(pos, start), color))
            count++
        }

        // 标记内容形如 #ff0000 或 #ff0000:文字
        body = raw.substring(start + OPEN.length, end)
        inline = null
        colon = body.indexOf(':')
        if (colon >= 0) {
            inline = body.substring(colon + 1)
            body = body.substring(0, colon)
        }
        parsed = parseHex(body)
        if (parsed) {
            color = '#' + (body.trim().charAt(0) === '#' ? body.trim().substring(1) : body.trim()).toLowerCase()
        }
        if (inline) {
            root.append(colorPart(inline, color))
            count++
        }
        pos = end + 1
    }

    if (count === 0) {
        return Text.literal(raw)
    }
    return root
}

// ============================ 播放逻辑 =====================================

/** 只认 STAGES 自己的键，避免 '/stage_say constructor' 这类原型链名字被当成剧本 */
function hasStage(id) {
    return Object.prototype.hasOwnProperty.call(STAGES, id)
}

// 每个剧本记录当前这一轮的编号；重复触发同一剧本时，旧一轮的后续台词会被作废
const RUNS = {}
let RUN_COUNTER = 0

// 舞台上所有玩家的名字（用于 @a）；没人在线时返回空串
function allPlayersTarget(server) {
    var list = server.players
    if (!list) {
        return ''
    }
    var names = []
    var i
    for (i = 0; i < list.size(); i++) {
        names.push(String(list.get(i).username))
    }
    return names.join(',')
}

/**
 * 执行一条命令。
 *
 * 统一走 server.runCommandSilent（内部是 withSuppressedOutput + performPrefixedCommand），
 * 比逐个绑定 Java API 稳，也不会把命令输出刷屏。
 * 一条命令失败只记日志，不影响后续台词和动作。
 */
function runCmd(server, cmd) {
    try {
        server.runCommandSilent(cmd)
    } catch (e) {
        console.error('[stage_say] 命令执行失败: ' + cmd + ' -> ' + e)
    }
}

/** 给全服播放音效（players 不给就全服） */
function playSound(server, line) {
    var snd = line.sound
    if (!snd) {
        return
    }
    var vol = (line.volume == null ? 1.0 : line.volume)
    var pitch = (line.pitch == null ? 1.0 : line.pitch)
    var who = line.to ? String(line.to) : allPlayersTarget(server)
    if (!who) {
        return // 没人在线
    }
    runCmd(server, 'playsound ' + snd + ' players ' + who + ' ~ ~ ~ ' + vol + ' ' + pitch)
}

/** 粒子：默认在玩家脚下放一圈 */
function spawnParticles(server, line) {
    var particle = line.particle
    if (!particle) {
        return
    }
    var who = line.to ? String(line.to) : allPlayersTarget(server)
    if (!who) {
        return
    }
    var count = (line.count == null ? 30 : line.count)
    var dx = (line.spreadX == null ? 0.6 : line.spreadX)
    var dy = (line.spreadY == null ? 1.2 : line.spreadY)
    var dz = (line.spreadZ == null ? 0.6 : line.spreadZ)
    var speed = (line.speed == null ? 0.05 : line.speed)
    var mode = (line.particleMode == null ? 'normal' : String(line.particleMode))
    runCmd(server, 'particle ' + particle + ' ~ ~1 ~ ' + dx + ' ' + dy + ' ' + dz +
        ' ' + speed + ' ' + count + ' ' + mode + ' ' + who)
}

/** title / subtitle / actionbar 三种屏幕文字 */
function showScreenText(server, line) {
    var who = line.to ? String(line.to) : allPlayersTarget(server)
    if (!who) {
        return
    }

    if (line.title) {
        var fadeIn = (line.fadeIn == null ? 10 : line.fadeIn)
        var stay = (line.stay == null ? 40 : line.stay)
        var fadeOut = (line.fadeOut == null ? 20 : line.fadeOut)
        runCmd(server, 'title ' + who + ' times ' + fadeIn + ' ' + stay + ' ' + fadeOut)
        runCmd(server, 'title ' + who + ' title ' + JSON.stringify(componentJson(line.title, line.titleColor)))
        if (line.subtitle) {
            runCmd(server, 'title ' + who + ' subtitle ' + JSON.stringify(componentJson(line.subtitle, line.subtitleColor)))
        }
    }
    if (line.actionbar) {
        runCmd(server, 'title ' + who + ' actionbar ' + JSON.stringify(componentJson(line.actionbar, line.actionbarColor)))
    }
}

/** 发奖励物品，写法同 /give 的字符串，例如 'minecraft:bread 3' */
function giveItems(server, line) {
    if (!line.give) {
        return
    }
    var who = line.to ? String(line.to) : allPlayersTarget(server)
    if (!who) {
        return
    }
    runCmd(server, 'give ' + who + ' ' + String(line.give))
}

/**
 * 组件 -> JSON 文本。
 *
 * 原版 title/actionbar 命令接收的是 JSON 文本组件，
 * 这里直接把 text/color 拼成最小 JSON，避免依赖 Text 组件的序列化细节。
 */
function componentJson(text, color) {
    var s = String(text == null ? '' : text)
    // 去掉本脚本的 [c=#xxxxxx] 标记（title 走 JSON 的 color 字段，不认这种标记）
    s = stripColorTags(s)
    var obj = { text: s }
    var c = color ? parseHex(color) : null
    if (c) {
        obj.color = '#' + normHex(color)
    }
    return obj
}

/** 去掉 [c=#xxxxxx] 标记，只保留文字 */
function stripColorTags(s) {
    var raw = String(s == null ? '' : s)
    var out = ''
    var pos = 0
    var start, end
    for (; pos < raw.length;) {
        start = raw.indexOf('[c=', pos)
        if (start < 0) {
            out += raw.substring(pos)
            break
        }
        end = raw.indexOf(']', start)
        if (end < 0) {
            out += raw.substring(pos)
            break
        }
        // [c=#ff0000:文字] 取冒号后的文字，[c=#ff0000] 直接丢弃
        var body = raw.substring(start + 3, end)
        var colon = body.indexOf(':')
        if (start > pos) {
            out += raw.substring(pos, start)
        }
        if (colon >= 0) {
            out += body.substring(colon + 1)
        }
        pos = end + 1
    }
    return out
}

/** 归一化成 6 位小写十六进制（不带 #） */
function normHex(color) {
    var s = stripHash(String(color == null ? '' : color).trim())
    if (s.length === 3) {
        s = s.charAt(0) + s.charAt(0) + s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2)
    }
    return s.toLowerCase()
}

/**
 * 执行一条台词条目上的所有「非台词」动作。
 *
 * 一条台词可以同时带台词和任意多个动作，它们都在同一个时间点触发。
 * 支持的动作：
 *   title / subtitle / actionbar + *_Color  屏幕文字
 *   fadeIn / stay / fadeOut                 title 停留时间（tick）
 *   give                                    /give 物品串，如 'minecraft:bread 3'
 *   cmd                                     任意原版命令（@p 会换成发起的玩家）
 *   sound / volume / pitch                  播放音效
 *   particle / count / spreadX|Y|Z / speed / particleMode  粒子
 *   to                                      只对指定玩家（名字，逗号分隔），默认全服
 */
function runActions(server, line, player) {
    showScreenText(server, line)
    giveItems(server, line)
    playSound(server, line)
    spawnParticles(server, line)

    if (line.cmd) {
        var cmds = String(line.cmd)
        var who = player ? String(player.username) : ''
        // @p 换成触发剧本的玩家
        if (who) {
            cmds = cmds.split('@p').join(who)
        }
        runCmd(server, cmds)
    }
}

/**
 * 安排一条台词（以及它附带的动作）。
 *
 * 注意：line / when 必须作为**函数参数**传进来，不能在循环体里用
 * `const line = ...` 再被闭包捕获 —— KubeJS 的 Rhino 会把「循环里被闭包捕获的
 * const」提到函数作用域，第二次循环时报 `TypeError: redeclaration of var line`。
 */
function scheduleLine(server, id, run, when, line, player) {
    server.scheduleInTicks(when, () => {
        if (RUNS[id] !== run) {
            return // 这个剧本已经被重新触发，跳过旧台词
        }
        if (line.text) {
            server.tell(buildMessage(line.text, line.color))
        }
        try {
            runActions(server, line, player)
        } catch (e) {
            console.error('[stage_say] 动作执行失败: ' + e)
        }
    })
}

function playStage(server, id, player) {
    if (!hasStage(id)) {
        return
    }
    const lines = STAGES[id]
    const run = ++RUN_COUNTER
    RUNS[id] = run

    let at = 0 // 累计 tick
    for (let i = 0; i < lines.length; i++) {
        at += toTicks(lines[i].delay)
        scheduleLine(server, id, run, at, lines[i], player)
    }
}

// ============================ 指令注册 =====================================

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('stage_say')
            .requires(src => src.hasPermission(PERMISSION_LEVEL))
            // /stage_say —— 列出所有剧本
            .executes(ctx => {
                const ids = Object.keys(STAGES)
                const msg = Text.gold('可用剧本：')
                ids.forEach((id, i) => {
                    if (i > 0) {
                        msg.append(Text.gray('、'))
                    }
                    msg.append(Text.green(id))
                })
                if (ids.length === 0) {
                    msg.append(Text.gray('（空）'))
                }
                ctx.source.sendSystemMessage(msg)
                return 1
            })
            // /stage_say <剧本>
            .then(
                Commands.argument('stage', Arguments.STRING.create(event))
                    .suggests((ctx, builder) => {
                        Object.keys(STAGES).forEach(id => builder.suggest(id))
                        return builder.buildFuture()
                    })
                    .executes(ctx => {
                        const id = String(Arguments.STRING.getResult(ctx, 'stage'))
                        if (!hasStage(id)) {
                            ctx.source.sendFailure(Text.red(
                                '没有这个剧本：' + id + '（可用：' + Object.keys(STAGES).join('、') + '）'
                            ))
                            return 0
                        }
                        // 记下发起的玩家，@p 和单人定向动作用得上
                        let who = null
                        try {
                            who = ctx.source.player
                        } catch (e) {
                            who = null // 由控制台发起时没有玩家
                        }
                        playStage(ctx.source.server, id, who)
                        return 1
                    })
            )
    )
})