// ============================================================
// 在 JEI 中隐藏十台废止的 IU 化工机器
// （与服务端 server_scripts/bans/iu_useless_chem_machines.js 的名单保持一致）
//
// 它们已经不能合成、也没有任何配方，留在 JEI 里只会让人以为还能用。
// 只影响 JEI 展示：存档里已有的机器照旧可放可拆。
// ============================================================

(function () {
    const DEAD_MACHINES = [
        'industrialupgrade:basemachine3/gas_combiner',
        'industrialupgrade:basemachine3/fluid_mixer',
        'industrialupgrade:basemachine3/solid_fluid_mixer',
        'industrialupgrade:basemachine3/steam_solid_fluid_mixer',
        'industrialupgrade:basemachine3/solid_mixer',
        'industrialupgrade:basemachine3/triple_solid_mixer',
        'industrialupgrade:basemachine3/solid_fluid_integrator',
        'industrialupgrade:basemachine3/polymerizer',
        'industrialupgrade:basemachine3/fluid_integrator',
        'industrialupgrade:gas_chamber/primal_gas_chamber'
    ]

    RecipeViewerEvents.removeEntriesCompletely('item', event => {
        DEAD_MACHINES.forEach(id => event.remove(id))
    })
})()
