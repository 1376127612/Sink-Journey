# -*- coding: utf-8 -*-
"""按章节文件生成 kubejs/docs/QUEST_LINES.md（任务结构文档）。

用法：
    python kubejs/tools/gen_quest_doc.py
"""
import os
import re

CH = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"
OUT = "kubejs/docs/QUEST_LINES.md"

CHAPTERS = [
    ("3f5a7c2b9e1d4a60", "原始时代", "工业起步", 1, "5F132AD862CA787E", "机械动力章收尾"),
    ("5fe0048b1a2b6a65", "工业之始", "工业起步", 3, "04775118903D8E3F", "原始章「原型流式腐蚀釜」"),
    ("e1c0000000000000", "电力时代", "科技革命", 1, "35B9A0B50B6D5A7C", "蒸汽章「蒸汽轧机」"),
]

lang = open(LANG, encoding="utf-8").read()

IU_LANG = "kubejs/assets/industrialupgrade/lang/zh_cn.json"


def load_names():
    """物品 id -> 中文名：先取模组 jar 里的 lang，再用 kubejs 里的覆盖盖上去。"""
    import glob
    import json
    import zipfile

    out = {}

    def absorb(raw):
        for key, value in raw.items():
            if key.startswith("iu."):
                path = key[3:]
            elif key.startswith("industrialupgrade."):
                path = key[len("industrialupgrade."):]
            else:
                continue
            if "." not in path:
                continue
            group, rest = path.split(".", 1)
            out["industrialupgrade:%s/%s" % (group, rest)] = value

    for jar in glob.glob("mods/*IndustrialUpgrade*.jar") + glob.glob("mods/*工业升级*.jar"):
        with zipfile.ZipFile(jar) as z:
            name = "assets/industrialupgrade/lang/zh_cn.json"
            if name in z.namelist():
                absorb(json.loads(z.read(name)))
                break
    absorb(json.load(open(IU_LANG, encoding="utf-8")))
    return out


names = load_names()


def title(q):
    m = re.search(r'\tquest\.%s\.title: "(.*?)"' % q, lang)
    return m.group(1) if m else q


def read(ch):
    text = open(os.path.join(CH, ch + ".snbt"), encoding="utf-8").read()
    quests, order = {}, []
    for b in re.findall(r"\n\t\t\{(.*?)\n\t\t\}", text.split("quests: [", 1)[1], re.S):
        q = re.search(r'\n\t\t\tid: "([0-9A-F]{16})"', b).group(1)
        d = re.search(r"\n\t\t\tdependencies: \[(.*?)\]", b)
        shape = re.search(r'\n\t\t\tshape: "(.*?)"', b)
        quests[q] = dict(
            x=float(re.search(r"\n\t\t\tx: ([\d.-]+)d", b).group(1)),
            y=float(re.search(r"\n\t\t\ty: ([\d.-]+)d", b).group(1)),
            deps=[e.strip('"') for e in d.group(1).split(", ")] if d else [],
            shape=shape.group(1) if shape else "",
            tasks=len(re.findall(r"\n\t\t\t\t\ttype: \"item\"", b)),
            title=title(q))
        order.append(q)
    return quests, order


def main_line(quests):
    return [q for q in sorted(quests, key=lambda k: quests[k]["x"])
            if quests[q]["y"] == 0.0]


def branches(quests, line):
    others = [q for q in quests if q not in line]
    out = []
    for y in sorted({quests[q]["y"] for q in others}, reverse=True):
        group = sorted([q for q in others if quests[q]["y"] == y],
                       key=lambda k: quests[k]["x"])
        while group:
            head = next(q for q in group
                        if not quests[q]["deps"] or quests[q]["deps"][0] not in group)
            chain = [head]
            group.remove(head)
            while True:
                nxt = [q for q in group if quests[q]["deps"] == [chain[-1]]]
                if not nxt:
                    break
                chain.append(nxt[0])
                group.remove(nxt[0])
            out.append((y, chain))
    return out


def table(cells, rows):
    out = ["| " + " | ".join(cells) + " |",
           "| " + " | ".join("---" if i else "---:" for i in range(len(cells))) + " |"]
    out.extend(rows)
    return chr(10).join(out)


def chapter_section(ch, name, group, order_index, entry, entry_name, lines):
    quests, _ = read(ch)
    line = main_line(quests)
    branches_ = branches(quests, line)

    lines += ["### %s（主线 %d + 支线 %d）" % (name, len(line), len(quests) - len(line)), ""]
    lines += ["`%s.snbt`，分组「%s」，`order_index: %d`，共 %d 个任务。"
              % (ch, group, order_index, len(quests)), ""]

    ids = {q: "M%d" % (i + 1) for i, q in enumerate(line)}
    for bi, (y, chain) in enumerate(branches_, 1):
        for i, q in enumerate(chain):
            ids[q] = "B%d_%d" % (bi, i + 1)

    graph = ["```mermaid", "graph LR"]
    for i, q in enumerate(line):
        graph.append('    M%d["%s"]' % (i + 1, quests[q]["title"]))
    for i in range(len(line) - 1):
        graph.append("    M%d --> M%d" % (i + 1, i + 2))
    for bi, (y, chain) in enumerate(branches_, 1):
        _deps = quests[chain[0]]["deps"]
        prev = ids.get(_deps[0]) if _deps else None
        for i, q in enumerate(chain):
            graph.append('    %s["%s"]' % (ids[q], quests[q]["title"]))
            if prev:
                graph.append("    %s --> %s" % (prev, ids[q]))
            prev = ids[q]
    graph.append("```")
    lines += graph + [""]

    rows = []
    for i, q in enumerate(line, 1):
        _d = quests[q]["deps"]
        dep = entry if not _d or _d == [entry] else _d[0]
        rows.append("| %d | %s | `%s` | `%s` | %s |"
                    % (i, quests[q]["title"], q, dep,
                       "六边形" if quests[q]["shape"] == "hexagon" else ""))
    lines += ["**主线**，`y = 0`，一格 2.0，第 N 格只依赖第 N-1 格：", "",
              table(["#", "任务", "id", "依赖", "形状"], rows), ""]
    lines += ["第一格的跨章依赖是上一章的出口 `%s`（%s）。" % (entry, entry_name), ""]

    for bi, (y, chain) in enumerate(branches_, 1):
        _d0 = quests[chain[0]]["deps"]
        root = _d0[0] if _d0 else entry
        anchor = quests[root]["title"] if root in quests else entry_name
        rows = []
        for i, q in enumerate(chain, 1):
            _dq = quests[q]["deps"]
            dep = _dq[0] if _dq else entry
            rows.append("| %d | %s | `%s` | `%s` |" % (i, quests[q]["title"], q, dep))
        lines += ["**支线 %d**，`y = %.0f`，挂在「%s」上，%d 格单链："
                  % (bi, y, anchor, len(chain)), "",
                  table(["顺序", "任务", "id", "依赖"], rows), ""]
    return lines


def build():
    lines = [
        "# 任务结构：三章主线与产线",
        "",
        "> 版本：本包 1.21.1 / NeoForge / FTB Quests 2101.1.38",
        "> 覆盖章节：原始时代 / 工业之始 / 电力时代",
        "> 排布生成器：`kubejs/tools/gen_linear_quest_tree.py`",
        "> 本文档生成器：`kubejs/tools/gen_quest_doc.py`（表格与流程图直接从章节文件读）",
        "> 文案：`config/ftbquests/quests/lang/zh_cn.snbt`",
        "",
        "---",
        "",
        "## 1. 结构怎么读",
        "",
        "**一格一道工序。** 主线上每一格是一台机器、一道工序，或者一座多方块结构；"
        "多方块的砖、部件、控制器、燃料箱并进同一格，不再拆成建造清单。"
        "主线横铺在 `y = 0`，一格 2.0，第 N 格只依赖第 N-1 格，走完全部等于把这一时代走了一遍。",
        "",
        "**支线是产线，不是图鉴。** 主线之外还需要的加工机台各自成一条支线，落在 `y = ±4 / ±8`，"
        "根节点竖直挂在主线上，同一条支线内部也是单链：从第一台接手的机器一路排到最后一台。"
        "支线可以整条不做，主线不会因此卡住。",
        "",
        "**入口交代去处。** 每条支线的第一格，正文末尾有一句话说明这条线往后接哪几台、"
        "为什么不卡主线；主线那一格则说明它是必经的哪一步。读任务书的时候先看主线，再按需进支线。",
        "",
        "**形状只标记里程碑。** `hexagon` 留给时代入口、网络核心、收尾工程这类节点，其余用章节默认圆点。",
        "",
        "---",
        "",
        "## 2. 三章总览",
        "",
        "| 章节 | 任务 | 主线 | 支线 | 出口 |",
        "| --- | ---: | ---: | ---: | --- |",
    ]
    stats = []
    data = {}
    for ch, name, group, oi, entry, entry_name in CHAPTERS:
        quests, _ = read(ch)
        line = main_line(quests)
        data[ch] = quests
        stats.append((name, len(quests), len(line), len(quests) - len(line), quests[line[-1]]["title"]))
    for name, total, main, branch, exit_name in stats:
        lines.append("| %s | %d | %d | %d | %s |" % (name, total, main, branch, exit_name))
    lines += ["", "三章合计 %d 个任务，主线 %d 格，支线 %d 格。"
              % (sum(s[1] for s in stats), sum(s[2] for s in stats), sum(s[3] for s in stats)),
              "", "---", "", "## 3. 原始时代 / 工业之始 / 电力时代", ""]
    for ch, name, group, oi, entry, entry_name in CHAPTERS:
        lines = chapter_section(ch, name, group, oi, entry, entry_name, lines)
    return lines


def main():
    lines = build()

    merged = [q for q, v in read("3f5a7c2b9e1d4a60")[0].items() if v["tasks"] > 3]
    quests, _ = read("3f5a7c2b9e1d4a60")
    lines += [
        "---",
        "",
        "## 4. 多方块：零件并成一格",
        "",
        "熔炼炉原来拆成五格（熔炼砖 → 炉体 → 炉缸 → 控制器 → 熔炼炉），"
        "那是建造清单，不是工序。现在合成一格 `13B0197D7A36A72F`「熔炼炉（多方块）」，"
        "任务是把零件攒齐：",
        "",
    ]
    block = open(os.path.join(CH, "3f5a7c2b9e1d4a60.snbt"), encoding="utf-8").read()
    m = re.search(r'\n\t\t\tid: "13B0197D7A36A72F"(.*?)\n\t\t\}', block, re.S)
    parts = re.findall(r'\{\s*(?:count: (\d+)L\s*)?id: "[0-9A-F]{16}"\s*'
                       r'item: \{ count: \d+, id: "([^"]+)" \}', m.group(1), re.S)
    rows = []
    for count, item in parts:
        rows.append("| %s | `%s` | %s |" % (names.get(item, item), item, count or "1"))
    lines += [table(["零件", "物品 id", "数量"], rows), ""]
    lines += [
        "四格的 task id 全部搬进了这一格，所以老存档里那四格已有的进度自动算数；"
        "这一格原来的奖励写成了 `ftbquests:missing_item`（旧 id 迁移留下的坏奖励），已改回铜锭 ×16。",
        "",
        "蒸汽锅炉（多方块）本来就是一格，没动。",
        "",
        "---",
        "",
        "## 5. 存档兼容",
        "",
        "- 任务 id、task id、奖励 id 一律沿用，重排只改 `dependencies` / `x` / `y`。",
        "- 被合并的四个任务 id（`6CF34942F438033D` `13A2604227513CA1` `6BE74B67D1F9D1C3` "
        "`44D17A7248C73706`）已从章节和 lang 里删除，它们的 task id 仍在，挂在熔炼炉这一格下。",
        "- 游戏内手改出来的任务 id 缺文案时，`TEXT_RENAMES` 把旧 id 的文案搬过来；"
        "死键（指向已不存在任务的 `quest.<id>.*`）在清理时一起删掉。",
        "- `progression_mode: \"linear\"`，依赖链断掉的地方就是玩家卡住的地方，所以入口必须挂准上一章出口。",
        "",
        "---",
        "",
        "## 6. 改结构改哪里",
        "",
        "`kubejs/tools/gen_linear_quest_tree.py` 一份文件里三块内容：",
        "",
        "1. `CHAPTERS`：每章的 `main`（主线顺序）、`branches`（支线挂哪个锚点、y 车道、方向、顺序）、`entry`（跨章入口）。",
        "2. `MULTIBLOCKS`：哪几格零件的任务要并进哪一格，`tasks` 里写 `(物品, 数量, task id)`。",
        "3. `TEXT_APPEND` / `TEXT_OVERRIDES`：支线入口那句话、合并后任务的正文。",
        "",
        "改完跑 `python kubejs/tools/gen_linear_quest_tree.py`，它只动依赖和坐标；"
        "顺带校验：坐标不许重叠、任务必须全部排进去、不许出现未知 id。",
        "",
        "---",
        "",
        "## 7. 验收",
        "",
        "1. 重启，`/reload`，打开任务书。",
        "2. 三章主线各自是一条从左到右的直线，支线竖直挂在主线下方（电力章 AE 两条在上方）。",
        "3. 原始时代第一章应有 13 格：主线 12 格 + 手工轧机 1 格；熔炼炉一节里能一次看到全部零件。",
        "4. 每个任务都有标题、副标题与正文；支线第一格的正文末尾有一句「这条线往后接什么」。",
        "5. 老存档：熔炼炉这一格的完成度按原有零件进度计算，不会因为合并而清零。",
        "",
    ]
    body = chr(10).join(lines)
    open(OUT, "w", encoding="utf-8", newline="").write(body)
    print("wrote", OUT, len(body), "bytes")


if __name__ == "__main__":
    main()
