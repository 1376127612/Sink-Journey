// ============================================================
// 核电工艺（NuclearCraft）化学反应器：删掉与主线重复的大化工
// ------------------------------------------------------------
// 本包的化工主线在 MMCR 反应器上（六档釜 / 通用反应器 / 塔器），带内件等级、
// 气压门槛与并行；NC 那台是单方块，没有这些判定。OEF 已经把 NC 的化工流体
// 并到 IU（气体 -> iufluid*），所以同一条反应在 NC 釜上产出的是**同一份流体**，
// 只是没有门槛——这不是"另一种做法"，是绕开阶梯的捷径。
//
// 只删输出全是主线已经量产的那几条，NC 的核燃料循环与冷却剂都留着：
//   变换  CO2 + H2 -> CO + H2O        主线：通用反应器 · 变换 + 蒸汽重整
//   甲醇  CO + H2 -> CH3OH            主线：通用反应器 · 高压合成（20 bar / 铜锌 / 多层包扎）
//   SO2 氧化  2SO2 + O2 -> 2SO3       主线：通用反应器 · 气固固定床（V2O5，420~450℃）
//   SO3 吸收  SO3 + H2O -> H2SO4      主线：塔器 · 气液吸收
//   乙醇 + SO3                        上面 SO3 的侧门，一并删
//
// 不动的部分：*_fluoride / LiF / BeF2 / 重水（核燃料与熔盐溶剂）、CO / SO2 /
// 乙炔的冷-热-乏冷却剂循环、氟系与硼钡系材料链。那些是 NC 自己的工艺，
// 删了堆就转不起来；它们也不与主线的量产权冲突。
// ============================================================

ServerEvents.recipes(event => {
    const DUPLICATES = [
        'carbon_monoxide_water_from_carbon_dioxide_hydrogen',
        'methanol_from_carbon_monoxide_hydrogen',
        'sulfur_trioxide_from_sulfur_dioxide_oxygen',
        'sulfuric_acid_from_sulfur_trioxide_water',
        'ethanol_sulfur_trioxide_from_ethene_sulfuric_acid'
    ]

    for (const id of DUPLICATES) {
        event.remove({ id: 'nuclearcraftneohaul:chemical_reactor/' + id })
    }

    console.info('[化工] NC 化学反应器已删除 ' + DUPLICATES.length + ' 条与主线重复的大化工配方')
})
