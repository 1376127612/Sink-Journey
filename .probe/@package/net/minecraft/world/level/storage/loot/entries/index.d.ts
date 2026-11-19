import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $Predicate, $Consumer, $Function_, $Consumer_, $BiFunction } from "@package/java/util/function";
import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $AccessorMixinTagEntry, $AccessorMixinNestedLootTable, $AccessorMixinLootPoolSingletonContainer, $AccessorMixinCompositeEntryBase, $AccessorMixinLootItem } from "@package/mysticmods/roots/mixin/accessor";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $CompositeEntryBaseExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $Iterable_, $Record } from "@package/java/lang";
import { $LootUnificationHandler } from "@package/com/almostreliable/unified/unification/loot";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/entries" {
    /**
     * Base class for loot pool entry containers. This class just stores a list of conditions that are checked before the entry generates loot.
     */
    export class $LootPoolEntryContainer implements $ComposableEntryContainer {
        validate(validationContext: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        or(arg0: $ComposableEntryContainer_): $ComposableEntryContainer;
        and(arg0: $ComposableEntryContainer_): $ComposableEntryContainer;
        compositeCondition: $Predicate<$LootContext>;
        conditions: $List<$LootItemCondition>;
        get type(): $LootPoolEntryType;
    }
    /**
     * A LootPoolEntryContainer that expands into a single LootPoolEntry.
     */
    export class $LootPoolSingletonContainer extends $LootPoolEntryContainer implements $AccessorMixinLootPoolSingletonContainer {
        static simpleBuilder(entryBuilder: $LootPoolSingletonContainer$EntryConstructor_): $LootPoolSingletonContainer$Builder<never>;
        roots$GetWeight(): number;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $NestedLootTable extends $LootPoolSingletonContainer implements $AccessorMixinNestedLootTable {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        static inlineLootTable(lootTable: $LootTable): $LootPoolSingletonContainer$Builder<never>;
        static lootTableReference(lootTable: $ResourceKey_<$LootTable>): $LootPoolSingletonContainer$Builder<never>;
        roots$GetContents(): $Either<$ResourceKey<$LootTable>, $LootTable>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$NestedLootTable>;
        functions: $List<$LootItemFunction>;
        contents: $Either<$ResourceKey<$LootTable>, $LootTable>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(contents: $Either<$ResourceKey_<$LootTable>, $LootTable>, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    /**
     * A loot pool entry that does not generate any items.
     */
    export class $EmptyLootItem extends $LootPoolSingletonContainer {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        static emptyItem(): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EmptyLootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    export class $LootPoolSingletonContainer$EntryConstructor {
    }
    export interface $LootPoolSingletonContainer$EntryConstructor {
    }
    /**
     * Values that may be interpreted as {@link $LootPoolSingletonContainer$EntryConstructor}.
     */
    export type $LootPoolSingletonContainer$EntryConstructor_ = (() => void);
    export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    /**
     * A loot pool entry container that will generate the dynamic drops with a given name.
     * 
     * @see LootContext.DynamicDrops
     */
    export class $DynamicLoot extends $LootPoolSingletonContainer {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        static dynamicEntry(dynamicDropsName: $ResourceLocation_): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DynamicLoot>;
        functions: $List<$LootItemFunction>;
        name: $ResourceLocation;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(name: $ResourceLocation_, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    /**
     * Base class for loot pool entry containers that delegate to one or more children.
     * The actual functionality is provided by composing the children into one composed container (see `#compose`).
     */
    export class $CompositeEntryBase extends $LootPoolEntryContainer implements $LootUnificationHandler, $CompositeEntryBaseExtension, $AccessorMixinCompositeEntryBase {
        static createCodec<T extends $CompositeEntryBase>(factory: $CompositeEntryBase$CompositeEntryConstructor_<T>): $MapCodec<T>;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        lootjs$getEntries(): $List<any>;
        roots$getChildren(): $List<$LootPoolEntryContainer>;
        compositeCondition: $Predicate<$LootContext>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
    }
    /**
     * A composite loot pool entry container that expands all its children in order until one of them succeeds.
     * This container succeeds if one of its children succeeds.
     */
    export class $AlternativesEntry extends $CompositeEntryBase {
        static alternatives<E>(childrenSources: $Collection_<E>, toChildrenFunction: $Function_<E, $LootPoolEntryContainer$Builder<never>>): $AlternativesEntry$Builder;
        static alternatives(...children: $LootPoolEntryContainer$Builder<never>[]): $AlternativesEntry$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$AlternativesEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * A loot pool entry container that generates based on an item tag.
     * If `expand` is set to true, it will expand into separate LootPoolEntries for every item in the tag, otherwise it will simply generate all items in the tag.
     */
    export class $TagEntry extends $LootPoolSingletonContainer implements $AccessorMixinTagEntry {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        static tagContents(tag: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        static expandTag(tag: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        roots$GetExpand(): boolean;
        roots$GetTag(): $TagKey<$Item>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TagEntry>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        tag: $TagKey<$Item>;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(tag: $TagKey_<$Item>, expand: boolean, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    /**
     * A loot pool entry that always generates a given item.
     */
    export class $LootItem extends $LootPoolSingletonContainer implements $LootUnificationHandler, $AccessorMixinLootItem {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        static lootTableItem(item: $ItemLike_): $LootPoolSingletonContainer$Builder<never>;
        roots$GetItem(): $Holder<$Item>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        item: $Holder<$Item>;
        static CODEC: $MapCodec<$LootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(item: $Holder_<$Item>, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    /**
     * A loot pool entry generates zero or more stacks of items based on the LootContext.
     * Each loot pool entry has a weight that determines how likely it is to be generated within a given loot pool.
     */
    export class $LootPoolEntry {
    }
    export interface $LootPoolEntry {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        /**
         * Gets the effective weight based on the loot entry's weight and quality multiplied by looter's luck.
         */
        getWeight(luck: number): number;
    }
    export class $LootPoolSingletonContainer$Builder<T extends $LootPoolSingletonContainer$Builder<T>> extends $LootPoolEntryContainer$Builder<T> implements $FunctionUserBuilder<T> {
        setQuality(quality: number): T;
        setWeight(quality: number): T;
        apply(functionBuilder: $LootItemFunction$Builder_): T;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
        unwrap(): T;
        constructor();
        set quality(value: number);
        set weight(value: number);
    }
    export class $LootPoolSingletonContainer$DummyBuilder extends $LootPoolSingletonContainer$Builder<$LootPoolSingletonContainer$DummyBuilder> {
    }
    /**
     * Registration for `LootPoolEntryType`.
     */
    export class $LootPoolEntries {
        static ITEM: $LootPoolEntryType;
        static GROUP: $LootPoolEntryType;
        static CODEC: $Codec<$LootPoolEntryContainer>;
        static SEQUENCE: $LootPoolEntryType;
        static ALTERNATIVES: $LootPoolEntryType;
        static LOOT_TABLE: $LootPoolEntryType;
        static TAG: $LootPoolEntryType;
        static EMPTY: $LootPoolEntryType;
        static DYNAMIC: $LootPoolEntryType;
        constructor();
    }
    export class $LootPoolSingletonContainer$EntryBase implements $LootPoolEntry {
    }
    export interface $LootPoolEntryType extends RegistryMarked<RegistryTypes.LootPoolEntryTypeTag, RegistryTypes.LootPoolEntryType> {}
    export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    /**
     * The SerializerType for `LootPoolEntryContainer`.
     */
    export class $LootPoolEntryType extends $Record {
        codec(): $MapCodec<$LootPoolEntryContainer>;
        constructor(arg0: $MapCodec_<$LootPoolEntryContainer>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryType}.
     */
    export type $LootPoolEntryType_ = RegistryTypes.LootPoolEntryType | { codec?: $MapCodec_<$LootPoolEntryContainer>,  } | [codec?: $MapCodec_<$LootPoolEntryContainer>, ];
    export class $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
    }
    export interface $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
        create(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>): T;
    }
    /**
     * Values that may be interpreted as {@link $CompositeEntryBase$CompositeEntryConstructor}.
     */
    export type $CompositeEntryBase$CompositeEntryConstructor_<T> = ((arg0: $List<$LootPoolEntryContainer>, arg1: $List<$LootItemCondition>) => T);
    /**
     * A composite loot pool entry container that expands all its children in order until one of them fails.
     * This container succeeds if all children succeed.
     */
    export class $SequentialEntry extends $CompositeEntryBase {
        static sequential(...children: $LootPoolEntryContainer$Builder<never>[]): $SequentialEntry$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$SequentialEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * Base interface for loot pool entry containers.
     * A loot pool entry container holds one or more loot pools and will expand into those.
     * Additionally, the container can either succeed or fail, based on its conditions.
     */
    export class $ComposableEntryContainer {
        static ALWAYS_TRUE: $ComposableEntryContainer;
        static ALWAYS_FALSE: $ComposableEntryContainer;
    }
    export interface $ComposableEntryContainer {
        /**
         * Expand this loot pool entry container by calling `entryConsumer` with any applicable entries
         * 
         * @return whether this loot pool entry container successfully expanded or not
         */
        expand(lootContext: $LootContext, entryConsumer: $Consumer_<$LootPoolEntry>): boolean;
        or(entry: $ComposableEntryContainer_): $ComposableEntryContainer;
        and(entry: $ComposableEntryContainer_): $ComposableEntryContainer;
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = ((arg0: $LootContext, arg1: $Consumer<$LootPoolEntry>) => boolean);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        otherwise(childBuilder: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        append(childBuilder: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        unwrap(): T;
        build(): $LootPoolEntryContainer;
        when(conditionBuilder: $LootItemCondition$Builder_): T;
        then(childBuilder: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        constructor();
    }
    /**
     * A composite loot pool entry container that expands all its children in order.
     * This container always succeeds.
     */
    export class $EntryGroup extends $CompositeEntryBase {
        static list(...children: $LootPoolEntryContainer$Builder<never>[]): $EntryGroup$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntryGroup>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
}
