# Industrial Upgrade 手搓与铁砧敲板封禁（KubeJS）

> 实装文件：`kubejs/server_scripts/bans/iu_handcraft.js`
> 生效方式：脚本在进游戏 / `/reload` 时执行；但 IU 的 JEI 分类有静态缓存
> （`AnvilHandler.recipes` 只在为空时重建），要让 JEI 里的旧敲板配方消失，
> 需要**完全重启游戏**一次。
> 本文记录改动范围、IU 两套配方系统的区别、实现依据和验收清单。

## 1. 目标与范围

| 项目 | 处理 | 说明 |
| --- | --- | --- |
| IU 工作台 shaped / shapeless 配方 | 全删 | 2153 条 `industrialupgrade:shaped_recipe` + 356 条 `industrialupgrade:shapeless_recipe` |
| IU 铁砧全部配方（锭→板、板→外壳、元素转换） | 全删 | 机器名为 `anvil`，遍历 `getRecipeList('anvil')` 按每条配方的真实产物删除 |
| IU 熔炼 / 高炉配方 | 保留 | `minecraft:smelting` / `minecraft:blasting`，不按 mod 一刀切 |
| KubeJS `event.shaped()` 写的配方 | 保留 | 类型是 `minecraft:crafting_shaped`，不受 type 过滤影响 |

## 2. IU 的两套配方系统

| | 数据包配方 | 机器配方 |
| --- | --- | --- |
| 存储位置 | `data/industrialupgrade/recipe/*.json` | Java 内存 `RecipesCore.map_recipes` |
| 类型 | `industrialupgrade:shaped_recipe` / `shapeless_recipe` / 原版熔炼类型 | 按机器名分组，如 `anvil` |
| 删除方式 | KubeJS `event.remove(...)` | 只能调用 IU 的 Java 接口 |
| JEI | 直接反映数据包配方表 | 直接读 `map_recipes`，删除后同步消失 |

因此脚本分成两段：工作台用 `event.remove`，铁砧用 `RecipesCore`。

## 3. 实现细节

### 3.1 工作台手搓

```js
event.remove({ type: 'industrialupgrade:shaped_recipe' })
event.remove({ type: 'industrialupgrade:shapeless_recipe' })
```

- KubeJS 的 `type` 过滤匹配的是**序列化器注册键**（`RecipeLikeKJS.kjs$getTypeKey()`），
  所以即使 IU 配方的 `Recipe.getType()` 是 `minecraft:crafting`，也能按 `industrialupgrade:shaped_recipe` 精确命中。
- 没有用 `event.remove({ mod: 'industrialupgrade' })`，因为那会连熔炼 / 高炉一起删掉。

### 3.2 铁砧敲板

```js
ServerEvents.afterRecipes(event => banAnvil())

function banAnvil() {
    const core = Java.loadClass('com.denfop.api.Recipes').recipes
    const list = core.getRecipeList('anvil')
    if (!list || list.isEmpty()) return

    for (let i = 0; i < list.size(); i++) {
        const items = list.get(i).getOutput().items
        for (let j = 0; j < items.size(); j++) {
            core.addRemoveRecipe('anvil', items.get(j), true)  // true = 删除所有输出匹配的配方
        }
    }
    core.removeAllRecipesFromList()                            // 立即生效
}
```

脚本里另有「列表为空则跳过 / 打印剩余数量」的处理，这里只保留主干。

**为什么必须放在 `ServerEvents.afterRecipes`**：

| 时间点 | 状态 |
| --- | --- |
| KubeJS `tags` 事件 | IU 还没注册机器配方；tag 也还没绑定 |
| KubeJS `recipes` 事件 | 同上（recipe 的 prepare 阶段早于 tag apply） |
| NeoForge `TagsUpdatedEvent` | IU 在这里跑 `initializationRecipes()`，生成 anvil 配方表 |
| KubeJS `afterRecipes` | 整轮重载结束后，列表已生成、tag 已绑定 |

`afterRecipes` 由 `KubeJSReloadListener.onResourceManagerReload` 触发，初次进服和每次 `/reload` 都会执行。

**之前两种写法为什么拿到的数量不对**（都已验证失败）：

1. 在 `ServerEvents.recipes` 里用 `Ingredient.of('#c:plates')`：tag 未绑定，原版
   `Ingredient.TagValue.getItems()` 对空 tag 返回**一个 barrier 占位栈**
   （`Blocks.BARRIER` + 自定义名），`getStackArray()` 长度是 1，
   日志表现为「新增 1 个」，JEI 里什么都没少。
2. 在 `ServerEvents.tags` 里读 `event.tags` / `event.get(...)`：KubeJS 的 tag 事件是
   **只写**的。`TagKubeEvent.tags` 初始是空 `ConcurrentHashMap`，只有脚本通过
   `event.add(...)` 写过的标签才会有条目；`event.get('c:plates')` 只是
   `computeIfAbsent` 新建一个空 wrapper，`getObjectIds()` 恒为空。
   日志因此是「`c:plates` 系列标签为空，未注册删除项」。

**KubeJS 包装类的调用注意**：`Ingredient` 等类被 KubeJS 用
`@dev.latvian.mods.rhino.util.RemapPrefixForJS("kjs$")` 标成了包装类，
Rhino 只暴露 `kjs$` 前缀接口里的方法，并且去掉前缀后调用。
所以原版的 `Ingredient.getItems()` 在脚本里不可用，要写 `getStackArray()`。
本脚本现在只碰 `List` / `ItemStack` / IU 自己的类，不再涉及包装类。

关键依据（均从 IU jar 字节码确认）：

- 机器名：`BlockEntityAnvil` 的构造与 `init()` 里固定使用字符串 `anvil`。
- `getRecipeList(String)` 直接返回 `map_recipes` 里该机器名对应的 `List`（同一个对象）。
- `addRemoveRecipe(String, ItemStack, boolean)` 只把 `RecipeRemove` 条目放进 `recipeRemoves`，
  真正执行删除的是 `removeAllRecipesFromList()`。
- `removeAllRecipe(name, removeAll, output)`：
  - `false`：只删**第一条**输出匹配的配方；
  - `true`：删**所有**输出匹配的配方。
  这里必须传 `true`。
- 输出匹配用 `ModUtils.checkItemEquality`（物品 + NBT）。本脚本传入的就是配方自己的
  产物栈，物品与 NBT 完全一致，因此不需要在脚本里做比较（也就绕开了
  `(ItemStack, ItemStack)` / `(ItemStack, Item)` 重载歧义）。
- 删除时同时清理 `map_recipes` 和 `map_recipe_managers_itemStack`，
  所以机器本身也查不到配方，不只是 JEI 不显示。
- `recipeRemoves` 会由 IU 在 `TagsUpdatedEvent` 初始化流程中重放；但该流程带一次性
  `register` 静态开关（`IUCore.shouldRunTagBootstrap`），一个游戏进程里只跑一次。
  所以脚本自己调一次 `removeAllRecipesFromList()`，保证当次加载立即生效。
- 删除项保留在 `recipeRemoves` 中，因此即使日后 IU 重新初始化，敲板配方也不会复活。
- IU 的 JEI 分类把配方缓存在 `AnvilHandler.recipes` 静态列表里，只在列表为空时才从
  `map_recipes` 重建，且没有清空入口。因此旧会话里已经显示过的配方，
  只有**重启游戏**才会从 JEI 消失（仅 `/reload` 不够）；`map_recipes` 本身已被删干净，
  机器实际不能制作。

**特意避开**：`RecipesCore.removeRecipe(String, ItemStack)` 是按**输入第一格**匹配的
（字节码里是 `input.getInputs().get(0).matches(stack)`），拿产物去删会误删「用该物品当原料」的配方。

### 3.3 为什么不需要物品清单

`BlockEntityAnvil.init()` 用字符串模板从标签生成配方，只有两类：

| 输入 | 输出 | 材料表 |
| --- | --- | --- |
| `#c:ingots/<材料>`（1 个） | `#c:plates/<材料>`（1 个） | `list_string` / `list_baseore1` / `list_string1` |
| `#c:plates/<材料>`（1 个） | `#c:casings/<材料>`（2 个） | 同上 |

三张材料表合计约 120 个条目（`itemNames()` 34 个、`itemNames7()` 15 个、`itemNames1()` 约 70 个），
另外还硬编码了 9 条「锭→板」、4 条「板→2 外壳」，以及 1 条
`crafting_elements` 504 → 501 的元素转换。

脚本直接遍历 `getRecipeList('anvil')`，按每条配方的**真实产物**注册删除，
所以上面所有配方都会被匹配删除；IU 以后新增同类配方也会自动覆盖，
不需要维护物品清单，也不依赖标签是否绑定。

## 4. 连带影响（需要知道）

`kubejs/server_scripts/kubejsstudio/kubejsstudio.js` 里有 4 条手工覆盖配方，类型同样是
`industrialupgrade:shaped_recipe`，会被第一段一起删掉：

| 配方 id | 产物 |
| --- | --- |
| `industrialupgrade:recipe/industrialupgrade_1252` | `industrialupgrade:block_squeezer/squeezer` |
| `industrialupgrade:recipe/industrialupgrade_1250` | `industrialupgrade:compressor/compressor` |
| `industrialupgrade:recipe/industrialupgrade_1973` | `industrialupgrade:basemachine3/steam_fluid_heater` |
| `industrialupgrade:recipe/industrialupgrade_1917` | `industrialupgrade:crafting_elements/crafting_496_element` |

如果这 4 条需要保留，两种改法：

1. 推荐：把这 4 条改写成 `event.shaped()`（类型变成 `minecraft:crafting_shaped`），自然不受 type 过滤影响。
2. 继续保持 IU 序列化器类型时，用 `not` 白名单排除（KubeJS 过滤对象支持 `not` / `or`）：

```js
event.remove({
    type: 'industrialupgrade:shaped_recipe',
    not: {
        or: [
            { id: 'industrialupgrade:recipe/industrialupgrade_1252' },
            { id: 'industrialupgrade:recipe/industrialupgrade_1250' },
            { id: 'industrialupgrade:recipe/industrialupgrade_1973' },
            { id: 'industrialupgrade:recipe/industrialupgrade_1917' }
        ]
    }
})
```

仍然保留的：

- `kubejsstudio:block_anvil/block_anvil`（IU 铁砧方块，`event.shaped()` 注册，类型为 `minecraft:crafting_shaped`）。
- IU 的熔炼 / 高炉配方。
- 其它模组和 KubeJS 自建的配方。

注意：铁砧本身的所有配方都被删除，包括「板 → 2 外壳」和元素转换 504 → 501。
如果外壳需要保留，把 3.2 的删除条件改成只跳过 `c:casings/*` 产物即可。

## 5. 验收清单

1. **完全重启游戏**（JEI 缓存只在重启时刷新），看服务端日志：
   - 首次应出现 `[iu_handcraft] anvil 配方 N 条，新增 M 个删除项，剩余 0 条`，
     其中 N 是 IU 实际生成的配方总数；
   - 之后同一进程内 `/reload` 应出现 `[iu_handcraft] anvil 配方已全部删除`；
   - 若出现 `取不到 anvil 配方列表` 或 `Recipes.recipes 尚未初始化`，
     说明事件时机或 IU 版本变了，需要检查日志。
2. JEI 搜索任意 `industrialupgrade:` 物品：不再出现 IU 工作台 shaped / shapeless 配方。
3. JEI 的 IU 铁砧分类应为空；拿 IU 铁砧放铁锭：不显示敲板配方，机器也不产生进度。
4. 再次 `/reload` 后重复第 3 步：仍然没有（验证 `recipeRemoves` 重放有效）。
5. 抽查保留项：
   - IU 熔炼 / 高炉配方仍在；
   - `kubejsstudio:block_anvil/block_anvil` 仍可制作。

## 6. 维护备忘

- 如果日后升级 IU，需重新确认：
  - 序列化器 id 是否仍为 `industrialupgrade:shaped_recipe` / `shapeless_recipe`；
  - 铁砧机器名是否仍为 `anvil`；
  - `RecipesCore.getRecipeList` / `addRemoveRecipe` / `removeAllRecipesFromList` 是否仍存在；
  - `BaseMachineRecipe.getOutput().items` 是否仍是公开字段。
- 本次结论来自字节码：
  - `BlockEntityAnvil.init()` 只生成「锭→板」「板→2 外壳」两类配方 + 1 条元素转换；
  - KubeJS 的 tag 事件只写不读（`event.tags` 初始为空），`ServerEvents.recipes` 阶段 tag 尚未绑定。
- 本脚本与 `kubejs/server_scripts/industrial/if_gears.js` 一样，属于「直接调 IU Java API」的写法；
  IU 没有安装独立的 KubeJS 配方桥接模组，因此不能依赖桥接 API。
