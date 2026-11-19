import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $SurfaceRules$RuleSource, $SurfaceRules$RuleSource_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/common/surface/api" {
    export class $SurfaceRuleProvider {
    }
    export interface $SurfaceRuleProvider {
        wover_getOriginalSurfaceRules(): $SurfaceRules$RuleSource;
        wover_overwriteSurfaceRules(arg0: $SurfaceRules$RuleSource_): void;
    }
    export class $InjectableSurfaceRules<G extends $ChunkGenerator> {
    }
    export interface $InjectableSurfaceRules<G extends $ChunkGenerator> {
        wover_injectSurfaceRules(arg0: $Registry<$LevelStem_>, arg1: $ResourceKey_<$LevelStem>): void;
    }
    /**
     * Values that may be interpreted as {@link $InjectableSurfaceRules}.
     */
    export type $InjectableSurfaceRules_<G> = ((arg0: $Registry<$LevelStem>, arg1: $ResourceKey<$LevelStem>) => void);
}
