import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MachineComponent_, $MachineComponent, $ComponentType } from "@package/cn/howxu/mmcr/api/recipe";
import { $Enum } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/cn/howxu/mmcr/api/recipe/helper" {
    export class $ProcessingComponent {
        getType(): $ComponentType;
        tag(): string;
        getTag(): string;
        tags(): $List<string>;
        getContainer(): $BlockEntity;
        getComponent(): $MachineComponent;
        matchesTag(requirementTag: string): boolean;
        getPos(): $BlockPos;
        getTags(): $List<string>;
        getRelativePos(): $BlockPos;
        constructor(type: $ComponentType, tags: $List_<string>, pos: $BlockPos_);
        constructor(type: $ComponentType, tag: string, pos: $BlockPos_);
        constructor(component: $MachineComponent_, container: $BlockEntity, pos: $BlockPos_, relativePos: $BlockPos_, tags: $List_<string>, type: $ComponentType);
        constructor(component: $MachineComponent_, container: $BlockEntity, pos: $BlockPos_, relativePos: $BlockPos_, tags: $List_<string>);
        constructor(component: $MachineComponent_, container: $BlockEntity, pos: $BlockPos_, relativePos: $BlockPos_, tag: string);
        get type(): $ComponentType;
        get container(): $BlockEntity;
        get component(): $MachineComponent;
        get pos(): $BlockPos;
        get relativePos(): $BlockPos;
    }
    export class $CraftingStatus {
        static failure(unlocMessage: string): $CraftingStatus;
        isCrafting(): boolean;
        getStatus(): $CraftingStatus$Status;
        static working(unlocMessage: string): $CraftingStatus;
        static working(): $CraftingStatus;
        isFailure(): boolean;
        isPaused(): boolean;
        static paused(): $CraftingStatus;
        getUnlocMessage(): string;
        overrideStatusMessage(unlocalizedMessage: string): void;
        static IDLE: $CraftingStatus;
        static MISSING_STRUCTURE: $CraftingStatus;
        static CHUNK_UNLOADED: $CraftingStatus;
        constructor(status: $CraftingStatus$Status_, unlocalizedMessage: string);
        get crafting(): boolean;
        get status(): $CraftingStatus$Status;
        get unlocMessage(): string;
    }
    export class $CraftingStatus$Status extends $Enum<$CraftingStatus$Status> {
        static values(): $CraftingStatus$Status[];
        static valueOf(name: string): $CraftingStatus$Status;
        static PAUSED: $CraftingStatus$Status;
        static NO_RECIPE: $CraftingStatus$Status;
        static IDLE: $CraftingStatus$Status;
        static MISSING_STRUCTURE: $CraftingStatus$Status;
        static CRAFTING: $CraftingStatus$Status;
        static CHUNK_UNLOADED: $CraftingStatus$Status;
    }
    /**
     * Values that may be interpreted as {@link $CraftingStatus$Status}.
     */
    export type $CraftingStatus$Status_ = "idle" | "crafting" | "missing_structure" | "chunk_unloaded" | "no_recipe" | "paused";
}
