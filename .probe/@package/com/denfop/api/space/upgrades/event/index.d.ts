import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/space/upgrades/event" {
    export class $EventItemLoad extends $LevelEvent {
        item: $IRoversItem;
        stack: $ItemStack;
        constructor(arg0: $Level_, arg1: $IRoversItem, arg2: $ItemStack_);
    }
}
