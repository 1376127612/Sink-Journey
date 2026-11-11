import { $Band } from "@package/dev/worldgen/lithostitched/api/worldgen/bandlands";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $List_, $List } from "@package/java/util";
import { $SurfaceSystem } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/impl/worldgen/bandlands" {
    export class $Bandlands {
        base(): $BlockState;
        fillBands(arg0: $RandomSource): void;
        getBand(arg0: $SurfaceSystem, arg1: number, arg2: number, arg3: number): $BlockState;
        bands(): $List<$Band>;
        static CODEC: $Codec<$Bandlands>;
        constructor(arg0: $BlockState_, arg1: $List_<$Band>);
    }
    /**
     * Values that may be interpreted as {@link $Bandlands}.
     */
    export type $Bandlands_ = RegistryTypes.LithostitchedBandlands;
    export interface $Bandlands extends RegistryMarked<RegistryTypes.LithostitchedBandlandsTag, RegistryTypes.LithostitchedBandlands> {}
}
