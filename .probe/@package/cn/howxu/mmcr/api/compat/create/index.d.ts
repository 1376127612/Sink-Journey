import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/compat/create" {
    export class $StressState extends $Record {
        position(): $BlockPos;
        connected(): boolean;
        actualRpm(): number;
        networkCapacity(): number;
        networkStress(): number;
        theoreticalRpm(): number;
        baseContribution(): number;
        overstressed(): boolean;
        generatedRpm(): number;
        actualContribution(): number;
        constructor(position: $BlockPos_, actualRpm: number, theoreticalRpm: number, generatedRpm: number, baseContribution: number, actualContribution: number, networkCapacity: number, networkStress: number, connected: boolean, overstressed: boolean);
    }
    /**
     * Values that may be interpreted as {@link $StressState}.
     */
    export type $StressState_ = { actualRpm?: number, overstressed?: boolean, networkStress?: number, networkCapacity?: number, connected?: boolean, generatedRpm?: number, position?: $BlockPos_, baseContribution?: number, theoreticalRpm?: number, actualContribution?: number,  } | [actualRpm?: number, overstressed?: boolean, networkStress?: number, networkCapacity?: number, connected?: boolean, generatedRpm?: number, position?: $BlockPos_, baseContribution?: number, theoreticalRpm?: number, actualContribution?: number, ];
}
