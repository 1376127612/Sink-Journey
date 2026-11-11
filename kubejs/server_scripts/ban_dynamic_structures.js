// ============================================================
// 禁止“获取”所有能形成动态结构（Create Contraption）的物品
//
// 策略：只封获取途径，不干涉已有物品和创造模式的使用。
//   1. 移除所有产出这些物品的配方（合成、切石、序列装配等）
//   2. JEI 中隐藏（见 client_scripts/ban_dynamic_structures_jei.js）
//   3. 不拦截放置 / 右键 / 拾取，也不清空玩家背包
//   4. 原 ban.js 里的强力胶配方移除已合并到这里
//
// 结果：生存模式无法正常获得这些物品；已经拥有、或者开创造拿到的，
//       仍然可以正常放置和使用（包括风帆、强力胶、风车轴承）。
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

        // 风帆（允许使用，只禁止合成获取）
        'create:white_sail',
        'create:sail_frame'
    ]

    // 移除所有产出这些物品的配方
    ServerEvents.recipes(event => {
        BANNED_ITEMS.forEach(id => {
            event.remove({ output: id })
        })
    })
})()
