import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/model/predicates/item" {
    export class $ItemModelPredicate {
    }
    export interface $ItemModelPredicate {
        simplify(): $ItemModelPredicate;
        alwaysFalse(): boolean;
        alwaysTrue(): boolean;
        getSerializer(): $Serializer<$ItemModelPredicate>;
        asModelPredicate(): $ModelPredicate;
        test(stack: $ItemStack_): boolean;
        or(...predicates: $ItemModelPredicate[]): $ItemModelPredicate;
        negate(): $ItemModelPredicate;
        and(...predicates: $ItemModelPredicate[]): $ItemModelPredicate;
        get serializer(): $Serializer<$ItemModelPredicate>;
    }
}
