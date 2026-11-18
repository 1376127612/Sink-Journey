// ============================================================
// 自定义方块（startup_scripts）
// ------------------------------------------------------------
// 贴图目录：kubejs/assets/kubejs/textures/block/<名字>.png（16x16）
// 注册后 id：kubejs:<名字>
// 生效方式：/kubejs reload_startup_scripts（新增/删除方块建议重启）
// 创造模式物品栏：自动进入 KubeJS 页签
//
// 第一个是可直接运行的示例；后面是复制用的模板，
// 取消注释并改 id / 显示名 / 贴图即可。
// ============================================================

StartupEvents.registry('block', event => {

    // ---- 示例：最简单的完整方块（贴图已存在） ------------------
    event.create('example_block')
        .displayName('示例方块')
        .soundType('stone')                    // 音效：stone/wood/metal/glass/sand/...
        .hardness(3.5)                         // 挖掘硬度，-1 = 不可破坏
        .resistance(6.0)                       // 爆炸抗性
        .requiresTool()                        // 必须用正确工具才掉落
        .tag('minecraft:mineable/pickaxe')     // 方块 + 物品同时打标签，镐可挖
        .item(item => {
            item.displayName('示例方块')
            // item.tooltip('§7这里写物品提示')
        })
        .texture('kubejs:block/example_block') // 自动生成 cube_all 模型，放链式调用最后

    // ---- 蒸汽机壳：铁壳 + 青铜承压板，蒸汽机机身材质 --------------
    event.create('steam_casing')
        .displayName('蒸汽机壳')
        .soundType('metal')
        .hardness(3)
        .resistance(6)
        .requiresTool()
        .tag('minecraft:mineable/pickaxe')
        .item(item => item.displayName('蒸汽机壳'))
        .texture('kubejs:block/steam_casing')

    // ------------------------------------------------------------
    // 模板 A：六面不同贴图
    // ------------------------------------------------------------
    // event.create('my_block')
    //     .displayName('我的方块')
    //     .soundType('metal')
    //     .hardness(5)
    //     .resistance(12)
    //     .requiresTool()
    //     .tag('minecraft:mineable/pickaxe')
    //     .textures({
    //         up: 'kubejs:block/my_block_top',
    //         down: 'kubejs:block/my_block_top',
    //         north: 'kubejs:block/my_block_side',
    //         south: 'kubejs:block/my_block_side',
    //         east: 'kubejs:block/my_block_side',
    //         west: 'kubejs:block/my_block_side'
    //     })

    // ------------------------------------------------------------
    // 模板 B：水平朝向方块（自动生成四个朝向的 blockstate）
    // 贴图：<id>.png 为侧面，<id>_front.png 为正面，
    //       可选 <id>_top.png / <id>_bottom.png
    // ------------------------------------------------------------
    // event.create('my_machine', 'kubejs:cardinal')
    //     .displayName('我的机器')
    //     .soundType('metal')
    //     .hardness(5)
    //     .requiresTool()
    //     .tag('minecraft:mineable/pickaxe')
    //     .textures({
    //         side: 'kubejs:block/my_machine',
    //         front: 'kubejs:block/my_machine_front',
    //         top: 'kubejs:block/my_machine_top'
    //     })

    // ------------------------------------------------------------
    // 模板 C：带方块实体 + 库存（逻辑写在 server_scripts）
    // 库存 id 固定为 'inv'，下面是 3x3
    // 服务端逻辑入口：
    //   BlockEvents.blockEntityTick('kubejs:my_machine', event => { ... })
    // ------------------------------------------------------------
    // event.create('my_machine', 'kubejs:cardinal')
    //     .displayName('我的机器')
    //     .soundType('metal')
    //     .hardness(5)
    //     .requiresTool()
    //     .tag('minecraft:mineable/pickaxe')
    //     .item(item => item.displayName('我的机器'))
    //     .blockEntity(info => {
    //         info.enableSync()                                // be.data 同步给客户端
    //         info.serverTicking()                             // 只跑服务端 tick
    //         info.inventory('inv', Direction.ALL_SET, 3, 3)   // 6 面可访问的 3x3 库存
    //     })
    //     .textures({
    //         side: 'kubejs:block/my_machine',
    //         front: 'kubejs:block/my_machine_front'
    //     })

    // ------------------------------------------------------------
    // 模板 D：常用附加属性（按需加到上面任意一条链式调用里）
    // ------------------------------------------------------------
    // .lightLevel(15)              // 发光等级 0-15
    // .notSolid()                  // 非固体（类似草、火把）
    // .noCollision()               // 不阻挡实体
    // .noItem()                    // 不生成对应物品
    // .renderType('cutout')        // 渲染类型：cutout / cutout_mipped / translucent
    // .box(1, 0, 1, 15, 14, 15)    // 自定义形状，单位 1/16
    // .drops([...])                // 自定义掉落，不写则默认掉落自身
    // .tag(['tag1', 'tag2'])       // 多个标签用数组

})
