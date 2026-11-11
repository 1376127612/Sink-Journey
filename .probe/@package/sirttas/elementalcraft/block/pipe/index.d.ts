import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AbstractECBlockEntity } from "@package/sirttas/elementalcraft/block/entity";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IElementTransferer } from "@package/sirttas/elementalcraft/api/element/transfer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $PipeUpgrade } from "@package/sirttas/elementalcraft/block/pipe/upgrade";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as upgrade from "@package/sirttas/elementalcraft/block/pipe/upgrade";

declare module "@package/sirttas/elementalcraft/block/pipe" {
    export class $ElementPipeBlockEntity extends $AbstractECBlockEntity {
        getConnection(arg0: $Direction_): $ConnectionType;
        getShape(arg0: $Direction_ | null): $VoxelShape;
        getShape(): $VoxelShape;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        copyTo(arg0: $ElementPipeBlockEntity): void;
        activatePipe(arg0: $Player | null, arg1: $Direction_): $ItemInteractionResult;
        getCoverState(): $BlockState;
        getMaxTransferAmount(): number;
        getUpgrades(): $Map<$Direction, $PipeUpgrade>;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ElementPipeBlockEntity): void;
        getConnectionMessage(arg0: $Direction_): $Component;
        isCovered(): boolean;
        setCover(arg0: $Player, arg1: $InteractionHand_): $ItemInteractionResult;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getTransferer(): $IElementTransferer;
        getUpgrade(arg0: $Direction_): $PipeUpgrade;
        setUpgrade(arg0: $Direction_, arg1: $PipeUpgrade): void;
        static commonTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ElementPipeBlockEntity): void;
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
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get coverState(): $BlockState;
        get maxTransferAmount(): number;
        get upgrades(): $Map<$Direction, $PipeUpgrade>;
        get covered(): boolean;
        get transferer(): $IElementTransferer;
    }
    export class $ConnectionType extends $Enum<$ConnectionType> {
        getName(): string;
        static values(): $ConnectionType[];
        static valueOf(arg0: string): $ConnectionType;
        getDisplayName(): $Component;
        isConnected(): boolean;
        static byName(arg0: string): $ConnectionType;
        static CONNECT: $ConnectionType;
        static INSERT: $ConnectionType;
        static DISCONNECT: $ConnectionType;
        static NONE: $ConnectionType;
        static EXTRACT: $ConnectionType;
        get displayName(): $Component;
        get connected(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "none" | "connect" | "insert" | "extract" | "disconnect";
}
