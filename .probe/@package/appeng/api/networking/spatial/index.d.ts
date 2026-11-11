import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IGridService } from "@package/appeng/api/networking";

declare module "@package/appeng/api/networking/spatial" {
    export class $ISpatialService {
    }
    export interface $ISpatialService extends $IGridService {
        getMax(): $BlockPos;
        getMin(): $BlockPos;
        getLevel(): $Level;
        hasRegion(): boolean;
        isValidRegion(): boolean;
        currentEfficiency(): number;
        requiredPower(): number;
        get max(): $BlockPos;
        get min(): $BlockPos;
        get level(): $Level;
        get validRegion(): boolean;
    }
}
