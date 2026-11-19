import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SurfaceRules$RuleSource } from "@package/net/minecraft/world/level/levelgen";
export * as conditions from "@package/org/betterx/wover/surface/api/conditions";

declare module "@package/org/betterx/wover/surface/api" {
    export interface $AssignedSurfaceRule extends RegistryMarked<RegistryTypes.WoverWorldgenSurfaceRulesTag, RegistryTypes.WoverWorldgenSurfaceRules> {}
    export class $AssignedSurfaceRule {
        ruleSource: $SurfaceRules$RuleSource;
        biomeID: $ResourceLocation;
        priority: number;
    }
    /**
     * Values that may be interpreted as {@link $AssignedSurfaceRule}.
     */
    export type $AssignedSurfaceRule_ = RegistryTypes.WoverWorldgenSurfaceRules;
}
