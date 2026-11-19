import { $Music, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Biome$TemperatureModifier_, $AmbientParticleSettings, $AmbientMoodSettings, $Biome$TemperatureModifier, $BiomeSpecialEffects$GrassColorModifier_, $AmbientAdditionsSettings, $BiomeSpecialEffects$GrassColorModifier } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $PlacementCondition$Context_ } from "@package/dev/worldgen/lithostitched/api/worldgen/placementcondition";
import { $Enum, $Record } from "@package/java/lang";
import { $DensityFunction_, $DensityFunction$NoiseHolder_, $DensityFunction, $RandomState, $DensityFunction$Visitor, $NoiseRouter_, $PositionalRandomFactory, $NoiseGeneratorSettings_, $DensityFunction$NoiseHolder } from "@package/net/minecraft/world/level/levelgen";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/util" {
    export class $DensityFunctionWrapper implements $DensityFunction$Visitor {
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
        apply(arg0: $DensityFunction_): $DensityFunction;
        constructor(arg0: number, arg1: boolean, arg2: $RandomState, arg3: $PositionalRandomFactory);
        constructor(arg0: $PlacementCondition$Context_, arg1: $NoiseGeneratorSettings_);
    }
    export class $NoiseRouterTarget extends $Enum<$NoiseRouterTarget> implements $StringRepresentable {
        getDensityFunction(arg0: $NoiseRouter_): $DensityFunction;
        getSerializedName(): string;
        static values(): $NoiseRouterTarget[];
        static valueOf(arg0: string): $NoiseRouterTarget;
        getRemappedEnumConstantName(): string;
        static LAVA: $NoiseRouterTarget;
        static CODEC: $Codec<$NoiseRouterTarget>;
        static FLUID_LEVEL_FLOODEDNESS: $NoiseRouterTarget;
        static CONTINENTS: $NoiseRouterTarget;
        static VEIN_RIDGED: $NoiseRouterTarget;
        static INITIAL_DENSITY_WITHOUT_JAGGEDNESS: $NoiseRouterTarget;
        static BARRIER: $NoiseRouterTarget;
        static EROSION: $NoiseRouterTarget;
        static FLUID_LEVEL_SPREAD: $NoiseRouterTarget;
        static TEMPERATURE: $NoiseRouterTarget;
        static FINAL_DENSITY: $NoiseRouterTarget;
        static VEIN_GAP: $NoiseRouterTarget;
        static RIDGES: $NoiseRouterTarget;
        static DEPTH: $NoiseRouterTarget;
        static VEGETATION: $NoiseRouterTarget;
        static VEIN_TOGGLE: $NoiseRouterTarget;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $NoiseRouterTarget}.
     */
    export type $NoiseRouterTarget_ = "barrier" | "fluid_level_floodedness" | "fluid_level_spread" | "lava" | "temperature" | "vegetation" | "continents" | "erosion" | "depth" | "ridges" | "initial_density_without_jaggedness" | "final_density" | "vein_toggle" | "vein_ridged" | "vein_gap";
    export class $WeightedSpawnerData extends $Record {
        type(): $EntityType<never>;
        weight(): number;
        minCount(): number;
        maxCount(): number;
        static CODEC: $Codec<$WeightedSpawnerData>;
        constructor(type: $EntityType_<never>, weight: number, minCount: number, maxCount: number);
    }
    /**
     * Values that may be interpreted as {@link $WeightedSpawnerData}.
     */
    export type $WeightedSpawnerData_ = { maxCount?: number, type?: $EntityType_<never>, weight?: number, minCount?: number,  } | [maxCount?: number, type?: $EntityType_<never>, weight?: number, minCount?: number, ];
    export class $BiomeEffects extends $Record {
        fogColor(): (number) | undefined;
        waterColor(): (number) | undefined;
        dryFoliageColor(): (number) | undefined;
        ambientParticle(): ($AmbientParticleSettings) | undefined;
        additionsSound(): ($AmbientAdditionsSettings) | undefined;
        musicVolume(): (number) | undefined;
        ambientSound(): ($Holder<$SoundEvent>) | undefined;
        skyColor(): (number) | undefined;
        music(): ($Music) | undefined;
        grassColorModifier(): ($BiomeSpecialEffects$GrassColorModifier) | undefined;
        waterFogColor(): (number) | undefined;
        foliageColor(): (number) | undefined;
        moodSound(): ($AmbientMoodSettings) | undefined;
        grassColor(): (number) | undefined;
        static CODEC: $Codec<$BiomeEffects>;
        constructor(fogColor: (number) | undefined, waterColor: (number) | undefined, waterFogColor: (number) | undefined, skyColor: (number) | undefined, foliageColor: (number) | undefined, dryFoliageColor: (number) | undefined, grassColor: (number) | undefined, grassColorModifier: ($BiomeSpecialEffects$GrassColorModifier_) | undefined, ambientParticle: ($AmbientParticleSettings) | undefined, ambientSound: ($Holder_<$SoundEvent>) | undefined, moodSound: ($AmbientMoodSettings) | undefined, additionsSound: ($AmbientAdditionsSettings) | undefined, music: ($Music) | undefined, musicVolume: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BiomeEffects}.
     */
    export type $BiomeEffects_ = { fogColor?: (number) | undefined, musicVolume?: (number) | undefined, additionsSound?: ($AmbientAdditionsSettings) | undefined, foliageColor?: (number) | undefined, grassColorModifier?: ($BiomeSpecialEffects$GrassColorModifier_) | undefined, grassColor?: (number) | undefined, ambientSound?: ($Holder_<$SoundEvent>) | undefined, ambientParticle?: ($AmbientParticleSettings) | undefined, skyColor?: (number) | undefined, waterFogColor?: (number) | undefined, dryFoliageColor?: (number) | undefined, music?: ($Music) | undefined, moodSound?: ($AmbientMoodSettings) | undefined, waterColor?: (number) | undefined,  } | [fogColor?: (number) | undefined, musicVolume?: (number) | undefined, additionsSound?: ($AmbientAdditionsSettings) | undefined, foliageColor?: (number) | undefined, grassColorModifier?: ($BiomeSpecialEffects$GrassColorModifier_) | undefined, grassColor?: (number) | undefined, ambientSound?: ($Holder_<$SoundEvent>) | undefined, ambientParticle?: ($AmbientParticleSettings) | undefined, skyColor?: (number) | undefined, waterFogColor?: (number) | undefined, dryFoliageColor?: (number) | undefined, music?: ($Music) | undefined, moodSound?: ($AmbientMoodSettings) | undefined, waterColor?: (number) | undefined, ];
    export class $BiomeClimate extends $Record {
        temperature(): (number) | undefined;
        hasPrecipitation(): (boolean) | undefined;
        temperatureModifier(): ($Biome$TemperatureModifier) | undefined;
        downfall(): (number) | undefined;
        static CODEC: $MapCodec<$BiomeClimate>;
        constructor(hasPrecipitation: (boolean) | undefined, temperature: (number) | undefined, temperatureModifier: ($Biome$TemperatureModifier_) | undefined, downfall: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BiomeClimate}.
     */
    export type $BiomeClimate_ = { temperature?: (number) | undefined, temperatureModifier?: ($Biome$TemperatureModifier_) | undefined, hasPrecipitation?: (boolean) | undefined, downfall?: (number) | undefined,  } | [temperature?: (number) | undefined, temperatureModifier?: ($Biome$TemperatureModifier_) | undefined, hasPrecipitation?: (boolean) | undefined, downfall?: (number) | undefined, ];
}
