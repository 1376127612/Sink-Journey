import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";

declare module "@package/org/betterx/wover/common/generator/api/chunkgenerator" {
    export class $RebuildableFeaturesPerStep<G extends $ChunkGenerator> {
    }
    export interface $RebuildableFeaturesPerStep<G extends $ChunkGenerator> {
        wover_rebuildFeaturesPerStep(): void;
    }
    /**
     * Values that may be interpreted as {@link $RebuildableFeaturesPerStep}.
     */
    export type $RebuildableFeaturesPerStep_<G> = (() => void);
}
