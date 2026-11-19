import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Spliterator, $Iterator, $List, $List_, $Collection, $Set } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $AEKeyFilter } from "@package/appeng/api/storage";
import { $Object2LongMap$Entry, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $KeyCounterSnapshotAccess } from "@package/cn/dancingsnow/neoecoae/crafting/display/terminal";
import { $Enum, $Record, $Class, $Object, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/stacks" {
    export class $AEKeyType {
        codec(): $MapCodec<$AEKey>;
        getTagNames(): $Stream<$TagKey<never>>;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        tryCast(arg0: $AEKey): $AEKey;
        getAmountPerUnit(): number;
        getAmountPerByte(): number;
        getUnitSymbol(): string;
        loadKeyFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        contains(arg0: $AEKey): boolean;
        filter(): $AEKeyFilter;
        getId(): $ResourceLocation;
        static items(): $AEKeyType;
        getDescription(): $Component;
        getKeyClass(): $Class<$AEKey>;
        supportsFuzzyRangeSearch(): boolean;
        getAmountPerOperation(): number;
        readFromPacket(arg0: $RegistryFriendlyByteBuf): $AEKey;
        static fromRawId(arg0: number): $AEKeyType;
        getRawId(): number;
        static fluids(): $AEKeyType;
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<$AEKey>, arg2: $Component_);
        get tagNames(): $Stream<$TagKey<never>>;
        get amountPerUnit(): number;
        get amountPerByte(): number;
        get unitSymbol(): string;
        get id(): $ResourceLocation;
        get description(): $Component;
        get keyClass(): $Class<$AEKey>;
        get amountPerOperation(): number;
        get rawId(): number;
    }
    /**
     * Values that may be interpreted as {@link $AEKeyType}.
     */
    export type $AEKeyType_ = RegistryTypes.Ae2Keytypes;
    export class $KeyCounter implements $Iterable<$Object2LongMap$Entry<$AEKey>>, $KeyCounterSnapshotAccess {
        removeZeros(): void;
        findFuzzy(arg0: $AEKey, arg1: $FuzzyMode_): $Collection<$Object2LongMap$Entry<$AEKey>>;
        neoecoae$primaryMaps(arg0: $Reference2ObjectMap<any, any>): void;
        neoecoae$primaryMaps(): $Reference2ObjectMap<any, any>;
        removeEmptySubmaps(): void;
        getFirstKey(): $AEKey;
        getFirstKey<T extends $AEKey>(arg0: $Class<T>): T;
        remove(arg0: $AEKey): number;
        remove(arg0: $AEKey, arg1: number): void;
        size(): number;
        reset(): void;
        get(arg0: $AEKey): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AEKey, arg1: number): void;
        iterator(): $Iterator<$Object2LongMap$Entry<$AEKey>>;
        addAll(arg0: $KeyCounter): void;
        set(arg0: $AEKey, arg1: number): void;
        keySet(): $Set<$AEKey>;
        removeAll(arg0: $KeyCounter): void;
        getFirstEntry(): $Object2LongMap$Entry<$AEKey>;
        getFirstEntry<T extends $AEKey>(arg0: $Class<T>): $Object2LongMap$Entry<$AEKey>;
        spliterator(): $Spliterator<$Object2LongMap$Entry<$AEKey>>;
        forEach(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
        constructor();
        [Symbol.iterator](): Iterator<$Object2LongMap$Entry<$AEKey>>
        get empty(): boolean;
    }
    export class $GenericStack extends $Record {
        static fromFluidStack(arg0: $FluidStack_): $GenericStack;
        static unwrapItemStack(arg0: $ItemStack_): $GenericStack;
        static fromItemStack(arg0: $ItemStack_): $GenericStack;
        static writeTag(arg0: $HolderLookup$Provider, arg1: $GenericStack_): $CompoundTag;
        static readTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GenericStack;
        static wrapInItemStack(arg0: $GenericStack_): $ItemStack;
        static wrapInItemStack(arg0: $AEKey, arg1: number): $ItemStack;
        static getStackSizeOrZero(arg0: $GenericStack_): number;
        static isWrapped(arg0: $ItemStack_): boolean;
        static sum(arg0: $GenericStack_, arg1: $GenericStack_): $GenericStack;
        static writeBuffer(arg0: $GenericStack_, arg1: $RegistryFriendlyByteBuf): void;
        what(): $AEKey;
        static readBuffer(arg0: $RegistryFriendlyByteBuf): $GenericStack;
        amount(): number;
        static FAULT_TOLERANT_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static CODEC: $Codec<$GenericStack>;
        static AMOUNT_FIELD: string;
        static FAULT_TOLERANT_NULLABLE_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GenericStack>;
        constructor(what: $AEKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $GenericStack}.
     */
    export type $GenericStack_ = { what?: $AEKey, amount?: number,  } | [what?: $AEKey, amount?: number, ];
    export class $AEItemKey extends $AEKey {
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEItemKey;
        toStack(arg0: number): $ItemStack;
        toStack(): $ItemStack;
        getReadOnlyStack(): $ItemStack;
        dropSecondary(): $AEItemKey;
        static matches(arg0: $AEKey, arg1: $ItemStack_): boolean;
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $Ingredient_): boolean;
        static of(arg0: $ItemLike_): $AEItemKey;
        static of(arg0: $ItemStack_): $AEItemKey;
        static filter(): $AEKeyFilter;
        is(arg0: $ItemLike_): boolean;
        static is(arg0: $AEKey): boolean;
        getItem(): $Item;
        getMaxStackSize(): number;
        isDamaged(): boolean;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $AEItemKey;
        static CODEC: $Codec<$AEItemKey>;
        static MAP_CODEC: $MapCodec<$AEItemKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get readOnlyStack(): $ItemStack;
        get item(): $Item;
        get maxStackSize(): number;
        get damaged(): boolean;
    }
    export interface $AEKeyType extends RegistryMarked<RegistryTypes.Ae2KeytypesTag, RegistryTypes.Ae2Keytypes> {}
    export class $AEKey {
        static readKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        fuzzyEquals(arg0: $AEKey, arg1: $FuzzyMode_): boolean;
        getAmountPerUnit(): number;
        getPrimaryKey(): $Object;
        static fromTagGeneric(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        getAmountPerByte(): number;
        static readOptionalKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        getUnitSymbol(): string;
        toTagGeneric(arg0: $HolderLookup$Provider): $CompoundTag;
        dropSecondary(): $AEKey;
        static writeOptionalKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        get<T>(arg0: $DataComponentType_<T>): T;
        matches(arg0: $GenericStack_): boolean;
        getId(): $ResourceLocation;
        getType(): $AEKeyType;
        getDisplayName(): $Component;
        hasComponents(): boolean;
        static writeKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        getModId(): string;
        getFuzzySearchValue(): number;
        supportsFuzzyRangeSearch(): boolean;
        getAmountPerOperation(): number;
        getFuzzySearchMaxValue(): number;
        wrapForDisplayOrFilter(): $ItemStack;
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        addDrops(arg0: number, arg1: $List_<$ItemStack_>, arg2: $Level_, arg3: $BlockPos_): void;
        toTag(arg0: $HolderLookup$Provider): $CompoundTag;
        isTagged(arg0: $TagKey_<never>): boolean;
        static CODEC: $Codec<$AEKey>;
        static MAP_CODEC: $MapCodec<$AEKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        constructor();
        get amountPerUnit(): number;
        get primaryKey(): $Object;
        get amountPerByte(): number;
        get unitSymbol(): string;
        get id(): $ResourceLocation;
        get type(): $AEKeyType;
        get displayName(): $Component;
        get modId(): string;
        get fuzzySearchValue(): number;
        get amountPerOperation(): number;
        get fuzzySearchMaxValue(): number;
    }
    export class $AmountFormat extends $Enum<$AmountFormat> {
        static values(): $AmountFormat[];
        static valueOf(arg0: string): $AmountFormat;
        static SLOT_LARGE_FONT: $AmountFormat;
        static SLOT: $AmountFormat;
        static FULL: $AmountFormat;
    }
    /**
     * Values that may be interpreted as {@link $AmountFormat}.
     */
    export type $AmountFormat_ = "full" | "slot" | "slot_large_font";
}
