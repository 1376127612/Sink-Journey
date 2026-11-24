#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""按 sinkresearch 节点 JSON 生成 Patchouli 手册的研究节点条目。

用法（在 versions/Sink Journey 下执行）：
    python kubejs/tools/gen_research_book.py

只做两件事：
  1. 读 kubejs/config/sinkresearch/manifest.json + 各页节点 + zh_cn 里的 research.*.desc
  2. 写 kubejs/data/patchouli/patchouli_books/research_manual/en_us/entries/nodes/<slug>.json

节点增删后重跑一次，改完需要 /reload 或重启才进书。
"""
import io
import json
import os

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), '..'))
CFG = os.path.join(ROOT, 'config', 'sinkresearch')
BOOK = os.path.join(ROOT, 'data', 'patchouli', 'patchouli_books', 'research_manual', 'en_us', 'entries', 'nodes')
LANG = os.path.join(ROOT, 'assets', 'kubejs', 'lang', 'zh_cn.json')

# 标题优先取 lang 的 research.node.<短 id>.name；这里只是没配语言时的兜底
TITLES = {
    'kinetic_brass': '机动：黄铜配比',
    'steam_precision': '蒸汽：精密构件',
    'gate_dragon': '末地：龙之证',
    'ember_notes': '余烬：热循环笔记',
    'radiance_notes': '星辉：共鸣笔记',
    'electric_notes': '电力：基础笔记',
}

ERA_NAMES = {
    'kinetic': '机动',
    'steam': '蒸汽',
    'ember': '余烬',
    'radiance': '星辉',
    'end': '末地',
    'electric': '电力',
}


def read_json(path):
    with io.open(path, encoding='utf-8') as fp:
        return json.load(fp)


def short(nid):
    return nid.split(':', 1)[-1]


def cost_lines(node):
    inputs = node.get('inputs') or {}
    out = []
    for it in inputs.get('items') or []:
        out.append('%s ×%s' % (it.get('id'), it.get('count', 1)))
    for fl in inputs.get('fluids') or []:
        out.append('%s %smB' % (fl.get('id'), fl.get('amount', 1000)))
    if inputs.get('energy'):
        out.append('能量 %s FE' % inputs['energy'])
    if inputs.get('compute'):
        out.append('算力 %s' % inputs['compute'])
    if node.get('duration'):
        out.append('时长 %s 秒' % round(int(node['duration']) / 20.0, 1))
    return out


def main():
    manifest = read_json(os.path.join(CFG, 'manifest.json'))
    lang = read_json(LANG)

    nodes = []
    for page_name in manifest.get('pages') or []:
        page = read_json(os.path.join(CFG, page_name))
        for node in page.get('nodes') or []:
            node['_page'] = page.get('page') or page_name
            nodes.append(node)

    if not os.path.isdir(BOOK):
        os.makedirs(BOOK)

    written = []
    for idx, node in enumerate(nodes):
        nid = str(node.get('id'))
        slug = short(nid).replace('/', '_')
        ui = node.get('ui') or {}
        doc_key = str(ui.get('doc') or '')
        doc = lang.get(doc_key, '')

        req = (node.get('requires') or {})
        req_list = req.get('or') or req.get('and') or []
        req_text = '、'.join(req_list) if req_list else '无'

        outs = (node.get('outputs') or {}).get('items') or []
        out_text = '、'.join('%s ×%s' % (o.get('id'), o.get('count', 1)) for o in outs)
        if not out_text:
            trigger = node.get('trigger') or {}
            ttype = str(trigger.get('type') or '')
            if ttype == 'item_obtain':
                out_text = '无（拿到 %s 即触发）' % trigger.get('item')
            elif ttype == 'dimension_enter':
                out_text = '无（进入 %s 即触发）' % trigger.get('dimension')
            elif ttype == 'entity_death':
                out_text = '无（击杀 %s 即触发）' % trigger.get('entity')
            else:
                out_text = '无（里程碑）'
        keys = node.get('unlock') or []
        unlock_text = '、'.join(keys) if keys else '无'

        lines = []
        if doc:
            lines.append(doc)
        lines.append('节点：%s　时代：%s' % (nid, ERA_NAMES.get(str(node.get('era')), str(node.get('era')))))
        lines.append('前置：%s' % req_text)

        page1 = {'type': 'patchouli:text', 'text': '$(br2)'.join(lines)}

        costs = cost_lines(node)
        page2_body = '成本：' + ('、'.join(costs) if costs else '无（里程碑，不需要投料）')
        page2_body += '$(br2)产出：' + out_text
        page2_body += '$(br2)解锁：' + unlock_text
        if node.get('kind') == 'craft':
            page2_body += '$(br2)研究站必须接入研究网络（16 格内有在线网络中心），并发受数据库限制；'
            page2_body += '前置没完成时研究站会拒绝开工并在聊天栏提示。'
        else:
            page2_body += '$(br2)里程碑不需要投料、也不经过研究站：条件达成的瞬间就解锁；'
            page2_body += '前置没完成时会被跳过，之后每 10 秒补扫一次背包。'
        page2 = {'type': 'patchouli:text', 'text': page2_body}

        trigger_item = (node.get('trigger') or {}).get('item')
        if outs:
            icon = outs[0].get('id')
        elif trigger_item:
            icon = trigger_item
        else:
            icon = 'kubejs:research_data'
        entry = {
            'name': lang.get('research.node.%s.name' % slug) or TITLES.get(slug, slug),
            'category': 'patchouli:basics',
            'icon': icon,
            'sortnum': 10 + idx,
            'pages': [page1, page2],
        }

        path = os.path.join(BOOK, '%s.json' % slug)
        with io.open(path, 'w', encoding='utf-8', newline='\n') as fp:
            json.dump(entry, fp, ensure_ascii=False, indent=2)
            fp.write('\n')
        written.append((slug, entry['name'], path))

    # 清掉已经不对应任何节点的旧条目
    keep = set('%s.json' % w[0] for w in written)
    for name in sorted(os.listdir(BOOK)):
        if name.endswith('.json') and name not in keep:
            os.remove(os.path.join(BOOK, name))
            print('removed stale entry: %s' % name)

    for slug, title, path in written:
        print('%-18s %s' % (slug, title))
    print('共写入 %d 个节点条目 -> %s' % (len(written), os.path.relpath(BOOK, ROOT)))


if __name__ == '__main__':
    main()
