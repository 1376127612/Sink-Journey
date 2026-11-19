# Industrial Upgrade 手搓与铁砧敲板封禁（KubeJS）

> 实装文件：`kubejs/server_scripts/bans/iu_handcraft.js`
> 生效方式：服务端脚本，进游戏或 `/reload` 后生效，不需要重启客户端。
> 本文记录改动范围、IU 两套配方系统的区别、实现依据和验收清单。

## 1. 目标与范围

| 项目 | 处理 | 说明 |
| --- | --- | --- |
| IU 工作台 shaped / shapeless 配方 | 全删 | 2153 条 `industrialupgrade:shaped_recipe` + 356 条 `industrialupgrade:shapeless_recipe` |
| IU 铁砧敲板（输出为板） | 全删 | 机器名为 `anvil`，目标取 `#c:plates` |
| IU 熔炼 / 高炉配方 | 保留 | `minecraft:smelting` / `minecraft:blasting`，不按 mod 一刀切 |
| 铁砧机壳 / 元素转换等非敲板配方 | 保留 | 输出不是 `#c:plates`，不在本次范围内 |
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
const core = Java.loadClass('com.denfop.api.Recipes').recipes
const plates = Ingredient.of('#c:plates').getItems()

for (let i = 0; i < plates.length; i++) {
    core.addRemoveRecipe('anvil', plates[i], true)   // true = 删除所有输出匹配的配方
}
core.removeAllRecipesFromList()                      // 立即生效
```

关键依据（均从 IU jar 字节码确认）：

- 机器名：`BlockEntityAnvil` 的构造与 `init()` 里固定使用字符串 `anvil`。
- `addRemoveRecipe(String, ItemStack, boolean)` 只把 `RecipeRemove` 条目放进 `recipeRemoves`，
  真正执行删除的是 `removeAllRecipesFromList()`。
- `removeAllRecipe(name, removeAll, output)` 的 `removeAll` 参数：
  - `false`：只删**第一条**输出匹配的配方；
  - `true`：删**所有**输出匹配的配方。
  所以这里必须传 `true`。
- 输出匹配用 `ModUtils.checkItemEquality`（物品 + NBT），与脚本里的去重判断一致。
- `recipeRemoves` 会由 IU 在 `TagsUpdatedEvent` 初始化流程中重放；脚本再手动调一次
  `removeAllRecipesFromList()`，保证首次启动和 `/reload` 当次就生效。
- 删除项保留在 `recipeRemoves` 中，因此即使日后 IU 重新初始化，敲板配方也不会复活。

**特意避开**：`RecipesCore.removeRecipe(String, ItemStack)` 是按**输入第一格**匹配的
（字节码里是 `input.getInputs().get(0).matches(stack)`），拿板去删会误删「用板当原料」的配方。

### 3.3 目标集合为什么是 `#c:plates`

- IU jar 的 `data/c/tags/item/plates.json` 聚合标签共 89 个物品，全部属于 `industrialupgrade`：
  - 52 个 `itemplates/*`
  - 32 个 `alloyplate/*`
  - 5 个 `crafting_elements/*`（Lithium / Boron / Beryllium / Advanced Alloy / Carbon Plate）
- `data/c/tags/item/plates/*.json` 共 89 个子标签，其物品并集与聚合标签**完全一致**（0 缺失、0 多余）。
- 铁砧板配方的输出就是从 `c:plates/<name>` 子标签解析出来的，所以按聚合标签注册删除可以全覆盖，
  且所有条目都是真实存在的板物品。

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
- 铁砧的非敲板配方：机壳、元素转换等。
- IU 的熔炼 / 高炉配方。
- 其它模组和 KubeJS 自建的配方。

## 5. 验收清单

1. 进游戏 / `/reload`，看服务端日志：
   - 首次应出现 `[iu_handcraft] 新增 89 个铁砧敲板删除项`；
   - 若出现 `[iu_handcraft] #c:plates 为空`，说明标签未绑定，需检查加载顺序并回报日志。
2. JEI 搜索任意 `industrialupgrade:` 物品：不再出现 IU 工作台 shaped / shapeless 配方。
3. 拿 IU 铁砧放铁锭：不显示敲板配方，机器也不产生进度。
4. 再次 `/reload` 后重复第 3 步：仍然没有（验证 `recipeRemoves` 重放有效）。
5. 抽查保留项：
   - IU 熔炼 / 高炉配方仍在；
   - 铁砧机壳配方仍在；
   - `kubejsstudio:block_anvil/block_anvil` 仍可制作。

## 6. 维护备忘

- 如果日后升级 IU，需重新确认：
  - 序列化器 id 是否仍为 `industrialupgrade:shaped_recipe` / `shapeless_recipe`；
  - 铁砧机器名是否仍为 `anvil`；
  - `RecipesCore.addRemoveRecipe` / `removeAllRecipesFromList` / `recipeRemoves` 是否仍存在；
  - `#c:plates` 是否仍覆盖铁砧所有板输出。
- 本脚本与 `kubejs/server_scripts/industrial/if_gears.js` 一样，属于「直接调 IU Java API」的写法；
  IU 没有安装独立的 KubeJS 配方桥接模组，因此不能依赖桥接 API。
