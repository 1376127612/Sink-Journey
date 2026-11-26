# -*- coding: utf-8 -*-
"""删掉指定任务 id 的 lang 键（含多行数组），供生成器重写文案前使用。"""
import re
import sys

p = 'config/ftbquests/quests/lang/zh_cn.snbt'
targets = set(a.upper() for a in sys.argv[1:])
lines = open(p, encoding='utf-8', newline='').read().split('\r\n')

out, dropped, in_array = [], 0, False
for ln in lines:
    key = re.match(r'\tquest\.([0-9A-F]{16})\.([a-z_]+): ?(.*)$', ln)
    if key:
        drop_this = key.group(1) in targets
        in_array = drop_this and key.group(3).strip() == '['
        if drop_this:
            dropped += 1
            continue
        out.append(ln)
        continue
    if in_array:
        if ln.strip() == ']':
            in_array = False
        dropped += 1
        continue
    out.append(ln)

open(p, 'w', encoding='utf-8', newline='').write('\r\n'.join(out))
print('删掉 %d 行' % dropped)
