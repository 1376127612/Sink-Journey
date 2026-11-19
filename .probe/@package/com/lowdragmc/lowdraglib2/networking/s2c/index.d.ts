import { $BlockPos } from "@package/net/minecraft/core";
import { $ISyncBlockEntity_ } from "@package/com/lowdragmc/lowdraglib2/syncdata/holder/blockentity";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketIntLocation } from "@package/com/lowdragmc/lowdraglib2/networking";
import { $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $BitSet } from "@package/java/util";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/lowdraglib2/networking/s2c" {
    export class $SPacketAutoSyncBlockEntity extends $PacketIntLocation {
        static processPacket(arg0: $ISyncBlockEntity_, arg1: $SPacketAutoSyncBlockEntity): void;
        getPos(): $BlockPos;
        getBlockEntityType(): $BlockEntityType<never>;
        static decode(arg0: $RegistryFriendlyByteBuf): $SPacketAutoSyncBlockEntity;
        static of(arg0: $ISyncBlockEntity_, arg1: $BitSet, arg2: number[], arg3: $CompoundTag_): $SPacketAutoSyncBlockEntity;
        static execute(arg0: $SPacketAutoSyncBlockEntity, arg1: $IPayloadContext): void;
        getExtra(): $CompoundTag;
        getData(): number[];
        getChanged(): $BitSet;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SPacketAutoSyncBlockEntity>;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$SPacketAutoSyncBlockEntity>;
        get pos(): $BlockPos;
        get blockEntityType(): $BlockEntityType<never>;
        get extra(): $CompoundTag;
        get data(): number[];
        get changed(): $BitSet;
    }
}
