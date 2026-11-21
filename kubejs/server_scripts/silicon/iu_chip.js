// ============================================================
// 工业升级电路树改配方：芯片从晶圆开始
// ------------------------------------------------------------
// IU 的电路/处理器大多在代码里注册，KubeJS 只能改数据包配方。
// 这里改的是整棵电路树的根：基础电路板 circuit_part1。
// 它原本只要 铁板 + 金锭 + 红石 + 打火石，现在打火石换成晶圆，
// 于是所有由它派生的电路板、处理器都先要过晶圆线。
//
// 晶圆来源：区域熔炼炉/三氯硅烷线 -> 多晶硅棒 -> 晶体生长室
//           -> 单晶硅 -> 激光处理厂 -> 晶圆 ×4
// ============================================================

ServerEvents.recipes(event => {
    const PART_ID = 'industrialupgrade:industrialupgrade_435'
    const WAFER = 'industrialupgrade:crafting_elements/crafting_494_element'

    event.remove({ id: PART_ID })
    event.custom({
        type: 'industrialupgrade:shaped_recipe',
        category: 'misc',
        key: {
            A: { tag: 'c:plates/iron' },
            B: { item: 'minecraft:gold_ingot' },
            C: { item: 'minecraft:redstone' },
            W: { item: WAFER }
        },
        pattern: [
            'BAB',
            'AWA',
            'CAC'
        ],
        result: { count: 1, id: 'industrialupgrade:circuit/circuit_part1' },
        show_notification: false
    }).id(PART_ID)

    console.info('[晶圆线] IU 基础电路板已改为消耗晶圆')
})
