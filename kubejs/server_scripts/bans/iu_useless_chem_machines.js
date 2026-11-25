// ============================================================
// IU 化工机器：封禁合成（机器本体已经没用）
// ------------------------------------------------------------
// 这十台机器的配方池在 kubejs/sjcore/iu_chem.json 里整池清空，配方全部迁到了
// MMCR 化学反应釜（server_scripts/industrial/iu_chem_migration.js）。留着合成表
// 只会让玩家造出一台什么都不做的方块，所以这里把它们的合成配方一并删掉。
//
//   气体混合器           basemachine3/gas_combiner            industrialupgrade_1025
//   流体反应釜           basemachine3/fluid_mixer             industrialupgrade_1017 / 1018
//   固液反应釜           basemachine3/solid_fluid_mixer       industrialupgrade_1019
//   蒸汽固液反应釜       basemachine3/steam_solid_fluid_mixer industrialupgrade_1289
//   固体反应釜           basemachine3/solid_mixer             industrialupgrade_1042
//   三重固态反应釜       basemachine3/triple_solid_mixer      industrialupgrade_1023
//   液体固化反应釜       basemachine3/solid_fluid_integrator  industrialupgrade_1022
//   高分子聚合器         basemachine3/polymerizer             industrialupgrade_1049
//   流式腐蚀釜           basemachine3/fluid_integrator        industrialupgrade_1051
//   气体混合室           gas_chamber/primal_gas_chamber       industrialupgrade_1676
//
// 原型流式腐蚀釜（primal_fluid_integrator）不在名单里：它是原始章出口任务那台，
// 配方也还留着（没被封禁）。
//
// 只封「获取」：已经摆在存档里的机器照旧可拆可放，只是没有配方可跑。
// JEI 里同步隐藏，见 client_scripts/bans/iu_useless_chem_machines_jei.js。
// ============================================================

ServerEvents.recipes(event => {
    const DEAD_MACHINES = [
        ['industrialupgrade:basemachine3/gas_combiner', ['industrialupgrade:industrialupgrade_1025']],
        ['industrialupgrade:basemachine3/fluid_mixer', ['industrialupgrade:industrialupgrade_1017', 'industrialupgrade:industrialupgrade_1018']],
        ['industrialupgrade:basemachine3/solid_fluid_mixer', ['industrialupgrade:industrialupgrade_1019']],
        ['industrialupgrade:basemachine3/steam_solid_fluid_mixer', ['industrialupgrade:industrialupgrade_1289']],
        ['industrialupgrade:basemachine3/solid_mixer', ['industrialupgrade:industrialupgrade_1042']],
        ['industrialupgrade:basemachine3/triple_solid_mixer', ['industrialupgrade:industrialupgrade_1023']],
        ['industrialupgrade:basemachine3/solid_fluid_integrator', ['industrialupgrade:industrialupgrade_1022']],
        ['industrialupgrade:basemachine3/polymerizer', ['industrialupgrade:industrialupgrade_1049']],
        ['industrialupgrade:basemachine3/fluid_integrator', ['industrialupgrade:industrialupgrade_1051']],
        ['industrialupgrade:gas_chamber/primal_gas_chamber', ['industrialupgrade:industrialupgrade_1676']]
    ]

    for (const [item, ids] of DEAD_MACHINES) {
        for (const id of ids) event.remove({ id: id })
        event.remove({ output: item })
    }

    console.info('[化工] 十台废止的 IU 化工机器已从合成表移除')
})
