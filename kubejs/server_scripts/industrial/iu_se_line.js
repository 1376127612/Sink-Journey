// ============================================================
// 电力初期 SE 线：元件:SE / 元件:浓缩 / 阳光化合物制造厂 / SE 线
// ============================================================
//
// 问题：IU 把整条 SE 线写成钨 / 锗 / 钍 / 复合金属板，
//      电力初期既造不出阳光化合物，也铺不了 SE 线，
//      于是「吃 SE 的机器」（流体分离器、高分子聚合器、制造厂）
//      全部停在原地。
//
// 处理：只换金属，不改机器与工序。
//      钢 = 结构件，银 = 导体，镍 = 抗蚀与耐热，青铜 / 铜导线 = 触头与引线。
//
// 配方 id 保持原样（industrialupgrade_1128 / 1341 / 1467 / 680），
// 任务书与 JEI 的引用不会断。
//
// 机器侧那一条（阳光化合物：碎片 ×4 + 荧石粉 + 石英 + 镍锭）
// 走 Sink Journey Core：kubejs/sjcore/se_line.json，游戏内 `/sjcore iu reload`。
//
// 详细说明：kubejs/docs/SE_LINE.md
// ============================================================

ServerEvents.recipes(event => {
    var E_PLATE = {
        steel:  { tag: 'c:plates/steel' },
        silver: { tag: 'c:plates/silver' },
        nickel: { item: 'industrialupgrade:itemplates/nickel_plate' },
        iron:   { tag: 'c:plates/iron' },
        bronze: { tag: 'c:plates/bronze' }
    }
    var E_ELEM = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }
    var eItem = function (id) {
        return { item: id }
    }

    var eShaped = function (id, pattern, key, output, count) {
        event.remove({ id: id })
        event.custom({
            type: 'industrialupgrade:shaped_recipe',
            category: 'misc',
            key: key,
            pattern: pattern,
            result: { count: count || 1, id: output },
            show_notification: false
        }).id(id)
    }

    // ---- 1. 元件:SE（79）----
    // 原：复合金属板 ×2 + 碳板 ×3 + 钍 + 青铜板 ×2。
    // 四个材料全不在本时代：复合金属板与碳板是后期压制件，钍是反应堆燃料。
    // 换：镍板做耐热壳、钢板做骨架、银板做受光触头，青铜板与形状保留。
    eShaped('industrialupgrade:industrialupgrade_1128',
        ['CCC', 'BAB', 'EDE'],
        {
            A: eItem(E_ELEM(21)),
            B: E_PLATE.nickel,
            C: E_PLATE.steel,
            D: E_PLATE.silver,
            E: E_PLATE.bronze
        },
        E_ELEM(79))

    // ---- 2. 元件:浓缩（55）----
    // 原：铁板 ×2 + 碎片 ×4 + 锗板 ×2。锗不属于本时代。
    // 换：镍板，浓缩腔要的是耐热面，不是半导体面。
    eShaped('industrialupgrade:industrialupgrade_1341',
        ['DCD', 'BAB', 'CCC'],
        {
            A: eItem(E_ELEM(21)),
            B: E_PLATE.iron,
            C: eItem('industrialupgrade:itemsunnarium/sunnariumpart'),
            D: E_PLATE.nickel
        },
        E_ELEM(55))

    // ---- 3. 阳光化合物制造厂 ----
    // 原：阳光化合物板制造厂 + 元件:浓缩 + 生成机。
    // 板制造厂自带电动机、钛钢精加工板与铂板，等于把制造厂锁在后期。
    // 换：钢板 ×4 做机身、镍板 ×2 做耐热衬、元件:浓缩与生成机原样保留。
    eShaped('industrialupgrade:industrialupgrade_1467',
        ['BCB', 'CAD', 'B B'],
        {
            A: eItem('industrialupgrade:se_gen/se_gen'),
            B: E_PLATE.steel,
            C: E_PLATE.nickel,
            D: eItem(E_ELEM(55))
        },
        'industrialupgrade:gen_sunnarium/gen_sunnarium')

    // ---- 4. SE 线（阳光能量导管）----
    // 原：阳光化合物 ×2 + 铜导线 + 橡胶 ×2 → 1 条。
    // 一块阳光化合物要四枚碎片（26000 SE 的日照），一条线这个价铺不起网络。
    // 材料不动，产量改为 8 条：一块化合物合 4 条线，约合一枚碎片一条。
    eShaped('industrialupgrade:industrialupgrade_680',
        [' C ', 'ABA', ' C '],
        {
            A: eItem('industrialupgrade:itemsunnarium/sunnarium2'),
            B: eItem('industrialupgrade:wiring/copper'),
            C: eItem('industrialupgrade:crafting_elements/crafting_271_element')
        },
        'industrialupgrade:wiring/solarium', 8)

    console.info('[IU] SE 线魔改已应用：元件:SE / 元件:浓缩 / 阳光化合物制造厂改用 钢/银/镍/青铜，SE 线单次产出 8 条')
})
