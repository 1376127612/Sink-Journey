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
