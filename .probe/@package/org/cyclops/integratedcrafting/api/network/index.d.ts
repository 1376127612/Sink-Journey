import { $IRecipeIndex } from "@package/org/cyclops/integratedcrafting/api/recipe";
import { $Function_ } from "@package/java/util/function";
import { $IRecipeDefinition } from "@package/org/cyclops/commoncapabilities/api/capability/recipehandler";
import { $IIngredientComponentStorage } from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";
import { $IngredientComponent, $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Multimap } from "@package/com/google/common/collect";
import { $Iterator, $Set } from "@package/java/util";
import { $ICraftingInterface, $CraftingJob, $CraftingJobDependencyGraph } from "@package/org/cyclops/integratedcrafting/api/crafting";

declare module "@package/org/cyclops/integratedcrafting/api/network" {
    export class $ICraftingNetwork {
    }
    export interface $ICraftingNetwork {
        getRecipeCraftingInterfaces(arg0: number): $Multimap<$IRecipeDefinition, $ICraftingInterface>;
        getCraftingJobDependencyGraph(): $CraftingJobDependencyGraph;
        cancelCraftingJob(arg0: number, arg1: number): boolean;
        getRecipeIndex(arg0: number): $IRecipeIndex;
        getCraftingJob(arg0: number, arg1: number): $CraftingJob;
        getCraftingJobs(arg0: number): $Iterator<$CraftingJob>;
        getCraftingJobs<T, M>(arg0: number, arg1: $IngredientComponent_<T, M>, arg2: T, arg3: M): $Iterator<$CraftingJob>;
        getRunningTicks(arg0: $CraftingJob): number;
        removeCraftingInterfaceRecipe(arg0: number, arg1: $ICraftingInterface, arg2: $IRecipeDefinition): boolean;
        addCraftingInterfaceRecipe(arg0: number, arg1: $ICraftingInterface, arg2: $IRecipeDefinition): boolean;
        removeCraftingInterface(arg0: number, arg1: $ICraftingInterface): boolean;
        addCraftingInterface(arg0: number, arg1: $ICraftingInterface): boolean;
        scheduleCraftingJob(arg0: $CraftingJob, arg1: boolean, arg2: $Function_<$IngredientComponent<never, never>, $IIngredientComponentStorage<any, any>>): void;
        getChannels(): number[];
        getCraftingJobInterface(arg0: number, arg1: number): $ICraftingInterface;
        getEstimatedRecipeDuration(arg0: number, arg1: $IRecipeDefinition): number;
        onCraftingJobFinished(arg0: $CraftingJob): void;
        getCraftingInterfaces(arg0: number): $Set<$ICraftingInterface>;
        get craftingJobDependencyGraph(): $CraftingJobDependencyGraph;
        get channels(): number[];
    }
}
