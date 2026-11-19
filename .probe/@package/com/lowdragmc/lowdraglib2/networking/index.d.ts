import { $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
export * as both from "@package/com/lowdragmc/lowdraglib2/networking/both";
export * as s2c from "@package/com/lowdragmc/lowdraglib2/networking/s2c";
export * as rpc from "@package/com/lowdragmc/lowdraglib2/networking/rpc";

declare module "@package/com/lowdragmc/lowdraglib2/networking" {
    export class $PacketIntLocation implements $CustomPacketPayload {
        write(arg0: $RegistryFriendlyByteBuf): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $BlockPos_);
        constructor();
    }
}
