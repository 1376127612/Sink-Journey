import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $InputRoutingFacet_, $InputRoutingFacet } from "@package/cn/howxu/mmcr/api/capability/facet";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $RecipeModifier$IOType_ } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $List, $Map_, $Set_, $List_, $Map } from "@package/java/util";
import { $ExecutionStatus, $ExecutionStatus_ } from "@package/cn/howxu/mmcr/api/capability/status";
import { $RequirementHandlerSupport$Sampling } from "@package/cn/howxu/mmcr/api/recipe/requirement";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $NativeReservationAccess } from "@package/cn/howxu/mmcr/internal/capability";
import { $InputScope, $InputScope_ } from "@package/cn/howxu/mmcr/api/recipe";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $LongValueStorage } from "@package/cn/howxu/mmcr/api/capability/storage";

declare module "@package/cn/howxu/mmcr/api/capability/plan" {
    export class $PlanningResult extends $Record {
        successful(): boolean;
        plan(): $CraftingPlan;
        failureRequirementIndex(): number;
        failure(): $ExecutionStatus;
        outputSimulations(): $List<$OutputSimulation>;
        constructor(plan: $CraftingPlan, failure: $ExecutionStatus_);
        constructor(plan: $CraftingPlan, failure: $ExecutionStatus_, outputSimulations: $List_<$OutputSimulation_>, failureRequirementIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $PlanningResult}.
     */
    export type $PlanningResult_ = { outputSimulations?: $List_<$OutputSimulation_>, plan?: $CraftingPlan, failure?: $ExecutionStatus_, failureRequirementIndex?: number,  } | [outputSimulations?: $List_<$OutputSimulation_>, plan?: $CraftingPlan, failure?: $ExecutionStatus_, failureRequirementIndex?: number, ];
    export class $OutputSimulation extends $Record {
        accepted(): number;
        requested(): number;
        fit(): $OutputFit;
        constructor(requested: number, accepted: number, fit: $OutputFit_);
    }
    /**
     * Values that may be interpreted as {@link $OutputSimulation}.
     */
    export type $OutputSimulation_ = { accepted?: number, fit?: $OutputFit_, requested?: number,  } | [accepted?: number, fit?: $OutputFit_, requested?: number, ];
    export class $PlanningContext extends $Record {
        sampling(): $RequirementHandlerSupport$Sampling;
        forScope(scope: $InputScope_, sampling: $RequirementHandlerSupport$Sampling): $PlanningContext;
        outputPolicy(): $OutputPolicy;
        outputPolicies(): $Map<number, $OutputPolicy>;
        reservationOwner(): $Object;
        inputRouting(): $InputRoutingFacet;
        forRequirement(index: number, reservations: $PlanningReservations): $PlanningContext;
        requestedParallelism(): number;
        inputScope(): $InputScope;
        allowPartialOutputs(): boolean;
        requirementIndex(): number;
        reservations(): $PlanningReservations;
        constructor(requestedParallelism: number, requirementIndex: number, allowPartialOutputs: boolean, reservations: $PlanningReservations);
        constructor(requestedParallelism: number, requirementIndex: number, allowPartialOutputs: boolean, reservations: $PlanningReservations, outputPolicies: $Map_<number, $OutputPolicy_>, reservationOwner: $Object);
        constructor(requestedParallelism: number, requirementIndex: number, allowPartialOutputs: boolean);
        constructor(requestedParallelism: number, requirementIndex: number);
        constructor(requestedParallelism: number, requirementIndex: number, allowPartialOutputs: boolean, reservations: $PlanningReservations, outputPolicies: $Map_<number, $OutputPolicy_>, inputRouting: $InputRoutingFacet_, inputScope: $InputScope_, sampling: $RequirementHandlerSupport$Sampling);
        constructor(requestedParallelism: number, requirementIndex: number, outputPolicies: $Map_<number, $OutputPolicy_>);
        constructor(requestedParallelism: number, requirementIndex: number, allowPartialOutputs: boolean, reservations: $PlanningReservations, outputPolicies: $Map_<number, $OutputPolicy_>);
        constructor(requestedParallelism: number, requirementIndex: number, allowPartialOutputs: boolean, reservations: $PlanningReservations, outputPolicies: $Map_<number, $OutputPolicy_>, inputRouting: $InputRoutingFacet_, inputScope: $InputScope_, sampling: $RequirementHandlerSupport$Sampling, reservationOwner: $Object);
    }
    /**
     * Values that may be interpreted as {@link $PlanningContext}.
     */
    export type $PlanningContext_ = { requirementIndex?: number, sampling?: $RequirementHandlerSupport$Sampling, requestedParallelism?: number, allowPartialOutputs?: boolean, outputPolicies?: $Map_<number, $OutputPolicy_>, inputScope?: $InputScope_, reservations?: $PlanningReservations, reservationOwner?: $Object, inputRouting?: $InputRoutingFacet_,  } | [requirementIndex?: number, sampling?: $RequirementHandlerSupport$Sampling, requestedParallelism?: number, allowPartialOutputs?: boolean, outputPolicies?: $Map_<number, $OutputPolicy_>, inputScope?: $InputScope_, reservations?: $PlanningReservations, reservationOwner?: $Object, inputRouting?: $InputRoutingFacet_, ];
    export class $RequirementPlan extends $Record {
        successful(): boolean;
        operationFactory(): $RequirementPlan$OperationFactory;
        reservationResult(parallelism: number, reservations: $PlanningReservations): $RequirementPlan$ReservationResult;
        preparedAt(parallelism: number): $RequirementPlan;
        static withOutputSimulation(requirementIndex: number, maxParallelism: number, operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, outputSimulation: $OutputSimulation_): $RequirementPlan;
        preparedParallelism(): number;
        requirementIndex(): number;
        outputSimulation(): $OutputSimulation;
        reservationFactory(): $RequirementPlan$ReservationFactory;
        maxParallelism(): number;
        failure(): $ExecutionStatus;
        materialize(parallelism: number, reservations: $PlanningReservations, unsafeOperationFailure: $ExecutionStatus_): $RequirementPlan;
        reserve(parallelism: number, reservations: $PlanningReservations): $ExecutionStatus;
        operations(): $List<$CapabilityOperation>;
        constructor(requirementIndex: number, maxParallelism: number, operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_);
        constructor(requirementIndex: number, maxParallelism: number, operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, operationFactory: $RequirementPlan$OperationFactory_, reservationFactory: $RequirementPlan$ReservationFactory_);
        constructor(requirementIndex: number, maxParallelism: number, operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, operationFactory: $RequirementPlan$OperationFactory_, reservationFactory: $RequirementPlan$ReservationFactory_, preparedParallelism: number);
        constructor(requirementIndex: number, maxParallelism: number, operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, operationFactory: $RequirementPlan$OperationFactory_);
        constructor(requirementIndex: number, maxParallelism: number, operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, outputSimulation: $OutputSimulation_, operationFactory: $RequirementPlan$OperationFactory_, reservationFactory: $RequirementPlan$ReservationFactory_, preparedParallelism: number);
    }
    /**
     * Values that may be interpreted as {@link $RequirementPlan}.
     */
    export type $RequirementPlan_ = { maxParallelism?: number, outputSimulation?: $OutputSimulation_, operationFactory?: $RequirementPlan$OperationFactory_, preparedParallelism?: number, requirementIndex?: number, reservationFactory?: $RequirementPlan$ReservationFactory_, operations?: $List_<$CapabilityOperation_>, failure?: $ExecutionStatus_,  } | [maxParallelism?: number, outputSimulation?: $OutputSimulation_, operationFactory?: $RequirementPlan$OperationFactory_, preparedParallelism?: number, requirementIndex?: number, reservationFactory?: $RequirementPlan$ReservationFactory_, operations?: $List_<$CapabilityOperation_>, failure?: $ExecutionStatus_, ];
    export class $OutputPolicy extends $Enum<$OutputPolicy> {
        static values(): $OutputPolicy[];
        static valueOf(name: string): $OutputPolicy;
        static ALLOW_PARTIAL: $OutputPolicy;
        static REQUIRE_FULL: $OutputPolicy;
    }
    /**
     * Values that may be interpreted as {@link $OutputPolicy}.
     */
    export type $OutputPolicy_ = "require_full" | "allow_partial";
    export class $RequirementPlan$ReservationResult extends $Record {
        outputSimulation(): $OutputSimulation;
        failure(): $ExecutionStatus;
        constructor(failure: $ExecutionStatus_, outputSimulation: $OutputSimulation_);
    }
    /**
     * Values that may be interpreted as {@link $RequirementPlan$ReservationResult}.
     */
    export type $RequirementPlan$ReservationResult_ = { outputSimulation?: $OutputSimulation_, failure?: $ExecutionStatus_,  } | [outputSimulation?: $OutputSimulation_, failure?: $ExecutionStatus_, ];
    export class $PlanningReservations {
        fluidAmount(handler: $IFluidHandler, tank: number): number;
        fluid(handler: $IFluidHandler, tank: number): $FluidStack;
        reservedStress(identity: $Object): number;
        creditStress(identity: $Object, owner: $Object, index: number, amount: number): boolean;
        reserveStress(identity: $Object, amount: number, available: number): boolean;
        creditedStress(identity: $Object): number;
        valueAvailable(storage: $Object, capacity: number, amount: number, insert: boolean): number;
        valueAvailable(storage: $LongValueStorage, insert: boolean): number;
        valueAvailable(storage: $IEnergyStorage, insert: boolean): number;
        reserveValueTotal(identity: $Object, capacity: number, currentAmount: number, amount: number, insert: boolean): boolean;
        reserveValueTotal(storage: $IEnergyStorage, amount: number, insert: boolean): boolean;
        reserveValueTotal(storage: $LongValueStorage, amount: number, insert: boolean): boolean;
        itemAmount(handler: $IItemHandler, slot: number): number;
        acceptsGeneratedRpm(identity: $Object, rpm: number): boolean;
        reserveGeneratedRpm(identity: $Object, rpm: number): boolean;
        nativeOutputAvailable(handler: $Object, resource: $Object): number;
        reserveNativeInsert(identity: $Object, slot: $Object, key: $Object, storedKey: $Object, storedAmount: number, capacity: number, amount: number): boolean;
        reserveNativeInsert(access: $NativeReservationAccess, slot: number, key: $Object, capacity: number, amount: number): boolean;
        nativeAmount(identity: $Object, slot: $Object, storedAmount: number): number;
        reserveNativeExtract(identity: $Object, slot: $Object, key: $Object, storedKey: $Object, storedAmount: number, amount: number): boolean;
        reserveOutput(identity: $Object, key: $Object, amount: number): boolean;
        nativeKey(identity: $Object, slot: $Object, storedKey: $Object): $Object;
        copy(): $PlanningReservations;
        item(handler: $IItemHandler, slot: number): $ItemStack;
        outputAvailable(identity: $Object, key: $Object, capacity: number): number;
        reserveValue(storage: $LongValueStorage, amount: number, insert: boolean): boolean;
        reserveValue(storage: $IEnergyStorage, amount: number, insert: boolean): boolean;
        reserveItemInsert(handler: $IItemHandler, slot: number, stack: $ItemStack_, amount: number, capacity: number): boolean;
        reserveItemExtract(handler: $IItemHandler, slot: number, stack: $ItemStack_, amount: number): boolean;
        reserveFluidInsert(handler: $IFluidHandler, tank: number, stack: $FluidStack_, amount: number, capacity: number): boolean;
        reserveFluidExtract(handler: $IFluidHandler, tank: number, stack: $FluidStack_, amount: number): boolean;
        constructor();
    }
    export class $CapabilityResult extends $Record {
        static successful(): $CapabilityResult;
        status(): $ExecutionStatus;
        static failure(status: $ExecutionStatus_): $CapabilityResult;
        success(): boolean;
        constructor(success: boolean, status: $ExecutionStatus_);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityResult}.
     */
    export type $CapabilityResult_ = { success?: boolean, status?: $ExecutionStatus_,  } | [success?: boolean, status?: $ExecutionStatus_, ];
    export class $CraftingPlan {
        requirements(): $List<$RequirementPlan>;
        inputScope(): $InputScope;
        commit(): boolean;
        failure(): $ExecutionStatus;
        parallelism(): number;
        commitOutputs(): boolean;
        commitRuntime(beforeNativeExecution: $Runnable_, executionValid: $BooleanSupplier_): boolean;
        outputSimulations(): $List<$OutputSimulation>;
        wasNativeExecuted(requirementIndex: number): boolean;
        hasOperations(requirementIndex: number): boolean;
        inputRoutingRevision(): number;
        commitInputsRuntime(excludedRequirementIndexes: $Set_<number>, beforeNativeExecution: $Runnable_, executionValid: $BooleanSupplier_): boolean;
        commitInputs(): boolean;
        commitInputsExcept(excludedRequirementIndexes: $Set_<number>): boolean;
        constructor(requirements: $List_<$RequirementPlan_>, parallelism: number);
        constructor(requirements: $List_<$RequirementPlan_>, parallelism: number, directions: $Map_<number, $RecipeModifier$IOType_>, inputScope: $InputScope_, inputRoutingRevision: number);
        constructor(requirements: $List_<$RequirementPlan_>, parallelism: number, directions: $Map_<number, $RecipeModifier$IOType_>);
    }
    export class $OutputFit extends $Enum<$OutputFit> {
        static values(): $OutputFit[];
        static valueOf(name: string): $OutputFit;
        static PARTIAL: $OutputFit;
        static NONE: $OutputFit;
        static FULL: $OutputFit;
    }
    /**
     * Values that may be interpreted as {@link $OutputFit}.
     */
    export type $OutputFit_ = "full" | "partial" | "none";
    export class $RequirementPlan$OperationFactory {
    }
    export interface $RequirementPlan$OperationFactory {
        create(parallelism: number, reservations: $PlanningReservations): $RequirementPlan$OperationPlan;
    }
    /**
     * Values that may be interpreted as {@link $RequirementPlan$OperationFactory}.
     */
    export type $RequirementPlan$OperationFactory_ = ((parallelism: number, reservations: $PlanningReservations) => $RequirementPlan$OperationPlan_);
    export class $CapabilityOperation {
    }
    export interface $CapabilityOperation {
        forParallelism(parallelism: number): $CapabilityOperation;
        commit(): $CapabilityResult;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityOperation}.
     */
    export type $CapabilityOperation_ = (() => $CapabilityResult_);
    export class $RequirementPlan$ReservationFactory {
    }
    export interface $RequirementPlan$ReservationFactory {
        reserveResult(parallelism: number, reservations: $PlanningReservations): $RequirementPlan$ReservationResult;
        reserve(parallelism: number, reservations: $PlanningReservations): $ExecutionStatus;
    }
    /**
     * Values that may be interpreted as {@link $RequirementPlan$ReservationFactory}.
     */
    export type $RequirementPlan$ReservationFactory_ = ((parallelism: number, reservations: $PlanningReservations) => $ExecutionStatus_);
}
