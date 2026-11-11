import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Climate$ParameterPoint_, $Climate$RTree } from "@package/net/minecraft/world/level/biome";
import { $List_ } from "@package/java/util";

declare module "@package/dev/worldgen/lithostitched/mixin/common/mnbs" {
    export class $ParameterListAccessor<T> {
    }
    export interface $ParameterListAccessor<T> {
        lithostitched$index(arg0: $Climate$RTree<T>): void;
        lithostitched$setValues(arg0: $List_<$Pair<$Climate$ParameterPoint_, T>>): void;
    }
}
