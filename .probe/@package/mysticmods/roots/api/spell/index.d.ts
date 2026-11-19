import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PropertyHolder, $Property$IntegerProperty, $PropertyHolder_, $Property$DoubleProperty } from "@package/mysticmods/roots/api/property";
import { $UUID_, $Map, $Set, $UUID, $List, $List_ } from "@package/java/util";
import { $SpellModifier, $SpellModifierSet, $SpellModifier_ } from "@package/mysticmods/roots/api/modifier";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_, $IntFunction, $Consumer_, $Predicate_, $Predicate } from "@package/java/util/function";
import { $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ICostedParent, $ICosted, $IStyledInstance, $IDataMapInitialize, $IExtendedDescribedInstance, $IStyled, $ICostedChild } from "@package/mysticmods/roots/api/registry";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Costing, $Cost, $Herb, $CostInstance_, $CostInstance } from "@package/mysticmods/roots/api/herb";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentHolder, $DataComponentType_, $DataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $MutableComponent, $TextColor, $Style, $TextColor_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $SpellLike } from "@package/mysticmods/roots/api";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $HitResult, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/spell" {
    export class $Spell$Properties {
        static validateComponents(arg0: $DataComponentMap_): $DataComponentMap;
        textColor(arg0: $ResourceKey_<$SpellModifier>, arg1: number): $Spell$Properties;
        textColor(arg0: $ResourceKey_<$SpellModifier>, arg1: $TextColor_): $Spell$Properties;
        textColor(arg0: number): $Spell$Properties;
        textColor(arg0: $ResourceKey_<$SpellModifier>, arg1: $ChatFormatting_): $Spell$Properties;
        textColor(arg0: $TextColor_): $Spell$Properties;
        textColor(arg0: $ChatFormatting_): $Spell$Properties;
        costs(arg0: $Supplier_<$CostInstance>): $Spell$Properties;
        type(arg0: $SpellCastType_): $Spell$Properties;
        component<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $Spell$Properties;
        component<T>(arg0: $DataComponentType_<T>, arg1: T): $Spell$Properties;
        id(arg0: $ResourceKey_<$SpellModifier>, arg1: $ResourceLocation_): $Spell$Properties;
        resolve(...arg0: $ResourceKey_<$SpellModifier>[]): $Spell$Properties;
        color(arg0: $ResourceKey_<$SpellModifier>, arg1: number, arg2: number): $Spell$Properties;
        color(arg0: number, arg1: number): $Spell$Properties;
        build(): $Spell$Properties;
        predicate(arg0: $ResourceKey_<$SpellModifier>, arg1: number): $Spell$Properties;
        operations(): $Spell$Properties;
        charge(arg0: $ParentChargeType_): $Spell$Properties;
        cost(arg0: $Supplier_<$Cost>): $Spell$Properties;
        cost(arg0: $Supplier_<$Holder<$Herb>>, arg1: number): $Spell$Properties;
        constructor();
    }
    export class $SpellCastResult extends $Record {
        static nothing(): $SpellCastResult;
        cooldown(): number;
        static tickFromCosting(arg0: number, arg1: $Costing): $SpellCastResult;
        type(): $SpellCastResult$ResultType;
        result(arg0: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        static fail(): $SpellCastResult;
        static tick(): $SpellCastResult;
        operations(): number;
        static success(arg0: number): $SpellCastResult;
        static success(arg0: number, arg1: number): $SpellCastResult;
        success(): boolean;
        modify(arg0: number): $SpellCastResult;
        static fromCosting(arg0: number, arg1: $Costing): $SpellCastResult;
        static fromCosting(arg0: number, arg1: $Costing, arg2: $Supplier_<$SpellCastResult>): $SpellCastResult;
        constructor(type: $SpellCastResult$ResultType_, operations: number, cooldown: number);
    }
    /**
     * Values that may be interpreted as {@link $SpellCastResult}.
     */
    export type $SpellCastResult_ = { cooldown?: number, type?: $SpellCastResult$ResultType_, operations?: number,  } | [cooldown?: number, type?: $SpellCastResult$ResultType_, operations?: number, ];
    export class $ISpellInstance {
        static of(arg0: $Spell_): $ISpellInstance$SimpleSpell;
        static snapshot(arg0: $ISpellInstance): $SpellInstanceSnapshot;
    }
    export interface $ISpellInstance extends $SpellLike, $ICostedParent {
        getIcon(): $ItemStack;
        canTargetThroughFluids(): boolean;
        canMarkEntityTargets(): boolean;
        getBaseMaximumOperations(): number;
        getAABB(): $AABB;
        selectTargets(arg0: $HitResult, arg1: $Player): $List<$Entity>;
        getIconPredicate(): number;
        getStyledName(): $MutableComponent;
        getChargeText(arg0: number): $Component;
        getBlockTarget(arg0: $Player): $Vec3;
        hasBlockTarget(arg0: $Player): boolean;
        getEntityRange(arg0: $Player): number;
        getLowestOverride(arg0: $Spell$OverrideContext<never>): $Spell$ModifierOverride;
        getChargeType(): $ParentChargeType;
        getBlockRange(arg0: $Player): number;
        getDefaultCosts(): $CostInstance;
        getCycleComponent(): $DataComponentType<$Cycling<never>>;
        getMaxUse(): number;
        getColor2(): number;
        asSpell(): $Spell;
        getColor1(): number;
        getCosts(): $CostInstance;
        getSpellData(): $DataComponentMap;
        getSpellData<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getSpellData<T>(arg0: $DataComponentType_<T>): T;
        offCooldown(arg0: $ItemStack_, arg1: $Entity): boolean;
        getEnabledModifiers(): $SpellModifierSet;
        getSpellDataPatch(): $PatchedDataComponentMap;
        getDefaultCooldown(): number;
        getEnabledModifierKeys(): $Set<$ResourceKey<$SpellModifier>>;
        getSlot(): number;
        getName(): $MutableComponent;
        cast(arg0: $Level_, arg1: $Player, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: $Costing, arg5: number): $SpellCastResult;
        isEmpty(): boolean;
        count(arg0: $TagKey_<$SpellModifier>): number;
        getId(): $UUID;
        getType(): $SpellCastType;
        is(arg0: $TagKey_<$Spell>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Spell>>): boolean;
        is(arg0: $ResourceKey_<$Spell>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        getData<T>(arg0: $DataMapType<$Spell_, T>): T;
        has(arg0: $SpellModifier_): boolean;
        has(arg0: $Holder_<$SpellModifier>): boolean;
        has(arg0: $TagKey_<$SpellModifier>): boolean;
        has(arg0: $ResourceKey_<$SpellModifier>): boolean;
        getChildren(): $Set<$ICostedChild>;
        canTargetEntity(arg0: $Entity): boolean;
        get icon(): $ItemStack;
        get baseMaximumOperations(): number;
        get AABB(): $AABB;
        get iconPredicate(): number;
        get styledName(): $MutableComponent;
        get chargeType(): $ParentChargeType;
        get defaultCosts(): $CostInstance;
        get cycleComponent(): $DataComponentType<$Cycling<never>>;
        get maxUse(): number;
        get color2(): number;
        get color1(): number;
        get costs(): $CostInstance;
        get enabledModifiers(): $SpellModifierSet;
        get spellDataPatch(): $PatchedDataComponentMap;
        get defaultCooldown(): number;
        get enabledModifierKeys(): $Set<$ResourceKey<$SpellModifier>>;
        get slot(): number;
        get name(): $MutableComponent;
        get empty(): boolean;
        get id(): $UUID;
        get type(): $SpellCastType;
        get children(): $Set<$ICostedChild>;
    }
    export class $SpellCastType extends $Enum<$SpellCastType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $SpellCastType[];
        static valueOf(arg0: string): $SpellCastType;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SpellCastType>;
        static INSTANT: $SpellCastType;
        static CHARGED: $SpellCastType;
        static BY_ID: $IntFunction<$SpellCastType>;
        static CONTINUOUS: $SpellCastType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SpellCastType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpellCastType}.
     */
    export type $SpellCastType_ = "instant" | "continuous" | "charged";
    export class $Spell$ModifierOverride extends $Record {
        textColor(): $TextColor;
        id(): string;
        predicate(): number;
        color1(): number;
        color2(): number;
        static COLOR_1: $Spell$OverrideContext<number>;
        static COLOR_2: $Spell$OverrideContext<number>;
        static PREDICATE: $Spell$OverrideContext<number>;
        static ID: $Spell$OverrideContext<string>;
        static TEXT_COLOR: $Spell$OverrideContext<$TextColor>;
        constructor(textColor: $TextColor_, color1: number, color2: number, predicate: number, id: string);
    }
    /**
     * Values that may be interpreted as {@link $Spell$ModifierOverride}.
     */
    export type $Spell$ModifierOverride_ = { id?: string, textColor?: $TextColor_, predicate?: number, color2?: number, color1?: number,  } | [id?: string, textColor?: $TextColor_, predicate?: number, color2?: number, color1?: number, ];
    export class $SpellCastResult$ResultType extends $Enum<$SpellCastResult$ResultType> {
        static values(): $SpellCastResult$ResultType[];
        static valueOf(arg0: string): $SpellCastResult$ResultType;
        static SUCCESS: $SpellCastResult$ResultType;
        static NOOP: $SpellCastResult$ResultType;
        static TICK: $SpellCastResult$ResultType;
        static FAIL: $SpellCastResult$ResultType;
    }
    /**
     * Values that may be interpreted as {@link $SpellCastResult$ResultType}.
     */
    export type $SpellCastResult$ResultType_ = "noop" | "success" | "fail" | "tick";
    export interface $Spell extends RegistryMarked<RegistryTypes.RootsSpellsTag, RegistryTypes.RootsSpells> {}
    export class $ISpellInstance$SimpleSpell extends $Record implements $ISpellInstance {
        asSpell(): $Spell;
        getEnabledModifiers(): $SpellModifierSet;
        id(): $UUID;
        getId(): $UUID;
        has(arg0: $Holder_<$SpellModifier>): boolean;
        has(arg0: $SpellModifier_): boolean;
        spell(): $Spell;
        getIcon(): $ItemStack;
        canTargetThroughFluids(): boolean;
        canMarkEntityTargets(): boolean;
        getBaseMaximumOperations(): number;
        getAABB(): $AABB;
        selectTargets(arg0: $HitResult, arg1: $Player): $List<$Entity>;
        getIconPredicate(): number;
        getStyledName(): $MutableComponent;
        getChargeText(arg0: number): $Component;
        getBlockTarget(arg0: $Player): $Vec3;
        hasBlockTarget(arg0: $Player): boolean;
        getEntityRange(arg0: $Player): number;
        getLowestOverride(arg0: $Spell$OverrideContext<never>): $Spell$ModifierOverride;
        getChargeType(): $ParentChargeType;
        getBlockRange(arg0: $Player): number;
        getDefaultCosts(): $CostInstance;
        getCycleComponent(): $DataComponentType<$Cycling<never>>;
        getMaxUse(): number;
        getColor2(): number;
        getColor1(): number;
        getCosts(): $CostInstance;
        getSpellData(): $DataComponentMap;
        getSpellData<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getSpellData<T>(arg0: $DataComponentType_<T>): T;
        offCooldown(arg0: $ItemStack_, arg1: $Entity): boolean;
        getSpellDataPatch(): $PatchedDataComponentMap;
        getDefaultCooldown(): number;
        getEnabledModifierKeys(): $Set<$ResourceKey<$SpellModifier>>;
        getSlot(): number;
        getName(): $MutableComponent;
        cast(arg0: $Level_, arg1: $Player, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: $Costing, arg5: number): $SpellCastResult;
        isEmpty(): boolean;
        count(arg0: $TagKey_<$SpellModifier>): number;
        getType(): $SpellCastType;
        is(arg0: $TagKey_<$Spell>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Spell>>): boolean;
        is(arg0: $ResourceKey_<$Spell>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        getData<T>(arg0: $DataMapType<$Spell_, T>): T;
        has(arg0: $TagKey_<$SpellModifier>): boolean;
        has(arg0: $ResourceKey_<$SpellModifier>): boolean;
        getChildren(): $Set<$ICostedChild>;
        canTargetEntity(arg0: $Entity): boolean;
        hasChild(arg0: $ICostedChild): boolean;
        getMaximumOperations(arg0: $Object2BooleanMap<$ICosted>): number;
        constructor(id: $UUID_, spell: $Spell_);
        get enabledModifiers(): $SpellModifierSet;
        get icon(): $ItemStack;
        get baseMaximumOperations(): number;
        get AABB(): $AABB;
        get iconPredicate(): number;
        get styledName(): $MutableComponent;
        get chargeType(): $ParentChargeType;
        get defaultCosts(): $CostInstance;
        get cycleComponent(): $DataComponentType<$Cycling<never>>;
        get maxUse(): number;
        get color2(): number;
        get color1(): number;
        get costs(): $CostInstance;
        get spellDataPatch(): $PatchedDataComponentMap;
        get defaultCooldown(): number;
        get enabledModifierKeys(): $Set<$ResourceKey<$SpellModifier>>;
        get slot(): number;
        get name(): $MutableComponent;
        get empty(): boolean;
        get type(): $SpellCastType;
        get children(): $Set<$ICostedChild>;
    }
    /**
     * Values that may be interpreted as {@link $ISpellInstance$SimpleSpell}.
     */
    export type $ISpellInstance$SimpleSpell_ = { spell?: $Spell_, id?: $UUID_,  } | [spell?: $Spell_, id?: $UUID_, ];
    export class $ParentChargeType extends $Enum<$ParentChargeType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $ParentChargeType[];
        static valueOf(arg0: string): $ParentChargeType;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ParentChargeType>;
        static OPERATION: $ParentChargeType;
        static BY_ID: $IntFunction<$ParentChargeType>;
        static INSTANCE: $ParentChargeType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ParentChargeType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ParentChargeType}.
     */
    export type $ParentChargeType_ = "instance" | "operation";
    export class $Spell$OverrideContext<T> implements $Predicate<$Spell$ModifierOverride> {
        test(arg0: $Spell$ModifierOverride_): boolean;
        or(arg0: $Predicate_<$Spell$ModifierOverride>): $Predicate<$Spell$ModifierOverride>;
        negate(): $Predicate<$Spell$ModifierOverride>;
        and(arg0: $Predicate_<$Spell$ModifierOverride>): $Predicate<$Spell$ModifierOverride>;
    }
    export class $Cycling<T extends $Cycling<T>> {
    }
    export interface $Cycling<T extends $Cycling<T>> extends $IStyled, $StringRepresentable {
        valuesInternal(): T[];
        next(): T;
        ordinal(): number;
    }
    export class $SpellInstanceSnapshot extends $Record implements $ISpellInstance, $DataComponentHolder {
        asSpell(): $Spell;
        getEnabledModifiers(): $SpellModifierSet;
        getSpellDataPatch(): $PatchedDataComponentMap;
        enabledModifiers(): $SpellModifierSet;
        slot(): number;
        data(): $PatchedDataComponentMap;
        id(): $UUID;
        getId(): $UUID;
        getComponents(): $DataComponentMap;
        spell(): $Spell;
        getIcon(): $ItemStack;
        canTargetThroughFluids(): boolean;
        canMarkEntityTargets(): boolean;
        getBaseMaximumOperations(): number;
        getAABB(): $AABB;
        selectTargets(arg0: $HitResult, arg1: $Player): $List<$Entity>;
        getIconPredicate(): number;
        getStyledName(): $MutableComponent;
        getChargeText(arg0: number): $Component;
        getBlockTarget(arg0: $Player): $Vec3;
        hasBlockTarget(arg0: $Player): boolean;
        getEntityRange(arg0: $Player): number;
        getLowestOverride(arg0: $Spell$OverrideContext<never>): $Spell$ModifierOverride;
        getChargeType(): $ParentChargeType;
        getBlockRange(arg0: $Player): number;
        getDefaultCosts(): $CostInstance;
        getCycleComponent(): $DataComponentType<$Cycling<never>>;
        getMaxUse(): number;
        getColor2(): number;
        getColor1(): number;
        getCosts(): $CostInstance;
        getSpellData(): $DataComponentMap;
        getSpellData<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getSpellData<T>(arg0: $DataComponentType_<T>): T;
        offCooldown(arg0: $ItemStack_, arg1: $Entity): boolean;
        getDefaultCooldown(): number;
        getEnabledModifierKeys(): $Set<$ResourceKey<$SpellModifier>>;
        getSlot(): number;
        getName(): $MutableComponent;
        cast(arg0: $Level_, arg1: $Player, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: $Costing, arg5: number): $SpellCastResult;
        isEmpty(): boolean;
        count(arg0: $TagKey_<$SpellModifier>): number;
        getType(): $SpellCastType;
        is(arg0: $TagKey_<$Spell>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Spell>>): boolean;
        is(arg0: $ResourceKey_<$Spell>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        getData<T>(arg0: $DataMapType<$Spell_, T>): T;
        has(arg0: $SpellModifier_): boolean;
        has(arg0: $Holder_<$SpellModifier>): boolean;
        has(arg0: $TagKey_<$SpellModifier>): boolean;
        has(arg0: $ResourceKey_<$SpellModifier>): boolean;
        getChildren(): $Set<$ICostedChild>;
        canTargetEntity(arg0: $Entity): boolean;
        get<T>(arg0: $DataComponentType_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        has(arg0: $DataComponentType_<never>): boolean;
        hasChild(arg0: $ICostedChild): boolean;
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(arg0: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(arg0: $DataComponentType_<T>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(arg0: $Supplier_<$DataComponentType<T>>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        getMaximumOperations(arg0: $Object2BooleanMap<$ICosted>): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SpellInstanceSnapshot>;
        constructor(id: $UUID_, slot: number, spell: $Spell_, enabledModifiers: $SpellModifierSet, data: $PatchedDataComponentMap);
        get spellDataPatch(): $PatchedDataComponentMap;
        get components(): $DataComponentMap;
        get icon(): $ItemStack;
        get baseMaximumOperations(): number;
        get AABB(): $AABB;
        get iconPredicate(): number;
        get styledName(): $MutableComponent;
        get chargeType(): $ParentChargeType;
        get defaultCosts(): $CostInstance;
        get cycleComponent(): $DataComponentType<$Cycling<never>>;
        get maxUse(): number;
        get color2(): number;
        get color1(): number;
        get costs(): $CostInstance;
        get defaultCooldown(): number;
        get enabledModifierKeys(): $Set<$ResourceKey<$SpellModifier>>;
        get name(): $MutableComponent;
        get empty(): boolean;
        get type(): $SpellCastType;
        get children(): $Set<$ICostedChild>;
    }
    /**
     * Values that may be interpreted as {@link $SpellInstanceSnapshot}.
     */
    export type $SpellInstanceSnapshot_ = { id?: $UUID_, spell?: $Spell_, slot?: number, data?: $PatchedDataComponentMap, enabledModifiers?: $SpellModifierSet,  } | [id?: $UUID_, spell?: $Spell_, slot?: number, data?: $PatchedDataComponentMap, enabledModifiers?: $SpellModifierSet, ];
    export class $Spell implements $IStyledInstance<$ISpellInstance>, $ICosted, $SpellLike, $TooltipComponent, $IDataMapInitialize<$Spell>, $IExtendedDescribedInstance<$ISpellInstance> {
        isBold(): boolean;
        getTextColor(arg0: $ISpellInstance): $TextColor;
        getTextColor(): $TextColor;
        getCooldownProperty(): $PropertyHolder<$Property$IntegerProperty>;
        canTargetThroughFluids(arg0: $ISpellInstance): boolean;
        canMarkEntityTargets(arg0: $ISpellInstance): boolean;
        createExtendedDescriptionComponents(): $Component[];
        getOrCreateTooltipExtendedDescriptionId(): string;
        createModifierDescriptionComponents(arg0: $SpellModifier_): $Component[];
        getAABB(): $AABB;
        getAffectedBlocks(arg0: $Level_, arg1: $Player, arg2: $ISpellInstance, arg3: $ItemStack_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $BlockHitResult): $Map<$BlockPos, $BlockState>;
        selectTargets(arg0: $ISpellInstance, arg1: $HitResult, arg2: $Player): $List<$Entity>;
        getIconPredicate(arg0: $ISpellInstance): number;
        /**
         * @deprecated
         */
        getInstanceIcon(arg0: $ISpellInstance): $ItemStack;
        getReachProperty(): $PropertyHolder<$Property$DoubleProperty>;
        buildProperties(arg0: $List_<$PropertyHolder_<never>>): void;
        getChargeText(arg0: number): $Component;
        getBlockTarget(arg0: $Player, arg1: $ISpellInstance): $Vec3;
        hasBlockTarget(arg0: $Player, arg1: $ISpellInstance): boolean;
        getEntityRange(arg0: $Player, arg1: $ISpellInstance): number;
        getLowestOverride(arg0: $ISpellInstance, arg1: $Spell$OverrideContext<never>): $Spell$ModifierOverride;
        getChargeType(): $ParentChargeType;
        /**
         * @deprecated
         */
        getRawColor1(): number;
        getOrCreateStyle(): $Style;
        getOrCreateStyle(arg0: $ISpellInstance): $Style;
        getMaxUseProperty(): $PropertyHolder<$Property$IntegerProperty>;
        getBlockRange(arg0: $Player, arg1: $ISpellInstance): number;
        getDefaultCosts(): $CostInstance;
        /**
         * @deprecated
         */
        getRawColor2(): number;
        getSpellIcon(): $ItemStack;
        getCycleComponent(arg0: $ISpellInstance): $DataComponentType<$Cycling<never>>;
        getMaxUse(): number;
        getColor2(arg0: $ISpellInstance): number;
        asSpell(): $Spell;
        getColor1(arg0: $ISpellInstance): number;
        getCosts(): $CostInstance;
        getOrCreateTooltipDescriptionId(): string;
        getOrCreateDescriptionComponents(): $Component[];
        cast(arg0: $Level_, arg1: $Player, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: $Costing, arg5: $ISpellInstance, arg6: number): $SpellCastResult;
        initialize(arg0: $Holder_<$Spell>): void;
        init(arg0: $Holder_<$Spell>): void;
        getProperties(): $List<$PropertyHolder<never>>;
        getType(): $SpellCastType;
        is(arg0: $TagKey_<$Spell>): boolean;
        is(arg0: $ResourceKey_<$Spell>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Spell>>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        getComponents(): $DataComponentMap;
        builtInRegistryHolder(): $Holder<$Spell>;
        getDescriptionId(arg0: $ISpellInstance): string;
        getCooldown(): number;
        canTargetEntity(arg0: $Entity): boolean;
        getBoundingBox(): $BoundingBox;
        getOrCreateDescriptionId(arg0: $ISpellInstance): string;
        getOrCreateDescriptionId(): string;
        isBold(arg0: $ISpellInstance): boolean;
        getStyledName(arg0: $ISpellInstance, arg1: boolean): $MutableComponent;
        getStyledName(arg0: $ISpellInstance): $MutableComponent;
        getName(arg0: $ISpellInstance): $MutableComponent;
        getName(arg0: $ISpellInstance, arg1: $Style): $MutableComponent;
        getStyle(arg0: $ISpellInstance): $Style;
        getBaseMaximumOperations(): number;
        getMaximumOperations(arg0: $Object2BooleanMap<$ICosted>): number;
        performInit(arg0: $Holder_<never>): void;
        getTooltipDescriptionId(arg0: $ISpellInstance): string;
        getTooltipDescription(arg0: $ISpellInstance): $MutableComponent;
        getOrCreateTooltipExtendedDescriptionId(arg0: $ISpellInstance): string;
        getTooltipExtendedDescription(arg0: $ISpellInstance): $MutableComponent;
        getOrCreateTooltipDescriptionId(arg0: $ISpellInstance): string;
        getTooltipExtendedDescriptionId(arg0: $ISpellInstance): string;
        getOrCreateDescriptionComponents(arg0: $ISpellInstance): $Component[];
        getStyledName(arg0: boolean): $MutableComponent;
        getStyledName(): $MutableComponent;
        getStyle(): $Style;
        getTooltipExtendedDescription(): $MutableComponent;
        getTooltipExtendedDescriptionId(): string;
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        getTooltipDescriptionId(): string;
        getTooltipDescription(): $MutableComponent;
        static CODEC: $Codec<$Spell>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Spell>;
        /**
         * @deprecated
         */
        constructor(arg0: $SpellCastType_, arg1: $ChatFormatting_, arg2: $CostInstance_, arg3: $ParentChargeType_, arg4: number, arg5: number);
        constructor(arg0: $SpellCastType_, arg1: $TextColor_, arg2: $CostInstance_, arg3: $ParentChargeType_, arg4: number, arg5: number);
        constructor(arg0: $Spell$Properties);
        get cooldownProperty(): $PropertyHolder<$Property$IntegerProperty>;
        get AABB(): $AABB;
        get reachProperty(): $PropertyHolder<$Property$DoubleProperty>;
        get chargeType(): $ParentChargeType;
        get rawColor1(): number;
        get maxUseProperty(): $PropertyHolder<$Property$IntegerProperty>;
        get defaultCosts(): $CostInstance;
        get rawColor2(): number;
        get spellIcon(): $ItemStack;
        get maxUse(): number;
        get costs(): $CostInstance;
        get properties(): $List<$PropertyHolder<never>>;
        get type(): $SpellCastType;
        get components(): $DataComponentMap;
        get cooldown(): number;
        get boundingBox(): $BoundingBox;
        get baseMaximumOperations(): number;
    }
    /**
     * Values that may be interpreted as {@link $Spell}.
     */
    export type $Spell_ = RegistryTypes.RootsSpells;
}
