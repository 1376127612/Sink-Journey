import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/george_vi/electroenergetics/content/railway_electrification/catenary" {
    export class $CatenaryConnection extends $Record {
        getStartPos(): $Vec3;
        isAny(arg0: $BlockPos_): boolean;
        getEndingPos(): $Vec3;
        swap(): $CatenaryConnection;
        pos1(): $BlockPos;
        pos2(): $BlockPos;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CatenaryConnection>;
        constructor(pos1: $BlockPos_, pos2: $BlockPos_);
        get startPos(): $Vec3;
        get endingPos(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $CatenaryConnection}.
     */
    export type $CatenaryConnection_ = { pos1?: $BlockPos_, pos2?: $BlockPos_,  } | [pos1?: $BlockPos_, pos2?: $BlockPos_, ];
}
