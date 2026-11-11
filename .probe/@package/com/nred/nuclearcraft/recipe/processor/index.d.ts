import { $SizedChanceItemIngredient, $ProcessorRecipe, $SizedChanceFluidIngredient } from "@package/com/nred/nuclearcraft/recipe";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/nred/nuclearcraft/recipe/processor" {
    export class $ProcessorRecipeDyn extends $ProcessorRecipe {
        fluidProducts: $List<$SizedChanceFluidIngredient>;
        itemIngredients: $List<$SizedChanceItemIngredient>;
        itemProducts: $List<$SizedChanceItemIngredient>;
        fluidIngredients: $List<$SizedChanceFluidIngredient>;
        constructor(arg0: string, arg1: $List_<$SizedChanceItemIngredient>, arg2: $List_<$SizedChanceItemIngredient>, arg3: $List_<$SizedChanceFluidIngredient>, arg4: $List_<$SizedChanceFluidIngredient>, arg5: number, arg6: number, arg7: number);
    }
}
