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
        inputsSatisfied(): boolean;
        energySatisfied(): boolean;
    }
    export class $MachineView {
    }
    export interface $MachineView {
        controllerPos(): $BlockPos;
        countStructureBlocks(blockId: $ResourceLocation_): number;
        countStructureBlocks(block: $Block_): number;
        machineId(): $ResourceLocation;
        formed(): boolean;
    }
    export class $AirState extends $Record {
        air(): number;
        pressure(): number;
        volume(): number;
        dangerPressure(): number;
        criticalPressure(): number;
        position(): $BlockPos;
        outputCapacity(): number;
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
    export type $ResourceAmount_<R> = { amount?: number, resource?: any,  } | [amount?: number, resource?: any, ];
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
    export type $HeatState_ = { heatCapacity?: number, temperature?: number, heat?: number,  } | [heatCapacity?: number, temperature?: number, heat?: number, ];
    export class $IoCommitResult {
    }
    export interface $IoCommitResult {
        successful(): boolean;
        failure(): $RuntimeFailure;
    }
    export class $RecipeExecutionView {
    }
    export interface $RecipeExecutionView {
        requirements(): $List<$RequirementSpec>;
        duration(): number;
        outputs(): $List<$OutputView>;
    }
    export class $FailureFrame {
    }
    export interface $FailureFrame {
        requirementIndex(): number;
        source(): $ResourceLocation;
        phase(): $FailurePhase;
        recipeId(): $ResourceLocation;
    }
    export class $IoSnapshot {
    }
    export interface $IoSnapshot {
        fluidAmount(ingredient: $FluidIngredient_): number;
        itemInputs(): $List<$ResourceAmount<$ItemStack>>;
        fluidInputs(): $List<$ResourceAmount<$FluidStack>>;
        displays(): $List<$IoDisplay>;
        chemicalAmount(chemicalId: $ResourceLocation_): number;
        energyInput(): number;
        sourceInput(): number;
        manaInput(): number;
        itemAmount(ingredient: $Ingredient_): number;
        stressInputs(): $List<$StressState>;
        stressOutputs(): $List<$StressState>;
        chemicalInputs(): $List<$ResourceAmount<$ResourceLocation>>;
        airInputs(): $List<$AirState>;
        airOutputs(): $List<$AirState>;
        manaOutputCapacity(): number;
        heatOutputs(): $List<$HeatState>;
        itemOutputCapacity(stack: $ItemStack_): number;
        chemicalTagAmount(tagId: $ResourceLocation_): number;
        chemicalOutputCapacity(chemicalId: $ResourceLocation_): number;
        sourceOutputCapacity(): number;
        fluidOutputCapacity(stack: $FluidStack_): number;
        smartInterfaceValue(name: string): (number) | undefined;
        smartInterfaceValues(): $Map<string, number>;
        energyOutputCapacity(): number;
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
        requirements(): $List<$RequirementSpec>;
        recipePoolId(): $ResourceLocation;
        parallelized(): boolean;
        requiredHostIds(): $Set<$ResourceLocation>;
        runtimeRequirements(): $List<$RequirementSpec>;
        runtimeRequirements(extraModifiers: $List_<$RecipeAdjustmentSpec>): $List<$RequirementSpec>;
        runtimeRequirements(extraModifiers: $List_<$RecipeAdjustmentSpec>, energyMultiplier: number, outputMultiplier: number): $List<$RequirementSpec>;
        runtimeMachineOutputs(extraModifiers: $List_<$RecipeAdjustmentSpec>): $List<$OutputView>;
        runtimeMachineOutputs(): $List<$OutputView>;
        allowPartialOutputs(): boolean;
        cancelRecipeOnPerTickFailure(): boolean;
        modifiers(): $List<$RecipeAdjustmentSpec>;
        priority(): number;
        id(): $ResourceLocation;
        tickTime(): number;
        maxThreads(): number;
        outputs(): $List<$OutputView>;
    }
    export class $IoTransaction {
    }
    export interface $IoTransaction {
        simulate(): $IoSimulation;
        addOutput(requirement: $RequirementSpec, mode: $OutputMode_): $IoTransaction;
        addInput(requirement: $RequirementSpec): $IoTransaction;
        requirements(): $List<$RequirementSpec>;
        commit(writes: $Consumer_<$DataStore$Transaction>): $IoCommitResult;
        commit(): $IoCommitResult;
        add(requirement: $RequirementSpec): $IoTransaction;
        view(): $IoSnapshot;
        outputSimulations(): $List<$OutputAcceptance>;
        inputsSatisfied(): boolean;
        energySatisfied(): boolean;
        commitData(writes: $Consumer_<$DataStore$Transaction>): $IoCommitResult;
    }
    export class $RuntimeFailure {
    }
    export interface $RuntimeFailure {
        id(): $ResourceLocation;
        source(): $ResourceLocation;
        trace(): $List<$FailureFrame>;
        severity(): $FailureSeverity;
        details(): $Map<string, string>;
        reasonPriority(): number;
        reasonId(): $ResourceLocation;
        reasonTranslationKey(): string;
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
        chance(): number;
        withChance(chance: number): $OutputView;
        serializedId(): string;
        applyModifiers(modifiers: $List_<$RecipeAdjustmentSpec>): $OutputView;
        kindId(): $ResourceLocation;
        copy(): $OutputView;
        amount(): number;
    }
    export class $StressState extends $Record {
        overstressed(): boolean;
        theoreticalRpm(): number;
        baseContribution(): number;
        actualRpm(): number;
        networkCapacity(): number;
        networkStress(): number;
        generatedRpm(): number;
        position(): $BlockPos;
        connected(): boolean;
        actualContribution(): number;
        constructor(position: $BlockPos_, actualRpm: number, theoreticalRpm: number, generatedRpm: number, baseContribution: number, actualContribution: number, networkCapacity: number, networkStress: number, connected: boolean, overstressed: boolean);
    }
    /**
     * Values that may be interpreted as {@link $StressState}.
     */
    export type $StressState_ = { generatedRpm?: number, position?: $BlockPos_, baseContribution?: number, theoreticalRpm?: number, actualContribution?: number, actualRpm?: number, overstressed?: boolean, networkStress?: number, networkCapacity?: number, connected?: boolean,  } | [generatedRpm?: number, position?: $BlockPos_, baseContribution?: number, theoreticalRpm?: number, actualContribution?: number, actualRpm?: number, overstressed?: boolean, networkStress?: number, networkCapacity?: number, connected?: boolean, ];
    export class $OutputAcceptance {
    }
    export interface $OutputAcceptance {
        accepted(): number;
        requested(): number;
        fit(): $OutputFit;
    }
}
