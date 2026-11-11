import { $Level } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $INBTProvider } from "@package/org/cyclops/cyclopscore/persist/nbt";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $IDirtyMarkListener } from "@package/org/cyclops/cyclopscore/persist";
import { $BlockEntityType_, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/org/cyclops/cyclopscore/blockentity" {
    export class $IBlockEntityDelayedTickable {
    }
    export interface $IBlockEntityDelayedTickable {
        reduceUpdateBackoff(): void;
        sendImmediateUpdate(): void;
        sendUpdate(): void;
        getUpdateBackoff(): number;
        unsetSendUpdate(): void;
        setUpdateBackoff(arg0: number): void;
        shouldSendUpdate(): boolean;
        getUpdateBackoffTicks(): number;
        get updateBackoffTicks(): number;
    }
    /**
     * @deprecated
     */
    export class $CyclopsBlockEntity extends $CyclopsBlockEntityCommon {
        onUpdateReceived(): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CyclopsBlockEntityCommon extends $BlockEntity implements $INBTProvider, $IDirtyMarkListener, $IBlockEntityDelayedTickable {
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getRotation(): $Direction;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onDirty(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        sendUpdate(): void;
        canInteractWith(arg0: $Player): boolean;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeToItemStack(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getUpdateBackoff(): number;
        unsetSendUpdate(): void;
        setUpdateBackoff(arg0: number): void;
        shouldSendUpdate(): boolean;
        writeGeneratedFieldsToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readGeneratedFieldsFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getUpdateBackoffTicks(): number;
        reduceUpdateBackoff(): void;
        sendImmediateUpdate(): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get rotation(): $Direction;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get updateBackoffTicks(): number;
    }
}
