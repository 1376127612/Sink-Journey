import { $LevelReader } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Predicate } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Vec3i } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $IBlockPosPredicate, $IBlockStatePredicate, $BlockPosPredicateType } from "@package/sirttas/dpanvil/api/predicate/block";
import { $Iterable_, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/sirttas/dpanvil/api/predicate/block/match" {
    export class $MatchBlockPredicate extends $Record implements $IBlockStatePredicate {
        test(arg0: $BlockState_): boolean;
        getType(): $BlockPosPredicateType<$MatchBlockPredicate>;
        block(): $Block;
        getTooltip(): $List<$Component>;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        asBlockStatePredicate(): $Predicate<$BlockState>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$MatchBlockPredicate>;
        static NAME: string;
        constructor(block: $Block_);
        get type(): $BlockPosPredicateType<$MatchBlockPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $MatchBlockPredicate}.
     */
    export type $MatchBlockPredicate_ = { block?: $Block_,  } | [block?: $Block_, ];
    export class $MatchBlockTagPredicate extends $Record implements $IBlockStatePredicate {
        test(arg0: $BlockState_): boolean;
        getType(): $BlockPosPredicateType<$MatchBlockTagPredicate>;
        tag(): $TagKey<$Block>;
        getTooltip(): $List<$Component>;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        asBlockStatePredicate(): $Predicate<$BlockState>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$MatchBlockTagPredicate>;
        static NAME: string;
        constructor(arg0: $ResourceLocation_);
        constructor(tag: $TagKey_<$Block>);
        get type(): $BlockPosPredicateType<$MatchBlockTagPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $MatchBlockTagPredicate}.
     */
    export type $MatchBlockTagPredicate_ = { tag?: $TagKey_<$Block>,  } | [tag?: $TagKey_<$Block>, ];
    export class $MatchBlockStatePredicate extends $Record implements $IBlockStatePredicate {
        test(arg0: $BlockState_): boolean;
        state(): $BlockState;
        getType(): $BlockPosPredicateType<$MatchBlockStatePredicate>;
        getTooltip(): $List<$Component>;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        asBlockStatePredicate(): $Predicate<$BlockState>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$MatchBlockStatePredicate>;
        static NAME: string;
        constructor(state: $BlockState_);
        get type(): $BlockPosPredicateType<$MatchBlockStatePredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $MatchBlockStatePredicate}.
     */
    export type $MatchBlockStatePredicate_ = { state?: $BlockState_,  } | [state?: $BlockState_, ];
    export class $MatchBlocksPredicate extends $Record implements $IBlockStatePredicate {
        test(arg0: $BlockState_): boolean;
        getType(): $BlockPosPredicateType<$MatchBlocksPredicate>;
        blocks(): $List<$Block>;
        getTooltip(): $List<$Component>;
        simplify(): $IBlockPosPredicate;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        asBlockStatePredicate(): $Predicate<$BlockState>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$MatchBlocksPredicate>;
        static NAME: string;
        constructor(blocks: $List_<$Block_>);
        constructor(arg0: $Iterable_<$Block>);
        constructor(...arg0: $Block_[]);
        get type(): $BlockPosPredicateType<$MatchBlocksPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $MatchBlocksPredicate}.
     */
    export type $MatchBlocksPredicate_ = { blocks?: $List_<$Block_>,  } | [blocks?: $List_<$Block_>, ];
}
