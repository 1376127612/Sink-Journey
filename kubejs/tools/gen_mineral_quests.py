# -*- coding: utf-8 -*-
"""
把矿线与电解线的 13 格任务卡写进四个既有章节（不新开章节），并补三格既有卡的正文。

为什么是"写卡 + 自己排坐标"而不是交给 gen_linear_quest_tree：
  那个脚本的 CHAPTERS 清单只剩原始时代 / 工业之始还对得上，电力时代早就被
  gen_electric_quests.py 与手工改动超过去了（一跑就 SystemExit），所以它不再负责
  这三章的坐标。本脚本自己写 x / y / dependencies，布局来自
  kubejs/docs/PROGRESSION_MINERAL.md §3。

落点：
  原始时代   碎矿      1 格  y = -12      挂 粉碎原型机 49C6261827C7A7B3
  工业之始   洗选      1 格  y = -12      挂 蒸汽矿物分离器 285AC19CE5FBC3ED
  电力时代   选矿与电积 4 格  y =  7.5     挂 电解器 649891A244FD0BF3
  电力时代   铝        4 格  y = 15       挂 晶圆切割 5A1B00000000A107
  科技先锋   阳极泥与精炼 3 格 y = 2       挂 铂从哪来 5E0A0000000000C1

id 规则：
  任务 id / task id / reward id 全部写死在下面，改一次就换一套存档进度，别随手动。
  13 个任务 id 的段位（3F5A…C1 / 5FE0…C1 / 5A1B…B2xx / 5A1B…B3xx / 5E0D…C1-C3）在全书里没有重复，
  也不与任何 task / reward id 撞字符串（B1xx 撞过光刻线的 task id，所以选矿支线挪到 B2xx）。

用法：
    python kubejs/tools/gen_mineral_quests.py
重复跑是安全的：卡片按 id 就地更新，文案按 key 就地覆盖，不会长出第二份。
"""
import os
import re

NL = "\n"
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

# ---------------------------------------------------------------- 卡片

# 每张卡：chapter = 章节文件名（不含 .snbt）
#         id / title / sub / desc / icon / tasks[(物品, 数量, task id)]
#         rewards[(物品, 数量, reward id)] / deps / x / y
QUESTS = [
    dict(
        chapter="3f5a7c2b9e1d4a60",
        id="3F5A0000000000C1",
        title="碎矿：把矿磨开",
        sub="R1 · 2.0 锭/矿 · 代价：无",
        icon="industrialupgrade:crushed/copper",
        deps=["49C6261827C7A7B3"],
        x=8.0, y=-12.0,
        tasks=[("industrialupgrade:crushed/copper", 8, "3F5A1C00000000C1")],
        rewards=[("industrialupgrade:itemingots/copper_ingot", 8, "3F5A1D00000000C1")],
        desc=[
            "粉碎原型机把一份原矿磨成两份碎矿，磨过的矿在同样一炉里能多出一倍金属。磨机在现实里干的也是这件事：颗粒磨细，脉石才松得开，后面的选别才有得选。",
            "这一格是整条矿线的入口，洗选、选别、电积都从它这里接出去。磨完直接进熔炼炉也行，那是最省事的一条路，代价是金属收不回全份。",
        ],
    ),
    dict(
        chapter="5fe0048b1a2b6a65",
        id="5FE00000000000C1",
        title="洗选：把脉石洗掉",
        sub="R2 · 前置 · 只覆盖 9 种金属",
        icon="industrialupgrade:purifiedcrushed/copper",
        deps=["285AC19CE5FBC3ED"],
        x=16.0, y=-12.0,
        tasks=[("industrialupgrade:purifiedcrushed/copper", 8, "5FE01C00000000C1")],
        rewards=[("industrialupgrade:itemdust/copper_dust", 4, "5FE01D00000000C1")],
        desc=[
            "碎矿泡进水里，沫子带走脉石，留下的是净碎矿。这一步不涨产量，只让后面的活变便宜：石头少一半，熔炼就少烧一半燃料。",
            "IU 只给九种金属写了洗选口（铜金银铅锡锇钽镉铀），别的矿种这台机器不认。全矿种的洗选与选别在电力时代的选矿机里，那已经是下一章的支线。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B201",
        title="通用选矿机",
        sub="R3 · 3.0 锭/矿",
        icon="mmcr:ore_beneficiator_basic_controller",
        deps=["649891A244FD0BF3"],
        x=4.0, y=7.5,
        tasks=[("mmcr:ore_beneficiator_basic_controller", 1, "5A1B1C000000B201")],
        rewards=[("industrialupgrade:itemingots/iron_ingot", 8, "5A1B1D000000B201")],
        desc=[
            "把磨、洗、选三段装进一台机器：3×3×4 的架子，中间一个磨机槽、一个选别槽，接上能量仓就转。基础档并行 2，改良档并行 4。",
            "配方池分七个页签，磨矿、洗选、浮选、磁选、重选各自成页，二十九种矿一种不落。矿从正面物品仓进，尾矿浆从流体口抽走——别把它倒回槽里，一格都不剩。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B202",
        title="选别：一族一套药剂",
        sub="R3 · 代价：黄药 + 2 bar 充气",
        icon="industrialupgrade:itemdust/copper_dust",
        deps=["5A1B00000000B201"],
        x=6.0, y=7.5,
        tasks=[("industrialupgrade:itemdust/copper_dust", 8, "5A1B1C000000B202")],
        rewards=[("kubejs:xanthate", 8, "5A1B1D000000B202")],
        desc=[
            "选别才是真正分家的那一步：净碎矿两进三出，一份矿石变三份粉。硫化矿走浮选，要黄药捕收、气泡把矿粒托上来；氧化矿走磁选，不要介质；难熔矿走重选，靠比重差。",
            "现实里的选矿厂就是按矿相换药剂与设备，所以门槛写在药剂上而不是机器上：黄药在釜里几秒钟出一批，没它就开不了浮选池，多装内件也补不回来。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B203",
        title="电解槽：接上直流",
        sub="R5 · 4.4 锭/矿",
        icon="mmcr:electrolytic_cell_basic_controller",
        deps=["5A1B00000000B202"],
        x=8.0, y=7.5,
        tasks=[("mmcr:electrolytic_cell_basic_controller", 1, "5A1B1C000000B203")],
        rewards=[("industrialupgrade:crafting_elements/crafting_320_element", 8, "5A1B1D000000B203")],
        desc=[
            "粉进釜浸出得到硫酸盐液，再送进这台槽里通直流，金属就长在阴极上。浸出不单独设一格：粉加硫酸在釜里走一遍就够，通氧还能快一截。",
            "槽上四个内件槽，阳极、阴极、隔膜、整流，空着也能跑，只是电费多两成多。同一个铜锭，裸槽 4,950 FE，四件装满 2,300 FE——这就是这一章的正反馈。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B204",
        title="首块阴极铜",
        sub="R5 · 副产阳极泥",
        icon="kubejs:electrolytic_copper",
        deps=["5A1B00000000B203"],
        x=10.0, y=7.5,
        tasks=[("kubejs:electrolytic_copper", 32, "5A1B1C000000B204")],
        rewards=[("kubejs:electrolytic_copper", 8, "5A1B1D000000B204")],
        desc=[
            "第一批阴极铜下来的时候，槽底还留着一层黑泥：阳极里不溶的东西全缩在这里，金、银、硒、铂族一样不落。铜线的利润有一半在这层泥上。",
            "别急着扔。阳极泥是铂族与硒的唯一进料，科技先锋那一章的「阳极泥与精炼」会把它捡起来。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B301",
        title="氧化铝：拜耳法三段",
        sub="铝的入口 · 需要硅整流",
        icon="kubejs:aluminium_oxide",
        deps=["5A1B00000000A107"],
        x=8.0, y=15.0,
        tasks=[("kubejs:aluminium_oxide", 4, "5A1B1C000000B301")],
        rewards=[("kubejs:cryolite", 4, "5A1B1D000000B301")],
        desc=[
            "铝土矿先用烧碱在釜里溶出，得到偏铝酸钠液；降温加晶种，氢氧化铝析出来；再焙烧，剩下的就是氧化铝。三步走完还没有铝，只是有了能电解的料。",
            "这条支线挂在晶圆线后面不是随手放的：熔盐槽的大电流整流只有硅与晶闸管两档，结构上就要求先有硅整流器。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B302",
        title="熔盐电解槽",
        sub="4.2 V × 200 kA",
        icon="mmcr:molten_salt_cell_basic_controller",
        deps=["5A1B00000000B301"],
        x=10.0, y=15.0,
        tasks=[("mmcr:molten_salt_cell_basic_controller", 1, "5A1B1C000000B302")],
        rewards=[("kubejs:magnesium_chloride", 2, "5A1B1D000000B302")],
        desc=[
            "氧化铝溶在冰晶石里，九百多度，通上几十万安培的直流，铝就积在阴极上。这是霍尔-埃鲁法，一百多年了还是最便宜的那条路。",
            "槽体内衬与阳极都得换：石墨阳极会被氟化，内衬要挡住冰晶石。两件装上，这台槽才不是一次性的。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B303",
        title="电解铝",
        sub="25,200 FE/锭",
        icon="industrialupgrade:itemingots/aluminium_ingot",
        deps=["5A1B00000000B302"],
        x=12.0, y=15.0,
        tasks=[("industrialupgrade:itemingots/aluminium_ingot", 4, "5A1B1C000000B303")],
        rewards=[("industrialupgrade:itemingots/aluminium_ingot", 8, "5A1B1D000000B303")],
        desc=[
            "第一块铝锭的意义不在铝，在电：一块锭背后是两万五千 FE，整章电力时代都在为这种以电换金属的交易铺路。母线、机壳、电缆从此不必抢铜。",
            "铬、钙、锶、钡这些铝热法的原料也一并有了着落——它们全要拿铝去换。",
        ],
    ),
    dict(
        chapter="e1c0000000000000",
        id="5A1B00000000B304",
        title="镁与氯的闭环",
        sub="6 V 槽 · 副产氯",
        icon="kubejs:magnesium_chloride",
        deps=["5A1B00000000B302"],
        x=14.0, y=15.0,
        tasks=[("kubejs:magnesium_chloride", 2, "5A1B1C000000B304")],
        rewards=[("industrialupgrade:itemingots/magnesium_ingot", 8, "5A1B1D000000B304")],
        desc=[
            "氯化镁在熔盐里电解，阴极出镁，阳极出氯。氯不能排，接回盐酸吸收塔就是三氯氢硅与四氯化钛的料，钛线要用它。",
            "镁在这个包里有两条路：电解的纯度到 4N、电费高；皮江法（硅热）省下三倍电、产率低一截。想省钱就烧硅铁，想要纯的就上槽。",
        ],
    ),
    dict(
        chapter="5e566db5411e083c",
        id="5E0D0000000000C1",
        title="阳极泥：铂族的第二条进料",
        sub="R6 · 别丢掉它",
        icon="kubejs:anode_slime",
        deps=["5E0A0000000000C1"],
        x=0.0, y=2.0,
        tasks=[("kubejs:anode_slime", 1, "5E0D1C00000000C1")],
        rewards=[("minecraft:gold_ingot", 4, "5E0D1D00000000C1")],
        desc=[
            "镍与铜的电解精炼都会留下阳极泥：阳极上不溶的部分整片剥下来，金、银、硒与铂族全在里面，品位比任何矿山都高一个数量级。",
            "所以铂族的第二条进料不是矿，是别人家的废渣。现实里全世界的铂族有一大半就是这么来的。",
        ],
    ),
    dict(
        chapter="5e566db5411e083c",
        id="5E0D0000000000C2",
        title="硒整流器：第一次提速",
        sub="电解能耗 ×0.8",
        icon="kubejs:selenium_rectifier_block",
        deps=["5E0D0000000000C1"],
        x=2.0, y=2.0,
        tasks=[("kubejs:selenium_rectifier_block", 1, "5E0D1C00000000C2")],
        rewards=[("kubejs:selenium_dust", 8, "5E0D1D00000000C2")],
        desc=[
            "阳极泥里唯一值得单独回收的半导体元素是硒。做成整流片装进电解槽的整流槽，同样的电流下槽电压掉下来，能耗直接乘 0.8。",
            "这是四件内件里最便宜的一件，也是唯一从废渣里长出来的。",
        ],
    ),
    dict(
        chapter="5e566db5411e083c",
        id="5E0D0000000000C3",
        title="电解铜 4N：阶梯顶",
        sub="R6 · 5.6 锭/矿",
        icon="kubejs:electrolytic_copper",
        deps=["5E0D0000000000C2"],
        x=4.0, y=2.0,
        tasks=[("kubejs:electrolytic_copper", 4, "5E0D1C00000000C3")],
        rewards=[("kubejs:electrolytic_copper", 8, "5E0D1D00000000C3")],
        desc=[
            "粗铜做阳极、纯铜做阴极，再电解一次，出来的是 99.99% 的电解铜。母线、真空腔、超导线圈只认这个纯度。",
            "到这一格矿线的阶梯就见顶了：一份原矿从 1.0 锭走到 5.6 锭，靠的全是前面那些多修一段就多一成的选择。",
        ],
    ),
]

# 既有三格补一句正文（照 PROGRESSION_MINERAL.md §5），已经补过就跳过
TEXT_APPEND = {
    "285AC19CE5FBC3ED": "这台只认九种金属，别的矿种它洗不了；全矿种的洗选与选别在电力时代的通用选矿机里，下一章有专门的支线。",
    "649891A244FD0BF3": "这台只分解流体与气体：水出氢氧、氟化氢出氢氟、溴化氢出氢溴。金属的电积与精炼是另一台槽，在支线「选矿与电积」里。",
    "5E0A0000000000C1": "铂族还有第二条进料：电解精炼的阳极泥。「阳极泥与精炼」支线就挂在这一格下面。",
}


# ---------------------------------------------------------------- 章节读写

def read_lines(path):
    with open(path, encoding="utf-8", newline="") as f:
        return f.read().splitlines(keepends=True)


def split_chapter(path):
    lines = read_lines(path)
    start = next(i for i, l in enumerate(lines) if l.rstrip("\r\n") == "\tquests: [")
    blocks, order = {}, []
    i = start + 1
    while i < len(lines):
        if lines[i].rstrip("\r\n") != "\t\t{":
            break
        j = i
        while lines[j].rstrip("\r\n") != "\t\t}":
            j += 1
        block = lines[i:j + 1]
        qid = re.search(r'\n\t\t\tid: "([0-9A-F]{16})"', "".join(block)).group(1)
        blocks[qid] = block
        order.append(qid)
        i = j + 1
    return lines, start, blocks, order, i


def ending(line):
    return "\r\n" if line.endswith("\r\n") else "\n"


def render(q, nl):
    """按章节里既有的字段顺序（字母序）拼一个任务块。"""
    out = ["\t\t{" + nl]
    out.append("\t\t\tdependencies: [%s]%s"
               % (", ".join('"%s"' % d for d in q["deps"]), nl))
    out.append("\t\t\ticon: {" + nl)
    out.append('\t\t\t\tid: "%s"%s' % (q["icon"], nl))
    out.append("\t\t\t}" + nl)
    out.append('\t\t\tid: "%s"%s' % (q["id"], nl))
    out.append("\t\t\trewards: [{" + nl)
    for item, count, rid in q["rewards"]:
        out.append("\t\t\t\tcount: %d%s" % (count, nl))
        out.append('\t\t\t\tid: "%s"%s' % (rid, nl))
        out.append("\t\t\t\titem: {" + nl)
        out.append("\t\t\t\t\tcount: 1%s" % nl)
        out.append('\t\t\t\t\tid: "%s"%s' % (item, nl))
        out.append("\t\t\t\t}" + nl)
        out.append('\t\t\t\ttype: "item"%s' % nl)
    out.append("\t\t\t}]" + nl)
    out.append("\t\t\ttasks: [{" + nl)
    for item, count, tid in q["tasks"]:
        if count > 1:
            out.append("\t\t\t\tcount: %dL%s" % (count, nl))
        out.append('\t\t\t\tid: "%s"%s' % (tid, nl))
        out.append('\t\t\t\titem: { count: 1, id: "%s" }%s' % (item, nl))
        out.append('\t\t\t\ttype: "item"%s' % nl)
    out.append("\t\t\t}]" + nl)
    out.append("\t\t\tx: %.1fd%s" % (q["x"], nl))
    out.append("\t\t\ty: %.1fd%s" % (q["y"], nl))
    out.append("\t\t}" + nl)
    return out


def write_chapter(path, lines, start, blocks, order, after_last):
    out = lines[:start + 1]
    for qid in order:
        out.extend(blocks[qid])
    out.extend(lines[after_last:])
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write("".join(out))


# ---------------------------------------------------------------- 文案

def subtitle_key(qid):
    return "\tquest.%s.quest_subtitle: " % qid


def upsert_lang(nl):
    """写 title / quest_subtitle / quest_desc；同名 key 就地替换，缺的按字母序插入。"""
    lines = read_lines(LANG)
    existing = {}
    for i, l in enumerate(lines):
        m = re.match(r"\tquest\.([0-9A-F]{16})\.(title|quest_subtitle): ", l)
        if m:
            existing[(m.group(1), m.group(2))] = i

    def put(qid, field, text):
        line = '\tquest.%s.%s: "%s"%s' % (qid, field, text, nl)
        idx = existing.get((qid, field))
        if idx is not None:
            lines[idx] = line
            return
        key = "\tquest.%s.%s: " % (qid, field)
        at = len(lines) - 1
        for i, l in enumerate(lines):
            if l.startswith("\t") and not l.startswith("\t\t") and l > key:
                at = i
                break
        lines.insert(at, line)
        for k, v in list(existing.items()):
            if v >= at:
                existing[k] = v + 1
        existing[(qid, field)] = at

    def put_desc(qid, paragraphs):
        start = next((i for i, l in enumerate(lines)
                      if l.startswith("\tquest.%s.quest_desc: [" % qid)), None)
        if start is not None:
            depth, end = 0, start
            for i in range(start, len(lines)):
                depth += lines[i].count("[") - lines[i].count("]")
                if depth == 0:
                    end = i
                    break
            del lines[start:end + 1]
        key = "\tquest.%s.quest_desc: [" % qid
        at = len(lines) - 1
        for i, l in enumerate(lines):
            if l.startswith("\t") and not l.startswith("\t\t") and l > key:
                at = i
                break
        block = [key + nl] + ['\t\t"%s"%s' % (p, nl) for p in paragraphs] + ["\t]" + nl]
        lines[at:at] = block

    for q in QUESTS:
        put(q["id"], "title", q["title"])
        put(q["id"], "quest_subtitle", q["sub"])
        put_desc(q["id"], q["desc"])
    return lines


def append_desc(old_desc, extra):
    if extra in old_desc:
        return old_desc
    return list(old_desc) + [extra]


def main():
    by_chapter = {}
    for q in QUESTS:
        by_chapter.setdefault(q["chapter"], []).append(q)

    all_ids = set()
    for q in QUESTS:
        if q["id"] in all_ids:
            raise SystemExit("任务 id 重复：" + q["id"])
        all_ids.add(q["id"])
        if len(q["rewards"]) != 1:
            raise SystemExit("%s：奖励目前只支持一条" % q["id"])

    for fname in sorted(by_chapter):
        path = os.path.join(CH_DIR, fname + ".snbt")
        lines, start, blocks, order, after_last = split_chapter(path)
        nl = ending(lines[0])
        added = updated = 0
        for q in by_chapter[fname]:
            block = render(q, nl)
            if q["id"] in blocks:
                blocks[q["id"]] = block
                updated += 1
            else:
                blocks[q["id"]] = block
                order.append(q["id"])
                added += 1
        write_chapter(path, lines, start, blocks, order, after_last)
        print("%-8s 新增 %d 格，重写 %d 格，共 %d 格"
              % (fname, added, updated, len(order)))

    # 既有三格的正文补一句：改 lang 里那条 desc，卡片结构一个字不动
    lang = upsert_lang(NL)
    text = "".join(lang)
    for qid, line in TEXT_APPEND.items():
        key = "\tquest.%s.quest_desc: [" % qid
        at = text.find(key)
        if at < 0:
            raise SystemExit("%s 没有 quest_desc，补不了正文" % qid)
        depth, end = 0, at
        for i in range(at, len(text)):
            if text[i] == "[":
                depth += 1
            elif text[i] == "]":
                depth -= 1
                if depth == 0:
                    end = i
                    break
        old = re.findall(r'"((?:[^"\\]|\\.)*)"', text[at:end])
        new = append_desc(old, line)
        if new == old:
            continue
        block = [key + NL] + ['\t\t"%s"%s' % (p, NL) for p in new] + ["\t]" + NL]
        text = text[:at] + "".join(block) + text[end + 1:]
    with open(LANG, "w", encoding="utf-8", newline="") as f:
        f.write(text)
    print("lang：13 格文案 + %d 条补句 已写入" % len(TEXT_APPEND))


if __name__ == "__main__":
    main()
