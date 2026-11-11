import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Iterable_ } from "@package/java/lang";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
export * as processor from "@package/com/nred/nuclearcraft/payload/processor";

declare module "@package/com/nred/nuclearcraft/payload" {
    export class $NCPacket implements $CustomPacketPayload {
        toBytes(arg0: $RegistryFriendlyByteBuf): void;
        sendToServer(): void;
        sendToAll(): void;
        sendTo<T extends $Player>(arg0: $Iterable_<T>): void;
        sendTo(arg0: $Player): void;
        sendToAllTracking(arg0: $Entity): void;
        sendToDimension(arg0: $ServerLevel): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
    }
    export class $TileUpdatePacket extends $NCPacket {
        static fromBytes(arg0: $RegistryFriendlyByteBuf): $TileUpdatePacket;
        pos: $BlockPos;
        constructor(arg0: $BlockPos_);
        constructor(arg0: $TileUpdatePacket);
    }
}
