import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/inventory" {
    export class $IInventorySlot {
    }
    export interface $IInventorySlot extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        insertItem(arg0: $ItemStack_, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        createContainerSlot(): $Slot;
        extractItem(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        isItemValid(arg0: $ItemStack_): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setStackSize(arg0: number, arg1: $Action_): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        isEmpty(): boolean;
        getCount(): number;
        getStack(): $ItemStack;
        setEmpty(): void;
        getLimit(arg0: $ItemStack_): number;
        setStack(arg0: $ItemStack_): void;
        growStack(arg0: number, arg1: $Action_): number;
        get count(): number;
    }
    export class $ISidedItemHandler {
    }
    export interface $ISidedItemHandler extends $IItemHandlerModifiable {
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getInventorySideFor(): $Direction;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        getSlots(arg0: $Direction_): number;
        get inventorySideFor(): $Direction;
    }
    export class $IMekanismInventory {
    }
    export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getSlots(arg0: $Direction_): number;
        hasInventory(): boolean;
        isInventoryEmpty(arg0: $Direction_): boolean;
        isInventoryEmpty(): boolean;
        getInventorySlots(arg0: $Direction_): $List<$IInventorySlot>;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
    }
}
