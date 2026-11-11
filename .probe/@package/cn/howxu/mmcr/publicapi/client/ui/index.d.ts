import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Executor_, $CompletionStage } from "@package/java/util/concurrent";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $UUID } from "@package/java/util";
import { $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $UiStateType, $UiRequestType, $ControllerUiSnapshot, $UiResult } from "@package/cn/howxu/mmcr/publicapi/ui";

declare module "@package/cn/howxu/mmcr/publicapi/client/ui" {
    export class $ControllerUiSlots {
    }
    export interface $ControllerUiSlots {
        setPlayerInventoryVisible(visible: boolean): void;
        isPlayerInventoryVisible(): boolean;
    }
    export class $UiSubscription {
    }
    export interface $UiSubscription extends $AutoCloseable {
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $UiSubscription}.
     */
    export type $UiSubscription_ = (() => void);
    export class $ControllerUiSession {
    }
    export interface $ControllerUiSession {
        isOpen(): boolean;
        id(): $UUID;
        snapshot(): $ControllerUiSnapshot;
        state<T>(type: $UiStateType<T>): (T) | undefined;
        close(): void;
        slots(): $ControllerUiSlots;
        request<Q, R>(type: $UiRequestType<Q, R>, laneId: string, body: Q): $CompletionStage<$UiResult<R>>;
        request<Q, R>(type: $UiRequestType<Q, R>, body: Q): $CompletionStage<$UiResult<R>>;
        subscribe<T>(type: $UiStateType<T>, executor: $Executor_, listener: $Consumer_<T>): $UiSubscription;
        subscribe(executor: $Executor_, listener: $Consumer_<$ControllerUiSnapshot>): $UiSubscription;
        supports(type: $UiStateType<never>): boolean;
        supports(type: $UiRequestType<never, never>): boolean;
        onClosed(executor: $Executor_, listener: $Runnable_): $UiSubscription;
        get open(): boolean;
    }
    export class $ControllerUiOpenContext {
    }
    export interface $ControllerUiOpenContext {
        session(): $ControllerUiSession;
        title(): $Component;
        menu(): $AbstractContainerMenu;
        inventory(): $Inventory;
    }
    export class $ControllerUiFactory {
    }
    export interface $ControllerUiFactory {
        create(context: $ControllerUiOpenContext): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $ControllerUiFactory}.
     */
    export type $ControllerUiFactory_ = ((context: $ControllerUiOpenContext) => $Screen);
}
