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
        gameTime(): number;
        dataStorage(): $DataStore;
        controllerPos(): $BlockPos;
        jadeText(): $JadeText;
        ioView(): $IoSnapshot;
        screenText(): $ControllerText;
        isDue(period: number): boolean;
        countStructureBlocks(block: $Block_): number;
        countStructureBlocks(blockId: $ResourceLocation_): number;
        upgradeItems(): $List<$ItemStack>;
        level(): $ServerLevel;
        controller(): $MachineView;
        machineId(): $ResourceLocation;
    }
    export class $RecipeTickContext {
    }
    export interface $RecipeTickContext {
        requirements(): $List<$RequirementSpec>;
        totalTick(): number;
        machineContext(): $MachineContext;
        parallelism(): number;
        recipe(): $RecipeView;
        currentTick(): number;
        outputs(): $List<$OutputView>;
        ioSnapshot(): $IoSnapshot;
    }
    export class $RecipeHooks {
    }
    export interface $RecipeHooks {
        postServerTick(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        preServerTick(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        recipeTick(callback: $Consumer_<$RecipeTickContext>): $RecipeHooks;
        idleEnd(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        idleStart(callback: $Consumer_<$MachineContext>): $RecipeHooks;
        beforeFinish(callback: $Consumer_<$RecipeFinishContext>): $RecipeHooks;
        beforeStart(callback: $Consumer_<$RecipeStartContext>): $RecipeHooks;
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
        requirements(): $List<$RequirementSpec>;
        requestedParallelism(): number;
        effectiveParallelism(): number;
        replaceExactItemInputCount(item: $Item_, expectedCount: number, replacementCount: number): boolean;
        machineContext(): $MachineContext;
        setRequirements(requirements: $List_<$RequirementSpec>): void;
        snapshot(): $RecipeExecutionView;
        duration(): number;
        cancel(): void;
        cancelled(): boolean;
        recipe(): $RecipeView;
        setDuration(ticks: number): void;
        setOutputs(outputs: $List_<$OutputView>): void;
        recipeId(): $ResourceLocation;
        outputs(): $List<$OutputView>;
    }
    export class $RecipeFinishContext {
    }
    export interface $RecipeFinishContext {
        requestedParallelism(): number;
        effectiveParallelism(): number;
        machineContext(): $MachineContext;
        outputsDiscarded(): boolean;
        discardOutputs(): void;
        cancel(): void;
        cancelled(): boolean;
        recipe(): $RecipeView;
        setOutputs(outputs: $List_<$OutputView>): void;
        recipeId(): $ResourceLocation;
        outputs(): $List<$OutputView>;
    }
    export class $TickContext {
    }
    export interface $TickContext extends $MachineContext {
        factoryThreadCount(): number;
        parallelism(): number;
        smartInterfaceValue(name: string): (number) | undefined;
        smartInterfaceValues(): $Map<string, number>;
        ioPlan(): $IoTransaction;
    }
}
