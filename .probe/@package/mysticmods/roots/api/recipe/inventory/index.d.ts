import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $List_, $List } from "@package/java/util";

declare module "@package/mysticmods/roots/api/recipe/inventory" {
    export class $RecipeInventory extends $ItemStackHandler {
        getItems(): $List<$ItemStack>;
        getItemsAndClear(): $List<$ItemStack>;
        insertAll(arg0: $List_<$ItemStack_>): $List<$ItemStack>;
        getItemsCopy(): $List<$ItemStack>;
        insert(arg0: $ItemStack_): $ItemStack;
        isEmpty(): boolean;
        pop(): $ItemStack;
        constructor(arg0: number);
        constructor();
        constructor(arg0: $NonNullList<$ItemStack_>);
        get items(): $List<$ItemStack>;
        get itemsAndClear(): $List<$ItemStack>;
        get itemsCopy(): $List<$ItemStack>;
        get empty(): boolean;
    }
}
