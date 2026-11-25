// ============================================================
// 通用反应器（标准 + 大型三档）—— JEI 说明
// 机器注册：startup_scripts/industrial/reactors_v2.js
// 结构与配方：server_scripts/industrial/reactors_v2.js
// 设计文档：kubejs/docs/REACTOR_TYPES_PLAN.md
// ------------------------------------------------------------
// 两个坑都在这文件里踩过，写法按它们定：
//   1. event.add 拿到不存在的物品会抛错并中断整个回调 → 每个 id 单独 try/catch。
//   2. Rhino 把循环体里的 const/let 提到外层作用域，第二轮就报 redeclaration of var
//      → 循环里只用 var，用字符串拼 id 而不是解构。
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    var pages = {}

    pages['mmcr:universal_reactor_controller'] = [
        'jei.kubejs.universal_reactor.info',
        'jei.kubejs.universal_reactor.pools',
        'jei.kubejs.universal_reactor.catalyst'
    ]
    pages['mmcr:column_reactor_controller'] = [
        'jei.kubejs.column_reactor.info',
        'jei.kubejs.column_reactor.pools'
    ]

    var reactorGrades = ['stainless', 'titanium', 'cobalt']
    var columnGrades = ['inconel', 'titanium', 'cobalt']

    for (var i = 0; i < reactorGrades.length; i++) {
        pages['mmcr:large_reactor_' + reactorGrades[i] + '_controller'] = [
            'jei.kubejs.large_reactor.info',
            'jei.kubejs.large_reactor.ports'
        ]
    }

    for (var j = 0; j < columnGrades.length; j++) {
        pages['mmcr:large_column_' + columnGrades[j] + '_controller'] = [
            'jei.kubejs.large_column.info'
        ]
    }

    for (var id in pages) {
        try {
            var lines = []
            for (var k = 0; k < pages[id].length; k++) {
                lines.push(Text.translatable(pages[id][k]))
            }
            event.add(id, lines)
        } catch (err) {
            console.warn('[化工] JEI 说明跳过 ' + id + '：' + err)
        }
    }
})
