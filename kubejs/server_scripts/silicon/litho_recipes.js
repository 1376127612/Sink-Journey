// ============================================================
// 光刻线配方（MMCR + 工作台）—— 按真实光刻物理排
// ------------------------------------------------------------
// 一台光刻机能印多细，只由两件事决定：光源波长 λ 与投影物镜的数值孔径 NA。
// 单次曝光的分辨率按 R = k1·λ/NA（k1 = 0.45 当"舒服"的余量）算，
// 比 R 还小的节点要靠多重曝光，线宽小于 R/2 的直接印不出来：
//
//   Mk.I   g 线 436 nm / NA 0.28 → 单次 700 nm   能印 1.5 µm、800 nm
//   Mk.II  i 线 365 nm / NA 0.55 → 单次 299 nm   多印 350 nm
//   Mk.III KrF  248 nm / NA 0.70 → 单次 159 nm   多印 180 nm
//   Mk.IV  ArF  193 nm / NA 1.35 → 单次  64 nm   多印 90 nm；28 nm 要双重曝光
//
// 所以旧表里「Mk.III DUV 印 90nm」「Mk.IV EUV 印 3nm」都不成立了：
// 90 nm 是 ArF 的活，28 nm 是 ArF 浸没 + SADP 的极限，7 nm 以下要 EUV 机台（暂缺）。
//
// 一次曝光真实要消耗的东西：
//   光刻胶 1 片 / 次（双重曝光 2 片）、显影液（NaOH）250 mB / 次、
//   掩模有磨损（0.1%）、投影物镜是装机配件，不消耗。
// 良率由 k1 = 节点·NA/λ 与物镜等级决定，不再拍脑袋给百分比。
//
// 数值发生器的口径：tools/gen_chip_overhaul.py
// ============================================================

ServerEvents.recipes(event => {

    // ---------------- 参数 ----------------
    const WAFER = {
        1: 'industrialupgrade:crafting_elements/crafting_494_element',
        2: 'kubejs:wafer_9n',
        3: 'kubejs:wafer_11n',
        4: 'kubejs:wafer_12n'
    }

    // 掩模：工艺节点 / 节点纳米数 / 最低晶圆纯度
    const MASK = {
        1: { id: 'kubejs:mask_1p5u', node: '1.5µm', nm: 1500, wafer: 1 },
        2: { id: 'kubejs:mask_800n', node: '800nm', nm: 800, wafer: 1 },
        3: { id: 'kubejs:mask_350n', node: '350nm', nm: 350, wafer: 2 },
        4: { id: 'kubejs:mask_180n', node: '180nm', nm: 180, wafer: 3 },
        5: { id: 'kubejs:mask_90n', node: '90nm', nm: 90, wafer: 3 },
        6: { id: 'kubejs:mask_28n', node: '28nm', nm: 28, wafer: 4 }
    }

    // 机台：光源波长 / 数值孔径 / 功耗 / 单片节拍
    // multi：会不会多重曝光（现实里 SADP / LELE 只在 ArF 浸没这一代用）
    const MACHINE = {
        1: { id: 'litho_mk1', name: 'g 线', nm: 436, na: 0.28, fe: 32, secs: 60, multi: false },
        2: { id: 'litho_mk2', name: 'i 线', nm: 365, na: 0.55, fe: 128, secs: 40, multi: false },
        3: { id: 'litho_mk3', name: 'KrF', nm: 248, na: 0.70, fe: 512, secs: 20, multi: false },
        4: { id: 'litho_mk4', name: 'ArF', nm: 193, na: 1.35, fe: 2048, secs: 10, multi: true }
    }

    // 投影物镜：能透的波长区间（决定配哪台机）与良率加成
    const OPTICS = {
        1: { id: 'kubejs:optics_glass', minNm: 400, maxNm: 700, bonus: 0.00 },
        2: { id: 'kubejs:optics_quartz', minNm: 240, maxNm: 450, bonus: 0.03 },
        3: { id: 'kubejs:optics_caf2', minNm: 150, maxNm: 400, bonus: 0.06 },
        4: { id: 'kubejs:optics_immersion', minNm: 190, maxNm: 200, bonus: 0.10 }
    }

    // 单次曝光能印的最小节点按 k1=0.45 算（工艺窗口的下限）；
    // 多重曝光能把 k1 压到 0.28，等效分辨率再翻一倍。
    const K1_LIMIT = 0.45
    const K1_MULTI = 0.28
    const minNodeSingle = (m) => K1_LIMIT * m.nm / m.na
    const minNodeMulti = (m) => K1_MULTI * m.nm / m.na / 2
    const DEVELOPER = 'industrialupgrade:iufluidsodiumhydroxide'

    // ---------------- 1. 控制器 ----------------
    const BOARD = {
        1: 'pneumaticcraft:printed_circuit_board',
        2: 'industrialupgrade:circuit/circuit_part1',
        3: 'industrialupgrade:circuit/nanocircuit_part2',
        4: 'industrialupgrade:circuit/photon_part2'
    }
    // 机壳与玻璃跟着阶段走，不拿铁块铜块凑数：
    //   四代机台都是电力机壳（机壳链到电力机壳封顶，是蒸汽机机身的下一级）
    //   玻璃：Mk.I 普通玻璃，Mk.II 起石英玻璃（光路要干净）。
    const SHELL = 'industrialupgrade:blockresource/machine'
    const GLASS = { 1: 'minecraft:glass', 2: 'ae2:quartz_glass', 3: 'ae2:quartz_glass', 4: 'ae2:quartz_glass' }

    event.shaped('mmcr:wafer_dicer_controller', [
        'SGS',
        'GCG',
        'SCS'
    ], {
        S: 'industrialupgrade:blockresource/machine',
        G: 'minecraft:glass',
        C: 'pneumaticcraft:printed_circuit_board'
    }).id('kubejs:sink_litho/wafer_dicer_controller')

    for (let t = 1; t <= 4; t++) {
        event.shaped(`mmcr:${MACHINE[t].id}_controller`, [
            'SGS',
            'GCG',
            'SGS'
        ], {
            S: SHELL,
            G: GLASS[t],
            C: BOARD[t]
        }).id(`kubejs:sink_litho/${MACHINE[t].id}_controller`)
    }

    // ---------------- 2. 掩模 ----------------
    const MASK_BASE = 'industrialupgrade:crafting_elements/crafting_487_element'
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

    // ---------------- 3. 投影物镜 ----------------
    event.shaped(OPTICS[1].id, ['GGG', 'GRG', 'SSS'], {
        G: 'minecraft:glass',
        R: 'minecraft:redstone',
        S: '#c:plates/steel'
    }).id('kubejs:sink_litho/optics_o1')

    event.shaped(OPTICS[2].id, ['QQQ', 'QLQ', 'SSS'], {
        Q: 'minecraft:quartz',
        L: OPTICS[1].id,
        S: '#c:plates/titanium'
    }).id('kubejs:sink_litho/optics_o2')

    event.shaped(OPTICS[3].id, ['FFF', 'FLF', 'TTT'], {
        F: 'industrialupgrade:crafting_elements/crafting_344_element', // 碳化硅
        L: OPTICS[2].id,
        T: '#c:plates/platinum'
    }).id('kubejs:sink_litho/optics_o3')

    event.shaped(OPTICS[4].id, ['MMM', 'MLM', 'PPP'], {
        M: 'industrialupgrade:crafting_elements/crafting_490_element', // 光谱制程模板
        L: OPTICS[3].id,
        P: 'industrialupgrade:crafting_elements/crafting_620_element'  // 光子元件模板
    }).id('kubejs:sink_litho/optics_o4')

    // ---------------- 4. 光刻胶 ----------------
    // 现实配方是酚醛树脂 + 重氮萘醌感光剂溶于丙二醇甲醚醋酸酯；
    // 这里用 IU 塑料当树脂、红石粉当感光剂，一份料出两片。
    event.shapeless('2x kubejs:photoresist', [
        'industrialupgrade:plast',
        'minecraft:redstone'
    ]).id('kubejs:sink_litho/photoresist')

    // ---------------- 5. 测试规格单 ----------------
    const GRADE = {
        i9: { spec: 'kubejs:spec_i9', relax: 0.00, cap: 0.99 },
        i7: { spec: 'kubejs:spec_i7', relax: 0.10, cap: 0.95 },
        i5: { spec: 'kubejs:spec_i5', relax: 0.20, cap: 0.97 },
        i3: { spec: 'kubejs:spec_i3', relax: 0.30, cap: 0.99 }
    }
    const SPEC_MAT = { i3: 'minecraft:copper_ingot', i5: 'minecraft:iron_ingot', i7: 'minecraft:gold_ingot', i9: 'minecraft:diamond' }
    for (const g in GRADE) {
        event.shapeless(GRADE[g].spec, [
            'minecraft:paper',
            'minecraft:redstone',
            SPEC_MAT[g]
        ]).id(`kubejs:sink_litho/spec_${g}`)
    }

    // ---------------- 6. 光刻（涂胶 + 曝光 + 显影） ----------------
    // 分辨率、曝光次数、良率都由 λ / NA / 物镜 / 节点算出来，配方表只是它的展开。
    const exposures = (maskNm, machine) => {
        if (maskNm >= minNodeSingle(machine)) return 1
        if (machine.multi && maskNm >= minNodeMulti(machine)) return 2
        return 0
    }

    const yieldOf = (maskNm, machine, optics, shots) => {
        const k1 = maskNm * machine.na / machine.nm
        const base = Math.max(0.05, Math.min(0.97, 0.20 + 0.80 * (k1 / 0.85)))
        return Math.max(0.05, Math.min(0.99, base + optics.bonus - (shots - 1) * 0.10))
    }

    const opticsFits = (machine, optics) => machine.nm >= optics.minNm && machine.nm <= optics.maxNm

    // 一条曝光配方：派生量都在函数里算。KubeJS 的 Rhino 会把循环体里的 const 提到函数作用域，
    // 同一个循环里第二次声明就报 "redeclaration of var"，所以循环体里只留调用。
    const addExposure = (t, m, o, waferId) => {
        const machine = MACHINE[t]
        const mask = MASK[m]
        const shots = exposures(mask.nm, machine)
        const optics = OPTICS[o]
        const rate = yieldOf(mask.nm, machine, optics, shots)

        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: `sinkjourney:${machine.id}`,
            tick_time: machine.secs * 20 * shots,
            requirements: [
                { type: 'minecraft:item', io: 'input', item: { item: WAFER[waferId] }, count: 1 },
                { type: 'minecraft:item', io: 'input', item: { item: mask.id }, count: 1, consume_chance: 0.001 },
                { type: 'minecraft:item', io: 'input', item: { item: optics.id }, count: 1, consume_chance: 0 },
                { type: 'minecraft:item', io: 'input', item: { item: 'kubejs:photoresist' }, count: shots },
                { type: 'minecraft:fluid', io: 'input', fluid: { fluid: DEVELOPER }, amount: 250 * shots },
                { type: 'neoforge:energy', io: 'input', fe_per_tick: machine.fe },
                {
                    type: 'minecraft:item', io: 'output', chance: rate,
                    stack: { id: `kubejs:exposed_m${m}_w${waferId}`, count: 1 }
                }
            ]
        }).id(`kubejs:sink_litho/${machine.id}_m${m}_w${waferId}_o${o}`)
    }

    let count = 0
    for (let t = 1; t <= 4; t++) {
        for (let m = 1; m <= 6; m++) {
            if (exposures(MASK[m].nm, MACHINE[t]) === 0) continue
            for (let o = 1; o <= 4; o++) {
                if (!opticsFits(MACHINE[t], OPTICS[o])) continue
                for (let waferId = MASK[m].wafer; waferId <= 4; waferId++) {
                    addExposure(t, m, o, waferId)
                    count++
                }
            }
        }
    }

    // ---------------- 7. 切割：曝光晶圆 → 裸片 ----------------
    const BIN_RATE = { i9: 0.55, i7: 0.70, i5: 0.85, i3: 0.95 }

    const diesPerWafer = (waferId, maskId) => {
        const delta = Math.min(3, Math.max(0, waferId - MASK[maskId].wafer))
        return Math.pow(4, delta)
    }

    const addDice = (maskId, waferId, g) => {
        const dies = diesPerWafer(waferId, maskId)
        const out = Math.max(1, Math.round(dies * BIN_RATE[g]))

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
    }

    let diceCount = 0
    for (let maskId = 1; maskId <= 6; maskId++) {
        for (let waferId = MASK[maskId].wafer; waferId <= 4; waferId++) {
            for (const g in BIN_RATE) {
                addDice(maskId, waferId, g)
                diceCount++
            }
        }
    }

    // ---------------- 8. 封死工作台直合芯片 ----------------
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

    console.info(`[光刻线] 曝光配方 ${count} 条、切割配方 ${diceCount} 条；分辨率按 λ/NA 门槛，双重曝光吃两份胶与显影液`)
})
