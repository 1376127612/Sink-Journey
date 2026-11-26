"""扫脚本里引用的 #tag 是否真实存在。

    python kubejs/tools/check_tags.py

tag 全集来自所有 jar 的 data/*/tags/{item,block,fluid} + kubejs/data 下自己写的 tag。
引用不存在的 tag 不会报错、不会警告，只会变成空 ingredient（= 配方凭空少一个材料），
所以改配方时顺手跑一下。背景见 kubejs/docs/KJS_SCRIPT_RULES.md §2。
"""
import io
import os
import re
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TAG_LITERAL = re.compile(r"""['"]#([a-z0-9_.\-]+:[a-z0-9_./\-]+)['"]""")


def tags_from_jar(path):
    out = set()
    try:
        zf = zipfile.ZipFile(path)
    except Exception:
        return out
    for name in zf.namelist():
        m = re.match(r'^data/([a-z0-9_.\-]+)/tags/([a-z0-9_]+)/(.+)\.json$', name)
        if m:
            out.add('%s:%s' % (m.group(1), m.group(3)))
    return out


def main():
    universe = set()
    jars = [os.path.join(ROOT, 'Sink Journey.jar')]
    mods = os.path.join(ROOT, 'mods')
    jars += [os.path.join(mods, n) for n in sorted(os.listdir(mods)) if n.endswith('.jar')]
    for jar in jars:
        universe |= tags_from_jar(jar)

    data_root = os.path.join(ROOT, 'kubejs', 'data')
    for root, dirs, names in os.walk(data_root):
        norm = root.replace(os.sep, '/')
        m = re.search(r'kubejs/data/([a-z0-9_.\-]+)/tags/[a-z0-9_]+/?$', norm)
        if not m:
            continue
        rel = norm[norm.index('/tags/') + 6:]
        for name in names:
            if name.endswith('.json'):
                universe.add('%s:%s/%s' % (m.group(1), rel, name[:-5]))

    unknown = {}
    for root, dirs, names in os.walk(os.path.join(ROOT, 'kubejs')):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for name in sorted(names):
            if not name.endswith('.js'):
                continue
            path = os.path.join(root, name)
            src = io.open(path, encoding='utf-8', errors='replace').read()
            for lineno, line in enumerate(src.split(chr(10)), 1):
                if line.lstrip().startswith('//'):
                    continue
                for m in TAG_LITERAL.finditer(line):
                    tag = m.group(1)
                    if tag in universe:
                        continue
                    unknown.setdefault(tag, []).append('%s:%d' % (os.path.relpath(path, ROOT), lineno))

    for tag in sorted(unknown):
        where = unknown[tag]
        print('%-56s %s%s' % (tag, where[0], '' if len(where) == 1 else '  (+%d)' % (len(where) - 1)))
    print('tag universe: %d, unknown: %d' % (len(universe), len(unknown)))
    return 1 if unknown else 0


if __name__ == '__main__':
    sys.exit(main())
