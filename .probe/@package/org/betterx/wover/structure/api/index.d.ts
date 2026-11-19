import { $BaseStructureBuilder } from "@package/org/betterx/wover/structure/api/builders";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderLookup$Provider, $Holder, $RegistryAccess, $HolderGetter } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $StructureType, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Decoration_, $GenerationStep$Decoration } from "@package/net/minecraft/world/level/levelgen";
export * as builders from "@package/org/betterx/wover/structure/api/builders";

declare module "@package/org/betterx/wover/structure/api" {
    export class $StructureKey<S extends $Structure, T extends $BaseStructureBuilder<S, T>, R extends $StructureKey<S, T, R>> {
    }
    export interface $StructureKey<S extends $Structure, T extends $BaseStructureBuilder<S, T>, R extends $StructureKey<S, T, R>> {
        getHolder(arg0: $RegistryAccess): $Holder<$Structure>;
        getHolder(arg0: $HolderLookup$Provider): $Holder<$Structure>;
        getHolder(arg0: $HolderGetter<$Structure_>): $Holder<$Structure>;
        getHolder(arg0: $BootstrapContext<never>): $Holder<$Structure>;
        biomeTag(): $TagKey<$Biome>;
        biomeTag(arg0: $TagKey_<$Biome>): R;
        type(): $StructureType<S>;
        key(): $ResourceKey<$Structure>;
        bootstrap(arg0: $BootstrapContext<$Structure_>): T;
        step(arg0: $GenerationStep$Decoration_): R;
        step(): $GenerationStep$Decoration;
    }
}
