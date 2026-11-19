import { $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/jadenxgamer/elysium_api/api/extensions" {
    export class $IElysiumBlockExtension {
    }
    export interface $IElysiumBlockExtension {
        canStickToFace(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_, arg3: $Direction_): boolean;
    }
}
