import { $Item, $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $ItemCost_, $ItemCost } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/villager" {
    export class $AccessItemsForEmeralds {
    }
    export interface $AccessItemsForEmeralds {
        crafttweaker$getItemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AccessItemsForEmeralds}.
     */
    export type $AccessItemsForEmeralds_ = (() => $ItemStack_);
    export class $AccessDyedArmorForEmeralds {
    }
    export interface $AccessDyedArmorForEmeralds {
        crafttweaker$getItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $AccessDyedArmorForEmeralds}.
     */
    export type $AccessDyedArmorForEmeralds_ = (() => $Item_);
    export class $AccessBasicTrade {
    }
    export interface $AccessBasicTrade {
        crafttweaker$getForSale(): $ItemStack;
        crafttweaker$getPriceMult(): number;
        crafttweaker$getPrice(): $ItemStack;
        crafttweaker$getMaxTrades(): number;
        crafttweaker$getPrice2(): $ItemStack;
        crafttweaker$getXp(): number;
    }
    export class $AccessEmeraldForItems {
    }
    export interface $AccessEmeraldForItems {
        crafttweaker$getItemStack(): $ItemCost;
    }
    /**
     * Values that may be interpreted as {@link $AccessEmeraldForItems}.
     */
    export type $AccessEmeraldForItems_ = (() => $ItemCost_);
    export class $AccessItemsAndEmeraldsToItems {
    }
    export interface $AccessItemsAndEmeraldsToItems {
        crafttweaker$getToItem(): $ItemStack;
        crafttweaker$getFromItem(): $ItemCost;
    }
    export class $AccessEnchantedItemForEmeralds {
    }
    export interface $AccessEnchantedItemForEmeralds {
        crafttweaker$getItemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AccessEnchantedItemForEmeralds}.
     */
    export type $AccessEnchantedItemForEmeralds_ = (() => $ItemStack_);
    export class $AccessTippedArrowForItemsAndEmeralds {
    }
    export interface $AccessTippedArrowForItemsAndEmeralds {
        crafttweaker$getToItem(): $ItemStack;
        crafttweaker$getFromItem(): $Item;
    }
}
