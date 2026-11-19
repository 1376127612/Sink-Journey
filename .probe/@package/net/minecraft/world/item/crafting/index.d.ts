import { $ShapedRecipeAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $JsonObject_, $JsonElement } from "@package/com/google/gson";
import { $DataResult, $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $RecipeManagerAccessor } from "@package/plus/dragons/createdragonsplus/mixin/minecraft";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ShapedRecipeAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ResourceManager, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $AccessorSmithingTrimRecipe, $AccessorSmithingTransformRecipe as $AccessorSmithingTransformRecipe$1 } from "@package/vazkii/patchouli/mixin";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $AccessorSmithingTrimRecipe as $AccessorSmithingTrimRecipe$1, $AccessorSmithingTransformRecipe } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $IntFunction, $Predicate_, $Predicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $AbstractCookingRecipeAccessor } from "@package/com/enderio/enderio/mixin";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $RecipeManagerAccessor as $RecipeManagerAccessor$1 } from "@package/com/denfop/mixin/access";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Enum, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $SizedIngredient, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $ItemValueAccessor, $TagValueAccessor, $IngredientAccessor as $IngredientAccessor$1 } from "@package/com/lowdragmc/mbd2/core/mixins";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemLike_, $ItemLike, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ExtendedIngredient } from "@package/org/embeddedt/modernfix/neoforge/recipe";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FireworkExplosion$Shape } from "@package/net/minecraft/world/item/component";
import { $IRecipeContext } from "@package/com/illusivesoulworks/polymorph/api/common/base";
import { $AccessSmithingTransformRecipe, $AccessSmithingTrimRecipe, $AccessRecipeManager } from "@package/com/blamejared/crafttweaker/mixin/common/access/recipe";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $ImmutableMultimap$Builder, $ImmutableMap$Builder, $Multimap } from "@package/com/google/common/collect";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Stream } from "@package/java/util/stream";
import { $TagValueAccessor as $TagValueAccessor$1, $IngredientAccessor } from "@package/com/almostreliable/kubeio/mixin";
import { $RecipeInputMixin } from "@package/dev/latvian/mods/kubejs/core/mixin";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $IngredientKJS, $RecipeHolderKJS, $ReloadableServerResourcesKJS, $RecipeInputKJS, $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessIngredient } from "@package/com/blamejared/crafttweaker/mixin/common/access/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/crafting" {
    export class $RecipeCache$Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RecipeCache$Entry}.
     */
    export type $RecipeCache$Entry_ = { value?: $RecipeHolder_<$CraftingRecipe>, height?: number, key?: $NonNullList<$ItemStack_>, width?: number,  } | [value?: $RecipeHolder_<$CraftingRecipe>, height?: number, key?: $NonNullList<$ItemStack_>, width?: number, ];
    export class $Recipe<T extends $RecipeInput> {
        static CODEC: $Codec<$Recipe<never>>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Recipe<never>>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Recipe<never>>;
    }
    export interface $Recipe<T extends $RecipeInput> {
        assemble(input: T, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        matches(input: T, level: $Level_): boolean;
        getType(): $RecipeType<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getRemainingItems(input: T): $NonNullList<$ItemStack>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get group(): string;
    }
    export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $SmithingRecipeInput extends $Record implements $RecipeInput {
        base(): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        template(): $ItemStack;
        addition(): $ItemStack;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SmithingRecipeInput}.
     */
    export type $SmithingRecipeInput_ = { base?: $ItemStack_, template?: $ItemStack_, addition?: $ItemStack_,  } | [base?: $ItemStack_, template?: $ItemStack_, addition?: $ItemStack_, ];
    export class $Ingredient$TagValue extends $Record implements $Ingredient$Value, $TagValueAccessor, $TagValueAccessor$1 {
        getItems(): $Collection<$ItemStack>;
        handler$cnn000$crafttweaker$injectTags(arg0: $CallbackInfoReturnable<any>): void;
        tag(): $TagKey<$Item>;
        getTag(): $TagKey<$Item>;
        setTag(tag: $TagKey_<$Item>): void;
        kubeio$getTag(): $TagKey<$Item>;
        static CODEC: $Codec<$Ingredient$TagValue>;
        constructor(tag: $TagKey_<$Item>);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$TagValue}.
     */
    export type $Ingredient$TagValue_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $RecipeCache {
        get(level: $Level_, input: $CraftingInput): ($RecipeHolder<$CraftingRecipe>) | undefined;
        constructor(size: number);
    }
    export class $RecipeHolder<T extends $Recipe<never>> extends $Record implements $RecipeHolderKJS {
        kjs$getTypeKey(): $ResourceKey<any>;
        value(): T;
        id(): $ResourceLocation;
        self(): $RecipeHolder<never>;
        getRecipe(): $Recipe<never>;
        getOrCreateId(): $ResourceLocation;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSchema(): $RecipeSchema;
        getGroup(): string;
        getSerializer(): $RecipeSerializer<never>;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getType(): $ResourceLocation;
        getMod(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeHolder<never>>;
        constructor(arg0: $ResourceLocation_, arg1: T);
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get serializer(): $RecipeSerializer<never>;
        get type(): $ResourceLocation;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeHolder}.
     */
    export type $RecipeHolder_<T> = { value?: $Recipe<never>, id?: $ResourceLocation_,  } | [value?: $Recipe<never>, id?: $ResourceLocation_, ];
    export class $SuspiciousStewRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        constructor(category: $CraftingBookCategory_);
    }
    export class $Ingredient$Value {
        static CODEC: $Codec<$Ingredient$Value>;
        static MAP_CODEC: $MapCodec<$Ingredient$Value>;
    }
    export interface $Ingredient$Value {
        getItems(): $Collection<$ItemStack>;
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$Value}.
     */
    export type $Ingredient$Value_ = (() => $Collection_<$ItemStack_>);
    export interface $RecipeType<T> extends RegistryMarked<RegistryTypes.RecipeTypeTag, RegistryTypes.RecipeType> {}
    export class $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
    }
    export interface $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
        create(group: string, ingredient: $Ingredient_, result: $ItemStack_): T;
    }
    /**
     * Values that may be interpreted as {@link $SingleItemRecipe$Factory}.
     */
    export type $SingleItemRecipe$Factory_<T> = ((arg0: string, arg1: $Ingredient, arg2: $ItemStack) => T);
    export class $CraftingInput implements $RecipeInput {
        stackedContents(): $StackedContents;
        ingredientCount(): number;
        size(): number;
        isEmpty(): boolean;
        static of(width: number, height: number, items: $List_<$ItemStack_>): $CraftingInput;
        getItem(row: number, column: number): $ItemStack;
        getItem(index: number): $ItemStack;
        width(): number;
        items(): $List<$ItemStack>;
        static ofPositioned(width: number, height: number, items: $List_<$ItemStack_>): $CraftingInput$Positioned;
        height(): number;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        static EMPTY: $CraftingInput;
        constructor(width: number, height: number, item: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    export class $CookingBookCategory extends $Enum<$CookingBookCategory> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $CookingBookCategory[];
        static valueOf(arg0: string): $CookingBookCategory;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$CookingBookCategory>;
        static BLOCKS: $CookingBookCategory;
        static MISC: $CookingBookCategory;
        static FOOD: $CookingBookCategory;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CookingBookCategory}.
     */
    export type $CookingBookCategory_ = "food" | "blocks" | "misc";
    export class $Ingredient implements $Predicate<$ItemStack>, $ExtendedIngredient, $IngredientAccessor$1, $AccessIngredient, $IngredientKJS, $IngredientAccessor {
        mfix$clearReference(): void;
        canBeUsedForMatching(): boolean;
        getCustomIngredient(): $ICustomIngredient;
        hasNoItems(): boolean;
        isCustom(): boolean;
        self(): $Ingredient;
        getStackingIds(): $IntList;
        static fromValues(stream: $Stream<$Ingredient$Value_>): $Ingredient;
        test(stack: $ItemStack_ | null): boolean;
        isEmpty(): boolean;
        static of(): $Ingredient;
        static of(...items: $ItemLike_[]): $Ingredient;
        static of(stream: $Stream<$ItemStack_>): $Ingredient;
        static of(...stacks: $ItemStack_[]): $Ingredient;
        static of(tag: $TagKey_<$Item>): $Ingredient;
        isSimple(): boolean;
        getValues(): $Ingredient$Value[];
        static callFromValues$crafttweaker_$md$e03d8d$3(stream: $Stream<any>): $Ingredient;
        handler$cnm000$crafttweaker$storeDissolve(arg0: $CallbackInfoReturnable<any>): void;
        handler$zhe000$modernfix$hasNoItems(arg0: $CallbackInfoReturnable<any>): void;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        getDisplayStacks(): $ItemStackSet;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        asIngredient(): $Ingredient;
        isWildcard(): boolean;
        except(subtracted: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        containsAnyTag(): boolean;
        asStack(): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        getStackArray(): $ItemStack[];
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        withCount(count: number): $SizedIngredient;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        toNBT(): $Tag;
        toJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        crafttweaker$setItemStacks(arg0: $ItemStack_[]): void;
        crafttweaker$getValues(): $Ingredient$Value[];
        setCustomIngredient(arg0: $ICustomIngredient): void;
        kubeio$getValues(): $Ingredient$Value[];
        setItemStacks(arg0: $ItemStack_[]): void;
        setValues(values: $Ingredient$Value_[]): void;
        static CODEC: $Codec<$Ingredient>;
        static LIST_CODEC_NONEMPTY: $Codec<$List<$Ingredient>>;
        stackingIds: $IntList;
        static CODEC_NONEMPTY: $Codec<$Ingredient>;
        static CONTENTS_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Ingredient>;
        values: $Ingredient$Value[];
        static LIST_CODEC: $Codec<$List<$Ingredient>>;
        itemStacks: $ItemStack[];
        static EMPTY: $Ingredient;
        static MAP_CODEC_NONEMPTY: $MapCodec<$Ingredient>;
        constructor(arg0: $ICustomIngredient);
        constructor(values: $Ingredient$Value_[]);
        constructor(values: $Stream<$Ingredient$Value_>);
        get custom(): boolean;
        get empty(): boolean;
        get simple(): boolean;
        get displayStacks(): $ItemStackSet;
        get wildcard(): boolean;
        get tagKey(): $TagKey<$Item>;
        get stackArray(): $ItemStack[];
        get codec(): $Codec<never>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient}.
     */
    export type $Ingredient_ = $ItemStack_ | $Ingredient[] | RegExp | "*" | "-" | `#${RegistryTypes.ItemTag}` | `@${SpecialTypes.ModId}` | `%${RegistryTypes.CreativeModeTab}`;
    export class $SmithingTransformRecipe implements $SmithingRecipe, $AccessSmithingTransformRecipe, $AccessorSmithingTransformRecipe, $AccessorSmithingTransformRecipe$1 {
        assemble(input: $SmithingRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        handler$ecg000$wover$setupItemStack(arg0: $SmithingRecipeInput_, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        isIncomplete(): boolean;
        matches(input: $SmithingRecipeInput_, level: $Level_): boolean;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getToastSymbol(): $ItemStack;
        getType(): $RecipeType<never>;
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        crafttweaker$getTemplate(): $Ingredient;
        crafttweaker$getBase(): $Ingredient;
        crafttweaker$getAddition(): $Ingredient;
        getTemplate(): $Ingredient;
        template: $Ingredient;
        result: $ItemStack;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, result: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get group(): string;
    }
    export interface $RecipeSerializer<T> extends RegistryMarked<RegistryTypes.RecipeSerializerTag, RegistryTypes.RecipeSerializer> {}
    export class $SmokingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $IRecipeContext, $AccessRecipeManager, $RecipeManagerAccessor$1, $RecipeManagerAccessor, $RecipeManagerKJS {
        polymorph$setContext(arg0: $Object): void;
        byType<I extends $RecipeInput, T extends $Recipe<I>>(type: $RecipeType_<T>): $Collection<$RecipeHolder<T>>;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_, lastRecipe: $ResourceLocation_ | null): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_, lastRecipe: $RecipeHolder_<T> | null): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_): ($RecipeHolder<T>) | undefined;
        static createCheck<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>): $RecipeManager$CachedCheck<I, T>;
        getRecipeIds(): $Stream<$ResourceLocation>;
        getRemainingItemsFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, lvel: $Level_): $NonNullList<$ItemStack>;
        getOrderedRecipes(): $Collection<$RecipeHolder<never>>;
        replaceRecipes(recipes: $Iterable_<$RecipeHolder<never>>): void;
        byKeyTyped<T extends $Recipe<never>>(type: $RecipeType_<T>, name: $ResourceLocation_): $RecipeHolder<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        handler$fhb000$cucumber$apply(arg0: $Map_<any, any>, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $CallbackInfo, arg4: $ImmutableMultimap$Builder<any, any>, arg5: $ImmutableMap$Builder<any, any>): void;
        polymorph$getContext(): $Object;
        handler$ela000$bclib$bcl_interceptApply(arg0: $Map_<any, any>, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $CallbackInfo): void;
        kjs$getRecipeIdMap(): $Map<any, any>;
        kjs$replaceRecipes(map: $Map_<any, any>): void;
        hadErrorsLoading(): boolean;
        getRecipes(): $Collection<$RecipeHolder<never>>;
        getRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_): $List<$RecipeHolder<T>>;
        getAllRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>): $List<$RecipeHolder<T>>;
        static fromJson(recipeId: $ResourceLocation_, json: $JsonObject_, registries: $HolderLookup$Provider): $RecipeHolder<never>;
        byKey(recipeId: $ResourceLocation_): ($RecipeHolder<never>) | undefined;
        crafttweaker$getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        crafttweaker$getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        crafttweaker$setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        crafttweaker$setByType(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
        getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        setByType(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
        setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        static LOGGER: $Logger;
        byName: $Map<$ResourceLocation, $RecipeHolder<never>>;
        constructor(registries: $HolderLookup$Provider);
        get recipeIds(): $Stream<$ResourceLocation>;
        get orderedRecipes(): $Collection<$RecipeHolder<never>>;
        get recipes(): $Collection<$RecipeHolder<never>>;
    }
    export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(_constructor: $SimpleCraftingRecipeSerializer$Factory_<T>);
    }
    export class $CraftingBookCategory extends $Enum<$CraftingBookCategory> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $CraftingBookCategory[];
        static valueOf(arg0: string): $CraftingBookCategory;
        getRemappedEnumConstantName(): string;
        static EQUIPMENT: $CraftingBookCategory;
        static CODEC: $Codec<$CraftingBookCategory>;
        static BUILDING: $CraftingBookCategory;
        static REDSTONE: $CraftingBookCategory;
        static MISC: $CraftingBookCategory;
        static BY_ID: $IntFunction<$CraftingBookCategory>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CraftingBookCategory>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CraftingBookCategory}.
     */
    export type $CraftingBookCategory_ = "building" | "redstone" | "equipment" | "misc";
    export class $MapExtendingRecipe extends $ShapedRecipe {
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        constructor(category: $CraftingBookCategory_);
    }
    export class $CraftingInput$Positioned extends $Record {
        input(): $CraftingInput;
        top(): number;
        left(): number;
        static EMPTY: $CraftingInput$Positioned;
        constructor(arg0: $CraftingInput, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingInput$Positioned}.
     */
    export type $CraftingInput$Positioned_ = { top?: number, input?: $CraftingInput, left?: number,  } | [top?: number, input?: $CraftingInput, left?: number, ];
    export class $ShapedRecipe$Serializer implements $RecipeSerializer<$ShapedRecipe> {
        codec(): $MapCodec<$ShapedRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        static CODEC: $MapCodec<$ShapedRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        constructor();
    }
    export class $CraftingRecipe {
    }
    export interface $CraftingRecipe extends $Recipe<$CraftingInput> {
        getType(): $RecipeType<never>;
        category(): $CraftingBookCategory;
        get type(): $RecipeType<never>;
    }
    export class $ShapedRecipe implements $CraftingRecipe, $ShapedRecipeAccess, $ShapedRecipeAccessor {
        getHeight(): number;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        isIncomplete(): boolean;
        matches(input: $CraftingInput, level: $Level_): boolean;
        category(): $CraftingBookCategory;
        getWidth(): number;
        handler$ecd000$wover$setupItemStack(arg0: $RecipeInput, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getType(): $RecipeType<never>;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        create$getPattern(): $ShapedRecipePattern;
        getResult(): $ItemStack;
        getPattern(): $ShapedRecipePattern;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_, showNotification: boolean);
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_);
        get height(): number;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get width(): number;
        get group(): string;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $FireworkStarRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        static SHAPE_INGREDIENT: $Ingredient;
        static SHAPE_BY_ITEM: $Map<$Item, $FireworkExplosion$Shape>;
        static TRAIL_INGREDIENT: $Ingredient;
        static TWINKLE_INGREDIENT: $Ingredient;
        static GUNPOWDER_INGREDIENT: $Ingredient;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SmithingRecipe {
    }
    export interface $SmithingRecipe extends $Recipe<$SmithingRecipeInput> {
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        getType(): $RecipeType<never>;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
    }
    export class $SingleRecipeInput extends $Record implements $RecipeInput {
        size(): number;
        getItem(arg0: number): $ItemStack;
        item(): $ItemStack;
        isEmpty(): boolean;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SingleRecipeInput}.
     */
    export type $SingleRecipeInput_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $AbstractCookingRecipe implements $Recipe<$SingleRecipeInput>, $AbstractCookingRecipeAccessor {
        assemble(input: $SingleRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        matches(input: $SingleRecipeInput_, level: $Level_): boolean;
        getType(): $RecipeType<never>;
        category(): $CookingBookCategory;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        /**
         * Gets the cook time in ticks
         */
        getCookingTime(): number;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getRemainingItems(arg0: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * Gets the experience of this recipe
         */
        getExperience(): number;
        getResult(): $ItemStack;
        getIngredient(): $Ingredient;
        constructor(type: $RecipeType_<never>, group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get group(): string;
        get cookingTime(): number;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
        get experience(): number;
        get result(): $ItemStack;
        get ingredient(): $Ingredient;
    }
    export class $ShieldDecorationRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        constructor(category: $CraftingBookCategory_);
    }
    export class $ArmorDyeRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        constructor(category: $CraftingBookCategory_);
    }
    export class $Ingredient$ItemValue extends $Record implements $Ingredient$Value, $ItemValueAccessor {
        getItems(): $Collection<$ItemStack>;
        item(): $ItemStack;
        setItem(item: $ItemStack_): void;
        getItem(): $ItemStack;
        constructor(item: $ItemStack_);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$ItemValue}.
     */
    export type $Ingredient$ItemValue_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        create(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number): $AbstractCookingRecipe;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(factory: $AbstractCookingRecipe$Factory_<T>, cookingTime: number);
    }
    export class $MapCloningRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    export class $ShapelessRecipe$Serializer implements $RecipeSerializer<$ShapelessRecipe> {
        codec(): $MapCodec<$ShapelessRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        static CODEC: $MapCodec<$ShapelessRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        constructor();
    }
    export class $ShapedRecipePattern$Data extends $Record {
        pattern(): $List<string>;
        key(): $Map<string, $Ingredient>;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern$Data>;
        constructor(key: $Map_<string, $Ingredient_>, pattern: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipePattern$Data}.
     */
    export type $ShapedRecipePattern$Data_ = { pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>,  } | [pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>, ];
    export class $ShapedRecipePattern {
        ingredients(): $NonNullList<$Ingredient>;
        static getMaxHeight(): number;
        static setCraftingSize(arg0: number, arg1: number): void;
        static getMaxWidth(): number;
        matches(input: $CraftingInput): boolean;
        static of(key: $Map_<string, $Ingredient_>, pattern: $List_<string>): $ShapedRecipePattern;
        static of(key: $Map_<string, $Ingredient_>, ...pattern: string[]): $ShapedRecipePattern;
        width(): number;
        static unpack(data: $ShapedRecipePattern$Data_): $DataResult<$ShapedRecipePattern>;
        height(): number;
        data: ($ShapedRecipePattern$Data) | undefined;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern>;
        symmetrical: boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipePattern>;
        constructor(width: number, height: number, ingredients: $NonNullList<$Ingredient_>, data: ($ShapedRecipePattern$Data_) | undefined);
        static get maxHeight(): number;
        static get maxWidth(): number;
    }
    export class $ShapelessRecipe implements $CraftingRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        matches(input: $CraftingInput, level: $Level_): boolean;
        category(): $CraftingBookCategory;
        handler$ecd000$wover$setupItemStack(arg0: $RecipeInput, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getType(): $RecipeType<never>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        result: $ItemStack;
        ingredients: $NonNullList<$Ingredient>;
        group: string;
        constructor(group: string, category: $CraftingBookCategory_, result: $ItemStack_, ingredients: $NonNullList<$Ingredient_>);
        get serializer(): $RecipeSerializer<never>;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $BannerDuplicateRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe implements $Recipe<$SingleRecipeInput> {
        assemble(input: $SingleRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getType(): $RecipeType<never>;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getRemainingItems(arg0: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        constructor(type: $RecipeType_<never>, serializer: $RecipeSerializer_<never>, group: string, ingredient: $Ingredient_, result: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get group(): string;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $FireworkRocketRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        static STAR_INGREDIENT: $Ingredient;
        static PAPER_INGREDIENT: $Ingredient;
        static GUNPOWDER_INGREDIENT: $Ingredient;
        constructor(category: $CraftingBookCategory_);
    }
    export class $DecoratedPotRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $StonecutterRecipe extends $SingleItemRecipe {
        matches(input: $SingleRecipeInput_, level: $Level_): boolean;
        constructor(group: string, ingredient: $Ingredient_, result: $ItemStack_);
    }
    export class $BlastingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer<$SmithingTransformRecipe> {
        codec(): $MapCodec<$SmithingTransformRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        constructor();
    }
    export class $ShulkerBoxColoring extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        constructor(category: $CraftingBookCategory_);
    }
    export class $TippedArrowRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
    }
    export interface $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
        create(category: $CraftingBookCategory_): T;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCraftingRecipeSerializer$Factory}.
     */
    export type $SimpleCraftingRecipeSerializer$Factory_<T> = ((arg0: $CraftingBookCategory) => T);
    export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer<$SmithingTrimRecipe> {
        codec(): $MapCodec<$SmithingTrimRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        constructor();
    }
    export class $CustomRecipe implements $CraftingRecipe {
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        category(): $CraftingBookCategory;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getType(): $RecipeType<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(category: $CraftingBookCategory_);
        get special(): boolean;
        get type(): $RecipeType<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $SmithingTrimRecipe implements $SmithingRecipe, $AccessSmithingTrimRecipe, $AccessorSmithingTrimRecipe$1, $AccessorSmithingTrimRecipe {
        assemble(input: $SmithingRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        static createSmithingTrimRecipe$crafttweaker_$md$e03d8d$0(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_): $SmithingTrimRecipe;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        isIncomplete(): boolean;
        matches(input: $SmithingRecipeInput_, level: $Level_): boolean;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getToastSymbol(): $ItemStack;
        getType(): $RecipeType<never>;
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        crafttweaker$getTemplate(): $Ingredient;
        crafttweaker$getBase(): $Ingredient;
        crafttweaker$getAddition(): $Ingredient;
        getTemplate(): $Ingredient;
        template: $Ingredient;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get group(): string;
    }
    export class $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
    }
    export interface $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
        getRecipeFor(input: I, level: $Level_): ($RecipeHolder<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManager$CachedCheck}.
     */
    export type $RecipeManager$CachedCheck_<I, T> = ((arg0: I, arg1: $Level) => ($RecipeHolder_<T>) | undefined);
    export class $RecipeType<T extends $Recipe<never>> {
        static register<T extends $Recipe<never>>(identifier: string): $RecipeType<T>;
        static simple<T extends $Recipe<never>>(arg0: $ResourceLocation_): $RecipeType<T>;
        static BLASTING: $RecipeType<$BlastingRecipe>;
        static STONECUTTING: $RecipeType<$StonecutterRecipe>;
        static CRAFTING: $RecipeType<$CraftingRecipe>;
        static SMELTING: $RecipeType<$SmeltingRecipe>;
        static SMOKING: $RecipeType<$SmokingRecipe>;
        static CAMPFIRE_COOKING: $RecipeType<$CampfireCookingRecipe>;
        static SMITHING: $RecipeType<$SmithingRecipe>;
    }
    export interface $RecipeType<T extends $Recipe<never>> {
    }
    /**
     * Values that may be interpreted as {@link $RecipeType}.
     */
    export type $RecipeType_<T> = RegistryTypes.RecipeType;
    export class $SmeltingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
    }
    export interface $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
        create(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number): T;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCookingRecipe$Factory}.
     */
    export type $AbstractCookingRecipe$Factory_<T> = ((arg0: string, arg1: $CookingBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: number, arg5: number) => T);
    export class $RecipeInput {
    }
    export interface $RecipeInput extends $RecipeInputKJS, $RecipeInputMixin {
        size(): number;
        isEmpty(): boolean;
        getItem(index: number): $ItemStack;
        get empty(): boolean;
    }
    export class $RecipeSerializer<T extends $Recipe<never>> {
        static register<S extends $RecipeSerializer<T>, T extends $Recipe<never>>(key: string, recipeSerializer: S): S;
        static MAP_CLONING: $RecipeSerializer<$MapCloningRecipe>;
        static SMELTING_RECIPE: $RecipeSerializer<$SmeltingRecipe>;
        static REPAIR_ITEM: $RecipeSerializer<$RepairItemRecipe>;
        static FIREWORK_STAR: $RecipeSerializer<$FireworkStarRecipe>;
        static FIREWORK_STAR_FADE: $RecipeSerializer<$FireworkStarFadeRecipe>;
        static SMOKING_RECIPE: $RecipeSerializer<$SmokingRecipe>;
        static SHAPED_RECIPE: $RecipeSerializer<$ShapedRecipe>;
        static ARMOR_DYE: $RecipeSerializer<$ArmorDyeRecipe>;
        static MAP_EXTENDING: $RecipeSerializer<$MapExtendingRecipe>;
        static BOOK_CLONING: $RecipeSerializer<$BookCloningRecipe>;
        static SMITHING_TRANSFORM: $RecipeSerializer<$SmithingTransformRecipe>;
        static BANNER_DUPLICATE: $RecipeSerializer<$BannerDuplicateRecipe>;
        static CAMPFIRE_COOKING_RECIPE: $RecipeSerializer<$CampfireCookingRecipe>;
        static STONECUTTER: $RecipeSerializer<$StonecutterRecipe>;
        static DECORATED_POT_RECIPE: $RecipeSerializer<$DecoratedPotRecipe>;
        static TIPPED_ARROW: $RecipeSerializer<$TippedArrowRecipe>;
        static SHIELD_DECORATION: $RecipeSerializer<$ShieldDecorationRecipe>;
        static BLASTING_RECIPE: $RecipeSerializer<$BlastingRecipe>;
        static SHAPELESS_RECIPE: $RecipeSerializer<$ShapelessRecipe>;
        static SHULKER_BOX_COLORING: $RecipeSerializer<$ShulkerBoxColoring>;
        static SMITHING_TRIM: $RecipeSerializer<$SmithingTrimRecipe>;
        static SUSPICIOUS_STEW: $RecipeSerializer<$SuspiciousStewRecipe>;
        static FIREWORK_ROCKET: $RecipeSerializer<$FireworkRocketRecipe>;
    }
    export interface $RecipeSerializer<T extends $Recipe<never>> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeSerializer}.
     */
    export type $RecipeSerializer_<T> = RegistryTypes.RecipeSerializer;
    export class $FireworkStarFadeRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        static STAR_INGREDIENT: $Ingredient;
        constructor(category: $CraftingBookCategory_);
    }
    export class $RepairItemRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        handler$ecd000$wover$setupItemStack(arg0: $RecipeInput, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        constructor(category: $CraftingBookCategory_);
    }
    export class $BookCloningRecipe extends $CustomRecipe {
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        matches(input: $CraftingInput, level: $Level_): boolean;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(category: $CraftingBookCategory_);
    }
}
