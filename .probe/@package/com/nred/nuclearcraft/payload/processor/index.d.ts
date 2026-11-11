import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Tank$TankInfo, $Tank$TankInfo_, $Tank } from "@package/com/nred/nuclearcraft/block_entity/internal/fluid";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TileUpdatePacket } from "@package/com/nred/nuclearcraft/payload";
import { $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/nred/nuclearcraft/payload/processor" {
    export class $EnergyProcessorUpdatePacket extends $ProcessorUpdatePacket {
        static fromBytes(arg0: $RegistryFriendlyByteBuf): $EnergyProcessorUpdatePacket;
        baseProcessPower: number;
        pos: $BlockPos;
        isProcessing: boolean;
        energyStored: number;
        time: number;
        tankInfos: $List<$Tank$TankInfo>;
        static TYPE: $CustomPacketPayload$Type<$EnergyProcessorUpdatePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnergyProcessorUpdatePacket>;
        baseProcessTime: number;
        constructor(arg0: $BlockPos_, arg1: boolean, arg2: number, arg3: number, arg4: $List_<$Tank>, arg5: number, arg6: number);
        constructor(arg0: $ProcessorUpdatePacket, arg1: number, arg2: number);
    }
    export class $ProcessorUpdatePacket extends $TileUpdatePacket {
        static fromBytes(arg0: $RegistryFriendlyByteBuf): $ProcessorUpdatePacket;
        pos: $BlockPos;
        isProcessing: boolean;
        time: number;
        tankInfos: $List<$Tank$TankInfo>;
        static TYPE: $CustomPacketPayload$Type<$EnergyProcessorUpdatePacket>;
        baseProcessTime: number;
        constructor(arg0: $ProcessorUpdatePacket);
        constructor(arg0: $TileUpdatePacket, arg1: boolean, arg2: number, arg3: number, arg4: $List_<$Tank$TankInfo_>);
        constructor(arg0: $BlockPos_, arg1: boolean, arg2: number, arg3: number, arg4: $List_<$Tank>);
    }
}
