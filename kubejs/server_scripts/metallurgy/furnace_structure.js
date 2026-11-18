// ============================================================
// 初期冶金 —— 炭炉结构（server，/reload 可热重载）
// 位置：kubejs/server_scripts/metallurgy/furnace_structure.js
// ------------------------------------------------------------
// MMCR pattern 方向（实测自 BlockArray.Builder）：
//   每个 pattern([...]) = 一层 Z 切片；数组内每个字符串 = 一行 Y；字符 = X 列。
// 所以：
//   pattern(['XXX','XFX','X X']) 表示 z=固定、三行 y=-1/0/+1，中间那行 x=0 是篝火。
//   第一层 z=-1（后墙），第二层 z=0（炉膛），第三层 z=+1（正面/控制器面）。
//
// 3×3×3 砖砌炉体：
//   z=-1 后墙：3×3 全砖
//   z= 0 炉膛：底层砖 / 中层 输入口 篝火 输入口 / 顶层 X 空 X（顶部中心留一格烟道）
//   z=+1 正面：底层砖 / 中层 输入口 控制器 输出口 / 顶层砖
//
// 玩家视角（控制器正面朝外时）：
//   前排左 = 物品输入口，中 = 控制器，右 = 物品输出口；
//   炉膛左右两壁各再加一个输入口，共 3 个输入仓（正面左 + 两侧壁）；
//   篝火在控制器正后方（炉膛正中）；从顶部中心的烟道能看到火光。
// 点炉仪式：先放篝火并点燃，再封砖；篝火被浇灭则炉子停工。
// ============================================================

MMCREvents.server(event => {
    var api = event.getAPI()

    event.createStructure('kubejs:charcoal_furnace')
        .pattern(['XXX', 'XXX', 'XXX']) // z=-1 后墙
        .pattern(['XXX', 'IFI', 'X X']) // z= 0 炉膛（篝火居中，左右壁各一个输入仓，顶心烟道）
        .pattern(['XXX', 'ICO', 'XXX']) // z=+1 正面（左输入 / 中控制器 / 右输出，合计 3 输入仓）
        .set('X', api.block('minecraft:bricks'))
        .set('I', api.anyOfItemInput())
        .set('O', api.anyOfItemOutput())
        .set('F', api.block('minecraft:campfire'))
        .controller('C')
        .build()
})
