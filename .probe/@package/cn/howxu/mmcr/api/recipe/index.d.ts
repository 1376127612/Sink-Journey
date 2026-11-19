import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $CapabilityDirections, $CapabilityDirections_ } from "@package/cn/howxu/mmcr/api/capability";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $Recipe, $RecipeType, $Ingredient, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RecipeModifier$IOType_, $RecipeModifier, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Set_, $List_, $Set } from "@package/java/util";
import { $StageRequirement, $LevelRequirement, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";
import { $IOPortKind } from "@package/cn/howxu/mmcr/internal/port";
import { $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RecipeFailureActions_ } from "@package/cn/howxu/mmcr/api/machine";
import { $Enum, $Record } from "@package/java/lang";
import { $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $DataComponentPredicateSet, $DataComponentPredicateSet_ } from "@package/cn/howxu/mmcr/api/recipe/component";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FailureOccurrence, $ExecutionStatus, $FailureReport_, $FailureReport } from "@package/cn/howxu/mmcr/api/capability/status";
import { $PlanningResult_, $PlanningResult } from "@package/cn/howxu/mmcr/api/capability/plan";
import { $RecipeStartContext$ExecutionSnapshot_, $RecipeStartContext$ExecutionSnapshot } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $ComponentClaimPolicy } from "@package/cn/howxu/mmcr/internal/multiblock";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
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
        codec(): $MapCodec<O>;
        syncCodec(): $RecipeSyncCodec<O>;
        withChance(output: O, chance: number): O;
        serializedId(): string;
        fromRequirement(requirement: $MachineRequirement): $MachineOutput;
        applyModifiers(output: O, modifiers: $List_<$RecipeModifier>): O;
        toRequirement(output: O, tags: $List_<string>): $MachineRequirement;
        presentation(): $OutputType$Presentation;
        id(): $ResourceLocation;
        copy(output: O): O;
        matchesRequirement(requirement: $MachineRequirement): boolean;
    }
    export class $OutputType$Presentation extends $Record {
        descriptionKey(): string;
        static defaults(id: $ResourceLocation_): $OutputType$Presentation;
        translationKey(): string;
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
        successful(): boolean;
        recipe(): $ActiveMachineRecipe;
        constructor(recipe: $ActiveMachineRecipe);
    }
    /**
     * Values that may be interpreted as {@link $ActiveMachineRecipe$LoadResult}.
     */
    export type $ActiveMachineRecipe$LoadResult_ = { recipe?: $ActiveMachineRecipe,  } | [recipe?: $ActiveMachineRecipe, ];
    export class $MachineComponent extends $Record {
        directions(): $CapabilityDirections;
        kind(): $IOPortKind;
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
        fluidKey(): $FluidStack;
        type(): $OutputType<never>;
        itemKey(): $ItemStack;
        static EMPTY: $MachineOutput$AggregationKey;
        constructor(type: $OutputType<never>, itemKey: $ItemStack_, fluidKey: $FluidStack_);
    }
    /**
     * Values that may be interpreted as {@link $MachineOutput$AggregationKey}.
     */
    export type $MachineOutput$AggregationKey_ = { type?: $OutputType<never>, fluidKey?: $FluidStack_, itemKey?: $ItemStack_,  } | [type?: $OutputType<never>, fluidKey?: $FluidStack_, itemKey?: $ItemStack_, ];
    export class $RecipeSyncCodec<T> {
        static of<T>(maxPayloadSize: number, encoder: $BiConsumer_<$RegistryFriendlyByteBuf, T>, decoder: $Function_<$RegistryFriendlyByteBuf, T>, validator: $Consumer_<T>): $RecipeSyncCodec<T>;
        static json<T>(codec: $Codec<T>, validator: $Consumer_<T>): $RecipeSyncCodec<T>;
        static json<T>(codec: $Codec<T>): $RecipeSyncCodec<T>;
        static DEFAULT_MAX_PAYLOAD_SIZE: number;
    }
    export interface $RecipeSyncCodec<T> {
        maxPayloadSize(): number;
        decode(buffer: $RegistryFriendlyByteBuf): T;
        encode(buffer: $RegistryFriendlyByteBuf, value: T): void;
        validate(value: T): void;
    }
    export class $ActiveMachineRecipe$InputConsumptionPlan extends $Record {
        consumedBatches(requirementIndex: number): number;
        isValidFor(recipe: $MachineRecipe): boolean;
        isValidFor(requirements: $List_<$MachineRequirement>): boolean;
        static deserialize(tag: $CompoundTag_): $ActiveMachineRecipe$InputConsumptionPlan;
        serialize(): $CompoundTag;
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
        ioType(): $RecipeModifier$IOType;
        payload(): $JsonElement;
        io(): $RecipeModifier$IOType;
        typeId(): $ResourceLocation;
        constructor(typeId: $ResourceLocation_, ioType: $RecipeModifier$IOType_, payload: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeIo}.
     */
    export type $CustomRecipeIo_ = { payload?: $JsonElement_, typeId?: $ResourceLocation_, ioType?: $RecipeModifier$IOType_,  } | [payload?: $JsonElement_, typeId?: $ResourceLocation_, ioType?: $RecipeModifier$IOType_, ];
    export class $MachineRecipe implements $Recipe<$RecipeInput> {
        getRegistryName(): $ResourceLocation;
        withId(id: string): $MachineRecipe;
        withId(id: $ResourceLocation_): $MachineRecipe;
        assemble(input: $RecipeInput, registries: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(width: number, height: number): boolean;
        requirements(): $List<$MachineRequirement>;
        getSerializer(): $RecipeSerializer<$Recipe<$RecipeInput>>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        showNotification(): boolean;
        recipePoolId(): $ResourceLocation;
        requiredHostIds(): $Set<$ResourceLocation>;
        runtimeRequirements(): $List<$MachineRequirement>;
        runtimeRequirements(extraModifiers: $List_<$RecipeModifier>, energyMultiplier: number, outputMultiplier: number): $List<$MachineRequirement>;
        runtimeRequirements(extraModifiers: $List_<$RecipeModifier>): $List<$MachineRequirement>;
        runtimeMachineOutputs(extraModifiers: $List_<$RecipeModifier>): $List<$MachineOutput>;
        runtimeMachineOutputs(): $List<$MachineOutput>;
        allowPartialOutputs(): boolean;
        inputRequirementCount(): number;
        canRunOnConnectedHost(hostId: string): boolean;
        canRunOnConnectedHost(hostId: $ResourceLocation_): boolean;
        getRecipeTotalTickTime(): number;
        static withAdditionalOutputs(recipe: $MachineRecipe, additionalOutputs: $List_<$MachineOutput>): $MachineRecipe;
        hasOverlappingInputs(other: $MachineRecipe): boolean;
        getConfiguredPriority(): number;
        modifiers(): $List<$RecipeModifier>;
        priority(): number;
        matches(input: $RecipeInput, level: $Level_): boolean;
        id(): $ResourceLocation;
        getType(): $RecipeType<$Recipe<$RecipeInput>>;
        tickTime(): number;
        maxThreads(): number;
        isSpecial(): boolean;
        getGroup(): string;
        machineOutputs(): $List<$MachineOutput>;
        levelRequirements(): $List<$LevelRequirement>;
        stageRequirements(): $List<$StageRequirement>;
        static fromCanonical(id: $ResourceLocation_, recipePoolId: $ResourceLocation_, tickTime: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, modifiers: $List_<$RecipeModifier>, priority: number, maxThreads: number, cancelRecipeOnPerTickFailure: boolean, parallelized: boolean, allowPartialOutputs: boolean, requiredHostIds: $Set_<$ResourceLocation_>): $MachineRecipe;
        isParallelized(): boolean;
        doesCancelRecipeOnPerTickFailure(): boolean;
        outputsWithoutDerivedRequirements(): $List<$MachineOutput>;
        getIngredients(): $NonNullList<$Ingredient>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        static CODEC: $MapCodec<$MachineRecipe>;
        constructor(id: $ResourceLocation_, recipePoolId: $ResourceLocation_, tickTime: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, modifiers: $List_<$RecipeModifier>, priority: number, maxThreads: number, cancelRecipeOnPerTickFailure: boolean, parallelized: boolean, allowPartialOutputs: boolean, requiredHostIds: $Set_<$ResourceLocation_>);
        get registryName(): $ResourceLocation;
        get serializer(): $RecipeSerializer<$Recipe<$RecipeInput>>;
        get recipeTotalTickTime(): number;
        get configuredPriority(): number;
        get type(): $RecipeType<$Recipe<$RecipeInput>>;
        get special(): boolean;
        get group(): string;
        get parallelized(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $MachineOutput$ItemOutput extends $Record implements $CustomOutput {
        chance(): number;
        withChance(chance: number): $MachineOutput$ItemOutput;
        resolvedStack(): $ItemStack;
        applyModifiers(modifiers: $List_<$RecipeModifier>): $MachineOutput$ItemOutput;
        stack(): $ItemStack;
        outputType(): $OutputType<$MachineOutput$ItemOutput>;
        components(): $DataComponentPredicateSet;
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
        requirements(): $List<$MachineRequirement>;
        parallelized(): boolean;
        stateVersion(): number;
        parallelismLimit(): number;
        structureVersion(): number;
        modifierVersion(): number;
        capabilityVersion(): number;
        factoryThreadLimit(): number;
        source(): $MachineRecipe;
        duration(): number;
        recipeThreadLimit(): number;
        outputs(): $List<$MachineOutput>;
        constructor(source: $MachineRecipe, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, duration: number, parallelismLimit: number, factoryThreadLimit: number, recipeThreadLimit: number, parallelized: boolean, structureVersion: number, capabilityVersion: number, modifierVersion: number, stateVersion: number);
    }
    /**
     * Values that may be interpreted as {@link $EffectiveRecipe}.
     */
    export type $EffectiveRecipe_ = { parallelismLimit?: number, recipeThreadLimit?: number, duration?: number, source?: $MachineRecipe, modifierVersion?: number, capabilityVersion?: number, parallelized?: boolean, stateVersion?: number, requirements?: $List_<$MachineRequirement>, factoryThreadLimit?: number, structureVersion?: number, outputs?: $List_<$MachineOutput>,  } | [parallelismLimit?: number, recipeThreadLimit?: number, duration?: number, source?: $MachineRecipe, modifierVersion?: number, capabilityVersion?: number, parallelized?: boolean, stateVersion?: number, requirements?: $List_<$MachineRequirement>, factoryThreadLimit?: number, structureVersion?: number, outputs?: $List_<$MachineOutput>, ];
    export class $ActiveMachineRecipe {
        getRegistryName(): string;
        getTick(): number;
        getRecipe(): $MachineRecipe;
        setTick(tick: number): void;
        executionSnapshot(): $RecipeStartContext$ExecutionSnapshot;
        getMaxParallelism(): number;
        shouldRetryFinish(gameTime: number): boolean;
        reset(): void;
        static load(input: $CompoundTag_, registries: $HolderLookup$Provider): $ActiveMachineRecipe$LoadResult;
        static from(input: $CompoundTag_, registries: $HolderLookup$Provider): $ActiveMachineRecipe;
        setParallelism(parallelism: number): void;
        isCompleted(): boolean;
        getParallelism(): number;
        serialize(output: $CompoundTag_, registries: $HolderLookup$Provider): void;
        effectiveOutputs(): $List<$MachineOutput>;
        getTotalTick(): number;
        needsFinishCommit(): boolean;
        applyTickGrant(resourcesGranted: boolean, outputsCommitted: boolean, gameTime: number): $ActiveMachineRecipe$TickStatus;
        isFinishPending(): boolean;
        beginFinishCommit(): void;
        markFinishBlocked(gameTime: number): void;
        getDataCompound(): $CompoundTag;
        static loadForPool(input: $CompoundTag_, registries: $HolderLookup$Provider, recipePoolId: $ResourceLocation_): $ActiveMachineRecipe$LoadResult;
        setEffectiveExecutionSnapshot(execution: $RecipeStartContext$ExecutionSnapshot_): void;
        hasValidInputConsumptionPlan(requirements: $List_<$MachineRequirement>): boolean;
        hasValidInputConsumptionPlan(): boolean;
        hasEffectiveExecutionSnapshot(): boolean;
        effectiveExecutionRevision(): number;
        effectiveRequirements(): $List<$MachineRequirement>;
        inputConsumptionPlan(): $ActiveMachineRecipe$InputConsumptionPlan;
        setInputConsumptionPlan(inputConsumptionPlan: $ActiveMachineRecipe$InputConsumptionPlan_): void;
        static sameDefinition(first: $MachineRecipe, second: $MachineRecipe, registries: $HolderLookup$Provider): boolean;
        static sameDefinition(first: $MachineRecipe, second: $MachineRecipe): boolean;
        setDataCompound(data: $CompoundTag_): void;
        doFailureAction(action: $RecipeFailureActions_): void;
        setTotalTick(totalTick: number): void;
        setMaxParallelism(maxParallelism: number): void;
        constructor(recipe: $MachineRecipe);
        constructor(recipe: $MachineRecipe, maxParallelism: number);
        constructor(recipe: $MachineRecipe, maxParallelism: number, execution: $RecipeStartContext$ExecutionSnapshot_);
        get registryName(): string;
        get recipe(): $MachineRecipe;
        get completed(): boolean;
        get finishPending(): boolean;
        set effectiveExecutionSnapshot(value: $RecipeStartContext$ExecutionSnapshot_);
    }
    export class $RecipeSearchResult extends $Record {
        planningResult(): $PlanningResult;
        structureVersion(): number;
        modifierVersion(): number;
        capabilityVersion(): number;
        hasMoreSpecificPendingInputCandidate(): boolean;
        failure(): $ExecutionStatus;
        static failure(machineId: $ResourceLocation_, structureVersion: number, capabilityVersion: number, modifierVersion: number, failureReport: $FailureReport_, validity: number): $RecipeSearchResult;
        recipe(): $MachineRecipe;
        static success(recipe: $MachineRecipe, machineId: $ResourceLocation_, structureVersion: number, capabilityVersion: number, modifierVersion: number, planningResult: $PlanningResult_, hasMoreSpecificPendingInputCandidate: boolean): $RecipeSearchResult;
        success(): boolean;
        validity(): number;
        machineId(): $ResourceLocation;
        failureReport(): $FailureReport;
        primaryFailure(): $FailureOccurrence;
        constructor(success: boolean, machineId: $ResourceLocation_, structureVersion: number, capabilityVersion: number, modifierVersion: number, recipe: $MachineRecipe, planningResult: $PlanningResult_, failureReport: $FailureReport_, validity: number, hasMoreSpecificPendingInputCandidate: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RecipeSearchResult}.
     */
    export type $RecipeSearchResult_ = { success?: boolean, planningResult?: $PlanningResult_, machineId?: $ResourceLocation_, recipe?: $MachineRecipe, structureVersion?: number, modifierVersion?: number, capabilityVersion?: number, validity?: number, failureReport?: $FailureReport_, hasMoreSpecificPendingInputCandidate?: boolean,  } | [success?: boolean, planningResult?: $PlanningResult_, machineId?: $ResourceLocation_, recipe?: $MachineRecipe, structureVersion?: number, modifierVersion?: number, capabilityVersion?: number, validity?: number, failureReport?: $FailureReport_, hasMoreSpecificPendingInputCandidate?: boolean, ];
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
        static copyList(outputs: $List_<$MachineOutput>): $List<$MachineOutput>;
        static recipeStackAmount(amount: number): number;
        static withScaledAmount(template: $MachineOutput, amount: number, chance: number): $MachineOutput;
        static aggregationKey(output: $MachineOutput): $MachineOutput$AggregationKey;
        static clampChance(chance: number): number;
        static scaledAmount(output: $MachineOutput): number;
        static sameItemOutputResource(first: $MachineOutput$ItemOutput_, second: $MachineOutput$ItemOutput_): boolean;
        static optionalRecipeStackAmount(amount: number): number;
        static copyOf(output: $MachineOutput): $MachineOutput;
        static CODEC: $Codec<$MachineOutput>;
        static RECIPE_ITEM_STACK_CODEC: $Codec<$ItemStack>;
        static RECIPE_FLUID_STACK_CODEC: $Codec<$FluidStack>;
    }
    export interface $MachineOutput {
        chance(): number;
        withChance(chance: number): $MachineOutput;
        applyModifiers(modifiers: $List_<$RecipeModifier>): $MachineOutput;
        type(): string;
        amount(): number;
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
