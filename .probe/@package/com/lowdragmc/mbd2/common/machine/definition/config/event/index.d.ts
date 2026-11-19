import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $InteractionResult, $InteractionResult_, $InteractionHand, $ItemInteractionResult_, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $List, $List_ } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $RecipeLogic$Status, $MBDRecipe, $RecipeLogic$Status_, $RecipeLogic } from "@package/com/lowdragmc/mbd2/api/recipe";

declare module "@package/com/lowdragmc/mbd2/common/machine/definition/config/event" {
    export class $MachineOpenUIEvent extends $MachineEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        machine: $MBDMachine;
        player: $Player;
        constructor(arg0: $MBDMachine, arg1: $Player);
    }
    export class $MachineRecipeModifyEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        setRecipe(arg0: $MBDRecipe): void;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
    }
    export class $MachineOnRecipeWaitingEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
    }
    export class $MachineStructureInvalidEvent extends $MachineEvent {
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineRecipeStatusChangedEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipeLogic(): $RecipeLogic;
        getNewStatus(): $RecipeLogic$Status;
        getOldStatus(): $RecipeLogic$Status;
        newStatus: $RecipeLogic$Status;
        oldStatus: $RecipeLogic$Status;
        machine: $MBDMachine;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $RecipeLogic$Status_, arg3: $RecipeLogic$Status_);
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic$Status_, arg2: $RecipeLogic$Status_);
    }
    export class $RecipeLogicEvent {
    }
    export interface $RecipeLogicEvent {
        getRecipeLogic(): $RecipeLogic;
        get recipeLogic(): $RecipeLogic;
    }
    /**
     * Values that may be interpreted as {@link $RecipeLogicEvent}.
     */
    export type $RecipeLogicEvent_ = (() => $RecipeLogic);
    export class $MachineCustomDataUpdateEvent extends $MachineEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        newValue: $CompoundTag;
        machine: $MBDMachine;
        oldValue: $CompoundTag;
        constructor(arg0: $MBDMachine, arg1: $CompoundTag_, arg2: $CompoundTag_);
    }
    export class $MachineRecipeModifyEvent$After extends $MachineRecipeModifyEvent {
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
    }
    export class $MachineOnLoadEvent extends $MachineEvent {
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineStructureFormedEvent extends $MachineEvent {
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineUseWithoutItemEvent extends $MachineEvent {
        getInteractionResult(): $InteractionResult;
        getHit(): $BlockHitResult;
        setInteractionResult(arg0: $InteractionResult_): void;
        getPlayer(): $Player;
        hit: $BlockHitResult;
        interactionResult: $InteractionResult;
        machine: $MBDMachine;
        player: $Player;
        constructor(arg0: $MBDMachine, arg1: $Player, arg2: $BlockHitResult);
    }
    export class $MachineClientTickEvent extends $MachineEvent {
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineAfterRecipeWorkingEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
    }
    export class $MachineNeighborChangedEvent extends $MachineEvent {
        getFromPos(): $BlockPos;
        getBlock(): $Block;
        machine: $MBDMachine;
        fromPos: $BlockPos;
        block: $Block;
        constructor(arg0: $MBDMachine, arg1: $Block_, arg2: $BlockPos_);
    }
    export class $MachineUseCatalystEvent extends $MachineEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        catalyst: $ItemStack;
        machine: $MBDMachine;
        player: $Player;
        hand: $InteractionHand;
        constructor(arg0: $MBDMachine, arg1: $ItemStack_, arg2: $Player, arg3: $InteractionHand_);
    }
    export class $MachineFuelBurningFinishEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe | null);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe | null);
    }
    export class $MachineOnRecipeFinishEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
    }
    export class $MachineOnConsumeInputsAfterWorkingEvent extends $MachineEvent implements $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
    }
    export class $MachineEvent extends $Event {
        postKubeJSEvent(): $MachineEvent;
        postCustomEvent(): $MachineEvent;
        getMachine(): $MBDMachine;
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineTickEvent extends $MachineEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineUseItemOnEvent extends $MachineEvent {
        getHand(): $InteractionHand;
        getHit(): $BlockHitResult;
        setItemInteractionResult(arg0: $ItemInteractionResult_): void;
        getItemInteractionResult(): $ItemInteractionResult;
        getPlayer(): $Player;
        hit: $BlockHitResult;
        machine: $MBDMachine;
        itemInteractionResult: $ItemInteractionResult;
        player: $Player;
        hand: $InteractionHand;
        constructor(arg0: $MBDMachine, arg1: $Player, arg2: $InteractionHand_, arg3: $BlockHitResult);
    }
    export class $MachinePlacedEvent extends $MachineEvent {
        getItemStack(): $ItemStack;
        getPlayer(): $LivingEntity;
        itemStack: $ItemStack;
        machine: $MBDMachine;
        player: $LivingEntity;
        constructor(arg0: $MBDMachine, arg1: $LivingEntity, arg2: $ItemStack_);
    }
    export class $MachineStateChangedEvent extends $MachineEvent implements $ICancellableEvent {
        getNewState(): string;
        getOldState(): string;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        oldState: string;
        machine: $MBDMachine;
        newState: string;
        constructor(arg0: $MBDMachine, arg1: string, arg2: string);
    }
    export class $MachineFuelRecipeModifyEvent extends $MachineEvent implements $ICancellableEvent, $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        setRecipe(arg0: $MBDRecipe): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
    }
    export class $MachineRemovedEvent extends $MachineEvent {
        machine: $MBDMachine;
        constructor(arg0: $MBDMachine);
    }
    export class $MachineRecipeModifyEvent$Before extends $MachineRecipeModifyEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
    }
    export class $MachineOnRecipeWorkingEvent extends $MachineEvent implements $ICancellableEvent, $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getProgress(): number;
        getRecipeLogic(): $RecipeLogic;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        progress: number;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe, arg3: number);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe, arg2: number);
    }
    export class $MachineUIEvent extends $MachineEvent {
        setUi(arg0: $UI | null): void;
        getPlayer(): $Player;
        setPlayer(arg0: $Player): void;
        getUi(): $UI;
        ui: $UI;
        machine: $MBDMachine;
        player: $Player;
        constructor(arg0: $MBDMachine, arg1: $UI, arg2: $Player);
    }
    export class $MachineBeforeRecipeWorkingEvent extends $MachineEvent implements $ICancellableEvent, $RecipeLogicEvent {
        getRecipe(): $MBDRecipe;
        getRecipeLogic(): $RecipeLogic;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        machine: $MBDMachine;
        recipe: $MBDRecipe;
        recipeLogic: $RecipeLogic;
        constructor(arg0: $MBDMachine, arg1: $RecipeLogic, arg2: $MBDRecipe);
        constructor(arg0: $MBDMachine, arg1: $MBDRecipe);
    }
    export class $MachineDropsEvent extends $MachineEvent {
        getEntity(): $Entity;
        getDrops(): $List<$ItemStack>;
        drops: $List<$ItemStack>;
        machine: $MBDMachine;
        entity: $Entity;
        constructor(arg0: $MBDMachine, arg1: $Entity, arg2: $List_<$ItemStack_>);
    }
}
