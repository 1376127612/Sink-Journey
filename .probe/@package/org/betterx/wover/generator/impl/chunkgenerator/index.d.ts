import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/org/betterx/wover/generator/impl/chunkgenerator" {
    export class $ConfiguredChunkGenerator {
    }
    export interface $ConfiguredChunkGenerator {
        wover_setConfiguredWorldPreset(arg0: $ResourceKey_<$WorldPreset>): void;
        wover_getConfiguredWorldPreset(): $ResourceKey<$WorldPreset>;
    }
}
