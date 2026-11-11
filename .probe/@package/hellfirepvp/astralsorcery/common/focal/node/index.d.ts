import { $Level_ } from "@package/net/minecraft/world/level";
import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ColumnPos, $ColumnPos_ } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/focal/node" {
    export interface $FocalPointNode$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryFocalNodeTypesTag, RegistryTypes.AstralsorceryFocalNodeTypes> {}
    export class $FocalPointNode$Type<T extends $FocalPointNode> extends $Record {
        codec(): $MapCodec<T>;
        syncCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, syncCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $FocalPointNode$Type}.
     */
    export type $FocalPointNode$Type_<T> = RegistryTypes.AstralsorceryFocalNodeTypes | { syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FocalPointNode>, codec?: $MapCodec_<$FocalPointNode>,  } | [syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FocalPointNode>, codec?: $MapCodec_<$FocalPointNode>, ];
    export class $FocalPointNode {
        getType(): $FocalPointNode$Type<never>;
        onLoad(arg0: $ServerLevel): void;
        tick(arg0: $ServerLevel, arg1: boolean): void;
        getPos(): $ColumnPos;
        getConstellation(): $BaseConstellation;
        getTicksExisted(): number;
        tickEffects(arg0: $ClientLevel): void;
        markDirty(arg0: $Level_): void;
        onUnload(arg0: $ServerLevel): void;
        markForSync(arg0: $ServerLevel): void;
        getFocalPosition(): ($BlockPos) | undefined;
        updateFocalPosition(arg0: $Level_): void;
        static CODEC: $Codec<$FocalPointNode>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FocalPointNode>;
        constructor(arg0: $ColumnPos_, arg1: $BaseConstellation_, arg2: number, arg3: ($BlockPos_) | undefined);
        get type(): $FocalPointNode$Type<never>;
        get pos(): $ColumnPos;
        get constellation(): $BaseConstellation;
        get ticksExisted(): number;
        get focalPosition(): ($BlockPos) | undefined;
    }
}
