// ============================================================
// 在 JEI/EMI 中隐藏本包用不到的 IC2 遗物页面
// ------------------------------------------------------------
// 两条链在本包的任务树、配方和文档里都没有出现：
//
//   回收机 → 废料 → 废料盒
//   物质生成机 → UU 物质 → 复制机
//
// 留着只会让人以为能靠捡垃圾 / 攒 UU 物质白嫖资源，实际上既没有任务引导，
// 也没有任何配方用到它们。只隐藏页面：机器物品照旧存在，存档里已有的机器
// 可以照常拆放和运行。
//
// 类别 id 取自 IU 的 JEI 注册名（com.denfop.integration.jei.JeiInform 里
// RecipeType.create("industrialupgrade", <名字>, ...)）。
// ============================================================

(function () {
    const DEAD_CATEGORIES = [
        // 回收机（产物：废料）
        'industrialupgrade:recycler',

        // 废料 / 废料盒
        'industrialupgrade:scrap',
        'industrialupgrade:scrapbox',

        // UU 物质链：物质生成机产 UU 物质，复制机消耗 UU 物质复制物品
        'industrialupgrade:gen_matter',
        'industrialupgrade:replicator'
    ]

    RecipeViewerEvents.removeCategories(event => {
        DEAD_CATEGORIES.forEach(id => event.remove(id))
    })
})()
