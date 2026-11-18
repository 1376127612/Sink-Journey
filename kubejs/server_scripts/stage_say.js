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
// ⚠ 注意：这里原来用的是 <#RRGGBB> 标记，但本实例的 rhino-2101.2.8 有一个 bug：
//   「包含花括号的正则字面量」（例如 /\{6\}/）会被解析坏，匹配不到任何东西。
//   所以已经改成不含花括号的 [c=#RRGGBB]，旧写法不再生效，请按新写法填文本。
//
// 改完存盘，在游戏里执行 /reload 即可生效（server_scripts 不用重启游戏）。
// ============================================================================

// ============================ 剧本数据 =====================================
// 每个剧本是一个数组，按顺序播放；delay 是「距离上一条」的延时时长。
const STAGES = {
    stage1: [
    { delay: 0, color: '#adb5bd', text: '该死的盒饭...烧得胃里像有火在烧...' },
    { delay: 2, color: '#ced4da', text: '我...这是在哪？' },
    { delay: 2.5, color: '#495057', text: '......' },
    { delay: 2, color: '#adb5bd', text: '呃...头好疼，像要裂开一样...' },
    { delay: 2.5, color: '#6c757d', text: '？？？：博士......我们的[c=#ff4d4f]计划[c=#adb5bd]...好像[c=#ff4d4f]失败[c=#adb5bd]了...[c=#6c757d]@@@@￥#%...' },
    { delay: 3, text: '[c=#ffd700]叮[c=#ffffff]，[c=#4dabf7]系[c=#20c997]统[c=#ffffff]已[c=#ff6b6b]激[c=#cc5de8]活' },
    { delay: 2, text: '[c=#ffffff]这里是，[c=#ff6b6b]边[c=#ffa94d]缘[c=#fcc419]世[c=#51cf66]界[c=#339af0]！' },
    { delay: 2, text: '[c=#ffffff]现在，请[c=#ff4d4f]活[c=#ffffff]下去[c=#ff4d4f]！活[c=#ffffff]下[c=#ff4d4f]去[c=#ffffff]！' }
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
 */
function toTicks(delay) {
    if (delay == null) {
        return 0
    }
    if (typeof delay === 'number') {
        return Math.max(0, Math.round(delay * 20))
    }
    const s = String(delay).trim().toLowerCase()
    let numEnd = 0
    while (numEnd < s.length) {
        const c = s.charAt(numEnd)
        if ((c >= '0' && c <= '9') || c === '.') {
            numEnd++
        } else if (numEnd === 0 && (c === '-' || c === '+')) {
            numEnd++
        } else {
            break
        }
    }
    if (numEnd === 0) {
        return 0
    }
    const v = parseFloat(s.substring(0, numEnd))
    if (isNaN(v)) {
        return 0
    }
    const unit = s.substring(numEnd).trim()
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

/**
 * 安排一条台词。
 *
 * 注意：这里必须把 line / when 作为**函数参数**传进来，不能在循环体里用
 * `const line = ...` 再被闭包捕获 —— KubeJS 的 Rhino 会把「循环里被闭包捕获的
 * const」提到函数作用域，第二次循环时报 `TypeError: redeclaration of var line`。
 */
function scheduleLine(server, id, run, when, line) {
    server.scheduleInTicks(when, () => {
        if (RUNS[id] !== run) {
            return // 这个剧本已经被重新触发，跳过旧台词
        }
        server.tell(buildMessage(line.text, line.color))
    })
}

function playStage(server, id) {
    if (!hasStage(id)) {
        return
    }
    const lines = STAGES[id]
    const run = ++RUN_COUNTER
    RUNS[id] = run

    let at = 0 // 累计 tick
    for (let i = 0; i < lines.length; i++) {
        at += toTicks(lines[i].delay)
        scheduleLine(server, id, run, at, lines[i])
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
                        playStage(ctx.source.server, id)
                        return 1
                    })
            )
    )
})