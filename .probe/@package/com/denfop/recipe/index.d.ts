import { $TagKey } from "@package/net/minecraft/tags";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";

declare module "@package/com/denfop/recipe" {
    export class $IInputItemStack {
    }
    export interface $IInputItemStack {
        matches(arg0: $ItemStack_): boolean;
        getTag(): $TagKey<$Item>;
        getInputs(): $List<$ItemStack>;
        hasTag(): boolean;
        getAmount(): number;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        growAmount(arg0: number): void;
        get tag(): $TagKey<$Item>;
        get inputs(): $List<$ItemStack>;
        get amount(): number;
    }
}
