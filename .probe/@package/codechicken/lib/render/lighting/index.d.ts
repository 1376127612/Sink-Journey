import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Copyable } from "@package/codechicken/lib/util";
import { $IVertexOperation } from "@package/codechicken/lib/render/pipeline";
import { $Vector3 } from "@package/codechicken/lib/vec";
import { $CCRenderState } from "@package/codechicken/lib/render";

declare module "@package/codechicken/lib/render/lighting" {
    export class $LightMatrix implements $IVertexOperation {
        load(arg0: $CCRenderState): boolean;
        ao(arg0: number): number[];
        sample(arg0: number): void;
        brightness(arg0: number): number[];
        locate(arg0: $BlockAndTintGetter, arg1: $BlockPos_): void;
        operate(arg0: $CCRenderState): void;
        operationID(): number;
        static interpBrightness(arg0: number, arg1: number, arg2: number, arg3: number): number;
        sideSample(arg0: number): void;
        static interpAO(arg0: number, arg1: number, arg2: number, arg3: number): number;
        access: $BlockAndTintGetter;
        computed: number;
        pos: $BlockPos;
        static operationIndex: number;
        static sideao: number[];
        static ssamplem: number[][];
        static qsamplem: number[][];
        constructor();
    }
    export class $LC implements $Copyable<$LC> {
        compute(arg0: $Vector3, arg1: $Vector3): $LC;
        compute(arg0: $Vector3, arg1: number): $LC;
        set(arg0: $LC): $LC;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $LC;
        copy(): $LC;
        computeO(arg0: $Vector3, arg1: number): $LC;
        side: number;
        fa: number;
        fb: number;
        fc: number;
        fd: number;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
    }
}
