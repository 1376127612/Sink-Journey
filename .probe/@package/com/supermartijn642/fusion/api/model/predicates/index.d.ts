import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ItemModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates/item";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockStateModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates/blockstate";
import { $ModelTransform } from "@package/com/supermartijn642/fusion/api/model/custom";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";
export * as item from "@package/com/supermartijn642/fusion/api/model/predicates/item";
export * as blockstate from "@package/com/supermartijn642/fusion/api/model/predicates/blockstate";

declare module "@package/com/supermartijn642/fusion/api/model/predicates" {
    export class $ModelPredicate {
        static of(predicate: $BlockStateModelPredicate): $ModelPredicate;
        static of(predicate: $ItemModelPredicate): $ModelPredicate;
    }
    export interface $ModelPredicate {
        simplify(): $ModelPredicate;
        alwaysFalse(): boolean;
        testForItem(stack: $ItemStack_): boolean;
        testForBlockState(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_): boolean;
        alwaysTrue(): boolean;
        getSerializer(): $Serializer<$ModelPredicate>;
        or(...predicates: $ModelPredicate[]): $ModelPredicate;
        negate(): $ModelPredicate;
        and(...predicates: $ModelPredicate[]): $ModelPredicate;
        applyTransform(transform: $ModelTransform): $ModelPredicate;
        get serializer(): $Serializer<$ModelPredicate>;
    }
}
