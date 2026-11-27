// ============================================================
// 灌注红石 / 灌注赛特斯石英（物品注册，startup）
// ------------------------------------------------------------
// 两件「灌注」中间物，把基础机器从锇上挪开：
//   灌注红石        IU 充能红石居中，红石粉围一圈 → 8
//   灌注赛特斯石英  余烬的矮人燃油 1000 mB 泡八颗赛特斯石英
//
// 用在：MEK 基础电路 / 富集仓 / 通电冶炼炉 / 粉碎机；
//       AE 福鲁伊克斯水晶 / 充能器 / 压印器 / ME 控制器 / 水晶催生仓。
// 配方：server_scripts/mekanism/infused_gates.js、server_scripts/ae2/ae2_core.js
// 设计说明：kubejs/docs/INFUSED_REDSTONE_QUARTZ.md
//
// 贴图自绘：assets/kubejs/textures/item/infused_redstone.png、infused_certus_quartz.png
// （生成器 kubejs/tools/gen_infused_textures.py，模型同名 json 指到 kubejs:item/<同名>）。
// 改完本文件要**完全重启**（/reload 不重载 startup）。
// ============================================================

StartupEvents.registry('item', event => {
    event.create('infused_redstone')
        .displayName('灌注红石')
        .tooltip('§7充能红石当芯，红石粉围一圈压出来')
        .tooltip('§7基础电路与三台基础机器的底料')

    event.create('infused_certus_quartz')
        .displayName('灌注赛特斯石英')
        .tooltip('§7矮人燃油泡透的赛特斯石英，断口带一层油光')
        .tooltip('§7AE 的机器吃它，普通赛特斯石英顶不了')
})
