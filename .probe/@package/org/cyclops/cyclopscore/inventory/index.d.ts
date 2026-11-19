import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $INBTSerializable } from "@package/org/cyclops/cyclopscore/persist/nbt";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate_ } from "@package/java/util/function";
import { $WorldlyContainer, $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $IDirtyMarkListener_ } from "@package/org/cyclops/cyclopscore/persist";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as container from "@package/org/cyclops/cyclopscore/inventory/container";

declare module "@package/org/cyclops/cyclopscore/inventory" {
    export class $INBTInventory {
    }
    export interface $INBTInventory extends $Container, $INBTSerializable {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        get empty(): boolean;
    }
    export class $IValueNotifier {
    }
    export interface $IValueNotifier {
        getValueIds(): $Set<number>;
        getHolderLookupProvider(): $HolderLookup$Provider;
        getValue(arg0: number): $CompoundTag;
        setValue(arg0: number, arg1: $CompoundTag_): void;
        get valueIds(): $Set<number>;
        get holderLookupProvider(): $HolderLookup$Provider;
    }
    export class $IValueNotifiable {
    }
    export interface $IValueNotifiable {
        getValueNotifiableType(): $MenuType<never>;
        onUpdate(arg0: number, arg1: $CompoundTag_): void;
        get valueNotifiableType(): $MenuType<never>;
    }
    /**
     * @deprecated
     */
    export class $SimpleInventory implements $INBTInventory, $WorldlyContainer {
        getItemHandler(): $IItemHandler;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getSlotsForFace(arg0: $Direction_): number[];
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_ | null): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): void;
        getItemStacks(): $ItemStack[];
        addDirtyMarkListener(arg0: $IDirtyMarkListener_): void;
        removeDirtyMarkListener(arg0: $IDirtyMarkListener_): void;
        getItemHandlerSided(arg0: $Direction_): $IItemHandler;
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getState(): number;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getMaxStackSize(): number;
        clearContent(): void;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): void;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        clear(): void;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getHeight(): number;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        asContainer(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        static CODEC: $Codec<$SimpleInventory>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SimpleInventory>;
        constructor(arg0: number, arg1: number, arg2: $List_<$ItemStack_>);
        constructor(arg0: number, arg1: number);
        constructor();
        get itemHandler(): $IItemHandler;
        get containerSize(): number;
        get itemStacks(): $ItemStack[];
        get state(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get height(): number;
        get width(): number;
        get allItems(): $List<$ItemStack>;
    }
}
