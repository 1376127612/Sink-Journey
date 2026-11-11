import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $TransmissionNodeProvider } from "@package/hellfirepvp/astralsorcery/common/starlight/api/provider";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $UUID_ } from "@package/java/util";
import { $ChangeSubscriber } from "@package/hellfirepvp/observerlib/api";
import { $StoredLumenDisplayTooltip } from "@package/hellfirepvp/astralsorcery/common/util/tooltip";
import { $Products$P1 } from "@package/com/mojang/datafixers";
import { $TransmissionNode } from "@package/hellfirepvp/astralsorcery/common/starlight/api";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ObserverRegistryObject } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/hellfirepvp/astralsorcery/common/tile/base" {
    export class $TileEntityNetwork$Data extends $TileEntityTick$Data {
        markDirty(arg0: boolean): void;
        markForUpdate(arg0: boolean): void;
        needsNetworkSync(): boolean;
        static CODEC: $Codec<$TileEntityNetwork$Data>;
    }
    export class $TileEntityLumenDisplay {
    }
    export interface $TileEntityLumenDisplay {
        self<T extends $BlockEntity>(): T;
        getDisplayComponentIdentifier(): $UUID;
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        get displayComponentIdentifier(): $UUID;
        get displayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
    }
    export class $TileEntitySynchronized<T extends $TileEntitySynchronized$Data> extends $BlockEntity {
        setLight(arg0: $ServerLevel, arg1: number): void;
        getTileData(): T;
        netDataCodec(): $Codec<T>;
        onTileEntityRemove(arg0: $Level_, arg1: $BlockPos_): void;
        markForUpdate(): void;
        dataCodec(): $Codec<T>;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        get tileData(): T;
    }
    export class $TileEntityTick$Data extends $TileEntitySynchronized$Data {
        hasStructure(): boolean;
        getTicksExisted(): number;
        hasSky(): boolean;
        static CODEC: $Codec<$TileEntityTick$Data>;
        get ticksExisted(): number;
    }
    export class $TileEntitySynchronized$Data {
        markDirty(): void;
        markForUpdate(): void;
        constructor();
    }
    export class $TileEntityNetwork<N extends $TransmissionNode, T extends $TileEntityNetwork$Data> extends $TileEntityTick<T> {
        setChanged(arg0: boolean): void;
        markForUpdate(arg0: boolean): void;
        getNetworkNode(): (N) | undefined;
        onNodeCreate(arg0: N): void;
        getNodeProvider(): $DeferredHolder<$TransmissionNodeProvider<never>, $TransmissionNodeProvider<N>>;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        set changed(value: boolean);
        get networkNode(): (N) | undefined;
        get nodeProvider(): $DeferredHolder<$TransmissionNodeProvider<never>, $TransmissionNodeProvider<N>>;
    }
    export class $TileEntityTick<T extends $TileEntityTick$Data> extends $TileEntitySynchronized<T> {
        removeObserver(arg0: $Level_): void;
        clientTick(arg0: $Level_): void;
        hasStructure(): boolean;
        serverTick(arg0: $ServerLevel): void;
        removeBlock(): boolean;
        removeBlock(arg0: $Level_): boolean;
        shouldRemoveStructureObserver(arg0: $BlockState_, arg1: $BlockState_): boolean;
        doesSeeSky(): boolean;
        seesSkyInNoSkyWorlds(): boolean;
        getStructureObserver(): ($ChangeSubscriber<never>) | undefined;
        getRequiredObserver(): $ObserverRegistryObject;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        get structureObserver(): ($ChangeSubscriber<never>) | undefined;
        get requiredObserver(): $ObserverRegistryObject;
    }
    export class $TileDataOwned {
        static ownedFields<T extends $TileDataOwned>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, ($UUID) | undefined>;
    }
    export interface $TileDataOwned {
        self<T extends $TileEntitySynchronized$Data>(): T;
        getOwner(arg0: $MinecraftServer): ($ServerPlayer) | undefined;
        getOwner(arg0: $ServerLevel): ($ServerPlayer) | undefined;
        getOwnerId(): $UUID;
        markDirty(): void;
        markForUpdate(): void;
        isOwner(arg0: $UUID_): boolean;
        isOwner(arg0: $Player): boolean;
        setOwnerId(arg0: $UUID_): void;
        hasOwner(): boolean;
    }
}
