import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IRPCBlockEntity_ } from "@package/com/lowdragmc/lowdraglib2/syncdata/holder/blockentity";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketIntLocation } from "@package/com/lowdragmc/lowdraglib2/networking";
import { $RPCSender_ } from "@package/com/lowdragmc/lowdraglib2/syncdata/rpc";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/lowdraglib2/networking/both" {
    export class $PacketRPCBlockEntity extends $PacketIntLocation implements $CustomPacketPayload {
        static processPacket(arg0: $BlockEntity, arg1: $RPCSender_, arg2: $PacketRPCBlockEntity, arg3: $IPayloadContext): void;
        static executeServer(arg0: $PacketRPCBlockEntity, arg1: $IPayloadContext): void;
        static executeClient(arg0: $PacketRPCBlockEntity, arg1: $IPayloadContext): void;
        static decode(arg0: $RegistryFriendlyByteBuf): $PacketRPCBlockEntity;
        static of(arg0: $IRPCBlockEntity_, arg1: number[]): $PacketRPCBlockEntity;
        static execute(arg0: $PacketRPCBlockEntity, arg1: $IPayloadContext): void;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PacketRPCBlockEntity>;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$PacketRPCBlockEntity>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: number[]);
        constructor();
    }
}
