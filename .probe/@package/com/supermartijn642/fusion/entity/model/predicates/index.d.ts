import { $Entity } from "@package/net/minecraft/world/entity";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/entity/model/predicates" {
    export class $EntityModelPredicate {
    }
    export interface $EntityModelPredicate {
        test(entity: $Entity): boolean;
        or(...predicates: $EntityModelPredicate[]): $EntityModelPredicate;
        negate(): $EntityModelPredicate;
        and(...predicates: $EntityModelPredicate[]): $EntityModelPredicate;
        alwaysTrue(): boolean;
        alwaysFalse(): boolean;
        simplify(): $EntityModelPredicate;
        getSerializer(): $Serializer<$EntityModelPredicate>;
        get serializer(): $Serializer<$EntityModelPredicate>;
    }
}
