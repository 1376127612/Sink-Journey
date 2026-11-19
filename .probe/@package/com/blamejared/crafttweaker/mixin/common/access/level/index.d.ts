import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as damage from "@package/com/blamejared/crafttweaker/mixin/common/access/level/damage";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/level" {
    export class $AccessExplosion {
    }
    export interface $AccessExplosion {
        crafttweaker$getDamageSource(): $DamageSource;
    }
    /**
     * Values that may be interpreted as {@link $AccessExplosion}.
     */
    export type $AccessExplosion_ = (() => $DamageSource_);
}
