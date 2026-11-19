import { $Vertex5 } from "@package/codechicken/lib/vec";
import { $AttributeKey } from "@package/codechicken/lib/render/pipeline/attribute";
import { $CCRenderState } from "@package/codechicken/lib/render";
export * as attribute from "@package/codechicken/lib/render/pipeline/attribute";

declare module "@package/codechicken/lib/render/pipeline" {
    export class $IVertexSource {
    }
    export interface $IVertexSource {
        getVertexCount(): number;
        prepareVertex(arg0: $CCRenderState): void;
        getAttribute<T>(arg0: $AttributeKey<T>): T;
        hasAttribute(arg0: $AttributeKey<never>): boolean;
        getVertices(): $Vertex5[];
        get vertexCount(): number;
        get vertices(): $Vertex5[];
    }
    export class $VertexAttribute<T> implements $IVertexOperation {
        operationID(): number;
        active: boolean;
        constructor(arg0: $AttributeKey<T>);
    }
    export class $CCRenderPipeline {
        addRequirement(arg0: number): void;
        operate(): void;
        setPipeline(...arg0: $IVertexOperation[]): void;
        reset(): void;
        addAttribute(arg0: $VertexAttribute<never>): void;
        addDependency(arg0: $VertexAttribute<never>): void;
        rebuild(): void;
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
        operationID(): number;
        operate(arg0: $CCRenderState): void;
        load(arg0: $CCRenderState): boolean;
    }
}
