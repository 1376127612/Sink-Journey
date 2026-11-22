// ============================================================
// IU 化工侧：精馏的第二种跑法
// ------------------------------------------------------------
// T2 的精馏现在有两条路，料耗和产能各有取舍：
//
//   核科技 多方块蒸馏器   1000 三氯硅烷 -> 850 高纯三氯硅烷 + 150 四氯化硅
//                        收率高、副产回氯循环，但要摆一座多块结构
//   IU 蒸馏器             1500 三氯硅烷 -> 1000 高纯三氯硅烷
//                        收率低（重组分带走），但单方块、能吃 IU 的电力升级与并联
//
// 两条都只出一档「高纯三氯硅烷」，不构成纯度捷径，只是产能与料耗的选择。
//
// 歧化同理，也可以换机器跑：
//   核科技 化学反应釜   4000 三氯硅烷 -> 1000 硅烷 + 3000 四氯化硅（副产回氯循环）
//   IU 气体混合器      4000 三氯硅烷 -> 1000 硅烷（副产不带回，氯直接损失）
//
// 纯度不进不退（两边都是硅烷），差别只有料耗和产能。
//
// 走 IU 自己的 RecipesCore，只能用 kubejs_iu 桥接；放在 ServerEvents.loaded，
// 和 iu_crystal.js 同一时机（IU 在 TagsUpdatedEvent 重建配方，loaded 在其后）。
// ============================================================

ServerEvents.loaded(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')

    const TCS = 'kubejs:trichlorosilane'
    const PT_TCS = 'kubejs:purified_tcs'

    if (!iu.isReady()) {
        console.warn('[晶圆线] IU 化学机器桥接未就绪，IU 蒸馏器精馏配方跳过')
        return
    }

    // 先删同产物旧条目，避免反复 /reload 后配方重复堆叠。
    // 只按产物精确删，不动 IU 蒸馏器原有的其它配方（比如蒸馏水）。
    try {
        iu.removeByOutput('distiller', PT_TCS, 1000)
    } catch (err) {
        console.warn('[晶圆线] 清理 IU 蒸馏器旧精馏条目失败：' + err)
    }

    if (!iu.addFluidRecipe('distiller', TCS, 1500, PT_TCS, 1000)) {
        console.warn('[晶圆线] IU 蒸馏器精馏配方注册失败：' + TCS + ' -> ' + PT_TCS)
    } else {
        console.info('[晶圆线] IU 蒸馏器精馏已注入：1500mB 三氯硅烷 -> 1000mB 高纯三氯硅烷')
    }

    // ---- 歧化的第二种跑法：IU 气体混合器 ----
    // 核科技 化学反应釜：4000 三氯硅烷 -> 1000 硅烷 + 3000 四氯化硅（四氯化硅回氯循环）
    // IU 气体混合器：    4000 三氯硅烷 -> 1000 硅烷（副产不带回，氯直接损失）
    // 用速度与并联换料耗，纯度不进不退——两条都只出硅烷。
    const SILANE = 'kubejs:silane'
    try {
        iu.removeByOutput('gas_combiner', SILANE, 1000)
    } catch (err) {
        console.warn('[晶圆线] 清理 IU 气体混合器旧歧化条目失败：' + err)
    }
    if (!iu.addFluidRecipe('gas_combiner', TCS, 4000, SILANE, 1000)) {
        console.warn('[晶圆线] IU 气体混合器歧化配方注册失败：' + TCS + ' -> ' + SILANE)
    } else {
        console.info('[晶圆线] IU 气体混合器歧化已注入：4000mB 三氯硅烷 -> 1000mB 硅烷（不回收四氯化硅）')
    }
})
