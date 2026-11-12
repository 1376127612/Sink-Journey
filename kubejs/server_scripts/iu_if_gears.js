// ============================================================
// IndustrialForegoing 齿轮 -> IndustrialUpgrade 冲压机
//
// 1. 把 IF 铁齿轮从 c:gears/iron 里移除，避免和 EnderIO 铁齿轮混用；
//    同时给 IF 三种齿轮各建一个只包含自己的标签，供冲压机输出使用。
// 2. 调用 IU 的冲压机（gearing）配方接口：
//      4 个对应材料 -> 1 个 IF 齿轮
//    冲压机包括：冲压机 / 改良冲压机 / 高级冲压机 / 完美冲压机 / 光子冲压机 / 生物冲压机。
// 3. 删除 IF 原来的工作台齿轮配方（铁 / 金 / 钻石齿轮）。
//
// 注意：IU 的机器配方不是数据包 JSON，而是 Java 端注册的，
//       所以这里用 Java.loadClass 直接调用 BlockEntityGearMachine.addrecipe。
//       先加冲压机配方、再删原配方，避免接口调用失败时齿轮彻底无法获得。
// ============================================================

ServerEvents.tags('item', event => {
    // IF 铁齿轮和 EnderIO 铁齿轮不是同一个物品，从通用铁齿轮标签里拆出去
    event.remove('c:gears/iron', 'enderio:iron_gear')

    // 冲压机输出用的专用标签（只放 IF 自己的齿轮）
    event.add('kubejs:gears/if_iron', 'industrialforegoing:iron_gear')
    event.add('kubejs:gears/if_gold', 'industrialforegoing:gold_gear')
    event.add('kubejs:gears/if_diamond', 'industrialforegoing:diamond_gear')
})

ServerEvents.recipes(event => {
    // ---- 1. 注册 IU 冲压机配方 ----
    // addrecipe(输入标签, 输出标签)：输入数量固定为 4，输出取标签里的第一个物品
    const gearMachine = Java.loadClass('com.denfop.blockentity.mechanism.multimechanism.simple.BlockEntityGearMachine')
    gearMachine.addrecipe('c:ingots/iron', 'kubejs:gears/if_iron')
    gearMachine.addrecipe('c:ingots/gold', 'kubejs:gears/if_gold')
    gearMachine.addrecipe('c:gems/diamond', 'kubejs:gears/if_diamond')

    // ---- 2. 删除 IF 原来的工作台齿轮配方 ----
    event.remove({ id: 'industrialforegoing:iron_gear' })
    event.remove({ id: 'industrialforegoing:gold_gear' })
    event.remove({ id: 'industrialforegoing:diamond_gear' })
    // 兜底：删掉其它模组可能添加的同产物配方
    event.remove({ output: 'industrialforegoing:iron_gear' })
    event.remove({ output: 'industrialforegoing:gold_gear' })
    event.remove({ output: 'industrialforegoing:diamond_gear' })
})
