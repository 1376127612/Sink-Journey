import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Vec3i, $Direction_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $BlockPosPredicateType, $IBlockPosPredicate } from "@package/sirttas/dpanvil/api/predicate/block";

declare module "@package/sirttas/dpanvil/api/predicate/block/world" {
    export class $CacheBlockPredicate extends $Record implements $IBlockPosPredicate {
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        getType(): $BlockPosPredicateType<$CacheBlockPredicate>;
        predicate(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$CacheBlockPredicate>;
        static NAME: string;
        constructor(predicate: $IBlockPosPredicate);
        get type(): $BlockPosPredicateType<$CacheBlockPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $CacheBlockPredicate}.
     */
    export type $CacheBlockPredicate_ = { predicate?: $IBlockPosPredicate,  } | [predicate?: $IBlockPosPredicate, ];
    export class $OffsetBlockPredicate extends $Record implements $IBlockPosPredicate {
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        offset(): $Vec3i;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        getType(): $BlockPosPredicateType<$OffsetBlockPredicate>;
        predicate(): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        cache(): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        static CODEC: $MapCodec<$OffsetBlockPredicate>;
        static NAME: string;
        constructor(predicate: $IBlockPosPredicate, offset: $Vec3i);
        get type(): $BlockPosPredicateType<$OffsetBlockPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $OffsetBlockPredicate}.
     */
    export type $OffsetBlockPredicate_ = { predicate?: $IBlockPosPredicate, offset?: $Vec3i,  } | [predicate?: $IBlockPosPredicate, offset?: $Vec3i, ];
}
