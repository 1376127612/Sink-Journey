import { $Level } from "@package/net/minecraft/world/level";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/mysticmods/roots/api/recipe/crafting" {
    export class $RootsTileCrafting<H extends $IItemHandler, T extends $BlockEntity> extends $RootsCrafting<H> implements $IRootsBlockEntityCrafting<H, T> {
        getBlockEntity(): T;
        constructor(arg0: H, arg1: T, arg2: $Player | null);
        get blockEntity(): T;
    }
    export class $IRootsCrafting<H extends $IItemHandler> {
        static NULL_HANDLER: $ItemStackHandler;
    }
    export interface $IRootsCrafting<H extends $IItemHandler> extends $RecipeInput {
        getPlayerInventory(): $Inventory;
        size(): number;
        getHandler(): H;
        getItem(arg0: number): $ItemStack;
        getLevel(): $Level;
        getPlayer(): $Player;
        get playerInventory(): $Inventory;
        get handler(): H;
        get level(): $Level;
        get player(): $Player;
    }
    export class $IRootsBlockEntityCrafting<H extends $IItemHandler, T extends $BlockEntity> {
    }
    export interface $IRootsBlockEntityCrafting<H extends $IItemHandler, T extends $BlockEntity> extends $IRootsCrafting<H> {
        getBlockEntity(): T;
        get blockEntity(): T;
    }
    export class $RootsCrafting<H extends $IItemHandler> implements $IRootsCrafting<H> {
        getHandler(): H;
        getPlayer(): $Player;
        getPlayerInventory(): $Inventory;
        size(): number;
        getItem(arg0: number): $ItemStack;
        getLevel(): $Level;
        isEmpty(): boolean;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: H, arg1: $Player | null);
        get handler(): H;
        get player(): $Player;
        get playerInventory(): $Inventory;
        get level(): $Level;
        get empty(): boolean;
    }
}
