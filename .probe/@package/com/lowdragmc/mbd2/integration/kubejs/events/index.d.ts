import { $Supplier } from "@package/java/util/function";
import { $MachineFuelBurningFinishEvent, $MachineOnConsumeInputsAfterWorkingEvent, $MachineFuelRecipeModifyEvent, $MachineUIEvent, $MachineClientTickEvent, $MachineOnRecipeWaitingEvent, $MachineRecipeModifyEvent$Before, $MachineOpenUIEvent, $MachineTickEvent, $MachinePlacedEvent, $MachineUseWithoutItemEvent, $MachineStructureInvalidEvent, $MachineRecipeModifyEvent$After, $MachineStructureFormedEvent, $MachineOnRecipeWorkingEvent, $MachineOnRecipeFinishEvent, $MachineDropsEvent, $MachineStateChangedEvent, $MachineRecipeStatusChangedEvent, $MachineEvent, $MachineBeforeRecipeWorkingEvent, $MachineAfterRecipeWorkingEvent, $MachineCustomDataUpdateEvent, $MachineRemovedEvent, $MachineNeighborChangedEvent, $MachineUseCatalystEvent, $MachineOnLoadEvent } from "@package/com/lowdragmc/mbd2/common/machine/definition/config/event";
import { $MBDMachineDefinition, $MBDMachineDefinition$Builder } from "@package/com/lowdragmc/mbd2/common/machine/definition";
import { $MachineCustomKeyframeEvent } from "@package/com/lowdragmc/mbd2/integration/geckolib";
import { $RecipeTypeEvent, $RecipeUIEvent, $TransferProxyRecipeEvent } from "@package/com/lowdragmc/mbd2/api/recipe/event";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomRenderer$RenderCallback_, $CustomRendererBuilder } from "@package/com/lowdragmc/mbd2/client/renderer/custom";
import { $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $MBDRecipeType } from "@package/com/lowdragmc/mbd2/api/recipe";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/com/lowdragmc/mbd2/integration/kubejs/events" {
    export class $MBDMachineEvents$MachineCustomDataUpdateEventJS extends $MBDMachineEvents$MachineEventJS<$MachineCustomDataUpdateEvent> {
        event: $MachineCustomDataUpdateEvent;
        constructor(arg0: $MachineCustomDataUpdateEvent);
    }
    export class $MBDMachineEvents$MachineOnConsumeInputsAfterWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnConsumeInputsAfterWorkingEvent> {
        event: $MachineOnConsumeInputsAfterWorkingEvent;
        constructor(arg0: $MachineOnConsumeInputsAfterWorkingEvent);
    }
    export class $MBDMachineEvents$MachineRecipeModifyEventAfterJS extends $MBDMachineEvents$MachineEventJS<$MachineRecipeModifyEvent$After> {
        event: $MachineRecipeModifyEvent$After;
        constructor(arg0: $MachineRecipeModifyEvent$After);
    }
    export class $MBDMachineEvents$MachineTickEventJS extends $MBDMachineEvents$MachineEventJS<$MachineTickEvent> {
        event: $MachineTickEvent;
        constructor(arg0: $MachineTickEvent);
    }
    export class $MBDMachineEvents$MachineCustomKeyframeEventJS extends $MBDMachineEvents$MachineEventJS<$MachineCustomKeyframeEvent> {
        event: $MachineCustomKeyframeEvent;
        constructor(arg0: $MachineCustomKeyframeEvent);
    }
    export class $MBDMachineEvents$MachineRecipeModifyEventBeforeJS extends $MBDMachineEvents$MachineEventJS<$MachineRecipeModifyEvent$Before> {
        event: $MachineRecipeModifyEvent$Before;
        constructor(arg0: $MachineRecipeModifyEvent$Before);
    }
    export class $MBDMachineEvents$MachineRecipeStatusChangedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineRecipeStatusChangedEvent> {
        event: $MachineRecipeStatusChangedEvent;
        constructor(arg0: $MachineRecipeStatusChangedEvent);
    }
    export class $MBDMachineEvents$MachineEventJS<E extends $MachineEvent> implements $KubeEvent {
        getEvent(): E;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        event: E;
        constructor(arg0: E);
    }
    export class $MBDMachineEvents$MachinePlacedEventJS extends $MBDMachineEvents$MachineEventJS<$MachinePlacedEvent> {
        event: $MachinePlacedEvent;
        constructor(arg0: $MachinePlacedEvent);
    }
    export class $MBDMachineEvents$MachineAfterRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineAfterRecipeWorkingEvent> {
        event: $MachineAfterRecipeWorkingEvent;
        constructor(arg0: $MachineAfterRecipeWorkingEvent);
    }
    export class $MBDMachineEvents$MachineClientTickEventJS extends $MBDMachineEvents$MachineEventJS<$MachineClientTickEvent> {
        event: $MachineClientTickEvent;
        constructor(arg0: $MachineClientTickEvent);
    }
    export class $CustomRendererRegistryEventJS implements $KubeEvent {
        getRenderers(): $Map<$ResourceLocation, $CustomRendererBuilder>;
        register(arg0: $ResourceLocation_): $CustomRendererBuilder;
        register(arg0: $ResourceLocation_, arg1: $CustomRenderer$RenderCallback_): $CustomRendererBuilder;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        get renderers(): $Map<$ResourceLocation, $CustomRendererBuilder>;
    }
    export class $MBDMachineEvents$MachineUseCatalystEventJS extends $MBDMachineEvents$MachineEventJS<$MachineUseCatalystEvent> {
        event: $MachineUseCatalystEvent;
        constructor(arg0: $MachineUseCatalystEvent);
    }
    export class $MBDMachineEvents$MachineStructureFormedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineStructureFormedEvent> {
        event: $MachineStructureFormedEvent;
        constructor(arg0: $MachineStructureFormedEvent);
    }
    export class $MBDMachineEvents$MachineFuelRecipeModifyEventJS extends $MBDMachineEvents$MachineEventJS<$MachineFuelRecipeModifyEvent> {
        event: $MachineFuelRecipeModifyEvent;
        constructor(arg0: $MachineFuelRecipeModifyEvent);
    }
    export class $MBDMachineRegistryEventJS implements $KubeEvent {
        removeMachine(arg0: $ResourceLocation_): void;
        create(arg0: string, arg1: $ResourceLocation_): $MBDMachineDefinition$Builder;
        getMachine(arg0: $ResourceLocation_): $MBDMachineDefinition;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        static BUILDERS: $Map<string, $Supplier<$MBDMachineDefinition$Builder>>;
        constructor();
    }
    export class $MBDMachineEvents$MachineNeighborChangedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineNeighborChangedEvent> {
        event: $MachineNeighborChangedEvent;
        constructor(arg0: $MachineNeighborChangedEvent);
    }
    export class $MBDMachineEvents$MachineDropsEventJS extends $MBDMachineEvents$MachineEventJS<$MachineDropsEvent> {
        event: $MachineDropsEvent;
        constructor(arg0: $MachineDropsEvent);
    }
    export class $MBDRecipeTypeEvents$RecipeTypeEventJS<E extends $RecipeTypeEvent> implements $KubeEvent {
        getEvent(): E;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        event: E;
        constructor(arg0: E);
    }
    export class $MBDRecipeTypeEvents$RecipeUIEventJS extends $MBDRecipeTypeEvents$RecipeTypeEventJS<$RecipeUIEvent> {
        event: $RecipeUIEvent;
        constructor(arg0: $RecipeUIEvent);
    }
    export class $MBDMachineEvents$MachineOpenUIEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOpenUIEvent> {
        event: $MachineOpenUIEvent;
        constructor(arg0: $MachineOpenUIEvent);
    }
    export class $MBDMachineEvents$MachineOnRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnRecipeWorkingEvent> {
        event: $MachineOnRecipeWorkingEvent;
        constructor(arg0: $MachineOnRecipeWorkingEvent);
    }
    export class $MBDMachineEvents$MachineOnLoadEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnLoadEvent> {
        event: $MachineOnLoadEvent;
        constructor(arg0: $MachineOnLoadEvent);
    }
    export class $MBDMachineEvents$MachineStateChangedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineStateChangedEvent> {
        event: $MachineStateChangedEvent;
        constructor(arg0: $MachineStateChangedEvent);
    }
    export class $MBDMachineEvents$MachineUseWithoutItemEventJS extends $MBDMachineEvents$MachineEventJS<$MachineUseWithoutItemEvent> {
        event: $MachineUseWithoutItemEvent;
        constructor(arg0: $MachineUseWithoutItemEvent);
    }
    export class $MBDMachineEvents$MachineUIEventJS extends $MBDMachineEvents$MachineEventJS<$MachineUIEvent> {
        event: $MachineUIEvent;
        constructor(arg0: $MachineUIEvent);
    }
    export class $MBDMachineEvents$MachineStructureInvalidEventJS extends $MBDMachineEvents$MachineEventJS<$MachineStructureInvalidEvent> {
        event: $MachineStructureInvalidEvent;
        constructor(arg0: $MachineStructureInvalidEvent);
    }
    export class $MBDRecipeTypeRegistryEventJS implements $KubeEvent {
        getRecipeType(arg0: $ResourceLocation_): $MBDRecipeType;
        createRecipeType(arg0: $ResourceLocation_): $MBDRecipeType;
        removeRecipeType(arg0: $ResourceLocation_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $MBDMachineEvents$MachineOnRecipeFinishEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnRecipeFinishEvent> {
        event: $MachineOnRecipeFinishEvent;
        constructor(arg0: $MachineOnRecipeFinishEvent);
    }
    export class $MBDMachineEvents$MachineOnRecipeWaitingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnRecipeWaitingEvent> {
        event: $MachineOnRecipeWaitingEvent;
        constructor(arg0: $MachineOnRecipeWaitingEvent);
    }
    export class $MBDRecipeTypeEvents$TransferProxyRecipeEventJS extends $MBDRecipeTypeEvents$RecipeTypeEventJS<$TransferProxyRecipeEvent> {
        event: $TransferProxyRecipeEvent;
        constructor(arg0: $TransferProxyRecipeEvent);
    }
    export class $MBDMachineEvents$MachineFuelBurningFinishEventJS extends $MBDMachineEvents$MachineEventJS<$MachineFuelBurningFinishEvent> {
        event: $MachineFuelBurningFinishEvent;
        constructor(arg0: $MachineFuelBurningFinishEvent);
    }
    export class $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineBeforeRecipeWorkingEvent> {
        event: $MachineBeforeRecipeWorkingEvent;
        constructor(arg0: $MachineBeforeRecipeWorkingEvent);
    }
    export class $MBDMachineEvents$MachineRemovedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineRemovedEvent> {
        event: $MachineRemovedEvent;
        constructor(arg0: $MachineRemovedEvent);
    }
}
