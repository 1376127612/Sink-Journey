import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Consumer } from "@package/java/util/function";
import { $IRPCManagedHolder, $ISyncMangedHolder, $IManagedHolder } from "@package/com/lowdragmc/lowdraglib2/syncdata/holder";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $IManaged } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $PacketRPCBlockEntity } from "@package/com/lowdragmc/lowdraglib2/networking/both";
import { $SPacketAutoSyncBlockEntity } from "@package/com/lowdragmc/lowdraglib2/networking/s2c";
import { $Object } from "@package/java/lang";
import { $BitSet } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/holder/blockentity" {
    export class $ISyncBlockEntity {
    }
    export interface $ISyncBlockEntity extends $ISyncMangedHolder, $IBlockEntityManagedHolder {
        createSyncPacket(arg0: $BitSet, arg1: number[], arg2: $CompoundTag_): $SPacketAutoSyncBlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $ISyncBlockEntity}.
     */
    export type $ISyncBlockEntity_ = (() => void);
    export class $IRPCBlockEntity {
    }
    export interface $IRPCBlockEntity extends $IRPCManagedHolder, $IBlockEntityManagedHolder {
        createRPCPacket(arg0: number[]): $PacketRPCBlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $IRPCBlockEntity}.
     */
    export type $IRPCBlockEntity_ = (() => void);
    export class $IBlockEntityManagedHolder {
    }
    export interface $IBlockEntityManagedHolder extends $IManagedHolder {
        getTrackingPos(): $ChunkPos;
        getServerLevel(): $ServerLevel;
        getSelf(): $BlockEntity;
        get trackingPos(): $ChunkPos;
        get serverLevel(): $ServerLevel;
        get self(): $BlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $IBlockEntityManagedHolder}.
     */
    export type $IBlockEntityManagedHolder_ = (() => void);
    export class $IBlockEntityManaged {
    }
    export interface $IBlockEntityManaged extends $IManaged {
        scheduleRenderUpdate(): void;
        onRerenderTriggered(arg0: $ManagedKey, arg1: $Object): $Consumer<$Object>;
        asBlockEntity(): $BlockEntity;
        notifyPersistence(): void;
    }
    /**
     * Values that may be interpreted as {@link $IBlockEntityManaged}.
     */
    export type $IBlockEntityManaged_ = (() => void);
}
