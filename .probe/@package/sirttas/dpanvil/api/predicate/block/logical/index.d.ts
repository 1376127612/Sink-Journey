import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Vec3i, $Direction_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable_, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $BlockPosPredicateType, $IBlockPosPredicate } from "@package/sirttas/dpanvil/api/predicate/block";

declare module "@package/sirttas/dpanvil/api/predicate/block/logical" {
    export class $AnyBlockPredicate implements $IBlockPosPredicate {
        static get(): $IBlockPosPredicate;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        getType(): $BlockPosPredicateType<$AnyBlockPredicate>;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$AnyBlockPredicate>;
        static NAME: string;
        get type(): $BlockPosPredicateType<$AnyBlockPredicate>;
        get tooltip(): $List<$Component>;
    }
    export class $AndBlockPredicate extends $AbstractListBlockPredicate {
        static CODEC: $MapCodec<$AndBlockPredicate>;
        static NAME: string;
        constructor(...arg0: $IBlockPosPredicate[]);
        constructor(arg0: $Iterable_<$IBlockPosPredicate>);
    }
    export class $NotBlockPredicate extends $Record implements $IBlockPosPredicate {
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        getType(): $BlockPosPredicateType<$NotBlockPredicate>;
        predicate(): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        simplify(): $IBlockPosPredicate;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        static CODEC: $MapCodec<$NotBlockPredicate>;
        static NAME: string;
        constructor(predicate: $IBlockPosPredicate);
        get type(): $BlockPosPredicateType<$NotBlockPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $NotBlockPredicate}.
     */
    export type $NotBlockPredicate_ = { predicate?: $IBlockPosPredicate,  } | [predicate?: $IBlockPosPredicate, ];
    export class $AbstractListBlockPredicate implements $IBlockPosPredicate {
        getPredicates(): $List<$IBlockPosPredicate>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        simplify(): $IBlockPosPredicate;
        get predicates(): $List<$IBlockPosPredicate>;
        get tooltip(): $List<$Component>;
    }
    export class $OrBlockPredicate extends $AbstractListBlockPredicate {
        static CODEC: $MapCodec<$OrBlockPredicate>;
        static NAME: string;
        constructor(...arg0: $IBlockPosPredicate[]);
        constructor(arg0: $Iterable_<$IBlockPosPredicate>);
    }
    export class $NoneBlockPredicate implements $IBlockPosPredicate {
        static get(): $IBlockPosPredicate;
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_ | null): boolean;
        getType(): $BlockPosPredicateType<$NoneBlockPredicate>;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        simplify(): $IBlockPosPredicate;
        static CODEC: $MapCodec<$NoneBlockPredicate>;
        static NAME: string;
        get type(): $BlockPosPredicateType<$NoneBlockPredicate>;
        get tooltip(): $List<$Component>;
    }
}
