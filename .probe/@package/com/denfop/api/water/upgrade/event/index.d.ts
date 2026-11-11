import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IRotorUpgradeItem } from "@package/com/denfop/api/water/upgrade";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/water/upgrade/event" {
    export class $EventRotorItemLoad extends $LevelEvent {
        item: $IRotorUpgradeItem;
        stack: $ItemStack;
        constructor(arg0: $Level_, arg1: $IRotorUpgradeItem, arg2: $ItemStack_);
    }
}
