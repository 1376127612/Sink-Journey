import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Holder_, $HolderSet_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $FeatureSorter$StepFeatureData, $BiomeSource } from "@package/net/minecraft/world/level/biome";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $List, $List_, $Map_, $Map, $Set } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $GenerationStep$Carving_, $GenerationStep$Carving } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/biome/mixin" {
    export class $BiomeGenerationSettingsAccessor {
    }
    export interface $BiomeGenerationSettingsAccessor {
        wover_setFeatureSet(arg0: $Supplier_<$Set<$PlacedFeature>>): void;
        wover_setFlowerFeatures(arg0: $Supplier_<$List<$ConfiguredFeature<never, never>>>): void;
        wover_getFeatures(): $List<$HolderSet<$PlacedFeature>>;
        wover_setFeatures(arg0: $List_<$HolderSet_<$PlacedFeature>>): void;
        wover_getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        wover_setCarvers(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>): void;
    }
    export class $ChunkGeneratorAccessor {
    }
    export interface $ChunkGeneratorAccessor {
        wover_setFeaturesPerStep(arg0: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        wover_setBiomeSource(arg0: $BiomeSource): void;
        wover_getFeaturesPerStep(): $Supplier<$List<$FeatureSorter$StepFeatureData>>;
    }
    export class $HolderSetNamedAccessor<T> {
    }
    export interface $HolderSetNamedAccessor<T> {
        wover_getContents(): $List<$Holder<T>>;
        wover_setContents(arg0: $List_<$Holder_<T>>): void;
    }
}
