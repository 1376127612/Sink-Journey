import { $Codec } from "@package/com/mojang/serialization";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGhostIngredientHandler, $IGuiProperties, $IGuiClickableArea } from "@package/mezz/jei/api/gui/handlers";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager } from "@package/mezz/jei/api/runtime/config";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $IRecipeTransferManager } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $IRecipeManager, $RecipeType, $IFocus } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $Enum, $Class } from "@package/java/lang";
export * as config from "@package/mezz/jei/api/runtime/config";

declare module "@package/mezz/jei/api/runtime" {
    export class $IEditModeConfig$HideMode extends $Enum<$IEditModeConfig$HideMode> {
        static values(): $IEditModeConfig$HideMode[];
        static valueOf(arg0: string): $IEditModeConfig$HideMode;
        static WILDCARD: $IEditModeConfig$HideMode;
        static SINGLE: $IEditModeConfig$HideMode;
    }
    /**
     * Values that may be interpreted as {@link $IEditModeConfig$HideMode}.
     */
    export type $IEditModeConfig$HideMode_ = "single" | "wildcard";
    export class $IClickableIngredient<T> {
    }
    export interface $IClickableIngredient<T> {
        getArea(): $Rect2i;
        /**
         * @deprecated
         */
        getIngredient(): T;
        /**
         * @deprecated
         */
        getIngredientType(): $IIngredientType<T>;
        getTypedIngredient(): $ITypedIngredient<T>;
        get area(): $Rect2i;
        get ingredient(): T;
        get ingredientType(): $IIngredientType<T>;
        get typedIngredient(): $ITypedIngredient<T>;
    }
    export class $IIngredientManager$IIngredientListener {
    }
    export interface $IIngredientManager$IIngredientListener {
        onIngredientsUpdated<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
        onIngredientsRemoved<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
        onIngredientsAdded<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
    }
    export class $IEditModeConfig {
    }
    export interface $IEditModeConfig {
        isIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): boolean;
        getIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): $Set<$IEditModeConfig$HideMode>;
        hideIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
        showIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
    }
    export class $IScreenHelper {
    }
    export interface $IScreenHelper {
        getClickableIngredientUnderMouse(arg0: $Screen, arg1: number, arg2: number): $Stream<$IClickableIngredient<never>>;
        getGuiProperties<T extends $Screen>(arg0: T): ($IGuiProperties) | undefined;
        getGuiClickableArea(arg0: $AbstractContainerScreen<never>, arg1: number, arg2: number): $Stream<$IGuiClickableArea>;
        getGhostIngredientHandlers<T extends $Screen>(arg0: T): $List<$IGhostIngredientHandler<T>>;
        /**
         * @deprecated
         */
        getGhostIngredientHandler<T extends $Screen>(arg0: T): ($IGhostIngredientHandler<T>) | undefined;
        getGuiExclusionAreas(arg0: $Screen): $Stream<$Rect2i>;
    }
    export class $IBookmarkManager {
    }
    export interface $IBookmarkManager {
        remove(arg0: $ITypedIngredient<never>): boolean;
        remove<R>(arg0: $RecipeType<R>, arg1: R): boolean;
        add<R>(arg0: $RecipeType<R>, arg1: R): boolean;
        add(arg0: $ITypedIngredient<never>): boolean;
        contains(arg0: $ITypedIngredient<never>): boolean;
        contains<R>(arg0: $RecipeType<R>, arg1: R): boolean;
    }
    export class $IJeiKeyMapping {
    }
    export interface $IJeiKeyMapping {
        getTranslatedKeyMessage(): $Component;
        isUnbound(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        get translatedKeyMessage(): $Component;
        get unbound(): boolean;
    }
    export class $IJeiKeyMappings {
    }
    export interface $IJeiKeyMappings {
        getBookmark(): $IJeiKeyMapping;
        getShowUses(): $IJeiKeyMapping;
        getShowRecipe(): $IJeiKeyMapping;
        get bookmark(): $IJeiKeyMapping;
        get showUses(): $IJeiKeyMapping;
        get showRecipe(): $IJeiKeyMapping;
    }
    export class $IJeiRuntime {
    }
    export interface $IJeiRuntime {
        /**
         * @deprecated
         */
        getConfigManager(): $IJeiConfigManager;
        getRecipeManager(): $IRecipeManager;
        getJeiHelpers(): $IJeiHelpers;
        getBookmarkOverlay(): $IBookmarkOverlay;
        getEditModeConfig(): $IEditModeConfig;
        getBookmarkManager(): $IBookmarkManager;
        getRecipesGui(): $IRecipesGui;
        getKeyMappings(): $IJeiKeyMappings;
        getScreenHelper(): $IScreenHelper;
        getIngredientManager(): $IIngredientManager;
        getIngredientFilter(): $IIngredientFilter;
        getRecipeTransferManager(): $IRecipeTransferManager;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getIngredientListOverlay(): $IIngredientListOverlay;
        get configManager(): $IJeiConfigManager;
        get recipeManager(): $IRecipeManager;
        get jeiHelpers(): $IJeiHelpers;
        get bookmarkOverlay(): $IBookmarkOverlay;
        get editModeConfig(): $IEditModeConfig;
        get bookmarkManager(): $IBookmarkManager;
        get recipesGui(): $IRecipesGui;
        get keyMappings(): $IJeiKeyMappings;
        get screenHelper(): $IScreenHelper;
        get ingredientManager(): $IIngredientManager;
        get ingredientFilter(): $IIngredientFilter;
        get recipeTransferManager(): $IRecipeTransferManager;
        get ingredientVisibility(): $IIngredientVisibility;
        get ingredientListOverlay(): $IIngredientListOverlay;
    }
    export class $IBookmarkOverlay {
    }
    export interface $IBookmarkOverlay {
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getItemStackUnderMouse(): $ItemStack;
        get itemStackUnderMouse(): $ItemStack;
    }
    export class $IIngredientListOverlay {
    }
    export interface $IIngredientListOverlay {
        isListDisplayed(): boolean;
        hasKeyboardFocus(): boolean;
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getVisibleIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        get listDisplayed(): boolean;
    }
    export class $IJeiFeatures {
    }
    export interface $IJeiFeatures {
        disableInventoryEffectRendererGuiHandler(): void;
        disableJeiGui(): void;
        isJeiGuiEnabled(): boolean;
        get jeiGuiEnabled(): boolean;
    }
    export class $IRecipesGui {
    }
    export interface $IRecipesGui {
        getParentScreen(): ($Screen) | undefined;
        showTypes(arg0: $List_<$RecipeType<never>>): void;
        show<V>(arg0: $IFocus<V>): void;
        show(arg0: $List_<$IFocus<never>>): void;
        showRecipes<T>(arg0: $IRecipeCategory<T>, arg1: $List_<T>, arg2: $List_<$IFocus<never>>): void;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        get parentScreen(): ($Screen) | undefined;
    }
    export class $IIngredientVisibility$IListener {
    }
    export interface $IIngredientVisibility$IListener {
        onIngredientVisibilityChanged<V>(arg0: $ITypedIngredient<V>, arg1: boolean): void;
        onIngredientsVisibilityChanged<V>(arg0: $Collection_<$ITypedIngredient<V>>, arg1: boolean): void;
        onIngredientsVisibilityChanged<V>(arg0: $Collection_<$ITypedIngredient<V>>, arg1: $Collection_<$UidContext_>, arg2: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientVisibility$IListener}.
     */
    export type $IIngredientVisibility$IListener_ = ((arg0: $ITypedIngredient<any>, arg1: boolean) => void);
    export class $IIngredientManager {
    }
    export interface $IIngredientManager {
        normalizeTypedIngredient<V>(arg0: $ITypedIngredient<V>): $ITypedIngredient<V>;
        /**
         * @deprecated
         */
        getTypedIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): ($ITypedIngredient<V>) | undefined;
        getIngredientRenderer<V>(arg0: $IIngredientType_<V>): $IIngredientRenderer<V>;
        getIngredientRenderer<V>(arg0: V): $IIngredientRenderer<V>;
        getAllTypedIngredients<V>(arg0: $IIngredientType_<V>): $Collection<$ITypedIngredient<V>>;
        getIngredientTypeForUid(arg0: string): ($IIngredientType<never>) | undefined;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: $Rect2i, arg3: boolean): ($IClickableIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: V, arg1: $Rect2i, arg2: boolean): ($IClickableIngredient<V>) | undefined;
        getRegisteringPluginUid(arg0: $IIngredientType_<never>): ($ResourceLocation) | undefined;
        registerIngredientListener(arg0: $IIngredientManager$IIngredientListener): void;
        getIngredientAliases(arg0: $ITypedIngredient<never>): $Collection<string>;
        getRegisteredIngredientTypes(): $Collection<$IIngredientType<never>>;
        refreshIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getClickableIngredientFactory(): $IClickableIngredientFactory;
        addIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getIngredientTypeChecked<V>(arg0: $Class<V>): ($IIngredientType<V>) | undefined;
        getIngredientTypeChecked<V>(arg0: V): ($IIngredientType<V>) | undefined;
        getIngredientCodec<V>(arg0: $IIngredientType_<V>): $Codec<V>;
        getIngredientType<V>(arg0: V): $IIngredientType<V>;
        removeIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getAllItemStacks(): $Collection<$ItemStack>;
        getIngredientHelper<V>(arg0: $IIngredientType_<V>): $IIngredientHelper<V>;
        getIngredientHelper<V>(arg0: V): $IIngredientHelper<V>;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): ($ITypedIngredient<V>) | undefined;
        createTypedIngredient<T>(arg0: T, arg1: boolean): ($ITypedIngredient<T>) | undefined;
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: boolean): ($ITypedIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: V): ($ITypedIngredient<V>) | undefined;
        getAllIngredients<V>(arg0: $IIngredientType_<V>): $Collection<V>;
        getIngredientTypeWithSubtypesFromBase<B, I>(arg0: B): ($IIngredientTypeWithSubtypes<B, I>) | undefined;
        /**
         * @deprecated
         */
        getIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): (V) | undefined;
        get registeredIngredientTypes(): $Collection<$IIngredientType<never>>;
        get clickableIngredientFactory(): $IClickableIngredientFactory;
        get allItemStacks(): $Collection<$ItemStack>;
    }
    export class $IIngredientVisibility {
    }
    export interface $IIngredientVisibility {
        registerListener(arg0: $IIngredientVisibility$IListener_): void;
        hideIngredients<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $Collection_<$UidContext_>): void;
        unhideIngredients<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $Collection_<$UidContext_>): void;
        isIngredientVisible<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: $UidContext_): boolean;
        isIngredientVisible<V>(arg0: $ITypedIngredient<V>, arg1: $UidContext_): boolean;
        isIngredientVisible<V>(arg0: $ITypedIngredient<V>): boolean;
        isIngredientVisible<V>(arg0: $IIngredientType_<V>, arg1: V): boolean;
    }
    export class $IIngredientFilter {
    }
    export interface $IIngredientFilter {
        getFilterText(): string;
        setFilterText(arg0: string): void;
        getFilteredIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        getFilteredItemStacks(): $List<$ItemStack>;
        get filteredItemStacks(): $List<$ItemStack>;
    }
}
