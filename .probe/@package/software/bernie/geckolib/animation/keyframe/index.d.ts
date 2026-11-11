import { $MathValue, $MathValue_ } from "@package/software/bernie/geckolib/loading/math";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $BoneAnimationQueueExtension } from "@package/com/moepus/gbf/animation";
import { $EasingType_, $EasingType } from "@package/software/bernie/geckolib/animation";
export * as event from "@package/software/bernie/geckolib/animation/keyframe/event";

declare module "@package/software/bernie/geckolib/animation/keyframe" {
    export class $KeyframeStack<T extends $Keyframe<never>> extends $Record {
        xKeyframes(): $List<T>;
        yKeyframes(): $List<T>;
        zKeyframes(): $List<T>;
        static from<F extends $Keyframe<never>>(arg0: $KeyframeStack_<F>): $KeyframeStack<F>;
        getLastKeyframeTime(): number;
        constructor();
        constructor(xKeyframes: $List_<T>, yKeyframes: $List_<T>, zKeyframes: $List_<T>);
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $KeyframeStack}.
     */
    export type $KeyframeStack_<T> = { xKeyframes?: $List_<$Keyframe_<never>>, zKeyframes?: $List_<$Keyframe_<never>>, yKeyframes?: $List_<$Keyframe_<never>>,  } | [xKeyframes?: $List_<$Keyframe_<never>>, zKeyframes?: $List_<$Keyframe_<never>>, yKeyframes?: $List_<$Keyframe_<never>>, ];
    export class $BoneAnimationQueue extends $Record implements $BoneAnimationQueueExtension {
        addScales(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        rotationZQueue(): $AnimationPointQueue;
        rotationXQueue(): $AnimationPointQueue;
        rotationYQueue(): $AnimationPointQueue;
        positionZQueue(): $AnimationPointQueue;
        scaleXQueue(): $AnimationPointQueue;
        scaleYQueue(): $AnimationPointQueue;
        positionXQueue(): $AnimationPointQueue;
        positionYQueue(): $AnimationPointQueue;
        scaleZQueue(): $AnimationPointQueue;
        addScaleYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        gbf$activate(): void;
        gbf$reset(arg0: $ObjectArrayList<any>): void;
        bone(): $GeoBone;
        addPositions(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        addNextPosition(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $AnimationPoint_, arg5: $AnimationPoint_, arg6: $AnimationPoint_): void;
        addNextRotation(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $BoneSnapshot, arg5: $AnimationPoint_, arg6: $AnimationPoint_, arg7: $AnimationPoint_): void;
        addNextScale(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $AnimationPoint_, arg5: $AnimationPoint_, arg6: $AnimationPoint_): void;
        addRotations(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        constructor(arg0: $GeoBone);
        constructor(bone: $GeoBone, rotationXQueue: $AnimationPointQueue, rotationYQueue: $AnimationPointQueue, rotationZQueue: $AnimationPointQueue, positionXQueue: $AnimationPointQueue, positionYQueue: $AnimationPointQueue, positionZQueue: $AnimationPointQueue, scaleXQueue: $AnimationPointQueue, scaleYQueue: $AnimationPointQueue, scaleZQueue: $AnimationPointQueue);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimationQueue}.
     */
    export type $BoneAnimationQueue_ = { positionYQueue?: $AnimationPointQueue, bone?: $GeoBone, rotationYQueue?: $AnimationPointQueue, scaleYQueue?: $AnimationPointQueue, positionZQueue?: $AnimationPointQueue, positionXQueue?: $AnimationPointQueue, rotationZQueue?: $AnimationPointQueue, scaleZQueue?: $AnimationPointQueue, scaleXQueue?: $AnimationPointQueue, rotationXQueue?: $AnimationPointQueue,  } | [positionYQueue?: $AnimationPointQueue, bone?: $GeoBone, rotationYQueue?: $AnimationPointQueue, scaleYQueue?: $AnimationPointQueue, positionZQueue?: $AnimationPointQueue, positionXQueue?: $AnimationPointQueue, rotationZQueue?: $AnimationPointQueue, scaleZQueue?: $AnimationPointQueue, scaleXQueue?: $AnimationPointQueue, rotationXQueue?: $AnimationPointQueue, ];
    export class $BoneAnimation extends $Record {
        rotationKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        positionKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        scaleKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        boneName(): string;
        constructor(boneName: string, rotationKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimation}.
     */
    export type $BoneAnimation_ = { rotationKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, boneName?: string,  } | [rotationKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, boneName?: string, ];
    export class $Keyframe<T extends $MathValue> extends $Record {
        easingType(): $EasingType;
        length(): number;
        endValue(): T;
        startValue(): T;
        easingArgs(): $List<T>;
        constructor(arg0: number, arg1: T, arg2: T);
        constructor(length: number, startValue: T, endValue: T, easingType: $EasingType_, easingArgs: $List_<T>);
        constructor(arg0: number, arg1: T, arg2: T, arg3: $EasingType_);
    }
    /**
     * Values that may be interpreted as {@link $Keyframe}.
     */
    export type $Keyframe_<T> = { endValue?: $MathValue_, length?: number, startValue?: $MathValue_, easingArgs?: $List_<$MathValue_>, easingType?: $EasingType_,  } | [endValue?: $MathValue_, length?: number, startValue?: $MathValue_, easingArgs?: $List_<$MathValue_>, easingType?: $EasingType_, ];
}
