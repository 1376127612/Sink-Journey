import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $ControllerText, $JadeText } from "@package/cn/howxu/mmcr/publicapi/presentation";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Item_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DataStore } from "@package/cn/howxu/mmcr/publicapi/data";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RequirementSpec } from "@package/cn/howxu/mmcr/publicapi/recipe/requirement";
import { $MachineView, $IoTransaction, $RecipeExecutionView, $IoSnapshot, $OutputView, $RecipeView } from "@package/cn/howxu/mmcr/publicapi/runtime";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $List, $Map, $List_ } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/behavior" {
    export class $MachineContext {
    }
    export interface $MachineContext {
        level(): $ServerLevel;
        screenText(): $ControllerText;
        upgradeItems(): $List<$ItemStack>;
        dataStorage(): $DataStore;
        controller(): $MachineView;
        machineId(): $ResourceLocation;
        gameTime(): number;
        controllerPos(): $BlockPos;
        countStructureBlocks(block: $Block_): number;
        countStructureBlocks(blockId: $ResourceLocation_): number;
        jadeText(): $JadeText;
        isDue(period: number): boolean;
        ioView(): $IoSnapshot;
    }
    export class $RecipeTickContext {
    }
    export interface $RecipeTickContext {
        parallelism(): number;
        recipe(): $RecipeView;
        outputs(): $List<$OutputView>;
        requirements(): $List<$RequirementSpec>;
        totalTick(): number;
        currentTick(): number;
        machineContext(): $MachineContext;
        ioSnapshot(): $IoSnapshot;
    }
    export class $RecipeHooks {
    }
    export interface $RecipeHooks {
        beforeStart(callback: $Consumer_<$RecipeStartContext>): $RecipeHooks;
        recipeTick(callback: $Consumer_<$RecipeTickContext>): $RecipeHooks;
        postServerTick(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        preServerTick(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        idleEnd(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        idleStart(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        beforeFinish(callback: $Consumer_<$RecipeFinishContext>): $RecipeHooks;
    }
    export class $TickHooks {
    }
    export interface $TickHooks {
        serverTick(callback: $Consumer_<$TickContext>): $TickHooks;
    }
    /**
     * Values that may be interpreted as {@link $TickHooks}.
     */
    export type $TickHooks_ = ((callback: $Consumer<$TickContext>) => $TickHooks);
    export class $RecipeStartContext {
    }
    export interface $RecipeStartContext {
        snapshot(): $RecipeExecutionView;
        duration(): number;
        cancel(): void;
        cancelled(): boolean;
        recipe(): $RecipeView;
        setDuration(ticks: number): void;
        recipeId(): $ResourceLocation;
        outputs(): $List<$OutputView>;
        requirements(): $List<$RequirementSpec>;
        requestedParallelism(): number;
        setOutputs(outputs: $List_<$OutputView>): void;
        effectiveParallelism(): number;
        replaceExactItemInputCount(item: $Item_, expectedCount: number, replacementCount: number): boolean;
        machineContext(): $MachineContext;
        setRequirements(requirements: $List_<$RequirementSpec>): void;
    }
    export class $RecipeFinishContext {
    }
    export interface $RecipeFinishContext {
        cancel(): void;
        cancelled(): boolean;
        recipe(): $RecipeView;
        recipeId(): $ResourceLocation;
        outputs(): $List<$OutputView>;
        requestedParallelism(): number;
        setOutputs(outputs: $List_<$OutputView>): void;
        effectiveParallelism(): number;
        machineContext(): $MachineContext;
        discardOutputs(): void;
        outputsDiscarded(): boolean;
    }
    export class $TickContext {
    }
    export interface $TickContext extends $MachineContext {
        parallelism(): number;
        factoryThreadCount(): number;
        smartInterfaceValues(): $Map<string, number>;
        smartInterfaceValue(name: string): (number) | undefined;
        ioPlan(): $IoTransaction;
    }
}
