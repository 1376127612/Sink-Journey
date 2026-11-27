# -*- coding: utf-8 -*-
"""
把「原始时代」「工业之始」「电力时代」三章重排成 一条直线的线性主线 + 若干条支线。

为什么只改依赖和坐标：
  任务 id 与 task id 都写进存档，换 id 等于清零玩家进度。
  这里按行改：只重写 dependencies / x / y，图标、奖励、任务、形状、以及
  章节头部的 group / order_index 全部原样保留；文字已完整的任务不动文案。

布局：
  主线 y = 0，从左往右一格 2.0；第 N 个只依赖第 N-1 个（第一个保留跨章依赖）。
  支线按 lanes 声明，y = lane * 4（负在下、正在上），根节点竖直挂在锚点上，
  再沿 dir 方向（1 右 / -1 左）铺开，一条支线内部也是单链。
  同一 lane 上两条支线不许撞在一起；跨两条带的支线用 x_offset 让开中间的格子，
  摆完跑 `python kubejs/tools/check_quests.py <章节>` 查依赖线穿格与相交。

文案：
  章节里出现过、但 zh_cn.snbt 里没有的任务（游戏内手动加过的那些），
  按 TEXT_RENAMES 从旧 id 的文案搬过来；旧 id 的重复键随即删除。
  电力时代整章文案（44 格）在下面的 ELECTRIC_TEXT 里，标题 / 副标题 / 三段正文
  与坐标一起生成，跑一遍就是一份；改完用 check_quest_text.py 验。

用法：
    python kubejs/tools/gen_linear_quest_tree.py

2026-11-27：「工业之始」的坐标、依赖与文案改由 gen_steam_quests.py 负责，
本脚本对那一章不再使用（清单留着只为查历史）。
"""
import os
import re

NL = "\n"
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

STEP_X = 2.0
LANE = 4.0


def branch(name, anchor, lane, quests, direction=1, x_offset=0.0):
    return dict(name=name, anchor=anchor, lane=lane, dir=direction,
                x_offset=x_offset, quests=quests)


CHAPTERS = [
    dict(
        file="3f5a7c2b9e1d4a60",
        title="原始时代",
        entry="5F132AD862CA787E",  # 机械动力章收尾
        main=[
            "7421786593C68B0E",  # 挤压部件
            "079D6EAF9A441826",  # 挤压原型机
            "055588A7FFB2D789",  # 铁板
            "7830616AA30B63CD",  # 粉碎球
            "49C6261827C7A7B3",  # 粉碎原型机
            "21DC1429D7B64A75",  # 干燥原型机
            "0A449D27D8734333",  # 原型泵
            "13B0197D7A36A72F",  # 熔炼炉（多方块，零件并在一格里）
            "4180DCBFB8DD7D48",  # 铸型模具
            "15E3CFD26FA821E0",  # 原始包线机
            "2C447CF0BBF40408",  # 铜锅炉
            "04775118903D8E3F",  # 原型流式腐蚀釜（本章出口）
        ],
        branches=[
            branch("手工轧机", "055588A7FFB2D789", -1,
                   ["73F4FB7D17278454"]),
            branch("第一份笔记", "7421786593C68B0E", -1,
                   ["5A1B000000000001"]),
            branch("碎矿", "49C6261827C7A7B3", -2,
                   ["3F5A0000000000C1"]),
        ],
    ),
    dict(
        file="5fe0048b1a2b6a65",
        title="工业之始",
        entry="04775118903D8E3F",  # 原始章「原型流式腐蚀釜」
        main=[
            "6BDDB3A36AADF646",  # 好用的合金
            "0706F92EF2C236B8",  # 蒸汽时代
            "2C027D8994527225",  # 蒸汽管道
            "4C2722480E36EC49",  # 蒸汽锅炉
            "0FEC076007556020",  # 蒸汽流体加热器
            "50FFF3DA2CF84C7F",  # 过热蒸汽
            "79789218839D6E7D",  # 蒸汽压力调节器
            "43D5726B73FFD4E3",  # 蒸汽锅炉（多方块）
            "15F9B4F39AC30284",  # 电动蒸汽发生器
            "35673E8862ECC966",  # 微型熔炉
            "5A1B000000000010",  # 高炉（多方块）
            "6FC90AA2AAA16C3F",  # 高炉出钢
            "39224A23A36F5D89",  # 强化铁砧
            "35B9A0B50B6D5A7C",  # 蒸汽轧机（本章出口）
        ],
        branches=[
            branch("蒸汽机台群", "79789218839D6E7D", -1, [
                "553DE08FF8207EFC",  # 蒸汽粉碎机
                "160B66057D2A2BC2",  # 蒸汽挤压机
                "3FFD6CD6131BB41E",  # 蒸汽切割机
                "39E580844A461AC5",  # 蒸汽挤出机
                "0C5D79478D494E93",  # 蒸汽提取机
                "268F9CB2F5488846",  # 蒸汽抛光机
                "19F5071BFF298275",  # 蒸汽乳胶提取机
            ]),
            branch("蒸汽输送与储能", "0706F92EF2C236B8", -2, [
                "22372738BD8CBD0F",  # 蒸汽包线机
                "34DB73A960C0D660",  # 蒸汽泵
                "3144BDD432A185BD",  # 蒸汽储存器
            ]),
            branch("蒸汽洗矿与采石", "15F9B4F39AC30284", -2, [
                "285AC19CE5FBC3ED",  # 蒸汽矿物分离器
                "57E4815EC1E82AC0",  # 蒸汽电解器
                "3EEBC200020CEC1A",  # 蒸汽采石机
            ]),
            branch("研究数据", "0706F92EF2C236B8", -1,
                   ["5A1B000000000005"], x_offset=2.0),
            branch("机械蓝图", "0706F92EF2C236B8", -1,
                   ["5A1B000000000002"], x_offset=4.0),
            branch("洗选", "285AC19CE5FBC3ED", -2,
                   ["5FE00000000000C1"], x_offset=6.0),
        ],
    ),
    dict(
        file="e1c0000000000000",
        title="电力时代",
        entry="35B9A0B50B6D5A7C",  # 蒸汽章「蒸汽轧机」
        main=[
            "6598E70D2B013335",  # 研究笔记·电力（时代入口）
            "47288C78398A483D",  # 电力机壳
            "7FBCB9C7839329EE",  # 高级 RE 电池（元件:发电机 的外圈，绕不过去）
            "5E50B081F63F8757",  # 元件:发电机
            "4A3C44501E2E4EBE",  # 发电机
            "649891A244FD0BF3",  # 电解器（水拆氢氧）
            "0C41A7B3D9E25710",  # 通用反应器
            "0C41A7B3D9E256F1",  # 石脑油加氢精制（固定床）
            "0C41A7B3D9E256F2",  # 石脑油蒸汽裂解（管式炉）
            "0C41A7B3D9E256F8",  # 化学反应釜（蒸汽）聚合
            "0C41A7B3D9E256F9",  # 物品输出总线（聚合物氧化出料）
            "0C41A7B3D9E256FA",  # 塑料
            "5A1B00000000A101",  # 光刻胶
            "5A1B00000000A102",  # g 线光刻机 Mk.I
            "5A1B00000000A107",  # 晶圆切割与分档（本章出口）
        ],
        branches=[
            branch("研究演算", "6598E70D2B013335", 1, [
                "5A1B000000000008",  # 绕组与线圈
                "5A1B000000000009",  # 电网调度
            ]),
            branch("元件升级", "7FBCB9C7839329EE", 1, [
                "5FA34533C1B9802F",  # 元件:能源
                "34E2B4C7D5914293",  # 元件:增强能量
            ]),
            branch("阳光化合物与 SE", "4A3C44501E2E4EBE", 1, [
                "56E66A5D88A8BE7E",  # 元件:SE
                "787BF4D3F587AFBA",  # 阳光化合物生成机
                "203117A926D8F616",  # 阳光化合物制造厂
                "24BB85BA4A497A2A",  # 阳光化合物
                "7C37F85FE343A710",  # SE 线
            ]),
            branch("投影物镜", "5A1B00000000A102", 1, [
                "5A1B00000000A106",  # 投影物镜
            ]),
            branch("铝", "5A1B00000000A107", 1, [
                "5A1B00000000B301",  # 氧化铝：拜耳法三段
                "5A1B00000000B302",  # 熔盐电解槽
                "5A1B00000000B303",  # 电解铝
            ]),
            branch("氯碱闭环", "5A1B00000000B302", 2, [
                "5A1B00000000B304",  # 镁与氯的闭环
            ], x_offset=4.0),
            branch("电动加工", "47288C78398A483D", -1, [
                "759CE071C62F7828",  # 电力干燥机
                "6E8B42AD1CFCD6E2",  # 水晶充能器（电力）
                "77AAA4247AD5F8FF",  # 锯木厂
            ]),
            branch("塔器放大", "0C41A7B3D9E25710", -1, [
                "0C41A7B3D9E25711",  # 通用塔器
                "0C41A7B3D9E25713",  # 大型塔器
            ]),
            branch("大型反应器", "0C41A7B3D9E25710", -1, [
                "0C41A7B3D9E25712",  # 大型通用反应器
            ], x_offset=8.0),
            branch("工业先锋", "47288C78398A483D", -2, [
                "03B4867738AD7EBF",  # 简陋机器框架（每台机器的壳）
                "5C741FDE56BF03F6",  # 流体提取机
                "5754619E9CA9D0F0",  # 乳胶处理单元
                "1A1FA26750C0224F",  # 溶解室
                "5FFCF7EAE6D167D4",  # 资源熔炉
            ], x_offset=12.0),
            # 选矿挂在 y = 8 而不贴着电解器往下：走 -8 那条会撞上工业先锋的斜线
            branch("选矿与电积", "649891A244FD0BF3", 2, [
                "5A1B00000000B201",  # 通用选矿机
                "5A1B00000000B202",  # 选别：一族一套药剂
                "5A1B00000000B203",  # 电解池：接上直流
                "5A1B00000000B204",  # 首块阴极铜
            ], x_offset=16.0),
        ],
    ),

]

# 游戏内手改出来的新 id 缺文案：把旧 id 下已有的文案搬过来
TEXT_RENAMES = {
    "73F4FB7D17278454": "E1E1000000000001",  # 手工轧机
    "7FBCB9C7839329EE": "E1D1000000000002",  # 高级 RE 电池
    "5FA34533C1B9802F": "E1D1000000000003",  # 元件:能源
    "34E2B4C7D5914293": "E1D1000000000004",  # 元件:增强能量
    "384447519B8692CC": "E1D1000000000005",  # 存储元件 1k
    "1C8365FED8F3CDD7": "E1D1000000000006",  # 样板编码终端
    "5985E9F5ED7AD07D": "E1D1000000000007",  # 导入总线
    "13C9FF48FDE9B092": "E1D1000000000008",  # 导出总线
    "5FFCF7EAE6D167D4": "E1D1000000000009",  # 资源熔炉
}

# 生成器早期版本留下的 id 段：文案已并在正式 id 下，这些键是死键
STALE_PREFIXES = ("E1A0", "E1B0", "E1D1", "E1E1")

# 多方块结构：零件拆成四五格只是建造清单，不是工序，全部并进同一格。
# 一格 = 一台机器 / 一道工序，主线读起来才是产线图。
MULTIBLOCKS = {
    "3f5a7c2b9e1d4a60": [
        dict(
            keep="13B0197D7A36A72F",
            absorb=["6CF34942F438033D",  # 熔炼砖
                    "13A2604227513CA1",  # 熔炼炉体
                    "6BE74B67D1F9D1C3",  # 熔炼炉炉缸
                    "44D17A7248C73706"],  # 熔炼炉控制器
            icon="industrialupgrade:smeltery/smeltery_controller",
            # (物品, 数量, task id)——task id 沿用原来的，老存档的完成度才连得上
            tasks=[("industrialupgrade:smeltery/smeltery_fuel_tank", 1, "462B2D895B66F259"),
                   ("industrialupgrade:smeltery/smeltery_furnace", 1, "44A99C457585A49F"),
                   ("industrialupgrade:smeltery/smeltery_casting", 1, "43CB3E4DB3D4E531"),
                   ("industrialupgrade:crafting_elements/crafting_772_element", 16, "7F9DCCE78C32634F"),
                   ("industrialupgrade:smeltery/smeltery_casing", 1, "4BEB72C8016464BF"),
                   ("industrialupgrade:smeltery/smeltery_tank", 1, "7F53323BE2818396"),
                   ("industrialupgrade:smeltery/smeltery_controller", 1, "27491055559E30D7")],
            reward=("industrialupgrade:itemingots/copper_ingot", 16, "0201FA998C3BF2B4"),
        ),
    ],
}

TEXT_APPEND = {
    # 支线入口补一句：这条线往后接什么、为什么不卡主线（照本包行文，不写列表）
    # 电力时代整章文案在 ELECTRIC_TEXT 里，这里只留原始章与蒸汽章
    "553DE08FF8207EFC": "蒸汽加工线的头一道。后面挤压、切割、挤出、提取、抛光、乳胶依次接手，一条线排下来板、杆、胶都不缺；机器都要压力，主线却不从这里过。",
    "22372738BD8CBD0F": "这条线上三台机器各管一样：它出绝缘线，泵把液体送到该去的地方，储存器替机器扛住压力。都不必经，缺了就自己跑腿。",
    "285AC19CE5FBC3ED": "矿处理线的第一道，往后还有电解器和采石机。原料侧的活蒸汽就够用，电力时代来了整条换掉——那已经不关它的事。",
}

# 我这一轮写进去的旧句子：重写时认出来删掉，作者自己写的正文一个字不碰
LEGACY_APPENDS = (
    "产线定位：",
    "挤压原型机堵料的时候它就是救急的那台：手摇轧辊把锭和板再过一遍。原始时代的板材就这两条腿，主线走挤压，这条在旁边等着。",
    "蒸汽加工线的头一道。后面挤压、切割、挤出、提取、抛光、乳胶依次接手，一条线排下去板材、杆件、橡胶都不缺；机器都吃压力，主线却不从这里过。",
    "蒸汽输送线的开头，后面是泵和储存器，把锅炉里的蒸汽一路送到机台。这条线断了机器照样转，只是你得自己拎着桶跑。",
    "矿处理线的第一道，往后还有电解器和采石机。原料侧的活蒸汽就够用，电力时代来了整条换掉——那已经不关它的事。",
    "电动加工线的起点。干燥、乳胶提取、锯木、电解、无线供能排成一串，全是蒸汽机台的电动版，通了电就不用再烧蒸汽；主线不从这里走。",
    "电力元件线从这块电池开始，往上还有元件:能源和元件:增强能量。所有电力机器的底料都在这条线上，主线只要求你做得出一块机壳。",
    "AE 存储线的开头，后面是存储元件、驱动器、终端和合成终端。网络得先能存东西，主线到 ME 控制器就可以先停在那儿。",
    "AE 自动化线从这一对开始，后面接样板编码终端和进出总线。它长在存储线的尾巴上，接上以后网络才从仓库变成工厂。",
    "工业先锋线的第一台，往后是简陋框架、乳胶处理、流体提取、溶解室、资源熔炉。这条路吃 FE 不吃 IU 的电，塑料和高级框架都从它身上来。",
)


def apply_appends(entries, nl):
    """给支线入口补一句产线说明；旧版「产线定位：」行顺手换掉，已经是新文案就跳过。"""
    added = 0
    for entry in entries:
        m = LANG_KEY.match(entry[0])
        if not m or ".quest_desc:" not in entry[0]:
            continue
        line = TEXT_APPEND.get(m.group(1))
        strings = re.findall(r'"([^"]*)"', "".join(entry))
        kept = []
        for s in strings:
            if any(s.startswith(p) or s == p for p in LEGACY_APPENDS):
                continue
            if s not in kept:
                kept.append(s)
        if line and line not in kept:
            kept.append(line)
        if kept == strings:
            continue
        entry[:] = (['\tquest.%s.quest_desc: [%s' % (m.group(1), nl)]
                    + ['\t\t"%s"%s' % (s, nl) for s in kept]
                    + ['\t]' + nl])
        added += 1
    return added


TEXT_OVERRIDES = {
    "6E8B42AD1CFCD6E2": dict(
        title="水晶充能器（电力）",
        sub="充能也换成电的",
        desc=[
            "蒸汽档那台水晶充能器一次只喂一颗，换到电力档之后快得多：赛特斯石英进去，充能赛特斯石英出来。",
            "AE 的福鲁伊克斯水晶全靠它供料；不着急就先用蒸汽那台顶着，主线不从这里走。",
        ],
    ),
    "5E50B081F63F8757": dict(
        title="元件:发电机",
        sub="发电机的心脏",
        desc=[
            "元件模板、钢板、铁板，外面套一圈高级 RE 电池：元件:11 就是发电机的心脏。",
            "做它之前先把旁边的电池线走通——高级 RE 电池、元件:能源、元件:增强能量，"
            "越往上能量等级越高，后面每一台电力机器都吃这一串。",
        ],
    ),
    "13B0197D7A36A72F": dict(
        title="熔炼炉（多方块）",
        sub="一炉水，一间屋子",
        desc=[
            "熔炼砖、炉体、炉缸、控制器、燃料箱，五样凑齐才立得起来：砖少了围不出立面，"
            "炉缸漏了烧化的金属全洒在地上，右键控制器点火，这间屋子才算开工。",
            "锭、方块、矿石丢进去化开，液体在炉里混，倒进浇注块配模具成型。"
            "粉碎线磨的粉、矿洞里挖的矿、原型机压好的锭都从这一炉里过一遍——钢除外，那是蒸汽时代末尾的事了。",
        ],
    ),
}

# ---------------------------------------------------------------- 电力时代文案

def cell(title, sub, *desc):
    return dict(title=title, sub=sub, desc=list(desc))


# 全章 44 格（主线 15 + 支线 29）的标题、副标题与三段正文一次写全。
# 为什么放进来：这一章的文字改过三轮，散在 lang 里已与结构对不上；
# 放进来以后标题 / 副标题 / 正文与坐标一起生成，跑一遍就是一份。
ELECTRIC_TEXT = {
    # ---- 主线：电 → 石化 → 塑料 → 光刻 → 分档
    "6598E70D2B013335": cell("研究笔记·电力", "电流的第一份证词",
        "机器：机械研究台（3×3×3，吃旋转应力）",
        "材料：晶圆 ×4、演算数据 ×8、纸 ×1。产出研究笔记·电力 ×1。",
        "耗时 60 秒，持续应力 32 @ 32RPM。拿到就解锁 era.electric。通用机械与 AE2 本体一起可用。"),
    "47288C78398A483D": cell("电力机壳", "又是套娃",
        "2 张青铜板加 2 张铁板，出一张电镀外壳 137。",
        "四张 137 拼成一台机身，就是电力机壳。",
        "后面每台机台的外框都用它，先攒一批。"),
    "7FBCB9C7839329EE": cell("高级 RE 电池", "用来存电",
        "最基础的一块电池，存不了多少电。",
        "元件:发电机 的外圈整圈都是它，这一步绕不过。",
        "再往上两级是元件:能源、元件:增强能量，走支线。"),
    "5E50B081F63F8757": cell("元件:发电机", "发电机的心脏",
        "元件模板、钢板、铁板，外圈套满高级 RE 电池。",
        "电池就在前一格，料齐了直接合成。",
        "这块元件塞进机壳，下一格才有整台发电机。"),
    "4A3C44501E2E4EBE": cell("发电机", "终于有电了",
        "最原始的一台发电机，不再靠蒸汽推动。",
        "从这格起机台吃电，等压力的日子过去了。",
        "下一格电解器要它供电，水才拆得开。"),
    "649891A244FD0BF3": cell("电解器", "把水拆开",
        "蒸汽电解器换成电动的这台。它只拆流体与气体。",
        "水出氢氧，氟化氢出氢氟，溴化氢出氢溴。",
        "金属的电积与精炼不归它，走支线的电解池。"),
    "0C41A7B3D9E25710": cell("通用反应器", "一台机器三种反应器",
        "一台机器三个工艺池，控制器里有页面切换。",
        "气固固定床跑重整、变换、SO2 氧化、氨氧化。流化床跑氯化与冷氢化，高压合成跑甲醇与氨。",
        "换池只换催化剂槽里的合金块。气压走气动接口：氯化 3 bar，甲醇与氨 20 bar。"),
    "0C41A7B3D9E256F1": cell("石脑油加氢精制（固定床）", "石脑油脱硫",
        "石脑油 8000 加氢 240，出精制石脑油 7850。",
        "硫化氢 100 同时出。酸质原油加倍耗氢。",
        "挂气固固定床池，北墙气压 2 bar 起，催化剂槽放钢块。"),
    "0C41A7B3D9E256F2": cell("石脑油蒸汽裂解（管式炉）", "石脑油裂解",
        "精制石脑油 8000 加过热蒸汽 4000。出乙烯 1920。",
        "丙烯 1120、丁烯 720 一起出。裂解汽油 1600、甲烷 2400 也归它。",
        "切管式裂解池，炉管槽换合金块提乙烯。石油焦占物品位，堆满停机。"),
    "0C41A7B3D9E256F8": cell("化学反应釜（蒸汽）", "乙烯与丙烯聚合",
        "乙烯 400 进聚乙烯 200，丙烯 400 进聚丙烯 200。",
        "聚合与固化都在这台釜里跑。IU 的聚合器与固化釜已经整池封禁。",
        "蒸汽档 3×3×4，钢壳加蒸汽仓。蒸汽从前一章的锅炉来。"),
    "0C41A7B3D9E256F9": cell("物品输出总线", "氧化出料的接口",
        "聚合物液体 250 加氧 100，出固体 1。",
        "产物是物品，出料得走物品口。釜的 y2 西墙挂一条物品输出总线。",
        "聚乙烯、聚丙烯各走一次，固体送去合成塑料。"),
    "0C41A7B3D9E256FA": cell("塑料", "电力时代的关键材料",
        "聚乙烯 1 加聚丙烯 1 加水 1000，出塑料 1。",
        "塑料进塑型机出塑料板，下一格的光刻胶就吃它。",
        "蒸馏塔、催化裂化、重整那一长串，是后面时代的事。"),
    "5A1B00000000A101": cell("光刻胶", "涂胶与显影",
        "1 塑料加 1 红石粉，出光刻胶 2。",
        "现实里是酚醛树脂加重氮萘醌感光剂。",
        "显影吃氢氧化钠溶液，每片 250 mB。光刻机上要留一个流体仓接它。"),
    "5A1B00000000A102": cell("g 线光刻机 Mk.I", "436 nm，从 1.5 µm 起步",
        "汞灯 g 线 436 nm，NA 0.28。单次极限约 700 nm。",
        "这台只接 M1 1.5µm 与 M2 800nm 两片掩模。",
        "结构 3×3×3。北墙中层放能量仓。上一层北墙进显影液，南面中层出料。物镜要透 436 nm。"),
    "5A1B00000000A107": cell("晶圆切割与分档", "曝光之后才有裸片",
        "曝光完的晶圆进切割机，配一张测试规格单。",
        "按 i3、i5、i7、i9 分档出裸片。晶圆越纯、规格越松，片出得越多。",
        "切割机与四台光刻机同一套结构。裸片是下一章「科技先锋」的料。"),

    # ---- 支线：元件升级
    "5FA34533C1B9802F": cell("元件:能源", "你需要它",
        "四块高级 RE 电池裹住线圈，中间压一枚元件模板。",
        "电动机、电力储存、能量元件都要它。",
        "主线只要求元件:发电机，这一格是升级用的底料。"),
    "34E2B4C7D5914293": cell("元件:增强能量", "往上抬一档",
        "RE 电池配元件模板，就是增强能量元件。",
        "它把机器的电等级往上抬一格。",
        "后面的高级机台离不开，迟早要回来做。"),

    # ---- 支线：阳光化合物与 SE
    "56E66A5D88A8BE7E": cell("元件:SE", "阳光能量的触头",
        "元件模板、钢板、镍板、银板、青铜板。",
        "原来的复合金属板、碳板、钍都换成本时代金属。",
        "生成机、制造厂、SE 线都从这一件起。本时代只做储备。"),
    "787BF4D3F587AFBA": cell("阳光化合物生成机", "露天攒 SE",
        "头顶露天、白天累积，满 6500 SE 吐一枚碎片。",
        "碎片是阳光化合物的原料，也是本时代唯一的 SE 储备。",
        "这台是 SE 线的第一台，后面还有制造厂与导管。"),
    "203117A926D8F616": cell("阳光化合物制造厂", "碎片压成化合物",
        "生成机送 SE，工厂吃碎片。",
        "机身是钢板与镍板，不经阳光化合物板制造厂。",
        "碎片进这台，压成阳光化合物。下一格记着这块料的用量。"),
    "24BB85BA4A497A2A": cell("阳光化合物", "一块凝固的太阳",
        "碎片 4 加荧石粉、石英、镍锭，出一块。",
        "镍换掉了原来的钨锭，钨这个时代还拿不到。",
        "两条导管要两份，先攒着。"),
    "7C37F85FE343A710": cell("SE 线", "把 SE 送上电网",
        "阳光化合物 2 加铜导线与橡胶 2，出导管 8 条。",
        "流体分离器这类吃 SE 的机器都等这条线。",
        "它排在支线收尾，主线不看它。"),

    # ---- 支线：电动加工
    "759CE071C62F7828": cell("电力干燥机", "蒸汽的电动版",
        "蒸汽乳胶线换成电动驱动，就从这台干燥机起。",
        "干燥、充能、锯木三台都吃 FE，不用再烧蒸汽。",
        "主线不从这里走，缺了不缺活。"),
    "6E8B42AD1CFCD6E2": cell("水晶充能器（电力）", "充能也换成电的",
        "蒸汽那台一次只喂一颗，电力档快得多。",
        "赛特斯石英进去，充能赛特斯石英出来。",
        "AE 的福鲁伊克斯水晶全靠它供料。不着急就先用蒸汽那台顶着。"),
    "77AAA4247AD5F8FF": cell("锯木厂", "把树变成车间",
        "原木进去，木板、木棍、木销分开出。",
        "建筑与机台外壳的木料都靠它，省得手工锯。",
        "它排在电动加工线最后一格，主线不经过。"),

    # ---- 支线：工业先锋
    "03B4867738AD7EBF": cell("简陋机器框架", "工业先锋的入场券",
        "四角钢板，中心一台 IU 机身，四条边是原木。",
        "工业先锋每台机器都要它做壳，所以它排在支线最前。",
        "后面流体提取、乳胶处理、溶解室、资源熔炉依次接上。"),
    "5C741FDE56BF03F6": cell("流体提取机", "从原木里挤汁",
        "原木贴着机器就能抽出乳胶。",
        "它和乳胶处理单元是一对，缺一台橡胶线就不转。",
        "框架在前一格，材料齐了直接造。"),
    "5754619E9CA9D0F0": cell("乳胶处理单元", "橡胶变塑料",
        "割胶碗收来的乳胶在这里聚成干胶。",
        "干胶烧一遍就是塑料，高级机器框架离不开。",
        "溶解室要的塑料从这一格来。"),
    "1A1FA26750C0224F": cell("溶解室", "往液体里配东西",
        "塑料、框架、齿轮、桶泡在乳胶里溶一遍。",
        "出来就是高一级的机器框架，工业先锋从这里往上走。",
        "资源熔炉在最后一格，外壳也要塑料。"),
    "5FFCF7EAE6D167D4": cell("资源熔炉", "一台炉子当三台用",
        "三个输入槽并行烧，塑料外壳包着金齿轮。",
        "前面那条橡胶线出的塑料，这格的外壳就用上了。",
        "支线到这儿收尾，主线一格都不经过。"),

    # ---- 支线：研究演算
    "5A1B000000000008": cell("绕组与线圈", "研究站的第一份数据",
        "机器：溯洄研究站（3×3×3，接入研究网络）",
        "材料：电子管 ×8、晶圆 ×4、演算数据 ×8。能量 6000 FE，算力 3。",
        "耗时 45 秒，产出演算数据 ×12。跑通一次就够，这条线可以反复跑。"),
    "5A1B000000000009": cell("电网调度", "算力 4 的门槛",
        "机器：溯洄研究站（3×3×3，接入研究网络）",
        "材料：钢板 ×8、精密构件 ×2、演算数据 ×12。能量 12000 FE。",
        "算力 4 要一台精英计算机，或三台基础计算机。产出演算数据 ×16。"),

    # ---- 支线：塔器放大 / 大型反应器
    "0C41A7B3D9E25711": cell("通用塔器", "吸收塔与催化精馏塔",
        "气体塔底进、液体塔顶进，塔底出釜液、塔顶出尾气。",
        "气液吸收池跑 SO3、硝酸与 HCl 吸收。反应精馏池跑三氯硅烷歧化。",
        "塔板槽定吸收精度：钢、不锈钢、因科镍、钛。树脂槽只对精馏生效。"),
    "0C41A7B3D9E25713": cell("大型塔器", "双段塔板",
        "三档塔板：因科镍 5×5×9、钛 5×5×10。最高一档钴铬 5×5×11。",
        "并行 3 到 6，仓随档换。两个塔板槽分上下两段。",
        "一段吸收一段精馏，可以在同一台塔里接起来。两个槽放同一等级。"),
    "0C41A7B3D9E25712": cell("大型通用反应器", "一条放大三档",
        "三档机身：不锈钢 5×5×7、钛 5×5×8。最高一档钴铬 5×5×9。",
        "并行 8 到 12，仓跟着档位换。四个工艺池与标准机型共用。",
        "4 路流体进、5 路流体出、2 个物品口。裂解的五股馏分各占一口。"),

    # ---- 支线：投影物镜
    "5A1B00000000A106": cell("投影物镜", "能透哪段波长，就配哪台机",
        "O1 紫外玻璃只到 436 nm，O2 熔石英到 240 nm。",
        "O3 氟化钙到 150 nm，O4 浸没镜组只配 ArF。",
        "物镜装进机器不消耗，换波长才换镜组。"),

    # ---- 支线：选矿与电积
    "5A1B00000000B201": cell("通用选矿机", "R3 · 3.0 锭/矿",
        "磨、洗、选三段装进一台，3×3×4 的架子。",
        "中间一个磨机槽、一个选别槽，接上能量仓就转。",
        "基础档并行 2。七个页签、二十九种矿一种不落。矿从正面物品仓进，尾矿浆从流体口抽走。"),
    "5A1B00000000B202": cell("选别：一族一套药剂", "R3 · 代价：黄药与 2 bar 充气",
        "净碎矿两进三出，一份矿石变三份粉。",
        "硫化矿走浮选，要黄药捕收，靠气泡把矿粒托上来。",
        "氧化矿走磁选，不要介质。难熔矿走重选，靠比重差。黄药在釜里几秒钟出一批。"),
    "5A1B00000000B203": cell("电解池：接上直流", "R5 · 4.4 锭/矿",
        "粉加硫酸在釜里浸出，得硫酸盐液，再送进这台池子。",
        "通上直流，金属就长在阴极上。",
        "底层铺阴极、顶层铺阳极、两室之间铺隔膜。裸池 4,950 FE/锭。换满电极与隔膜 2,300 FE/锭。"),
    "5A1B00000000B204": cell("首块阴极铜", "R5 · 副产阳极泥",
        "第一块阴极铜下来，槽底留着一层黑泥。",
        "阳极里不溶的东西全缩进泥里。金、银、硒、铂族一样不落。",
        "别扔。铂族与硒只有这一路进料，科技先锋那一章会捡起来。"),

    # ---- 支线：铝 / 氯碱闭环
    "5A1B00000000B301": cell("氧化铝：拜耳法三段", "铝的入口 · 先有氧化铝",
        "铝土矿用烧碱在釜里溶出，得偏铝酸钠液。",
        "降温加晶种析出氢氧化铝，再焙烧成氧化铝。",
        "三步走完还没有铝，只是有了能电解的料。整流先上硒堆。硅整流器反而要等铝板。"),
    "5A1B00000000B302": cell("熔盐电解槽", "4.2 V × 200 kA",
        "氧化铝溶在冰晶石里，九百多度，通几十万安培直流。",
        "铝积在阴极上。这是霍尔-埃鲁法，一百多年了还是最便宜的那条路。",
        "核电的电解池装不了熔盐料，所以它留在本包的熔盐槽。石墨阳极与内衬要换。"),
    "5A1B00000000B303": cell("电解铝", "25,200 FE/锭",
        "第一块铝锭的意义不在铝，在电。",
        "一块锭背后是两万五千 FE，整章都在为这种交易铺路。",
        "母线、机壳、电缆不必再抢铜。L2 的 MFE 母排和一阶火箭都等这块铝。铬、钙、锶、钡的铝热法也靠它。"),
    "5A1B00000000B304": cell("镁与氯的闭环", "6 V 槽 · 副产氯",
        "氯化镁在熔盐里电解，阴极出镁，阳极出氯。",
        "氯不能排，接回盐酸吸收塔。它是三氯氢硅与四氯化钛的料。",
        "镁有两条路：电解纯度高、电费高。皮江法省三倍电、产率低一截。"),
}

TEXT_OVERRIDES.update(ELECTRIC_TEXT)


# ---------------------------------------------------------------- 章节读写

def read_lines(path):
    with open(path, encoding="utf-8", newline="") as f:
        return f.read().splitlines(keepends=True)


def split_chapter(path):
    lines = read_lines(path)
    start = next(i for i, l in enumerate(lines) if l.rstrip("\r\n") == "\tquests: [")
    blocks, order = {}, []
    i = start + 1
    while i < len(lines):
        if lines[i].rstrip("\r\n") != "\t\t{":
            break
        j = i
        while lines[j].rstrip("\r\n") != "\t\t}":
            j += 1
        block = lines[i:j + 1]
        qid = re.search(r'\n\t\t\tid: "([0-9A-F]{16})"', "".join(block)).group(1)
        blocks[qid] = block
        order.append(qid)
        i = j + 1
    return lines, start, blocks, order, i


def ending(line):
    return "\r\n" if line.endswith("\r\n") else "\n"


def set_field(block, field, value, after=None):
    """就地改一行字段；字段不存在时插到 after 字段之后（或副本开头）。

    字段写成多行列表（dependencies 常常如此）时整段换掉：
    只替换第一行会把旧列表的尾巴留在原地。
    """
    pat = re.compile(r"^\t\t\t%s: (.*?)(\r?\n)$" % field)
    for idx, line in enumerate(block):
        m = pat.match(line)
        if m:
            if line.rstrip().endswith("["):
                open_at, close_at = field_span(block, field)
                block[open_at:close_at + 1] = [
                    "\t\t\t%s: %s%s" % (field, value, ending(line))]
            else:
                block[idx] = "\t\t\t%s: %s%s" % (field, value, m.group(2))
            return
    if after is None:
        block.insert(1, "\t\t\t%s: %s%s" % (field, value, ending(block[-1])))
        return
    for idx, line in enumerate(block):
        if re.match(r"^\t\t\t%s: " % after, line):
            block.insert(idx + 1, "\t\t\t%s: %s%s" % (field, value, ending(line)))
            return
    raise SystemExit("找不到插入 %s 的位置" % field)


def drop_field(block, field):
    block[:] = [l for l in block if not re.match(r"^\t\t\t%s: " % field, l)]


# ---------------------------------------------------------------- 多方块合并

def field_span(block, field):
    """字段 `\\t\\t\\t<field>: [` 的行区间，按括号深度找配对（兼容写在单行里的写法）。"""
    open_at = next(i for i, l in enumerate(block)
                   if re.match(r"^\t\t\t%s: \[" % field, l))
    depth = 0
    for i in range(open_at, len(block)):
        depth += block[i].count("[") - block[i].count("]")
        if depth == 0:
            return open_at, i
    raise SystemExit("%s 没有闭合" % field)


ENTRY = re.compile(r'\{\s*(?:count: (\d+)L\s*)?id: "([0-9A-F]{16})"\s*'
                   r'item: \{ count: \d+, id: "([^"]+)" \}\s*type: "item"\s*\}', re.S)


def read_tasks(block):
    open_at, close_at = field_span(block, "tasks")
    body = "".join(block[open_at:close_at + 1])
    return [(m.group(3), int(m.group(1)) if m.group(1) else 1, m.group(2))
            for m in ENTRY.finditer(body)]


def write_tasks(block, tasks, nl):
    open_at, close_at = field_span(block, "tasks")
    out = ["\t\t\ttasks: [" + nl]
    for item, count, tid in tasks:
        out.append("\t\t\t\t{" + nl)
        if count > 1:
            out.append("\t\t\t\t\tcount: %dL%s" % (count, nl))
        out.append('\t\t\t\t\tid: "%s"%s' % (tid, nl))
        out.append('\t\t\t\t\titem: { count: 1, id: "%s" }%s' % (item, nl))
        out.append('\t\t\t\t\ttype: "item"%s' % nl)
        out.append("\t\t\t\t}" + nl)
    out.append("\t\t\t]" + nl)
    block[open_at:close_at + 1] = out


def write_reward(block, item, count, rid, nl):
    open_at, close_at = field_span(block, "rewards")
    block[open_at:close_at + 1] = [
        "\t\t\trewards: [{" + nl,
        "\t\t\t\tcount: %d%s" % (count, nl),
        '\t\t\t\tid: "%s"%s' % (rid, nl),
        "\t\t\t\titem: {" + nl,
        "\t\t\t\t\tcount: 1%s" % nl,
        '\t\t\t\t\tid: "%s"%s' % (item, nl),
        "\t\t\t\t}" + nl,
        '\t\t\t\ttype: "item"%s' % nl,
        "\t\t\t}]" + nl,
    ]


def merge_multiblocks(ch, blocks, order):
    """把多方块的零件任务并进同一个任务：任务保留下来那个 id 的进度，其余四格删掉。"""
    for spec in MULTIBLOCKS.get(ch["file"], []):
        keep = spec["keep"]
        if keep not in blocks:
            continue
        block = blocks[keep]
        nl = ending(block[0])
        tasks = read_tasks(block)
        for item, count, tid in spec["tasks"]:
            tasks = [t for t in tasks if t[0] != item]
            tasks.append((item, count, tid))
        write_tasks(block, tasks, nl)
        if spec.get("reward"):
            write_reward(block, *spec["reward"], nl)
        if spec.get("icon"):
            body = "".join(block)
            body = re.sub(r'(icon: \{' + r'\r?\n\t\t\t\tid: ")[^"]+(")',
                          r'\g<1>%s\g<2>' % spec["icon"], body, count=1)
            block[:] = body.splitlines(keepends=True)
        for qid in spec["absorb"]:
            blocks.pop(qid, None)
            if qid in order:
                order.remove(qid)
        print("  合并多方块：%s 吃掉 %d 格" % (keep, len(spec["absorb"])))


def write_chapter(path, lines, start, blocks, new_order, after_last):
    out = lines[:start + 1]
    for qid in new_order:
        out.extend(blocks[qid])
    out.extend(lines[after_last:])
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write("".join(out))


# ---------------------------------------------------------------- 布局

def build_layout(ch):
    layout, deps = {}, {}

    prev = None
    for i, qid in enumerate(ch["main"]):
        layout[qid] = (i * STEP_X, 0.0)
        deps[qid] = [prev] if prev else [ch["entry"]]
        prev = qid

    used = {}
    for qid, (x, y) in layout.items():
        used[(x, y)] = qid

    for br in ch["branches"]:
        ax, ay = layout[br["anchor"]]
        y = br["lane"] * LANE
        anchor = br["anchor"]
        for i, qid in enumerate(br["quests"]):
            x = ax + br["x_offset"] + br["dir"] * i * STEP_X
            if (x, y) in used:
                raise SystemExit("%s: %s 与 %s 撞在 (%.1f, %.1f)"
                                 % (ch["title"], qid, used[(x, y)], x, y))
            used[(x, y)] = qid
            layout[qid] = (x, y)
            deps[qid] = [anchor]
            anchor = qid
    for qid, extra in ch.get("extra_deps", {}).items():
        deps[qid] = list(extra)
    return layout, deps


def layout_fits(layout):
    xs = [x for x, _ in layout.values()]
    ys = [y for _, y in layout.values()]
    return max(xs), min(ys), max(ys)


# ---------------------------------------------------------------- 主流程

def main():
    for ch in CHAPTERS:
        path = os.path.join(CH_DIR, ch["file"] + ".snbt")
        lines, start, blocks, order, after_last = split_chapter(path)
        merge_multiblocks(ch, blocks, order)
        known = set(blocks)
        listed = ch["main"] + [q for br in ch["branches"] for q in br["quests"]]
        unknown = [q for q in listed if q not in known]
        unlisted = [q for q in order if q not in listed]
        if unknown or unlisted:
            raise SystemExit("%s: 认不出 %s / 漏排 %s"
                             % (ch["title"], unknown, unlisted))
        if len(set(listed)) != len(listed):
            raise SystemExit("%s: 有任务被排了两次" % ch["title"])

        layout, deps = build_layout(ch)
        for qid, (x, y) in layout.items():
            block = blocks[qid]
            set_field(block, "dependencies",
                      "[%s]" % ", ".join('"%s"' % d for d in deps[qid]),
                      after=None)
            set_field(block, "x", "%.1fd" % x, after="tasks")
            set_field(block, "y", "%.1fd" % y, after="x")

        write_chapter(path, lines, start, blocks, listed, after_last)
        width, ymin, ymax = layout_fits(layout)
        print("%s：主线 %d + 支线 %s = %d 个任务，宽 %.1f，y %.1f..%.1f"
              % (ch["title"], len(ch["main"]),
                 " + ".join(str(len(br["quests"])) for br in ch["branches"]),
                 len(listed), width, ymin, ymax))
        for br in ch["branches"]:
            print("    %-12s 挂在 %s，y = %.0f，%d 步"
                  % (br["name"], br["anchor"], br["lane"] * LANE, len(br["quests"])))

    fix_lang()


LANG_KEY = re.compile(r"^\tquest\.([0-9A-F]{16})\.")
CONTINUATION = re.compile(r"^\t\t")


def lang_entries(lines):
    """把 lang 切成一条条：单行 `key: "..."`，或者 `key: [` 加若干续行加 `\t]`。"""
    entries, i = [], 0
    while i < len(lines):
        entry = [lines[i]]
        if LANG_KEY.match(lines[i]) and lines[i].rstrip().endswith("["):
            i += 1
            while lines[i].rstrip("\r\n") != "\t]":
                entry.append(lines[i])
                i += 1
            entry.append(lines[i])
        entries.append(entry)
        i += 1
    return entries


def override_lines(qid, text, nl):
    out = ['\tquest.%s.title: "%s"%s' % (qid, text["title"], nl)]
    if text.get("sub"):
        out.append('\tquest.%s.quest_subtitle: "%s"%s' % (qid, text["sub"], nl))
    lines = text.get("desc") or []
    if len(lines) == 1:
        out.append('\tquest.%s.quest_desc: ["%s"]%s' % (qid, lines[0], nl))
    elif lines:
        out.append("\tquest.%s.quest_desc: [%s" % (qid, nl))
        out.extend('\t\t"%s"%s' % (d, nl) for d in lines)
        out.append("\t]%s" % nl)
    return out


def fix_lang():
    lines = read_lines(LANG)
    live = set()
    for f in os.listdir(CH_DIR):
        live |= set(re.findall(r'\n\t\t\tid: "([0-9A-F]{16})"',
                               open(os.path.join(CH_DIR, f), encoding="utf-8").read()))

    merged = {qid for specs in MULTIBLOCKS.values() for spec in specs
              for qid in spec["absorb"]}

    kept, renamed, dropped, orphan = [], 0, 0, 0
    for entry in lang_entries(lines):
        m = LANG_KEY.match(entry[0])
        if not m:
            if CONTINUATION.match(entry[0]) or entry[0].strip() == "]":
                orphan += 1
                continue
            kept.append(entry)
            continue
        qid = m.group(1)
        target = next((t for t, o in TEXT_RENAMES.items() if qid == o), None)
        if target:
            entry[0] = entry[0].replace("quest.%s." % qid, "quest.%s." % target, 1)
            renamed += 1
        elif qid in merged or qid in TEXT_OVERRIDES:
            dropped += 1
            continue
        elif qid not in live and qid.startswith(STALE_PREFIXES):
            dropped += 1
            continue
        kept.append(entry)

    nl = next((ending(e[0]) for e in kept if ending(e[0]) == "\r\n"), "\n")
    appended = apply_appends(kept, nl)
    body = "".join(line for entry in kept for line in entry)
    closed = body.rstrip()
    assert closed.endswith("}"), "lang 结尾不是 }"
    body = closed[:-1].rstrip("\r\n") + nl
    for qid, text in TEXT_OVERRIDES.items():
        if qid in live:
            body += "".join(override_lines(qid, text, nl))
    body += "}" + nl

    with open(LANG, "w", encoding="utf-8", newline="") as f:
        f.write(body)
    print("文案：搬迁 %d 条，删死键 %d 条，清理残行 %d 行，覆写 %d 条，补产线说明 %d 条"
          % (renamed, dropped, orphan, len(TEXT_OVERRIDES), appended))


if __name__ == "__main__":
    main()
