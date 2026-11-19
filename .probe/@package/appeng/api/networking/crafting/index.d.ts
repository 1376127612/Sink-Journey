import { $Level_ } from "@package/net/minecraft/world/level";
import { $AEKeyFilter_ } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Future } from "@package/java/util/concurrent";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGridNodeService, $IManagedGridNode, $IGridService, $IGridNode } from "@package/appeng/api/networking";
import { $CpuSelectionMode, $Actionable_ } from "@package/appeng/api/config";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $UUID, $List, $Map, $Set, $Collection } from "@package/java/util";
import { $IActionSource, $IActionHost } from "@package/appeng/api/networking/security";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/networking/crafting" {
    export class $ICraftingCPU {
    }
    export interface $ICraftingCPU {
        isBusy(): boolean;
        getCoProcessors(): number;
        getSelectionMode(): $CpuSelectionMode;
        getJobStatus(): $CraftingJobStatus;
        cancelJob(): void;
        getAvailableStorage(): number;
        getName(): $Component;
        get busy(): boolean;
        get coProcessors(): number;
        get selectionMode(): $CpuSelectionMode;
        get jobStatus(): $CraftingJobStatus;
        get availableStorage(): number;
        get name(): $Component;
    }
    export class $ICraftingPlan {
    }
    export interface $ICraftingPlan {
        emittedItems(): $KeyCounter;
        missingItems(): $KeyCounter;
        patternTimes(): $Map<$IPatternDetails, number>;
        multiplePaths(): boolean;
        finalOutput(): $GenericStack;
        usedItems(): $KeyCounter;
        bytes(): number;
        simulation(): boolean;
    }
    export class $ICraftingProvider {
        static requestUpdate(arg0: $IManagedGridNode): void;
    }
    export interface $ICraftingProvider extends $IGridNodeService {
        getPatternPriority(): number;
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[]): boolean;
        getEmitableItems(): $Set<$AEKey>;
        isBusy(): boolean;
        getAvailablePatterns(): $List<$IPatternDetails>;
        get patternPriority(): number;
        get emitableItems(): $Set<$AEKey>;
        get busy(): boolean;
        get availablePatterns(): $List<$IPatternDetails>;
    }
    export class $CraftingSubmitErrorCode extends $Enum<$CraftingSubmitErrorCode> {
        static values(): $CraftingSubmitErrorCode[];
        static valueOf(arg0: string): $CraftingSubmitErrorCode;
        static INCOMPLETE_PLAN: $CraftingSubmitErrorCode;
        static MISSING_INGREDIENT: $CraftingSubmitErrorCode;
        static NO_CPU_FOUND: $CraftingSubmitErrorCode;
        static CPU_BUSY: $CraftingSubmitErrorCode;
        static CPU_OFFLINE: $CraftingSubmitErrorCode;
        static CPU_TOO_SMALL: $CraftingSubmitErrorCode;
        static NO_SUITABLE_CPU_FOUND: $CraftingSubmitErrorCode;
    }
    /**
     * Values that may be interpreted as {@link $CraftingSubmitErrorCode}.
     */
    export type $CraftingSubmitErrorCode_ = "incomplete_plan" | "no_cpu_found" | "no_suitable_cpu_found" | "cpu_busy" | "cpu_offline" | "cpu_too_small" | "missing_ingredient";
    export class $ICraftingLink {
    }
    export interface $ICraftingLink {
        getCraftingID(): $UUID;
        isDone(): boolean;
        cancel(): void;
        isStandalone(): boolean;
        isCanceled(): boolean;
        writeToNBT(arg0: $CompoundTag_): void;
        get craftingID(): $UUID;
        get done(): boolean;
        get standalone(): boolean;
        get canceled(): boolean;
    }
    export class $CraftingJobStatus extends $Record {
        crafting(): $GenericStack;
        totalItems(): number;
        elapsedTimeNanos(): number;
        progress(): number;
        constructor(crafting: $GenericStack_, totalItems: number, progress: number, elapsedTimeNanos: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingJobStatus}.
     */
    export type $CraftingJobStatus_ = { totalItems?: number, crafting?: $GenericStack_, elapsedTimeNanos?: number, progress?: number,  } | [totalItems?: number, crafting?: $GenericStack_, elapsedTimeNanos?: number, progress?: number, ];
    export class $ICraftingRequester {
    }
    export interface $ICraftingRequester extends $IActionHost, $IGridNodeService {
        getRequestedJobs(): $ImmutableSet<$ICraftingLink>;
        insertCraftedItems(arg0: $ICraftingLink, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        jobStateChange(arg0: $ICraftingLink): void;
        get requestedJobs(): $ImmutableSet<$ICraftingLink>;
    }
    export class $ICraftingSimulationRequester {
    }
    export interface $ICraftingSimulationRequester {
        getGridNode(): $IGridNode;
        getActionSource(): $IActionSource;
        get gridNode(): $IGridNode;
        get actionSource(): $IActionSource;
    }
    /**
     * Values that may be interpreted as {@link $ICraftingSimulationRequester}.
     */
    export type $ICraftingSimulationRequester_ = (() => $IActionSource);
    export class $ICraftingService {
    }
    export interface $ICraftingService extends $IGridService {
        refreshNodeCraftingProvider(arg0: $IGridNode): void;
        getCpus(): $ImmutableSet<$ICraftingCPU>;
        getRequestedAmount(arg0: $AEKey): number;
        getCraftables(arg0: $AEKeyFilter_): $Set<$AEKey>;
        submitJob(arg0: $ICraftingPlan, arg1: $ICraftingRequester, arg2: $ICraftingCPU, arg3: boolean, arg4: $IActionSource): $ICraftingSubmitResult;
        beginCraftingCalculation(arg0: $Level_, arg1: $ICraftingSimulationRequester_, arg2: $AEKey, arg3: number, arg4: $CalculationStrategy_): $Future<$ICraftingPlan>;
        addGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        removeGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        refreshGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        getCraftingFor(arg0: $AEKey): $Collection<$IPatternDetails>;
        getFuzzyCraftable(arg0: $AEKey, arg1: $AEKeyFilter_): $AEKey;
        isRequesting(arg0: $AEKey): boolean;
        isRequestingAny(): boolean;
        canEmitFor(arg0: $AEKey): boolean;
        isCraftable(arg0: $AEKey): boolean;
        get cpus(): $ImmutableSet<$ICraftingCPU>;
        get requestingAny(): boolean;
    }
    export class $CalculationStrategy extends $Enum<$CalculationStrategy> {
        static values(): $CalculationStrategy[];
        static valueOf(arg0: string): $CalculationStrategy;
        static CRAFT_LESS: $CalculationStrategy;
        static REPORT_MISSING_ITEMS: $CalculationStrategy;
    }
    /**
     * Values that may be interpreted as {@link $CalculationStrategy}.
     */
    export type $CalculationStrategy_ = "report_missing_items" | "craft_less";
    export class $ICraftingSubmitResult {
    }
    export interface $ICraftingSubmitResult {
        successful(): boolean;
        errorDetail(): $Object;
        link(): $ICraftingLink;
        errorCode(): $CraftingSubmitErrorCode;
    }
}
