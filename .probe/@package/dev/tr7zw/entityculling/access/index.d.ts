import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AABB, $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/tr7zw/entityculling/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        setTimeout(): void;
        isShouldEntityAppearGlowing(): boolean;
        setShouldEntityAppearGlowing(arg0: boolean): void;
        setOutOfCamera(arg0: boolean): void;
        getEc$BoundingBox(): $AABB;
        isOutOfCamera(): boolean;
        setEc$BoundingBox(arg0: $AABB_): void;
        getEc$Position(): $Vec3;
        isForcedVisible(): boolean;
        setEc$Position(arg0: $Vec3_): void;
        setEc$PBlockPos(arg0: $BlockPos_): void;
        getEc$PBlockPos(): $BlockPos;
        setCulled(arg0: boolean): void;
        isCulled(): boolean;
        get forcedVisible(): boolean;
    }
    export class $EntityRendererInter<T extends $Entity> {
    }
    export interface $EntityRendererInter<T extends $Entity> {
        entityCullingIgnoresCulling(arg0: T): boolean;
        shadowRenderNameTag(arg0: T, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowShouldShowName(arg0: T): boolean;
        entityCullingGetCullingBox(arg0: T): $AABB;
    }
}
