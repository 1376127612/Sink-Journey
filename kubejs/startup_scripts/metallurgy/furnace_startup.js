// ============================================================
// 初期冶金 —— 炭炉机器注册（startup）
// 位置：kubejs/startup_scripts/metallurgy/furnace_startup.js
// ------------------------------------------------------------
// 3×3×3 砖砌外壳（结构见 furnace_structure.js）：
//   正面中间 = 控制器，左侧 = 输入口，右侧 = 输出口；
//   炉膛正中 = 篝火（控制器正后方），顶部中心留一格烟道。
// 炉况门槛（拟真核心）：
//   1. 炉膛篝火必须点燃（lit=true）——点炉仪式：先点火后封砖；被浇灭即停工
//   2. 炉体外壁任意位置贴 embers:atmospheric_bellows = 鼓风（L1+），提速 20%
//      （配方开始前判定一次；XZ 半径 3 / Y 半径 2 覆盖整台炉子）
//      只用 Embers 陶风箱，不接 Create 的鼓风/风扇。
// 本文件只在游戏启动时加载，/reload 不会重载。
// ============================================================

var CF_ID = 'kubejs:charcoal_furnace'
var CF_POOL = 'kubejs:charcoal_furnace'
var CF_CAMPFIRE = 'minecraft:campfire'
var CF_BELLOWS = 'embers:atmospheric_bellows'
var CF_BELLOWS_MULT = 0.8   // 鼓风：本批时长 ×0.8（提速 20%）
var CF_MIN_TICKS = 40       // 提速后不低于 2s，防止短配方被压成 0

var cfIsBlock = (level, x, y, z, id) => {
    try {
        return String(level.getBlock(x, y, z).id) === id
    } catch (err) {
        return false
    }
}

// 在控制器周围 3×3×3 内找炉膛篝火；返回其坐标，找不到返回 null
// （结构里篝火在控制器正后方，offset 0,0,-1，必在扫描范围内）
var cfFindCampfire = (level, pos) => {
    for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
            for (var dz = -1; dz <= 1; dz++) {
                if (cfIsBlock(level, pos.getX() + dx, pos.getY() + dy, pos.getZ() + dz, CF_CAMPFIRE)) {
                    return { x: pos.getX() + dx, y: pos.getY() + dy, z: pos.getZ() + dz }
                }
            }
        }
    }
    return null
}

// 篝火是否点燃（lit 属性；读不到就放行，避免版本差异锁死玩家）
var cfIsLit = (level, p) => {
    try {
        var props = level.getBlock(p.x, p.y, p.z).properties
        if (!props) return true
        var lit = null
        try { lit = props.get('lit') } catch (e1) { }
        if (lit === null || lit === undefined) {
            try { lit = props['lit'] } catch (e2) { }
        }
        if (lit === null || lit === undefined) return true
        return String(lit) === 'true'
    } catch (err) {
        return true
    }
}

// 鼓风：炉体外壁任意位置贴 embers:atmospheric_bellows 就算（不用非贴着控制器）。
// 机器是 3×3×3、控制器在正面中间，所以以控制器为中心扫 XZ 半径 3 / Y 半径 2，
// 正好覆盖整台炉子的六面外壁。每次配方开始判定一次。
var cfHasBellows = (level, pos) => {
    for (var dx = -3; dx <= 3; dx++) {
        for (var dy = -2; dy <= 2; dy++) {
            for (var dz = -3; dz <= 3; dz++) {
                if (cfIsBlock(level, pos.getX() + dx, pos.getY() + dy, pos.getZ() + dz, CF_BELLOWS)) return true
            }
        }
    }
    return false
}

// 每台炉子上次判定到的鼓风状态，只用于状态切换时打一行日志（避免每批刷屏）
var cfBellowsState = {}

var cfApplyBellows = (ctx, level, pos) => {
    var key = pos.getX() + ',' + pos.getY() + ',' + pos.getZ()
    var has = cfHasBellows(level, pos)
    if (cfBellowsState[key] !== has) {
        cfBellowsState[key] = has
        console.info('[CF] ' + (has ? '鼓风接入，时长 ×' + CF_BELLOWS_MULT : '鼓风断开，恢复原时长') + ' @ ' + key)
    }
    if (!has) return

    var before = Number(ctx.duration() || 0)
    if (before <= 0) return
    var after = Math.max(CF_MIN_TICKS, Math.floor(before * CF_BELLOWS_MULT))
    // beforeStart 里改时长要赶在 MMCR 快照之前生效，setDuration 就是干这个的；
    // 只作用于本批，下一批重新判定。
    try {
        ctx.setDuration(after)
        console.debug('[CF] 鼓风生效：' + before + 't -> ' + after + 't @ ' + key)
    } catch (err) {
        console.warn('[CF] 设置鼓风时长失败: ' + err)
    }
}

MMCREvents.startup(event => {
    event.createMachine(CF_ID)
        .displayNameKey('machine.kubejs.charcoal_furnace')
        .recipePool(CF_POOL)
        .appearance('minecraft:bricks')
        .recipeBehavior(behavior => {
            behavior.beforeStart(ctx => {
                var mc = ctx.machineContext()
                var level = mc.level()
                var pos = mc.controllerPos()

                var fire = cfFindCampfire(level, pos)
                if (fire && !cfIsLit(level, fire)) {
                    try { ctx.cancel() } catch (err) { }
                    console.info('[CF] 拒绝开工：炉膛篝火未点燃（点炉后再封壳）')
                    return
                }

                cfApplyBellows(ctx, level, pos)
            })
        })
        .register()

    console.info('[CF] 已注册炭炉 ' + CF_ID + '（3×3×3 砖壳 + 炉膛篝火），控制器物品 mmcr:charcoal_furnace_controller')
})
