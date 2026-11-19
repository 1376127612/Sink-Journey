import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/enderio/enderio/mixin" {
    export class $AbstractCookingRecipeAccessor {
    }
    export interface $AbstractCookingRecipeAccessor {
        getExperience(): number;
        getResult(): $ItemStack;
        getIngredient(): $Ingredient;
        get experience(): number;
        get result(): $ItemStack;
        get ingredient(): $Ingredient;
    }
}
