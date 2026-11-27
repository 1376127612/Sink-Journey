# -*- coding: utf-8 -*-
"""重排「外星科技」章：通用机械一条、AE 一条，中间一道锇莹黑合金的门。

为什么写生成器而不是手改 SNBT：
  这一章的任务 id 写进存档，换 id 等于清零进度；坐标与依赖却要整章重排。
  生成器只改 dependencies / x / y / shape / icon，任务、奖励、贴图原样保留；
  缺格按 NEW_QUESTS 新建，文案按 TEXT 表就地改写（同 id 覆盖，不搬 key）。

布局（2026-11-27 第十一版）：
  入口摆在两条主线正中间：往上一斜给 AE，往下一斜给通用机械；「否」是岔话、死路。
  两条主线各占一行，从 x = 0 向右铺，一格 2.0：
    y = +4.0  AE：灌注石英 → 充能器 → 福鲁伊克斯 → 压印器 → 处理器 → ME 控制器
                   → 能量接收器 → 驱动器 → ME 终端 → 合成终端 → 样板 → 导入导出总线
    y =  0.0  通用机械：灌注红石 → 钢外壳 → 冶金灌注机 → 灌注合金与电路 → 富集仓
                   → 通电冶炼炉 → 粉碎机 → 锇压缩机 → 锇荧锭 → EIO 合金炉
                   → 锇莹黑合金 → 电解核心 → 电解分离机
  支线一律竖直挂在主线格子的正上方／正下方（x 相同），线段不相交也不穿格：
    y = +7.5  AE 支线：水晶催生仓（挂福鲁伊克斯）、存储元件 1k → 256k（挂驱动器）
    y = -3.5  通用机械支线：强化合金 → 原子合金（挂灌注合金）、
              热力发电机 → 通用线缆 → 基础立方 → 高级/精英/终极线缆（挂粉碎机）
    y = -7.0  储能升级：进阶 → 精英 → 终极能量立方（挂基础立方）

用法：
    python kubejs/tools/gen_alien_quests.py
"""
import re

NL = "\r\n"
CH = "config/ftbquests/quests/chapters/514fd6a3f6ee847d.snbt"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

ALLOY = "kubejs:alloy_osmium_lumen_black"

# id, x, y, 依赖, 形状, 图标
LAYOUT = [
    # ── 入口：从这一格朝两条线各斜一条 ──────────────────────
    ("5B3A49A203BC09F7", -4.5, 2, [], "hexagon", "ae2:controller"),
    ("418DAE08F5E9ADBF", -2.5, 2, ["5B3A49A203BC09F7"], None, None),
    ("1D1EE6A8C5530E1C", -2.5, 6.5, ["5B3A49A203BC09F7"], None, None),

    # ── AE 主线：y = +4 ─────────────────────────────────────
    ("7619F0B43B6DBDA6", 0, 4, ["418DAE08F5E9ADBF"], None, None),
    ("415E14738BE3B48B", 2, 4, ["7619F0B43B6DBDA6"], None, None),
    ("49CD2F84291610CC", 4, 4, ["415E14738BE3B48B"], None, None),
    ("5C5178DC16C37A0C", 6, 4, ["49CD2F84291610CC"], None, None),
    ("018AA31ED4D322D9", 8, 4, ["5C5178DC16C37A0C"], None, None),
    ("60E6DBB858AD041A", 10, 4, ["018AA31ED4D322D9"], "hexagon", None),
    ("118AF447A22EAB3B", 12, 4, ["60E6DBB858AD041A"], None, None),
    ("3CAB66D5F17CA3F3", 14, 4, ["118AF447A22EAB3B"], None, None),
    ("38E59F0A75D5FEBB", 16, 4, ["3CAB66D5F17CA3F3"], None, None),
    ("3A8A79B642BC2C15", 18, 4, ["38E59F0A75D5FEBB"], None, None),
    ("2E5CFA0A0916AA4C", 20, 4, ["3A8A79B642BC2C15"], None, None),
    ("47374C8D17B38EB9", 22, 4, ["2E5CFA0A0916AA4C"], None, None),

    # ── AE 支线：y = +7.5，都竖着挂在主线格子正上方 ─────────
    ("4C2DA8313794F9AC", 4, 7.5, ["49CD2F84291610CC"], None, None),
    ("69073E45025D285F", 14, 7.5, ["3CAB66D5F17CA3F3"], None, "ae2:cell_component_1k"),
    ("76E6D1E7FEE60B6C", 16, 7.5, ["69073E45025D285F"], None, "ae2:cell_component_4k"),
    ("5BAF4E49B483B668", 18, 7.5, ["76E6D1E7FEE60B6C"], None, "ae2:cell_component_16k"),
    ("4869FCEABEB4800E", 20, 7.5, ["5BAF4E49B483B668"], None, "ae2:cell_component_64k"),
    ("44F6506A686E7FA4", 22, 7.5, ["4869FCEABEB4800E"], None, "ae2:cell_component_256k"),

    # ── 通用机械主线：y = 0 ─────────────────────────────────
    ("5E5CB95D81DA624D", 0, 0, ["418DAE08F5E9ADBF"], None, None),
    ("56E002766340A469", 2, 0, ["5E5CB95D81DA624D"], None, None),
    ("486569B3D357D2B4", 4, 0, ["56E002766340A469"], None, None),
    ("591FF33BBB5E6A4D", 6, 0, ["486569B3D357D2B4"], None, None),
    ("28BD6CAC160150A9", 8, 0, ["591FF33BBB5E6A4D"], None, None),
    ("70C08FAB16CACA19", 10, 0, ["28BD6CAC160150A9"], None, None),
    ("6F68FF804AA49632", 12, 0, ["70C08FAB16CACA19"], None, None),
    ("4AC45BD5DE566B0C", 14, 0, ["6F68FF804AA49632"], None, None),
    ("1B1A4055CB185CC1", 16, 0, ["4AC45BD5DE566B0C"], None, None),
    ("1EF29B6758D79363", 18, 0, ["1B1A4055CB185CC1"], None, None),
    ("6AA83E24326B084C", 20, 0, ["1EF29B6758D79363"], "hexagon", None),
    ("0033B45EFB572950", 22, 0, ["6AA83E24326B084C"], None, None),
    ("4780E38244A5885B", 24, 0, ["0033B45EFB572950"], "hexagon", None),

    # ── 通用机械支线：y = -3.5 ─────────────────────────────
    ("3D06F75481652692", 6, -3.5, ["591FF33BBB5E6A4D"], None, "mekanism:alloy_reinforced"),
    ("749621D809C7995E", 8, -3.5, ["3D06F75481652692"], None, "mekanism:alloy_atomic"),
    ("147A66BD1949E30A", 12, -3.5, ["6F68FF804AA49632"], None, None),
    ("0BDB4E32ADB4A504", 14, -3.5, ["147A66BD1949E30A"], None, None),
    ("56EE1D8ACA1EF3C5", 16, -3.5, ["0BDB4E32ADB4A504"], None, None),
    ("599B38AABF39AFD3", 18, -3.5, ["56EE1D8ACA1EF3C5"], None, None),
    ("4F29CA92AAE1AE91", 20, -3.5, ["599B38AABF39AFD3"], None, None),
    ("5F8B6DA26B621200", 22, -3.5, ["4F29CA92AAE1AE91"], None, None),

    # ── 储能升级：y = -7，挂在基础立方正下方 ───────────────
    ("6EFDA02FD2F7D68C", 16, -7, ["56EE1D8ACA1EF3C5"], None, None),
    ("4B07E60F980AB930", 18, -7, ["6EFDA02FD2F7D68C"], None, None),
    ("43F8EA18EEE5CDCD", 20, -7, ["4B07E60F980AB930"], None, None),
]

# 缺格新建：id, 依赖, 图标, 形状, [(任务物品, 数量, task id)], 奖励物品, 奖励数量, reward id
# 前五格是 2026-11-26 那一版里被游戏写回弄丢的 id，用游戏写回的那个号，
# 老存档里已经点过的进度照旧算数。
NEW_QUESTS = [
    ("1B1A4055CB185CC1", "4AC45BD5DE566B0C", "mekanism:ingot_refined_glowstone", None,
     [("mekanism:ingot_refined_glowstone", 1, "1B1A4055CB185CC2")],
     "minecraft:glowstone_dust", 16, "1B1A4055CB185CC3"),
    ("1EF29B6758D79363", "1B1A4055CB185CC1", "enderio:alloy_smelter", None,
     [("enderio:alloy_smelter", 1, "1EF29B6758D79364")],
     "mekanism:ingot_refined_obsidian", 2, "1EF29B6758D79365"),
    ("6AA83E24326B084C", "1EF29B6758D79363", ALLOY, "hexagon",
     [(ALLOY, 2, "6AA83E24326B084D")],
     "mekanism:dust_refined_obsidian", 4, "6AA83E24326B084E"),
    ("0033B45EFB572950", "6AA83E24326B084C", "mekanism:electrolytic_core", None,
     [("mekanism:electrolytic_core", 1, "0033B45EFB572951")],
     "mekanism:dust_osmium", 8, "0033B45EFB572952"),
    ("4780E38244A5885B", "0033B45EFB572950", "mekanism:electrolytic_separator", "hexagon",
     [("mekanism:electrolytic_separator", 1, "4780E38244A5885C")],
     ALLOY, 2, "4780E38244A5885D"),
    # 2026-11-27 第二轮：两件灌注中间物，基础段与 AE 的新门槛
    # （四个号都是进过游戏后 FTB 写回的，原设计号 E2B0…01 / 02 已废弃）
    ("5E5CB95D81DA624D", "418DAE08F5E9ADBF", "kubejs:infused_redstone", None,
     [("kubejs:infused_redstone", 8, "E2B0000000000011")],
     "minecraft:redstone", 16, "E2B0000000000021"),
    ("7619F0B43B6DBDA6", "418DAE08F5E9ADBF", "kubejs:infused_certus_quartz", None,
     [("kubejs:infused_certus_quartz", 8, "E2B0000000000012")],
     "ae2:certus_quartz_crystal", 8, "E2B0000000000022"),
    # 2026-11-27 新增：AE 主线收尾的两种总线，和水晶催生仓
    # （这两个号是进过一次游戏后 FTB 写回的，原设计号 E2AE…0C / 0D 已废弃）
    ("47374C8D17B38EB9", "2E5CFA0A0916AA4C", "ae2:import_bus", None,
     [("ae2:import_bus", 2, "E2AE00000000001C"), ("ae2:export_bus", 2, "E2AE00000000002C")],
     "ae2:certus_quartz_crystal", 16, "E2AE00000000003C"),
    ("4C2DA8313794F9AC", "49CD2F84291610CC", "ae2:growth_accelerator", None,
     [("ae2:growth_accelerator", 1, "E2AE00000000001D")],
     "ae2:certus_quartz_crystal", 16, "E2AE00000000002D"),
]

TEXT = {
    # ── 入口 ────────────────────────────────────────────────
    "5B3A49A203BC09F7": ("外星科技？", "末地里的那套东西",
                         ["末地深处还留着几台机器，都还在转。",
                          "旁边是几种我们叫不出名字的合金。看得懂，也造不出来。",
                          "要不要碰它们，由你决定。"]),
    "418DAE08F5E9ADBF": ("是", "拿过来用",
                         ["我们需要这套科技。但愿不会出什么岔子。",
                          "两条线摆在面前：通用机械的机器，和末地那套 ME 网络。",
                          "两边都要锇、都要电，最后撞在同一块合金上。"]),
    "1D1EE6A8C5530E1C": ("否", "小心为上",
                         ["对未知的谨慎总是好的，我们不能使用这些科技。",
                          "至少在我们需要的时候再用也不迟。"]),

    # ── AE 主线 ─────────────────────────────────────────────
    "7619F0B43B6DBDA6": ("矮人燃油泡石英", "灌注赛特斯石英：AE 的新料",
                         ["一千毫巴矮人燃油配八颗赛特斯石英。进搅拌盆转一圈，出八颗。",
                          "矮人燃油从余烬的搅拌机来，桶装的那种也能直接倒。",
                          "充能器、压印器、控制器、催生仓都要它。普通石英顶不了。"]),
    "415E14738BE3B48B": ("把石英充成水晶", "AE 的第一台",
                         ["做一个充能器！钢板立三列，中间塞两块灌注赛特斯石英。",
                          "它做两件事：充赛特斯石英，给存储元件补电。",
                          "后面五台 AE 主机都绕着它转，先把它摆好。"]),
    "4C2DA8313794F9AC": ("让水晶长出来", "赛特斯石英不够用的时候",
                         ["做一个水晶催生仓！钢板四角，两块灌注石英压边，中间一块福鲁伊克斯块。",
                          "石英芽种进水里，催生仓贴着它立起来。",
                          "野生石英挖空之前先种，别停在这一格上等矿。"]),
    "49CD2F84291610CC": ("水、石英、红石", "福鲁伊克斯水晶",
                         ["充能赛特斯石英、下界石英、灌注红石，三样丢进水里。",
                          "泡出来就是福鲁伊克斯水晶。",
                          "AE 的玻璃、线缆、处理器都从它开始。一次多泡几颗。"]),
    "5C5178DC16C37A0C": ("把电路压出来", "压印器",
                         ["做一个压印器！钢锭夹着粘性活塞，中间塞福鲁伊克斯水晶。再补两块灌注赛特斯石英，机器才立得起来。",
                          "五副模板压在它下面：硅、逻辑、运算、工程，还有名字。",
                          "硅印刷片要晶圆，晶圆出自「电力时代」那条线。"]),
    "018AA31ED4D322D9": ("三个脑子", "处理器",
                         ["印刷片压一次，加红石与硅片再压一次，就是一个处理器。",
                          "逻辑吃金锭，运算吃赛特斯石英，工程吃钻石。",
                          "三种都要备着，后面每一台机器都按种类吃它们。"]),
    "60E6DBB858AD041A": ("网络从这里开始", "ME 控制器",
                         ["光滑天石做框，中间一块灌注赛特斯石英。",
                          "外圈是福鲁伊克斯的粉与水晶。",
                          "控制器是网络的心脏。它按方块数分频道，也决定这张网能长多大。"]),
    "118AF447A22EAB3B": ("并网的那一头", "能量接收器",
                         ["钢锭四角，福鲁伊克斯玻璃线缆围一圈，中心一块石英块。",
                          "FE 从这一格进网络。控制器与驱动器从此不用再单独接电。"]),
    "3CAB66D5F17CA3F3": ("先有个仓库", "驱动器与存储元件",
                         ["做一个 ME 驱动器！钢块四角，福鲁伊克斯粉围边，中心放一台能源接收器。",
                          "驱动器是插槽，存储元件是仓库。一块 1k 元件存 1024 字节。",
                          "不够就往上做，4k 到 256k 在下面那条支线上。"]),
    "38E59F0A75D5FEBB": ("开一扇窗", "ME 终端",
                         ["驱动器里的东西，在终端里看得见、拿得出、放得进。",
                          "网络有了终端才算能用人。在那之前，它只是一排插着卡的盒子。"]),
    "3A8A79B642BC2C15": ("在窗里合成", "合成终端",
                         ["合成终端把工作台搬进网络。配方要的料网络里有，它自己取。",
                          "做好的东西也自己回到网络里，不用你再搬一趟。"]),
    "2E5CFA0A0916AA4C": ("让它自己动手", "样板与自动合成",
                         ["样板编码终端把配方写成样板。接口收样板，供应器把料推给机器。",
                          "三件凑齐，网络才从仓库变成工厂。",
                          "下一格接导入与导出总线，进出也不再靠手。"]),
    "47374C8D17B38EB9": ("自己搬东西", "导入与导出总线",
                         ["导入总线把箱子里的东西抽进网络。",
                          "导出总线反过来，把网络里的料送回机器或箱子。",
                          "一台机器贴一根，网络就自己搬运，不用你再开箱子。"]),

    # ── AE 支线 ─────────────────────────────────────────────
    "69073E45025D285F": ("最小的那一块", "存储元件 1k",
                         ["逻辑处理器打底，红石粉与赛特斯石英围一圈：1k 元件。",
                          "存储元件、合成存储元件、便携元件都吃它。"]),
    "76E6D1E7FEE60B6C": ("三份 1k", "存储元件 4k",
                         ["三个 1k 元件套一层，就是 4k。",
                          "往后每一档都是三份前一级，容量翻四倍。"]),
    "5BAF4E49B483B668": ("三份 4k", "存储元件 16k",
                         ["三个 4k 元件：16k。",
                          "到这一档，一个元件就是一面墙的箱子。"]),
    "4869FCEABEB4800E": ("三份 16k", "存储元件 64k",
                         ["三个 16k 元件：64k。",
                          "合成存储元件与大容量便携元件都从这里切。"]),
    "44F6506A686E7FA4": ("本体到顶", "存储元件 256k",
                         ["三个 64k 元件：256k，AE2 本体最高的一档。",
                          "再往上要靠附属，那是后面的时代。"]),

    # ── 通用机械：第一段 ────────────────────────────────────
    "5E5CB95D81DA624D": ("把电灌进红石", "灌注红石：基础段的底料",
                         ["充能红石居中，八撮红石粉围一圈，一次八块灌注红石。",
                          "充能红石用晶体充能器压：红石丢进去，出来就是。",
                          "开张那一块打末影龙掉，先拿它把链子点起来。"]),
    "56E002766340A469": ("先做一块壳", "第一段：不碰锇",
                         ["做一个钢制机壳！钢棍立四角，钢板围四边，中间一台蒸汽机机身。",
                          "通用机械每台机器都长在这块壳子上。灌注机也得先有它。",
                          "本钱在钢与蒸汽线上，另外要两块灌注红石。"]),
    "486569B3D357D2B4": ("一台机器，两条料路", "红石、钻石、黑曜石都从这儿灌",
                         ["做一个冶金灌注机！钢板立四角，两块灌注红石压在中间。最左格放灌注料，中间放待灌的东西。",
                          "灌注合金、基础电路、强化黑曜石粉全从它出来。",
                          "一台只吃一种灌注液，换料要清管。做两台比来回换省事。"]),
    "591FF33BBB5E6A4D": ("红石灌进铜里", "灌注合金与基础电路",
                         ["铜锭灌 10 mB 红石是灌注合金。灌注红石灌 20 mB 红石是基础电路。",
                          "机器外壳塞合金，机器脑子里塞电路，两样都得备。",
                          "一次多灌几份。第一段三台、第二段的压缩机都吃这一批料。"]),
    "28BD6CAC160150A9": ("矿翻倍的第一站", "第一段：只吃灌注合金",
                         ["做一个富集仓！矿粉进去，同种矿的粉出两份。",
                          "配方吃灌注红石、基础电路、铁锭和钢制机壳。一个锇都不要。",
                          "它的下游是通电冶炼炉。粉进炉子烧成锭，两段接起来才算倍增。"]),
    "70C08FAB16CACA19": ("用电烧，不吃煤", "第一段：富集仓的搭档",
                         ["做一台通电冶炼炉！活和熔炉一样，但烧得快，还能自己进出料。",
                          "富集仓出来的粉，只有它能一步烧成锭。",
                          "它同样不碰锇：机壳、灌注红石、基础电路、便宜玻璃。"]),
    "6F68FF804AA49632": ("锭也能磨成粉", "第一段：黑曜石粉从这儿来",
                         ["做一个粉碎机！富集仓磨矿，粉碎机磨锭、磨块、磨水晶。",
                          "黑曜石粉就是它磨的。合金的第一环压在它身上。",
                          "四角各一块灌注红石，料只吃锭和块，矿石留给富集仓。"]),

    # ── 通用机械：第二段 ────────────────────────────────────
    "4AC45BD5DE566B0C": ("把锇压成件", "第二段：从这里开始要锇",
                         ["做一个锇压缩机！锇锭进去，锇板与锇粉出来。",
                          "配方要灌注合金、高级电路和一个桶。做到这里，锇才真的开始不够用。",
                          "锇荧锭、强化黑曜石锭都从它压出来。整条合金线长在它后面。"]),
    "1B1A4055CB185CC1": ("把光压进锇里", "第二段：锇荧锭",
                         ["一撮萤石粉配 1 mB 锇，进锇压缩机压成一块锇荧锭。",
                          "断口发亮。强化荧石件和锇莹黑合金都吃它。",
                          "一锭锇换不出几块荧锭，省着用。"]),
    "1EF29B6758D79363": ("三格进，六块出", "第二段：EIO 合金炉",
                         ["做一台 EIO 合金炉！铁齿轮与熔炉打底，再加一块虚空框架。",
                          "虚空框架要无限粒。往基岩上引火烧，才烧得出这种粉。",
                          "炉子一开，一件锇荧锭就换三件合金。"]),
    "6AA83E24326B084C": ("黑底，断口发荧", "锇莹黑合金",
                         ["两格锇荧锭、一格强化黑曜石锭，进 EIO 合金炉。一炉出 6 块。",
                          "强化黑曜石锭从粉碎机来。黑曜石磨粉，灌钻石，再压成锭。",
                          "两条科技共用这一道门。AE 五台主机与电解分离机都吃它。"]),

    # ── 通用机械：第三段 ────────────────────────────────────
    "0033B45EFB572950": ("硅片夹金粉", "第三段：要电解核心",
                         ["做一个电解核心！硅片、红石合金锭与玄钢锭搭成极板。",
                          "八倍电容放在上下，金粉铺里层，一块铁锭封边。",
                          "分离机要一个，后面的电解槽还要，一次做两个。"]),
    "4780E38244A5885B": ("把水拆成两半", "第三段：电解核心 + 合金",
                         ["做一台电解分离机！水进去，氢与氧各走一路。",
                          "配方是电解核心、锇莹黑合金与铁锭。前两段没落地，这台做不出来。",
                          "氧气接化学注入与冶炼，氢气接后面的发电与化工。"]),

    # ── 通用机械支线：合金升级 ──────────────────────────────
    "3D06F75481652692": ("灌注合金再灌一次", "强化合金",
                         ["灌注合金进灌注机，20 mB 钻石液压进去。出来的就是强化合金。",
                          "精英电路与原子合金都等它。"]),
    "749621D809C7995E": ("再灌一次黑曜石", "原子合金",
                         ["强化合金再灌 40 mB 强化黑曜石，就是原子合金。",
                          "通用机械最贵的一档零件，一份只有几块。终极电路等它。"]),

    # ── 通用机械支线：供电 ──────────────────────────────────
    "147A66BD1949E30A": ("烧红一片铁", "热电直出",
                         ["做一台热力发电机！铁锭、锇锭、铜锭加一块熔炉。",
                          "热量直接变电，不经过蒸汽。前期它就是通用机械的插座。",
                          "锇不紧张的时候多做几台，别让机器等电。"]),
    "0BDB4E32ADB4A504": ("一根过 3.2 kFE/t", "通用线缆",
                         ["钢锭裹着合金拉出来的线，一根过 3.2 kFE/t。",
                          "超了会热上来，线会烧断。压缩机和分离机别挂同一根。"]),
    "56EE1D8ACA1EF3C5": ("存 1.6 MFE", "基础能量立方",
                         ["基础能量立方存 1.6 MFE，机器断电那一阵靠它顶着。",
                          "后面还有进阶、精英、终极三档，都从这块起。"]),
    "599B38AABF39AFD3": ("一根过 51 kFE/t", "高级线缆",
                         ["合金外壳再裹一层，导线换粗，一根过 51 kFE/t。",
                          "线缆只要合金与电路，机器不用换。"]),
    "4F29CA92AAE1AE91": ("一根过 410 kFE/t", "精英线缆",
                         ["再上一层，一根过 410 kFE/t。",
                          "机器同时开工的时候，瓶颈就不在电线上了。"]),
    "5F8B6DA26B621200": ("一根过 3.3 MFE/t", "终极线缆",
                         ["通用机械到顶的一档线，一根过 3.3 MFE/t。",
                          "再往上要换超导，那是后面的时代。"]),

    # ── 通用机械支线：储能 ──────────────────────────────────
    "6EFDA02FD2F7D68C": ("存 6.4 MFE", "进阶能量立方",
                         ["基础立方的四倍。",
                          "电解分离机、压缩机这种吃电大户，靠它撑过用电高峰。"]),
    "4B07E60F980AB930": ("存 25.6 MFE", "精英能量立方",
                         ["再四倍。到这一档，一台立方就能带住一整排机器的启停。"]),
    "43F8EA18EEE5CDCD": ("存 102.4 MFE", "终极能量立方",
                         ["本体的顶配储能。",
                          "往后接的是聚变与裂变那套电网，这里就是它的缓冲。"]),
}


def resolve_ids(blocks):
    """期望 id → 章节里实际存在的 id。FTB 换过名的格按图标认回来。"""
    by_icon = {}
    for qid, b in blocks.items():
        for item in re.findall(r'icon: \{\n\t\t\t\tid: "([^"]+)"', b):
            by_icon.setdefault(item, qid)
    alias = {qid: qid for qid in blocks}
    for spec in NEW_QUESTS:
        want, icon = spec[0], spec[2]
        if want in blocks:
            continue
        if icon and icon in by_icon:
            alias[want] = by_icon[icon]
            print("  按图标认回任务 %s → %s" % (want, by_icon[icon]))
    return alias


def read_blocks(text):
    head, body = text.split("\tquests: [\n", 1)
    body = "\n" + body
    tail_at = body.rindex("\n\t]")
    body, tail = body[:tail_at], body[tail_at:]
    blocks, order = {}, []
    for m in re.finditer(r"\n\t\t\{\n(.*?)\n\t\t\}", body, re.S):
        qid = re.search(r"\n\t\t\tid: \"([0-9A-F]{16})\"", m.group(0)).group(1)
        blocks[qid] = m.group(0)
        order.append(qid)
    return head, blocks, order, tail


def set_field(block, field, value):
    pat = re.compile(r"^\t\t\t%s: .*$" % field, re.M)
    if pat.search(block):
        return pat.sub("\t\t\t%s: %s" % (field, value), block, count=1)
    anchor = re.search(r"^\t\t\tid: .*$", block, re.M)
    if field == "dependencies":
        return block.replace(anchor.group(0),
                             "\t\t\tdependencies: %s\n%s" % (value, anchor.group(0)), 1)
    raise SystemExit("找不到插入 %s 的位置" % field)


def new_block(qid, dep, icon, shape, tasks, ritem, rcount, rid):
    out = ["", "\t\t{"]
    out.append('\t\t\tdependencies: ["%s"]' % dep)
    out.append("\t\t\ticon: {")
    out.append('\t\t\t\tid: "%s"' % icon)
    out.append("\t\t\t}")
    out.append('\t\t\tid: "%s"' % qid)
    out.append("\t\t\trewards: [{")
    out.append("\t\t\t\tcount: %d" % rcount)
    out.append('\t\t\t\tid: "%s"' % rid)
    out.append("\t\t\t\titem: {")
    out.append("\t\t\t\t\tcount: 1")
    out.append('\t\t\t\t\tid: "%s"' % ritem)
    out.append("\t\t\t\t}")
    out.append('\t\t\t\ttype: "item"')
    out.append("\t\t\t}]")
    if shape:
        out.append('\t\t\tshape: "%s"' % shape)
    out.append("\t\t\ttasks: [")
    task_blocks = []
    for item, count, tid in tasks:
        lines = ["\t\t\t\t{"]
        if count > 1:
            lines.append("\t\t\t\t\tcount: %dL" % count)
        lines.append('\t\t\t\t\tid: "%s"' % tid)
        lines.append('\t\t\t\t\titem: { count: 1, id: "%s" }' % item)
        lines.append('\t\t\t\t\ttype: "item"')
        lines.append("\t\t\t\t}")
        task_blocks.append("\n".join(lines))
    out.append(",\n".join(task_blocks))
    out.append("\t\t\t]")
    out.append("\t\t\tx: 0.0d")
    out.append("\t\t\ty: 0.0d")
    out.append("\t\t}")
    return "\n".join(out)


def write_chapter():
    text = open(CH, encoding="utf-8").read().replace("\r\n", "\n")
    head, blocks, order, tail = read_blocks(text)

    canon = resolve_ids(blocks)

    for spec in NEW_QUESTS:
        qid = canon.get(spec[0], spec[0])
        if qid in blocks:
            continue
        blocks[qid] = new_block(qid, *spec[1:])
        order.append(qid)
        print("  新增任务 %s" % qid)

    listed = [canon.get(row[0], row[0]) for row in LAYOUT]
    missing = [q for q in order if q not in listed]
    if missing:
        raise SystemExit("有任务没排进 LAYOUT：%s" % missing)
    if len(listed) != len(set(listed)):
        raise SystemExit("LAYOUT 里 id 重复")

    seen = set()
    for row in LAYOUT:
        qid = canon.get(row[0], row[0])
        _, x, y, deps, shape, icon = row
        block = blocks[qid]
        block = set_field(
            block, "dependencies",
            "[%s]" % ", ".join('"%s"' % canon.get(d, d) for d in deps) if deps else "[]")
        for field, value in (("x", "%.1fd" % x), ("y", "%.1fd" % y)):
            if re.search(r"^\t\t\t%s: " % field, block, re.M):
                block = re.sub(r"^\t\t\t%s: .*$" % field,
                               "\t\t\t%s: %s" % (field, value), block, count=1, flags=re.M)
            else:
                block = block.replace("\n\t\t}",
                                      "\n\t\t\t%s: %s\n\t\t}" % (field, value), 1)
        if shape:
            if re.search(r"^\t\t\tshape: ", block, re.M):
                block = re.sub(r"^\t\t\tshape: .*$", '\t\t\tshape: "%s"' % shape,
                               block, count=1, flags=re.M)
            else:
                block = block.replace("\n\t\t\ttasks: [{",
                                      '\n\t\t\tshape: "%s"\n\t\t\ttasks: [{' % shape, 1)
        if icon:
            if re.search(r"icon: \{", block):
                block = re.sub(r'(icon: \{\n\t\t\t\tid: ")[^"]+(")',
                               r"\g<1>%s\g<2>" % icon, block, count=1)
            else:
                block = block.replace(
                    "\n\t\t\tid: ",
                    '\n\t\t\ticon: {\n\t\t\t\tid: "%s"\n\t\t\t}\n\t\t\tid: ' % icon, 1)
        blocks[qid] = block
        key = (x, y)
        if key in seen:
            raise SystemExit("坐标撞车：%s %s" % (qid, key))
        seen.add(key)

    body = "".join(blocks[q] for q in order)
    open(CH, "w", encoding="utf-8", newline="\r\n").write(
        head + "\tquests: [" + body + tail)
    print("外星科技：%d 个任务，坐标 %d 组" % (len(order), len(seen)))


def text_block(qid, title, sub, desc):
    out = ["\tquest.%s.quest_desc: [" % qid]
    out.extend('\t\t"%s"' % d for d in desc)
    out.append("\t]")
    out.append('\tquest.%s.quest_subtitle: "%s"' % (qid, sub))
    out.append('\tquest.%s.title: "%s"' % (qid, title))
    return out


def replace_text(lines, qid, block):
    """就地换掉一个任务的文案块；找不到就返回 False。"""
    head = "\tquest.%s.quest_desc:" % qid
    for i, ln in enumerate(lines):
        if not ln.startswith(head):
            continue
        if ln.rstrip().endswith("["):
            j = i + 1
            while j < len(lines) and lines[j].strip() != "]":
                j += 1
            end = j + 1
        else:
            end = i + 1
        while end < len(lines) and (
                lines[end].startswith("\tquest.%s.quest_subtitle:" % qid)
                or lines[end].startswith("\tquest.%s.title:" % qid)):
            end += 1
        lines[i:end] = block
        return True
    return False


def write_lang():
    text = open(LANG, encoding="utf-8").read().replace("\r\n", "\n")
    head, blocks, _, _ = read_blocks(
        open(CH, encoding="utf-8").read().replace("\r\n", "\n"))
    canon = resolve_ids(blocks)
    lines = text.split("\n")

    added, replaced = [], []
    for want, (title, sub, desc) in TEXT.items():
        qid = canon.get(want, want)
        block = text_block(qid, title, sub, desc)
        if replace_text(lines, qid, block):
            replaced.append(qid)
        else:
            added.append(block)

    if added:
        closed = "\n".join(lines).rstrip()
        if not closed.endswith("}"):
            raise SystemExit("lang 结尾不是 }")
        body = "\n\n".join("\n".join(b) for b in added)
        lines = (closed[:-1].rstrip("\n") + "\n\n" + body + "\n}\n").split("\n")

    open(LANG, "w", encoding="utf-8", newline="\r\n").write("\n".join(lines))
    print("文案：改写 %d 个任务，新写 %d 个任务" % (len(replaced), len(added)))


if __name__ == "__main__":
    write_chapter()
    write_lang()
