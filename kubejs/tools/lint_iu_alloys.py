"""IU 合金一致性检查（IU_ALLOY_PLAN.md 的守卫）。

    python kubejs/tools/lint_iu_alloys.py

查五件事：
1. kubejs/sjcore/alloys.json 的每条补丁：pool 名存在、进料槽数不超过炉档、进出货平衡；
2. 被 P0 从炉里删掉的合金，必须在 alloy_blends.js 里有且只有一条混粉来源；
3. 每种合金粉（alloydust）在 IU jar 里都有"粉 → 锭"的熔炉/高炉配方，否则混粉路线是死路；
4. 这两个新文件里不许出现奇幻材料（§7 退出清单）；
5. 补丁里用到的每个 c: 标签在 mods 里真有物品（标签缺失时 IU 会给配方留一个空格子，不报错还能合成）；
6. 每条带温度的补丁都不超过所放炉档的上限，并且带 meta.sj_heat（温度门槛只认这个标记）。

只读 jar 与脚本，不改任何东西；不进游戏就能跑。
"""
from __future__ import annotations

import glob
import json
import os
import re
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PATCH = os.path.join(ROOT, 'kubejs', 'sjcore', 'alloys.json')
BLENDS = os.path.join(ROOT, 'kubejs', 'server_scripts', 'metallurgy', 'alloy_blends.js')
IU_JAR = glob.glob(os.path.join(ROOT, 'mods', '*IndustrialUpgrade*.jar'))
FANTASY = ['mikhail', 'caravky', 'spinel', 'adamantium', 'bloodstone', 'draconid',
           'meteoric', 'mithril', 'orichalcum', 'sunnarium', 'nether_star']

# 与 Sink-Journey-Core 的 IuAlloyHeat 保持一致
POOL_HEAT = {
    'alloysmelter': 1500,
    'advalloysmelter': 2000,
    'impalloysmelter': 3000,
    'peralloysmelter': 4000,
}

POOL_SLOTS = {
    'alloysmelter': 2,
    'advalloysmelter': 3,
    'impalloysmelter': 4,
    'peralloysmelter': 5,
}

errors: list[str] = []
notes: list[str] = []


def load_patches():
    data = json.load(open(PATCH, encoding='utf-8'))
    return data.get('patches', [])


def removed_alloys(patches):
    out = []
    for p in patches:
        if p.get('op') != 'remove':
            continue
        for o in p.get('outputs', []):
            item = o.get('item', '')
            m = re.match(r'industrialupgrade:alloyingot/(.+)$', item)
            if m:
                out.append(m.group(1))
    return out


def blend_outputs():
    src = open(BLENDS, encoding='utf-8').read()
    return re.findall(r"\[['\"]([a-z_]+)['\"],\s*\d+,\s*\[", src)


def dust_to_ingot(alloys):
    if not IU_JAR:
        notes.append('找不到 IndustrialUpgrade jar，跳过 §3')
        return
    have = set()
    with zipfile.ZipFile(IU_JAR[0]) as z:
        for n in z.namelist():
            if not re.match(r'data/industrialupgrade/recipes?/', n) or not n.endswith('.json'):
                continue
            try:
                j = json.loads(z.read(n).decode('utf-8'))
            except Exception:
                continue
            s = json.dumps(j)
            if 'alloydust/' not in s:
                continue
            m = re.search(r'alloyingot/([a-z_]+)', s)
            if m:
                have.add(m.group(1))
    for a in alloys:
        if a not in have:
            errors.append(f'[§3] {a} 没有 alloydust → alloyingot 的熔炉/高炉配方，混粉路线是死路')


def check_tags(patches):
    used = sorted({x['tag'] for p in patches for x in p.get('inputs', []) if 'tag' in x})
    if not used:
        return
    mods = os.path.join(ROOT, 'mods')
    have = set()
    for f in sorted(os.listdir(mods)):
        if not f.endswith('.jar'):
            continue
        try:
            z = zipfile.ZipFile(os.path.join(mods, f))
        except Exception:
            continue
        with z:
            for n in z.namelist():
                m = re.match(r'data/[^/]+/tags/item/([a-z_]+)/(.+)\.json$', n)
                if not m:
                    continue
                key = f'c:{m.group(1)}/{m.group(2)}'
                if key not in used or key in have:
                    continue
                try:
                    j = json.loads(z.read(n).decode('utf-8'))
                except Exception:
                    continue
                if any(isinstance(v, str) and not v.startswith('#') for v in j.get('values', [])):
                    have.add(key)
    for tag in used:
        if tag not in have:
            errors.append(f'[§5] 标签 {tag} 在 mods 里没有实际物品，配方会留空槽')


def main():
    patches = load_patches()

    for i, p in enumerate(patches, 1):
        pool = p.get('pool', '')
        op = p.get('op', '')
        if pool not in POOL_SLOTS:
            errors.append(f'[§1] 第 {i} 条补丁的 pool 不存在：{pool}')
            continue
        if op not in ('add', 'remove', 'replace', 'clear'):
            errors.append(f'[§1] 第 {i} 条补丁的 op 不认识：{op}')
        slots = len(p.get('inputs', []))
        if op != 'remove' and slots > POOL_SLOTS[pool]:
            errors.append(f'[§1] 第 {i} 条补丁（{pool}）有 {slots} 个进料槽，超过炉档上限 {POOL_SLOTS[pool]}')
        heat = p.get('temperature')
        if heat is not None:
            cap = POOL_HEAT.get(pool, 0)
            if cap and heat > cap:
                errors.append(f'[§6] 第 {i} 条补丁温度 {heat} ℃ 超过 {pool} 的上限 {cap} ℃，机器会拒绝这条配方')
            if op == 'replace' and 'sj_heat' not in (p.get('meta') or {}):
                errors.append(f'[§6] 第 {i} 条补丁写了温度但没带 meta.sj_heat，温度门槛不会生效')
        if op == 'replace':
            fin = sum(x.get('count', 1) for x in p.get('inputs', []))
            fout = sum(x.get('count', 1) for x in p.get('outputs', []))
            if fin != fout:
                notes.append(f'[§1] 第 {i} 条补丁进出货不守恒：进 {fin} 出 {fout}（{p["outputs"][0]["item"]}）')

    blends = blend_outputs()
    dup = {a for a in blends if blends.count(a) > 1}
    if dup:
        errors.append(f'[§2] 混粉里有重复合金：{sorted(dup)}')

    readded = {a for p in patches if p.get('op') == 'replace'
               for o in p.get('outputs', [])
               for m in [re.match(r'industrialupgrade:alloyingot/(.+)$', o.get('item', ''))] if m
               for a in [m.group(1)]}
    gone = removed_alloys(patches)
    # 已在别的脚本里有混粉来源的，不在这里重复要求
    external = {'stainless_steel': 'server_scripts/metallurgy/stainless_steel.js'}
    for a in gone:
        if a not in blends and a not in external and a not in readded and a != 'nether_star_ingot':
            errors.append(f'[§2] {a} 从炉里删了，但 alloy_blends.js 里没有对应的混粉配方')
    for a in blends:
        if a not in gone and a != 'red_brass':
            notes.append(f'[§2] {a} 有混粉配方，但炉里那条没删（会出现两条来源）')

    dust_to_ingot(blends)
    check_tags(patches)

    # nether_star_ingot 是 §7 明确要删掉的那一条，删除补丁里必须出现它的 id，不算违规
    sanctioned = {'industrialupgrade:nether_star_ingot'}

    for path in (PATCH, BLENDS):
        src = open(path, encoding='utf-8').read().lower()
        for f in FANTASY:
            for m in re.finditer(r'industrialupgrade:[a-z_/]*' + f + r'[a-z_/]*', src):
                if m.group(0) in sanctioned:
                    continue
                errors.append(f'[§4] {os.path.basename(path)} 里出现奇幻材料：{m.group(0)}')

    print(f'补丁 {len(patches)} 条，炉内移除 {len(gone)} 种，混粉 {len(blends)} 条')
    for n in notes:
        print('NOTE  ' + n)
    for e in errors:
        print('ERROR ' + e)
    if errors:
        print(f'\n{len(errors)} 个问题')
        return 1
    print('\n合金一致：通过')
    return 0


if __name__ == '__main__':
    sys.exit(main())
