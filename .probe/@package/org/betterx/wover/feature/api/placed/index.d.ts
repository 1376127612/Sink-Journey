import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder, $RegistryAccess, $HolderGetter } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PlacedFeature_, $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $GenerationStep$Decoration_, $GenerationStep$Decoration } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/feature/api/placed" {
    export class $BasePlacedFeatureKey<K extends $BasePlacedFeatureKey<K>> {
    }
    export interface $BasePlacedFeatureKey<K extends $BasePlacedFeatureKey<K>> {
        getHolder(arg0: $RegistryAccess): $Holder<$PlacedFeature>;
        getHolder(arg0: $HolderGetter<$PlacedFeature_>): $Holder<$PlacedFeature>;
        getHolder(arg0: $BootstrapContext<never>): $Holder<$PlacedFeature>;
        getDecoration(): $GenerationStep$Decoration;
        key(): $ResourceKey<$PlacedFeature>;
        setDecoration(arg0: $GenerationStep$Decoration_): K;
    }
}
