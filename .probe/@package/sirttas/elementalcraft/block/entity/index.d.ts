import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as crafting from "@package/sirttas/elementalcraft/block/entity/crafting";
export * as properties from "@package/sirttas/elementalcraft/block/entity/properties";

declare module "@package/sirttas/elementalcraft/block/entity" {
    export class $AbstractECBlockEntity extends $BlockEntity {
        isDirty(): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        sendUpdate(): void;
        isPowered(): boolean;
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
        get dirty(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get powered(): boolean;
    }
}
