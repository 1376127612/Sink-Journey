import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TileInfuser, $TileChalice$LiquidDrawInstance } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CustomRecipe, $ActiveRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/infusion" {
    export class $InfusionRecipe extends $CustomRecipe<$InfusionRecipe, $InfusionRecipeInput> {
        getFluidConsumptionChance(): number;
        consumeMultipleFluids(): boolean;
        getFluidInput(): $Fluid;
        getItemInput(): $Ingredient;
        acceptChaliceInput(): boolean;
        getChaliceInputFluidStack(): $FluidStack;
        consumeInputs(arg0: $InfusionRecipeInput, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: $InfusionRecipeInput, arg1: $HolderLookup$Provider): void;
        matches(arg0: $InfusionRecipeInput, arg1: $Level_): boolean;
        getDuration(): number;
        getOutput(): $ItemStack;
        static CODEC: $MapCodec<$InfusionRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $InfusionRecipe>;
        constructor(arg0: $Ingredient_, arg1: $Fluid_, arg2: number, arg3: $ItemStack_, arg4: number, arg5: boolean, arg6: boolean);
        get fluidConsumptionChance(): number;
        get fluidInput(): $Fluid;
        get itemInput(): $Ingredient;
        get chaliceInputFluidStack(): $FluidStack;
        get duration(): number;
        get output(): $ItemStack;
    }
    export class $ActiveInfusionRecipe extends $ActiveRecipe<$InfusionRecipe> {
        isFinished(arg0: $Level_): boolean;
        consumeInputs(arg0: $TileInfuser, arg1: $Level_): boolean;
        getProgressTick(): number;
        getDrawInstance(): $TileChalice$LiquidDrawInstance;
        matches(arg0: $Level_, arg1: $TileInfuser): boolean;
        static of(arg0: $RecipeHolder_<$InfusionRecipe>): $ActiveInfusionRecipe;
        tick(arg0: $Level_): void;
        static CODEC: $Codec<$ActiveInfusionRecipe>;
        get progressTick(): number;
        get drawInstance(): $TileChalice$LiquidDrawInstance;
    }
    export class $InfusionRecipeInput extends $CustomRecipeInput {
        getItemInput(): $ItemStack;
        getFluidInputs(): $Map<$BlockPos, $FluidState>;
        static of(arg0: $ItemStack_, arg1: $Level_, arg2: $Map_<$BlockPos_, $FluidState>): $InfusionRecipeInput;
        getLevel(): $Level;
        get itemInput(): $ItemStack;
        get fluidInputs(): $Map<$BlockPos, $FluidState>;
        get level(): $Level;
    }
}
