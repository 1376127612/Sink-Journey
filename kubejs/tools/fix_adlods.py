#!/usr/bin/env python3
"""修 AdLods 的「隐形巨矿」。

AdLods 默认的 30 份矿床配置里，地表指示物引用的是 silentgems / surfacesamples / adfinders
——这三个模组都没装，所以巨矿存在但没有任何地表提示，玩家撞上了才知道。

本脚本做两件事：
  1. 把保留矿床的 Indicator.circles 换成已装方块（原版花 + Botania 神秘花）；
  2. 关掉不该出现在主世界的矿床（后期金属、宝石、以及引用了未安装模组的 gas_pocket）。

用法：python kubejs/tools/fix_adlods.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DEPOSITS = ROOT / "config/adlods/Deposits"
MAIN = ROOT / "config/adlods-common.toml"

# 保留：主世界/下界的常规矿。巨矿只是"撞大运"的额外节点，不改变分层。
KEEP = {
    "copper", "iron", "gold", "coal", "lapis", "redstone", "diamond", "emerald",
    "tin", "lead", "silver", "zinc", "aluminum",
    "ancient_debris", "nether_gold", "nether_quartz",
}

# 关掉：后期金属（已进末地/太空）、宝石（已进末地）、以及引用未安装模组的条目
DISABLE = {
    "nickel", "cobalt", "iridium", "osmium", "palladium", "platinum", "rhodium", "ruthenium",
    "uranium", "ruby", "sapphire", "topaz",
    "amethyst", "gas_pocket",
}

CIRCLES_OVERWORLD = """        S:circles <
            minecraft:orange_tulip, 3
            minecraft:poppy, 3
            minecraft:cornflower, 6
            minecraft:lily_of_the_valley, 6
            botania:orange_mystical_flower, 6
         >"""

# 下界的花草：地表在基岩顶/下界岩上，原版花放不住
CIRCLES_NETHER = """        S:circles <
            minecraft:crimson_fungus, 3
            minecraft:warped_fungus, 3
            minecraft:crimson_roots, 6
            minecraft:nether_sprouts, 6
         >"""


def patch_deposit(path: Path):
    name = path.stem
    text = path.read_text(encoding="utf-8")

    if name in DISABLE:
        text = re.sub(r"B:enabled=\w+", "B:enabled=false", text, count=1)
    else:
        text = re.sub(r"B:enabled=\w+", "B:enabled=true", text, count=1)
        allowed = re.search(r"S:whiteList <(.*?)>", text, re.S)
        nether = "the_nether" in (allowed.group(1) if allowed else "")
        circles = CIRCLES_NETHER if nether else CIRCLES_OVERWORLD
        text, n = re.subn(r"        S:circles <.*?\n         >", circles, text, count=1, flags=re.S)
        if n != 1:
            raise SystemExit(f"{path.name}: 找不到 S:circles 块")

    path.write_text(text, encoding="utf-8")
    return name in KEEP


def main():
    kept = [p.stem for p in sorted(DEPOSITS.glob("*.cfg")) if patch_deposit(p)]

    text = MAIN.read_text(encoding="utf-8")
    text = re.sub(r'spawnPebbles\s*=\s*"[A-Z_]+"', 'spawnPebbles = "NOWHERE"', text)
    text = re.sub(r'spawnSurfaceSamples\s*=\s*"[A-Z_]+"', 'spawnSurfaceSamples = "NOWHERE"', text)
    MAIN.write_text(text, encoding="utf-8")

    print(f"保留 {len(kept)} 份矿床并修好指示物：{', '.join(kept)}")
    print(f"关闭 {len(DISABLE)} 份：{', '.join(sorted(DISABLE))}")


if __name__ == "__main__":
    main()
