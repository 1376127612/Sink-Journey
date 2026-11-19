import { $SpriteInstance, $QuadProcessor, $TextureOutput, $TextureCreationContext } from "@package/com/supermartijn642/fusion/api/texture/custom";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $Set } from "@package/java/util";
import { $Serializer, $PropertyStore } from "@package/com/supermartijn642/fusion/api/util";
export * as custom from "@package/com/supermartijn642/fusion/api/texture/custom";

declare module "@package/com/supermartijn642/fusion/api/texture" {
    export class $RawTextureInstance<T, X> {
        static of<T, X>(textureType: $TextureType<T, X>, textureData: T): $RawTextureInstance<T, X>;
    }
    export interface $RawTextureInstance<T, X> {
        getTextureType(): $TextureType<T, X>;
        getTextureData(): T;
        createTexture(output: $TextureOutput<X>, context: $TextureCreationContext): void;
        get textureType(): $TextureType<T, X>;
        get textureData(): T;
    }
    export class $TextureType<T, X> {
    }
    export interface $TextureType<T, X> extends $Serializer<T> {
        getBlockStateRenderTypes(sprite: $SpriteInstance, data: X): $Set<$RenderType>;
        initializeModelQuad(quad: $MutableQuad, sprite: $SpriteInstance, data: X, properties: $PropertyStore): $QuadProcessor<never>;
        createTexture(output: $TextureOutput<X>, context: $TextureCreationContext, data: T): void;
    }
}
