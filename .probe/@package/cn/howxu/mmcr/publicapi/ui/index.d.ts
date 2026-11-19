import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $DataKey } from "@package/cn/howxu/mmcr/publicapi/data";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RuntimeFailure } from "@package/cn/howxu/mmcr/publicapi/runtime";
import { $Enum } from "@package/java/lang";
import { $UUID, $List, $Map } from "@package/java/util";
import { $MachineContext } from "@package/cn/howxu/mmcr/publicapi/behavior";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/cn/howxu/mmcr/publicapi/ui" {
    export class $ControllerUiSnapshot$Lane {
    }
    export interface $ControllerUiSnapshot$Lane {
        totalTick(): number;
        index(): number;
        base(): boolean;
        lines(): $List<$ControllerUiSnapshot$TextLine>;
        id(): string;
        failure(): ($RuntimeFailure) | undefined;
        parallelism(): number;
        recipe(): $ControllerUiSnapshot$RecipePresentation;
        core(): boolean;
        active(): boolean;
        tick(): number;
        recipeId(): ($ResourceLocation) | undefined;
    }
    export class $ControllerUiSnapshot$Role extends $Enum<$ControllerUiSnapshot$Role> {
        static values(): $ControllerUiSnapshot$Role[];
        static valueOf(name: string): $ControllerUiSnapshot$Role;
        static MODULE: $ControllerUiSnapshot$Role;
        static HOST: $ControllerUiSnapshot$Role;
        static NORMAL: $ControllerUiSnapshot$Role;
    }
    /**
     * Values that may be interpreted as {@link $ControllerUiSnapshot$Role}.
     */
    export type $ControllerUiSnapshot$Role_ = "normal" | "host" | "module";
    export class $ControllerUiSnapshot$TextLine {
    }
    export interface $ControllerUiSnapshot$TextLine {
        scope(): $ControllerUiSnapshot$TextLine$Scope;
        id(): $ResourceLocation;
        text(): $Component;
    }
    export class $ControllerUiSnapshot {
    }
    export interface $ControllerUiSnapshot {
        sessionId(): $UUID;
        controllerPos(): $BlockPos;
        redstonePaused(): boolean;
        matchedStage(): number;
        connectedHostId(): ($ResourceLocation) | undefined;
        foundLevelIds(): $List<$ResourceLocation>;
        dataStorageValues(): $Map<string, $DataKey>;
        lanes(): $List<$ControllerUiSnapshot$Lane>;
        stageCount(): number;
        currentRecipePoolId(): ($ResourceLocation) | undefined;
        installedModuleCount(): number;
        parallelSlots(): number;
        activeThreadCount(): number;
        machineName(): $Component;
        maxParallelism(): number;
        recipePoolIds(): $List<$ResourceLocation>;
        threadLimit(): number;
        hasDataStorage(): boolean;
        lines(): $List<$ControllerUiSnapshot$TextLine>;
        kind(): $ControllerUiSnapshot$Kind;
        failure(): ($RuntimeFailure) | undefined;
        ready(): boolean;
        active(): boolean;
        dimension(): $ResourceKey<$Level>;
        role(): $ControllerUiSnapshot$Role;
        machineId(): $ResourceLocation;
        formed(): boolean;
        revision(): number;
    }
    export class $UiRequestType<Q, R> {
        static of<Q, R>(id: $ResourceLocation_, version: number, requestCodec: $StreamCodec<$RegistryFriendlyByteBuf, Q>, responseCodec: $StreamCodec<$RegistryFriendlyByteBuf, R>): $UiRequestType<Q, R>;
    }
    export interface $UiRequestType<Q, R> {
        version(): number;
        id(): $ResourceLocation;
    }
    export class $UiStateProvider<T> {
    }
    export interface $UiStateProvider<T> {
        snapshot(context: $UiServerContext): T;
        revision(context: $UiServerContext): number;
    }
    export class $UiProtocolRegistrar {
    }
    export interface $UiProtocolRegistrar {
        state<T>(machineId: $ResourceLocation_, type: $UiStateType<T>, provider: $UiStateProvider<T>): void;
        request<Q, R>(machineId: $ResourceLocation_, type: $UiRequestType<Q, R>, handler: $UiRequestHandler_<Q, R>): void;
    }
    export class $ControllerUiSnapshot$Kind extends $Enum<$ControllerUiSnapshot$Kind> {
        static values(): $ControllerUiSnapshot$Kind[];
        static valueOf(name: string): $ControllerUiSnapshot$Kind;
        static TICK: $ControllerUiSnapshot$Kind;
        static FACTORY: $ControllerUiSnapshot$Kind;
        static NORMAL: $ControllerUiSnapshot$Kind;
    }
    /**
     * Values that may be interpreted as {@link $ControllerUiSnapshot$Kind}.
     */
    export type $ControllerUiSnapshot$Kind_ = "normal" | "tick" | "factory";
    export class $UiStateType<T> {
        static of<T>(id: $ResourceLocation_, version: number, codec: $StreamCodec<$RegistryFriendlyByteBuf, T>): $UiStateType<T>;
    }
    export interface $UiStateType<T> {
        version(): number;
        id(): $ResourceLocation;
    }
    export class $UiRequestHandler<Q, R> {
    }
    export interface $UiRequestHandler<Q, R> {
        handle(context: $UiServerContext, request: Q): $UiResult<R>;
    }
    /**
     * Values that may be interpreted as {@link $UiRequestHandler}.
     */
    export type $UiRequestHandler_<Q, R> = ((context: $UiServerContext, request: Q) => $UiResult<R>);
    export class $UiServerContext {
    }
    export interface $UiServerContext {
        player(): $ServerPlayer;
        machine(): $MachineContext;
        laneId(): (string) | undefined;
    }
    export class $UiResult<R> {
        static reject<R>(reason: $Component_): $UiResult<R>;
        static success<R>(value: R): $UiResult<R>;
    }
    export interface $UiResult<R> {
        value(): (R) | undefined;
        status(): $UiResult$Status;
        message(): ($Component) | undefined;
    }
    export class $UiResult$Status extends $Enum<$UiResult$Status> {
        static values(): $UiResult$Status[];
        static valueOf(name: string): $UiResult$Status;
        static SUCCESS: $UiResult$Status;
        static CLOSED: $UiResult$Status;
        static INVALID_REQUEST: $UiResult$Status;
        static BUSY: $UiResult$Status;
        static TIMEOUT: $UiResult$Status;
        static UNSUPPORTED: $UiResult$Status;
        static HANDLER_FAILED: $UiResult$Status;
        static REJECTED: $UiResult$Status;
        static VERSION_MISMATCH: $UiResult$Status;
    }
    /**
     * Values that may be interpreted as {@link $UiResult$Status}.
     */
    export type $UiResult$Status_ = "success" | "rejected" | "unsupported" | "version_mismatch" | "invalid_request" | "closed" | "timeout" | "busy" | "handler_failed";
}
