import { $Level as $Level$1, $Level_ } from "@package/net/minecraft/world/level";
import { $Program } from "@package/ca/teamdman/sfml/ast";
import { $SFMBlockCapabilityResult } from "@package/ca/teamdman/sfm/common/capability";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $IProgramHooks } from "@package/ca/teamdman/sfm/common/program";
import { $Set } from "@package/java/util";
import { $Duration } from "@package/java/time";
import { $LockCode } from "@package/net/minecraft/world";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $TranslatableLogger } from "@package/ca/teamdman/sfm/common/logging";
import { $Level } from "@package/org/apache/logging/log4j";
import { $Enum } from "@package/java/lang";
import { $BufferBlock$ContainedResource, $BufferBlockTier, $BufferBlockTier_ } from "@package/ca/teamdman/sfm/common/block";
import { $BlockEntityType, $BaseContainerBlockEntity, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/ca/teamdman/sfm/common/blockentity" {
    export class $ManagerBlockEntity$State extends $Enum<$ManagerBlockEntity$State> {
        static values(): $ManagerBlockEntity$State[];
        static valueOf(arg0: string): $ManagerBlockEntity$State;
        LOC: $LocalizationEntry;
        static NO_DISK: $ManagerBlockEntity$State;
        static RUNNING: $ManagerBlockEntity$State;
        COLOR: $ChatFormatting;
        static INVALID_PROGRAM: $ManagerBlockEntity$State;
        static NO_PROGRAM: $ManagerBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $ManagerBlockEntity$State}.
     */
    export type $ManagerBlockEntity$State_ = "no_program" | "no_disk" | "running" | "invalid_program";
    export class $ManagerBlockEntity extends $BaseContainerBlockEntity {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ManagerBlockEntity): void;
        getTick(): number;
        clearRedstonePulseQueue(): void;
        getReferencedLabels(): $Set<string>;
        ensureRebuildWarnings(): void;
        shouldRebuildWarnings(): boolean;
        getUnprocessedRedstonePulseCount(): number;
        rebuildProgramAndUpdateDisk(): void;
        decrementRebuildWarningsCooldown(): void;
        incrementRebuildWarningsCooldown(): void;
        getProgramStringOrEmptyIfNull(): string;
        getProgramString(): string;
        reset(): void;
        getState(): $ManagerBlockEntity$State;
        getDisk(): $ItemStack;
        setProgram(arg0: string): void;
        getProgram(): $Program;
        sendUpdatePacket(): void;
        setLogLevel(arg0: $Level): void;
        getTickTimes(): $Duration[];
        addProgramHooks(arg0: $IProgramHooks): void;
        trackRedstonePulseUnprocessed(): void;
        invWrapper: $IItemHandler;
        blockState: $BlockState;
        static MANAGER_GUI_STATE_NO_PROGRAM: $LocalizationEntry;
        level: $Level$1;
        logger: $TranslatableLogger;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static TICK_TIME_HISTORY_SIZE: number;
        static PROGRAM_TICK_TIME_MS: $LocalizationEntry;
        static MANAGER_GUI_STATE_RUNNING: $LocalizationEntry;
        remove: boolean;
        static MANAGER_CONTAINER: $LocalizationEntry;
        worldPosition: $BlockPos;
        static LOG_LEVEL_UPDATED: $LocalizationEntry;
        static MANAGER_GUI_STATE_INVALID_PROGRAM: $LocalizationEntry;
        static LOGGER: $Logger;
        lockKey: $LockCode;
        static MANAGER_GUI_STATE_NO_DISK: $LocalizationEntry;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tick(): number;
        get referencedLabels(): $Set<string>;
        get unprocessedRedstonePulseCount(): number;
        get programStringOrEmptyIfNull(): string;
        get programString(): string;
        get state(): $ManagerBlockEntity$State;
        get disk(): $ItemStack;
        set logLevel(value: $Level);
        get tickTimes(): $Duration[];
    }
    export class $BufferBlockEntityContents {
        allowInsertion(arg0: $ResourceType_<never, never, never>): boolean;
        isEmpty(): boolean;
        getBlockIconType(): $BufferBlock$ContainedResource;
        getCapability<CAP>(arg0: $ResourceType_<never, never, CAP>): $SFMBlockCapabilityResult<CAP>;
        lastUsedResource: $BufferBlock$ContainedResource;
        tier: $BufferBlockTier;
        constructor(arg0: $BufferBlockTier_);
        get empty(): boolean;
        get blockIconType(): $BufferBlock$ContainedResource;
    }
}
