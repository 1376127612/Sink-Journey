import { $Cuboid6 } from "@package/codechicken/lib/vec";
import { $Record } from "@package/java/lang";

declare module "@package/codechicken/microblock/util" {
    export class $MaskedCuboid extends $Record {
        static of(arg0: $Cuboid6, arg1: number): $MaskedCuboid;
        static intern(arg0: $MaskedCuboid_): $MaskedCuboid;
        box(): $Cuboid6;
        sideMask(): number;
        constructor(box: $Cuboid6, sideMask: number);
    }
    /**
     * Values that may be interpreted as {@link $MaskedCuboid}.
     */
    export type $MaskedCuboid_ = { box?: $Cuboid6, sideMask?: number,  } | [box?: $Cuboid6, sideMask?: number, ];
}
