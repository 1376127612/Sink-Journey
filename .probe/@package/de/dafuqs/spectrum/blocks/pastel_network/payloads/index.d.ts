import { $Level_ } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $PastelTransmissionParticle } from "@package/de/dafuqs/spectrum/particle/client";
import { $PastelNodeBlockEntity } from "@package/de/dafuqs/spectrum/blocks/pastel_network/nodes";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PastelTransmissionLogic } from "@package/de/dafuqs/spectrum/blocks/pastel_network/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/blocks/pastel_network/payloads" {
    export class $PastelPayload {
        static CODEC: $Codec<$PastelPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PastelPayload>;
    }
    export interface $PastelPayload {
        codec(): $MapCodec<$PastelPayload>;
        renderAfterEntities(arg0: $PastelTransmissionParticle, arg1: $Level_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: $Camera, arg5: number): void;
        arriveAtDestination(arg0: $Level_, arg1: $BlockPos_, arg2: $PastelNodeBlockEntity): void;
        tick(arg0: $Level_, arg1: $PastelTransmissionParticle): void;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $PastelPayload>;
    }
    export interface $PastelPayloadType extends RegistryMarked<RegistryTypes.SpectrumPastelPayloadTypeTag, RegistryTypes.SpectrumPastelPayloadType> {}
    export class $PastelPayloadType {
        runsEveryTick(): boolean;
        getPayloadType(): $DeferredHolder<$PastelPayloadType, never>;
        tick(arg0: $PastelTransmissionLogic): void;
        constructor(arg0: $ResourceLocation_, arg1: $MapCodec_<$PastelPayload>);
        get payloadType(): $DeferredHolder<$PastelPayloadType, never>;
    }
    /**
     * Values that may be interpreted as {@link $PastelPayloadType}.
     */
    export type $PastelPayloadType_ = RegistryTypes.SpectrumPastelPayloadType;
}
