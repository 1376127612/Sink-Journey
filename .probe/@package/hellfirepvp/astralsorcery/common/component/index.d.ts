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
        isEmpty(): boolean;
        properties(): $StoredLumenComponent$Properties;
        asHandlerAccess(arg0: $ItemStack_): $ILumenHandler;
        static getAsHandlerAccess(arg0: $ItemStack_): $ILumenHandler;
        getLumenDisplay(): $List<$StoredLumenComponent$StoredLumen>;
        lumenDisplay(): $List<$StoredLumenComponent$StoredLumenDisplay>;
        updateLumenStack(arg0: $Lumen_, arg1: number, arg2: number): $StoredLumenComponent;
        updateLumenDisplay(arg0: $ResourceKey_<$Lumen>, arg1: $Component_): $StoredLumenComponent;
        removeBinding(arg0: $Lumen_): $StoredLumenComponent;
        applyBinding(arg0: $Lumen_, arg1: $ResourceLocation_): $StoredLumenComponent;
        hasBinding(arg0: $LumenLike_): boolean;
        getBinding(arg0: $LogicalSide_, arg1: $LumenLike_): ($LumenBindingType) | undefined;
        getActiveBindings(): $List<$Lumen>;
        updateProperties(arg0: $UnaryOperator_<$StoredLumenComponent$Properties>): $StoredLumenComponent;
        updateProperties(arg0: $StoredLumenComponent$Properties_): $StoredLumenComponent;
        storedLumen(): $List<$StoredLumenComponent$StoredLumen>;
        getStoredLumen(arg0: $LumenLike_): ($StoredLumenComponent$StoredLumen) | undefined;
        boundLumen(): $Map<$Lumen, $ResourceLocation>;
        canStoreFromExistingLumen(arg0: $Lumen_): boolean;
        getLumenDisplayTexts(arg0: $LogicalSide_, arg1: $ItemStack_, arg2: $Lumen_): $List<$Component>;
        updateLumenAlwaysShow(arg0: $ResourceKey_<$Lumen>, arg1: boolean): $StoredLumenComponent;
        static CODEC: $Codec<$StoredLumenComponent>;
        static EMPTY: $StoredLumenComponent;
        static DEFAULT_CAPACITY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent>;
        constructor(storedLumen: $List_<$StoredLumenComponent$StoredLumen_>, lumenDisplay: $List_<$StoredLumenComponent$StoredLumenDisplay_>, properties: $StoredLumenComponent$Properties_, boundLumen: $Map_<$Lumen_, $ResourceLocation_>);
        constructor(arg0: $List_<$StoredLumenComponent$StoredLumen_>);
        constructor(arg0: $List_<$StoredLumenComponent$StoredLumen_>, arg1: $List_<$StoredLumenComponent$StoredLumenDisplay_>);
        get empty(): boolean;
        get activeBindings(): $List<$Lumen>;
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent}.
     */
    export type $StoredLumenComponent_ = { boundLumen?: $Map_<$Lumen_, $ResourceLocation_>, lumenDisplay?: $List_<$StoredLumenComponent$StoredLumenDisplay_>, properties?: $StoredLumenComponent$Properties_, storedLumen?: $List_<$StoredLumenComponent$StoredLumen_>,  } | [boundLumen?: $Map_<$Lumen_, $ResourceLocation_>, lumenDisplay?: $List_<$StoredLumenComponent$StoredLumenDisplay_>, properties?: $StoredLumenComponent$Properties_, storedLumen?: $List_<$StoredLumenComponent$StoredLumen_>, ];
    export class $StoredLumenComponent$StoredLumenDisplay extends $Record {
        message(): $Component;
        lumen(): $ResourceKey<$Lumen>;
        alwaysShow(): boolean;
        static CODEC: $Codec<$StoredLumenComponent$StoredLumenDisplay>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent$StoredLumenDisplay>;
        constructor(lumen: $ResourceKey_<$Lumen>, alwaysShow: boolean, message: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent$StoredLumenDisplay}.
     */
    export type $StoredLumenComponent$StoredLumenDisplay_ = { lumen?: $ResourceKey_<$Lumen>, alwaysShow?: boolean, message?: $Component_,  } | [lumen?: $ResourceKey_<$Lumen>, alwaysShow?: boolean, message?: $Component_, ];
    export class $ArtifactComponent extends $Record implements $DynamicTooltipComponent {
        static initialize(arg0: $ArtifactType_): $ArtifactComponent;
        seed(): number;
        getRandom(): $RandomSource;
        conditions(): $List<$TestableArtifactCondition>;
        stats(): $ArtifactStats;
        conditionCount(): number;
        activeCondition(): ($TestableArtifactCondition) | undefined;
        stability(): $ArtifactStability;
        addFailureEffect(arg0: $ArtifactEffect): $ArtifactComponent;
        failureEffects(): $List<$ChancedArtifactEffect>;
        getNextPulseTick(): number;
        updatePulseTick(arg0: $ServerLevel): $ArtifactComponent;
        getRawConditions(): $List<$ArtifactCondition>;
        changeStability(arg0: $ArtifactStability_): $ArtifactComponent;
        lastPulseGameTick(): number;
        updateStats(arg0: $ArtifactStats_): $ArtifactComponent;
        canBecomeStable(): boolean;
        static initializeBlank(arg0: $ArtifactType_): $ArtifactComponent;
        artifactType(): $ArtifactType;
        commitActiveCondition(): $ArtifactComponent;
        shouldGenerateNewCondition(): boolean;
        getRawNegativeEffects(): $List<$ArtifactEffect>;
        createActiveCondition(arg0: $ArtifactCondition, arg1: $ArtifactEffect): $ArtifactComponent;
        getRawPositiveEffects(): $List<$ArtifactEffect>;
        addTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
        getActiveConditionCount(): number;
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
    export type $ArtifactComponent_ = { conditionCount?: number, failureEffects?: $List_<$ChancedArtifactEffect_>, stability?: $ArtifactStability_, conditions?: $List_<$TestableArtifactCondition_>, lastPulseGameTick?: number, activeCondition?: ($TestableArtifactCondition_) | undefined, artifactType?: $ArtifactType_, stats?: $ArtifactStats_, seed?: number,  } | [conditionCount?: number, failureEffects?: $List_<$ChancedArtifactEffect_>, stability?: $ArtifactStability_, conditions?: $List_<$TestableArtifactCondition_>, lastPulseGameTick?: number, activeCondition?: ($TestableArtifactCondition_) | undefined, artifactType?: $ArtifactType_, stats?: $ArtifactStats_, seed?: number, ];
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
    export type $CrystalAttributesComponent$GenerationProperties_ = { generateCount?: number, maxTierCount?: number,  } | [generateCount?: number, maxTierCount?: number, ];
    export class $StoredLumenComponent$Properties extends $Record {
        capacity(): number;
        withCapacity(arg0: number): $StoredLumenComponent$Properties;
        accepted(): $List<$ResourceKey<$Lumen>>;
        allowFill(): $StoredLumenComponent$Properties;
        canDrain(): boolean;
        canFill(): boolean;
        allowAccept(arg0: $DeferredHolder<$Lumen_, $Lumen_>): $StoredLumenComponent$Properties;
        allowAccept(arg0: $ResourceKey_<$Lumen>): $StoredLumenComponent$Properties;
        denyFill(): $StoredLumenComponent$Properties;
        denyDrain(): $StoredLumenComponent$Properties;
        allowDrain(): $StoredLumenComponent$Properties;
        static CODEC: $Codec<$StoredLumenComponent$Properties>;
        static DEFAULT: $StoredLumenComponent$Properties;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent$Properties>;
        constructor(capacity: number, canDrain: boolean, canFill: boolean, accepted: $List_<$ResourceKey_<$Lumen>>);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent$Properties}.
     */
    export type $StoredLumenComponent$Properties_ = { accepted?: $List_<$ResourceKey_<$Lumen>>, canFill?: boolean, capacity?: number, canDrain?: boolean,  } | [accepted?: $List_<$ResourceKey_<$Lumen>>, canFill?: boolean, capacity?: number, canDrain?: boolean, ];
    export class $CrystalAttributesComponent$TieredAttribute {
        getProperty(): $CrystalProperty;
        getTier(): number;
        static CODEC: $Codec<$CrystalAttributesComponent$TieredAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CrystalAttributesComponent$TieredAttribute>;
        get property(): $CrystalProperty;
        get tier(): number;
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
        static of(arg0: $LumenStack, arg1: number): $StoredLumenComponent$StoredLumen;
        lumen(): $Lumen;
        amount(): number;
        maxAmount(): number;
        lumenStack(): $LumenStack;
        static CODEC: $Codec<$StoredLumenComponent$StoredLumen>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredLumenComponent$StoredLumen>;
        constructor(lumen: $Lumen_, amount: number, maxAmount: number);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenComponent$StoredLumen}.
     */
    export type $StoredLumenComponent$StoredLumen_ = { lumen?: $Lumen_, maxAmount?: number, amount?: number,  } | [lumen?: $Lumen_, maxAmount?: number, amount?: number, ];
    export class $IdentifierComponent extends $Record {
        id(): $UUID;
        static random(): $IdentifierComponent;
        static createOrOverwriteIdentifier(arg0: $ItemStack_): void;
        static getIdentifier(arg0: $ItemStack_): $UUID;
        static createIdentifierIfNotExists(arg0: $ItemStack_): void;
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
        isEmpty(): boolean;
        static empty(arg0: number, arg1: number): $CrystalAttributesComponent;
        getProperties(): $CrystalAttributesComponent$GenerationProperties;
        setProperties(arg0: $CrystalAttributesComponent$GenerationProperties_): $CrystalAttributesComponent;
        getAttributes(): $List<$CrystalAttributesComponent$TieredAttribute>;
        getAttribute(arg0: $CrystalProperty_): ($CrystalAttributesComponent$TieredAttribute) | undefined;
        getAttributeTier(arg0: $CrystalProperty_): number;
        getAttributeTier(arg0: $Supplier_<$CrystalProperty>): number;
        getAttributeTier(arg0: $CrystalAttributesComponent$TieredAttribute): number;
        getTotalTierCount(): number;
        static defaultEmpty(): $CrystalAttributesComponent;
        setAttributeTier(arg0: $CrystalAttributesComponent$TieredAttribute, arg1: number): $CrystalAttributesComponent;
        setAttributeTier(arg0: $Supplier_<$CrystalProperty>, arg1: number): $CrystalAttributesComponent;
        setAttributeTier(arg0: $CrystalProperty_, arg1: number): $CrystalAttributesComponent;
        addTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
        static CODEC: $Codec<$CrystalAttributesComponent>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CrystalAttributesComponent>;
        constructor(arg0: $CrystalAttributesComponent$GenerationProperties_, ...arg1: $CrystalAttributesComponent$TieredAttribute[]);
        constructor(arg0: $CrystalAttributesComponent$GenerationProperties_, arg1: $List_<$CrystalAttributesComponent$TieredAttribute>);
        get attributes(): $List<$CrystalAttributesComponent$TieredAttribute>;
        get totalTierCount(): number;
    }
}
