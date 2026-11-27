# -*- coding: utf-8 -*-
"""任务书体检：id 唯一、依赖有归属、坐标不重叠、依赖线不交叉、文案齐全。

为什么单独写一个：FTB 只在游戏里才会抱怨，章节文件是手写/脚本生成的，
一次重排几十格，靠肉眼是看不出来的。这个脚本只读文件，不起游戏。

用法：
    python kubejs/tools/check_quests.py            # 全部章节
    python kubejs/tools/check_quests.py 514fd6a3f6ee847d
退出码 0 = 全部通过。
"""
import glob
import math
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from check_snbt import Err, check  # noqa: E402

CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

# 跨章依赖：这几章的入口指向上一章的出口，靠 QUEST_LINES 的口径认
# 历史悬空依赖：这两条是旧轮次留下的，指向早已删掉的格；先记在这里不挡体检，
# 真修的时候改章节文件，不要从这个表里删。
KNOWN_DANGLING = {
    ("39F9A7586935F24F", "3CB5ED5FCBF41934"),
    ("2EC7210E5C7222BA", "730DB8459C4DC0F4"),
}

KNOWN_ENTRIES = {
    "04775118903D8E3F",  # 原始章「原型流式腐蚀釜」
    "35B9A0B50B6D5A7C",  # 蒸汽章「蒸汽轧机」
    "5F132AD862CA787E",  # 机械动力章收尾
    "4C818472A5267465",  # 末地物质
}


def _num(value):
    try:
        return float(str(value).rstrip("dD"))
    except (TypeError, ValueError):
        return None


def _dist_to_segment(p, a, b):
    (px, py), (ax, ay), (bx, by) = p, a, b
    dx, dy = bx - ax, by - ay
    length = dx * dx + dy * dy
    t = 0.0 if not length else max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / length))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))


def _segments_cross(a, b, c, d):
    def side(p, q, r):
        return (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0])
    return ((side(c, d, a) > 0) != (side(c, d, b) > 0)
            and (side(a, b, c) > 0) != (side(a, b, d) > 0))


def crossings(quests):
    """依赖线画歪的两种：一条线穿过别的格子，或两条线相交（不含共用端点）。"""
    pos = {}
    for q in quests:
        x, y = _num(q.get("x")), _num(q.get("y"))
        if x is not None and y is not None:
            pos[q.get("id")] = (x, y)
    segs = []
    for q in quests:
        for dep in q.get("dependencies") or []:
            if q.get("id") in pos and dep in pos:
                segs.append((q.get("id"), dep, pos[q.get("id")], pos[dep]))
    hits = []
    for qid, dep, a, b in segs:
        for other, p in pos.items():
            if other not in (qid, dep) and _dist_to_segment(p, a, b) < 0.5:
                hits.append("%s→%s 穿过 %s" % (qid, dep, other))
    for i in range(len(segs)):
        for j in range(i + 1, len(segs)):
            q1, d1, a1, b1 = segs[i]
            q2, d2, a2, b2 = segs[j]
            if {q1, d1} & {q2, d2}:
                continue
            if _segments_cross(a1, b1, a2, b2):
                hits.append("%s→%s 与 %s→%s 相交" % (q1, d1, q2, d2))
    return hits


def quests_of(path):
    data = check(path)
    return [q for q in data.get("quests", []) if isinstance(q, dict)]


def main(argv):
    files = sorted(glob.glob(os.path.join(CH_DIR, "*.snbt")))
    if argv:
        files = [f for f in files if any(a in f for a in argv)]

    lang = open(LANG, encoding="utf-8").read()
    seen_ids, problems, warnings, counted = {}, [], [], {}
    entries = {}

    for path in files:
        quests = quests_of(path)
        counted[path] = len(quests)
        coords = {}
        for q in quests:
            qid = q.get("id")
            if not (isinstance(qid, str) and re.fullmatch(r"[0-9A-F]{16}", qid)):
                problems.append("%s：任务 id 不合规 %r" % (path, qid))
                continue
            if qid in seen_ids:
                problems.append("%s：任务 id 重复 %s（另一处在 %s）"
                                % (path, qid, seen_ids[qid]))
            seen_ids[qid] = path
            entries[qid] = q
            key = (q.get("x"), q.get("y"))
            if key[0] is not None:
                coords.setdefault(key, []).append(qid)

        for key, ids in coords.items():
            if len(ids) > 1:
                problems.append("%s：坐标 %s 上叠了 %s" % (path, key, ids))

        # 点名要看的章节，交叉线算失败；别的旧章只记一笔，别把老账算成本次的
        for line in crossings(quests):
            (problems if argv else warnings).append(
                "%s：%s" % (os.path.basename(path), line))

    for qid, q in entries.items():
        deps = q.get("dependencies") or []
        for dep in deps:
            if dep == qid:
                problems.append("%s：依赖了自己" % qid)
            elif dep not in entries and dep not in KNOWN_ENTRIES:
                if (qid, dep) in KNOWN_DANGLING:
                    continue
                problems.append("%s：依赖 %s 不存在" % (qid, dep))

    gaps = {}
    for qid in entries:
        miss = []
        if not re.search(r"\tquest\.%s\.title: " % qid, lang):
            miss.append("标题")
        if not re.search(r"\tquest\.%s\.quest_desc: " % qid, lang):
            miss.append("正文")
        if miss:
            gaps[qid] = "/".join(miss)

    for path in files:
        quests = quests_of(path)
        n = len([q for q in quests if q.get("id") in gaps])
        print("%-46s %3d 个任务%s"
              % (os.path.basename(path), counted[path],
                 "，%d 格缺文案" % n if n else ""))
    if problems:
        print()
        for p in problems:
            print("FAIL " + p)
        return 1
    print()
    print("结构通过：%d 个任务，id 唯一、依赖有归属、坐标不重叠" % len(entries))
    if warnings:
        print("依赖线有 %d 处画歪（旧章遗留，点章节名跑就按失败算）：" % len(warnings))
        for w in warnings:
            print("  " + w)
    if gaps:
        print("文案缺口 %d 格（多数是别的章节里的旧任务，不影响本节）：" % len(gaps))
        for qid, miss in sorted(gaps.items()):
            print("  %s 缺 %s" % (qid, miss))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
