import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/hellfirepvp/astralsorcery/common/util/inventory" {
    export class $FilteredInventoryView extends $InventoryView {
        canInsertItem(arg0: number, arg1: $ItemStack_): boolean;
        canExtractItem(arg0: number, arg1: number): boolean;
        bypassFilters(arg0: $Consumer_<$FilteredInventoryView>): void;
    }
    export class $InventoryView implements $IItemHandlerModifiable, $Iterable<$ItemStack> {
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        clearInventory(): void;
        getInventoryAccess(arg0: $Direction_ | null): $InventoryView;
        getSize(): number;
        iterator(): $Iterator<$ItemStack>;
        getSlots(): number;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        getHeight(): number;
        getWidth(): number;
        setChanged(): void;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        [Symbol.iterator](): Iterator<$ItemStack>
        get size(): number;
        get empty(): boolean;
        get height(): number;
        get width(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $InventoryStackList implements $Iterable<$ItemStack> {
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        iterator(): $Iterator<$ItemStack>;
        static create(): $InventoryStackList;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        static CODEC: $Codec<$InventoryStackList>;
        [Symbol.iterator](): Iterator<$ItemStack>
    }
}
