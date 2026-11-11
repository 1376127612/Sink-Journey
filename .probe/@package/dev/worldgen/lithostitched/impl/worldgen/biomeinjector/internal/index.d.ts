import { $DensityFunctionWrapper } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Climate$TargetPoint_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $HashMap, $Map_ } from "@package/java/util";
import { $BiomeInjector$ClimateParameter_ } from "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector";
import { $DensityFunction_, $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";
import { $InclusiveRange_ } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/internal" {
    export class $ParameterMap {
        matches(arg0: $DensityFunction$FunctionContext, arg1: $Climate$TargetPoint_, arg2: $HashMap<$DensityFunction_, number>, arg3: $ResourceKey_<$Region>): boolean;
        mapAll(arg0: $DensityFunctionWrapper): void;
        static CODEC: $MapCodec<$ParameterMap>;
        constructor(arg0: $Map_<$Either<$BiomeInjector$ClimateParameter_, $DensityFunction_>, $InclusiveRange_<number>>, arg1: ($ResourceKey_<$Region>) | undefined);
    }
}
