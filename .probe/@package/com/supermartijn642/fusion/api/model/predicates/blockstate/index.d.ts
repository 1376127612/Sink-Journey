import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $ModelTransform } from "@package/com/supermartijn642/fusion/api/model/custom";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/model/predicates/blockstate" {
    export class $BlockStateModelPredicate {
    }
    export interface $BlockStateModelPredicate {
        simplify(): $BlockStateModelPredicate;
        alwaysFalse(): boolean;
        alwaysTrue(): boolean;
        getSerializer(): $Serializer<$BlockStateModelPredicate>;
        asModelPredicate(): $ModelPredicate;
        test(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_): boolean;
        or(...predicates: $BlockStateModelPredicate[]): $BlockStateModelPredicate;
        negate(): $BlockStateModelPredicate;
        and(...predicates: $BlockStateModelPredicate[]): $BlockStateModelPredicate;
        applyTransform(transform: $ModelTransform): $BlockStateModelPredicate;
        get serializer(): $Serializer<$BlockStateModelPredicate>;
    }
}
