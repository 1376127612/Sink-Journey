import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Lumen_, $Lumen } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/lumen" {
    export class $LumenGenerationRecipe extends $CustomRecipe<$LumenGenerationRecipe, $LumenGenerationRecipeInput> {
        matches(arg0: $LumenGenerationRecipeInput, arg1: $Level_): boolean;
        getInput(): $Ingredient;
        getProducedLumenAmount(): number;
        consumeInputs(arg0: $LumenGenerationRecipeInput, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: $LumenGenerationRecipeInput, arg1: $HolderLookup$Provider): void;
        getProducedLumen(): $Lumen;
        getCatalystShatterMultiplier(): number;
        getAttemptStarlightConsumption(): number;
        getProductionAttemptMultiplier(): number;
        getLumenCombinationInputs(): $Map<$Lumen, number>;
        static CODEC: $MapCodec<$LumenGenerationRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LumenGenerationRecipe>;
        constructor(arg0: $Ingredient_, arg1: $Lumen_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Map_<$Lumen_, number>);
        get input(): $Ingredient;
        get producedLumenAmount(): number;
        get producedLumen(): $Lumen;
        get catalystShatterMultiplier(): number;
        get attemptStarlightConsumption(): number;
        get productionAttemptMultiplier(): number;
        get lumenCombinationInputs(): $Map<$Lumen, number>;
    }
    export class $LumenCrystallizationRecipe extends $CustomRecipe<$LumenCrystallizationRecipe, $LumenCrystallizationRecipeInput> {
        matches(arg0: $LumenCrystallizationRecipeInput, arg1: $Level_): boolean;
        getInput(): $Ingredient;
        getLumenToCrystallize(): $Lumen;
        consumeInputs(arg0: $LumenCrystallizationRecipeInput, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: $LumenCrystallizationRecipeInput, arg1: $HolderLookup$Provider): void;
        getCatalystShatterMultiplier(): number;
        getLumenConsumedPerOperation(): number;
        static CODEC: $MapCodec<$LumenCrystallizationRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LumenCrystallizationRecipe>;
        constructor(arg0: $Ingredient_, arg1: $Lumen_, arg2: number, arg3: number);
        get input(): $Ingredient;
        get lumenToCrystallize(): $Lumen;
        get catalystShatterMultiplier(): number;
        get lumenConsumedPerOperation(): number;
    }
    export class $LumenGenerationRecipeInput extends $CustomRecipeInput {
        static create(arg0: $ItemStack_): $LumenGenerationRecipeInput;
        getInputStack(): $ItemStack;
        get inputStack(): $ItemStack;
    }
    export class $LumenCrystallizationRecipeInput extends $CustomRecipeInput {
        static of(arg0: $ItemStack_): $LumenCrystallizationRecipeInput;
        static of(arg0: $Lumen_): $LumenCrystallizationRecipeInput;
        getCatalystInput(): $Either<$ItemStack, $Lumen>;
        get catalystInput(): $Either<$ItemStack, $Lumen>;
    }
}
