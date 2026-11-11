import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $BiConsumer_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/lumen/binding/usage" {
    export interface $LumenBindingUsage$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryLumenBindingUsageTypesTag, RegistryTypes.AstralsorceryLumenBindingUsageTypes> {}
    export class $LumenBindingUsage$DeferredType<T extends $LumenBindingUsage> extends $Record {
        holder(): $DeferredHolder<$LumenBindingUsage$Type<never>, $LumenBindingUsage$Type<T>>;
        constructor(holder: $DeferredHolder<$LumenBindingUsage$Type_<never>, $LumenBindingUsage$Type_<T>>);
    }
    /**
     * Values that may be interpreted as {@link $LumenBindingUsage$DeferredType}.
     */
    export type $LumenBindingUsage$DeferredType_<T> = { holder?: $DeferredHolder<$LumenBindingUsage$Type_<never>, $LumenBindingUsage$Type_<$LumenBindingUsage>>,  } | [holder?: $DeferredHolder<$LumenBindingUsage$Type_<never>, $LumenBindingUsage$Type_<$LumenBindingUsage>>, ];
    export class $LumenBindingUsage {
        getType(): $LumenBindingUsage$DeferredType<never>;
        unwrapType(): $LumenBindingUsage$Type<never>;
        getConsumptionChance(): number;
        static drainAll<T extends $LumenBindingUsage>(arg0: $LivingEntity, arg1: number, arg2: $Class<T>): void;
        static forEachUsage<T extends $LumenBindingUsage>(arg0: $LivingEntity, arg1: $Class<T>, arg2: $BiConsumer_<$ItemStack, T>): void;
        getLumenCost(): number;
        static CODEC: $Codec<$LumenBindingUsage>;
        static NONE: $LumenBindingUsage;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LumenBindingUsage>;
        get type(): $LumenBindingUsage$DeferredType<never>;
        get consumptionChance(): number;
        get lumenCost(): number;
    }
    export class $LumenBindingUsage$Type<T extends $LumenBindingUsage> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $LumenBindingUsage$Type}.
     */
    export type $LumenBindingUsage$Type_<T> = RegistryTypes.AstralsorceryLumenBindingUsageTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LumenBindingUsage>, codec?: $MapCodec_<$LumenBindingUsage>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LumenBindingUsage>, codec?: $MapCodec_<$LumenBindingUsage>, ];
}
