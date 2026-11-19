import { $MachineCapability, $CapabilitySnapshot } from "@package/cn/howxu/mmcr/api/capability";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Set_, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";
import { $LongFunction_, $BooleanSupplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CompiledMachinePattern, $CompiledMachinePattern_, $Machine, $BlockArray, $PortRequirementSpec$Failure, $BlockArray_, $PortRequirementSpec$Failure_ } from "@package/cn/howxu/mmcr/api/machine";
import { $Enum, $Record, $AutoCloseable, $Runnable_, $Object } from "@package/java/lang";
import { $TranslatableEnum } from "@package/net/neoforged/neoforge/common";
import { $IOType, $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MachineControllerBlockEntity } from "@package/cn/howxu/mmcr/internal/tile";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ProcessingComponent, $CraftingStatus } from "@package/cn/howxu/mmcr/api/recipe/helper";
import { $ExecutionStatus, $ExecutionStatus_ } from "@package/cn/howxu/mmcr/api/capability/status";
import { $CraftingPlan } from "@package/cn/howxu/mmcr/api/capability/plan";
import { $ControllerScreenTextScope, $ControllerScreenText, $ControllerScreenTextScope_ } from "@package/cn/howxu/mmcr/api/controller";
import { $RecipeStartContext$ExecutionSnapshot, $RecipeStartContext$ExecutionSnapshot_ } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $MachineModifier } from "@package/cn/howxu/mmcr/api/machine/modifier";
import { $CompiledRecipeProgram$Stage, $CompiledRecipeProgram$ExecutionIdentity, $CompiledRecipeProgram$VersionStamp_, $FactorySearchContext, $FactorySearchContext_, $CompiledRecipeProgram$ExecutionIdentity_, $AsyncRequirementPlanner$PreparedPlan, $CompiledRecipeProgram$VersionStamp, $AsyncRequirementPlanner$PlanResult_, $CompiledRecipeProgram_, $CompiledRecipeProgram$Stage_, $CompiledRecipeProgram } from "@package/cn/howxu/mmcr/internal/recipe";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructureClaimRegistry$ResourceDomain, $ModuleConnectionStatus_, $StructureClaimRegistry$ResourceDomain_, $ModuleConnectionStatus } from "@package/cn/howxu/mmcr/internal/multiblock";
import { $CapabilityTickContext_, $CapabilityTickResult_, $CapabilityTickPhase_, $CapabilityTickResult } from "@package/cn/howxu/mmcr/api/capability/tick";
import { $MachineLevel_, $MachineLevel } from "@package/cn/howxu/mmcr/api/machine/level";
import { $MachineRecipe, $MachineOutputAmount, $MachineOutputAmount_, $MachineOutput, $InputScope, $EffectiveRecipe_, $ActiveMachineRecipe, $EffectiveRecipe } from "@package/cn/howxu/mmcr/api/recipe";
import { $DataValue } from "@package/cn/howxu/mmcr/api/data";

declare module "@package/cn/howxu/mmcr/internal/runtime" {
    export class $FactoryTickResult extends $Record {
        snapshotChanged(): boolean;
        activeLaneCount(): number;
        laneStateChanged(): boolean;
        factoryFailure(): $ExecutionStatus;
        constructor(activeLaneCount: number, factoryFailure: $ExecutionStatus_, laneStateChanged: boolean, snapshotChanged: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FactoryTickResult}.
     */
    export type $FactoryTickResult_ = { factoryFailure?: $ExecutionStatus_, snapshotChanged?: boolean, laneStateChanged?: boolean, activeLaneCount?: number,  } | [factoryFailure?: $ExecutionStatus_, snapshotChanged?: boolean, laneStateChanged?: boolean, activeLaneCount?: number, ];
    export class $MachineWorkMode extends $Enum<$MachineWorkMode> implements $TranslatableEnum {
        getTranslatedName(): $Component;
        static values(): $MachineWorkMode[];
        static valueOf(name: string): $MachineWorkMode;
        static ASYNC: $MachineWorkMode;
        static SEMI_SYNC: $MachineWorkMode;
        static SYNC: $MachineWorkMode;
        get translatedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $MachineWorkMode}.
     */
    export type $MachineWorkMode_ = "async" | "semi_sync" | "sync";
    export class $ControllerRecipePresentation extends $Record {
        durationTicks(): number;
        energyInputPerTick(): number;
        heatOutputPerTick(): number;
        energyOutputPerTick(): number;
        static from(runtime: $CraftingRuntime): $ControllerRecipePresentation;
        static empty(): $ControllerRecipePresentation;
        static write(buf: $RegistryFriendlyByteBuf, presentation: $ControllerRecipePresentation_): void;
        static read(buf: $RegistryFriendlyByteBuf): $ControllerRecipePresentation;
        parallelism(): number;
        outputs(): $List<$MachineOutputAmount>;
        static MAX_OUTPUTS: number;
        constructor(outputs: $List_<$MachineOutputAmount_>, energyInputPerTick: number, energyOutputPerTick: number, heatOutputPerTick: number, durationTicks: number, parallelism: number);
        constructor(outputs: $List_<$MachineOutputAmount_>, energyInputPerTick: number, energyOutputPerTick: number, heatOutputPerTick: number);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRecipePresentation}.
     */
    export type $ControllerRecipePresentation_ = { energyOutputPerTick?: number, outputs?: $List_<$MachineOutputAmount_>, heatOutputPerTick?: number, parallelism?: number, energyInputPerTick?: number, durationTicks?: number,  } | [energyOutputPerTick?: number, outputs?: $List_<$MachineOutputAmount_>, heatOutputPerTick?: number, parallelism?: number, energyInputPerTick?: number, durationTicks?: number, ];
    export class $InstalledRecipeProgram {
        ledger(): $RecipeCommitLedger;
        identity(): $CompiledRecipeProgram$ExecutionIdentity;
        current(): boolean;
        owner(): $CraftingRuntime;
        cancel(): void;
        advance(): boolean;
        cancelled(): boolean;
        program(): $CompiledRecipeProgram;
        finishRetryReady(): boolean;
        advanceQualified(): boolean;
        finishAttemptReady(): boolean;
        executeContinuous(): $ExecutionStatus;
        finishReady(): boolean;
        tryQualifiedAttempt(roundId: number, gameTime: number): boolean;
        tryAttempt(roundId: number, gameTime: number): boolean;
        constructor(identity: $CompiledRecipeProgram$ExecutionIdentity_, program: $CompiledRecipeProgram_, owner: $CraftingRuntime);
    }
    export class $PatternStartReservation implements $AutoCloseable {
        rollback(): void;
        afterCommit(action: $Runnable_): $PatternStartReservation;
        laneId(): string;
        rolledBack(): boolean;
        withRecipeSelection(selection: $PatternStartReservation$RecipeSelection_): $PatternStartReservation;
        commit(): boolean;
        commit(ownershipWrites: $Runnable_): boolean;
        status(): $PatternStartReservation$Status;
        parallelism(): number;
        close(): void;
        guard(current: $BooleanSupplier_): $PatternStartReservation;
        recipe(): $MachineRecipe;
        static unavailable(): $PatternStartReservation;
        static reserved(recipe: $MachineRecipe, laneId: string, runtime: $CraftingRuntime, preparedStart: $CraftingRuntime$PreparedStart_, release: $Runnable_): $PatternStartReservation;
        effectiveRequirements(): $List<$MachineRequirement>;
        ownershipAccepted(): boolean;
        recipeSelection(): $PatternStartReservation$RecipeSelection;
    }
    export class $PatternStartReservation$RecipeSelection extends $Enum<$PatternStartReservation$RecipeSelection> {
        static values(): $PatternStartReservation$RecipeSelection[];
        static valueOf(name: string): $PatternStartReservation$RecipeSelection;
        static LAST_RECIPE: $PatternStartReservation$RecipeSelection;
        static CATALOG: $PatternStartReservation$RecipeSelection;
    }
    /**
     * Values that may be interpreted as {@link $PatternStartReservation$RecipeSelection}.
     */
    export type $PatternStartReservation$RecipeSelection_ = "catalog" | "last_recipe";
    export class $FactoryRuntime$PatternLane extends $Record {
        preparedStart(): $CraftingRuntime$PreparedStart;
        laneId(): string;
        runtime(): $CraftingRuntime;
        constructor(runtime: $CraftingRuntime, laneId: string, preparedStart: $CraftingRuntime$PreparedStart_);
    }
    /**
     * Values that may be interpreted as {@link $FactoryRuntime$PatternLane}.
     */
    export type $FactoryRuntime$PatternLane_ = { laneId?: string, runtime?: $CraftingRuntime, preparedStart?: $CraftingRuntime$PreparedStart_,  } | [laneId?: string, runtime?: $CraftingRuntime, preparedStart?: $CraftingRuntime$PreparedStart_, ];
    export class $ResourceAvailabilityNotifier$Reason extends $Enum<$ResourceAvailabilityNotifier$Reason> {
        static values(): $ResourceAvailabilityNotifier$Reason[];
        static valueOf(name: string): $ResourceAvailabilityNotifier$Reason;
        static INPUT_AVAILABLE: $ResourceAvailabilityNotifier$Reason;
        static MODULE_CONNECTION: $ResourceAvailabilityNotifier$Reason;
        static OUTPUT_CAPACITY: $ResourceAvailabilityNotifier$Reason;
        static ENERGY_AVAILABLE: $ResourceAvailabilityNotifier$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceAvailabilityNotifier$Reason}.
     */
    export type $ResourceAvailabilityNotifier$Reason_ = "input_available" | "energy_available" | "output_capacity" | "module_connection";
    export class $CraftingRuntime$PreparationResult extends $Enum<$CraftingRuntime$PreparationResult> {
        static values(): $CraftingRuntime$PreparationResult[];
        static valueOf(name: string): $CraftingRuntime$PreparationResult;
        static READY: $CraftingRuntime$PreparationResult;
        static CANCELLED: $CraftingRuntime$PreparationResult;
        static FAILED: $CraftingRuntime$PreparationResult;
        static DEFERRED: $CraftingRuntime$PreparationResult;
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$PreparationResult}.
     */
    export type $CraftingRuntime$PreparationResult_ = "ready" | "deferred" | "failed" | "cancelled";
    export class $FactoryRuntime {
        setLaneLimit(laneLimit: number): boolean;
        syncCoreLanes(controller: $MachineControllerBlockEntity, machine: $Machine, candidates: $List_<$MachineRecipe>): boolean;
        ensureBaseLane(controller: $MachineControllerBlockEntity): boolean;
        wakeSearches(reason: $ResourceAvailabilityNotifier$Reason_, resource: $Object): void;
        activeLaneCount(): number;
        activeRuntimes(): $List<$CraftingRuntime>;
        cancelAsyncState(): void;
        laneCount(): number;
        laneLimit(): number;
        rebindCurrentVersions(): void;
        syncCoreLanesIfNeeded(controller: $MachineControllerBlockEntity, machine: $Machine, candidates: $List_<$MachineRecipe>): boolean;
        markLaneProgressChanged(runtime: $CraftingRuntime): boolean;
        releasePatternStart(reservation: $FactoryRuntime$PatternLane_): void;
        reserveExactPatternStart(recipe: $MachineRecipe, parallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $FactoryRuntime$PatternLane;
        reservePendingPatternStart(recipe: $MachineRecipe, requestedParallelism: number, capabilitiesForParallelism: $LongFunction_<$List<$MachineCapability>>, requestSource: $BlockPos_): $FactoryRuntime$PatternLane;
        recomputeFailureIfDirty(): void;
        reservePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>): $FactoryRuntime$PatternLane;
        reservePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $FactoryRuntime$PatternLane;
        reservePatternStarts(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>): $List<$FactoryRuntime$PatternLane>;
        reservePatternStarts(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $List<$FactoryRuntime$PatternLane>;
        supportsPatternRecipe(owner: $MachineControllerBlockEntity, recipe: $MachineRecipe, limit: number): boolean;
        supportsPatternRecipe(recipe: $MachineRecipe): boolean;
        releaseStressContributions(): void;
        markLaneRuntimeChanged(runtime: $CraftingRuntime): void;
        cachedPatternRecipe(recipeId: $ResourceLocation_): $MachineRecipe;
        screenTextSnapshots(): $Map<string, $ControllerScreenTextSnapshot>;
        discardForRecipePoolChange(): void;
        patternStartCurrent(reservation: $FactoryRuntime$PatternLane_): boolean;
        invalidateForSmartInterfaceChange(): void;
        rememberPatternStartedRecipe(reservation: $FactoryRuntime$PatternLane_): void;
        load(input: $CompoundTag_, controller: $MachineControllerBlockEntity, registries: $HolderLookup$Provider): void;
        clear(): void;
        contains(runtime: $CraftingRuntime): boolean;
        failure(): $ExecutionStatus;
        snapshot(): $FactorySnapshot;
        resume(): void;
        save(output: $CompoundTag_, registries: $HolderLookup$Provider): void;
        tick(snapshot: $ControllerRuntimeSnapshot_, candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number, onFinished: $Runnable_): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, onFinished: $Runnable_, gameTime: number): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number, onFinished: $Runnable_): $FactoryTickResult;
        tick(context: $FactorySearchContext_, onFinished: $Runnable_): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, onFinished: $Runnable_): $FactoryTickResult;
        pause(): void;
        isPaused(): boolean;
        createSearchContext(snapshot: $ControllerRuntimeSnapshot_, candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number): $FactorySearchContext;
        activeRecipeCountFor(recipeId: $ResourceLocation_): number;
        searchAttemptsForTesting(): number;
        availableCandidates(candidates: $List_<$MachineRecipe>): $List<$MachineRecipe>;
        threadSnapshots(): $List<$FactoryRuntime$ThreadSnapshot>;
        recomputeFailure(): void;
        stateEpoch(): number;
        static MAX_LANES: number;
        constructor();
        get paused(): boolean;
    }
    export class $RecipeCommitLedger {
        load(input: $CompoundTag_, recipeTick: number, finishPending: boolean): boolean;
        state(): $RecipeCommitLedger$State;
        save(output: $CompoundTag_): void;
        markResourcePaid(tick: number, finalTick: boolean): void;
        markOutputPaid(): void;
        pauseAfterCommitFailure(): void;
        beginNativeExecution(): void;
        settleTick(tick: number, finishPending: boolean): void;
        constructor();
    }
    export class $RecipeCommitLedger$State extends $Record {
        outputPaid(): boolean;
        sequence(): number;
        phase(): $RecipeCommitLedger$Phase;
        tick(): number;
        paidAttempts(): number;
        finalTickPaid(): boolean;
        constructor(phase: $RecipeCommitLedger$Phase, sequence: number, paidAttempts: number, tick: number, finalTickPaid: boolean, outputPaid: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RecipeCommitLedger$State}.
     */
    export type $RecipeCommitLedger$State_ = { phase?: $RecipeCommitLedger$Phase, paidAttempts?: number, finalTickPaid?: boolean, outputPaid?: boolean, tick?: number, sequence?: number,  } | [phase?: $RecipeCommitLedger$Phase, paidAttempts?: number, finalTickPaid?: boolean, outputPaid?: boolean, tick?: number, sequence?: number, ];
    export class $CraftingRuntime$PreparedPrefetch {
    }
    export class $ControllerRuntimeSnapshot extends $Record {
        crafting(): $CraftingStateSnapshot;
        stateVersion(): number;
        foundModifiers(): $Map<string, $List<$MachineModifier>>;
        foundLevels(): $Map<$ResourceLocation, $MachineLevel>;
        modifierVersion(): number;
        capabilityVersion(): number;
        controllerRole(): number;
        foundLevelIds(): $List<string>;
        dataStorageValues(): $Map<string, $DataValue>;
        recipePresentation(): $ControllerRecipePresentation;
        linkedPortPositions(): $Set<$BlockPos>;
        moduleConnectionStatus(): $ModuleConnectionStatus;
        maxParallelControllerCount(): number;
        factoryControllerPresent(): boolean;
        parallelControllerCount(): number;
        installedModuleCount(): number;
        upgradeContentRevision(): number;
        capabilityPresentations(): $List<$ControllerRuntimeSnapshot$CapabilityPresentation>;
        componentPresentations(): $List<$ControllerRuntimeSnapshot$ComponentPresentation>;
        machineName(): string;
        maxParallelism(): number;
        upgradeItems(): $List<$ItemStack>;
        factory(): $FactorySnapshot;
        machineId(): string;
        structure(): $StructureSnapshot;
        factorySupported(): boolean;
        withRuntimeState(crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, maxParallelism: number, recipePresentation: $ControllerRecipePresentation_): $ControllerRuntimeSnapshot;
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number, dataStorageValues: $Map_<string, $DataValue>);
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number, dataStorageValues: $Map_<string, $DataValue>, recipePresentation: $ControllerRecipePresentation_);
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number);
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number, upgradeItems: $List_<$ItemStack_>, upgradeContentRevision: number, dataStorageValues: $Map_<string, $DataValue>, recipePresentation: $ControllerRecipePresentation_);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot}.
     */
    export type $ControllerRuntimeSnapshot_ = { crafting?: $CraftingStateSnapshot_, linkedPortPositions?: $Set_<$BlockPos_>, maxParallelism?: number, capabilityPresentations?: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, upgradeContentRevision?: number, stateVersion?: number, machineId?: string, structure?: $StructureSnapshot_, foundLevelIds?: $List_<string>, factorySupported?: boolean, componentPresentations?: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, dataStorageValues?: $Map_<string, $DataValue>, foundModifiers?: $Map_<string, $List_<$MachineModifier>>, maxParallelControllerCount?: number, moduleConnectionStatus?: $ModuleConnectionStatus_, controllerRole?: number, factory?: $FactorySnapshot_, foundLevels?: $Map_<$ResourceLocation_, $MachineLevel_>, parallelControllerCount?: number, machineName?: string, modifierVersion?: number, installedModuleCount?: number, recipePresentation?: $ControllerRecipePresentation_, upgradeItems?: $List_<$ItemStack_>, factoryControllerPresent?: boolean, capabilityVersion?: number,  } | [crafting?: $CraftingStateSnapshot_, linkedPortPositions?: $Set_<$BlockPos_>, maxParallelism?: number, capabilityPresentations?: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, upgradeContentRevision?: number, stateVersion?: number, machineId?: string, structure?: $StructureSnapshot_, foundLevelIds?: $List_<string>, factorySupported?: boolean, componentPresentations?: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, dataStorageValues?: $Map_<string, $DataValue>, foundModifiers?: $Map_<string, $List_<$MachineModifier>>, maxParallelControllerCount?: number, moduleConnectionStatus?: $ModuleConnectionStatus_, controllerRole?: number, factory?: $FactorySnapshot_, foundLevels?: $Map_<$ResourceLocation_, $MachineLevel_>, parallelControllerCount?: number, machineName?: string, modifierVersion?: number, installedModuleCount?: number, recipePresentation?: $ControllerRecipePresentation_, upgradeItems?: $List_<$ItemStack_>, factoryControllerPresent?: boolean, capabilityVersion?: number, ];
    export class $PatternStartBatchReservation$Status extends $Enum<$PatternStartBatchReservation$Status> {
        static values(): $PatternStartBatchReservation$Status[];
        static valueOf(name: string): $PatternStartBatchReservation$Status;
        static UNAVAILABLE: $PatternStartBatchReservation$Status;
        static RESERVED: $PatternStartBatchReservation$Status;
        static COMMITTED: $PatternStartBatchReservation$Status;
    }
    /**
     * Values that may be interpreted as {@link $PatternStartBatchReservation$Status}.
     */
    export type $PatternStartBatchReservation$Status_ = "unavailable" | "reserved" | "committed";
    export class $ComponentRuntime$UpgradeBusSnapshot extends $Record {
        position(): $BlockPos;
        stacks(): $List<$ItemStack>;
        constructor(position: $BlockPos_, stacks: $List_<$ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $ComponentRuntime$UpgradeBusSnapshot}.
     */
    export type $ComponentRuntime$UpgradeBusSnapshot_ = { position?: $BlockPos_, stacks?: $List_<$ItemStack_>,  } | [position?: $BlockPos_, stacks?: $List_<$ItemStack_>, ];
    export class $FactoryRuntime$ThreadSnapshot extends $Record {
        totalTick(): number;
        static idleBase(): $FactoryRuntime$ThreadSnapshot;
        laneId(): string;
        lastFailureUnloc(): string;
        coreThread(): boolean;
        baseThread(): boolean;
        presentation(): $ControllerRecipePresentation;
        index(): number;
        failure(): $ExecutionStatus;
        parallelism(): number;
        active(): boolean;
        tick(): number;
        recipeId(): string;
        constructor(index: number, laneId: string, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, failure: $ExecutionStatus_);
        constructor(index: number, laneId: string, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, failure: $ExecutionStatus_, presentation: $ControllerRecipePresentation_);
        constructor(index: number, laneId: string, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, lastFailureUnloc: string);
        constructor(index: number, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, lastFailureUnloc: string);
    }
    /**
     * Values that may be interpreted as {@link $FactoryRuntime$ThreadSnapshot}.
     */
    export type $FactoryRuntime$ThreadSnapshot_ = { coreThread?: boolean, parallelism?: number, totalTick?: number, baseThread?: boolean, recipeId?: string, laneId?: string, active?: boolean, tick?: number, index?: number, failure?: $ExecutionStatus_, presentation?: $ControllerRecipePresentation_,  } | [coreThread?: boolean, parallelism?: number, totalTick?: number, baseThread?: boolean, recipeId?: string, laneId?: string, active?: boolean, tick?: number, index?: number, failure?: $ExecutionStatus_, presentation?: $ControllerRecipePresentation_, ];
    export class $ControllerScreenTextState implements $ControllerScreenText {
        clearDirty(): void;
        flushReplacements(): void;
        appendAfter(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, afterLineId: $ResourceLocation_, text: $Component_): void;
        remove(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_): void;
        append(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, text: $Component_): void;
        clear(scope: $ControllerScreenTextScope_): void;
        replace(lineId: $ResourceLocation_, text: $Component_): void;
        snapshot(): $ControllerScreenTextSnapshot;
        dirty(): boolean;
        revision(): number;
        appendAfter(scope: $ControllerScreenTextScope_, lineId: string, afterLineId: string, text: $Component_): void;
        remove(scope: $ControllerScreenTextScope_, lineId: string): void;
        append(scope: $ControllerScreenTextScope_, lineId: string, text: $Component_): void;
        replace(lineId: string, text: $Component_): void;
        static MAX_ENCODED_TEXT_BYTES: number;
        static MAX_LINES: number;
        static MAX_LINE_ID_LENGTH: number;
        constructor();
    }
    export class $CraftingRuntime$StartPreparation extends $Record {
        execution(): $RecipeStartContext$ExecutionSnapshot;
        result(): $CraftingRuntime$PreparationResult;
        constructor(result: $CraftingRuntime$PreparationResult_, execution: $RecipeStartContext$ExecutionSnapshot_);
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$StartPreparation}.
     */
    export type $CraftingRuntime$StartPreparation_ = { result?: $CraftingRuntime$PreparationResult_, execution?: $RecipeStartContext$ExecutionSnapshot_,  } | [result?: $CraftingRuntime$PreparationResult_, execution?: $RecipeStartContext$ExecutionSnapshot_, ];
    export class $CraftingStateSnapshot extends $Record {
        totalTick(): number;
        structureVersion(): number;
        modifierVersion(): number;
        capabilityVersion(): number;
        maxParallelism(): number;
        static empty(structureVersion: number, capabilityVersion: number, modifierVersion: number): $CraftingStateSnapshot;
        status(): $CraftingStatus;
        failure(): $ExecutionStatus;
        parallelism(): number;
        tick(): number;
        recipeId(): $ResourceLocation;
        constructor(recipeId: $ResourceLocation_, status: $CraftingStatus, failure: $ExecutionStatus_, structureVersion: number, capabilityVersion: number, modifierVersion: number, tick: number, totalTick: number, parallelism: number, maxParallelism: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingStateSnapshot}.
     */
    export type $CraftingStateSnapshot_ = { maxParallelism?: number, status?: $CraftingStatus, structureVersion?: number, failure?: $ExecutionStatus_, modifierVersion?: number, capabilityVersion?: number, tick?: number, totalTick?: number, parallelism?: number, recipeId?: $ResourceLocation_,  } | [maxParallelism?: number, status?: $CraftingStatus, structureVersion?: number, failure?: $ExecutionStatus_, modifierVersion?: number, capabilityVersion?: number, tick?: number, totalTick?: number, parallelism?: number, recipeId?: $ResourceLocation_, ];
    export class $StructureSnapshot extends $Record {
        machine(): $Machine;
        facing(): $Direction;
        configuredMachine(): $Machine;
        matchedStage(): number;
        criticalChunks(): $Set<$ChunkPos>;
        lastStructureError(): $Object;
        rollFacing(): $Direction;
        structureAreaLoaded(): boolean;
        lastFormationFailure(): $PortRequirementSpec$Failure;
        structureMismatchDiagnostic(): string;
        version(): number;
        pattern(): $BlockArray;
        static empty(): $StructureSnapshot;
        compiledPattern(): $CompiledMachinePattern;
        dirty(): boolean;
        formed(): boolean;
        constructor(configuredMachine: $Machine, machine: $Machine, pattern: $BlockArray_, compiledPattern: $CompiledMachinePattern_, facing: $Direction_, rollFacing: $Direction_, matchedStage: number, formed: boolean, version: number, lastStructureError: $Object, structureMismatchDiagnostic: string, lastFormationFailure: $PortRequirementSpec$Failure_, dirty: boolean, structureAreaLoaded: boolean, criticalChunks: $Set_<$ChunkPos>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSnapshot}.
     */
    export type $StructureSnapshot_ = { configuredMachine?: $Machine, dirty?: boolean, version?: number, structureAreaLoaded?: boolean, lastFormationFailure?: $PortRequirementSpec$Failure_, matchedStage?: number, compiledPattern?: $CompiledMachinePattern_, lastStructureError?: $Object, facing?: $Direction_, rollFacing?: $Direction_, machine?: $Machine, structureMismatchDiagnostic?: string, criticalChunks?: $Set_<$ChunkPos>, pattern?: $BlockArray_, formed?: boolean,  } | [configuredMachine?: $Machine, dirty?: boolean, version?: number, structureAreaLoaded?: boolean, lastFormationFailure?: $PortRequirementSpec$Failure_, matchedStage?: number, compiledPattern?: $CompiledMachinePattern_, lastStructureError?: $Object, facing?: $Direction_, rollFacing?: $Direction_, machine?: $Machine, structureMismatchDiagnostic?: string, criticalChunks?: $Set_<$ChunkPos>, pattern?: $BlockArray_, formed?: boolean, ];
    export class $ControllerRuntimeSnapshot$StorageSlot extends $Record {
        capacity(): number;
        amount(): number;
        resourceId(): string;
        constructor(resourceId: string, amount: number, capacity: number);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot$StorageSlot}.
     */
    export type $ControllerRuntimeSnapshot$StorageSlot_ = { resourceId?: string, amount?: number, capacity?: number,  } | [resourceId?: string, amount?: number, capacity?: number, ];
    export class $CraftingRuntime$ProgramCompilation extends $Record {
        preparation(): boolean;
        finish(): $CompiledRecipeProgram$Stage;
        compile(): $CompiledRecipeProgram;
        identity(): $CompiledRecipeProgram$ExecutionIdentity;
        start(): $CompiledRecipeProgram$Stage;
        duration(): number;
        parallelism(): number;
        versions(): $CompiledRecipeProgram$VersionStamp;
        tick(): $CompiledRecipeProgram$Stage;
        recipeId(): $ResourceLocation;
        constructor(identity: $CompiledRecipeProgram$ExecutionIdentity_, recipeId: $ResourceLocation_, duration: number, parallelism: number, versions: $CompiledRecipeProgram$VersionStamp_, start: $CompiledRecipeProgram$Stage_, tick: $CompiledRecipeProgram$Stage_, finish: $CompiledRecipeProgram$Stage_, preparation: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$ProgramCompilation}.
     */
    export type $CraftingRuntime$ProgramCompilation_ = { preparation?: boolean, versions?: $CompiledRecipeProgram$VersionStamp_, finish?: $CompiledRecipeProgram$Stage_, start?: $CompiledRecipeProgram$Stage_, parallelism?: number, recipeId?: $ResourceLocation_, tick?: $CompiledRecipeProgram$Stage_, identity?: $CompiledRecipeProgram$ExecutionIdentity_, duration?: number,  } | [preparation?: boolean, versions?: $CompiledRecipeProgram$VersionStamp_, finish?: $CompiledRecipeProgram$Stage_, start?: $CompiledRecipeProgram$Stage_, parallelism?: number, recipeId?: $ResourceLocation_, tick?: $CompiledRecipeProgram$Stage_, identity?: $CompiledRecipeProgram$ExecutionIdentity_, duration?: number, ];
    export class $PatternStartBatchReservation implements $AutoCloseable {
        rollback(): void;
        reservations(): $List<$PatternStartReservation>;
        commit(ownershipWrites: $Runnable_): boolean;
        commit(): boolean;
        status(): $PatternStartBatchReservation$Status;
        parallelism(): number;
        close(): void;
        static unavailable(): $PatternStartBatchReservation;
        static reserved(reservations: $List_<$PatternStartReservation>): $PatternStartBatchReservation;
        ownershipAccepted(): boolean;
    }
    export class $CraftingRuntime$PreparedStart extends $Record {
        plan(): $CraftingPlan;
        catalogVersion(): number;
        requestCapabilities(): $List<$MachineCapability>;
        runtime(): $ControllerRuntimeSnapshot;
        recipe(): $EffectiveRecipe;
        effective(): $RecipeStartContext$ExecutionSnapshot;
        energyInputsExcluded(): boolean;
        prefetches(): $List<$CraftingRuntime$PreparedPrefetch>;
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, catalogVersion: number, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities: $List_<$MachineCapability>, energyInputsExcluded: boolean);
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, catalogVersion: number, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities: $List_<$MachineCapability>);
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>);
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, catalogVersion: number, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>);
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$PreparedStart}.
     */
    export type $CraftingRuntime$PreparedStart_ = { plan?: $CraftingPlan, runtime?: $ControllerRuntimeSnapshot_, effective?: $RecipeStartContext$ExecutionSnapshot_, prefetches?: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities?: $List_<$MachineCapability>, catalogVersion?: number, recipe?: $EffectiveRecipe_, energyInputsExcluded?: boolean,  } | [plan?: $CraftingPlan, runtime?: $ControllerRuntimeSnapshot_, effective?: $RecipeStartContext$ExecutionSnapshot_, prefetches?: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities?: $List_<$MachineCapability>, catalogVersion?: number, recipe?: $EffectiveRecipe_, energyInputsExcluded?: boolean, ];
    export class $CraftingRuntime {
        restore(restored: $ActiveMachineRecipe, domain: $StructureClaimRegistry$ResourceDomain_, restoredStructureVersion: number, restoredCapabilityVersion: number, restoredModifierVersion: number, restoredComponentStateVersion: number): void;
        totalTick(): number;
        failureUnloc(): string;
        activeOutputs(): $List<$MachineOutput>;
        resourceDomain(): $StructureClaimRegistry$ResourceDomain;
        shouldRetryFinish(): boolean;
        finishPending(): boolean;
        versionsCurrent(): boolean;
        recipePresentation(): $ControllerRecipePresentation;
        runtimeMachineOutputs(recipe: $MachineRecipe, runtime: $ControllerRuntimeSnapshot_): $List<$MachineOutput>;
        tickIdle(): $CapabilityTickResult;
        ledger(): $RecipeCommitLedger;
        preparePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>): $CraftingRuntime$PreparedStart;
        preparePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $CraftingRuntime$PreparedStart;
        rebindCurrentVersions(): void;
        prepareExactPatternStart(recipe: $MachineRecipe, recipeParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $CraftingRuntime$PreparedStart;
        effectivePatternRecipe(recipe: $MachineRecipe): $EffectiveRecipe;
        releasePatternStart(prepared: $CraftingRuntime$PreparedStart_): boolean;
        releasePatternStart(): void;
        static samePromisedOutputs(expected: $List_<$MachineOutput>, actual: $List_<$MachineOutput>, parallelism: number): boolean;
        reservePatternStart(): boolean;
        releaseStressContributions(): void;
        preparePendingPatternStart(recipe: $MachineRecipe, requestedParallelism: number, capabilitiesForParallelism: $LongFunction_<$List<$MachineCapability>>, requestSource: $BlockPos_): $CraftingRuntime$PreparedStart;
        handleCapabilityTickResult(result: $CapabilityTickResult_): $CapabilityTickResult;
        recordSearchFailure(nextFailure: $ExecutionStatus_): void;
        prepareStartAttempt(recipe: $MachineRecipe, requestedParallelism: number): $CraftingRuntime$StartPreparation;
        static requiresTopologyForLoad(input: $CompoundTag_): boolean;
        invalidateForSmartInterfaceChange(): void;
        maxParallelism(): number;
        finish(): $CraftingStatus;
        load(input: $CompoundTag_, domain: $StructureClaimRegistry$ResourceDomain_, registries: $HolderLookup$Provider): void;
        load(input: $CompoundTag_, domain: $StructureClaimRegistry$ResourceDomain_): void;
        failure(): $ExecutionStatus;
        start(recipe: $MachineRecipe, requestedParallelism: number, preparedStart: $RecipeStartContext$ExecutionSnapshot_): $CraftingStatus;
        start(recipe: $MachineRecipe, requestedParallelism: number): $CraftingStatus;
        snapshot(): $CraftingStateSnapshot;
        resume(): void;
        parallelism(): number;
        save(output: $CompoundTag_): void;
        save(output: $CompoundTag_, registries: $HolderLookup$Provider): void;
        recipe(): $MachineRecipe;
        invalidate(): void;
        controller(): $MachineControllerBlockEntity;
        active(): boolean;
        tick(): $CraftingStatus;
        tickCount(): number;
        pause(): void;
        activeRecipe(): $ActiveMachineRecipe;
        prepareAsyncFinish(): boolean;
        installedProgram(): $InstalledRecipeProgram;
        activeRequirements(): $List<$MachineRequirement>;
        activeInputScope(): $InputScope;
        stopEnergyPrefetch(): void;
        prepareAsyncStart(recipe: $MachineRecipe, requestedParallelism: number): $RecipeStartContext$ExecutionSnapshot;
        commitPatternStart(prepared: $CraftingRuntime$PreparedStart_, ownershipWrites: $Runnable_): boolean;
        commitPatternStart(prepared: $CraftingRuntime$PreparedStart_): boolean;
        setScreenText(screenText: $ControllerScreenText): void;
        prepareAsyncTick(runtime: $ControllerRuntimeSnapshot_): boolean;
        commitAsyncTick(planned: $AsyncRequirementPlanner$PlanResult_): boolean;
        bindRecipeLane(laneId: string, completion: $Runnable_): void;
        discardAsyncTickPreparation(): void;
        completeAsyncTickAfterRecipe(): $CraftingStatus;
        completeAsyncTickAfterInputs(): boolean;
        restartProgramAuthorized(): boolean;
        captureProgramCompilation(): $CraftingRuntime$ProgramCompilation;
        requiresPatternRequest(): boolean;
        installCompiledProgram(identity: $CompiledRecipeProgram$ExecutionIdentity_, program: $CompiledRecipeProgram_): $InstalledRecipeProgram;
        cancelInstalledProgram(): void;
        flushAsyncScreenText(): void;
        ensureInstalledProgram(): $InstalledRecipeProgram;
        restartProgramReady(recipe: $MachineRecipe): boolean;
        prepareInstalledTick(roundId: number): boolean;
        invalidateForCatalogChange(): void;
        pendingPatternRecipeId(): $ResourceLocation;
        executeAsyncCapabilityTick(phase: $CapabilityTickPhase_): boolean;
        prepareAsyncTickPlan(runtimeSnapshot: $ControllerRuntimeSnapshot_): $AsyncRequirementPlanner$PreparedPlan;
        constructor(controller: $MachineControllerBlockEntity, components: $ComponentRuntime);
        set screenText(value: $ControllerScreenText);
    }
    export class $ComponentRuntime {
        replaceComponents(components: $List_<$ProcessingComponent>): boolean;
        stateVersion(): number;
        foundModifiers(): $Map<string, $List<$MachineModifier>>;
        modifierList(): $List<$MachineModifier>;
        executeTickPhase(context: $CapabilityTickContext_): $CapabilityTickResult;
        executeTickPhase(context: $CapabilityTickContext_, executionValid: $BooleanSupplier_): $CapabilityTickResult;
        executeTickPhase(context: $CapabilityTickContext_, executionValid: $BooleanSupplier_, beforeNativeExecution: $Runnable_): $CapabilityTickResult;
        foundLevels(): $Map<$ResourceLocation, $MachineLevel>;
        hasTickFacets(): boolean;
        modifierVersion(): number;
        capabilityVersion(): number;
        connectedHostId(): ($ResourceLocation) | undefined;
        upgradeBuses(): $List<$ComponentRuntime$UpgradeBusSnapshot>;
        markCapabilitySourceChanged(sourcePos: $BlockPos_): void;
        linkedPortPositions(): $Set<$BlockPos>;
        refreshInputRouting(fullyIsolated: boolean): void;
        refreshInputRouting(): void;
        moduleConnectionStatus(): $ModuleConnectionStatus;
        setModifiersAllowed(allowed: boolean): void;
        installedModuleCount(): number;
        upgradeBusPositions(): $Set<$BlockPos>;
        upgradeContentRevision(): number;
        capabilityPresentations(): $List<$ControllerRuntimeSnapshot$CapabilityPresentation>;
        componentPresentations(): $List<$ControllerRuntimeSnapshot$ComponentPresentation>;
        inputIsolationChangeVersion(): number;
        markCapabilityPresentationChanged(sourcePos: $BlockPos_): void;
        markCapabilityPresentationChanged(): void;
        replaceSmartInterfaceModifiers(modifiers: $List_<$MachineModifier>): boolean;
        maxParallelism(machine: $Machine): number;
        capabilitySnapshot(): $CapabilitySnapshot;
        upgradeItems(): $List<$ItemStack>;
        clear(): void;
        components(): $List<$ProcessingComponent>;
        capabilities(): $List<$MachineCapability>;
        levelVersion(): number;
        replaceLevels(levels: $Map_<$ResourceLocation_, $MachineLevel_>): boolean;
        replaceModifiers(modifiers: $Map_<string, $List_<$MachineModifier>>): boolean;
        hasLinkedPort(position: $BlockPos_): boolean;
        replaceModuleConnectionState(status: $ModuleConnectionStatus_, installedModuleCount: number): boolean;
        capabilityPresentationEpoch(): number;
        capabilityContentRevision(): number;
        replaceLinkedPortPositions(positions: $Set_<$BlockPos_>): boolean;
        replaceUpgradeBuses(buses: $List_<$ComponentRuntime$UpgradeBusSnapshot_>): boolean;
        refreshUpgradeBuses(buses: $List_<$ComponentRuntime$UpgradeBusSnapshot_>): void;
        upgradeModifierUnits(): $Map<$ResourceLocation, number>;
        inputRoutingRevision(): number;
        constructor();
        set modifiersAllowed(value: boolean);
    }
    export class $ControllerRuntimeSnapshot$CapabilityPresentation extends $Record {
        ioType(): $IOType;
        slots(): $List<$ControllerRuntimeSnapshot$StorageSlot>;
        capacity(): number;
        amount(): number;
        typeId(): $ResourceLocation;
        constructor(typeId: $ResourceLocation_, ioType: $IOType_, amount: number, capacity: number, slots: $List_<$ControllerRuntimeSnapshot$StorageSlot_>);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot$CapabilityPresentation}.
     */
    export type $ControllerRuntimeSnapshot$CapabilityPresentation_ = { slots?: $List_<$ControllerRuntimeSnapshot$StorageSlot_>, amount?: number, ioType?: $IOType_, typeId?: $ResourceLocation_, capacity?: number,  } | [slots?: $List_<$ControllerRuntimeSnapshot$StorageSlot_>, amount?: number, ioType?: $IOType_, typeId?: $ResourceLocation_, capacity?: number, ];
    export class $PatternStartReservation$Status extends $Enum<$PatternStartReservation$Status> {
        static values(): $PatternStartReservation$Status[];
        static valueOf(name: string): $PatternStartReservation$Status;
        static UNAVAILABLE: $PatternStartReservation$Status;
        static RESERVED: $PatternStartReservation$Status;
        static COMMITTED: $PatternStartReservation$Status;
    }
    /**
     * Values that may be interpreted as {@link $PatternStartReservation$Status}.
     */
    export type $PatternStartReservation$Status_ = "unavailable" | "reserved" | "committed";
    export class $JadeTextSnapshot extends $Record {
        lines(): $List<$JadeTextSnapshot$Line>;
        static empty(): $JadeTextSnapshot;
        static MAX_LINES: number;
        constructor(lines: $List_<$JadeTextSnapshot$Line_>);
    }
    /**
     * Values that may be interpreted as {@link $JadeTextSnapshot}.
     */
    export type $JadeTextSnapshot_ = { lines?: $List_<$JadeTextSnapshot$Line_>,  } | [lines?: $List_<$JadeTextSnapshot$Line_>, ];
    export class $ControllerRuntimeSnapshot$ComponentPresentation extends $Record {
        ioType(): $IOType;
        kindId(): string;
        position(): $BlockPos;
        tags(): $List<string>;
        constructor(position: $BlockPos_, kindId: string, ioType: $IOType_, tags: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot$ComponentPresentation}.
     */
    export type $ControllerRuntimeSnapshot$ComponentPresentation_ = { tags?: $List_<string>, position?: $BlockPos_, ioType?: $IOType_, kindId?: string,  } | [tags?: $List_<string>, position?: $BlockPos_, ioType?: $IOType_, kindId?: string, ];
    export class $ResourceAvailabilityNotifier {
    }
    export interface $ResourceAvailabilityNotifier {
        notifyAvailability(reason: $ResourceAvailabilityNotifier$Reason_, resource: $Object): void;
    }
    /**
     * Values that may be interpreted as {@link $ResourceAvailabilityNotifier}.
     */
    export type $ResourceAvailabilityNotifier_ = ((reason: $ResourceAvailabilityNotifier$Reason, resource: $Object) => void);
    export class $FactorySnapshot extends $Record {
        paused(): boolean;
        recipePoolId(): string;
        activeLaneCount(): number;
        presentationLanes(): $List<$FactoryRuntime$ThreadSnapshot>;
        matchedStage(): number;
        controllerRole(): number;
        connectedHostId(): string;
        foundLevelIds(): $List<string>;
        lanes(): $List<$CraftingStateSnapshot>;
        laneLimit(): number;
        stageCount(): number;
        installedModuleCount(): number;
        parallelSlots(): number;
        machineName(): string;
        maxParallelism(): number;
        static empty(): $FactorySnapshot;
        failure(): $ExecutionStatus;
        active(): boolean;
        machineId(): string;
        formed(): boolean;
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number, machineId: string, recipePoolId: string, controllerRole: number, connectedHostId: string);
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number, machineId: string, recipePoolId: string, controllerRole: number, connectedHostId: string, installedModuleCount: number);
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number, machineId: string, recipePoolId: string);
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number);
    }
    /**
     * Values that may be interpreted as {@link $FactorySnapshot}.
     */
    export type $FactorySnapshot_ = { lanes?: $List_<$CraftingStateSnapshot_>, foundLevelIds?: $List_<string>, presentationLanes?: $List_<$FactoryRuntime$ThreadSnapshot_>, paused?: boolean, laneLimit?: number, machineName?: string, stageCount?: number, formed?: boolean, active?: boolean, maxParallelism?: number, matchedStage?: number, recipePoolId?: string, installedModuleCount?: number, failure?: $ExecutionStatus_, connectedHostId?: string, machineId?: string, controllerRole?: number, activeLaneCount?: number, parallelSlots?: number,  } | [lanes?: $List_<$CraftingStateSnapshot_>, foundLevelIds?: $List_<string>, presentationLanes?: $List_<$FactoryRuntime$ThreadSnapshot_>, paused?: boolean, laneLimit?: number, machineName?: string, stageCount?: number, formed?: boolean, active?: boolean, maxParallelism?: number, matchedStage?: number, recipePoolId?: string, installedModuleCount?: number, failure?: $ExecutionStatus_, connectedHostId?: string, machineId?: string, controllerRole?: number, activeLaneCount?: number, parallelSlots?: number, ];
    export class $JadeTextSnapshot$Line extends $Record {
        lineId(): $ResourceLocation;
        text(): $Component;
        constructor(lineId: $ResourceLocation_, text: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $JadeTextSnapshot$Line}.
     */
    export type $JadeTextSnapshot$Line_ = { text?: $Component_, lineId?: $ResourceLocation_,  } | [text?: $Component_, lineId?: $ResourceLocation_, ];
    export class $ControllerScreenTextSnapshot extends $Record {
        lines(): $List<$ControllerScreenTextSnapshot$Line>;
        revision(): number;
        constructor(revision: number, lines: $List_<$ControllerScreenTextSnapshot$Line_>);
    }
    /**
     * Values that may be interpreted as {@link $ControllerScreenTextSnapshot}.
     */
    export type $ControllerScreenTextSnapshot_ = { revision?: number, lines?: $List_<$ControllerScreenTextSnapshot$Line_>,  } | [revision?: number, lines?: $List_<$ControllerScreenTextSnapshot$Line_>, ];
    export class $ControllerScreenTextSnapshot$Line extends $Record {
        lineId(): $ResourceLocation;
        scope(): $ControllerScreenTextScope;
        text(): $Component;
        constructor(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, text: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $ControllerScreenTextSnapshot$Line}.
     */
    export type $ControllerScreenTextSnapshot$Line_ = { text?: $Component_, lineId?: $ResourceLocation_, scope?: $ControllerScreenTextScope_,  } | [text?: $Component_, lineId?: $ResourceLocation_, scope?: $ControllerScreenTextScope_, ];
}
