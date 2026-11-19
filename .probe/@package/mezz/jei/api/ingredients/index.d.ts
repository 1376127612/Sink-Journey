import { $TagKey } from "@package/net/minecraft/tags";
import { $Item$TooltipContext, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BatchRenderElement_ } from "@package/mezz/jei/api/ingredients/rendering";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $Object, $Iterable, $Class } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as subtypes from "@package/mezz/jei/api/ingredients/subtypes";
export * as rendering from "@package/mezz/jei/api/ingredients/rendering";

declare module "@package/mezz/jei/api/ingredients" {
    export class $IIngredientRenderer<T> {
    }
    export interface $IIngredientRenderer<T> {
        getHeight(): number;
        getWidth(): number;
        render(arg0: $GuiGraphics, arg1: T): void;
        render(arg0: $GuiGraphics, arg1: T, arg2: number, arg3: number): void;
        getFontRenderer(arg0: $Minecraft, arg1: T): $Font;
        renderBatch(arg0: $GuiGraphics, arg1: $List_<$BatchRenderElement_<T>>): void;
        /**
         * @deprecated
         */
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $TooltipFlag): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $Item$TooltipContext, arg3: $Player, arg4: $TooltipFlag): void;
        getTooltip(arg0: T, arg1: $Item$TooltipContext, arg2: $Player, arg3: $TooltipFlag): $List<$Component>;
        /**
         * @deprecated
         */
        getTooltip(arg0: T, arg1: $TooltipFlag): $List<$Component>;
        get height(): number;
        get width(): number;
    }
    export class $IIngredientSupplier {
    }
    export interface $IIngredientSupplier {
        getIngredients(arg0: $RecipeIngredientRole_): $List<$ITypedIngredient<never>>;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientSupplier}.
     */
    export type $IIngredientSupplier_ = ((arg0: $RecipeIngredientRole) => $List_<$ITypedIngredient<never>>);
    export class $ITypedIngredient<T> {
    }
    export interface $ITypedIngredient<T> {
        getBaseIngredient<B>(arg0: $IIngredientTypeWithSubtypes<B, T>): B;
        castToItemStackType(): $ITypedIngredient<$ItemStack>;
        cast<V>(arg0: $IIngredientType_<V>): $ITypedIngredient<V>;
        getType(): $IIngredientType<T>;
        normalize(arg0: $IIngredientHelper<T>): $ITypedIngredient<T>;
        getItemStack(): ($ItemStack) | undefined;
        getIngredient(): T;
        getIngredient<V>(arg0: $IIngredientType_<V>): (V) | undefined;
        getCastIngredient<V>(arg0: $IIngredientType_<V>): V;
        get type(): $IIngredientType<T>;
        get itemStack(): ($ItemStack) | undefined;
    }
    export class $IIngredientTypeWithSubtypes<B, I> {
    }
    export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<I> {
        getIngredientBaseClass(): $Class<B>;
        getDefaultIngredient(arg0: B): I;
        getBase(arg0: I): B;
        getIngredientClass(): $Class<I>;
        get ingredientBaseClass(): $Class<B>;
        get ingredientClass(): $Class<I>;
    }
    export class $IIngredientType<T> {
    }
    export interface $IIngredientType<T> {
        getRepresentativeIngredient(): (T) | undefined;
        getUid(): string;
        castIngredient(arg0: $Object): (T) | undefined;
        getCastIngredient(arg0: $Object): T;
        getIngredientClass(): $Class<T>;
        get representativeIngredient(): (T) | undefined;
        get uid(): string;
        get ingredientClass(): $Class<T>;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientType}.
     */
    export type $IIngredientType_<T> = (() => $Class<T>);
    export class $IIngredientHelper<V> {
    }
    export interface $IIngredientHelper<V> {
        getAmount(arg0: V): number;
        getResourceLocation(arg0: V): $ResourceLocation;
        getTagKeyEquivalent(arg0: $Collection_<V>): ($TagKey<never>) | undefined;
        isIngredientOnServer(arg0: V): boolean;
        normalizeIngredient(arg0: V): V;
        /**
         * @deprecated
         */
        getUniqueId(arg0: V, arg1: $UidContext_): string;
        getDisplayModId(arg0: V): string;
        isHiddenFromRecipeViewersByTags(arg0: V): boolean;
        isHiddenFromRecipeViewersByTags(arg0: $ITypedIngredient<V>): boolean;
        getIngredientType(): $IIngredientType<V>;
        getDisplayName(arg0: V): string;
        getColors(arg0: V): $Iterable<number>;
        copyWithAmount(arg0: V, arg1: number): V;
        getUid(arg0: V, arg1: $UidContext_): $Object;
        getUid(arg0: $ITypedIngredient<V>, arg1: $UidContext_): $Object;
        getCheatItemStack(arg0: V): $ItemStack;
        /**
         * @deprecated
         */
        getTagEquivalent(arg0: $Collection_<V>): ($ResourceLocation) | undefined;
        getGroupingUid(arg0: V): $Object;
        getGroupingUid(arg0: $ITypedIngredient<V>): $Object;
        /**
         * @deprecated
         */
        getWildcardId(arg0: V): string;
        copyIngredient(arg0: V): V;
        isValidIngredient(arg0: V): boolean;
        hasSubtypes(arg0: V): boolean;
        getTagStream(arg0: V): $Stream<$ResourceLocation>;
        getErrorInfo(arg0: V): string;
        get ingredientType(): $IIngredientType<V>;
    }
}
