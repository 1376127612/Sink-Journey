# -*- coding: utf-8 -*-
"""
重排「原始时代」与「工业之始」两章：图标 / 标题 / 正文 / 分支布局 / 奖励。

为什么不是重新生成：
  任务 id 与 task id 都写在存档里，重新发 id 会把玩家已有的进度清空。
  这里读回现有章节的 id 与 task id 原样保留，只重写坐标、依赖、图标、形状与奖励；
  文案只补缺的，已经有完整文案的任务一个字都不动。

布局（按 IU 自己的分级：原型 -> 蒸汽 -> 电力）：
  原始时代  y=0   原型线：挤压部件 -> 挤压原型机 -> 铁板 -> 粉碎球 -> 粉碎原型机 -> 干燥原型机 -> 原型泵
           y=-4  手工轧机（挂铁板）+ 熔炼炉线（挂原型泵，往右）
           y=-8  原始包线机 -> 铜锅炉 -> 原型流式腐蚀釜（从铸型模具往回排）
  工业之始  y=0   合金 -> 蒸汽 -> 管网 -> 锅炉 -> 流体加热 -> 过热 -> 压力调节器
           y=-4  蒸汽机台八连（挂压力调节器，往右）
           y=-8  包线 -> 储存 -> 电解 -> 矿分 -> 多方块锅炉 -> 发电 -> 采石 -> 熔炉 -> 钢 -> 砧 -> 轧机（往回排）

用法：
    python kubejs/tools/gen_primal_steam_quests.py

注意：坐标与依赖已经交给 `gen_linear_quest_tree.py` 统一排（一条直线主线 + 支线）。
再跑一次本脚本会把布局改回下面的旧写法，只有补文案 / 奖励时才该单独跑它的那部分。
"""
import json
import os
import re

TAB = "\t"
NL = chr(10)
CRLF = chr(13) + chr(10)
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"
TEXTS_PATH = "kubejs/tools/quest_texts_primal_steam.json"

IU = "industrialupgrade:"

TEXTS = json.load(open(TEXTS_PATH, encoding="utf-8"))

# 机械动力章的收尾任务：原始章的入口
CREATE_LEAF = "5F132AD862CA787E"

# ---------------------------------------------------------------- 布局

PRIMAL_TRUNK = [
    IU + "crafting_elements/crafting_76_element",
    IU + "compressor/compressor",
    IU + "itemplates/iron_plate",
    IU + "crafting_elements/crafting_41_element",
    IU + "macerator/macerator",
    IU + "dryer/dryer",
    IU + "primal_pump/primal_pump",
]

# (item, x, y, 上游物品或 None)
PRIMAL_ROWS = [
    (IU + "basemachine3/rolling_machine", 4.0, -4.0, IU + "itemplates/iron_plate"),
    (IU + "crafting_elements/crafting_772_element", 12.0, -4.0, IU + "primal_pump/primal_pump"),
    (IU + "smeltery/smeltery_casing", 14.0, -4.0, None),
    (IU + "smeltery/smeltery_tank", 16.0, -4.0, None),
    (IU + "smeltery/smeltery_controller", 18.0, -4.0, None),
    (IU + "smeltery/smeltery_fuel_tank", 20.0, -4.0, None),
    (IU + "crafting_elements/crafting_496_element", 22.0, -4.0, None),
    (IU + "primal_wire_insulator/primal_wire_insulator", 22.0, -8.0, None),
    ("kubejs:copper_boiler", 20.0, -8.0, None),
    (IU + "primal_fluid_integrator/primal_fluid_integrator", 18.0, -8.0, None),
]

STEAM_TRUNK = [
    "mekanism:ingot_bronze",
    IU + "blockresource/steam_machine",
    IU + "wiring/steam",
    IU + "basemachine3/steamboiler",
    IU + "basemachine3/steam_fluid_heater",
    "mekanism:steam_bucket",
    IU + "basemachine3/steampressureconverter",
]

# 注意：高炉（多方块）那条任务 `5A1B000000000010` 是手工写的六条 item 任务
# （22 个高炉块 + 5 个功能件），本脚本只写单任务，重跑会把它压成一条 —— 别让它接管。
STEAM_ROWS = [
    (IU + "basemachine3/steam_macerator", 12.0, -4.0, None),
    (IU + "basemachine3/steam_compressor", 14.0, -4.0, None),
    (IU + "basemachine3/steam_cutting", 16.0, -4.0, None),
    (IU + "basemachine3/steam_extruder", 18.0, -4.0, None),
    (IU + "basemachine3/steam_extractor", 20.0, -4.0, None),
    (IU + "basemachine3/steam_sharpener", 22.0, -4.0, None),
    (IU + "basemachine3/steam_squeezer", 24.0, -4.0, None),
    (IU + "basemachine3/steam_pump", 26.0, -4.0, None),
    (IU + "basemachine3/steam_wire_insulator", 26.0, -8.0, None),
    (IU + "basemachine3/steam_storage", 24.0, -8.0, None),
    (IU + "basemachine3/steam_electrolyzer", 22.0, -8.0, None),
    (IU + "basemachine3/steam_handler_ore", 20.0, -8.0, None),
    (IU + "steam_boiler/steam_boiler_casing", 18.0, -8.0, None),
    (IU + "basemachine3/steam_generator", 16.0, -8.0, None),
    (IU + "basemachine3/steam_quarry", 14.0, -8.0, None),
    (IU + "mini_smeltery/mini_smeltery", 12.0, -8.0, None),
    (IU + "itemingots/steel_ingot", 10.0, -8.0, None),
    (IU + "block_strong_anvil/block_strong_anvil", 8.0, -8.0, None),
    (IU + "basemachine3/steam_rolling", 6.0, -8.0, None),
]

MILESTONE_ITEMS = {
    IU + "smeltery/smeltery_fuel_tank",
    IU + "primal_fluid_integrator/primal_fluid_integrator",
    IU + "basemachine3/steampressureconverter",
    IU + "steam_boiler/steam_boiler_casing",
    IU + "basemachine3/steam_rolling",
}

REWARDS = {
    IU + "compressor/compressor": ("minecraft:iron_ingot", 16),
    IU + "smeltery/smeltery_fuel_tank": (IU + "itemingots/copper_ingot", 16),
    IU + "primal_fluid_integrator/primal_fluid_integrator": (IU + "itemplates/gold_plate", 8),
    "mekanism:ingot_bronze": (IU + "itemplates/bronze_plate", 16),
    IU + "steam_boiler/steam_boiler_casing": (IU + "casing/bronze", 16),
    IU + "basemachine3/steam_rolling": (IU + "itemplates/steel_plate", 16),
}

STEP_X = 2.0

# 需要新开任务的目标物品（章节里还没有这条任务）：物品 -> (任务 id, task id)
NEW_QUESTS = {
    IU + "basemachine3/rolling_machine": ("E1E1000000000001", "E1E2000000000001"),
}

# ---------------------------------------------------------------- 读写

def read_chapter(name):
    raw = open(os.path.join(CH_DIR, name + ".snbt"), encoding="utf-8", newline="").read()
    return raw.replace(CRLF, NL)


def parse(text):
    body = text.split("quests: [", 1)[1]
    out = {}
    for b in re.findall(r"\n\t\t\{(.*?)\n\t\t\}", body, re.S):
        q = re.search(r"\n\t\t\tid: \"([0-9A-F]{16})\"", b)
        if not q:
            continue
        items = re.findall(r'item: \{ count: \d+, id: "([^"]+)" \}', b)
        tasks = re.findall(
            r'\n\s*(?:count: \d+L\n\s*)?id: "([0-9A-F]{16})"\n\s*item: \{ count: \d+, id: "([^"]+)" \}', b)
        out[q.group(1)] = dict(items=items, tasks=tasks)
    return out


def reward_id(item):
    h = 0
    for ch in item:
        h = (h * 131 + ord(ch)) % (16 ** 12)
    return "E1E3%012X" % h


def layout_for(trunk, rows, first_dep, item_to_quest):
    layout, prev = {}, first_dep
    for idx, item in enumerate(trunk):
        q = item_to_quest[item]
        layout[q] = (idx * STEP_X, 0.0, [prev] if prev else [])
        prev = q
    # 支线第一格默认挂主线末格（想挂别处就在 rows 里写 up）
    for item, x, y, up in rows:
        q = item_to_quest[item]
        anchor = item_to_quest[up] if up else prev
        layout[q] = (x, y, [anchor] if anchor else [])
        prev = q
    return layout


def block(qid, info, layout):
    x, y, deps = layout[qid]
    item = info["items"][0]
    out = [TAB * 2 + "{"]
    if deps:
        out.append(TAB * 3 + "dependencies: [%s]" % ", ".join('"%s"' % d for d in deps))
    out.append(TAB * 3 + 'id: "%s"' % qid)
    out.append(TAB * 3 + "icon: {")
    out.append(TAB * 4 + 'id: "%s"' % item)
    out.append(TAB * 3 + "}")
    if item in REWARDS:
        rid, count = reward_id(item), REWARDS[item][1]
        out.append(TAB * 3 + "rewards: [{")
        out.append(TAB * 4 + 'id: "%s"' % rid)
        out.append(TAB * 4 + "item: {")
        out.append(TAB * 5 + "count: %d" % count)
        out.append(TAB * 5 + 'id: "%s"' % REWARDS[item][0])
        out.append(TAB * 4 + "}")
        out.append(TAB * 4 + 'type: "item"')
        out.append(TAB * 3 + "}]")
    if item in MILESTONE_ITEMS:
        out.append(TAB * 3 + 'shape: "hexagon"')
    out.append(TAB * 3 + "tasks: [")
    for tid, titem in info["tasks"]:
        out.append(TAB * 4 + "{")
        out.append(TAB * 5 + 'id: "%s"' % tid)
        out.append(TAB * 5 + 'item: { count: 1, id: "%s" }' % titem)
        out.append(TAB * 5 + 'type: "item"')
        out.append(TAB * 4 + "}")
    out.append(TAB * 3 + "]")
    out.append(TAB * 3 + "x: %.1fd" % x)
    out.append(TAB * 3 + "y: %.1fd" % y)
    out.append(TAB * 2 + "}")
    return out


def write_chapter(name, order, layout, parsed):
    text = read_chapter(name)
    out = text[:text.index("\n\tquests: [")].split(NL)
    out.append(TAB + "quests: [")
    for qid in order:
        out.extend(block(qid, parsed[qid], layout))
    out.append(TAB + "]")
    out.append("}")
    open(os.path.join(CH_DIR, name + ".snbt"), "w", encoding="utf-8", newline="").write(CRLF.join(out) + CRLF)


def text_lines(qid, item):
    t = TEXTS[item]
    lines = ['\tquest.%s.title: "%s"' % (qid, t["title"])]
    if t["sub"]:
        lines.append('\tquest.%s.quest_subtitle: "%s"' % (qid, t["sub"]))
    if len(t["desc"]) == 1:
        lines.append('\tquest.%s.quest_desc: ["%s"]' % (qid, t["desc"][0]))
    elif t["desc"]:
        lines.append('\tquest.%s.quest_desc: [' % qid)
        lines.extend('\t\t"%s"' % d for d in t["desc"])
        lines.append("\t]")
    return lines


def do(name, trunk, rows, first_dep):
    parsed = parse(read_chapter(name))
    item_to_quest = {}
    for q, info in parsed.items():
        for it in info["items"]:
            item_to_quest.setdefault(it, q)
    wanted = list(trunk) + [i for i, _x, _y, _u in rows]
    for item in wanted:
        if item in item_to_quest:
            continue
        if item not in NEW_QUESTS:
            raise SystemExit("%s 里找不到物品 %s 对应的任务" % (name, item))
        qid, tid = NEW_QUESTS[item]
        parsed[qid] = dict(items=[item], tasks=[(tid, item)])
        item_to_quest[item] = qid
        print("  新增任务 %s -> %s" % (qid, item))

    layout = layout_for(trunk, rows, first_dep, item_to_quest)
    order = [item_to_quest[i] for i in trunk] + [item_to_quest[i] for i, _x, _y, _u in rows]
    write_chapter(name, order, layout, parsed)
    print("%s: %d 个任务" % (name, len(order)))
    return order, parsed


primal_order, primal_parsed = do("3f5a7c2b9e1d4a60", PRIMAL_TRUNK, PRIMAL_ROWS, CREATE_LEAF)

# 蒸汽章入口挂在原始章收尾（原型流式腐蚀釜）
steam_order, steam_parsed = do("5fe0048b1a2b6a65", STEAM_TRUNK, STEAM_ROWS, primal_order[-1])

# ---- 补文案：只补缺，已有的不动
raw = open(LANG, encoding="utf-8", newline="").read()
body = raw.replace(CRLF, NL)
todo = [(q, primal_parsed) for q in primal_order] + [(q, steam_parsed) for q in steam_order]
lines, replace_ids = [], []
for q, parsed in todo:
    item = parsed[q]["items"][0]
    if item not in TEXTS:
        continue
    complete = all(("\tquest.%s.%s" % (q, k)) in body for k in ("title", "quest_subtitle", "quest_desc"))
    if complete:
        continue
    lines.extend(text_lines(q, item))
    replace_ids.append(q)
    print("  补文案 %s (%s)" % (q, TEXTS[item]["title"]))

if lines:
    marked = tuple("\tquest.%s." % q for q in replace_ids)
    body = NL.join(l for l in body.split(NL) if not l.startswith(marked))
    body = body.rstrip()
    assert body.endswith("}"), "lang 结尾不是 }"
    body = body[:-1].rstrip(NL)
    body += NL + NL.join(lines) + NL + "}" + NL
    open(LANG, "w", encoding="utf-8", newline="").write(body.replace(NL, CRLF))

print("补写文案 %d 行" % len(lines))
