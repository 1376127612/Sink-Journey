import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $EmittableQuad, $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $List, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $TextureType, $RawTextureInstance } from "@package/com/supermartijn642/fusion/api/texture";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Object } from "@package/java/lang";
import { $PropertyStore } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/texture/custom" {
    export class $TextureCreationContext {
    }
    export interface $TextureCreationContext {
        getAnimationMetadata(): $AnimationMetadataSection;
        getImageWidth(): number;
        getImageHeight(): number;
        getIdentifier(): $ResourceLocation;
        getImage(): $NativeImage;
        get animationMetadata(): $AnimationMetadataSection;
        get imageWidth(): number;
        get imageHeight(): number;
        get identifier(): $ResourceLocation;
        get image(): $NativeImage;
    }
    export class $TextureInstance<X> {
    }
    export interface $TextureInstance<X> {
        getBlockStateRenderTypes(sprite: $SpriteInstance): $Set<$RenderType>;
        initializeModelQuad(quad: $MutableQuad, sprite: $SpriteInstance, properties: $PropertyStore): $QuadProcessor<never>;
        getDefaultSprite(): $SpriteInstance;
        getTextureType(): $TextureType<never, X>;
        getCustomData(): X;
        getIdentifier(): $ResourceLocation;
        getSprites(): $List<$SpriteInstance>;
        get defaultSprite(): $SpriteInstance;
        get textureType(): $TextureType<never, X>;
        get customData(): X;
        get identifier(): $ResourceLocation;
        get sprites(): $List<$SpriteInstance>;
    }
    export class $SpriteBuilder {
    }
    export interface $SpriteBuilder {
        setCreationCallback(callback: $Consumer_<$SpriteInstance>): $SpriteBuilder;
        markDefaultSprite(markDefault: boolean): $SpriteBuilder;
        markDefaultSprite(): $SpriteBuilder;
        customConstructor(width: number, height: number, arg2: $SpriteBuilder$Constructor): $SpriteBuilder;
        name(name: string): $SpriteBuilder;
        submit(): void;
        image(image: $SpriteImageSource): $SpriteBuilder;
        set creationCallback(value: $Consumer_<$SpriteInstance>);
    }
    export class $TextureOutput<X> {
    }
    export interface $TextureOutput<X> {
        setCreationCallback(callback: $Consumer_<$TextureInstance<X>>): void;
        createSprite(): $SpriteBuilder;
        createSubTexture<Y>(texture: $RawTextureInstance<never, Y>, name: string, image: $NativeImage, animationMetadata: $AnimationMetadataSection): $TextureOutput$SubTextureOutput<Y>;
        setCustomData(customData: X): void;
        set creationCallback(value: $Consumer_<$TextureInstance<X>>);
        set customData(value: X);
    }
    export class $TextureOutput$SubTextureOutput<X> {
    }
    export interface $TextureOutput$SubTextureOutput<X> {
        setCreationCallback(callback: $Consumer_<$TextureInstance<X>>): $TextureOutput$SubTextureOutput<X>;
        markDefault(): $TextureOutput$SubTextureOutput<X>;
        markDefault(markDefault: boolean): $TextureOutput$SubTextureOutput<X>;
        submit(): void;
        set creationCallback(value: $Consumer_<$TextureInstance<X>>);
    }
    export class $QuadProcessor<S> {
    }
    export interface $QuadProcessor<S> {
        extractState(stack: $ItemStack_, randomSupplier: $Supplier_<$RandomSource>, properties: $PropertyStore): S;
        extractState(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, randomSupplier: $Supplier_<$RandomSource>, properties: $PropertyStore): S;
        extractState(randomSupplier: $Supplier_<$RandomSource>, properties: $PropertyStore): S;
        createGeometryKey(state: S, properties: $PropertyStore): $Object;
        processQuad(quad: $EmittableQuad, sprite: $SpriteInstance, state: S, properties: $PropertyStore): void;
    }
    export class $SpriteInstance {
    }
    export interface $SpriteInstance {
        getIdentifier(): $ResourceLocation;
        getSprite(): $TextureAtlasSprite;
        getU1(): number;
        getU0(): number;
        getV0(): number;
        getV1(): number;
        getTexture(): $TextureInstance<never>;
        get identifier(): $ResourceLocation;
        get sprite(): $TextureAtlasSprite;
        get u1(): number;
        get u0(): number;
        get v0(): number;
        get v1(): number;
        get texture(): $TextureInstance<never>;
    }
}
