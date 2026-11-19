import { $Stream } from "@package/java/util/stream";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient$Value, $Ingredient$Value_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $DataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/item" {
    export class $AccessIngredient {
        static crafttweaker$callFromValues(arg0: $Stream<$Ingredient$Value_>): $Ingredient;
    }
    export interface $AccessIngredient {
        crafttweaker$setItemStacks(arg0: $ItemStack_[]): void;
        crafttweaker$getValues(): $Ingredient$Value[];
    }
    export class $AccessItem {
    }
    export interface $AccessItem {
        crafttweaker$getComponents(): $DataComponentMap;
        crafttweaker$setComponents(arg0: $DataComponentMap_): void;
    }
}
