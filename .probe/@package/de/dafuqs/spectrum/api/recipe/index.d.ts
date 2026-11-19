import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/api/recipe" {
    export class $WorldEffect {
        static register(arg0: string, arg1: $WorldEffect_): $WorldEffect;
        static fromString(arg0: string): $WorldEffect;
        static CODEC: $Codec<$WorldEffect>;
        static NOTHING: $WorldEffect;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WorldEffect>;
    }
    export interface $WorldEffect {
        isOneTimeEffect(): boolean;
        trigger(arg0: $ServerLevel, arg1: $BlockPos_): void;
        get oneTimeEffect(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldEffect}.
     */
    export type $WorldEffect_ = RegistryTypes.SpectrumWorldEffect;
    export interface $WorldEffect extends RegistryMarked<RegistryTypes.SpectrumWorldEffectTag, RegistryTypes.SpectrumWorldEffect> {}
}
