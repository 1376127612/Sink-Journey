import { $Function_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $IntRange } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as tooltip from "@package/hellfirepvp/astralsorcery/common/util/tooltip";
export * as data from "@package/hellfirepvp/astralsorcery/common/util/data";
export * as inventory from "@package/hellfirepvp/astralsorcery/common/util/inventory";
export * as tank from "@package/hellfirepvp/astralsorcery/common/util/tank";

declare module "@package/hellfirepvp/astralsorcery/common/util" {
    export class $RandomMobEffectInstance {
        static of(arg0: $Holder_<$MobEffect>, arg1: $IntRange, arg2: $IntRange, arg3: $RandomMobEffectInstance | null): $RandomMobEffectInstance;
        static of(arg0: $Holder_<$MobEffect>, arg1: $IntRange, arg2: $IntRange): $RandomMobEffectInstance;
        getEffect(): $Holder<$MobEffect>;
        getDisplay(): $Component;
        getDurationRange(): $IntRange;
        getAmplifierRange(): $IntRange;
        getHiddenEffect(): ($RandomMobEffectInstance) | undefined;
        createEffect(arg0: $RandomSource): $MobEffectInstance;
        static CODEC: $Codec<$RandomMobEffectInstance>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RandomMobEffectInstance>;
        get effect(): $Holder<$MobEffect>;
        get display(): $Component;
        get durationRange(): $IntRange;
        get amplifierRange(): $IntRange;
        get hiddenEffect(): ($RandomMobEffectInstance) | undefined;
    }
    export class $MutableIdentity {
        getIdentifier(): string;
        setIdentifier(arg0: string): void;
    }
    export class $TriFunction<S, T, U, R> {
    }
    export interface $TriFunction<S, T, U, R> {
        apply(arg0: S, arg1: T, arg2: U): R;
        andThen<V>(arg0: $Function_<R, V>): $TriFunction<S, T, U, V>;
    }
    /**
     * Values that may be interpreted as {@link $TriFunction}.
     */
    export type $TriFunction_<S, T, U, R> = ((arg0: S, arg1: T, arg2: U) => R);
}
