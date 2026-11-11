import { $AsyncCapabilityOperation, $AsyncCapabilitySnapshot, $AsyncCapabilityRequest, $AsyncCapabilityPlanner } from "@package/cn/howxu/mmcr/api/capability/async";
import { $MachineCapability, $CapabilitySnapshot_, $CapabilitySnapshot } from "@package/cn/howxu/mmcr/api/capability";
import { $IOType, $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $InputRoutingFacet_, $InputRoutingFacet } from "@package/cn/howxu/mmcr/api/capability/facet";
import { $MachineModifier } from "@package/cn/howxu/mmcr/api/machine/modifier";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $InputScope, $MachineRecipe, $InputScope_ } from "@package/cn/howxu/mmcr/api/recipe";
import { $FactoryRuntime, $ControllerRuntimeSnapshot_, $ControllerRuntimeSnapshot } from "@package/cn/howxu/mmcr/internal/runtime";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $OutputPolicy, $OutputPolicy_ } from "@package/cn/howxu/mmcr/api/capability/plan";

declare module "@package/cn/howxu/mmcr/internal/recipe" {
    export class $FactorySearchContext extends $Record {
        modifiers(): $List<$MachineModifier>;
        snapshot(): $ControllerRuntimeSnapshot;
        capabilities(): $List<$MachineCapability>;
        maxParallelism(): number;
        capabilitySnapshot(): $CapabilitySnapshot;
        gameTime(): number;
        resourceAvailabilityEpoch(): number;
        catalogVersion(): number;
        orderedCandidates(): $List<$MachineRecipe>;
        constructor(snapshot: $ControllerRuntimeSnapshot_, orderedCandidates: $List_<$MachineRecipe>, capabilitySnapshot: $CapabilitySnapshot_, modifiers: $List_<$MachineModifier>, catalogVersion: number, resourceAvailabilityEpoch: number, maxParallelism: number, gameTime: number);
        constructor(snapshot: $ControllerRuntimeSnapshot_, orderedCandidates: $List_<$MachineRecipe>, capabilities: $List_<$MachineCapability>, modifiers: $List_<$MachineModifier>, catalogVersion: number, resourceAvailabilityEpoch: number, maxParallelism: number, gameTime: number);
    }
    /**
     * Values that may be interpreted as {@link $FactorySearchContext}.
     */
    export type $FactorySearchContext_ = { resourceAvailabilityEpoch?: number, catalogVersion?: number, modifiers?: $List_<$MachineModifier>, orderedCandidates?: $List_<$MachineRecipe>, capabilitySnapshot?: $CapabilitySnapshot_, maxParallelism?: number, snapshot?: $ControllerRuntimeSnapshot_, gameTime?: number,  } | [resourceAvailabilityEpoch?: number, catalogVersion?: number, modifiers?: $List_<$MachineModifier>, orderedCandidates?: $List_<$MachineRecipe>, capabilitySnapshot?: $CapabilitySnapshot_, maxParallelism?: number, snapshot?: $ControllerRuntimeSnapshot_, gameTime?: number, ];
    export class $FactoryRecipeScheduler {
        setThreadLimit(threadLimit: number): void;
        threadLimit(): number;
        laneCapacity(): number;
        hasCapacity(): boolean;
        availableCandidates(candidates: $List_<$MachineRecipe>): $List<$MachineRecipe>;
        constructor(threadLimit: number, factoryRuntime: $FactoryRuntime);
    }
    export class $AsyncRequirementPlanner$PlannedOperation extends $Record {
        operation(): $AsyncCapabilityOperation;
        requirementIndex(): number;
        capabilityIndex(): number;
        constructor(requirementIndex: number, capabilityIndex: number, operation: $AsyncCapabilityOperation);
    }
    /**
     * Values that may be interpreted as {@link $AsyncRequirementPlanner$PlannedOperation}.
     */
    export type $AsyncRequirementPlanner$PlannedOperation_ = { requirementIndex?: number, operation?: $AsyncCapabilityOperation, capabilityIndex?: number,  } | [requirementIndex?: number, operation?: $AsyncCapabilityOperation, capabilityIndex?: number, ];
    export class $CompiledRecipeProgram$Stage extends $Record {
        static empty(): $CompiledRecipeProgram$Stage;
        inputScope(): $InputScope;
        outputPolicies(): $List<$OutputPolicy>;
        requirements(): $List<$AsyncRequirementPlanner$Requirement>;
        fallbackIndices(): $List<number>;
        requiresCompatibility(): boolean;
        constructor(requirements: $List_<$AsyncRequirementPlanner$Requirement_>, fallbackIndices: $List_<number>, outputPolicies: $List_<$OutputPolicy_>, inputScope: $InputScope_);
        constructor(requirements: $List_<$AsyncRequirementPlanner$Requirement_>, fallbackIndices: $List_<number>, outputPolicies: $List_<$OutputPolicy_>);
    }
    /**
     * Values that may be interpreted as {@link $CompiledRecipeProgram$Stage}.
     */
    export type $CompiledRecipeProgram$Stage_ = { fallbackIndices?: $List_<number>, inputScope?: $InputScope_, outputPolicies?: $List_<$OutputPolicy_>, requirements?: $List_<$AsyncRequirementPlanner$Requirement_>,  } | [fallbackIndices?: $List_<number>, inputScope?: $InputScope_, outputPolicies?: $List_<$OutputPolicy_>, requirements?: $List_<$AsyncRequirementPlanner$Requirement_>, ];
    export class $CompiledRecipeProgram extends $Record {
        requiresMainThreadPreparation(): boolean;
        finish(): $CompiledRecipeProgram$Stage;
        start(): $CompiledRecipeProgram$Stage;
        duration(): number;
        parallelism(): number;
        versions(): $CompiledRecipeProgram$VersionStamp;
        tick(): $CompiledRecipeProgram$Stage;
        recipeId(): $ResourceLocation;
        constructor(recipeId: $ResourceLocation_, duration: number, parallelism: number, versions: $CompiledRecipeProgram$VersionStamp_, start: $CompiledRecipeProgram$Stage_, tick: $CompiledRecipeProgram$Stage_, finish: $CompiledRecipeProgram$Stage_, requiresMainThreadPreparation: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledRecipeProgram}.
     */
    export type $CompiledRecipeProgram_ = { tick?: $CompiledRecipeProgram$Stage_, parallelism?: number, versions?: $CompiledRecipeProgram$VersionStamp_, recipeId?: $ResourceLocation_, requiresMainThreadPreparation?: boolean, duration?: number, finish?: $CompiledRecipeProgram$Stage_, start?: $CompiledRecipeProgram$Stage_,  } | [tick?: $CompiledRecipeProgram$Stage_, parallelism?: number, versions?: $CompiledRecipeProgram$VersionStamp_, recipeId?: $ResourceLocation_, requiresMainThreadPreparation?: boolean, duration?: number, finish?: $CompiledRecipeProgram$Stage_, start?: $CompiledRecipeProgram$Stage_, ];
    export class $AsyncRequirementPlanner$Capability extends $Record {
        snapshot(): $AsyncCapabilitySnapshot;
        directions(): $Set<$IOType>;
        capabilityId(): $ResourceLocation;
        planner(): $AsyncCapabilityPlanner;
        sourceCapabilityIndex(): number;
        constructor(planner: $AsyncCapabilityPlanner, snapshot: $AsyncCapabilitySnapshot, directions: $Set_<$IOType_>);
        constructor(planner: $AsyncCapabilityPlanner, snapshot: $AsyncCapabilitySnapshot);
        constructor(planner: $AsyncCapabilityPlanner, snapshot: $AsyncCapabilitySnapshot, directions: $Set_<$IOType_>, sourceCapabilityIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $AsyncRequirementPlanner$Capability}.
     */
    export type $AsyncRequirementPlanner$Capability_ = { sourceCapabilityIndex?: number, snapshot?: $AsyncCapabilitySnapshot, directions?: $Set_<$IOType_>, planner?: $AsyncCapabilityPlanner,  } | [sourceCapabilityIndex?: number, snapshot?: $AsyncCapabilitySnapshot, directions?: $Set_<$IOType_>, planner?: $AsyncCapabilityPlanner, ];
    export class $CompiledRecipeProgram$ExecutionIdentity extends $Record {
        laneId(): string;
        lifecycleEpoch(): number;
        controllerInstance(): number;
        executionId(): number;
        constructor(controllerInstance: number, lifecycleEpoch: number, laneId: string, executionId: number);
    }
    /**
     * Values that may be interpreted as {@link $CompiledRecipeProgram$ExecutionIdentity}.
     */
    export type $CompiledRecipeProgram$ExecutionIdentity_ = { laneId?: string, executionId?: number, controllerInstance?: number, lifecycleEpoch?: number,  } | [laneId?: string, executionId?: number, controllerInstance?: number, lifecycleEpoch?: number, ];
    export class $AsyncRequirementPlanner$Requirement extends $Record {
        index(): number;
        direction(): $IOType;
        requests(): $List<$AsyncCapabilityRequest>;
        amount(): number;
        constructor(index: number, amount: number, direction: $IOType_, requests: $List_<$AsyncCapabilityRequest>);
        constructor(index: number, amount: number, requests: $List_<$AsyncCapabilityRequest>);
    }
    /**
     * Values that may be interpreted as {@link $AsyncRequirementPlanner$Requirement}.
     */
    export type $AsyncRequirementPlanner$Requirement_ = { direction?: $IOType_, requests?: $List_<$AsyncCapabilityRequest>, index?: number, amount?: number,  } | [direction?: $IOType_, requests?: $List_<$AsyncCapabilityRequest>, index?: number, amount?: number, ];
    export class $AsyncRequirementPlanner$PlanResult extends $Record {
        operations(): $List<$AsyncRequirementPlanner$PlannedOperation>;
        mainThreadRequirements(): $List<number>;
        constructor(operations: $List_<$AsyncRequirementPlanner$PlannedOperation_>, mainThreadRequirements: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $AsyncRequirementPlanner$PlanResult}.
     */
    export type $AsyncRequirementPlanner$PlanResult_ = { mainThreadRequirements?: $List_<number>, operations?: $List_<$AsyncRequirementPlanner$PlannedOperation_>,  } | [mainThreadRequirements?: $List_<number>, operations?: $List_<$AsyncRequirementPlanner$PlannedOperation_>, ];
    export class $CompiledRecipeProgram$VersionStamp extends $Record {
        catalog(): number;
        capability(): number;
        effective(): number;
        structure(): number;
        domainGeneration(): number;
        domainId(): number;
        constructor(catalog: number, structure: number, capability: number, effective: number, domainId: number, domainGeneration: number);
    }
    /**
     * Values that may be interpreted as {@link $CompiledRecipeProgram$VersionStamp}.
     */
    export type $CompiledRecipeProgram$VersionStamp_ = { domainGeneration?: number, structure?: number, effective?: number, catalog?: number, capability?: number, domainId?: number,  } | [domainGeneration?: number, structure?: number, effective?: number, catalog?: number, capability?: number, domainId?: number, ];
    export class $RecipeThread$StartResult extends $Enum<$RecipeThread$StartResult> {
        static values(): $RecipeThread$StartResult[];
        static valueOf(name: string): $RecipeThread$StartResult;
        ownsStart(): boolean;
        static CANCELLED: $RecipeThread$StartResult;
        static FAILED: $RecipeThread$StartResult;
        static STARTED: $RecipeThread$StartResult;
        static NO_MATCH: $RecipeThread$StartResult;
        static PENDING: $RecipeThread$StartResult;
        static DEFERRED: $RecipeThread$StartResult;
    }
    /**
     * Values that may be interpreted as {@link $RecipeThread$StartResult}.
     */
    export type $RecipeThread$StartResult_ = "started" | "pending" | "deferred" | "no_match" | "failed" | "cancelled";
    export class $AsyncRequirementPlanner$PreparedPlan extends $Record {
        initialMainThreadRequirements(): $List<number>;
        capabilities(): $List<$AsyncRequirementPlanner$Capability>;
        inputScope(): $InputScope;
        routing(): $InputRoutingFacet;
        requirements(): $List<$AsyncRequirementPlanner$Requirement>;
        plan(): $AsyncRequirementPlanner$PlanResult;
        constructor(requirements: $List_<$AsyncRequirementPlanner$Requirement_>, capabilities: $List_<$AsyncRequirementPlanner$Capability_>, initialMainThreadRequirements: $List_<number>);
        constructor(requirements: $List_<$AsyncRequirementPlanner$Requirement_>, capabilities: $List_<$AsyncRequirementPlanner$Capability_>, initialMainThreadRequirements: $List_<number>, routing: $InputRoutingFacet_, inputScope: $InputScope_);
    }
    /**
     * Values that may be interpreted as {@link $AsyncRequirementPlanner$PreparedPlan}.
     */
    export type $AsyncRequirementPlanner$PreparedPlan_ = { inputScope?: $InputScope_, capabilities?: $List_<$AsyncRequirementPlanner$Capability_>, requirements?: $List_<$AsyncRequirementPlanner$Requirement_>, initialMainThreadRequirements?: $List_<number>, routing?: $InputRoutingFacet_,  } | [inputScope?: $InputScope_, capabilities?: $List_<$AsyncRequirementPlanner$Capability_>, requirements?: $List_<$AsyncRequirementPlanner$Requirement_>, initialMainThreadRequirements?: $List_<number>, routing?: $InputRoutingFacet_, ];
}
