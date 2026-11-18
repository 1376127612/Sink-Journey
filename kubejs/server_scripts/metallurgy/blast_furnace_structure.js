// ============================================================
// L2 土高炉 —— 结构（server，/reload 可热重载）
// 位置：kubejs/server_scripts/metallurgy/blast_furnace_structure.js
// ------------------------------------------------------------
// MMCR pattern：每个 pattern(...) = 一个 Z 切片；切片内第 0 行 = 最低 Y 行。
// 高 4 格，控制器放在第 1 行（自下往上第二行），归一化后：
//   y=-1  底座 / 风口层
//   y= 0  控制器层（输入口 | 控制器 | 输出口；炉膛左右壁另有两个输入仓，共 3 个）
//   y=+1  ~ +2  炉身上部，中心留两格烟道
//
// 3×3×4 泥砖炉体：
//   z=-1 后墙：4 行全泥砖
//   z= 0 炉膛：底座砖 / 输入口 篝火 输入口 / 烟道 X 空 X / 烟道 X 空 X
//   z=+1 正面：X 琥珀金块 X（风口）/ 输入口 控制器 输出口 / 泥砖 / 泥砖
//   合计 3 个输入仓：正面左 + 炉膛左右两壁。
//
// 琥珀金块是 L1→L2 的衔接件：金-银合金在高温下不易氧化、与铁水不润湿，
// 用来镶风口和出铁口；没有它结构不成型（9 锭琥珀金，一次性投入）。
// 点炉仪式：先放篝火并点燃，再封砖；篝火被浇灭则炉子停工。
// ============================================================

MMCREvents.server(event => {
    var api = event.getAPI()

    event.createStructure('kubejs:earth_blast_furnace')
        .pattern(['XXX', 'XXX', 'XXX', 'XXX']) // z=-1 后墙
        .pattern(['XXX', 'IFI', 'X X', 'X X']) // z= 0 炉膛（篝火居中，左右壁各一个输入仓，上方两格烟道）
        .pattern(['XEX', 'ICO', 'XXX', 'XXX']) // z=+1 正面（风口 / 输入 控制器 输出 / 炉身，合计 3 输入仓）
        .set('X', api.block('minecraft:mud_bricks'))
        .set('E', api.block('industrialupgrade:baseblockingot/electrum'))
        .set('I', api.anyOfItemInput())
        .set('O', api.anyOfItemOutput())
        .set('F', api.block('minecraft:campfire'))
        .controller('C')
        .build()
})
