import { $IRecipeCategoryDecorator } from "@package/mezz/jei/api/recipe/category/extensions";
import { $IExtendableCookingRecipeCategory, $ICookingCategoryExtension_ } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/cooking";
import { $Codec } from "@package/com/mojang/serialization";
import { $IExtendableSmithingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/smithing";
import { $Collection_, $List_, $Collection } from "@package/java/util";
import { $IExtendableCraftingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/crafting";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Consumer_ } from "@package/java/util/function";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $IRecipeButtonControllerFactory_, $ISimpleRecipeManagerPlugin, $IRecipeManagerPlugin, $IRecipeManagerPluginHelper } from "@package/mezz/jei/api/recipe/advanced";
import { $ISubtypeInterpreter, $IIngredientSubtypeInterpreter_, $ISubtypeManager } from "@package/mezz/jei/api/ingredients/subtypes";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IGhostIngredientHandler, $IGuiContainerHandler, $IScreenHandler_, $IGlobalGuiHandler } from "@package/mezz/jei/api/gui/handlers";
import { $ISearchStorageFactory, $ISearchStorageFactory_, $ISearchStorageBuilderFactory_, $ISearchStorageBuilderFactory } from "@package/mezz/jei/api/search";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $IJeiHelpers, $IColorHelper } from "@package/mezz/jei/api/helpers";
import { $IExtendableBrewingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/brewing";
import { $IRecipeTransferManager, $IRecipeTransferHandler, $IUniversalRecipeTransferHandler, $IRecipeTransferListener, $IRecipeTransferHandlerHelper, $IRecipeTransferInfo } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipesGui, $IEditModeConfig, $IJeiFeatures, $IIngredientListOverlay, $IBookmarkManager, $IScreenHelper, $IIngredientVisibility, $IIngredientFilter, $IBookmarkOverlay, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IIngredientAcceptor } from "@package/mezz/jei/api/gui/builder";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";

declare module "@package/mezz/jei/api/registration" {
    export class $IVanillaCategoryExtensionRegistration {
    }
    export interface $IVanillaCategoryExtensionRegistration {
        getSmeltingCategory(): $IExtendableCookingRecipeCategory;
        getCampfireCookingCategory(): $IExtendableCookingRecipeCategory;
        getBlastingCategory(): $IExtendableCookingRecipeCategory;
        getSmithingCategory(): $IExtendableSmithingRecipeCategory;
        getCraftingCategory(): $IExtendableCraftingRecipeCategory;
        getJeiHelpers(): $IJeiHelpers;
        getBrewingCategory(): $IExtendableBrewingRecipeCategory;
        getSmokingCategory(): $IExtendableCookingRecipeCategory;
        addCookingCategoryExtension<R>(arg0: $Class<R>, arg1: $ICookingCategoryExtension_<R>): void;
        get smeltingCategory(): $IExtendableCookingRecipeCategory;
        get campfireCookingCategory(): $IExtendableCookingRecipeCategory;
        get blastingCategory(): $IExtendableCookingRecipeCategory;
        get smithingCategory(): $IExtendableSmithingRecipeCategory;
        get craftingCategory(): $IExtendableCraftingRecipeCategory;
        get jeiHelpers(): $IJeiHelpers;
        get brewingCategory(): $IExtendableBrewingRecipeCategory;
        get smokingCategory(): $IExtendableCookingRecipeCategory;
    }
    export class $IModInfoRegistration {
    }
    export interface $IModInfoRegistration {
        addModAliases(arg0: string, arg1: $Collection_<string>): void;
        addModAliases(arg0: string, ...arg1: string[]): void;
    }
    /**
     * Values that may be interpreted as {@link $IModInfoRegistration}.
     */
    export type $IModInfoRegistration_ = ((arg0: string, arg1: $Collection<string>) => void);
    export class $IAdvancedSearchRegistration {
    }
    export interface $IAdvancedSearchRegistration {
        replaceSearchStorage(arg0: $ISearchStorageFactory_): void;
        replaceSearchStorage(arg0: $ISearchStorageBuilderFactory_): void;
        getDefaultSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        get defaultSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
    }
    export class $IRecipeCatalystRegistration {
    }
    export interface $IRecipeCatalystRegistration {
        getIngredientManager(): $IIngredientManager;
        addRecipeCatalysts<T>(arg0: $RecipeType<never>, arg1: $IIngredientType_<T>, arg2: $List_<T>): void;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemStack_[]): void;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemLike_[]): void;
        getJeiHelpers(): $IJeiHelpers;
        addRecipeCatalyst<T>(arg0: $IIngredientType_<T>, arg1: T, ...arg2: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemStack_, ...arg1: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemLike_, ...arg1: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $RecipeType<never>, arg1: $Consumer_<$IIngredientAcceptor<never>>): void;
        get ingredientManager(): $IIngredientManager;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IExtraIngredientRegistration {
    }
    export interface $IExtraIngredientRegistration {
        addExtraIngredients<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        addExtraItemStacks(arg0: $Collection_<$ItemStack_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtraIngredientRegistration}.
     */
    export type $IExtraIngredientRegistration_ = ((arg0: $IIngredientType<any>, arg1: $Collection<any>) => void);
    export class $IRecipeCategoryRegistration {
    }
    export interface $IRecipeCategoryRegistration {
        addRecipeCategories(...arg0: $IRecipeCategory<never>[]): void;
        getJeiHelpers(): $IJeiHelpers;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $ISubtypeRegistration {
    }
    export interface $ISubtypeRegistration {
        /**
         * @deprecated
         */
        registerSubtypeInterpreter(arg0: $Item_, arg1: $IIngredientSubtypeInterpreter_<$ItemStack>): void;
        /**
         * @deprecated
         */
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $IIngredientSubtypeInterpreter_<I>): void;
        registerSubtypeInterpreter(arg0: $Item_, arg1: $ISubtypeInterpreter<$ItemStack_>): void;
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $ISubtypeInterpreter<I>): void;
    }
    export class $IAdvancedRegistration {
    }
    export interface $IAdvancedRegistration {
        addRecipeManagerPlugin(arg0: $IRecipeManagerPlugin): void;
        addRecipeCategoryDecorator<T>(arg0: $RecipeType<T>, arg1: $IRecipeCategoryDecorator<T>): void;
        addRecipeButtonFactory(arg0: $IRecipeButtonControllerFactory_): void;
        /**
         * @deprecated
         */
        getJeiFeatures(): $IJeiFeatures;
        getJeiHelpers(): $IJeiHelpers;
        getRecipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
        addTypedRecipeManagerPlugin<T>(arg0: $RecipeType<T>, arg1: $ISimpleRecipeManagerPlugin<T>): void;
        get jeiFeatures(): $IJeiFeatures;
        get jeiHelpers(): $IJeiHelpers;
        get recipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
    }
    export class $IIngredientAliasRegistration {
    }
    export interface $IIngredientAliasRegistration {
        addAlias<I>(arg0: $ITypedIngredient<I>, arg1: string): void;
        addAlias<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: string): void;
        addAlias<I>(arg0: $IIngredientType_<I>, arg1: I, arg2: string): void;
        addAlias(arg0: $ItemStack_, arg1: string): void;
        addAlias(arg0: $Item_, arg1: string): void;
        addAlias(arg0: $Fluid_, arg1: string): void;
        addAliases<I>(arg0: $Collection_<$ITypedIngredient<I>>, arg1: string): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: $Collection_<I>, arg2: string): void;
        addAliases<I>(arg0: $ITypedIngredient<I>, arg1: $Collection_<string>): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: $Collection_<I>, arg2: $Collection_<string>): void;
        addAliases<I>(arg0: $Collection_<$ITypedIngredient<I>>, arg1: $Collection_<string>): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: I, arg2: $Collection_<string>): void;
        addAliases(arg0: $Item_, arg1: $Collection_<string>): void;
        addAliases(arg0: $Fluid_, arg1: $Collection_<string>): void;
        addAliases<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $Collection_<string>): void;
    }
    export class $IRuntimeRegistration {
    }
    export interface $IRuntimeRegistration {
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        /**
         * @deprecated
         */
        getSearchStorageFactory(): $ISearchStorageFactory;
        setIngredientFilter(arg0: $IIngredientFilter): void;
        setIngredientListOverlay(arg0: $IIngredientListOverlay): void;
        getIngredientManager(): $IIngredientManager;
        getRecipeTransferManager(): $IRecipeTransferManager;
        getRecipeManager(): $IRecipeManager;
        getJeiHelpers(): $IJeiHelpers;
        setBookmarkOverlay(arg0: $IBookmarkOverlay): void;
        getEditModeConfig(): $IEditModeConfig;
        setRecipesGui(arg0: $IRecipesGui): void;
        setBookmarkManager(arg0: $IBookmarkManager): void;
        getScreenHelper(): $IScreenHelper;
        getSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        get ingredientVisibility(): $IIngredientVisibility;
        get searchStorageFactory(): $ISearchStorageFactory;
        set ingredientFilter(value: $IIngredientFilter);
        set ingredientListOverlay(value: $IIngredientListOverlay);
        get ingredientManager(): $IIngredientManager;
        get recipeTransferManager(): $IRecipeTransferManager;
        get recipeManager(): $IRecipeManager;
        get jeiHelpers(): $IJeiHelpers;
        set bookmarkOverlay(value: $IBookmarkOverlay);
        get editModeConfig(): $IEditModeConfig;
        set recipesGui(value: $IRecipesGui);
        set bookmarkManager(value: $IBookmarkManager);
        get screenHelper(): $IScreenHelper;
        get searchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
    }
    export class $IRecipeRegistration {
    }
    export interface $IRecipeRegistration {
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getIngredientManager(): $IIngredientManager;
        addRecipes<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        getJeiHelpers(): $IJeiHelpers;
        addItemStackInfo(arg0: $ItemStack_, ...arg1: $Component_[]): void;
        addItemStackInfo(arg0: $List_<$ItemStack_>, ...arg1: $Component_[]): void;
        addIngredientInfo<T>(arg0: T, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo<T>(arg0: $List_<T>, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo(arg0: $ItemLike_, ...arg1: $Component_[]): void;
        get ingredientVisibility(): $IIngredientVisibility;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get ingredientManager(): $IIngredientManager;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IGuiHandlerRegistration {
    }
    export interface $IGuiHandlerRegistration {
        addGuiScreenHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IScreenHandler_<T>): void;
        addGhostIngredientHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IGhostIngredientHandler<T>): void;
        addGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<T>): void;
        addGlobalGuiHandler(arg0: $IGlobalGuiHandler): void;
        addGenericGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<never>): void;
        addRecipeClickArea<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: number, arg2: number, arg3: number, arg4: number, ...arg5: $RecipeType<never>[]): void;
        getJeiHelpers(): $IJeiHelpers;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IRecipeTransferRegistration {
    }
    export interface $IRecipeTransferRegistration {
        getTransferHelper(): $IRecipeTransferHandlerHelper;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo<C, R>): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $Class<C>, arg1: $MenuType_<C>, arg2: $RecipeType<R>, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>, arg1: $RecipeType<R>): void;
        addRecipeTransferListener(arg0: $IRecipeTransferListener): void;
        getJeiHelpers(): $IJeiHelpers;
        /**
         * @deprecated
         */
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>): void;
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu>(arg0: $IUniversalRecipeTransferHandler<C>): void;
        get transferHelper(): $IRecipeTransferHandlerHelper;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IModIngredientRegistration {
    }
    export interface $IModIngredientRegistration {
        getColorHelper(): $IColorHelper;
        /**
         * @deprecated
         */
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>): void;
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>, arg4: $Codec<V>): void;
        getSubtypeManager(): $ISubtypeManager;
        get colorHelper(): $IColorHelper;
        get subtypeManager(): $ISubtypeManager;
    }
}
