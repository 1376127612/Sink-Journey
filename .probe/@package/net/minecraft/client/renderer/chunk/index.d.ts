import { $BiomeGetter, $Dimensional } from "@package/com/supermartijn642/fusion/util";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SectionBufferBuilderPack, $RenderBuffers, $RenderType, $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $List_, $Map } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $AddSectionGeometryEvent$AdditionalSectionRenderer_ } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $Holder, $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $RenderChunkRegionAccessor } from "@package/com/denfop/mixin/access";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $RenderDataMapConsumer } from "@package/net/fabricmc/fabric/impl/blockview/client";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MeshData, $MeshData$SortState, $VertexSorting_, $ByteBufferBuilder$Result, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/client/renderer/chunk" {
    export class $SectionRenderDispatcher$RenderSection {
        compileSync(regionCache: $RenderRegionCache): void;
        createCompileTask(regionCache: $RenderRegionCache): $SectionRenderDispatcher$RenderSection$CompileTask;
        resortTransparency(renderType: $RenderType, sectionRenderDispatcher: $SectionRenderDispatcher): boolean;
        isAxisAlignedWith(x: number, y: number, z: number): boolean;
        getBuffer(renderType: $RenderType): $VertexBuffer;
        isDirty(): boolean;
        setNotDirty(): void;
        isDirtyFromPlayer(): boolean;
        getCompiled(): $SectionRenderDispatcher$CompiledSection;
        getOrigin(): $BlockPos;
        hasAllNeighbors(): boolean;
        getRelativeOrigin(direction: $Direction_): $BlockPos;
        setOrigin(x: number, y: number, z: number): void;
        getBoundingBox(): $AABB;
        setDirty(playerChanged: boolean): void;
        rebuildSectionAsync(sectionRenderDispatcher: $SectionRenderDispatcher, regionCache: $RenderRegionCache): void;
        releaseBuffers(): void;
        compiled: $AtomicReference<$SectionRenderDispatcher$CompiledSection>;
        static SIZE: number;
        index: number;
        constructor(index: $SectionRenderDispatcher, originX: number, originY: number, originZ: number, arg4: number);
        get dirtyFromPlayer(): boolean;
        get boundingBox(): $AABB;
    }
    export class $SectionRenderDispatcher {
        isQueueEmpty(): boolean;
        getToBatchCount(): number;
        getToUpload(): number;
        uploadSectionLayer(meshData: $MeshData, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        schedule(task: $SectionRenderDispatcher$RenderSection$CompileTask): void;
        rebuildSectionSync(section: $SectionRenderDispatcher$RenderSection, regionCache: $RenderRegionCache): void;
        setLevel(level: $ClientLevel): void;
        blockUntilClear(): void;
        dispose(): void;
        setCamera(camera: $Vec3_): void;
        getStats(): string;
        getFreeBufferCount(): number;
        uploadAllPendingUploads(): void;
        getCameraPosition(): $Vec3;
        uploadSectionIndexBuffer(result: $ByteBufferBuilder$Result, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        constructor(level: $ClientLevel, renderer: $LevelRenderer, executor: $Executor_, buffers: $RenderBuffers, blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
        get queueEmpty(): boolean;
        get toBatchCount(): number;
        get toUpload(): number;
        set level(value: $ClientLevel);
        set camera(value: $Vec3_);
        get stats(): string;
        get freeBufferCount(): number;
        get cameraPosition(): $Vec3;
    }
    export class $RenderRegionCache$ChunkInfo {
        chunk(): $LevelChunk;
        renderChunk(): $RenderChunk;
    }
    export class $RenderChunk {
    }
    export class $SectionRenderDispatcher$CompiledSection {
        isEmpty(renderType: $RenderType): boolean;
        getRenderableBlockEntities(): $List<$BlockEntity>;
        facesCanSeeEachother(face1: $Direction_, face2: $Direction_): boolean;
        hasNoRenderableLayers(): boolean;
        static UNCOMPILED: $SectionRenderDispatcher$CompiledSection;
        static EMPTY: $SectionRenderDispatcher$CompiledSection;
        constructor();
        get renderableBlockEntities(): $List<$BlockEntity>;
    }
    export class $RenderChunkRegion implements $BlockAndTintGetter, $RenderDataMapConsumer, $RenderChunkRegionAccessor, $RenderAttachedBlockView, $Dimensional, $BiomeGetter {
        static index(minX: number, minZ: number, x: number, z: number): number;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getShade(direction: $Direction_, shade: boolean): number;
        hasBiomes(): boolean;
        getMinBuildHeight(): number;
        getHeight(): number;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getLightEngine(): $LevelLightEngine;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        fusionGetBiome(pos: $BlockPos_): $ResourceLocation;
        getModelData(arg0: $BlockPos_): $ModelData;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        fusionGetDimension(): $ResourceLocation;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<any>): void;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getLevel(): $Level;
        static RADIUS: number;
        static SIZE: number;
        get minBuildHeight(): number;
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get level(): $Level;
    }
    export class $SectionCompiler {
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack, arg4: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>): $SectionCompiler$Results;
        compile(sectionPos: $SectionPos, region: $RenderChunkRegion, vertexSorting: $VertexSorting_, sectionBufferBuilderPack: $SectionBufferBuilderPack): $SectionCompiler$Results;
        constructor(blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
    }
    export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable<$SectionRenderDispatcher$RenderSection$CompileTask> {
    }
    export class $VisGraph {
        resolve(): $VisibilitySet;
        setOpaque(pos: $BlockPos_): void;
        constructor();
        set opaque(value: $BlockPos_);
    }
    export class $VisibilitySet {
        visibilityBetween(face: $Direction_, otherFace: $Direction_): boolean;
        add(faces: $Set_<$Direction_>): void;
        set(face: $Direction_, otherFace: $Direction_, visible: boolean): void;
        setAll(visible: boolean): void;
        constructor();
        set all(value: boolean);
    }
    export class $RenderRegionCache {
        createRegion(arg0: $Level_, arg1: $SectionPos, arg2: boolean): $RenderChunkRegion;
        createRegion(level: $Level_, sectionPos: $SectionPos): $RenderChunkRegion;
        constructor();
    }
    export class $SectionRenderDispatcher$RenderSection$RebuildTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$SectionTaskResult extends $Enum<$SectionRenderDispatcher$SectionTaskResult> {
    }
    /**
     * Values that may be interpreted as {@link $SectionRenderDispatcher$SectionTaskResult}.
     */
    export type $SectionRenderDispatcher$SectionTaskResult_ = "successful" | "cancelled";
    export class $SectionCompiler$Results {
        release(): void;
        transparencyState: $MeshData$SortState;
        visibilitySet: $VisibilitySet;
        globalBlockEntities: $List<$BlockEntity>;
        blockEntities: $List<$BlockEntity>;
        renderedLayers: $Map<$RenderType, $MeshData>;
        constructor();
    }
}
