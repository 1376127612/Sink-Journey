import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IGridService } from "@package/appeng/api/networking";

declare module "@package/appeng/api/networking/spatial" {
    export class $ISpatialService {
    }
    export interface $ISpatialService extends $IGridService {
        currentEfficiency(): number;
        isValidRegion(): boolean;
        requiredPower(): number;
        hasRegion(): boolean;
        getLevel(): $Level;
        getMin(): $BlockPos;
        getMax(): $BlockPos;
        get validRegion(): boolean;
        get level(): $Level;
        get min(): $BlockPos;
        get max(): $BlockPos;
    }
}
