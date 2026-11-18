import json, os

BS = chr(92)

files = [
    'kubejs/server_scripts/sink_research_recipes.js',
    'kubejs/server_scripts/sink_research_structures.js',
    'kubejs/server_scripts/sink_research_primitive.js',
    'kubejs/startup_scripts/sink_research_items.js',
    'kubejs/startup_scripts/sink_research_blocks.js',
    'kubejs/startup_scripts/sink_research_machines.js',
    'kubejs/client_scripts/sink_research_jei.js',
]


def strip(src):
    out = []
    i = 0
    n = len(src)
    while i < n:
        c = src[i]
        nxt = src[i + 1] if i + 1 < n else ''
        if c == '/' and nxt == '/':
            while i < n and src[i] != chr(10):
                i += 1
        elif c == '/' and nxt == '*':
            i += 2
            while i + 1 < n and not (src[i] == '*' and src[i + 1] == '/'):
                i += 1
            i += 2
        elif c in ('"', "'"):
            q = c
            i += 1
            while i < n:
                if src[i] == BS:
                    i += 2
                    continue
                if src[i] == q:
                    i += 1
                    break
                i += 1
        elif c == '`':
            i += 1
            while i < n:
                if src[i] == BS:
                    i += 2
                    continue
                if src[i] == '`':
                    i += 1
                    break
                if src[i] == '$' and i + 1 < n and src[i + 1] == '{':
                    depth = 1
                    i += 2
                    while i < n and depth:
                        if src[i] == '{':
                            depth += 1
                        elif src[i] == '}':
                            depth -= 1
                        i += 1
                    continue
                i += 1
        else:
            out.append(c)
            i += 1
    return ''.join(out)


for f in files:
    s = strip(open(f, encoding='utf-8').read())
    balanced = s.count('(') == s.count(')') and s.count('{') == s.count('}') and s.count('[') == s.count(']')
    print('BAL', balanced, f)

for p in ['kubejs/assets/kubejs/lang/zh_cn.json', 'kubejs/assets/kubejs/lang/en_us.json']:
    json.load(open(p, encoding='utf-8'))
    print('JSON OK', p)

for p in [
    'kubejs/assets/kubejs/textures/item/research_notes.png',
    'kubejs/assets/kubejs/textures/item/blueprint_primitive.png',
    'kubejs/assets/kubejs/textures/block/primitive_research_table.png',
]:
    print('TEX', os.path.exists(p), os.path.getsize(p) if os.path.exists(p) else '-', p)
