import { $ModularUIContainerMenu } from "@package/com/lowdragmc/lowdraglib2/gui/holder";
import { $MenuProvider, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";

declare module "@package/com/lowdragmc/lowdraglib2/gui/factory" {
    export class $BlockUIMenuType$BlockUIHolder implements $MenuProvider, $IContainerUIHolder {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $ModularUIContainerMenu;
        getDisplayName(): $Component;
        createUI(arg0: $Player): $ModularUI;
        isStillValid(arg0: $Player): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        blockState: $BlockState;
        pos: $BlockPos;
        blockUI: $BlockUIMenuType$BlockUI;
        player: $Player;
        constructor(arg0: $BlockUIMenuType$BlockUI_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_);
        get displayName(): $Component;
    }
    export class $HeldItemUIMenuType$HeldItemUI {
    }
    export interface $HeldItemUIMenuType$HeldItemUI {
        stillValid(arg0: $HeldItemUIMenuType$HeldItemUIHolder): boolean;
        createUIHolder(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_): $HeldItemUIMenuType$HeldItemUIHolder;
        getUIDisplayName(arg0: $HeldItemUIMenuType$HeldItemUIHolder): $Component;
        createUI(arg0: $HeldItemUIMenuType$HeldItemUIHolder): $ModularUI;
    }
    /**
     * Values that may be interpreted as {@link $HeldItemUIMenuType$HeldItemUI}.
     */
    export type $HeldItemUIMenuType$HeldItemUI_ = ((arg0: $HeldItemUIMenuType$HeldItemUIHolder) => $ModularUI);
    export class $BlockUIMenuType$BlockUI {
    }
    export interface $BlockUIMenuType$BlockUI {
        stillValid(arg0: $BlockUIMenuType$BlockUIHolder): boolean;
        createUIHolder(arg0: $Player, arg1: $BlockPos_, arg2: $BlockState_): $BlockUIMenuType$BlockUIHolder;
        getUIDisplayName(arg0: $BlockUIMenuType$BlockUIHolder): $Component;
        createUI(arg0: $BlockUIMenuType$BlockUIHolder): $ModularUI;
    }
    /**
     * Values that may be interpreted as {@link $BlockUIMenuType$BlockUI}.
     */
    export type $BlockUIMenuType$BlockUI_ = ((arg0: $BlockUIMenuType$BlockUIHolder) => $ModularUI);
    export class $IContainerUIHolder {
    }
    export interface $IContainerUIHolder {
        createUI(arg0: $Player): $ModularUI;
        isStillValid(arg0: $Player): boolean;
    }
    export class $HeldItemUIMenuType$HeldItemUIHolder implements $MenuProvider, $IContainerUIHolder {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $ModularUIContainerMenu;
        getDisplayName(): $Component;
        createUI(arg0: $Player): $ModularUI;
        isStillValid(arg0: $Player): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        itemStack: $ItemStack;
        heldItemUI: $HeldItemUIMenuType$HeldItemUI;
        player: $Player;
        hand: $InteractionHand;
        constructor(arg0: $HeldItemUIMenuType$HeldItemUI_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_);
        get displayName(): $Component;
    }
}
