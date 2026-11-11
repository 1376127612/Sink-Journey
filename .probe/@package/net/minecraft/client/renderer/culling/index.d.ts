import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $ViewportProvider {
        prepare(camX: number, arg1: number, camY: number): void;
        offsetToFullyIncludeCameraCube(offset: number): $Frustum;
        isVisible(aabb: $AABB_): boolean;
        sodium$createViewport(): $Viewport;
        static OFFSET_STEP: number;
        constructor(frustum: $Matrix4f, projection: $Matrix4f);
        constructor(other: $Frustum);
    }
}
