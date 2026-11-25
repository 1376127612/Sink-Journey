// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('embers:recipe/create/crushing/cobbled_deepslate_embers', {"type":"create:crushing","neoforge:conditions":[{"type":"almostunified:conditional","conditions_met":true,"original_conditions":[{"type":"neoforge:mod_loaded","modid":"create"}]}],"ingredients":[{"item":"minecraft:cobbled_deepslate"}],"results":[{"id":"embers:ember_grit","chance":0.02},{"id":"embers:ember_shard","chance":0.01},{"id":"embers:ember_crystal","chance":0.005},{"id":"embers:ember_crystal_cluster","chance":0.00001}],"processing_time":350})
    event.json('embers:recipe/mnemonic_inscriber', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A#"," B ","CDC"],"key":{"#":{"item":"embers:dawnstone_crystal_seed"},"A":{"item":"embers:ember_crystal"},"B":{"item":"embers:intelligent_apparatus"},"C":{"item":"embers:caminite_brick"},"D":{"item":"embers:archaic_circuit"}},"result":{"id":"embers:mnemonic_inscriber","count":1}})
    event.json('embers:recipe/pressure_refinery', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A#","BCB","BDB"],"key":{"#":{"tag":"c:ingots/copper"},"A":{"item":"embers:mithril_ingot"},"B":{"item":"embers:solidified_metal"},"C":{"item":"embers:focal_lens"},"D":{"item":"roots:runed_obsidian"}},"result":{"id":"embers:pressure_refinery","count":1}})
})
ServerEvents.recipes(event => {
    event.shaped('embers:mithril_block', ['###', '###', '###'], { '#': 'embers:mithril_ingot' }).id('embers:mithril_block')
})
