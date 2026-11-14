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