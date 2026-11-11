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
        isEmpty(): boolean;
        getCount(): number;
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        setEmpty(): void;
        getLimit(arg0: $ItemStack_): number;
        isItemValid(arg0: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        insertItem(arg0: $ItemStack_, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        createContainerSlot(): $Slot;
        setStackSize(arg0: number, arg1: $Action_): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        growStack(arg0: number, arg1: $Action_): number;
        get count(): number;
    }
    export class $ISidedItemHandler {
    }
    export interface $ISidedItemHandler extends $IItemHandlerModifiable {
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlotLimit(arg0: number): number;
        getSlots(arg0: $Direction_): number;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getInventorySideFor(): $Direction;
        get inventorySideFor(): $Direction;
    }
    export class $IMekanismInventory {
    }
    export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlots(arg0: $Direction_): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getInventorySlots(arg0: $Direction_): $List<$IInventorySlot>;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        isInventoryEmpty(arg0: $Direction_): boolean;
        isInventoryEmpty(): boolean;
        hasInventory(): boolean;
    }
}
