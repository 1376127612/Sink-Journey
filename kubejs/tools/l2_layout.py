# -*- coding: utf-8 -*-
"""任务图的平面布局：树形分层，画出来不交叉。

为什么要它：FTB 的依赖线是两点之间的直线，手摆坐标很容易让两条线交叉（"太丑了"）。
这里把设计表里的依赖当成树，按「深度 = 最长路径」分层，叶子按 DFS 顺序分槽，
父节点坐在子节点的正中——树这样摆一定不交叉；只有少数「同层并流」的额外依赖
会真的画出第二条线，所以布局完之后会做一次线段相交检查，有交叉就报出来。

外部依赖（别的章节的 id）不参与布局，也不画线：FTB 把它们画成格子边上的小箭头。
"""

X_STEP = 1.5
Y_STEP = 1.8


def _depth_and_children(cells):
    index = {c[0]: i for i, c in enumerate(cells)}
    parents = {}
    for c in cells:
        parents[c[0]] = [d for d in c[3] if d in index]
    children = {k: [] for k in parents}
    for k, ps in parents.items():
        for p in ps[:1]:            # 布局只认第一个父节点（主父）
            children[p].append(k)
    depth = {}

    def depth_of(k, seen=()):
        if k in depth:
            return depth[k]
        ps = parents[k]
        depth[k] = 0 if not ps else 1 + max(depth_of(p) for p in ps)
        return depth[k]

    for k in parents:
        depth_of(k)
    roots = [k for k, ps in parents.items() if not ps]
    order = {c[0]: i for i, c in enumerate(cells)}
    for k in children:
        children[k].sort(key=lambda n: order[n])
    return parents, children, depth, roots, order


def place(cells, step=X_STEP, axis="h", wrap=0, gap=6.0):
    """返回 {key: (x, y)}；坐标单位与章节文件一致（1.0 = 一格）。

    axis="h"：深度往右、叶子往下（时代从左走到右，支线上下分叉，DJ2 的读法）；
    axis="v"：深度往下、叶子往右。
    """
    parents, children, depth, roots, order = _depth_and_children(cells)
    x = {}
    slot = [0.0]

    def assign(k):
        kids = [c for c in children[k] if c not in x]
        if not kids:
            x[k] = slot[0]
            slot[0] += 1.0
        else:
            for c in kids:
                assign(c)
            vals = [x[c] for c in children[k]]
            x[k] = (min(vals) + max(vals)) / 2.0

    for r in roots:
        assign(r)
    if axis != "h":
        return {k: (x[k] * step, depth[k] * step) for k in x}

    cols = wrap or (max(depth.values()) + 1)
    band = {k: depth[k] // cols for k in depth}
    span = (max(x.values()) + gap / step + 1)
    return {k: ((depth[k] % cols) * step, (x[k] + band[k] * span) * step) for k in x}


def _segments(cells, pos):
    index = {c[0] for c in cells}
    segs = []
    for c in cells:
        for d in c[3]:
            if d in index:
                segs.append((pos[d], pos[c[0]], d, c[0]))
    return segs


def _cross(a, b, c, d):
    def orient(p, q, r):
        v = (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0])
        return 0 if abs(v) < 1e-9 else (1 if v > 0 else -1)

    o1, o2 = orient(a, b, c), orient(a, b, d)
    o3, o4 = orient(c, d, a), orient(c, d, b)
    return o1 != o2 and o3 != o4


def crossings(cells, pos):
    segs = _segments(cells, pos)
    bad = []
    for i in range(len(segs)):
        for j in range(i + 1, len(segs)):
            a, b, ka, kb = segs[i]
            c, d, kc, kd = segs[j]
            if len({ka, kb, kc, kd}) < 4:
                continue
            if _cross(a, b, c, d):
                bad.append((ka, kb, kc, kd))
    # 同一条线上重叠（三点共线穿过中间的格子）也算丑
    for i in range(len(segs)):
        a, b, ka, kb = segs[i]
        for k, p in pos.items():
            if k in (ka, kb):
                continue
            if abs(a[0] - b[0]) < 1e-9 and abs(p[0] - a[0]) < 1e-9:
                lo, hi = sorted((a[1], b[1]))
                if lo < p[1] < hi:
                    bad.append((ka, kb, "穿过", k))
    return bad
