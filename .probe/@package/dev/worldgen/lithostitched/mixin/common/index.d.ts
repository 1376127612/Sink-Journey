import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $TreeDecorator } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $Biome$ClimateSettings, $BiomeSource, $BiomeGenerationSettings, $BiomeSpecialEffects, $Climate$ParameterList, $Biome, $FeatureSorter$StepFeatureData, $MobSpawnSettings$MobSpawnCost, $MobSpawnSettings, $MobSpawnSettings$SpawnerData, $MobSpawnSettings$MobSpawnCost_, $Biome$ClimateSettings_, $MultiNoiseBiomeSourceParameterList } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $StructureProcessorList, $StructureProcessor, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Supplier_, $Function } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $RegistrationInfo, $HolderSet, $HolderSet_, $Holder, $Holder$Reference } from "@package/net/minecraft/core";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureSet$StructureSelectionEntry, $StructureSet$StructureSelectionEntry_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Carving, $SurfaceRules$RuleSource_, $NoiseGeneratorSettings, $NoiseRouter_, $PositionalRandomFactory, $DensityFunction_, $DensityFunction, $GenerationStep$Carving_, $SurfaceRules$RuleSource } from "@package/net/minecraft/world/level/levelgen";
export * as mnbs from "@package/dev/worldgen/lithostitched/mixin/common/mnbs";

declare module "@package/dev/worldgen/lithostitched/mixin/common" {
    export class $NoiseBasedChunkGeneratorAccessor {
    }
    export interface $NoiseBasedChunkGeneratorAccessor {
        setSettings(arg0: $Holder_<$NoiseGeneratorSettings>): void;
        set settings(value: $Holder_<$NoiseGeneratorSettings>);
    }
    /**
     * Values that may be interpreted as {@link $NoiseBasedChunkGeneratorAccessor}.
     */
    export type $NoiseBasedChunkGeneratorAccessor_ = ((arg0: $Holder<$NoiseGeneratorSettings>) => void);
    export class $NoiseChunkAccessor {
    }
    export interface $NoiseChunkAccessor {
        lithostitched$wrap(arg0: $DensityFunction_): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunkAccessor}.
     */
    export type $NoiseChunkAccessor_ = ((arg0: $DensityFunction) => $DensityFunction_);
    export class $ListPoolElementAccessor {
    }
    export interface $ListPoolElementAccessor {
        lithostitched$getElements(): $List<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $ListPoolElementAccessor}.
     */
    export type $ListPoolElementAccessor_ = (() => $List_<$StructurePoolElement>);
    export class $TreeConfigurationAccessor {
    }
    export interface $TreeConfigurationAccessor {
        lithostitched$setDecorators(arg0: $List_<$TreeDecorator>): void;
    }
    /**
     * Values that may be interpreted as {@link $TreeConfigurationAccessor}.
     */
    export type $TreeConfigurationAccessor_ = ((arg0: $List<$TreeDecorator>) => void);
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setVanillaTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
    }
    export class $StructureProcessorListAccessor {
    }
    export interface $StructureProcessorListAccessor {
        setProcessors(arg0: $List_<$StructureProcessor>): void;
        set processors(value: $List_<$StructureProcessor>);
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorListAccessor}.
     */
    export type $StructureProcessorListAccessor_ = ((arg0: $List<$StructureProcessor>) => void);
    export class $StructureSetAccessor {
    }
    export interface $StructureSetAccessor {
        setStructures(arg0: $List_<$StructureSet$StructureSelectionEntry_>): void;
        set structures(value: $List_<$StructureSet$StructureSelectionEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSetAccessor}.
     */
    export type $StructureSetAccessor_ = ((arg0: $List<$StructureSet$StructureSelectionEntry>) => void);
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        setClimateSettings(arg0: $Biome$ClimateSettings_): void;
        setSpecialEffects(arg0: $BiomeSpecialEffects): void;
        setMobSettings(arg0: $MobSpawnSettings): void;
        getSpecialEffects(): $BiomeSpecialEffects;
        getClimateSettings(): $Biome$ClimateSettings;
        setGenerationSettings(arg0: $BiomeGenerationSettings): void;
        set mobSettings(value: $MobSpawnSettings);
        set generationSettings(value: $BiomeGenerationSettings);
    }
    export class $MultiNoiseBiomeSourceAccessor {
    }
    export interface $MultiNoiseBiomeSourceAccessor {
        getParameters(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        setParameters(arg0: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
    }
    export class $MappedRegistryAccessor<T> {
    }
    export interface $MappedRegistryAccessor<T> {
        getByValue(): $Map<T, $Holder$Reference<T>>;
        lithostitched$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
        get byValue(): $Map<T, $Holder$Reference<T>>;
    }
    export class $PlacedFeatureAccessor {
    }
    export interface $PlacedFeatureAccessor {
        setFeature(arg0: $Holder_<$ConfiguredFeature<never, never>>): void;
        set feature(value: $Holder_<$ConfiguredFeature<never, never>>);
    }
    /**
     * Values that may be interpreted as {@link $PlacedFeatureAccessor}.
     */
    export type $PlacedFeatureAccessor_ = ((arg0: $Holder<$ConfiguredFeature<never, never>>) => void);
    export class $ChunkGeneratorAccessor {
    }
    export interface $ChunkGeneratorAccessor {
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        setBiomeSource(arg0: $BiomeSource): void;
        setFeaturesPerStep(arg0: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        getBiomeSource(): $BiomeSource;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        set featuresPerStep(value: $Supplier_<$List<$FeatureSorter$StepFeatureData>>);
    }
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        getProcessors(): $Holder<$StructureProcessorList>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        setProcessors(arg0: $Holder_<$StructureProcessorList>): void;
        get template(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    export class $HolderReferenceAccessor<T> {
    }
    export interface $HolderReferenceAccessor<T> {
        setValue(arg0: T): void;
        set value(value: T);
    }
    /**
     * Values that may be interpreted as {@link $HolderReferenceAccessor}.
     */
    export type $HolderReferenceAccessor_<T> = ((arg0: T) => void);
    export class $MobSpawnSettingsAccessor {
    }
    export interface $MobSpawnSettingsAccessor {
        lithostitched$setSpawnCosts(arg0: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>): void;
        lithostitched$getSpawnCosts(): $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        setSpawners(arg0: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
    }
    export class $RandomStateAccessor {
    }
    export interface $RandomStateAccessor {
        getRandom(): $PositionalRandomFactory;
        get random(): $PositionalRandomFactory;
    }
    /**
     * Values that may be interpreted as {@link $RandomStateAccessor}.
     */
    export type $RandomStateAccessor_ = (() => $PositionalRandomFactory);
    export class $JigsawStructureAccessor {
    }
    export interface $JigsawStructureAccessor {
        setPoolAliases(arg0: $List_<$PoolAliasBinding>): void;
        getPoolAliases(): $List<$PoolAliasBinding>;
    }
    export class $BiomeGenerationSettingsAccessor {
        static createGenerationSettings(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, arg1: $List_<$HolderSet_<$PlacedFeature>>): $BiomeGenerationSettings;
    }
    export interface $BiomeGenerationSettingsAccessor {
        getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        get carvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeGenerationSettingsAccessor}.
     */
    export type $BiomeGenerationSettingsAccessor_ = (() => $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>);
    export class $NoiseGeneratorSettingsAccessor {
    }
    export interface $NoiseGeneratorSettingsAccessor {
        setNoiseRouter(arg0: $NoiseRouter_): void;
        setSurfaceRule(arg0: $SurfaceRules$RuleSource_): void;
        getSurfaceRuleBecauseTerriblenderSucksAndWontLetMeUseTheNormalMethodToGetTheSurfaceRules(): $SurfaceRules$RuleSource;
        set noiseRouter(value: $NoiseRouter_);
        set surfaceRule(value: $SurfaceRules$RuleSource_);
        get surfaceRuleBecauseTerriblenderSucksAndWontLetMeUseTheNormalMethodToGetTheSurfaceRules(): $SurfaceRules$RuleSource;
    }
    export class $BiomeSourceInvoker {
    }
    export interface $BiomeSourceInvoker {
        getCodec(): $MapCodec<$BiomeSource>;
        get codec(): $MapCodec<$BiomeSource>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSourceInvoker}.
     */
    export type $BiomeSourceInvoker_ = (() => $MapCodec_<$BiomeSource>);
}
