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
        getJeiHelpers(): $IJeiHelpers;
        addCookingCategoryExtension<R>(arg0: $Class<R>, arg1: $ICookingCategoryExtension_<R>): void;
        getSmokingCategory(): $IExtendableCookingRecipeCategory;
        getBrewingCategory(): $IExtendableBrewingRecipeCategory;
        getBlastingCategory(): $IExtendableCookingRecipeCategory;
        getSmeltingCategory(): $IExtendableCookingRecipeCategory;
        getCraftingCategory(): $IExtendableCraftingRecipeCategory;
        getSmithingCategory(): $IExtendableSmithingRecipeCategory;
        getCampfireCookingCategory(): $IExtendableCookingRecipeCategory;
        get jeiHelpers(): $IJeiHelpers;
        get smokingCategory(): $IExtendableCookingRecipeCategory;
        get brewingCategory(): $IExtendableBrewingRecipeCategory;
        get blastingCategory(): $IExtendableCookingRecipeCategory;
        get smeltingCategory(): $IExtendableCookingRecipeCategory;
        get craftingCategory(): $IExtendableCraftingRecipeCategory;
        get smithingCategory(): $IExtendableSmithingRecipeCategory;
        get campfireCookingCategory(): $IExtendableCookingRecipeCategory;
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
        getDefaultSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        replaceSearchStorage(arg0: $ISearchStorageFactory_): void;
        replaceSearchStorage(arg0: $ISearchStorageBuilderFactory_): void;
        get defaultSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
    }
    export class $IRecipeCatalystRegistration {
    }
    export interface $IRecipeCatalystRegistration {
        addRecipeCatalysts<T>(arg0: $RecipeType<never>, arg1: $IIngredientType_<T>, arg2: $List_<T>): void;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemLike_[]): void;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemStack_[]): void;
        getJeiHelpers(): $IJeiHelpers;
        addRecipeCatalyst(arg0: $ItemStack_, ...arg1: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemLike_, ...arg1: $RecipeType<never>[]): void;
        addRecipeCatalyst<T>(arg0: $IIngredientType_<T>, arg1: T, ...arg2: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $RecipeType<never>, arg1: $Consumer_<$IIngredientAcceptor<never>>): void;
        getIngredientManager(): $IIngredientManager;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
    }
    export class $IExtraIngredientRegistration {
    }
    export interface $IExtraIngredientRegistration {
        addExtraItemStacks(arg0: $Collection_<$ItemStack_>): void;
        addExtraIngredients<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtraIngredientRegistration}.
     */
    export type $IExtraIngredientRegistration_ = ((arg0: $IIngredientType<any>, arg1: $Collection<any>) => void);
    export class $IRecipeCategoryRegistration {
    }
    export interface $IRecipeCategoryRegistration {
        getJeiHelpers(): $IJeiHelpers;
        addRecipeCategories(...arg0: $IRecipeCategory<never>[]): void;
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
        getJeiHelpers(): $IJeiHelpers;
        addTypedRecipeManagerPlugin<T>(arg0: $RecipeType<T>, arg1: $ISimpleRecipeManagerPlugin<T>): void;
        getRecipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
        /**
         * @deprecated
         */
        getJeiFeatures(): $IJeiFeatures;
        addRecipeButtonFactory(arg0: $IRecipeButtonControllerFactory_): void;
        addRecipeCategoryDecorator<T>(arg0: $RecipeType<T>, arg1: $IRecipeCategoryDecorator<T>): void;
        addRecipeManagerPlugin(arg0: $IRecipeManagerPlugin): void;
        get jeiHelpers(): $IJeiHelpers;
        get recipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
        get jeiFeatures(): $IJeiFeatures;
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
        getRecipeManager(): $IRecipeManager;
        getJeiHelpers(): $IJeiHelpers;
        getSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        getEditModeConfig(): $IEditModeConfig;
        setBookmarkManager(arg0: $IBookmarkManager): void;
        setRecipesGui(arg0: $IRecipesGui): void;
        setBookmarkOverlay(arg0: $IBookmarkOverlay): void;
        getScreenHelper(): $IScreenHelper;
        getIngredientManager(): $IIngredientManager;
        setIngredientFilter(arg0: $IIngredientFilter): void;
        /**
         * @deprecated
         */
        getSearchStorageFactory(): $ISearchStorageFactory;
        setIngredientListOverlay(arg0: $IIngredientListOverlay): void;
        getRecipeTransferManager(): $IRecipeTransferManager;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        get recipeManager(): $IRecipeManager;
        get jeiHelpers(): $IJeiHelpers;
        get searchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        get editModeConfig(): $IEditModeConfig;
        set bookmarkManager(value: $IBookmarkManager);
        set recipesGui(value: $IRecipesGui);
        set bookmarkOverlay(value: $IBookmarkOverlay);
        get screenHelper(): $IScreenHelper;
        get ingredientManager(): $IIngredientManager;
        set ingredientFilter(value: $IIngredientFilter);
        get searchStorageFactory(): $ISearchStorageFactory;
        set ingredientListOverlay(value: $IIngredientListOverlay);
        get recipeTransferManager(): $IRecipeTransferManager;
        get ingredientVisibility(): $IIngredientVisibility;
    }
    export class $IRecipeRegistration {
    }
    export interface $IRecipeRegistration {
        addRecipes<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        getJeiHelpers(): $IJeiHelpers;
        addItemStackInfo(arg0: $ItemStack_, ...arg1: $Component_[]): void;
        addItemStackInfo(arg0: $List_<$ItemStack_>, ...arg1: $Component_[]): void;
        addIngredientInfo<T>(arg0: T, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo<T>(arg0: $List_<T>, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo(arg0: $ItemLike_, ...arg1: $Component_[]): void;
        getIngredientManager(): $IIngredientManager;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get ingredientVisibility(): $IIngredientVisibility;
    }
    export class $IGuiHandlerRegistration {
    }
    export interface $IGuiHandlerRegistration {
        addRecipeClickArea<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: number, arg2: number, arg3: number, arg4: number, ...arg5: $RecipeType<never>[]): void;
        getJeiHelpers(): $IJeiHelpers;
        addGenericGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<never>): void;
        addGhostIngredientHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IGhostIngredientHandler<T>): void;
        addGlobalGuiHandler(arg0: $IGlobalGuiHandler): void;
        addGuiScreenHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IScreenHandler_<T>): void;
        addGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<T>): void;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IRecipeTransferRegistration {
    }
    export interface $IRecipeTransferRegistration {
        getJeiHelpers(): $IJeiHelpers;
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu>(arg0: $IUniversalRecipeTransferHandler<C>): void;
        /**
         * @deprecated
         */
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>): void;
        getTransferHelper(): $IRecipeTransferHandlerHelper;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>, arg1: $RecipeType<R>): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo<C, R>): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $Class<C>, arg1: $MenuType_<C>, arg2: $RecipeType<R>, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addRecipeTransferListener(arg0: $IRecipeTransferListener): void;
        get jeiHelpers(): $IJeiHelpers;
        get transferHelper(): $IRecipeTransferHandlerHelper;
    }
    export class $IModIngredientRegistration {
    }
    export interface $IModIngredientRegistration {
        /**
         * @deprecated
         */
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>): void;
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>, arg4: $Codec<V>): void;
        getColorHelper(): $IColorHelper;
        getSubtypeManager(): $ISubtypeManager;
        get colorHelper(): $IColorHelper;
        get subtypeManager(): $ISubtypeManager;
    }
}
