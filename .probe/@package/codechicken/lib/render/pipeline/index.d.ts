import { $Vertex5 } from "@package/codechicken/lib/vec";
import { $AttributeKey } from "@package/codechicken/lib/render/pipeline/attribute";
import { $CCRenderState } from "@package/codechicken/lib/render";
export * as attribute from "@package/codechicken/lib/render/pipeline/attribute";

declare module "@package/codechicken/lib/render/pipeline" {
    export class $IVertexSource {
    }
    export interface $IVertexSource {
        getAttribute<T>(arg0: $AttributeKey<T>): T;
        hasAttribute(arg0: $AttributeKey<never>): boolean;
        getVertices(): $Vertex5[];
        getVertexCount(): number;
        prepareVertex(arg0: $CCRenderState): void;
        get vertices(): $Vertex5[];
        get vertexCount(): number;
    }
    export class $VertexAttribute<T> implements $IVertexOperation {
        operationID(): number;
        active: boolean;
        constructor(arg0: $AttributeKey<T>);
    }
    export class $CCRenderPipeline {
        reset(): void;
        addAttribute(arg0: $VertexAttribute<never>): void;
        addDependency(arg0: $VertexAttribute<never>): void;
        rebuild(): void;
        operate(): void;
        addRequirement(arg0: number): void;
        setPipeline(...arg0: $IVertexOperation[]): void;
        /**
         * @deprecated
         */
        forceFormatAttributes: boolean;
        constructor(arg0: $CCRenderState);
        set pipeline(value: $IVertexOperation[]);
    }
    export class $IVertexOperation {
        static registerOperation(): number;
        static operationCount(): number;
    }
    export interface $IVertexOperation {
        load(arg0: $CCRenderState): boolean;
        operate(arg0: $CCRenderState): void;
        operationID(): number;
    }
}
