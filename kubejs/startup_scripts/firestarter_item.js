// ============================================================
// 火折子 (kubejs:fire_starter)
// 玩法：长按右键 5 秒（100 tick）蓄力
//   - 30% 成功：在瞄准的面外侧点燃火焰
//   - 70% 失败：只冒青烟，点不着
//   - 只要蓄满 5 秒，无论成败都消耗 1 个火折子
//   - 中途松手 / 换物品：不消耗，也不点火
// 图标：暂缺，需要放到 kubejs/assets/kubejs/textures/item/fire_starter.png
// ============================================================

const FIRE_STARTER_ID = 'kubejs:fire_starter'
const USE_TICKS = 5 * 20      // 5 秒 = 100 tick
const FAIL_CHANCE = 0.7       // 70% 概率点燃失败
const REACH = 5               // 点火距离（格）

/**
 * 把目标位置点着。优先用 KubeJS 的 LevelBlock.set，
 * 万一该 API 有变化就退回原版 Blocks.FIRE。
 */
function tryPlaceFire(level, target) {
    try {
        target.set('minecraft:fire')
        return true
    } catch (e) {
        console.warn('[火折子] LevelBlock.set 失败，尝试原版 Blocks.FIRE: ' + e)
    }

    try {
        const Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
        level.setBlockAndUpdate(target.getPos(), Blocks.FIRE.defaultBlockState())
        return true
    } catch (e) {
        console.error('[火折子] 无法放置火焰: ' + e)
        return false
    }
}

StartupEvents.registry('item', event => {
    event.create('fire_starter')
        .displayName('火折子')
        .maxStackSize(16)
        .useAnimation('bow')                       // 长按时有蓄力动作
        .useDuration(itemstack => USE_TICKS)       // 长按 5 秒
        .tooltip(Text.gray('长按右键 5 秒点火，有 70% 概率失败'))
        .use((level, player, hand) => {
            // 必须瞄准方块才允许开始蓄力，避免对着空气白扣物品
            const hit = player.rayTrace(REACH, false)
            return !!(hit && hit.block)
        })
        .finishUsing((itemstack, level, entity) => {
            // 判定只在服务端做，客户端只负责播放使用动画
            if (level.isClientSide()) return itemstack
            if (!entity.player) return itemstack

            const player = entity

            // 先扣数量：只要蓄满 5 秒，不管结果如何都消耗一个
            if (!player.isCreative()) {
                itemstack.shrink(1)
            }

            // 目标位置 = 视线命中的方块，沿着被点的那一面往外一格
            const hit = player.rayTrace(REACH, false)
            const target = (hit && hit.block) ? hit.block.offset(hit.facing) : null
            const soundPos = target ? target.getPos() : null

            if (Math.random() < FAIL_CHANCE) {
                // 70%：点燃失败
                if (soundPos) {
                    level.playSound(null, soundPos, 'minecraft:block.fire.extinguish', 'players', 1.0, 0.8)
                }
                player.displayClientMessage(Text.red('火折子只冒出一股青烟，没能点着。'), true)
            } else if (!target || !target.getBlockState().isAir() || !tryPlaceFire(level, target)) {
                // 30% 里也有前提：目标位置得是空气
                if (soundPos) {
                    level.playSound(null, soundPos, 'minecraft:block.fire.extinguish', 'players', 1.0, 0.8)
                }
                player.displayClientMessage(Text.yellow('这里没法点火。'), true)
            } else {
                // 点燃成功
                if (soundPos) {
                    level.playSound(null, soundPos, 'minecraft:item.flintandsteel.use', 'players', 1.0, 1.0)
                }
                player.displayClientMessage(Text.green('火折子点着了。'), true)
            }

            // 1 秒冷却，避免一直按着右键无限连点
            player.addItemCooldown(FIRE_STARTER_ID, 20)
            return itemstack
        })
})
