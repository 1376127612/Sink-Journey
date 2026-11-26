# -*- coding: utf-8 -*-
"""把四代光刻机拆到它们的阶段，并把 9N / 11N / 12N 三段晶圆工艺补成任务。

阶段口径（与 docs/SILICON_WAFER_TIERS.md 的纯度阶梯、docs/IU_CHIP_OVERHAUL.md
的掩模矩阵对齐）：

  电力时代   Mk.I  g 线 436nm · M1/M2 · W1 6N（区熔 + 直拉，本章已有）
  外星科技   ——   AE / 通用机械吃 W1 的芯片，不出光刻机；这一章给的是
                 锇莹黑合金，把机器接回本包的机壳链
  科技先锋   T2 改良西门子 → W2 9N → Mk.II  i 线 365nm · M3 350nm
  深入原子   T3 硅烷裂解 → W3 11N → Mk.III KrF 248nm · M4 180nm
             T4 磁控直拉 → W4 12N → Mk.IV  ArF 193nm · M5/M6

Mk.II / III / IV 的任务块整块搬走（id 不动，老存档进度连得上），
只重写 dependencies / x / y；新补的三段晶圆工艺是全新 id。

用法：
    python kubejs/tools/gen_stage_litho.py
"""
import os
import re

CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

E1C = "e1c0000000000000"      # 电力时代
ALIEN = "514fd6a3f6ee847d"    # 外星科技
MID = "5e566db5411e083c"      # 科技先锋
ATOM = "7c4e2f5cb393c0ae"     # 深入原子

MK1 = "5A1B00000000A102"
MK2 = "5A1B00000000A103"
MK3 = "5A1B00000000A104"
MK4 = "5A1B00000000A105"

# 搬家的任务：id, 从, 到, x, y, 依赖
MOVES = [
    (MK2, E1C, MID, 6.0, 12.0, ["A900000000000003"]),
    (MK3, E1C, ATOM, 6.0, -8.0, ["B100000000000003"]),
    (MK4, E1C, ATOM, 4.0, -12.0, ["C200000000000002"]),
]

# 新任务：id, 章节, x, y, 依赖, 形状, 图标, 任务物品, 数量, task id, 文本键
NEW = [
    ("A900000000000001", MID, 0.0, 12.0, [MK1], None,
     "kubejs:purified_tcs", "kubejs:purified_tcs", 1000, "A900000000000011"),
    ("A900000000000002", MID, 2.0, 12.0, ["A900000000000001"], None,
     "kubejs:siemens_poly", "kubejs:siemens_poly", 1, "A900000000000012"),
    ("A900000000000003", MID, 4.0, 12.0, ["A900000000000002"], None,
     "kubejs:wafer_9n", "kubejs:wafer_9n", 4, "A900000000000013"),

    ("B100000000000001", ATOM, 0.0, -8.0, ["A900000000000003"], None,
     "kubejs:silane", "kubejs:silane", 1000, "B100000000000011"),
    ("B100000000000002", ATOM, 2.0, -8.0, ["B100000000000001"], None,
     "kubejs:poly_11n", "kubejs:poly_11n", 1, "B100000000000012"),
    ("B100000000000003", ATOM, 4.0, -8.0, ["B100000000000002"], None,
     "kubejs:wafer_11n", "kubejs:wafer_11n", 4, "B100000000000013"),
    ("C200000000000001", ATOM, 0.0, -12.0, ["B100000000000003"], None,
     "kubejs:boule_12n", "kubejs:boule_12n", 1, "C200000000000011"),
    ("C200000000000002", ATOM, 2.0, -12.0, ["C200000000000001"], None,
     "kubejs:wafer_12n", "kubejs:wafer_12n", 4, "C200000000000012"),
]

TEXT = {
    "A900000000000001": ("精馏：切掉硼和磷", "6N 的天花板就在这一塔",
                         ["三氯硅烷进多方块蒸馏器：BCl3 沸点低、PCl3 沸点高，一头一尾切掉，中间 850mB 才是 9N 的料。",
                          "6N 片只能印到 800nm，再细就得靠这一塔把硼磷压下一个数量级。"]),
    "A900000000000002": ("西门子沉积：9N 多晶硅", "在硅芯上长棒",
                         ["高纯三氯硅烷进结晶器，一千一百度分解沉积在硅芯上，长成西门子多晶硅棒。",
                          "温度不够只会得到粉料——所以它不进熔炉，只进结晶器。"]),
    "A900000000000003": ("9N 单晶与切片", "拉出来再切",
                         ["西门子棒进单晶反应釜直拉成 9N 单晶硅，再进激光处理厂切四片 9N 晶圆。",
                          "拿到 9N 片，才算拿到 M3 350nm 的入场券：i 线机台只认这一档以上的晶圆。"]),
    "B100000000000001": ("歧化：三氯硅烷变硅烷", "塔器里的反应精馏",
                         ["三氯硅烷进通用塔器的反应精馏池，歧化成硅烷 + 四氯化硅；四氯化硅配氢回釜里再生三氯硅烷，氯不出口。",
                          "硅烷沸点 −112°C，本身又是一次精馏级提纯，11N 就从这里来。"]),
    "B100000000000002": ("裂解：11N 多晶硅", "八百度，直接分解",
                         ["硅烷进结晶器，八百度热分解成 11N 多晶硅。",
                          "这一步把碳氧与金属再压一档：M4 的 180nm 只认 11N 以上的片。"]),
    "B100000000000003": ("11N 单晶与切片", "M4 的料在这里",
                         ["11N 多晶硅进单晶反应釜直拉，激光处理厂切四片 11N 晶圆。",
                          "KrF 机台（M4 180nm）与 ArF 单次曝光（M5 90nm）都吃这一档。"]),
    "C200000000000001": ("磁控直拉：器件级晶棒", "用磁场压住对流",
                         ["2 份 11N 多晶硅 + 2000mB 液氦 + 1 根铌钛线圈进磁控直拉炉：出来器件级单晶硅棒。",
                          "纯度不再涨，涨的是晶体质量——磁场压住熔体对流，氧含量与径向电阻率才够 28nm 的双重曝光。"]),
    "C200000000000002": ("12N 切片：极限纯晶圆", "最后一代掩模的料",
                         ["器件级晶棒进激光处理厂，切四片 12N 晶圆。",
                          "M6 · 28nm 只有这一档能印；再往下要 EUV，本包没有。"]),
}

# Mk.II / III / IV 的正文补一句：它属于哪个阶段、壳子跟谁要
MOVE_APPEND = {
    MK2: "这台站在外星科技之后：壳子是电力机壳，料是 9N 片，掩模只印到 M3 350nm。",
    MK3: "壳子还是电力机壳，料换成 11N 片：M4 180nm 起，KrF 才跟得上。",
    MK4: "最后一台：12N 器件级片 + 浸没镜组，M5 90nm 与 M6 28nm 都在它身上；再细就要 EUV，本包封顶到这里。",
}


def read_chapter(path):
    text = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    head, body = text.split("\tquests: [\n", 1)
    body = "\n" + body
    tail_at = body.rindex("\n\t]")
    body, tail = body[:tail_at], body[tail_at:]
    blocks, order = {}, []
    for m in re.finditer(r"\n\t\t\{\n(.*?)\n\t\t\}", body, re.S):
        qid = re.search(r"\n\t\t\tid: \"([0-9A-F]{16})\"", m.group(0)).group(1)
        blocks[qid] = m.group(0)
        order.append(qid)
    return head, blocks, order, tail


def write_chapter(path, head, blocks, order, tail):
    body = "".join(blocks[q] for q in order)
    open(path, "w", encoding="utf-8", newline="\r\n").write(
        head + "\tquests: [" + body + tail)


def set_field(block, field, value):
    pat = re.compile(r"^\t\t\t%s: .*$" % field, re.M)
    if pat.search(block):
        return pat.sub("\t\t\t%s: %s" % (field, value), block, count=1)
    raise SystemExit("任务里没有 %s 字段" % field)


def new_block(qid, deps, x, y, icon, shape, item, count, tid):
    out = ["", "\t\t{"]
    out.append('\t\t\tdependencies: [%s]' % ", ".join('"%s"' % d for d in deps))
    out.append("\t\t\ticon: {")
    out.append('\t\t\t\tid: "%s"' % icon)
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


def main():
    chapters = {}
    for name in {E1C, ALIEN, MID, ATOM}:
        path = os.path.join(CH_DIR, name + ".snbt")
        chapters[name] = read_chapter(path)

    # ---- 1. 搬家 ----
    for qid, src, dst, x, y, deps in MOVES:
        s_head, s_blocks, s_order, s_tail = chapters[src]
        if qid in s_blocks:
            block = s_blocks.pop(qid)
            s_order.remove(qid)
            d_head, d_blocks, d_order, d_tail = chapters[dst]
            d_blocks[qid] = block
            d_order.append(qid)
            print("搬走 %s：%s → %s" % (qid, src, dst))
        d_head, d_blocks, d_order, d_tail = chapters[dst]
        block = d_blocks[qid]
        block = set_field(block, "dependencies",
                          "[%s]" % ", ".join('"%s"' % d for d in deps))
        block = set_field(block, "x", "%.1fd" % x)
        block = set_field(block, "y", "%.1fd" % y)
        if "shape" not in block:
            block = block.replace("\n\t\t\ttasks: [{", '\n\t\t\tshape: "hexagon"\n\t\t\ttasks: [{', 1)
        if "icon" not in block:
            machine = {MK2: "litho_mk2", MK3: "litho_mk3", MK4: "litho_mk4"}[qid]
            icon_field = '\n\t\t\ticon: {\n\t\t\t\tid: "mmcr:%s_controller"\n\t\t\t}\n\t\t\tid: ' % machine
            block = block.replace("\n\t\t\tid: ", icon_field, 1)
        d_blocks[qid] = block
        chapters[dst] = (d_head, d_blocks, d_order, d_tail)

    # ---- 2. 新任务 ----
    for qid, ch, x, y, deps, shape, icon, item, count, tid in NEW:
        head, blocks, order, tail = chapters[ch]
        if qid in blocks:
            continue
        blocks[qid] = new_block(qid, deps, x, y, icon, shape, item, count, tid)
        order.append(qid)
        print("新增 %s → %s" % (qid, ch))

    # ---- 3. 校验坐标不撞 ----
    for name, (head, blocks, order, tail) in chapters.items():
        seen = {}
        for q in order:
            x = re.search(r"\n\t\t\tx: ([\d.-]+)d", blocks[q]).group(1)
            y = re.search(r"\n\t\t\ty: ([\d.-]+)d", blocks[q]).group(1)
            key = (x, y)
            if key in seen:
                raise SystemExit("%s：%s 与 %s 撞在 %s" % (name, q, seen[key], key))
            seen[key] = q

    for name, (head, blocks, order, tail) in chapters.items():
        write_chapter(os.path.join(CH_DIR, name + ".snbt"), head, blocks, order, tail)

    # ---- 4. 文案 ----
    text = open(LANG, encoding="utf-8").read().replace("\r\n", "\n")
    added, lines = [], []
    for qid, (title, sub, desc) in TEXT.items():
        if "\tquest.%s.title: " % qid in text:
            continue
        lines.append('\tquest.%s.quest_desc: [' % qid)
        lines.extend('\t\t"%s"' % d for d in desc)
        lines.append("\t]")
        lines.append('\tquest.%s.quest_subtitle: "%s"' % (qid, sub))
        lines.append('\tquest.%s.title: "%s"' % (qid, title))
        added.append(qid)
    if lines:
        closed = text.rstrip()
        text = closed[:-1].rstrip("\n") + "\n\n" + "\n".join(lines) + "\n}\n"
        open(LANG, "w", encoding="utf-8", newline="\r\n").write(text)
    print("文案：新增 %d 格" % len(added))

    # ---- 5. 搬家任务的正文补一句阶段说明 ----
    text = open(LANG, encoding="utf-8").read().replace("\r\n", "\n")
    touched = 0
    for qid, line in MOVE_APPEND.items():
        m = re.search(r"\tquest\.%s\.quest_desc: \[\n(.*?)\n\t\]" % qid, text, re.S)
        if not m:
            continue
        body = m.group(1)
        if line in body:
            continue
        text = text.replace(m.group(0),
                            '\tquest.%s.quest_desc: [\n%s\n\t\t"%s"\n\t]' % (qid, body, line), 1)
        touched += 1
    if touched:
        open(LANG, "w", encoding="utf-8", newline="\r\n").write(text)
    print("文案：搬家任务补阶段说明 %d 格" % touched)


if __name__ == "__main__":
    main()
