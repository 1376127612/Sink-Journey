import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $CraftingBookCategory_, $Ingredient_, $CraftingRecipe, $SmeltingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createSmeltingRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: $ResourceLocation_): $RecipeHolder<$SmeltingRecipe>;
        createSmeltingRecipe(arg0: $Ingredient_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $ResourceLocation_): $RecipeHolder<$SmeltingRecipe>;
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
    }
    export class $IJeiShapedRecipeBuilder {
    }
    export interface $IJeiShapedRecipeBuilder {
        group(arg0: string): $IJeiShapedRecipeBuilder;
        pattern(arg0: string): $IJeiShapedRecipeBuilder;
        build(): $CraftingRecipe;
        define(arg0: string, arg1: $Ingredient_): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiGrindstoneRecipe {
    }
    export interface $IJeiGrindstoneRecipe {
        getOutputs(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getTopInputs(): $List<$ItemStack>;
        getBottomInputs(): $List<$ItemStack>;
        getMaxXpReward(): number;
        isOutputRenderOnly(): boolean;
        getMinXpReward(): number;
        get outputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get topInputs(): $List<$ItemStack>;
        get bottomInputs(): $List<$ItemStack>;
        get maxXpReward(): number;
        get outputRenderOnly(): boolean;
        get minXpReward(): number;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getUid(): $ResourceLocation;
        getIngredients(): $List<$ItemStack>;
        getBrewingSteps(): number;
        getPotionInputs(): $List<$ItemStack>;
        getPotionOutput(): $ItemStack;
        get uid(): $ResourceLocation;
        get ingredients(): $List<$ItemStack>;
        get brewingSteps(): number;
        get potionInputs(): $List<$ItemStack>;
        get potionOutput(): $ItemStack;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getOutputs(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getLeftInputs(): $List<$ItemStack>;
        getRightInputs(): $List<$ItemStack>;
        get outputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get leftInputs(): $List<$ItemStack>;
        get rightInputs(): $List<$ItemStack>;
    }
}
