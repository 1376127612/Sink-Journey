#!/usr/bin/env python3
"""Dump a FTB Quests chapter's quests as a compact table (id, coords, deps, icon, tasks)."""
import re
import sys

def parse(path):
    text = open(path, encoding='utf-8', newline='').read().replace('\r\n', '\n')
    body = text.split('quests: [', 1)[1]
    blocks = re.split(r'\n\t\t\{\n', body)
    out = []
    for b in blocks[1:]:
        m = re.search(r'\n\t\t\tid: "([^"]+)"\n', b)
        if not m:
            continue
        qid = m.group(1)
        dep = re.search(r'dependencies: \[(.*?)\]', b, re.S)
        deps = re.findall(r'"([0-9A-F]{16})"', dep.group(1)) if dep else []
        icon = re.search(r'icon: \{\s*\n?\s*id: "([^"]+)"', b)
        x = re.search(r'\n\t\t\tx: ([-0-9.]+)d', b)
        y = re.search(r'\n\t\t\ty: ([-0-9.]+)d', b)
        shape = re.search(r'shape: "([^"]+)"', b)
        tasks = re.findall(r'item: \{ count: \d+, id: "([^"]+)" \}', b)
        out.append(dict(id=qid, x=float(x.group(1)) if x else None,
                        y=float(y.group(1)) if y else None,
                        deps=deps, icon=icon.group(1) if icon else None,
                        shape=shape.group(1) if shape else None, tasks=tasks))
    return out

if __name__ == '__main__':
    for q in parse(sys.argv[1]):
        print(f"{q['id']} x={q['x']} y={q['y']} shape={q['shape']} icon={q['icon']} deps={q['deps']} tasks={q['tasks']}")
