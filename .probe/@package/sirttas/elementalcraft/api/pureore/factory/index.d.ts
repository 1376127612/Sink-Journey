import { $Holder_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $Ingredient_, $RecipeInput, $RecipeType, $RecipeManager, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Collection_, $List } from "@package/java/util";

declare module "@package/sirttas/elementalcraft/api/pureore/factory" {
    export class $IPureOreRecipeFactoryType<C extends $RecipeInput, T extends $Recipe<C>> {
    }
    export interface $IPureOreRecipeFactoryType<C extends $RecipeInput, T extends $Recipe<C>> {
        create(arg0: $RecipeManager): $IPureOreRecipeFactory<C, T>;
    }
    /**
     * Values that may be interpreted as {@link $IPureOreRecipeFactoryType}.
     */
    export type $IPureOreRecipeFactoryType_<C, T> = RegistryTypes.ElementalcraftPureOreRecipeFactoryType | ((arg0: $RecipeManager) => $IPureOreRecipeFactory<C, T>);
    export interface $IPureOreRecipeFactoryType<C, T> extends RegistryMarked<RegistryTypes.ElementalcraftPureOreRecipeFactoryTypeTag, RegistryTypes.ElementalcraftPureOreRecipeFactoryType> {}
    export class $IPureOreRecipeFactory<C extends $RecipeInput, T extends $Recipe<C>> {
    }
    export interface $IPureOreRecipeFactory<C extends $RecipeInput, T extends $Recipe<C>> {
        filter(arg0: $RecipeHolder_<T>, arg1: $ItemStack_): boolean;
        create(arg0: $RegistryAccess, arg1: T, arg2: $Ingredient_): T;
        getRecipes(arg0: $Collection_<$Holder_<$Item>>): $List<$RecipeHolder<T>>;
        getRecipeOutput(arg0: $RegistryAccess, arg1: T): $ItemStack;
        getRecipeType(): $RecipeType<T>;
        get recipeType(): $RecipeType<T>;
    }
}
