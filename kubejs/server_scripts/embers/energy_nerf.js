// ============================================================
// 余烬（Embers Rekindled）全局能量削弱：方案一
//
// 把所有余烬燃料的产热值降到 1/5：
//   - embers:ember_activation       物品激活产出的余烬 /5
//   - embers:catalysis_combustion   燃烧/催化产出的余烬 /5
//   - embers:gaseous_fuel           气体燃料的功率 /5
//
// 这样所有消耗余烬的机器（包括硬编码能耗的机器）等效消耗 5 倍燃料。
// 注意：余烬的发电/产热也会同步变慢，这是预期效果。
// ============================================================

(function () {
    const DIVISOR = 5
    let modified = 0

    /**
     * @param {*} recipe KubeJS 配方对象
     * @param {string} field JSON 字段名
     * @param {boolean} integer 是否按整数处理
     */
    function divideField(recipe, field, integer) {
        var element = null
        var value = 0
        try {
            element = recipe.json.get(field)
            if (element === null || element === undefined) {
                return
            }

            value = element.getAsDouble()
            if (value === 0) {
                return
            }

            if (integer) {
                recipe.json.addProperty(field, Math.round(value / DIVISOR))
            } else {
                recipe.json.addProperty(field, value / DIVISOR)
            }

            // recipe.json 是最终写回配方管理器的数据，改动后标记一下即可
            recipe.save()
            modified++
        } catch (e) {
            console.warn('[ember_energy_5x] 处理配方失败: ' + recipe.getId() + ' / ' + e)
        }
    }

    ServerEvents.recipes(event => {
        // 余烬水晶 / 碎片等物品的激活产热
        event.forEachRecipe({ type: 'embers:ember_activation' }, recipe => {
            divideField(recipe, 'ember', true)
        })

        // 燃烧室 / 催化室的燃烧产热
        event.forEachRecipe({ type: 'embers:catalysis_combustion' }, recipe => {
            divideField(recipe, 'multiplier', false)
        })

        // 气体燃料（矮人气体、蒸汽等）的功率
        event.forEachRecipe({ type: 'embers:gaseous_fuel' }, recipe => {
            divideField(recipe, 'power_multiplier', false)
        })

        if (modified > 0) {
            console.info('[ember_energy_5x] 已把 ' + modified + ' 个余烬产能配方的数值降到 1/5')
        }
    })
})()
