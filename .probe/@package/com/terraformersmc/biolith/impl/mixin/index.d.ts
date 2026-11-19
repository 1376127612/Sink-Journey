import { $SurfaceRules$RuleSource, $SurfaceRules$RuleSource_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/terraformersmc/biolith/impl/mixin" {
    export class $MixinChunkGeneratorSettings {
    }
    export interface $MixinChunkGeneratorSettings {
        biolith$setSurfaceRule(arg0: $SurfaceRules$RuleSource_): void;
    }
    /**
     * Values that may be interpreted as {@link $MixinChunkGeneratorSettings}.
     */
    export type $MixinChunkGeneratorSettings_ = ((arg0: $SurfaceRules$RuleSource) => void);
}
