import { $BiConsumer_ } from "@package/java/util/function";
import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $Registry, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $MobSpawnSettings$SpawnerData, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $LinkedList, $ArrayList, $List, $List_ } from "@package/java/util";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $GenerationStep$Decoration_, $GenerationStep$Decoration } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/biome/impl/modification" {
    export class $MobSettingsWorker {
        addSpawns<M extends $Mob>(arg0: $List_<$MobSpawnSettings$SpawnerData>): void;
        finished(): boolean;
        constructor(arg0: $Biome_);
    }
    export class $FeatureMap extends $ArrayList<$LinkedList<$Holder<$PlacedFeature>>> {
        getFeatures(arg0: $GenerationStep$Decoration_): $List<$Holder<$PlacedFeature>>;
        static getFeatures(arg0: $List_<$HolderSet_<$PlacedFeature>>, arg1: $GenerationStep$Decoration_): $HolderSet<$PlacedFeature>;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $Holder_<$PlacedFeature>): void;
        static ofKeys(arg0: $List_<$List_<$ResourceKey_<$PlacedFeature>>>): $FeatureMap;
        static of(arg0: $List_<$List_<$Holder_<$PlacedFeature>>>): $FeatureMap;
        resolve(arg0: $Registry<$PlacedFeature_>): void;
        forEach(arg0: $BiConsumer_<$GenerationStep$Decoration, $Holder<$PlacedFeature>>): void;
        keys(): $List<$List<$ResourceKey<$PlacedFeature>>>;
        generic(): $List<$List<$Holder<$PlacedFeature>>>;
        static CODEC: $Codec<$List<$List<$Holder<$PlacedFeature>>>>;
        static NETWORK_CODEC: $Codec<$List<$List<$ResourceKey<$PlacedFeature>>>>;
        constructor();
    }
    export class $GenerationSettingsWorker {
        addFeatures(arg0: $FeatureMap): void;
        finished(): boolean;
        constructor(arg0: $RegistryAccess, arg1: $Biome_);
    }
}
