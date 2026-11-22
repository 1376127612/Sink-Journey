# -*- coding: utf-8 -*-
"""
重排「电力时代」章节：主线 + 五条支线，补图标 / 形状 / 奖励 / 文案。

为什么不是重新生成一遍：
  章节里已经有一批任务带着存档进度（任务 id 与 task id 都写在存档里）。
  这里只读回原章节的任务 id 与 task id 原样保留，重写坐标、依赖、图标、
  形状与奖励，新加的任务才用新 id，所以老存档的完成度不会丢。

布局：
  y =   0  主线 12 格：笔记 -> 发电机 -> 机壳 -> 硅 -> 晶圆 -> AE -> 电网
  y =  -4  A 支线：IU 电力机台（从「电力机壳」往下）
  y =  -8  B 支线：储能与电池（从「发电机」往下）/ E 支线：工业先锋（接在 A 尾）
  y =  +4  C 支线：AE 存储（从「ME 控制器」往上）
  y =  +8  D 支线：AE 自动化（接在 C 尾）

用法：
    python kubejs/tools/gen_electric_quests.py

注意：坐标与依赖已经交给 `gen_linear_quest_tree.py` 统一排（一条直线主线 + 支线）。
再跑一次本脚本会把布局改回下面的旧写法，只有补文案 / 奖励时才该单独跑它的那部分。
"""
import os
import re

TAB = "\t"
IU = "industrialupgrade:"
AE = "ae2:"
IF = "industrialforegoing:"

CH_DIR = "config/ftbquests/quests/chapters"
CHAPTER_FILE = "e1c0000000000000"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

STEP_X = 2.0
STEP_Y = 4.0

# 新任务的 id 段（16 位十六进制，避开全书已有 id）
NEW_Q = "E1D1%012X"
NEW_T = "E1D2%012X"
NEW_R = "E1D3%012X"

# ---------------------------------------------------------------- 布局

# id -> (x, y, [依赖], 形状)
# 形状：hexagon = 里程碑；其余用章节默认圆
TRUNK_IDS = [
    ("6598E70D2B013335", "研究笔记·电力"),
    ("4A3C44501E2E4EBE", "发电机"),
    ("47288C78398A483D", "电力机壳"),
    ("60E63B47743E8117", "晶体生长室"),
    ("1B7E5957F8966C13", "单晶硅"),
    ("1C7FAECA90C888F8", "激光处理厂"),
    ("3437F33FFBE53C4F", "晶圆"),
    ("4F873A6D435CC4C4", "压印器"),
    ("2180DC78F9A01842", "硅印刷片"),
    ("29F951B2995CE402", "逻辑处理器"),
    ("0FC5052F1A436972", "ME 控制器"),
    ("15EE1D0B0E4716BF", "能量接收器"),
]

STEAM_LAST = "35B9A0B50B6D5A7C"


def trunk_layout():
    out = {}
    prev = STEAM_LAST
    for i, (qid, _) in enumerate(TRUNK_IDS):
        out[qid] = (i * STEP_X, 0.0, [prev])
        prev = qid
    return out


LAYOUT = trunk_layout()

# A 支线：IU 电力机台（从「电力机壳」= 47288C78398A483D 往下）
BRANCH_A = [
    ("759CE071C62F7828", "电力干燥机", [("47288C78398A483D",)]),
    ("19FBDF891F2A2D1A", "电动乳胶提取机", None),
    ("77AAA4247AD5F8FF", "锯木厂", None),
    ("649891A244FD0BF3", "电解器", None),
    ("2E27EB9AE8646E22", "无线供能器", None),
]

# B 支线：储能与电池（从「发电机」= 4A3C44501E2E4EBE 往下）
BRANCH_B = [
    (NEW_Q % 2, "高级 RE 电池", [("4A3C44501E2E4EBE",)]),
    (NEW_Q % 3, "元件:能源", None),
    (NEW_Q % 4, "元件:增强能量", None),
]

# C 支线：AE 存储（从「ME 控制器」= 0FC5052F1A436972 往上）
BRANCH_C = [
    ("03DDAA881059E878", "充能器", [("0FC5052F1A436972",)]),
    (NEW_Q % 5, "存储元件 1k", None),
    ("70DA7660ACBB320E", "ME 驱动器", None),
    ("7ACE93EC8204B651", "ME 终端", None),
    ("70F98ED2C068FAEA", "合成终端", None),
]

# D 支线：AE 自动化（接在 C 尾「合成终端」）
BRANCH_D = [
    ("720025C66313C2C6", "接口与样板供应器", [("70F98ED2C068FAEA",)]),
    (NEW_Q % 6, "样板编码终端", None),
    (NEW_Q % 7, "导入总线", None),
    (NEW_Q % 8, "导出总线", None),
]

# E 支线：工业先锋（接在 A 尾「无线供能器」）
BRANCH_E = [
    ("3D241785EDD13C8D", "怜悯发电机", [("2E27EB9AE8646E22",)]),
    ("03B4867738AD7EBF", "简陋机器框架", None),
    ("5754619E9CA9D0F0", "乳胶处理单元", None),
    ("5C741FDE56BF03F6", "流体提取机", None),
    ("1A1FA26750C0224F", "溶解室", None),
    (NEW_Q % 9, "资源熔炉", None),
]


def chain(branch, x0, y, steps=1):
    """一条支线：沿 x 方向排开，第 N 个依赖第 N-1 个。"""
    out = {}
    prev = None
    for i, (qid, _title, anchors) in enumerate(branch):
        deps = anchors if anchors else [prev]
        out[qid] = (x0 + i * STEP_X * steps, y, list(deps))
        prev = qid
    return out


LAYOUT.update(chain(BRANCH_A, 4 * STEP_X, -STEP_Y))
LAYOUT.update(chain(BRANCH_B, 2 * STEP_X, -2 * STEP_Y))
# C 挂在「ME 控制器」正上方（x=20）；D 从 C 尾往回排，免得整章横着拉太长
LAYOUT.update(chain(BRANCH_C, 20.0, STEP_Y))
_d = chain(BRANCH_D, 28.0, 2 * STEP_Y)
LAYOUT.update({k: (28.0 - i * STEP_X, v[1], v[2]) for i, (k, v) in enumerate(_d.items())})
# E 挂在 A 尾「无线供能器」（x=18）正下方
LAYOUT.update(chain(BRANCH_E, 18.0, -2 * STEP_Y))

MILESTONES = {"6598E70D2B013335", "0FC5052F1A436972", "1A1FA26750C0224F"}

# ---------------------------------------------------------------- 任务内容

TEXTS = {}


def q(qid, title, sub, desc, tasks, icon=None, reward=None):
    TEXTS[qid] = dict(title=title, sub=sub, desc=desc, tasks=tasks, icon=icon, reward=reward)


# ---- 主线
q("6598E70D2B013335", "研究笔记·电力", "电流的第一份证词",
  "研究站里用 8 片晶圆和 16 份演算数据，把电磁感应、真空管与硅器件写成一份可复制的笔记。拿到它，AE2 本体与工业先锋同时开门。",
  [("kubejs:research_notes_electric", 1)],
  reward=("industrialupgrade:blockresource/machine", 16))

q("4A3C44501E2E4EBE", "发电机", "烧煤换电",
  "一个元件:发电机加一块电力机壳。它吃煤、吃生物质，吐出 IU 自己的电。整个时代的机器都挂在这台机器后面。",
  [(IU + "basemachine3/generator_iu", 1)])

q("47288C78398A483D", "电力机壳", "机器的骨头",
  "四块电镀外壳压成一块机壳。电力时代的每一台机器都要它，先囤十六块再说。",
  [(IU + "blockresource/machine", 16)])

q("60E63B47743E8117", "晶体生长室", "把粗料长成电子级",
  "粗制硅晶体在这里再长一次，才变成能拉单晶的电子级多晶硅。物理熔炼只能做到粗料。",
  [(IU + "basemachine3/silicon_crystal_handler", 1)])

q("1B7E5957F8966C13", "单晶硅", "一根棒子",
  "电子级多晶硅在生长室里直拉成单晶硅。它不是最终产品，是切片前的坯料。原型生长室也能长，只是慢。",
  [(IU + "crafting_elements/crafting_495_element", 2)])

q("1C7FAECA90C888F8", "激光处理厂", "切晶圆的那把刀",
  "单晶硅在这里被激光切成晶圆。没有它，硅料就只是根漂亮的棒子。",
  [(IU + "basemachine3/laser_polisher", 1)])

q("3437F33FFBE53C4F", "晶圆", "八片薄片",
  "一根单晶硅切四片晶圆。从这一格开始，硅才真正变成器件：IU 的电路要用它，AE 的处理器也要用它。",
  [(IU + "crafting_elements/crafting_494_element", 8)])

q("4F873A6D435CC4C4", "压印器", "AE 的第一台机器",
  "钢锭做骨架、银锭走电流、活塞压制具。压印模板不在合成表里——去天空石坑里挖，或者从已有的模板翻制。",
  [(AE + "inscriber", 1)])

q("2180DC78F9A01842", "硅印刷片", "晶圆换成芯片",
  "晶圆加硅压印模板，压出印刷硅片。AE 原本「石英粉烧成硅」那条捷径已经封了，硅只能从晶圆线上来。",
  [(AE + "printed_silicon", 4)])

q("29F951B2995CE402", "逻辑处理器", "AE 的通用大脑",
  "印刷硅片、印刷逻辑电路和红石一起压成逻辑处理器。存储、终端、线缆，全挂在它身上。",
  [(AE + "logic_processor", 4)],
  reward=(IU + "battery/advanced_re_battery", 4))

q("0FC5052F1A436972", "ME 控制器", "网络的心脏",
  "中心换成一台 IU 电动机：没有电力工业，就没有 ME 网络。控制器一立，网络才会有稳定的频道数。",
  [(AE + "controller", 1)],
  reward=(IU + "itemingots/steel_ingot", 16))

q("15EE1D0B0E4716BF", "能量接收器", "电网接进网络",
  "AE 网络的门。IU 的电从这里进来，换成 AE 自己的能量单位。接上它，网络才算通电。",
  [(AE + "energy_acceptor", 1)])

# ---- A 支线：IU 电力机台
q("759CE071C62F7828", "电力干燥机", "蒸汽的电动版",
  "蒸汽干燥机通电之后的版本。同样把湿料烘干，但不烧蒸汽，只要有电就一直转。",
  [(IU + "basemachine3/electric_dryer", 1)])

q("19FBDF891F2A2D1A", "电动乳胶提取机", "橡胶的电动版",
  "蒸汽乳胶提取机的电力版。工业先锋的塑料全靠这条橡胶线，早一步通电就早一步摸到它。",
  [(IU + "basemachine3/electric_squeezer", 1)])

q("77AAA4247AD5F8FF", "锯木厂", "把树变成车间",
  "木头进去，木板和木屑出来。木材第一次不用手砍，后面的机壳、脚手架、箱子都从这里供应。",
  [(IU + "basemachine3/sawmill", 1)])

q("649891A244FD0BF3", "电解器", "把水拆开",
  "水进去，氢和氧出来；氢是硅烷线的原料，氧是后面一堆化工配方的原料。阳极是铅板，阴极是镍板，都从本时代的金属来。",
  [(IU + "basemachine2/electrolyzer_iu", 1)])

q("2E27EB9AE8646E22", "无线供能器", "线缆可以收起来了",
  "给 3×3 区块内的机器隔空充电。电网从此不用一根一根拉线，机台摆在哪里都能吃到电。",
  [(IU + "basemachine3/machine_charger", 1)])

# ---- B 支线：储能与电池
q(NEW_Q % 2, "高级 RE 电池", "把电装进壳里",
  "铜导线、铅粉、青铜外壳、铅外壳：先有铅酸式的 RE 电池，才有元件:能源。",
  [(IU + "battery/advanced_re_battery", 16)])

q(NEW_Q % 3, "元件:能源", "电动机的另一半",
  "四块高级 RE 电池裹住线圈，中间压一枚元件模板。电动机、电力储存、能量元件都要它。",
  [(IU + "crafting_elements/crafting_60_element", 2)])

q(NEW_Q % 4, "元件:增强能量", "往上抬一档",
  "RE 电池配元件模板就是增强能量元件。它把机器的电等级往上推一格，后面的高级机台离不开。",
  [(IU + "crafting_elements/crafting_614_element", 2)])

# ---- C 支线：AE 存储
q("03DDAA881059E878", "充能器", "给水晶充电",
  "把福鲁伊克斯水晶充成带电的。这是网络里唯一不需要额外机器的循环：电进去，水晶出来。",
  [(AE + "charger", 1)])

q(NEW_Q % 5, "存储元件 1k", "第一块容量",
  "赛特斯石英配红石和逻辑处理器，就是最基础的 1k 存储组件；再套一层外壳，才是能插进驱动器的元件。",
  [(AE + "item_storage_cell_1k", 1)])

q("70DA7660ACBB320E", "ME 驱动器", "第一个仓库",
  "装存储元件的柜子。一个驱动器塞十个元件，从此箱子不再是箱子。",
  [(AE + "drive", 1)])

q("7ACE93EC8204B651", "ME 终端", "看见整个网络",
  "把所有存储元件摊在一张列表上。第一次点开它的时候，你会明白为什么大家都在往 AE 里搬东西。",
  [(AE + "terminal", 1)])

q("70F98ED2C068FAEA", "合成终端", "在终端里直接合成",
  "终端加工作台再加一个运算处理器。省下的不是那两步路，是每次找配方的时间。",
  [(AE + "crafting_terminal", 1)])

# ---- D 支线：AE 自动化
q("720025C66313C2C6", "接口与样板供应器", "让网络自己干活",
  "接口收料，样板供应器按样板把料送出去。这一对凑齐，AE 才从仓库变成工厂。",
  [(AE + "interface", 1), (AE + "pattern_provider", 1)])

q(NEW_Q % 6, "样板编码终端", "把配方写成样板",
  "合成终端再加一个工程处理器。在终端里把配方写成样板，供应器才知道要送什么、送多少。",
  [(AE + "pattern_encoding_terminal", 1)])

q(NEW_Q % 7, "导入总线", "把东西吸进来",
  "贴在容器上，网络就能把它里面的东西收进驱动器。接口的廉价替代，小批量搬运够用。",
  [(AE + "import_bus", 1)])

q(NEW_Q % 8, "导出总线", "把东西推出去",
  "反过来用：网络里的东西按条件推向容器或机器。自动化的最后一环，和导入总线是一对。",
  [(AE + "export_bus", 1)])

# ---- E 支线：工业先锋
q("3D241785EDD13C8D", "怜悯发电机", "聊胜于无的电",
  "工业先锋的第一台发电机。它发不了多少电，但足够让一台机器先转起来——工业先锋的机器都吃 FE，不是 IU 的电。",
  [(IF + "pitiful_generator", 1)])

q("03B4867738AD7EBF", "简陋机器框架", "工业先锋的入场券",
  "八块钢板围一个红石块，再配四根原木。工业先锋的每一台机器都要先有它。",
  [(IF + "machine_frame_pity", 4)],
  reward=(IU + "itemplates/steel_plate", 16))

q("5754619E9CA9D0F0", "乳胶处理单元", "橡胶变塑料",
  "割胶碗收来的乳胶在这里聚成干胶，烧一遍就是塑料。塑料是高级机器框架的必需品。",
  [(IF + "latex_processing_unit", 1)])

q("5C741FDE56BF03F6", "流体提取机", "从原木里挤汁",
  "贴着原木就能抽出乳胶。它和乳胶处理单元是一对，缺一个橡胶线就不转。",
  [(IF + "fluid_extractor", 1)])

q("1A1FA26750C0224F", "溶解室", "往液体里配东西",
  "塑料、框架、齿轮、桶，泡在乳胶里溶一遍，出来就是更高级的机器框架。工业先锋的分水岭。",
  [(IF + "dissolution_chamber", 1)],
  reward=(IF + "plastic", 16))

q(NEW_Q % 9, "资源熔炉", "一台炉子当三台用",
  "三个输入槽、并行烧炼，塑料外壳包着金齿轮。前面那条橡胶线的塑料，终于有地方用了。",
  [(IF + "resourceful_furnace", 1)])


# ---------------------------------------------------------------- 读写

def read_chapter():
    """读章节并统一成 LF：原文是 CRLF，正则里混着写容易漏匹配。输出时再统一回 CRLF。"""
    raw = open(os.path.join(CH_DIR, CHAPTER_FILE + ".snbt"), encoding="utf-8", newline="").read()
    return raw.replace(chr(13) + chr(10), chr(10))


def parse_quests(text):
    """从原章节里抓出每个任务的 id 与 task（保留 task id，存档进度才不会丢）。"""
    body = text.split("quests: [", 1)[1]
    blocks = re.findall(r"\n\t\t\{(.*?)\n\t\t\}", body, re.S)
    out = {}
    for b in blocks:
        qid = re.search(r"\n\t\t\tid: \"([0-9A-F]{16})\"", b)
        if not qid:
            continue
        tasks = []
        for tm in re.finditer(
                r'\n\s*(?:count: \d+L\n\s*)?id: "([0-9A-F]{16})"\n\s*item: \{ count: \d+, id: "([^"]+)" \}',
                b):
            tasks.append(dict(tid=tm.group(1), item=tm.group(2)))
        out[qid.group(1)] = tasks
    return out


def block(qid, tasks):
    meta = TEXTS[qid]
    x, y, deps = LAYOUT[qid]
    out = [TAB * 2 + "{"]
    out.append(TAB * 3 + "dependencies: [%s]" % ", ".join('"%s"' % d for d in deps))
    out.append(TAB * 3 + "id: \"%s\"" % qid)
    icon = meta["icon"] or meta["tasks"][0][0]
    out.append(TAB * 3 + "icon: {")
    out.append(TAB * 4 + "id: \"%s\"" % icon)
    out.append(TAB * 3 + "}")
    if meta["reward"]:
        rid = NEW_R % (list(TEXTS).index(qid) + 1)
        out.append(TAB * 3 + "rewards: [{")
        out.append(TAB * 4 + "id: \"%s\"" % rid)
        out.append(TAB * 4 + "item: {")
        out.append(TAB * 5 + "count: %d" % meta["reward"][1])
        out.append(TAB * 5 + "id: \"%s\"" % meta["reward"][0])
        out.append(TAB * 4 + "}")
        out.append(TAB * 4 + 'type: "item"')
        out.append(TAB * 3 + "}]")
    if qid in MILESTONES:
        out.append(TAB * 3 + 'shape: "hexagon"')
    out.append(TAB * 3 + "tasks: [")
    for task in tasks[qid]:
        out.append(TAB * 4 + "{")
        if task["count"] and task["count"] > 1:
            out.append(TAB * 5 + "count: %dL" % task["count"])
        out.append(TAB * 5 + "id: \"%s\"" % task["tid"])
        out.append(TAB * 5 + "item: { count: 1, id: \"%s\" }" % task["item"])
        out.append(TAB * 5 + 'type: "item"')
        out.append(TAB * 4 + "}")
    out.append(TAB * 3 + "]")
    out.append(TAB * 3 + "x: %.1fd" % x)
    out.append(TAB * 3 + "y: %.1fd" % y)
    out.append(TAB * 2 + "}")
    return out


def chapter_text(tasks):
    text = read_chapter()
    mark = "\n\tquests: ["
    out = text[:text.index(mark)].split("\n")
    out.append(TAB + "quests: [")
    for group in (TRUNK_IDS, BRANCH_A, BRANCH_B, BRANCH_C, BRANCH_D, BRANCH_E):
        for entry in group:
            out.extend(block(entry[0], tasks))
    out.append(TAB + "]")
    out.append("}")
    return "\r\n".join(out) + "\r\n"


def collect_tasks(existing):
    """已有任务沿用原 task id（进度是按 task id 记的），数量与物品按新的设计走。"""
    tasks = {}
    fresh = 0
    for qid, meta in TEXTS.items():
        got = existing.get(qid, [])
        lst = []
        for i, (item, count) in enumerate(meta["tasks"]):
            if i < len(got) and got[i]["item"] == item:
                tid = got[i]["tid"]
            else:
                fresh += 1
                tid = NEW_T % fresh
            lst.append(dict(count=count, tid=tid, item=item))
        tasks[qid] = lst
    return tasks, fresh


def lang_lines():
    lines = []
    for qid, meta in TEXTS.items():
        lines.append('\tquest.%s.title: "%s"' % (qid, meta["title"]))
        lines.append('\tquest.%s.quest_subtitle: "%s"' % (qid, meta["sub"]))
        lines.append('\tquest.%s.quest_desc: ["%s"]' % (qid, meta["desc"]))
    return lines


def append_lang(lines):
    """把条目插到收尾大括号之前，保留 CRLF；重跑时先摘掉上一轮同一批 key。"""
    raw = open(LANG, encoding="utf-8", newline="").read()
    crlf = chr(13) + chr(10)
    nl = chr(10)
    tab = chr(9)
    eol = crlf if crlf in raw else nl
    body = raw.replace(crlf, nl)
    if ("quest.%s.title" % TRUNK_IDS[0][0]) in body:
        marked = tuple(tab + "quest.%s." % q for q in TEXTS)
        body = nl.join(l for l in body.split(nl) if not l.startswith(marked))
    body = body.rstrip()
    assert body.endswith("}"), "lang 结尾不是 }"
    body = body[:-1].rstrip(nl)
    body += nl + nl.join(lines) + nl + "}" + nl
    open(LANG, "w", encoding="utf-8", newline="").write(body.replace(nl, eol))


existing = parse_quests(read_chapter())
missing = [q for q in TEXTS if q not in existing and not q.startswith("E1D1")]
if missing:
    raise SystemExit("原章节里找不到这些任务，先人工确认 id：%s" % missing)

tasks, fresh = collect_tasks(existing)
new_quests = [q for q in TEXTS if q not in existing]
text = chapter_text(tasks)   # 先算好再开文件：open(..., "w") 会立刻清空
open(os.path.join(CH_DIR, CHAPTER_FILE + ".snbt"), "w", encoding="utf-8", newline="").write(text)
append_lang(lang_lines())
print("电力时代：%d 个任务（新任务 %d 个 / 新 task id %d 个）" % (len(TEXTS), len(new_quests), fresh))
print("分支：主线 %d / A %d / B %d / C %d / D %d / E %d" % (
    len(TRUNK_IDS), len(BRANCH_A), len(BRANCH_B), len(BRANCH_C), len(BRANCH_D), len(BRANCH_E)))
