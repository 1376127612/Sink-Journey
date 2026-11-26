# -*- coding: utf-8 -*-
"""重排「外星科技」章：通用机械一条、AE 一条，中间加两格锇莹黑合金。

为什么写生成器而不是手改 SNBT：
  这一章的任务 id 写进存档，换 id 等于清零进度；坐标与依赖却要整章重排。
  生成器只改 dependencies / x / y / shape / icon，任务、奖励、贴图原样保留；
  缺文案的任务按 TEXT 表补在 zh_cn.snbt 末尾（已有文案的键不动）。

布局：
  入口「外星科技？」在 x = -2.5，是 / 否 各一格；
  y = -2.5 通用机械主线：钢外壳 → 冶金灌注机 → 灌注合金与电路
      → 锇荧锭 → 锇莹黑合金 → 矿石线四台；
  y = -5  供电三件、y = -7.5 强化/原子合金；
  y = +2.5 AE 主线：充能器 … 样板与自动合成；
  y = +5  存储元件 1k → 256k。
  AE 第一格依赖锇莹黑合金：两条科技共用同一道门。

用法：
    python kubejs/tools/gen_alien_quests.py
"""
import os
import re

NL = "\r\n"
CH = "config/ftbquests/quests/chapters/514fd6a3f6ee847d.snbt"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

ALLOY = "kubejs:alloy_osmium_lumen_black"

# id, x, y, 依赖, 形状, 图标
# 一条横带=一条线，横带之间只在最左边竖着接一次：看起来就是几条直排，不会交叉。
LAYOUT = [
    ("5B3A49A203BC09F7", -2.5, 1.5, [], "hexagon", "ae2:controller"),
    ("418DAE08F5E9ADBF", 0.0, -1.0, ["5B3A49A203BC09F7"], None, None),
    ("1D1EE6A8C5530E1C", 0.0, 3.5, ["5B3A49A203BC09F7"], None, None),

    # 横带一：第一段，直接给
    ("56E002766340A469", 3.0, -2.5, ["418DAE08F5E9ADBF"], None, None),
    ("486569B3D357D2B4", 5.0, -2.5, ["56E002766340A469"], None, None),
    ("591FF33BBB5E6A4D", 7.0, -2.5, ["486569B3D357D2B4"], None, None),
    ("D100000000000001", 9.0, -2.5, ["591FF33BBB5E6A4D"], None, None),
    ("D100000000000002", 11.0, -2.5, ["D100000000000001"], None, None),
    ("D100000000000003", 13.0, -2.5, ["D100000000000002"], None, None),

    # 横带二：第二段，要锇
    ("4AC45BD5DE566B0C", 3.0, -5.0, ["591FF33BBB5E6A4D"], None, None),
    ("E2A1000000000001", 5.0, -5.0, ["4AC45BD5DE566B0C"], None, None),
    ("D100000000000004", 7.0, -5.0, ["E2A1000000000001"], None, None),
    ("E2A1000000000002", 9.0, -5.0, ["D100000000000004"], "hexagon", None),

    # 横带三：第三段，要电解核心
    ("D100000000000005", 3.0, -7.5, ["E2A1000000000002"], None, None),
    ("D100000000000006", 5.0, -7.5, ["D100000000000005"], None, None),

    # 横带四：供电与线缆
    ("147A66BD1949E30A", 3.0, -10.0, ["E2A1000000000002"], None, None),
    ("0BDB4E32ADB4A504", 5.0, -10.0, ["147A66BD1949E30A"], None, None),
    ("56EE1D8ACA1EF3C5", 7.0, -10.0, ["0BDB4E32ADB4A504"], None, None),
    ("599B38AABF39AFD3", 9.0, -10.0, ["0BDB4E32ADB4A504"], None, None),
    ("4F29CA92AAE1AE91", 11.0, -10.0, ["599B38AABF39AFD3"], None, None),
    ("5F8B6DA26B621200", 13.0, -10.0, ["4F29CA92AAE1AE91"], None, None),

    # 横带五：储能与合金
    ("6EFDA02FD2F7D68C", 3.0, -12.5, ["56EE1D8ACA1EF3C5"], None, None),
    ("4B07E60F980AB930", 5.0, -12.5, ["6EFDA02FD2F7D68C"], None, None),
    ("43F8EA18EEE5CDCD", 7.0, -12.5, ["4B07E60F980AB930"], None, None),
    ("3D06F75481652692", 9.0, -12.5, ["591FF33BBB5E6A4D"], None, "mekanism:alloy_reinforced"),
    ("749621D809C7995E", 11.0, -12.5, ["3D06F75481652692"], None, "mekanism:alloy_atomic"),

    # 横带六：AE
    ("415E14738BE3B48B", 3.0, 2.5, ["E2A1000000000002"], None, None),
    ("49CD2F84291610CC", 5.0, 2.5, ["415E14738BE3B48B"], None, None),
    ("5C5178DC16C37A0C", 7.0, 2.5, ["49CD2F84291610CC"], None, None),
    ("018AA31ED4D322D9", 9.0, 2.5, ["5C5178DC16C37A0C"], None, None),
    ("60E6DBB858AD041A", 11.0, 2.5, ["018AA31ED4D322D9"], "hexagon", None),
    ("118AF447A22EAB3B", 13.0, 2.5, ["60E6DBB858AD041A"], None, None),
    ("3CAB66D5F17CA3F3", 15.0, 2.5, ["118AF447A22EAB3B"], None, None),
    ("38E59F0A75D5FEBB", 17.0, 2.5, ["3CAB66D5F17CA3F3"], None, None),
    ("3A8A79B642BC2C15", 19.0, 2.5, ["38E59F0A75D5FEBB"], None, None),
    ("2E5CFA0A0916AA4C", 21.0, 2.5, ["3A8A79B642BC2C15"], None, None),

    # 横带七：存储元件
    ("69073E45025D285F", 15.0, 5.0, ["3CAB66D5F17CA3F3"], None, "ae2:cell_component_1k"),
    ("76E6D1E7FEE60B6C", 17.0, 5.0, ["69073E45025D285F"], None, "ae2:cell_component_4k"),
    ("5BAF4E49B483B668", 19.0, 5.0, ["76E6D1E7FEE60B6C"], None, "ae2:cell_component_16k"),
    ("4869FCEABEB4800E", 21.0, 5.0, ["5BAF4E49B483B668"], None, "ae2:cell_component_64k"),
    ("44F6506A686E7FA4", 23.0, 5.0, ["4869FCEABEB4800E"], None, "ae2:cell_component_256k"),
]

# 新加的格：id, 依赖, 图标, 形状, 任务物品, 任务数量, task id, 奖励物品, 奖励数量, reward id
NEW_QUESTS = [
    ("E2A1000000000001", "4AC45BD5DE566B0C", "mekanism:ingot_refined_glowstone", None,
     "mekanism:ingot_refined_glowstone", 1, "E2A1000000000011",
     "minecraft:glowstone_dust", 16, "E2A1000000000021"),
    ("E2A1000000000002", "D100000000000004", ALLOY, "hexagon",
     ALLOY, 2, "E2A1000000000012",
     "mekanism:dust_refined_obsidian", 4, "E2A1000000000022"),
    # 第一段：直接给的三台
    ("D100000000000001", "591FF33BBB5E6A4D", "mekanism:enrichment_chamber", None,
     "mekanism:enrichment_chamber", 1, "13A308E731A98401",
     "mekanism:ingot_osmium", 8, "D100000000000021"),
    ("D100000000000002", "D100000000000001", "mekanism:energized_smelter", None,
     "mekanism:energized_smelter", 1, "19D6DB1F73D92921",
     "mekanism:ingot_osmium", 8, "D100000000000022"),
    ("D100000000000003", "D100000000000002", "mekanism:crusher", None,
     "mekanism:crusher", 1, "374D3A13CBA8B965",
     "mekanism:dust_osmium", 8, "D100000000000023"),
    # 第二段：EIO 合金炉升级路
    ("D100000000000004", "E2A1000000000001", "enderio:alloy_smelter", None,
     "enderio:alloy_smelter", 1, "D100000000000014",
     ALLOY, 4, "D100000000000024"),
    # 第三段：电解核心 → 电解分离机
    ("D100000000000005", "E2A1000000000002", "mekanism:electrolytic_core", None,
     "mekanism:electrolytic_core", 1, "D100000000000015",
     "mekanism:dust_osmium", 8, "D100000000000025"),
    ("D100000000000006", "D100000000000005", "mekanism:electrolytic_separator", None,
     "mekanism:electrolytic_separator", 1, "D100000000000016",
     ALLOY, 2, "D100000000000026"),
]

ID_BY_ITEM = {
    "E2A1000000000001": "mekanism:ingot_refined_glowstone",
    "E2A1000000000002": ALLOY,
    "D100000000000001": "mekanism:enrichment_chamber",
    "D100000000000002": "mekanism:energized_smelter",
    "D100000000000003": "mekanism:crusher",
    "D100000000000004": "enderio:alloy_smelter",
    "D100000000000005": "mekanism:electrolytic_core",
    "D100000000000006": "mekanism:electrolytic_separator",
}

TEXT = {
    "56E002766340A469": ("先做一块壳", "第一段：不碰锇",
                         ["做一个钢制机壳！通用机械的每一台机器都长在这块壳子上，没有它你连灌注机都摆不出来。",
                          "钢质棍立在四角、钢板围四边、中间一台蒸汽机机身：本钱在钢与蒸汽线上，不吃锇。",
                          "第一段的三台机器只吃灌注合金与基础电路，你手上的锇先留着。"]),
    "486569B3D357D2B4": ("一台机器，两条料路", "红石、钻石、黑曜石都从这儿灌",
                         ["做一个冶金灌注机！最左格放灌注料，中间放待灌的东西，一台只吃一种灌注液。",
                          "灌注合金、基础电路、强化黑曜石粉、强化黑曜石锭全从它出来，锇莹黑合金的灌注路也走它。",
                          "做两台比来回换料省事——灌注液换一次要清管。"]),
    "591FF33BBB5E6A4D": ("红石灌进铜里", "灌注合金与基础电路",
                         ["铜锭灌红石是灌注合金，锇锭灌红石是基础电路。机器外壳塞合金，机器脑子里塞电路。",
                          "一次多灌几份：第一段三台、第二段的压缩机和合金都要吃这一批料。"]),
    "D100000000000001": ("矿翻倍的第一站", "第一段：只吃灌注合金",
                         ["做一个富集仓！磨好的矿粉进去，同种矿的粉出两份，是这条线上最便宜的倍增。",
                          "配方只要灌注合金、基础电路、铁锭和钢制机壳——一个锇都不要，早早就该有。",
                          "它的下游是通电冶炼炉：粉进炉子烧成锭，两段接起来才是完整的倍增。"]),
    "D100000000000002": ("用电烧，不吃煤", "第一段：富集仓的搭档",
                         ["做一个通电冶炼炉！活和熔炉一样，但烧得快，还能接在管道与料斗之间自己转。",
                          "富集仓出来的粉也只有它能一步烧成锭，两台摆在一起，矿石的倍增才算真跑起来。",
                          "它同样不碰锇：钢制机壳、灌注合金、基础电路、便宜玻璃，第一段就该有的东西。"]),
    "D100000000000003": ("锭也能磨成粉", "第一段：黑曜石粉从这儿来",
                         ["做一个粉碎机！富集仓磨矿，粉碎机磨锭、磨块、磨水晶——黑曜石粉就是它磨出来的。",
                          "合金的产线第一环落在它身上：没有黑曜石粉就没有强化黑曜石，后面全都走不动。",
                          "它只吃锭和块，矿石留给富集仓。"]),
    "4AC45BD5DE566B0C": ("把锇压成件", "第二段：从这里开始要锇",
                         ["做一个锇压缩机！锇锭进去，锇板与锇粉出来：强化黑曜石锭、锇荧锭都从它压出来。",
                          "配方要灌注合金、高级电路和一个桶，是第二段的第一台——做到这里，锇才真的开始不够用。",
                          "合金的两条路都长在它后面。"]),
    "E2A1000000000001": ("锇荧锭", "把光压进锇里",
                         ["荧石粉进锇压缩机，同时通进锇液（氧化机把锇锭化成气）：压出来就是锇荧锭。",
                          "断口发亮，所有强化荧石件都是它变的；下一格的锇莹黑合金、机壳链也都吃它。",
                          "锇从这一刻开始是硬通货：一锭锇换不出几块荧锭，省着用。"]),
    "E2A1000000000002": ("锇莹黑合金", "黑底，断口发荧",
                         ["进 EIO 合金炉：2 块锇荧锭加 1 块强化黑曜石锭，出来 6 块合金——一件锇荧锭换三件。",
                          "工作台那套 8 围 1 已经拆了（一件只换一件，锇吃不消），现在只有这条炉子路。",
                          "这块合金是两条科技共用的门：AE 五台主机和电解分离机都吃它。"]),
    "D100000000000004": ("三格进，六块出", "EIO 合金炉：合金的升级配方",
                         ["做一个 EIO 合金炉！它要钢、灌注合金与铁，摆出来之后就是合金线的产能核心。",
                          "三个格子：两格锇荧锭、一格强化黑曜石锭，一炉 6 块锇莹黑合金，耗 3200 RF。",
                          "往后 AE 五台、电解分离机都要它撑着——先把这台摆稳，再谈产量。"]),
    "D100000000000005": ("硅片夹金粉", "第三段：要电解核心",
                         ["做一个电解核心！硅片、红石合金锭与玄钢锭搭成极板，八倍电容放在上下，金粉铺里层。",
                          "这是 DJ2 那张电解核心的格子，只是把它的「红合金 + 八倍电容」换成本包 EIO 的同名件。",
                          "电解分离机没有它不成立，一次做两个：分离机要一个，后面的电解槽还要。"]),
    "D100000000000006": ("把水拆成两半", "第三段：电解核心 + 合金",
                         ["做一个电解分离机！水进去，氢与氧各走一路，这是通用机械后半段的氧气来源。",
                          "配方是电解核心、锇莹黑合金与铁锭——本章最后一段，前两段没落地就做不出来。",
                          "氧气接化学注入与冶炼，氢气接后面的发电与化工。"]),
    "147A66BD1949E30A": ("烧红一片铁", "热电直出",
                         ["做一台热力发电机！铁锭、锇锭、铜锭加一块熔炉：热量直接变电，不经过蒸汽。",
                          "前期它就是通用机械的插座，锇不贵的时候多做几台，别让机器等电。"]),
    "0BDB4E32ADB4A504": ("先把电送到该去的地方", "通用线缆",
                         ["钢锭裹着合金拉出来的线，一根过 5 kFE/t。",
                          "超了会热上来、烧断：看一眼机器台账，别把压缩机和分离机挂在同一根上。"]),
    "56EE1D8ACA1EF3C5": ("一块砖大的电池", "基础能量立方",
                         ["基础能量立方存 2 MFE，机器断电的那一阵靠它顶着。",
                          "后面还有进阶、精英、终极三档，都从这块起。"]),
    "599B38AABF39AFD3": ("一根过 20 kFE/t", "高级线缆",
                         ["合金外壳再裹一层，导线换粗。线缆只要合金与电路，机器不用换。"]),
    "4F29CA92AAE1AE91": ("一根过 80 kFE/t", "精英线缆",
                         ["再上一层：大部分机器同时开工时，瓶颈就不在电线上了。"]),
    "5F8B6DA26B621200": ("一根过 320 kFE/t", "终极线缆",
                         ["通用机械到顶的一档线。再往上要换超导，那是另一个时代的事。"]),
    "6EFDA02FD2F7D68C": ("存 8 MFE", "进阶能量立方",
                         ["基础立方的四倍。电解分离机、压缩机这种吃电大户靠它撑过用电高峰。"]),
    "4B07E60F980AB930": ("存 32 MFE", "精英能量立方",
                         ["再四倍。到了这一档，一台立方就能带住一整排机器的启停。"]),
    "43F8EA18EEE5CDCD": ("存 128 MFE", "终极能量立方",
                         ["本体的顶配储能。往后接的是聚变与裂变那套电网，这里就是它的缓冲。"]),
    "3D06F75481652692": ("灌注合金再灌一次", "强化合金",
                         ["灌注合金进灌注机，20 mB 钻石液压进去，就是强化合金。",
                          "原子合金与终极电路都等它。"]),
    "749621D809C7995E": ("再灌一次黑曜石", "原子合金",
                         ["强化合金灌 40 mB 强化黑曜石：原子合金，通用机械最贵的那一档零件，一份只有几块。"]),
    "415E14738BE3B48B": ("把石英充成水晶", "AE 的第一台",
                         ["做一个充能器！钢板立三列，塞两块充能赛特斯石英——这就是 DJ2 那台充能器的样子。",
                          "两件事：把赛特斯石英充成充能赛特斯石英（做福鲁伊克斯水晶用），以及给存储元件与便携终端补电。",
                          "AE 后面五台机器全绕着它转，先把它摆好。"]),
    "49CD2F84291610CC": ("水、石英、红石", "福鲁伊克斯水晶",
                         ["充能赛特斯石英、下界石英、红石粉丢进水里：福鲁伊克斯水晶。",
                          "AE 的每一块玻璃、每一根线、每一个处理器都从它开始，一次多泡几颗。"]),
    "5C5178DC16C37A0C": ("把电路压出来", "压印器",
                         ["做一个压印器！钢锭夹着粘性活塞，中间塞福鲁伊克斯水晶与充能赛特斯石英。",
                          "三样东西压在它下面：硅印刷片、印刷电路、名字印刷片。硅印刷片要晶圆，晶圆线在「电力时代」那一章。"]),
    "018AA31ED4D322D9": ("三个脑子", "处理器",
                         ["印刷硅片配红石、金锭、钻石各压一次：逻辑、运算、工程处理器。",
                          "逻辑管合成，运算管存储，工程管机械，三个合起来才是 AE 的脑子。"]),
    "60E6DBB858AD041A": ("网络从这里开始", "ME 控制器",
                         ["光滑陨石做框，福鲁伊克斯粉与水晶围着中间一块充能赛特斯石英。",
                          "控制器是 ME 网络的心脏：它按方块数分配频道，也决定这张网能长多大。"]),
    "118AF447A22EAB3B": ("并网的那一头", "能量接收器",
                         ["钢锭四角、福鲁伊克斯玻璃线缆围一圈、中心一块石英块：FE 从这里进网络，一格接收器过 5 kFE/t。"]),
    "3CAB66D5F17CA3F3": ("先有个仓库", "驱动器与存储元件",
                         ["做一个 ME 驱动器：钢板块四角、福鲁伊克斯粉、中心一台能源接收器。",
                          "驱动器是插槽，存储元件是仓库。一块 1k 元件存 1024 字节，够放几箱东西。",
                          "不够就往上做：4k、16k、64k、256k 在旁边的支线上。"]),
    "38E59F0A75D5FEBB": ("开一扇窗", "ME 终端",
                         ["驱动器里的东西，在终端里看得见、拿得出、放得进。网络有了终端才叫人能用。"]),
    "3A8A79B642BC2C15": ("在窗里合成", "合成终端",
                         ["合成终端把工作台搬进网络：配方要的东西网络里有，它自己取；做出来的东西自己回去。"]),
    "2E5CFA0A0916AA4C": ("让它自己动手", "样板与自动合成",
                         ["样板编码终端把配方写成样板，接口收样板，供应器把料推给机器。三件凑齐，网络才从仓库变成工厂。",
                          "再往后接导入总线与导出总线，进出也不再靠手。"]),
    "69073E45025D285F": ("最小的那一块", "存储元件 1k",
                         ["逻辑处理器、石英玻璃、红石：1k 元件。存储元件、合成存储、便携元件都吃它。"]),
    "76E6D1E7FEE60B6C": ("三份 1k", "存储元件 4k",
                         ["三个 1k 元件套一层：4k。往后每一档都是三份前一级，字节翻四倍。"]),
    "5BAF4E49B483B668": ("三份 4k", "存储元件 16k",
                         ["三个 4k 元件：16k。到这一档，一个元件就是一整面墙的箱子。"]),
    "4869FCEABEB4800E": ("三份 16k", "存储元件 64k",
                         ["三个 16k 元件：64k。合成存储元件与大容量便携元件都从这里切。"]),
    "44F6506A686E7FA4": ("本体到顶", "存储元件 256k",
                         ["三个 64k 元件：256k，AE2 本体最高的一档；再往上就要靠附属了。"]),
}


# FTB 在游戏里存过一次书，会把「它没见过的任务」换成自己生成的 id
# （AE_MEK_LINES §6 记过这件事）。所以布局按任务物品认任务，不认死 id：
# 表里的 id 只是期望值，认不出来时用物品反查。
# 游戏写回时 FTB 给这两格换过 id：按它换过的来，别把进度迁走
GAME_IDS = {
    "E2A1000000000001": "1B1A4055CB185CC1",  # 锇荧锭
    "E2A1000000000002": "6AA83E24326B084C",  # 锇莹黑合金
    "D100000000000001": "28BD6CAC160150A9",  # 富集仓
    "D100000000000002": "70C08FAB16CACA19",  # 通电冶炼炉
    "D100000000000003": "6F68FF804AA49632",  # 粉碎机
    "D100000000000004": "1EF29B6758D79363",  # EIO 合金炉
    "D100000000000005": "0033B45EFB572950",  # 电解核心
    "D100000000000006": "4780E38244A5885B",  # 电解分离机
}



def resolve_ids(blocks):
    """期望 id → 实际 id（按任务物品反查），返回 {期望: 实际} 与改名清单。"""
    by_item = {}
    for qid, b in blocks.items():
        for item in re.findall(r'item: \{ count: \d+, id: "([^"]+)" \}', b):
            by_item.setdefault(item, qid)
    alias = {}
    for want, item in ID_BY_ITEM.items():
        game_id = GAME_IDS.get(want)
        if game_id and (game_id in blocks or want in blocks):
            alias[want] = game_id
        elif want in blocks:
            alias[want] = want
        elif GAME_IDS.get(want) in blocks:
            alias[want] = GAME_IDS[want]
        elif item in by_item:
            alias[want] = by_item[item]
        else:
            alias[want] = want
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


def new_block(qid, dep, icon, shape, item, count, tid, ritem, rcount, rid):
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
    out.append("\t\t\ttasks: [{")
    if count > 1:
        out.append("\t\t\t\tcount: %dL" % count)
    out.append('\t\t\t\tid: "%s"' % tid)
    out.append('\t\t\t\titem: { count: 1, id: "%s" }' % item)
    out.append('\t\t\t\ttype: "item"')
    out.append("\t\t\t}]")
    out.append("\t\t\tx: 0.0d")
    out.append("\t\t\ty: 0.0d")
    out.append("\t\t}")
    return "\n".join(out)


def write_chapter():
    text = open(CH, encoding="utf-8").read().replace("\r\n", "\n")
    head, blocks, order, tail = read_blocks(text)

    canon = resolve_ids(blocks)
    for want, real in canon.items():
        if want in blocks and real != want:
            blocks[real] = blocks.pop(want)
            order[order.index(want)] = real
            print("  改用游戏写回的 id：%s → %s" % (want, real))

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


def write_lang():
    text = open(LANG, encoding="utf-8").read().replace("\r\n", "\n")
    head, blocks, order, tail = read_blocks(
        open(CH, encoding="utf-8").read().replace("\r\n", "\n"))
    canon = resolve_ids(blocks)

    for want, real in canon.items():
        if want == real:
            continue
        for field in ("quest_desc", "quest_subtitle", "title"):
            old = "\tquest.%s.%s:" % (want, field)
            if old in text and "\tquest.%s.%s:" % (real, field) not in text:
                text = text.replace(old, "\tquest.%s.%s:" % (real, field))

    added, lines = 0, []
    for want, (title, sub, desc) in TEXT.items():
        qid = canon.get(want, want)
        if "\tquest.%s.title: " % qid in text:
            continue
        lines.append('\tquest.%s.quest_desc: [' % qid)
        lines.extend('\t\t"%s"' % d for d in desc)
        lines.append("\t]")
        lines.append('\tquest.%s.quest_subtitle: "%s"' % (qid, sub))
        lines.append('\tquest.%s.title: "%s"' % (qid, title))
        added += 1
    if not lines:
        print("文案：无需补写")
    else:
        closed = text.rstrip()
        if not closed.endswith("}"):
            raise SystemExit("lang 结尾不是 }")
        text = closed[:-1].rstrip("\n") + "\n\n" + "\n".join(lines) + "\n}\n"
        print("文案：补写 %d 个任务的 title / subtitle / desc" % added)
    open(LANG, "w", encoding="utf-8", newline="\r\n").write(text)


if __name__ == "__main__":
    write_chapter()
    write_lang()
