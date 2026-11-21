// ============================================================
// 工业升级硅器件链（IU 内存配方）
// ------------------------------------------------------------
// 粗制硅晶体 492 → 晶体生长室 → 硅晶体 493（电子级多晶硅）
// 硅晶体 493   → 晶体生长室 → 单晶硅 495
// 单晶硅 495   → 激光处理厂 / 原型激光抛光机 → 晶圆 494 ×4
//
// 492 只是区域熔炼或硅烷沉积得到的粗料；真正能拉单晶的是
// 再长一次的 493。所以 qmd 熔融硅也只吃 493。
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

    // 先删同产物旧条目，避免反复 /reload 后配方重复堆叠
    iu.removeByOutput('silicon_recipe', POLY, 1)
    iu.removeByOutput('silicon_recipe', SINGLE, 1)
    iu.removeByOutput('laser', WAFER, 4)
    iu.removeByOutput('primal_laser_polisher', WAFER, 4)

    // 提纯：粗制硅晶体 → 硅晶体（电子级多晶硅）
    if (!iu.addItemRecipe('silicon_recipe', CRUDE, 1, POLY, 1)) {
        console.warn('[晶圆线] 晶体生长室提纯配方注册失败：' + CRUDE + ' -> ' + POLY)
    }

    // 直拉单晶：硅晶体 → 单晶硅
    if (!iu.addItemRecipe('silicon_recipe', POLY, 1, SINGLE, 1)) {
        console.warn('[晶圆线] 晶体生长室单晶配方注册失败：' + POLY + ' -> ' + SINGLE)
    }

    // 切片：激光处理厂
    if (!iu.addItemRecipe('laser', SINGLE, 1, WAFER, 4)) {
        console.warn('[晶圆线] 激光处理厂配方注册失败：' + SINGLE + ' -> ' + WAFER)
    }

    // 切片：原型激光抛光机，前期用
    if (!iu.addItemRecipe('primal_laser_polisher', SINGLE, 1, WAFER, 4)) {
        console.warn('[晶圆线] 原型激光抛光机配方注册失败：' + SINGLE + ' -> ' + WAFER)
    }

    console.info('[晶圆线] IU 硅器件链已注入：粗制硅晶体 -> 硅晶体 -> 单晶硅 -> 晶圆×4')
})
