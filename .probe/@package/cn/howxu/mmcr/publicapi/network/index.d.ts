import { $DataKey, $DataStore } from "@package/cn/howxu/mmcr/publicapi/data";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Set_, $Map_, $Map, $Set } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/network" {
    export class $RequestHandler {
    }
    export interface $RequestHandler {
        process(body: $RequestPayload, request: $RequestDetails, senderStorage: $DataStore, receiverStorage: $DataStore): void;
    }
    /**
     * Values that may be interpreted as {@link $RequestHandler}.
     */
    export type $RequestHandler_ = ((body: $RequestPayload, request: $RequestDetails, senderStorage: $DataStore, receiverStorage: $DataStore) => void);
    export class $NodeView {
        static of(type: $ResourceLocation_, hash: number): $NodeView;
    }
    export interface $NodeView {
        type(): $ResourceLocation;
        hash(): number;
    }
    export class $RequestDetails {
    }
    export interface $RequestDetails {
        peer(): $NodeView;
        requestId(): $ResourceLocation;
    }
    export class $RequestPayload {
        static of(values: $Map_<string, $DataKey>): $RequestPayload;
    }
    export interface $RequestPayload {
        get(key: string): ($DataKey) | undefined;
        values(): $Map<string, $DataKey>;
    }
    export class $NetworkSettings {
        static of(maxCount: number, maxConnections: number, allowedMachineIds: $Set_<$ResourceLocation_>): $NetworkSettings;
        static disabled(): $NetworkSettings;
    }
    export interface $NetworkSettings {
        maxCount(): number;
        maxConnections(): number;
        allowedMachineIds(): $Set<$ResourceLocation>;
        withAllowedMachine(machineId: $ResourceLocation_): $NetworkSettings;
    }
    export class $FailureHandler {
    }
    export interface $FailureHandler {
        fail(body: $RequestPayload, request: $RequestDetails, senderStorage: $DataStore, reason: $RequestFailure_): void;
    }
    /**
     * Values that may be interpreted as {@link $FailureHandler}.
     */
    export type $FailureHandler_ = ((body: $RequestPayload, request: $RequestDetails, senderStorage: $DataStore, reason: $RequestFailure) => void);
    export class $RequestFailure extends $Enum<$RequestFailure> {
        static values(): $RequestFailure[];
        static valueOf(name: string): $RequestFailure;
        static TARGET_CHUNK_UNLOADED: $RequestFailure;
        static CONNECTION_MISSING: $RequestFailure;
        static SOURCE_INTERFACE_MISSING: $RequestFailure;
        static TARGET_STRUCTURE_INVALID: $RequestFailure;
        static TARGET_HANDLER_MISSING: $RequestFailure;
        static SOURCE_STRUCTURE_INVALID: $RequestFailure;
        static HASH_MISMATCH: $RequestFailure;
        static ALLOWLIST_REJECTED: $RequestFailure;
        static TARGET_INTERFACE_MISSING: $RequestFailure;
        static UNREACHABLE: $RequestFailure;
    }
    /**
     * Values that may be interpreted as {@link $RequestFailure}.
     */
    export type $RequestFailure_ = "source_interface_missing" | "target_interface_missing" | "target_chunk_unloaded" | "connection_missing" | "source_structure_invalid" | "target_structure_invalid" | "hash_mismatch" | "allowlist_rejected" | "target_handler_missing" | "unreachable";
}
