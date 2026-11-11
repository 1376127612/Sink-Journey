import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Vec3i, $Direction_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $BlockPosPredicateType, $IBlockPosPredicate } from "@package/sirttas/dpanvil/api/predicate/block";

declare module "@package/sirttas/dpanvil/api/predicate/block/direction" {
    export class $FacingBlockPredicate extends $Enum<$FacingBlockPredicate> implements $IBlockPosPredicate {
        static values(): $FacingBlockPredicate[];
        test(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static valueOf(arg0: string): $FacingBlockPredicate;
        getType(): $BlockPosPredicateType<$IBlockPosPredicate>;
        cache(): $IBlockPosPredicate;
        offset(arg0: $Vec3i): $IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): $IBlockPosPredicate;
        or(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        and(...arg0: $IBlockPosPredicate[]): $IBlockPosPredicate;
        not(): $IBlockPosPredicate;
        getTooltip(): $List<$Component>;
        simplify(): $IBlockPosPredicate;
        static DOWN: $FacingBlockPredicate;
        static CODEC: $MapCodec<$FacingBlockPredicate>;
        static NORTH: $FacingBlockPredicate;
        static WEST: $FacingBlockPredicate;
        static UP: $FacingBlockPredicate;
        static SOUTH: $FacingBlockPredicate;
        static EAST: $FacingBlockPredicate;
        static NAME: string;
        get type(): $BlockPosPredicateType<$IBlockPosPredicate>;
        get tooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $FacingBlockPredicate}.
     */
    export type $FacingBlockPredicate_ = "down" | "up" | "north" | "south" | "west" | "east";
}
