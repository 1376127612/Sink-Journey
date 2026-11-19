import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/org/betterx/bclib/mixin/client" {
    export class $LevelRendererAccessor {
        static bclib_renderShape(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $VoxelShape, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    export interface $LevelRendererAccessor {
    }
}
