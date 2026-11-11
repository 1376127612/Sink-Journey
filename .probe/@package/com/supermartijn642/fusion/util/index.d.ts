import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/com/supermartijn642/fusion/util" {
    export class $Triple<X, Y, Z> extends $Record {
        static of<X, Y, Z>(left: X, middle: Y, right: Z): $Triple<X, Y, Z>;
        left(): X;
        right(): Z;
        middle(): Y;
        constructor(left: X, middle: Y, right: Z);
    }
    /**
     * Values that may be interpreted as {@link $Triple}.
     */
    export type $Triple_<X, Y, Z> = { right?: any, left?: any, middle?: any,  } | [right?: any, left?: any, middle?: any, ];
    export class $Dimensional {
    }
    export interface $Dimensional {
        fusionGetDimension(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $Dimensional}.
     */
    export type $Dimensional_ = (() => $ResourceLocation_);
    export class $BiomeGetter {
    }
    export interface $BiomeGetter {
        fusionGetBiome(pos: $BlockPos_): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $BiomeGetter}.
     */
    export type $BiomeGetter_ = ((pos: $BlockPos) => $ResourceLocation_);
}
