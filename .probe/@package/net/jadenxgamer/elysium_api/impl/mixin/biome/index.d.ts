import { $SurfaceRules$RuleSource, $SurfaceRules$RuleSource_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/jadenxgamer/elysium_api/impl/mixin/biome" {
    export class $NoiseGeneratorSettingsAccessor {
    }
    export interface $NoiseGeneratorSettingsAccessor {
        elysium_api$setSurfaceRule(arg0: $SurfaceRules$RuleSource_): void;
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettingsAccessor}.
     */
    export type $NoiseGeneratorSettingsAccessor_ = ((arg0: $SurfaceRules$RuleSource) => void);
}
