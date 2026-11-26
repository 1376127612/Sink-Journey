# KubeJS 脚本写法约束（Sink Journey）

> 只记两类坑：写错了**不会有语法红字**，但会让整段脚本加载时静默失效或半途中断。
> 排查 `logs/kubejs/*.log` 前先对照这里。

## 0. 怎么读报错

KubeJS 的报错格式固定是 `脚本:行号: Error in '事件名': 异常`：

```
industrial/ore_line.js#111: Error in 'ServerEvents.recipes': TypeError: itemIn is not a function, it is undefined.
client_scripts:fluid_unify_hide.js#83: Error in 'RecipeViewerEvents.removeEntries': Failed to read FluidStack from ...
```

行号是**你写的那行**，事件名说明它挂在哪个回调里。异常抛出点之后，同一个回调里的代码**全部不执行**——
所以「只报一行错」往往等于「后面几十条配方都没进游戏」，看到报错先假设同文件后面的东西全是坏的。

## 1. Rhino 的提升：变量必须「先赋值，后使用」

KubeJS 的 Rhino 分支会把回调体里的 `const` / `let` 声明提升到函数作用域，**赋值仍按书写顺序执行**。
两种典型症状：

| 症状 | 触发写法 |
| --- | --- |
| `TypeError: xxx is not a function, it is undefined` | 助手函数（`itemIn` / `fluidIn` / `fe` / `add`…）写在调用之后 |
| `TypeError: redeclaration of var xxx` | 循环体里声明 `const` / `let`，第二圈撞上同名绑定 |

两条硬规则：

1. **助手函数集中在回调开头写完**，用到它们的配方排在后面；
2. **循环体内不写 `const` / `let`**（`for (const …)` 头里的声明不算），数组和常量提到循环外面；
   循环内要复用的局部量用带下标的 `var` 循环。

本轮因此修掉的两处：

| 文件 | 报错 | 原因 | 修法 |
| --- | --- | --- | --- |
| `server_scripts/industrial/ore_line.js:140` | `itemIn is not a function, it is undefined` | 黄药配方写在 `itemIn` 等箭头函数赋值之前 | 挪到 `add()` 之后并统一走 `add()` |
| `server_scripts/mekanism/mek_dj2.js:161` | `redeclaration of var tiers` | 管道三档数组 `tiers` 声明在 `for (const [kind, filler] of TRANSPORT)` 里 | 提成循环外的 `PIPE_TIERS` |

代价可以用 §3 的桩测试量出来：`ore_line.js` 修前只注册 2 条控制器配方、修后 92 条；
`mek_dj2.js` 修前注册 25 条就中断（能量立方、储罐、升级、电解核心、数字采矿机全丢）、修后 64 条。

## 2. 名单类隐藏 / 移除：先判存在，再删

`RecipeViewerEvents.removeEntries`、`removeEntriesCompletely`、`Fluid.of()` 的参数是**延迟解析**的，
异常发生在事件收尾阶段，**`try/catch` 拦不住**。名单里只要有一个不存在的 id，整个事件就抛错，
排在它后面的条目一起失效。

统一写法：

```js
BANNED_ITEMS.forEach(id => {
    if (!Item.exists(id)) {
        console.warn('[封禁] JEI 里找不到这个物品，已跳过：' + id)
        return
    }
    event.remove(id)
})
```

物品/方块用 `Item.exists(id)`，流体用 `Fluid.exists(id)`，直接吃 `namespace:path` 字符串。
服务端 `event.remove({ id: … })` / `{ output: … }` 不抛错，但**对错 id 是静默无效**，
所以同一份名单改 id 时两侧要一起改。

本轮因此修掉的两处：

| 文件 | 报错 | 原因 | 修法 |
| --- | --- | --- | --- |
| `client_scripts/bans/mek_nuclear_jei.js:32` | `Failed to read ingredient from mekanismgenerators:superheating_element` | 10.7 版的过热元件在 **`mekanism:`** 命名空间下（`assets/mekanism/blockstates/superheating_element.json`），名单写成了 `mekanismgenerators:` | 改 id + `Item.exists` 守卫；服务端 `bans/mek_nuclear.js:26` 同步改 id（那边静默失效，等于过热元件一直还能合成） |
| `client_scripts/fluid_unify_hide.js:85` | `Failed to read FluidStack from industrialupgrade:iufluidgasolineene` | OEF 已把该流体并到 `industrialupgrade:iufluidbenzene`，源 id 不在注册表里（见 `kubejs/data/oef/replacements/iu_internal_gasolineene.json`） | 加 `Fluid.exists` 守卫，不存在的直接跳过 |

同一轮把守卫补齐到了 `bans/dynamic_structures_jei.js:59`、`bans/iu_space_jei.js:10`、
`bans/iu_useless_chem_machines_jei.js:25`。以后名单里再加条目，缺 id 只会打一行
`[封禁] …已跳过` 的警告，不会再拖死整个事件。

**`#tag` 缺失比错 id 更阴**：不报错、不警告，只把那个材料变成空 ingredient（配方凭空少一格，
照样能合成）。改配方时跑一遍：

```bash
python kubejs/tools/check_tags.py
```

本轮扫出来两处：`ae2/ae2_core.js:113` 用了 `#c:glass_blocks/cheap`（全包没有任何 tag 文件定义它，
改成 `#c:glass_blocks`），`industrial/if_electric.js:70` 用了 `#c:storage_blocks/redstone`
（包里只有 `storage_blocks/redstone_alloy` 和 `redstone_ingot`，改成直接写 `minecraft:redstone_block`）。

## 3. 改完怎么验

**语法**：用包里自带的那套 Rhino 解析（比配平花括号准，能报行号）：

```bash
python kubejs/tools/check_js_rhino.py                       # kubejs 下全部 .js
python kubejs/tools/check_js_rhino.py kubejs/client_scripts/bans/mek_nuclear_jei.js
```

**行为**：`§1`、`§2` 的问题语法检查抓不到，用事件桩把回调真跑一遍，几秒钟出结果，不用开游戏。
prelude 只需要桩到「能跑通」为止——脚本用到哪个全局对象就补哪个：

```js
// prelude.js
var __log = []
var console = {
  log: function () {}, info: function () {},
  warn: function (m) { __log.push('WARN ' + m) },
  error: function (m) { __log.push('ERROR ' + m) }
}
var Item = { of: function (id, count) { return { id: id, count: count } } }
var ServerEvents = {
  recipes: function (cb) {
    cb({
      remove: function () {},
      custom: function () { return { id: function (i) { __log.push(i) } } },
      shaped: function () { return { id: function (i) { __log.push(i) } } }
    })
  }
}
```

```bash
java -cp "mods/[犀牛] rhino-2101.2.8-build.91.jar" kubejs/tools/kjs_parse/KjsRun.java \
     prelude.js kubejs/server_scripts/mekanism/mek_dj2.js
# log=["mekanism:steel_casing", …]    ← 注册到的配方 id
# thrown=none                          ← 有异常会打在这里，带行号
```

客户端脚本同理，把 `ServerEvents` 换成 `RecipeViewerEvents`（`removeEntriesCompletely` / `removeEntries` 各给一个
带 `remove` 的 `event`），`Item` 换成带 `exists` 的桩，`Fluid` 换成带 `exists` / `of` 的桩。

## 4. 改完怎么让它生效

| 目录 | 生效方式 |
| --- | --- |
| `server_scripts/` | 游戏内 `/reload`（或 `/kubejs reload server_scripts`） |
| `client_scripts/` | `F3 + T` 重载资源（或重启客户端） |
| `startup_scripts/` | 必须重启游戏 |

日志只看 `logs/kubejs/server.log`、`client.log`、`startup.log`。`latest.log` 里混着各模组噪声，
`grep "\[ERROR\]"` 出来的一大半跟 KubeJS 无关。

## 5. 已知的非脚本噪声

`logs/kubejs/server.log` 里成片出现的这两类 WARN 不是本包脚本的问题，不用去改：

- `RecipeComponentValue … neovitae:athanor/… chance_outputs … not allowed to be empty`：新生态（NeoVitae）自己的配方数据；
- `KubeRecipe … netherexp:warphopper_fur / netherexp:iron_scrap … Unknown registry key`：Jaden's Nether Expansion 引用了别家物品。

这是 KubeJS 读别家配方时的校验警告，配方本身退回原版解析，不影响本包内容。

还有一类是模组兼容断了，同样不是脚本问题：

- `mmcr:botania_mana_input_pool / botania_mana_output_pool … Unknown registry key`，以及 `latest.log` 里的
  `Couldn't parse … mmcr:blocks/botania_mana_*`：包里装的是 Botania-Revived，包名换过（`vazkii/botania/api` 不存在），
  MMCR 和 PneumaticCraft 的可选 Botania 兼容都没加载，那两张配方和战利品表就悬空了。
