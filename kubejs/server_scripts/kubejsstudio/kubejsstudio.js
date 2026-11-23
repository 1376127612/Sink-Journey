// kubejsstudio custom: industrialupgrade:industrialupgrade_1252
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1252',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "B": {"item":"minecraft:glass"},
          "C": {"tag":"minecraft:planks"},
          "D": {
            "item": "kubejs:copper_boiler"
          },
          "E": {"item":"industrialupgrade:tools/treetap"}
        },
        "pattern": ["CEC","CBC","CDC"],
        "result": {"count":1,"id":"industrialupgrade:block_squeezer/squeezer"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1250
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1250',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {
            "item": "industrialupgrade:crafting_elements/crafting_76_element"
          },
          "B": {"tag":"c:plates/bronze"},
          "C": {"tag":"minecraft:planks"}
        },
        "pattern": ["C C","BAB","BCB"],
        "result": {"count":1,"id":"industrialupgrade:compressor/compressor"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1973
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1973',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {
            "item": "industrialupgrade:crafting_elements/crafting_123_element"
          },
          "B": {
            "item": "kubejs:copper_boiler"
          },
          "C": {"item":"industrialupgrade:blockresource/steam_machine"},
          "D": {
            "item": "industrialupgrade:crafting_elements/crafting_32_element"
          },
          "E": {
            "item": "industrialupgrade:primal_fluid_heater/primal_fluid_heater"
          }
        },
        "pattern": ["AED"," B "," C "],
        "result": {
          "count": 1,
          "id": "industrialupgrade:basemachine3/steam_fluid_heater"
        },
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1917
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1917',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"tag":"c:plates/gold"},
          "B": {"tag":"c:ingots/iron"}
        },
        "pattern": ["AAA","ABA","AAA"],
        "result": {
          "count": 1,
          "id": "industrialupgrade:crafting_elements/crafting_496_element"
        },
        "show_notification": false
      }
    )
})
// 柴堆炼铁（roots:pyre/crushed/iron1）已随 L2 土高炉实装删除：铁只在土高炉还原。
// kubejsstudio custom: roots:pyre/crushed/copper_nugget1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/crushed/copper_nugget1',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"industrialupgrade:crushed/copper"},
            {"item":"industrialupgrade:crushed/copper"},
            {"tag":"minecraft:coals"},
            {"tag":"minecraft:coals"},
            {"tag":"minecraft:logs"}
          ],
          "result": {"id":"create:copper_nugget","count":6},
          "priority": 0
        }
      }
    )
})
// kubejsstudio custom: kubejsstudio:crushed/copper1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/crushed/copper1',
      {
        "type": "roots:mortar",
        "data": {
          "ingredients": [{"tag":"c:raw_materials/copper"}],
          "priority": 0,
          "result": {"count":1,"id":"industrialupgrade:crushed/copper"}
        },
        "times": 5
      }
    )
})
// kubejsstudio custom: kubejsstudio:crushed/copper5
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/crushed/copper5',
      {
        "type": "roots:mortar",
        "data": {
          "ingredients": [{"tag":"c:raw_materials/copper"},{"tag":"c:raw_materials/copper"},{"tag":"c:raw_materials/copper"},{"tag":"c:raw_materials/copper"},{"tag":"c:raw_materials/copper"}],
          "priority": 0,
          "result": {"count":5,"id":"industrialupgrade:crushed/copper"}
        },
        "times": 15
      }
    )
})
// kubejsstudio custom: kubejsstudio:crushed/iron1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/crushed/iron1',
      {
        "type": "roots:mortar",
        "data": {
          "ingredients": [{"tag":"c:raw_materials/iron"}],
          "priority": 0,
          "result": {"count":1,"id":"industrialupgrade:crushed/iron"}
        },
        "times": 5
      }
    )
})
// kubejsstudio custom: kubejsstudio:crushed/iron5
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/crushed/iron5',
      {
        "type": "roots:mortar",
        "data": {
          "ingredients": [{"tag":"c:raw_materials/iron"},{"tag":"c:raw_materials/iron"},{"tag":"c:raw_materials/iron"},{"tag":"c:raw_materials/iron"},{"tag":"c:raw_materials/iron"}],
          "priority": 0,
          "result": {"count":5,"id":"industrialupgrade:crushed/iron"}
        },
        "times": 15
      }
    )
})
// kubejsstudio custom: kubejsstudio:crafting_table
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/crafting_table',
      {
        "type": "kubejs:shaped",
        "result": {"id":"minecraft:crafting_table","count":1},
        "pattern": ["##","AA"],
        "key": {
          "A": {"tag":"minecraft:logs"},
          "#": {"item":"minecraft:leather"}
        },
        "_kubejs_changed_marker": {
          "source": "server_scripts:kubejsstudio/recipes.js",
          "line": 41
        }
      }
    )
})
// kubejsstudio custom: kubejsstudio:caminite_brick
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/caminite_brick',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"embers:caminite_blend"},
            {"item":"embers:caminite_blend"},
            {"tag":"minecraft:coals"},
            {"item":"embers:caminite_blend"},
            {"item":"embers:caminite_blend"}
          ],
          "priority": 0,
          "result": {"count":4,"id":"embers:caminite_brick"}
        }
      }
    )
})
// kubejsstudio custom: kubejsstudio:iron_nugget1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/iron_nugget1',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"industrialupgrade:crushed/iron"},
            {"item":"minecraft:calcite"},
            {"tag":"minecraft:coals"},
            {"item":"industrialupgrade:crushed/iron"},
            {"item":"minecraft:calcite"}
          ],
          "priority": 0,
          "result": {"count":6,"id":"minecraft:iron_nugget"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/bafflecap
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/bafflecap',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"netherexp:warped_sporeshroom"},
            {"item":"netherexp:crimson_sporeshroom"},
            {"item":"netherexp:shroomnight"},
            {"tag":"c:fertilizers"},
            {"tag":"roots:herbs/wildroot"}
          ],
          "priority": 0,
          "result": {"count":2,"id":"roots:bafflecap"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/pereskia
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/pereskia',
      {
        "type": "roots:pyre",
        "data": {
          "chance_outputs": [
            {
              "chance": 0.6,
              "output": {"count":2,"id":"roots:pereskia_bulb"}
            }
          ],
          "ingredients": [
            {"item":"netherexp:weeping_ivy"},
            {"item":"minecraft:sugar"},
            {"item":"netherexp:phasmo_shard"},
            {"tag":"netherexp:shroomlights"},
            {"tag":"roots:crops/aubergine"}
          ],
          "priority": 0,
          "result": {"count":1,"id":"roots:pereskia"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/moonglow
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/moonglow',
      {
        "type": "roots:pyre",
        "data": {
          "chance_outputs": [
            {
              "chance": 0.6,
              "output": {"count":2,"id":"roots:moonglow_seeds"}
            }
          ],
          "ingredients": [
            {"item":"netherexp:bone_pike"},
            {"item":"netherexp:phasmo_shard"},
            {"item":"netherexp:blotted_netherrack"},
            {"tag":"c:nuggets/iron"},
            {"item":"minecraft:warped_wart_block"}
          ],
          "priority": 0,
          "result": {"count":1,"id":"roots:moonglow"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/stalicripe
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/stalicripe',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"minecraft:glow_lichen"},
            {"item":"netherexp:pale_soul_slate"},
            {"item":"minecraft:bone_block"},
            {"item":"minecraft:obsidian"},
            {"tag":"c:raw_materials/iron"}
          ],
          "priority": 0,
          "result": {"count":2,"id":"roots:stalicripe"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/inferno_bulb
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/inferno_bulb',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"netherexp:fossil_fuel"},
            {"item":"netherexp:wraithing_flesh"},
            {"item":"netherexp:soul_magma_block"},
            {"item":"minecraft:chain"},
            {"item":"netherexp:quartz_crystal"}
          ],
          "priority": 0,
          "result": {"count":2,"id":"roots:inferno_bulb"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/cloud_berry
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/cloud_berry',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"item":"minecraft:dandelion"},
            {"item":"netherexp:ochre_frogmist"},
            {"tag":"minecraft:leaves"},
            {"item":"netherexp:pearlescent_frogmist"},
            {"item":"netherexp:verdant_frogmist"}
          ],
          "priority": 0,
          "result": {"count":2,"id":"roots:cloud_berry"}
        }
      }
    )
})
// kubejsstudio custom: roots:pyre/wildroot_growth
ServerEvents.generateData('after_mods', event => {
    event.json(
      'roots:recipe/pyre/wildroot_growth',
      {
        "type": "roots:pyre",
        "data": {
          "ingredients": [
            {"tag":"roots:herbs/wildroot"},
            {"tag":"minecraft:logs"},
            {"tag":"minecraft:logs"},
            {"item":"roots:pereskia_bulb"},
            {"tag":"minecraft:saplings"}
          ],
          "level_conditions": [
            {
              "type": "roots:block_state_property_condition",
              "name": "mature_wildroot_crop",
              "test": {
                "partial_block_state": {"block":"roots:wildroot_crop","properties":{"age":"3"}}
              }
            }
          ],
          "priority": 0
        },
        "ritual": "roots:wildroot_growth"
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1742
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1742',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"item":"create:electron_tube"},
          "B": {"tag":"c:ingots/steel"},
          "C": {"tag":"c:rods/silver"}
        },
        "pattern": [" A ","CCC"," B "],
        "result": {
          "count": 2,
          "id": "industrialupgrade:crafting_elements/crafting_568_element"
        },
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_435
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_435',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"tag":"c:plates/iron"},
          "B": {"item":"minecraft:gold_ingot"},
          "C": {"item":"minecraft:redstone"},
          "D": {"item":"create:electron_tube"}
        },
        "pattern": ["BAB","ADA","CAC"],
        "result": {"count":1,"id":"industrialupgrade:circuit/circuit_part1"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_437
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_437',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"item":"industrialupgrade:circuit/circuit_part1"},
          "C": {"item":"industrialupgrade:wiring/copper1"},
          "D": {"tag":"c:plates/silver"},
          "E": {"item":"pneumaticcraft:printed_circuit_board"}
        },
        "pattern": ["CCC","AEA","DDD"],
        "result": {"count":1,"id":"industrialupgrade:circuit/circuit_part3"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1259
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1259',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"tag":"c:plates/steel"},
          "B": {"item":"minecraft:glass"},
          "C": {"item":"industrialupgrade:circuit/circuit_part3"},
          "D": {"tag":"c:plates/iron"}
        },
        "pattern": [" B ","ADA","ACA"],
        "result": {
          "count": 1,
          "id": "industrialupgrade:electronics_assembler/electronics_assembler"
        },
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1258
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1258',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"tag":"c:plates/steel"},
          "B": {"item":"minecraft:glass"},
          "C": {"item":"industrialupgrade:solderingiron"},
          "D": {"tag":"c:plates/iron"}
        },
        "pattern": [" B ","ADA","ACA"],
        "result": {
          "count": 1,
          "id": "industrialupgrade:primal_soldering_mechanism/primal_soldering_mechanism"
        },
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_1926
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_1926',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"item":"create:electron_tube"},
          "B": {"tag":"c:plates/gold"},
          "C": {"tag":"c:ingots/steel"}
        },
        "pattern": [" A "," C "," B "],
        "result": {"count":1,"id":"industrialupgrade:solderingiron"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_739
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_739',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"tag":"c:ingots/steel"},
          "B": {"item":"industrialupgrade:circuit/circuit_part3"},
          "C": {"item":"minecraft:redstone"}
        },
        "pattern": ["AAA","CBC","   "],
        "result": {
          "count": 1,
          "id": "industrialupgrade:crafting_elements/crafting_42_element"
        },
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_436
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_436',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {"item":"create_connected:control_chip"},
          "B": {"item":"industrialupgrade:stick/zinc"}
        },
        "pattern": ["BBB","BAB","BBB"],
        "result": {"count":1,"id":"industrialupgrade:circuit/circuit_part2"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialupgrade:industrialupgrade_757
// （已停用：这条配方由 server_scripts/industrial/iu_steam_recipes.js
//   以青铜板 + 铁板重新写入，这里的旧 JSON 是「钢板 + 铁板」的过期副本，
//   会被脚本覆盖，留着只会让人误以为 Studio 改了没生效。）
// kubejsstudio custom: industrialupgrade:industrialupgrade_763
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialupgrade:recipe/industrialupgrade_763',
      {
        "type": "industrialupgrade:shaped_recipe",
        "category": "misc",
        "key": {
          "A": {
            "item": "industrialupgrade:crafting_elements/crafting_137_element"
          },
          "B": {"item":"industrialupgrade:blockresource/steam_machine"}
        },
        "pattern": ["AAA","ABA","AAA"],
        "result": {"count":1,"id":"industrialupgrade:blockresource/machine"},
        "show_notification": false
      }
    )
})
// kubejsstudio custom: industrialforegoing:machine_frame_pity
ServerEvents.generateData('after_mods', event => {
    event.json(
      'industrialforegoing:recipe/machine_frame_pity',
      {
        "type": "kubejs:shaped",
        "result": {"id":"industrialforegoing:machine_frame_pity","count":1},
        "pattern": ["WIW","IRI","WIW"],
        "key": {
          "I": {"tag":"c:plates/steel"},
          "R": {"item":"industrialupgrade:blockresource/machine"},
          "W": {"tag":"minecraft:logs"}
        },
        "_kubejs_changed_marker": {
          "source": "server_scripts:industrial/if_electric.js",
          "line": 24
        }
      }
    )
})
