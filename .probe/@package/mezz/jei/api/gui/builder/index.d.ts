import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IPlaceable, $VerticalAlignment_, $HorizontalAlignment_ } from "@package/mezz/jei/api/gui/placement";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $IDrawable, $TilingDirection_ } from "@package/mezz/jei/api/gui/drawable";
import { $IRecipeSlotRichTooltipCallback_, $IRecipeSlotTooltipCallback_ } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $IJeiKeyMapping, $IClickableIngredient } from "@package/mezz/jei/api/runtime";
import { $IIngredientType_, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $ISlottedWidgetFactory_ } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/mezz/jei/api/gui/builder" {
    export class $IClickableIngredientFactory$IBuilder<T> {
    }
    export interface $IClickableIngredientFactory$IBuilder<T> {
        buildWithArea(arg0: number, arg1: number, arg2: number, arg3: number): ($IClickableIngredient<T>) | undefined;
        buildWithArea(arg0: $Rect2i): ($IClickableIngredient<T>) | undefined;
    }
    export class $IIngredientAcceptor<THIS extends $IIngredientAcceptor<THIS>> {
    }
    export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<THIS>> extends $IIngredientConsumer {
        addOptionalTypedIngredients(arg0: $List_<($ITypedIngredient<never>) | undefined>): THIS;
        addItemStack(arg0: $ItemStack_): THIS;
        addIngredient<I>(arg0: $IIngredientType_<I>, arg1: I): THIS;
        addIngredients(arg0: $Ingredient_): THIS;
        addIngredients<I>(arg0: $IIngredientType_<I>, arg1: $List_<I>): THIS;
        addFluidStack(arg0: $Fluid_, arg1: number): THIS;
        addFluidStack(arg0: $Fluid_, arg1: number, arg2: $DataComponentPatch_): THIS;
        addFluidStack(arg0: $Fluid_): THIS;
        addItemStacks(arg0: $List_<$ItemStack_>): THIS;
        addItemLike(arg0: $ItemLike_): $IIngredientConsumer;
        addTypedIngredient<I>(arg0: $ITypedIngredient<I>): THIS;
        addIngredientsUnsafe(arg0: $List_<never>): THIS;
        addTypedIngredients(arg0: $List_<$ITypedIngredient<never>>): THIS;
    }
    export class $IIngredientConsumer {
    }
    export interface $IIngredientConsumer {
        addOptionalTypedIngredients(arg0: $List_<($ITypedIngredient<never>) | undefined>): $IIngredientConsumer;
        addItemStack(arg0: $ItemStack_): $IIngredientConsumer;
        addIngredient<I>(arg0: $IIngredientType_<I>, arg1: I): $IIngredientConsumer;
        addIngredients<I>(arg0: $IIngredientType_<I>, arg1: $List_<I>): $IIngredientConsumer;
        addIngredients(arg0: $Ingredient_): $IIngredientConsumer;
        addFluidStack(arg0: $Fluid_): $IIngredientConsumer;
        addFluidStack(arg0: $Fluid_, arg1: number, arg2: $DataComponentPatch_): $IIngredientConsumer;
        addFluidStack(arg0: $Fluid_, arg1: number): $IIngredientConsumer;
        addItemStacks(arg0: $List_<$ItemStack_>): $IIngredientConsumer;
        addItemLike(arg0: $ItemLike_): $IIngredientConsumer;
        addTypedIngredient<I>(arg0: $ITypedIngredient<I>): $IIngredientConsumer;
        addIngredientsUnsafe(arg0: $List_<never>): $IIngredientConsumer;
        addTypedIngredients(arg0: $List_<$ITypedIngredient<never>>): $IIngredientConsumer;
    }
    export class $IRecipeLayoutBuilder {
    }
    export interface $IRecipeLayoutBuilder {
        addSlot(arg0: $RecipeIngredientRole_, arg1: number, arg2: number): $IRecipeSlotBuilder;
        addSlot(arg0: $RecipeIngredientRole_): $IRecipeSlotBuilder;
        addInvisibleIngredients(arg0: $RecipeIngredientRole_): $IIngredientAcceptor<never>;
        addInputSlot(arg0: number, arg1: number): $IRecipeSlotBuilder;
        addInputSlot(): $IRecipeSlotBuilder;
        addOutputSlot(arg0: number, arg1: number): $IRecipeSlotBuilder;
        addOutputSlot(): $IRecipeSlotBuilder;
        /**
         * @deprecated
         */
        addSlotToWidget(arg0: $RecipeIngredientRole_, arg1: $ISlottedWidgetFactory_<never>): $IRecipeSlotBuilder;
        setShapeless(arg0: number, arg1: number): void;
        setShapeless(): void;
        createFocusLink(...arg0: $IIngredientAcceptor<never>[]): void;
        createFocusLink(arg0: $Collection_<$IIngredientAcceptor<never>>): void;
        moveRecipeTransferButton(arg0: number, arg1: number): void;
    }
    export class $ITooltipBuilder {
    }
    export interface $ITooltipBuilder {
        clear(): void;
        add(arg0: $FormattedText): void;
        add(arg0: $TooltipComponent): void;
        addAll(arg0: $Collection_<$FormattedText>): void;
        /**
         * @deprecated
         */
        removeAll(arg0: $List_<$Component_>): void;
        getLines(): $List<$Either<$FormattedText, $TooltipComponent>>;
        /**
         * @deprecated
         */
        toLegacyToComponents(): $List<$Component>;
        clearIngredient(): void;
        setIngredient(arg0: $ITypedIngredient<never>): void;
        addKeyUsageComponent(arg0: string, arg1: $IJeiKeyMapping): void;
        get lines(): $List<$Either<$FormattedText, $TooltipComponent>>;
        set ingredient(value: $ITypedIngredient<never>);
    }
    export class $IRecipeSlotBuilder {
    }
    export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<$IRecipeSlotBuilder>, $IPlaceable<$IRecipeSlotBuilder> {
        setBackground(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeSlotBuilder;
        setPosition(arg0: number, arg1: number): $IRecipeSlotBuilder;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $IRecipeSlotBuilder;
        getWidth(): number;
        setOverlay(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeSlotBuilder;
        getHeight(): number;
        setOutputSlotBackground(): $IRecipeSlotBuilder;
        addFluidStack(arg0: $Fluid_, arg1: number): $IRecipeSlotBuilder;
        addFluidStack(arg0: $Fluid_, arg1: number, arg2: $DataComponentPatch_): $IRecipeSlotBuilder;
        setCustomRenderer<T>(arg0: $IIngredientType_<T>, arg1: $IIngredientRenderer<T>): $IRecipeSlotBuilder;
        setFluidRenderer(arg0: number, arg1: boolean, arg2: number, arg3: number): $IRecipeSlotBuilder;
        setFluidRenderer(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: $TilingDirection_): $IRecipeSlotBuilder;
        setStandardSlotBackground(): $IRecipeSlotBuilder;
        /**
         * @deprecated
         */
        addTooltipCallback(arg0: $IRecipeSlotTooltipCallback_): $IRecipeSlotBuilder;
        setHoverPadding(arg0: number, arg1: number, arg2: number, arg3: number): $IRecipeSlotBuilder;
        setSlotName(arg0: string): $IRecipeSlotBuilder;
        addRichTooltipCallback(arg0: $IRecipeSlotRichTooltipCallback_): $IRecipeSlotBuilder;
        get width(): number;
        get height(): number;
        set slotName(value: string);
    }
    export class $IClickableIngredientFactory {
    }
    export interface $IClickableIngredientFactory {
        createBuilder(arg0: $ItemStack_): $IClickableIngredientFactory$IBuilder<$ItemStack>;
        createBuilder<T>(arg0: $ITypedIngredient<T>): $IClickableIngredientFactory$IBuilder<T>;
        createBuilder<T>(arg0: $IIngredientType_<T>, arg1: T): $IClickableIngredientFactory$IBuilder<T>;
    }
}
