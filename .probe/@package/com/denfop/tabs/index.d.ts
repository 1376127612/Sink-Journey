import { $ItemLike } from "@package/net/minecraft/world/level";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";

declare module "@package/com/denfop/tabs" {
    export class $IItemTab {
    }
    export interface $IItemTab extends $ItemLike {
        allowedIn(arg0: $CreativeModeTab_): boolean;
        getItemCategory(): $CreativeModeTab;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        get itemCategory(): $CreativeModeTab;
    }
}
