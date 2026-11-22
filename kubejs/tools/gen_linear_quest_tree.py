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
  同一 lane 上两条支线不许撞在一起。

文案：
  章节里出现过、但 zh_cn.snbt 里没有的任务（游戏内手动加过的那些），
  按 TEXT_RENAMES 从旧 id 的文案搬过来；旧 id 的重复键随即删除。

用法：
    python kubejs/tools/gen_linear_quest_tree.py
"""
import os
import re

NL = "\n"
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

STEP_X = 2.0
LANE = 4.0


def branch(name, anchor, lane, quests, direction=1):
    return dict(name=name, anchor=anchor, lane=lane, dir=direction,
                x_offset=0.0, quests=quests)


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
            "6FC90AA2AAA16C3F",  # 渗碳成钢
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
        ],
    ),
    dict(
        file="e1c0000000000000",
        title="电力时代",
        entry="35B9A0B50B6D5A7C",  # 蒸汽章「蒸汽轧机」
        main=[
            "6598E70D2B013335",  # 研究笔记·电力
            "4A3C44501E2E4EBE",  # 发电机
            "47288C78398A483D",  # 电力机壳
            "60E63B47743E8117",  # 晶体生长室
            "1B7E5957F8966C13",  # 单晶硅
            "1C7FAECA90C888F8",  # 激光处理厂
            "3437F33FFBE53C4F",  # 晶圆
            "4F873A6D435CC4C4",  # 压印器
            "2180DC78F9A01842",  # 硅印刷片
            "29F951B2995CE402",  # 逻辑处理器
            "0FC5052F1A436972",  # ME 控制器
            "15EE1D0B0E4716BF",  # 能量接收器
        ],
        branches=[
            branch("电动加工机", "47288C78398A483D", -1, [
                "759CE071C62F7828",  # 电力干燥机
                "19FBDF891F2A2D1A",  # 电动乳胶提取机
                "77AAA4247AD5F8FF",  # 锯木厂
                "649891A244FD0BF3",  # 电解器
                "2E27EB9AE8646E22",  # 无线供能器
            ]),
            branch("储能与电池", "4A3C44501E2E4EBE", -2, [
                "7FBCB9C7839329EE",  # 高级 RE 电池
                "5FA34533C1B9802F",  # 元件:能源
                "34E2B4C7D5914293",  # 元件:增强能量
            ]),
            branch("AE 存储", "0FC5052F1A436972", 1, [
                "03DDAA881059E878",  # 充能器
                "384447519B8692CC",  # 存储元件 1k
                "70DA7660ACBB320E",  # ME 驱动器
                "7ACE93EC8204B651",  # ME 终端
                "70F98ED2C068FAEA",  # 合成终端
            ]),
            branch("AE 自动化", "70F98ED2C068FAEA", 2, [
                "720025C66313C2C6",  # 接口与样板供应器
                "1C8365FED8F3CDD7",  # 样板编码终端
                "5985E9F5ED7AD07D",  # 导入总线
                "13C9FF48FDE9B092",  # 导出总线
            ], direction=-1),
            branch("工业先锋", "2E27EB9AE8646E22", -2, [
                "3D241785EDD13C8D",  # 怜悯发电机
                "03B4867738AD7EBF",  # 简陋机器框架
                "5754619E9CA9D0F0",  # 乳胶处理单元
                "5C741FDE56BF03F6",  # 流体提取机
                "1A1FA26750C0224F",  # 溶解室
                "5FFCF7EAE6D167D4",  # 资源熔炉
            ]),
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
    "553DE08FF8207EFC": "蒸汽加工线的头一道。后面挤压、切割、挤出、提取、抛光、乳胶依次接手，一条线排下来板、杆、胶都不缺；机器都要压力，主线却不从这里过。",
    "22372738BD8CBD0F": "这条线上三台机器各管一样：它出绝缘线，泵把液体送到该去的地方，储存器替机器扛住压力。都不必经，缺了就自己跑腿。",
    "285AC19CE5FBC3ED": "矿处理线的第一道，往后还有电解器和采石机。原料侧的活蒸汽就够用，电力时代来了整条换掉——那已经不关它的事。",
    "759CE071C62F7828": "电动加工线从这里起步：干燥、乳胶提取、锯木、电解，最后是给机台隔空充电的那台。通了电就不用再烧蒸汽，主线也不从这里走。",
    "7FBCB9C7839329EE": "这条线一共三格，它是底料。往后元件:能源、元件:增强能量一层层往上，所有电力机器的壳子里都塞着这一串东西；主线只要求你做得出一块机壳。",
    "03DDAA881059E878": "AE 存储线的开头，后面是存储元件、驱动器、终端和合成终端。网络得先能存东西，主线到 ME 控制器就可以先停在那儿。",
    "720025C66313C2C6": "AE 自动化线从这一对开始，后面接样板编码终端和进出总线。存储线到合成终端就结束了，这里才是不用自己动手的开始。",
    "3D241785EDD13C8D": "工业先锋线从这里往里走：简陋框架、乳胶处理、流体提取、溶解室，最后到资源熔炉。塑料和高级框架都长在这条线上。",
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
    """就地改一行字段；字段不存在时插到 after 字段之后（或副本开头）。"""
    pat = re.compile(r"^\t\t\t%s: (.*?)(\r?\n)$" % field)
    for idx, line in enumerate(block):
        m = pat.match(line)
        if m:
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
