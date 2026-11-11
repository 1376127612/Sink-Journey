import { $IRecipeLayoutBuilder, $IIngredientConsumer, $ITooltipBuilder, $IRecipeSlotBuilder } from "@package/mezz/jei/api/gui/builder";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Stream } from "@package/java/util/stream";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IIngredientType_, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/gui/ingredient" {
    export class $IRecipeSlotView {
    }
    export interface $IRecipeSlotView {
        isEmpty(): boolean;
        getItemStacks(): $Stream<$ItemStack>;
        drawHighlight(arg0: $GuiGraphics, arg1: number): void;
        getIngredients<T>(arg0: $IIngredientType_<T>): $Stream<T>;
        getAllIngredients(): $Stream<$ITypedIngredient<never>>;
        getRole(): $RecipeIngredientRole;
        getSlotName(): (string) | undefined;
        getDisplayedIngredient(): ($ITypedIngredient<never>) | undefined;
        getDisplayedIngredient<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        getTagKey(): ($TagKey<never>) | undefined;
        getDisplayedItemStack(): ($ItemStack) | undefined;
        getAllIngredientsList(): $List<$ITypedIngredient<never>>;
        getDisplayedIngredients(): $Stream<$ITypedIngredient<never>>;
        get empty(): boolean;
        get itemStacks(): $Stream<$ItemStack>;
        get allIngredients(): $Stream<$ITypedIngredient<never>>;
        get role(): $RecipeIngredientRole;
        get slotName(): (string) | undefined;
        get tagKey(): ($TagKey<never>) | undefined;
        get displayedItemStack(): ($ItemStack) | undefined;
        get allIngredientsList(): $List<$ITypedIngredient<never>>;
        get displayedIngredients(): $Stream<$ITypedIngredient<never>>;
    }
    export class $IRecipeSlotRichTooltipCallback {
    }
    export interface $IRecipeSlotRichTooltipCallback {
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotRichTooltipCallback}.
     */
    export type $IRecipeSlotRichTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void);
    export class $IRecipeSlotsView {
    }
    export interface $IRecipeSlotsView {
        getSlotViews(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotView>;
        getSlotViews(): $List<$IRecipeSlotView>;
        findSlotByName(arg0: string): ($IRecipeSlotView) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotsView}.
     */
    export type $IRecipeSlotsView_ = (() => $List_<$IRecipeSlotView>);
    export class $IRecipeSlotDrawable {
    }
    export interface $IRecipeSlotDrawable extends $IRecipeSlotView {
        getAreaIncludingBackground(): $Rect2i;
        setPosition(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        draw(arg0: $GuiGraphics): void;
        draw(arg0: $GuiGraphics, arg1: boolean): void;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        /**
         * @deprecated
         */
        getTooltip(arg0: $ITooltipBuilder): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        drawTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        getRect(): $Rect2i;
        /**
         * @deprecated
         */
        addTooltipCallback(arg0: $IRecipeSlotTooltipCallback_): void;
        createDisplayOverrides(): $IIngredientConsumer;
        clearDisplayOverrides(): void;
        /**
         * @deprecated
         */
        drawHoverOverlays(arg0: $GuiGraphics): void;
        get areaIncludingBackground(): $Rect2i;
        get rect(): $Rect2i;
    }
    export class $IRecipeSlotDrawablesView {
    }
    export interface $IRecipeSlotDrawablesView {
        getSlots(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotDrawable>;
        getSlots(): $List<$IRecipeSlotDrawable>;
        findSlotByName(arg0: string): ($IRecipeSlotDrawable) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotDrawablesView}.
     */
    export type $IRecipeSlotDrawablesView_ = (() => $List_<$IRecipeSlotDrawable>);
    export class $ICraftingGridHelper {
    }
    export interface $ICraftingGridHelper {
        createAndSetNamedIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $Ingredient_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        setInputs<T>(arg0: $List_<$IRecipeSlotBuilder>, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): void;
        createAndSetInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$List_<$ItemStack_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        getCraftingIndex(arg0: number, arg1: number, arg2: number): number;
        createAndSetNamedInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$Pair<string, $List_<T>>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        createAndSetNamedInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $List_<$ItemStack_>>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Ingredient_>, arg2: number, arg3: number): void;
        createAndSetOutputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<T>): $IRecipeSlotBuilder;
        createAndSetOutputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$ItemStack_>): $IRecipeSlotBuilder;
    }
    /**
     * @deprecated
     */
    export class $IRecipeSlotTooltipCallback {
    }
    export interface $IRecipeSlotTooltipCallback {
        /**
         * @deprecated
         */
        onTooltip(arg0: $IRecipeSlotView, arg1: $List_<$Component_>): void;
        /**
         * @deprecated
         */
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotTooltipCallback}.
     */
    export type $IRecipeSlotTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $List<$Component>) => void);
}
