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
        bypassFilters(arg0: $Consumer_<$FilteredInventoryView>): void;
        canExtractItem(arg0: number, arg1: number): boolean;
    }
    export class $InventoryView implements $IItemHandlerModifiable, $Iterable<$ItemStack> {
        getSize(): number;
        iterator(): $Iterator<$ItemStack>;
        getStackInSlot(arg0: number): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        clearInventory(): void;
        getInventoryAccess(arg0: $Direction_ | null): $InventoryView;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        setChanged(): void;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        [Symbol.iterator](): Iterator<$ItemStack>
        get size(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $InventoryStackList implements $Iterable<$ItemStack> {
        iterator(): $Iterator<$ItemStack>;
        static create(): $InventoryStackList;
        getStackInSlot(arg0: number): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        static CODEC: $Codec<$InventoryStackList>;
        [Symbol.iterator](): Iterator<$ItemStack>
    }
}
