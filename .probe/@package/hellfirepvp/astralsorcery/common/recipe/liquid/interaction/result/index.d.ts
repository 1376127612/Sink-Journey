import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/liquid/interaction/result" {
    export interface $LiquidInteractionResult$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryLiquidInteractionResultTypesTag, RegistryTypes.AstralsorceryLiquidInteractionResultTypes> {}
    export class $LiquidInteractionResult$Type<T extends $LiquidInteractionResult> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $LiquidInteractionResult$Type}.
     */
    export type $LiquidInteractionResult$Type_<T> = RegistryTypes.AstralsorceryLiquidInteractionResultTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidInteractionResult>, codec?: $MapCodec_<$LiquidInteractionResult>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidInteractionResult>, codec?: $MapCodec_<$LiquidInteractionResult>, ];
    export class $LiquidInteractionResult {
        apply(arg0: $ServerLevel, arg1: $Vec3_): void;
        getType(): $LiquidInteractionResult$Type<never>;
        getDisplayOutput(): $ItemStack;
        static CODEC: $Codec<$LiquidInteractionResult>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidInteractionResult>;
        constructor();
        get type(): $LiquidInteractionResult$Type<never>;
        get displayOutput(): $ItemStack;
    }
}
