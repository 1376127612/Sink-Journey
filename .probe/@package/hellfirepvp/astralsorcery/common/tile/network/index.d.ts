import { $Level_ } from "@package/net/minecraft/world/level";
import { $TransmissionReceiverNode } from "@package/hellfirepvp/astralsorcery/common/starlight/api";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $TransmissionNodeProvider } from "@package/hellfirepvp/astralsorcery/common/starlight/api/provider";
import { $StarlightTransmissionPacket_ } from "@package/hellfirepvp/astralsorcery/common/starlight/transmission";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/hellfirepvp/astralsorcery/common/tile/network" {
    export class $ForwardingStarlightReceiverNode$ReceiverTile {
    }
    export interface $ForwardingStarlightReceiverNode$ReceiverTile extends $IBlockEntityExtension {
        receiveStarlight(arg0: $ServerLevel, arg1: $StarlightTransmissionPacket_): void;
    }
    export class $ForwardingStarlightReceiverNode implements $TransmissionReceiverNode {
        getProvider(): $TransmissionNodeProvider<never>;
        getNodePos(): $BlockPos;
        receiveStarlight(arg0: $ServerLevel, arg1: $StarlightTransmissionPacket_): void;
        markDirty(arg0: $Level_): void;
        updateFromTileEntity<T extends $BlockEntity>(arg0: T): boolean;
        getTransmissionLossMultiplier(): number;
        static CODEC: $MapCodec<$ForwardingStarlightReceiverNode>;
        constructor(arg0: $BlockPos_);
        get provider(): $TransmissionNodeProvider<never>;
        get nodePos(): $BlockPos;
        get transmissionLossMultiplier(): number;
    }
}
