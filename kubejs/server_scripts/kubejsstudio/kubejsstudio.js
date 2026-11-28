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
// kubejsstudio custom: embers:metal_coefficient/storage_blocks/mithirl
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/metal_coefficient/storage_blocks/mithirl',
      {
        "type": "embers:metal_coefficient",
        "block_tag": "c:storage_blocks/dwarven_mithril",
        "coefficient": 3.5
      }
    )
})
// kubejsstudio custom: embers:metal_coefficient/stellar_alloy_block
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/metal_coefficient/stellar_alloy_block',
      {
        "type": "embers:metal_coefficient",
        "block_tag": "c:storage_blocks/stellar_alloy",
        "coefficient": 10
      }
    )
})
// kubejsstudio custom: embers:metal_coefficient/storage_blocks/
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/metal_coefficient/storage_blocks/netherite',
      {
        "type": "embers:metal_coefficient",
        "block_tag": "c:storage_blocks/netherite",
        "coefficient": 4,
        "neoforge:conditions": [
          {
            "type": "almostunified:conditional",
            "conditions_met": true,
            "original_conditions": [
              {
                "type": "almostunified:conditional",
                "conditions_met": true,
                "original_conditions": [
                  {
                    "type": "neoforge:not",
                    "value": {
                      "type": "neoforge:tag_empty",
                      "tag": "c:storage_blocks/netherite"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    )
})
// kubejsstudio custom: embers:alchemy/ashen_fabric
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/alchemy/ashen_fabric',
      {
        "type": "embers:alchemy",
        "aspects": [
          {"tag":"embers:aspectus/iron"},
          {"tag":"embers:aspectus/lead"},
          {"tag":"embers:aspectus/dawnstone"},
          {"tag":"embers:aspectus/dwarven_mithril"}
        ],
        "inputs": [
          {"tag":"c:dusts/ash"},
          {"tag":"c:dusts/ash"},
          {"tag":"c:string"},
          {"tag":"c:string"},
          {"tag":"c:slime_balls"}
        ],
        "output": {"id":"embers:ashen_fabric"},
        "tablet": {"tag":"minecraft:wool"}
      }
    )
})
// kubejsstudio custom: roots:grove/runic_shears
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/grove/runic_shears',
      {
        "type": "roots:grove",
        "data": {
          "ingredients": [
            {"tag":"roots:runed_obsidian"},
            {"tag":"roots:runed_obsidian"},
            {"tag":"roots:runed_obsidian"},
            {"tag":"minecraft:small_flowers"},
            {"tag":"roots:herbs/grove_moss"},
            [{"item":"roots:wooden_shears"},{"item":"minecraft:shears"}]
          ],
          "level_conditions": [
            {
              "type": "roots:grove_stone_condition",
              "grove_type": {"name":"any","tag":"roots:grove_stones"},
              "require_active": true
            }
          ],
          "priority": 0,
          "result": {"count":1,"id":"roots:runic_shears"}
        }
      }
    )
})
// kubejsstudio custom: roots:grove/runed_obsidian_8
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/grove/runed_obsidian_4',
      {
        "type": "roots:grove",
        "data": {
          "ingredients": [
            {"tag":"roots:runestone"},
            {"tag":"roots:runestone"},
            {"tag":"roots:runestone"},
            {"tag":"c:obsidians"},
            {"tag":"roots:runestone"},
            {"tag":"roots:runestone"},
            {"tag":"roots:runestone"},
            {"tag":"c:obsidians"}
          ],
          "level_conditions": [
            {
              "type": "roots:grove_stone_condition",
              "grove_type": {"name":"any","tag":"roots:grove_stones"},
              "require_active": true
            }
          ],
          "priority": 0,
          "result": {"count":4,"id":"roots:runed_obsidian"}
        }
      }
    )
})
// kubejsstudio custom: roots:grove/runed_obsidian_4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/grove/runed_obsidian_2',
      {
        "type": "roots:grove",
        "data": {
          "ingredients": [
            {"tag":"roots:runestone"},
            {"tag":"roots:runestone"},
            {"tag":"roots:runestone"},
            {"tag":"c:obsidians"}
          ],
          "level_conditions": [
            {
              "type": "roots:grove_stone_condition",
              "grove_type": {"name":"any","tag":"roots:grove_stones"},
              "require_active": true
            }
          ],
          "priority": 0,
          "result": {"count":2,"id":"roots:runed_obsidian"}
        }
      }
    )
})
