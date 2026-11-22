#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""光刻 / 芯片魔改数值发生器。

把「光刻机 x 激光头 x 掩模代 x 晶圆纯度 x 目标档位」的良率与产出算成表，
并统计需要注册的配方条数。docs/IU_CHIP_OVERHAUL.md 的表格来自本脚本，
改完参数重跑即可，不要手算。
"""

# ---------------- 参数 ----------------
# 掩模代 -> (工艺节点, 最低光刻机, 最低激光头, 最低晶圆)
MASKS = {
    1: ("1.5um", 1, 1, 1),
    2: ("800nm", 2, 1, 1),
    3: ("90nm", 3, 2, 2),
    4: ("28nm", 3, 3, 3),
    5: ("7nm", 4, 3, 3),
    6: ("3nm", 4, 4, 4),
}

# 光刻机: 基础良率 / 支持掩模 / 可装激光头 / 曝光秒数
MACHINES = {
    1: dict(name="Mk.I 接触式", base=0.55, masks=[1, 2], heads=[1], secs=60),
    2: dict(name="Mk.II i-line", base=0.70, masks=[1, 2, 3], heads=[1, 2], secs=40),
    3: dict(name="Mk.III DUV", base=0.85, masks=[1, 2, 3, 4], heads=[2, 3], secs=20),
    4: dict(name="Mk.IV EUV", base=0.95, masks=[1, 2, 3, 4, 5, 6], heads=[3, 4], secs=10),
}

# 激光头: 名称 / 良率加成
HEADS = {
    1: ("玻璃透镜", 0.00),
    2: ("石英镜头", 0.05),
    3: ("氟化钙镜头", 0.10),
    4: ("多层膜反射镜", 0.15),
}

# 晶圆纯度: 名称
WAFERS = {
    1: "6N 晶圆",
    2: "9N 高纯晶圆",
    3: "11N 超高纯晶圆",
    4: "12N 极限纯晶圆",
}

# 工艺难度（节点越细越难）
DIFF = {1: 1.00, 2: 0.95, 3: 0.90, 4: 0.85, 5: 0.80, 6: 0.75}

# 目标档位 -> 相对 i9 的放宽量，以及该档的通过率上限
GRADES = {"i9": (0.00, 0.99), "i7": (0.10, 0.95), "i5": (0.20, 0.97), "i3": (0.30, 0.99)}

BATCH = 1  # 每批 1 片晶圆 + 1 支激光头


def yield_rate(mk, head, mask):
    """该组合按 i9 规格筛选的通过率。"""
    base = MACHINES[mk]["base"] + HEADS[head][1]
    return max(0.05, min(0.99, base * DIFF[mask]))


def dies_per_wafer(wafer, mask):
    """向下兼容倍率 4^Δ，Δ 封顶 3，所以最高就是 1:16、1:64。"""
    delta = min(3, max(0, wafer - MASKS[mask][3]))
    return 4 ** delta


def pass_rate(mk, head, mask, grade):
    delta, cap = GRADES[grade]
    return min(cap, yield_rate(mk, head, mask) + delta)


def chips(mk, head, mask, wafer, grade):
    d = dies_per_wafer(wafer, mask) * BATCH
    return max(1, int(d * pass_rate(mk, head, mask, grade) + 0.5))


def legal_combos():
    for mk, m in MACHINES.items():
        for mask in m["masks"]:
            for head in m["heads"]:
                if head < MASKS[mask][2]:
                    continue
                for wafer in range(MASKS[mask][3], 5):
                    yield mk, mask, head, wafer


def recipes():
    return sum(len(GRADES) for _ in legal_combos())


def table_md():
    out = ["| 光刻机 | 基础良率 | 可用掩模 | 可装激光头 | 曝光 |", "|---|---|---|---|---|"]
    for mk, m in MACHINES.items():
        masks = "、".join("M%d" % i for i in m["masks"])
        heads = "、".join("H%d" % i for i in m["heads"])
        out.append("| %s | %.0f%% | %s | %s | %ds |" % (m["name"], m["base"] * 100, masks, heads, m["secs"]))
    return chr(10).join(out)


def table_wafer_md():
    out = ["| 掩模 | 要求晶圆 | W1 6N | W2 9N | W3 11N | W4 12N |", "|---|---|---|---|---|---|"]
    for mask in range(1, 7):
        row = ["M%d %s" % (mask, MASKS[mask][0]), "W%d" % MASKS[mask][3]]
        for w in range(1, 5):
            row.append("—" if w < MASKS[mask][3] else "%d 片" % dies_per_wafer(w, mask))
        out.append("| " + " | ".join(row) + " |")
    return chr(10).join(out)


def table_yield_md():
    out = ["| 光刻机 + 激光头 | M1 | M2 | M3 | M4 | M5 | M6 |", "|---|---|---|---|---|---|---|"]
    for mk, m in MACHINES.items():
        for head in m["heads"]:
            cells = []
            for mask in range(1, 7):
                if mask in m["masks"] and head >= MASKS[mask][2]:
                    cells.append("%.0f%%" % (yield_rate(mk, head, mask) * 100))
                else:
                    cells.append("—")
            out.append("| %s + H%d %s | %s |" % (m["name"], head, HEADS[head][0], " | ".join(cells)))
    return chr(10).join(out)


def table_case_md():
    out = ["| 光刻机 | 激光头 | 掩模 | 晶圆 | 裸片 | i9 | i7 | i5 | i3 |", "|---|---|---|---|---|---|---|---|---|"]
    cases = [(4, 4, 6, 4), (4, 3, 2, 4), (2, 1, 1, 4), (2, 1, 1, 1), (1, 1, 1, 4)]
    for mk, head, mask, wafer in cases:
        row = [MACHINES[mk]["name"], "H%d %s" % (head, HEADS[head][0]),
               "M%d %s" % (mask, MASKS[mask][0]), WAFERS[wafer],
               str(dies_per_wafer(wafer, mask) * BATCH)]
        for g in ("i9", "i7", "i5", "i3"):
            row.append(str(chips(mk, head, mask, wafer, g)))
        out.append("| " + " | ".join(row) + " |")
    return chr(10).join(out)


if __name__ == "__main__":
    print("配方条数：%d" % recipes())
    print(chr(10) + "## 光刻机" + chr(10) + table_md())
    print(chr(10) + "## 晶圆倍率" + chr(10) + table_wafer_md())
    print(chr(10) + "## 良率矩阵" + chr(10) + table_yield_md())
    print(chr(10) + "## 算例" + chr(10) + table_case_md())
