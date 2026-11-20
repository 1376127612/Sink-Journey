// ============================================================================
// 和谐之律（kubejs:harmony_sounds）—— 余烬强化核心：给工具加「精准采集」
// ============================================================================
// 【怎么用】
//   和爆破核心一样，在黎明石砧（Dawnstone Anvil）上安装：
//     上层放「和谐之律」，下层放已经烧热的工具 → 按下砧上的锤子。
//   装上后工具会多出一级「精准采集」。
//
// 【本文件只做一件事：让黎明石砧认得这颗核心】
//   把 kubejs:harmony_sounds 注册进 Embers 的 augment 注册表。
//   配方和实际附魔效果在 server_scripts/harmony_sounds_recipe.js。
//
// 【为什么不在 startup 里注册（你之前遇到的 NPE 就是它）】
//   Embers 的 AugmentUtil.IMPL 是在 Embers 自己的构造函数里由
//   EmbersAPIImpl.init() 赋值的。KubeJS 的 startup 脚本跑在
//   modloading-worker 线程，早于这一步完成，那时调 getAugment() 就是
//   "Cannot invoke IAugmentUtil.getAugment(...) because AugmentUtil.IMPL is null"。
//   所以注册放在 server 侧（时机更晚、一定安全）。
//
// 【为什么不用 JavaAdapter（第一版踩的坑）】
//   原本想用 Rhino 的 JavaAdapter 造 IAugment 的 JS 代理，但报错：
//     "Can't find method JavaAdapter.init(Context, object, boolean)"
//   原因是 KubeJS 内部用的是 KubeJSContextFactory（ContextFactory 的子类），
//   脚本里 Java.loadClass 拿到的类与 Rhino 运行时的类不是同一个上下文，
//   方法签名匹配不上。
//
//   更好的办法：Embers 自带 AugmentBase，它本身就是 IAugment 的完整实现，
//   而且构造函数是 public（ResourceLocation, double）。
//   直接 new 一个就行，根本不需要动态代理。
// ============================================================================

var HARMONY_ID = 'kubejs:harmony_sounds'

/**
 * 造一个 IAugment 实现。
 *
 * 直接复用 Embers 自带的 AugmentBase —— 它已经是 IAugment 的完整实现
 * （getName / getCost 都有，其余用接口 default），构造函数 public。
 * 这比用 JavaAdapter 造代理简单得多，也不会踩类加载器的坑。
 */
function createHarmonyAugment() {
    var AugmentBase = Java.loadClass('com.rekindled.embers.augment.AugmentBase')
    var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    var id = ResourceLocation.parse(HARMONY_ID)
    return new AugmentBase(id, 1.0)
}

// 本文件不执行注册（时机不对）。
// 注册在 server 侧的 harmony_sounds_recipe.js 里完成。
console.info('[和谐之律] startup 脚本已加载（注册延后到 server 侧）')