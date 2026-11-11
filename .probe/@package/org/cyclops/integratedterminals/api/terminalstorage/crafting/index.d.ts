import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IngredientComponent, $IngredientComponent_, $IPrototypedIngredient } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Iterator, $List, $Collection } from "@package/java/util";
import { $Comparable, $Enum } from "@package/java/lang";
import { $TerminalStorageTabIngredientComponentServer } from "@package/org/cyclops/integratedterminals/core/terminalstorage";

declare module "@package/org/cyclops/integratedterminals/api/terminalstorage/crafting" {
    export class $ITerminalCraftingPlanFlat<I> {
    }
    export interface $ITerminalCraftingPlanFlat<I> {
        getId(): I;
        getEntries(): $List<$ITerminalCraftingPlanFlat$IEntry>;
        setError(arg0: string): void;
        getChannel(): number;
        getStatus(): $TerminalCraftingJobStatus;
        getTickDuration(): number;
        getEstimatedTickDurationRemaining(): number;
        getCraftingQuantityRemaining(): number;
        getEstimatedTickDurationTotal(): number;
        getOutputs(): $List<$IPrototypedIngredient<never, never>>;
        getInitiatorName(): string;
        getUnlocalizedLabel(): string;
        getCraftingQuantityTotal(): number;
        get id(): I;
        get entries(): $List<$ITerminalCraftingPlanFlat$IEntry>;
        set error(value: string);
        get channel(): number;
        get status(): $TerminalCraftingJobStatus;
        get tickDuration(): number;
        get estimatedTickDurationRemaining(): number;
        get craftingQuantityRemaining(): number;
        get estimatedTickDurationTotal(): number;
        get outputs(): $List<$IPrototypedIngredient<never, never>>;
        get initiatorName(): string;
        get unlocalizedLabel(): string;
        get craftingQuantityTotal(): number;
    }
    export class $ITerminalCraftingPlanFlat$IEntry {
    }
    export interface $ITerminalCraftingPlanFlat$IEntry {
        getQuantityToCraft(): number;
        getQuantityInStorage(): number;
        getQuantityCrafting(): number;
        /**
         * @deprecated
         */
        getInstance(): $IPrototypedIngredient<never, never>;
        getQuantityMissing(): number;
        getInstances(): $List<$IPrototypedIngredient<never, never>>;
        get quantityToCraft(): number;
        get quantityInStorage(): number;
        get quantityCrafting(): number;
        get instance(): $IPrototypedIngredient<never, never>;
        get quantityMissing(): number;
        get instances(): $List<$IPrototypedIngredient<never, never>>;
    }
    export class $ITerminalStorageTabIngredientCraftingHandler<O extends $ITerminalCraftingOption<never>, I> {
    }
    export interface $ITerminalStorageTabIngredientCraftingHandler<O extends $ITerminalCraftingOption<never>, I> {
        getId(): $ResourceLocation;
        getCraftingOptionsWithOutput<T, M>(arg0: $TerminalStorageTabIngredientComponentServer<T, M>, arg1: number, arg2: T, arg3: M): $Collection<O>;
        deserializeCraftingPlanFlat(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ITerminalCraftingPlanFlat<I>;
        serializeCraftingOption(arg0: $HolderLookup$Provider, arg1: O): $CompoundTag;
        calculateCraftingPlan(arg0: $INetwork, arg1: number, arg2: $ITerminalCraftingOption<any>, arg3: number): $ITerminalCraftingPlan<I>;
        serializeCraftingPlan(arg0: $HolderLookup$Provider, arg1: $ITerminalCraftingPlan<I>): $CompoundTag;
        serializeCraftingPlanFlat(arg0: $HolderLookup$Provider, arg1: $ITerminalCraftingPlanFlat<I>): $CompoundTag;
        serializeCraftingJobId(arg0: I): $Tag;
        deserializeCraftingJobId(arg0: $Tag_): I;
        deserializeCraftingOption<T, M>(arg0: $HolderLookup$Provider, arg1: $IngredientComponent_<T, M>, arg2: $CompoundTag_): O;
        deserializeCraftingPlan(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ITerminalCraftingPlan<I>;
        /**
         * @deprecated
         */
        startCraftingJob(arg0: $INetwork, arg1: number, arg2: $ITerminalCraftingPlan<I>, arg3: $ServerPlayer): void;
        startCraftingJob(arg0: $INetwork, arg1: number, arg2: $ITerminalCraftingPlan<I>, arg3: $ServerPlayer, arg4: boolean): void;
        getCraftingJobs(arg0: $INetwork, arg1: number): $List<$ITerminalCraftingPlan<I>>;
        getCraftingOptions<T, M>(arg0: $TerminalStorageTabIngredientComponentServer<T, M>, arg1: number): $Collection<O>;
        getCraftingJob(arg0: $INetwork, arg1: number, arg2: I): $ITerminalCraftingPlan<I>;
        cancelCraftingJob(arg0: $INetwork, arg1: number, arg2: I): boolean;
        getChannels<T, M>(arg0: $TerminalStorageTabIngredientComponentServer<T, M>): number[];
        get id(): $ResourceLocation;
    }
    export class $ITerminalCraftingPlan<I> {
    }
    export interface $ITerminalCraftingPlan<I> {
        getId(): I;
        setError(arg0: string): void;
        getChannel(): number;
        flatten(): $ITerminalCraftingPlanFlat<I>;
        getStatus(): $TerminalCraftingJobStatus;
        getDependencies(): $List<$ITerminalCraftingPlan<I>>;
        getTickDuration(): number;
        getEstimatedTickDurationRemaining(): number;
        getEstimatedTickDurationTotal(): number;
        getOutputs(): $List<$IPrototypedIngredient<never, never>>;
        getInitiatorName(): string;
        getLastMissingIngredients(): $List<$List<$IPrototypedIngredient<never, never>>>;
        getUnlocalizedLabel(): string;
        getBufferedIngredients(): $List<$IPrototypedIngredient<never, never>>;
        getCraftingQuantity(): number;
        getCraftingQuantityTotal(): number;
        get id(): I;
        set error(value: string);
        get channel(): number;
        get status(): $TerminalCraftingJobStatus;
        get dependencies(): $List<$ITerminalCraftingPlan<I>>;
        get tickDuration(): number;
        get estimatedTickDurationRemaining(): number;
        get estimatedTickDurationTotal(): number;
        get outputs(): $List<$IPrototypedIngredient<never, never>>;
        get initiatorName(): string;
        get lastMissingIngredients(): $List<$List<$IPrototypedIngredient<never, never>>>;
        get unlocalizedLabel(): string;
        get bufferedIngredients(): $List<$IPrototypedIngredient<never, never>>;
        get craftingQuantity(): number;
        get craftingQuantityTotal(): number;
    }
    export class $TerminalCraftingJobStatus extends $Enum<$TerminalCraftingJobStatus> {
        static values(): $TerminalCraftingJobStatus[];
        static valueOf(arg0: string): $TerminalCraftingJobStatus;
        getPriority(): number;
        isValid(): boolean;
        getColor(): number;
        static PENDING_INPUTS: $TerminalCraftingJobStatus;
        static UNSTARTED: $TerminalCraftingJobStatus;
        static CRAFTING: $TerminalCraftingJobStatus;
        static ERROR: $TerminalCraftingJobStatus;
        static INVALID: $TerminalCraftingJobStatus;
        static QUEUEING: $TerminalCraftingJobStatus;
        static INVALID_INPUTS: $TerminalCraftingJobStatus;
        static FINISHED: $TerminalCraftingJobStatus;
        static PENDING_DEPENDENCIES: $TerminalCraftingJobStatus;
        static PENDING_OUTPUT_STORAGE: $TerminalCraftingJobStatus;
        get priority(): number;
        get valid(): boolean;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $TerminalCraftingJobStatus}.
     */
    export type $TerminalCraftingJobStatus_ = "error" | "invalid" | "unstarted" | "queueing" | "pending_dependencies" | "pending_inputs" | "invalid_inputs" | "crafting" | "finished" | "pending_output_storage";
    export class $ITerminalCraftingOption<T> {
    }
    export interface $ITerminalCraftingOption<T> extends $Comparable<$ITerminalCraftingOption<T>> {
        getInputs<T1, M>(arg0: $IngredientComponent_<T1, M>): $Collection<T1>;
        getCraftingMachines(): $List<$ItemStack>;
        getOutputs(): $Iterator<$ITerminalCraftingOption<T>>;
        getOutputs<T, M>(arg0: $IngredientComponent_<T, M>): $Collection<T>;
        getInputComponents(): $Collection<$IngredientComponent<never, never>>;
        getInputAlternatives<T1, M>(arg0: $IngredientComponent_<T1, M>): $List<$List<$IPrototypedIngredient<T1, M>>>;
        getOutputComponents(): $Collection<$IngredientComponent<never, never>>;
        getEstimatedTickDuration(): number;
        get craftingMachines(): $List<$ItemStack>;
        get inputComponents(): $Collection<$IngredientComponent<never, never>>;
        get outputComponents(): $Collection<$IngredientComponent<never, never>>;
        get estimatedTickDuration(): number;
    }
}
