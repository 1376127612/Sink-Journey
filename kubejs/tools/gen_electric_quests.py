# -*- coding: utf-8 -*-
"""
生成「基础电力时代」章节 + 对应 lang 文案，并顺延后面两章的顺序号。

规则：
  - 章节单线：第 N 个任务依赖第 N-1 个任务，蛇形排布；
  - 章节名 4 个字（基础电力时代 -> 电力时代）；
  - 入口依赖蒸汽章的收尾任务「锅炉房」；
  - 序号插在「工业之始」(order 3) 之后，仰望星空 / 征战末地 各顺延一位。

用法：
    python kubejs/tools/gen_electric_quests.py
"""
import os
import re

TAB = "\t"
IU = "industrialupgrade:"
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

CHAPTER_ID = "E1C0000000000000"
CHAPTER_FILE = "e1c0000000000000"
GROUP = "705D4C8363D05D0F"
ORDER = 4

# 蒸汽章最后一个任务：蒸汽轧机
STEAM_LAST = "35B9A0B50B6D5A7C"

# 排在电力之后的两章，order 顺延一位
SHIFT_AFTER = {
    "5255fdf38af51c93": 4,   # 仰望星空
    "1615b92ec329cc3d": 5,   # 征战末地
}

WAFER = IU + "crafting_elements/crafting_494_element"
SINGLE = IU + "crafting_elements/crafting_495_element"
ELEM = lambda n: IU + "crafting_elements/crafting_%d_element" % n


def t(item, count=None):
    return {"item": item, "count": count}


QUESTS = [
    ("E1C0000000000001", "研究笔记·电力", "电流的第一份证词",
     "研究站里用 8 片晶圆和 16 份演算数据，把电磁感应、真空管与硅器件写成一份可复制的笔记。拿到它，电力时代才算真正开始：AE2 本体与工业先锋同时开门。",
     [t("kubejs:research_notes_electric")]),

    ("E1C0000000000002", "发电机", "烧煤换电",
     "一个元件:发电机加一块电力机壳。它吃煤、吃生物质，吐出 IU 自己的电。整个时代的机器都挂在这台机器后面。",
     [t(IU + "basemachine3/generator_iu")]),

    ("E1C0000000000003", "电力机壳", "机器的骨头",
     "四块电镀外壳压成一块机壳。电力时代的每一台机器都要它，先囤十六块再说。",
     [t(IU + "blockresource/machine", 16)]),

    ("E1C0000000000004", "电力干燥机", "蒸汽的电动版",
     "蒸汽干燥机通电之后的版本。同样把湿料烘干，但不烧蒸汽，只要有电就一直转。",
     [t(IU + "basemachine3/electric_dryer")]),

    ("E1C0000000000005", "电动乳胶提取机", "橡胶的电动版",
     "蒸汽乳胶提取机的电力版。工业先锋的塑料全靠这条橡胶线，早一步通电就早一步摸到它。",
     [t(IU + "basemachine3/electric_squeezer")]),

    ("E1C0000000000006", "锯木厂", "把树变成车间",
     "木头进去，木板和木屑出来。木材第一次不用手砍，后面的机壳、脚手架、箱子都从这里供应。",
     [t(IU + "basemachine3/sawmill")]),

    ("E1C0000000000007", "手工轧机", "板还是那张板",
     "轧辊组是轧机的核心件：六块钢板围一个轧辊，才能把锭压成板。轧机一通，钢板就再也不靠铁砧了。",
     [t(IU + "basemachine3/rolling_machine")]),

    ("E1C0000000000008", "电解器", "把水拆开",
     "蒸汽电解器的电力版。水进去，氢和氧出来；氢是硅烷线的原料，氧是后面一堆化工配方的原料。",
     [t(IU + "basemachine2/electrolyzer_iu")]),

    ("E1C0000000000009", "无线供能器", "线缆可以收起来了",
     "给 3×3 区块内的机器隔空充电。电网从此不用一根一根拉线，机台摆在哪里都能吃到电。",
     [t(IU + "basemachine3/machine_charger")]),

    ("E1C000000000000A", "激光处理厂", "切晶圆的那把刀",
     "单晶硅在这里被激光切成晶圆。没有它，硅料就只是根漂亮的棒子。",
     [t(IU + "basemachine3/laser_polisher")]),

    ("E1C000000000000B", "晶体生长室", "把粗料长成电子级",
     "粗制硅晶体在这里再长一次，才变成能拉单晶的电子级多晶硅。物理熔炼只能做到粗料。",
     [t(IU + "basemachine3/silicon_crystal_handler")]),

    ("E1C000000000000C", "单晶硅", "一根棒子",
     "电子级多晶硅在生长室里直拉成单晶硅。它不是最终产品，是切片前的坯料。",
     [t(SINGLE, 2)]),

    ("E1C000000000000D", "晶圆", "八片薄片",
     "一根单晶硅切四片晶圆。从这一格开始，硅才真正变成器件：IU 的电路要用它，AE 的处理器也要用它。",
     [t(WAFER, 8)]),

    ("E1C000000000000E", "压印器", "AE 的第一台机器",
     "钢锭做骨架、银锭走电流、活塞压制具。AE2 本体就从这台机器开始，它的硅印刷片现在吃的是你的晶圆。压印模板不在合成表里——去天空石坑里挖，或者从别的模板翻制。",
     [t("ae2:inscriber")]),

    ("E1C000000000000F", "硅印刷片", "晶圆换成芯片",
     "晶圆加硅压印模板，压出印刷硅片。AE 原本「石英粉烧成硅」那条捷径已经封了，硅只能从晶圆线上来。",
     [t("ae2:printed_silicon", 4)]),

    ("E1C0000000000010", "逻辑处理器", "AE 的通用大脑",
     "印刷硅片、印刷逻辑电路和红石一起压成逻辑处理器。存储、终端、线缆，全挂在它身上。",
     [t("ae2:logic_processor", 4)]),

    ("E1C0000000000011", "充能器", "给水晶充电",
     "把福鲁伊克斯水晶充成带电的。这是网络里唯一不需要额外机器的循环：电进去，水晶出来。",
     [t("ae2:charger")]),

    ("E1C0000000000012", "能量接收器", "电网接进网络",
     "AE 网络的门。IU 的电从这里进来，换成 AE 自己的能量单位。",
     [t("ae2:energy_acceptor")]),

    ("E1C0000000000013", "ME 驱动器", "第一个仓库",
     "装存储元件的柜子。一个驱动器塞十个元件，从此箱子不再是箱子。",
     [t("ae2:drive")]),

    ("E1C0000000000014", "ME 终端", "看见整个网络",
     "把所有存储元件摊在一张列表上。第一次点开它的时候，你会明白为什么大家都在往 AE 里搬东西。",
     [t("ae2:terminal")]),

    ("E1C0000000000015", "合成终端", "在终端里直接合成",
     "终端加工作台再加一个运算处理器。省下的不是那两步路，是每次找配方的时间。",
     [t("ae2:crafting_terminal")]),

    ("E1C0000000000016", "ME 控制器", "网络的心脏",
     "中心换成一台 IU 电动机：没有电力工业，就没有 ME 网络。控制器一立，网络才会有稳定的频道数。",
     [t("ae2:controller")]),

    ("E1C0000000000017", "接口与样板供应器", "让网络自己干活",
     "接口收料，样板供应器按样板把料送出去。这一对凑齐，AE 才从仓库变成工厂。",
     [t("ae2:interface"), t("ae2:pattern_provider")]),

    ("E1C0000000000018", "怜悯发电机", "聊胜于无的电",
     "工业先锋的第一台发电机。它发不了多少电，但足够让一台机器先转起来——工业先锋的机器都吃 FE，不是 IU 的电。",
     [t("industrialforegoing:pitiful_generator")]),

    ("E1C0000000000019", "简陋机器框架", "工业先锋的入场券",
     "八块钢板围一个红石块，再配四根原木。工业先锋的每一台机器都要先有它。",
     [t("industrialforegoing:machine_frame_pity", 4)]),

    ("E1C000000000001A", "乳胶处理单元", "橡胶变塑料",
     "割胶碗收来的乳胶在这里聚成干胶，烧一遍就是塑料。塑料是高级机器框架的必需品。",
     [t("industrialforegoing:latex_processing_unit")]),

    ("E1C000000000001B", "流体提取机", "从原木里挤汁",
     "贴着原木就能抽出乳胶。它和乳胶处理单元是一对，缺一个橡胶线就不转。",
     [t("industrialforegoing:fluid_extractor")]),

    ("E1C000000000001C", "溶解室", "往液体里配东西",
     "塑料、框架、齿轮、桶，泡在乳胶里溶一遍，出来就是更高级的机器框架。工业先锋的分水岭。",
     [t("industrialforegoing:dissolution_chamber")]),
]


def tasks_block(tasks, seq, indent=3):
    pad = TAB * indent
    out = [pad + "tasks: ["]
    for j, task in enumerate(tasks):
        out.append(pad + TAB + "{")
        if task["count"] is not None:
            out.append(pad + TAB * 2 + "count: %dL" % task["count"])
        out.append(pad + TAB * 2 + 'id: "C0E%013X"' % (seq * 10 + j))
        out.append(pad + TAB * 2 + 'item: { count: 1, id: "%s" }' % task["item"])
        out.append(pad + TAB * 2 + 'type: "item"')
        out.append(pad + TAB + "}")
    out.append(pad + "]")
    return out


def serpentine(n, per_row=6, step=1.5, drop=3.0):
    pts = []
    row = 0
    while len(pts) < n:
        y = -row * drop
        xs = [i * step for i in range(min(per_row, n - len(pts)))]
        if row % 2 == 1:
            xs = list(reversed(xs))
        pts.extend([(x, y) for x in xs])
        row += 1
    return pts


def chapter():
    out = ["{"]
    out.append(TAB + "default_hide_dependency_lines: false")
    out.append(TAB + 'default_quest_shape: ""')
    out.append(TAB + 'filename: "%s"' % CHAPTER_FILE)
    out.append(TAB + 'group: "%s"' % GROUP)
    out.append(TAB + "icon: {")
    out.append(TAB * 2 + 'id: "%s"' % (IU + "basemachine3/generator_iu"))
    out.append(TAB + "}")
    out.append(TAB + 'id: "%s"' % CHAPTER_ID)
    out.append(TAB + "images: [ ]")
    out.append(TAB + "order_index: %d" % ORDER)
    out.append(TAB + "quest_links: [ ]")
    out.append(TAB + "quests: [")
    pts = serpentine(len(QUESTS))
    prev = STEAM_LAST
    for i, (qid, _title, _sub, _desc, tasks) in enumerate(QUESTS):
        x, y = pts[i]
        out.append(TAB * 2 + "{")
        out.append(TAB * 3 + 'dependencies: ["%s"]' % prev)
        out.append(TAB * 3 + 'id: "%s"' % qid)
        out.extend(tasks_block(tasks, i + 1))
        out.append(TAB * 3 + "x: %.1fd" % x)
        out.append(TAB * 3 + "y: %.1fd" % y)
        out.append(TAB * 2 + "}")
        prev = qid
    out.append(TAB + "]")
    out.append("}")
    return "\n".join(out) + "\n"


def quest_lang():
    lines = ['\tchapter.%s.title: "电力时代"' % CHAPTER_ID]
    for qid, title, sub, desc, _tasks in QUESTS:
        lines.append('\tquest.%s.title: "%s"' % (qid, title))
        lines.append('\tquest.%s.quest_subtitle: "%s"' % (qid, sub))
        lines.append('\tquest.%s.quest_desc: ["%s"]' % (qid, desc))
    return lines


def append_lang(lines):
    """把条目插到收尾大括号之前，保留原文件换行风格（这份 lang 是 CRLF）。"""
    raw = open(LANG, encoding="utf-8", newline="").read()
    eol = "\r\n" if "\r\n" in raw else "\n"
    if "E1C" in raw:
        raise SystemExit("lang 里已经有电力时代条目，先删掉旧的再跑，避免重复追加")
    body = raw.replace("\r\n", "\n").rstrip()
    assert body.endswith("}"), "lang 文件结尾不是 }"
    body = body[:-1].rstrip("\n")
    body += "\n" + "\n".join(lines) + "\n}\n"
    open(LANG, "w", encoding="utf-8", newline="").write(body.replace("\n", eol))


def shift_orders():
    for fname, old in SHIFT_AFTER.items():
        path = os.path.join(CH_DIR, fname + ".snbt")
        text = open(path, encoding="utf-8").read()
        new = old + 1
        text2 = re.sub(r"order_index: %d\n" % old, "order_index: %d\n" % new, text, count=1)
        if text2 != text:
            open(path, "w", encoding="utf-8", newline="\n").write(text2)
            print("order_index %s: %d -> %d" % (fname, old, new))


os.makedirs(CH_DIR, exist_ok=True)
open(os.path.join(CH_DIR, CHAPTER_FILE + ".snbt"), "w", encoding="utf-8", newline="\n").write(chapter())
append_lang(quest_lang())
shift_orders()
print("chapter written: %d quests" % len(QUESTS))
