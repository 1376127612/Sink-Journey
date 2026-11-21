# -*- coding: utf-8 -*-
"""
生成 IU 两个章节（原始 / 蒸汽）+ 对应 lang 文案。

规则：
  - 每个章节是一条单线：第 N 个任务依赖第 N-1 个任务，蛇形排布；
  - 章节名 4 个字；
  - 原始章排在「工业起步」分组，入口依赖机械动力章的收尾任务；
  - 蒸汽章沿用原有任务的 id / 任务 id / 奖励，只重排依赖与坐标。

用法：
    python kubejs/tools/gen_iu_quests.py
"""
import os
import re

TAB = "\t"
IU = "industrialupgrade:"
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

CREATE_LEAF = "5F132AD862CA787E"   # 机械动力章：我想你很难把它压成板

# 原始章最后一个任务（蒸汽章入口依赖它）
PRIMAL_LAST = "E1A0000000000060"

# ---------------------------------------------------------------- 任务数据

def t(item, count=None, tid=None):
    return {"item": item, "count": count, "id": tid}

# 原始时代：一条线
PRIMAL = [
    ("E1A0000000000051", "挤压部件", [t(IU + "crafting_elements/crafting_76_element")]),
    ("E1A0000000000052", "挤压原型机", [t(IU + "compressor/compressor")]),
    ("E1A0000000000053", "铁板", [t(IU + "itemplates/iron_plate", 8)]),
    ("E1A0000000000054", "粉碎球", [t(IU + "crafting_elements/crafting_41_element")]),
    ("E1A0000000000055", "粉碎原型机", [t(IU + "macerator/macerator")]),
    ("E1A0000000000056", "干燥原型机", [t(IU + "dryer/dryer")]),
    ("E1A0000000000057", "原型泵", [t(IU + "primal_pump/primal_pump")]),
    ("E1A0000000000058", "熔炼砖", [t(IU + "crafting_elements/crafting_772_element", 16)]),
    ("E1A0000000000059", "熔炼炉体", [t(IU + "smeltery/smeltery_casing", 32)]),
    ("E1A000000000005A", "熔炼炉炉缸", [t(IU + "smeltery/smeltery_tank", 8)]),
    ("E1A000000000005B", "熔炼炉控制器", [t(IU + "smeltery/smeltery_controller")]),
    ("E1A000000000005C", "熔炼炉", [
        t(IU + "smeltery/smeltery_fuel_tank", 2),
        t(IU + "smeltery/smeltery_furnace", 2),
        t(IU + "smeltery/smeltery_casting"),
    ]),
    ("E1A000000000005D", "铸型模具", [t(IU + "crafting_elements/crafting_496_element")]),
    ("E1A000000000005E", "原始包线机", [t(IU + "primal_wire_insulator/primal_wire_insulator")]),
    ("E1A000000000005F", "铜锅炉", [t("kubejs:copper_boiler")]),
    (PRIMAL_LAST, "原型流式腐蚀釜", [t(IU + "primal_fluid_integrator/primal_fluid_integrator")]),
]

# 蒸汽时代：原有任务 id 全部保留，只改依赖与坐标
STEAM = [
    ("6BDDB3A36AADF646", "好用的合金", [t("mekanism:ingot_bronze", 16, "52AEA2353CB74016"),
                                   t(IU + "itemplates/bronze_plate", 16, "1CF53A4CE997DE1C")], True),
    ("0706F92EF2C236B8", "蒸汽时代", [t("kubejs:steam_casing", 8, "50761490B0A07143"),
                                 t(IU + "blockresource/steam_machine", None, "218F344D12AFC74F")]),
    ("2C027D8994527225", "蒸汽管道", [t(IU + "wiring/steam", None, "3C726FD7B45D8F8D")]),
    ("4C2722480E36EC49", "蒸汽锅炉", [t(IU + "basemachine3/steamboiler", None, "323032CD82CA5D11")]),
    ("0FEC076007556020", "蒸汽流体加热器", [t(IU + "basemachine3/steam_fluid_heater", None, "43601EAB9C4DA254")]),
    ("50FFF3DA2CF84C7F", "过热蒸汽", [t("mekanism:steam_bucket", None, "25941B7F70E561E1"),
                                 t(IU + "bucket/superheated_steam", None, "494FBBA4916D66C5")]),
    ("79789218839D6E7D", "蒸汽压力调节器", [t(IU + "basemachine3/steampressureconverter", None, "2238E391CE5EB728")]),
    ("553DE08FF8207EFC", "蒸汽粉碎机", [t(IU + "basemachine3/steam_macerator", None, "0F615F33F4E66A11")]),
    ("160B66057D2A2BC2", "蒸汽挤压机", [t(IU + "basemachine3/steam_compressor", None, "702E2A509877A282")]),
    ("E1B0000000000001", "蒸汽切割机", [t(IU + "basemachine3/steam_cutting")]),
    ("E1B0000000000002", "蒸汽挤出机", [t(IU + "basemachine3/steam_extruder")]),
    ("E1B0000000000003", "蒸汽提取机", [t(IU + "basemachine3/steam_extractor")]),
    ("E1B0000000000004", "蒸汽抛光机", [t(IU + "basemachine3/steam_sharpener")]),
    ("E1B0000000000005", "蒸汽乳胶提取机", [t(IU + "basemachine3/steam_squeezer")]),
    ("E1B0000000000006", "蒸汽泵", [t(IU + "basemachine3/steam_pump")]),
    ("22372738BD8CBD0F", "蒸汽包线机", [t(IU + "basemachine3/steam_wire_insulator", None, "443267D608841610")]),
    ("E1B0000000000007", "蒸汽储存器", [t(IU + "basemachine3/steam_storage")]),
    ("E1B0000000000008", "蒸汽电解器", [t(IU + "basemachine3/steam_electrolyzer")]),
    ("E1B0000000000009", "蒸汽矿物分离器", [t(IU + "basemachine3/steam_handler_ore")]),
    ("E1B000000000000A", "蒸汽锅炉（多方块）", [
        t(IU + "steam_boiler/steam_boiler_casing", 6),
        t(IU + "steam_boiler/steam_boiler_controller"),
        t(IU + "steam_boiler/steam_boiler_tank"),
        t(IU + "steam_boiler/steam_boiler_heater"),
        t(IU + "steam_boiler/steam_boiler_heat_exchanger"),
    ]),
    ("E1B000000000000B", "电动蒸汽发生器", [t(IU + "basemachine3/steam_generator")]),
    ("E1B000000000000C", "蒸汽采石机", [t(IU + "basemachine3/steam_quarry"),
                                  t(IU + "basemachine3/quarry_pipe", 4)]),
    ("E1B000000000000D", "微型熔炉", [t(IU + "mini_smeltery/mini_smeltery")]),
    ("E1B000000000000E", "渗碳成钢", [t(IU + "itemingots/steel_ingot", 4)]),
    ("E1B000000000000F", "强化铁砧", [t(IU + "block_strong_anvil/block_strong_anvil")]),
    ("35B9A0B50B6D5A7C", "蒸汽轧机", [t(IU + "basemachine3/steam_rolling", None, "3C8C8C900B41F32C")]),
]

BRONZE_REWARD = ("""
\t\t\trewards: [{
\t\t\t\tcount: 16
\t\t\t\tid: "1D361B4E62844F42"
\t\t\t\titem: {
\t\t\t\t\tcount: 1
\t\t\t\t\tid: "industrialupgrade:itemplates/bronze_plate"
\t\t\t\t}
\t\t\t\ttype: "item"
\t\t\t}]""").strip("\n")


def tid(seq, j):
    return "C0D%013X" % (seq * 10 + j)


def tasks_block(tasks, seq, indent=3):
    pad = TAB * indent
    out = [pad + "tasks: ["]
    for j, task in enumerate(tasks):
        out.append(pad + TAB + "{")
        if task["count"] is not None:
            out.append(pad + TAB * 2 + "count: %dL" % task["count"])
        out.append(pad + TAB * 2 + 'id: "%s"' % (task["id"] or tid(seq, j)))
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


def chapter(filename, cid, group, order, icon, quests, first_dep=None):
    out = ["{"]
    out.append(TAB + "default_hide_dependency_lines: false")
    out.append(TAB + 'default_quest_shape: ""')
    out.append(TAB + 'filename: "%s"' % filename)
    out.append(TAB + 'group: "%s"' % group)
    out.append(TAB + "icon: {")
    out.append(TAB * 2 + 'id: "%s"' % icon)
    out.append(TAB + "}")
    out.append(TAB + 'id: "%s"' % cid)
    out.append(TAB + "images: [ ]")
    out.append(TAB + "order_index: %d" % order)
    out.append(TAB + "quest_links: [ ]")
    out.append(TAB + "quests: [")
    pts = serpentine(len(quests))
    prev = first_dep
    for i, entry in enumerate(quests):
        qid, tasks = entry[0], entry[1]
        reward = len(entry) > 2 and entry[2]
        x, y = pts[i]
        out.append(TAB * 2 + "{")
        if prev:
            out.append(TAB * 3 + 'dependencies: ["%s"]' % prev)
        out.append(TAB * 3 + 'id: "%s"' % qid)
        if reward:
            out.extend(BRONZE_REWARD.split("\n"))
        out.extend(tasks_block(tasks, i + 1))
        out.append(TAB * 3 + "x: %.1fd" % x)
        out.append(TAB * 3 + "y: %.1fd" % y)
        out.append(TAB * 2 + "}")
        prev = qid
    out.append(TAB + "]")
    out.append("}")
    return "\n".join(out) + "\n"


os.makedirs(CH_DIR, exist_ok=True)

open(os.path.join(CH_DIR, "3f5a7c2b9e1d4a60.snbt"), "w", encoding="utf-8", newline="\n").write(
    chapter("3f5a7c2b9e1d4a60", "3F5A7C2B9E1D4A60", "705D4C8363D05D0F", 1,
            IU + "macerator/macerator",
            [(q, ts) for q, _, ts in PRIMAL], first_dep=CREATE_LEAF))

open(os.path.join(CH_DIR, "5fe0048b1a2b6a65.snbt"), "w", encoding="utf-8", newline="\n").write(
    chapter("5fe0048b1a2b6a65", "5FE0048B1A2B6A65", "705D4C8363D05D0F", 2,
            IU + "steam_blade/steam_blade_wood",
            [(q, ts, (len(e) > 3 and e[3])) for q, _n, ts, *e in [(x + (False,))[:4] for x in STEAM]],
            first_dep=PRIMAL_LAST))

print("chapters written:", len(PRIMAL), len(STEAM))
