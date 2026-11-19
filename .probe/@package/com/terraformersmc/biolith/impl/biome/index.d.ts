import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $BiolithFittestNodes } from "@package/com/terraformersmc/biolith/api/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Climate$ParameterList, $Climate$TargetPoint_, $Climate$DistanceMetric_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/terraformersmc/biolith/impl/biome" {
    export class $InterfaceSearchTree<T> {
    }
    export interface $InterfaceSearchTree<T> {
        biolith$searchTreeGet(point: $Climate$TargetPoint_, distanceFunction: $Climate$DistanceMetric_<T>): $BiolithFittestNodes<T>;
    }
    export class $InterfaceBiomeSource {
        static DIMENSION_TYPE_UNDEFINED: $ResourceKey<$DimensionType>;
    }
    export interface $InterfaceBiomeSource {
        biolith$getBiomeEntries(): $Climate$ParameterList<$Holder<$Biome>>;
        biolith$getDimensionType(): $ResourceKey<$DimensionType>;
        biolith$setDimensionType(arg0: $ResourceKey_<$DimensionType>): void;
        biolith$setDimensionType(arg0: $Holder_<$DimensionType>): void;
        biolith$getBypass(): boolean;
        biolith$setBypass(value: boolean): void;
    }
}
