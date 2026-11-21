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
//    第三个参数 true 表示「输出匹配该物品的配方全部删除」。
//    删除项保存在 RecipesCore.recipeRemoves 中，IU 初始化后会自行重放，
//    所以 /reload 或重新初始化都不会让敲板配方复活。
//
//    【时机：为什么放在 afterRecipes】
//    IU 在 NeoForge 的 TagsUpdatedEvent 里才初始化机器配方（BlockEntityAnvil.init()），
//    而 KubeJS 的 tags / recipes 事件都发生在这之前：那时 anvil 配方列表是空的，
//    标签也还没绑定（Ingredient.of('#c:plates') 只会拿到 1 个 barrier 占位栈）。
//    afterRecipes 由 KubeJSReloadListener 在整轮重载结束后触发，晚于 IU 初始化，
//    此时配方列表已生成、标签也已绑定。
//
//    【目标：不列物品、不读标签】
//    铁砧 init() 只生成两类配方：锭 -> 板、板 -> 2 外壳（外壳只覆盖部分材料），
//    外加 1 条元素转换。直接遍历 Recipes.recipes.getRecipeList('anvil')，
//    用每条配方的真实产物注册删除项，即可自动覆盖全部配方。
//
// 注意：RecipesCore.removeRecipe(String, ItemStack) 是按「输入」匹配的，
//       不能用来删敲板，否则会误删拿板当原料的配方。
// ============================================================

//傻逼大肥鱼把工作台手搓也删了

// ---- 2. IU 铁砧敲板 ----
// 放在 afterRecipes：资源重载时 KubeJS 的 tag / 配方事件都更早，IU 此时还在
// 用 TagsUpdatedEvent 初始化机器配方；afterRecipes 由 KubeJSReloadListener 在
// 整轮重载结束后触发，晚于 IU 初始化，anvil 配方列表已经生成完毕。
// 不做物品清单、不读标签：直接遍历机器 anvil 的配方列表，按每条配方的
// 实际产物注册删除项（铁砧只有「锭->板」和「板->2 外壳」两类配方）。
ServerEvents.recipes(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')

})
