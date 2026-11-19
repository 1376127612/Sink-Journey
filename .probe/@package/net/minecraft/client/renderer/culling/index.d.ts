import { $AccessorMixinFrustum } from "@package/mysticmods/roots/mixin/client/accessor";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $ViewportProvider, $AccessorMixinFrustum {
        offsetToFullyIncludeCameraCube(offset: number): $Frustum;
        prepare(camX: number, arg1: number, camY: number): void;
        sodium$createViewport(): $Viewport;
        isVisible(aabb: $AABB_): boolean;
        roots_1_21$cubeInFrustum(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): boolean;
        static OFFSET_STEP: number;
        constructor(frustum: $Matrix4f, projection: $Matrix4f);
        constructor(other: $Frustum);
    }
}
