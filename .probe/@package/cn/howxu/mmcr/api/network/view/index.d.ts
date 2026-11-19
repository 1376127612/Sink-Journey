import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MachineReference_ as $MachineReference_$1, $RequestBody as $RequestBody$1, $MachineReference as $MachineReference$1 } from "@package/cn/howxu/mmcr/api/network";
import { $DataValue, $DataStorage } from "@package/cn/howxu/mmcr/api/data/view";
import { $List, $Map_, $Map } from "@package/java/util";
import { $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/network/view" {
    export class $RequestBody {
        toInternal(): $RequestBody$1;
        static fromInternal(body: $RequestBody$1): $RequestBody;
        bridgeValue(): $Object;
        get(key: string): ($DataValue) | undefined;
        values(): $Map<string, $DataValue>;
        static of(values: $Map_<string, $DataValue>): $RequestBody;
    }
    export class $RequestFailed {
    }
    export interface $RequestFailed {
        fail(body: $RequestBody, request: $RequestInfo_, senderStorage: $DataStorage, reason: $RequestFailureReason_): void;
    }
    /**
     * Values that may be interpreted as {@link $RequestFailed}.
     */
    export type $RequestFailed_ = ((body: $RequestBody, request: $RequestInfo, senderStorage: $DataStorage, reason: $RequestFailureReason) => void);
    export class $RequestProcess {
    }
    export interface $RequestProcess {
        process(body: $RequestBody, request: $RequestInfo_, senderStorage: $DataStorage, receiverStorage: $DataStorage): void;
    }
    /**
     * Values that may be interpreted as {@link $RequestProcess}.
     */
    export type $RequestProcess_ = ((body: $RequestBody, request: $RequestInfo, senderStorage: $DataStorage, receiverStorage: $DataStorage) => void);
    export class $RequestInfo extends $Record {
        requestId(): $ResourceLocation;
        peer(): $MachineReference;
        constructor(requestId: $ResourceLocation_, peer: $MachineReference_);
    }
    /**
     * Values that may be interpreted as {@link $RequestInfo}.
     */
    export type $RequestInfo_ = { peer?: $MachineReference_, requestId?: $ResourceLocation_,  } | [peer?: $MachineReference_, requestId?: $ResourceLocation_, ];
    export class $NetworkInterfaceReference {
        bridgeValue(): $Object;
        position(): $BlockPos;
        connections(): $List<$MachineReference>;
    }
    export class $MachineReference extends $Record {
        toInternal(): $MachineReference$1;
        static fromInternal(reference: $MachineReference_$1): $MachineReference;
        bridgeValue(): $Object;
        type(): $ResourceLocation;
        hash(): number;
        constructor(type: $ResourceLocation_, hash: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineReference}.
     */
    export type $MachineReference_ = { hash?: number, type?: $ResourceLocation_,  } | [hash?: number, type?: $ResourceLocation_, ];
    export class $RequestFailureReason extends $Enum<$RequestFailureReason> {
        static values(): $RequestFailureReason[];
        static valueOf(name: string): $RequestFailureReason;
        static TARGET_CHUNK_UNLOADED: $RequestFailureReason;
        static CONNECTION_MISSING: $RequestFailureReason;
        static SOURCE_INTERFACE_MISSING: $RequestFailureReason;
        static TARGET_STRUCTURE_INVALID: $RequestFailureReason;
        static TARGET_HANDLER_MISSING: $RequestFailureReason;
        static SOURCE_STRUCTURE_INVALID: $RequestFailureReason;
        static HASH_MISMATCH: $RequestFailureReason;
        static ALLOWLIST_REJECTED: $RequestFailureReason;
        static TARGET_INTERFACE_MISSING: $RequestFailureReason;
        static UNREACHABLE: $RequestFailureReason;
    }
    /**
     * Values that may be interpreted as {@link $RequestFailureReason}.
     */
    export type $RequestFailureReason_ = "source_interface_missing" | "target_interface_missing" | "target_chunk_unloaded" | "connection_missing" | "source_structure_invalid" | "target_structure_invalid" | "hash_mismatch" | "allowlist_rejected" | "target_handler_missing" | "unreachable";
}
