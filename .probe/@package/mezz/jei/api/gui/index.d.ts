import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientType_ } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $RecipeSlotUnderMouse, $IJeiInputHandler } from "@package/mezz/jei/api/gui/inputs";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
export * as drawable from "@package/mezz/jei/api/gui/drawable";
export * as builder from "@package/mezz/jei/api/gui/builder";
export * as handlers from "@package/mezz/jei/api/gui/handlers";
export * as widgets from "@package/mezz/jei/api/gui/widgets";
export * as buttons from "@package/mezz/jei/api/gui/buttons";
export * as inputs from "@package/mezz/jei/api/gui/inputs";
export * as ingredient from "@package/mezz/jei/api/gui/ingredient";
export * as placement from "@package/mezz/jei/api/gui/placement";

declare module "@package/mezz/jei/api/gui" {
    export class $IRecipeLayoutDrawable<R> {
    }
    export interface $IRecipeLayoutDrawable<R> {
        getRecipeBookmarkButtonArea(): $Rect2i;
        getRecipeTransferButtonArea(): $Rect2i;
        setPosition(arg0: number, arg1: number): void;
        tick(): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        getRecipe(): R;
        getSourceRecipeIds(): $List<$ResourceLocation>;
        getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: $IIngredientType_<T>): (T) | undefined;
        getInputHandler(): $IJeiInputHandler;
        getRecipeCategory(): $IRecipeCategory<R>;
        getRect(): $Rect2i;
        getRecipeSlotsView(): $IRecipeSlotsView;
        drawRecipe(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getRectWithBorder(): $Rect2i;
        drawOverlays(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getSideButtonArea(arg0: number): $Rect2i;
        getItemStackUnderMouse(arg0: number, arg1: number): ($ItemStack) | undefined;
        /**
         * @deprecated
         */
        getRecipeSlotUnderMouse(arg0: number, arg1: number): ($IRecipeSlotDrawable) | undefined;
        get recipeBookmarkButtonArea(): $Rect2i;
        get recipeTransferButtonArea(): $Rect2i;
        get recipe(): R;
        get sourceRecipeIds(): $List<$ResourceLocation>;
        get inputHandler(): $IJeiInputHandler;
        get recipeCategory(): $IRecipeCategory<R>;
        get rect(): $Rect2i;
        get recipeSlotsView(): $IRecipeSlotsView;
        get rectWithBorder(): $Rect2i;
    }
    export class $ITickTimer {
    }
    export interface $ITickTimer {
        getValue(): number;
        getMaxValue(): number;
        get value(): number;
        get maxValue(): number;
    }
}
