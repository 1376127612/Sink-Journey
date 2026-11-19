import { $ClipContext$Block_, $Level, $ClipContext$Fluid_, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleRenderType_, $ParticleRenderType, $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $Comparator, $Map, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PositionedRect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix3f, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/client/scene" {
    export class $ISceneBlockRenderHook {
    }
    export interface $ISceneBlockRenderHook {
        applyVertexConsumerWrapper(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $WorldSceneRenderer$VertexConsumerWrapper, arg4: $RenderType, arg5: number): void;
        applyBESR(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $PoseStack, arg4: number): void;
        apply(arg0: $RenderType): void;
    }
    export class $ISceneEntityRenderHook {
    }
    export interface $ISceneEntityRenderHook {
        applyEntity(arg0: $Level_, arg1: $Entity, arg2: $PoseStack, arg3: number): void;
    }
    export class $WorldSceneRenderer {
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        project(arg0: $Vector3f): $Vector3f;
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        getEyePos(): $Vector3f;
        isUseCache(): boolean;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        releaseResource(): void;
        setClipBlock(arg0: $ClipContext$Block_): $WorldSceneRenderer;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        needCompileCache(): $WorldSceneRenderer;
        getParticleManager(): $ParticleManager;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        getLastTraceResult(): $BlockHitResult;
        getCompileProgress(): number;
        setClipFluid(arg0: $ClipContext$Fluid_): $WorldSceneRenderer;
        isCompiling(): boolean;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        syncCompile(arg0: boolean): $WorldSceneRenderer;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        isSyncCompile(): boolean;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        getSyncCompileTimeBudgetNanos(): number;
        setSyncCompileMaxBlocksPerFrame(arg0: number): $WorldSceneRenderer;
        setSyncCompileTimeBudgetNanos(arg0: number): $WorldSceneRenderer;
        getSyncCompileMaxBlocksPerFrame(): number;
        deleteCacheBuffer(): $WorldSceneRenderer;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        getViewHalfHeight(arg0: number): number;
        isEndBatchLast(): boolean;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        unProject(arg0: number, arg1: number): $Vector3f;
        isOrtho(): boolean;
        getWorldUp(): $Vector3f;
        getLookAt(): $Vector3f;
        setFov(arg0: number): $WorldSceneRenderer;
        getLastHit(): $Vector3f;
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        getFov(): number;
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $WorldSceneRenderer$RenderedBlocksEntry>;
        constructor(arg0: $Level_);
        set blocked(value: $Set_<$BlockPos_>);
        get eyePos(): $Vector3f;
        get useCache(): boolean;
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set clipBlock(value: $ClipContext$Block_);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        get lastTraceResult(): $BlockHitResult;
        get compileProgress(): number;
        set clipFluid(value: $ClipContext$Fluid_);
        get compiling(): boolean;
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
        static set defaultRenderLayerState(value: $RenderType);
        get ortho(): boolean;
        get worldUp(): $Vector3f;
        get lookAt(): $Vector3f;
        get lastHit(): $Vector3f;
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
    }
    export class $WorldSceneRenderer$RenderedBlocksEntry extends $Record {
        snapshot(): $Set<$BlockPos>;
        hook(): $ISceneBlockRenderHook;
        constructor(snapshot: $Set_<$BlockPos_>, hook: $ISceneBlockRenderHook);
    }
    /**
     * Values that may be interpreted as {@link $WorldSceneRenderer$RenderedBlocksEntry}.
     */
    export type $WorldSceneRenderer$RenderedBlocksEntry_ = { snapshot?: $Set_<$BlockPos_>, hook?: $ISceneBlockRenderHook,  } | [snapshot?: $Set_<$BlockPos_>, hook?: $ISceneBlockRenderHook, ];
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        clearColor(): void;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        clearOffset(): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        wrapMethod$cmb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapMethod$cmb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setOverlay(arg0: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        constructor(arg0: $VertexConsumer);
        set offsetX(value: number);
        set offsetY(value: number);
        set offsetZ(value: number);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    export class $ParticleManager {
        addParticle(arg0: $Particle): void;
        clearAllParticles(): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        tick(): void;
        setLevel(arg0: $Level_): void;
        render(arg0: $PoseStack, arg1: $Camera, arg2: number, arg3: $Predicate_<$ParticleRenderType>): void;
        getParticleAmount(): number;
        level: $Level;
        constructor();
        get particleAmount(): number;
    }
}
