import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $UUID, $List, $Map_, $UUID_, $List_, $Map } from "@package/java/util";
import { $CrystalProperty, $CrystalProperty_ } from "@package/hellfirepvp/astralsorcery/common/crystal";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $LumenBindingType } from "@package/hellfirepvp/astralsorcery/common/lumen/binding";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer, $Supplier_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $AttributeTooltipContext } from "@package/net/neoforged/neoforge/common/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ChancedArtifactEffect, $TestableArtifactCondition, $ArtifactType_, $ArtifactType, $ArtifactStability, $TestableArtifactCondition_, $ArtifactEffect, $ArtifactStability_, $ArtifactCondition, $ArtifactStats_, $ArtifactStats, $ChancedArtifactEffect_ } from "@package/hellfirepvp/astralsorcery/common/artifact";
import { $Lumen, $LumenStack, $ILumenHandler, $LumenLike_, $Lumen_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/component" {
    export class $StoredLumenComponent extends $Record {
        getActiveBindings(): $List<$Lumen>;
        getBinding(arg0: $LogicalSide_, arg1: $LumenLike_): ($LumenBindingType) | undefined;
        getStoredLumen(arg0: $LumenLike_): ($StoredLumenComponent$StoredLumen) | undefined;
        storedLumen(): $List<$StoredLumenComponent$StoredLumen>;
        boundLumen(): $Map<$Lumen, $ResourceLocation>;
        updateLumenAlwaysShow(arg0: $ResourceKey_<$Lumen>, arg1: boolean): $StoredLumenComponent;
        getLumenDisplayTexts(arg0: $LogicalSide_, arg1: $ItemStack_, arg2: $Lumen_): $List<$Component>;
        canStoreFromExistingLumen(arg0: $Lumen_): boolean;
        lumenDisplay(): $List<$StoredLumenComponent$StoredLumenDisplay>;
        static getAsHandlerAccess(arg0: $ItemStack_): $ILumenHandler;
        updateLumenStack(arg0: $Lumen_, arg1: number, arg2: number): $StoredLumenComponent;
        applyBinding(arg0: $Lumen_, arg1: $ResourceLocation_): $StoredLumenComponent;
        asHandlerAccess(arg0: $ItemStack_): $ILumenHandler;
        getLumenDisplay(): $List<$StoredLumenComponent$StoredLumen>;
        updateLumenDisplay(arg0: $ResourceKey_<$Lumen>, arg1: $Component_): $StoredLumenComponent;
        removeBinding(arg0: $Lumen_): $StoredLumenComponent;
        isEmpty(): boolean;
        properties(): $StoredLumenComponent$Properties;
        hasBinding(arg0: $LumenLike_): boolean;
        updateProperties(arg0: $UnaryOperator_<$StoredLumenComponent$Properties>): $StoredLumenComponent;
        updateProperties(arg0: $StoredLumenComponent$Properties_): $StoredLumenComponent;
        static CODEC: $Codec<$StoredLumenComponent>;
        static EMPTY: $StoredLumenComponent;
        static DEFAULT_CAPACITY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent>;
        constructor(arg0: $List_<$StoredLumenComponent$StoredLumen_>, arg1: $List_<$StoredLumenComponent$StoredLumenDisplay_>);
        constructor(arg0: $List_<$StoredLumenComponent$StoredLumen_>);
        constructor(storedLumen: $List_<$StoredLumenComponent$StoredLumen_>, lumenDisplay: $List_<$StoredLumenComponent$StoredLumenDisplay_>, properties: $StoredLumenComponent$Properties_, boundLumen: $Map_<$Lumen_, $ResourceLocation_>);
        get activeBindings(): $List<$Lumen>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent}.
     */
    export type $StoredLumenComponent_ = { properties?: $StoredLumenComponent$Properties_, storedLumen?: $List_<$StoredLumenComponent$StoredLumen_>, boundLumen?: $Map_<$Lumen_, $ResourceLocation_>, lumenDisplay?: $List_<$StoredLumenComponent$StoredLumenDisplay_>,  } | [properties?: $StoredLumenComponent$Properties_, storedLumen?: $List_<$StoredLumenComponent$StoredLumen_>, boundLumen?: $Map_<$Lumen_, $ResourceLocation_>, lumenDisplay?: $List_<$StoredLumenComponent$StoredLumenDisplay_>, ];
    export class $StoredLumenComponent$StoredLumenDisplay extends $Record {
        message(): $Component;
        alwaysShow(): boolean;
        lumen(): $ResourceKey<$Lumen>;
        static CODEC: $Codec<$StoredLumenComponent$StoredLumenDisplay>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent$StoredLumenDisplay>;
        constructor(lumen: $ResourceKey_<$Lumen>, alwaysShow: boolean, message: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent$StoredLumenDisplay}.
     */
    export type $StoredLumenComponent$StoredLumenDisplay_ = { alwaysShow?: boolean, message?: $Component_, lumen?: $ResourceKey_<$Lumen>,  } | [alwaysShow?: boolean, message?: $Component_, lumen?: $ResourceKey_<$Lumen>, ];
    export class $ArtifactComponent extends $Record implements $DynamicTooltipComponent {
        stats(): $ArtifactStats;
        getRandom(): $RandomSource;
        artifactType(): $ArtifactType;
        stability(): $ArtifactStability;
        static initializeBlank(arg0: $ArtifactType_): $ArtifactComponent;
        addTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
        getNextPulseTick(): number;
        addFailureEffect(arg0: $ArtifactEffect): $ArtifactComponent;
        updateStats(arg0: $ArtifactStats_): $ArtifactComponent;
        failureEffects(): $List<$ChancedArtifactEffect>;
        updatePulseTick(arg0: $ServerLevel): $ArtifactComponent;
        changeStability(arg0: $ArtifactStability_): $ArtifactComponent;
        getRawConditions(): $List<$ArtifactCondition>;
        lastPulseGameTick(): number;
        canBecomeStable(): boolean;
        createActiveCondition(arg0: $ArtifactCondition, arg1: $ArtifactEffect): $ArtifactComponent;
        commitActiveCondition(): $ArtifactComponent;
        getRawNegativeEffects(): $List<$ArtifactEffect>;
        getRawPositiveEffects(): $List<$ArtifactEffect>;
        shouldGenerateNewCondition(): boolean;
        getActiveConditionCount(): number;
        activeCondition(): ($TestableArtifactCondition) | undefined;
        conditionCount(): number;
        static initialize(arg0: $ArtifactType_): $ArtifactComponent;
        seed(): number;
        conditions(): $List<$TestableArtifactCondition>;
        static CODEC: $Codec<$ArtifactComponent>;
        constructor(artifactType: $ArtifactType_, stability: $ArtifactStability_, stats: $ArtifactStats_, seed: number, lastPulseGameTick: number, conditionCount: number, activeCondition: ($TestableArtifactCondition_) | undefined, conditions: $List_<$TestableArtifactCondition_>, failureEffects: $List_<$ChancedArtifactEffect_>);
        get random(): $RandomSource;
        get nextPulseTick(): number;
        get rawConditions(): $List<$ArtifactCondition>;
        get rawNegativeEffects(): $List<$ArtifactEffect>;
        get rawPositiveEffects(): $List<$ArtifactEffect>;
        get activeConditionCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArtifactComponent}.
     */
    export type $ArtifactComponent_ = { conditions?: $List_<$TestableArtifactCondition_>, lastPulseGameTick?: number, activeCondition?: ($TestableArtifactCondition_) | undefined, artifactType?: $ArtifactType_, stats?: $ArtifactStats_, seed?: number, conditionCount?: number, failureEffects?: $List_<$ChancedArtifactEffect_>, stability?: $ArtifactStability_,  } | [conditions?: $List_<$TestableArtifactCondition_>, lastPulseGameTick?: number, activeCondition?: ($TestableArtifactCondition_) | undefined, artifactType?: $ArtifactType_, stats?: $ArtifactStats_, seed?: number, conditionCount?: number, failureEffects?: $List_<$ChancedArtifactEffect_>, stability?: $ArtifactStability_, ];
    export class $CrystalAttributesComponent$GenerationProperties extends $Record {
        generateCount(): number;
        maxTierCount(): number;
        static CODEC: $Codec<$CrystalAttributesComponent$GenerationProperties>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CrystalAttributesComponent$GenerationProperties>;
        constructor(generateCount: number, maxTierCount: number);
    }
    /**
     * Values that may be interpreted as {@link $CrystalAttributesComponent$GenerationProperties}.
     */
    export type $CrystalAttributesComponent$GenerationProperties_ = { maxTierCount?: number, generateCount?: number,  } | [maxTierCount?: number, generateCount?: number, ];
    export class $StoredLumenComponent$Properties extends $Record {
        accepted(): $List<$ResourceKey<$Lumen>>;
        allowFill(): $StoredLumenComponent$Properties;
        canFill(): boolean;
        canDrain(): boolean;
        allowAccept(arg0: $ResourceKey_<$Lumen>): $StoredLumenComponent$Properties;
        allowAccept(arg0: $DeferredHolder<$Lumen_, $Lumen_>): $StoredLumenComponent$Properties;
        allowDrain(): $StoredLumenComponent$Properties;
        denyDrain(): $StoredLumenComponent$Properties;
        denyFill(): $StoredLumenComponent$Properties;
        withCapacity(arg0: number): $StoredLumenComponent$Properties;
        capacity(): number;
        static CODEC: $Codec<$StoredLumenComponent$Properties>;
        static DEFAULT: $StoredLumenComponent$Properties;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent$Properties>;
        constructor(capacity: number, canDrain: boolean, canFill: boolean, accepted: $List_<$ResourceKey_<$Lumen>>);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent$Properties}.
     */
    export type $StoredLumenComponent$Properties_ = { canFill?: boolean, capacity?: number, canDrain?: boolean, accepted?: $List_<$ResourceKey_<$Lumen>>,  } | [canFill?: boolean, capacity?: number, canDrain?: boolean, accepted?: $List_<$ResourceKey_<$Lumen>>, ];
    export class $CrystalAttributesComponent$TieredAttribute {
        getTier(): number;
        getProperty(): $CrystalProperty;
        static CODEC: $Codec<$CrystalAttributesComponent$TieredAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CrystalAttributesComponent$TieredAttribute>;
        get tier(): number;
        get property(): $CrystalProperty;
    }
    export class $DynamicTooltipComponent {
    }
    export interface $DynamicTooltipComponent {
        addTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
    }
    /**
     * Values that may be interpreted as {@link $DynamicTooltipComponent}.
     */
    export type $DynamicTooltipComponent_ = ((arg0: $ItemStack, arg1: $Consumer<$Component>, arg2: $AttributeTooltipContext) => void);
    export class $StoredLumenComponent$StoredLumen extends $Record {
        maxAmount(): number;
        lumenStack(): $LumenStack;
        static of(arg0: $LumenStack, arg1: number): $StoredLumenComponent$StoredLumen;
        amount(): number;
        lumen(): $Lumen;
        static CODEC: $Codec<$StoredLumenComponent$StoredLumen>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent$StoredLumen>;
        constructor(lumen: $Lumen_, amount: number, maxAmount: number);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent$StoredLumen}.
     */
    export type $StoredLumenComponent$StoredLumen_ = { amount?: number, lumen?: $Lumen_, maxAmount?: number,  } | [amount?: number, lumen?: $Lumen_, maxAmount?: number, ];
    export class $IdentifierComponent extends $Record {
        static createIdentifierIfNotExists(arg0: $ItemStack_): void;
        static createOrOverwriteIdentifier(arg0: $ItemStack_): void;
        id(): $UUID;
        static random(): $IdentifierComponent;
        static getIdentifier(arg0: $ItemStack_): $UUID;
        static CODEC: $Codec<$IdentifierComponent>;
        static NONE: $IdentifierComponent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IdentifierComponent>;
        constructor(id: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $IdentifierComponent}.
     */
    export type $IdentifierComponent_ = { id?: $UUID_,  } | [id?: $UUID_, ];
    export class $CrystalAttributesComponent implements $DynamicTooltipComponent {
        getTotalTierCount(): number;
        addTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
        setAttributeTier(arg0: $Supplier_<$CrystalProperty>, arg1: number): $CrystalAttributesComponent;
        setAttributeTier(arg0: $CrystalProperty_, arg1: number): $CrystalAttributesComponent;
        setAttributeTier(arg0: $CrystalAttributesComponent$TieredAttribute, arg1: number): $CrystalAttributesComponent;
        static defaultEmpty(): $CrystalAttributesComponent;
        getAttributeTier(arg0: $CrystalAttributesComponent$TieredAttribute): number;
        getAttributeTier(arg0: $Supplier_<$CrystalProperty>): number;
        getAttributeTier(arg0: $CrystalProperty_): number;
        isEmpty(): boolean;
        static empty(arg0: number, arg1: number): $CrystalAttributesComponent;
        getProperties(): $CrystalAttributesComponent$GenerationProperties;
        setProperties(arg0: $CrystalAttributesComponent$GenerationProperties_): $CrystalAttributesComponent;
        getAttributes(): $List<$CrystalAttributesComponent$TieredAttribute>;
        getAttribute(arg0: $CrystalProperty_): ($CrystalAttributesComponent$TieredAttribute) | undefined;
        static CODEC: $Codec<$CrystalAttributesComponent>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CrystalAttributesComponent>;
        constructor(arg0: $CrystalAttributesComponent$GenerationProperties_, ...arg1: $CrystalAttributesComponent$TieredAttribute[]);
        constructor(arg0: $CrystalAttributesComponent$GenerationProperties_, arg1: $List_<$CrystalAttributesComponent$TieredAttribute>);
        get totalTierCount(): number;
        get attributes(): $List<$CrystalAttributesComponent$TieredAttribute>;
    }
}
