import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Collection } from "@package/java/util";

declare module "@package/hellfirepvp/observerlib/api/block" {
    export class $BlockChangeSet$StateChange {
    }
    export interface $BlockChangeSet$StateChange {
        getRelativePosition(): $BlockPos;
        getNewState(): $BlockState;
        getAbsolutePosition(): $BlockPos;
        getOldState(): $BlockState;
        get relativePosition(): $BlockPos;
        get newState(): $BlockState;
        get absolutePosition(): $BlockPos;
        get oldState(): $BlockState;
    }
    export class $BlockChangeSet {
    }
    export interface $BlockChangeSet {
        isEmpty(): boolean;
        getChanges(): $Collection<$BlockChangeSet$StateChange>;
        hasChange(arg0: $BlockPos_): boolean;
        get empty(): boolean;
        get changes(): $Collection<$BlockChangeSet$StateChange>;
    }
}
