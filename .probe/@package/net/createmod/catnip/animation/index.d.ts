import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/createmod/catnip/animation" {
    export class $LerpedFloat$Chaser {
        static exp(arg0: number): $LerpedFloat$Chaser;
        static IDLE: $LerpedFloat$Chaser;
        static EXP: $LerpedFloat$Chaser;
        static LINEAR: $LerpedFloat$Chaser;
    }
    export interface $LerpedFloat$Chaser {
        chase(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LerpedFloat$Chaser}.
     */
    export type $LerpedFloat$Chaser_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $LerpedFloat {
        readNBT(arg0: $CompoundTag_, arg1: boolean): void;
        tickChaser(): void;
        chase(arg0: number, arg1: number, arg2: $LerpedFloat$Chaser_): $LerpedFloat;
        startWithValue(arg0: number): $LerpedFloat;
        writeNBT(): $CompoundTag;
        getChaseTarget(): number;
        settled(): boolean;
        updateChaseTarget(arg0: number): void;
        updateChaseSpeed(arg0: number): boolean;
        setValueNoUpdate(arg0: number): void;
        chaseTimed(arg0: number, arg1: number): $LerpedFloat;
        forceNextSync(): void;
        disableSmartAngleChasing(): $LerpedFloat;
        getValue(arg0: number): number;
        getValue(): number;
        setValue(arg0: number): void;
        static linear(): $LerpedFloat;
        static angular(): $LerpedFloat;
        constructor(arg0: $LerpedFloat$Interpolator_);
        get chaseTarget(): number;
        set valueNoUpdate(value: number);
    }
    export class $LerpedFloat$Interpolator {
    }
    export interface $LerpedFloat$Interpolator {
        interpolate(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LerpedFloat$Interpolator}.
     */
    export type $LerpedFloat$Interpolator_ = ((arg0: number, arg1: number, arg2: number) => number);
}
