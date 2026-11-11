import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ListTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $AmbientParticleSettings, $Biome$ClimateSettings, $MobSpawnSettings$Builder, $AmbientAdditionsSettings, $BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings, $BiomeSpecialEffects, $BiomeSpecialEffects$Builder, $Biome, $Biome$TemperatureModifier_, $AmbientMoodSettings, $MobSpawnSettings$MobSpawnCost, $Biome$TemperatureModifier, $MobSpawnSettings, $MobSpawnSettings$SpawnerData, $BiomeSpecialEffects$GrassColorModifier, $MobSpawnSettings$MobSpawnCost_, $Biome$ClimateSettings_ } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ClientboundLevelChunkWithLightPacket } from "@package/net/minecraft/network/protocol/game";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Predicate_ } from "@package/java/util/function";
import { $AuxiliaryLightManagerMixin } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Holder_, $HolderSet, $HolderSet_, $Holder, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record } from "@package/java/lang";
import { $Structure$StructureSettings_, $TerrainAdjustment, $Structure$StructureSettings, $StructureSpawnOverride$BoundingBoxType_, $BoundingBox, $TerrainAdjustment_, $StructureSpawnOverride_, $Structure, $StructureSpawnOverride, $StructureSpawnOverride$BoundingBoxType } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Carving, $GenerationStep$Decoration, $GenerationStep$Decoration_, $GenerationStep$Carving_ } from "@package/net/minecraft/world/level/levelgen";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";
export * as poi from "@package/net/neoforged/neoforge/common/world/poi";
export * as chunk from "@package/net/neoforged/neoforge/common/world/chunk";

declare module "@package/net/neoforged/neoforge/common/world" {
    export class $BiomeModifiers$AddCarversBiomeModifier extends $Record implements $BiomeModifier {
        step(): $GenerationStep$Carving;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        carvers(): $HolderSet<$ConfiguredWorldCarver<never>>;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, carvers: $HolderSet_<$ConfiguredWorldCarver<never>>, step: $GenerationStep$Carving_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddCarversBiomeModifier}.
     */
    export type $BiomeModifiers$AddCarversBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, step?: $GenerationStep$Carving_,  } | [biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, step?: $GenerationStep$Carving_, ];
    export class $BiomeModifiers$RemoveSpawnsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        entityTypes(): $HolderSet<$EntityType<never>>;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveSpawnsBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveSpawnsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
        getCarvers(arg0: $GenerationStep$Carving_): $List<$Holder<$ConfiguredWorldCarver<never>>>;
        getFeatures(arg0: $GenerationStep$Decoration_): $List<$Holder<$PlacedFeature>>;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        constructor(arg0: $BiomeGenerationSettings);
    }
    export class $LevelChunkAuxiliaryLightManager implements $AuxiliaryLightManager, $INBTSerializable<$ListTag> {
        serializeNBT(arg0: $HolderLookup$Provider): $ListTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $ListTag_): void;
        getLightAt(arg0: $BlockPos_): number;
        setLightAt(arg0: $BlockPos_, arg1: number): void;
        sendLightDataTo(arg0: $ClientboundLevelChunkWithLightPacket): $Packet<never>;
        handleLightDataSync(arg0: $Map_<$BlockPos_, number>): void;
        removeLightAt(arg0: $BlockPos_): void;
        static LIGHT_NBT_KEY: string;
        constructor(arg0: $LevelChunk);
    }
    export class $BiomeModifiers$RemoveCarversBiomeModifier extends $Record implements $BiomeModifier {
        steps(): $Set<$GenerationStep$Carving>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        carvers(): $HolderSet<$ConfiguredWorldCarver<never>>;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        static allSteps(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$ConfiguredWorldCarver<never>>): $BiomeModifiers$RemoveCarversBiomeModifier;
        constructor(biomes: $HolderSet_<$Biome>, carvers: $HolderSet_<$ConfiguredWorldCarver<never>>, steps: $Set_<$GenerationStep$Carving_>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveCarversBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveCarversBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, steps?: $Set_<$GenerationStep$Carving_>,  } | [biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, steps?: $Set_<$GenerationStep$Carving_>, ];
    export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
        removeSpawnCost(...arg0: $EntityType_<never>[]): $MobSpawnSettingsBuilder;
        getSpawner(arg0: $MobCategory_): $List<$MobSpawnSettings$SpawnerData>;
        getCost(arg0: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getSpawnerTypes(): $Set<$MobCategory>;
        getEntityTypes(): $Set<$EntityType<never>>;
        getProbability(): number;
        disablePlayerSpawn(): $MobSpawnSettingsBuilder;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor(arg0: $MobSpawnSettings);
        get spawnerTypes(): $Set<$MobCategory>;
        get entityTypes(): $Set<$EntityType<never>>;
        get probability(): number;
    }
    export class $ModifiableStructureInfo$StructureInfo extends $Record {
        structureSettings(): $Structure$StructureSettings;
        constructor(structureSettings: $Structure$StructureSettings_);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableStructureInfo$StructureInfo}.
     */
    export type $ModifiableStructureInfo$StructureInfo_ = { structureSettings?: $Structure$StructureSettings_,  } | [structureSettings?: $Structure$StructureSettings_, ];
    export class $ModifiableBiomeInfo$BiomeInfo$Builder {
        static copyOf(arg0: $ModifiableBiomeInfo$BiomeInfo_): $ModifiableBiomeInfo$BiomeInfo$Builder;
        build(): $ModifiableBiomeInfo$BiomeInfo;
        getMobSpawnSettings(): $MobSpawnSettingsBuilder;
        getSpecialEffects(): $BiomeSpecialEffectsBuilder;
        getClimateSettings(): $ClimateSettingsBuilder;
        getGenerationSettings(): $BiomeGenerationSettingsBuilder;
        get mobSpawnSettings(): $MobSpawnSettingsBuilder;
        get specialEffects(): $BiomeSpecialEffectsBuilder;
        get climateSettings(): $ClimateSettingsBuilder;
        get generationSettings(): $BiomeGenerationSettingsBuilder;
    }
    export class $PieceBeardifierModifier {
    }
    export interface $PieceBeardifierModifier {
        getGroundLevelDelta(): number;
        getTerrainAdjustment(): $TerrainAdjustment;
        getBeardifierBox(): $BoundingBox;
        get groundLevelDelta(): number;
        get terrainAdjustment(): $TerrainAdjustment;
        get beardifierBox(): $BoundingBox;
    }
    export class $BiomeModifiers$RemoveSpawnCostsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        entityTypes(): $HolderSet<$EntityType<never>>;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveSpawnCostsBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveSpawnCostsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $ClimateSettingsBuilder {
        getTemperatureModifier(): $Biome$TemperatureModifier;
        static copyOf(arg0: $Biome$ClimateSettings_): $ClimateSettingsBuilder;
        static create(arg0: boolean, arg1: number, arg2: $Biome$TemperatureModifier_, arg3: number): $ClimateSettingsBuilder;
        build(): $Biome$ClimateSettings;
        setTemperatureModifier(arg0: $Biome$TemperatureModifier_): void;
        setHasPrecipitation(arg0: boolean): void;
        getTemperature(): number;
        getDownfall(): number;
        hasPrecipitation(): boolean;
        setDownfall(arg0: number): void;
        setTemperature(arg0: number): void;
    }
    export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {
        removeSpawns(arg0: $Predicate_<$MobSpawnSettings$SpawnerData>): void;
        getSpawns(): $List<$MobSpawnSettings$SpawnerData>;
        removeSpawn(arg0: $MobSpawnSettings$SpawnerData): void;
        addSpawn(arg0: $MobSpawnSettings$SpawnerData): void;
        static copyOf(arg0: $StructureSpawnOverride_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        build(): $StructureSpawnOverride;
        getBoundingBox(): $StructureSpawnOverride$BoundingBoxType;
        setBoundingBox(arg0: $StructureSpawnOverride$BoundingBoxType_): void;
        get spawns(): $List<$MobSpawnSettings$SpawnerData>;
    }
    export class $StructureModifier {
        static DIRECT_CODEC: $Codec<$StructureModifier>;
        static LIST_CODEC: $Codec<$HolderSet<$StructureModifier>>;
        static REFERENCE_CODEC: $Codec<$Holder<$StructureModifier>>;
    }
    export interface $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
    }
    /**
     * Values that may be interpreted as {@link $StructureModifier}.
     */
    export type $StructureModifier_ = RegistryTypes.NeoforgeStructureModifier;
    export class $StructureModifiers$ClearSpawnsStructureModifier extends $Record implements $StructureModifier {
        categories(): $Set<$MobCategory>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        structures(): $HolderSet<$Structure>;
        codec(): $MapCodec<$StructureModifier>;
        constructor(structures: $HolderSet_<$Structure>, categories: $Set_<$MobCategory_>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$ClearSpawnsStructureModifier}.
     */
    export type $StructureModifiers$ClearSpawnsStructureModifier_ = { categories?: $Set_<$MobCategory_>, structures?: $HolderSet_<$Structure>,  } | [categories?: $Set_<$MobCategory_>, structures?: $HolderSet_<$Structure>, ];
    export class $StructureModifiers {
    }
    export class $BiomeModifier$Phase extends $Enum<$BiomeModifier$Phase> {
        static values(): $BiomeModifier$Phase[];
        static valueOf(arg0: string): $BiomeModifier$Phase;
        static ADD: $BiomeModifier$Phase;
        static MODIFY: $BiomeModifier$Phase;
        static AFTER_EVERYTHING: $BiomeModifier$Phase;
        static REMOVE: $BiomeModifier$Phase;
        static BEFORE_EVERYTHING: $BiomeModifier$Phase;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifier$Phase}.
     */
    export type $BiomeModifier$Phase_ = "before_everything" | "add" | "remove" | "modify" | "after_everything";
    export class $BiomeModifier {
        static DIRECT_CODEC: $Codec<$BiomeModifier>;
        static LIST_CODEC: $Codec<$HolderSet<$BiomeModifier>>;
        static REFERENCE_CODEC: $Codec<$Holder<$BiomeModifier>>;
    }
    export interface $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        codec(): $MapCodec<$BiomeModifier>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifier}.
     */
    export type $BiomeModifier_ = RegistryTypes.NeoforgeBiomeModifier;
    export class $StructureModifiers$AddSpawnsStructureModifier extends $Record implements $StructureModifier {
        static singleSpawn(arg0: $HolderSet_<$Structure>, arg1: $MobSpawnSettings$SpawnerData): $StructureModifiers$AddSpawnsStructureModifier;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        structures(): $HolderSet<$Structure>;
        codec(): $MapCodec<$StructureModifier>;
        spawners(): $List<$MobSpawnSettings$SpawnerData>;
        constructor(structures: $HolderSet_<$Structure>, spawners: $List_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$AddSpawnsStructureModifier}.
     */
    export type $StructureModifiers$AddSpawnsStructureModifier_ = { spawners?: $List_<$MobSpawnSettings$SpawnerData>, structures?: $HolderSet_<$Structure>,  } | [spawners?: $List_<$MobSpawnSettings$SpawnerData>, structures?: $HolderSet_<$Structure>, ];
    export class $StructureSettingsBuilder {
        getSpawnOverrides(arg0: $MobCategory_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        getTerrainAdaptation(): $TerrainAdjustment;
        setTerrainAdaptation(arg0: $TerrainAdjustment_): void;
        setDecorationStep(arg0: $GenerationStep$Decoration_): void;
        getDecorationStep(): $GenerationStep$Decoration;
        static copyOf(arg0: $Structure$StructureSettings_): $StructureSettingsBuilder;
        build(): $Structure$StructureSettings;
        getBiomes(): $HolderSet<$Biome>;
        removeSpawnOverrides(arg0: $MobCategory_): void;
        getOrAddSpawnOverrides(arg0: $MobCategory_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        setBiomes(arg0: $HolderSet_<$Biome>): void;
    }
    export class $StructureModifiers$RemoveSpawnsStructureModifier extends $Record implements $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        entityTypes(): $HolderSet<$EntityType<never>>;
        structures(): $HolderSet<$Structure>;
        codec(): $MapCodec<$StructureModifier>;
        constructor(structures: $HolderSet_<$Structure>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$RemoveSpawnsStructureModifier}.
     */
    export type $StructureModifiers$RemoveSpawnsStructureModifier_ = { entityTypes?: $HolderSet_<$EntityType<never>>, structures?: $HolderSet_<$Structure>,  } | [entityTypes?: $HolderSet_<$EntityType<never>>, structures?: $HolderSet_<$Structure>, ];
    export class $NoneStructureModifier implements $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
        /**
         * @deprecated
         */
        static INSTANCE: $NoneStructureModifier;
        constructor();
    }
    export class $NoneBiomeModifier implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        codec(): $MapCodec<$BiomeModifier>;
        /**
         * @deprecated
         */
        static INSTANCE: $NoneBiomeModifier;
        constructor();
    }
    export class $BiomeModifiers$RemoveFeaturesBiomeModifier extends $Record implements $BiomeModifier {
        steps(): $Set<$GenerationStep$Decoration>;
        features(): $HolderSet<$PlacedFeature>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        static allSteps(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>): $BiomeModifiers$RemoveFeaturesBiomeModifier;
        constructor(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, steps: $Set_<$GenerationStep$Decoration_>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveFeaturesBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveFeaturesBiomeModifier_ = { features?: $HolderSet_<$PlacedFeature>, steps?: $Set_<$GenerationStep$Decoration_>, biomes?: $HolderSet_<$Biome>,  } | [features?: $HolderSet_<$PlacedFeature>, steps?: $Set_<$GenerationStep$Decoration_>, biomes?: $HolderSet_<$Biome>, ];
    export interface $StructureModifier extends RegistryMarked<RegistryTypes.NeoforgeStructureModifierTag, RegistryTypes.NeoforgeStructureModifier> {}
    export class $ModifiableStructureInfo$StructureInfo$Builder {
        static copyOf(arg0: $ModifiableStructureInfo$StructureInfo_): $ModifiableStructureInfo$StructureInfo$Builder;
        build(): $ModifiableStructureInfo$StructureInfo;
        getStructureSettings(): $StructureSettingsBuilder;
        get structureSettings(): $StructureSettingsBuilder;
    }
    export class $BiomeModifiers$AddFeaturesBiomeModifier extends $Record implements $BiomeModifier {
        step(): $GenerationStep$Decoration;
        features(): $HolderSet<$PlacedFeature>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddFeaturesBiomeModifier}.
     */
    export type $BiomeModifiers$AddFeaturesBiomeModifier_ = { features?: $HolderSet_<$PlacedFeature>, step?: $GenerationStep$Decoration_, biomes?: $HolderSet_<$Biome>,  } | [features?: $HolderSet_<$PlacedFeature>, step?: $GenerationStep$Decoration_, biomes?: $HolderSet_<$Biome>, ];
    export class $AuxiliaryLightManager {
    }
    export interface $AuxiliaryLightManager extends $AuxiliaryLightManagerMixin, $SodiumAuxiliaryLightManager {
        getLightAt(arg0: $BlockPos_): number;
        setLightAt(arg0: $BlockPos_, arg1: number): void;
        removeLightAt(arg0: $BlockPos_): void;
    }
    export class $ModifiableStructureInfo {
        get(): $ModifiableStructureInfo$StructureInfo;
        getOriginalStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        getModifiedStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        applyStructureModifiers(arg0: $Holder_<$Structure>, arg1: $List_<$StructureModifier_>): void;
        constructor(arg0: $ModifiableStructureInfo$StructureInfo_);
        get originalStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        get modifiedStructureInfo(): $ModifiableStructureInfo$StructureInfo;
    }
    export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
        getAmbientAdditionsSound(): ($AmbientAdditionsSettings) | undefined;
        getAmbientLoopSound(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSound(): ($AmbientMoodSettings) | undefined;
        static copyOf(arg0: $BiomeSpecialEffects): $BiomeSpecialEffectsBuilder;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $BiomeSpecialEffectsBuilder;
        waterColor(): number;
        getBackgroundMusic(): ($Music) | undefined;
        getSkyColor(): number;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getWaterFogColor(): number;
        getFogColor(): number;
        getFoliageColorOverride(): (number) | undefined;
        getGrassColorOverride(): (number) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
    }
    export class $BiomeModifiers {
    }
    export class $ModifiableBiomeInfo$BiomeInfo extends $Record {
        climateSettings(): $Biome$ClimateSettings;
        generationSettings(): $BiomeGenerationSettings;
        mobSpawnSettings(): $MobSpawnSettings;
        effects(): $BiomeSpecialEffects;
        constructor(climateSettings: $Biome$ClimateSettings_, effects: $BiomeSpecialEffects, generationSettings: $BiomeGenerationSettings, mobSpawnSettings: $MobSpawnSettings);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableBiomeInfo$BiomeInfo}.
     */
    export type $ModifiableBiomeInfo$BiomeInfo_ = { mobSpawnSettings?: $MobSpawnSettings, generationSettings?: $BiomeGenerationSettings, effects?: $BiomeSpecialEffects, climateSettings?: $Biome$ClimateSettings_,  } | [mobSpawnSettings?: $MobSpawnSettings, generationSettings?: $BiomeGenerationSettings, effects?: $BiomeSpecialEffects, climateSettings?: $Biome$ClimateSettings_, ];
    export class $BiomeModifiers$AddSpawnCostsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        spawnCost(): $MobSpawnSettings$MobSpawnCost;
        entityTypes(): $HolderSet<$EntityType<never>>;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>, spawnCost: $MobSpawnSettings$MobSpawnCost_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddSpawnCostsBiomeModifier}.
     */
    export type $BiomeModifiers$AddSpawnCostsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, spawnCost?: $MobSpawnSettings$MobSpawnCost_, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, spawnCost?: $MobSpawnSettings$MobSpawnCost_, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $BiomeModifiers$AddSpawnsBiomeModifier extends $Record implements $BiomeModifier {
        static singleSpawn(arg0: $HolderSet_<$Biome>, arg1: $MobSpawnSettings$SpawnerData): $BiomeModifiers$AddSpawnsBiomeModifier;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        spawners(): $List<$MobSpawnSettings$SpawnerData>;
        constructor(biomes: $HolderSet_<$Biome>, spawners: $List_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddSpawnsBiomeModifier}.
     */
    export type $BiomeModifiers$AddSpawnsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, spawners?: $List_<$MobSpawnSettings$SpawnerData>,  } | [biomes?: $HolderSet_<$Biome>, spawners?: $List_<$MobSpawnSettings$SpawnerData>, ];
    export class $ModifiableBiomeInfo {
        get(): $ModifiableBiomeInfo$BiomeInfo;
        getOriginalBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        applyBiomeModifiers(arg0: $Holder_<$Biome>, arg1: $List_<$BiomeModifier_>, arg2: $RegistryAccess): boolean;
        getModifiedBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        constructor(arg0: $ModifiableBiomeInfo$BiomeInfo_);
        get originalBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        get modifiedBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
    }
    export class $StructureModifier$Phase extends $Enum<$StructureModifier$Phase> {
        static values(): $StructureModifier$Phase[];
        static valueOf(arg0: string): $StructureModifier$Phase;
        static ADD: $StructureModifier$Phase;
        static MODIFY: $StructureModifier$Phase;
        static AFTER_EVERYTHING: $StructureModifier$Phase;
        static REMOVE: $StructureModifier$Phase;
        static BEFORE_EVERYTHING: $StructureModifier$Phase;
    }
    /**
     * Values that may be interpreted as {@link $StructureModifier$Phase}.
     */
    export type $StructureModifier$Phase_ = "before_everything" | "add" | "remove" | "modify" | "after_everything";
    export interface $BiomeModifier extends RegistryMarked<RegistryTypes.NeoforgeBiomeModifierTag, RegistryTypes.NeoforgeBiomeModifier> {}
}
