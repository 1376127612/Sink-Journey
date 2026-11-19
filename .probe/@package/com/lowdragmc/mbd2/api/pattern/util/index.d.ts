import { $Supplier_ } from "@package/java/util/function";
import { $Direction$Axis, $Direction$Axis_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Map$Entry, $Set } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/com/lowdragmc/mbd2/api/pattern/util" {
    export class $RelativeDirection extends $Enum<$RelativeDirection> {
        getActualFacing(arg0: $Direction_): $Direction;
        static getAisleDirection(arg0: $Direction$Axis_, arg1: $Direction_): $RelativeDirection;
        static getSliceXDirection(arg0: $Direction$Axis_, arg1: $Direction_): $RelativeDirection;
        static getSliceYDirection(arg0: $Direction$Axis_, arg1: $Direction_): $RelativeDirection;
        static values(): $RelativeDirection[];
        static valueOf(arg0: string): $RelativeDirection;
        isSameAxis(arg0: $RelativeDirection_): boolean;
        static DOWN: $RelativeDirection;
        static LEFT: $RelativeDirection;
        static RIGHT: $RelativeDirection;
        static FRONT: $RelativeDirection;
        static BACK: $RelativeDirection;
        static UP: $RelativeDirection;
        axis: $Direction$Axis;
    }
    /**
     * Values that may be interpreted as {@link $RelativeDirection}.
     */
    export type $RelativeDirection_ = "up" | "down" | "left" | "right" | "front" | "back";
    export class $PatternMatchContext {
        reset(): void;
        get<T>(arg0: string): T;
        getInt(arg0: string): number;
        entrySet(): $Set<$Map$Entry<string, $Object>>;
        increment(arg0: string, arg1: number): void;
        set(arg0: string, arg1: $Object): void;
        containsKey(arg0: string): boolean;
        getOrDefault<T>(arg0: string, arg1: T): T;
        getOrCreate<T>(arg0: string, arg1: $Supplier_<T>): T;
        getOrPut<T>(arg0: string, arg1: T): T;
        constructor();
    }
}
