# -*- coding: utf-8 -*-
"""把研究链的每个环节写进它所属的时代章节（不再单独开「研究图谱」一章）。

落点：
  原始时代    第一份笔记（原始研究台）
  工业之始    演算数据、机械蓝图（机械研究台）
  余烬初火    余烬笔记
  星界探索    星辉笔记
  电力时代    绕组与线圈、电网调度（研究站；「研究笔记·电力」原本就在这章）
  征战末地    不新增——它已经有「进入末地」「击杀末影龙」两个任务

成本文案直接来自配方，所以改配方只改：
  config/sinkresearch/notes.json   机械研究台的五条笔记配方
  config/sinkresearch/nodes/*.json 研究站 craft 节点
改完重跑本脚本：任务块按 id 原地替换（已有就更新、没有就插入），不会重复。

任务 id 已写进存档，别改。删掉的概念（龙之证、电力笔记）用的 5A1B000000000003/4
不再生成，旧键会被清掉。

用法（在 versions/Sink Journey 下执行）：
    python kubejs/tools/gen_research_quests.py
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fix_quest_lang as fql  # noqa: E402  同目录的小工具

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
CFG = os.path.join(ROOT, 'config', 'sinkresearch')
GAME = os.path.dirname(ROOT)
CH_DIR = os.path.join(GAME, 'config', 'ftbquests', 'quests', 'chapters')
LANG = os.path.join(GAME, 'config', 'ftbquests', 'quests', 'lang', 'zh_cn.snbt')
OLD_CHAPTER = os.path.join(CH_DIR, 'a1b2c3d4e5f60718.snbt')

IDS = {
    'notes': ('5A1B000000000001', '5A1B0000000000A1'),
    'data': ('5A1B000000000005', '5A1B0000000000A5'),
    'blueprint': ('5A1B000000000002', '5A1B0000000000A2'),
    'ember': ('5A1B000000000006', '5A1B0000000000A6'),
    'radiance': ('5A1B000000000007', '5A1B0000000000A7'),
    'winding': ('5A1B000000000008', '5A1B0000000000A8'),
    'grid': ('5A1B000000000009', '5A1B0000000000A9'),
}

# 已经不生成的任务（原来那章里的），旧语言键要清掉
DROP_QUEST_IDS = ['5A1B000000000003', '5A1B000000000004']

ELECTRIC_NOTE_QUEST = '6598E70D2B013335'

TARGETS = [
    dict(key='notes', file='3f5a7c2b9e1d4a60', dep='7421786593C68B0E', x=0.0, y=-8.0),
    dict(key='data', file='5fe0048b1a2b6a65', dep='0706F92EF2C236B8', x=0.0, y=-12.0),
    dict(key='blueprint', file='5fe0048b1a2b6a65', dep='5A1B000000000005', x=2.0, y=-12.0),
    dict(key='ember', file='676f67c1de6cc626', dep='25D01AF8BA18BB6D', x=14.5, y=3.5),
    dict(key='radiance', file='6bb0d29314d7c897', dep='5A1B000000000006', x=0.0, y=0.0),
    dict(key='winding', file='e1c0000000000000', dep=ELECTRIC_NOTE_QUEST, x=0.0, y=2.5),
    dict(key='grid', file='e1c0000000000000', dep='5A1B000000000008', x=2.0, y=2.5),
]

NAMES = {
    'kubejs:research_notes': '研究笔记',
    'kubejs:research_data': '演算数据',
    'kubejs:blank_blueprint': '空白蓝图',
    'kubejs:blueprint_steam': '蓝图·机械',
    'kubejs:research_notes_ember': '研究笔记·余烬',
    'kubejs:research_notes_radiance': '研究笔记·星辉',
    'kubejs:research_notes_electric': '研究笔记·电力',
    'kubejs:research_substrate': '研究基质',
    'minecraft:paper': '纸',
    'minecraft:ink_sac': '墨囊',
    'create:brass_sheet': '黄铜板',
    'create:electron_tube': '电子管',
    'create:precision_mechanism': '精密构件',
    'embers:dawnstone_ingot': '黎明石锭',
    'astralsorcery:starmetal_ingot': '星金属锭',
    'industrialupgrade:crafting_elements/crafting_494_element': '晶圆',
    'industrialupgrade:itemplates/steel_plate': '钢板',
}

UNLOCKS = {
    'blueprint': '蒸汽（钢）：era.steam 与精密构件配方一起解锁',
    'ember': '余烬科技 era.ember',
    'radiance': '星辉科技 era.radiance',
}


def name_of(item_id):
    return NAMES.get(item_id, item_id)


def read_json(path):
    with io.open(path, encoding='utf-8') as fp:
        return json.load(fp)


def load_notes():
    return {n['id']: n for n in read_json(os.path.join(CFG, 'notes.json'))['notes']}


def load_node(node_id):
    manifest = read_json(os.path.join(CFG, 'manifest.json'))
    for page in manifest['pages']:
        data = read_json(os.path.join(CFG, page))
        for node in data.get('nodes') or []:
            if node.get('id') == node_id:
                return node
    raise SystemExit('节点不存在: %s' % node_id)


def note_cost_lines(entry):
    parts = [name_of(i['id']) + ' ×' + str(i.get('count', 1)) for i in entry.get('inputs') or []]
    out = entry.get('output') or {}
    return [
        '机器：机械研究台（3×3×3，吃旋转应力）',
        '材料：' + ('、'.join(parts) if parts else '无'),
        '耗时 %d 秒，需持续应力 %d @ %dRPM' % (int(entry.get('tick_time', 200)) // 20,
                                     int(entry.get('stress', 8)), int(entry.get('min_rpm', 32))),
        '产出：%s ×%d' % (name_of(out.get('id', '')), int(out.get('count', 1))),
    ]


def station_cost_lines(node):
    inputs = node.get('inputs') or {}
    parts = [name_of(i['id']) + ' ×' + str(i.get('count', 1)) for i in inputs.get('items') or []]
    outs = (node.get('outputs') or {}).get('items') or []
    lines = [
        '机器：溯洄研究站（3×3×3，接入研究网络）',
        '材料：' + ('、'.join(parts) if parts else '无'),
    ]
    if inputs.get('energy'):
        lines.append('能量：%d FE' % int(inputs['energy']))
    if inputs.get('compute'):
        lines.append('算力：%d（网络里的计算机提供）' % int(inputs['compute']))
    lines.append('耗时：%d 秒（有算力加速）' % (int(node.get('duration', 200)) // 20))
    lines.append('产出：' + ('、'.join('%s ×%d' % (name_of(o['id']), o.get('count', 1))
                                     for o in outs) or '无'))
    return lines


def quest_block(key, icon, task, dep, x, y):
    qid, tid = IDS[key]
    out = ['\t\t{']
    if dep:
        out.append('\t\t\tdependencies: ["%s"]' % dep)
    out.append('\t\t\ticon: {')
    out.append('\t\t\t\tid: "%s"' % icon)
    out.append('\t\t\t}')
    out.append('\t\t\tid: "%s"' % qid)
    out.append('\t\t\ttasks: [{')
    out.append('\t\t\t\tid: "%s"' % tid)
    if task[0] == 'checkmark':
        out.append('\t\t\t\ttype: "checkmark"')
    else:
        out.append('\t\t\t\titem: { count: %d, id: "%s" }' % (task[1], task[0]))
        out.append('\t\t\t\ttype: "item"')
    out.append('\t\t\t}]')
    out.append('\t\t\tx: %.1fd' % x)
    out.append('\t\t\ty: %.1fd' % y)
    out.append('\t\t}')
    return out


def upsert(lines, block):
    """把 block 塞进 chapter 的 quests 数组：同 id 就替换，否则追加"""
    qid = [l for l in block if l.startswith('			id: "')][0].split('"')[1]
    # FTB Quests 有时会把数组写成 `quests: [{`（首元素同排），先拆成标准两行
    for idx, line in enumerate(lines):
        if line.startswith('	quests: [{'):
            lines[idx:idx + 1] = ['	quests: [', '		{']
            break
    try:
        i = lines.index('\tquests: [')
    except ValueError:
        # 空数组：quests: [ ]
        for idx, line in enumerate(lines):
            if line.strip() == 'quests: [ ]':
                lines[idx:idx + 1] = ['\tquests: ['] + block + ['\t]']
                return
        raise SystemExit('找不到 quests 数组')
    j = i + 1
    while j < len(lines) and lines[j] != '\t]':
        j += 1
    body = lines[i + 1:j]
    blocks, cur = [], None
    for ln in body:
        if cur is None:
            if ln.strip() == '':
                continue
            cur = [ln]
        else:
            cur.append(ln)
        if ln == '\t\t}':
            blocks.append(cur)
            cur = None
    if cur:
        blocks.append(cur)

    replaced = False
    for idx, b in enumerate(blocks):
        if any(l.startswith('\t\t\tid: "%s"' % qid) for l in b):
            blocks[idx] = block
            replaced = True
    if not replaced:
        blocks.append(block)

    flat = []
    for b in blocks:
        flat.extend(b)
    lines[i + 1:j] = flat


def main():
    notes = load_notes()
    winding = load_node('sink:electric_winding')
    grid = load_node('sink:electric_grid')

    specs = {
        'notes': dict(
            icon='kubejs:research_notes', task=('kubejs:research_notes', 1), title='第一份笔记',
            desc=['机器：原始研究台（单方块，右键打开）',
                  '材料：纸 ×1、墨囊 ×1',
                  '耗时 300 秒，产出研究笔记 ×2',
                  '',
                  '§7拿到笔记即解锁机动科技；电力时代以前，科技只靠笔记解锁。']),
        'data': dict(
            icon='kubejs:research_data', task=('kubejs:research_data', 2), title='演算数据',
            desc=note_cost_lines(notes['research_data']) +
                 ['', '§7演算数据是电力时代以前的通用货币：研究基质 + 纸就能出，不再吃研究笔记。']),
        'blueprint': dict(
            icon='kubejs:blueprint_steam', task=('kubejs:blueprint_steam', 1), title='机械蓝图',
            desc=note_cost_lines(notes['blueprint_steam']) + ['', '解锁：' + UNLOCKS['blueprint']]),
        'ember': dict(
            icon='kubejs:research_notes_ember', task=('kubejs:research_notes_ember', 1),
            title='余烬笔记',
            desc=note_cost_lines(notes['research_notes_ember']) + ['', '解锁：' + UNLOCKS['ember']]),
        'radiance': dict(
            icon='kubejs:research_notes_radiance', task=('kubejs:research_notes_radiance', 1),
            title='星辉笔记',
            desc=note_cost_lines(notes['research_notes_radiance']) +
                 ['', '解锁：' + UNLOCKS['radiance']]),
        'winding': dict(
            icon='create:electron_tube', task=('checkmark',), title='绕组与线圈',
            desc=station_cost_lines(winding) +
                 ['', '§7跑通一次即可；这条产线可以反复跑，是电力时代的研究数据来源。']),
        'grid': dict(
            icon='create:precision_mechanism', task=('checkmark',), title='电网调度',
            desc=station_cost_lines(grid) +
                 ['', '§7算力 4 需要 1 台精英计算机（或三台基础计算机）。']),
    }

    # 按文件分组，逐个章节插入
    by_file = {}
    for t in TARGETS:
        by_file.setdefault(t['file'], []).append(t)

    for chapter, targets in by_file.items():
        path = os.path.join(CH_DIR, chapter + '.snbt')
        text = io.open(path, encoding='utf-8', newline='').read()
        eol = '\r\n' if '\r\n' in text else '\n'
        lines = text.split(eol)
        for t in targets:
            spec = specs[t['key']]
            upsert(lines, quest_block(t['key'], spec['icon'], spec['task'], t['dep'], t['x'], t['y']))
        io.open(path, 'w', encoding='utf-8', newline='').write(eol.join(lines))
        print('chapter updated: %s (%d quests)' % (chapter, len(targets)))

    # ---- 语言（走 fix_quest_lang 的块解析，重复跑不会重复写） ----
    doc = fql.load(LANG)
    fql.drop(doc, 'chapter.A1B2C3D4E5F60718.title')
    for qid in DROP_QUEST_IDS:
        fql.drop(doc, 'quest.%s.quest_desc' % qid)
        fql.drop(doc, 'quest.%s.title' % qid)
        fql.drop(doc, 'quest.%s.quest_subtitle' % qid)

    for t in TARGETS:
        spec = specs[t['key']]
        qid = IDS[t['key']][0]
        fql.set_array(doc, 'quest.%s.quest_desc' % qid, spec['desc'])
        fql.set_string(doc, 'quest.%s.title' % qid, spec['title'])

    # 电力笔记那条任务原本就在这章，只更新文案（配方搬到机械研究台了）
    elec = notes['research_notes_electric']
    elec_desc = note_cost_lines(elec) + ['', '拿到即解锁基础电力 era.electric：通用机械与 AE2 本体同时可用。']
    fql.set_array(doc, 'quest.%s.quest_desc' % ELECTRIC_NOTE_QUEST, elec_desc)
    fql.set_string(doc, 'quest.%s.title' % ELECTRIC_NOTE_QUEST, '研究笔记·电力')

    fql.save(LANG, doc)
    print('lang updated:', os.path.relpath(LANG, GAME))

    if os.path.exists(OLD_CHAPTER):
        os.remove(OLD_CHAPTER)
        print('removed standalone chapter: a1b2c3d4e5f60718.snbt')


if __name__ == '__main__':
    main()
