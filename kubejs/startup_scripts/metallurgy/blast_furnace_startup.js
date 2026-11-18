// ============================================================
// L2 土高炉 —— 机器注册（startup）
// 位置：kubejs/startup_scripts/metallurgy/blast_furnace_startup.js
// ------------------------------------------------------------
// 3×3×4 泥砖外壳（结构见 blast_furnace_structure.js）：
//   正面底格中间 = 琥珀金块（风口），上一排 = 输入口 / 控制器 / 输出口；
//   炉膛正中（控制器正后方）= 篝火，上方两格烟道直通天空。
// 炉况门槛（L2 比 L1 多一道硬门槛）：
//   1. 炉膛篝火必须点燃（点炉后封砖；被浇灭即停工）
//   2. 强制鼓风：炉体下半部（风口高度及以下）外壁必须贴
//      embers:atmospheric_bellows，否则直接拒绝开工。
//      只用 Embers 陶风箱，不接 Create 的鼓风/风扇。
// 本文件只在游戏启动时加载，/reload 不会重载。
// ============================================================

var EBF_ID = 'kubejs:earth_blast_furnace'
var EBF_POOL = 'kubejs:earth_blast_furnace'
var EBF_CAMPFIRE = 'minecraft:campfire'
var EBF_BELLOWS = 'embers:atmospheric_bellows'

var ebfIsBlock = (level, x, y, z, id) => {
    try {
        return String(level.getBlock(x, y, z).id) === id
    } catch (err) {
        return false
    }
}

// 炉膛篝火在控制器正后方，±1 扫描足够
var ebfFindCampfire = (level, pos) => {
    for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
            for (var dz = -1; dz <= 1; dz++) {
                if (ebfIsBlock(level, pos.getX() + dx, pos.getY() + dy, pos.getZ() + dz, EBF_CAMPFIRE)) {
                    return { x: pos.getX() + dx, y: pos.getY() + dy, z: pos.getZ() + dz }
                }
            }
        }
    }
    return null
}

// 篝火是否点燃（读不到 lit 就放行，避免版本差异锁死玩家）
var ebfIsLit = (level, p) => {
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

// 强制鼓风：风要送到炉子下部，所以只认风口高度及以下（Y <= 0）的风箱。
// 横向半径 3 覆盖 3×3 外壁，纵向 -2..0 覆盖底座与风口层。
var ebfHasDraft = (level, pos) => {
    for (var dx = -3; dx <= 3; dx++) {
        for (var dy = -2; dy <= 0; dy++) {
            for (var dz = -3; dz <= 3; dz++) {
                if (ebfIsBlock(level, pos.getX() + dx, pos.getY() + dy, pos.getZ() + dz, EBF_BELLOWS)) return true
            }
        }
    }
    return false
}

// 拒绝原因缓存：只在状态切换时打一行日志，避免机器每次重试都刷屏
var ebfRefusal = {}
var ebfKey = pos => pos.getX() + ',' + pos.getY() + ',' + pos.getZ()

var ebfRefuse = (ctx, pos, reason) => {
    try { ctx.cancel() } catch (err) { }
    var key = ebfKey(pos)
    if (ebfRefusal[key] !== reason) {
        ebfRefusal[key] = reason
        console.info('[EBF] 拒绝开工：' + reason + ' @ ' + key)
    }
}

MMCREvents.startup(event => {
    event.createMachine(EBF_ID)
        .displayNameKey('machine.kubejs.earth_blast_furnace')
        .recipePool(EBF_POOL)
        .appearance('minecraft:mud_bricks')
        .recipeBehavior(behavior => {
            behavior.beforeStart(ctx => {
                var mc = ctx.machineContext()
                var level = mc.level()
                var pos = mc.controllerPos()

                var fire = ebfFindCampfire(level, pos)
                if (fire && !ebfIsLit(level, fire)) {
                    ebfRefuse(ctx, pos, '炉膛篝火未点燃（点炉后再封壳）')
                    return
                }
                if (!ebfHasDraft(level, pos)) {
                    ebfRefuse(ctx, pos, '下半部外壁没有陶风箱（强制鼓风，风口层及以下）')
                    return
                }
                delete ebfRefusal[ebfKey(pos)]
            })
        })
        .register()

    console.info('[EBF] 已注册土高炉 ' + EBF_ID + '（3×3×4 泥砖壳 + 篝火 + 强制鼓风），控制器物品 mmcr:earth_blast_furnace_controller')
})
