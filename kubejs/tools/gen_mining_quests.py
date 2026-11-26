# -*- coding: utf-8 -*-
"""矿石来源与采矿门的任务卡：星界探索 / 触及星辰 / 深入原子 三章。

为什么单独一个生成器：这三章在任务书里是空的（`quests: [ ]`），
内容来自 `kubejs/docs/ORE_GENERATION.md` 的「维度就是门」+ 工具门两节，
排布按 `QUEST_LINES.md`：主线横铺 y = 0、一格 2.0、支线落在 y = -4 / -8 且单链。

落点：
  星界探索  下界热液 → 下界重矿 → 末地镍 → 钴铬锰 → 铂族 → 末地宝石（主线 6 格）
            铁镐 / 钻石镐（y = -4，2 格）、巨矿指示物（y = -8，1 格）
  触及星辰  月球钛钒锆 → 水星钨钼 → 水星钽铌 → 火星稀土 → 冰星锂铍（主线 5 格）
            钻石镐（y = -4，1 格）、行星石（y = -8，1 格）
  深入原子  主世界铀 → 下界铀钍复合矿 → 末地钍 → 料齐了（主线 4 格）
            粗铀提纯（y = -4，1 格）

id 规则：沿用 `gen_mineral_quests.py` 的段位写法——章节 id 前四位当任务 id 前缀，
尾两位 `C1..C9` 是序号，task 用 `1C`、reward 用 `1D` 占位。全书不重复。

用法：
    python kubejs/tools/gen_mining_quests.py
重复跑是安全的：卡片按 id 就地更新，文案按 key 就地覆盖，章节文件整体重写。
"""
import os
import re

NL = "\n"
CH_DIR = "config/ftbquests/quests/chapters"
LANG = "config/ftbquests/quests/lang/zh_cn.snbt"

# ---------------------------------------------------------------- 章节

# 章节里原本没有图标的（星界探索）顺手给一个；有图标的不动。
CHAPTER_ICONS = {
    "6bb0d29314d7c897": "industrialupgrade:baseore/nickel",
}

# ---------------------------------------------------------------- 卡片

QUESTS = [
    # ============================================ 星界探索：下界与末地
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C1",
        title="下界：火山热液",
        sub="硫 · 砷 · 铋 · 铊 · 铁镐",
        icon="industrialupgrade:baseore2/arsenic",
        deps=["285AC19CE5FBC3ED"],
        x=0.0, y=0.0,
        tasks=[("mekanism:dust_sulfur", 8, "6BB01C00000000C1"),
               ("industrialupgrade:raw_metals/raw_arsenic", 4, "6BB01C00000000C2")],
        rewards=[("industrialupgrade:raw_metals/raw_arsenic", 4, "6BB01D00000000C1")],
        desc=[
            "下界岩里长的是热液矿：岩浆把金属从深处带上来，在裂隙里沉成硫化物。所以下界的矿种和主世界不是一套——硫、砷、铋、铊这四种只在下面有，主世界一块都不生成。",
            "高度全在 0..64，铁镐起挖。硫是整条硫酸线的料，砷进半导体与农药线，铋做易熔合金，铊在这个包里只当功能件。",
            "往后接：这四样只是开胃，同一层的玄武岩重矿才是蒸汽段真正要吃的东西，下一格。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C2",
        title="玄武岩重矿：八种复合矿",
        sub="矿块进料 · 各 4 块/区块",
        icon="industrialupgrade:basaltheavyore/pyrite",
        deps=["6BB00000000000C1"],
        x=2.0, y=0.0,
        tasks=[("industrialupgrade:basaltheavyore/pyrite", 4, "6BB01C00000000C3"),
               ("industrialupgrade:basaltheavyore/magnetite", 4, "6BB01C00000000C4"),
               ("industrialupgrade:basaltheavyore/galena", 4, "6BB01C00000000C5")],
        rewards=[("industrialupgrade:basaltheavyore/nickelite", 2, "6BB01D00000000C2")],
        desc=[
            "下界还有一套「玄武岩底重矿」：磁铁矿、黄铁矿、方铅矿、镍铁矿、钛铁矿、白钨矿、石英岩、硅钙铀钍矿，各 1×8、rarity 2，摊下来 4 块/区块。贴图本来就是暗色玄武岩，放在下界比放主世界更说得过去。",
            "它们不掉碎矿，掉的是矿块本身——因为吃它们的机器就是按矿块进料的：蒸汽矿物分离器、电解槽、分离线。黄铁矿出硫、方铅矿出铅银、钛铁矿出钛。",
            "往后接：分离器在工业之始那条支线里。硫酸线一直缺的料，到这里才补上。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C3",
        title="末地：镍",
        sub="6×8 · 铁镐 · 48 块/区块",
        icon="industrialupgrade:baseore/nickel",
        deps=["6BB00000000000C2"],
        x=4.0, y=0.0,
        tasks=[("industrialupgrade:raw_metals/raw_nickel", 8, "6BB01C00000000C6")],
        rewards=[("industrialupgrade:itemingots/nickel_ingot", 4, "6BB01D00000000C3")],
        desc=[
            "末地石上长镍：6×8 一个矿脉、48 块/区块，是这一维度的主力矿。镍钴是超基性岩与硫化矿的组合，放在「末地石 + 陨铁」这种设定里，比让它在主世界深板岩里冒出来更像回事。",
            "高度压在 0..80。末地石只存在于这一段（y<0 是空气），写低了就是白写：宝石原先写在 −64..−16，五种一块都没生成过，扫存档才发现。",
            "往后接：镍是电力时代的第一块金属，也是阳极泥与铂族的入口。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C4",
        title="末地：钴 · 铬 · 锰",
        sub="三种合金金属 · 铁镐",
        icon="industrialupgrade:baseore/cobalt",
        deps=["6BB00000000000C3"],
        x=6.0, y=0.0,
        tasks=[("industrialupgrade:raw_metals/raw_cobalt", 4, "6BB01C00000000C7"),
               ("industrialupgrade:raw_metals/raw_chromium", 4, "6BB01C00000000C8"),
               ("industrialupgrade:raw_metals/raw_manganese", 4, "6BB01C00000000C9")],
        rewards=[("industrialupgrade:itemingots/cobalt_ingot", 4, "6BB01D00000000C4")],
        desc=[
            "同一个维度里还有三种合金金属：钴 5×7、铬与锰各 3×6，分别在 0..80 与 0..64。镍钴铬锰本来就是一套地质组合，所以它们挤在同一层，而不是各占一个维度。",
            "钴做硬质合金与电池正极，铬做不锈钢与镀层，锰做脱氧剂。三样都是「加一点就换一种性能」的料，用途写在配比里，不在产量里。",
            "往后接：钴镍同层，电解精炼的阳极泥会一起收走；铬锰直接进不锈钢与电池。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C5",
        title="末地：镍与两种复合矿",
        sub="钻石镐 · 镍 4 / 复合矿各 2",
        icon="industrialupgrade:mineral/iridosmine",
        deps=["6BB00000000000C4"],
        x=8.0, y=0.0,
        tasks=[("industrialupgrade:raw_metals/raw_nickel", 4, "6BB01C00000000CA"),
               ("industrialupgrade:mineral/braggite", 2, "6BB01C00000000CB"),
               ("industrialupgrade:mineral/iridosmine", 2, "6BB01C00000000CC")],
        rewards=[("industrialupgrade:mineral/braggite", 1, "6BB01D00000000C5")],
        desc=[
            "铂、钯、铱的原矿已经删掉：这三种金属在原矿里是硫化物固溶体，品位低到没法单独开矿，本包只让它们从镍精矿与阳极泥里出来（科技先锋那一章的湿法线）。所以这一格要的是镍原矿四块——9 份纯净碎镍矿才凑一批铂族精矿。",
            "同层还放了两种复合矿。硫镍钯铂矿（braggite）是这几种金属天然共生在一起的样子；铱锇矿（iridosmine）的用途更具体——铱锇渣 → 四氧化锇 → 锇粉，本包的锇只从这条路来，Mek 的锇矿已经关掉。两种都挂着 needs_diamond_tool：钻石镐以下挖了不掉东西。",
            "往后接：铂族有两条路，科技先锋那一章的湿法线，和电解精炼的阳极泥。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C6",
        title="末地：宝石与铱锇矿",
        sub="四宝石 · 24..56",
        icon="industrialupgrade:preciousgem/ruby_gem",
        deps=["6BB00000000000C5"],
        x=10.0, y=0.0,
        shape="hexagon",
        tasks=[("industrialupgrade:preciousgem/ruby_gem", 1, "6BB01C00000000CD"),
               ("industrialupgrade:preciousgem/sapphire_gem", 1, "6BB01C00000000CE"),
               ("industrialupgrade:preciousgem/topaz_gem", 1, "6BB01C00000000CF"),
               ("industrialupgrade:mineral/iridosmine", 2, "6BB01C00000000D0")],
        rewards=[("industrialupgrade:preciousgem/topaz_gem", 2, "6BB01D00000000C6")],
        desc=[
            "宝石四种——红宝石、蓝宝石、黄玉、宝石石英——各 1×3、rarity 2，全锁在 24..56。这个高度是扫存档扫出来的：原先写在负层，一块都没生成。",
            "宝石在这里只当工具与装饰料，真正的价值在铱锇矿：一格带两块回去，铂族那条湿法线就不断料。",
            "往后接：末地这一支到此为止。再往上不是维度，是行星。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C7",
        title="铁镐：末地层的门票",
        sub="35 个矿块 · needs_iron_tool",
        icon="minecraft:iron_pickaxe",
        deps=["6BB00000000000C3"],
        x=4.0, y=-4.0,
        tasks=[("minecraft:iron_pickaxe", 1, "6BB01C00000000D1")],
        rewards=[("minecraft:iron_ingot", 4, "6BB01D00000000C7")],
        desc=[
            "工具门是三道门里的第二道：35 个矿块挂着 needs_iron_tool，铁镐以下挖了不掉东西。名单是主世界的锡铅银铀镓锗、下界的全部热液矿与重矿、末地的镍钴铬锰与四宝石、月球的钛钒、冰星的锂铍。",
            "为什么按金属分而不按维度分：维度只说明「你得去一趟」，工具才说明「你带得出来」。铜镐挖铁、铁镐挖镍，一级一级往上接。",
            "往后接：还剩 15 块要钻石镐，下一格。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C8",
        title="钻石镐：另一半矿",
        sub="9 个矿块 · needs_diamond_tool",
        icon="minecraft:diamond_pickaxe",
        deps=["6BB00000000000C7"],
        x=6.0, y=-4.0,
        tasks=[("minecraft:diamond_pickaxe", 1, "6BB01C00000000D2")],
        rewards=[("minecraft:diamond", 2, "6BB01D00000000C8")],
        desc=[
            "另外 9 个矿块要钻石镐：钍、两种铂族复合矿，加上水星的钨钼钽铌、火星的铪、月球的锆。铂族与稀土的原矿已经删掉，这一档比原先少了六个。全是「挖到了也拿不出来」的那一档。",
            "这一档在 JEI 里看不见，只有真去挖才知道：方块带 requiresCorrectToolForDrops，镐子不对就是挖碎了什么都不掉。",
            "往后接：难熔金属与稀土都在这道门后面，行星那一章第一格就要它。",
        ],
    ),
    dict(
        chapter="6bb0d29314d7c897",
        id="6BB00000000000C9",
        title="地表先看草：巨矿的指示物",
        sub="主世界 16 份巨矿",
        icon="botania:orange_mystical_flower",
        deps=["6BB00000000000C1"],
        x=0.0, y=-8.0,
        tasks=[("minecraft:orange_tulip", 1, "6BB01C00000000D3"),
               ("minecraft:cornflower", 1, "6BB01C00000000D4")],
        rewards=[("minecraft:poppy", 4, "6BB01D00000000C9")],
        desc=[
            "主世界还留着 16 份 AdLods 巨型矿床：铜铁金银煤、青金红石钻石绿宝石、锡铅银锌铝、远古残骸与下界金。它们不是矿脉 feature，是一整片巨型团块，撞上就是几百块。",
            "这些矿床的地表指示物原本引用 silentgems / surfacesamples / adfinders，三个模组都没装——于是巨矿在生成，地上却什么都没有。现在换成原版花草与植物魔法的橙神秘花，普通地表也放得住。",
            "关掉的 14 份是后期金属与宝石（镍钴铱锇钯铂铑钌铀、三宝石、紫水晶、气袋）：它们已经搬到末地与行星，不能让巨矿从主世界漏出来。往后接：看见橙郁金香与矢车菊成片，往下挖。",
        ],
    ),

    # ============================================ 触及星辰：Ad Astra 四行星
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C1",
        title="月球：钛 · 钒 · 锆",
        sub="月岩 · 12 / 5 / 6 块每区块",
        icon="industrialupgrade:baseore/titanium",
        deps=["6BB00000000000C6"],
        x=0.0, y=0.0,
        tasks=[("industrialupgrade:raw_metals/raw_titanium", 8, "6CD41C00000000C1"),
               ("industrialupgrade:raw_metals/raw_vanadium", 4, "6CD41C00000000C2"),
               ("industrialupgrade:raw_metals/raw_zirconium", 4, "6CD41C00000000C3")],
        rewards=[("industrialupgrade:itemingots/titanium_ingot", 4, "6CD41D00000000C1")],
        desc=[
            "第一枚火箭到的是月球。月岩里三样：钛 2×6、钒 1×5、锆 1×6，全在 −32..64。斜长岩与钛铁矿本来就是月球地质的主角，钛钒一起走，锆跟着共生。",
            "钛要氯与镁、还要真空蒸馏；钒进钢与催化剂；锆做包壳与耐蚀件。三样在主世界一块都没有，到了这里才第一次见。",
            "往后接：月球只是最近的一颗，钨钼在下一颗行星。",
        ],
    ),
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C2",
        title="水星：钨 · 钼",
        sub="2×8 · 各 16 块/区块",
        icon="industrialupgrade:baseore/tungsten",
        deps=["6CD40000000000C1"],
        x=2.0, y=0.0,
        tasks=[("industrialupgrade:raw_metals/raw_tungsten", 4, "6CD41C00000000C4"),
               ("industrialupgrade:raw_metals/raw_molybdenum", 4, "6CD41C00000000C5")],
        rewards=[("industrialupgrade:itemingots/tungsten_ingot", 2, "6CD41D00000000C2")],
        desc=[
            "水星是金属最富的一颗：钨、钼各 2×8、16 块/区块，压在 −40..72，是全表里密度最高的两条。",
            "矿多不代表好处理：钨钼都要氢还原，钨还要垂熔。氢在本包不算稀缺——电解器与蒸汽电解器都出——所以这里的门槛是设备，不是原料。",
            "往后接：钽铌在同一颗行星的另一段。",
        ],
    ),
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C3",
        title="水星：钽 · 铌",
        sub="1×6 · 各 6 块/区块",
        icon="industrialupgrade:baseore1/tantalum",
        deps=["6CD40000000000C2"],
        x=4.0, y=0.0,
        tasks=[("industrialupgrade:raw_metals/raw_tantalum", 2, "6CD41C00000000C6"),
               ("industrialupgrade:raw_metals/raw_niobium", 2, "6CD41C00000000C7")],
        rewards=[("industrialupgrade:itemingots/niobium", 2, "6CD41D00000000C3")],
        desc=[
            "钽、铌各 1×6、6 块/区块。两种金属在矿里就共生，现实里也是同一批精矿分出来的——所以它们共用一个格子，不是两格。",
            "钽进电容器与耐 HF 设备，铌进超导与高温合金。要处理它们得先有耐氢氟酸的容器与萃取剂：这条线的门槛写在材料上，不在电压上。",
            "往后接：稀土在火星。",
        ],
    ),
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C4",
        title="火星：独居石 · 铪",
        sub="稀土矿与难熔伴生 · 18 / 6 块每区块",
        icon="kubejs:monazite_ore",
        deps=["6CD40000000000C3"],
        x=6.0, y=0.0,
        tasks=[("kubejs:monazite", 8, "6CD41C00000000C8"),
               ("industrialupgrade:raw_metals/raw_hafnium", 2, "6CD41C00000000CB")],
        rewards=[("kubejs:rare_earth_concentrate", 1, "6CD41D00000000C4")],
        desc=[
            "火星给两样东西：独居石 3×6（一块掉 2 份，共 18 块/区块）与铪 1×6。钕、钆、钇的单元素矿已经删掉了——现实里稀土从来不是按元素分开挖的。",
            "独居石 (Ce,La,Nd)PO₄ 一份矿里同时含铈、镧、钕、钆、钇，元素要到科技先锋那一章的萃取段才拆得开。四份独居石浮选出 1 份精矿，就是那一章的入口。",
            "往后接：独居石进稀土湿法线，铪进核。最后一颗行星给锂铍。",
        ],
    ),
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C5",
        title="冰星：锂 · 铍",
        sub="1×4 · 各 4 块/区块",
        icon="industrialupgrade:baseore1/lithium",
        deps=["6CD40000000000C4"],
        x=8.0, y=0.0,
        shape="hexagon",
        tasks=[("nuclearcraftneohaul:lithium_raw", 4, "6CD41C00000000CC"),
               ("nuclearcraftneohaul:beryllium_dust", 4, "6CD41C00000000CD")],
        rewards=[("nuclearcraftneohaul:beryllium_ingot", 2, "6CD41D00000000C5")],
        desc=[
            "冰星的挥发分给锂与铍，各 1×4、4 块/区块，是四颗行星里最稀的一份。",
            "锂进电池与铝锂合金，铍做反射层与铍青铜——两种都是「少量就够用」的金属，所以产量定得低。",
            "往后接：四颗行星走完，矿的来源就齐了；剩下的是怎么把这些料变成锭。",
        ],
    ),
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C6",
        title="出发前先换镐子",
        sub="行星上的工具档",
        icon="minecraft:diamond_pickaxe",
        deps=["6CD40000000000C1"],
        x=0.0, y=-4.0,
        tasks=[("minecraft:diamond_pickaxe", 1, "6CD41C00000000CE")],
        rewards=[("minecraft:diamond", 2, "6CD41D00000000C6")],
        desc=[
            "行星矿也要分工具档：钛、钒、锂、铍用铁镐就够，锆、钨、钼、钽、铌、钕、钆、钇、铪要钻石镐。",
            "所以出发前先把镐子备好——火箭只带货舱，不帮你补工具。到了行星上才发现挖不动，代价是一整趟燃料。",
            "往后接：没有第二把镐子，行星那一整章都推不动。",
        ],
    ),
    dict(
        chapter="6cd44026301f6f75",
        id="6CD40000000000C7",
        title="行星石本身也是料",
        sub="月岩 / 水星石 / 火星石 / 冰星石",
        icon="ad_astra:moon_stone",
        deps=["6CD40000000000C1"],
        x=0.0, y=-8.0,
        tasks=[("ad_astra:moon_stone", 16, "6CD41C00000000CF"),
               ("ad_astra:mercury_stone", 16, "6CD41C00000000D0")],
        rewards=[("ad_astra:mars_stone", 8, "6CD41D00000000C7")],
        desc=[
            "行星石本身也是料：月岩、水星石、火星石、冰星石各是一种方块，进固态电解器能直接出气体，进建筑线就是那颗星球唯一的本地建材。",
            "包里没有给它们安排金属产出——金属只从矿里来——所以挖石头是为了造房子与换气体，不是为了锭。",
            "往后接：采石场与 c:ores 标签在这一层照常工作，机器挖矿按标签认，不分维度。",
        ],
    ),

    # ============================================ 深入原子：铀与钍
    dict(
        chapter="7c4e2f5cb393c0ae",
        id="7C4E0000000000C1",
        title="铀：主世界的 10 块/区块",
        sub="2×5 · −56..16 · 铁镐",
        icon="industrialupgrade:classicore/uranium",
        deps=["6BB00000000000C6"],
        x=0.0, y=0.0,
        tasks=[("mekanism:raw_uranium", 8, "7C4E1C00000000C1")],
        rewards=[("industrialupgrade:crushed/uranium", 4, "7C4E1D00000000C1")],
        desc=[
            "铀在主世界：−56..16、2×5、10 块/区块，铁镐起挖。Mek 与 NuclearCraft 自己的铀矿都关掉了，全世界只剩 IU 这一份，原矿统一成 mekanism:raw_uranium。",
            "为什么铀留在地表而不搬去行星：核燃料要的量小、要得早。把它放在找得到的地方，玩家才会先学会「别把它堆在床边」。",
            "往后接：钍在末地；下界还有一种两种放射体长在同一块里的矿。",
        ],
    ),
    dict(
        chapter="7c4e2f5cb393c0ae",
        id="7C4E0000000000C2",
        title="硅钙铀钍矿：下界的复合矿",
        sub="一块矿里两种放射体",
        icon="industrialupgrade:basaltheavyore/uranite",
        deps=["7C4E0000000000C1"],
        x=2.0, y=0.0,
        tasks=[("industrialupgrade:basaltheavyore/uranite", 4, "7C4E1C00000000C2")],
        rewards=[("mekanism:raw_uranium", 2, "7C4E1D00000000C2")],
        desc=[
            "下界的玄武岩底重矿里有一块叫硅钙铀钍矿，名字就是成分表：硅、钙、铀、钍。它不掉碎矿、掉矿块，进分离器或电解槽。",
            "现实里的铀矿常与钍共生（独居石、铀钍矿都是），所以这一块同时算两种料的来源，只是含量低——要成规模的钍还得去末地。",
            "往后接：分离器把它拆开，铀钍各走各的线。",
        ],
    ),
    dict(
        chapter="7c4e2f5cb393c0ae",
        id="7C4E0000000000C3",
        title="钍：末地的 16..56",
        sub="1×4 · rarity 2 · 钻石镐",
        icon="industrialupgrade:thorium_ore/thorium_ore",
        deps=["7C4E0000000000C2"],
        x=4.0, y=0.0,
        tasks=[("nuclearcraftneohaul:thorium_raw", 4, "7C4E1C00000000C3")],
        rewards=[("nuclearcraftneohaul:thorium_ingot", 2, "7C4E1D00000000C3")],
        desc=[
            "钍在末地 16..56、1×4、rarity 2，摊 2 块/区块，钻石镐。原先写在 −48..16——末地石根本不在那一层，一块都没生成过，是扫存档扫出来才抬上来的。",
            "钍自己不太裂变，但吸收中子之后能变成铀-233。现实里的钍基核能就是这条路，所以钍不是燃料，是增殖材料。",
            "往后接：铀钍两种锭到手，剩下的是燃料线，不在这章。",
        ],
    ),
    dict(
        chapter="7c4e2f5cb393c0ae",
        id="7C4E0000000000C4",
        title="料齐了：三条来源都通",
        sub="铀 · 钍 · 复合矿",
        icon="nuclearcraftneohaul:thorium_ingot",
        deps=["7C4E0000000000C3"],
        x=6.0, y=0.0,
        shape="hexagon",
        tasks=[("mekanism:ingot_uranium", 2, "7C4E1C00000000C4"),
               ("nuclearcraftneohaul:thorium_ingot", 2, "7C4E1C00000000C5")],
        rewards=[("nuclearcraftneohaul:thorium_dust", 4, "7C4E1D00000000C4")],
        desc=[
            "铀锭与钍锭各两块，矿物这一侧就齐了：主世界的铀、下界的复合矿、末地的钍，三条来源全通。",
            "这一章只交代料从哪来，不碰反应堆：燃料棒、慢化剂、冷却那套在后面的核章节里。",
            "往后接：把矿变成燃料之前，先想清楚废料放哪——本包的核废料不会自己消失。",
        ],
    ),
    dict(
        chapter="7c4e2f5cb393c0ae",
        id="7C4E0000000000C5",
        title="粗铀：下一步才是浓缩",
        sub="粗铀 → 铀-235 / 238",
        icon="industrialupgrade:nuclearresource/unprocessed_radioactive_uranium",
        deps=["7C4E0000000000C1"],
        x=0.0, y=-4.0,
        tasks=[("industrialupgrade:nuclearresource/unprocessed_radioactive_uranium", 2, "7C4E1C00000000C6")],
        rewards=[("industrialupgrade:nuclearresource/uranium_235", 1, "7C4E1D00000000C5")],
        desc=[
            "IU 的提纯链从「放射性粗铀」开始：粗铀 → 光辉化 → 铀-235 / 铀-238。矿挖出来先进这一步，不是直接扔进反应堆。",
            "现实里从矿石到燃料要浸出、萃取、转化、浓缩四段，包里压成一条链，所以这一格只要两件粗铀就能过。",
            "往后接：235 与 238 分开之后，才是燃料棒与增殖。",
        ],
    ),
]


# ---------------------------------------------------------------- 章节读写

def read_lines(path):
    with open(path, encoding="utf-8", newline="") as f:
        return f.read().splitlines(keepends=True)


def ending(line):
    return "\r\n" if line.endswith("\r\n") else "\n"


def render(q, nl):
    out = ["\t\t{" + nl]
    if q["deps"]:
        out.append("\t\t\tdependencies: [%s]%s"
                   % (", ".join('"%s"' % d for d in q["deps"]), nl))
    out.append("\t\t\ticon: {" + nl)
    out.append('\t\t\t\tid: "%s"%s' % (q["icon"], nl))
    out.append("\t\t\t}" + nl)
    out.append('\t\t\tid: "%s"%s' % (q["id"], nl))
    if q.get("shape"):
        out.append('\t\t\tshape: "%s"%s' % (q["shape"], nl))
    out.append("\t\t\trewards: [" + nl)
    for item, count, rid in q["rewards"]:
        out.append("\t\t\t\t{" + nl)
        out.append("\t\t\t\t\tcount: %d%s" % (count, nl))
        out.append('\t\t\t\t\tid: "%s"%s' % (rid, nl))
        out.append("\t\t\t\t\titem: {" + nl)
        out.append("\t\t\t\t\t\tcount: 1%s" % nl)
        out.append('\t\t\t\t\t\tid: "%s"%s' % (item, nl))
        out.append("\t\t\t\t\t}" + nl)
        out.append('\t\t\t\t\ttype: "item"%s' % nl)
        out.append("\t\t\t\t}" + nl)
    out.append("\t\t\t]" + nl)
    out.append("\t\t\ttasks: [" + nl)
    for i, (item, count, tid) in enumerate(q["tasks"]):
        out.append("\t\t\t\t{" + nl)
        if count > 1:
            out.append("\t\t\t\t\tcount: %dL%s" % (count, nl))
        out.append('\t\t\t\t\tid: "%s"%s' % (tid, nl))
        out.append('\t\t\t\t\titem: { count: 1, id: "%s" }%s' % (item, nl))
        out.append('\t\t\t\t\ttype: "item"%s' % nl)
        out.append("\t\t\t\t}" + ("," if i < len(q["tasks"]) - 1 else "") + nl)
    out.append("\t\t\t]" + nl)
    out.append("\t\t\tx: %.1fd%s" % (q["x"], nl))
    out.append("\t\t\ty: %.1fd%s" % (q["y"], nl))
    out.append("\t\t}" + nl)
    return out


def write_chapter(fname, qs):
    path = os.path.join(CH_DIR, fname + ".snbt")
    lines = read_lines(path)
    nl = ending(lines[0])

    icon = CHAPTER_ICONS.get(fname)
    if icon and not any(l.strip().startswith("icon:") for l in lines):
        at = next(i for i, l in enumerate(lines) if l.strip().startswith("id:"))
        lines[at:at] = ["\ticon: {" + nl, '\t\tid: "%s"%s' % (icon, nl), "\t}" + nl]

    # 已有卡片按 id 收进 blocks，重跑时就地替换，别的章里手改的卡不动
    blocks, order = {}, []
    start = next((i for i, l in enumerate(lines)
                  if l.rstrip("\r\n") in ("\tquests: [ ]", "\tquests: [")), None)
    if start is None:
        raise SystemExit("%s 里找不到 quests 数组" % fname)
    if lines[start].rstrip("\r\n") == "\tquests: [":
        i = start + 1
        while i < len(lines) and lines[i].rstrip("\r\n") == "\t\t{":
            j = i
            while lines[j].rstrip("\r\n") != "\t\t}":
                j += 1
            block = lines[i:j + 1]
            qid = re.search(r'\n\t\t\tid: "([0-9A-F]{16})"', "".join(block)).group(1)
            blocks[qid] = block
            order.append(qid)
            i = j + 1
        if lines[i].rstrip("\r\n") != "\t]":
            raise SystemExit("%s：quests 数组没有闭合" % fname)
        tail = lines[i + 1:]
    else:
        tail = lines[start + 1:]

    for q in qs:
        blocks[q["id"]] = render(q, nl)
        if q["id"] not in order:
            order.append(q["id"])

    out = lines[:start]
    out.append("\tquests: [" + nl)
    for qid in order:
        out.extend(blocks[qid])
    out.append("\t]" + nl)
    out.extend(tail)
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write("".join(out))


# ---------------------------------------------------------------- 文案

def upsert_lang():
    lines = read_lines(LANG)
    text = "".join(lines)
    nl = ending(lines[0])

    for q in QUESTS:
        qid = q["id"]
        for field, value in (("title", q["title"]), ("quest_subtitle", q["sub"])):
            key = "\tquest.%s.%s: " % (qid, field)
            line = '%s"%s"%s' % (key, value, nl)
            at = next((i for i, l in enumerate(text.splitlines(keepends=True))
                       if l.startswith(key)), None)
            if at is not None:
                parts = text.splitlines(keepends=True)
                parts[at] = line
                text = "".join(parts)
            else:
                parts = text.splitlines(keepends=True)
                pos = len(parts) - 1
                for i, l in enumerate(parts):
                    if l.startswith("\t") and not l.startswith("\t\t") and l > key:
                        pos = i
                        break
                parts.insert(pos, line)
                text = "".join(parts)

        dkey = "\tquest.%s.quest_desc: [" % qid
        parts = text.splitlines(keepends=True)
        start = next((i for i, l in enumerate(parts) if l.startswith(dkey)), None)
        if start is not None:
            depth, end = 0, start
            for i in range(start, len(parts)):
                depth += parts[i].count("[") - parts[i].count("]")
                if depth == 0:
                    end = i
                    break
            del parts[start:end + 1]
        block = [dkey + nl] + ['\t\t"%s"%s' % (p, nl) for p in q["desc"]] + ["\t]" + nl]
        pos = len(parts) - 1
        for i, l in enumerate(parts):
            if l.startswith("\t") and not l.startswith("\t\t") and l > dkey:
                pos = i
                break
        parts[pos:pos] = block
        text = "".join(parts)

    with open(LANG, "w", encoding="utf-8", newline="") as f:
        f.write(text)


def main():
    seen = set()
    by_chapter = {}
    for q in QUESTS:
        if q["id"] in seen:
            raise SystemExit("任务 id 重复：" + q["id"])
        seen.add(q["id"])
        for _, _, tid in q["tasks"]:
            if tid in seen:
                raise SystemExit("task id 重复：" + tid)
            seen.add(tid)
        for _, _, rid in q["rewards"]:
            if rid in seen:
                raise SystemExit("reward id 重复：" + rid)
            seen.add(rid)
        by_chapter.setdefault(q["chapter"], []).append(q)

    for fname, qs in by_chapter.items():
        write_chapter(fname, qs)
        print("%-8s %d 格  %s" % (fname, len(qs), " / ".join(q["title"] for q in qs)))

    upsert_lang()
    print("lang：%d 格文案已写入" % len(QUESTS))


if __name__ == "__main__":
    main()
