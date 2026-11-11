import { $Level_ } from "@package/net/minecraft/world/level";
import { $LiquidStarlightRecipeOutputModifier } from "@package/hellfirepvp/astralsorcery/common/recipe/liquid/output";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $List_ } from "@package/java/util";
import { $SizedIngredient, $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as interaction from "@package/hellfirepvp/astralsorcery/common/recipe/liquid/interaction";
export * as output from "@package/hellfirepvp/astralsorcery/common/recipe/liquid/output";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/liquid" {
    export class $LiquidStarlightRecipeInput extends $CustomRecipeInput {
        getOtherEntities(): $List<$ItemEntity>;
        static of(arg0: $ItemEntity): $LiquidStarlightRecipeInput;
        getTriggerEntity(): $ItemEntity;
        getFilteredOtherEntitiesByOutput(arg0: $List_<$LiquidStarlightRecipeOutputModifier>): $List<$ItemEntity>;
        get otherEntities(): $List<$ItemEntity>;
        get triggerEntity(): $ItemEntity;
    }
    export class $LiquidStarlightRecipe extends $CustomRecipe<$LiquidStarlightRecipe, $LiquidStarlightRecipeInput> {
        matches(arg0: $LiquidStarlightRecipeInput, arg1: $Level_): boolean;
        getDuration(): number;
        getInput(): $SizedIngredient;
        getColor(): $ColorWrapper;
        consumeInputs(arg0: $LiquidStarlightRecipeInput, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: $LiquidStarlightRecipeInput, arg1: $HolderLookup$Provider): void;
        getOutputModifiers(): $List<$LiquidStarlightRecipeOutputModifier>;
        consumesInputs(): boolean;
        consumeItemInputs(arg0: $LiquidStarlightRecipeInput): void;
        getOtherInputs(): $List<$SizedIngredient>;
        consumesLiquid(): boolean;
        getRandomAdditionalDuration(): number;
        static CODEC: $MapCodec<$LiquidStarlightRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LiquidStarlightRecipe>;
        constructor(arg0: $SizedIngredient_, arg1: $List_<$SizedIngredient_>, arg2: number, arg3: number, arg4: $ColorWrapper, arg5: $List_<$LiquidStarlightRecipeOutputModifier>, arg6: boolean, arg7: boolean);
        get duration(): number;
        get input(): $SizedIngredient;
        get color(): $ColorWrapper;
        get outputModifiers(): $List<$LiquidStarlightRecipeOutputModifier>;
        get otherInputs(): $List<$SizedIngredient>;
        get randomAdditionalDuration(): number;
    }
}
