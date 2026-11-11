import { $Level_ } from "@package/net/minecraft/world/level";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Comparable, $Record } from "@package/java/lang";
import { $Vec3_, $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/george_vi/electroenergetics/foundation/nodes" {
    export class $Node {
        constructor();
    }
    export class $InWorldNode extends $Node implements $Comparable<$InWorldNode> {
        compareTo(arg0: $InWorldNode): number;
        id(): number;
        getPosition(arg0: $Level_): $Vec3;
        getPosition(arg0: $Level_, arg1: number): $Vec3;
        static getHitNode(arg0: $BlockHitResult, arg1: $ClientLevel): $InWorldNode;
        sourcePos(): $BlockPos;
        getLocalPosition(arg0: $Level_): $Vec3;
        static isPosFullyLoadable(arg0: $Level_, arg1: $BlockPos_): boolean;
        toGlobalPosNoSable(arg0: $Vec3_, arg1: $Level_): $Vec3;
        toGlobalPos(arg0: $Vec3_, arg1: $Level_): $Vec3;
        toGlobalPos(arg0: $Vec3_, arg1: $Level_, arg2: number): $Vec3;
        static isFromSubLevel(arg0: $Level_, arg1: $BlockPos_): boolean;
        isFullyLoadable(arg0: $Level_): boolean;
        static readFromTag(arg0: $CompoundTag_): $InWorldNode;
        sableSourcePos(arg0: $Level_): $BlockPos;
        static closestNode(arg0: $Level_, arg1: $Vec3_, arg2: number, arg3: $BlockPos_): $InWorldNode;
        static closestNode(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $Vec3_): $InWorldNode;
        static ZERO: $InWorldNode;
        static CODEC: $Codec<$InWorldNode>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InWorldNode>;
        constructor(arg0: number, arg1: $BlockPos_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $NodeConnectionPoint extends $Record {
        reverse(): $NodeConnectionPoint;
        point(): number;
        connection(): $InWorldNodeConnection;
        posAt(arg0: $Vec3_, arg1: $Vec3_, arg2: number): $Vec3;
        posAt(arg0: $Vec3_, arg1: $Vec3_): $Vec3;
        node1(): $InWorldNode;
        node2(): $InWorldNode;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NodeConnectionPoint>;
        constructor(node1: $InWorldNode, node2: $InWorldNode, point: number);
    }
    /**
     * Values that may be interpreted as {@link $NodeConnectionPoint}.
     */
    export type $NodeConnectionPoint_ = { node2?: $InWorldNode, node1?: $InWorldNode, point?: number,  } | [node2?: $InWorldNode, node1?: $InWorldNode, point?: number, ];
    export class $AttachedNode extends $Node {
        id: number;
        ownerID: string;
        constructor(arg0: number, arg1: string);
    }
    export class $InWorldNodeConnection implements $Comparable<$InWorldNodeConnection> {
        compareTo(arg0: $InWorldNodeConnection): number;
        node1(): $InWorldNode;
        node2(): $InWorldNode;
        isAny(arg0: $InWorldNode): boolean;
        isFullyLoaded(arg0: $Level_): boolean;
        static CODEC: $Codec<$InWorldNodeConnection>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InWorldNodeConnection>;
        constructor(arg0: $InWorldNode, arg1: $InWorldNode);
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
    }
    export class $DirectionalNodeConnection {
        invert(): $DirectionalNodeConnection;
        node1(): $Node;
        node2(): $Node;
        isAny(arg0: $Node): boolean;
        constructor(arg0: $Node, arg1: $Node);
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
    }
}
