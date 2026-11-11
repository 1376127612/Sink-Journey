import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/common/brewing" {
    export class $IBrewingRecipe {
    }
    export interface $IBrewingRecipe {
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        isIngredient(arg0: $ItemStack_): boolean;
        isInput(arg0: $ItemStack_): boolean;
    }
    export class $BrewingRecipeRegistry extends $Record {
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        recipes(): $List<$IBrewingRecipe>;
        hasOutput(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        isValidInput(arg0: $ItemStack_): boolean;
        isValidIngredient(arg0: $ItemStack_): boolean;
        constructor(recipes: $List_<$IBrewingRecipe>);
    }
    /**
     * Values that may be interpreted as {@link $BrewingRecipeRegistry}.
     */
    export type $BrewingRecipeRegistry_ = { recipes?: $List_<$IBrewingRecipe>,  } | [recipes?: $List_<$IBrewingRecipe>, ];
    export class $BrewingRecipe implements $IBrewingRecipe {
        getInput(): $Ingredient;
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        getOutput(): $ItemStack;
        isIngredient(arg0: $ItemStack_): boolean;
        isInput(arg0: $ItemStack_): boolean;
        getIngredient(): $Ingredient;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_);
    }
}
