// 质棍（startup）：IU 有锭没棍的基础金属，形状与配色照 IU 的质棍。
// 配方见 server_scripts/metallurgy/metal_rods.js，机器配方见 kubejs/sjcore/rods.json。
// 改完要完全重启。

StartupEvents.registry('item', event => {
    const add = (id, name) => event.create(id).displayName(name)

    add('iron_rod', '铁质棍')
    add('copper_rod', '铜质棍')
    add('tin_rod', '锡质棍')
    add('lead_rod', '铅质棍')
    add('gold_rod', '金质棍')
    add('steel_rod', '钢质棍')
    add('bronze_rod', '青铜棍')
})
