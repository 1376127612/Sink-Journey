import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record, $Class } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/lumen/binding/effect" {
    export interface $LumenBindingEffect$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryLumenBindingEffectTypesTag, RegistryTypes.AstralsorceryLumenBindingEffectTypes> {}
    export class $LumenBindingEffect$DeferredType<T extends $LumenBindingEffect> extends $Record {
        holder(): $DeferredHolder<$LumenBindingEffect$Type<never>, $LumenBindingEffect$Type<T>>;
        constructor(holder: $DeferredHolder<$LumenBindingEffect$Type_<never>, $LumenBindingEffect$Type_<T>>);
    }
    /**
     * Values that may be interpreted as {@link $LumenBindingEffect$DeferredType}.
     */
    export type $LumenBindingEffect$DeferredType_<T> = { holder?: $DeferredHolder<$LumenBindingEffect$Type_<never>, $LumenBindingEffect$Type_<$LumenBindingEffect>>,  } | [holder?: $DeferredHolder<$LumenBindingEffect$Type_<never>, $LumenBindingEffect$Type_<$LumenBindingEffect>>, ];
    export class $LumenBindingEffect {
        getType(): $LumenBindingEffect$DeferredType<never>;
        static forEachEffect<T extends $LumenBindingEffect, R>(arg0: $LivingEntity, arg1: $Class<T>, arg2: $BiFunction_<$ItemStack, T, R>): $List<R>;
        static forEachEffect<T extends $LumenBindingEffect>(arg0: $LivingEntity, arg1: $Class<T>, arg2: $BiConsumer_<$ItemStack, T>): void;
        unwrapType(): $LumenBindingEffect$Type<never>;
        getDisplayText(arg0: $LogicalSide_, arg1: $ItemStack_): $List<$Component>;
        static CODEC: $Codec<$LumenBindingEffect>;
        static NONE: $LumenBindingEffect;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LumenBindingEffect>;
        constructor();
        get type(): $LumenBindingEffect$DeferredType<never>;
    }
    export class $LumenBindingEffect$Type<T extends $LumenBindingEffect> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $LumenBindingEffect$Type}.
     */
    export type $LumenBindingEffect$Type_<T> = RegistryTypes.AstralsorceryLumenBindingEffectTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LumenBindingEffect>, codec?: $MapCodec_<$LumenBindingEffect>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LumenBindingEffect>, codec?: $MapCodec_<$LumenBindingEffect>, ];
}
