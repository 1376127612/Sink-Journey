#!/usr/bin/env python3
"""生成 Sink Journey 的矿石生成数据包（原生 feature）。

读一张表，产出：
  config/paxi/datapacks/sj-oregen/
  ├── pack.mcmeta
  └── data/
      ├── sj/worldgen/configured_feature/<ore>.json
      ├── sj/worldgen/placed_feature/<ore>_placed.json
      ├── sj/neoforge/biome_modifier/<ore>.json
      ├── sj/tags/worldgen/biome/{moon,mercury,mars,glacio}.json
      ├── minecraft/tags/block/{needs_iron_tool,needs_diamond_tool}.json
      ├── c/tags/block/ores/<metal>.json
      ├── c/tags/item/ores/<metal>.json
      ├── nuclearcraftneohaul/neoforge/biome_modifier/<ore>_{large,small}.json   # 关掉 NC 重复矿
      ├── mekanism/neoforge/biome_modifier/{tin,uranium,osmium}.json             # 关掉 Mek 重复矿
      ├── {create,mekmm,enderio_evolution,neoecoae}/neoforge/biome_modifier/…    # 关掉其它重复矿（锌/银/铝/钨）
      └── industrialupgrade/dimension/<body>.json                               # IU 太空维度改成虚空

用法：python kubejs/tools/gen_oregen.py
"""
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PACK = ROOT / "config/paxi/datapacks/sj-oregen"
NS = "sj"
IU = "industrialupgrade:"

OVERWORLD = "#minecraft:is_overworld"
NETHER = "#minecraft:is_nether"
END = "#minecraft:is_end"

# (id, 石方块, 深板岩方块, y0, y1, count, size, rarity, 地形, 工具, 生物群系 tag, 是否空气丢弃)
# 地形: stone | nether | end | moon | mercury | mars | glacio
TABLE = [
    # ---------------- 主世界：常见矿，原版节奏 ----------------
    ("tin",        IU + "classicore/tin",          IU + "deepore2/deep_tin_ore",        -16,  96, 4, 8, 1, "stone",   "iron",   OVERWORLD, 0.0),
    ("lead",       IU + "classicore/lead",         IU + "deepore2/deep_lead_ore",       -32,  64, 3, 7, 1, "stone",   "iron",   OVERWORLD, 0.0),
    ("zinc",       IU + "baseore/zinc",            IU + "deepore/deep_zinc_ore",          0,  80, 3, 7, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("silver",     IU + "baseore/silver",          IU + "deepore/deep_silver_ore",      -48,  32, 2, 6, 1, "stone",   "iron",   OVERWORLD, 0.0),
    ("aluminium",  IU + "baseore/aluminium",       IU + "deepore/deep_aluminium_ore",    48,  96, 3, 8, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("uranium",    IU + "classicore/uranium",      IU + "deepore2/deep_uranium_ore",    -56,  16, 2, 5, 1, "stone",   "iron",   OVERWORLD, 0.0),
    ("saltpeter",  IU + "baseore1/saltpeter",      None,                                  32,  80, 2, 6, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("bor",        IU + "baseore1/bor",            None,                                  16,  64, 1, 4, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("calcium",    IU + "baseore1/calcium",        IU + "deepore1/deep_calcium_ore",       8,  56, 1, 4, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("strontium",  IU + "baseore2/strontium",      IU + "deepore2/deep_strontium_ore",   -32,  24, 1, 4, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("barium",     IU + "baseore2/barium",         IU + "deepore1/deep_barium_ore",      -32,  24, 1, 4, 1, "stone",   "stone",  OVERWORLD, 0.0),
    ("gallium",    IU + "baseore2/gallium",        IU + "deepore1/deep_gallium_ore",     -48,   0, 1, 3, 1, "stone",   "iron",   OVERWORLD, 0.0),
    ("germanium",  IU + "baseore/germanium",       IU + "deepore/deep_germanium_ore",    -48,   0, 1, 3, 1, "stone",   "iron",   OVERWORLD, 0.0),
    ("sulfur",     IU + "baseore2/sulfur",         IU + "deepore2/deep_sulfur_ore",      -48,  16, 3, 7, 1, "stone",   "stone",  OVERWORLD, 0.0),

    # 大型矿脉（原生大尺寸 + 稀有，撞上就是几百块）
    ("copper_large", "minecraft:copper_ore",       "minecraft:deepslate_copper_ore",     -32,  72, 1, 48, 16, "stone", "stone", OVERWORLD, 0.6),
    ("iron_large",   "minecraft:iron_ore",         "minecraft:deepslate_iron_ore",       -32,  72, 1, 48, 16, "stone", "stone", OVERWORLD, 0.6),
    ("coal_large",   "minecraft:coal_ore",         "minecraft:deepslate_coal_ore",         0, 128, 1, 48, 16, "stone", "stone", OVERWORLD, 0.6),

    # ---------------- 下界：火山热液 ----------------
    ("arsenic",    IU + "baseore2/arsenic",        None,                                   0,  64, 2, 6, 1, "nether", "iron",  NETHER, 0.0),
    ("bismuth",    IU + "baseore2/bismuth",        None,                                   0,  48, 1, 4, 1, "nether", "iron",  NETHER, 0.0),
    ("thallium",   IU + "baseore2/thallium",       None,                                   0,  32, 1, 3, 1, "nether", "iron",  NETHER, 0.0),
    ("magnetite",  IU + "basaltheavyore/magnetite", None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("pyrite",     IU + "basaltheavyore/pyrite",    None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("galena",     IU + "basaltheavyore/galena",    None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("nickelite",  IU + "basaltheavyore/nickelite", None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("ilmenite",   IU + "basaltheavyore/ilmenite",  None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("sheelite",   IU + "basaltheavyore/sheelite",  None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("quartzite",  IU + "basaltheavyore/quartzite", None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),
    ("uranite",    IU + "basaltheavyore/uranite",   None,                                  0,  64, 1, 8, 2, "nether", "iron",  NETHER, 0.0),

    # ---------------- 末地：镍与电力段金属 ----------------
    ("nickel",     IU + "baseore/nickel",          None,                                      0,  80, 6, 8, 1, "end", "iron",    END, 0.0),
    ("cobalt",     IU + "baseore/cobalt",          None,                                      0,  80, 5, 7, 1, "end", "iron",    END, 0.0),
    ("chromium",   IU + "baseore/chromium",        None,                                    0,  64, 3, 6, 1, "end", "iron",    END, 0.0),
    ("manganese",  IU + "baseore/manganese",       None,                                    0,  64, 3, 6, 1, "end", "iron",    END, 0.0),
    ("thorium",    IU + "thorium_ore/thorium_ore", None,                                   16,  56, 1, 4, 2, "end", "diamond", END, 0.0),
    ("braggite",   IU + "mineral/braggite",        None,                                    8,  48, 1, 6, 2, "end", "diamond", END, 0.0),
    ("iridosmine", IU + "mineral/iridosmine",      None,                                    8,  48, 1, 6, 2, "end", "diamond", END, 0.0),
    ("ruby",       IU + "blockpreciousore/ruby_ore",     None,                              24,  56, 1, 3, 2, "end", "iron",    END, 0.0),
    ("sapphire",   IU + "blockpreciousore/sapphire_ore", None,                              24,  56, 1, 3, 2, "end", "iron",    END, 0.0),
    ("topaz",      IU + "blockpreciousore/topaz_ore",    None,                              24,  56, 1, 3, 2, "end", "iron",    END, 0.0),
    ("quartz",     IU + "blockpreciousore/quartz_ore",   None,                              24,  56, 1, 3, 2, "end", "iron",    END, 0.0),

    # ---------------- Ad Astra：后期维度 ----------------
    ("titanium",   IU + "baseore/titanium",        None,                                 -32,  64, 2, 6, 1, "moon",    "iron",    "#sj:moon",    0.0),
    ("vanadium",   IU + "baseore/vanadium",        None,                                 -32,  64, 1, 5, 1, "moon",    "iron",    "#sj:moon",    0.0),
    ("zirconium",  IU + "baseore2/zirconium",      None,                                 -32,  64, 1, 6, 1, "moon",    "diamond", "#sj:moon",    0.0),
    ("tungsten",   IU + "baseore/tungsten",        None,                                 -40,  72, 2, 8, 1, "mercury", "diamond", "#sj:mercury", 0.0),
    ("molybdenum", IU + "baseore2/molybdenum",     None,                                 -40,  72, 2, 8, 1, "mercury", "diamond", "#sj:mercury", 0.0),
    ("tantalum",   IU + "baseore1/tantalum",       None,                                 -40,  72, 1, 6, 1, "mercury", "diamond", "#sj:mercury", 0.0),
    ("niobium",    IU + "baseore2/niobium",        None,                                 -40,  72, 1, 6, 1, "mercury", "diamond", "#sj:mercury", 0.0),
    ("monazite",   "kubejs:monazite_ore",          None,                                 -32,  64, 3, 6, 1, "mars",    "diamond", "#sj:mars",    0.0),
    ("hafnium",    IU + "baseore2/hafnium",        None,                                 -32,  64, 1, 6, 1, "mars",    "diamond", "#sj:mars",    0.0),
    ("lithium",    IU + "baseore1/lithium",        None,                                 -32,  64, 1, 4, 1, "glacio",  "iron",    "#sj:glacio",  0.0),
    ("beryllium",  IU + "baseore1/beryllium",      None,                                 -32,  64, 1, 4, 1, "glacio",  "iron",    "#sj:glacio",  0.0),
]

# 每颗 Ad Astra 行星的石头（target 用 block_match）
PLANET_STONE = {
    "moon":    ["ad_astra:moon_stone", "ad_astra:moon_deepslate"],
    "mercury": ["ad_astra:mercury_stone"],
    "mars":    ["ad_astra:mars_stone"],
    "glacio":  ["ad_astra:glacio_stone"],
}

BIOME_TAGS = {
    "moon": ["ad_astra:lunar_wastelands"],
    "mercury": ["ad_astra:mercury_deltas"],
    "mars": ["ad_astra:martian_wastelands", "ad_astra:martian_canyon_creek", "ad_astra:martian_polar_caps"],
    "glacio": ["ad_astra:glacio_ice_peaks", "ad_astra:glacio_snowy_barrens"],
}

# NuclearCraft 的重复矿：IU 优先，这几种关掉（铀/钍也关，改由 IU 矿块供给）
NC_ORES = ["boron", "lead", "lithium", "magnesium", "thorium", "tin", "uranium"]
# Mekanism 的重复矿：同样 IU 优先（锇改由铂族处理供给；萤石留着，Mek 独有）
MEK_ORES = ["tin", "uranium", "osmium"]

# 其它模组的重复矿：{模组名: [biome_modifier 文件名]}，一律覆盖成 neoforge:none。
# 判定标准只有一条：这个金属主世界/末地已经由 IU 矿块供给，就不允许第二份生成。
DEDUPE = {
    "create": ["zinc_ore"],
    "mekmm": ["silver"],
    "enderio_evolution": ["silver_ore_overworld", "silver_ore_badlands"],
    "neoecoae": ["ore_end"],
    "roots": ["silver_ore"],
}
# IU 太空维度：覆盖成虚空生成器（earth 是它的“母星”，留着）
IU_DIM_SKIP = {"earth"}


def write(path: Path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def targets(kind: str, stone: str, deep: str | None):
    """按地形给出 minecraft:ore 的 targets 列表。"""
    if kind == "stone":
        out = [{
            "state": {"Name": stone},
            "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:stone_ore_replaceables"},
        }]
        if deep:
            out.append({
                "state": {"Name": deep},
                "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:deepslate_ore_replaceables"},
            })
        return out
    if kind == "nether":
        return [{
            "state": {"Name": stone},
            "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:base_stone_nether"},
        }]
    if kind == "end":
        return [{
            "state": {"Name": stone},
            "target": {"predicate_type": "minecraft:block_match", "block": "minecraft:end_stone"},
        }]
    # Ad Astra 行星
    return [{
        "state": {"Name": stone},
        "target": {"predicate_type": "minecraft:block_match", "block": b},
    } for b in PLANET_STONE[kind]]


def void_iu_space():
    """把 IU 的太空维度覆盖成空生成器：维度还能注册，但里面什么也不生成。"""
    import zipfile
    from glob import glob

    jars = glob(str(ROOT / "mods/*IndustrialUpgrade*.jar"))
    if not jars:
        raise SystemExit("找不到 IndustrialUpgrade 的 jar，无法读取维度表")
    with zipfile.ZipFile(jars[0]) as z:
        dims = [n for n in z.namelist() if n.startswith("data/industrialupgrade/dimension/") and n.endswith(".json")]
        for entry in sorted(dims):
            body = entry.rsplit("/", 1)[-1][:-5]
            if body in IU_DIM_SKIP:
                continue
            original = json.loads(z.read(entry))
            write(PACK / f"data/industrialupgrade/dimension/{body}.json", {
                "type": original["type"],
                "generator": {
                    "type": "minecraft:flat",
                    "settings": {
                        "layers": [],
                        "biome": "minecraft:the_void",
                        "features": False,
                        "lakes": False,
                        "structure_overrides": [],
                    },
                },
            })


def build():
    if PACK.exists():
        shutil.rmtree(PACK)

    write(PACK / "pack.mcmeta", {
        "pack": {
            "pack_format": 48,
            "supported_formats": {"min_inclusive": 15, "max_inclusive": 999},
            "description": "Sink Journey: 原生矿石生成（主世界常见矿 / 下界热液 / 末地镍与铂族 / Ad Astra 后期矿）",
        }
    })

    iron_tool, diamond_tool = [], []
    # "stone" 一级的矿不挂工具 tag：原版木头/石镐就能挖（铜铁煤同理）
    TOOL_TAGS = {"iron": iron_tool, "diamond": diamond_tool}
    c_ores: dict[str, list[str]] = {}
    budget: dict[str, float] = {}

    for (ore, stone, deep, y0, y1, count, size, rarity, kind, tool, biome_tag, air) in TABLE:
        write(PACK / f"data/{NS}/worldgen/configured_feature/ore_{ore}.json", {
            "type": "minecraft:ore",
            "config": {
                "size": size,
                "discard_chance_on_air_exposure": air,
                "targets": targets(kind, stone, deep),
            },
        })

        placement = []
        if rarity > 1:
            placement.append({"type": "minecraft:rarity_filter", "chance": rarity})
        placement += [
            {"type": "minecraft:count", "count": count},
            {"type": "minecraft:in_square"},
            {"type": "minecraft:height_range", "height": {
                "type": "minecraft:uniform",
                "min_inclusive": {"absolute": y0},
                "max_inclusive": {"absolute": y1},
            }},
            {"type": "minecraft:biome"},
        ]
        write(PACK / f"data/{NS}/worldgen/placed_feature/ore_{ore}_placed.json", {
            "feature": f"{NS}:ore_{ore}",
            "placement": placement,
        })

        write(PACK / f"data/{NS}/neoforge/biome_modifier/ore_{ore}.json", {
            "type": "neoforge:add_features",
            "biomes": biome_tag,
            "features": [f"{NS}:ore_{ore}_placed"],
            "step": "underground_ores",
        })

        gate = TOOL_TAGS.get(tool)
        if gate is not None:
            gate.append(stone)
            if deep:
                gate.append(deep)

        metal = ore.removesuffix("_large")
        c_ores.setdefault(metal, []).extend([stone] + ([deep] if deep else []))
        budget[metal] = round(count * size / rarity, 1)

    for tag, values in (("needs_iron_tool", iron_tool), ("needs_diamond_tool", diamond_tool)):
        write(PACK / f"data/minecraft/tags/block/{tag}.json", {"values": sorted(set(values))})

    for metal, blocks in c_ores.items():
        blocks = sorted(set(blocks))
        write(PACK / f"data/c/tags/block/ores/{metal}.json", {"values": blocks})
        write(PACK / f"data/c/tags/item/ores/{metal}.json", {"values": blocks})

    for name, biomes in BIOME_TAGS.items():
        write(PACK / f"data/{NS}/tags/worldgen/biome/{name}.json", {"values": biomes})

    # 关掉 NuclearCraft 的重复矿（IU 优先）
    for ore in NC_ORES:
        for size in ("large", "small"):
            write(PACK / f"data/nuclearcraftneohaul/neoforge/biome_modifier/{ore}_{size}.json",
                  {"type": "neoforge:none"})

    for ore in MEK_ORES:
        write(PACK / f"data/mekanism/neoforge/biome_modifier/{ore}.json", {"type": "neoforge:none"})

    for mod, files in DEDUPE.items():
        for name in files:
            write(PACK / f"data/{mod}/neoforge/biome_modifier/{name}.json", {"type": "neoforge:none"})

    void_iu_space()

    files = sum(1 for _ in PACK.rglob("*.json"))
    print(f"写出 {files} 个 JSON 到 {PACK}")
    print("\n每区块期望矿块（count × size ÷ rarity）。大矿脉成团，平均摊得很少：")
    for k, v in sorted(budget.items(), key=lambda kv: -kv[1]):
        print(f"  {k:12s} {v:6.1f}")


if __name__ == "__main__":
    build()
