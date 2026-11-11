import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$1, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ITextureSize } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1, $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $PBRSpriteHolder, $SpriteContentsExtension, $PBRAtlasHolder, $TextureAtlasExtension } from "@package/net/irisshaders/iris/pbr/texture";
import { $SpriteFinderImpl, $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$1 } from "@package/appeng/thirdparty/fabric";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $TextureLocationSettable } from "@package/dzwdz/chat_heads/mixininterface";
import { $IOException, $File_, $Closeable } from "@package/java/io";
import { $SpriteInstance } from "@package/com/supermartijn642/fusion/api/texture/custom";
import { $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/net/irisshaders/iris/pbr";
import { $TextureAtlasSpriteExtension as $TextureAtlasSpriteExtension$1 } from "@package/com/supermartijn642/fusion/extensions";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Darkness$DynamicTextureHook } from "@package/me/srrapero720/chloride/impl";
import { $SpriteFinderImpl$SpriteFinderAccess } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        getHeight(): number;
        stitch(): void;
        registerSprite(stitcherEntry: T): void;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        mipLevel: number;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable {
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        releaseId(): void;
        restoreLastBlurMipmap(): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        constructor();
        get id(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        setupOverlayColor(): void;
        teardownOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable {
        chatheads$setTextureLocation(location: $ResourceLocation_): void;
        handler$bcg000$chat_heads$chatheads$registerBlendedHeadTexture(image: $NativeImage, ci: $CallbackInfo): void;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        uploaded: boolean;
        blur: boolean;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        handler$dcf000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        close(): void;
        constructor(arg0: $SpriteContents);
    }
    export class $SpriteLoader$Preparations extends $Record {
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        missing(): $TextureAtlasSprite;
        width(): number;
        height(): number;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>,  } | [height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(entry: T, mipLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { width?: number, entry?: $Stitcher$Entry, height?: number,  } | [width?: number, entry?: $Stitcher$Entry, height?: number, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
        constructor(index: number, time: number);
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor {
        handler$dcb000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        close(): void;
        tickAndUpload(x: number, y: number): void;
        getFrameIndex(): number;
        setFrame(arg0: number): void;
        getFrame(): number;
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrameTicks(): number;
        subFrame: number;
        frame: number;
        constructor(animationInfo: $SpriteContents, interpolationData: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData | null);
        get frameIndex(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$2, $SpriteContentsAccessor$1, $SpriteContentsExtension, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$3 {
        sodium$hasTransparentPixels(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        sodium$hasAnimation(): boolean;
        name(): $ResourceLocation;
        close(): void;
        metadata(): $ResourceMetadata;
        width(): number;
        getPBRHolder(): $PBRSpriteHolder;
        uploadFirstFrame(x: number, y: number): void;
        height(): number;
        getCreatedTicker(): $SpriteContents$Ticker;
        sodium$setActive(arg0: boolean): void;
        sodium$isActive(): boolean;
        createTicker(): $SpriteTicker;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        getFrameCount(): number;
        getOriginalImage(): $NativeImage;
        getUniqueFrames(): $IntStream;
        increaseMipLevel(mipLevel: number): void;
        isTransparent(frame: number, x: number, y: number): boolean;
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getImages(): $NativeImage[];
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get PBRHolder(): $PBRSpriteHolder;
        get createdTicker(): $SpriteContents$Ticker;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $Darkness$DynamicTextureHook {
        upload(): void;
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        chloride$enableDarkness(): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1 {
        uploadFirstFrame(x: number, y: number): void;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        createTicker(): $SpriteTicker;
        getUniqueFrames(): $IntStream;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        invokeUploadFrame(x: number, y: number, frameIndex: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $SpriteFinderImpl$SpriteFinderAccess, $TextureAtlasAccessor$1, $TextureAtlasExtension, $SpriteFinderImpl$SpriteFinderAccess$1, $TextureAtlasAccessor {
        location(): $ResourceLocation;
        tick(): void;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        clearTextureData(): void;
        getPBRHolder(): $PBRAtlasHolder;
        getWidth(): number;
        wrapOperation$zcc000$sodium_extra$sodiumExtra$tickAnimatedSprites(instance: $TextureAtlasSprite, original: $Operation_<any>): $TextureAtlasSprite$Ticker;
        upload(preparations: $SpriteLoader$Preparations_): void;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getHeight(): number;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        maxSupportedTextureSize(): number;
        fabric_spriteFinder(): $SpriteFinderImpl;
        cycleAnimationFrames(): void;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        sodium$getHeight(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        sodium$getWidth(): number;
        callGetHeight(): number;
        getMipLevel(): number;
        callGetWidth(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        blur: boolean;
        sprites: $List<$SpriteContents>;
        constructor(location: $ResourceLocation_);
        get PBRHolder(): $PBRAtlasHolder;
        get width(): number;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get height(): number;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        add(holder: $Stitcher$Holder_<T>): boolean;
        getY(): number;
        getX(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor, $ITextureSize {
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        getWidth(): number;
        getHeight(): number;
        getLocation(): $ResourceLocation;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        constructor(location: $ResourceLocation_);
        get width(): number;
        get height(): number;
        get location(): $ResourceLocation;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable {
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        close(): void;
        release(path: $ResourceLocation_): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        tick(): void;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        dumpAllSheets(path: $Path_): void;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        bindForSetup(path: $ResourceLocation_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension$1, $TextureAtlasSpriteExtension {
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        getU(u: number): number;
        contents(): $SpriteContents;
        getY(): number;
        atlasLocation(): $ResourceLocation;
        uploadFirstFrame(): void;
        getX(): number;
        getVOffset(u: number): number;
        getUOffset(u: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        getV(u: number): number;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        setFusionSpriteInstance(instance: $SpriteInstance): void;
        getFusionSpriteInstance(): $SpriteInstance;
        createTicker(): $TextureAtlasSprite$Ticker;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        sodium$hasUnknownImageContents(): boolean;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        static load(resourceManager: $ResourceManager, location: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        throwIfError(): void;
        getTextureMetadata(): $TextureMetadataSection;
        getImage(): $NativeImage;
        constructor(exception: $IOException);
        constructor(metadata: $TextureMetadataSection | null, image: $NativeImage);
        get textureMetadata(): $TextureMetadataSection;
        get image(): $NativeImage;
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
