import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $IDrawableBuilder, $IScalableDrawable, $IDrawable, $IDrawableAnimated, $IDrawableAnimated$StartDirection_, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $IRecipeSlotDrawable, $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $Set_, $List_, $Set } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $RecipeIngredientRole_, $IRecipeManager, $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Class, $Object } from "@package/java/lang";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IIngredientAcceptor } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IRecipeWidget, $IScrollGridWidgetFactory, $IScrollBoxWidget } from "@package/mezz/jei/api/gui/widgets";
import { $ITickTimer } from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api/helpers" {
    export class $ICodecHelper {
    }
    export interface $ICodecHelper {
        getIngredientTypeCodec(): $Codec<$IIngredientType<never>>;
        getTypedIngredientCodec<T>(arg0: $IIngredientType_<T>): $Codec<$ITypedIngredient<T>>;
        getTypedIngredientCodec(): $MapCodec<$ITypedIngredient<never>>;
        getRecipeHolderCodec<T extends $RecipeHolder<never>>(): $Codec<T>;
        getSlowRecipeCategoryCodec<T>(arg0: $IRecipeCategory<T>, arg1: $IRecipeManager): $Codec<T>;
        getRecipeTypeCodec(arg0: $IRecipeManager): $Codec<$RecipeType<never>>;
        get ingredientTypeCodec(): $Codec<$IIngredientType<never>>;
        get recipeHolderCodec(): $Codec<T>;
    }
    export class $IPlatformFluidHelper<T> {
    }
    export interface $IPlatformFluidHelper<T> {
        create(arg0: $Holder_<$Fluid>, arg1: number): T;
        create(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_): T;
        getFluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
        bucketVolume(): number;
        get fluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
    }
    export class $IStackHelper {
    }
    export interface $IStackHelper {
        isEquivalent(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $UidContext_): boolean;
        /**
         * @deprecated
         */
        getUniqueIdentifierForStack(arg0: $ItemStack_, arg1: $UidContext_): string;
        getUidForStack(arg0: $ITypedIngredient<$ItemStack_>, arg1: $UidContext_): $Object;
        getUidForStack(arg0: $ItemStack_, arg1: $UidContext_): $Object;
    }
    export class $IJeiHelpers {
    }
    export interface $IJeiHelpers {
        getPlatformFluidHelper(): $IPlatformFluidHelper<never>;
        getGuiHelper(): $IGuiHelper;
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        getColorHelper(): $IColorHelper;
        getStackHelper(): $IStackHelper;
        getIngredientManager(): $IIngredientManager;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getIngredientVisibility(): $IIngredientVisibility;
        getFocusFactory(): $IFocusFactory;
        getModIdHelper(): $IModIdHelper;
        getCodecHelper(): $ICodecHelper;
        getAllRecipeTypes(): $Stream<$RecipeType<never>>;
        get platformFluidHelper(): $IPlatformFluidHelper<never>;
        get guiHelper(): $IGuiHelper;
        get colorHelper(): $IColorHelper;
        get stackHelper(): $IStackHelper;
        get ingredientManager(): $IIngredientManager;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get ingredientVisibility(): $IIngredientVisibility;
        get focusFactory(): $IFocusFactory;
        get modIdHelper(): $IModIdHelper;
        get codecHelper(): $ICodecHelper;
        get allRecipeTypes(): $Stream<$RecipeType<never>>;
    }
    export class $IColorHelper {
    }
    export interface $IColorHelper {
        getColors(arg0: $TextureAtlasSprite, arg1: number, arg2: number): $List<number>;
        getColors(arg0: $ItemStack_, arg1: number): $List<number>;
        getClosestColorName(arg0: number): string;
    }
    export class $IModIdHelper {
    }
    export interface $IModIdHelper {
        getModNameForTooltip<T>(arg0: $ITypedIngredient<T>): ($Component) | undefined;
        isDisplayingModNameEnabled(): boolean;
        getFormattedModNameComponentForModId(arg0: string): $Component;
        getModNameForModId(arg0: string): string;
        /**
         * @deprecated
         */
        getFormattedModNameForModId(arg0: string): string;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: $ITypedIngredient<T>): $List<$Component>;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: T, arg2: $IIngredientHelper<T>): $List<$Component>;
        getModAliases(arg0: string): $Set<string>;
        get displayingModNameEnabled(): boolean;
    }
    export class $IGuiHelper {
    }
    export interface $IGuiHelper {
        createScalableDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_): $IScalableDrawable;
        createScalableDrawableSprite(arg0: $ResourceLocation_): $IScalableDrawable;
        /**
         * @deprecated
         */
        getScrollBoxScrollbarExtraWidth(): number;
        createRecipeSlotDrawable(arg0: $RecipeIngredientRole_, arg1: $Consumer_<$IIngredientAcceptor<never>>, arg2: $Set_<number>, arg3: number): $IRecipeSlotDrawable;
        createRecipeSlotDrawable(arg0: $RecipeIngredientRole_, arg1: $List_<($ITypedIngredient<never>) | undefined>, arg2: $Set_<number>, arg3: number): $IRecipeSlotDrawable;
        createDrawableItemLike(arg0: $ItemLike_): $IDrawable;
        getOutputSlot(): $IDrawableStatic;
        drawableBuilder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableBuilder;
        createDrawableItemStack(arg0: $ItemStack_): $IDrawable;
        createDrawable(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableStatic;
        createBlankDrawable(arg0: number, arg1: number): $IDrawableStatic;
        getSlotDrawable(): $IDrawableStatic;
        getRecipeArrow(): $IDrawableStatic;
        getRecipePlusSign(): $IDrawableStatic;
        createTickTimer(arg0: number, arg1: number, arg2: boolean): $ITickTimer;
        createDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_, arg2: number, arg3: number): $IDrawableStatic;
        /**
         * @deprecated
         */
        createDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_): $IDrawableStatic;
        createDrawableSprite(arg0: $ResourceLocation_, arg1: number, arg2: number): $IDrawableStatic;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: $ITickTimer, arg2: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: number, arg2: $IDrawableAnimated$StartDirection_, arg3: boolean): $IDrawableAnimated;
        getRecipeFlameEmpty(): $IDrawableStatic;
        getRecipeFlameFilled(): $IDrawableStatic;
        createAnimatedRecipeFlame(arg0: number): $IDrawableAnimated;
        createCraftingGridHelper(): $ICraftingGridHelper;
        getRecipeArrowFilled(): $IDrawableStatic;
        /**
         * @deprecated
         */
        createScrollGridFactory(arg0: number, arg1: number): $IScrollGridWidgetFactory<never>;
        createDrawableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): $IDrawable;
        createDrawableIngredient<V>(arg0: $ITypedIngredient<V>): $IDrawable;
        createDrawableIngredient<V>(arg0: $IIngredientRenderer<V>, arg1: V): $IDrawable;
        createWidgetFromDrawable(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeWidget;
        createScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        /**
         * @deprecated
         */
        createScrollBoxWidget(arg0: $IDrawable, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createAnimatedRecipeArrow(arg0: number): $IDrawableAnimated;
        get scrollBoxScrollbarExtraWidth(): number;
        get outputSlot(): $IDrawableStatic;
        get slotDrawable(): $IDrawableStatic;
        get recipeArrow(): $IDrawableStatic;
        get recipePlusSign(): $IDrawableStatic;
        get recipeFlameEmpty(): $IDrawableStatic;
        get recipeFlameFilled(): $IDrawableStatic;
        get recipeArrowFilled(): $IDrawableStatic;
    }
}
