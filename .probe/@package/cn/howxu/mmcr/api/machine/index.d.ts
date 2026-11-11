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
        reason(): $PortRequirementSpec$FailureReason;
        actual(): number;
        portId(): string;
        requiredMax(): $OptionalInt;
        requiredMin(): number;
        constructor(portId: string, actual: number, requiredMin: number, requiredMax: $OptionalInt, reason: $PortRequirementSpec$FailureReason_);
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec$Failure}.
     */
    export type $PortRequirementSpec$Failure_ = { portId?: string, requiredMax?: $OptionalInt, actual?: number, requiredMin?: number, reason?: $PortRequirementSpec$FailureReason_,  } | [portId?: string, requiredMax?: $OptionalInt, actual?: number, requiredMin?: number, reason?: $PortRequirementSpec$FailureReason_, ];
    export class $PortTierRequirementSpec$Failure extends $Record {
        requirement(): $PortTierRequirementSpec$Requirement;
        actualPortIds(): $List<string>;
        constructor(requirement: $PortTierRequirementSpec$Requirement_, actualPortIds: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $PortTierRequirementSpec$Failure}.
     */
    export type $PortTierRequirementSpec$Failure_ = { requirement?: $PortTierRequirementSpec$Requirement_, actualPortIds?: $List_<string>,  } | [requirement?: $PortTierRequirementSpec$Requirement_, actualPortIds?: $List_<string>, ];
    export class $MachineAppearanceSpec extends $Record {
        static defaults(): $MachineAppearanceSpec;
        formedPortTextureSource(): $MachineAppearanceSpec$TextureSource;
        static fromBasicBlock(blockId: $ResourceLocation_): $MachineAppearanceSpec;
        controllerTextureSource(): $MachineAppearanceSpec$TextureSource;
        machineBasicBlock(): $ResourceLocation;
        controllerIdleOverlayTexture(): $ResourceLocation;
        controllerActiveOverlayTexture(): $ResourceLocation;
        controllerBaseTexture(): $ResourceLocation;
        formedPortBaseTexture(): $ResourceLocation;
        constructor(machineBasicBlock: $ResourceLocation_, controllerBaseTexture: $ResourceLocation_, formedPortBaseTexture: $ResourceLocation_);
        constructor(machineBasicBlock: $ResourceLocation_, controllerBaseTexture: $ResourceLocation_, formedPortBaseTexture: $ResourceLocation_, controllerIdleOverlayTexture: $ResourceLocation_, controllerActiveOverlayTexture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $MachineAppearanceSpec}.
     */
    export type $MachineAppearanceSpec_ = { machineBasicBlock?: $ResourceLocation_, controllerBaseTexture?: $ResourceLocation_, formedPortBaseTexture?: $ResourceLocation_, controllerIdleOverlayTexture?: $ResourceLocation_, controllerActiveOverlayTexture?: $ResourceLocation_,  } | [machineBasicBlock?: $ResourceLocation_, controllerBaseTexture?: $ResourceLocation_, formedPortBaseTexture?: $ResourceLocation_, controllerIdleOverlayTexture?: $ResourceLocation_, controllerActiveOverlayTexture?: $ResourceLocation_, ];
    export class $PortTierRequirementSpec extends $Record {
        isEmpty(): boolean;
        static builder(): $PortTierRequirementSpec$Builder;
        static from(tiers: $PortTiers_): $PortTierRequirementSpec;
        validate(ports: $Iterable_<$IOPortKind>): ($PortTierRequirementSpec$Failure) | undefined;
        static none(): $PortTierRequirementSpec;
        requirements(): $List<$PortTierRequirementSpec$Requirement>;
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
        factoryThreads(): $List<$FactoryThreadSpec>;
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        pattern(): $BlockArray;
        displayName(): $Component;
        displayNameKey(): string;
        /**
         * @deprecated
         */
        localizedName(): string;
        isModule(): boolean;
        controller(): $MachineControllerSpec;
        registryName(): $ResourceLocation;
        portTierRequirements(): $PortTierRequirementSpec;
        role(): $MachineRole;
        behavior(): $MachineBehavior;
        maxParallelism(): number;
        requestFailures(): $Map<$ResourceLocation, $RequestFailed>;
        requestProcessors(): $Map<$ResourceLocation, $RequestProcess>;
        parallelizable(): boolean;
        failureAction(): $RecipeFailureActions;
        acceptedModuleIds(): $Set<$ResourceLocation>;
        hasFactory(): boolean;
        isHost(): boolean;
        appearance(): $MachineAppearanceSpec;
        networkInterface(): $NetworkInterfaceSpec;
        portRequirements(): $PortRequirementSpec;
        structureStages(): $List<$MachineStructureStage>;
        factoryThreadLimit(): number;
        get module(): boolean;
        get host(): boolean;
    }
    export class $PortRequirementSpec$Builder {
        min(portId: string, min: number): $PortRequirementSpec$Builder;
        range(portId: string, min: number, max: number): $PortRequirementSpec$Builder;
        build(): $PortRequirementSpec;
    }
    export class $BlockArray$Builder {
        pattern(...rows: string[]): $BlockArray$Builder;
        set(symbol: string, predicate: $BlockPredicate_, ...modifiers: $SingleBlockModifierReplacement[]): $BlockArray$Builder;
        set(symbol: string, predicate: $BlockPredicate_, ...modifiers: $ModifierUse_[]): $BlockArray$Builder;
        set(symbol: string, predicate: $BlockPredicate_): $BlockArray$Builder;
        build(): $BlockArray;
        containsSymbol(symbol: string): boolean;
        controller(symbol: string): $BlockArray$Builder;
        air(airPredicate: $BlockPredicate_): $BlockArray$Builder;
        requirements(): $MachineStructureRequirements;
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
        name(): string;
        recipeIds(): $List<$ResourceLocation>;
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
    export type $PortRequirementSpec$CountRange_ = { min?: number, max?: $OptionalInt,  } | [min?: number, max?: $OptionalInt, ];
    export class $CompiledDynamicPattern extends $Record {
        endPattern(facing: $Direction_): $BlockArray;
        startPattern(facing: $Direction_): $BlockArray;
        allowedFaces(facing: $Direction_): $List<$Direction>;
        allowedFaces(): $Map<$Direction, $List<$Direction>>;
        spec(): $DynamicPatternSpec;
        offsetStart(facing: $Direction_): $BlockPos;
        structureSizeOffset(facing: $Direction_): $BlockPos;
        structureSizeOffsets(): $Map<$Direction, $BlockPos>;
        startPatterns(): $Map<$Direction, $BlockArray>;
        offsetStarts(): $Map<$Direction, $BlockPos>;
        endPatterns(): $Map<$Direction, $BlockArray>;
        constructor(spec: $DynamicPatternSpec_, startPatterns: $Map_<$Direction_, $BlockArray_>, endPatterns: $Map_<$Direction_, $BlockArray_>, offsetStarts: $Map_<$Direction_, $BlockPos_>, structureSizeOffsets: $Map_<$Direction_, $BlockPos_>, allowedFaces: $Map_<$Direction_, $List_<$Direction_>>);
    }
    /**
     * Values that may be interpreted as {@link $CompiledDynamicPattern}.
     */
    export type $CompiledDynamicPattern_ = { structureSizeOffsets?: $Map_<$Direction_, $BlockPos_>, allowedFaces?: $Map_<$Direction_, $List_<$Direction_>>, spec?: $DynamicPatternSpec_, endPatterns?: $Map_<$Direction_, $BlockArray_>, startPatterns?: $Map_<$Direction_, $BlockArray_>, offsetStarts?: $Map_<$Direction_, $BlockPos_>,  } | [structureSizeOffsets?: $Map_<$Direction_, $BlockPos_>, allowedFaces?: $Map_<$Direction_, $List_<$Direction_>>, spec?: $DynamicPatternSpec_, endPatterns?: $Map_<$Direction_, $BlockArray_>, startPatterns?: $Map_<$Direction_, $BlockArray_>, offsetStarts?: $Map_<$Direction_, $BlockPos_>, ];
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
        static values(): $RecipeFailureActions[];
        static valueOf(name: string): $RecipeFailureActions;
        static getDefaultAction(): $RecipeFailureActions;
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
        entryPositions(): $List<$BlockPos>;
        sentinelIndexes(): number[];
        sentinelMembership(): boolean[];
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
    export type $MachineAppearanceSpec$TextureSource_ = { overrideTexture?: $ResourceLocation_, blockId?: $ResourceLocation_,  } | [overrideTexture?: $ResourceLocation_, blockId?: $ResourceLocation_, ];
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
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        pattern(): $BlockArray;
        kind(): $MachineStructureDefinition$Declaration$Kind;
        number(): number;
        portTierRequirements(): $PortTierRequirementSpec;
        requirements(): $MachineStructureRequirements;
        stateSensitive(): boolean;
        modifierReplacements(): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        portRequirements(): $PortRequirementSpec;
        levelSlots(): $Map<$BlockPos, $ResourceLocation>;
        constructor(number: number, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
    }
    export class $SmartInterfaceType extends $Record {
        validatedValue(value: number): number;
        priority(): number;
        type(): string;
        defaultValue(): number;
        valueType(): $SmartInterfaceType$ValueType;
        maxValue(): number;
        accepts(value: number): boolean;
        translationKey(): string;
        minValue(): number;
        descriptionKey(): string;
        constructor(type: string, minValue: number, maxValue: number, priority: number, valueType: $SmartInterfaceType$ValueType_);
        constructor(type: string, defaultValue: number, minValue: number, maxValue: number, priority: number, valueType: $SmartInterfaceType$ValueType_);
        constructor(type: string, defaultValue: number, priority: number);
        constructor(type: string, minValue: number, maxValue: number, priority: number);
        constructor(type: string, defaultValue: number, priority: number, valueType: $SmartInterfaceType$ValueType_);
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaceType}.
     */
    export type $SmartInterfaceType_ = { priority?: number, minValue?: number, type?: string, maxValue?: number, defaultValue?: number, valueType?: $SmartInterfaceType$ValueType_,  } | [priority?: number, minValue?: number, type?: string, maxValue?: number, defaultValue?: number, valueType?: $SmartInterfaceType$ValueType_, ];
    export class $PortRequirementSpec extends $Record {
        isEmpty(): boolean;
        static builder(): $PortRequirementSpec$Builder;
        validate(counts: $PortRequirementSpec$PortCounts_): ($PortRequirementSpec$Failure) | undefined;
        static none(): $PortRequirementSpec;
        requirements(): $Map<string, $PortRequirementSpec$CountRange>;
        constructor(requirements: $Map_<string, $PortRequirementSpec$CountRange_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PortRequirementSpec}.
     */
    export type $PortRequirementSpec_ = { requirements?: $Map_<string, $PortRequirementSpec$CountRange_>,  } | [requirements?: $Map_<string, $PortRequirementSpec$CountRange_>, ];
    export class $MachineStructureRequirements extends $Record {
        static builder(): $MachineStructureRequirements$Builder;
        validate(pattern: $BlockArray_): $MachineStructureRequirements;
        static merge(previous: $MachineStructureRequirements_, extension: $MachineStructureRequirements_, stageNumber: number): $MachineStructureRequirements;
        modifierReplacements(): $Map<string, $List<$SingleBlockModifierReplacement>>;
        levelSlots(): $Map<string, $ResourceLocation>;
        static EMPTY: $MachineStructureRequirements;
        constructor(modifierReplacements: $Map_<string, $List_<$SingleBlockModifierReplacement>>, levelSlots: $Map_<string, $ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureRequirements}.
     */
    export type $MachineStructureRequirements_ = { levelSlots?: $Map_<string, $ResourceLocation_>, modifierReplacements?: $Map_<string, $List_<$SingleBlockModifierReplacement>>,  } | [levelSlots?: $Map_<string, $ResourceLocation_>, modifierReplacements?: $Map_<string, $List_<$SingleBlockModifierReplacement>>, ];
    export class $MachineRegistration extends $Record {
        static builder(id: $ResourceLocation_): $MachineRegistration$Builder;
        pattern(): $BlockArray;
        id(): $ResourceLocation;
        displayName(): $Component;
        displayNameKey(): string;
        /**
         * @deprecated
         */
        localizedName(): string;
        isModule(): boolean;
        withPattern(pattern: $BlockArray_): $MachineRegistration;
        allowParallelism(): boolean;
        role(): $MachineRole;
        behavior(): $MachineBehavior;
        requestFailures(): $Map<$ResourceLocation, $RequestFailed>;
        recipePoolIds(): $List<$ResourceLocation>;
        requestProcessors(): $Map<$ResourceLocation, $RequestProcess>;
        maxParallelAmount(): number;
        static copyRecipePoolIds(machineId: $ResourceLocation_, recipePoolIds: $List_<$ResourceLocation_>): $List<$ResourceLocation>;
        acceptedModuleIds(): $Set<$ResourceLocation>;
        isHost(): boolean;
        appearance(): $MachineAppearanceSpec;
        recipePoolId(): $ResourceLocation;
        networkInterface(): $NetworkInterfaceSpec;
        static validateSound(id: $ResourceLocation_): void;
        runningSoundId(): $ResourceLocation;
        factoryThreadLimit(): number;
        finishSoundId(): $ResourceLocation;
        allowModifiers(): boolean;
        controllerSpec(): $MachineControllerSpec;
        smartInterfaceModifiers(): $List<$SmartInterfaceModifier>;
        shareSmartInterfaces(): boolean;
        smartInterfaceTypes(): $Map<string, $SmartInterfaceType>;
        static defaultDisplayNameKey(id: $ResourceLocation_, explicitKey: string): string;
        static defaultDisplayNameKey(id: $ResourceLocation_): string;
        allowMultithreading(): boolean;
        expandableStructure(): boolean;
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolId: $ResourceLocation_, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, pattern: $BlockArray_, behavior: $MachineBehavior_);
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolId: $ResourceLocation_, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, pattern: $BlockArray_);
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolIds: $List_<$ResourceLocation_>, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, networkInterface: $NetworkInterfaceSpec_, pattern: $BlockArray_, behavior: $MachineBehavior_, requestProcessors: $Map_<$ResourceLocation_, $RequestProcess_>, requestFailures: $Map_<$ResourceLocation_, $RequestFailed_>, factoryThreadLimit: number);
        constructor(id: $ResourceLocation_, displayNameKey: string, controllerSpec: $MachineControllerSpec_, appearance: $MachineAppearanceSpec_, recipePoolId: $ResourceLocation_, allowModifiers: boolean, allowMultithreading: boolean, allowParallelism: boolean, maxParallelAmount: number, expandableStructure: boolean, smartInterfaceTypes: $Map_<string, $SmartInterfaceType_>, shareSmartInterfaces: boolean, smartInterfaceModifiers: $List_<$SmartInterfaceModifier_>, runningSoundId: $ResourceLocation_, finishSoundId: $ResourceLocation_, role: $MachineRole_, acceptedModuleIds: $Set_<$ResourceLocation_>, networkInterface: $NetworkInterfaceSpec_, pattern: $BlockArray_, behavior: $MachineBehavior_);
        get module(): boolean;
        get host(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MachineRegistration}.
     */
    export type $MachineRegistration_ = { smartInterfaceTypes?: $Map_<string, $SmartInterfaceType_>, pattern?: $BlockArray_, networkInterface?: $NetworkInterfaceSpec_, behavior?: $MachineBehavior_, maxParallelAmount?: number, id?: $ResourceLocation_, factoryThreadLimit?: number, recipePoolIds?: $List_<$ResourceLocation_>, expandableStructure?: boolean, shareSmartInterfaces?: boolean, role?: $MachineRole_, appearance?: $MachineAppearanceSpec_, acceptedModuleIds?: $Set_<$ResourceLocation_>, finishSoundId?: $ResourceLocation_, controllerSpec?: $MachineControllerSpec_, runningSoundId?: $ResourceLocation_, allowParallelism?: boolean, allowMultithreading?: boolean, requestFailures?: $Map_<$ResourceLocation_, $RequestFailed_>, allowModifiers?: boolean, smartInterfaceModifiers?: $List_<$SmartInterfaceModifier_>, displayNameKey?: string, requestProcessors?: $Map_<$ResourceLocation_, $RequestProcess_>,  } | [smartInterfaceTypes?: $Map_<string, $SmartInterfaceType_>, pattern?: $BlockArray_, networkInterface?: $NetworkInterfaceSpec_, behavior?: $MachineBehavior_, maxParallelAmount?: number, id?: $ResourceLocation_, factoryThreadLimit?: number, recipePoolIds?: $List_<$ResourceLocation_>, expandableStructure?: boolean, shareSmartInterfaces?: boolean, role?: $MachineRole_, appearance?: $MachineAppearanceSpec_, acceptedModuleIds?: $Set_<$ResourceLocation_>, finishSoundId?: $ResourceLocation_, controllerSpec?: $MachineControllerSpec_, runningSoundId?: $ResourceLocation_, allowParallelism?: boolean, allowMultithreading?: boolean, requestFailures?: $Map_<$ResourceLocation_, $RequestFailed_>, allowModifiers?: boolean, smartInterfaceModifiers?: $List_<$SmartInterfaceModifier_>, displayNameKey?: string, requestProcessors?: $Map_<$ResourceLocation_, $RequestProcess_>, ];
    export class $MachineStructureRequirements$Builder {
        build(pattern: $BlockArray_): $MachineStructureRequirements;
        build(): $MachineStructureRequirements;
        modifier(symbol: string, replacement: $SingleBlockModifierReplacement): $MachineStructureRequirements$Builder;
        modifier(symbol: string, modifierId: $ResourceLocation_, replacement: $BlockPredicate_): $MachineStructureRequirements$Builder;
        levelSlot(symbol: string, typeId: $ResourceLocation_): $MachineStructureRequirements$Builder;
        constructor();
    }
    export class $CompiledMachinePattern extends $Record {
        interfacePositions(): $Map<$Direction, $List<$BlockPos>>;
        interfacePositions(facing: $Direction_): $List<$BlockPos>;
        dynamicPatterns(): $List<$CompiledDynamicPattern>;
        rotatedPatterns(): $Map<$Direction, $BlockArray>;
        machine(): $Machine;
        stateSensitive(): boolean;
        boundingBox(facing: $Direction_): $BoundingBox;
        modifierReplacements(facing: $Direction_, rollFacing: $Direction_): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        modifierReplacements(): $Map<$Direction, $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>>;
        modifierReplacements(facing: $Direction_): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        couplerPositions(facing: $Direction_): $List<$BlockPos>;
        couplerPositions(): $Map<$Direction, $List<$BlockPos>>;
        rotatedPattern(facing: $Direction_): $BlockArray;
        componentPositions(facing: $Direction_): $List<$BlockPos>;
        componentPositions(): $Map<$Direction, $List<$BlockPos>>;
        portPositions(facing: $Direction_): $List<$BlockPos>;
        portPositions(): $Map<$Direction, $List<$BlockPos>>;
        stageNumber(): number;
        boundingBoxes(): $Map<$Direction, $BoundingBox>;
        scanPlan(facing: $Direction_, sentinelCount: number): $CompiledMachinePattern$ScanPlan;
        networkInterfacePositions(): $Map<$Direction, $List<$BlockPos>>;
        networkInterfacePositions(facing: $Direction_): $List<$BlockPos>;
        constructor(machine: $Machine, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>, dynamicPatterns: $List_<$CompiledDynamicPattern_>);
        constructor(machine: $Machine, stageNumber: number, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>, couplerPositions: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions: $Map_<$Direction_, $List_<$BlockPos_>>, networkInterfacePositions: $Map_<$Direction_, $List_<$BlockPos_>>, dynamicPatterns: $List_<$CompiledDynamicPattern_>, modifierReplacements: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive: boolean);
        constructor(machine: $Machine, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>);
        constructor(machine: $Machine, stageNumber: number, rotatedPatterns: $Map_<$Direction_, $BlockArray_>, boundingBoxes: $Map_<$Direction_, $BoundingBox>, componentPositions: $Map_<$Direction_, $List_<$BlockPos_>>, portPositions: $Map_<$Direction_, $List_<$BlockPos_>>, couplerPositions: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions: $Map_<$Direction_, $List_<$BlockPos_>>, dynamicPatterns: $List_<$CompiledDynamicPattern_>, modifierReplacements: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledMachinePattern}.
     */
    export type $CompiledMachinePattern_ = { portPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, modifierReplacements?: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive?: boolean, boundingBoxes?: $Map_<$Direction_, $BoundingBox>, machine?: $Machine, componentPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, rotatedPatterns?: $Map_<$Direction_, $BlockArray_>, networkInterfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, stageNumber?: number, dynamicPatterns?: $List_<$CompiledDynamicPattern_>, couplerPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>,  } | [portPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, modifierReplacements?: $Map_<$Direction_, $Map_<$BlockPos_, $List_<$SingleBlockModifierReplacement>>>, stateSensitive?: boolean, boundingBoxes?: $Map_<$Direction_, $BoundingBox>, machine?: $Machine, componentPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, rotatedPatterns?: $Map_<$Direction_, $BlockArray_>, networkInterfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, stageNumber?: number, dynamicPatterns?: $List_<$CompiledDynamicPattern_>, couplerPositions?: $Map_<$Direction_, $List_<$BlockPos_>>, interfacePositions?: $Map_<$Direction_, $List_<$BlockPos_>>, ];
    export class $MachineStructureDefinition$Declaration extends $Record {
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        pattern(): $BlockArray;
        kind(): $MachineStructureDefinition$Declaration$Kind;
        static full(pattern: $BlockArray_): $MachineStructureDefinition$Declaration;
        static extension(pattern: $BlockArray_): $MachineStructureDefinition$Declaration;
        portTierRequirements(): $PortTierRequirementSpec;
        requirements(): $MachineStructureRequirements;
        stateSensitive(): boolean;
        portRequirements(): $PortRequirementSpec;
        constructor(kind: $MachineStructureDefinition$Declaration$Kind_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_, stateSensitive: boolean);
        constructor(kind: $MachineStructureDefinition$Declaration$Kind_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureDefinition$Declaration}.
     */
    export type $MachineStructureDefinition$Declaration_ = { pattern?: $BlockArray_, dynamicPatterns?: $List_<$DynamicPatternSpec_>, portTierRequirements?: $PortTierRequirementSpec_, kind?: $MachineStructureDefinition$Declaration$Kind_, stateSensitive?: boolean, requirements?: $MachineStructureRequirements_, portRequirements?: $PortRequirementSpec_,  } | [pattern?: $BlockArray_, dynamicPatterns?: $List_<$DynamicPatternSpec_>, portTierRequirements?: $PortTierRequirementSpec_, kind?: $MachineStructureDefinition$Declaration$Kind_, stateSensitive?: boolean, requirements?: $MachineStructureRequirements_, portRequirements?: $PortRequirementSpec_, ];
    export class $PortTierRequirementSpec$Requirement extends $Record {
        id(): string;
        category(): $PortTierRequirementSpec$PortCategory;
        minTierId(): string;
        ioType(): $IOType;
        minTier(): number;
        constructor(category: $PortTierRequirementSpec$PortCategory_, ioType: $IOType_, minTier: number, minTierId: string);
    }
    /**
     * Values that may be interpreted as {@link $PortTierRequirementSpec$Requirement}.
     */
    export type $PortTierRequirementSpec$Requirement_ = { minTierId?: string, category?: $PortTierRequirementSpec$PortCategory_, minTier?: number, ioType?: $IOType_,  } | [minTierId?: string, category?: $PortTierRequirementSpec$PortCategory_, minTier?: number, ioType?: $IOType_, ];
    export class $MachineStructureDefinition extends $Record {
        dynamicPatterns(): $List<$DynamicPatternSpec>;
        pattern(): $BlockArray;
        portTierRequirements(): $PortTierRequirementSpec;
        machineId(): $ResourceLocation;
        requirements(): $MachineStructureRequirements;
        modifierReplacements(): $Map<$BlockPos, $List<$SingleBlockModifierReplacement>>;
        declarations(): $List<$MachineStructureDefinition$Declaration>;
        portRequirements(): $PortRequirementSpec;
        levelSlots(): $Map<$BlockPos, $ResourceLocation>;
        constructor(machineId: $ResourceLocation_, declarations: $List_<$MachineStructureDefinition$Declaration_>);
        constructor(machineId: $ResourceLocation_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
        constructor(machineId: $ResourceLocation_, pattern: $BlockArray_, portRequirements: $PortRequirementSpec_, portTierRequirements: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_);
    }
    /**
     * Values that may be interpreted as {@link $MachineStructureDefinition}.
     */
    export type $MachineStructureDefinition_ = { machineId?: $ResourceLocation_, declarations?: $List_<$MachineStructureDefinition$Declaration_>,  } | [machineId?: $ResourceLocation_, declarations?: $List_<$MachineStructureDefinition$Declaration_>, ];
    export class $MachineControllerSpec extends $Record {
        id(): $ResourceLocation;
        topTexture(): $ResourceLocation;
        tooltip(): $List<string>;
        sideTexture(): $ResourceLocation;
        bottomTexture(): $ResourceLocation;
        frontTexture(): $ResourceLocation;
        static defaultsFor(machineId: $ResourceLocation_): $MachineControllerSpec;
        requireVerticalFacing(): boolean;
        allowVerticalFacing(): boolean;
        fullyRotationallySymmetric(): boolean;
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean, fullyRotationallySymmetric: boolean, requireVerticalFacing: boolean, tooltip: $List_<string>);
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean, fullyRotationallySymmetric: boolean, requireVerticalFacing: boolean);
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean, fullyRotationallySymmetric: boolean);
        constructor(id: $ResourceLocation_, frontTexture: $ResourceLocation_, sideTexture: $ResourceLocation_, topTexture: $ResourceLocation_, bottomTexture: $ResourceLocation_, allowVerticalFacing: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MachineControllerSpec}.
     */
    export type $MachineControllerSpec_ = { sideTexture?: $ResourceLocation_, bottomTexture?: $ResourceLocation_, frontTexture?: $ResourceLocation_, fullyRotationallySymmetric?: boolean, topTexture?: $ResourceLocation_, requireVerticalFacing?: boolean, id?: $ResourceLocation_, tooltip?: $List_<string>, allowVerticalFacing?: boolean,  } | [sideTexture?: $ResourceLocation_, bottomTexture?: $ResourceLocation_, frontTexture?: $ResourceLocation_, fullyRotationallySymmetric?: boolean, topTexture?: $ResourceLocation_, requireVerticalFacing?: boolean, id?: $ResourceLocation_, tooltip?: $List_<string>, allowVerticalFacing?: boolean, ];
    export class $BlockPredicate$MachineCoupler extends $Enum<$BlockPredicate$MachineCoupler> implements $BlockPredicate {
        static values(): $BlockPredicate$MachineCoupler[];
        static valueOf(name: string): $BlockPredicate$MachineCoupler;
        matches(state: $BlockState_): boolean;
        matches(state: $BlockState_, stateSensitive: boolean): boolean;
        children(): $List<$BlockPredicate>;
        preferredState(): ($BlockState) | undefined;
        static INSTANCE: $BlockPredicate$MachineCoupler;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicate$MachineCoupler}.
     */
    export type $BlockPredicate$MachineCoupler_ = "instance";
    export class $PortTierRequirementSpec$Builder {
        build(): $PortTierRequirementSpec;
        anyManaOutput(): $PortTierRequirementSpec$Builder;
        anyManaInput(): $PortTierRequirementSpec$Builder;
        anyAirInput(): $PortTierRequirementSpec$Builder;
        anySourceOutput(): $PortTierRequirementSpec$Builder;
        anyStressInput(): $PortTierRequirementSpec$Builder;
        anySourceInput(): $PortTierRequirementSpec$Builder;
        anyStressOutput(): $PortTierRequirementSpec$Builder;
        anyAirOutput(): $PortTierRequirementSpec$Builder;
        anyChemicalInput(): $PortTierRequirementSpec$Builder;
        anyHeatInput(): $PortTierRequirementSpec$Builder;
        minItemInput(size: $ItemBusSize_): $PortTierRequirementSpec$Builder;
        minFluidInput(size: $FluidHatchSize_): $PortTierRequirementSpec$Builder;
        anyItemInput(): $PortTierRequirementSpec$Builder;
        anyItemOutput(): $PortTierRequirementSpec$Builder;
        anyFluidInput(): $PortTierRequirementSpec$Builder;
        anyEnergyOutput(): $PortTierRequirementSpec$Builder;
        anyChemicalOutput(): $PortTierRequirementSpec$Builder;
        anyHeatOutput(): $PortTierRequirementSpec$Builder;
        minEnergyInput(size: $EnergyHatchSize_): $PortTierRequirementSpec$Builder;
        minEnergyOutput(size: $EnergyHatchSize_): $PortTierRequirementSpec$Builder;
        minFluidOutput(size: $FluidHatchSize_): $PortTierRequirementSpec$Builder;
        minChemicalOutput(size: $PortTiers$ChemicalTier_): $PortTierRequirementSpec$Builder;
        minItemOutput(size: $ItemBusSize_): $PortTierRequirementSpec$Builder;
        anyFluidOutput(): $PortTierRequirementSpec$Builder;
        anyEnergyInput(): $PortTierRequirementSpec$Builder;
        minChemicalInput(size: $PortTiers$ChemicalTier_): $PortTierRequirementSpec$Builder;
        anyRadioactiveChemicalInput(): $PortTierRequirementSpec$Builder;
        anyRadioactiveChemicalOutput(): $PortTierRequirementSpec$Builder;
    }
    export class $NetworkInterfaceSpec extends $Record {
        static disabled(): $NetworkInterfaceSpec;
        maxCount(): number;
        maxConnections(): number;
        allowedMachineIds(): $Set<$ResourceLocation>;
        withAllowedMachine(machineId: $ResourceLocation_): $NetworkInterfaceSpec;
        constructor(maxCount: number, maxConnections: number, allowedMachineIds: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $NetworkInterfaceSpec}.
     */
    export type $NetworkInterfaceSpec_ = { maxCount?: number, maxConnections?: number, allowedMachineIds?: $Set_<$ResourceLocation_>,  } | [maxCount?: number, maxConnections?: number, allowedMachineIds?: $Set_<$ResourceLocation_>, ];
    export class $BlockArray extends $Record {
        get(pos: $BlockPos_): $BlockPredicate;
        length(): number;
        isEmpty(): boolean;
        static builder(): $BlockArray$Builder;
        pattern(): $Map<$BlockPos, $BlockPredicate>;
        width(): number;
        tagged(pos: $BlockPos_, ...tags: string[]): $BlockArray;
        withPattern(rotated: $Map_<$BlockPos_, $BlockPredicate_>): $BlockArray;
        height(): number;
        tagsByPosition(): $Map<$BlockPos, $List<string>>;
        symbolsByPosition(): $Map<$BlockPos, string>;
        tagsAt(pos: $BlockPos_): $List<string>;
        constructor(pattern: $Map_<$BlockPos_, $BlockPredicate_>, tagsByPosition: $Map_<$BlockPos_, $List_<string>>, symbolsByPosition: $Map_<$BlockPos_, string>);
        constructor(pattern: $Map_<$BlockPos_, $BlockPredicate_>, tagsByPosition: $Map_<$BlockPos_, $List_<string>>);
        constructor(pattern: $Map_<$BlockPos_, $BlockPredicate_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockArray}.
     */
    export type $BlockArray_ = { pattern?: $Map_<$BlockPos_, $BlockPredicate_>, symbolsByPosition?: $Map_<$BlockPos_, string>, tagsByPosition?: $Map_<$BlockPos_, $List_<string>>,  } | [pattern?: $Map_<$BlockPos_, $BlockPredicate_>, symbolsByPosition?: $Map_<$BlockPos_, string>, tagsByPosition?: $Map_<$BlockPos_, $List_<string>>, ];
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
        pattern(pattern: $BlockArray_): $MachineRegistration$Builder;
        module(): $MachineRegistration$Builder;
        host(acceptedModuleId: string): $MachineRegistration$Builder;
        host(acceptedModuleId: $ResourceLocation_): $MachineRegistration$Builder;
        build(): $MachineRegistration;
        displayNameKey(displayNameKey: string): $MachineRegistration$Builder;
        /**
         * @deprecated
         */
        localizedName(localizedName: string): $MachineRegistration$Builder;
        allowParallelism(allowParallelism: boolean): $MachineRegistration$Builder;
        behavior(behavior: $MachineBehavior_): $MachineRegistration$Builder;
        requestFailed(requestId: $ResourceLocation_, failure: $RequestFailed_): $MachineRegistration$Builder;
        recipePoolIds(recipePoolIds: $List_<$ResourceLocation_>): $MachineRegistration$Builder;
        runningSound(sound: $SoundEvent_): $MachineRegistration$Builder;
        runningSound(id: $ResourceLocation_): $MachineRegistration$Builder;
        maxParallelAmount(maxParallelAmount: number): $MachineRegistration$Builder;
        requestProcess(requestId: $ResourceLocation_, process: $RequestProcess_): $MachineRegistration$Builder;
        finishSound(id: $ResourceLocation_): $MachineRegistration$Builder;
        finishSound(sound: $SoundEvent_): $MachineRegistration$Builder;
        appearance(appearance: $MachineAppearanceSpec_): $MachineRegistration$Builder;
        recipePoolId(recipePoolId: $ResourceLocation_): $MachineRegistration$Builder;
        networkInterface(maxCount: number, maxConnections: number): $MachineRegistration$Builder;
        networkInterface(networkInterface: $NetworkInterfaceSpec_): $MachineRegistration$Builder;
        factoryThreadLimit(factoryThreadLimit: number): $MachineRegistration$Builder;
        allowModifiers(allowModifiers: boolean): $MachineRegistration$Builder;
        controllerSpec(controllerSpec: $MachineControllerSpec_): $MachineRegistration$Builder;
        shareSmartInterfaces(shareSmartInterfaces: boolean): $MachineRegistration$Builder;
        allowNetworkMachine(machineId: $ResourceLocation_): $MachineRegistration$Builder;
        allowMultithreading(allowMultithreading: boolean): $MachineRegistration$Builder;
        smartInterfaceModifier(modifier: $SmartInterfaceModifier_): $MachineRegistration$Builder;
        expandableStructure(): $MachineRegistration$Builder;
        smartInterfaceType(smartInterfaceType: $SmartInterfaceType_): $MachineRegistration$Builder;
    }
    export class $BlockPredicate {
        static blocksInTag(tag: $TagKey_<$Block>): $List<$Block>;
        static machineCoupler(): $BlockPredicate$MachineCoupler;
    }
    export interface $BlockPredicate {
        matches(state: $BlockState_, stateSensitive: boolean): boolean;
        matches(state: $BlockState_): boolean;
        children(): $List<$BlockPredicate>;
        preferredState(): ($BlockState) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicate}.
     */
    export type $BlockPredicate_ = ((state: $BlockState) => boolean);
    export class $DynamicPatternSpec extends $Record {
        endPattern(): $BlockArray;
        startPattern(): $BlockArray;
        allowedFaces(): $Set<$Direction>;
        name(): string;
        maxSize(): number;
        minSize(): number;
        offsetStart(): $BlockPos;
        structureSizeOffset(): $BlockPos;
        constructor(name: string, startPattern: $BlockArray_, endPattern: $BlockArray_, minSize: number, maxSize: number, offsetStart: $BlockPos_, structureSizeOffset: $BlockPos_, allowedFaces: $Set_<$Direction_>);
    }
    /**
     * Values that may be interpreted as {@link $DynamicPatternSpec}.
     */
    export type $DynamicPatternSpec_ = { allowedFaces?: $Set_<$Direction_>, offsetStart?: $BlockPos_, startPattern?: $BlockArray_, name?: string, structureSizeOffset?: $BlockPos_, endPattern?: $BlockArray_, maxSize?: number, minSize?: number,  } | [allowedFaces?: $Set_<$Direction_>, offsetStart?: $BlockPos_, startPattern?: $BlockArray_, name?: string, structureSizeOffset?: $BlockPos_, endPattern?: $BlockArray_, maxSize?: number, minSize?: number, ];
    export class $SmartInterfaceModifier extends $Record {
        scope(): string;
        target(): string;
        static duration(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        mappedValue(value: number): number;
        io(): $RecipeModifier$IOType;
        maxValue(): number;
        static item(type: string, io: $RecipeModifier$IOType_, chance: boolean, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        operation(): $RecipeModifier$Operation;
        minValue(): number;
        static numeric(type: string, target: string, scope: string, min: number, max: number, atMin: number, atMax: number, operation: string, affectsChance: boolean): $SmartInterfaceModifier;
        interfaceType(): string;
        atMax(): number;
        atMin(): number;
        static fluid(type: string, io: $RecipeModifier$IOType_, chance: boolean, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        affectsChance(): boolean;
        static heat(type: string, io: $RecipeModifier$IOType_, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        static chemical(type: string, io: $RecipeModifier$IOType_, chance: boolean, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        static energy(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $SmartInterfaceModifier;
        toModifier(value: number): $MachineModifier$Numeric;
        constructor(interfaceType: string, target: string, scope: string, affectsChance: boolean, minValue: number, maxValue: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_);
        constructor(interfaceType: string, target: string, io: $RecipeModifier$IOType_, affectsChance: boolean, minValue: number, maxValue: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaceModifier}.
     */
    export type $SmartInterfaceModifier_ = { interfaceType?: string, target?: string, minValue?: number, affectsChance?: boolean, maxValue?: number, atMin?: number, operation?: $RecipeModifier$Operation_, scope?: string, atMax?: number,  } | [interfaceType?: string, target?: string, minValue?: number, affectsChance?: boolean, maxValue?: number, atMin?: number, operation?: $RecipeModifier$Operation_, scope?: string, atMax?: number, ];
}
