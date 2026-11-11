import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LiquidStarlightRecipe, $LiquidStarlightRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe/liquid";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/liquid/output" {
    export class $LiquidStarlightRecipeOutputModifier {
        getType(): $LiquidStarlightRecipeOutputModifier$Type<never>;
        isValidInputForOutput(arg0: $LiquidStarlightRecipeInput, arg1: $List_<$ItemEntity>): boolean;
        playCraftingEffects(arg0: $LiquidStarlightRecipe, arg1: $LiquidStarlightRecipeInput, arg2: $RandomSource, arg3: number): void;
        createOutput(arg0: $LiquidStarlightRecipe, arg1: $LiquidStarlightRecipeInput): void;
        isOutput(arg0: $LiquidStarlightRecipeInput, arg1: $ItemEntity): boolean;
        static CODEC: $Codec<$LiquidStarlightRecipeOutputModifier>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidStarlightRecipeOutputModifier>;
        constructor();
        get type(): $LiquidStarlightRecipeOutputModifier$Type<never>;
    }
    export class $LiquidStarlightRecipeOutputModifier$Type<T extends $LiquidStarlightRecipeOutputModifier> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $LiquidStarlightRecipeOutputModifier$Type}.
     */
    export type $LiquidStarlightRecipeOutputModifier$Type_<T> = RegistryTypes.AstralsorceryLiquidStarlightOutputModifierTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidStarlightRecipeOutputModifier>, codec?: $MapCodec_<$LiquidStarlightRecipeOutputModifier>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidStarlightRecipeOutputModifier>, codec?: $MapCodec_<$LiquidStarlightRecipeOutputModifier>, ];
    export interface $LiquidStarlightRecipeOutputModifier$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryLiquidStarlightOutputModifierTypesTag, RegistryTypes.AstralsorceryLiquidStarlightOutputModifierTypes> {}
}
