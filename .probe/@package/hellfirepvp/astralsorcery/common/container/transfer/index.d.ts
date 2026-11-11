import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/hellfirepvp/astralsorcery/common/container/transfer" {
    export class $DefaultQuickMoveTransfer {
    }
    export interface $DefaultQuickMoveTransfer {
        self(): $AbstractContainerMenu;
        customTransfer(arg0: $ItemStack_, arg1: number): ($ItemStack) | undefined;
        defaultQuickMoveStack(arg0: $Player, arg1: number): $ItemStack;
        canQuickTransferItemToSlot(arg0: $ItemStack_, arg1: $Slot, arg2: boolean): boolean;
        defaultMoveItemStackTo(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
    }
}
