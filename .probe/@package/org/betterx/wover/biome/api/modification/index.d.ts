import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $MobSpawnSettings$SpawnerData, $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $Mob } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ModCore } from "@package/org/betterx/wover/core/api";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $GenerationSettingsWorker, $MobSettingsWorker } from "@package/org/betterx/wover/biome/impl/modification";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $StructureKey } from "@package/org/betterx/wover/structure/api";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BiomePredicate } from "@package/org/betterx/wover/biome/api/modification/predicates";
import { $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";
import { $BasePlacedFeatureKey } from "@package/org/betterx/wover/feature/api/placed";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $AbstractConfig$Value } from "@package/de/ambertation/wunderlib/configs";
export * as predicates from "@package/org/betterx/wover/biome/api/modification/predicates";

declare module "@package/org/betterx/wover/biome/api/modification" {
    export class $BiomeModification {
        static build(arg0: $BootstrapContext<$BiomeModification_>, arg1: $ResourceKey_<$BiomeModification>): $BiomeModification$Builder;
        static build(arg0: $BootstrapContext<$BiomeModification_>, arg1: $ResourceLocation_): $BiomeModification$Builder;
        static CODEC: $Codec<$BiomeModification>;
        static NETWORK_CODEC: $Codec<$BiomeModification>;
    }
    export interface $BiomeModification {
        biomeTags(): $List<$TagKey<$Biome>>;
        spawns(): $List<$MobSpawnSettings$SpawnerData>;
        featureKeys(): $List<$List<$ResourceKey<$PlacedFeature>>>;
        apply(arg0: $GenerationSettingsWorker, arg1: $MobSettingsWorker): void;
        predicate(): $BiomePredicate;
        features(): $List<$List<$Holder<$PlacedFeature>>>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModification}.
     */
    export type $BiomeModification_ = RegistryTypes.WoverWorldgenBiomeModifications;
    export interface $BiomeModification extends RegistryMarked<RegistryTypes.WoverWorldgenBiomeModificationsTag, RegistryTypes.WoverWorldgenBiomeModifications> {}
    export class $BiomeModification$Builder {
        isVanilla(): $BiomeModification$Builder;
        addToTag(arg0: $TagKey_<$Biome>): $BiomeModification$Builder;
        addSpawn<M extends $Mob>(arg0: $EntityType_<M>, arg1: number, arg2: number, arg3: number): $BiomeModification$Builder;
        addSpawn<M extends $Mob>(arg0: $MobSpawnSettings$SpawnerData): $BiomeModification$Builder;
        spawns(arg0: $EntityType_<never>): $BiomeModification$Builder;
        isBiome(arg0: $ResourceKey_<$Biome>): $BiomeModification$Builder;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $ResourceKey_<$PlacedFeature>): $BiomeModification$Builder;
        addFeature(arg0: $BasePlacedFeatureKey<never>): $BiomeModification$Builder;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $Holder_<$PlacedFeature>): $BiomeModification$Builder;
        inNamespace(arg0: string): $BiomeModification$Builder;
        inNamespace(arg0: $ModCore): $BiomeModification$Builder;
        inOverworld(): $BiomeModification$Builder;
        hasPlacedFeature(arg0: $ResourceKey_<$PlacedFeature>): $BiomeModification$Builder;
        notInNamespace(arg0: string): $BiomeModification$Builder;
        notInNamespace(arg0: $ModCore): $BiomeModification$Builder;
        notInBiomes(...arg0: $ResourceKey_<$Biome>[]): $BiomeModification$Builder;
        hasStructure(arg0: $ResourceKey_<$Structure>): $BiomeModification$Builder;
        inDimension(arg0: $ResourceKey_<$LevelStem>): $BiomeModification$Builder;
        hasConfiguredFeature(arg0: $ResourceKey_<$ConfiguredFeature<never, never>>): $BiomeModification$Builder;
        inNether(): $BiomeModification$Builder;
        hasConfig<T, R extends $AbstractConfig$Value<T, R>>(arg0: $AbstractConfig$Value<T, R>, arg1: T): $BiomeModification$Builder;
        inEnd(): $BiomeModification$Builder;
        inBiomes(...arg0: $ResourceKey_<$Biome>[]): $BiomeModification$Builder;
        directHolder(): $Holder<$BiomeModification>;
        addStructureSet(arg0: $TagKey_<$Biome>): $BiomeModification$Builder;
        addStructureSet(arg0: $StructureKey<never, never, never>): $BiomeModification$Builder;
        register(): $Holder<$BiomeModification>;
        predicate(arg0: $BiomePredicate): $BiomeModification$Builder;
        not(arg0: $BiomePredicate): $BiomeModification$Builder;
        allOf(...arg0: $BiomePredicate[]): $BiomeModification$Builder;
        anyOf(...arg0: $BiomePredicate[]): $BiomeModification$Builder;
        hasTag(arg0: $TagKey_<$Biome>): $BiomeModification$Builder;
        get vanilla(): $BiomeModification$Builder;
    }
}
