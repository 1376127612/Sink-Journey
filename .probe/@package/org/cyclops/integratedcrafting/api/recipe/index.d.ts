import { $IRecipeDefinition } from "@package/org/cyclops/commoncapabilities/api/capability/recipehandler";
import { $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Iterator, $Set } from "@package/java/util";

declare module "@package/org/cyclops/integratedcrafting/api/recipe" {
    export class $IRecipeIndex {
    }
    export interface $IRecipeIndex {
        getRecipes(): $Set<$IRecipeDefinition>;
        getRecipes<T, M>(arg0: $IngredientComponent_<T, M>, arg1: T, arg2: M): $Iterator<$IRecipeDefinition>;
    }
}
