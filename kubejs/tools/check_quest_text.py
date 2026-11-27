# -*- coding: utf-8 -*-
"""章节文案体检：按章节文件把 lang 里的标题、副标题、正文捞出来，跑同一套硬规矩。

为什么单独一个：`lint_quest_text.py` 只扫设计表（L2 的 MAIN_CELLS / SPACE_CELLS），
而原始、蒸汽、电力三章的文字长在 `lang/zh_cn.snbt` 里，重排之后没人查得到。
规则本身不重写一遍——直接借 `lint_quest_text.check_text`。

用法：
    python kubejs/tools/check_quest_text.py                             # 三章主线
    python kubejs/tools/check_quest_text.py e1c0000000000000            # 指定章节（id 或路径）
退出码 0 = 全部通过。
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lint_quest_text import INSTR_MAX, DESC_MAX, check_text  # noqa: E402

CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"
DEFAULT = ["3f5a7c2b9e1d4a60", "5fe0048b1a2b6a65", "e1c0000000000000"]


def read_lang():
    """quest id -> {title, sub, desc}：单行 `key: "..."` 与多行 `key: [ ... ]` 两种都认。"""
    text = io.open(LANG, encoding="utf-8", newline="").read().replace("\r\n", "\n")
    lines = text.split("\n")
    out, i = {}, 0
    while i < len(lines):
        m = re.match(r'\tquest\.([0-9A-F]{16})\.(\w+): (.*)$', lines[i])
        if not m:
            i += 1
            continue
        qid, field, rest = m.groups()
        cell = out.setdefault(qid, {})
        if rest.startswith("["):
            if rest.rstrip().endswith("]"):
                if field == "quest_desc":
                    cell["desc"] = re.findall(r'"([^"]*)"', rest)
                i += 1
                continue
            body, i = [], i + 1
            while i < len(lines) and lines[i].strip() != "]":
                t = lines[i].strip().rstrip(",")
                if t.startswith('"') and t.endswith('"'):
                    body.append(t[1:-1])
                i += 1
            if field == "quest_desc":
                cell["desc"] = body
        elif field in ("title", "quest_subtitle") and rest.startswith('"'):
            cell["title" if field == "title" else "sub"] = rest[1:].rsplit('"', 1)[0]
        i += 1
    return out


def chapter_path(arg):
    if os.path.exists(arg):
        return arg
    cand = os.path.join(CH_DIR, arg if arg.endswith(".snbt") else arg + ".snbt")
    if not os.path.exists(cand):
        raise SystemExit("找不到章节：%s" % arg)
    return cand


def check_chapter(path, lang, problems):
    text = io.open(path, encoding="utf-8", newline="").read()
    ids = re.findall(r'\n\t\t\tid: "([0-9A-F]{16})"', text)
    for qid in ids:
        cell = lang.get(qid)
        if not cell or "title" not in cell:
            problems.append("%s 缺标题" % qid)
            continue
        where = qid
        check_text("%s 标题" % where, cell["title"], INSTR_MAX, problems)
        if not cell.get("sub"):
            problems.append("%s 缺副标题" % where)
        else:
            check_text("%s 副标题" % where, cell["sub"], INSTR_MAX, problems)
        desc = cell.get("desc") or []
        if not desc:
            problems.append("%s 缺正文" % where)
        for i, d in enumerate(desc):
            check_text("%s#%d" % (where, i + 1), d, DESC_MAX, problems)
        if len(desc) > 3:
            problems.append("%s 正文 %d 段，DJ2 最多 3 段" % (where, len(desc)))
    return len(ids)


def main(argv):
    targets = argv or DEFAULT
    lang, problems, total = read_lang(), [], 0
    for arg in targets:
        path = chapter_path(arg)
        total += check_chapter(path, lang, problems)
    for p in problems:
        print("FAIL " + p)
    if problems:
        print("\n%d 处不合规。" % len(problems))
        return 1
    print("文案通过：%d 章 %d 格，句长、分号、术语、动词、段落数都对得上。"
          % (len(targets), total))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
