import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        getBone(): $GeoBone;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotX(): number;
        getRotY(): number;
        getScaleZ(): number;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getOffsetZ(): number;
        getRotZ(): number;
        stopRotAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        stopScaleAnim(arg0: number): void;
        startScaleAnim(): void;
        startPosAnim(): void;
        startRotAnim(): void;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getOffsetX(): number;
        getOffsetY(): number;
        getScaleY(): number;
        getScaleX(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        isRotAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        isScaleAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        constructor(arg0: $GeoBone);
        get bone(): $GeoBone;
        get rotX(): number;
        get rotY(): number;
        get scaleZ(): number;
        get offsetZ(): number;
        get rotZ(): number;
        get offsetX(): number;
        get offsetY(): number;
        get scaleY(): number;
        get scaleX(): number;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
    }
}
