// ============================================================
// IU 中后期金属按现实服役条件归位（metal realism, P1）
// ============================================================
//
// 背景见 kubejs/docs/IU_METAL_PLAN.md：IU 的机壳与线圈是按稀有度排的，
// 结果是「高级机器吃锇铱铪」。这里只动中后期的几条关键件，基础电力时代
// 那一批（iu_electric_recipes.js）已经定稿，不重复改。
//
// 机壳梯子（294 台机器方块的等级开关，形状尽量不动）：
//   137 基础   Q235 钢板 + 铸铁            （iu_steam_recipes.js 已改）
//   138 改良   304 不锈钢 + 塑料衬里        （原：琥珀金板）
//   139 高级   316L 不锈钢 + 2~3% 钼 + CFRP （原：血石外壳）
//   140 完美   工业纯钛 Gr2 + 不锈钢内衬    （原：龙晶外壳 + 木板）
//   623 光子   尼莫尼克 + Rene             （原本就对，不动）
//
// 奇幻材料（血石 / 龙晶 / 精金）从结构件里退出，留在星辉线；
// 这是 IU_METAL_PLAN.md §10 第 1 条的默认口径。
//
// 其余三件：
//   439 辐射屏蔽罩：锇双板 -> 铅板（γ 屏蔽的现实材料，锇既贵又 OsO₄ 剧毒）
//   707 铝钛合金外壳：阿卢梅尔板 -> 钛 + 铝 + 钒（Ti-6Al-4V）
//   599 铁氧体环形电感：锰铁 + 钆 -> 铁/锰/锌粉（MnZn 铁氧体，钆是磁制冷材料）
//
// 超导四档按真实超导体系重排（原为锗/阿卢梅尔/维塔利姆/锰铁）：
//   387 超导线圈        NbTi          Tc 9.2 K，液氦温区
//   425 改良超导线圈    Nb3Sn（铌+锡）  Tc 18 K，10 T 以上
//   372 高级超导线圈    Nb3Sn + 铜稳定基体
//   398 完美超导线圈    YBCO（钇+钡+铜）Tc 92 K，液氮温区
//
// 全部是工作台配方，remove + custom 即可；/reload 生效。
// ============================================================

ServerEvents.recipes(event => {
    var E = function (n) {
        return 'industrialupgrade:crafting_elements/crafting_' + n + '_element'
    }

    // 通用：删原配方 + 用同一 id 写回
    var shaped = function (id, pattern, key, output, count) {
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

    // ---- 1. 改良电镀外壳（138）：304 不锈钢 ----
    // 潮湿与弱酸碱环境，18Cr-8Ni 足够；塑料板作绝缘衬里。
    shaped('industrialupgrade:industrialupgrade_759',
        ['BA ', 'CC ', '   '],
        {
            A: { tag: 'c:plates/stainlesssteel' },
            B: { item: E(137) },
            C: { item: 'industrialupgrade:plastic_plate' }
        },
        E(138))

    // ---- 2. 高级电镀外壳（139）：316L（加钼 2~3%）----
    // 氯离子与稀硫酸环境必须上钼，304 会点蚀；外壳再用碳纤维增强塑料包覆。
    shaped('industrialupgrade:industrialupgrade_760',
        ['BA ', 'CD ', '   '],
        {
            A: { item: E(479) },
            B: { item: E(138) },
            C: { tag: 'c:plates/stainlesssteel' },
            D: { tag: 'c:ingots/molybdenum' }
        },
        E(139))

    // ---- 3. 完美电镀外壳（140）：工业纯钛 Gr2 ----
    // 湿氯、海水、强氧化介质只能上钛；内侧留一层不锈钢做异种金属衬里。
    shaped('industrialupgrade:industrialupgrade_761',
        ['BC ', 'AA ', '   '],
        {
            A: { tag: 'c:plates/titanium' },
            B: { item: E(139) },
            C: { tag: 'c:plates/stainlesssteel' }
        },
        E(140))

    // ---- 4. 辐射屏蔽罩（439）：铅板 ----
    // γ 屏蔽的现实材料是铅（或钨重合金）；中子屏蔽是含硼材料，与金属无关。
    // 锇的工业用途只有笔尖、仪表支点、催化剂，而且 OsO₄ 剧毒。
    shaped('industrialupgrade:industrialupgrade_1083',
        ['CEC', 'EAE', ' B '],
        {
            A: { item: E(21) },
            B: {
                type: 'neoforge:components',
                components: {
                    'industrialupgrade:level_microchip': 5,
                    'minecraft:attribute_modifiers': { modifiers: [] },
                    'minecraft:enchantments': { levels: {} },
                    'minecraft:lore': [],
                    'minecraft:max_stack_size': 64,
                    'minecraft:rarity': 'common',
                    'minecraft:repair_cost': 0
                },
                items: 'industrialupgrade:circuit/nanocircuit'
            },
            C: { tag: 'c:plates/bronze' },
            E: { tag: 'c:plates/lead' }
        },
        E(439))

    // ---- 5. 铝钛合金外壳（707）：Ti-6Al-4V ----
    // 名字就是 Ti-Al 系，现实对应 Ti-6Al-4V（6% 铝、4% 钒）：钛做基体，
    // 铝与钒按合金比例少量添加，不再用阿卢梅尔（那是热电偶合金）。
    shaped('industrialupgrade:industrialupgrade_1991',
        ['AA ', 'BB ', ' C '],
        {
            A: { tag: 'c:plates/titanium' },
            B: { tag: 'c:plates/aluminium' },
            C: { tag: 'c:ingots/vanadium' }
        },
        E(707))

    // ---- 6. 铁氧体环形电感（599）：MnZn 铁氧体 ----
    // 现实软磁铁氧体是 Fe₂O₃-MnO-ZnO 陶瓷，用粉不用板；
    // 钆是磁制冷 / 中子吸收材料，不是铁氧体组分。
    shaped('industrialupgrade:industrialupgrade_1750',
        ['CBC', 'BAB', 'DBD'],
        {
            A: { item: E(582) },
            B: { tag: 'c:dusts/iron' },
            C: { tag: 'c:dusts/manganese' },
            D: { tag: 'c:dusts/zinc' }
        },
        E(599))

    // ---- 7. 超导线圈（387）：NbTi ----
    // Nb-47Ti，Tc 9.2 K，MRI 与磁控直拉炉用的就是它；双板当线圈骨架。
    shaped('industrialupgrade:industrialupgrade_1097',
        [' A ', 'ABA', ' A '],
        {
            A: { item: E(356) },
            B: { tag: 'c:doubleplate/niobiumtitanium' }
        },
        E(387))

    // ---- 8. 改良超导线圈（425）：Nb₃Sn ----
    // A15 结构，Tc 18 K，10 T 以上的高场磁体。
    shaped('industrialupgrade:industrialupgrade_1098',
        [' A ', 'ABA', ' C '],
        {
            A: { item: E(387) },
            B: { tag: 'c:doubleplate/niobium' },
            C: { tag: 'c:ingots/tin' }
        },
        E(425))

    // ---- 9. 高级超导线圈（372）：Nb₃Sn + 铜稳定基体 ----
    // 失超时铜把电流导走，实际线材都是铜包超导芯。
    shaped('industrialupgrade:industrialupgrade_1099',
        [' A ', 'ABA', ' C '],
        {
            A: { item: E(425) },
            B: { tag: 'c:doubleplate/niobium' },
            C: { tag: 'c:ingots/copper' }
        },
        E(372))

    // ---- 10. 完美超导线圈（398）：YBCO ----
    // YBa₂Cu₃O₇₋δ，Tc 92 K，进液氮温区；钇 / 钡 / 铜都是本包已有金属。
    shaped('industrialupgrade:industrialupgrade_1100',
        [' A ', 'ABA', 'CDE'],
        {
            A: { item: E(372) },
            B: { tag: 'c:ingots/copper' },
            C: { tag: 'c:ingots/yttrium' },
            D: { tag: 'c:ingots/barium' },
            E: { tag: 'c:ingots/copper' }
        },
        E(398))

    console.info('[IU] 中后期金属归位：机壳 138/139/140 改 304/316L/钛，屏蔽罩改铅，铝钛外壳改 Ti-6Al-4V，铁氧体改 MnZn，超导四档改 NbTi/Nb3Sn/YBCO')
})
