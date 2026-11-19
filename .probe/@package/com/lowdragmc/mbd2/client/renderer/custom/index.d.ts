import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/lowdragmc/mbd2/client/renderer/custom" {
    export class $CustomRenderer {
    }
    export interface $CustomRenderer {
        getViewDistance(): number;
        render(arg0: $MachineRenderContext): void;
        shouldRenderOffScreen(): boolean;
        getRenderBoundingBox(arg0: $BlockEntity, arg1: $CompoundTag_): $AABB;
        get viewDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomRenderer}.
     */
    export type $CustomRenderer_ = ((arg0: $MachineRenderContext) => void);
    export class $CustomRenderer$RenderCallback {
    }
    export interface $CustomRenderer$RenderCallback {
        render(arg0: $MachineRenderContext): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomRenderer$RenderCallback}.
     */
    export type $CustomRenderer$RenderCallback_ = ((arg0: $MachineRenderContext) => void);
    export class $MachineRenderContext {
        getPos(): $BlockPos;
        getLevel(): $Level;
        getGameTime(): number;
        getBlockState(): $BlockState;
        getMachine(): $MBDMachine;
        packedOverlay: number;
        data: $CompoundTag;
        blockEntity: $BlockEntity;
        poseStack: $PoseStack;
        bufferSource: $MultiBufferSource;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $BlockEntity, arg1: $CompoundTag_, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number);
        get pos(): $BlockPos;
        get level(): $Level;
        get gameTime(): number;
        get blockState(): $BlockState;
        get machine(): $MBDMachine;
    }
    export class $CustomRenderer$BoundingBoxProvider {
    }
    export interface $CustomRenderer$BoundingBoxProvider {
        getRenderBoundingBox(arg0: $BlockEntity, arg1: $CompoundTag_): $AABB;
    }
    /**
     * Values that may be interpreted as {@link $CustomRenderer$BoundingBoxProvider}.
     */
    export type $CustomRenderer$BoundingBoxProvider_ = ((arg0: $BlockEntity, arg1: $CompoundTag) => $AABB_);
    export class $CustomRendererBuilder implements $CustomRenderer {
        boundingBox(arg0: $CustomRenderer$BoundingBoxProvider_): $CustomRendererBuilder;
        getViewDistance(): number;
        infiniteBoundingBox(): $CustomRendererBuilder;
        viewDistance(arg0: number): $CustomRendererBuilder;
        render(arg0: $MachineRenderContext): void;
        shouldRenderOffScreen(): boolean;
        getRenderBoundingBox(arg0: $BlockEntity, arg1: $CompoundTag_): $AABB;
        onRender(arg0: $CustomRenderer$RenderCallback_): $CustomRendererBuilder;
        boundingBoxInflate(arg0: number, arg1: number, arg2: number): $CustomRendererBuilder;
        boundingBoxInflate(arg0: number): $CustomRendererBuilder;
        renderOffScreen(arg0: boolean): $CustomRendererBuilder;
        constructor();
    }
}
