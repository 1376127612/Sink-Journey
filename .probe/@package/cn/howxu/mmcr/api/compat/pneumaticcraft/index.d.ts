import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/compat/pneumaticcraft" {
    export class $AirState extends $Record {
        air(): number;
        pressure(): number;
        volume(): number;
        dangerPressure(): number;
        criticalPressure(): number;
        position(): $BlockPos;
        outputCapacity(): number;
        constructor(position: $BlockPos_, air: number, volume: number, dangerPressure: number, criticalPressure: number);
    }
    /**
     * Values that may be interpreted as {@link $AirState}.
     */
    export type $AirState_ = { position?: $BlockPos_, dangerPressure?: number, volume?: number, air?: number, criticalPressure?: number,  } | [position?: $BlockPos_, dangerPressure?: number, volume?: number, air?: number, criticalPressure?: number, ];
}
