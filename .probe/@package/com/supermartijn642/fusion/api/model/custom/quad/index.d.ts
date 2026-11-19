import { $Consumer_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $AutoCloseable } from "@package/java/lang";
import { $Vector3f, $Vector3fc } from "@package/org/joml";

declare module "@package/com/supermartijn642/fusion/api/model/custom/quad" {
    export class $QuadAccess {
        static create(quad: $BakedQuad): $QuadAccess;
    }
    export interface $QuadAccess {
        toBakedQuad(): $BakedQuad;
        itemRenderType(fabulous: boolean): $RenderType;
        /**
         * @deprecated
         */
        itemRenderType(): $RenderType;
        chunkRenderType(): $RenderType;
        copyPosition(vertexIndex: number, dest: $Vector3f): $Vector3fc;
        facing(): $Direction;
        emissive(): boolean;
        position(vertexIndex: number): $Vector3fc;
        x(vertexIndex: number): number;
        v(vertexIndex: number): number;
        z(vertexIndex: number): number;
        u(vertexIndex: number): number;
        y(vertexIndex: number): number;
        tintIndex(): number;
        shade(): boolean;
        sprite(): $TextureAtlasSprite;
        ambientOcclusion(): boolean;
        lightEmission(): number;
    }
    export class $EmittableQuad$Popper {
    }
    export interface $EmittableQuad$Popper extends $AutoCloseable {
        popTransform(): void;
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $EmittableQuad$Popper}.
     */
    export type $EmittableQuad$Popper_ = (() => void);
    export class $EmittableQuad$Transform {
    }
    export interface $EmittableQuad$Transform {
        transform(quad: $EmittableQuad): void;
    }
    /**
     * Values that may be interpreted as {@link $EmittableQuad$Transform}.
     */
    export type $EmittableQuad$Transform_ = ((quad: $EmittableQuad) => void);
    export class $EmittableQuad {
        static create(emitter: $Consumer_<$MutableQuad>): $EmittableQuad;
    }
    export interface $EmittableQuad extends $MutableQuad {
        pushTransform(transform: $EmittableQuad$Transform_): $EmittableQuad$Popper;
        emit(): void;
    }
    export class $MutableQuad {
        static create(): $MutableQuad;
        static create(quad: $BakedQuad): $MutableQuad;
    }
    export interface $MutableQuad extends $QuadAccess {
        /**
         * @deprecated
         */
        itemRenderType(itemRenderType: $RenderType): $MutableQuad;
        copyBakedQuad(quad: $BakedQuad): $MutableQuad;
        chunkRenderType(chunkRenderType: $RenderType): $MutableQuad;
        /**
         * @deprecated
         */
        renderTypes(chunkRenderType: $RenderType, itemRenderType: $RenderType): $MutableQuad;
        createCopy(): $MutableQuad;
        emissive(emissive: boolean): $MutableQuad;
        position(vertexIndex: number, x: number, y: number, z: number): $MutableQuad;
        position(vertexIndex: number, position: $Vector3fc): $MutableQuad;
        copyFrom(quad: $QuadAccess): $MutableQuad;
        tintIndex(tintIndex: number): $MutableQuad;
        shade(shade: boolean): $MutableQuad;
        sprite(sprite: $TextureAtlasSprite): $MutableQuad;
        ambientOcclusion(ambientOcclusion: boolean): $MutableQuad;
        lightEmission(lightEmission: number): $MutableQuad;
        uv(vertexIndex: number, u: number, v: number): $MutableQuad;
    }
}
