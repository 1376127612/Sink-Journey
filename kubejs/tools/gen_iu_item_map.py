#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Industrial Upgrade 编号物品对照表生成器
=======================================

IU 把大量合成元件命名成 crafting_<数字>_element，JEI/脚本里只看得到编号。
本脚本从 IndustrialUpgrade 的 jar 里读取 zh_cn / en_us 语言文件，生成：

  kubejs/config/iu_item_names.json   机器可读的 编号 -> {id, 中文名, 英文名}
  kubejs/docs/IU_ITEM_NAMES.md       人看的 Markdown 对照表

用法（在版本根目录执行）：
  python kubejs/tools/gen_iu_item_map.py

不需要启动游戏；换 IU 版本后重跑一次即可。
"""

from __future__ import annotations

import glob
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MODS = ROOT / 'mods'
OUT_JSON = ROOT / 'kubejs' / 'config' / 'iu_item_names.json'
OUT_MD = ROOT / 'kubejs' / 'docs' / 'IU_ITEM_NAMES.md'

PREFIX = 'iu.crafting_elements.crafting_'
SUFFIX = '_element'


def clean(text):
    """去掉 § 颜色代码和首尾空白。"""
    out = []
    skip = False
    for ch in text or '':
        if skip:
            skip = False
            continue
        if ch == '§':
            skip = True
            continue
        out.append(ch)
    return ''.join(out).strip()


def find_jar():
    candidates = [
        Path(p)
        for p in glob.glob(str(MODS / '*IndustrialUpgrade*.jar'))
        if 'kubejs' not in Path(p).name.lower()
    ]
    if not candidates:
        raise SystemExit('找不到 IndustrialUpgrade jar：' + str(MODS))
    return sorted(candidates, key=lambda p: p.name)[-1]


def read_lang(jar, lang):
    entry = 'assets/industrialupgrade/lang/' + lang + '.json'
    with zipfile.ZipFile(jar) as z:
        if entry not in z.namelist():
            return {}
        return json.loads(z.read(entry).decode('utf-8'))


def main():
    jar = find_jar()
    zh = read_lang(jar, 'zh_cn')
    en = read_lang(jar, 'en_us')

    items = {}
    for key in set(zh) | set(en):
        if not (key.startswith(PREFIX) and key.endswith(SUFFIX)):
            continue
        number_part = key[len(PREFIX):-len(SUFFIX)]
        if not number_part.isdigit():
            continue
        number = int(number_part)
        items[number] = {
            'id': 'industrialupgrade:crafting_elements/crafting_' + str(number) + '_element',
            'zh': clean(zh.get(key, '')),
            'en': clean(en.get(key, '')),
        }

    if not items:
        raise SystemExit(jar.name + ' 里没有找到 iu.crafting_elements.* 语言键')

    ordered = {str(n): items[n] for n in sorted(items)}

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_MD.parent.mkdir(parents=True, exist_ok=True)

    payload = {
        'source': jar.name,
        'count': len(ordered),
        'items': ordered,
    }
    OUT_JSON.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + chr(10),
        encoding='utf-8',
    )

    def esc(text):
        return text.replace('|', '&#124;')

    lines = [
        '# Industrial Upgrade 编号物品对照表',
        '',
        '> 自动生成，请勿手改；重新生成：`python kubejs/tools/gen_iu_item_map.py`',
        '> 来源：`' + jar.name + '`，共 ' + str(len(ordered)) + ' 个编号元件。',
        '> 相关：IU_ELECTRIC_MOTOR.md（电动机专家链魔改说明）',
        '',
        'IU 的合成元件在脚本/配方里只显示为 `crafting_<编号>_element`，',
        '下表按编号列出对应的中文名和英文名，方便查配方。',
        '',
        '| 编号 | 物品 ID | 中文名 | English |',
        '| ---: | --- | --- | --- |',
    ]
    for number in sorted(items):
        item = items[number]
        lines.append(
            '| ' + str(number) + ' | `' + item['id'] + '` | ' + esc(item['zh']) + ' | ' + esc(item['en']) + ' |'
        )
    lines.append('')

    OUT_MD.write_text(chr(10).join(lines), encoding='utf-8')

    print('来源: ' + jar.name)
    print('编号元件: ' + str(len(ordered)))
    print('已写入: ' + str(OUT_JSON.relative_to(ROOT)))
    print('已写入: ' + str(OUT_MD.relative_to(ROOT)))


if __name__ == '__main__':
    main()
