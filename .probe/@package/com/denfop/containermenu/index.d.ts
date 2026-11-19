import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Inventory } from "@package/com/denfop/inventory";
import { $BlockEntityInventory, $BlockEntityMultiMachine } from "@package/com/denfop/blockentity/base";
import { $Player, $Inventory as $Inventory$1 } from "@package/net/minecraft/world/entity/player";
import { $List, $Map } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ContainerListener, $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";

declare module "@package/com/denfop/containermenu" {
    export class $ContainerMenuFullInv<T extends $BlockEntityInventory> extends $ContainerMenuBase<T> {
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
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        base: T;
        player: $Player;
        constructor(arg0: $Player, arg1: T, arg2: number, arg3: number);
        constructor(arg0: $Player, arg1: T, arg2: number, arg3: number, arg4: boolean);
        constructor(arg0: T, arg1: $Player);
        constructor(arg0: $Player, arg1: T);
        constructor(arg0: $Player, arg1: T, arg2: number);
    }
    export class $ContainerMenuBase<T extends $CustomWorldContainer> extends $AbstractContainerMenu {
        findClassSlot(arg0: $Class<$Inventory>): $SlotInvSlot;
        findClassSlots(arg0: $Class<$Inventory>): $List<$SlotInvSlot>;
        checkItemEqualityStrict(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getSlotFromInventory(arg0: $Container, arg1: number): $Slot;
        getPlayer(): $Player;
        getSlots(): $List<$SlotInvSlot>;
        getInventory(): $Inventory$1;
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
        containerListeners: $List<$ContainerListener>;
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
    export class $ContainerMenuMultiMachine extends $ContainerMenuFullInv<$BlockEntityMultiMachine> {
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
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        base: $BlockEntityMultiMachine;
        player: $Player;
        constructor(arg0: $Player, arg1: $BlockEntityMultiMachine, arg2: number);
        constructor(arg0: $Player, arg1: $BlockEntityMultiMachine, arg2: number, arg3: boolean);
    }
}
