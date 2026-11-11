import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $SourceTraitRollContext_, $SourceTrait$Type_ } from "@package/sirttas/elementalcraft/api/source/trait";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/sirttas/elementalcraft/api/source/trait/value" {
    export class $ISourceTraitValue {
    }
    export interface $ISourceTraitValue {
        getValue(arg0: $SourceTrait$Type_): number;
        isActive(arg0: $Level_, arg1: $BlockPos_): boolean;
        getDescription(): $Component;
        get description(): $Component;
    }
    export class $ISourceTraitValueProvider {
        static CODEC: $Codec<$ISourceTraitValueProvider>;
    }
    export interface $ISourceTraitValueProvider {
        /**
         * @deprecated
         */
        load(arg0: $Tag_): $ISourceTraitValue;
        /**
         * @deprecated
         */
        save(arg0: $ISourceTraitValue): $Tag;
        getType(): $SourceTraitValueProviderType<never>;
        roll(arg0: $SourceTraitRollContext_, arg1: $Level_, arg2: $BlockPos_): $ISourceTraitValue;
        breed(arg0: $SourceTraitRollContext_, arg1: $ISourceTraitValue | null, arg2: $ISourceTraitValue | null): $ISourceTraitValue;
        valueCodec(): $Codec<$ISourceTraitValue>;
        valueStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ISourceTraitValue>;
        get type(): $SourceTraitValueProviderType<never>;
    }
    export class $SourceTraitValueProviderType<T extends $ISourceTraitValueProvider> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $SourceTraitValueProviderType}.
     */
    export type $SourceTraitValueProviderType_<T> = RegistryTypes.ElementalcraftSourceTraitValueProviderType | { codec?: $MapCodec_<$ISourceTraitValueProvider>,  } | [codec?: $MapCodec_<$ISourceTraitValueProvider>, ];
    export interface $SourceTraitValueProviderType<T> extends RegistryMarked<RegistryTypes.ElementalcraftSourceTraitValueProviderTypeTag, RegistryTypes.ElementalcraftSourceTraitValueProviderType> {}
}
