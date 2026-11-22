// ============================================================
// 晶圆产线 —— JEI 说明（client）
// 配方本体：server_scripts/silicon/wafer_line.js、zone_refiner.js、iu_chip.js
// ============================================================

RecipeViewerEvents.addInformation('item', event => {
    event.add('nuclearcraftneohaul:silicon_gem', [
        Text.translatable('jei.kubejs.mg_silicon.info'),
        Text.translatable('jei.kubejs.mg_silicon.info2')
    ])
    event.add('industrialupgrade:crafting_elements/crafting_492_element', [
        Text.translatable('jei.kubejs.polysilicon.info'),
        Text.translatable('jei.kubejs.polysilicon.info2')
    ])
    event.add('industrialupgrade:crafting_elements/crafting_493_element', [
        Text.translatable('jei.kubejs.eg_silicon.info')
    ])
    event.add('industrialupgrade:crafting_elements/crafting_495_element', [
        Text.translatable('jei.kubejs.single_crystal.info')
    ])
    event.add('industrialupgrade:crafting_elements/crafting_494_element', [
        Text.translatable('jei.kubejs.iu_wafer.info')
    ])
    event.add('qmd:semiconductor_silicon_boule', [
        Text.translatable('jei.kubejs.silicon_boule.info')
    ])
    event.add('qmd:semiconductor_silicon_wafer', [
        Text.translatable('jei.kubejs.silicon_wafer.info')
    ])
    event.add('qmd:semiconductor_silicon_p_doped', [
        Text.translatable('jei.kubejs.silicon_p_doped.info')
    ])
    event.add('mmcr:zone_refiner_controller', [
        Text.translatable('jei.kubejs.zone_refiner.info'),
        Text.translatable('jei.kubejs.zone_refiner.info2')
    ])
    event.add('nuclearcraftneohaul:fluid_enricher', [
        Text.translatable('jei.kubejs.fluid_enricher.info')
    ])
    event.add('nuclearcraftneohaul:chemical_reactor', [
        Text.translatable('jei.kubejs.chemical_reactor.info')
    ])
    event.add('nuclearcraftneohaul:distiller_controller', [
        Text.translatable('jei.kubejs.distiller.info')
    ])
    event.add('mmcr:mcz_puller_controller', [
        Text.translatable('jei.kubejs.mcz_puller.info'),
        Text.translatable('jei.kubejs.mcz_puller.info2')
    ])
    event.add('mmcr:cz_reactor_controller', [
        Text.translatable('jei.kubejs.cz_reactor.info'),
        Text.translatable('jei.kubejs.cz_reactor.info2')
    ])
})

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:siemens_poly', [Text.translatable('jei.kubejs.siemens_poly.info')])
    event.add('kubejs:mono_9n', [Text.translatable('jei.kubejs.mono_9n.info')])
    event.add('kubejs:poly_11n', [Text.translatable('jei.kubejs.poly_11n.info')])
    event.add('kubejs:mono_11n', [Text.translatable('jei.kubejs.mono_11n.info')])
    event.add('kubejs:mcz_coil', [Text.translatable('jei.kubejs.mcz_coil.info')])
    event.add('kubejs:wafer_9n', [Text.translatable('jei.kubejs.wafer_9n.info')])
    event.add('kubejs:wafer_11n', [Text.translatable('jei.kubejs.wafer_11n.info')])
    event.add('kubejs:wafer_12n', [Text.translatable('jei.kubejs.wafer_12n.info')])
    event.add('kubejs:boule_12n', [Text.translatable('jei.kubejs.boule_12n.info')])
    event.add('kubejs:device_wafer', [Text.translatable('jei.kubejs.device_wafer.info')])
    event.add('kubejs:device_n_doped', [Text.translatable('jei.kubejs.device_n_doped.info')])
    event.add('kubejs:device_p_doped', [Text.translatable('jei.kubejs.device_p_doped.info')])
    event.add('qmd:semiconductor_advanced_processor', [Text.translatable('jei.kubejs.qmd_advanced.info')])
})

RecipeViewerEvents.addInformation('fluid', event => {
    event.add('kubejs:trichlorosilane', [
        Text.translatable('jei.kubejs.trichlorosilane.info')
    ])
    event.add('kubejs:purified_tcs', [
        Text.translatable('jei.kubejs.purified_tcs.info')
    ])
    event.add('kubejs:silane', [
        Text.translatable('jei.kubejs.silane.info')
    ])
    event.add('kubejs:silicon_tetrachloride', [
        Text.translatable('jei.kubejs.silicon_tetrachloride.info')
    ])
})
