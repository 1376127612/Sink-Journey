import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        stopPosAnim(arg0: number): void;
        startRotAnim(): void;
        stopRotAnim(arg0: number): void;
        startScaleAnim(): void;
        startPosAnim(): void;
        stopScaleAnim(arg0: number): void;
        getOffsetZ(): number;
        getLastResetRotationTick(): number;
        getLastResetPositionTick(): number;
        isScaleAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isPosAnimInProgress(): boolean;
        isRotAnimInProgress(): boolean;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getBone(): $GeoBone;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getScaleX(): number;
        getScaleY(): number;
        getRotX(): number;
        getRotY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $GeoBone);
        get offsetZ(): number;
        get lastResetRotationTick(): number;
        get lastResetPositionTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get posAnimInProgress(): boolean;
        get rotAnimInProgress(): boolean;
        get bone(): $GeoBone;
        get scaleX(): number;
        get scaleY(): number;
        get rotX(): number;
        get rotY(): number;
        get rotZ(): number;
        get scaleZ(): number;
        get offsetX(): number;
        get offsetY(): number;
    }
}
