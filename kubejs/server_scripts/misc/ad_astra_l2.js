// ============================================================
// 一阶火箭与太空服：铝、镁进 L2 主线
// ============================================================
// 火箭原作 6 个钢块。现实里火箭壳体是 2219 铝铜 / 2195 铝锂，
// 钢只用在承压段、贮箱与发动机。这里留 4 块钢、2 块铝。
// 太空服的硬壳同理：舱外服上躯干是 2219/5052 铝，钢只做接头与气瓶。
//
// 铝来自电力时代末段的熔盐槽（拜耳法 → Hall-Héroult），比本章早一章，
// 所以进 L2 不越阶段。改完铝有两个去处：MFE 母排（量）与这枚火箭（硬门槛）——
// 铂族精矿要月球钛，月球钛要这枚火箭，铝线不建本章就通不了关。
//
// 配方 id 原样写回，ad_astra 的解锁进度引用的是这个 id。
// 任务卡仍收 ad_astra:tier_1_rocket，snbt 不用动。
// 口径见 kubejs/docs/METAL_MAINLINE_JOBS.md §4.2。
// ============================================================

ServerEvents.recipes(event => {
    event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })

    event.custom({
        type: 'ad_astra:nasa_workbench',
        ingredients: [
            { item: 'ad_astra:rocket_nose_cone' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'c:storage_blocks/aluminium' },
            { tag: 'c:storage_blocks/aluminium' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:steel_tank' },
            { item: 'ad_astra:steel_tank' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:steel_engine' },
            { item: 'ad_astra:rocket_fin' }
        ],
        result: { count: 1, id: 'ad_astra:tier_1_rocket' }
    }).id('ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench')

    console.info('[火箭] 一阶火箭改为 4 钢块 + 2 铝块：铝进 L2 主线')

    // 太空服外壳：钢 → 铝镁 5052（alcled，19 铝 + 1 镁）
    // 舱外服硬壳（HUT）现实里就是 2219/5052 铝，钢只做接头与气瓶。
    // 这一条把镁挂进主线：月球钛要着陆，着陆要这身衣服。
    event.remove({ id: 'ad_astra:space_suit' })
    event.shaped('ad_astra:space_suit', [
        '# #',
        'TOT',
        '#W#'
    ], {
        '#': { tag: 'c:plates/alcled' },
        T: { item: 'ad_astra:gas_tank' },
        O: { item: 'ad_astra:oxygen_gear' },
        W: { tag: 'minecraft:wool' }
    }).id('ad_astra:space_suit')

    console.info('[火箭] 太空服外壳改为铝镁 5052 板：镁进 L2 主线')
})
