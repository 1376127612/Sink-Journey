import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $PastelPayload, $PastelPayloadType_ } from "@package/de/dafuqs/spectrum/blocks/pastel_network/payloads";
import { $PastelNodeType_, $PastelNodeBlockEntity } from "@package/de/dafuqs/spectrum/blocks/pastel_network/nodes";
import { $UUID, $List, $Map, $Set, $UUID_, $List_ } from "@package/java/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GraphPath, $Graph } from "@package/org/jgrapht";
import { $TickLooper, $SchedulerMap$Callback } from "@package/de/dafuqs/spectrum/helpers";
import { $Enum } from "@package/java/lang";
import { $DefaultEdge } from "@package/org/jgrapht/graph";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/blocks/pastel_network/network" {
    export class $PastelTransmissionLogic {
        getLoadedNodes(arg0: $DeferredHolder<$PastelPayloadType_, never>, arg1: $PastelNodeType_): $Set<$PastelNodeBlockEntity>;
        addTransmission(arg0: $PastelNodeBlockEntity, arg1: $PastelNodeBlockEntity, arg2: $PastelTransmissionLogic$TransferMode_, arg3: $PastelTransmission): void;
        getPath(arg0: $PastelNodeBlockEntity, arg1: $PastelNodeBlockEntity): $GraphPath<$BlockPos, $DefaultEdge>;
        tick(arg0: boolean): void;
        invalidateCache(): void;
        static DEFAULT_TRANSFER_TICKS_PER_NODE: number;
        static DEFAULT_MAX_TRANSFER_COUNT_MULTIPLIER: number;
        static DEFAULT_TRANSFER_COOLDOWN_TICKS: number;
        constructor(arg0: $ServerPastelNetwork);
    }
    export class $PastelTransmission implements $SchedulerMap$Callback {
        setNetwork(arg0: $ServerPastelNetwork): void;
        getStartPos(): $BlockPos;
        getNodePositions(): $List<$BlockPos>;
        getTransmissionDuration(): number;
        getVertexTime(): number;
        trigger(): void;
        getPayload(): $PastelPayload;
        getNetwork(): $PastelNetwork<$ServerLevel>;
        static CODEC: $Codec<$PastelTransmission>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PastelTransmission>;
        constructor(arg0: $List_<$BlockPos_>, arg1: $PastelPayload, arg2: number);
        get startPos(): $BlockPos;
        get nodePositions(): $List<$BlockPos>;
        get transmissionDuration(): number;
        get vertexTime(): number;
        get payload(): $PastelPayload;
    }
    export class $PastelTransmissionLogic$TransferMode extends $Enum<$PastelTransmissionLogic$TransferMode> {
        static values(): $PastelTransmissionLogic$TransferMode[];
        static valueOf(arg0: string): $PastelTransmissionLogic$TransferMode;
        static PULL: $PastelTransmissionLogic$TransferMode;
        static PUSH_PULL: $PastelTransmissionLogic$TransferMode;
        static PUSH: $PastelTransmissionLogic$TransferMode;
    }
    /**
     * Values that may be interpreted as {@link $PastelTransmissionLogic$TransferMode}.
     */
    export type $PastelTransmissionLogic$TransferMode_ = "push" | "pull" | "push_pull";
    export class $PastelNetwork<W extends $Level> {
        getGraph(): $Graph<$BlockPos, $DefaultEdge>;
        getNodeDebugText(): string;
        hasEdge(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        graphToNbt(): $CompoundTag;
        setGraph(arg0: $Graph<$BlockPos_, $DefaultEdge>): void;
        static graphFromNbt(arg0: $CompoundTag_): $Graph<$BlockPos, $DefaultEdge>;
        size(): number;
        getLevel(): W;
        addEdge(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        addEdge(arg0: $PastelNodeBlockEntity, arg1: $PastelNodeBlockEntity): boolean;
        getColor(): number;
        getUUID(): $UUID;
        constructor(arg0: W, arg1: $UUID_, arg2: number);
        get nodeDebugText(): string;
        get level(): W;
        get color(): number;
        get UUID(): $UUID;
    }
    export class $ServerPastelNetwork extends $PastelNetwork<$ServerLevel> {
        markDirty(arg0: $BlockPos_): void;
        getLoadedNodes(arg0: $PastelNodeType_): $Set<$PastelNodeBlockEntity>;
        incorporate(arg0: $ServerPastelNetwork, arg1: $BlockPos_): void;
        addLoadedNode(arg0: $PastelNodeBlockEntity): boolean;
        addTransmission(arg0: $PastelTransmission, arg1: number): void;
        abortAllTransmissions(): void;
        getTransmissions(): $Map<$PastelTransmission, number>;
        static CODEC: $Codec<$ServerPastelNetwork>;
        constructor(arg0: $ServerLevel, arg1: $PastelNodeBlockEntity);
        constructor(arg0: $ServerLevel, arg1: $UUID_, arg2: number);
        constructor(arg0: $ServerLevel, arg1: $UUID_, arg2: number, arg3: $TickLooper);
        get transmissions(): $Map<$PastelTransmission, number>;
    }
}
