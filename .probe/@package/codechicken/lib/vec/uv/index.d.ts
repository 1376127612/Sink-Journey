import { $Copyable } from "@package/codechicken/lib/util";
import { $IVertexOperation } from "@package/codechicken/lib/render/pipeline";
import { $ITransformation } from "@package/codechicken/lib/vec";
import { $CCRenderState } from "@package/codechicken/lib/render";

declare module "@package/codechicken/lib/vec/uv" {
    export class $UV implements $Copyable<$UV> {
        add(arg0: $UV): $UV;
        apply(arg0: $UVTransformation): $UV;
        set(arg0: number[]): $UV;
        set(arg0: number, arg1: number, arg2: number): $UV;
        set(arg0: number, arg1: number): $UV;
        set(arg0: number[]): $UV;
        set(arg0: $UV): $UV;
        copy(): $UV;
        multiply(arg0: number): $UV;
        u: number;
        v: number;
        tex: number;
        constructor(arg0: $UV);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $UVTransformationList extends $UVTransformation {
        apply(arg0: $UV): void;
        copy(): $UVTransformation;
        prepend(arg0: $UVTransformation): $UVTransformationList;
        inverse(): $UVTransformation;
        static operationIndex: number;
        constructor(...arg0: $UVTransformation[]);
        constructor(arg0: $UVTransformationList);
    }
    export class $UVTransformation extends $ITransformation<$UV, $UVTransformation> implements $IVertexOperation {
        load(arg0: $CCRenderState): boolean;
        "with"(arg0: $UVTransformation): $UVTransformationList;
        at(arg0: $UV): $UVTransformation;
        operate(arg0: $CCRenderState): void;
        operationID(): number;
        static operationIndex: number;
        constructor();
    }
}
