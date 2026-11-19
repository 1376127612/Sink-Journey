import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerListener, $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $TriFunction_ } from "@package/hellfirepvp/astralsorcery/common/util";

declare module "@package/hellfirepvp/astralsorcery/common/container/base" {
    export class $ContainerTileEntity<T extends $BlockEntity> extends $AbstractContainerMenu {
        getPlayerInv(): $Inventory;
        getTile(): T;
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
        get playerInv(): $Inventory;
        get tile(): T;
    }
    export class $PlayerInventorySlots {
    }
    export interface $PlayerInventorySlots {
        addDefaultPlayerSlots(arg0: number, arg1: number, arg2: $TriFunction_<number, number, number, $Slot>): void;
        addDefaultPlayerSlots(arg0: $Inventory, arg1: number, arg2: number): void;
        self(): $AbstractContainerMenu;
    }
}
