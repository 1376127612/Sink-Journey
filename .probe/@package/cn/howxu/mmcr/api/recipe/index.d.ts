import { $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $CapabilityDirections, $CapabilityDirections_ } from "@package/cn/howxu/mmcr/api/capability";
import { $DataComponentPredicateSet, $DataComponentPredicateSet_ } from "@package/cn/howxu/mmcr/api/recipe/component";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Recipe, $RecipeType, $Ingredient, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RecipeModifier$IOType_, $RecipeModifier, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Set_, $List_, $Set } from "@package/java/util";
import { $StageRequirement, $LevelRequirement, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";
import { $FailureOccurrence, $ExecutionStatus, $FailureReport_, $FailureReport } from "@package/cn/howxu/mmcr/api/capability/status";
import { $PlanningResult_, $PlanningResult } from "@package/cn/howxu/mmcr/api/capability/plan";
import { $IOPortKind } from "@package/cn/howxu/mmcr/internal/port";
import { $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $RecipeStartContext$ExecutionSnapshot_, $RecipeStartContext$ExecutionSnapshot } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ComponentClaimPolicy } from "@package/cn/howxu/mmcr/internal/multiblock";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeFailureActions_ } from "@package/cn/howxu/mmcr/api/machine";
import { $Enum, $Record } from "@package/java/lang";
export * as requirement from "@package/cn/howxu/mmcr/api/recipe/requirement";
export * as helper from "@package/cn/howxu/mmcr/api/recipe/helper";
export * as modifier from "@package/cn/howxu/mmcr/api/recipe/modifier";
export * as component from "@package/cn/howxu/mmcr/api/recipe/component";

declare module "@package/cn/howxu/mmcr/api/recipe" {
    export class $CustomOutput {
    }
    export interface $CustomOutput extends $MachineOutput {
        outputType(): $OutputType<$CustomOutput>;
    }
    export class $OutputType<O extends $MachineOutput> {
    }
    export interface $OutputType<O extends $MachineOutput> {
        id(): $ResourceLocation;
        copy(output: O): O;
        withChance(output: O, chance: number): O;
        codec(): $MapCodec<O>;
        presentation(): $OutputType$Presentation;
        applyModifiers(output: O, modifiers: $List_<$RecipeModifier>): O;
        serializedId(): string;
        toRequirement(output: O, tags: $List_<string>): $MachineRequirement;
        fromRequirement(requirement: $MachineRequirement): $MachineOutput;
        matchesRequirement(requirement: $MachineRequirement): boolean;
        syncCodec(): $RecipeSyncCodec<O>;
    }
    export class $OutputType$Presentation extends $Record {
        static defaults(id: $ResourceLocation_): $OutputType$Presentation;
        translationKey(): string;
        descriptionKey(): string;
        constructor(translationKey: string, descriptionKey: string);
    }
    /**
     * Values that may be interpreted as {@link $OutputType$Presentation}.
     */
    export type $OutputType$Presentation_ = { descriptionKey?: string, translationKey?: string,  } | [descriptionKey?: string, translationKey?: string, ];
    export class $ComponentType {
        getRegistryName(): $ResourceLocation;
        setRegistryName(name: $ResourceLocation_): void;
        requiresModid(): string;
        constructor();
    }
    export class $InputScope extends $Record {
        kind(): $InputScope$Kind;
        static legacy(): $InputScope;
        sources(): $List<$BlockPos>;
        constructor(kind: $InputScope$Kind_, sources: $List_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $InputScope}.
     */
    export type $InputScope_ = { kind?: $InputScope$Kind_, sources?: $List_<$BlockPos_>,  } | [kind?: $InputScope$Kind_, sources?: $List_<$BlockPos_>, ];
    export class $ActiveMachineRecipe$LoadResult extends $Record {
        recipe(): $ActiveMachineRecipe;
        successful(): boolean;
        constructor(recipe: $ActiveMachineRecipe);
    }
    /**
     * Values that may be interpreted as {@link $ActiveMachineRecipe$LoadResult}.
     */
    export type $ActiveMachineRecipe$LoadResult_ = { recipe?: $ActiveMachineRecipe,  } | [recipe?: $ActiveMachineRecipe, ];
    export class $MachineComponent extends $Record {
        kind(): $IOPortKind;
        directions(): $CapabilityDirections;
        constructor(kind: $IOPortKind, ioType: $IOType_);
        constructor(kind: $IOPortKind, directions: $CapabilityDirections_);
    }
    /**
     * Values that may be interpreted as {@link $MachineComponent}.
     */
    export type $MachineComponent_ = { kind?: $IOPortKind, directions?: $CapabilityDirections_,  } | [kind?: $IOPortKind, directions?: $CapabilityDirections_, ];
    export class $MachineComponentTile {
    }
    export interface $MachineComponentTile {
        provideComponent(): $MachineComponent;
        claimPolicy(): $ComponentClaimPolicy;
    }
    /**
     * Values that may be interpreted as {@link $MachineComponentTile}.
     */
    export type $MachineComponentTile_ = (() => $MachineComponent_);
    export class $MachineOutput$AggregationKey extends $Record {
        type(): $OutputType<never>;
        itemKey(): $ItemStack;
        fluidKey(): $FluidStack;
        static EMPTY: $MachineOutput$AggregationKey;
        constructor(type: $OutputType<never>, itemKey: $ItemStack_, fluidKey: $FluidStack_);
    }
    /**
     * Values that may be interpreted as {@link $MachineOutput$AggregationKey}.
     */
    export type $MachineOutput$AggregationKey_ = { fluidKey?: $FluidStack_, itemKey?: $ItemStack_, type?: $OutputType<never>,  } | [fluidKey?: $FluidStack_, itemKey?: $ItemStack_, type?: $OutputType<never>, ];
    export class $RecipeSyncCodec<T> {
        static of<T>(maxPayloadSize: number, encoder: $BiConsumer_<$RegistryFriendlyByteBuf, T>, decoder: $Function_<$RegistryFriendlyByteBuf, T>, validator: $Consumer_<T>): $RecipeSyncCodec<T>;
        static json<T>(codec: $Codec<T>, validator: $Consumer_<T>): $RecipeSyncCodec<T>;
        static json<T>(codec: $Codec<T>): $RecipeSyncCodec<T>;
        static DEFAULT_MAX_PAYLOAD_SIZE: number;
    }
    export interface $RecipeSyncCodec<T> {
        decode(buffer: $RegistryFriendlyByteBuf): T;
        encode(buffer: $RegistryFriendlyByteBuf, value: T): void;
        validate(value: T): void;
        maxPayloadSize(): number;
    }
    export class $ActiveMachineRecipe$InputConsumptionPlan extends $Record {
        static deserialize(tag: $CompoundTag_): $ActiveMachineRecipe$InputConsumptionPlan;
        serialize(): $CompoundTag;
        isValidFor(requirements: $List_<$MachineRequirement>): boolean;
        isValidFor(recipe: $MachineRecipe): boolean;
        consumedBatches(requirementIndex: number): number;
        consumedInputBatches(): $List<number>;
        constructor(consumedInputBatches: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $ActiveMachineRecipe$InputConsumptionPlan}.
     */
    export type $ActiveMachineRecipe$InputConsumptionPlan_ = { consumedInputBatches?: $List_<number>,  } | [consumedInputBatches?: $List_<number>, ];
    export class $RecipeIoDeclaration {
    }
    export interface $RecipeIoDeclaration {
        io(): $RecipeModifier$IOType;
    }
    /**
     * Values that may be interpreted as {@link $RecipeIoDeclaration}.
     */
    export type $RecipeIoDeclaration_ = (() => $RecipeModifier$IOType_);
    export class $CustomRecipeIo extends $Record implements $RecipeIoDeclaration {
        payload(): $JsonElement;
        io(): $RecipeModifier$IOType;
        ioType(): $RecipeModifier$IOType;
        typeId(): $ResourceLocation;
        constructor(typeId: $ResourceLocation_, ioType: $RecipeModifier$IOType_, payload: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeIo}.
     */
    export type $CustomRecipeIo_ = { payload?: $JsonElement_, typeId?: $ResourceLocation_, ioType?: $RecipeModifier$IOType_,  } | [payload?: $JsonElement_, typeId?: $ResourceLocation_, ioType?: $RecipeModifier$IOType_, ];
    export class $MachineRecipe implements $Recipe<$RecipeInput> {
        machineOutputs(): $List<$MachineOutput>;
        inputRequirementCount(): number;
        modifiers(): $List<$RecipeModifier>;
        priority(): number;
        matches(input: $RecipeInput, level: $Level_): boolean;
        id(): $ResourceLocation;
        getType(): $RecipeType<$Recipe<$RecipeInput>>;
        maxThreads(): number;
        getGroup(): string;
        isSpecial(): boolean;
        doesCancelRecipeOnPerTickFailure(): boolean;
        outputsWithoutDerivedRequirements(): $List<$MachineOutput>;
        tickTime(): number;
        withId(id: string): $MachineRecipe;
        withId(id: $ResourceLocation_): $MachineRecipe;
        assemble(input: $RecipeInput, registries: $HolderLookup$Provider): $ItemStack;
        getRegistryName(): $ResourceLocation;
        canCraftInDimensions(width: number, height: number): boolean;
        requirements(): $List<$MachineRequirement>;
        getSerializer(): $RecipeSerializer<$Recipe<$RecipeInput>>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        showNotification(): boolean;
        allowPartialOutputs(): boolean;
        recipePoolId(): $ResourceLocation;
        requiredHostIds(): $Set<$ResourceLocation>;
        runtimeMachineOutputs(): $List<$MachineOutput>;
        runtimeMachineOutputs(extraModifiers: $List_<$RecipeModifier>): $List<$MachineOutput>;
        getRecipeTotalTickTime(): number;
        getConfiguredPriority(): number;
        runtimeRequirements(): $List<$MachineRequirement>;
        runtimeRequirements(extraModifiers: $List_<$RecipeModifier>): $List<$MachineRequirement>;
        runtimeRequirements(extraModifiers: $List_<$RecipeModifier>, energyMultiplier: number, outputMultiplier: number): $List<$MachineRequirement>;
        static withAdditionalOutputs(recipe: $MachineRecipe, additionalOutputs: $List_<$MachineOutput>): $MachineRecipe;
        hasOverlappingInputs(other: $MachineRecipe): boolean;
        canRunOnConnectedHost(hostId: $ResourceLocation_): boolean;
        canRunOnConnectedHost(hostId: string): boolean;
        static fromCanonical(id: $ResourceLocation_, recipePoolId: $ResourceLocation_, tickTime: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, modifiers: $List_<$RecipeModifier>, priority: number, maxThreads: number, cancelRecipeOnPerTickFailure: boolean, parallelized: boolean, allowPartialOutputs: boolean, requiredHostIds: $Set_<$ResourceLocation_>): $MachineRecipe;
        levelRequirements(): $List<$LevelRequirement>;
        isParallelized(): boolean;
        stageRequirements(): $List<$StageRequirement>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        getToastSymbol(): $ItemStack;
        static CODEC: $MapCodec<$MachineRecipe>;
        constructor(id: $ResourceLocation_, recipePoolId: $ResourceLocation_, tickTime: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, modifiers: $List_<$RecipeModifier>, priority: number, maxThreads: number, cancelRecipeOnPerTickFailure: boolean, parallelized: boolean, allowPartialOutputs: boolean, requiredHostIds: $Set_<$ResourceLocation_>);
        get type(): $RecipeType<$Recipe<$RecipeInput>>;
        get group(): string;
        get special(): boolean;
        get registryName(): $ResourceLocation;
        get serializer(): $RecipeSerializer<$Recipe<$RecipeInput>>;
        get recipeTotalTickTime(): number;
        get configuredPriority(): number;
        get parallelized(): boolean;
        get incomplete(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get toastSymbol(): $ItemStack;
    }
    export class $MachineOutput$ItemOutput extends $Record implements $CustomOutput {
        stack(): $ItemStack;
        components(): $DataComponentPredicateSet;
        withChance(chance: number): $MachineOutput$ItemOutput;
        chance(): number;
        applyModifiers(modifiers: $List_<$RecipeModifier>): $MachineOutput$ItemOutput;
        resolvedStack(): $ItemStack;
        outputType(): $OutputType<$MachineOutput$ItemOutput>;
        type(): string;
        amount(): number;
        constructor(stack: $ItemStack_, chance: number);
        constructor(stack: $ItemStack_, chance: number, components: $DataComponentPredicateSet_);
    }
    /**
     * Values that may be interpreted as {@link $MachineOutput$ItemOutput}.
     */
    export type $MachineOutput$ItemOutput_ = { chance?: number, components?: $DataComponentPredicateSet_, stack?: $ItemStack_,  } | [chance?: number, components?: $DataComponentPredicateSet_, stack?: $ItemStack_, ];
    export class $InputScope$Kind extends $Enum<$InputScope$Kind> {
        static values(): $InputScope$Kind[];
        static valueOf(name: string): $InputScope$Kind;
        static LEGACY: $InputScope$Kind;
        static ORDINARY: $InputScope$Kind;
        static ISOLATED: $InputScope$Kind;
    }
    /**
     * Values that may be interpreted as {@link $InputScope$Kind}.
     */
    export type $InputScope$Kind_ = "legacy" | "ordinary" | "isolated";
    export class $EffectiveRecipe extends $Record {
        source(): $MachineRecipe;
        duration(): number;
        outputs(): $List<$MachineOutput>;
        requirements(): $List<$MachineRequirement>;
        parallelized(): boolean;
        stateVersion(): number;
        structureVersion(): number;
        parallelismLimit(): number;
        factoryThreadLimit(): number;
        modifierVersion(): number;
        capabilityVersion(): number;
        recipeThreadLimit(): number;
        constructor(source: $MachineRecipe, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, duration: number, parallelismLimit: number, factoryThreadLimit: number, recipeThreadLimit: number, parallelized: boolean, structureVersion: number, capabilityVersion: number, modifierVersion: number, stateVersion: number);
    }
    /**
     * Values that may be interpreted as {@link $EffectiveRecipe}.
     */
    export type $EffectiveRecipe_ = { stateVersion?: number, requirements?: $List_<$MachineRequirement>, factoryThreadLimit?: number, structureVersion?: number, outputs?: $List_<$MachineOutput>, parallelismLimit?: number, recipeThreadLimit?: number, duration?: number, source?: $MachineRecipe, modifierVersion?: number, capabilityVersion?: number, parallelized?: boolean,  } | [stateVersion?: number, requirements?: $List_<$MachineRequirement>, factoryThreadLimit?: number, structureVersion?: number, outputs?: $List_<$MachineOutput>, parallelismLimit?: number, recipeThreadLimit?: number, duration?: number, source?: $MachineRecipe, modifierVersion?: number, capabilityVersion?: number, parallelized?: boolean, ];
    export class $ActiveMachineRecipe {
        reset(): void;
        static load(input: $CompoundTag_, registries: $HolderLookup$Provider): $ActiveMachineRecipe$LoadResult;
        static from(input: $CompoundTag_, registries: $HolderLookup$Provider): $ActiveMachineRecipe;
        isCompleted(): boolean;
        getParallelism(): number;
        setParallelism(parallelism: number): void;
        serialize(output: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getRecipe(): $MachineRecipe;
        getRegistryName(): string;
        getTick(): number;
        setTick(tick: number): void;
        executionSnapshot(): $RecipeStartContext$ExecutionSnapshot;
        getMaxParallelism(): number;
        shouldRetryFinish(gameTime: number): boolean;
        effectiveOutputs(): $List<$MachineOutput>;
        getTotalTick(): number;
        effectiveExecutionRevision(): number;
        effectiveRequirements(): $List<$MachineRequirement>;
        inputConsumptionPlan(): $ActiveMachineRecipe$InputConsumptionPlan;
        setInputConsumptionPlan(inputConsumptionPlan: $ActiveMachineRecipe$InputConsumptionPlan_): void;
        setTotalTick(totalTick: number): void;
        beginFinishCommit(): void;
        needsFinishCommit(): boolean;
        applyTickGrant(resourcesGranted: boolean, outputsCommitted: boolean, gameTime: number): $ActiveMachineRecipe$TickStatus;
        getDataCompound(): $CompoundTag;
        doFailureAction(action: $RecipeFailureActions_): void;
        isFinishPending(): boolean;
        static sameDefinition(first: $MachineRecipe, second: $MachineRecipe): boolean;
        static sameDefinition(first: $MachineRecipe, second: $MachineRecipe, registries: $HolderLookup$Provider): boolean;
        setDataCompound(data: $CompoundTag_): void;
        static loadForPool(input: $CompoundTag_, registries: $HolderLookup$Provider, recipePoolId: $ResourceLocation_): $ActiveMachineRecipe$LoadResult;
        markFinishBlocked(gameTime: number): void;
        setMaxParallelism(maxParallelism: number): void;
        setEffectiveExecutionSnapshot(execution: $RecipeStartContext$ExecutionSnapshot_): void;
        hasValidInputConsumptionPlan(): boolean;
        hasValidInputConsumptionPlan(requirements: $List_<$MachineRequirement>): boolean;
        hasEffectiveExecutionSnapshot(): boolean;
        constructor(recipe: $MachineRecipe, maxParallelism: number, execution: $RecipeStartContext$ExecutionSnapshot_);
        constructor(recipe: $MachineRecipe, maxParallelism: number);
        constructor(recipe: $MachineRecipe);
        get completed(): boolean;
        get recipe(): $MachineRecipe;
        get registryName(): string;
        get finishPending(): boolean;
        set effectiveExecutionSnapshot(value: $RecipeStartContext$ExecutionSnapshot_);
    }
    export class $RecipeSearchResult extends $Record {
        failure(): $ExecutionStatus;
        static failure(machineId: $ResourceLocation_, structureVersion: number, capabilityVersion: number, modifierVersion: number, failureReport: $FailureReport_, validity: number): $RecipeSearchResult;
        recipe(): $MachineRecipe;
        validity(): number;
        static success(recipe: $MachineRecipe, machineId: $ResourceLocation_, structureVersion: number, capabilityVersion: number, modifierVersion: number, planningResult: $PlanningResult_, hasMoreSpecificPendingInputCandidate: boolean): $RecipeSearchResult;
        success(): boolean;
        machineId(): $ResourceLocation;
        planningResult(): $PlanningResult;
        structureVersion(): number;
        modifierVersion(): number;
        capabilityVersion(): number;
        hasMoreSpecificPendingInputCandidate(): boolean;
        failureReport(): $FailureReport;
        primaryFailure(): $FailureOccurrence;
        constructor(success: boolean, machineId: $ResourceLocation_, structureVersion: number, capabilityVersion: number, modifierVersion: number, recipe: $MachineRecipe, planningResult: $PlanningResult_, failureReport: $FailureReport_, validity: number, hasMoreSpecificPendingInputCandidate: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RecipeSearchResult}.
     */
    export type $RecipeSearchResult_ = { modifierVersion?: number, capabilityVersion?: number, validity?: number, failureReport?: $FailureReport_, hasMoreSpecificPendingInputCandidate?: boolean, success?: boolean, planningResult?: $PlanningResult_, machineId?: $ResourceLocation_, recipe?: $MachineRecipe, structureVersion?: number,  } | [modifierVersion?: number, capabilityVersion?: number, validity?: number, failureReport?: $FailureReport_, hasMoreSpecificPendingInputCandidate?: boolean, success?: boolean, planningResult?: $PlanningResult_, machineId?: $ResourceLocation_, recipe?: $MachineRecipe, structureVersion?: number, ];
    export class $MachineOutputAmount extends $Record {
        output(): $MachineOutput;
        amount(): number;
        constructor(output: $MachineOutput, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineOutputAmount}.
     */
    export type $MachineOutputAmount_ = { output?: $MachineOutput, amount?: number,  } | [output?: $MachineOutput, amount?: number, ];
    export class $MachineOutput {
        static copyOf(output: $MachineOutput): $MachineOutput;
        static copyList(outputs: $List_<$MachineOutput>): $List<$MachineOutput>;
        static withScaledAmount(template: $MachineOutput, amount: number, chance: number): $MachineOutput;
        static aggregationKey(output: $MachineOutput): $MachineOutput$AggregationKey;
        static scaledAmount(output: $MachineOutput): number;
        static clampChance(chance: number): number;
        static sameItemOutputResource(first: $MachineOutput$ItemOutput_, second: $MachineOutput$ItemOutput_): boolean;
        static optionalRecipeStackAmount(amount: number): number;
        static recipeStackAmount(amount: number): number;
        static CODEC: $Codec<$MachineOutput>;
        static RECIPE_ITEM_STACK_CODEC: $Codec<$ItemStack>;
        static RECIPE_FLUID_STACK_CODEC: $Codec<$FluidStack>;
    }
    export interface $MachineOutput {
        type(): string;
        amount(): number;
        withChance(chance: number): $MachineOutput;
        chance(): number;
        applyModifiers(modifiers: $List_<$RecipeModifier>): $MachineOutput;
        outputType(): $OutputType<$MachineOutput>;
    }
    export class $MachineIngredient {
        static CODEC: $Codec<$MachineIngredient>;
    }
    export interface $MachineIngredient {
        type(): string;
    }
    /**
     * Values that may be interpreted as {@link $MachineIngredient}.
     */
    export type $MachineIngredient_ = (() => string);
    export class $ActiveMachineRecipe$TickStatus extends $Enum<$ActiveMachineRecipe$TickStatus> {
        static values(): $ActiveMachineRecipe$TickStatus[];
        static valueOf(name: string): $ActiveMachineRecipe$TickStatus;
        static CONTINUE: $ActiveMachineRecipe$TickStatus;
        static CANCELLED: $ActiveMachineRecipe$TickStatus;
        static WAITING: $ActiveMachineRecipe$TickStatus;
        static FINISHED: $ActiveMachineRecipe$TickStatus;
    }
    /**
     * Values that may be interpreted as {@link $ActiveMachineRecipe$TickStatus}.
     */
    export type $ActiveMachineRecipe$TickStatus_ = "continue" | "waiting" | "cancelled" | "finished";
}
