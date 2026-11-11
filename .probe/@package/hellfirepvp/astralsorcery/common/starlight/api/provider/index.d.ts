import { $TransmissionNode } from "@package/hellfirepvp/astralsorcery/common/starlight/api";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";

declare module "@package/hellfirepvp/astralsorcery/common/starlight/api/provider" {
    export interface $TransmissionNodeProvider<T> extends RegistryMarked<RegistryTypes.AstralsorceryTransmissionNodesTag, RegistryTypes.AstralsorceryTransmissionNodes> {}
    export class $TransmissionNodeProvider<T extends $TransmissionNode> {
        static NODE_CODEC: $Codec<$TransmissionNodeProvider<never>>;
    }
    export interface $TransmissionNodeProvider<T extends $TransmissionNode> {
        nodeCodec(): $MapCodec<T>;
        provideNewNode(arg0: $BlockPos_): T;
    }
    /**
     * Values that may be interpreted as {@link $TransmissionNodeProvider}.
     */
    export type $TransmissionNodeProvider_<T> = RegistryTypes.AstralsorceryTransmissionNodes;
}
