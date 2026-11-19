import { $Supplier } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $RandomState, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/surface/api/conditions" {
    export class $SurfaceRulesContext {
    }
    export interface $SurfaceRulesContext {
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
}
