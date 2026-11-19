import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $WorldEventRenderer, $WorldEventInstance } from "@package/team/lodestar/lodestone/systems/worldevent";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/team/lodestar/lodestone/events/types/worldevent" {
    export class $WorldEventTickEvent extends $WorldEventInstanceEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $WorldEventInstance, arg1: $Level_);
    }
    export class $WorldEventInstanceEvent extends $Event {
        getLevel(): $Level;
        getWorldEvent(): $WorldEventInstance;
        constructor(arg0: $WorldEventInstance, arg1: $Level_);
        get level(): $Level;
        get worldEvent(): $WorldEventInstance;
    }
    export class $WorldEventRenderEvent extends $WorldEventInstanceEvent {
        getRenderer(): $WorldEventRenderer<$WorldEventInstance>;
        getMultiBufferSource(): $MultiBufferSource;
        getPartialTicks(): number;
        getPoseStack(): $PoseStack;
        constructor(arg0: $WorldEventInstance, arg1: $WorldEventRenderer<$WorldEventInstance>, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number);
        get renderer(): $WorldEventRenderer<$WorldEventInstance>;
        get multiBufferSource(): $MultiBufferSource;
        get partialTicks(): number;
        get poseStack(): $PoseStack;
    }
    export class $WorldEventDiscardEvent extends $WorldEventInstanceEvent {
        constructor(arg0: $WorldEventInstance, arg1: $Level_);
    }
    export class $WorldEventCreationEvent extends $WorldEventInstanceEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $WorldEventInstance, arg1: $Level_);
    }
}
