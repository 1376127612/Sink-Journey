import { $IJeiBrewingRecipe, $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $Class } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/category/extensions/vanilla/brewing" {
    export class $IExtendableBrewingRecipeCategory {
    }
    export interface $IExtendableBrewingRecipeCategory {
        addExtension<R>(arg0: $Class<R>, arg1: $IBrewingCategoryExtension_<R>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendableBrewingRecipeCategory}.
     */
    export type $IExtendableBrewingRecipeCategory_ = ((arg0: $Class<any>, arg1: $IBrewingCategoryExtension<any>) => void);
    export class $IBrewingCategoryExtension<R> {
    }
    export interface $IBrewingCategoryExtension<R> {
        getBrewingRecipes(arg0: R, arg1: $IVanillaRecipeFactory): $List<$IJeiBrewingRecipe>;
    }
    /**
     * Values that may be interpreted as {@link $IBrewingCategoryExtension}.
     */
    export type $IBrewingCategoryExtension_<R> = ((arg0: R, arg1: $IVanillaRecipeFactory) => $List_<$IJeiBrewingRecipe>);
}
