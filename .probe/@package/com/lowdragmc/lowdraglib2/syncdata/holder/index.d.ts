import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IManaged } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $RPCSender_, $RPCMethodMeta } from "@package/com/lowdragmc/lowdraglib2/syncdata/rpc";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Object } from "@package/java/lang";
import { $BitSet } from "@package/java/util";
import { $IAsyncLogic } from "@package/com/lowdragmc/lowdraglib2/async";
import { $IManagedStorage } from "@package/com/lowdragmc/lowdraglib2/syncdata/storage";
export * as blockentity from "@package/com/lowdragmc/lowdraglib2/syncdata/holder/blockentity";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/holder" {
    export class $IPersistManagedHolder {
    }
    export interface $IPersistManagedHolder extends $IManagedHolder {
        loadCustomPersistedData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        saveCustomPersistedData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: boolean): void;
        saveManagedPersistentData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: boolean): void;
        loadManagedPersistentData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $IRPCManagedHolder {
    }
    export interface $IRPCManagedHolder extends $IManagedHolder {
        createRPCPacket(arg0: number[]): $CustomPacketPayload;
        getRPCMethod(arg0: $IManaged, arg1: string): $RPCMethodMeta;
        parseArgs2Bytes(arg0: $IManaged, arg1: string, ...arg2: $Object[]): number[];
        handleRPCPacket(arg0: $RPCSender_, arg1: number[]): void;
        rpcToPlayer(arg0: $IManaged, arg1: $ServerPlayer, arg2: string, ...arg3: $Object[]): void;
        rpcToTracking(arg0: $IManaged, arg1: string, ...arg2: $Object[]): void;
        rpcToServer(arg0: $IManaged, arg1: string, ...arg2: $Object[]): void;
    }
    export class $ISyncMangedHolder {
    }
    export interface $ISyncMangedHolder extends $IManagedHolder, $IAsyncLogic {
        writeCustomSyncData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        detachAsyncLogic(): void;
        attachAsyncLogic(): void;
        serializeInitialData(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeInitialData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getSyncTag(): string;
        createSyncPacket(arg0: $BitSet, arg1: number[], arg2: $CompoundTag_): $CustomPacketPayload;
        readCustomSyncData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        isAsyncValid(): boolean;
        passivelySync(): void;
        useAsyncThread(): boolean;
        handleSyncPacket(arg0: $RegistryAccess, arg1: $BitSet, arg2: number[], arg3: $CompoundTag_): void;
        sync(arg0: boolean): void;
        asyncTick(arg0: number): void;
        get syncTag(): string;
        get asyncValid(): boolean;
    }
    export class $IManagedHolder {
    }
    export interface $IManagedHolder {
        getRootStorage(): $IManagedStorage;
        getTrackingPos(): $ChunkPos;
        getServerLevel(): $ServerLevel;
        get rootStorage(): $IManagedStorage;
        get trackingPos(): $ChunkPos;
        get serverLevel(): $ServerLevel;
    }
}
