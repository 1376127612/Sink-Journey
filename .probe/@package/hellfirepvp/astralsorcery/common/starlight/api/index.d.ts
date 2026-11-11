import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $TransmissionNodeProvider } from "@package/hellfirepvp/astralsorcery/common/starlight/api/provider";
import { $StarlightTransmissionPacket_ } from "@package/hellfirepvp/astralsorcery/common/starlight/transmission";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RandomSource } from "@package/net/minecraft/util";
export * as provider from "@package/hellfirepvp/astralsorcery/common/starlight/api/provider";

declare module "@package/hellfirepvp/astralsorcery/common/starlight/api" {
    export class $TransmissionNode {
        static rand: $RandomSource;
        static CODEC: $Codec<$TransmissionNode>;
    }
    export interface $TransmissionNode {
        getProvider(): $TransmissionNodeProvider<never>;
        getNodePos(): $BlockPos;
        markDirty(arg0: $Level_): void;
        updateFromTileEntity<T extends $BlockEntity>(arg0: T): boolean;
        getTransmissionLossMultiplier(): number;
        get provider(): $TransmissionNodeProvider<never>;
        get nodePos(): $BlockPos;
        get transmissionLossMultiplier(): number;
    }
    export class $TransmissionReceiverNode {
    }
    export interface $TransmissionReceiverNode extends $TransmissionNode {
        receiveStarlight(arg0: $ServerLevel, arg1: $StarlightTransmissionPacket_): void;
    }
}
