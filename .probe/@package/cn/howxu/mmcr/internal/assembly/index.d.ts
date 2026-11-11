import { $Predicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BlockPredicate, $BlockPredicate_ } from "@package/cn/howxu/mmcr/api/machine";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/internal/assembly" {
    export class $StructureItemSource {
    }
    export interface $StructureItemSource {
        copyStacks(): $List<$ItemStack>;
        canExtractAll(requirements: $List_<$ItemStack_>): boolean;
        copyFluidSources(): $Map<$Fluid, number>;
        placeFluidSource(fluid: $Fluid_, placement: $BooleanSupplier_): boolean;
        extractAll(requirements: $List_<$ItemStack_>): boolean;
    }
    export class $MultiblockAssemblyService$Placement extends $Record {
        matches(current: $BlockState_, stateSensitive: boolean): boolean;
        matches(current: $BlockState_): boolean;
        state(): $BlockState;
        pos(): $BlockPos;
        predicate(): $BlockPredicate;
        requirement(): $ItemStack;
        constructor(pos: $BlockPos_, state: $BlockState_, requirement: $ItemStack_);
        constructor(pos: $BlockPos_, state: $BlockState_, requirement: $ItemStack_, predicate: $BlockPredicate_);
    }
    /**
     * Values that may be interpreted as {@link $MultiblockAssemblyService$Placement}.
     */
    export type $MultiblockAssemblyService$Placement_ = { predicate?: $BlockPredicate_, pos?: $BlockPos_, requirement?: $ItemStack_, state?: $BlockState_,  } | [predicate?: $BlockPredicate_, pos?: $BlockPos_, requirement?: $ItemStack_, state?: $BlockState_, ];
    export class $MultiblockAssemblyService$BuildTask {
        static create(controllerKey: $BlockPos_, placements: $List_<$MultiblockAssemblyService$Placement_>, budget: number): $MultiblockAssemblyService$BuildTask;
        static create(controllerKey: $BlockPos_, placements: $List_<$MultiblockAssemblyService$Placement_>, budget: number, reservedMaterial: boolean): $MultiblockAssemblyService$BuildTask;
        static create(controllerKey: $BlockPos_, stage: number, placements: $List_<$MultiblockAssemblyService$Placement_>, budget: number, reservedMaterial: boolean, materialSource: $StructureItemSource): $MultiblockAssemblyService$BuildTask;
        static create(controllerKey: $BlockPos_, stage: number, placements: $List_<$MultiblockAssemblyService$Placement_>, budget: number, reservedMaterial: boolean): $MultiblockAssemblyService$BuildTask;
        advance(placementAction: $Predicate_<$MultiblockAssemblyService$Placement>): number;
        stage(): number;
        isComplete(): boolean;
        placedCount(): number;
        refundRequirements(): $List<$ItemStack>;
        takeCompletionReport(): ($Component) | undefined;
        controllerKey(): $BlockPos;
        unconsumedPlacements(): $List<$MultiblockAssemblyService$Placement>;
        unconsumedRequirements(): $List<$ItemStack>;
        get complete(): boolean;
    }
}
