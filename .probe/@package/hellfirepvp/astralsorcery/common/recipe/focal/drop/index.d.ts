import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $Map, $List_ } from "@package/java/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ColorWrapper, $ColumnPos_ } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/focal/drop" {
    export class $ActiveFocalCombineRecipe {
        static tryFindAtOpenSky(arg0: $ServerLevel, arg1: $BaseConstellation_, arg2: $ColumnPos_, arg3: number): ($ActiveFocalCombineRecipe) | undefined;
        finish(arg0: $FocalCombineCraftingInput, arg1: $ServerLevel): void;
        match(arg0: $ServerLevel): ($FocalCombineCraftingInput) | undefined;
        static create(arg0: $RecipeHolder_<$FocalCombineRecipe>, arg1: $BaseConstellation_, arg2: $FocalCombineCraftingInput): $ActiveFocalCombineRecipe;
        tick(): void;
        getRecipe(): $FocalCombineRecipe;
        isFinished(): boolean;
        getRecipeHolder(): $RecipeHolder<$FocalCombineRecipe>;
        get recipe(): $FocalCombineRecipe;
        get finished(): boolean;
        get recipeHolder(): $RecipeHolder<$FocalCombineRecipe>;
    }
    export class $FocalCombineRecipe extends $CustomRecipe<$FocalCombineRecipe, $FocalCombineCraftingInput> {
        matches(arg0: $FocalCombineCraftingInput, arg1: $Level_): boolean;
        getDuration(): number;
        getInputs(): $List<$Ingredient>;
        getColor(): $ColorWrapper;
        getOutputs(): $List<$ItemStack>;
        isRequiredConstellation(arg0: $BaseConstellation_): boolean;
        filterNecessaryItems(arg0: $FocalCombineCraftingInput): $List<$ItemEntity>;
        getRequiredConstellation(): ($BaseConstellation) | undefined;
        consumeInputs(arg0: $FocalCombineCraftingInput, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: $FocalCombineCraftingInput, arg1: $HolderLookup$Provider): void;
        static CODEC: $MapCodec<$FocalCombineRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FocalCombineRecipe>;
        constructor(arg0: number, arg1: $ColorWrapper, arg2: $List_<$Ingredient_>, arg3: $List_<$ItemStack_>, arg4: ($BaseConstellation_) | undefined);
        get duration(): number;
        get inputs(): $List<$Ingredient>;
        get color(): $ColorWrapper;
        get outputs(): $List<$ItemStack>;
    }
    export class $FocalCombineCraftingInput extends $CustomRecipeInput {
        getLevel(): $Level;
        getInputs(): $List<$ItemEntity>;
        getConstellation(): $BaseConstellation;
        getCenter(): $Vec3;
        getAssociatedInputs(): $Map<$ItemEntity, $ItemStack>;
        constructor(arg0: $BaseConstellation_, arg1: $Level_, arg2: $List_<$ItemEntity>);
        get level(): $Level;
        get inputs(): $List<$ItemEntity>;
        get constellation(): $BaseConstellation;
        get center(): $Vec3;
        get associatedInputs(): $Map<$ItemEntity, $ItemStack>;
    }
}
