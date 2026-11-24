# -*- coding: utf-8 -*-
"""研究节点静态校验（进游戏前跑一遍，省一次重启）

用法（在 kubejs/ 目录下）：
    python tools/check_research_nodes.py

检查项：
  * 节点 id / unlock key 唯一
  * requires 指向的节点存在、图无环
  * craft 节点必备字段齐全，产物/成本写法合法
  * ui.x / ui.y 有值（终端的完整树视图靠它排版）
  * lang 里有 research.node.<短 id>.name 与 ui.doc 指向的描述（zh_cn / en_us）
  * unlock 里的 era.* 阶段与 AStages 实际登记的阶段对照：
      - AStages 拦了东西但没有任何节点授予 -> 报 WARN（该阶段物品永远锁死）
      - 节点授予了 AStages 里没有的阶段 -> 只是没有拦截，INFO

退出码：有 ERROR 时为 1，只有 WARN 时为 0。
"""
from __future__ import print_function

import io
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CFG = os.path.join(ROOT, 'config', 'sinkresearch')
LANG_DIR = os.path.join(ROOT, 'assets', 'kubejs', 'lang')
ASTAGES = os.path.join(os.path.dirname(ROOT), 'config', 'astages', 'simple', 'astages', 'item.json')

errors = []
warns = []


def err(msg):
    errors.append(msg)


def warn(msg):
    warns.append(msg)


def read_json(path):
    try:
        with io.open(path, encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:  # noqa: BLE001 - 报错要带文件名
        err('读取失败 %s: %s' % (os.path.relpath(path, ROOT), e))
        return None


def load_nodes():
    manifest = read_json(os.path.join(CFG, 'manifest.json'))
    if not manifest:
        return []
    rows = []
    for page in manifest.get('pages', []):
        data = read_json(os.path.join(CFG, page))
        if not data:
            continue
        page_id = data.get('page') or page
        for node in data.get('nodes', []):
            rows.append((page_id, node))
    return rows


def load_lang(name):
    path = os.path.join(LANG_DIR, name)
    if not os.path.exists(path):
        return None
    return read_json(path)


def check(rows):
    by_id = {}
    unlock_owner = {}
    for page_id, node in rows:
        nid = str(node.get('id', ''))
        if not nid:
            err('%s: 有节点缺 id' % page_id)
            continue
        if nid in by_id:
            err('节点 id 重复: %s' % nid)
            continue
        by_id[nid] = node
        for key in node.get('unlock', []) or []:
            k = str(key)
            if k in unlock_owner:
                err('unlock key 重复: %s（%s 与 %s）' % (k, unlock_owner[k], nid))
            else:
                unlock_owner[k] = nid

    for nid, node in by_id.items():
        kind = node.get('kind')
        req = node.get('requires') or {}
        children = req.get('or') or req.get('and') or []
        for child in children:
            if str(child) not in by_id:
                err('%s: 前置不存在 %s' % (nid, child))

        ui = node.get('ui') or {}
        if ui.get('x') is None or ui.get('y') is None:
            warn('%s: ui.x / ui.y 缺失，完整树视图会把它挤到 (0,0)' % nid)
        if ui.get('doc') and not str(ui['doc']).startswith('research.'):
            warn('%s: ui.doc 不是 research.* 键（%s）' % (nid, ui['doc']))

        if kind == 'craft':
            inputs = node.get('inputs') or {}
            items = inputs.get('items') or []
            fluids = inputs.get('fluids') or []
            outs = (node.get('outputs') or {}).get('items') or []
            if not items and not fluids:
                err('%s: craft 节点没有任何输入' % nid)
            if not outs:
                err('%s: craft 节点没有产物（研究站配方会生成空配方）' % nid)
            if not node.get('duration'):
                err('%s: craft 节点缺 duration' % nid)
            if not node.get('recipe_id'):
                warn('%s: 缺 recipe_id，会用 kubejs:research_station/<id> 兜底' % nid)
            compute = inputs.get('compute')
            if compute is not None and (not isinstance(compute, (int, float)) or compute < 0):
                err('%s: inputs.compute 必须是 >= 0 的数字' % nid)
            for out in outs:
                if ':' not in str(out.get('id', '')):
                    err('%s: 产物 id 不像命名空间 id: %s' % (nid, out.get('id')))
        elif kind == 'milestone':
            if not node.get('trigger'):
                err('%s: milestone 节点缺 trigger' % nid)
            if not node.get('unlock'):
                warn('%s: milestone 节点没有 unlock，触发后什么也不会发生' % nid)
        else:
            err('%s: 未知 kind: %s' % (nid, kind))

    # 环检测
    state = {}

    def dfs(nid, stack):
        st = state.get(nid)
        if st == 2:
            return
        if st == 1:
            err('研究图有环: %s -> %s' % (' -> '.join(stack), nid))
            return
        state[nid] = 1
        node = by_id[nid]
        req = node.get('requires') or {}
        for child in req.get('or') or req.get('and') or []:
            if str(child) in by_id:
                dfs(str(child), stack + [nid])
        state[nid] = 2

    for nid in by_id:
        dfs(nid, [])
    return by_id, unlock_owner


def check_lang(by_id):
    for lang in ('zh_cn.json', 'en_us.json'):
        table = load_lang(lang)
        if table is None:
            warn('缺少语言文件 %s' % lang)
            continue
        for nid, node in by_id.items():
            short = nid.split(':')[-1]
            name_key = 'research.node.%s.name' % short
            if name_key not in table:
                err('%s: %s 缺 %s' % (lang, nid, name_key))
            doc = (node.get('ui') or {}).get('doc')
            if doc and doc not in table:
                err('%s: %s 的说明键 %s 没有词条' % (lang, nid, doc))


def check_astages(rows, unlock_owner):
    if not os.path.exists(ASTAGES):
        warn('没有 AStages 限制表（%s），跳过阶段对照' % os.path.relpath(ASTAGES, os.path.dirname(ROOT)))
        return
    table = read_json(ASTAGES) or []
    gated = {}
    for entry in table:
        stage = str(entry.get('stage', ''))
        if not stage:
            continue
        gated[stage] = gated.get(stage, 0) + 1

    granted = set(k for k in unlock_owner if k.startswith('era.'))
    for stage, count in sorted(gated.items()):
        if stage not in granted:
            warn('阶段 %s 拦了 %d 个物品，但没有任何节点授予它（除非别处发 stage，这些物品会一直锁着）'
                 % (stage, count))
    for stage in sorted(granted):
        if stage not in gated:
            print('  [INFO] 阶段 %s 由节点授予，但 AStages 没有拦截任何东西' % stage)


def main():
    rows = load_nodes()
    if not rows:
        err('一个节点都没读到，检查 config/sinkresearch/manifest.json')
    by_id, unlock_owner = check(rows)
    check_lang(by_id)
    check_astages(rows, unlock_owner)

    print('节点 %d 个，unlock key %d 个' % (len(by_id), len(unlock_owner)))
    for w in warns:
        print('  [WARN] %s' % w)
    for e in errors:
        print('  [ERROR] %s' % e)
    if errors:
        print('校验失败：%d 个错误' % len(errors))
        return 1
    print('校验通过（%d 条警告）' % len(warns))
    return 0


if __name__ == '__main__':
    sys.exit(main())
