import zlib, struct, math, os

OUT_ITEM = r"C:\Users\Administrator\pcl\.minecraft\versions\Sink Journey\kubejs\assets\kubejs\textures\item"
OUT_BLOCK = r"C:\Users\Administrator\pcl\.minecraft\versions\Sink Journey\kubejs\assets\kubejs\textures\block"


class Canvas:
    def __init__(self, w=32, h=32):
        self.w, self.h = w, h
        self.px = [[(0, 0, 0, 0)] * w for _ in range(h)]

    def blend(self, x, y, c):
        if not (0 <= x < self.w and 0 <= y < self.h):
            return
        sr, sg, sb, sa = c
        dr, dg, db, da = self.px[y][x]
        a, na = sa / 255.0, da / 255.0
        oa = a + na * (1 - a)
        if oa <= 0:
            return
        self.px[y][x] = (
            int((sr * a + dr * na * (1 - a)) / oa),
            int((sg * a + dg * na * (1 - a)) / oa),
            int((sb * a + db * na * (1 - a)) / oa),
            int(oa * 255),
        )

    def set(self, x, y, c):
        if 0 <= x < self.w and 0 <= y < self.h:
            self.px[y][x] = c

    def rect(self, x0, y0, x1, y1, c):
        for y in range(y0, y1 + 1):
            for x in range(x0, x1 + 1):
                self.set(x, y, c)

    def disc(self, cx, cy, r, c):
        for y in range(-r, r + 1):
            for x in range(-r, r + 1):
                if x * x + y * y <= r * r:
                    self.blend(cx + x, cy + y, c)

    def ring(self, cx, cy, r, c, t=1):
        for y in range(-r - t, r + t + 1):
            for x in range(-r - t, r + t + 1):
                if r - t < math.hypot(x, y) <= r:
                    self.blend(cx + x, cy + y, c)

    def line(self, x0, y0, x1, y1, c):
        n = max(abs(x1 - x0), abs(y1 - y0))
        for i in range(n + 1):
            x = round(x0 + (x1 - x0) * i / n)
            y = round(y0 + (y1 - y0) * i / n)
            self.set(x, y, c)

    def save(self, path):
        raw = b""
        for y in range(self.h):
            raw += b"\x00" + bytes(v for p in self.px[y] for v in p)

        def chunk(t, d):
            return struct.pack(">I", len(d)) + t + d + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)

        png = b"\x89PNG\r\n\x1a\n"
        png += chunk(b"IHDR", struct.pack(">IIBBBBB", self.w, self.h, 8, 6, 0, 0, 0))
        png += chunk(b"IDAT", zlib.compress(raw, 9))
        png += chunk(b"IEND", b"")
        with open(path, "wb") as f:
            f.write(png)
        print("wrote", path)


# ---------------------------------------------------------------- items

def scroll(theme, edge, grid, motif):
    c = Canvas()
    # rolled top / bottom
    c.rect(5, 3, 26, 6, edge)
    c.rect(5, 25, 26, 28, edge)
    c.rect(4, 4, 5, 5, edge)
    c.rect(26, 4, 27, 5, edge)
    c.rect(4, 26, 5, 27, edge)
    c.rect(26, 26, 27, 27, edge)
    # paper body
    c.rect(7, 6, 24, 25, theme)
    c.rect(7, 6, 24, 7, edge)
    # faint grid
    for y in (10, 14, 18, 22):
        for x in range(8, 24):
            c.blend(x, y, grid)
    for x in (11, 16, 21):
        for y in range(8, 24):
            c.blend(x, y, grid[:3] + (28,))
    motif(c)
    return c


def motif_gear(c):
    gold = (226, 180, 92, 255)
    copper = (204, 122, 66, 255)
    c.ring(16, 16, 6, gold, 1)
    for a in range(8):
        ang = math.pi * a / 4
        x, y = 16 + round(math.cos(ang) * 7), 16 + round(math.sin(ang) * 7)
        c.set(x, y, gold)
    c.disc(16, 16, 2, copper)


def motif_flame(c):
    orange = (242, 140, 46, 255)
    yellow = (255, 216, 92, 255)
    red = (208, 66, 40, 255)
    for y in range(9, 23):
        half = int((y - 9) * 0.55) + 1
        c.rect(16 - half, y, 16 + half, y, orange)
    c.line(16, 9, 13, 15, red)
    c.line(16, 9, 19, 15, red)
    c.disc(16, 18, 3, yellow)


def motif_star(c):
    gold = (248, 214, 110, 255)
    pale = (255, 248, 214, 255)
    for r in range(1, 9):
        w = max(0, 3 - r // 3)
        c.rect(16 - w, 16 - r, 16 + w, 16 - r, gold)
        c.rect(16 - w, 16 + r, 16 + w, 16 + r, gold)
        c.rect(16 - r, 16 - w, 16 - r, 16 + w, gold)
        c.rect(16 + r, 16 - w, 16 + r, 16 + w, gold)
    c.disc(16, 16, 2, pale)
    c.set(23, 9, gold)
    c.set(9, 22, gold)


def motif_eye(c):
    green = (110, 236, 140, 255)
    dark = (28, 12, 40, 255)
    c.disc(16, 16, 6, (86, 46, 128, 255))
    for y in range(11, 22):
        half = int(math.sqrt(max(0, 36 - (y - 16) ** 2)))
        c.rect(16 - half, y, 16 + half, y, green)
    c.rect(15, 11, 17, 21, dark)
    c.disc(16, 16, 2, (200, 255, 210, 255))


def item_chip():
    c = Canvas()
    body = (44, 58, 66, 255)
    edge = (96, 226, 214, 255)
    pin = (226, 186, 92, 255)
    c.rect(7, 7, 24, 24, (28, 34, 40, 255))
    c.rect(8, 8, 23, 23, body)
    for i, y in enumerate((10, 14, 18, 22)):
        c.rect(3, y, 7, y + 1, pin)
        c.rect(24, y, 28, y + 1, pin)
    c.rect(11, 11, 20, 20, (56, 76, 84, 255))
    c.rect(11, 11, 20, 11, edge)
    c.rect(11, 20, 20, 20, edge)
    c.rect(11, 11, 11, 20, edge)
    c.rect(20, 11, 20, 20, edge)
    c.rect(15, 14, 16, 17, (120, 255, 230, 255))
    c.set(13, 13, (120, 255, 230, 255))
    c.set(18, 18, (120, 255, 230, 255))
    return c


def item_substrate():
    c = Canvas()
    def crystal(cx, cy, r, col):
        for y in range(-r, r + 1):
            w = r - abs(y)
            c.rect(cx - w, cy + y, cx + w, cy + y, col)
        c.rect(cx, cy - r, cx, cy + r, tuple(min(255, v + 40) for v in col[:3]) + (255,))
    crystal(10, 22, 6, (36, 150, 132, 255))
    crystal(21, 21, 5, (42, 176, 150, 255))
    crystal(16, 12, 7, (60, 214, 184, 255))
    c.set(16, 6, (180, 255, 236, 255))
    c.set(24, 12, (180, 255, 236, 255))
    c.set(6, 14, (180, 255, 236, 255))
    return c


def item_blank():
    c = Canvas()
    paper = (232, 226, 202, 255)
    ink = (150, 142, 118, 255)
    faint = (150, 142, 118, 70)
    fainter = (150, 142, 118, 40)
    c.rect(5, 3, 26, 5, (196, 188, 160, 255))
    c.rect(5, 26, 26, 28, (196, 188, 160, 255))
    c.rect(7, 5, 24, 26, paper)
    for y in (9, 13, 17, 21, 25):
        for x in range(9, 23):
            c.blend(x, y, faint)
    for x in (10, 15, 20):
        for y in range(7, 25):
            c.blend(x, y, fainter)
    c.rect(24, 5, 24, 26, (208, 200, 172, 255))
    return c


def motif_quill(c):
    quill = (238, 232, 214, 255)
    shaft = (90, 72, 54, 255)
    ink = (56, 60, 84, 255)
    c.line(11, 23, 21, 9, shaft)
    for i in range(4):
        c.line(12 + i, 19 - i * 2, 17 + i, 16 - i * 2, quill)
    c.disc(9, 24, 1, ink)


def item_notes():
    c = Canvas()
    paper = (232, 226, 202, 255)
    edge = (196, 188, 160, 255)
    ink = (120, 112, 92, 255)
    c.rect(8, 5, 24, 27, edge)
    c.rect(9, 6, 23, 26, paper)
    for y in (10, 13, 16, 19, 22):
        c.rect(11, y, 21, y, ink)
    c.rect(17, 16, 21, 16, paper)
    c.rect(24, 6, 24, 27, (208, 200, 172, 255))
    return c


def block_primitive_table():
    c = Canvas()
    wood = (122, 86, 54, 255)
    wood_dark = (94, 64, 40, 255)
    wood_light = (150, 108, 68, 255)
    paper = (232, 226, 202, 255)
    ink = (46, 42, 52, 255)
    c.rect(0, 0, 31, 31, wood)
    for y in (7, 15, 23):
        c.rect(0, y, 31, y, wood_dark)
    c.rect(0, 27, 31, 29, wood_light)
    c.rect(7, 3, 20, 12, paper)
    c.rect(8, 4, 19, 11, (240, 236, 214, 255))
    c.rect(10, 6, 17, 6, (150, 142, 118, 255))
    c.rect(10, 8, 15, 8, (150, 142, 118, 255))
    c.rect(22, 7, 27, 12, ink)
    c.rect(23, 8, 26, 8, (90, 86, 110, 255))
    return c


# ---------------------------------------------------------------- blocks

def plate(core, motif):
    c = Canvas()
    c.rect(0, 0, 31, 31, (34, 36, 42, 255))
    c.rect(1, 1, 30, 30, (62, 66, 76, 255))
    c.rect(2, 2, 29, 29, (74, 78, 90, 255))
    c.rect(3, 3, 28, 28, (58, 62, 72, 255))
    for x, y in ((4, 4), (27, 4), (4, 27), (27, 27)):
        c.disc(x, y, 1, (152, 158, 170, 255))
        c.set(x, y, (198, 204, 214, 255))
    c.disc(16, 16, 9, (22, 24, 30, 255))
    c.disc(16, 16, 8, core)
    c.disc(16, 16, 5, tuple(v // 2 for v in core[:3]) + (255,))
    motif(c)
    return c


def block_overclock():
    def motif(c):
        hot = (255, 170, 80, 255)
        c.line(12, 20, 16, 12, hot)
        c.line(16, 12, 20, 20, hot)
        c.line(13, 17, 16, 11, (255, 232, 160, 255))
        c.line(16, 11, 19, 17, (255, 232, 160, 255))
    return plate((188, 62, 52, 255), motif)


def block_parallel():
    def motif(c):
        for i, x in enumerate((12, 15, 18)):
            c.rect(x, 11, x + 1, 21, (140, 210, 255, 255))
            c.set(x, 11 + i, (220, 244, 255, 255))
    return plate((58, 108, 190, 255), motif)


def block_thermal():
    def motif(c):
        for a in range(8):
            ang = math.pi * a / 4
            c.line(16, 16, 16 + round(math.cos(ang) * 7), 16 + round(math.sin(ang) * 7),
                   (200, 244, 250, 255))
        c.disc(16, 16, 2, (236, 254, 255, 255))
    return plate((66, 158, 172, 255), motif)


def block_efficiency():
    def motif(c):
        bolt = (150, 255, 160, 255)
        c.line(18, 10, 13, 17, bolt)
        c.line(13, 17, 17, 17, bolt)
        c.line(17, 17, 13, 23, bolt)
        c.set(18, 10, (224, 255, 228, 255))
    return plate((64, 168, 88, 255), motif)


os.makedirs(OUT_ITEM, exist_ok=True)
os.makedirs(OUT_BLOCK, exist_ok=True)

scroll((32, 62, 108, 255), (58, 96, 150, 255), (120, 176, 226, 255), motif_gear).save(
    os.path.join(OUT_ITEM, "blueprint_steam.png"))
scroll((42, 40, 70, 255), (74, 70, 108, 255), (150, 140, 190, 255), motif_flame).save(
    os.path.join(OUT_ITEM, "blueprint_ember.png"))
scroll((22, 34, 70, 255), (48, 70, 116, 255), (108, 142, 206, 255), motif_star).save(
    os.path.join(OUT_ITEM, "blueprint_radiance.png"))
scroll((44, 26, 66, 255), (76, 50, 104, 255), (156, 118, 196, 255), motif_eye).save(
    os.path.join(OUT_ITEM, "blueprint_end.png"))
scroll((58, 52, 34, 255), (100, 88, 52, 255), (168, 148, 92, 255), motif_quill).save(
    os.path.join(OUT_ITEM, "blueprint_primitive.png"))
item_blank().save(os.path.join(OUT_ITEM, "blank_blueprint.png"))
item_notes().save(os.path.join(OUT_ITEM, "research_notes.png"))
item_chip().save(os.path.join(OUT_ITEM, "research_data.png"))
item_substrate().save(os.path.join(OUT_ITEM, "research_substrate.png"))

block_primitive_table().save(os.path.join(OUT_BLOCK, "primitive_research_table.png"))
block_overclock().save(os.path.join(OUT_BLOCK, "overclock_module.png"))
block_parallel().save(os.path.join(OUT_BLOCK, "parallel_module.png"))
block_thermal().save(os.path.join(OUT_BLOCK, "thermal_module.png"))
block_efficiency().save(os.path.join(OUT_BLOCK, "efficiency_module.png"))
