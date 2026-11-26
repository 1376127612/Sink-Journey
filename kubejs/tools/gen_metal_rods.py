#!/usr/bin/env python3
"""生成质棍贴图：形状取 IU 质棍，颜色取同名金属锭。

运行：python kubejs/tools/gen_metal_rods.py
输出：kubejs/assets/kubejs/textures/item/<metal>_rod.png
只用标准库解编 PNG，不依赖 PIL。
"""

import glob
import os
import struct
import sys
import zipfile
import zlib

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT_DIR = os.path.join(ROOT, 'kubejs', 'assets', 'kubejs', 'textures', 'item')

# metal -> (来源, 贴图路径, 输出名)
#   来源 = 'vanilla' 读版本目录的客户端 jar；'iu' 读 mods 里的 IU jar
METALS = {
    'iron':   ('vanilla', 'assets/minecraft/textures/item/iron_ingot.png'),
    'copper': ('vanilla', 'assets/minecraft/textures/item/copper_ingot.png'),
    'gold':   ('vanilla', 'assets/minecraft/textures/item/gold_ingot.png'),
    'steel':  ('iu', 'assets/industrialupgrade/textures/item/steel.png'),
    'tin':    ('iu', 'assets/industrialupgrade/textures/item/tin.png'),
    'lead':   ('iu', 'assets/industrialupgrade/textures/item/lead.png'),
    'bronze': ('iu', 'assets/industrialupgrade/textures/item/bronze.png'),
}

ROD_TEMPLATE = ('iu', 'assets/industrialupgrade/textures/item/silver_stick.png')
LEVELS = 7  # 锭贴图的明度档数，IU 的锭正好是 7 色


def find_iu_jar():
    hits = glob.glob(os.path.join(ROOT, 'mods', '*IndustrialUpgrade*.jar'))
    if not hits:
        sys.exit('找不到 IU jar：mods/*IndustrialUpgrade*.jar')
    return hits[0]


def find_client_jar():
    hits = sorted(glob.glob(os.path.join(ROOT, '*.jar')), key=os.path.getsize, reverse=True)
    for path in hits:
        if os.path.basename(path).startswith('libraries'):
            continue
        with zipfile.ZipFile(path) as jar:
            if 'assets/minecraft/textures/item/iron_ingot.png' in jar.namelist():
                return path
    sys.exit('找不到原版客户端 jar：版本目录下带 assets/minecraft 的 jar')


def read_png_bytes(data):
    assert data[:8] == b'\x89PNG\r\n\x1a\n', 'not a png'
    pos, idat, plte, trns, ihdr = 8, b'', None, None, None
    while pos < len(data):
        length = struct.unpack('>I', data[pos:pos + 4])[0]
        kind = data[pos + 4:pos + 8]
        chunk = data[pos + 8:pos + 8 + length]
        if kind == b'IHDR':
            ihdr = struct.unpack('>IIBBBBB', chunk)
        elif kind == b'IDAT':
            idat += chunk
        elif kind == b'PLTE':
            plte = chunk
        elif kind == b'tRNS':
            trns = chunk
        pos += 12 + length
    w, h, depth, color, _, _, interlace = ihdr
    assert interlace == 0, '不支持隔行 PNG'
    assert depth == 8 or color == 3, '只支持 8 位，或调色板索引图'
    bits = depth if color == 3 else 8
    channels = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[color]
    stride = (w * bits * channels + 7) // 8
    channels = max(1, channels * bits // 8)
    raw = zlib.decompress(idat)
    rows, prev, i = [], bytearray(stride), 0
    for _ in range(h):
        filt = raw[i]
        i += 1
        line = bytearray(raw[i:i + stride])
        i += stride
        if filt == 1:
            for x in range(channels, stride):
                line[x] = (line[x] + line[x - channels]) & 255
        elif filt == 2:
            for x in range(stride):
                line[x] = (line[x] + prev[x]) & 255
        elif filt == 3:
            for x in range(stride):
                left = line[x - channels] if x >= channels else 0
                line[x] = (line[x] + ((left + prev[x]) >> 1)) & 255
        elif filt == 4:
            for x in range(stride):
                left = line[x - channels] if x >= channels else 0
                up = prev[x]
                upleft = prev[x - channels] if x >= channels else 0
                pa, pb, pc = abs(up - upleft), abs(left - upleft), abs(left + up - 2 * upleft)
                near = left if (pa <= pb and pa <= pc) else (up if pb <= pc else upleft)
                line[x] = (line[x] + near) & 255
        rows.append(bytes(line))
        prev = line
    pixels = []
    for line in rows:
        indices = None
        if color == 3:
            if bits == 8:
                indices = list(line[:w])
            else:
                per_byte = 8 // bits
                mask = (1 << bits) - 1
                indices = []
                for byte in line:
                    for k in range(per_byte):
                        indices.append((byte >> (8 - bits * (k + 1))) & mask)
                indices = indices[:w]
        for x in range(w):
            if color == 3:
                idx = indices[x]
                r, g, b = plte[idx * 3:idx * 3 + 3]
                a = trns[idx] if trns and idx < len(trns) else 255
                pixels.append((r, g, b, a))
            elif color == 6:
                pixels.append(tuple(line[x * 4:x * 4 + 4]))
            elif color == 2:
                pixels.append(tuple(line[x * 3:x * 3 + 3]) + (255,))
            elif color == 0:
                v = line[x]
                pixels.append((v, v, v, 255))
            else:
                sys.exit('不支持的颜色类型 %d' % color)
    return w, h, pixels


def load_from(source, path):
    jar = find_client_jar() if source == 'vanilla' else find_iu_jar()
    with zipfile.ZipFile(jar) as zf:
        return read_png_bytes(zf.read(path))


def write_png(path, w, h, pixels):
    raw = bytearray()
    for y in range(h):
        raw.append(0)
        for x in range(w):
            raw.extend(bytes(pixels[y * w + x]))

    def chunk(kind, data):
        return (struct.pack('>I', len(data)) + kind + data
                + struct.pack('>I', zlib.crc32(kind + data) & 0xffffffff))

    payload = b'\x89PNG\r\n\x1a\n'
    payload += chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
    payload += chunk(b'IDAT', zlib.compress(bytes(raw), 9))
    payload += chunk(b'IEND', b'')
    with open(path, 'wb') as f:
        f.write(payload)


def luminance(c):
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def ingot_palette(w, h, pixels, levels=LEVELS):
    """把锭贴图的颜色按明度排成 levels 档：从锭本身取色，不另配色号。"""
    counts = {}
    for p in pixels:
        if p[3] > 128:
            counts[p[:3]] = counts.get(p[:3], 0) + 1
    total = sum(counts.values())
    common = {c: n for c, n in counts.items() if n >= total * 0.01} or counts
    ordered = sorted(common, key=luminance)
    if len(ordered) == 1:
        return [ordered[0]] * levels
    palette = []
    for i in range(levels):
        t = i / (levels - 1) * (len(ordered) - 1)
        lo = int(t)
        hi = min(len(ordered) - 1, lo + 1)
        f = t - lo
        a, b = ordered[lo], ordered[hi]
        palette.append(tuple(round(a[k] + (b[k] - a[k]) * f) for k in range(3)))
    return palette


def main():
    tw, th, template = load_from(*ROD_TEMPLATE)
    template_palette = sorted({p[:3] for p in template if p[3] > 128}, key=luminance)
    render = {c: i / (len(template_palette) - 1) for i, c in enumerate(template_palette)}
    os.makedirs(OUT_DIR, exist_ok=True)
    for metal, (source, path) in METALS.items():
        iw, ih, ingot = load_from(source, path)
        palette = ingot_palette(iw, ih, ingot)
        out = []
        for p in template:
            if p[3] == 0:
                out.append((0, 0, 0, 0))
                continue
            t = render[p[:3]]
            r, g, b = palette[min(len(palette) - 1, round(t * (len(palette) - 1)))]
            out.append((r, g, b, 255))
        target = os.path.join(OUT_DIR, '%s_rod.png' % metal)
        write_png(target, tw, th, out)
        print('%-6s -> %s %s' % (metal, os.path.relpath(target, ROOT), palette))


if __name__ == '__main__':
    main()
