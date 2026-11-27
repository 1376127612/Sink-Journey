# -*- coding: utf-8 -*-
"""任务文案体检：照 DJ2 的写法卡死几条硬规矩。

为什么要它：文案一多，几种毛病会一起冒出来——一句话套三层从句、同一个东西换三种叫法、
「需要注意的是」「有助于」「进行预处理」这类没有信息量的词，还有中文写作里最常见的分号。
这些在任务书里会立刻变成 AI 味，玩家读两格就跳过。于是把规矩写进脚本，改文案时先跑一遍。

规矩（硬上限，不改）：
  1. 一段话里禁止分号（； 和 ;）。
  2. 标题、副标题不超过 20 字；正文每句不超过 25 字。
  3. 禁止营销形容词：无缝、强大、稳健、极致、丝滑、卓越……
  4. 禁止模糊动词堆砌：需要注意的是、值得一提、有助于、从而、有效地……
  5. 禁止名词化：进行、做出……用一个动词说清楚。
  6. 禁止短语动词：取下来、放进去、做出来……用取下、放入、做出。
  7. 一个事物一个名字：见 TERMS，出现别名就报。
  8. 禁止自造对比框架「不是 X，而是 Y」，和模板式收尾套话。
     这几条来自 .github/skills/asd-ste100-zh，与 kubejs/docs/QUEST_WORKFLOW.md §10 对应。

用法：
    python kubejs/tools/lint_quest_text.py           # 扫设计表里的全部格子
退出码 0 = 全部通过。
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from l2_design import MAIN_CELLS, SPACE_CELLS  # noqa: E402

INSTR_MAX = 20          # 标题、副标题：指令句上限
DESC_MAX = 25           # 正文：描述句上限
SENT_SPLIT = re.compile(r"[。！？!?]")

BUZZ = ["无缝", "强大", "稳健", "极致", "丝滑", "卓越", "赋能", "助力", "打造",
        "全面升级", "一站式", "颠覆"]
BUZZ_RE = [re.compile(r"完美(?!机器?框架)")]   # 「完美（机器）框架」是物品名，放行

VAGUE = ["需要注意的是", "值得注意的是", "值得一提", "众所周知", "不难发现",
         "可以说", "有助于", "从而", "有效地", "高效地", "在一定程度上",
         "通常情况下", "可能会", "可谓是",
         "总的来说", "总而言之", "简单来说", "本质上", "换言之", "换句话说"]

NOMINAL = ["进行", "做出", "予以", "加以"]

# asd-ste100-zh：原文没有的对比框架不现造，「不是 X，而是 Y」是典型写法
CONTRAST_RE = re.compile(r"不是[^。！？]{1,24}?而是")

PHRASAL = ["取下来", "拆下来", "装上去", "放上去", "拿出来", "做出来", "放进去",
           "塞进去", "弄出来", "搞出来", "接上去", "切下来", "洗下来", "装上去"]

TERMS = {
    # 正名: 别名（出现就是错）
    "电解铜": ["电解铜板", "电积铜", "4N 铜"],
    "改良机壳 138": ["138 外壳", "138 改良外壳"],
    "MFE 母线": ["MFE 储能", "储能母线"],
    "双联粉碎机": ["粉碎机（双联）"],
    "铂族精矿": ["铂精矿"],
    "高压釜": ["高压浸出釜"],
}


def sentences(text):
    return [s.strip() for s in SENT_SPLIT.split(text) if s.strip()]


def width(s):
    return len(re.sub(r"\s", "", s))


def check_text(where, text, limit, problems):
    for s in sentences(text):
        n = width(s)
        if n > limit:
            problems.append("%s 句子 %d 字（上限 %d）：%s" % (where, n, limit, s))
    if "；" in text or ";" in text:
        problems.append("%s 用了分号：%s" % (where, text))
    for w in BUZZ:
        if w in text:
            problems.append("%s 营销词「%s」" % (where, w))
    for r in BUZZ_RE:
        if r.search(text):
            problems.append("%s 营销词「完美」" % where)
    for w in VAGUE:
        if w in text:
            problems.append("%s 空话「%s」" % (where, w))
    for w in NOMINAL:
        if w in text:
            problems.append("%s 名词化「%s」，改成动词" % (where, w))
    for w in PHRASAL:
        if w in text:
            problems.append("%s 短语动词「%s」" % (where, w))
    m = CONTRAST_RE.search(text)
    if m:
        problems.append("%s 自造对比框架「%s」" % (where, m.group(0)))
    for canon, alts in TERMS.items():
        for a in alts:
            if a in text:
                problems.append("%s 别名「%s」→ 统一写「%s」" % (where, a, canon))


def main():
    from gen_alien_quests import TEXT
    problems = []
    for cells in (MAIN_CELLS, SPACE_CELLS):
        for c in cells:
            key, title, sub, desc = c[0], c[9], c[10], c[11]
            check_text("%s 标题" % key, title, INSTR_MAX, problems)
            check_text("%s 副标题" % key, sub, INSTR_MAX, problems)
            for i, d in enumerate(desc):
                check_text("%s#%d" % (key, i + 1), d, DESC_MAX, problems)
            if len(desc) > 3:
                problems.append("%s 正文 %d 段，DJ2 最多 3 段" % (key, len(desc)))
    for qid, (title, sub, desc) in TEXT.items():
        check_text("%s 标题" % qid, title, INSTR_MAX, problems)
        check_text("%s 副标题" % qid, sub, INSTR_MAX, problems)
        for i, d in enumerate(desc):
            check_text("%s#%d" % (qid, i + 1), d, DESC_MAX, problems)
        if len(desc) > 3:
            problems.append("%s 正文 %d 段，DJ2 最多 3 段" % (qid, len(desc)))
    for p in problems:
        print("FAIL " + p)
    if problems:
        print("\n%d 处不合规。" % len(problems))
        return 1
    print("文案通过：%d 格，句子长度、分号、术语、动词都对得上。"
          % (len(MAIN_CELLS) + len(SPACE_CELLS) + len(TEXT)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
