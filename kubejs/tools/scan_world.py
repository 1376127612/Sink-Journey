#!/usr/bin/env python3
"""扫存档验矿：直接读 Anvil 区域文件，数真实区块里的矿石方块。

这是"验收生成"的落地版——不模拟、不猜，读的是存档里已经生成出来的方块数据。
用法：
    python kubejs/tools/scan_world.py                     # 最新的存档，全部维度
    python kubejs/tools/scan_world.py "新的世界 (3)"       # 指定存档
    python kubejs/tools/scan_world.py --max-chunks 400     # 每维度最多读多少区块
    python kubejs/tools/scan_world.py --dump              # 额外打印非矿表的方块

让区块先生成出来再跑：新世界直接跑；老世界在游戏里 /forceload add 圈一块，
等区块生成完，存档退出，再执行本脚本。
"""
import argparse
import json
import struct
import sys
import zipfile
import zlib
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_oregen import TABLE  # noqa: E402  同一张表，验收和生成不会对不上

PACK = ROOT / "config/paxi/datapacks/sj-oregen/data"

# ------------------------------------------------------------------ NBT

class NBT:
    """够用的 NBT 读取器：只解 tag，不求还原成漂亮结构。"""

    def __init__(self, data: bytes):
        self.d = data
        self.i = 0

    def u1(self):
        v = self.d[self.i]
        self.i += 1
        return v

    def i1(self):
        v = self.d[self.i]
        self.i += 1
        return v - 256 if v > 127 else v

    def u2(self):
        v = struct.unpack_from(">H", self.d, self.i)[0]
        self.i += 2
        return v

    def i4(self):
        v = struct.unpack_from(">i", self.d, self.i)[0]
        self.i += 4
        return v

    def i8(self):
        v = struct.unpack_from(">q", self.d, self.i)[0]
        self.i += 8
        return v

    def f4(self):
        v = struct.unpack_from(">f", self.d, self.i)[0]
        self.i += 4
        return v

    def f8(self):
        v = struct.unpack_from(">d", self.d, self.i)[0]
        self.i += 8
        return v

    def string(self):
        n = self.u2()
        s = self.d[self.i:self.i + n].decode("utf-8", "replace")
        self.i += n
        return s

    def payload(self, tag: int):
        if tag == 1:
            return self.i1()
        if tag == 2:
            v = struct.unpack_from(">h", self.d, self.i)[0]
            self.i += 2
            return v
        if tag == 3:
            return self.i4()
        if tag == 4:
            return self.i8()
        if tag == 5:
            return self.f4()
        if tag == 6:
            return self.f8()
        if tag == 7:
            n = self.i4()
            v = self.d[self.i:self.i + n]
            self.i += n
            return v
        if tag == 8:
            return self.string()
        if tag == 9:
            item = self.u1()
            n = self.i4()
            return [self.payload(item) for _ in range(n)]
        if tag == 10:
            out = {}
            while True:
                t = self.u1()
                if t == 0:
                    return out
                key = self.string()
                out[key] = self.payload(t)
        if tag == 11:
            n = self.i4()
            v = list(struct.unpack_from(f">{n}i", self.d, self.i))
            self.i += 4 * n
            return v
        if tag == 12:
            n = self.i4()
            v = list(struct.unpack_from(f">{n}q", self.d, self.i))
            self.i += 8 * n
            return v
        raise ValueError(f"未知 NBT tag {tag}")


def read_nbt(raw: bytes):
    r = NBT(raw)
    if r.u1() != 10:
        raise ValueError("根不是 compound")
    r.string()
    return r.payload(10)


# --------------------------------------------------------------- 区域文件

def iter_region_chunks(path: Path):
    data = path.read_bytes()
    if len(data) < 8192:
        return
    for idx in range(1024):
        off = int.from_bytes(data[idx * 4:idx * 4 + 3], "big")
        if off == 0:
            continue
        pos = off * 4096
        if pos + 5 > len(data):
            continue
        length = struct.unpack_from(">i", data, pos)[0]
        comp = data[pos + 4]
        payload = data[pos + 5:pos + 4 + length]
        try:
            if comp == 1:
                payload = zlib.decompress(payload, 16 + zlib.MAX_WBITS)
            elif comp == 2:
                payload = zlib.decompress(payload)
            elif comp != 3:
                continue
        except zlib.error:
            continue
        yield payload


# ---------------------------------------------------------------- 方块计数

def iter_section_blocks(section):
    """(方块 id, 块数) —— 不逐格展开，直接按调色板统计。"""
    bs = section.get("block_states")
    if not bs:
        return
    palette = bs.get("palette") or []
    if not palette:
        return
    names = []
    for entry in palette:
        if isinstance(entry, dict):
            names.append(entry.get("Name") or entry.get("name") or "?")
        else:
            names.append(str(entry))
    if len(names) == 1:
        yield names[0], 4096
        return
    data = bs.get("data")
    if not data:
        return
    bits = max(4, (len(names) - 1).bit_length())
    per_long = 64 // bits
    mask = (1 << bits) - 1
    counts = defaultdict(int)
    for i in range(4096):
        word = data[i // per_long] & 0xFFFFFFFFFFFFFFFF
        ci = (word >> ((i % per_long) * bits)) & mask
        if ci < len(names):
            counts[names[ci]] += 1
    for name, n in counts.items():
        yield name, n


def chunk_ores(payload: bytes, watch: dict):
    """一个区块里被关注的方块计数，以及每个方块出现的 y 范围。"""
    root = read_nbt(payload)
    if root.get("Status") not in (None, "minecraft:full"):
        return None, None
    counts = defaultdict(int)
    yrange = {}
    for sec in root.get("sections") or []:
        if not isinstance(sec, dict):
            continue
        sy = sec.get("Y", 0) or 0
        y_lo, y_hi = sy * 16, sy * 16 + 15
        for name, n in iter_section_blocks(sec):
            if name not in watch:
                continue
            counts[name] += n
            lo, hi = yrange.get(name, (9999, -9999))
            yrange[name] = (min(lo, y_lo), max(hi, y_hi))
    return counts, yrange


# ------------------------------------------------------------------ 期望表

# 这几种原版自己也在生成，密度没法按本表算，只验"有没有"
VANILLA_TOO = {"copper", "iron", "coal"}

KIND_TO_DIM = {
    "stone": "minecraft:overworld",
    "nether": "minecraft:the_nether",
    "end": "minecraft:the_end",
    "moon": "ad_astra:moon",
    "mercury": "ad_astra:mercury",
    "mars": "ad_astra:mars",
    "glacio": "ad_astra:glacio",
}


def expected():
    """dim -> metal -> {"blocks": set(方块id), "budget": 每区块期望块数}"""
    dims = defaultdict(lambda: defaultdict(lambda: {"blocks": set(), "budget": 0.0}))
    for ore, stone, deep, _y0, _y1, count, size, rarity, kind, _tool, _tag, _air in TABLE:
        metal = ore.removesuffix("_large")
        slot = dims[KIND_TO_DIM[kind]][metal]
        slot["blocks"].add(stone)
        if deep:
            slot["blocks"].add(deep)
        slot["budget"] += count * size / rarity
    return {d: dict(v) for d, v in dims.items()}


# ------------------------------------------------------- 被封禁的重复矿块

_JAR_INDEX = None


def jar_index():
    """jar 内路径 -> jar 文件，只建一次。"""
    global _JAR_INDEX
    if _JAR_INDEX is None:
        _JAR_INDEX = {}
        for jar in (ROOT / "mods").glob("*.jar"):
            try:
                with zipfile.ZipFile(jar) as z:
                    for name in z.namelist():
                        if name.endswith(".json"):
                            _JAR_INDEX.setdefault(name, jar)
            except zipfile.BadZipFile:
                continue
    return _JAR_INDEX


def _find_json(rel: str, datapack_first: bool = True):
    """数据包优先，其次模组 jar。"""
    p = PACK.parent / rel
    if datapack_first and p.is_file():
        return json.loads(p.read_text(encoding="utf-8"))
    jar = jar_index().get(rel)
    if jar is None:
        return None
    try:
        with zipfile.ZipFile(jar) as z:
            return json.loads(z.read(rel))
    except (zipfile.BadZipFile, json.JSONDecodeError, KeyError):
        return None


def resolve_blocks(feature_id: str):
    ns, path = feature_id.split(":", 1)
    placed = _find_json(f"data/{ns}/worldgen/placed_feature/{path}.json")
    if isinstance(placed, dict) and isinstance(placed.get("feature"), str):
        ns, path = placed["feature"].split(":", 1)
    cfg = _find_json(f"data/{ns}/worldgen/configured_feature/{path}.json")
    if not isinstance(cfg, dict):
        return set()
    return {t["state"]["Name"] for t in cfg.get("config", {}).get("targets", [])
            if isinstance(t, dict) and "state" in t}


def banned_blocks():
    """数据包里覆盖成 neoforge:none 的那些矿源，实际会生成哪些方块。"""
    out = {}
    for p in PACK.glob("*/neoforge/biome_modifier/*.json"):
        rel = p.relative_to(PACK.parent)
        if "neoforge:none" not in p.read_text(encoding="utf-8", errors="replace"):
            continue
        original = _find_json(str(rel).replace("\\", "/"), datapack_first=False)
        if not isinstance(original, dict):
            continue
        feats = original.get("features")
        feats = feats if isinstance(feats, list) else [feats]
        for fid in feats:
            if isinstance(fid, str):
                for b in resolve_blocks(fid):
                    out[b] = p.stem
    return out


# -------------------------------------------------------------- 维度目录

DIM_DIRS = {
    "minecraft:overworld": "region",
    "minecraft:the_nether": "DIM-1/region",
    "minecraft:the_end": "DIM1/region",
}


def dimension_dirs(save: Path):
    dirs = {}
    for dim, rel in DIM_DIRS.items():
        d = save / rel
        if d.is_dir():
            dirs[dim] = d
    custom = save / "dimensions"
    if custom.is_dir():
        for p in sorted(custom.glob("*/*/region")):
            dirs[f"{p.parts[-3]}:{p.parts[-2]}"] = p
    return dirs


# ------------------------------------------------------------------ 主流程

def scan(dirs, watch, limit: int):
    files = []
    for d in dirs:
        files.extend(sorted(d.glob("*.mca")))
    chunks = 0
    counts = defaultdict(int)
    yrange = {}
    for f in files:
        if chunks >= limit:
            break
        for payload in iter_region_chunks(f):
            try:
                c, y = chunk_ores(payload, watch)
            except Exception:
                continue
            if c is None:
                continue
            chunks += 1
            for k, v in c.items():
                counts[k] += v
            for k, (lo, hi) in y.items():
                old = yrange.get(k, (9999, -9999))
                yrange[k] = (min(old[0], lo), max(old[1], hi))
            if chunks >= limit:
                break
    return chunks, counts, yrange


def main():
    ap = argparse.ArgumentParser(description="扫存档验矿")
    ap.add_argument("world", nargs="?", help="存档目录名，默认最新")
    ap.add_argument("--max-chunks", type=int, default=800, help="每个维度最多读多少区块")
    ap.add_argument("--dump", action="store_true", help="打印每种矿块的原始计数")
    args = ap.parse_args()

    saves = ROOT / "saves"
    if args.world:
        save = saves / args.world
    else:
        worlds = [p for p in saves.iterdir() if (p / "level.dat").is_file()]
        if not worlds:
            sys.exit("没有找到任何存档")
        save = max(worlds, key=lambda p: (p / "level.dat").stat().st_mtime)
    if not (save / "level.dat").is_file():
        sys.exit(f"存档不存在：{save}")

    exp = expected()
    banned = banned_blocks()
    watch = {}
    for dim, metals in exp.items():
        for metal, slot in metals.items():
            for b in slot["blocks"]:
                watch[b] = ("ore", dim, metal)
    for b in banned:
        watch.setdefault(b, ("banned", None, None))

    print(f"存档：{save.name}")
    print(f"期望表：{sum(len(v) for v in exp.values())} 项 / {len(exp)} 个维度，"
          f"封禁矿块 {len(banned)} 种\n")

    ok_all = True
    total_chunks = 0
    for dim, dirs in dimension_dirs(save).items():
        chunks, counts, yrange = scan([dirs], watch, args.max_chunks)
        total_chunks += chunks
        print(f"== {dim}   已生成区块 {chunks}")
        if chunks == 0:
            print("   · 这个维度还没生成过区块，跳过\n")
            continue

        hit_banned = {b: n for b, n in counts.items() if b in banned}
        mass = sum(n for b, n in counts.items() if b in banned)
        if dim.startswith("industrialupgrade:"):
            verdict = "✔ 空的（虚空生成器生效）" if mass == 0 else f"✘ 有 {mass} 块矿（应为空）"
            ok_all &= mass == 0
            print(f"   {verdict}\n")
            continue

        want = exp.get(dim)
        if not want:
            print(f"   · 不在矿表覆盖范围（{mass} 块本表矿块），不判定" +
                  (f"，其中已封禁 {hit_banned}" if hit_banned else "") + "\n")
            continue

        print(f"   {'金属':11s}{'期望/区块':>10s}{'实测/区块':>10s}{'合计':>8s}  {'y 分布':>10s}  判定")
        for metal in sorted(want, key=lambda m: -want[m]["budget"]):
            b = want[metal]["budget"]
            n = sum(counts.get(x, 0) for x in want[metal]["blocks"])
            per = n / chunks
            ys = [yrange[x] for x in want[metal]["blocks"] if x in yrange]
            ytxt = f"{min(y[0] for y in ys)}..{max(y[1] for y in ys)}" if ys else "-"
            if metal in VANILLA_TOO:
                ok = n > 0
                mark = "✔" if ok else "✘ 没生成"
            elif b >= 1:
                ok = n > 0
                note = ""
                if per < b * 0.3:
                    note = "（偏稀）"
                elif per > b * 5:
                    note = "（过密，查是否还有第二份矿源）"
                mark = "✔" + note if ok else "✘ 没生成"
            else:
                ok = n > 0
                mark = "✔" if ok else "· 稀有，未检出（不判）"
                ok = True
            ok_all &= ok
            print(f"   {metal:11s}{b:10.1f}{per:10.1f}{n:8d}  {ytxt:>10s}  {mark}")

        if hit_banned:
            ok_all = False
            print(f"   ✘ 出现了已封禁的重复矿：{hit_banned}")
        if args.dump:
            print("   原始计数：" + ", ".join(f"{b}={n}" for b, n in
                                           sorted(counts.items(), key=lambda kv: -kv[1])[:12]))
        print()

    print(f"合计扫描 {total_chunks} 个区块")
    print("封禁矿块（数据包里已关掉生成源）：")
    print("   " + (", ".join(sorted(banned)) if banned else "（没解析到）"))
    print()
    print("结论：" + ("全部通过 ✔" if ok_all else "有不符合项 ✘"))
    sys.exit(0 if ok_all else 1)


if __name__ == "__main__":
    main()
