import { $Registry } from "@package/net/minecraft/core";
import { $DamageType, $DamageType_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/level/damage" {
    export class $AccessDamageSources {
    }
    export interface $AccessDamageSources {
        crafttweaker$getDamageTypes(): $Registry<$DamageType>;
    }
    /**
     * Values that may be interpreted as {@link $AccessDamageSources}.
     */
    export type $AccessDamageSources_ = (() => $Registry<$DamageType_>);
}
