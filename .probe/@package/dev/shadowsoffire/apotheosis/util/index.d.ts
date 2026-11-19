import { $TagKey_ } from "@package/net/minecraft/tags";
import { $AttributeInstance } from "@package/net/minecraft/world/entity/ai/attributes";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/shadowsoffire/apotheosis/util" {
    export class $AttributeInstanceExt {
        static of(arg0: $AttributeInstance): $AttributeInstanceExt;
    }
    export interface $AttributeInstanceExt {
        apoth$getModificationCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $AttributeInstanceExt}.
     */
    export type $AttributeInstanceExt_ = (() => number);
    export class $IFestiveMarker {
    }
    export interface $IFestiveMarker {
        isMarked(): boolean;
        setMarked(arg0: boolean): void;
    }
    export class $DamageSourceExtension {
    }
    export interface $DamageSourceExtension {
        removeTag(arg0: $TagKey_<$DamageType>): void;
        addTag(arg0: $TagKey_<$DamageType>): void;
    }
}
