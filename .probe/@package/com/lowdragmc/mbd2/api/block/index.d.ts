import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Enum } from "@package/java/lang";

declare module "@package/com/lowdragmc/mbd2/api/block" {
    export class $RotationState extends $Enum<$RotationState> implements $Predicate<$Direction> {
        static values(): $RotationState[];
        test(arg0: $Direction_): boolean;
        static valueOf(arg0: string): $RotationState;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static ALL: $RotationState;
        property: ($DirectionProperty) | undefined;
        static NON_Y_AXIS: $RotationState;
        defaultDirection: $Direction;
        static NONE: $RotationState;
        static Y_AXIS: $RotationState;
    }
    /**
     * Values that may be interpreted as {@link $RotationState}.
     */
    export type $RotationState_ = "all" | "none" | "y_axis" | "non_y_axis";
}
