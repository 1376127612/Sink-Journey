// ============================================================
// 工业升级硅器件链（IU 内存配方）
// ------------------------------------------------------------
// 四条提纯工艺在生长室/激光处理厂收尾（分级见 docs/SILICON_WAFER_TIERS.md）：
//   T1 区熔 + IU：492 → 493 → 495 单晶 → 494 晶圆 ×4（6N）
//   T2 改良西门子：西门子多晶硅棒 →（单晶反应釜）9N 单晶 → 9N 晶圆 ×4
//   T3 硅烷裂解：11N 多晶硅 →（单晶反应釜）11N 单晶 → 11N 晶圆 ×4
//   T4 磁控直拉：器件级晶棒（mcz_recipes.js 出）→ 12N 晶圆 ×4
//
// 492 只是区域熔炼出来的粗料，493 是它在生长室里再长一次的产物；
// 硅烷和西门子两条线各自给自己的料，互相不共用物品。
//
// 这些走 IU 自己的 RecipesCore，只能用 kubejs_iu 桥接。
// 放在 ServerEvents.loaded：IU 在 TagsUpdatedEvent 里重建机器配方，
// loaded 在整轮加载结束后才触发，所以 /reload 之后配方还在。
// ============================================================

ServerEvents.loaded(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')

    const CRUDE = 'industrialupgrade:crafting_elements/crafting_492_element'
    const POLY = 'industrialupgrade:crafting_elements/crafting_493_element'
    const SINGLE = 'industrialupgrade:crafting_elements/crafting_495_element'
    const WAFER = 'industrialupgrade:crafting_elements/crafting_494_element'

    // 分级工艺的中间体：9N / 11N 单晶由 MMCR 单晶反应釜（cz_recipes.js）拉出来，
    // 这里只负责给它们切片；12N 的器件晶棒来自磁控直拉炉。
    const MONO_9N = 'kubejs:mono_9n'
    const MONO_11N = 'kubejs:mono_11n'
    const BOULE_12N = 'kubejs:boule_12n'
    const WAFER_9N = 'kubejs:wafer_9n'
    const WAFER_11N = 'kubejs:wafer_11n'
    const WAFER_12N = 'kubejs:wafer_12n'

    // 直拉：T1 的提纯与拉晶（前期原型机就能跑；9N / 11N 走 cz_recipes.js 的单晶反应釜）
    const GROWTH = [
        [CRUDE, POLY],
        [POLY, SINGLE]
    ]

    // 切片：单晶 -> 晶圆 ×4（激光处理厂 + 原型激光抛光机，前期用后者）
    const SLICE = [
        [SINGLE, WAFER],
        [MONO_9N, WAFER_9N],
        [MONO_11N, WAFER_11N],
        [BOULE_12N, WAFER_12N]
    ]

    const SLICERS = ['laser', 'primal_laser_polisher']

    // 先删同产物旧条目，避免反复 /reload 后配方重复堆叠
    for (const [, out] of GROWTH) iu.removeByOutput('silicon_recipe', out, 1)
    for (const [, out] of SLICE) {
        for (const machine of SLICERS) iu.removeByOutput(machine, out, 4)
    }

    for (const [input, out] of GROWTH) {
        if (!iu.addItemRecipe('silicon_recipe', input, 1, out, 1)) {
            console.warn('[晶圆线] 晶体生长室配方注册失败：' + input + ' -> ' + out)
        }
    }

    for (const [input, out] of SLICE) {
        for (const machine of SLICERS) {
            if (!iu.addItemRecipe(machine, input, 1, out, 4)) {
                console.warn('[晶圆线] 切片配方注册失败：' + machine + ' ' + input + ' -> ' + out + '×4')
            }
        }
    }

    console.info('[晶圆线] IU 侧已注入：T1 直拉 492→493→495、四档切片（495 / 9N / 11N / 器件晶棒）')
})
