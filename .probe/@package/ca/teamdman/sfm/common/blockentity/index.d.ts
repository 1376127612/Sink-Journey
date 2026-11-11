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
        reset(): void;
        getState(): $ManagerBlockEntity$State;
        getProgram(): $Program;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ManagerBlockEntity): void;
        trackRedstonePulseUnprocessed(): void;
        getProgramString(): string;
        getTick(): number;
        clearRedstonePulseQueue(): void;
        getReferencedLabels(): $Set<string>;
        shouldRebuildWarnings(): boolean;
        ensureRebuildWarnings(): void;
        rebuildProgramAndUpdateDisk(): void;
        decrementRebuildWarningsCooldown(): void;
        getProgramStringOrEmptyIfNull(): string;
        incrementRebuildWarningsCooldown(): void;
        getDisk(): $ItemStack;
        setProgram(arg0: string): void;
        sendUpdatePacket(): void;
        setLogLevel(arg0: $Level): void;
        getTickTimes(): $Duration[];
        addProgramHooks(arg0: $IProgramHooks): void;
        getUnprocessedRedstonePulseCount(): number;
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
        static MANAGER_GUI_STATE_NO_DISK: $LocalizationEntry;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $ManagerBlockEntity$State;
        get programString(): string;
        get tick(): number;
        get referencedLabels(): $Set<string>;
        get programStringOrEmptyIfNull(): string;
        get disk(): $ItemStack;
        set logLevel(value: $Level);
        get tickTimes(): $Duration[];
        get unprocessedRedstonePulseCount(): number;
    }
    export class $BufferBlockEntityContents {
        isEmpty(): boolean;
        getCapability<CAP>(arg0: $ResourceType_<never, never, CAP>): $SFMBlockCapabilityResult<CAP>;
        allowInsertion(arg0: $ResourceType_<never, never, never>): boolean;
        getBlockIconType(): $BufferBlock$ContainedResource;
        lastUsedResource: $BufferBlock$ContainedResource;
        tier: $BufferBlockTier;
        constructor(arg0: $BufferBlockTier_);
        get empty(): boolean;
        get blockIconType(): $BufferBlock$ContainedResource;
    }
}
