import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $NCPacket } from "@package/com/nred/nuclearcraft/payload";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Map } from "@package/java/util";
import { $BlockEntityMenuInfo } from "@package/com/nred/nuclearcraft/handler";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as processor from "@package/com/nred/nuclearcraft/menu/processor";

declare module "@package/com/nred/nuclearcraft/menu" {
    export class $InfoTileMenu<TILE extends $BlockEntity, PACKET extends $NCPacket, INFO extends $BlockEntityMenuInfo<TILE>> extends $NCMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Inventory;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        tile: $BlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        info: INFO;
    }
    export class $NCMenu extends $AbstractContainerMenu {
        transferPlayerStackDefault(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_): $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Inventory;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        tile: $BlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $BlockEntity);
    }
    export class $MenuFunction<TILE extends $BlockEntity> {
    }
    export interface $MenuFunction<TILE extends $BlockEntity> {
        apply(arg0: number, arg1: $Inventory, arg2: TILE): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuFunction}.
     */
    export type $MenuFunction_<TILE> = ((arg0: number, arg1: $Inventory, arg2: TILE) => $AbstractContainerMenu);
}
