import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Vector3 } from "@package/codechicken/lib/vec";
import { $Comparable, $Object } from "@package/java/lang";
import { $BlockHitResult, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/codechicken/lib/raytracer" {
    export class $SubHitBlockHitResult extends $BlockHitResult implements $Comparable<$SubHitBlockHitResult> {
        compareTo(arg0: $SubHitBlockHitResult): number;
        withDirection(arg0: $Direction_): $SubHitBlockHitResult;
        subHit: number;
        dist: number;
        hitInfo: $Object;
        constructor(arg0: $Vec3_, arg1: $Direction_, arg2: $BlockPos_, arg3: boolean, arg4: $Object, arg5: number);
        constructor(arg0: $Vector3, arg1: $Direction_, arg2: $BlockPos_, arg3: boolean, arg4: $Object, arg5: number);
    }
}
