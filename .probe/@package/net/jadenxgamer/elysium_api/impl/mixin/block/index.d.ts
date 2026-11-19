import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/jadenxgamer/elysium_api/impl/mixin/block" {
    export class $BlockAccessor {
    }
    export interface $BlockAccessor {
        elysium_api$canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockAccessor}.
     */
    export type $BlockAccessor_ = ((arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos) => boolean);
}
