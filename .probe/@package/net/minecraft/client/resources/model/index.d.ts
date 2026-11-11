import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $List_, $Collection, $Comparator, $Map, $BitSet } from "@package/java/util";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $BiConsumer_, $Supplier_, $Function_, $Predicate_, $Function } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ModelBakeryAccessor } from "@package/it/zerono/mods/zerocore/internal/mixin/client";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBakedModelExtension, $ModelStateExtension, $IModelBakerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Transformation, $OctahedralGroup } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $BakedModelMixin, $FabricBakedModel {
        usesBlockLight(): boolean;
        getOverrides(): $ItemOverrides;
        useAmbientOcclusion(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isGui3d(): boolean;
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get particleIcon(): $TextureAtlasSprite;
        get gui3d(): boolean;
    }
    export class $ModelBakery implements $ModelBakeryAccessor$1, $ModelBakeryAccessor {
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getModelGroups(): $Object2IntMap<$BlockState>;
        registerModelAndLoadDependencies(modelLocation: $ModelResourceLocation_, model: $UnbakedModel): void;
        bakeModels(textureGetter: $ModelBakery$TextureGetter_): void;
        getMissingModel(): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        invokeGetModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        zerocore_getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getUnbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        unbakedCache: $Map<$ResourceLocation, $UnbakedModel>;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(blockColors: $BlockColors, profilerFiller: $ProfilerFiller, modelResources: $Map_<$ResourceLocation_, $BlockModel>, blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelGroups(): $Object2IntMap<$BlockState>;
        get missingModel(): $UnbakedModel;
        get topLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        usesBlockLight(): boolean;
        getOverrides(): $ItemOverrides;
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isGui3d(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        constructor(itemTransforms: $ItemTransforms, overrides: $ItemOverrides, particleTexture: $TextureAtlasSprite, usesBlockLight: boolean);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        requiresRender(oldState: $BlockState_, newState: $BlockState_): boolean;
        getBlockModelShaper(): $BlockModelShaper;
        getModelBakery(): $ModelBakery;
        getMissingModel(): $BakedModel;
        updateMaxMipLevel(level: number): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        getModel(modelLocation: $ModelResourceLocation_): $BakedModel;
        getName(): string;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(textureManager: $TextureManager, blockColors: $BlockColors, maxMipmapLevels: number);
        get blockModelShaper(): $BlockModelShaper;
        get modelBakery(): $ModelBakery;
        get missingModel(): $BakedModel;
        get name(): string;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel, $IBakedModelExtension {
        usesBlockLight(): boolean;
        getOverrides(): $ItemOverrides;
        useAmbientOcclusion(): boolean;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getTransforms(): $ItemTransforms;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isCustomRenderer(): boolean;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getQuads(arg0: $BlockState_ | null, arg1: $Direction_ | null, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        isGui3d(): boolean;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        constructor(list: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get gui3d(): boolean;
    }
    export class $WeightedBakedModel$Builder {
        add(model: $BakedModel | null, weight: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        getModel(location: $ResourceLocation_): $UnbakedModel;
        /**
         * @deprecated
         */
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        particle(particleIcon: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(quad: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(facing: $Direction_, quad: $BakedQuad): $SimpleBakedModel$Builder;
        handler$fck000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        handler$fck000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        constructor(blockModel: $BlockModel, overrides: $ItemOverrides, isGui3d: boolean);
        constructor(hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, transforms: $ItemTransforms, overrides: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        redirect$fch000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        add(predicate: $Predicate_<$BlockState>, model: $BakedModel): void;
        build(): $BakedModel;
        constructor();
    }
    export class $Material {
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>, withGlint: boolean): $VertexConsumer;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        atlasLocation(): $ResourceLocation;
        texture(): $ResourceLocation;
        renderType(renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        sprite(): $TextureAtlasSprite;
        handler$bgk001$lightspeed$hashCodeReturnInjected(arg0: $CallbackInfoReturnable<any>): void;
        handler$bgk001$lightspeed$hashCodeHeadInjected(arg0: $CallbackInfoReturnable<any>): void;
        static COMPARATOR: $Comparator<$Material>;
        constructor(atlasLocation: $ResourceLocation_, texture: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        actualRotation(): $OctahedralGroup;
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        getRotation(): $Transformation;
        static by(x: number, y: number): $BlockModelRotation;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        missing(): $TextureAtlasSprite;
        upload(): void;
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        readyForUpload(): $CompletableFuture<void>;
        constructor(atlas: $TextureAtlas, preperations: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { source?: string, data?: $JsonElement_,  } | [source?: string, data?: $JsonElement_, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(modelLocation: $ModelResourceLocation_, material: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlas(): $TextureAtlas;
        atlasInfoLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_,  } | [atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_, ];
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor {
        usesBlockLight(): boolean;
        getOverrides(): $ItemOverrides;
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isGui3d(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        /**
         * @deprecated
         */
        constructor(unculledFaces: $List_<$BakedQuad>, culledFaces: $Map_<$Direction_, $List_<$BakedQuad>>, hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, particleIcon: $TextureAtlasSprite, transforms: $ItemTransforms, overrides: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
        get blockRenderTypes(): $ChunkRenderTypeSet;
    }
    export class $ModelManager$ReloadState extends $Record {
        modelBakery(): $ModelBakery;
        modelCache(): $Map<$BlockState, $BakedModel>;
        missingModel(): $BakedModel;
        atlasPreparations(): $Map<$ResourceLocation, $AtlasSet$StitchResult>;
        readyForUpload(): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { modelCache?: $Map_<$BlockState_, $BakedModel>, missingModel?: $BakedModel, modelBakery?: $ModelBakery, readyForUpload?: $CompletableFuture<void>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>,  } | [modelCache?: $Map_<$BlockState_, $BakedModel>, missingModel?: $BakedModel, modelBakery?: $ModelBakery, readyForUpload?: $CompletableFuture<void>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, ];
    export class $BlockStateModelLoader {
        loadAllBlockStates(): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, profiler: $ProfilerFiller, missingModel: $UnbakedModel, blockColors: $BlockColors, discoveredModelOutput: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel,  } | [key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        redirect$fci000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        redirect$fci000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        getSelectors(arg0: $BlockState_ | null): $BitSet;
        usesBlockLight(): boolean;
        getOverrides(): $ItemOverrides;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isCustomRenderer(): boolean;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(arg0: $BlockState_ | null, arg1: $Direction_ | null, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        isGui3d(): boolean;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        constructor(selectors: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get gui3d(): boolean;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        transformation(): $Transformation;
        isUvLocked(): boolean;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { transformation?: $Transformation, id?: $ResourceLocation_, isUvLocked?: boolean,  } | [transformation?: $Transformation, id?: $ResourceLocation_, isUvLocked?: boolean, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { models?: $List_<$UnbakedModel>, coloringValues?: $List_<$Object>,  } | [models?: $List_<$UnbakedModel>, coloringValues?: $List_<$Object>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        id(): $ResourceLocation;
        getVariant(): string;
        variant(): string;
        static standalone(id: $ResourceLocation_): $ModelResourceLocation;
        static vanilla(path: string, variant: string): $ModelResourceLocation;
        static inventory(id: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { id?: $ResourceLocation_, variant?: string,  } | [id?: $ResourceLocation_, variant?: string, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker {
        getTopLevelModel(arg0: $ModelResourceLocation_): $UnbakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getModel(location: $ResourceLocation_): $UnbakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        constructor(textureGetter: $ModelBakery, modelLocation: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable {
        close(): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(resourceManager: $ResourceManager, mipLevel: number, executor: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        constructor(atlasMap: $Map_<$ResourceLocation_, $ResourceLocation_>, textureManager: $TextureManager);
    }
}
