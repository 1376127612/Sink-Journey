import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $Object } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkContext {
        level(): $Level;
        blockEntity(): $DisplayLinkBlockEntity;
        getTargetPos(): $BlockPos;
        getTargetBlockEntity(): $BlockEntity;
        getSourceBlockEntity(): $BlockEntity;
        sourceConfig(): $CompoundTag;
        getSourcePos(): $BlockPos;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
        get targetPos(): $BlockPos;
        get targetBlockEntity(): $BlockEntity;
        get sourceBlockEntity(): $BlockEntity;
        get sourcePos(): $BlockPos;
    }
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity {
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        onNoLongerPowered(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getDirection(): $Direction;
        tickSource(): void;
        getSourcePosition(): $BlockPos;
        setSourceConfig(arg0: $CompoundTag_): void;
        getTargetPosition(): $BlockPos;
        updateGatheredData(): void;
        getSourceConfig(): $CompoundTag;
        blockState: $BlockState;
        refreshTicks: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        activeSource: $DisplaySource;
        worldPosition: $BlockPos;
        targetLine: number;
        static LOGGER: $Logger;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get direction(): $Direction;
        get sourcePosition(): $BlockPos;
        get targetPosition(): $BlockPos;
    }
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        getGlow(arg0: number): number;
        pulse(): void;
        getBulbOffset(arg0: $BlockState_): $Vec3;
        getBulbFacing(arg0: $BlockState_): $Direction;
        sendPulseNextSync(): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
