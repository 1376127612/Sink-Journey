import { $Int2ObjectMap, $IntCollection, $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $IRecipeDefinition } from "@package/org/cyclops/commoncapabilities/api/capability/recipehandler";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientComponentStorage } from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICraftingNetwork } from "@package/org/cyclops/integratedcrafting/api/network";
import { $MissingIngredients, $CraftingHelpers$IIdentifierGenerator_ } from "@package/org/cyclops/integratedcrafting/core";
import { $Comparator, $Iterator, $List, $Map_, $Map, $Collection } from "@package/java/util";
import { $PrioritizedPartPos } from "@package/org/cyclops/integrateddynamics/api/part";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IngredientComponent_, $IMixedIngredients, $IngredientComponent, $IPrototypedIngredient, $IngredientInstanceWrapper } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Enum } from "@package/java/lang";

declare module "@package/org/cyclops/integratedcrafting/api/crafting" {
    export class $ICraftingInterface {
        static createComparator(): $Comparator<$ICraftingInterface>;
    }
    export interface $ICraftingInterface {
        getPendingCraftingJobOutputs(arg0: number): $List<$Map<$IngredientComponent<never, never>, $List<$IPrototypedIngredient<never, never>>>>;
        getCraftingJobEntryStartTick(arg0: number): number;
        cancelCraftingJob(arg0: number, arg1: number): void;
        getCraftingJobs(): $Iterator<$CraftingJob>;
        fillCraftingJobBufferFromStorage(arg0: $CraftingJob, arg1: $Function_<$IngredientComponent<never, never>, $IIngredientComponentStorage<any, any>>): void;
        getCraftingJobsCount(): number;
        scheduleCraftingJob(arg0: $CraftingJob): void;
        canScheduleCraftingJobs(): boolean;
        getOutputBuffer(): $List<$IngredientInstanceWrapper<never, never>>;
        getPosition(): $PrioritizedPartPos;
        getRecipes(): $Collection<$IRecipeDefinition>;
        getCraftingJobStatus(arg0: $ICraftingNetwork, arg1: number, arg2: number): $CraftingJobStatus;
        getTargetMachineItem(): $ItemStack;
        getEstimatedRecipeDuration(arg0: $IRecipeDefinition): number;
        get craftingJobs(): $Iterator<$CraftingJob>;
        get craftingJobsCount(): number;
        get outputBuffer(): $List<$IngredientInstanceWrapper<never, never>>;
        get position(): $PrioritizedPartPos;
        get recipes(): $Collection<$IRecipeDefinition>;
        get targetMachineItem(): $ItemStack;
    }
    export class $CraftingJobDependencyGraph {
        getCraftingJob(arg0: number): $CraftingJob;
        getCraftingJobs(): $Collection<$CraftingJob>;
        mergeCraftingJobs(arg0: $CraftingJob, arg1: $CraftingJob, arg2: boolean): void;
        importDependencies(arg0: $CraftingJobDependencyGraph): void;
        addCraftingJobId(arg0: $CraftingJob): void;
        getDependents(arg0: $CraftingJob): $Collection<$CraftingJob>;
        removeDependency(arg0: number, arg1: number): void;
        hasDependencies(arg0: number): boolean;
        hasDependencies(arg0: $CraftingJob): boolean;
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CraftingJobDependencyGraph;
        addDependency(arg0: $CraftingJob, arg1: number): void;
        addDependency(arg0: $CraftingJob, arg1: $CraftingJob): void;
        static serialize(arg0: $HolderLookup$Provider, arg1: $CraftingJobDependencyGraph): $CompoundTag;
        getDependencies(arg0: $CraftingJob): $Collection<$CraftingJob>;
        onCraftingJobFinished(arg0: $CraftingJob, arg1: boolean): void;
        onCraftingJobFinished(arg0: $CraftingJob): void;
        removeCraftingJobId(arg0: $CraftingJob): void;
        constructor();
        constructor(arg0: $Int2ObjectMap<$CraftingJob>, arg1: $Int2ObjectMap<$IntCollection>, arg2: $Int2ObjectMap<$IntCollection>);
        get craftingJobs(): $Collection<$CraftingJob>;
    }
    export class $CraftingJob {
        getIngredientsStorageBuffer(): $IMixedIngredients;
        getAmount(): number;
        setAmount(arg0: number): void;
        isNotifyInitiator(): boolean;
        getInitiatorUuid(): string;
        getAmountTotal(): number;
        getRecipe(): $IRecipeDefinition;
        setStartTick(arg0: number): void;
        setAmountTotal(arg0: number): void;
        removeDependency(arg0: $CraftingJob): void;
        getStartTick(): number;
        setIngredientsStorageBuffer(arg0: $IMixedIngredients): void;
        addToIngredientsStorageBuffer<T, M>(arg0: $IngredientComponent_<T, M>, arg1: T): void;
        setCancelled(arg0: boolean): void;
        clone(arg0: $CraftingHelpers$IIdentifierGenerator_): $CraftingJob;
        getId(): number;
        getChannel(): number;
        isCancelled(): boolean;
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CraftingJob;
        addDependency(arg0: $CraftingJob): void;
        static serialize(arg0: $HolderLookup$Provider, arg1: $CraftingJob): $CompoundTag;
        getDependentCraftingJobs(): $IntList;
        getIngredientsStorage(): $IMixedIngredients;
        getLastMissingIngredients(): $Map<$IngredientComponent<never, never>, $MissingIngredients<never, never>>;
        getDependencyCraftingJobs(): $IntList;
        setIngredientsStorage(arg0: $IMixedIngredients): void;
        getMissingIngredientQuantity<T, M>(arg0: $IngredientComponent_<T, M>, arg1: T): number;
        isInvalidInputs(): boolean;
        setInvalidInputs(arg0: boolean): void;
        setInitiatorUuid(arg0: string): void;
        setNotifyInitiator(arg0: boolean): void;
        setLastMissingIngredients(arg0: $Map_<$IngredientComponent_<never, never>, $MissingIngredients<never, never>>): void;
        setIgnoreDependencyCheck(arg0: boolean): void;
        isIgnoreDependencyCheck(): boolean;
        constructor(arg0: number, arg1: number, arg2: $IRecipeDefinition, arg3: number, arg4: $IMixedIngredients);
        get recipe(): $IRecipeDefinition;
        get id(): number;
        get channel(): number;
        get dependentCraftingJobs(): $IntList;
        get dependencyCraftingJobs(): $IntList;
    }
    export class $CraftingJobStatus extends $Enum<$CraftingJobStatus> {
        static values(): $CraftingJobStatus[];
        static valueOf(arg0: string): $CraftingJobStatus;
        static PENDING_INTERFACE: $CraftingJobStatus;
        static PENDING_INGREDIENTS: $CraftingJobStatus;
        static PROCESSING: $CraftingJobStatus;
        static UNKNOWN: $CraftingJobStatus;
        static INVALID_INPUTS: $CraftingJobStatus;
        static FINISHED: $CraftingJobStatus;
        static PENDING_DEPENDENCIES: $CraftingJobStatus;
        static PENDING_OUTPUT_STORAGE: $CraftingJobStatus;
    }
    /**
     * Values that may be interpreted as {@link $CraftingJobStatus}.
     */
    export type $CraftingJobStatus_ = "pending_interface" | "pending_dependencies" | "pending_ingredients" | "invalid_inputs" | "pending_output_storage" | "processing" | "finished" | "unknown";
}
