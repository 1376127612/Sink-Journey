// ============================================================
// Industrial Upgrade 工作台手搓 / 铁砧敲板封禁
// 详细说明与验收清单：kubejs/docs/IU_HANDCRAFT_BAN.md
//
// 1. 工作台手搓
//    IU 的 shaped / shapeless 配方是数据包配方，序列化器类型为
//    industrialupgrade:shaped_recipe / industrialupgrade:shapeless_recipe，
//    用 KubeJS 的 type 过滤一次全部删除；熔炼 / 高炉（minecraft:smelting /
//    blasting）不动。
//    注意：KubeJS 自己 event.shaped() 写的配方类型是 minecraft:crafting_shaped，
//    不受这里影响（例如 kubejsstudio:block_anvil/block_anvil）。
//
// 2. 铁砧敲板
//    IU 的机器配方不在数据包里，而是 Java 内存中的 RecipesCore.map_recipes，
//    event.remove 删不到，必须走 IU 的官方删除接口：
//      addRemoveRecipe('anvil', 物品, true)
//    第三个参数 true 表示「输出匹配该物品的配方全部删除」
//    （RecipesCore.removeAllRecipe 的 removeAll 分支）。
//    删除项保存在 RecipesCore.recipeRemoves 中，IU 每次初始化后会自行重放，
//    所以 /reload 或重新初始化都不会让敲板配方复活。
//
//    目标物品取 #c:plates（89 个 IU 板，含 itemplates / alloyplate /
//    crafting_elements），只删「输出为板」的铁砧配方；
//    铁砧的机壳、元素转换等非敲板配方保持不动。
//
// 注意：RecipesCore.removeRecipe(String, ItemStack) 是按「输入」匹配的，
//       不能用来删敲板，否则会误删拿板当原料的配方。
// ============================================================

ServerEvents.recipes(event => {
    // ---- 1. IU 工作台手搓配方 ----
    event.remove({ type: 'industrialupgrade:shaped_recipe' })
    event.remove({ type: 'industrialupgrade:shapeless_recipe' })

    // ---- 2. IU 铁砧敲板 ----
    const core = Java.loadClass('com.denfop.api.Recipes').recipes
    if (!core) {
        console.warn('[iu_handcraft] Recipes.recipes 尚未初始化，跳过铁砧敲板删除')
        return
    }

    const ANVIL = 'anvil'
    const removes = core.recipeRemoves
    // Ingredient 在 KubeJS 里是 @RemapPrefixForJS("kjs$") 包装类，
    // 只能调用去掉 kjs$ 前缀的 shim 方法，原版 getItems() 不可见。
    const plates = Ingredient.of('#c:plates').getStackArray()

    if (!plates || plates.length === 0) {
        console.warn('[iu_handcraft] #c:plates 为空，未注册铁砧敲板删除项')
        return
    }

    let added = 0
    for (let i = 0; i < plates.length; i++) {
        const stack = plates[i]
        if (isRemoved(removes, ANVIL, stack)) continue
        core.addRemoveRecipe(ANVIL, stack, true)
        added++
    }

    // 立即重放一次，保证本次启动 / 重载后就生效
    core.removeAllRecipesFromList()

    if (added > 0) console.info('[iu_handcraft] 新增 ' + added + ' 个铁砧敲板删除项')
})

function isRemoved(removes, machine, stack) {
    if (!removes) return false
    for (let i = 0; i < removes.size(); i++) {
        const entry = removes.get(i)
        // 用 KubeJS 的 ItemStack.areItemsEqual 判同物品；
        // ModUtils.checkItemEquality 有 (ItemStack, Item) 重载，Rhino 解析会歧义。
        if (entry.getNameRecipe() === machine && entry.getStack().areItemsEqual(stack)) return true
    }
    return false
}
