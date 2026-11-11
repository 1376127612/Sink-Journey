import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/caffeinemc/mods/lithium/common/entity/pushable" {
    export class $EntityPushablePredicate<S> implements $Predicate<S> {
        static and<T>(arg0: $Predicate_<T>, arg1: $Predicate_<T>): $Predicate<T>;
        or(arg0: $Predicate_<S>): $Predicate<S>;
        negate(): $Predicate<S>;
        and(arg0: $Predicate_<S>): $Predicate<S>;
        constructor();
    }
    export class $BlockCachingEntity {
    }
    export interface $BlockCachingEntity {
        lithium$SetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        lithium$OnBlockCacheSet(arg0: $BlockState_): void;
        lithium$OnBlockCacheDeleted(): void;
        lithium$getCachedFeetBlockState(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $BlockCachingEntity}.
     */
    export type $BlockCachingEntity_ = (() => $BlockState_);
}
