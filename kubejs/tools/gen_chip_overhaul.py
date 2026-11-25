#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""光刻 / 芯片魔改数值发生器。

把「光源波长 x 数值孔径 x 掩模节点 x 投影物镜 x 晶圆纯度」算成表，口径与
server_scripts/silicon/litho_recipes.js 完全一致：分辨率按瑞利公式
R = k1 * lambda / NA 反推，多重曝光按 k1 = 0.28 再翻一倍。
改完参数重跑即可，不要手算。
"""

# ---------------- 参数 ----------------
# 掩模: 节点标签 / 节点纳米数 / 最低晶圆纯度
MASKS = {
    1: ("1.5µm", 1500, 1),
    2: ("800nm", 800, 1),
    3: ("350nm", 350, 2),
    4: ("180nm", 180, 3),
    5: ("90nm", 90, 3),
    6: ("28nm", 28, 4),
}

# 光刻机: 名称 / 波长 nm / 数值孔径 / 功耗 / 节拍秒 / 会不会多重曝光
MACHINES = {
    1: dict(name="Mk.I", source="g 线汞灯", nm=436, na=0.28, fe=32, secs=60, multi=False),
    2: dict(name="Mk.II", source="i 线汞灯", nm=365, na=0.55, fe=128, secs=40, multi=False),
    3: dict(name="Mk.III", source="KrF 准分子", nm=248, na=0.70, fe=512, secs=20, multi=False),
    4: dict(name="Mk.IV", source="ArF 浸没", nm=193, na=1.35, fe=2048, secs=10, multi=True),
}

# 投影物镜: 名称 / 可透最短波长 / 可透最长波长 / 良率加成
OPTICS = {
    1: ("紫外玻璃", 400, 700, 0.00),
    2: ("熔石英", 240, 450, 0.03),
    3: ("氟化钙", 150, 400, 0.06),
    4: ("浸没式镜组", 190, 200, 0.10),
}

# 晶圆纯度: 名称
WAFERS = {
    1: "6N 晶圆",
    2: "9N 高纯晶圆",
    3: "11N 超高纯晶圆",
    4: "12N 极限纯晶圆",
}

# 分选率（切割机里按规格单筛）
GRADES = {"i9": 0.55, "i7": 0.70, "i5": 0.85, "i3": 0.95}

K1_SINGLE = 0.45
K1_MULTI = 0.28


def min_node_single(mk):
    m = MACHINES[mk]
    return K1_SINGLE * m["nm"] / m["na"]


def min_node_multi(mk):
    m = MACHINES[mk]
    return K1_MULTI * m["nm"] / m["na"] / 2


def exposures(mk, mask):
    """能印几次曝光：0 = 这台机器压根没有这条配方。"""
    node = MASKS[mask][1]
    if node >= min_node_single(mk):
        return 1
    if MACHINES[mk]["multi"] and node >= min_node_multi(mk):
        return 2
    return 0


def optics_for(mk):
    nm = MACHINES[mk]["nm"]
    return [o for o, (_, lo, hi, _) in OPTICS.items() if lo <= nm <= hi]


def k1_of(mk, mask):
    m = MACHINES[mk]
    return MASKS[mask][1] * m["na"] / m["nm"]


def yield_of(mk, mask, optics):
    base = max(0.05, min(0.97, 0.20 + 0.80 * (k1_of(mk, mask) / 0.85)))
    return max(0.05, min(0.99, base + OPTICS[optics][3] - (exposures(mk, mask) - 1) * 0.10))


def dies_per_wafer(wafer, mask):
    delta = min(3, max(0, wafer - MASKS[mask][2]))
    return 4 ** delta


def chips(wafer, mask, grade):
    return max(1, int(dies_per_wafer(wafer, mask) * GRADES[grade] + 0.5))


def legal_combos():
    for mk in MACHINES:
        for mask in MASKS:
            if not exposures(mk, mask):
                continue
            for optics in optics_for(mk):
                for wafer in range(MASKS[mask][2], 5):
                    yield mk, mask, optics, wafer


def recipe_counts():
    exposure = sum(1 for _ in legal_combos())
    dice = sum(len(GRADES)
               for mask in MASKS
               for wafer in range(MASKS[mask][2], 5))
    return exposure, dice


def table_machine_md():
    out = ["| 光刻机 | 光源 | NA | 单次极限 | 掩模 | 物镜 | FE/t·节拍 |",
           "|---|---|---|---|---|---|---|"]
    for mk, m in MACHINES.items():
        masks = "、".join("M%d" % i for i in MASKS if exposures(mk, i) == 1)
        multi = [i for i in MASKS if exposures(mk, i) == 2]
        if multi:
            masks += "，M%d 需双重曝光" % multi[0]
        optics = "、".join("O%d" % o for o in optics_for(mk))
        out.append("| %s | %d nm（%s） | %.2f | %.0f nm | %s | %s | %d·%ds |" % (
            m["name"], m["nm"], m["source"], m["na"],
            min_node_single(mk), masks, optics, m["fe"], m["secs"]))
    return chr(10).join(out)


def table_optics_md():
    out = ["| 物镜 | 透光区间 | 配哪台机 | 良率加成 |", "|---|---|---|---|"]
    for o, (name, lo, hi, bonus) in OPTICS.items():
        fits = "、".join(m["name"] for mk, m in MACHINES.items() if o in optics_for(mk))
        out.append("| O%d %s | %d–%d nm | %s | +%.0f%% |" % (o, name, lo, hi, fits, bonus * 100))
    return chr(10).join(out)


def table_wafer_md():
    out = ["| 掩模 | 要求晶圆 | W1 6N | W2 9N | W3 11N | W4 12N |", "|---|---|---|---|---|---|"]
    for mask in MASKS:
        row = ["M%d %s" % (mask, MASKS[mask][0]), "W%d" % MASKS[mask][2]]
        for w in range(1, 5):
            row.append("—" if w < MASKS[mask][2] else "%d 片" % dies_per_wafer(w, mask))
        out.append("| " + " | ".join(row) + " |")
    return chr(10).join(out)


def table_yield_md():
    out = ["| 光刻机 + 物镜 | M1 | M2 | M3 | M4 | M5 | M6 |", "|---|---|---|---|---|---|---|"]
    for mk in MACHINES:
        for o in optics_for(mk):
            cells = []
            for mask in MASKS:
                if exposures(mk, mask):
                    cells.append("%.0f%%" % (yield_of(mk, mask, o) * 100))
                else:
                    cells.append("—")
            out.append("| %s + O%d %s | %s |" % (
                MACHINES[mk]["name"], o, OPTICS[o][0], " | ".join(cells)))
    return chr(10).join(out)


def table_case_md():
    out = ["| 光刻机 | 物镜 | 掩模 | 晶圆 | 裸片 | i9 | i7 | i5 | i3 |",
           "|---|---|---|---|---|---|---|---|---|"]
    cases = [(4, 4, 6, 4), (4, 4, 5, 4), (4, 4, 1, 4), (2, 2, 1, 4), (2, 2, 1, 1)]
    for mk, o, mask, wafer in cases:
        row = [MACHINES[mk]["name"], "O%d %s" % (o, OPTICS[o][0]),
               "M%d %s" % (mask, MASKS[mask][0]), WAFERS[wafer],
               str(dies_per_wafer(wafer, mask))]
        for g in ("i9", "i7", "i5", "i3"):
            row.append(str(chips(wafer, mask, g)))
        out.append("| " + " | ".join(row) + " |")
    return chr(10).join(out)


if __name__ == "__main__":
    e, d = recipe_counts()
    print("曝光配方 %d 条 / 切割配方 %d 条" % (e, d))
    print(chr(10) + "## 光刻机" + chr(10) + table_machine_md())
    print(chr(10) + "## 投影物镜" + chr(10) + table_optics_md())
    print(chr(10) + "## 晶圆倍率" + chr(10) + table_wafer_md())
    print(chr(10) + "## 良率矩阵" + chr(10) + table_yield_md())
    print(chr(10) + "## 算例" + chr(10) + table_case_md())
