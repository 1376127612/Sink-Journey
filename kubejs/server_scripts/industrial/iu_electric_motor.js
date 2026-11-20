// ============================================================
// Industrial Upgrade 电动机专家链（KubeJS）
// ============================================================
//
// 编号说明：
//   21  = 元件模板
//   60  = 元件:能源
//   272 = 电子电路（按你的要求：配方不动）
//   276 = 电动机（本链最终产物）
//   294 = 线圈
//
// 原版链太便宜：
//   线圈 294      = 8 铜导线 + 1 铁锭
//   能源元件 60   = 3 高级RE电池 + 1 元件模板
//   电动机 276    = 1 锡外壳 + 2 线圈 + 1 能源元件 + 1 电子电路
//
// 本脚本：
//   1. 线圈改成 4 铜导线 + 4 铁板 + 1 红铜锭（铜导线和红铜都用上了）
//   2. 能源元件改成 4 高级RE电池 + 2 线圈 + 2 金板 + 1 模板
//   3. 电动机改成 1 青铜外壳 + 2 线圈 + 1 能源元件 + 1 电子电路
//   4. 红铜在 IU 里原本只能合金炉做，而合金炉要电动机；
//      这里加一条电动机之前的红铜来源：加热搅拌 3 铜锭 + 1 黄铜锭 -> 1 红铜锭
//
// 金属约束：
//   整条链只出现 铁、铜、金、青铜、黄铜、铅（电池内部），
//   全部在你给的允许列表里；没有铱、钨、钛、锇等。
//   电子电路 272 的配方原样保留，只作为原料使用。
//
// 前置件来源：
//   industrialupgrade:wiring/copper           铜导线
//   create:iron_sheet / golden_sheet          机械动力压板
//   industrialupgrade:alloyingot/red_brass    红铜锭（本脚本新增加热搅拌来源）
//   industrialupgrade:battery/advanced_re_battery    原 IU 电池配方
//   industrialupgrade:casing/bronze                  原 IU 青铜外壳
//   industrialupgrade:crafting_elements/crafting_21_element  已有 Create 序列装配专家配方
//
// 详细魔改说明：
//   kubejs/docs/IU_ELECTRIC_MOTOR.md
//
// 编号对照完整表：
//   kubejs/docs/IU_ITEM_NAMES.md
//   kubejs/config/iu_item_names.json
// 重新生成：
//   python kubejs/tools/gen_iu_item_map.py
// ============================================================

ServerEvents.recipes(event => {
    // 编号 -> 实际名称 + 完整 ID（只列本链用到的）
    var IU = {
        21:  { name: '元件模板', id: 'industrialupgrade:crafting_elements/crafting_21_element' },
        60:  { name: '元件:能源', id: 'industrialupgrade:crafting_elements/crafting_60_element' },
        272: { name: '电子电路', id: 'industrialupgrade:crafting_elements/crafting_272_element' },
        276: { name: '电动机', id: 'industrialupgrade:crafting_elements/crafting_276_element' },
        294: { name: '线圈', id: 'industrialupgrade:crafting_elements/crafting_294_element' }
    }

    // 只使用允许列表里的金属
    var MAT = {
        copperWire:   'industrialupgrade:wiring/copper',
        ironSheet:    'create:iron_sheet',
        goldSheet:    'create:golden_sheet',
        bronzeCasing: 'industrialupgrade:casing/bronze',
        battery:      'industrialupgrade:battery/advanced_re_battery',
        redBrassIngot:'industrialupgrade:alloyingot/red_brass',
        copperIngot:  'minecraft:copper_ingot',
        brassIngot:   'create:brass_ingot'
    }

    // ---- 0. 红铜来源：加热搅拌 3 铜锭 + 1 黄铜锭 -> 1 红铜锭 ----
    // 红铜在 IU 里只能通过合金炉做，而合金炉本身要电动机；
    // 直接把这条件塞进电动机链会死锁，所以给一条电动机之前的来源。
    // 优先用 Create 加热搅拌；如果当前 KubeJS Create 接口不可用，回退到工作台。
    try {
        event.recipes.create.mixing(
            '1x ' + MAT.redBrassIngot,
            ['3x ' + MAT.copperIngot, '1x ' + MAT.brassIngot]
        ).heated().id('kubejs:red_brass_from_copper_and_brass')
    } catch (e) {
        console.error('[IU] 红铜搅拌配方注册失败，回退到工作台: ' + e)
        try {
            event.shapeless(
                '1x ' + MAT.redBrassIngot,
                ['3x ' + MAT.copperIngot, '1x ' + MAT.brassIngot]
            ).id('kubejs:red_brass_from_copper_and_brass_fallback')
        } catch (e2) {
            console.error('[IU] 红铜回退配方也注册失败: ' + e2)
        }
    }

    // 电子电路：原配方要求等级芯片 = 2，保持组件不变
    var CIRCUIT = {
        type: 'neoforge:components',
        items: IU[272].id,
        components: {
            'industrialupgrade:level_microchip': 2,
            'minecraft:attribute_modifiers': { modifiers: [] },
            'minecraft:enchantments': { levels: {} },
            'minecraft:lore': [],
            'minecraft:max_stack_size': 64,
            'minecraft:rarity': 'common',
            'minecraft:repair_cost': 0
        }
    }

    // ---- 1. 线圈 294：4 铜导线 + 4 铁板 + 1 红铜锭 ----
    // 原配方 id：data/industrialupgrade/recipe/industrialupgrade_1606.json
    var COIL_ID = 'industrialupgrade:industrialupgrade_1606'
    event.remove({ id: COIL_ID })
    event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        key: {
            C: { item: MAT.copperWire },
            I: { item: MAT.ironSheet },
            P: { item: MAT.redBrassIngot }
        },
        pattern: [
            'CIC',
            'IPI',
            'CIC'
        ],
        result: { count: 1, id: IU[294].id },
        show_notification: false
    }).id(COIL_ID)

    // ---- 2. 能源元件 60：4 高级RE电池 + 2 线圈 + 2 金板 + 1 模板 ----
    // 原配方 id：data/industrialupgrade/recipe/industrialupgrade_730.json
    var ENERGY_ID = 'industrialupgrade:industrialupgrade_730'
    event.remove({ id: ENERGY_ID })
    event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        key: {
            B: { item: MAT.battery },
            C: { item: IU[294].id },
            G: { item: MAT.goldSheet },
            T: { item: IU[21].id }
        },
        pattern: [
            'BCB',
            'GTG',
            'BCB'
        ],
        result: { count: 1, id: IU[60].id },
        show_notification: false
    }).id(ENERGY_ID)

    // ---- 3. 电动机 276：1 青铜外壳 + 2 线圈 + 1 能源元件 + 1 电子电路 ----
    // 原配方 id：data/industrialupgrade/recipe/industrialupgrade_735.json
    var MOTOR_ID = 'industrialupgrade:industrialupgrade_735'
    event.remove({ id: MOTOR_ID })
    event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        key: {
            A: { item: MAT.bronzeCasing },
            B: { item: IU[294].id },
            C: { item: IU[60].id },
            D: CIRCUIT
        },
        pattern: [
            ' A ',
            'BCB',
            ' D '
        ],
        result: { count: 1, id: IU[276].id },
        show_notification: false
    }).id(MOTOR_ID)

    console.info('[IU] 专家链已重建：线圈 294 / 能源元件 60 / 电动机 276')
    console.info('[IU] 电动机单次成本：1 青铜外壳 + 2 线圈 + 1 能源元件 + 1 电子电路')
    console.info('[IU] 折合：4 线圈 + 4 高级RE电池 + 2 金板 + 1 元件模板 + 1 青铜外壳 + 1 电子电路')
    console.info('[IU] 红铜来源：加热搅拌 3 铜锭 + 1 黄铜锭 -> 1 红铜锭（单电机共需 4 个红铜锭）')
})
