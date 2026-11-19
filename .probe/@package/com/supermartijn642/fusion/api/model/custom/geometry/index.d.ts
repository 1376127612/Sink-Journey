import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockModel, $BlockElement, $BlockElementFace_, $BlockElementRotation } from "@package/net/minecraft/client/renderer/block/model";
import { $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $List_ } from "@package/java/util";
import { $QuadAccess, $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $ModelTransform, $ModelMaterial, $CullableQuads } from "@package/com/supermartijn642/fusion/api/model/custom";
import { $PropertyGetter, $Either, $PropertyGetter_ } from "@package/com/supermartijn642/fusion/api/util";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/com/supermartijn642/fusion/api/model/custom/geometry" {
    export class $ModelGeometry$MaterialKeyResolver {
        static fromKeyLookup(lookup: $Function_<string, $Either<string, $ModelMaterial>>, materialResolver: $Function_<$ModelMaterial, $TextureAtlasSprite>, reportMissing: $Consumer_<string>, reportCircular: $Consumer_<$List<string>>): $ModelGeometry$MaterialKeyResolver;
    }
    export interface $ModelGeometry$MaterialKeyResolver {
        get(key: string, required: boolean): $TextureAtlasSprite;
        get(key: string): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelGeometry$MaterialKeyResolver}.
     */
    export type $ModelGeometry$MaterialKeyResolver_ = ((key: string, required: boolean) => $TextureAtlasSprite);
    export class $ModelGeometry {
        static of(model: $UnbakedModel): $ModelGeometry;
        static of(cuboidModel: $BlockModel): $CuboidModelGeometry;
    }
    export interface $ModelGeometry {
        bake(transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver_): $CullableQuads;
        bake(consumer: $ModelGeometry$QuadConsumer_, transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver_): void;
        isCuboidGeometry(): boolean;
        isGui3d(): boolean;
        get cuboidGeometry(): boolean;
        get gui3d(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelGeometry}.
     */
    export type $ModelGeometry_ = ((consumer: $ModelGeometry$QuadConsumer, transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver) => void);
    export class $CuboidModelGeometry {
        static bakeFace(face: $CuboidModelGeometry$Face, element: $CuboidModelGeometry$Element, side: $Direction_, transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver_): $QuadAccess;
        static bakeFace(consumer: $ModelGeometry$QuadConsumer_, face: $CuboidModelGeometry$Face, element: $CuboidModelGeometry$Element, side: $Direction_, transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver_): void;
        static bakeElement(consumer: $ModelGeometry$QuadConsumer_, element: $CuboidModelGeometry$Element, transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver_): void;
        static bakeElement(element: $CuboidModelGeometry$Element, transformation: $ModelTransform, materialResolver: $ModelGeometry$MaterialKeyResolver_): $CullableQuads;
        static of(elements: $List_<$CuboidModelGeometry$Element>): $CuboidModelGeometry;
        static of(model: $BlockModel): $CuboidModelGeometry;
    }
    export interface $CuboidModelGeometry extends $ModelGeometry {
        elements(): $List<$CuboidModelGeometry$Element>;
    }
    export class $ModelGeometry$QuadConsumer {
    }
    export interface $ModelGeometry$QuadConsumer {
        consume(quad: $MutableQuad, cullDirection: $Direction_, geometryProperties: $PropertyGetter_): void;
    }
    /**
     * Values that may be interpreted as {@link $ModelGeometry$QuadConsumer}.
     */
    export type $ModelGeometry$QuadConsumer_ = ((quad: $MutableQuad, cullDirection: $Direction, geometryProperties: $PropertyGetter) => void);
    export class $CuboidModelGeometry$Element {
        static of(element: $BlockElement): $CuboidModelGeometry$Element;
        static builder(): $CuboidModelGeometry$Element$Builder;
    }
    export interface $CuboidModelGeometry$Element extends $PropertyGetter {
        emissive(): boolean;
        from(): $Vector3fc;
        to(): $Vector3fc;
        face(side: $Direction_): $CuboidModelGeometry$Face;
        shade(): boolean;
        ambientOcclusion(): boolean;
        lightEmission(): number;
        rotation(): $BlockElementRotation;
    }
    export class $CuboidModelGeometry$Face {
        static of(face: $BlockElementFace_): $CuboidModelGeometry$Face;
        static builder(): $CuboidModelGeometry$Face$Builder;
    }
    export interface $CuboidModelGeometry$Face extends $PropertyGetter {
        cullDirection(): $Direction;
        emissive(): boolean;
        tintIndex(): number;
        shade(): boolean;
        ambientOcclusion(): boolean;
        lightEmission(): number;
        rotation(): $CuboidModelGeometry$Face$Rotation;
        material(): string;
        uv(): $CuboidModelGeometry$Face$UV;
    }
}
