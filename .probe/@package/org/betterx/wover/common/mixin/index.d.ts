import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Set } from "@package/java/util";

declare module "@package/org/betterx/wover/common/mixin" {
    export class $BiomeSourceAccessor {
    }
    export interface $BiomeSourceAccessor {
        wover_setPossibleBiomes(arg0: $Supplier_<$Set<$Holder<$Biome>>>): void;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSourceAccessor}.
     */
    export type $BiomeSourceAccessor_ = ((arg0: $Supplier<$Set<$Holder<$Biome>>>) => void);
}
