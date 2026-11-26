// ============================================================
// IU 太空：只封「玩家亲自进入」的入口
// ------------------------------------------------------------
// 太空系统本身（研究天体 → 造探测器/卫星/漫游车/火箭 → 远征拿资源 → 殖民地）保留，
// 那是无人远征，不涉及维度生成。
//
// 玩家能进太空的唯一途径是手持的**星门**
//   industrialupgrade:space/planetary_translocator（配方 industrialupgrade_2508）
// 右键打开星际跃迁界面 → 点天体 → SpaceTeleportController 换维度。
// 封它四层：删配方（这里）+ JEI 隐藏（client_scripts/bans/iu_space_jei.js）
//          + AStages 锁（config/astages/simple/astages/item.json）
//          + sinkjourneycore 的 mixin 兜底（创造模式拿出来或老存档里已有的也点不开）。
//
// 维度侧更进一步：sinkjourneycore 的 IuSpaceDimensionRegistrationMixin 在注册表加载时就
// 把 34 个太空维度摘掉（earth 例外），所以 /execute in 也进不去，也不会有 34 个空的
// ServerLevel 常驻内存；sj-oregen 里那份「覆盖成虚空」的数据包因此变成纯备份。
//
// 注：basemachine3/teleporter_iu 不是载人入口——那是**同位面**成对传送的机器方块
// （BlockEntityTeleporter 只改坐标，不换维度，用频率传输器配对、红石触发、按载重扣电），
// 早先误封过，现已恢复：它还是复制机（basemachine3/replicator_iu）配方链上的一环。
// ============================================================

ServerEvents.recipes(event => {
    const STARGATE = 'industrialupgrade:space/planetary_translocator'

    // 星门：删配方 id + 按产物兜一遍（IU 的配方是自定义 shaped_recipe，按 output 删是保险）
    event.remove({ id: 'industrialupgrade:industrialupgrade_2508' })
    event.remove({ output: STARGATE })

    console.info('[太空] IU 星门已封禁；探测器/卫星/漫游车/火箭/殖民地照旧')
})
