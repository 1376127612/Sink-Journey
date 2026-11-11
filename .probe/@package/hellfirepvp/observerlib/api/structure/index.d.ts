import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/hellfirepvp/observerlib/api/structure" {
    export class $MatchableStructure {
    }
    export interface $MatchableStructure extends $Structure {
        matches(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        matchesSlice(arg0: $BlockGetter, arg1: $BlockPos_, arg2: number): boolean;
        matchesSingleBlock(arg0: $BlockGetter | null, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity | null): boolean;
        matchesSingleBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
    }
}
