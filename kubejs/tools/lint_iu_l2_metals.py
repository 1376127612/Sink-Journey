# -*- coding: utf-8 -*-
"""L2（改良电力）材料白名单 lint：脚本里出现后期金属就报错。

为什么单独写一个：`iu_l2_improved_electric.js` 与 `moly_line.js` 里几十条配方，
每条都只写几行 tags，靠肉眼判断"这一条是不是又吃了钛/钨/锗"不现实；
而写错的后果和 L1 那次一样——机器造不出来，但游戏不报错。

口径见 docs/IU_L2_IMPROVED_ELECTRIC.md §10：
  L2 允许  铁 钢 铜 锡 锌 铅 银 镍 锰 铬（以镍铬、304 的形式）
           + 青铜 黄铜 红铜 蒙茨 因瓦 坡莫 锰铁 + 304 / 316L + 塑料 橡胶 CFRP
  出口专用  钼（只许出现在 316L 配料、钼钢炉管、坡莫里）
  禁止      钛 钨 锗 铂族 铌钽 稀土 铀钍 镁 铝 铍 锂 + 因科镍 尼莫尼克 雷内
           司太立 维塔利姆 米哈洛夫 血石 龙晶 精金 秘银 奥利哈刚 尖晶石

例外（2026-11-27 起）：行尾写 `// l2-allow: aluminium 理由` 的那一行按口径特批，
只放行标记里点名的金属，lint 会把特批行打印出来。现在只有一处：MFE 母排的铝排。

用法：
    python kubejs/tools/lint_iu_l2_metals.py          # 扫 L2 的两个脚本
    python kubejs/tools/lint_iu_l2_metals.py <file>   # 只扫指定文件

退出码 0 = 干净。
"""
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KUBEJS = os.path.join(ROOT, 'kubejs')

DEFAULT_TARGETS = [
    os.path.join(KUBEJS, 'server_scripts', 'industrial', 'iu_l2_improved_electric.js'),
    os.path.join(KUBEJS, 'server_scripts', 'industrial', 'moly_line.js'),
]

# 出现在 tag / item id 里就要报错的金属与合金（小写匹配）
BANNED = [
    'titanium', 'tungsten', 'germanium', 'platinum', 'palladium', 'rhodium',
    'osmium', 'iridium', 'hafnium', 'niobium', 'tantalum', 'yttrium',
    'vanadium', 'cobalt', 'uranium', 'thorium', 'magnesium', 'aluminium',
    'aluminum', 'beryllium', 'lithium', 'neodymium', 'gadolinium',
    'lanthanum', 'cerium', 'spinel', 'inconel', 'nimonic', 'haynes', 'rene',
    'stellite', 'vitalium', 'mikhail', 'draconid', 'adamantium', 'mithril',
    'orichalcum', 'bloodstone', 'caravky', 'osmiridium', 'tungstensteel',
    'hafniumcarbide', 'tantalumtungstenhafnium', 'nitinol', 'nitenol',
]

# 钼只许出现在这些上下文里（出口专用）：钼锭 / 钼板 / 钼粉，且必须在 316L、
# 钼钢、坡莫、M3 掩模这几条配方内。检查方式：同一行里出现 molybdenum 且
# 行内没有这些关键字之一 -> 报错。
MO_ALLOW_HINT = ['stainless', 'permalloy', 'molybdenum_steel', 'mo_', 'moly_',
                 'mask', 'c:plates/molybdenum', 'c:ingots/molybdenum',
                 'kindustrialupgrade:itemingots/molybdenum']


def strip_comments(text):
    out = []
    for line in text.split('\n'):
        s = line.strip()
        if s.startswith('//'):
            out.append('')
        else:
            out.append(line)
    return '\n'.join(out)


ALLOW_MARK = 'l2-allow:'


def allowed(line, metal):
    """行内 `// l2-allow: aluminium 理由` 表示该条配方按口径特批。

    只放行标记里点名的金属，理由写在标记后面，lint 会把特批行打印出来，
    免得"白名单"悄悄长大。
    """
    low = line.lower()
    pos = low.find(ALLOW_MARK)
    if pos < 0:
        return False
    names = re.findall(r'[a-z0-9_]+', low[pos + len(ALLOW_MARK):])
    return metal in names


def lint_file(path):
    errs = []
    allowed_lines = []
    text = strip_comments(io.open(path, encoding='utf-8').read())
    for no, line in enumerate(text.split('\n'), 1):
        low = line.lower()
        for bad in BANNED:
            if bad not in low:
                continue
            if allowed(line, bad):
                allowed_lines.append('%s:%d 特批 %s' % (
                    os.path.relpath(path, ROOT), no, bad))
                continue
            errs.append('%s:%d 出现禁用金属 %s -> %s' % (
                os.path.relpath(path, ROOT), no, bad, line.strip()))
        if 'molybdenum' in low and not any(h.lower() in low for h in MO_ALLOW_HINT):
            errs.append('%s:%d 钼出现在非出口位置 -> %s' % (
                os.path.relpath(path, ROOT), no, line.strip()))
    for a in allowed_lines:
        print('  ' + a)
    return errs


def main(argv):
    targets = argv or DEFAULT_TARGETS
    errs = []
    for path in targets:
        if not os.path.exists(path):
            errs.append('找不到文件：%s' % path)
            continue
        errs.extend(lint_file(path))
    if errs:
        print('L2 材料口径不合格 %d 处：' % len(errs))
        for e in errs:
            print('  ' + e)
        return 1
    print('L2 材料口径通过（%d 个文件）' % len(targets))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
