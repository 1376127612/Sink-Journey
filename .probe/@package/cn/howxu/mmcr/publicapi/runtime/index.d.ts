import { $RecipeAdjustmentSpec } from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $DataStore$Transaction } from "@package/cn/howxu/mmcr/publicapi/data";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Consumer_ } from "@package/java/util/function";
import { $IoDisplay } from "@package/cn/howxu/mmcr/publicapi/presentation";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RequirementSpec } from "@package/cn/howxu/mmcr/publicapi/recipe/requirement";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/publicapi/runtime" {
    export class $IoSimulation {
    }
    export interface $IoSimulation {
        failure(): $RuntimeFailure;
        outputs(): $List<$OutputAcceptance>;
        energySatisfied(): boolean;
        inputsSatisfied(): boolean;
    }
    export class $MachineView {
    }
    export interface $MachineView {
        machineId(): $ResourceLocation;
        controllerPos(): $BlockPos;
        formed(): boolean;
        countStructureBlocks(block: $Block_): number;
        countStructureBlocks(blockId: $ResourceLocation_): number;
    }
    export class $AirState extends $Record {
        position(): $BlockPos;
        outputCapacity(): number;
        volume(): number;
        criticalPressure(): number;
        air(): number;
        dangerPressure(): number;
        pressure(): number;
        constructor(position: $BlockPos_, air: number, volume: number, dangerPressure: number, criticalPressure: number);
    }
    /**
     * Values that may be interpreted as {@link $AirState}.
     */
    export type $AirState_ = { position?: $BlockPos_, dangerPressure?: number, volume?: number, air?: number, criticalPressure?: number,  } | [position?: $BlockPos_, dangerPressure?: number, volume?: number, air?: number, criticalPressure?: number, ];
    export class $ResourceAmount<R> extends $Record {
        resource(): R;
        amount(): number;
        constructor(resource: R, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $ResourceAmount}.
     */
    export type $ResourceAmount_<R> = { resource?: any, amount?: number,  } | [resource?: any, amount?: number, ];
    export class $RecipeFailureMode extends $Enum<$RecipeFailureMode> {
        static values(): $RecipeFailureMode[];
        static valueOf(name: string): $RecipeFailureMode;
        static STILL: $RecipeFailureMode;
        static DECREASE: $RecipeFailureMode;
        static RESET: $RecipeFailureMode;
    }
    /**
     * Values that may be interpreted as {@link $RecipeFailureMode}.
     */
    export type $RecipeFailureMode_ = "reset" | "still" | "decrease";
    export class $HeatState extends $Record {
        temperature(): number;
        heat(): number;
        heatCapacity(): number;
        constructor(heat: number, temperature: number, heatCapacity: number);
    }
    /**
     * Values that may be interpreted as {@link $HeatState}.
     */
    export type $HeatState_ = { temperature?: number, heat?: number, heatCapacity?: number,  } | [temperature?: number, heat?: number, heatCapacity?: number, ];
    export class $IoCommitResult {
    }
    export interface $IoCommitResult {
        failure(): $RuntimeFailure;
        successful(): boolean;
    }
    export class $RecipeExecutionView {
    }
    export interface $RecipeExecutionView {
        duration(): number;
        outputs(): $List<$OutputView>;
        requirements(): $List<$RequirementSpec>;
    }
    export class $FailureFrame {
    }
    export interface $FailureFrame {
        source(): $ResourceLocation;
        phase(): $FailurePhase;
        recipeId(): $ResourceLocation;
        requirementIndex(): number;
    }
    export class $IoSnapshot {
    }
    export interface $IoSnapshot {
        manaInput(): number;
        itemInputs(): $List<$ResourceAmount<$ItemStack>>;
        fluidInputs(): $List<$ResourceAmount<$FluidStack>>;
        itemAmount(ingredient: $Ingredient_): number;
        fluidAmount(ingredient: $FluidIngredient_): number;
        chemicalAmount(chemicalId: $ResourceLocation_): number;
        displays(): $List<$IoDisplay>;
        sourceInput(): number;
        energyInput(): number;
        airInputs(): $List<$AirState>;
        airOutputs(): $List<$AirState>;
        stressInputs(): $List<$StressState>;
        stressOutputs(): $List<$StressState>;
        chemicalInputs(): $List<$ResourceAmount<$ResourceLocation>>;
        smartInterfaceValues(): $Map<string, number>;
        chemicalOutputCapacity(chemicalId: $ResourceLocation_): number;
        sourceOutputCapacity(): number;
        energyOutputCapacity(): number;
        smartInterfaceValue(name: string): (number) | undefined;
        fluidOutputCapacity(stack: $FluidStack_): number;
        heatOutputs(): $List<$HeatState>;
        itemOutputCapacity(stack: $ItemStack_): number;
        manaOutputCapacity(): number;
        chemicalTagAmount(tagId: $ResourceLocation_): number;
        heatInputs(): $List<$HeatState>;
        forTags(requiredTags: $Set_<string>): $IoSnapshot;
    }
    export class $FailureSeverity extends $Enum<$FailureSeverity> {
        static values(): $FailureSeverity[];
        static valueOf(name: string): $FailureSeverity;
        static BLOCKED: $FailureSeverity;
        static INFO: $FailureSeverity;
        static FAILURE: $FailureSeverity;
    }
    /**
     * Values that may be interpreted as {@link $FailureSeverity}.
     */
    export type $FailureSeverity_ = "info" | "blocked" | "failure";
    export class $RecipeView {
    }
    export interface $RecipeView {
        cancelRecipeOnPerTickFailure(): boolean;
        modifiers(): $List<$RecipeAdjustmentSpec>;
        priority(): number;
        id(): $ResourceLocation;
        maxThreads(): number;
        tickTime(): number;
        outputs(): $List<$OutputView>;
        requirements(): $List<$RequirementSpec>;
        allowPartialOutputs(): boolean;
        recipePoolId(): $ResourceLocation;
        parallelized(): boolean;
        requiredHostIds(): $Set<$ResourceLocation>;
        runtimeMachineOutputs(): $List<$OutputView>;
        runtimeMachineOutputs(extraModifiers: $List_<$RecipeAdjustmentSpec>): $List<$OutputView>;
        runtimeRequirements(): $List<$RequirementSpec>;
        runtimeRequirements(extraModifiers: $List_<$RecipeAdjustmentSpec>): $List<$RequirementSpec>;
        runtimeRequirements(extraModifiers: $List_<$RecipeAdjustmentSpec>, energyMultiplier: number, outputMultiplier: number): $List<$RequirementSpec>;
    }
    export class $IoTransaction {
    }
    export interface $IoTransaction {
        commit(): $IoCommitResult;
        commit(writes: $Consumer_<$DataStore$Transaction>): $IoCommitResult;
        add(requirement: $RequirementSpec): $IoTransaction;
        view(): $IoSnapshot;
        simulate(): $IoSimulation;
        requirements(): $List<$RequirementSpec>;
        addOutput(requirement: $RequirementSpec, mode: $OutputMode_): $IoTransaction;
        addInput(requirement: $RequirementSpec): $IoTransaction;
        commitData(writes: $Consumer_<$DataStore$Transaction>): $IoCommitResult;
        outputSimulations(): $List<$OutputAcceptance>;
        energySatisfied(): boolean;
        inputsSatisfied(): boolean;
    }
    export class $RuntimeFailure {
    }
    export interface $RuntimeFailure {
        id(): $ResourceLocation;
        source(): $ResourceLocation;
        trace(): $List<$FailureFrame>;
        details(): $Map<string, string>;
        severity(): $FailureSeverity;
        reasonTranslationKey(): string;
        reasonPriority(): number;
        reasonId(): $ResourceLocation;
    }
    export class $OutputMode extends $Enum<$OutputMode> {
        static values(): $OutputMode[];
        static valueOf(name: string): $OutputMode;
        static ALLOW_PARTIAL: $OutputMode;
        static REQUIRE_FULL: $OutputMode;
    }
    /**
     * Values that may be interpreted as {@link $OutputMode}.
     */
    export type $OutputMode_ = "require_full" | "allow_partial";
    export class $OutputView {
    }
    export interface $OutputView {
        copy(): $OutputView;
        amount(): number;
        withChance(chance: number): $OutputView;
        chance(): number;
        applyModifiers(modifiers: $List_<$RecipeAdjustmentSpec>): $OutputView;
        serializedId(): string;
        kindId(): $ResourceLocation;
    }
    export class $StressState extends $Record {
        position(): $BlockPos;
        connected(): boolean;
        actualRpm(): number;
        networkCapacity(): number;
        networkStress(): number;
        theoreticalRpm(): number;
        baseContribution(): number;
        overstressed(): boolean;
        generatedRpm(): number;
        actualContribution(): number;
        constructor(position: $BlockPos_, actualRpm: number, theoreticalRpm: number, generatedRpm: number, baseContribution: number, actualContribution: number, networkCapacity: number, networkStress: number, connected: boolean, overstressed: boolean);
    }
    /**
     * Values that may be interpreted as {@link $StressState}.
     */
    export type $StressState_ = { actualRpm?: number, overstressed?: boolean, networkStress?: number, networkCapacity?: number, connected?: boolean, generatedRpm?: number, position?: $BlockPos_, baseContribution?: number, theoreticalRpm?: number, actualContribution?: number,  } | [actualRpm?: number, overstressed?: boolean, networkStress?: number, networkCapacity?: number, connected?: boolean, generatedRpm?: number, position?: $BlockPos_, baseContribution?: number, theoreticalRpm?: number, actualContribution?: number, ];
    export class $OutputAcceptance {
    }
    export interface $OutputAcceptance {
        requested(): number;
        fit(): $OutputFit;
        accepted(): number;
    }
}
