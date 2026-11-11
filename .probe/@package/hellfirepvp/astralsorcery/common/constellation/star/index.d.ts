import { $BiDiPair, $Vector3, $IntPoint } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Record } from "@package/java/lang";

declare module "@package/hellfirepvp/astralsorcery/common/constellation/star" {
    export class $StarLocation extends $Record {
        x(): number;
        y(): number;
        asPoint(): $IntPoint;
        getDistanceToOrigin(): number;
        asLevelVector(): $Vector3;
        constructor(x: number, y: number);
        get distanceToOrigin(): number;
    }
    /**
     * Values that may be interpreted as {@link $StarLocation}.
     */
    export type $StarLocation_ = { y?: number, x?: number,  } | [y?: number, x?: number, ];
    export class $StarConnection extends $BiDiPair<$StarLocation, $StarLocation> {
        constructor(arg0: $StarLocation_, arg1: $StarLocation_);
    }
}
