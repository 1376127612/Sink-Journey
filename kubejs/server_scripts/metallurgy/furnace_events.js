// ============================================================
// 初期冶金 —— 炭炉 / 土高炉炉况事件（server）
// 位置：kubejs/server_scripts/metallurgy/furnace_events.js
// ------------------------------------------------------------
// MBD2 机器事件（事件目标 = 机器定义 id）：
//   onBeforeRecipeWorking：篝火未点燃 / 土高炉下半部缺鼓风 -> 取消本批开工
//   onBeforeRecipeModify：炭炉外壁贴鼓风 -> 本批时长 ×0.8（最低 40t）
//
// 判断都围绕控制器坐标扫描，控制器朝哪个方向都一样：
//   篝火在控制器 ±1 内（结构里固定在正后方）；
//   炭炉鼓风扫 XZ 半径 3 / Y -2..+2（覆盖整台 3×3×3）；
//   土高炉只认风口高度及以下（Y -2..0）的鼓风，风要送到炉子下部。
// 只用 Embers 陶风箱 embers:atmospheric_bellows。
// ============================================================

(function () {
    var CF = 'kubejs:charcoal_furnace'
    var EBF = 'kubejs:earth_blast_furnace'
    var CAMPFIRE = 'minecraft:campfire'
    var BELLOWS = 'embers:atmospheric_bellows'

    var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    var BlockStateProperties = Java.loadClass(
        'net.minecraft.world.level.block.state.properties.BlockStateProperties'
    )

    var blockIdOf = function (state) {
        try {
            return String(BuiltInRegistries.BLOCK.getKey(state.getBlock()))
        } catch (err) {
            return ''
        }
    }

    var findCampfire = function (level, pos) {
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                for (var dz = -1; dz <= 1; dz++) {
                    var p = pos.offset(dx, dy, dz)
                    if (blockIdOf(level.getBlockState(p)) === CAMPFIRE) return p
                }
            }
        }
        return null
    }

    // 篝火是否点燃（读不到 lit 就放行，避免版本差异锁死玩家）
    var isLit = function (level, pos) {
        try {
            return String(level.getBlockState(pos).getValue(BlockStateProperties.LIT)) === 'true'
        } catch (err) {
            return true
        }
    }

    var hasBellowsAround = function (level, pos, minDy, maxDy) {
        for (var dx = -3; dx <= 3; dx++) {
            for (var dy = minDy; dy <= maxDy; dy++) {
                for (var dz = -3; dz <= 3; dz++) {
                    if (blockIdOf(level.getBlockState(pos.offset(dx, dy, dz))) === BELLOWS) return true
                }
            }
        }
        return false
    }

    // 拒绝原因缓存：只在状态切换时打一行日志，避免机器每次重试都刷屏
    var refusal = {}

    var posKey = function (machineId, pos) {
        return machineId + '@' + pos.getX() + ',' + pos.getY() + ',' + pos.getZ()
    }

    var refuse = function (machineId, machine, reason) {
        var key = posKey(machineId, machine.getPos())
        if (refusal[key] !== reason) {
            refusal[key] = reason
            console.info('[FURNACE] 拒绝开工：' + reason + ' @ ' + key)
        }
    }

    var clearRefusal = function (machineId, machine) {
        delete refusal[posKey(machineId, machine.getPos())]
    }

    // ---- 炭炉：篝火点燃才开工 --------------------------------
    MBDMachineEvents.onBeforeRecipeWorking(CF, function (event) {
        var machine = event.event.getMachine()
        var level = machine.getLevel()
        var pos = machine.getPos()

        var fire = findCampfire(level, pos)
        if (fire !== null && !isLit(level, fire)) {
            refuse(CF, machine, '炉膛篝火未点燃（点炉后再封壳）')
            event.event.setCanceled(true)
            return
        }
        clearRefusal(CF, machine)
    })

    // ---- 炭炉：鼓风缩短本批时长 ------------------------------
    // 改的是 copy，注册的配方本身不动；每批重新判定一次。
    MBDMachineEvents.onBeforeRecipeModify(CF, function (event) {
        var machine = event.event.getMachine()
        var level = machine.getLevel()
        var pos = machine.getPos()
        if (!hasBellowsAround(level, pos, -2, 2)) return

        var recipe = event.event.getRecipe()
        if (recipe === null) return

        var copy = recipe.copy()
        copy.duration = Math.max(40, Math.floor(copy.duration * 0.8))
        event.event.setRecipe(copy)
    })

    // ---- 土高炉：篝火 + 强制鼓风，缺一不可 -------------------
    MBDMachineEvents.onBeforeRecipeWorking(EBF, function (event) {
        var machine = event.event.getMachine()
        var level = machine.getLevel()
        var pos = machine.getPos()

        var fire = findCampfire(level, pos)
        if (fire !== null && !isLit(level, fire)) {
            refuse(EBF, machine, '炉膛篝火未点燃（点炉后再封壳）')
            event.event.setCanceled(true)
            return
        }
        if (!hasBellowsAround(level, pos, -2, 0)) {
            refuse(EBF, machine, '下半部外壁没有陶风箱（强制鼓风，风口层及以下）')
            event.event.setCanceled(true)
            return
        }
        clearRefusal(EBF, machine)
    })
})()
