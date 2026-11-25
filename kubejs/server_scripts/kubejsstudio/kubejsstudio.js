// kubejsstudio custom: embers:alchemy/ember_crystal_cluster
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/alchemy/ember_crystal_cluster',
      {
        "type": "embers:alchemy",
        "aspects": [
          {"tag":"embers:aspectus/copper"},
          {"tag":"embers:aspectus/dawnstone"}
        ],
        "inputs": [
          {"tag":"c:gunpowder"},
          {"item":"embers:ember_shard"},
          {"item":"embers:ember_shard"},
          {"item":"embers:ember_shard"},
          {"item":"embers:ash"},
          {"item":"embers:ash"}
        ],
        "output": {"id":"embers:ember_crystal_cluster"},
        "tablet": {"item":"embers:ember_crystal"}
      }
    )
})
// kubejsstudio custom: embers:ember_activation/ember_grit
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/ember_activation/ember_grit',
      {
        "type": "embers:ember_activation",
        "ember": 100,
        "input": {"item":"embers:ember_grit"}
      }
    )
})
// kubejsstudio custom: embers:catalysis/ash
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/catalysis/ash',
      {
        "type": "embers:catalysis_combustion",
        "burn_time": 400,
        "input": {"item":"embers:ash"},
        "machine": {"item":"embers:catalysis_chamber"},
        "multiplier": 0.2,
        "_kubejs_changed_marker": {"source":"","line":0}
      }
    )
})
// kubejsstudio custom: embers:ember_activation/ember_crystal
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/ember_activation/ember_crystal',
      {
        "type": "embers:ember_activation",
        "ember": 2800.0,
        "input": {"item":"embers:ember_crystal"},
        "_kubejs_changed_marker": {"source":"","line":0}
      }
    )
})
// kubejsstudio custom: embers:ember_activation/ember_crystal_cluster
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/ember_activation/ember_crystal_cluster',
      {
        "type": "embers:ember_activation",
        "ember": 10000.0,
        "input": {"item":"embers:ember_crystal_cluster"},
        "_kubejs_changed_marker": {"source":"","line":0}
      }
    )
})
// kubejsstudio custom: embers:mithril
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/mithril',
      {
        "type": "embers:alchemy",
        "aspects": [
          {"tag":"embers:aspectus/copper"},
          {"tag":"embers:aspectus/lead"},
          {"tag":"embers:aspectus/iron"},
          {"tag":"embers:aspectus/silver"}
        ],
        "inputs": [
          {"item":"minecraft:iron_block"},
          {"item":"industrialupgrade:baseblockingot/silver"},
          {"item":"roots:cloud_berry"},
          {"item":"roots:cloud_berry"}
        ],
        "output": {"id":"embers:mithril_ingot"},
        "tablet": {"item":"embers:dawnstone_ingot"}
      }
    )
})
// kubejsstudio custom: embers:molten_mithril
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/molten_mithril',
      {
        "type": "embers:melting",
        "neoforge:conditions": [
          {
            "type": "almostunified:conditional",
            "conditions_met": true,
            "original_conditions": [
              {
                "type": "neoforge:not",
                "value": {"type":"neoforge:tag_empty","item":"embers:mithril_ingot"}
              }
            ]
          }
        ],
        "input": {"item":"embers:mithril_ingot"},
        "output": {"amount":90,"fluid":"embers:molten_mithril"}
      }
    )
})
// kubejsstudio custom: embers:stamping/mithril_aspectus
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/stamping/mithril_aspectus',
      {
        "type": "embers:stamping",
        "fluid": {"amount":90,"fluid":"embers:molten_mithril"},
        "input": {"item":"roots:stalicripe"},
        "output": {"id":"embers:mithril_aspectus"},
        "stamp": {"item":"embers:ingot_stamp"}
      }
    )
})
