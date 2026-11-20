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
// kubejsstudio custom: industrialupgrade:industrialupgrade_735

