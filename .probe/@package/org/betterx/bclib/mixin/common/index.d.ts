import { $ItemLike } from "@package/net/minecraft/world/level";
import { $MobSpawnSettings$SpawnerData, $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $Object2FloatMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $GenerationStep$Carving, $RandomState, $GenerationStep$Carving_, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/bclib/mixin/common" {
    export class $ShovelItemAccessor {
        static bclib_getFlattenables(): $Map<$Block, $BlockState>;
    }
    export interface $ShovelItemAccessor {
    }
    export class $SurfaceRulesContextAccessor {
    }
    export interface $SurfaceRulesContextAccessor {
        getChunk(): $ChunkAccess;
        getStoneDepthAbove(): number;
        getNoiseChunk(): $NoiseChunk;
        getLastUpdateY(): number;
        getStoneDepthBelow(): number;
        getLastUpdateXZ(): number;
        getBlockZ(): number;
        getBlockY(): number;
        getBlockX(): number;
        getBiome(): $Supplier<$Holder<$Biome>>;
        getRandomState(): $RandomState;
        getSurfaceDepth(): number;
        get chunk(): $ChunkAccess;
        get stoneDepthAbove(): number;
        get noiseChunk(): $NoiseChunk;
        get lastUpdateY(): number;
        get stoneDepthBelow(): number;
        get lastUpdateXZ(): number;
        get blockZ(): number;
        get blockY(): number;
        get blockX(): number;
        get biome(): $Supplier<$Holder<$Biome>>;
        get randomState(): $RandomState;
        get surfaceDepth(): number;
    }
    export class $MobSpawnSettingsAccessor {
    }
    export interface $MobSpawnSettingsAccessor {
        bcl_getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        bcl_setSpawners(arg0: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
    }
    export class $ComposterBlockAccessor {
        static bclib_getCompostables(): $Object2FloatMap<$ItemLike>;
    }
    export interface $ComposterBlockAccessor {
    }
    export class $IdMapperAccessor {
    }
    export interface $IdMapperAccessor {
        bclib_getIdToT(): $List<$Object>;
    }
    /**
     * Values that may be interpreted as {@link $IdMapperAccessor}.
     */
    export type $IdMapperAccessor_ = (() => $List_<$Object>);
    export class $BiomeGenerationSettingsAccessor {
    }
    export interface $BiomeGenerationSettingsAccessor {
        bclib_setFeatureSet(arg0: $Supplier_<$Set<$PlacedFeature>>): void;
        bclib_setFlowerFeatures(arg0: $Supplier_<$List<$ConfiguredFeature<never, never>>>): void;
        bclib_setCarvers(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>): void;
        bclib_getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        bclib_setFeatures(arg0: $List_<$HolderSet_<$PlacedFeature>>): void;
        bclib_getFeatures(): $List<$HolderSet<$PlacedFeature>>;
    }
}
