import { $JsonElement } from "@package/com/google/gson";
import { $Recipe, $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $List, $List_, $Set } from "@package/java/util";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $AdvancementHolder_, $Advancement$Builder } from "@package/net/minecraft/advancements";
import { $Predicate, $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $CraftingContainer, $ResultContainer } from "@package/net/minecraft/world/inventory";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentPredicate, $DataComponentType_, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Iterable_, $Record, $Object } from "@package/java/lang";
import { $SizedIngredientAccessor } from "@package/com/lowdragmc/mbd2/core/mixins";
import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $SizedIngredientKJS, $CustomIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/common/crafting" {
    export class $DifferenceIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        subtracted(): $Ingredient;
        base(): $Ingredient;
        test(arg0: $ItemStack_): boolean;
        static of(arg0: $Ingredient_, arg1: $Ingredient_): $Ingredient;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$DifferenceIngredient>;
        constructor(base: $Ingredient_, subtracted: $Ingredient_);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get wildcard(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $DifferenceIngredient}.
     */
    export type $DifferenceIngredient_ = { base?: $Ingredient_, subtracted?: $Ingredient_,  } | [base?: $Ingredient_, subtracted?: $Ingredient_, ];
    export class $CraftingHelper {
        static makeIngredientCodec(arg0: boolean): $Codec<$Ingredient>;
        static makeIngredientMapCodec(): $MapCodec<$Ingredient>;
        constructor();
    }
    export class $ConditionalRecipeOutput implements $RecipeOutput {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
        advancement(): $Advancement$Builder;
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_ | null): void;
        getRecipeIdentifier(arg0: $ResourceLocation_): $ResourceLocation;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
        constructor(arg0: $RecipeOutput, arg1: $ICondition[]);
    }
    export class $BlockTagIngredient implements $ICustomIngredient {
        getItems(): $Stream<$ItemStack>;
        test(arg0: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        getTag(): $TagKey<$Block>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$BlockTagIngredient>;
        constructor(arg0: $TagKey_<$Block>);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get tag(): $TagKey<$Block>;
        get simple(): boolean;
        get wildcard(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    export class $IntersectionIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        test(arg0: $ItemStack_): boolean;
        static of(...arg0: $Ingredient_[]): $Ingredient;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        children(): $List<$Ingredient>;
        toVanilla(): $Ingredient;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$IntersectionIngredient>;
        constructor(children: $List_<$Ingredient_>);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get wildcard(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $IntersectionIngredient}.
     */
    export type $IntersectionIngredient_ = { children?: $List_<$Ingredient_>,  } | [children?: $List_<$Ingredient_>, ];
    export class $DataComponentIngredient implements $ICustomIngredient {
        getItems(): $Stream<$ItemStack>;
        test(arg0: $ItemStack_): boolean;
        static of<T>(arg0: boolean, arg1: $Supplier_<$DataComponentType<T>>, arg2: T, ...arg3: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, arg2: $HolderSet_<$Item>): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, arg2: $HolderSet_<$Item>): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Holder_<$Item>[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Holder_<$Item>[]): $Ingredient;
        static of(arg0: boolean, arg1: $ItemStack_): $Ingredient;
        static of<T>(arg0: boolean, arg1: $DataComponentType_<T>, arg2: T, ...arg3: $ItemLike_[]): $Ingredient;
        getType(): $IngredientType<never>;
        isStrict(): boolean;
        items(): $HolderSet<$Item>;
        isSimple(): boolean;
        components(): $DataComponentPredicate;
        toVanilla(): $Ingredient;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$DataComponentIngredient>;
        constructor(arg0: $HolderSet_<$Item>, arg1: $DataComponentPredicate, arg2: boolean);
        get type(): $IngredientType<never>;
        get strict(): boolean;
        get simple(): boolean;
        get wildcard(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    export class $CompoundIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        test(arg0: $ItemStack_): boolean;
        static of(...arg0: $Ingredient_[]): $Ingredient;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        children(): $List<$Ingredient>;
        toVanilla(): $Ingredient;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CompoundIngredient>;
        constructor(children: $List_<$Ingredient_>);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get wildcard(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $CompoundIngredient}.
     */
    export type $CompoundIngredient_ = { children?: $List_<$Ingredient_>,  } | [children?: $List_<$Ingredient_>, ];
    export class $ICustomIngredient {
    }
    export interface $ICustomIngredient extends $CustomIngredientKJS {
        getItems(): $Stream<$ItemStack>;
        test(arg0: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
    }
    export class $SizedIngredient implements $SizedIngredientAccessor, $SizedIngredientKJS {
        getItems(): $ItemStack[];
        test(arg0: $ItemStack_): boolean;
        static of(arg0: $TagKey_<$Item>, arg1: number): $SizedIngredient;
        static of(arg0: $ItemLike_, arg1: number): $SizedIngredient;
        count(): number;
        ingredient(): $Ingredient;
        kjs$asIngredient(): $Ingredient;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$toNestedJson(): $JsonElement;
        kjs$toFlatJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        setCachedStacks(arg0: $ItemStack_[]): void;
        static NESTED_CODEC: $Codec<$SizedIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedIngredient>;
        static FLAT_CODEC: $Codec<$SizedIngredient>;
        constructor(arg0: $Ingredient_, arg1: number);
        get items(): $ItemStack[];
        set cachedStacks(value: $ItemStack_[]);
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredient}.
     */
    export type $SizedIngredient_ = $ItemStack_ | $Ingredient_;
    export class $IngredientType<T extends $ICustomIngredient> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
        constructor(arg0: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientType}.
     */
    export type $IngredientType_<T> = RegistryTypes.NeoforgeIngredientSerializer | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ICustomIngredient>, codec?: $MapCodec_<$ICustomIngredient>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ICustomIngredient>, codec?: $MapCodec_<$ICustomIngredient>, ];
    export interface $IngredientType<T> extends RegistryMarked<RegistryTypes.NeoforgeIngredientSerializerTag, RegistryTypes.NeoforgeIngredientSerializer> {}
    export class $IRecipeContainer {
    }
    export interface $IRecipeContainer {
        getCraftMatrix(): $CraftingContainer;
        getCraftResult(): $ResultContainer;
        get craftMatrix(): $CraftingContainer;
        get craftResult(): $ResultContainer;
    }
}
