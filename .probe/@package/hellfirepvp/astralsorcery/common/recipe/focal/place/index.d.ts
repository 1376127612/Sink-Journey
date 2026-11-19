import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Ingredient_, $Ingredient, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
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
        isFinished(): boolean;
        static tryFindAtOpenSky(arg0: $ServerLevel, arg1: $BaseConstellation_, arg2: $ColumnPos_): ($ActiveFocalTransmutationRecipe) | undefined;
        getRecipe(): $FocalTransmutationRecipe;
        getTransmutationPos(): $BlockPos;
        getRecipeHolder(): $RecipeHolder<$FocalTransmutationRecipe>;
        finish(arg0: $FocalTransmutationCraftingInput, arg1: $ServerLevel): void;
        match(arg0: $ServerLevel, arg1: boolean): ($FocalTransmutationCraftingInput) | undefined;
        static create(arg0: $RecipeHolder_<$FocalTransmutationRecipe>, arg1: $BaseConstellation_, arg2: $BlockPos_, arg3: number): $ActiveFocalTransmutationRecipe;
        tick(arg0: number, arg1: number): boolean;
        get finished(): boolean;
        get recipe(): $FocalTransmutationRecipe;
        get transmutationPos(): $BlockPos;
        get recipeHolder(): $RecipeHolder<$FocalTransmutationRecipe>;
    }
    export class $FocalTransmutationCraftingInput extends $CustomRecipeInput {
        getPos(): $BlockPos;
        isFocusedStarlight(): boolean;
        getState(): $BlockState;
        getLevel(): $Level;
        getConstellation(): $BaseConstellation;
        constructor(arg0: $BaseConstellation_, arg1: $Level_, arg2: $BlockPos_, arg3: boolean);
        get pos(): $BlockPos;
        get focusedStarlight(): boolean;
        get state(): $BlockState;
        get level(): $Level;
        get constellation(): $BaseConstellation;
    }
    export class $FocalTransmutationRecipe extends $CustomRecipe<$FocalTransmutationRecipe, $FocalTransmutationCraftingInput> {
        getOutputState(arg0: $RandomSource): $BlockState;
        requiresFocusedStarlight(): boolean;
        getOutputForDisplay(): $List<$ItemStack>;
        getOutputForDisplay(arg0: number): $ItemStack;
        getRequiredConstellation(): ($BaseConstellation) | undefined;
        getInputDisplay(): $Ingredient;
        getInputPredicates(): $List<$BlockPredicate>;
        getOutputStates(): $List<$WeightedEntry$Wrapper<$BlockState>>;
        isRequiredConstellation(arg0: $BaseConstellation_): boolean;
        consumeInputs(arg0: $FocalTransmutationCraftingInput, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: $FocalTransmutationCraftingInput, arg1: $HolderLookup$Provider): void;
        matches(arg0: $FocalTransmutationCraftingInput, arg1: $Level_): boolean;
        getDuration(): number;
        getColor(): $ColorWrapper;
        static CODEC: $MapCodec<$FocalTransmutationRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FocalTransmutationRecipe>;
        constructor(arg0: number, arg1: $ColorWrapper, arg2: $List_<$BlockPredicate>, arg3: $Ingredient_, arg4: $List_<$WeightedEntry$Wrapper_<$BlockState_>>, arg5: ($BaseConstellation_) | undefined, arg6: boolean);
        get inputDisplay(): $Ingredient;
        get inputPredicates(): $List<$BlockPredicate>;
        get outputStates(): $List<$WeightedEntry$Wrapper<$BlockState>>;
        get duration(): number;
        get color(): $ColorWrapper;
    }
}
