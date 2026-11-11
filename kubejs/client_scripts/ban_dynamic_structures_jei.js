// ============================================================
// 在 JEI 中隐藏被禁止“获取”的动态结构相关物品
// （与服务端 ban_dynamic_structures.js 的列表保持一致）
//
// 注意：只影响 JEI 展示，不影响创造模式物品栏里的取用，
//       也不影响已经拥有这些物品的玩家正常使用。
// ============================================================

(function () {
    const BANNED_ITEMS = [
        // 强力胶
        'create:super_glue',

        // 底盘
        'create:linear_chassis',
        'create:secondary_linear_chassis',
        'create:radial_chassis',

        // 轴承类（含附加模组的矿机轴承）
        'create:mechanical_bearing',
        'create:clockwork_bearing',
        'create:windmill_bearing',
        'create_rns:miner_bearing',

        // 活塞类
        'create:mechanical_piston',
        'create:sticky_mechanical_piston',
        'create:piston_extension_pole',

        // 滑轮 / 龙门 / 升降
        'create:rope_pulley',
        'create:gantry_shaft',
        'create:gantry_carriage',
        'create:elevator_pulley',
        'create:elevator_contact',

        // 粘贴器
        'create:sticker',

        // 矿车动态结构
        'create:cart_assembler',
        'create:contraption_controls',
        'create:minecart_contraption',
        'create:chest_minecart_contraption',
        'create:furnace_minecart_contraption',

        // 风帆（允许使用，只隐藏获取展示）
        'create:white_sail',
        'create:sail_frame'
    ]

    // removeEntriesCompletely：连配方里的原料显示一起移除
    RecipeViewerEvents.removeEntriesCompletely('item', event => {
        BANNED_ITEMS.forEach(id => {
            event.remove(id)
        })
    })
})()
