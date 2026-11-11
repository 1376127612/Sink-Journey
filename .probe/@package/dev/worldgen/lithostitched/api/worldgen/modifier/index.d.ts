import { $Level } from "@package/net/minecraft/world/level";
import { $BiomeEffects, $BiomeClimate_, $NoiseRouterTarget_, $WeightedSpawnerData_ } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $CompositeConfig$Type_ } from "@package/dev/worldgen/lithostitched/worldgen/feature/config";
import { $StructureTemplatePool, $StructureTemplatePool_, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $AmbientParticleSettings, $Biome_, $AmbientAdditionsSettings, $Biome, $AmbientMoodSettings, $BiomeSpecialEffects$GrassColorModifier_, $MobSpawnSettings$MobSpawnCost_ } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $StructureProcessorList, $StructureProcessor, $StructureProcessorList_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $Map_, $List_ } from "@package/java/util";
import { $HolderTarget } from "@package/dev/worldgen/lithostitched/api/worldgen/modifier/target";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $InjectionType_ } from "@package/dev/worldgen/lithostitched/api/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature, $ConfiguredFeature_ } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LoadPredicate } from "@package/dev/worldgen/lithostitched/api/predicate";
import { $PlacementCondition } from "@package/dev/worldgen/lithostitched/api/worldgen/placementcondition";
import { $StructureSet_, $StructureSet, $Structure, $Structure_, $StructureSet$StructureSelectionEntry_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $SurfaceRules$RuleSource_, $GenerationStep$Decoration_, $DensityFunction_, $DensityFunction } from "@package/net/minecraft/world/level/levelgen";
export * as target from "@package/dev/worldgen/lithostitched/api/worldgen/modifier/target";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/modifier" {
    export class $WorldgenModifier {
        static builder(): $WorldgenModifier$ModifierBuilder;
        static builder(arg0: $LoadPredicate): $WorldgenModifier$ModifierBuilder;
        static resetRegistrationInfo<T>(arg0: $Registry<T>, arg1: $Holder_<T>): void;
        static PRIORITY_DEFAULT_CODEC: $MapCodec<number>;
        static CODEC: $Codec<$WorldgenModifier>;
        static REMOVAL_PRIORITY: number;
        static DEFAULT_PRIORITY: number;
        static PRIORITY_REMOVE_CODEC: $MapCodec<number>;
    }
    export interface $WorldgenModifier {
        priority(): number;
        apply(arg0: $RegistryAccess): void;
        predicate(): ($LoadPredicate) | undefined;
        codec(): $MapCodec<$WorldgenModifier>;
        shouldRecompileSortedFeatures(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenModifier}.
     */
    export type $WorldgenModifier_ = RegistryTypes.LithostitchedWorldgenModifier;
    export class $WorldgenModifier$ModifierBuilder {
        priority(arg0: number): $WorldgenModifier$ModifierBuilder;
        noop(): $WorldgenModifier;
        setPoolAliases(arg0: $Holder_<$Structure>, arg1: boolean, ...arg2: $PoolAliasBinding[]): $WorldgenModifier;
        setPoolAliases(arg0: $HolderTarget<$Structure_>, arg1: boolean, ...arg2: $PoolAliasBinding[]): $WorldgenModifier;
        setPoolAliases(arg0: $HolderSet_<$Structure>, arg1: boolean, ...arg2: $PoolAliasBinding[]): $WorldgenModifier;
        addProcessorListProcessors(arg0: $Holder_<$StructureProcessorList>, ...arg1: $StructureProcessor[]): $WorldgenModifier;
        addProcessorListProcessors(arg0: $HolderSet_<$StructureProcessorList>, ...arg1: $StructureProcessor[]): $WorldgenModifier;
        addProcessorListProcessors(arg0: $HolderTarget<$StructureProcessorList_>, ...arg1: $StructureProcessor[]): $WorldgenModifier;
        removeStructureSetEntries(arg0: $Holder_<$StructureSet>, ...arg1: $Holder_<$Structure>[]): $WorldgenModifier;
        removeStructureSetEntries(arg0: $HolderSet_<$StructureSet>, ...arg1: $Holder_<$Structure>[]): $WorldgenModifier;
        removeStructureSetEntries(arg0: $HolderTarget<$StructureSet_>, ...arg1: $Holder_<$Structure>[]): $WorldgenModifier;
        setPoolElementProcessors(arg0: $Holder_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean): $WorldgenModifier;
        setPoolElementProcessors(arg0: $HolderTarget<$StructureTemplatePool_>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean, ...arg3: $ResourceLocation_[]): $WorldgenModifier;
        setPoolElementProcessors(arg0: $HolderTarget<$StructureTemplatePool_>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean): $WorldgenModifier;
        setPoolElementProcessors(arg0: $HolderSet_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean): $WorldgenModifier;
        setPoolElementProcessors(arg0: $Holder_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean, ...arg3: $ResourceLocation_[]): $WorldgenModifier;
        setPoolElementProcessors(arg0: $HolderSet_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean, ...arg3: $ResourceLocation_[]): $WorldgenModifier;
        setStructureSpawnCondition(arg0: $Holder_<$Structure>, arg1: $PlacementCondition, arg2: boolean): $WorldgenModifier;
        setStructureSpawnCondition(arg0: $HolderSet_<$Structure>, arg1: $PlacementCondition, arg2: boolean): $WorldgenModifier;
        setStructureSpawnCondition(arg0: $HolderTarget<$Structure_>, arg1: $PlacementCondition, arg2: boolean): $WorldgenModifier;
        wrapDensityFunction(arg0: $Holder_<$DensityFunction>, arg1: $DensityFunction_): $WorldgenModifier;
        wrapDensityFunction(arg0: $Holder_<$DensityFunction>, arg1: $Holder_<$DensityFunction>): $WorldgenModifier;
        addStructureSetEntries(arg0: $HolderTarget<$StructureSet_>, ...arg1: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addStructureSetEntries(arg0: $Holder_<$StructureSet>, ...arg1: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addStructureSetEntries(arg0: $HolderSet_<$StructureSet>, ...arg1: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addTemplatePoolElements(arg0: $HolderSet_<$StructureTemplatePool>, ...arg1: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        addTemplatePoolElements(arg0: $Holder_<$StructureTemplatePool>, ...arg1: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        addTemplatePoolElements(arg0: $HolderTarget<$StructureTemplatePool_>, ...arg1: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        replaceClimate(arg0: $HolderSet_<$Biome>, arg1: $BiomeClimate_): $WorldgenModifier;
        replaceClimate(arg0: $HolderTarget<$Biome_>, arg1: $BiomeClimate_): $WorldgenModifier;
        replaceClimate(arg0: $Holder_<$Biome>, arg1: $BiomeClimate_): $WorldgenModifier;
        addSpawnCosts(arg0: $Holder_<$Biome>, arg1: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>): $WorldgenModifier;
        addSpawnCosts(arg0: $HolderSet_<$Biome>, arg1: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>): $WorldgenModifier;
        addSpawnCosts(arg0: $HolderTarget<$Biome_>, arg1: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>): $WorldgenModifier;
        addSurfaceRule(arg0: $List_<$ResourceKey_<$Level>>, arg1: $InjectionType_, arg2: $SurfaceRules$RuleSource_): $WorldgenModifier;
        addSurfaceRule(arg0: $ResourceKey_<$Level>, arg1: $InjectionType_, arg2: $SurfaceRules$RuleSource_): $WorldgenModifier;
        removeBiomeSpawns(arg0: $Holder_<$Biome>, arg1: $Holder_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $HolderTarget<$Biome_>, arg1: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $Holder_<$Biome>, arg1: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $HolderTarget<$Biome_>, arg1: $Holder_<$EntityType<never>>): $WorldgenModifier;
        removeFeatures(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $Holder_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $HolderTarget<$Biome_>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $Holder_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $HolderTarget<$Biome_>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        stackFeatures(arg0: $Holder_<$ConfiguredFeature<never, never>>, arg1: $Holder_<$PlacedFeature>, arg2: $CompositeConfig$Type_): $WorldgenModifier;
        stackFeatures(arg0: $HolderTarget<$ConfiguredFeature_<never, never>>, arg1: $Holder_<$PlacedFeature>, arg2: $CompositeConfig$Type_): $WorldgenModifier;
        stackFeatures(arg0: $HolderSet_<$ConfiguredFeature<never, never>>, arg1: $Holder_<$PlacedFeature>, arg2: $CompositeConfig$Type_): $WorldgenModifier;
        addFeatures(arg0: $HolderTarget<$Biome_>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $Holder_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $HolderTarget<$Biome_>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $Holder_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        wrapNoiseRouter(arg0: $ResourceKey_<$Level>, arg1: $NoiseRouterTarget_, arg2: $DensityFunction_): $WorldgenModifier;
        wrapNoiseRouter(arg0: $ResourceKey_<$Level>, arg1: $NoiseRouterTarget_, arg2: $Holder_<$DensityFunction>): $WorldgenModifier;
        addBiomeSpawns(arg0: $HolderTarget<$Biome_>, ...arg1: $WeightedSpawnerData_[]): $WorldgenModifier;
        addBiomeSpawns(arg0: $HolderSet_<$Biome>, ...arg1: $WeightedSpawnerData_[]): $WorldgenModifier;
        addBiomeSpawns(arg0: $Holder_<$Biome>, ...arg1: $WeightedSpawnerData_[]): $WorldgenModifier;
        replaceEffects(arg0: $HolderSet_<$Biome>, arg1: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
        replaceEffects(arg0: $HolderTarget<$Biome_>, arg1: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
        replaceEffects(arg0: $Holder_<$Biome>, arg1: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
    }
    export class $BiomeEffectsBuilder {
        static create(): $BiomeEffectsBuilder;
    }
    export interface $BiomeEffectsBuilder {
        build(): $BiomeEffects;
        waterColor(arg0: number): $BiomeEffectsBuilder;
        skyColor(arg0: number): $BiomeEffectsBuilder;
        fogColor(arg0: number): $BiomeEffectsBuilder;
        waterFogColor(arg0: number): $BiomeEffectsBuilder;
        grassColorModifier(arg0: $BiomeSpecialEffects$GrassColorModifier_): $BiomeEffectsBuilder;
        music(arg0: $Music): $BiomeEffectsBuilder;
        foliageColor(arg0: number): $BiomeEffectsBuilder;
        moodSound(arg0: $AmbientMoodSettings): $BiomeEffectsBuilder;
        grassColor(arg0: number): $BiomeEffectsBuilder;
        ambientParticle(arg0: $AmbientParticleSettings): $BiomeEffectsBuilder;
        additionsSound(arg0: $AmbientAdditionsSettings): $BiomeEffectsBuilder;
        ambientSound(arg0: $Holder_<$SoundEvent>): $BiomeEffectsBuilder;
        musicVolume(arg0: number): $BiomeEffectsBuilder;
        dryFoliageColor(arg0: number): $BiomeEffectsBuilder;
    }
    export interface $WorldgenModifier extends RegistryMarked<RegistryTypes.LithostitchedWorldgenModifierTag, RegistryTypes.LithostitchedWorldgenModifier> {}
}
