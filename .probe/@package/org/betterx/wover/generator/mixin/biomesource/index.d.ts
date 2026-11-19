import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Climate$ParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/org/betterx/wover/generator/mixin/biomesource" {
    export class $MultiNoiseBiomeSourceParameterListAccessor {
    }
    export interface $MultiNoiseBiomeSourceParameterListAccessor {
        wover_getParameters(): $Climate$ParameterList<$Holder<$Biome>>;
        wover_setParameters(arg0: $Climate$ParameterList<$Holder_<$Biome>>): void;
    }
}
