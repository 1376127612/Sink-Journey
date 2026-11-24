// ============================================================
// 石油—石化线（GTNH 式：常压分馏 → 裂解/裂化 → 聚合 → 塑料）
// ------------------------------------------------------------
// 结构：
//
//   原油(6 种) ──气动精馏塔(2/3/4 层)──> LPG / 石脑油 / 柴油 / 重油
//        石脑油 ──IU 高级炼油厂(裂解)──> 乙烯
//        重油   ──IU 高级炼油厂(催化裂化)──> 丙烯
//        柴油   ──IU 高级炼油厂(裂化)──> 丙烯
//        重油   ──IU 炼油厂(热裂化)──> 石脑油
//        石脑油 ──IU 炼油厂(重整)──> 汽油
//        乙烯/丙烯 ──高分子聚合器──> 聚乙烯/聚丙烯液体
//        液体 ──液体固化反应釜(+氧)──> 聚乙烯/聚丙烯
//        聚乙烯 + 聚丙烯 + 水 ──化工厂──> 塑料 ──塑型机(+氧)──> 塑料板
//
// 为什么上游放气动：
//   常压分馏是这条线的入口，气动精馏塔不要电，只要压力和 100~200℃ 的热，
//   正好卡在蒸汽/气动时代。IU 自己的两台炼油厂改成了下游的重油加工设备。
//
// 删掉的原版捷径（都是"一步到塑料"或"把裂解原料当燃料烧掉"）：
//   · 高级炼油厂 原油 -> 聚乙烯 + 聚丙烯（6 种原油各一条）
//   · 炼油厂     原油 -> 汽油 + 柴油（6 种原油各一条）
//   · 气体混合器 乙炔 + 氢 -> 乙烯；丙烷 + 溴 -> 二溴丙烷
//   · 流式腐蚀釜 二溴丙烷 + 锌 -> 丙烯
//   天然气仍然可以分离出甲烷/丙烷、裂解出乙炔和氢，只是不再直接变塑料。
//
// 实现通道：
//   气动精馏塔 —— 普通数据包配方（event.custom），无累积问题，留在本文件。
//   IU 机器   —— 已迁到 Sink Journey Core 的 JSON 补丁：kubejs/sjcore/oil_line.json
//                （高级炼油厂/炼油厂整池重做，气体混合器与流式腐蚀釜删原版捷径）。
//                IU 的配方 bootstrap 每个 JVM 只跑一次，桥模组改完只能重启才能撤销；
//                mod 那边有池子快照，/sjcore iu reload 就能重放或撤销。
//                另外 industrialupgrade:universal_recipe 这条数据包通道在本包实测无效：
//                它的登记表在 TagsUpdatedEvent 里重放，而配方解析在更晚的 RecipeManager
//                阶段，重放时表还是空的。
//
// 数值全部集中在下面的调用里，改产量只动数字。
// 文档：kubejs/docs/OIL_LINE.md
// ============================================================

// ---- 原油与馏分 ----
var OIL_PETROLEUM = 'industrialupgrade:iufluidpetroleum'
var OIL_SWEET_MEDIUM = 'industrialupgrade:iufluidsweet_medium_oil'
var OIL_SWEET_HEAVY = 'industrialupgrade:iufluidsweet_heavy_oil'
var OIL_SOUR_LIGHT = 'industrialupgrade:iufluidsour_light_oil'
var OIL_SOUR_MEDIUM = 'industrialupgrade:iufluidsour_medium_oil'
var OIL_SOUR_HEAVY = 'industrialupgrade:iufluidsour_heavy_oil'

var F_LPG = 'pneumaticcraft:lpg'
var F_NAPHTHA = 'kubejs:naphtha'
var F_DIESEL = 'industrialupgrade:iufluiddiesel'
var F_RESIDUE = 'industrialupgrade:iufluidblackoil'

// 每种原油的"轻"程度：石脑油 +d，渣油 -d（d 越大越轻）
var CRUDES = [
    { id: OIL_PETROLEUM, name: 'petroleum', d: 0 },
    { id: OIL_SWEET_MEDIUM, name: 'sweet_medium', d: 50 },
    { id: OIL_SWEET_HEAVY, name: 'sweet_heavy', d: -50 },
    { id: OIL_SOUR_LIGHT, name: 'sour_light', d: 30 },
    { id: OIL_SOUR_MEDIUM, name: 'sour_medium', d: -20 },
    { id: OIL_SOUR_HEAVY, name: 'sour_heavy', d: -70 }
]

ServerEvents.recipes(event => {
    // ========================================================
    // 1. 气动精馏塔：常压分馏
    // --------------------------------------------------------
    // 层数决定能分开几段：2 层只能出柴油+渣油，3 层多出石脑油，
    // 4 层才同时拿到 LPG。温度门槛也随之升高（100/150/200℃）。
    // 原版三条（oil_2/3/4）按 tag 出柴油/煤油/汽油/LPG，这里整条替换。
    // ========================================================
    ;['oil_2', 'oil_3', 'oil_4'].forEach(function (n) {
        event.remove({ id: 'pneumaticcraft:refinery/' + n })
    })

    var addRefinery = function (crudeName, tier, input, outputs, temp) {
        event.custom({
            type: 'pneumaticcraft:refinery',
            input: input,
            outputs: outputs,
            temperature: { min: temp }
        }).id('kubejs:oil_line/refinery/' + crudeName + '_' + tier)
    }

    CRUDES.forEach(function (crude) {
        var d = crude.d

        // 4 层：LPG + 石脑油 + 柴油 + 重油
        addRefinery(crude.name, 'l4', { amount: 1000, fluid: crude.id }, [
            { amount: 100, id: F_LPG },
            { amount: 400 + d, id: F_NAPHTHA },
            { amount: 280, id: F_DIESEL },
            { amount: 220 - d, id: F_RESIDUE }
        ], 473)

        // 3 层：石脑油 + 柴油 + 重油
        addRefinery(crude.name, 'l3', { amount: 1000, fluid: crude.id }, [
            { amount: 260 + d, id: F_NAPHTHA },
            { amount: 420, id: F_DIESEL },
            { amount: 320 - d, id: F_RESIDUE }
        ], 423)

        // 2 层：柴油 + 重油（常压拔顶，拿不到石脑油）
        addRefinery(crude.name, 'l2', { amount: 1000, fluid: crude.id }, [
            { amount: 600 + d, id: F_DIESEL },
            { amount: 400 - d, id: F_RESIDUE }
        ], 373)
    })
})

// ============================================================
// IU 侧（高级炼油厂 / 炼油厂 / 气体混合器 / 流式腐蚀釜）已迁移到 mod 补丁：
//   kubejs/sjcore/oil_line.json   ← op = clear / remove / add
// 数值说明见 kubejs/docs/OIL_LINE.md 第 3.2、4 节。
// 这里只保留气动精馏塔的数据包配方。
// ============================================================
