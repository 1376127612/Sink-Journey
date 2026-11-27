# -*- coding: utf-8 -*-
"""查任务书的几何：格子有没有叠、连线有没有穿格或互穿。

FTB 任务格是一个 1×1 的方块，坐标就是它的中心；依赖连线是两格中心之间的直线。
所以三件事就能定死一张图干不干净：
  1. 同一章里没有两格同坐标；
  2. 任一棱线不会从别的格子中间穿过去（离格心不到 0.7）；
  3. 任意两条棱线除了共用端点之外不相交。

用法：
    python kubejs/tools/check_quest_geometry.py                      # 查全部章节
    python kubejs/tools/check_quest_geometry.py config/ftbquests/quests/chapters/xxx.snbt
"""
import glob
import io
import re
import sys

CELL = 0.7  # 线离格心小于这个就算穿格


def read_quests(path):
    text = io.open(path, encoding="utf-8", newline="").read().replace("\r\n", "\n")
    if "\tquests: [\n" not in text:
        return []
    head, body = text.split("\tquests: [\n", 1)
    body = "\n" + body
    at = body.rindex("\n\t]")
    out = []
    for m in re.finditer(r"\n\t\t\{\n(.*?)\n\t\t\}", body[:at], re.S):
        b = m.group(0)
        qid = re.search(r"\n\t\t\tid: \"([0-9A-F]{16})\"", b).group(1)
        x = re.search(r"\n\t\t\tx: (-?[\d.]+)d", b)
        y = re.search(r"\n\t\t\ty: (-?[\d.]+)d", b)
        if not (x and y):
            continue
        dep = re.search(r"\n\t\t\tdependencies: \[([^\]]*)\]", b)
        deps = re.findall(r'"([0-9A-F]{16})"', dep.group(1)) if dep else []
        out.append((qid, float(x.group(1)), float(y.group(1)), deps))
    return out


def seg_point_dist(p, a, b):
    ax, ay = a[0], a[1]
    bx, by = b[0], b[1]
    dx, dy = bx - ax, by - ay
    L = dx * dx + dy * dy
    if L == 0:
        return ((p[0] - ax) ** 2 + (p[1] - ay) ** 2) ** 0.5
    t = max(0.0, min(1.0, ((p[0] - ax) * dx + (p[1] - ay) * dy) / L))
    cx, cy = ax + t * dx, ay + t * dy
    return ((p[0] - cx) ** 2 + (p[1] - cy) ** 2) ** 0.5


def cross(o, a, b):
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])


def segs_cross(a, b, c, d):
    """两段是否真的相交（共用端点不算）。"""
    if {a, b} & {c, d}:
        return False
    d1, d2 = cross(c, d, a), cross(c, d, b)
    d3, d4 = cross(a, b, c), cross(a, b, d)
    return ((d1 > 0 and d2 < 0) or (d1 < 0 and d2 > 0)) and \
           ((d3 > 0 and d4 < 0) or (d3 < 0 and d4 > 0))


def check(path):
    quests = read_quests(path)
    if not quests:
        return 0
    pos = {q[0]: (q[1], q[2]) for q in quests}
    problems = []

    seen = {}
    for qid, x, y, _ in quests:
        if (x, y) in seen:
            problems.append("坐标撞车：%s 与 %s 都在 (%g, %g)" % (qid, seen[(x, y)], x, y))
        seen[(x, y)] = qid

    edges = []
    for qid, x, y, deps in quests:
        for d in deps:
            if d not in pos:
                problems.append("%s 的依赖 %s 不在本章" % (qid, d))
                continue
            edges.append((qid, d))

    for a, b in edges:
        pa, pb = pos[a], pos[b]
        for qid, p in pos.items():
            if qid in (a, b):
                continue
            if seg_point_dist(p, pa, pb) < CELL:
                problems.append("线 %s→%s 穿过 %s 的格子" % (a, b, qid))

    for i in range(len(edges)):
        for j in range(i + 1, len(edges)):
            a, b = edges[i]
            c, d = edges[j]
            if segs_cross(pos[a], pos[b], pos[c], pos[d]):
                problems.append("线 %s→%s 与 %s→%s 相交" % (a, b, c, d))

    name = path.split("/")[-1].split("\\")[-1]
    if problems:
        print("[x] %s：%d 个任务，%d 条线，%d 处问题"
              % (name, len(quests), len(edges), len(problems)))
        for p in problems[:20]:
            print("   ", p)
        return 1
    print("[ok] %s：%d 个任务，%d 条线，0 穿格 0 相交" % (name, len(quests), len(edges)))
    return 0


def main():
    args = sys.argv[1:]
    if not args:
        args = sorted(glob.glob("config/ftbquests/quests/chapters/*.snbt"))
    bad = 0
    for path in args:
        bad += check(path)
    if bad:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
