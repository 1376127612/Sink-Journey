import { $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Inventory } from "@package/com/denfop/inventory";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Player, $Inventory as $Inventory$1 } from "@package/net/minecraft/world/entity/player";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";

declare module "@package/com/denfop/containermenu" {
    export class $ContainerMenuBase<T extends $CustomWorldContainer> extends $AbstractContainerMenu {
        getInventory(): $Inventory$1;
        getSlots(): $List<$SlotInvSlot>;
        getPlayer(): $Player;
        findClassSlot(arg0: $Class<$Inventory>): $SlotInvSlot;
        findClassSlots(arg0: $Class<$Inventory>): $List<$SlotInvSlot>;
        getSlotFromInventory(arg0: $Container, arg1: number): $Slot;
        checkItemEqualityStrict(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        base: T;
        player: $Player;
        constructor(arg0: T, arg1: $Player);
        get inventory(): $Inventory$1;
    }
    export class $SlotInvSlot extends $Slot {
        setDragType(arg0: number): void;
        getJeiY(): number;
        getJeiX(): number;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        backgroundPair: $Pair<$ResourceLocation, $ResourceLocation>;
        inventory: $Inventory;
        constructor(arg0: $Inventory, arg1: number, arg2: number, arg3: number);
        set dragType(value: number);
        get jeiY(): number;
        get jeiX(): number;
    }
}
