import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/org/betterx/wover/poi/api" {
    export class $PoiTypeExtension {
    }
    export interface $PoiTypeExtension {
        wover_getTag(): $TagKey<$Block>;
        wover_setTag(arg0: $TagKey_<$Block>): void;
    }
}
