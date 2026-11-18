// ============================================================
// 原始研究台 —— 单方块阶段
// ------------------------------------------------------------
// 只能处理原始科技：
//   纸 + 墨囊        -> 研究笔记 x2
//   研究笔记 x4 + 纸 -> 蓝图·原始
// 研究需要数秒完成，期间研究台锁定。
// ============================================================

const PRIMITIVE_TABLE = 'kubejs:primitive_research_table'
const PRIMITIVE_STATE = 'sinkPrimitiveResearchFinish'

const countItems = (player, id) => {
    const inv = player.inventory
    let total = 0
    for (let slot = 0; slot < inv.slots; slot++) {
        const stack = inv.getStackInSlot(slot)
        if (!stack.isEmpty() && stack.id === id) total += stack.count
    }
    return total
}

const takeItems = (player, id, amount) => {
    const inv = player.inventory
    let remaining = amount
    for (let slot = 0; slot < inv.slots && remaining > 0; slot++) {
        const stack = inv.getStackInSlot(slot)
        if (!stack.isEmpty() && stack.id === id) {
            const take = Math.min(stack.count, remaining)
            inv.extractItem(slot, take, false)
            remaining -= take
        }
    }
    return remaining <= 0
}

const startResearch = (event, duration, outputId, count) => {
    const player = event.player
    const level = event.level
    const pos = event.block.pos
    const finishTick = event.server.tickCount + duration

    player.persistentData.putLong(PRIMITIVE_STATE, finishTick)
    player.setStatusMessage(Text.of('§7研究开始……'))

    event.server.scheduleInTicks(duration, () => {
        if (player.persistentData.getLong(PRIMITIVE_STATE) !== finishTick) return
        player.persistentData.putLong(PRIMITIVE_STATE, 0)

        const table = level.getBlock(pos)
        if (table.id !== PRIMITIVE_TABLE) {
            player.tell(Text.of('§c研究台被破坏，研究中断'))
            return
        }
        table.popItem(Item.of(outputId, count))
        player.setStatusMessage(Text.of('§a研究完成'))
    })
}

BlockEvents.rightClicked(PRIMITIVE_TABLE, event => {
    const hand = String(event.hand)
    if (hand !== 'MAIN_HAND' && hand !== 'main_hand') return

    const player = event.player
    const now = event.server.tickCount

    if (player.persistentData.getLong(PRIMITIVE_STATE) > now) {
        player.setStatusMessage(Text.of('§7研究台正在演算，请稍候'))
        return
    }

    const held = event.item.id

    if (held === 'minecraft:paper') {
        if (!player.isCreative() && countItems(player, 'minecraft:ink_sac') < 1) {
            player.setStatusMessage(Text.of('§c还需要一个墨囊来记录研究'))
            return
        }
        if (!player.isCreative()) {
            takeItems(player, 'minecraft:paper', 1)
            takeItems(player, 'minecraft:ink_sac', 1)
        }
        startResearch(event, 60, 'kubejs:research_notes', 2)
        return
    }

    if (held === 'kubejs:research_notes') {
        if (!player.isCreative()
            && (countItems(player, 'kubejs:research_notes') < 4 || countItems(player, 'minecraft:paper') < 1)) {
            player.setStatusMessage(Text.of('§c需要 4 份研究笔记和 1 张纸'))
            return
        }
        if (!player.isCreative()) {
            takeItems(player, 'kubejs:research_notes', 4)
            takeItems(player, 'minecraft:paper', 1)
        }
        startResearch(event, 120, 'kubejs:blueprint_primitive', 1)
        return
    }

    player.setStatusMessage(Text.of('§7手持纸（配墨囊）或研究笔记右键'))
})
