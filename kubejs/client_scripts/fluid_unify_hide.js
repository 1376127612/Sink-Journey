// 被 OneEnoughFluid 合并掉的流体不要在 JEI/EMI 里再列一遍，否则同一个中文名会出现两条。
// 状态：未生效。直接传字符串会抛 Failed to read FluidIngredient；改用 Fluid.of(id,1000) 后仍大概率失败（无 String 重载）。
// 注意：这里必须用 Fluid.of(id, 1000) 生成 FluidStack，直接传字符串会报 Failed to read FluidIngredient。
// 新增流体规则时，把 matchFluid 里的源 id 同步加到这里。
RecipeViewerEvents.removeEntries('fluid', event => {
  const merged = [
    'create:honey',
    'electroenergetics:plant_oil',
    'embers:molten_aluminum',
    'embers:molten_bronze',
    'embers:molten_copper',
    'embers:molten_electrum',
    'embers:molten_gold',
    'embers:molten_invar',
    'embers:molten_iron',
    'embers:molten_nickel',
    'embers:molten_silver',
    'embers:molten_tin',
    'industrialupgrade:iufluidapianroyaljelly',
    'industrialupgrade:iufluidgasolineene',
    'industrialupgrade:iufluidmoltenaluminium',
    'industrialupgrade:iufluidmoltenarsenic',
    'industrialupgrade:iufluidmoltenchromium',
    'industrialupgrade:iufluidmoltencopper',
    'industrialupgrade:iufluidmoltengallium',
    'industrialupgrade:iufluidmoltengold',
    'industrialupgrade:iufluidmolteniron',
    'industrialupgrade:iufluidmoltenmagnesium',
    'industrialupgrade:iufluidmoltenmanganese',
    'industrialupgrade:iufluidmoltennickel',
    'industrialupgrade:iufluidmoltensilver',
    'industrialupgrade:iufluidmoltentin',
    'industrialupgrade:iufluidmoltentitanium',
    'industrialupgrade:iufluidmoltentungsten',
    'nuclearcraftneohaul:aluminum',
    'nuclearcraftneohaul:benzene',
    'nuclearcraftneohaul:carbon_dioxide',
    'nuclearcraftneohaul:carbon_monoxide',
    'nuclearcraftneohaul:chromium',
    'nuclearcraftneohaul:copper',
    'nuclearcraftneohaul:ethanol',
    'nuclearcraftneohaul:ethene',
    'nuclearcraftneohaul:ethyne',
    'nuclearcraftneohaul:fluorine',
    'nuclearcraftneohaul:gold',
    'nuclearcraftneohaul:helium',
    'nuclearcraftneohaul:hydrogen',
    'nuclearcraftneohaul:hydrogen_sulfide',
    'nuclearcraftneohaul:iron',
    'nuclearcraftneohaul:magnesium',
    'nuclearcraftneohaul:manganese',
    'nuclearcraftneohaul:methanol',
    'nuclearcraftneohaul:nickel',
    'nuclearcraftneohaul:nitrogen',
    'nuclearcraftneohaul:obsidian',
    'nuclearcraftneohaul:oxygen',
    'nuclearcraftneohaul:quartz',
    'nuclearcraftneohaul:silver',
    'nuclearcraftneohaul:steam',
    'nuclearcraftneohaul:steel',
    'nuclearcraftneohaul:sulfur_dioxide',
    'nuclearcraftneohaul:sulfur_trioxide',
    'nuclearcraftneohaul:sulfuric_acid',
    'nuclearcraftneohaul:tin',
    'pneumaticcraft:diesel',
    'pneumaticcraft:ethanol',
    'pneumaticcraft:gasoline',
    'pneumaticcraft:lubricant',
    'pneumaticcraft:oil',
    'pneumaticcraft:vegetable_oil',
    'qmd:carbon',
    'qmd:chlorine',
    'qmd:chromium',
    'qmd:nickel',
    'qmd:nitric_acid',
    'qmd:nitric_oxide',
    'qmd:nitrogen_dioxide',
    'qmd:titanium',
    'qmd:tungsten',
  ]
  merged.forEach(id => {
    // OEF 会把源流体换成一个统一 id，换掉之后源 id 不在注册表里，
    // Fluid.of(id, 1000) 会在事件收尾时抛 "Fluid with ID ... does not exist"，
    // 而那种流体本来也不会出现在 JEI 里，跳过即可。
    if (!Fluid.exists(id)) return
    try {
      event.remove(Fluid.of(id, 1000))
    } catch (err) {
      console.error('[fluid_unify_hide] 隐藏失败 ' + id + '：' + err)
    }
  })
})
