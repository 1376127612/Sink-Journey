import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/me/desht/pneumaticcraft/api/client/pneumatic_helmet" {
    export class $FluidTrackEvent extends $Event implements $ICancellableEvent {
        getFluidHandler(): $IFluidHandler;
        getFluidHandler(arg0: $Direction_): $IFluidHandler;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $BlockEntity);
    }
    export class $InventoryTrackEvent extends $Event implements $ICancellableEvent {
        getTileEntity(): $BlockEntity;
        getInventory(): $IItemHandler;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $BlockEntity);
        get tileEntity(): $BlockEntity;
        get inventory(): $IItemHandler;
    }
    export class $EntityTrackEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        trackingEntity: $Entity;
        constructor(arg0: $Entity);
    }
    export class $BlockTrackEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        te: $BlockEntity;
        world: $Level;
        pos: $BlockPos;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity);
    }
}
