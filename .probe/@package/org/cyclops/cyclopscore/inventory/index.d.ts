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
        getValue(arg0: number): $CompoundTag;
        setValue(arg0: number, arg1: $CompoundTag_): void;
        getHolderLookupProvider(): $HolderLookup$Provider;
        getValueIds(): $Set<number>;
        get holderLookupProvider(): $HolderLookup$Provider;
        get valueIds(): $Set<number>;
    }
    export class $IValueNotifiable {
    }
    export interface $IValueNotifiable {
        onUpdate(arg0: number, arg1: $CompoundTag_): void;
        getValueNotifiableType(): $MenuType<never>;
        get valueNotifiableType(): $MenuType<never>;
    }
    /**
     * @deprecated
     */
    export class $SimpleInventory implements $INBTInventory, $WorldlyContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getState(): number;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): void;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItemHandler(): $IItemHandler;
        fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getSlotsForFace(arg0: $Direction_): number[];
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_ | null): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getItemStacks(): $ItemStack[];
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): void;
        removeDirtyMarkListener(arg0: $IDirtyMarkListener_): void;
        addDirtyMarkListener(arg0: $IDirtyMarkListener_): void;
        getItemHandlerSided(arg0: $Direction_): $IItemHandler;
        getMaxStackSize(arg0: $ItemStack_): number;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getWidth(): number;
        getHeight(): number;
        asContainer(): $Container;
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        static CODEC: $Codec<$SimpleInventory>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SimpleInventory>;
        constructor(arg0: number, arg1: number, arg2: $List_<$ItemStack_>);
        constructor(arg0: number, arg1: number);
        constructor();
        get state(): number;
        get itemHandler(): $IItemHandler;
        get containerSize(): number;
        get itemStacks(): $ItemStack[];
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
    }
}
