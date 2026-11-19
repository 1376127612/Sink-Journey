import { $Consumer_ } from "@package/java/util/function";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $VertexBuffer, $VertexBuffer$Usage_ } from "@package/com/mojang/blaze3d/vertex";
import { $FloatBuffer } from "@package/java/nio";
import { $Matrix4f } from "@package/org/joml";
export * as shader from "@package/team/lodestar/lodestone/systems/rendering/shader";

declare module "@package/team/lodestar/lodestone/systems/rendering" {
    export class $IVertexBuffer {
        static cast(arg0: $VertexBuffer): $IVertexBuffer;
    }
    export interface $IVertexBuffer {
        drawWithShaderInstanced(arg0: $Matrix4f, arg1: $Matrix4f, arg2: $ShaderInstance, arg3: number): void;
        addAttributeVBO(arg0: number, arg1: $FloatBuffer, arg2: $VertexBuffer$Usage_, arg3: $Consumer_<number>): void;
        drawInstanced(arg0: number): void;
    }
}
