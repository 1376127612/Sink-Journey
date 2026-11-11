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
    export type $FactoryTickResult_ = { laneStateChanged?: boolean, activeLaneCount?: number, factoryFailure?: $ExecutionStatus_, snapshotChanged?: boolean,  } | [laneStateChanged?: boolean, activeLaneCount?: number, factoryFailure?: $ExecutionStatus_, snapshotChanged?: boolean, ];
    export class $MachineWorkMode extends $Enum<$MachineWorkMode> implements $TranslatableEnum {
        static values(): $MachineWorkMode[];
        static valueOf(name: string): $MachineWorkMode;
        getTranslatedName(): $Component;
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
        static from(runtime: $CraftingRuntime): $ControllerRecipePresentation;
        static empty(): $ControllerRecipePresentation;
        static write(buf: $RegistryFriendlyByteBuf, presentation: $ControllerRecipePresentation_): void;
        static read(buf: $RegistryFriendlyByteBuf): $ControllerRecipePresentation;
        parallelism(): number;
        energyOutputPerTick(): number;
        energyInputPerTick(): number;
        heatOutputPerTick(): number;
        outputs(): $List<$MachineOutputAmount>;
        durationTicks(): number;
        static MAX_OUTPUTS: number;
        constructor(outputs: $List_<$MachineOutputAmount_>, energyInputPerTick: number, energyOutputPerTick: number, heatOutputPerTick: number, durationTicks: number, parallelism: number);
        constructor(outputs: $List_<$MachineOutputAmount_>, energyInputPerTick: number, energyOutputPerTick: number, heatOutputPerTick: number);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRecipePresentation}.
     */
    export type $ControllerRecipePresentation_ = { energyInputPerTick?: number, durationTicks?: number, energyOutputPerTick?: number, outputs?: $List_<$MachineOutputAmount_>, heatOutputPerTick?: number, parallelism?: number,  } | [energyInputPerTick?: number, durationTicks?: number, energyOutputPerTick?: number, outputs?: $List_<$MachineOutputAmount_>, heatOutputPerTick?: number, parallelism?: number, ];
    export class $InstalledRecipeProgram {
        identity(): $CompiledRecipeProgram$ExecutionIdentity;
        current(): boolean;
        owner(): $CraftingRuntime;
        cancel(): void;
        advance(): boolean;
        cancelled(): boolean;
        program(): $CompiledRecipeProgram;
        ledger(): $RecipeCommitLedger;
        advanceQualified(): boolean;
        finishRetryReady(): boolean;
        finishAttemptReady(): boolean;
        tryQualifiedAttempt(roundId: number, gameTime: number): boolean;
        tryAttempt(roundId: number, gameTime: number): boolean;
        finishReady(): boolean;
        executeContinuous(): $ExecutionStatus;
        constructor(identity: $CompiledRecipeProgram$ExecutionIdentity_, program: $CompiledRecipeProgram_, owner: $CraftingRuntime);
    }
    export class $PatternStartReservation implements $AutoCloseable {
        commit(ownershipWrites: $Runnable_): boolean;
        commit(): boolean;
        status(): $PatternStartReservation$Status;
        parallelism(): number;
        close(): void;
        guard(current: $BooleanSupplier_): $PatternStartReservation;
        recipe(): $MachineRecipe;
        static unavailable(): $PatternStartReservation;
        static reserved(recipe: $MachineRecipe, laneId: string, runtime: $CraftingRuntime, preparedStart: $CraftingRuntime$PreparedStart_, release: $Runnable_): $PatternStartReservation;
        rolledBack(): boolean;
        rollback(): void;
        laneId(): string;
        afterCommit(action: $Runnable_): $PatternStartReservation;
        withRecipeSelection(selection: $PatternStartReservation$RecipeSelection_): $PatternStartReservation;
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
        runtime(): $CraftingRuntime;
        laneId(): string;
        preparedStart(): $CraftingRuntime$PreparedStart;
        constructor(runtime: $CraftingRuntime, laneId: string, preparedStart: $CraftingRuntime$PreparedStart_);
    }
    /**
     * Values that may be interpreted as {@link $FactoryRuntime$PatternLane}.
     */
    export type $FactoryRuntime$PatternLane_ = { runtime?: $CraftingRuntime, preparedStart?: $CraftingRuntime$PreparedStart_, laneId?: string,  } | [runtime?: $CraftingRuntime, preparedStart?: $CraftingRuntime$PreparedStart_, laneId?: string, ];
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
        load(input: $CompoundTag_, controller: $MachineControllerBlockEntity, registries: $HolderLookup$Provider): void;
        clear(): void;
        contains(runtime: $CraftingRuntime): boolean;
        failure(): $ExecutionStatus;
        snapshot(): $FactorySnapshot;
        resume(): void;
        save(output: $CompoundTag_, registries: $HolderLookup$Provider): void;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number, onFinished: $Runnable_): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number): $FactoryTickResult;
        tick(snapshot: $ControllerRuntimeSnapshot_, candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number, onFinished: $Runnable_): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, onFinished: $Runnable_, gameTime: number): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number): $FactoryTickResult;
        tick(context: $FactorySearchContext_, onFinished: $Runnable_): $FactoryTickResult;
        tick(candidates: $List_<$MachineRecipe>, maxParallelism: number, onFinished: $Runnable_): $FactoryTickResult;
        isPaused(): boolean;
        pause(): void;
        reservePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>): $FactoryRuntime$PatternLane;
        reservePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $FactoryRuntime$PatternLane;
        syncCoreLanesIfNeeded(controller: $MachineControllerBlockEntity, machine: $Machine, candidates: $List_<$MachineRecipe>): boolean;
        reserveExactPatternStart(recipe: $MachineRecipe, parallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $FactoryRuntime$PatternLane;
        reservePendingPatternStart(recipe: $MachineRecipe, requestedParallelism: number, capabilitiesForParallelism: $LongFunction_<$List<$MachineCapability>>, requestSource: $BlockPos_): $FactoryRuntime$PatternLane;
        releasePatternStart(reservation: $FactoryRuntime$PatternLane_): void;
        reservePatternStarts(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>): $List<$FactoryRuntime$PatternLane>;
        reservePatternStarts(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $List<$FactoryRuntime$PatternLane>;
        rebindCurrentVersions(): void;
        supportsPatternRecipe(owner: $MachineControllerBlockEntity, recipe: $MachineRecipe, limit: number): boolean;
        supportsPatternRecipe(recipe: $MachineRecipe): boolean;
        cachedPatternRecipe(recipeId: $ResourceLocation_): $MachineRecipe;
        releaseStressContributions(): void;
        markLaneRuntimeChanged(runtime: $CraftingRuntime): void;
        markLaneProgressChanged(runtime: $CraftingRuntime): boolean;
        recomputeFailureIfDirty(): void;
        activeLaneCount(): number;
        wakeSearches(reason: $ResourceAvailabilityNotifier$Reason_, resource: $Object): void;
        syncCoreLanes(controller: $MachineControllerBlockEntity, machine: $Machine, candidates: $List_<$MachineRecipe>): boolean;
        activeRuntimes(): $List<$CraftingRuntime>;
        cancelAsyncState(): void;
        ensureBaseLane(controller: $MachineControllerBlockEntity): boolean;
        laneCount(): number;
        laneLimit(): number;
        invalidateForSmartInterfaceChange(): void;
        rememberPatternStartedRecipe(reservation: $FactoryRuntime$PatternLane_): void;
        screenTextSnapshots(): $Map<string, $ControllerScreenTextSnapshot>;
        discardForRecipePoolChange(): void;
        patternStartCurrent(reservation: $FactoryRuntime$PatternLane_): boolean;
        setLaneLimit(laneLimit: number): boolean;
        recomputeFailure(): void;
        threadSnapshots(): $List<$FactoryRuntime$ThreadSnapshot>;
        stateEpoch(): number;
        availableCandidates(candidates: $List_<$MachineRecipe>): $List<$MachineRecipe>;
        createSearchContext(snapshot: $ControllerRuntimeSnapshot_, candidates: $List_<$MachineRecipe>, maxParallelism: number, gameTime: number): $FactorySearchContext;
        searchAttemptsForTesting(): number;
        activeRecipeCountFor(recipeId: $ResourceLocation_): number;
        static MAX_LANES: number;
        constructor();
        get paused(): boolean;
    }
    export class $RecipeCommitLedger {
        load(input: $CompoundTag_, recipeTick: number, finishPending: boolean): boolean;
        state(): $RecipeCommitLedger$State;
        save(output: $CompoundTag_): void;
        pauseAfterCommitFailure(): void;
        markResourcePaid(tick: number, finalTick: boolean): void;
        markOutputPaid(): void;
        settleTick(tick: number, finishPending: boolean): void;
        beginNativeExecution(): void;
        constructor();
    }
    export class $RecipeCommitLedger$State extends $Record {
        sequence(): number;
        phase(): $RecipeCommitLedger$Phase;
        tick(): number;
        outputPaid(): boolean;
        paidAttempts(): number;
        finalTickPaid(): boolean;
        constructor(phase: $RecipeCommitLedger$Phase, sequence: number, paidAttempts: number, tick: number, finalTickPaid: boolean, outputPaid: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RecipeCommitLedger$State}.
     */
    export type $RecipeCommitLedger$State_ = { sequence?: number, phase?: $RecipeCommitLedger$Phase, paidAttempts?: number, finalTickPaid?: boolean, outputPaid?: boolean, tick?: number,  } | [sequence?: number, phase?: $RecipeCommitLedger$Phase, paidAttempts?: number, finalTickPaid?: boolean, outputPaid?: boolean, tick?: number, ];
    export class $CraftingRuntime$PreparedPrefetch {
    }
    export class $ControllerRuntimeSnapshot extends $Record {
        factorySupported(): boolean;
        factory(): $FactorySnapshot;
        structure(): $StructureSnapshot;
        upgradeItems(): $List<$ItemStack>;
        crafting(): $CraftingStateSnapshot;
        maxParallelism(): number;
        machineId(): string;
        linkedPortPositions(): $Set<$BlockPos>;
        moduleConnectionStatus(): $ModuleConnectionStatus;
        installedModuleCount(): number;
        machineName(): string;
        stateVersion(): number;
        foundModifiers(): $Map<string, $List<$MachineModifier>>;
        foundLevels(): $Map<$ResourceLocation, $MachineLevel>;
        modifierVersion(): number;
        capabilityVersion(): number;
        dataStorageValues(): $Map<string, $DataValue>;
        foundLevelIds(): $List<string>;
        controllerRole(): number;
        recipePresentation(): $ControllerRecipePresentation;
        parallelControllerCount(): number;
        factoryControllerPresent(): boolean;
        maxParallelControllerCount(): number;
        upgradeContentRevision(): number;
        componentPresentations(): $List<$ControllerRuntimeSnapshot$ComponentPresentation>;
        capabilityPresentations(): $List<$ControllerRuntimeSnapshot$CapabilityPresentation>;
        withRuntimeState(crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, maxParallelism: number, recipePresentation: $ControllerRecipePresentation_): $ControllerRuntimeSnapshot;
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number);
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number, upgradeItems: $List_<$ItemStack_>, upgradeContentRevision: number, dataStorageValues: $Map_<string, $DataValue>, recipePresentation: $ControllerRecipePresentation_);
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number, dataStorageValues: $Map_<string, $DataValue>);
        constructor(structure: $StructureSnapshot_, capabilityVersion: number, modifierVersion: number, stateVersion: number, foundModifiers: $Map_<string, $List_<$MachineModifier>>, foundLevels: $Map_<$ResourceLocation_, $MachineLevel_>, linkedPortPositions: $Set_<$BlockPos_>, moduleConnectionStatus: $ModuleConnectionStatus_, installedModuleCount: number, crafting: $CraftingStateSnapshot_, factory: $FactorySnapshot_, componentPresentations: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, capabilityPresentations: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, foundLevelIds: $List_<string>, machineId: string, machineName: string, controllerRole: number, factorySupported: boolean, factoryControllerPresent: boolean, parallelControllerCount: number, maxParallelControllerCount: number, maxParallelism: number, dataStorageValues: $Map_<string, $DataValue>, recipePresentation: $ControllerRecipePresentation_);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot}.
     */
    export type $ControllerRuntimeSnapshot_ = { moduleConnectionStatus?: $ModuleConnectionStatus_, controllerRole?: number, factory?: $FactorySnapshot_, foundLevels?: $Map_<$ResourceLocation_, $MachineLevel_>, parallelControllerCount?: number, machineName?: string, modifierVersion?: number, installedModuleCount?: number, recipePresentation?: $ControllerRecipePresentation_, upgradeItems?: $List_<$ItemStack_>, factoryControllerPresent?: boolean, capabilityVersion?: number, crafting?: $CraftingStateSnapshot_, linkedPortPositions?: $Set_<$BlockPos_>, maxParallelism?: number, capabilityPresentations?: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, upgradeContentRevision?: number, stateVersion?: number, machineId?: string, structure?: $StructureSnapshot_, foundLevelIds?: $List_<string>, factorySupported?: boolean, componentPresentations?: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, dataStorageValues?: $Map_<string, $DataValue>, foundModifiers?: $Map_<string, $List_<$MachineModifier>>, maxParallelControllerCount?: number,  } | [moduleConnectionStatus?: $ModuleConnectionStatus_, controllerRole?: number, factory?: $FactorySnapshot_, foundLevels?: $Map_<$ResourceLocation_, $MachineLevel_>, parallelControllerCount?: number, machineName?: string, modifierVersion?: number, installedModuleCount?: number, recipePresentation?: $ControllerRecipePresentation_, upgradeItems?: $List_<$ItemStack_>, factoryControllerPresent?: boolean, capabilityVersion?: number, crafting?: $CraftingStateSnapshot_, linkedPortPositions?: $Set_<$BlockPos_>, maxParallelism?: number, capabilityPresentations?: $List_<$ControllerRuntimeSnapshot$CapabilityPresentation_>, upgradeContentRevision?: number, stateVersion?: number, machineId?: string, structure?: $StructureSnapshot_, foundLevelIds?: $List_<string>, factorySupported?: boolean, componentPresentations?: $List_<$ControllerRuntimeSnapshot$ComponentPresentation_>, dataStorageValues?: $Map_<string, $DataValue>, foundModifiers?: $Map_<string, $List_<$MachineModifier>>, maxParallelControllerCount?: number, ];
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
    export type $ComponentRuntime$UpgradeBusSnapshot_ = { stacks?: $List_<$ItemStack_>, position?: $BlockPos_,  } | [stacks?: $List_<$ItemStack_>, position?: $BlockPos_, ];
    export class $FactoryRuntime$ThreadSnapshot extends $Record {
        index(): number;
        failure(): $ExecutionStatus;
        parallelism(): number;
        active(): boolean;
        tick(): number;
        lastFailureUnloc(): string;
        recipeId(): string;
        presentation(): $ControllerRecipePresentation;
        totalTick(): number;
        laneId(): string;
        baseThread(): boolean;
        coreThread(): boolean;
        static idleBase(): $FactoryRuntime$ThreadSnapshot;
        constructor(index: number, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, lastFailureUnloc: string);
        constructor(index: number, laneId: string, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, failure: $ExecutionStatus_, presentation: $ControllerRecipePresentation_);
        constructor(index: number, laneId: string, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, failure: $ExecutionStatus_);
        constructor(index: number, laneId: string, baseThread: boolean, coreThread: boolean, active: boolean, recipeId: string, tick: number, totalTick: number, parallelism: number, lastFailureUnloc: string);
    }
    /**
     * Values that may be interpreted as {@link $FactoryRuntime$ThreadSnapshot}.
     */
    export type $FactoryRuntime$ThreadSnapshot_ = { laneId?: string, active?: boolean, tick?: number, index?: number, failure?: $ExecutionStatus_, presentation?: $ControllerRecipePresentation_, coreThread?: boolean, parallelism?: number, totalTick?: number, baseThread?: boolean, recipeId?: string,  } | [laneId?: string, active?: boolean, tick?: number, index?: number, failure?: $ExecutionStatus_, presentation?: $ControllerRecipePresentation_, coreThread?: boolean, parallelism?: number, totalTick?: number, baseThread?: boolean, recipeId?: string, ];
    export class $ControllerScreenTextState implements $ControllerScreenText {
        remove(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_): void;
        append(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, text: $Component_): void;
        clear(scope: $ControllerScreenTextScope_): void;
        replace(lineId: $ResourceLocation_, text: $Component_): void;
        snapshot(): $ControllerScreenTextSnapshot;
        dirty(): boolean;
        revision(): number;
        clearDirty(): void;
        flushReplacements(): void;
        appendAfter(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, afterLineId: $ResourceLocation_, text: $Component_): void;
        remove(scope: $ControllerScreenTextScope_, lineId: string): void;
        append(scope: $ControllerScreenTextScope_, lineId: string, text: $Component_): void;
        replace(lineId: string, text: $Component_): void;
        appendAfter(scope: $ControllerScreenTextScope_, lineId: string, afterLineId: string, text: $Component_): void;
        static MAX_ENCODED_TEXT_BYTES: number;
        static MAX_LINES: number;
        static MAX_LINE_ID_LENGTH: number;
        constructor();
    }
    export class $CraftingRuntime$StartPreparation extends $Record {
        result(): $CraftingRuntime$PreparationResult;
        execution(): $RecipeStartContext$ExecutionSnapshot;
        constructor(result: $CraftingRuntime$PreparationResult_, execution: $RecipeStartContext$ExecutionSnapshot_);
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$StartPreparation}.
     */
    export type $CraftingRuntime$StartPreparation_ = { result?: $CraftingRuntime$PreparationResult_, execution?: $RecipeStartContext$ExecutionSnapshot_,  } | [result?: $CraftingRuntime$PreparationResult_, execution?: $RecipeStartContext$ExecutionSnapshot_, ];
    export class $CraftingStateSnapshot extends $Record {
        static empty(structureVersion: number, capabilityVersion: number, modifierVersion: number): $CraftingStateSnapshot;
        status(): $CraftingStatus;
        failure(): $ExecutionStatus;
        parallelism(): number;
        tick(): number;
        recipeId(): $ResourceLocation;
        maxParallelism(): number;
        totalTick(): number;
        structureVersion(): number;
        modifierVersion(): number;
        capabilityVersion(): number;
        constructor(recipeId: $ResourceLocation_, status: $CraftingStatus, failure: $ExecutionStatus_, structureVersion: number, capabilityVersion: number, modifierVersion: number, tick: number, totalTick: number, parallelism: number, maxParallelism: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingStateSnapshot}.
     */
    export type $CraftingStateSnapshot_ = { modifierVersion?: number, capabilityVersion?: number, tick?: number, totalTick?: number, parallelism?: number, recipeId?: $ResourceLocation_, maxParallelism?: number, status?: $CraftingStatus, structureVersion?: number, failure?: $ExecutionStatus_,  } | [modifierVersion?: number, capabilityVersion?: number, tick?: number, totalTick?: number, parallelism?: number, recipeId?: $ResourceLocation_, maxParallelism?: number, status?: $CraftingStatus, structureVersion?: number, failure?: $ExecutionStatus_, ];
    export class $StructureSnapshot extends $Record {
        version(): number;
        pattern(): $BlockArray;
        static empty(): $StructureSnapshot;
        dirty(): boolean;
        compiledPattern(): $CompiledMachinePattern;
        machine(): $Machine;
        facing(): $Direction;
        formed(): boolean;
        structureAreaLoaded(): boolean;
        lastFormationFailure(): $PortRequirementSpec$Failure;
        configuredMachine(): $Machine;
        criticalChunks(): $Set<$ChunkPos>;
        matchedStage(): number;
        lastStructureError(): $Object;
        rollFacing(): $Direction;
        structureMismatchDiagnostic(): string;
        constructor(configuredMachine: $Machine, machine: $Machine, pattern: $BlockArray_, compiledPattern: $CompiledMachinePattern_, facing: $Direction_, rollFacing: $Direction_, matchedStage: number, formed: boolean, version: number, lastStructureError: $Object, structureMismatchDiagnostic: string, lastFormationFailure: $PortRequirementSpec$Failure_, dirty: boolean, structureAreaLoaded: boolean, criticalChunks: $Set_<$ChunkPos>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSnapshot}.
     */
    export type $StructureSnapshot_ = { lastStructureError?: $Object, facing?: $Direction_, rollFacing?: $Direction_, machine?: $Machine, structureMismatchDiagnostic?: string, criticalChunks?: $Set_<$ChunkPos>, pattern?: $BlockArray_, formed?: boolean, configuredMachine?: $Machine, dirty?: boolean, version?: number, structureAreaLoaded?: boolean, lastFormationFailure?: $PortRequirementSpec$Failure_, matchedStage?: number, compiledPattern?: $CompiledMachinePattern_,  } | [lastStructureError?: $Object, facing?: $Direction_, rollFacing?: $Direction_, machine?: $Machine, structureMismatchDiagnostic?: string, criticalChunks?: $Set_<$ChunkPos>, pattern?: $BlockArray_, formed?: boolean, configuredMachine?: $Machine, dirty?: boolean, version?: number, structureAreaLoaded?: boolean, lastFormationFailure?: $PortRequirementSpec$Failure_, matchedStage?: number, compiledPattern?: $CompiledMachinePattern_, ];
    export class $ControllerRuntimeSnapshot$StorageSlot extends $Record {
        capacity(): number;
        amount(): number;
        resourceId(): string;
        constructor(resourceId: string, amount: number, capacity: number);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot$StorageSlot}.
     */
    export type $ControllerRuntimeSnapshot$StorageSlot_ = { capacity?: number, resourceId?: string, amount?: number,  } | [capacity?: number, resourceId?: string, amount?: number, ];
    export class $CraftingRuntime$ProgramCompilation extends $Record {
        finish(): $CompiledRecipeProgram$Stage;
        compile(): $CompiledRecipeProgram;
        identity(): $CompiledRecipeProgram$ExecutionIdentity;
        start(): $CompiledRecipeProgram$Stage;
        duration(): number;
        parallelism(): number;
        versions(): $CompiledRecipeProgram$VersionStamp;
        tick(): $CompiledRecipeProgram$Stage;
        preparation(): boolean;
        recipeId(): $ResourceLocation;
        constructor(identity: $CompiledRecipeProgram$ExecutionIdentity_, recipeId: $ResourceLocation_, duration: number, parallelism: number, versions: $CompiledRecipeProgram$VersionStamp_, start: $CompiledRecipeProgram$Stage_, tick: $CompiledRecipeProgram$Stage_, finish: $CompiledRecipeProgram$Stage_, preparation: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$ProgramCompilation}.
     */
    export type $CraftingRuntime$ProgramCompilation_ = { parallelism?: number, recipeId?: $ResourceLocation_, tick?: $CompiledRecipeProgram$Stage_, identity?: $CompiledRecipeProgram$ExecutionIdentity_, duration?: number, preparation?: boolean, versions?: $CompiledRecipeProgram$VersionStamp_, finish?: $CompiledRecipeProgram$Stage_, start?: $CompiledRecipeProgram$Stage_,  } | [parallelism?: number, recipeId?: $ResourceLocation_, tick?: $CompiledRecipeProgram$Stage_, identity?: $CompiledRecipeProgram$ExecutionIdentity_, duration?: number, preparation?: boolean, versions?: $CompiledRecipeProgram$VersionStamp_, finish?: $CompiledRecipeProgram$Stage_, start?: $CompiledRecipeProgram$Stage_, ];
    export class $PatternStartBatchReservation implements $AutoCloseable {
        commit(): boolean;
        commit(ownershipWrites: $Runnable_): boolean;
        status(): $PatternStartBatchReservation$Status;
        parallelism(): number;
        close(): void;
        static unavailable(): $PatternStartBatchReservation;
        static reserved(reservations: $List_<$PatternStartReservation>): $PatternStartBatchReservation;
        reservations(): $List<$PatternStartReservation>;
        rollback(): void;
        ownershipAccepted(): boolean;
    }
    export class $CraftingRuntime$PreparedStart extends $Record {
        runtime(): $ControllerRuntimeSnapshot;
        recipe(): $EffectiveRecipe;
        effective(): $RecipeStartContext$ExecutionSnapshot;
        plan(): $CraftingPlan;
        catalogVersion(): number;
        requestCapabilities(): $List<$MachineCapability>;
        prefetches(): $List<$CraftingRuntime$PreparedPrefetch>;
        energyInputsExcluded(): boolean;
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, catalogVersion: number, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities: $List_<$MachineCapability>, energyInputsExcluded: boolean);
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>);
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, catalogVersion: number, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>);
        constructor(recipe: $EffectiveRecipe_, runtime: $ControllerRuntimeSnapshot_, catalogVersion: number, effective: $RecipeStartContext$ExecutionSnapshot_, plan: $CraftingPlan, prefetches: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities: $List_<$MachineCapability>);
    }
    /**
     * Values that may be interpreted as {@link $CraftingRuntime$PreparedStart}.
     */
    export type $CraftingRuntime$PreparedStart_ = { catalogVersion?: number, recipe?: $EffectiveRecipe_, energyInputsExcluded?: boolean, plan?: $CraftingPlan, runtime?: $ControllerRuntimeSnapshot_, effective?: $RecipeStartContext$ExecutionSnapshot_, prefetches?: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities?: $List_<$MachineCapability>,  } | [catalogVersion?: number, recipe?: $EffectiveRecipe_, energyInputsExcluded?: boolean, plan?: $CraftingPlan, runtime?: $ControllerRuntimeSnapshot_, effective?: $RecipeStartContext$ExecutionSnapshot_, prefetches?: $List_<$CraftingRuntime$PreparedPrefetch>, requestCapabilities?: $List_<$MachineCapability>, ];
    export class $CraftingRuntime {
        finish(): $CraftingStatus;
        load(input: $CompoundTag_, domain: $StructureClaimRegistry$ResourceDomain_): void;
        load(input: $CompoundTag_, domain: $StructureClaimRegistry$ResourceDomain_, registries: $HolderLookup$Provider): void;
        failure(): $ExecutionStatus;
        start(recipe: $MachineRecipe, requestedParallelism: number): $CraftingStatus;
        start(recipe: $MachineRecipe, requestedParallelism: number, preparedStart: $RecipeStartContext$ExecutionSnapshot_): $CraftingStatus;
        snapshot(): $CraftingStateSnapshot;
        resume(): void;
        parallelism(): number;
        save(output: $CompoundTag_): void;
        save(output: $CompoundTag_, registries: $HolderLookup$Provider): void;
        recipe(): $MachineRecipe;
        invalidate(): void;
        active(): boolean;
        restore(restored: $ActiveMachineRecipe, domain: $StructureClaimRegistry$ResourceDomain_, restoredStructureVersion: number, restoredCapabilityVersion: number, restoredModifierVersion: number, restoredComponentStateVersion: number): void;
        tick(): $CraftingStatus;
        controller(): $MachineControllerBlockEntity;
        pause(): void;
        tickCount(): number;
        maxParallelism(): number;
        activeRecipe(): $ActiveMachineRecipe;
        totalTick(): number;
        ledger(): $RecipeCommitLedger;
        reservePatternStart(): boolean;
        effectivePatternRecipe(recipe: $MachineRecipe): $EffectiveRecipe;
        preparePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>): $CraftingRuntime$PreparedStart;
        preparePatternStart(recipe: $MachineRecipe, requestedParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $CraftingRuntime$PreparedStart;
        prepareExactPatternStart(recipe: $MachineRecipe, recipeParallelism: number, requestCapabilities: $List_<$MachineCapability>, requestSource: $BlockPos_): $CraftingRuntime$PreparedStart;
        preparePendingPatternStart(recipe: $MachineRecipe, requestedParallelism: number, capabilitiesForParallelism: $LongFunction_<$List<$MachineCapability>>, requestSource: $BlockPos_): $CraftingRuntime$PreparedStart;
        static samePromisedOutputs(expected: $List_<$MachineOutput>, actual: $List_<$MachineOutput>, parallelism: number): boolean;
        releasePatternStart(): void;
        releasePatternStart(prepared: $CraftingRuntime$PreparedStart_): boolean;
        rebindCurrentVersions(): void;
        releaseStressContributions(): void;
        activeOutputs(): $List<$MachineOutput>;
        resourceDomain(): $StructureClaimRegistry$ResourceDomain;
        failureUnloc(): string;
        shouldRetryFinish(): boolean;
        versionsCurrent(): boolean;
        finishPending(): boolean;
        recipePresentation(): $ControllerRecipePresentation;
        tickIdle(): $CapabilityTickResult;
        invalidateForSmartInterfaceChange(): void;
        handleCapabilityTickResult(result: $CapabilityTickResult_): $CapabilityTickResult;
        runtimeMachineOutputs(recipe: $MachineRecipe, runtime: $ControllerRuntimeSnapshot_): $List<$MachineOutput>;
        prepareStartAttempt(recipe: $MachineRecipe, requestedParallelism: number): $CraftingRuntime$StartPreparation;
        recordSearchFailure(nextFailure: $ExecutionStatus_): void;
        static requiresTopologyForLoad(input: $CompoundTag_): boolean;
        installedProgram(): $InstalledRecipeProgram;
        setScreenText(screenText: $ControllerScreenText): void;
        stopEnergyPrefetch(): void;
        bindRecipeLane(laneId: string, completion: $Runnable_): void;
        prepareAsyncFinish(): boolean;
        commitAsyncTick(planned: $AsyncRequirementPlanner$PlanResult_): boolean;
        activeInputScope(): $InputScope;
        activeRequirements(): $List<$MachineRequirement>;
        commitPatternStart(prepared: $CraftingRuntime$PreparedStart_, ownershipWrites: $Runnable_): boolean;
        commitPatternStart(prepared: $CraftingRuntime$PreparedStart_): boolean;
        prepareAsyncStart(recipe: $MachineRecipe, requestedParallelism: number): $RecipeStartContext$ExecutionSnapshot;
        prepareAsyncTick(runtime: $ControllerRuntimeSnapshot_): boolean;
        discardAsyncTickPreparation(): void;
        completeAsyncTickAfterInputs(): boolean;
        completeAsyncTickAfterRecipe(): $CraftingStatus;
        requiresPatternRequest(): boolean;
        captureProgramCompilation(): $CraftingRuntime$ProgramCompilation;
        flushAsyncScreenText(): void;
        cancelInstalledProgram(): void;
        restartProgramReady(recipe: $MachineRecipe): boolean;
        invalidateForCatalogChange(): void;
        prepareInstalledTick(roundId: number): boolean;
        prepareAsyncTickPlan(runtimeSnapshot: $ControllerRuntimeSnapshot_): $AsyncRequirementPlanner$PreparedPlan;
        installCompiledProgram(identity: $CompiledRecipeProgram$ExecutionIdentity_, program: $CompiledRecipeProgram_): $InstalledRecipeProgram;
        ensureInstalledProgram(): $InstalledRecipeProgram;
        restartProgramAuthorized(): boolean;
        executeAsyncCapabilityTick(phase: $CapabilityTickPhase_): boolean;
        pendingPatternRecipeId(): $ResourceLocation;
        constructor(controller: $MachineControllerBlockEntity, components: $ComponentRuntime);
        set screenText(value: $ControllerScreenText);
    }
    export class $ComponentRuntime {
        clear(): void;
        components(): $List<$ProcessingComponent>;
        capabilities(): $List<$MachineCapability>;
        markCapabilitySourceChanged(sourcePos: $BlockPos_): void;
        upgradeItems(): $List<$ItemStack>;
        maxParallelism(machine: $Machine): number;
        capabilitySnapshot(): $CapabilitySnapshot;
        levelVersion(): number;
        replaceComponents(components: $List_<$ProcessingComponent>): boolean;
        linkedPortPositions(): $Set<$BlockPos>;
        refreshInputRouting(): void;
        refreshInputRouting(fullyIsolated: boolean): void;
        moduleConnectionStatus(): $ModuleConnectionStatus;
        installedModuleCount(): number;
        setModifiersAllowed(allowed: boolean): void;
        stateVersion(): number;
        foundModifiers(): $Map<string, $List<$MachineModifier>>;
        modifierList(): $List<$MachineModifier>;
        executeTickPhase(context: $CapabilityTickContext_, executionValid: $BooleanSupplier_, beforeNativeExecution: $Runnable_): $CapabilityTickResult;
        executeTickPhase(context: $CapabilityTickContext_, executionValid: $BooleanSupplier_): $CapabilityTickResult;
        executeTickPhase(context: $CapabilityTickContext_): $CapabilityTickResult;
        hasTickFacets(): boolean;
        foundLevels(): $Map<$ResourceLocation, $MachineLevel>;
        modifierVersion(): number;
        capabilityVersion(): number;
        connectedHostId(): ($ResourceLocation) | undefined;
        upgradeBuses(): $List<$ComponentRuntime$UpgradeBusSnapshot>;
        inputIsolationChangeVersion(): number;
        markCapabilityPresentationChanged(sourcePos: $BlockPos_): void;
        markCapabilityPresentationChanged(): void;
        replaceSmartInterfaceModifiers(modifiers: $List_<$MachineModifier>): boolean;
        upgradeContentRevision(): number;
        upgradeBusPositions(): $Set<$BlockPos>;
        componentPresentations(): $List<$ControllerRuntimeSnapshot$ComponentPresentation>;
        capabilityPresentations(): $List<$ControllerRuntimeSnapshot$CapabilityPresentation>;
        capabilityContentRevision(): number;
        inputRoutingRevision(): number;
        replaceLevels(levels: $Map_<$ResourceLocation_, $MachineLevel_>): boolean;
        replaceModifiers(modifiers: $Map_<string, $List_<$MachineModifier>>): boolean;
        hasLinkedPort(position: $BlockPos_): boolean;
        replaceModuleConnectionState(status: $ModuleConnectionStatus_, installedModuleCount: number): boolean;
        capabilityPresentationEpoch(): number;
        replaceUpgradeBuses(buses: $List_<$ComponentRuntime$UpgradeBusSnapshot_>): boolean;
        upgradeModifierUnits(): $Map<$ResourceLocation, number>;
        refreshUpgradeBuses(buses: $List_<$ComponentRuntime$UpgradeBusSnapshot_>): void;
        replaceLinkedPortPositions(positions: $Set_<$BlockPos_>): boolean;
        constructor();
        set modifiersAllowed(value: boolean);
    }
    export class $ControllerRuntimeSnapshot$CapabilityPresentation extends $Record {
        slots(): $List<$ControllerRuntimeSnapshot$StorageSlot>;
        capacity(): number;
        amount(): number;
        ioType(): $IOType;
        typeId(): $ResourceLocation;
        constructor(typeId: $ResourceLocation_, ioType: $IOType_, amount: number, capacity: number, slots: $List_<$ControllerRuntimeSnapshot$StorageSlot_>);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot$CapabilityPresentation}.
     */
    export type $ControllerRuntimeSnapshot$CapabilityPresentation_ = { ioType?: $IOType_, typeId?: $ResourceLocation_, capacity?: number, slots?: $List_<$ControllerRuntimeSnapshot$StorageSlot_>, amount?: number,  } | [ioType?: $IOType_, typeId?: $ResourceLocation_, capacity?: number, slots?: $List_<$ControllerRuntimeSnapshot$StorageSlot_>, amount?: number, ];
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
        position(): $BlockPos;
        tags(): $List<string>;
        ioType(): $IOType;
        kindId(): string;
        constructor(position: $BlockPos_, kindId: string, ioType: $IOType_, tags: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ControllerRuntimeSnapshot$ComponentPresentation}.
     */
    export type $ControllerRuntimeSnapshot$ComponentPresentation_ = { kindId?: string, tags?: $List_<string>, position?: $BlockPos_, ioType?: $IOType_,  } | [kindId?: string, tags?: $List_<string>, position?: $BlockPos_, ioType?: $IOType_, ];
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
        static empty(): $FactorySnapshot;
        failure(): $ExecutionStatus;
        active(): boolean;
        parallelSlots(): number;
        paused(): boolean;
        maxParallelism(): number;
        machineId(): string;
        formed(): boolean;
        recipePoolId(): string;
        installedModuleCount(): number;
        machineName(): string;
        activeLaneCount(): number;
        matchedStage(): number;
        presentationLanes(): $List<$FactoryRuntime$ThreadSnapshot>;
        connectedHostId(): string;
        foundLevelIds(): $List<string>;
        controllerRole(): number;
        stageCount(): number;
        laneLimit(): number;
        lanes(): $List<$CraftingStateSnapshot>;
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number, machineId: string, recipePoolId: string, controllerRole: number, connectedHostId: string, installedModuleCount: number);
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number, machineId: string, recipePoolId: string);
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number);
        constructor(formed: boolean, active: boolean, lanes: $List_<$CraftingStateSnapshot_>, laneLimit: number, activeLaneCount: number, maxParallelism: number, paused: boolean, presentationLanes: $List_<$FactoryRuntime$ThreadSnapshot_>, machineName: string, parallelSlots: number, failure: $ExecutionStatus_, foundLevelIds: $List_<string>, matchedStage: number, stageCount: number, machineId: string, recipePoolId: string, controllerRole: number, connectedHostId: string);
    }
    /**
     * Values that may be interpreted as {@link $FactorySnapshot}.
     */
    export type $FactorySnapshot_ = { connectedHostId?: string, machineId?: string, controllerRole?: number, activeLaneCount?: number, parallelSlots?: number, lanes?: $List_<$CraftingStateSnapshot_>, foundLevelIds?: $List_<string>, presentationLanes?: $List_<$FactoryRuntime$ThreadSnapshot_>, paused?: boolean, laneLimit?: number, machineName?: string, stageCount?: number, formed?: boolean, active?: boolean, maxParallelism?: number, matchedStage?: number, recipePoolId?: string, installedModuleCount?: number, failure?: $ExecutionStatus_,  } | [connectedHostId?: string, machineId?: string, controllerRole?: number, activeLaneCount?: number, parallelSlots?: number, lanes?: $List_<$CraftingStateSnapshot_>, foundLevelIds?: $List_<string>, presentationLanes?: $List_<$FactoryRuntime$ThreadSnapshot_>, paused?: boolean, laneLimit?: number, machineName?: string, stageCount?: number, formed?: boolean, active?: boolean, maxParallelism?: number, matchedStage?: number, recipePoolId?: string, installedModuleCount?: number, failure?: $ExecutionStatus_, ];
    export class $JadeTextSnapshot$Line extends $Record {
        text(): $Component;
        lineId(): $ResourceLocation;
        constructor(lineId: $ResourceLocation_, text: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $JadeTextSnapshot$Line}.
     */
    export type $JadeTextSnapshot$Line_ = { lineId?: $ResourceLocation_, text?: $Component_,  } | [lineId?: $ResourceLocation_, text?: $Component_, ];
    export class $ControllerScreenTextSnapshot extends $Record {
        lines(): $List<$ControllerScreenTextSnapshot$Line>;
        revision(): number;
        constructor(revision: number, lines: $List_<$ControllerScreenTextSnapshot$Line_>);
    }
    /**
     * Values that may be interpreted as {@link $ControllerScreenTextSnapshot}.
     */
    export type $ControllerScreenTextSnapshot_ = { lines?: $List_<$ControllerScreenTextSnapshot$Line_>, revision?: number,  } | [lines?: $List_<$ControllerScreenTextSnapshot$Line_>, revision?: number, ];
    export class $ControllerScreenTextSnapshot$Line extends $Record {
        scope(): $ControllerScreenTextScope;
        text(): $Component;
        lineId(): $ResourceLocation;
        constructor(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, text: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $ControllerScreenTextSnapshot$Line}.
     */
    export type $ControllerScreenTextSnapshot$Line_ = { lineId?: $ResourceLocation_, scope?: $ControllerScreenTextScope_, text?: $Component_,  } | [lineId?: $ResourceLocation_, scope?: $ControllerScreenTextScope_, text?: $Component_, ];
}
