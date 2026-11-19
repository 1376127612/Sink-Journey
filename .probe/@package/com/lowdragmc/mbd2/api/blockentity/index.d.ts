import { $Level } from "@package/net/minecraft/world/level";
import { $Nameable } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $IPersistManagedHolder } from "@package/com/lowdragmc/lowdraglib2/syncdata/holder";
import { $ISyncBlockEntity, $IRPCBlockEntity } from "@package/com/lowdragmc/lowdraglib2/syncdata/holder/blockentity";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IMachine } from "@package/com/lowdragmc/mbd2/api/machine";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/lowdragmc/mbd2/api/blockentity" {
    export class $IMachineBlockEntity {
        static randomTickOffset(): number;
    }
    export interface $IMachineBlockEntity extends $ISyncBlockEntity, $IRPCBlockEntity, $IPersistManagedHolder, $Nameable {
        loadCustomPersistedData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        saveCustomPersistedData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: boolean): void;
        scheduleRenderUpdate(): void;
        getCustomName(): $Component;
        getOffsetTimer(): number;
        notifyBlockUpdate(): void;
        getMetaMachine(): $IMachine;
        isAsyncValid(): boolean;
        useAsyncThread(): boolean;
        getName(): $Component;
        pos(): $BlockPos;
        self(): $BlockEntity;
        getOffset(): number;
        level(): $Level;
        get customName(): $Component;
        get offsetTimer(): number;
        get metaMachine(): $IMachine;
        get asyncValid(): boolean;
        get name(): $Component;
        get offset(): number;
    }
}
