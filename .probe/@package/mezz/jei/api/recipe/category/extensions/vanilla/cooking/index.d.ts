import { $IRecipeLayoutBuilder, $IRecipeSlotBuilder } from "@package/mezz/jei/api/gui/builder";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $IFocusGroup } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/mezz/jei/api/recipe/category/extensions/vanilla/cooking" {
    export class $ICookingCategoryExtension<R> {
    }
    export interface $ICookingCategoryExtension<R> {
        getCookingTime(arg0: R, arg1: number): number;
        getExperience(arg0: R, arg1: number): number;
        getFuel(arg0: R, arg1: $Ingredient_): $Ingredient;
        setRecipe(arg0: R, arg1: $IRecipeLayoutBuilder, arg2: $IRecipeSlotBuilder, arg3: $IRecipeSlotBuilder, arg4: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: R, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        createRecipeExtras(arg0: R, arg1: $IRecipeExtrasBuilder, arg2: $IFocusGroup): void;
        getSourceRecipeIds(arg0: R): $List<$ResourceLocation>;
        isHandled(arg0: R): boolean;
        getFuelOutput(arg0: R, arg1: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ICookingCategoryExtension}.
     */
    export type $ICookingCategoryExtension_<R> = ((arg0: R, arg1: $IRecipeLayoutBuilder, arg2: $IRecipeSlotBuilder, arg3: $IRecipeSlotBuilder, arg4: $IFocusGroup) => void);
    export class $IExtendableCookingRecipeCategory {
    }
    export interface $IExtendableCookingRecipeCategory {
        addExtension<R>(arg0: $Class<R>, arg1: $ICookingCategoryExtension_<R>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendableCookingRecipeCategory}.
     */
    export type $IExtendableCookingRecipeCategory_ = ((arg0: $Class<any>, arg1: $ICookingCategoryExtension<any>) => void);
}
