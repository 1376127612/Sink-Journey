// ============================================================================
// 和谐之律（kubejs:harmony_sounds）—— server 侧：注册核心 + 配方 + 精准采集
// ============================================================================
// 三件事：
//   1. 把 kubejs:harmony_sounds 注册成 Embers 强化核心（IAugment）
//   2. 注册「黎明石砧装核心」的配方（和爆破核心同款 embers:tool_augment）
//   3. 让装了这颗核心的工具获得「精准采集」
//
// 【为什么注册放在 server 侧，而不是 startup】
//   Embers 的 AugmentUtil.IMPL 是在它自己构造函数里由 EmbersAPIImpl.init() 赋值的。
//   KubeJS startup 脚本跑在 modloading-worker 线程，可能早于这一步完成，
//   那时调 AugmentUtil.getAugment() 就会 NPE：
//     "... because AugmentUtil.IMPL is null"
//   放到 server 侧之后，Embers 必然已初始化，不再有这个问题。
//
// 【另外加了重试保护】
//   即使某个极端情况下时机仍然不对（IMPL 还是 null），
//   这里也不会抛错，而是在玩家 tick 里再试一次，直到注册成功为止。
// ============================================================================

var HARMONY_ID = 'kubejs:harmony_sounds'
// 扫描间隔（tick）：20 = 每秒一次
var SCAN_INTERVAL = 20
// 是否已成功注册核心
var harmonyRegistered = false

// ============================ 工具函数 =====================================

function logHarmony(msg) {
    try {
        if (typeof console !== 'undefined' && console && console.info) {
            console.info('[和谐之律] ' + msg)
        }
    } catch (e) { /* 忽略 */ }
}

/**
 * Embers 的 API 是否已就绪。
 *
 * AugmentUtil.IMPL 为 null 说明 Embers 还没初始化完，
 * 这时候任何 getAugment / registerAugment 调用都会 NPE。
 */
function embersReady() {
    try {
        var AugmentUtil = Java.loadClass('com.rekindled.embers.api.augment.AugmentUtil')
        return AugmentUtil.IMPL != null
    } catch (e) {
        return false
    }
}

/** 取 Embers 的和谐之律 augment 对象；未注册或未就绪返回 null */
function harmonyAugment() {
    try {
        if (!embersReady()) {
            return null
        }
        var AugmentUtil = Java.loadClass('com.rekindled.embers.api.augment.AugmentUtil')
        var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
        return AugmentUtil.getAugment(ResourceLocation.parse(HARMONY_ID))
    } catch (e) {
        return null
    }
}

/**
 * 造一个 IAugment 实现。
 *
 * 直接复用 Embers 自带的 AugmentBase —— 它本身就是 IAugment 的完整实现
 * （getName / getCost 都有，其余方法用接口 default），构造函数是 public：
 *   AugmentBase(ResourceLocation name, double cost)
 *
 * 为什么不用 JavaAdapter（第一版的做法，会报错）：
 *   报错 "Can't find method JavaAdapter.init(Context, object, boolean)"。
 *   原因是 KubeJS 内部用 KubeJSContextFactory（ContextFactory 的子类），
 *   脚本里 Java.loadClass 拿到的 Rhino 类与运行时不是同一个上下文，
 *   方法签名匹配不上。AugmentBase 这条路完全绕开了这个问题。
 */
function createHarmonyAugment() {
    var AugmentBase = Java.loadClass('com.rekindled.embers.augment.AugmentBase')
    var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    var id = ResourceLocation.parse(HARMONY_ID)
    return new AugmentBase(id, 1.0)
}

/**
 * 注册核心。幂等，且对「Embers 还没就绪」安全 —— 不抛错，返回 false。
 * @returns {boolean} 是否已处于「注册完成」状态
 */
function registerHarmony() {
    if (harmonyRegistered) {
        return true
    }
    if (!embersReady()) {
        return false // 交给下一次调用重试
    }

    try {
        var AugmentUtil = Java.loadClass('com.rekindled.embers.api.augment.AugmentUtil')
        var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
        var id = ResourceLocation.parse(HARMONY_ID)

        // 已经注册过（/reload 或重复触发）直接标记完成
        if (AugmentUtil.getAugment(id) != null) {
            harmonyRegistered = true
            return true
        }

        AugmentUtil.registerAugment(createHarmonyAugment())
        harmonyRegistered = true
        logHarmony('强化核心已注册: ' + HARMONY_ID + ' (cost=1.0)')
        return true
    } catch (e) {
        logHarmony('注册失败（稍后重试）: ' + e)
        return false
    }
}

/** 取精准采集的 Holder；1.21 的附魔必须从 registryAccess 拿 */
function silkTouchHolder(server) {
    var Registries = Java.loadClass('net.minecraft.core.registries.Registries')
    var Enchantments = Java.loadClass('net.minecraft.world.item.enchantment.Enchantments')
    var lookup = server.registryAccess().lookupOrThrow(Registries.ENCHANTMENT)
    return lookup.getOrThrow(Enchantments.SILK_TOUCH)
}

/** 这件物品上装了几级和谐之律（0 = 没装） */
function harmonyLevelOn(stack, aug) {
    try {
        var AugmentUtil = Java.loadClass('com.rekindled.embers.api.augment.AugmentUtil')
        return AugmentUtil.getAugmentLevel(stack, aug)
    } catch (e) {
        return 0
    }
}

/**
 * 按需给一件工具补上精准采集。
 * 只在「装了核心」且「还没有精准采集」时才写，不覆盖玩家自附的附魔。
 */
function maybeAddSilkTouch(stack, aug, silk) {
    if (harmonyLevelOn(stack, aug) <= 0) {
        return // 最便宜的第一步：没装核心就跳过
    }

    var DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
    var ItemEnchantments = Java.loadClass('net.minecraft.world.item.enchantment.ItemEnchantments')

    var cur = stack.get(DataComponents.ENCHANTMENTS)

    // 已有精准采集（无论是我们加的，还是玩家自己附的），不重复加
    if (cur != null && !cur.isEmpty() && cur.getLevel(silk) > 0) {
        return
    }

    var mutable
    if (cur == null || cur.isEmpty()) {
        mutable = new ItemEnchantments.Mutable(ItemEnchantments.EMPTY)
    } else {
        mutable = new ItemEnchantments.Mutable(cur)
    }
    mutable.set(silk, 1)
    stack.set(DataComponents.ENCHANTMENTS, mutable.toImmutable())
}

/** 扫一遍玩家背包 */
function scanPlayer(player, server) {
    var aug = harmonyAugment()
    if (aug == null) {
        return
    }

    var silk = silkTouchHolder(server)
    var inv = player.getInventory()
    var size = inv.getContainerSize()
    var i, stack

    for (i = 0; i < size; i++) {
        stack = inv.getItem(i)
        if (stack == null || stack.isEmpty()) {
            continue
        }
        maybeAddSilkTouch(stack, aug, silk)
    }
}

// ============================ 注册入口 =====================================
// 时机说明（很重要，别随便改）：
//   - 不能在 startup：那时 AugmentUtil.IMPL 还是 null（你遇到的 NPE 就是它）。
//   - 必须早于「配方被反序列化」：AnvilAugmentRecipe 的 Serializer 会调用
//     AugmentUtil.getAugment(id) 按 id 查核心，查不到就是 null，
//     那样配方会坏掉或直接加载失败。
//   - ServerEvents.loaded 是服务端加载完成时触发，既早于配方解析、
//     又保证 Embers 已经初始化过，是最合适的时机。
//   - 另外在玩家 tick 里留了兜底：万一 loaded 时还没就绪，会一直重试。

ServerEvents.loaded(event => {
    registerHarmony()
})

// ============================ 配方 =========================================
// 和爆破核心完全同构：黎明石砧上，核心 + 已加热的工具。
// tag 用 embers:augmentables/tools（含 #c:tools，不含盔甲）。

ServerEvents.recipes(event => {
    // 配方解析时会按 id 反查核心，所以这里再确保一次已注册。
    registerHarmony()

    event.custom({
        type: 'embers:tool_augment',
        augment: HARMONY_ID,
        input: { item: HARMONY_ID },
        tool: {
            type: 'embers:has_heat',
            base: { tag: 'embers:augmentables/tools' }
        }
    }).id('kubejs:harmony_sounds_augment')
})

// ============================ tick 兜底 + 效果 =============================

var harmonyTickCounter = 0

PlayerEvents.tick(event => {
    var player = event.player

    // 只在服务端跑
    if (player.getLevel().isClientSide()) {
        return
    }

    harmonyTickCounter++
    if (harmonyTickCounter % SCAN_INTERVAL !== 0) {
        return
    }

    try {
        // 兜底：万一前面两次时机都没赶上，这里一直重试到注册成功
        if (!registerHarmony()) {
            return
        }
        scanPlayer(player, player.getServer())
    } catch (e) {
        logHarmony('扫描失败: ' + e)
    }
})