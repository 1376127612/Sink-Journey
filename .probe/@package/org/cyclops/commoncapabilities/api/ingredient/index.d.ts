import { $Level_ } from "@package/net/minecraft/world/level";
import { $RegisterEvent, $NewRegistryEvent } from "@package/net/neoforged/neoforge/registries";
import { $IRecipeDefinition } from "@package/org/cyclops/commoncapabilities/api/capability/recipehandler";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientComponentStorage, $IIngredientComponentStorageWrapperHandler } from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $Set_, $Collection_, $List_, $Collection, $Comparator, $Set } from "@package/java/util";
import { $ICapabilityGetter, $IngredientComponentCapability } from "@package/org/cyclops/commoncapabilities/api/ingredient/capability";
import { $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class, $Comparable, $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BaseCapability, $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as capability from "@package/org/cyclops/commoncapabilities/api/ingredient/capability";
export * as storage from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";

declare module "@package/org/cyclops/commoncapabilities/api/ingredient" {
    export class $MixedIngredientsAdapter implements $IMixedIngredients {
        static compareCollection<T extends $Comparable<T>>(arg0: $Collection_<T>, arg1: $Collection_<T>): number;
        static compareCollection<T>(arg0: $Collection_<T>, arg1: $Collection_<T>, arg2: $Comparator<T>): number;
        static identitySetsEqual(arg0: $Set_<never>, arg1: $Set_<never>): boolean;
        compareTo(arg0: $IMixedIngredients): number;
        getFirstNonEmpty<T>(arg0: $IngredientComponent_<T, never>): T;
        isEmpty(): boolean;
        containsAll(arg0: $IMixedIngredients): boolean;
        constructor();
        get empty(): boolean;
    }
    export class $IngredientComponentCategoryType<T, M, C> {
        getMatchCondition(): M;
        isPrimaryQuantifier(): boolean;
        getCategoryType(): $Class<C>;
        isReferenceEqual(): boolean;
        getName(): $ResourceLocation;
        getClassifier(): $Function<T, C>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<C>, arg2: boolean, arg3: $Function_<T, C>, arg4: M, arg5: boolean);
        get matchCondition(): M;
        get primaryQuantifier(): boolean;
        get categoryType(): $Class<C>;
        get referenceEqual(): boolean;
        get name(): $ResourceLocation;
        get classifier(): $Function<T, C>;
    }
    export class $IIngredientMatcher<T, M> {
    }
    export interface $IIngredientMatcher<T, M> extends $Comparator<T> {
        getExactMatchNoQuantityCondition(): M;
        getEmptyInstance(): T;
        getQuantity(arg0: T): number;
        withQuantity(arg0: T, arg1: number): T;
        getExactMatchCondition(): M;
        matchesExactly(arg0: T, arg1: T): boolean;
        withCondition(arg0: M, arg1: M): M;
        getMaximumQuantity(): number;
        withoutCondition(arg0: M, arg1: M): M;
        hasCondition(arg0: M, arg1: M): boolean;
        conditionCompare(arg0: M, arg1: M): number;
        toString(arg0: T): string;
        isInstance(arg0: $Object): boolean;
        hash(arg0: T): number;
        isEmpty(arg0: T): boolean;
        matches(arg0: T, arg1: T, arg2: M): boolean;
        copy(arg0: T): T;
        getDisplayName(arg0: T): $MutableComponent;
        getAnyMatchCondition(): M;
        localize(arg0: T): string;
        get exactMatchNoQuantityCondition(): M;
        get emptyInstance(): T;
        get exactMatchCondition(): M;
        get maximumQuantity(): number;
        get anyMatchCondition(): M;
    }
    export class $PrototypedIngredient<T, M> implements $IPrototypedIngredient<T, M> {
        compareTo(arg0: $IPrototypedIngredient<never, never>): number;
        getComponent(): $IngredientComponent<T, M>;
        getPrototype(): T;
        getCondition(): M;
        constructor(arg0: $IngredientComponent_<T, M>, arg1: T, arg2: M);
        get component(): $IngredientComponent<T, M>;
        get prototype(): T;
        get condition(): M;
    }
    export class $IMixedIngredients {
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $MixedIngredients;
        static serialize(arg0: $HolderLookup$Provider, arg1: $IMixedIngredients): $CompoundTag;
    }
    export interface $IMixedIngredients extends $Comparable<$IMixedIngredients> {
        getInstances<T>(arg0: $IngredientComponent_<T, never>): $List<T>;
        getFirstNonEmpty<T>(arg0: $IngredientComponent_<T, never>): T;
        isEmpty(): boolean;
        containsAll(arg0: $IMixedIngredients): boolean;
        getComponents(): $Set<$IngredientComponent<never, never>>;
        get empty(): boolean;
        get components(): $Set<$IngredientComponent<never, never>>;
    }
    export interface $IngredientComponent<T, M> extends RegistryMarked<RegistryTypes.CommoncapabilitiesIngredientcomponentsTag, RegistryTypes.CommoncapabilitiesIngredientcomponents> {}
    export class $IPrototypedIngredient<T, M> {
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $PrototypedIngredient<any, any>;
        static serialize<T, M>(arg0: $HolderLookup$Provider, arg1: $IPrototypedIngredient<T, M>): $CompoundTag;
    }
    export interface $IPrototypedIngredient<T, M> extends $Comparable<$IPrototypedIngredient<never, never>> {
        getComponent(): $IngredientComponent<$IPrototypedIngredient<never, never>, M>;
        getPrototype(): $IPrototypedIngredient<never, never>;
        getCondition(): M;
        get component(): $IngredientComponent<$IPrototypedIngredient<never, never>, M>;
        get prototype(): $IPrototypedIngredient<never, never>;
        get condition(): M;
    }
    export class $IIngredientSerializer<T, M> {
    }
    export interface $IIngredientSerializer<T, M> {
        serializeInstance(arg0: $HolderLookup$Provider, arg1: T): $Tag;
        serializeCondition(arg0: M): $Tag;
        deserializeInstance(arg0: $HolderLookup$Provider, arg1: $Tag_): T;
        deserializeCondition(arg0: $Tag_): M;
    }
    export class $IngredientInstanceWrapper<T, M> implements $Comparable<$IngredientInstanceWrapper<T, M>> {
        compareTo(arg0: $IngredientInstanceWrapper<$IngredientInstanceWrapper<T, M>, M>): number;
        getInstance(): $IngredientInstanceWrapper<T, M>;
        getComponent(): $IngredientComponent<$IngredientInstanceWrapper<T, M>, M>;
        constructor(arg0: $IngredientComponent_<$IngredientInstanceWrapper<T, M>, M>, arg1: $IngredientInstanceWrapper<T, M>);
        get instance(): $IngredientInstanceWrapper<T, M>;
        get component(): $IngredientComponent<$IngredientInstanceWrapper<T, M>, M>;
    }
    export class $IngredientComponent<T, M> implements $Comparable<$IngredientComponent<never, never>> {
        getTranslationKey(): string;
        gatherCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getSerializer(): $IIngredientSerializer<$IngredientComponent<never, never>, M>;
        getBlockStorage<O, C>(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity | null, arg4: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        getCategoryTypes(): $List<$IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>>;
        getItemStorage<O, C>(arg0: $ItemStack_, arg1: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        static onRegistriesFilled(arg0: $RegisterEvent): void;
        getEntityStorage<O, C>(arg0: $Entity, arg1: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        getStorageWrapperHandlerCapabilities(): $Collection<$BaseCapability<never, never>>;
        static getIngredientComponentForStorageCapability(arg0: $BaseCapability<never, never>): $IngredientComponent<never, never>;
        getStorageWrapperHandler<S, C>(arg0: $BaseCapability<S, never>): $IIngredientComponentStorageWrapperHandler<$IngredientComponent<never, never>, M, S, C>;
        setStorageWrapperHandler<S>(arg0: $BaseCapability<never, never>, arg1: $IIngredientComponentStorageWrapperHandler<$IngredientComponent_<never, never>, M, S, never>): void;
        getPrimaryQuantifier(): $IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>;
        getName(): $ResourceLocation;
        compareTo(arg0: $IngredientComponent_<never, never>): number;
        wrap(arg0: $IngredientComponent_<never, never>): $IngredientInstanceWrapper<$IngredientComponent<never, never>, M>;
        static onRegistriesCreate(arg0: $NewRegistryEvent): void;
        getStorage<O, C>(arg0: $Class<O>, arg1: $ICapabilityGetter<C>, arg2: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        getMatcher(): $IIngredientMatcher<$IngredientComponent<never, never>, M>;
        getCapability<TC>(arg0: $IngredientComponentCapability<TC, void>): (TC) | undefined;
        setTranslationKey(arg0: string): $IngredientComponent<$IngredientComponent<never, never>, M>;
        static ENERGY: $IngredientComponent<number, boolean>;
        static ITEMSTACK: $IngredientComponent<$ItemStack, number>;
        static FLUIDSTACK: $IngredientComponent<$FluidStack, number>;
        static REGISTRY: $Registry<$IngredientComponent<never, never>>;
        constructor(arg0: $ResourceLocation_, arg1: $IIngredientMatcher<$IngredientComponent_<never, never>, M>, arg2: $IIngredientSerializer<$IngredientComponent_<never, never>, M>, arg3: $List_<$IngredientComponentCategoryType<$IngredientComponent_<never, never>, M, never>>);
        constructor(arg0: string, arg1: $IIngredientMatcher<$IngredientComponent_<never, never>, M>, arg2: $IIngredientSerializer<$IngredientComponent_<never, never>, M>, arg3: $List_<$IngredientComponentCategoryType<$IngredientComponent_<never, never>, M, never>>);
        get serializer(): $IIngredientSerializer<$IngredientComponent<never, never>, M>;
        get categoryTypes(): $List<$IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>>;
        get storageWrapperHandlerCapabilities(): $Collection<$BaseCapability<never, never>>;
        get primaryQuantifier(): $IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>;
        get name(): $ResourceLocation;
        get matcher(): $IIngredientMatcher<$IngredientComponent<never, never>, M>;
    }
    /**
     * Values that may be interpreted as {@link $IngredientComponent}.
     */
    export type $IngredientComponent_<T, M> = RegistryTypes.CommoncapabilitiesIngredientcomponents;
    export class $MixedIngredients extends $MixedIngredientsAdapter {
        static ofInstances<T>(arg0: $IngredientComponent_<T, never>, arg1: $Collection_<T>): $MixedIngredients;
        static fromRecipeInput(arg0: $IRecipeDefinition): $MixedIngredients;
        static ofInstance<T>(arg0: $IngredientComponent_<T, never>, arg1: T): $MixedIngredients;
        constructor(arg0: $Map_<$IngredientComponent_<never, never>, $List_<never>>);
    }
}
