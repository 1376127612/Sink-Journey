import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ConnectionEntry } from "@package/com/george_vi/electroenergetics/simulation/infrastructure";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $AttachedNode } from "@package/com/george_vi/electroenergetics/foundation/nodes";

declare module "@package/com/george_vi/electroenergetics/content/railway_electrification/pantograph" {
    export interface $PantographType extends RegistryMarked<RegistryTypes.ElectroenergeticsPantographTypeTag, RegistryTypes.ElectroenergeticsPantographType> {}
    export class $TrainPantographEntry {
        node: $AttachedNode;
        pos: $Vec3;
        originalPos: $BlockPos;
        active: boolean;
        prevPos: $Vec3;
        facingForward: boolean;
        lastCurrent: number;
        type: $PantographType;
        onConnection: $ConnectionEntry;
        rotatedPos: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $PantographType_, arg3: boolean, arg4: boolean);
    }
    export class $PantographType {
        topOffset: number;
        sidewaysReach: number;
        reach: number;
        backOffset: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $PantographType}.
     */
    export type $PantographType_ = RegistryTypes.ElectroenergeticsPantographType;
}
