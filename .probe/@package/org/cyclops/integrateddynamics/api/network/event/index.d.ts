import { $INetwork, $IEventListenableNetworkElement } from "@package/org/cyclops/integrateddynamics/api/network";
import { $Class } from "@package/java/lang";

declare module "@package/org/cyclops/integrateddynamics/api/network/event" {
    export class $INetworkEventBus {
    }
    export interface $INetworkEventBus {
        postCancelable(arg0: $ICancelableNetworkEvent): boolean;
        register(arg0: $IEventListenableNetworkElement<never>, arg1: $Class<$INetworkEvent_>): void;
        unregister(arg0: $IEventListenableNetworkElement<never>, arg1: $Class<$INetworkEvent_>): void;
        unregister(arg0: $IEventListenableNetworkElement<never>): void;
        post(arg0: $INetworkEvent_): void;
    }
    export class $ICancelableNetworkEvent {
    }
    export interface $ICancelableNetworkEvent extends $INetworkEvent {
        cancel(): void;
        isCanceled(): boolean;
        get canceled(): boolean;
    }
    export class $INetworkEvent {
    }
    export interface $INetworkEvent {
        getNetwork(): $INetwork;
        get network(): $INetwork;
    }
    /**
     * Values that may be interpreted as {@link $INetworkEvent}.
     */
    export type $INetworkEvent_ = (() => $INetwork);
}
