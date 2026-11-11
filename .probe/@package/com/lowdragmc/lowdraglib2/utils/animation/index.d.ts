import { $FloatObjectPair } from "@package/it/unimi/dsi/fastutil/floats";
import { $Predicate_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $IEase, $IEase_, $Interpolator } from "@package/com/lowdragmc/lowdraglib2/math/interpolate";
import { $IValueInterpolator_, $IValueInterpolator } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style";
import { $TreeSet } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/utils/animation" {
    export class $KFExecutor<T> extends $Record {
        keyFrames(): $KeyFrames<T>;
        apply(arg0: $AnimationRuntime, arg1: number): void;
        handler(): $IFrameValueHandler<T>;
        onFinished(arg0: $AnimationRuntime): void;
        constructor(keyFrames: $KeyFrames_<T>, handler: $IFrameValueHandler<T>);
    }
    /**
     * Values that may be interpreted as {@link $KFExecutor}.
     */
    export type $KFExecutor_<T> = { handler?: $IFrameValueHandler<any>, keyFrames?: $KeyFrames_<any>,  } | [handler?: $IFrameValueHandler<any>, keyFrames?: $KeyFrames_<any>, ];
    export class $Animation extends $Record {
        duration(): number;
        delay(): number;
        ease(): $IEase;
        static CODEC: $Codec<$Animation>;
        constructor(duration: number, delay: number, ease: $IEase_);
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { delay?: number, ease?: $IEase_, duration?: number,  } | [delay?: number, ease?: $IEase_, duration?: number, ];
    export class $AnimationEngine {
        getAppTime(): number;
        play(arg0: $KeyFrameAnimation_): $ISubscription;
        handOver(arg0: $AnimationEngine, arg1: $Predicate_<$Object>): void;
        updateFrame(): void;
        constructor();
        get appTime(): number;
    }
    export class $AnimationRuntime {
        update(arg0: number): void;
        shiftClock(arg0: number): void;
        isFinished(): boolean;
        getInterpolator(): $Interpolator;
        animation: $KeyFrameAnimation;
        constructor(arg0: number, arg1: $KeyFrameAnimation_);
        get finished(): boolean;
        get interpolator(): $Interpolator;
    }
    export class $IFrameValueHandler<T> {
    }
    export interface $IFrameValueHandler<T> {
        accept(arg0: $AnimationRuntime, arg1: T): void;
        owner(): $Object;
        onFinished(arg0: $AnimationRuntime): void;
    }
    export class $KeyFrameAnimation extends $Record {
        static of(arg0: $Animation_, ...arg1: $KFExecutor_<never>[]): $KeyFrameAnimation;
        animation(): $Animation;
        kfExecutors(): $KFExecutor<never>[];
        constructor(kfExecutors: $KFExecutor_<never>[], animation: $Animation_);
    }
    /**
     * Values that may be interpreted as {@link $KeyFrameAnimation}.
     */
    export type $KeyFrameAnimation_ = { kfExecutors?: $KFExecutor_<never>[], animation?: $Animation_,  } | [kfExecutors?: $KFExecutor_<never>[], animation?: $Animation_, ];
    export class $KeyFrames<T> extends $Record {
        getValue(arg0: number): T;
        static of<T>(arg0: $IValueInterpolator_<T>, arg1: T, arg2: T): $KeyFrames<T>;
        static of<T>(arg0: $IValueInterpolator_<T>, ...arg1: $FloatObjectPair<T>[]): $KeyFrames<T>;
        interpolator(): $IValueInterpolator<T>;
        keyframes(): $TreeSet<$FloatObjectPair<T>>;
        constructor(keyframes: $TreeSet<$FloatObjectPair<T>>, interpolator: $IValueInterpolator_<T>);
    }
    /**
     * Values that may be interpreted as {@link $KeyFrames}.
     */
    export type $KeyFrames_<T> = { interpolator?: $IValueInterpolator_<any>, keyframes?: $TreeSet<$FloatObjectPair<any>>,  } | [interpolator?: $IValueInterpolator_<any>, keyframes?: $TreeSet<$FloatObjectPair<any>>, ];
}
