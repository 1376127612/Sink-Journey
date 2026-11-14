StartupEvents.registry('item', event => {
    event.create('fire_starter')
        .displayName('火折子')
        .useAnimation('bow')
        .useDuration(itemstack => 100) // 5秒 = 100刻
        .use((level, player, hand) => {
            // 仅当瞄准方块时才允许开始“使用”
            return player.rayTrace(5, false)?.block !== null
        })
        .finishUsing((itemstack, level, entity) => {
            // 防止客户端和服务端重复执行
            if (level.isClientSide()) return itemstack;

            // 获取玩家瞄准的方块
            const hit = entity.rayTrace(5, false);
            if (!hit || !hit.block) {
                entity.displayClientMessage(Text.red('必须对准方块使用！'), true);
                return itemstack;
            }

            const firePos = hit.blockPosition.above(); // 在点击方块上方点火

            // 70% 成功率
            if (Math.random() < 0.7) {
                if (level.getBlockState(firePos).isAir()) {
                    level.setBlockAndUpdate(firePos, Block.getBlock('minecraft:fire').defaultBlockState());
                    level.playSound(null, firePos.x, firePos.y, firePos.z, 'minecraft:item.flintandsteel.use', 'players', 1.0, 1.0);
                    entity.displayClientMessage(Text.green('点火成功！'), true);
                } else {
                    entity.displayClientMessage(Text.yellow('目标位置无法放置火焰。'), true);
                }
            } else {
                // 失败：冒烟 + 石头敲击声
                level.sendParticles('minecraft:large_smoke', firePos.x + 0.5, firePos.y + 0.5, firePos.z + 0.5, 5, 0.2, 0.2, 0.2, 0.05);
                level.playSound(null, firePos.x, firePos.y, firePos.z, 'minecraft:block.stone.hit', 'players', 1.0, 1.0);
                entity.displayClientMessage(Text.red('点火失败……再试一次。'), true);
            }

            // 添加1秒冷却
            entity.addItemCooldown(itemstack, 20);
            return itemstack;
        })
})