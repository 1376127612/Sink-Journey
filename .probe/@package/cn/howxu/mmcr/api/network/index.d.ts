import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $DataValue, $DataStorage } from "@package/cn/howxu/mmcr/api/data";
export * as view from "@package/cn/howxu/mmcr/api/network/view";

declare module "@package/cn/howxu/mmcr/api/network" {
    export class $RequestInfo extends $Record {
        peer(): $MachineReference;
        requestId(): $ResourceLocation;
        constructor(requestId: $ResourceLocation_, peer: $MachineReference_);
    }
    /**
     * Values that may be interpreted as {@link $RequestInfo}.
     */
    export type $RequestInfo_ = { peer?: $MachineReference_, requestId?: $ResourceLocation_,  } | [peer?: $MachineReference_, requestId?: $ResourceLocation_, ];
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
    export class $RequestBody {
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
    export class $MachineReference extends $Record {
        type(): $ResourceLocation;
        hash(): number;
        constructor(type: $ResourceLocation_, hash: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineReference}.
     */
    export type $MachineReference_ = { hash?: number, type?: $ResourceLocation_,  } | [hash?: number, type?: $ResourceLocation_, ];
}
