import { $LevelReader } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $OrBlockPredicate, $AndBlockPredicate, $NoneBlockPredicate, $AnyBlockPredicate, $NotBlockPredicate } from "@package/sirttas/dpanvil/api/predicate/block/logical";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $FacingBlockPredicate } from "@package/sirttas/dpanvil/api/predicate/block/direction";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $MatchBlockTagPredicate, $MatchBlockStatePredicate, $MatchBlockPredicate, $MatchBlocksPredicate } from "@package/sirttas/dpanvil/api/predicate/block/match";
import { $CacheBlockPredicate, $OffsetBlockPredicate } from "@package/sirttas/dpanvil/api/predicate/block/world";
import { $Predicate } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Registry, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
export * as world from "@package/sirttas/dpanvil/api/predicate/block/world";
export * as logical from "@package/sirttas/dpanvil/api/predicate/block/logical";
export * as match from "@package/sirttas/dpanvil/api/predicate/block/match";
export * as direction from "@package/sirttas/dpanvil/api/predicate/block/direction";

declare module "@package/sirttas/dpanvil/api/predicate/block" {
    export class $BlockPosPredicateType<T extends $IBlockPosPredicate> extends $Record {
        static register(arg0: $IEventBus): void;
        codec(): $MapCodec<T>;
        static OR: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$OrBlockPredicate>>;
        static MATCH_TAG: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$MatchBlockTagPredicate>>;
        static MATCH_BLOCK: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$MatchBlockPredicate>>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$BlockPosPredicateType<never>>>;
        static ANY: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$AnyBlockPredicate>>;
        static CACHE: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$CacheBlockPredicate>>;
        static NOT: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$NotBlockPredicate>>;
        static AND: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$AndBlockPredicate>>;
        static OFFSET: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$OffsetBlockPredicate>>;
        static MATCH_BLOCKS: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$MatchBlocksPredicate>>;
        static NONE: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$NoneBlockPredicate>>;
        static FACING: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$FacingBlockPredicate>>;
        static REGISTRY: $Registry<$BlockPosPredicateType<never>>;
        static MATCH_STATE: $DeferredHolder<$BlockPosPredicateType<never>, $BlockPosPredicateType<$MatchBlockStatePredicate>>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $BlockPosPredicateType}.
     */
    export type $BlockPosPredicateType_<T> = RegistryTypes.DpanvilBlockPosPredicate | { codec?: $MapCodec_<$IBlockPosPredicate>,  } | [codec?: $MapCodec_<$IBlockPosPredicate>, ];
    export class $IBlockPosPredicate {
        static match(arg0: $BlockState_): $IBlockPosPredicate;
        static match(arg0: $TagKey_<$Block>): $IBlockPosPredicate;
        static match(...arg0: $Block_[]): $IBlockPosPredicate;
        static any(): $IBlockPosPredicate;
        static none(): $IBlockPosPredicate;
        static createOr(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        static createAnd(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        static CODEC: $Codec<$IBlockPosPredicate>;
    }
    export interface $IBlockPosPredicate {
        cache(): $IBlockPosPredicate;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        getType(): $BlockPosPredicateType<$IBlockPosPredicate>;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        simplify(): $IBlockPosPredicate;
        get type(): $BlockPosPredicateType<$IBlockPosPredicate>;
        get tooltip(): $List<$Component>;
    }
    export interface $BlockPosPredicateType<T> extends RegistryMarked<RegistryTypes.DpanvilBlockPosPredicateTag, RegistryTypes.DpanvilBlockPosPredicate> {}
    export class $IBlockStatePredicate {
    }
    export interface $IBlockStatePredicate extends $IBlockPosPredicate {
        test(arg0: $BlockState_): boolean;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        asBlockStatePredicate(): $Predicate<$BlockState>;
    }
}
