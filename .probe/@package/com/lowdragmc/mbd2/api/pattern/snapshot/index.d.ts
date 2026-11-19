import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LongOpenHashSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IMultiController } from "@package/com/lowdragmc/mbd2/api/machine";
import { $Record } from "@package/java/lang";
import { $BlockPattern } from "@package/com/lowdragmc/mbd2/api/pattern";

declare module "@package/com/lowdragmc/mbd2/api/pattern/snapshot" {
    export class $PatternSnapshot {
        markDirty(arg0: number): void;
        trackedSize(): number;
        pendingSize(): number;
        getTrackedPositions(): $LongOpenHashSet;
        getNbtSensitivePositions(): $LongOpenHashSet;
        contains(arg0: number): boolean;
        getOwner(): $IMultiController;
        getEntry(arg0: $BlockPos_): $SnapshotEntry;
        getVersion(): number;
        getLevel(): $ServerLevel;
        releaseCheckSlot(): void;
        isNbtSensitive(arg0: number): boolean;
        isDirtyForCheck(): boolean;
        isFullyBuilt(): boolean;
        tickCapture(): boolean;
        tryClaimCheckSlot(): boolean;
        markDirtyForCheck(): void;
        getPatternRef(): $BlockPattern;
        tryConsumeDirtyForCheck(): boolean;
        capturedSize(): number;
        isCheckInFlight(): boolean;
        static CAPTURES_PER_TICK: number;
        constructor(arg0: $IMultiController, arg1: $ServerLevel, arg2: $BlockPattern, arg3: $LongOpenHashSet, arg4: $LongOpenHashSet);
        get trackedPositions(): $LongOpenHashSet;
        get nbtSensitivePositions(): $LongOpenHashSet;
        get owner(): $IMultiController;
        get version(): number;
        get level(): $ServerLevel;
        get dirtyForCheck(): boolean;
        get fullyBuilt(): boolean;
        get patternRef(): $BlockPattern;
        get checkInFlight(): boolean;
    }
    export class $SnapshotEntry extends $Record {
        state(): $BlockState;
        beData(): $CompoundTag;
        constructor(state: $BlockState_, beData: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $SnapshotEntry}.
     */
    export type $SnapshotEntry_ = { beData?: $CompoundTag_, state?: $BlockState_,  } | [beData?: $CompoundTag_, state?: $BlockState_, ];
}
