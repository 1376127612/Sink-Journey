import { $ImmutableList$Builder } from "@package/com/google/common/collect";
import { $StatePropertiesPredicate$PropertyMatcher, $StatePropertiesPredicate$PropertyMatcher_ } from "@package/net/minecraft/advancements/critereon";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/predicate" {
    export class $AccessStatePropertiesPredicateBuilder {
    }
    export interface $AccessStatePropertiesPredicateBuilder {
        crafttweaker$getMatchers(): $ImmutableList$Builder<$StatePropertiesPredicate$PropertyMatcher>;
    }
    /**
     * Values that may be interpreted as {@link $AccessStatePropertiesPredicateBuilder}.
     */
    export type $AccessStatePropertiesPredicateBuilder_ = (() => $ImmutableList$Builder<$StatePropertiesPredicate$PropertyMatcher_>);
}
