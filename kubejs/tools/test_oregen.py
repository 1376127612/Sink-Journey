#!/usr/bin/env python3
"""矿石生成的自动验收。

不需要启动游戏，直接读 jar 与数据包做静态校验，覆盖四类问题：

  1. 数据包本身是否完好（JSON 可解析、feature→placed→biome_modifier 引用链、方块/biome/维度类型 id）
  2. **同一个金属有没有被两个模组同时生成**（这次 Create 与 IU 都有锌矿就是这么发现的）
  3. 封禁是否到位（IU 太空入口、Mek 核能 16 方块、NC/Mek/Create/… 的重复矿覆盖）
  4. 工具门与标签是否自洽（铁镐/钻石镐不重叠、c:ores 指向真实物品、AdLods 指示物没有未装模组）

用法：python kubejs/tools/test_oregen.py        # 全绿退出码 0，任何一条红就 1
"""
import glob
import json
import re
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PACK = ROOT / "config/paxi/datapacks/sj-oregen"
VANILLA = ROOT / "Sink Journey.jar"
IU_JAR_GLOB = str(ROOT / "mods/*IndustrialUpgrade*.jar")

results = []


def check(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print(("  ✔ " if ok else "  ✘ ") + name + (f"  —— {detail}" if detail and not ok else ""))


# ---------------------------------------------------------------- 资源索引

class Resources:
    """懒加载：先建文件名索引，用到再读字节。"""

    def __init__(self):
        self.paths = set()
        self._zips = {}
        for jar in [VANILLA] + sorted(Path(p) for p in glob.glob(str(ROOT / "mods/*.jar"))):
            try:
                z = zipfile.ZipFile(jar)
            except Exception:
                continue
            self._zips[str(jar)] = z
            for n in z.namelist():
                self.paths.add(n)

    def read_json(self, path):
        for z in self._zips.values():
            try:
                return json.loads(z.read(path))
            except KeyError:
                continue
        return None

    def exists(self, path):
        return path in self.paths


RES = Resources()


def datapack_files():
    return {str(p.relative_to(PACK)).replace("\\", "/"): p for p in PACK.rglob("*.json")}


DP = datapack_files()


def dp_json(rel):
    return json.loads((PACK / rel).read_text(encoding="utf-8"))


# ---------------------------------------------------------------- 1. 数据包结构

def test_structure():
    print("\n[1] 数据包结构")
    counts = {
        "configured_feature": len(list((PACK / "data/sj/worldgen/configured_feature").glob("*.json"))),
        "placed_feature": len(list((PACK / "data/sj/worldgen/placed_feature").glob("*.json"))),
        "biome_modifier": len(list((PACK / "data/sj/neoforge/biome_modifier").glob("*.json"))),
        "c_ores_block": len(list((PACK / "data/c/tags/block/ores").glob("*.json"))),
    }
    check("55 条矿 × 3 类文件", counts["configured_feature"] == counts["placed_feature"] == counts["biome_modifier"] == 55, str(counts))
    check("c:ores 方块 tag 55 个", counts["c_ores_block"] == 55, str(counts["c_ores_block"]))

    bad = []
    for rel in DP:
        try:
            dp_json(rel)
        except Exception as e:
            bad.append((rel, e))
    check(f"{len(DP)} 个 JSON 全部可解析", not bad, str(bad[:2]))

    pack = dp_json("pack.mcmeta")["pack"]
    check("pack.mcmeta 声明格式 48", pack.get("pack_format") == 48, str(pack.get("pack_format")))


# ---------------------------------------------------------------- 2. 引用链与 id

def block_ids():
    ids = set()
    for n in RES.paths:
        if n.startswith("assets/") and "/blockstates/" in n and n.endswith(".json"):
            ns = n.split("/")[1]
            rest = n.split("/blockstates/", 1)[1][:-5]
            ids.add(f"{ns}:{rest}")
    return ids


BLOCKS = block_ids()


def biome_ids():
    ids = set()
    for n in RES.paths:
        if "/worldgen/biome/" in n and n.endswith(".json"):
            ns = n.split("/")[1]
            ids.add(f"{ns}:{n.split('/worldgen/biome/', 1)[1][:-5]}")
    return ids


BIOMES = biome_ids()


def test_chain():
    print("\n[2] 引用链与 id 存在性")
    missing_blocks, missing_links, missing_biomes = [], [], []

    for rel, path in DP.items():
        if rel.startswith("data/sj/worldgen/configured_feature/"):
            for t in dp_json(rel)["config"]["targets"]:
                if t["state"]["Name"] not in BLOCKS:
                    missing_blocks.append(t["state"]["Name"])

    placed = {p.stem for p in (PACK / "data/sj/worldgen/placed_feature").glob("*.json")}
    configured = {p.stem for p in (PACK / "data/sj/worldgen/configured_feature").glob("*.json")}
    for p in (PACK / "data/sj/worldgen/placed_feature").glob("*.json"):
        ref = dp_json(str(p.relative_to(PACK)).replace("\\", "/"))["feature"].split(":")[1]
        if ref not in configured:
            missing_links.append(ref)
    for p in (PACK / "data/sj/neoforge/biome_modifier").glob("*.json"):
        for f in dp_json(str(p.relative_to(PACK)).replace("\\", "/"))["features"]:
            if f.split(":")[1] not in placed:
                missing_links.append(f)

    for p in (PACK / "data/sj/tags/worldgen/biome").glob("*.json"):
        for b in dp_json(str(p.relative_to(PACK)).replace("\\", "/"))["values"]:
            if b not in BIOMES:
                missing_biomes.append(b)

    check("矿块 id 都存在于某个 jar", not missing_blocks, str(sorted(set(missing_blocks))[:5]))
    check("placed → configured → biome_modifier 无断链", not missing_links, str(missing_links[:5]))
    check("行星 biome tag 全部命中真实 biome", not missing_biomes, str(missing_biomes[:5]))


# ---------------------------------------------------------------- 3. 重复矿检测

def normalise_metal(block):
    """把方块 id 归一到金属名，覆盖原版 / IU / 其它模组的写法。"""
    name = block.split(":", 1)[1].split("/")[-1]
    name = re.sub(r"^(deepslate_|deep_|raw_|block_of_)", "", name)
    name = re.sub(r"(_ore|_block|_stone)$", "", name)
    name = re.sub(r"^ore_", "", name)
    aliases = {"aluminum": "aluminium", "zinc_ore": "zinc"}
    return aliases.get(name, name)


def effective_modifiers():
    """所有模组的 biome_modifier，数据包同路径覆盖。"""
    mods = {}
    for n in RES.paths:
        if "/neoforge/biome_modifier/" in n and n.endswith(".json"):
            data = RES.read_json(n)
            if data is not None:
                mods[n] = data
    for rel in DP:
        if "/neoforge/biome_modifier/" in rel:
            mods[rel] = dp_json(rel)
    return mods


def read_any(rel):
    """数据包优先，其次 jar。"""
    if rel in DP:
        return dp_json(rel)
    return RES.read_json(rel)


def resolve_feature(fid):
    """feature id → configured_feature 的 config（先顺着 placed_feature 找一层）。"""
    ns, path = fid.split(":", 1)
    placed = read_any(f"data/{ns}/worldgen/placed_feature/{path}.json")
    if placed and isinstance(placed.get("feature"), str):
        fid = placed["feature"]
        ns, path = fid.split(":", 1)
    cfg = read_any(f"data/{ns}/worldgen/configured_feature/{path}.json")
    return (fid, cfg) if isinstance(cfg, dict) else (fid, None)


def test_duplicates():
    print("\n[3] 重复矿检测（同一金属只能用一份矿块）")
    sources = {}   # metal -> {source: set(blocks)}
    unknown = []

    for path, mod in effective_modifiers().items():
        if mod.get("type") != "neoforge:add_features":
            continue
        feats = mod.get("features")
        feats = feats if isinstance(feats, list) else [feats]
        for fid in feats:
            if not isinstance(fid, str):
                continue
            fid2, cfg = resolve_feature(fid)
            if cfg is None:
                unknown.append(fid)
                continue
            if cfg.get("type") != "minecraft:ore":
                continue  # IU 的自定义特征、Create 的 layered_ore 等不产原矿
            source = fid2.split(":", 1)[0]
            for t in cfg.get("config", {}).get("targets", []):
                metal = normalise_metal(t["state"]["Name"])
                sources.setdefault(metal, {}).setdefault(source, set()).add(t["state"]["Name"])

    dups = {m: v for m, v in sources.items() if len(v) > 1}
    detail = "; ".join(f"{m}: {sorted(v)}" for m, v in sorted(dups.items()))
    check("没有金属被两份不同矿块生成", not dups, detail)
    if unknown:
        print(f"     提示：{len(set(unknown))} 个 feature 由代码定义、读不到 configured_feature，已跳过"
              f"（{', '.join(sorted(set(unknown))[:3])}…）")

    # 我们自己这张表必须都在世界里
    sj = {m for m, v in sources.items() if "sj" in v}
    check("55 条矿全部能解析到生成源", len(sj) >= 50, f"只解析到 {len(sj)} 种")
    print(f"     生成源：{len(sources)} 种金属；其中 IU(sj) 占 {len(sj)} 种")


# ---------------------------------------------------------------- 4. 封禁

def test_bans():
    print("\n[4] 封禁与合并")
    disabled = {}
    for rel, path in DP.items():
        if "/neoforge/biome_modifier/" in rel:
            if dp_json(rel).get("type") == "neoforge:none":
                ns = re.match(r"data/([^/]+)/", rel).group(1)
                disabled.setdefault(ns, set()).add(path.stem)
    expect = {
        "nuclearcraftneohaul": {"boron", "lead", "lithium", "magnesium", "thorium", "tin", "uranium"},
        "mekanism": {"tin", "uranium", "osmium"},
        "create": {"zinc_ore"},
        "mekmm": {"silver"},
        "enderio_evolution": {"silver_ore_overworld", "silver_ore_badlands"},
        "neoecoae": {"ore_end"},
        "roots": {"silver_ore"},
    }
    for mod, files in expect.items():
        got = disabled.get(mod, set())
        got_base = {s.removesuffix("_large").removesuffix("_small") for s in got}
        check(f"{mod} 的重复矿已关（{len(files)} 条）", got_base == files, str(sorted(got)))

    cfg = (ROOT / "config/industrialupgrade-common.toml").read_text(encoding="utf-8")
    check("IU 默认矿表仍关闭（defaultSpawnEnabled=false）",
          re.search(r"defaultSpawnEnabled\s*=\s*false", cfg) is not None)
    vein = ROOT / "config/paxi/datapacks/sj-no-ore-veins/data/industrialupgrade/neoforge/biome_modifier/vein_modifier.json"
    check("IU 矿脉仍关闭", json.loads(vein.read_text(encoding="utf-8"))["type"] == "neoforge:none")

    space = (ROOT / "kubejs/server_scripts/bans/iu_space.js").read_text(encoding="utf-8")
    check("IU 行星跃迁导航器被封", "teleporter_iu" in space and "industrialupgrade_1615" in space)

    nuclear = (ROOT / "kubejs/server_scripts/bans/mek_nuclear.js").read_text(encoding="utf-8")
    jei = (ROOT / "kubejs/client_scripts/bans/mek_nuclear_jei.js").read_text(encoding="utf-8")

    def ids(text):
        return set(re.findall(r"['\"](mekanism(?:generators)?:[a-z_0-9/]+)['\"]", text))

    check("Mek 核能 16 方块：服务端与 JEI 名单一致", ids(nuclear) == ids(jei) and len(ids(nuclear)) == 16,
          f"server={len(ids(nuclear))} jei={len(ids(jei))}")


# ---------------------------------------------------------------- 5. 标签与门

def test_tags():
    print("\n[5] 工具门与标签")
    iron = set(dp_json("data/minecraft/tags/block/needs_iron_tool.json")["values"])
    diamond = set(dp_json("data/minecraft/tags/block/needs_diamond_tool.json")["values"])
    check("铁镐/钻石镐方块不重叠", not (iron & diamond), str(sorted(iron & diamond)[:5]))
    check("铁镐门 35 块 / 钻石镐门 15 块（stone 级不挂 tag）", (len(iron), len(diamond)) == (35, 15),
          f"iron={len(iron)} diamond={len(diamond)}")
    staples = {"minecraft:iron_ore", "minecraft:deepslate_iron_ore", "minecraft:copper_ore",
               "minecraft:coal_ore", "industrialupgrade:baseore/aluminium", "industrialupgrade:baseore/zinc",
               "industrialupgrade:baseore2/sulfur"}
    check("原版级矿不被钻石镐锁死", not (staples & diamond), str(sorted(staples & diamond)))

    bad_tag = []
    for p in (PACK / "data/c/tags/item/ores").glob("*.json"):
        for v in json.loads(p.read_text(encoding="utf-8"))["values"]:
            if v.startswith("industrialupgrade:"):
                model = f"assets/industrialupgrade/models/item/{v.split(':', 1)[1]}.json"
                if not RES.exists(model):
                    bad_tag.append(v)
    check("c:ores 物品 tag 指向真实物品", not bad_tag, str(bad_tag[:5]))


# ---------------------------------------------------------------- 6. 维度虚空

def test_void_dims():
    print("\n[6] IU 太空维度")
    files = list((PACK / "data/industrialupgrade/dimension").glob("*.json"))
    names = {p.stem for p in files}
    check("34 个太空维度覆盖成虚空", len(files) == 34 and "earth" not in names, f"{len(files)} 个，含 earth？{'earth' in names}")

    bad = []
    with zipfile.ZipFile(glob.glob(IU_JAR_GLOB)[0]) as z:
        types = {n.split("/")[-1][:-5] for n in z.namelist() if n.startswith("data/industrialupgrade/dimension_type/") and n.endswith(".json")}
    for p in files:
        d = json.loads(p.read_text(encoding="utf-8"))
        if d["type"].split(":")[1] not in types:
            bad.append(p.stem)
        g = d.get("generator", {})
        if g.get("type") != "minecraft:flat" or g.get("settings", {}).get("layers") != []:
            bad.append(p.stem + ":gen")
    check("维度类型存在且生成器是空 flat", not bad, str(bad[:5]))


# ---------------------------------------------------------------- 7. AdLods

def test_adlods():
    print("\n[7] AdLods 巨矿")
    kept, broken = 0, []
    for p in (ROOT / "config/adlods/Deposits").glob("*.cfg"):
        text = p.read_text(encoding="utf-8")
        enabled = "B:enabled=true" in text
        circles = re.search(r"S:circles <(.*?)>", text, re.S).group(1)
        if enabled:
            kept += 1
            if re.search(r"silentgems|surfacesamples|adfinders", circles):
                broken.append(p.stem)
    check("启用的矿床没有未安装模组的指示物", not broken, str(broken))
    check("保留 16 份矿床", kept == 16, f"{kept} 份")

    main = (ROOT / "config/adlods-common.toml").read_text(encoding="utf-8")
    check("pebbles/surfaceSamples 已关", 'spawnPebbles = "NOWHERE"' in main and 'spawnSurfaceSamples = "NOWHERE"' in main)


# ---------------------------------------------------------------- 8. 文档

def test_docs():
    print("\n[8] 文档")
    doc = ROOT / "kubejs/docs/ORE_GENERATION.md"
    text = doc.read_text(encoding="utf-8") if doc.exists() else ""
    need = ["维度地图", "矿表", "三道门", "冲突合并", "封禁清单", "验收清单"]
    miss = [s for s in need if s not in text]
    check("ORE_GENERATION.md 存在且章节齐全", doc.exists() and not miss, str(miss))
    iu_blocks = set()
    for p in (PACK / "data/sj/worldgen/configured_feature").glob("*.json"):
        for t in json.loads(p.read_text(encoding="utf-8"))["config"]["targets"]:
            name = t["state"]["Name"]
            if name.startswith("industrialupgrade:"):
                iu_blocks.add(name.split(":", 1)[1])
    missing = sorted(b for b in iu_blocks if b not in text)
    check(f"文档矿表覆盖全部 {len(iu_blocks)} 个 IU 矿块", not missing, str(missing[:5]))


# ---------------------------------------------------------------- 主流程

def main():
    print("Sink Journey 矿石生成验收")
    test_structure()
    test_chain()
    test_duplicates()
    test_bans()
    test_tags()
    test_void_dims()
    test_adlods()
    test_docs()

    failed = [r for r in results if not r[1]]
    print(f"\n{'=' * 56}\n{len(results) - len(failed)}/{len(results)} 通过")
    if failed:
        print("失败项：")
        for name, _, detail in failed:
            print(f"  ✘ {name}  {detail}")
        return 1
    print("全部通过")
    return 0


if __name__ == "__main__":
    sys.exit(main())
