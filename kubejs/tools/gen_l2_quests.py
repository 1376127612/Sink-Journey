# -*- coding: utf-8 -*-
"""改良电力（L2）任务章：「科技先锋」重排 + 太空出口。

口径（2026-11-27 第七版，详见 docs/QUEST_WORKFLOW.md）：
  「科技先锋」一章承担整个 L2（48 格），一格一台机器或一道工序；口径与设计表见 `l2_design.py`：
    骨架 → 加工网 → 电网 → 铜与快 → 铂族出口（铂锭），框架套娃 / 镭射钻 / EnderIO 挂在主干上，
    钼线降为支线（只服务 316L 与 M3 掩模）。

  坐标不手填：`l2_layout.py` 把依赖当树分层，父格居中于子格，生成前做相交检查（0 交叉）。

  「第一小步」章（`25acb136e49b8bb8`，科技革命组 order 4）接住章出口：
      一阶火箭（依赖 139）→ 太空服与氧气 → 着陆月球；月球钛再回来开铂族线。

为什么不新建章节文件：
  FTB 2101 会把新建章节文件里的 chapter / quest / task id 重写成随机值并丢掉 dependencies，
  往已有章节追加则 id 原样保留。所以太空那段写进已有的空壳「第一小步」，不新建。

用法：
    python kubejs/tools/gen_l2_quests.py             # 按设计表重写两章（保留 id），补文案
    python kubejs/tools/gen_l2_quests.py --prune     # 一并删掉设计表以外的旧格
    python kubejs/tools/gen_l2_quests.py --sync      # 格 id 被 FTB 重写过时，按图标找回并改回来
"""
import io
import os
import re
import sys

NL = chr(10)
CRLF = chr(13) + chr(10)
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

CH_MAIN = "5e566db5411e083c"   # 科技先锋
CH_SPACE = "25acb136e49b8bb8"  # 第一小步（太空探索）

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from l2_design import CHAPTERS, ENTRY, MAIN_CELLS, SPACE_CELLS  # noqa: E402
from l2_layout import place, crossings  # noqa: E402


def placed(design, name):
    """坐标不手填：按依赖树算平面布局，保证依赖线不交叉。"""
    pos = place(design)
    bad = crossings(design, pos)
    if bad:
        print("!! %s 有 %d 处依赖线交叉：%s" % (name, len(bad), bad[:3]))
    return [(c[0], c[1], c[2], c[3], pos[c[0]][0], pos[c[0]][1]) + tuple(c[6:])
            for c in design]


MAIN_CELLS = placed(MAIN_CELLS, "科技先锋")
SPACE_CELLS = placed(SPACE_CELLS, "第一小步")


def read_chapter(path):
    text = io.open(path, encoding="utf-8", newline="").read().replace("\r\n", "\n")
    text = text.replace("quests: [ ]", "quests: [\n\t]")
    head, rest = text.split("quests: [", 1)
    i = rest.rindex("\n\t]")
    return head, rest[:i], rest[i:]


def blocks(body):
    return [(m.group(0), m.group(1)) for m in re.finditer(r"\n\t\t\{\n(.*?)\n\t\t\}", body, re.S)]


def info(inner):
    qid = re.search(r'\n\t\t\tid: "([0-9A-F]{16})"', inner)
    x = re.search(r"\n\t\t\tx: ([0-9.-]+)d", inner)
    y = re.search(r"\n\t\t\ty: ([0-9.-]+)d", inner)
    icon = re.search(r'icon: \{\n\t\t\t\tid: "([^"]+)"', inner)
    return (qid.group(1) if qid else None,
            float(x.group(1)) if x else None,
            float(y.group(1)) if y else None,
            icon.group(1) if icon else None)


def render(cell, qid, dep_ids, tid):
    key, did, dtid, dep, x, y, item, count, shape, title, sub, desc = cell
    out = ["", "\t\t{"]
    if dep_ids:
        out.append("\t\t\tdependencies: [%s]" % ", ".join('"%s"' % d for d in dep_ids))
    out.append("\t\t\ticon: {")
    out.append('\t\t\t\tid: "%s"' % item)
    out.append("\t\t\t}")
    out.append('\t\t\tid: "%s"' % qid)
    if shape:
        out.append('\t\t\tshape: "%s"' % shape)
    out.append("\t\t\ttasks: [{")
    if count > 1:
        out.append("\t\t\t\tcount: %dL" % count)
    out.append('\t\t\t\tid: "%s"' % tid)
    out.append('\t\t\t\titem: { count: 1, id: "%s" }' % item)
    out.append('\t\t\t\ttype: "item"')
    out.append("\t\t\t}]")
    out.append("\t\t\tx: %.1fd" % x)
    out.append("\t\t\ty: %.1fd" % y)
    out.append("\t\t}")
    return "\n".join(out)


def used_ids(exclude):
    used = set()
    for name in os.listdir(CH_DIR):
        if not name.endswith(".snbt") or name in exclude:
            continue
        used |= set(re.findall(r'id: "([0-9A-F]{16})"',
                               io.open(os.path.join(CH_DIR, name), encoding="utf-8").read()))
    return used


def set_header(head, meta):
    head = re.sub(r"order_index: \d+", "order_index: %d" % meta["order_index"], head)
    head = re.sub(r"\ticon: \{\n(?:.|\n)*?\n\t\}\n",
                  '\ticon: {\n\t\tid: "%s"\n\t}\n' % meta["icon"], head, count=1)
    return head


def resolve(ch_no, design, sync):
    """按 id（其次按图标）把设计表对到文件里已有的格；返回 key→id 与「设计 id→实际 id」的别名表。"""
    head, body, tail = read_chapter(os.path.join(CH_DIR, ch_no + ".snbt"))
    have = {}
    for raw, inner in blocks(body):
        qid, x, y, icon = info(inner)
        if qid:
            have[qid] = (x, y, icon)

    used = used_ids({ch_no + ".snbt"})
    by_icon = {}
    for qid, (x, y, icon) in have.items():
        by_icon.setdefault(icon, []).append(qid)

    resolved, aliases, created = {}, {}, []
    for cell in design:
        key, did, dtid, dep, x, y, item, count, shape, title, sub, desc = cell
        qid = did
        if did not in have and sync:
            cands = [i for i in by_icon.get(item, []) if i not in resolved.values()]
            if cands:
                qid = sorted(cands)[0]
        if qid in have:
            resolved[key] = qid
        else:
            while qid in used:
                qid = "%s%012X" % (did[:4], int(qid[4:], 16) + 1)
            used.add(qid)
            created.append(qid)
            resolved[key] = qid
        if qid != did:
            aliases[did] = qid
    return head, body, tail, resolved, aliases, created


def write_chapter(ch_no, design, head, body, tail, resolved, aliases, prune):
    """按设计表重写章节文件；依赖先按本节 key 解析，再按跨章别名表改写固定 id。"""
    def target(dep):
        return resolved.get(dep) or aliases.get(dep, dep)

    fresh = []
    for cell in design:
        qid = resolved[cell[0]]
        tid = cell[2] if qid == cell[1] else "%s%012X" % (cell[2][:4], int(qid[4:], 16))
        fresh.append(render(cell, qid, [target(d) for d in cell[3]], tid))

    keep = set(resolved.values())
    kept = [raw for raw, inner in blocks(body) if info(inner)[0] not in keep]
    dropped = [info(inner)[0] for raw, inner in blocks(body)
               if info(inner)[0] and info(inner)[0] not in keep] if prune else []

    body = NL.join(fresh) if prune else "".join(kept) + NL.join(fresh)
    io.open(os.path.join(CH_DIR, ch_no + ".snbt"), "w", encoding="utf-8", newline="").write(
        (set_header(head, CHAPTERS[ch_no]) + "quests: [" + body + tail).replace(NL, CRLF))
    return dropped



def lang_block(entries):
    lines = []
    for qid, title, sub, desc in entries:
        lines.append("\tquest.%s.quest_desc: [" % qid)
        for d in desc:
            lines.append('\t\t"%s"' % d.replace('"', '\\"'))
        lines.append("\t]")
        lines.append('\tquest.%s.quest_subtitle: "%s"' % (qid, sub.replace('"', '\\"')))
        lines.append('\tquest.%s.title: "%s"' % (qid, title.replace('"', '\\"')))
    return lines


def strip_lang(text, ids):
    for qid in ids:
        while True:
            m = re.search(r"\n\tquest\.%s\.quest_desc: \[(?:.|\n)*?\n\t\]\n" % qid, text)
            if not m:
                break
            text = text[:m.start()] + "\n" + text[m.end():]
        text = re.sub(r"\n\tquest\.%s\.quest_subtitle: [^\n]*\n" % qid, "\n", text)
        text = re.sub(r"\n\tquest\.%s\.title: [^\n]*\n" % qid, "\n", text)
    return text


def main(argv):
    prune = "--prune" in argv
    sync = "--sync" in argv
    raw = io.open(LANG, encoding="utf-8", newline="").read()
    crlf = CRLF in raw
    text = raw.replace(CRLF, NL)

    plan, aliases, report, dropped = {}, {}, [], []
    for ch_no, design in ((CH_MAIN, MAIN_CELLS), (CH_SPACE, SPACE_CELLS)):
        head, body, tail, resolved, alias, created = resolve(ch_no, design, sync)
        plan[ch_no] = (design, head, body, tail, resolved)
        aliases.update(alias)
        report.append("%s：%d 格，新建 %d%s"
                      % (CHAPTERS[ch_no]["title"], len(design), len(created),
                         "，id 迁移 %d" % len(alias) if alias else ""))

    for ch_no, (design, head, body, tail, resolved) in plan.items():
        dropped += write_chapter(ch_no, design, head, body, tail, resolved, aliases, prune)
    if prune:
        report = [r + "，删除 %d 格" % len(dropped) for r in report]

    text = strip_lang(text, [qid for (_, _, _, _, res) in plan.values() for qid in res.values()] + dropped)
    entries = []
    for design, _, _, _, res in plan.values():
        for cell in design:
            entries.append((res[cell[0]], cell[9], cell[10], cell[11]))

    for ch_no, meta in CHAPTERS.items():
        cid = re.search(NL + r'	id: "([0-9A-F]{16})"',
                        io.open(os.path.join(CH_DIR, ch_no + ".snbt"), encoding="utf-8").read()).group(1)
        text = re.sub(NL + r'	chapter\.' + cid + r'\.title: [^' + NL + ']*',
                      NL + '	chapter.' + cid + r'.title: "' + meta["title"] + '"', text)

    text = text.rstrip()
    assert text.endswith("}")
    text = text[:-1].rstrip() + NL + NL + NL.join(lang_block(entries)) + NL + "}" + NL
    io.open(LANG, "w", encoding="utf-8", newline="").write(text.replace(NL, CRLF) if crlf else text)

    print(NL.join(report))


if __name__ == "__main__":
    main(sys.argv[1:])
