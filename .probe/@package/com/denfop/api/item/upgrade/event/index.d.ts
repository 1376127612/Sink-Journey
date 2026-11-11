import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $UpgradeWithBlackList, $UpgradeItem, $UpgradeWithBlackList_, $UpgradeItem_ } from "@package/com/denfop/api/item/upgrade";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/item/upgrade/event" {
    export class $EventItemBlackListLoad extends $LevelEvent {
        nbt: $CompoundTag;
        item: $UpgradeWithBlackList;
        stack: $ItemStack;
        constructor(arg0: $Level_, arg1: $UpgradeWithBlackList_, arg2: $ItemStack_, arg3: $CompoundTag_);
    }
    export class $EventItemLoad extends $LevelEvent {
        item: $UpgradeItem;
        stack: $ItemStack;
        constructor(arg0: $Level_, arg1: $UpgradeItem_, arg2: $ItemStack_);
    }
}
