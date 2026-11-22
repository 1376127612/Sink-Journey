import sys

BS = chr(92)
FILES = [
    'startup_scripts/silicon/chip_items.js',
    'startup_scripts/silicon/litho_machines.js',
    'server_scripts/silicon/litho_structure.js',
    'server_scripts/silicon/litho_recipes.js',
]

for f in FILES:
    s = open(f, encoding='utf-8').read()
    out = []
    i = 0
    n = len(s)
    q = None
    while i < n:
        c = s[i]
        if q:
            if c == BS:
                i += 2
                continue
            if c == q:
                q = None
            i += 1
            continue
        if c in ("'", '"', '`'):
            q = c
            i += 1
            continue
        if c == '/' and i + 1 < n and s[i + 1] == '/':
            while i < n and s[i] != chr(10):
                i += 1
            continue
        if c == '/' and i + 1 < n and s[i + 1] == '*':
            i += 2
            while i + 1 < n and not (s[i] == '*' and s[i + 1] == '/'):
                i += 1
            i += 2
            continue
        out.append(c)
        i += 1
    t = ''.join(out)
    bal = {'(': 0, '{': 0, '[': 0}
    pairs = {')': '(', '}': '{', ']': '['}
    for ch in t:
        if ch in bal:
            bal[ch] += 1
        elif ch in pairs:
            bal[pairs[ch]] -= 1
    ok = all(v == 0 for v in bal.values())
    print(f, bal, 'OK' if ok else 'MISMATCH')
