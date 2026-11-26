// ============================================================
// 通用机械 —— 锇莹黑合金（物品注册，startup）
// ------------------------------------------------------------
// 一条合金把通用机械与 AE 的机器钉在同一个门禁上：
//   锇荧锭（mekanism:ingot_refined_glowstone，锇压缩机把锇压进荧石）
//     → 冶金灌注机灌 10 mB 强化黑曜石 → 锇莹黑合金
//
// 配方：server_scripts/mekanism/mek_osmium_alloy.js
// 用在：MEK 富集仓 / 通电冶炼炉 / 电解分离机；
//       AE 充能器 / 压印器 / 能量接收器 / ME 驱动器 / ME 控制器。
// 设计说明：kubejs/docs/OSMIUM_LUMEN_ALLOY.md
//
// 贴图借 mekanism 的强化黑曜石锭：黑底、断口带荧亮，正对这个名字。
// 改完本文件要**完全重启**（/reload 不重载 startup）。
// ============================================================

StartupEvents.registry('item', event => {
    event.create('alloy_osmium_lumen_black')
        .displayName('锇莹黑合金')
        .tooltip('§7锇荧锭里灌进强化黑曜石：黑底、断口发荧')
        .tooltip('§7通用机械与 AE 的机器共用这一种材料，两条线都绕不开它')
})
