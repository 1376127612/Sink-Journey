import { $DensityFunctionWrapper } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $Level } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Climate$TargetPoint, $Climate$ParameterList, $Biome } from "@package/net/minecraft/world/level/biome";
import { $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $Holder_, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LoadPredicate } from "@package/dev/worldgen/lithostitched/api/predicate";
import { $Enum } from "@package/java/lang";
import { $ParameterMap } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/internal";
import { $DensityFunction } from "@package/net/minecraft/world/level/levelgen";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector" {
    export class $BiomeInjector$InjectorBuilder {
        priority(arg0: number): $BiomeInjector$InjectorBuilder;
        forcePlacement(arg0: $Holder_<$Biome>, arg1: $ParameterBuilder): $BiomeInjector;
        replaceFully(arg0: $Holder_<$Biome>, arg1: $Holder_<$Biome>): $BiomeInjector;
        replaceFully(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$Biome>): $BiomeInjector;
        replacePartially(arg0: $Holder_<$Biome>, arg1: $Holder_<$Biome>, arg2: $ParameterBuilder): $BiomeInjector;
        replacePartially(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$Biome>, arg2: $ParameterBuilder): $BiomeInjector;
        addPoints(arg0: $Climate$ParameterList<$Holder_<$Biome>>): $BiomeInjector;
        dispatchAlternateLayout(arg0: $ParameterBuilder, arg1: $Climate$ParameterList<$Holder_<$Biome>>): $BiomeInjector;
    }
    export class $BiomeInjector$ClimateParameter extends $Enum<$BiomeInjector$ClimateParameter> implements $StringRepresentable {
        static values(): $BiomeInjector$ClimateParameter[];
        static valueOf(arg0: string): $BiomeInjector$ClimateParameter;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HUMIDITY: $BiomeInjector$ClimateParameter;
        static CODEC: $Codec<$BiomeInjector$ClimateParameter>;
        getter: $Function<$Climate$TargetPoint, number>;
        static TEMPERATURE: $BiomeInjector$ClimateParameter;
        static CONTINENTALNESS: $BiomeInjector$ClimateParameter;
        static EROSION: $BiomeInjector$ClimateParameter;
        static WEIRDNESS: $BiomeInjector$ClimateParameter;
        static DEPTH: $BiomeInjector$ClimateParameter;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeInjector$ClimateParameter}.
     */
    export type $BiomeInjector$ClimateParameter_ = "continentalness" | "erosion" | "weirdness" | "humidity" | "temperature" | "depth";
    export class $BiomeInjector {
        static builder(arg0: $ResourceKey_<$Level>, arg1: $LoadPredicate): $BiomeInjector$InjectorBuilder;
        static builder(arg0: $ResourceKey_<$Level>): $BiomeInjector$InjectorBuilder;
        static PRIORITY_CODEC: $MapCodec<number>;
        static CODEC: $Codec<$BiomeInjector>;
        static DEFAULT_PRIORITY: number;
        static DIMENSION_CODEC: $MapCodec<$ResourceKey<$LevelStem>>;
    }
    export interface $BiomeInjector {
        priority(): number;
        predicate(): ($LoadPredicate) | undefined;
        dimension(): $ResourceKey<$LevelStem>;
        possibleBiomes(): $List<$Holder<$Biome>>;
        mapAll(arg0: $DensityFunctionWrapper): void;
        codec(): $MapCodec<$BiomeInjector>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeInjector}.
     */
    export type $BiomeInjector_ = RegistryTypes.LithostitchedBiomeInjector;
    export class $ParameterBuilder {
        static create(): $ParameterBuilder;
    }
    export interface $ParameterBuilder {
        build(): $ParameterMap;
        region(arg0: $ResourceKey_<$Region>): $ParameterBuilder;
        climateMin(arg0: $BiomeInjector$ClimateParameter_, arg1: number): $ParameterBuilder;
        climateMax(arg0: $BiomeInjector$ClimateParameter_, arg1: number): $ParameterBuilder;
        densityFunctionMin(arg0: $Holder_<$DensityFunction>, arg1: number): $ParameterBuilder;
        climateExactly(arg0: $BiomeInjector$ClimateParameter_, arg1: number): $ParameterBuilder;
        climateRange(arg0: $BiomeInjector$ClimateParameter_, arg1: number, arg2: number): $ParameterBuilder;
        densityFunctionMax(arg0: $Holder_<$DensityFunction>, arg1: number): $ParameterBuilder;
        densityFunctionExactly(arg0: $Holder_<$DensityFunction>, arg1: number): $ParameterBuilder;
        densityFunctionRange(arg0: $Holder_<$DensityFunction>, arg1: number, arg2: number): $ParameterBuilder;
    }
    export interface $BiomeInjector extends RegistryMarked<RegistryTypes.LithostitchedBiomeInjectorTag, RegistryTypes.LithostitchedBiomeInjector> {}
}
