// kubejsstudio registry additions; re-apply merges by id
StartupEvents.registry('item', event => {
    event.create('kubejs:flint_axe_head_top').displayName('燧石斧顶端')
    event.create('kubejs:handle').displayName('手柄')
    event.create('kubejs:flint_pickaxe_head_top').displayName('燧石镐顶端')
    event.create('kubejs:coking_coal').displayName('焦炭').burnTime(3200).rarity('uncommon').tooltip('通过炭炉产生')
    event.create('kubejs:low_quality_modularium').displayName('劣质的模块化合金锭')
    event.create('kubejs:proof_ancients').displayName('远古之证')
    event.create('kubejs:harmony_sounds').displayName('和谐之律').tooltip('强化装置，能赋予工具精准的力量')
})
