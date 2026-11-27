# -*- coding: utf-8 -*-
"""把「外星科技」章的坐标画成一张图，给自己核对、给用户看。

直接读 gen_alien_quests.py 的 LAYOUT 与 TEXT，不碰存档。
"""
import importlib.util
import os
import sys

from PIL import Image, ImageDraw, ImageFont

GEN = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..",
                                   "kubejs", "tools", "gen_alien_quests.py"))
OUT = os.path.expanduser("~/.capy/work/infused_preview/alien_layout.png")

BAND = {
    4.0: ("AE 主线", (58, 122, 168)),
    7.5: ("AE 支线", (52, 96, 128)),
    0.0: ("通用机械主线", (168, 92, 58)),
    -3.5: ("通用机械支线", (128, 70, 44)),
    -7.0: ("储能升级", (96, 54, 34)),
}


def load_gen():
    spec = importlib.util.spec_from_file_location("gen_alien", GEN)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def font(size):
    for path in (r"C:\Windows\Fonts\msyh.ttc", r"C:\Windows\Fonts\simhei.ttf",
                 "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"):
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default()


def main():
    g = load_gen()
    cells = [(q, x, y) for q, x, y, *_ in g.LAYOUT]
    xs = [c[1] for c in cells]
    ys = [c[2] for c in cells]
    S = 150          # 一格多少像素
    PAD = 70
    W = int((max(xs) - min(xs)) * S) + 2 * PAD
    H = int((max(ys) - min(ys)) * S) + 2 * PAD + 40
    img = Image.new("RGB", (W, H), (24, 26, 30))
    d = ImageDraw.Draw(img)
    f_t = font(15)
    f_b = font(17)

    def px(x, y):
        return (PAD + (x - min(xs)) * S, 40 + PAD + (max(ys) - y) * S)

    for y in sorted(BAND, reverse=True):
        label, col = BAND[y]
        ty = px(min(xs), y)[1]
        d.line([(10, ty + 30), (W - 10, ty + 30)], fill=(col[0] // 2, col[1] // 2, col[2] // 2), width=1)
        d.text((12, ty + 34), "y = %+g  %s" % (y, label), font=f_b, fill=col)

    pos = {q: (x, y) for q, x, y in cells}
    for q, x, y, deps, shape, icon in g.LAYOUT:
        for dep in deps:
            a = px(x, y)
            b = px(*pos[dep])
            d.line([a, b], fill=(120, 124, 132), width=2)

    for q, x, y, deps, shape, icon in g.LAYOUT:
        cx, cy = px(x, y)
        r = 26
        col = BAND.get(y, ("", (90, 90, 90)))[1]
        if shape == "hexagon":
            pts = [(cx + r * 0.95 * dx, cy + r * 0.95 * dy)
                   for dx, dy in ((0, -1), (0.87, -0.5), (0.87, 0.5), (0, 1), (-0.87, 0.5), (-0.87, -0.5))]
            d.polygon(pts, outline=(230, 230, 235), fill=col)
        else:
            d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(230, 230, 235), fill=col)
        title = g.TEXT.get(q, ("?",))[0]
        tw = d.textlength(title, font=f_t)
        d.text((cx - tw / 2, cy + r + 4), title, font=f_t, fill=(226, 228, 232))

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    img.save(OUT)
    print("布局图", OUT, img.size)


if __name__ == "__main__":
    main()
