// ============================================================
// Industrial Upgrade：铁砧敲板封禁 + 熔炼炉禁钢
// ------------------------------------------------------------
// 1. 铁砧不再参与生产
//    原始时代的板材/外壳改由「挤压原型机」（IU 的 MetalFormer，
//    配方池 rolling/compressor 一侧）承担，铁砧的「锭 -> 板」与
//    「板 -> 2 外壳」两类配方全部删除。铁砧方块本身保留（蒸汽挤出机
//    与蒸汽轧机的配方里还把它当零件用），但它不再能敲出任何东西。
//
// 2. 熔炼炉不炼钢
//    熔炼炉控制器支持「熔融铁 + 熔融碳 -> 熔融钢」的合金混合，
//    再经浇注块成锭 —— 这等于让原始时代直接出钢。这里把熔炼炉
//    的钢类产物（锭/板/块/外壳）全部删掉，钢只保留土高炉渗碳一条路。
//
// 时机：IU 在 TagsUpdatedEvent 里重建机器配方，KubeJS 的 loaded
// 在整轮加载结束后触发，晚于它；和 silicon/iu_crystal.js 同一套做法。
// ============================================================

ServerEvents.loaded(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')

    // ---- 1. 铁砧：锭 -> 板、板 -> 2 外壳 ----
    const plate = function (metal) {
        return 'industrialupgrade:itemplates/' + metal + '_plate'
    }
    const casing = function (metal) {
        return 'industrialupgrade:casing/' + metal
    }

    ;['iron', 'copper', 'tin', 'lead', 'gold', 'bronze', 'steel'].forEach(metal => {
        iu.removeByOutput('anvil', plate(metal), 1)
    })
    ;['iron', 'copper', 'tin', 'bronze'].forEach(metal => {
        iu.removeByOutput('anvil', casing(metal), 2)
    })

    // ---- 2. 熔炼炉：钢 ----
    const steelOuts = [
        ['industrialupgrade:itemingots/steel_ingot', 1],
        ['industrialupgrade:itemplates/steel_plate', 1],
        ['industrialupgrade:blockresource/steel_block', 1],
        ['industrialupgrade:casing/steel', 2]
    ]
    // 浇注池在 IU 里叫 ingot_casting，熔化池叫 smeltery，两个都试一遍
    ;['ingot_casting', 'smeltery'].forEach(machine => {
        steelOuts.forEach(pair => {
            const ok = iu.removeByOutput(machine, pair[0], pair[1])
            console.info('[IU] 熔炼炉禁用钢产出 ' + machine + ' ' + pair[0] + ' -> ' + ok)
        })
    })

    console.info('[IU] 铁砧敲板已封禁，板材改由挤压原型机生产')
})
