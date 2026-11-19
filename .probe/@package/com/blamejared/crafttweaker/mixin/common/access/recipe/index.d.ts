import { $RecipeHolder, $RecipeType, $RecipeHolder_, $SmithingTrimRecipe, $Ingredient_, $Ingredient, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/recipe" {
    export class $AccessRecipeManager {
    }
    export interface $AccessRecipeManager {
        crafttweaker$getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        crafttweaker$getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        crafttweaker$setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        crafttweaker$setByType(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
    }
    export class $AccessSmithingTrimRecipe {
        static crafttweaker$createSmithingTrimRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_): $SmithingTrimRecipe;
    }
    export interface $AccessSmithingTrimRecipe {
        crafttweaker$getTemplate(): $Ingredient;
        crafttweaker$getBase(): $Ingredient;
        crafttweaker$getAddition(): $Ingredient;
    }
    export class $AccessSmithingTransformRecipe {
    }
    export interface $AccessSmithingTransformRecipe {
        crafttweaker$getTemplate(): $Ingredient;
        crafttweaker$getBase(): $Ingredient;
        crafttweaker$getAddition(): $Ingredient;
    }
}
