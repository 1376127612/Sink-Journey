import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $Collection } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/desht/pneumaticcraft/api/drone/debug" {
    export class $DroneDebugEntry extends $Record {
        getPos(): $BlockPos;
        hasPos(): boolean;
        message(): string;
        static create(arg0: string, arg1: $BlockPos_, arg2: number): $DroneDebugEntry;
        pos(): ($BlockPos) | undefined;
        progWidgetIndex(): number;
        receivedTime(): number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $DroneDebugEntry>;
        constructor(progWidgetIndex: number, message: string, pos: ($BlockPos_) | undefined, receivedTime: number);
    }
    /**
     * Values that may be interpreted as {@link $DroneDebugEntry}.
     */
    export type $DroneDebugEntry_ = { progWidgetIndex?: number, message?: string, receivedTime?: number, pos?: ($BlockPos_) | undefined,  } | [progWidgetIndex?: number, message?: string, receivedTime?: number, pos?: ($BlockPos_) | undefined, ];
    export class $IDroneDebugger {
    }
    export interface $IDroneDebugger {
        getDebugEntry(arg0: number): $DroneDebugEntry;
        trackAsDebugged(arg0: $ServerPlayer): void;
        getDebuggingPlayers(): $Collection<$ServerPlayer>;
        addEntry(arg0: $DroneDebugEntry_): void;
        addEntry(arg0: string, arg1: $BlockPos_): void;
        addEntry(arg0: string): void;
        get debuggingPlayers(): $Collection<$ServerPlayer>;
    }
}
