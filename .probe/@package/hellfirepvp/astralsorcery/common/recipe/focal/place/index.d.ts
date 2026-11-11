import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $List, $List_ } from "@package/java/util";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ColorWrapper, $ColumnPos_ } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $WeightedEntry$Wrapper_, $WeightedEntry$Wrapper } from "@package/net/minecraft/util/random";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/focal/place" {
    export class $ActiveFocalTransmutationRecipe {
        static tryFindAtOpenSky(arg0: $ServerLevel, arg1: $BaseConstellation_, arg2: $ColumnPos_): ($ActiveFocalTransmutationRecipe) | undefined;
        finish(arg0: $FocalTransmutationCraftingInput, arg1: $ServerLevel): void;
        match(arg0: $ServerLevel, arg1: boolean): ($FocalTransmutationCraftingInput) | undefined;
        static create(arg0: $RecipeHolder_<$FocalTransmutationRecipe>, arg1: $BaseConstellation_, arg2: $BlockPos_, arg3: number): $ActiveFocalTransmutationRecipe;
        tick(arg0: number, arg1: number): boolean;
        getTransmutationPos(): $BlockPos;
        getRecipe(): $FocalTransmutationRecipe;
        isFinished(): boolean;
        getRecipeHolder(): $RecipeHolder<$FocalTransmutationRecipe>;
        get transmutationPos(): $BlockPos;
        get recipe(): $FocalTransmutationRecipe;
        get finished(): boolean;
        get recipeHolder(): $RecipeHolder<$FocalTransmutationRecipe>;
    }
    export class $FocalTransmutationCraftingInput extends $CustomRecipeInput {
        getState(): $BlockState;
        getLevel(): $Level;
        getPos(): $BlockPos;
        getConstellation(): $BaseConstellation;
        isFocusedStarlight(): boolean;
        constructor(arg0: $BaseConstellation_, arg1: $Level_, arg2: $BlockPos_, arg3: boolean);
        get state(): $BlockState;
        get level(): $Level;
        get pos(): $BlockPos;
        get constellation(): $BaseConstellation;
        get focusedStarlight(): boolean;
    }
    export class $FocalTransmutationRecipe extends $CustomRecipe<$FocalTransmutationRecipe, $FocalTransmutationCraftingInput> {
        matches(arg0: $FocalTransmutationCraftingInput, arg1: $Level_): boolean;
        getDuration(): number;
        getColor(): $ColorWrapper;
        isRequiredConstellation(arg0: $BaseConstellation_): boolean;
        getRequiredConstellation(): ($BaseConstellation) | undefined;
        getOutputForDisplay(arg0: number): $ItemStack;
        getOutputForDisplay(): $List<$ItemStack>;
        requiresFocusedStarlight(): boolean;
        getOutputState(arg0: $RandomSource): $BlockState;
        consumeInputs(arg0: $FocalTransmutationCraftingInput, arg1: $HolderLookup$Provider): boolean;
        getOutputStates(): $List<$WeightedEntry$Wrapper<$BlockState>>;
        createOutput(arg0: $FocalTransmutationCraftingInput, arg1: $HolderLookup$Provider): void;
        getInputPredicates(): $List<$BlockPredicate>;
        getInputDisplay(): $Ingredient;
        static CODEC: $MapCodec<$FocalTransmutationRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FocalTransmutationRecipe>;
        constructor(arg0: number, arg1: $ColorWrapper, arg2: $List_<$BlockPredicate>, arg3: $Ingredient_, arg4: $List_<$WeightedEntry$Wrapper_<$BlockState_>>, arg5: ($BaseConstellation_) | undefined, arg6: boolean);
        get duration(): number;
        get color(): $ColorWrapper;
        get outputStates(): $List<$WeightedEntry$Wrapper<$BlockState>>;
        get inputPredicates(): $List<$BlockPredicate>;
        get inputDisplay(): $Ingredient;
    }
}
