import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Collection } from "@package/java/util";

declare module "@package/hellfirepvp/observerlib/api/block" {
    export class $BlockChangeSet$StateChange {
    }
    export interface $BlockChangeSet$StateChange {
        getAbsolutePosition(): $BlockPos;
        getNewState(): $BlockState;
        getOldState(): $BlockState;
        getRelativePosition(): $BlockPos;
        get absolutePosition(): $BlockPos;
        get newState(): $BlockState;
        get oldState(): $BlockState;
        get relativePosition(): $BlockPos;
    }
    export class $BlockChangeSet {
    }
    export interface $BlockChangeSet {
        getChanges(): $Collection<$BlockChangeSet$StateChange>;
        isEmpty(): boolean;
        hasChange(arg0: $BlockPos_): boolean;
        get changes(): $Collection<$BlockChangeSet$StateChange>;
        get empty(): boolean;
    }
}
