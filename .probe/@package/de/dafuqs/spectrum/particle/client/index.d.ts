import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EarlyRenderingParticle } from "@package/de/dafuqs/spectrum/particle/render";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $TextureSheetParticle } from "@package/net/minecraft/client/particle";
import { $PastelPayload } from "@package/de/dafuqs/spectrum/blocks/pastel_network/payloads";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PositionSource } from "@package/net/minecraft/world/level/gameevent";
import { $Camera } from "@package/net/minecraft/client";
import { $List_ } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/de/dafuqs/spectrum/particle/client" {
    export class $TransmissionParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        gravity: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $PositionSource, arg5: number);
    }
    export class $PastelTransmissionParticle extends $TransmissionParticle implements $EarlyRenderingParticle {
        getLightColor(arg0: number): number;
        getPos(arg0: number): $Vec3;
        renderAfterEntities(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        itemRenderer: $ItemRenderer;
        stoppedByCollision: boolean;
        gravity: number;
        constructor(arg0: $ItemRenderer, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: $List_<$BlockPos_>, arg6: $PastelPayload, arg7: number, arg8: number);
    }
}
