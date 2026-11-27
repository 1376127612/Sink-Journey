# -*- coding: utf-8 -*-
"""画「灌注红石」「灌注赛特斯石英」两件中间物的 16×16 贴图。

两件都是「原版打底 + 灌注变色」，不是自己另起一个形状：

  灌注红石     底子是原版红石粉（minecraft:item/redstone）那张粒堆，色板不动，
               只把正中 2×2 换成琥珀色当芯，最中心一格点到近白——读起来是
               「一撮红石粉里烧着一团东西」，和原版红石并排也不打架。
  灌注赛特斯   底子是 AE2 的赛特斯石英（ae2:item/certus_quartz_crystal）那丛晶体，
               形状与明暗照旧，最底一行与左下、右下两丛按亮度换成琥珀（duotone 保亮度），
               上半那根长晶柱仍是青白——读成下半丛沁透了矮人燃油。

字符表就是像素图本身：'.' 是透明，其余字母查下面的色板。
赛特斯的琥珀不是写在表里，而是由 oiled(x, y) 圈范围、soak() 按亮度换色算出来的，
要改浸到哪一丛只动 oiled()。

用法：
    python kubejs/tools/gen_infused_textures.py            # 出图
    python kubejs/tools/gen_infused_textures.py --preview   # 另存 8 倍放大到 ~/.capy/work
"""
import os
import sys

from PIL import Image

OUT = "kubejs/assets/kubejs/textures/item"

# 原版红石的粒堆，色板照原样，另加两个灌注色（k 琥珀、w 近白）
REDSTONE_PALETTE = {
    "a": (92, 7, 0, 255),
    "b": (114, 0, 0, 255),
    "c": (170, 15, 1, 255),
    "d": (255, 0, 0, 255),
    "e": (65, 5, 0, 255),
    "f": (45, 0, 0, 255),
    "g": (52, 6, 5, 255),
}

REDSTONE = [
    "................",
    "................",
    "................",
    ".......aa.......",
    "......abca......",
    ".....acdcef.....",
    "....acdcbdef....",
    "...acccdceaef...",
    "..abdcbedbecgf..",
    "..acbcdcbeeaef..",
    "..fecdcbeceegf..",
    "...fecbeaeegf...",
    "....ffgeegff....",
    "......ffff......",
    "................",
    "................",
]

# 芯：正中 2×2 换成琥珀，最中心一格点到近白
REDSTONE_GLOW = {(7, 7): "w", (7, 8): "k", (8, 8): "k", (7, 9): "k", (6, 9): "k"}

# AE2 赛特斯石英那丛晶体，色板照原样
QUARTZ_PALETTE = {
    "a": (60, 95, 128, 255),
    "b": (218, 255, 255, 255),
    "c": (254, 255, 255, 255),
    "d": (172, 233, 255, 255),
    "e": (156, 211, 255, 255),
    "f": (41, 64, 87, 255),
    "g": (125, 169, 210, 255),
    "h": (138, 187, 239, 255),
    "i": (108, 144, 179, 255),
}

QUARTZ = [
    "................",
    "................",
    "........aa......",
    ".......aba......",
    "......acda......",
    ".....acbdea.....",
    ".....acedea.....",
    ".....fbgdga.....",
    ".....fdghgf.aa..",
    "..aa.fdihiiada..",
    "..acaihigeibga..",
    "..abceiagiadga..",
    "..fhdiaaiaagif..",
    "...faafaifaif...",
    "....ff.ff.ff....",
    "................",
]

# 油浸到哪儿：最底一行整行、以及左下（x≤5）与右下（x≥12）两丛都换成琥珀。
# 整块换而不是上下淡入——青与琥珀按比例混会发灰，分丛换才读成「下半丛泡透了」。
OIL_TINT = (1.00, 0.66, 0.26)   # 琥珀色相（乘在原亮度上）


def oiled(x, y):
    return y >= 10 or (x <= 4 and y >= 9) or (x >= 12 and y >= 8)

REDSTONE_EXTRA = {
    "k": (255, 150, 44, 255),
    "w": (255, 238, 168, 255),
}


def soak(rgba, w):
    """按亮度把青色换成琥珀：亮的仍是亮琥珀，描边变成深褐，明暗关系保住。"""
    if w <= 0:
        return rgba
    r, g, b = rgba[0] / 255.0, rgba[1] / 255.0, rgba[2] / 255.0
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    warm = [min(1.0, lum * c) for c in OIL_TINT]
    out = [int(round((1 - w) * c0 * 255 + w * c1 * 255))
           for c0, c1 in zip((r, g, b), warm)]
    return (out[0], out[1], out[2], rgba[3])


def render(name, rows, palette, extra=None, transform=None):
    assert len(rows) == 16, f"{name}: {len(rows)} 行"
    for i, row in enumerate(rows):
        assert len(row) == 16, f"{name} 第 {i} 行 {len(row)} 格：{row!r}"
        for ch in row:
            assert ch == "." or ch in palette or (extra and ch in extra), \
                f"{name} 第 {i} 行有未定义的颜色 {ch!r}"
    img = Image.new("RGBA", (16, 16), (0, 0, 0, 0))
    px = img.load()
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            if ch == ".":
                continue
            c = (extra or {}).get(ch) or palette[ch]
            px[x, y] = transform(x, y, c) if transform else c
    path = os.path.join(OUT, f"{name}.png")
    os.makedirs(OUT, exist_ok=True)
    img.save(path)
    return path, img


def main():
    red = [list(r) for r in REDSTONE]
    for (x, y), ch in REDSTONE_GLOW.items():
        red[y][x] = ch
    made = [
        render("infused_redstone", ["".join(r) for r in red],
               REDSTONE_PALETTE, REDSTONE_EXTRA),
        render("infused_certus_quartz", QUARTZ, QUARTZ_PALETTE,
               transform=lambda x, y, c: soak(c, 1.0 if oiled(x, y) else 0.0)),
    ]
    for path, _ in made:
        print("写出", path)
    if "--preview" in sys.argv:
        work = os.path.expanduser("~/.capy/work/infused_preview")
        os.makedirs(work, exist_ok=True)
        sheet = Image.new("RGBA", (2 * 16 * 8 + 24, 16 * 8), (28, 30, 34, 255))
        for i, (_, img) in enumerate(made):
            big = img.resize((16 * 8, 16 * 8), Image.NEAREST)
            sheet.alpha_composite(big, (i * (16 * 8 + 24), 0))
        out = os.path.join(work, "infused_items_8x.png")
        sheet.convert("RGB").save(out)
        print("预览", out)


if __name__ == "__main__":
    main()
