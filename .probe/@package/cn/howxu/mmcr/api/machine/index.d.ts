import { $IOType, $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RequestFailed, $RequestProcess_, $RequestFailed_, $RequestProcess } from "@package/cn/howxu/mmcr/api/network";
import { $RecipeModifier$Operation, $RecipeModifier$Operation_, $RecipeModifier$IOType_, $SingleBlockModifierReplacement, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $Set_, $Map, $Set, $OptionalInt, $List, $Map_, $List_ } from "@package/java/util";
import { $FluidHatchSize_, $IOPortKind, $ItemBusSize_, $EnergyHatchSize_ } from "@package/cn/howxu/mmcr/internal/port";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $PortTiers$ChemicalTier_, $PortTiers_, $ModifierUse_, $MachineBehavior_, $MachineBehavior } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $MachineModifier$Numeric } from "@package/cn/howxu/mmcr/api/machine/modifier";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
export * as definition from "@package/cn/howxu/mmcr/api/machine/definition";
export * as level from "@package/cn/howxu/mmcr/api/machine/level";
export * as modifier from "@package/cn/howxu/mmcr/api/machine/modifier";

declare module "@package/cn/howxu/mmcr/api/machine" {
    export class $PortRequirementSpec$Failure extends $Record {
        portId(): string;
        requiredMax(): $OptionalInt;
        requiredMin(): number;
        reason(): $PortRequirementSpec$FailureReason;
        actual(): number;
        constructor(portId: string, actual: number, requiredMin: number, requiredMax: $OptionalInt, reason: $PortRequirementSpec$FailureReason_);
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec$Failure}.
     */
    export type $PortRequirementSpec$Failure_ = { reason?: $PortRequirementSpec$FailureReason_, portId?: string, requiredMax?: $OptionalInt, actual?: number, requiredMin?: number,  } | [reason?: $PortRequirementSpec$FailureReason_, portId?: string, requiredMax?: $OptionalInt, actual?: number, requiredMin?: number, ];
    export class $PortTierRequirementSpec$Failure extends $Record {
        actualPortIds(): $List<string>;
        requirement(): $PortTierRequirementSpec$Requirement;
        constructor(requirement: $PortTierRequirementSpec$Requirement_, actualPortIds: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $PortTierRequirementSpec$Failure}.
     */
    export type $PortTierRequirementSpec$Failure_ = { actualPortIds?: $List_<string>, requirement?: $PortTierRequirementSpec$Requirement_,  } | [actualPortIds?: $List_<string>, requirement?: $PortTierRequirementSpec$Requirement_, ];
    export class $MachineAppearanceSpec extends $Record {
        static fromBasicBlock(blockId: $ResourceLocation_): $MachineAppearanceSpec;
        controllerIdleOverlayTexture(): $ResourceLocation;
        controllerActiveOverlayTexture(): $ResourceLocation;
        formedPortTextureSource(): $MachineAppearanceSpec$TextureSource;
        controllerTextureSource(): $MachineAppearanceSpec$TextureSource;
        controllerBaseTexture(): $ResourceLocation;
        formedPortBaseTexture(): $ResourceLocation;
        machineBasicBlock(): $ResourceLocation;
        static defaults(): $MachineAppearanceSpec;
        constructor(machineBasicBlock: $ResourceLocation_, controllerBaseTexture: $ResourceLocation_, formedPortBaseTexture: $ResourceLocation_, controllerIdleOverlayTexture: $ResourceLocation_, controllerActiveOverlayTexture: $ResourceLocation_);
        constructor(machineBasicBlock: $ResourceLocation_, controllerBaseTexture: $ResourceLocation_, formedPortBaseTexture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $MachineAppearanceSpec}.
     */
    export type $MachineAppearanceSpec_ = { controllerIdleOverlayTexture?: $ResourceLocation_, controllerActiveOverlayTexture?: $ResourceLocation_, machineBasicBlock?: $ResourceLocation_, controllerBaseTexture?: $ResourceLocation_, formedPortBaseTexture?: $ResourceLocation_,  } | [controllerIdleOverlayTexture?: $ResourceLocation_, controllerActiveOverlayTexture?: $ResourceLocation_, machineBasicBlock?: $ResourceLocation_, controllerBaseTexture?: $ResourceLocation_, formedPortBaseTexture?: $ResourceLocation_, ];
    export class $PortTierRequirementSpec extends $Record {
        requirements(): $List<$PortTierRequirementSpec$Requirement>;
        isEmpty(): boolean;
        static builder(): $PortTierRequirementSpec$Builder;
        static from(tiers: $PortTiers_): $PortTierRequirementSpec;
        validate(ports: $Iterable_<$IOPortKind>): ($PortTierRequirementSpec$Failure) | undefined;
        static none(): $PortTierRequirementSpec;
        constructor(requirements: $List_<$PortTierRequirementSpec$Requirement_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PortTierRequirementSpec}.
     */
    export type $PortTierRequirementSpec_ = { requirements?: $List_<$PortTierRequirementSpec$Requirement_>,  } | [requirements?: $List_<$PortTierRequirementSpec$Requirement_>, ];
    export class $PortRequirementSpec$PortCounts extends $Record {
        static of(counts: $Map_<string, number>): $PortRequirementSpec$PortCounts;
        count(portId: string): number;
        static empty(): $PortRequirementSpec$PortCounts;
        counts(): $Map<string, number>;
        constructor(counts: $Map_<string, number>);
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec$PortCounts}.
     */
    export type $PortRequirementSpec$PortCounts_ = { counts?: $Map_<string, number>,  } | [counts?: $Map_<string, number>, ];
    export class $Machine {
    }
    export interface $Machine {
        isHost(): boolean;
        structureStages(): $List<$MachineStructureStage>;
        portRequirements(): $PortRequirementSpec;
        networkInterface(): $NetworkInterfaceSpec;
        hasFactory(): boolean;
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        portTierRequirements(): $PortTierRequirementSpec;
        factoryThreads(): $List<$FactoryThreadSpec>;
        factoryThreadLimit(): number;
        acceptedModuleIds(): $Set<$ResourceLocation>;
        requestFailures(): $Map<$ResourceLocation, $RequestFailed>;
        failureAction(): $RecipeFailureActions;
        maxParallelism(): number;
        requestProcessors(): $Map<$ResourceLocation, $RequestProcess>;
        parallelizable(): boolean;
        pattern(): $BlockArray;
        displayName(): $Component;
        controller(): $MachineControllerSpec;
        displayNameKey(): string;
        /**
         * @deprecated
         */
        localizedName(): string;
        role(): $MachineRole;
        appearance(): $MachineAppearanceSpec;
        registryName(): $ResourceLocation;
        isModule(): boolean;
        behavior(): $MachineBehavior;
        get host(): boolean;
        get module(): boolean;
    }
    export class $PortRequirementSpec$Builder {
        min(portId: string, min: number): $PortRequirementSpec$Builder;
        range(portId: string, min: number, max: number): $PortRequirementSpec$Builder;
        build(): $PortRequirementSpec;
    }
    export class $BlockArray$Builder {
        air(airPredicate: $BlockPredicate_): $BlockArray$Builder;
        requirements(): $MachineStructureRequirements;
        pattern(...rows: string[]): $BlockArray$Builder;
        set(symbol: string, predicate: $BlockPredicate_, ...modifiers: $SingleBlockModifierReplacement[]): $BlockArray$Builder;
        set(symbol: string, predicate: $BlockPredicate_, ...modifiers: $ModifierUse_[]): $BlockArray$Builder;
        set(symbol: string, predicate: $BlockPredicate_): $BlockArray$Builder;
        build(): $BlockArray;
        controller(symbol: string): $BlockArray$Builder;
        containsSymbol(symbol: string): boolean;
        noController(): $BlockArray$Builder;
        constructor();
    }
    export class $MachineRole extends $Enum<$MachineRole> {
        static values(): $MachineRole[];
        static valueOf(name: string): $MachineRole;
        static MODULE: $MachineRole;
        static HOST: $MachineRole;
        static NORMAL: $MachineRole;
    }
    /**
     * Values that may be interpreted as {@link $MachineRole}.
     */
    export type $MachineRole_ = "normal" | "host" | "module";
    export class $FactoryThreadSpec extends $Record {
        recipeIds(): $List<$ResourceLocation>;
        name(): string;
        constructor(name: string, recipeIds: $List_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $FactoryThreadSpec}.
     */
    export type $FactoryThreadSpec_ = { name?: string, recipeIds?: $List_<$ResourceLocation_>,  } | [name?: string, recipeIds?: $List_<$ResourceLocation_>, ];
    export class $MachineStructureDefinition$Declaration$Kind extends $Enum<$MachineStructureDefinition$Declaration$Kind> {
        static values(): $MachineStructureDefinition$Declaration$Kind[];
        static valueOf(name: string): $MachineStructureDefinition$Declaration$Kind;
        static EXTENSION: $MachineStructureDefinition$Declaration$Kind;
        static FULL: $MachineStructureDefinition$Declaration$Kind;
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureDefinition$Declaration$Kind}.
     */
    export type $MachineStructureDefinition$Declaration$Kind_ = "full" | "extension";
    export class $PortRequirementSpec$CountRange extends $Record {
        min(): number;
        static min(min: number): $PortRequirementSpec$CountRange;
        max(): $OptionalInt;
        static range(min: number, max: number): $PortRequirementSpec$CountRange;
        constructor(min: number, max: $OptionalInt);
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec$CountRange}.
     */
    export type $PortRequirementSpec$CountRange_ = { max?: $OptionalInt, min?: number,  } | [max?: $OptionalInt, min?: number, ];
    export class $CompiledDynamicPattern extends $Record {
        offsetStart(facing: $Direction_): $BlockPos;
        startPattern(facing: $Direction_): $BlockArray;
        endPattern(facing: $Direction_): $BlockArray;
        structureSizeOffset(facing: $Direction_): $BlockPos;
        structureSizeOffsets(): $Map<$Direction, $BlockPos>;
        spec(): $DynamicPatternSpec;
        allowedFaces(facing: $Direction_): $List<$Direction>;
        allowedFaces(): $Map<$Direction, $List<$Direction>>;
        offsetStarts(): $Map<$Direction, $BlockPos>;
        startPatterns(): $Map<$Direction, $BlockArray>;
        endPatterns(): $Map<$Direction, $BlockArray>;
        constructor(spec: $DynamicPatternSpec_, startPatterns: $Map_<$Direction_, $BlockArray_>, endPatterns: $Map_<$Direction_, $BlockArray_>, offsetStarts: $Map_<$Direction_, $BlockPos_>, structureSizeOffsets: $Map_<$Direction_, $BlockPos_>, allowedFaces: $Map_<$Direction_, $List_<$Direction_>>);
    }
    /**
     * Values that may be interpreted as {@link $CompiledDynamicPattern}.
     */
    export type $CompiledDynamicPattern_ = { spec?: $DynamicPatternSpec_, endPatterns?: $Map_<$Direction_, $BlockArray_>, startPatterns?: $Map_<$Direction_, $BlockArray_>, offsetStarts?: $Map_<$Direction_, $BlockPos_>, structureSizeOffsets?: $Map_<$Direction_, $BlockPos_>, allowedFaces?: $Map_<$Direction_, $List_<$Direction_>>,  } | [spec?: $DynamicPatternSpec_, endPatterns?: $Map_<$Direction_, $BlockArray_>, startPatterns?: $Map_<$Direction_, $BlockArray_>, offsetStarts?: $Map_<$Direction_, $BlockPos_>, structureSizeOffsets?: $Map_<$Direction_, $BlockPos_>, allowedFaces?: $Map_<$Direction_, $List_<$Direction_>>, ];
    export class $PortTierRequirementSpec$PortCategory extends $Enum<$PortTierRequirementSpec$PortCategory> {
        static values(): $PortTierRequirementSpec$PortCategory[];
        static valueOf(name: string): $PortTierRequirementSpec$PortCategory;
        static ITEM: $PortTierRequirementSpec$PortCategory;
        static HEAT: $PortTierRequirementSpec$PortCategory;
        static ENERGY: $PortTierRequirementSpec$PortCategory;
        static FLUID: $PortTierRequirementSpec$PortCategory;
        static MANA: $PortTierRequirementSpec$PortCategory;
        static RADIOACTIVE_CHEMICAL: $PortTierRequirementSpec$PortCategory;
        static SOURCE: $PortTierRequirementSpec$PortCategory;
        static AIR: $PortTierRequirementSpec$PortCategory;
        static STRESS: $PortTierRequirementSpec$PortCategory;
        static CHEMICAL: $PortTierRequirementSpec$PortCategory;
    }
    /**
     * Values that may be interpreted as {@link $PortTierRequirementSpec$PortCategory}.
     */
    export type $PortTierRequirementSpec$PortCategory_ = "item" | "fluid" | "energy" | "source" | "mana" | "chemical" | "radioactive_chemical" | "heat" | "stress" | "air";
    export class $RecipeFailureActions extends $Enum<$RecipeFailureActions> {
        static getDefaultAction(): $RecipeFailureActions;
        static values(): $RecipeFailureActions[];
        static valueOf(name: string): $RecipeFailureActions;
        static STILL: $RecipeFailureActions;
        static DECREASE: $RecipeFailureActions;
        static RESET: $RecipeFailureActions;
        static get defaultAction(): $RecipeFailureActions;
    }
    /**
     * Values that may be interpreted as {@link $RecipeFailureActions}.
     */
    export type $RecipeFailureActions_ = "reset" | "still" | "decrease";
    export class $CompiledMachinePattern$ScanPlan {
        boundingBox(): $BoundingBox;
        static forPattern(pattern: $BlockArray_, sentinelCount: number): $CompiledMachinePattern$ScanPlan;
        sentinelMembership(): boolean[];
        sentinelIndexes(): number[];
        entryPositions(): $List<$BlockPos>;
        entryPredicates(): $List<$BlockPredicate>;
        entryOrder(): number[];
    }
    export class $MachineAppearanceSpec$TextureSource extends $Record {
        blockId(): $ResourceLocation;
        overrideTexture(): $ResourceLocation;
        constructor(blockId: $ResourceLocation_, overrideTexture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $MachineAppearanceSpec$TextureSource}.
     */
    export type $MachineAppearanceSpec$TextureSource_ = { blockId?: $ResourceLocation_, overrideTexture?: $ResourceLocation_,  } | [blockId?: $ResourceLocation_, overrideTexture?: $ResourceLocation_, ];
    export class $SmartInterfaceType$ValueType extends $Enum<$SmartInterfaceType$ValueType> {
        static values(): $SmartInterfaceType$ValueType[];
        static valueOf(name: string): $SmartInterfaceType$ValueType;
        static byName(name: string): $SmartInterfaceType$ValueType;
        static FLOAT: $SmartInterfaceType$ValueType;
        static INTEGER: $SmartInterfaceType$ValueType;
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaceType$ValueType}.
     */
    export type $SmartInterfaceType$ValueType_ = "float" | "integer";
    export class $MachineStructureStage {
        requirements(): $MachineStructureRequirements;
        modifierReplacements(): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        portRequirements(): $PortRequirementSpec;
        levelSlots(): $Map<$BlockPos, $ResourceLocation>;
        stateSensitive(): boolean;
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        portTierRequirements(): $PortTierRequirementSpec;
        pattern(): $BlockArray;
        kind(): $MachineStructureDefinition$Declaration$Kind;
        number(): number;
        constructor(number: number, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
    }
    export class $SmartInterfaceType extends $Record {
        descriptionKey(): string;
        validatedValue(value: number): number;
        priority(): number;
        type(): string;
        defaultValue(): number;
        valueType(): $SmartInterfaceType$ValueType;
        maxValue(): number;
        accepts(value: number): boolean;
        translationKey(): string;
        minValue(): number;
        constructor(type: string, defaultValue: number, priority: number);
        constructor(type: string, defaultValue: number, minValue: number, maxValue: number, priority: number, valueType: $SmartInterfaceType$ValueType_);
        constructor(type: string, minValue: number, maxValue: number, priority: number, valueType: $SmartInterfaceType$ValueType_);
        constructor(type: string, minValue: number, maxValue: number, priority: number);
        constructor(type: string, defaultValue: number, priority: number, valueType: $SmartInterfaceType$ValueType_);
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaceType}.
     */
    export type $SmartInterfaceType_ = { minValue?: number, type?: string, maxValue?: number, defaultValue?: number, valueType?: $SmartInterfaceType$ValueType_, priority?: number,  } | [minValue?: number, type?: string, maxValue?: number, defaultValue?: number, valueType?: $SmartInterfaceType$ValueType_, priority?: number, ];
    export class $PortRequirementSpec extends $Record {
        requirements(): $Map<string, $PortRequirementSpec$CountRange>;
        isEmpty(): boolean;
        static builder(): $PortRequirementSpec$Builder;
        validate(counts: $PortRequirementSpec$PortCounts_): ($PortRequirementSpec$Failure) | undefined;
        static none(): $PortRequirementSpec;
        constructor(requirements: $Map_<string, $PortRequirementSpec$CountRange_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec}.
     */
    export type $PortRequirementSpec_ = { requirements?: $Map_<string, $PortRequirementSpec$CountRange_>,  } | [requirements?: $Map_<string, $PortRequirementSpec$CountRange_>, ];
    export class $MachineStructureRequirements extends $Record {
        modifierReplacements(): $Map<string, $List<$SingleBlockModifierReplacement>>;
        levelSlots(): $Map<string, $ResourceLocation>;
        static builder(): $MachineStructureRequirements$Builder;
        validate(pattern: $BlockArray_): $MachineStructureRequirements;
        static merge(previous: $MachineStructureRequirements_, extension: $MachineStructureRequirements_, stageNumber: number): $MachineStructureRequirements;
        static EMPTY: $MachineStructureRequirements;
        constructor(modifierReplacements: $Map_<string, $List_<$SingleBlockModifierReplacement>>, levelSlots: $Map_<string, $ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureRequirements}.
     */
    export type $MachineStructureRequirements_ = { levelSlots?: $Map_<string, $ResourceLocation_>, modifierReplacements?: $Map_<string, $List_<$SingleBlockModifierReplacement>>,  } | [levelSlots?: $Map_<string, $ResourceLocation_>, modifierReplacements?: $Map_<string, $List_<$SingleBlockModifierReplacement>>, ];
    export class $MachineRegistration extends $Record {
        isHost(): boolean;
        recipePoolId(): $ResourceLocation;
        networkInterface(): $NetworkInterfaceSpec;
        static defaultDisplayNameKey(id: $ResourceLocation_): string;
        static defaultDisplayNameKey(id: $ResourceLocation_, explicitKey: string): string;
        smartInterfaceModifiers(): $List<$SmartInterfaceModifier>;
        allowMultithreading(): boolean;
        shareSmartInterfaces(): boolean;
        smartInterfaceTypes(): $Map<string, $SmartInterfaceType>;
        expandableStructure(): boolean;
        static validateSound(id: $ResourceLocation_): void;
        controllerSpec(): $MachineControllerSpec;
        allowModifiers(): boolean;
        allowParallelism(): boolean;
        factoryThreadLimit(): number;
        acceptedModuleIds(): $Set<$ResourceLocation>;
        finishSoundId(): $ResourceLocation;
        requestFailures(): $Map<$ResourceLocation, $RequestFailed>;
        runningSoundId(): $ResourceLocation;
        requestProcessors(): $Map<$ResourceLocation, $RequestProcess>;
        recipePoolIds(): $List<$ResourceLocation>;
        maxParallelAmount(): number;
        static copyRecipePoolIds(machineId: $ResourceLocation_, recipePoolIds: $List_<$ResourceLocation_>): $List<$ResourceLocation>;
        static builder(id: $ResourceLocation_): $MachineRegistration$Builder;
        pattern(): $BlockArray;
        id(): $ResourceLocation;
        displayName(): $Component;
        displayNameKey(): string;
        withPattern(pattern: $BlockArray_): $MachineRegistration;
        /**
         * @deprecated
         */
        localizedName(): string;
        role(): $MachineRole;
        appearance(): $MachineAppearanceSpec;
        isModule(): boolean;
        behavior(): $MachineBehavior;
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolId: $ResourceLocation_, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, pattern: $BlockArray_);
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolId: $ResourceLocation_, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, pattern: $BlockArray_, behavior: $MachineBehavior_);
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolId: $ResourceLocation_, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, networkInterface: $NetworkInterfaceSpec_, pattern: $BlockArray_, behavior: $MachineBehavior_);
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolIds: $List_<$ResourceLocation_>, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, networkInterface: $NetworkInterfaceSpec_, pattern: $BlockArray_, behavior: $MachineBehavior_, requestProcessors: $Map_<$ResourceLocation_, $RequestProcess_>, requestFailures: $Map_<$ResourceLocation_, $RequestFailed_>, factoryThreadLimit: number);
        get host(): boolean;
        get module(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MachineRegistration}.
     */
    export type $MachineRegistration_ = { acceptedModuleIds?: $Set_<$ResourceLocation_>, finishSoundId?: $ResourceLocation_, controllerSpec?: $MachineControllerSpec_, runningSoundId?: $ResourceLocation_, allowParallelism?: boolean, allowMultithreading?: boolean, requestFailures?: $Map_<$ResourceLocation_, $RequestFailed_>, allowModifiers?: boolean, smartInterfaceModifiers?: $List_<$SmartInterfaceModifier_>, displayNameKey?: string, requestProcessors?: $Map_<$ResourceLocation_, $RequestProcess_>, smartInterfaceTypes?: $Map_<string, $SmartInterfaceType_>, pattern?: $BlockArray_, networkInterface?: $NetworkInterfaceSpec_, behavior?: $MachineBehavior_, maxParallelAmount?: number, id?: $ResourceLocation_, factoryThreadLimit?: number, recipePoolIds?: $List_<$ResourceLocation_>, expandableStructure?: boolean, shareSmartInterfaces?: boolean, role?: $MachineRole_, appearance?: $MachineAppearanceSpec_,  } | [acceptedModuleIds?: $Set_<$ResourceLocation_>, finishSoundId?: $ResourceLocation_, controllerSpec?: $MachineControllerSpec_, runningSoundId?: $ResourceLocation_, allowParallelism?: boolean, allowMultithreading?: boolean, requestFailures?: $Map_<$ResourceLocation_, $RequestFailed_>, allowModifiers?: boolean, smartInterfaceModifiers?: $List_<$SmartInterfaceModifier_>, displayNameKey?: string, requestProcessors?: $Map_<$ResourceLocation_, $RequestProcess_>, smartInterfaceTypes?: $Map_<string, $SmartInterfaceType_>, pattern?: $BlockArray_, networkInterface?: $NetworkInterfaceSpec_, behavior?: $MachineBehavior_, maxParallelAmount?: number, id?: $ResourceLocation_, factoryThreadLimit?: number, recipePoolIds?: $List_<$ResourceLocation_>, expandableStructure?: boolean, shareSmartInterfaces?: boolean, role?: $MachineRole_, appearance?: $MachineAppearanceSpec_, ];
    export class $MachineStructureRequirements$Builder {
        levelSlot(symbol: string, typeId: $ResourceLocation_): $MachineStructureRequirements$Builder;
        build(): $MachineStructureRequirements;
        build(pattern: $BlockArray_): $MachineStructureRequirements;
        modifier(symbol: string, modifierId: $ResourceLocation_, replacement: $BlockPredicate_): $MachineStructureRequirements$Builder;
        modifier(symbol: string, replacement: $SingleBlockModifierReplacement): $MachineStructureRequirements$Builder;
        constructor();
    }
    export class $CompiledMachinePattern extends $Record {
        boundingBox(facing: $Direction_): $BoundingBox;
        machine(): $Machine;
        modifierReplacements(facing: $Direction_, rollFacing: $Direction_): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        modifierReplacements(facing: $Direction_): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        modifierReplacements(): $Map<$Direction, $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>>;
        couplerPositions(facing: $Direction_): $List<$BlockPos>;
        couplerPositions(): $Map<$Direction, $List<$BlockPos>>;
        stageNumber(): number;
        rotatedPattern(facing: $Direction_): $BlockArray;
        portPositions(facing: $Direction_): $List<$BlockPos>;
        portPositions(): $Map<$Direction, $List<$BlockPos>>;
        componentPositions(): $Map<$Direction, $List<$BlockPos>>;
        componentPositions(facing: $Direction_): $List<$BlockPos>;
        interfacePositions(facing: $Direction_): $List<$BlockPos>;
        interfacePositions(): $Map<$Direction, $List<$BlockPos>>;
        rotatedPatterns(): $Map<$Direction, $BlockArray>;
        stateSensitive(): boolean;
        scanPlan(facing: $Direction_, sentinelCount: number): $CompiledMachinePattern$ScanPlan;
        networkInterfacePositions(facing: $Direction_): $List<$BlockPos>;
        networkInterfacePositions(): $Map<$Direction, $List<$BlockPos>>;
        dynamicPatterns(): $List<$CompiledDynamicPattern>;
        boundingBoxes(): $Map<$Direction, $BoundingBox>;
        constructor(machine: $Machine, stageNumber: number, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>, couplerPositions: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions: $Map_<$Direction_, $List_<$BlockPos_>>, networkInterfacePositions: $Map_<$Direction_, $List_<$BlockPos_>>, dynamicPatterns: $List_<$CompiledDynamicPattern_>, modifierReplacements: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive: boolean);
        constructor(machine: $Machine, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>, dynamicPatterns: $List_<$CompiledDynamicPattern_>);
        constructor(machine: $Machine, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>);
        constructor(machine: $Machine, stageNumber: number, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>, couplerPositions: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions: $Map_<$Direction_, $List_<$BlockPos_>>, dynamicPatterns: $List_<$CompiledDynamicPattern_>, modifierReplacements: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledMachinePattern}.
     */
    export type $CompiledMachinePattern_ = { machine?: $Machine, componentPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, rotatedPatterns?: $Map_<$Direction_, $BlockArray_>, networkInterfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, stageNumber?: number, dynamicPatterns?: $List_<$CompiledDynamicPattern_>, couplerPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, modifierReplacements?: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive?: boolean, boundingBoxes?: $Map_<$Direction_, $BoundingBox>,  } | [machine?: $Machine, componentPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, rotatedPatterns?: $Map_<$Direction_, $BlockArray_>, networkInterfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, stageNumber?: number, dynamicPatterns?: $List_<$CompiledDynamicPattern_>, couplerPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, modifierReplacements?: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive?: boolean, boundingBoxes?: $Map_<$Direction_, $BoundingBox>, ];
    export class $MachineStructureDefinition$Declaration extends $Record {
        requirements(): $MachineStructureRequirements;
        portRequirements(): $PortRequirementSpec;
        stateSensitive(): boolean;
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        portTierRequirements(): $PortTierRequirementSpec;
        pattern(): $BlockArray;
        kind(): $MachineStructureDefinition$Declaration$Kind;
        static full(pattern: $BlockArray_): $MachineStructureDefinition$Declaration;
        static extension(pattern: $BlockArray_): $MachineStructureDefinition$Declaration;
        constructor(kind: $MachineStructureDefinition$Declaration$Kind_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
        constructor(kind: $MachineStructureDefinition$Declaration$Kind_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_, stateSensitive: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureDefinition$Declaration}.
     */
    export type $MachineStructureDefinition$Declaration_ = { kind?: $MachineStructureDefinition$Declaration$Kind_, stateSensitive?: boolean, requirements?: $MachineStructureRequirements_, portRequirements?: $PortRequirementSpec_, pattern?: $BlockArray_, dynamicPatterns?: $List_<$DynamicPatternSpec_>, portTierRequirements?: $PortTierRequirementSpec_,  } | [kind?: $MachineStructureDefinition$Declaration$Kind_, stateSensitive?: boolean, requirements?: $MachineStructureRequirements_, portRequirements?: $PortRequirementSpec_, pattern?: $BlockArray_, dynamicPatterns?: $List_<$DynamicPatternSpec_>, portTierRequirements?: $PortTierRequirementSpec_, ];
    export class $PortTierRequirementSpec$Requirement extends $Record {
        ioType(): $IOType;
        minTierId(): string;
        id(): string;
        category(): $PortTierRequirementSpec$PortCategory;
        minTier(): number;
        constructor(category: $PortTierRequirementSpec$PortCategory_, ioType: $IOType_, minTier: number, minTierId: string);
    }
    /**
     * Values that may be interpreted as {@link $PortTierRequirementSpec$Requirement}.
     */
    export type $PortTierRequirementSpec$Requirement_ = { minTier?: number, ioType?: $IOType_, minTierId?: string, category?: $PortTierRequirementSpec$PortCategory_,  } | [minTier?: number, ioType?: $IOType_, minTierId?: string, category?: $PortTierRequirementSpec$PortCategory_, ];
    export class $MachineStructureDefinition extends $Record {
        requirements(): $MachineStructureRequirements;
        declarations(): $List<$MachineStructureDefinition$Declaration>;
        modifierReplacements(): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        portRequirements(): $PortRequirementSpec;
        levelSlots(): $Map<$BlockPos, $ResourceLocation>;
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        portTierRequirements(): $PortTierRequirementSpec;
        pattern(): $BlockArray;
        machineId(): $ResourceLocation;
        constructor(machineId: $ResourceLocation_, declarations: $List_<$MachineStructureDefinition$Declaration_>);
        constructor(machineId: $ResourceLocation_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
        constructor(machineId: $ResourceLocation_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureDefinition}.
     */
    export type $MachineStructureDefinition_ = { declarations?: $List_<$MachineStructureDefinition$Declaration_>, machineId?: $ResourceLocation_,  } | [declarations?: $List_<$MachineStructureDefinition$Declaration_>, machineId?: $ResourceLocation_, ];
    export class $MachineControllerSpec extends $Record {
        topTexture(): $ResourceLocation;
        sideTexture(): $ResourceLocation;
        static defaultsFor(machineId: $ResourceLocation_): $MachineControllerSpec;
        allowVerticalFacing(): boolean;
        fullyRotationallySymmetric(): boolean;
        requireVerticalFacing(): boolean;
        frontTexture(): $ResourceLocation;
        bottomTexture(): $ResourceLocation;
        id(): $ResourceLocation;
        tooltip(): $List<string>;
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean, fullyRotationallySymmetric: boolean);
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean, fullyRotationallySymmetric: boolean, requireVerticalFacing: boolean);
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean, fullyRotationallySymmetric: boolean, requireVerticalFacing: boolean, tooltip: $List_<string>);
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MachineControllerSpec}.
     */
    export type $MachineControllerSpec_ = { fullyRotationallySymmetric?: boolean, topTexture?: $ResourceLocation_, requireVerticalFacing?: boolean, id?: $ResourceLocation_, tooltip?: $List_<string>, allowVerticalFacing?: boolean, sideTexture?: $ResourceLocation_, bottomTexture?: $ResourceLocation_, frontTexture?: $ResourceLocation_,  } | [fullyRotationallySymmetric?: boolean, topTexture?: $ResourceLocation_, requireVerticalFacing?: boolean, id?: $ResourceLocation_, tooltip?: $List_<string>, allowVerticalFacing?: boolean, sideTexture?: $ResourceLocation_, bottomTexture?: $ResourceLocation_, frontTexture?: $ResourceLocation_, ];
    export class $BlockPredicate$MachineCoupler extends $Enum<$BlockPredicate$MachineCoupler> implements $BlockPredicate {
        static values(): $BlockPredicate$MachineCoupler[];
        static valueOf(name: string): $BlockPredicate$MachineCoupler;
        matches(state: $BlockState_): boolean;
        preferredState(): ($BlockState) | undefined;
        matches(state: $BlockState_, stateSensitive: boolean): boolean;
        children(): $List<$BlockPredicate>;
        static INSTANCE: $BlockPredicate$MachineCoupler;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicate$MachineCoupler}.
     */
    export type $BlockPredicate$MachineCoupler_ = "instance";
    export class $PortTierRequirementSpec$Builder {
        anyManaOutput(): $PortTierRequirementSpec$Builder;
        anyAirOutput(): $PortTierRequirementSpec$Builder;
        anySourceOutput(): $PortTierRequirementSpec$Builder;
        anyManaInput(): $PortTierRequirementSpec$Builder;
        anyStressOutput(): $PortTierRequirementSpec$Builder;
        anySourceInput(): $PortTierRequirementSpec$Builder;
        anyAirInput(): $PortTierRequirementSpec$Builder;
        anyStressInput(): $PortTierRequirementSpec$Builder;
        build(): $PortTierRequirementSpec;
        anyItemInput(): $PortTierRequirementSpec$Builder;
        anyItemOutput(): $PortTierRequirementSpec$Builder;
        anyEnergyOutput(): $PortTierRequirementSpec$Builder;
        anyHeatInput(): $PortTierRequirementSpec$Builder;
        anyChemicalInput(): $PortTierRequirementSpec$Builder;
        anyChemicalOutput(): $PortTierRequirementSpec$Builder;
        anyEnergyInput(): $PortTierRequirementSpec$Builder;
        anyFluidOutput(): $PortTierRequirementSpec$Builder;
        anyFluidInput(): $PortTierRequirementSpec$Builder;
        anyHeatOutput(): $PortTierRequirementSpec$Builder;
        anyRadioactiveChemicalInput(): $PortTierRequirementSpec$Builder;
        anyRadioactiveChemicalOutput(): $PortTierRequirementSpec$Builder;
        minItemOutput(size: $ItemBusSize_): $PortTierRequirementSpec$Builder;
        minFluidInput(size: $FluidHatchSize_): $PortTierRequirementSpec$Builder;
        minFluidOutput(size: $FluidHatchSize_): $PortTierRequirementSpec$Builder;
        minEnergyInput(size: $EnergyHatchSize_): $PortTierRequirementSpec$Builder;
        minEnergyOutput(size: $EnergyHatchSize_): $PortTierRequirementSpec$Builder;
        minChemicalInput(size: $PortTiers$ChemicalTier_): $PortTierRequirementSpec$Builder;
        minChemicalOutput(size: $PortTiers$ChemicalTier_): $PortTierRequirementSpec$Builder;
        minItemInput(size: $ItemBusSize_): $PortTierRequirementSpec$Builder;
    }
    export class $NetworkInterfaceSpec extends $Record {
        allowedMachineIds(): $Set<$ResourceLocation>;
        maxConnections(): number;
        withAllowedMachine(machineId: $ResourceLocation_): $NetworkInterfaceSpec;
        maxCount(): number;
        static disabled(): $NetworkInterfaceSpec;
        constructor(maxCount: number, maxConnections: number, allowedMachineIds: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $NetworkInterfaceSpec}.
     */
    export type $NetworkInterfaceSpec_ = { maxConnections?: number, allowedMachineIds?: $Set_<$ResourceLocation_>, maxCount?: number,  } | [maxConnections?: number, allowedMachineIds?: $Set_<$ResourceLocation_>, maxCount?: number, ];
    export class $BlockArray extends $Record {
        symbolsByPosition(): $Map<$BlockPos, string>;
        tagsByPosition(): $Map<$BlockPos, $List<string>>;
        tagsAt(pos: $BlockPos_): $List<string>;
        get(pos: $BlockPos_): $BlockPredicate;
        length(): number;
        isEmpty(): boolean;
        static builder(): $BlockArray$Builder;
        pattern(): $Map<$BlockPos, $BlockPredicate>;
        width(): number;
        withPattern(rotated: $Map_<$BlockPos_, $BlockPredicate_>): $BlockArray;
        tagged(pos: $BlockPos_, ...tags: string[]): $BlockArray;
        height(): number;
        constructor(pattern: $Map_<$BlockPos_, $BlockPredicate_>);
        constructor(pattern: $Map_<$BlockPos_, $BlockPredicate_>, tagsByPosition: $Map_<$BlockPos_, $List_<string>>, symbolsByPosition: $Map_<$BlockPos_, string>);
        constructor(pattern: $Map_<$BlockPos_, $BlockPredicate_>, tagsByPosition: $Map_<$BlockPos_, $List_<string>>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockArray}.
     */
    export type $BlockArray_ = { symbolsByPosition?: $Map_<$BlockPos_, string>, tagsByPosition?: $Map_<$BlockPos_, $List_<string>>, pattern?: $Map_<$BlockPos_, $BlockPredicate_>,  } | [symbolsByPosition?: $Map_<$BlockPos_, string>, tagsByPosition?: $Map_<$BlockPos_, $List_<string>>, pattern?: $Map_<$BlockPos_, $BlockPredicate_>, ];
    export class $PortRequirementSpec$FailureReason extends $Enum<$PortRequirementSpec$FailureReason> {
        static values(): $PortRequirementSpec$FailureReason[];
        static valueOf(name: string): $PortRequirementSpec$FailureReason;
        static TOO_MANY: $PortRequirementSpec$FailureReason;
        static MISSING: $PortRequirementSpec$FailureReason;
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec$FailureReason}.
     */
    export type $PortRequirementSpec$FailureReason_ = "missing" | "too_many";
    export class $MachineRegistration$Builder {
        recipePoolId(recipePoolId: $ResourceLocation_): $MachineRegistration$Builder;
        networkInterface(maxCount: number, maxConnections: number): $MachineRegistration$Builder;
        networkInterface(networkInterface: $NetworkInterfaceSpec_): $MachineRegistration$Builder;
        smartInterfaceModifier(modifier: $SmartInterfaceModifier_): $MachineRegistration$Builder;
        allowMultithreading(allowMultithreading: boolean): $MachineRegistration$Builder;
        allowNetworkMachine(machineId: $ResourceLocation_): $MachineRegistration$Builder;
        shareSmartInterfaces(shareSmartInterfaces: boolean): $MachineRegistration$Builder;
        expandableStructure(): $MachineRegistration$Builder;
        controllerSpec(controllerSpec: $MachineControllerSpec_): $MachineRegistration$Builder;
        allowModifiers(allowModifiers: boolean): $MachineRegistration$Builder;
        allowParallelism(allowParallelism: boolean): $MachineRegistration$Builder;
        factoryThreadLimit(factoryThreadLimit: number): $MachineRegistration$Builder;
        runningSound(sound: $SoundEvent_): $MachineRegistration$Builder;
        runningSound(id: $ResourceLocation_): $MachineRegistration$Builder;
        requestFailed(requestId: $ResourceLocation_, failure: $RequestFailed_): $MachineRegistration$Builder;
        recipePoolIds(recipePoolIds: $List_<$ResourceLocation_>): $MachineRegistration$Builder;
        finishSound(sound: $SoundEvent_): $MachineRegistration$Builder;
        finishSound(id: $ResourceLocation_): $MachineRegistration$Builder;
        requestProcess(requestId: $ResourceLocation_, process: $RequestProcess_): $MachineRegistration$Builder;
        maxParallelAmount(maxParallelAmount: number): $MachineRegistration$Builder;
        smartInterfaceType(smartInterfaceType: $SmartInterfaceType_): $MachineRegistration$Builder;
        pattern(pattern: $BlockArray_): $MachineRegistration$Builder;
        module(): $MachineRegistration$Builder;
        host(acceptedModuleId: $ResourceLocation_): $MachineRegistration$Builder;
        host(acceptedModuleId: string): $MachineRegistration$Builder;
        build(): $MachineRegistration;
        displayNameKey(displayNameKey: string): $MachineRegistration$Builder;
        /**
         * @deprecated
         */
        localizedName(localizedName: string): $MachineRegistration$Builder;
        appearance(appearance: $MachineAppearanceSpec_): $MachineRegistration$Builder;
        behavior(behavior: $MachineBehavior_): $MachineRegistration$Builder;
    }
    export class $BlockPredicate {
        static machineCoupler(): $BlockPredicate$MachineCoupler;
        static blocksInTag(tag: $TagKey_<$Block>): $List<$Block>;
    }
    export interface $BlockPredicate {
        preferredState(): ($BlockState) | undefined;
        matches(state: $BlockState_, stateSensitive: boolean): boolean;
        matches(state: $BlockState_): boolean;
        children(): $List<$BlockPredicate>;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicate}.
     */
    export type $BlockPredicate_ = ((state: $BlockState) => boolean);
    export class $DynamicPatternSpec extends $Record {
        offsetStart(): $BlockPos;
        startPattern(): $BlockArray;
        endPattern(): $BlockArray;
        structureSizeOffset(): $BlockPos;
        name(): string;
        maxSize(): number;
        minSize(): number;
        allowedFaces(): $Set<$Direction>;
        constructor(name: string, startPattern: $BlockArray_, endPattern: $BlockArray_, minSize: number, maxSize: number, offsetStart: $BlockPos_, structureSizeOffset: $BlockPos_, allowedFaces: $Set_<$Direction_>);
    }
    /**
     * Values that may be interpreted as {@link $DynamicPatternSpec}.
     */
    export type $DynamicPatternSpec_ = { structureSizeOffset?: $BlockPos_, endPattern?: $BlockArray_, maxSize?: number, minSize?: number, allowedFaces?: $Set_<$Direction_>, offsetStart?: $BlockPos_, startPattern?: $BlockArray_, name?: string,  } | [structureSizeOffset?: $BlockPos_, endPattern?: $BlockArray_, maxSize?: number, minSize?: number, allowedFaces?: $Set_<$Direction_>, offsetStart?: $BlockPos_, startPattern?: $BlockArray_, name?: string, ];
    export class $SmartInterfaceModifier extends $Record {
        interfaceType(): string;
        static fluid(type: string, io: $RecipeModifier$IOType_, chance: boolean, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        static heat(type: string, io: $RecipeModifier$IOType_, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        static energy(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        atMax(): number;
        atMin(): number;
        toModifier(value: number): $MachineModifier$Numeric;
        affectsChance(): boolean;
        scope(): string;
        target(): string;
        static duration(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        mappedValue(value: number): number;
        io(): $RecipeModifier$IOType;
        maxValue(): number;
        static item(type: string, io: $RecipeModifier$IOType_, chance: boolean, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        operation(): $RecipeModifier$Operation;
        static numeric(type: string, target: string, scope: string, min: number, max: number, atMin: number, atMax: number, operation: string, affectsChance: boolean): $SmartInterfaceModifier;
        minValue(): number;
        static chemical(type: string, io: $RecipeModifier$IOType_, chance: boolean, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        constructor(interfaceType: string, target: string, scope: string, affectsChance: boolean, minValue: number, maxValue: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_);
        constructor(interfaceType: string, target: string, io: $RecipeModifier$IOType_, affectsChance: boolean, minValue: number, maxValue: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaceModifier}.
     */
    export type $SmartInterfaceModifier_ = { maxValue?: number, atMin?: number, operation?: $RecipeModifier$Operation_, scope?: string, atMax?: number, interfaceType?: string, target?: string, minValue?: number, affectsChance?: boolean,  } | [maxValue?: number, atMin?: number, operation?: $RecipeModifier$Operation_, scope?: string, atMax?: number, interfaceType?: string, target?: string, minValue?: number, affectsChance?: boolean, ];
}
