import { $ContainerTileEntity, $PlayerInventorySlots } from "@package/hellfirepvp/astralsorcery/common/container/base";
import { $DefaultQuickMoveTransfer } from "@package/hellfirepvp/astralsorcery/common/container/transfer";
import { $NonNullList } from "@package/net/minecraft/core";
import { $TileAltar } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $MenuTypeRegistryObject, $MenuTypeRegistryObject_ } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot, $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Map } from "@package/java/util";
import { $TriFunction_ } from "@package/hellfirepvp/astralsorcery/common/util";
export * as base from "@package/hellfirepvp/astralsorcery/common/container/base";
export * as transfer from "@package/hellfirepvp/astralsorcery/common/container/transfer";

declare module "@package/hellfirepvp/astralsorcery/common/container" {
    export class $ContainerAltar$ClientProvider {
    }
    export interface $ContainerAltar$ClientProvider {
        createContainer(arg0: $MenuType_<$ContainerAltar>, arg1: $TileAltar, arg2: $Inventory, arg3: number, arg4: $RegistryFriendlyByteBuf): $ContainerAltar;
    }
    /**
     * Values that may be interpreted as {@link $ContainerAltar$ClientProvider}.
     */
    export type $ContainerAltar$ClientProvider_ = ((arg0: $MenuType<$ContainerAltar>, arg1: $TileAltar, arg2: $Inventory, arg3: number, arg4: $RegistryFriendlyByteBuf) => $ContainerAltar);
    export class $ContainerAltar extends $ContainerTileEntity<$TileAltar> implements $PlayerInventorySlots, $DefaultQuickMoveTransfer {
        customTransfer(arg0: $ItemStack_, arg1: number): ($ItemStack) | undefined;
        writeClientData(arg0: $RegistryFriendlyByteBuf): void;
        addDefaultPlayerSlots(arg0: $Inventory, arg1: number, arg2: number): void;
        addDefaultPlayerSlots(arg0: number, arg1: number, arg2: $TriFunction_<number, number, number, $Slot>): void;
        defaultQuickMoveStack(arg0: $Player, arg1: number): $ItemStack;
        canQuickTransferItemToSlot(arg0: $ItemStack_, arg1: $Slot, arg2: boolean): boolean;
        defaultMoveItemStackTo(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
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
    }
    export class $ContainerAltar$Type {
        getMenuType(): $MenuTypeRegistryObject<$ContainerAltar>;
        provideClientContainer(arg0: $TileAltar, arg1: $Inventory, arg2: number, arg3: $RegistryFriendlyByteBuf): $ContainerAltar;
        provideServerContainer(arg0: number, arg1: $Inventory, arg2: $TileAltar): $ContainerAltar;
        constructor(arg0: $MenuTypeRegistryObject_<$ContainerAltar>, arg1: $ContainerAltar$Provider_, arg2: $ContainerAltar$ClientProvider_);
        get menuType(): $MenuTypeRegistryObject<$ContainerAltar>;
    }
    export class $ContainerAltar$Provider {
    }
    export interface $ContainerAltar$Provider {
        createContainer(arg0: $MenuType_<$ContainerAltar>, arg1: $TileAltar, arg2: $Inventory, arg3: number): $ContainerAltar;
    }
    /**
     * Values that may be interpreted as {@link $ContainerAltar$Provider}.
     */
    export type $ContainerAltar$Provider_ = ((arg0: $MenuType<$ContainerAltar>, arg1: $TileAltar, arg2: $Inventory, arg3: number) => $ContainerAltar);
}
