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
        isCulled(): boolean;
        setCulled(arg0: boolean): void;
        setShouldEntityAppearGlowing(arg0: boolean): void;
        isShouldEntityAppearGlowing(): boolean;
        getEc$PBlockPos(): $BlockPos;
        setEc$Position(arg0: $Vec3_): void;
        isForcedVisible(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isOutOfCamera(): boolean;
        setEc$PBlockPos(arg0: $BlockPos_): void;
        setEc$BoundingBox(arg0: $AABB_): void;
        getEc$BoundingBox(): $AABB;
        getEc$Position(): $Vec3;
        setTimeout(): void;
        get forcedVisible(): boolean;
    }
    export class $EntityRendererInter<T extends $Entity> {
    }
    export interface $EntityRendererInter<T extends $Entity> {
        entityCullingGetCullingBox(arg0: T): $AABB;
        entityCullingIgnoresCulling(arg0: T): boolean;
        shadowShouldShowName(arg0: T): boolean;
        shadowRenderNameTag(arg0: T, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
    }
}
