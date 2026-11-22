// ============================================================
// 光刻线配方（MMCR + 工作台）
// ------------------------------------------------------------
// 1. 四台光刻机 + 晶圆切割机的控制器（Mk.I 与切割机用气动蚀刻板，前期就能造出来）
// 2. 晶圆提纯 W1→W2→W3→W4（工作台，只吃现有材料）
// 3. 掩模 6 片、激光头 4 支（工作台）
// 4. 光刻（曝光）：机台 × 掩模 × 晶圆 × 激光头 → 曝光晶圆（失败即报废）
// 5. 切割：曝光晶圆 + 规格单 → 分级裸片
// 6. 删掉工作台的 12 条芯片直合配方
//
// 数值口径与 tools/gen_chip_overhaul.py 完全一致：
//   Y = clamp((机基础 + 头加成) × 工艺难度, 0.05, 0.99)
//   通过率 = min(档位上限, Y + 档位放宽量)
//   裸片数 = 4^Δ（Δ = 晶圆纯度 − 掩模要求纯度，封顶 3）→ 1 / 4 / 16 / 64
//   产出 = round(裸片数 × 通过率)，至少 1
// ============================================================

ServerEvents.recipes(event => {

    // ---------------- 参数 ----------------
    const WAFER = {
        1: 'industrialupgrade:crafting_elements/crafting_494_element',
        2: 'kubejs:wafer_9n',
        3: 'kubejs:wafer_11n',
        4: 'kubejs:wafer_12n'
    }

    // 掩模 -> 最低晶圆：M1/M2 要 6N(W1)、M3 要 9N(W2)、M4/M5 要 11N(W3)、M6 要 12N(W4)
    // TODO T5 同位素级晶圆(W5)上线后，M6 改指 5 档。
    const MASK = {
        1: { id: 'kubejs:mask_1p5u', node: '1.5µm', mk: 1, head: 1, wafer: 1 },
        2: { id: 'kubejs:mask_800n', node: '800nm', mk: 2, head: 1, wafer: 1 },
        3: { id: 'kubejs:mask_90n', node: '90nm', mk: 3, head: 2, wafer: 2 },
        4: { id: 'kubejs:mask_28n', node: '28nm', mk: 3, head: 3, wafer: 3 },
        5: { id: 'kubejs:mask_7n', node: '7nm', mk: 4, head: 3, wafer: 3 },
        6: { id: 'kubejs:mask_3n', node: '3nm', mk: 4, head: 4, wafer: 4 }
    }

    const LENS = {
        1: { id: 'kubejs:lens_glass', bonus: 0.00 },
        2: { id: 'kubejs:lens_quartz', bonus: 0.05 },
        3: { id: 'kubejs:lens_caf2', bonus: 0.10 },
        4: { id: 'kubejs:lens_multilayer', bonus: 0.15 }
    }

    // heads 全开：任意机器都能装任意激光头（头只影响报废率，不设机器门），
    // 掩模的上限由机器等级决定，掩模自身还有「最低头」要求（M4 起必须 H3 以上）。
    const TIER = {
        1: { id: 'litho_mk1', base: 0.55, masks: [1, 2], heads: [1, 2, 3, 4], secs: 60, fe: 32 },
        2: { id: 'litho_mk2', base: 0.70, masks: [1, 2, 3], heads: [1, 2, 3, 4], secs: 40, fe: 128 },
        3: { id: 'litho_mk3', base: 0.85, masks: [1, 2, 3, 4], heads: [1, 2, 3, 4], secs: 20, fe: 512 },
        4: { id: 'litho_mk4', base: 0.95, masks: [1, 2, 3, 4, 5, 6], heads: [1, 2, 3, 4], secs: 10, fe: 2048 }
    }

    const DIFF = { 1: 1.00, 2: 0.95, 3: 0.90, 4: 0.85, 5: 0.80, 6: 0.75 }

    const GRADE = {
        i9: { spec: 'kubejs:spec_i9', relax: 0.00, cap: 0.99 },
        i7: { spec: 'kubejs:spec_i7', relax: 0.10, cap: 0.95 },
        i5: { spec: 'kubejs:spec_i5', relax: 0.20, cap: 0.97 },
        i3: { spec: 'kubejs:spec_i3', relax: 0.30, cap: 0.99 }
    }

    // ---------------- 1. 控制器 ----------------
    const BOARD = {
        1: 'industrialupgrade:circuit/circuit_part1',
        2: 'industrialupgrade:circuit/advanced_part2',
        3: 'industrialupgrade:circuit/nanocircuit_part2',
        4: 'industrialupgrade:circuit/photon_part2'
    }
    const SHELL = {
        1: 'minecraft:iron_block',
        2: 'minecraft:copper_block',
        3: 'minecraft:gold_block',
        4: 'minecraft:diamond_block'
    }

    // 切割机与 Mk.I 用「气动工艺的电路板」，压缩空气阶段就能造出来
    event.shaped('mmcr:wafer_dicer_controller', [
        'SGS',
        'GCG',
        'SCS'
    ], {
        S: 'minecraft:iron_block',
        G: 'minecraft:glass',
        C: 'pneumaticcraft:printed_circuit_board'
    }).id('kubejs:sink_litho/wafer_dicer_controller')

    for (let t = 1; t <= 4; t++) {
        event.shaped(`mmcr:${TIER[t].id}_controller`, [
            'SGS',
            'GCG',
            'SGS'
        ], {
            S: SHELL[t],
            G: 'minecraft:glass',
            C: t === 1 ? 'pneumaticcraft:printed_circuit_board' : BOARD[t]
        }).id(`kubejs:sink_litho/${TIER[t].id}_controller`)
    }

    // ---------------- 2. 晶圆来源 ----------------
    // W1 = IU 494（T1 区熔 + 直拉，iu_crystal.js）
    // W2 = kubejs:wafer_9n（T2 改良西门子，wafer_line.js + iu_crystal.js）
    // W3 = kubejs:wafer_11n（T3 硅烷裂解，同上）
    // W4 = kubejs:wafer_12n（T4 磁控直拉，mcz_recipes.js + iu_crystal.js）
    // 这里以前用工作台把低档晶圆 + 化学品「垫」成高档晶圆，
    // 现在每档都是独立工艺路线，不再需要升级配方。

    // ---------------- 3. 掩模 ----------------
    const MASK_BASE = 'industrialupgrade:crafting_elements/crafting_487_element' // 基础模板/电路板
    const MASK_TARGET = {
        1: '#c:plates/copper',
        2: '#c:plates/silver',
        3: '#c:plates/molybdenum',
        4: '#c:plates/platinum',
        5: '#c:plates/iridium',
        6: '#c:plates/arsenic'
    }

    for (let m = 1; m <= 6; m++) {
        event.shaped(MASK[m].id, ['TTT', 'TBT', 'GGG'], {
            T: MASK_TARGET[m],
            B: MASK_BASE,
            G: 'minecraft:glass'
        }).id(`kubejs:sink_litho/mask_m${m}`)
    }

    // ---------------- 4. 激光头 ----------------
    event.shaped(LENS[1].id, ['GGG', 'GRG', 'SSS'], {
        G: 'minecraft:glass',
        R: 'minecraft:redstone',
        S: '#c:plates/steel'
    }).id('kubejs:sink_litho/lens_h1')

    event.shaped(LENS[2].id, ['QQQ', 'QLQ', 'SSS'], {
        Q: 'minecraft:quartz',
        L: LENS[1].id,
        S: '#c:plates/titanium'
    }).id('kubejs:sink_litho/lens_h2')

    event.shaped(LENS[3].id, ['FFF', 'FLF', 'TTT'], {
        F: 'industrialupgrade:crafting_elements/crafting_344_element', // 碳化硅
        L: LENS[2].id,
        T: '#c:plates/platinum'
    }).id('kubejs:sink_litho/lens_h3')

    event.shaped(LENS[4].id, ['MMM', 'MLM', 'PPP'], {
        M: 'industrialupgrade:crafting_elements/crafting_490_element', // 光谱制程模板
        L: LENS[3].id,
        P: 'industrialupgrade:crafting_elements/crafting_620_element'  // 光子元件模板
    }).id('kubejs:sink_litho/lens_h4')

    // ---------------- 5. 测试规格单（不消耗，等同一张测试程序） ----------------
    const SPEC_MAT = { i3: 'minecraft:copper_ingot', i5: 'minecraft:iron_ingot', i7: 'minecraft:gold_ingot', i9: 'minecraft:diamond' }
    for (const g in GRADE) {
        event.shapeless(GRADE[g].spec, [
            'minecraft:paper',
            'minecraft:redstone',
            SPEC_MAT[g]
        ]).id(`kubejs:sink_litho/spec_${g}`)
    }

    // ---------------- 6. 光刻（曝光） ----------------
    // 曝光只做一件事：把掩模图案打到晶圆上，得到「曝光晶圆」。
    // 报废率就是这一步的失败率 —— 曝光失败整片报废，不产出任何东西，
    // 所以精度更高的机台/激光头 = 更低的报废率。
    const exposureRate = (tierId, lensId, maskId) => {
        const raw = (TIER[tierId].base + LENS[lensId].bonus) * DIFF[maskId]
        return Math.max(0.05, Math.min(0.99, raw))
    }

    const diesPerWafer = (waferId, maskId) => {
        const delta = Math.min(3, Math.max(0, waferId - MASK[maskId].wafer))
        return Math.pow(4, delta)
    }

    let count = 0
    for (let t = 1; t <= 4; t++) {
        let tier = TIER[t]
        for (const maskId of tier.masks) {
            for (const lensId of tier.heads) {
                if (lensId < MASK[maskId].head) continue
                for (let waferId = MASK[maskId].wafer; waferId <= 4; waferId++) {
                    let y = exposureRate(t, lensId, maskId)

                    event.custom({
                        type: 'mmcr:machine_recipe',
                        recipe_pool: `sinkjourney:${tier.id}`,
                        tick_time: tier.secs * 20,
                        requirements: [
                            { type: 'minecraft:item', io: 'input', item: { item: WAFER[waferId] }, count: 1 },
                            { type: 'minecraft:item', io: 'input', item: { item: MASK[maskId].id }, count: 1, consume_chance: 0.02 },
                            { type: 'minecraft:item', io: 'input', item: { item: LENS[lensId].id }, count: 1, consume_chance: 0.5 },
                            { type: 'neoforge:energy', io: 'input', fe_per_tick: tier.fe },
                            {
                                type: 'minecraft:item', io: 'output', chance: y,
                                stack: { id: `kubejs:exposed_m${maskId}_w${waferId}`, count: 1 }
                            }
                        ]
                    }).id(`kubejs:sink_litho/${tier.id}_m${maskId}_w${waferId}_h${lensId}`)

                    count++
                }
            }
        }
    }

    // ---------------- 7. 切割：曝光晶圆 → 裸片 ----------------
    // 一片曝光晶圆切出多少颗、按哪一档算，看晶圆本身的等级（纯度决定裸片数）
    // 和规格单（决定分选标准）。i9 要求最高、出得最少，i3 几乎全过。
    const BIN_RATE = { i9: 0.55, i7: 0.70, i5: 0.85, i3: 0.95 }

    let diceCount = 0
    for (let maskId = 1; maskId <= 6; maskId++) {
        for (let waferId = MASK[maskId].wafer; waferId <= 4; waferId++) {
            let dies = diesPerWafer(waferId, maskId)

            for (const g in BIN_RATE) {
                let out = Math.max(1, Math.round(dies * BIN_RATE[g]))

                event.custom({
                    type: 'mmcr:machine_recipe',
                    recipe_pool: 'sinkjourney:wafer_dicer',
                    tick_time: 200,
                    requirements: [
                        { type: 'minecraft:item', io: 'input', item: { item: `kubejs:exposed_m${maskId}_w${waferId}` }, count: 1 },
                        { type: 'minecraft:item', io: 'input', item: { item: GRADE[g].spec }, count: 1, consume_chance: 0 },
                        { type: 'neoforge:energy', io: 'input', fe_per_tick: 64 },
                        { type: 'minecraft:item', io: 'output', stack: { id: `kubejs:chip_m${maskId}_${g}`, count: out } }
                    ]
                }).id(`kubejs:sink_litho/dice_m${maskId}_w${waferId}_${g}`)

                diceCount++
            }
        }
    }

    // ---------------- 8. 封死工作台直合芯片 ----------------
    // IU 原本允许「8 根锌棍 + 电容」直接合出封装芯片，这条路会绕过整条光刻线，
    // 所以把 12 条芯片合成配方（每代 SOIC / QFP 各一条）删掉。
    // 芯片只能走：光刻 → 切割 → 封装 三步。
    const CHIP_RECIPES = [
        'industrialupgrade:industrialupgrade_436', // 基础 SOIC
        'industrialupgrade:industrialupgrade_437', // 基础 QFP
        'industrialupgrade:industrialupgrade_515', // 高级 SOIC
        'industrialupgrade:industrialupgrade_516', // 高级 QFP
        'industrialupgrade:industrialupgrade_512', // 纳米 SOIC
        'industrialupgrade:industrialupgrade_508', // 纳米 QFP
        'industrialupgrade:industrialupgrade_513', // 量子 SOIC
        'industrialupgrade:industrialupgrade_509', // 量子 QFP
        'industrialupgrade:industrialupgrade_514', // 光谱 SOIC
        'industrialupgrade:industrialupgrade_510', // 光谱 QFP
        'industrialupgrade:industrialupgrade_1238', // 光子 SOIC
        'industrialupgrade:industrialupgrade_511'  // 光子 QFP
    ]
    for (const id of CHIP_RECIPES) event.remove({ id })

    console.info(`[光刻线] 曝光配方 ${count} 条、切割配方 ${diceCount} 条；工作台上已合不出芯片`)
})
