import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AltarCraftingInput } from "@package/hellfirepvp/astralsorcery/common/recipe/altar";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/altar/output" {
    export interface $AltarRecipeOutputModifier$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryAltarOutputModifierTypesTag, RegistryTypes.AstralsorceryAltarOutputModifierTypes> {}
    export class $AltarRecipeOutputModifier {
        getType(): $AltarRecipeOutputModifier$Type<never>;
        modifyOutputForDisplay(arg0: $ItemStack_, arg1: $AltarCraftingInput, arg2: $HolderLookup$Provider, arg3: number): $ItemStack;
        modifyOutput(arg0: $ItemStack_, arg1: $AltarCraftingInput, arg2: $HolderLookup$Provider): $ItemStack;
        static CODEC: $Codec<$AltarRecipeOutputModifier>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipeOutputModifier>;
        constructor();
        get type(): $AltarRecipeOutputModifier$Type<never>;
    }
    export class $AltarRecipeOutputModifier$Type<T extends $AltarRecipeOutputModifier> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $AltarRecipeOutputModifier$Type}.
     */
    export type $AltarRecipeOutputModifier$Type_<T> = RegistryTypes.AstralsorceryAltarOutputModifierTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipeOutputModifier>, codec?: $MapCodec_<$AltarRecipeOutputModifier>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipeOutputModifier>, codec?: $MapCodec_<$AltarRecipeOutputModifier>, ];
}
