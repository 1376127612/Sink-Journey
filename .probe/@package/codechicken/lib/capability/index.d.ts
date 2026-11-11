import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/codechicken/lib/capability" {
    export class $CapabilityCache {
        clear(): void;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $Direction_, arg2: C): T;
        getCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
        setLevelPos(arg0: $ServerLevel, arg1: $BlockPos_): void;
        getCapabilityOr<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_, arg2: T): T;
        constructor();
        constructor(arg0: $ServerLevel, arg1: $BlockPos_);
    }
}
