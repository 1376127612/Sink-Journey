import { $NonNullList } from "@package/net/minecraft/core";
import { $BasicRecipe } from "@package/com/nred/nuclearcraft/recipe";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot, $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $Map } from "@package/java/util";
import { $ProcessorUpdatePacket } from "@package/com/nred/nuclearcraft/payload/processor";
import { $ProcessorMenuInfo } from "@package/com/nred/nuclearcraft/block_entity/processor/info";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $InfoTileMenu } from "@package/com/nred/nuclearcraft/menu";

declare module "@package/com/nred/nuclearcraft/menu/processor" {
    export class $ProcessorMenu<TILE extends $BlockEntity, PACKET extends $ProcessorUpdatePacket, INFO extends $ProcessorMenuInfo<TILE, PACKET, INFO, RECIPE>, RECIPE extends $BasicRecipe> extends $InfoTileMenu<TILE, PACKET, INFO> {
        transferPlayerStack(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_): $ItemStack;
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
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: TILE);
    }
}
