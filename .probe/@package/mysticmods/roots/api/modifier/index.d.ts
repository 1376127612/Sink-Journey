import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ImmutableSortedSet, $ImmutableSet } from "@package/com/google/common/collect";
import { $Spliterator, $Iterator, $Collection_, $Set } from "@package/java/util";
import { $Ritual } from "@package/mysticmods/roots/api/ritual";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction_, $IntFunction, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ICosted, $IGroupDescribed, $GroupId, $GroupId_, $IDataMapInitialize, $IExtendedDescribed, $IDescribed, $ICostedChild } from "@package/mysticmods/roots/api/registry";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CostInstance_, $CostInstance } from "@package/mysticmods/roots/api/herb";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Spell } from "@package/mysticmods/roots/api/spell";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/modifier" {
    export class $SpellModifierSet extends $ModifierSet<$Spell, $SpellModifier, $SpellModifierSet> {
        copy(): $SpellModifierSet;
        validated(): $SpellModifierSet;
        static CODEC: $Codec<$SpellModifierSet>;
        static EMPTY: $SpellModifierSet;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SpellModifierSet>;
        constructor(arg0: $ImmutableSet<$SpellModifier_>);
        constructor(arg0: $Collection_<$SpellModifier_>);
        constructor(...arg0: $SpellModifier_[]);
    }
    export class $Modifier<V, T extends $Modifier<V, T>> implements $IDescribed, $IGroupDescribed, $TooltipComponent, $IModifier<V, T>, $IDataMapInitialize<T>, $ICostedChild {
        isFor(arg0: $ResourceKey_<never> | null): boolean;
        getDefaultCosts(): $CostInstance;
        getCosts(): $CostInstance;
        getApplicableHolder(): $Holder<V>;
        getConflicts(): $Set<$ResourceKey<T>>;
        /**
         * @deprecated
         */
        getApplicable(): $ResourceKey<V>;
        getParent(): $ResourceKey<T>;
        init(arg0: $Holder_<T>): void;
        is(arg0: $TagKey_<T>): boolean;
        is(arg0: T): boolean;
        is(arg0: $Holder_<T>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $ResourceKey_<T>): boolean;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        getSelf(): $ResourceKey<T>;
        builtInRegistryHolder(): $Holder<T>;
        getOrCreateDescriptionId(): string;
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        getGroupDescriptionId(): string;
        getOrCreateGroupDescriptionId(): string;
        getGroupKey(): $GroupId;
        getGroupName(arg0: number): $MutableComponent;
        getGroupName(arg0: number, arg1: $Style): $MutableComponent;
        compareTo(arg0: $IModifier<V, T>): number;
        performInit(arg0: $Holder_<never>): void;
        getBaseMaximumOperations(): number;
        getMaximumOperations(arg0: $Object2BooleanMap<$ICosted>): number;
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<V>, ...arg2: $ResourceKey_<T>[]);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<T> | null, arg2: $ResourceKey_<V>, ...arg3: $ResourceKey_<T>[]);
        get defaultCosts(): $CostInstance;
        get costs(): $CostInstance;
        get applicableHolder(): $Holder<V>;
        get conflicts(): $Set<$ResourceKey<T>>;
        get applicable(): $ResourceKey<V>;
        get parent(): $ResourceKey<T>;
        get self(): $ResourceKey<T>;
        get orCreateDescriptionId(): string;
        get descriptionId(): string;
        get groupDescriptionId(): string;
        get orCreateGroupDescriptionId(): string;
        get groupKey(): $GroupId;
        get baseMaximumOperations(): number;
    }
    export class $IModifier<V, T extends $IModifier<V, T>> {
    }
    export interface $IModifier<V, T extends $IModifier<V, T>> extends $Comparable<$IModifier<V, T>> {
        getIcon(): $ItemStack;
        getConflicts(): $Set<$ResourceKey<$IModifier<V, T>>>;
        getApplicable(): $ResourceKey<V>;
        compareTo(arg0: $IModifier<V, $IModifier<V, T>>): number;
        getParent(): $ResourceKey<$IModifier<V, T>>;
        getSelf(): $ResourceKey<$IModifier<V, T>>;
        get icon(): $ItemStack;
        get conflicts(): $Set<$ResourceKey<$IModifier<V, T>>>;
        get applicable(): $ResourceKey<V>;
        get parent(): $ResourceKey<$IModifier<V, T>>;
        get self(): $ResourceKey<$IModifier<V, T>>;
    }
    export interface $RitualModifier extends RegistryMarked<RegistryTypes.RootsRitualModifiersTag, RegistryTypes.RootsRitualModifiers> {}
    export class $RitualModifier extends $Modifier<$Ritual, $RitualModifier> {
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$RitualModifier>, arg2: $ResourceKey_<$Ritual>);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$Ritual>);
    }
    /**
     * Values that may be interpreted as {@link $RitualModifier}.
     */
    export type $RitualModifier_ = RegistryTypes.RootsRitualModifiers;
    export class $SpellModifier extends $Modifier<$Spell, $SpellModifier> implements $IExtendedDescribed {
        createExtendedDescriptionComponents(): $Component[];
        getOrCreateTooltipExtendedDescriptionId(): string;
        getOrCreateTooltipDescriptionId(): string;
        getOrCreateDescriptionComponents(): $Component[];
        getTooltipExtendedDescription(): $MutableComponent;
        getTooltipExtendedDescriptionId(): string;
        getTooltipDescriptionId(): string;
        getTooltipDescription(): $MutableComponent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SpellModifier>;
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$SpellModifier>, arg2: $ResourceKey_<$Spell>, arg3: $ChildChargeType_, arg4: $GroupId_);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$SpellModifier>, arg2: $ResourceKey_<$Spell>, arg3: $GroupId_);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$SpellModifier>, arg2: $ResourceKey_<$Spell>);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$Spell>, arg2: $ChildChargeType_);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$Spell>, arg2: $GroupId_);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$Spell>);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$SpellModifier>, arg2: $ResourceKey_<$Spell>, arg3: $ChildChargeType_, arg4: $GroupId_, ...arg5: $ResourceKey_<$SpellModifier>[]);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$SpellModifier>, arg2: $ResourceKey_<$Spell>, arg3: $GroupId_, ...arg4: $ResourceKey_<$SpellModifier>[]);
        constructor(arg0: $CostInstance_, arg1: $ResourceKey_<$SpellModifier>, arg2: $ResourceKey_<$Spell>, ...arg3: $ResourceKey_<$SpellModifier>[]);
        get orCreateTooltipExtendedDescriptionId(): string;
        get orCreateTooltipDescriptionId(): string;
        get orCreateDescriptionComponents(): $Component[];
        get tooltipExtendedDescription(): $MutableComponent;
        get tooltipExtendedDescriptionId(): string;
        get tooltipDescriptionId(): string;
        get tooltipDescription(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $SpellModifier}.
     */
    export type $SpellModifier_ = RegistryTypes.RootsSpellModifiers;
    export class $ModifierSet<V, T extends $Modifier<V, T>, C extends $ModifierSet<V, T, C>> implements $Set<T> {
        remove(arg0: $Object): boolean;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: T): boolean;
        toArray<T1>(arg0: $IntFunction_<T1[]>): T1[];
        toArray(): $Object[];
        toArray<T1>(arg0: T1[]): T1[];
        iterator(): $Iterator<T>;
        stream(): $Stream<T>;
        count(arg0: $TagKey_<T>): number;
        contains(arg0: $Object): boolean;
        validate(): boolean;
        addAll(arg0: $Collection_<T>): boolean;
        forEach(arg0: $Consumer_<T>): void;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        containsAll(arg0: $Collection_<never>): boolean;
        parallelStream(): $Stream<T>;
        firstKey(): $ResourceKey<T>;
        getKeys(): $Set<$ResourceKey<T>>;
        has(arg0: T): boolean;
        firstElement(): T;
        hasTag(arg0: $TagKey_<T>): boolean;
        spliterator(): $Spliterator<T>;
        removeIf(arg0: $Predicate_<T>): boolean;
        constructor(arg0: $ImmutableSet<T>);
        constructor(arg0: $ImmutableSortedSet<T>);
        constructor(arg0: $Collection_<T>);
        constructor(...arg0: T[]);
        [Symbol.iterator](): Iterator<T>
        get empty(): boolean;
        get keys(): $Set<$ResourceKey<T>>;
    }
    export interface $SpellModifier extends RegistryMarked<RegistryTypes.RootsSpellModifiersTag, RegistryTypes.RootsSpellModifiers> {}
    export class $ChildChargeType extends $Enum<$ChildChargeType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $ChildChargeType[];
        static valueOf(arg0: string): $ChildChargeType;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChildChargeType>;
        static SPECIFIED: $ChildChargeType;
        static BY_ID: $IntFunction<$ChildChargeType>;
        static ALWAYS: $ChildChargeType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ChildChargeType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChildChargeType}.
     */
    export type $ChildChargeType_ = "always" | "specified";
}
