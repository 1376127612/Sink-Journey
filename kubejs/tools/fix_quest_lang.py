# -*- coding: utf-8 -*-
"""FTB Quests 语言文件（zh_cn.snbt）的小工具：按 key 解析成块、整体回写。

为什么需要它：
  这个文件是 `key: value` / `key: [ ... ]` 的扁平结构，生成脚本如果按行增删，
  很容易把多行数组的头尾吃错（喂进去一行 `quest_desc: [...]` 单行数组时尤其危险）。
  所以统一走这里：解析成 {key: block_lines}，改完整体回写，天然幂等。

命令行用法（排查用）：
    python kubejs/tools/fix_quest_lang.py --dry     # 只报告会丢掉的行
    python kubejs/tools/fix_quest_lang.py           # 规整 + 去重写回
"""
import io
import re
import sys

DEFAULT_PATH = 'config/ftbquests/quests/lang/zh_cn.snbt'
KEY_RE = re.compile(r'^\s*([A-Za-z_][\w.]*):\s*(.*)$')


def parse_text(text):
    """返回 dict：{'eol', 'head', 'order': [key...], 'blocks': {key: [lines]}, 'dropped': [...]}"""
    eol = '\r\n' if '\r\n' in text else '\n'
    lines = text.split(eol)
    head = '{'
    if lines and lines[0].strip() == '{':
        lines = lines[1:]
    if lines and lines[-1].strip() == '}':
        lines = lines[:-1]

    order = []
    blocks = {}
    dropped = []
    i = 0
    while i < len(lines):
        line = lines[i]
        m = KEY_RE.match(line)
        if not m:
            if line.strip():
                dropped.append((i + 2, line))
            i += 1
            continue
        key = m.group(1)
        value = m.group(2).strip()
        block = [line]
        i += 1
        if value.startswith('[') and not value.endswith(']'):
            while i < len(lines):
                block.append(lines[i])
                done = lines[i].strip() == ']'
                i += 1
                if done:
                    break
        if key not in blocks:
            order.append(key)
        blocks[key] = block      # 重复 key 保留最后一次的内容
    return {
        'eol': eol,
        'head': head,
        'order': order,
        'blocks': blocks,
        'dropped': dropped,
    }


def render(doc):
    out = [doc['head']]
    for key in doc['order']:
        out.extend(doc['blocks'][key])
    out.append('}')
    return doc['eol'].join(out) + doc['eol']


def load(path):
    return parse_text(io.open(path, encoding='utf-8', newline='').read())


def save(path, doc):
    io.open(path, 'w', encoding='utf-8', newline='').write(render(doc))


def set_value(doc, key, value_lines):
    """value_lines 是这个 key 的完整块（含首行）"""
    if key not in doc['blocks']:
        doc['order'].append(key)
    doc['blocks'][key] = value_lines


def set_array(doc, key, values):
    indent = '\t'
    lines = ['%s%s: [' % (indent, key)]
    for v in values:
        lines.append('%s\t"%s"' % (indent, v))
    lines.append('%s]' % indent)
    set_value(doc, key, lines)


def set_string(doc, key, value):
    set_value(doc, key, ['\t%s: "%s"' % (key, value)])


def drop(doc, key):
    if key in doc['blocks']:
        del doc['blocks'][key]
        doc['order'] = [k for k in doc['order'] if k != key]


def main():
    path = DEFAULT_PATH
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if args:
        path = args[0]
    doc = load(path)
    print('keys', len(doc['order']), 'dropped lines', len(doc['dropped']))
    for lineno, content in doc['dropped'][:20]:
        print('  drop %d: %s' % (lineno, content.strip()[:70]))
    if '--dry' in sys.argv:
        print('(dry run)')
        return
    save(path, doc)
    print('written', path)


if __name__ == '__main__':
    main()
