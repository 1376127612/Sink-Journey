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
        onFinished(arg0: $AnimationRuntime): void;
        keyFrames(): $KeyFrames<T>;
        apply(arg0: $AnimationRuntime, arg1: number): void;
        handler(): $IFrameValueHandler<T>;
        constructor(keyFrames: $KeyFrames_<T>, handler: $IFrameValueHandler<T>);
    }
    /**
     * Values that may be interpreted as {@link $KFExecutor}.
     */
    export type $KFExecutor_<T> = { keyFrames?: $KeyFrames_<any>, handler?: $IFrameValueHandler<any>,  } | [keyFrames?: $KeyFrames_<any>, handler?: $IFrameValueHandler<any>, ];
    export class $Animation extends $Record {
        ease(): $IEase;
        duration(): number;
        delay(): number;
        static CODEC: $Codec<$Animation>;
        constructor(duration: number, delay: number, ease: $IEase_);
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { ease?: $IEase_, duration?: number, delay?: number,  } | [ease?: $IEase_, duration?: number, delay?: number, ];
    export class $AnimationEngine {
        handOver(arg0: $AnimationEngine, arg1: $Predicate_<$Object>): void;
        updateFrame(): void;
        getAppTime(): number;
        play(arg0: $KeyFrameAnimation_): $ISubscription;
        constructor();
        get appTime(): number;
    }
    export class $AnimationRuntime {
        isFinished(): boolean;
        getInterpolator(): $Interpolator;
        shiftClock(arg0: number): void;
        update(arg0: number): void;
        animation: $KeyFrameAnimation;
        constructor(arg0: number, arg1: $KeyFrameAnimation_);
        get finished(): boolean;
        get interpolator(): $Interpolator;
    }
    export class $IFrameValueHandler<T> {
    }
    export interface $IFrameValueHandler<T> {
        onFinished(arg0: $AnimationRuntime): void;
        accept(arg0: $AnimationRuntime, arg1: T): void;
        owner(): $Object;
    }
    export class $KeyFrameAnimation extends $Record {
        animation(): $Animation;
        static of(arg0: $Animation_, ...arg1: $KFExecutor_<never>[]): $KeyFrameAnimation;
        kfExecutors(): $KFExecutor<never>[];
        constructor(kfExecutors: $KFExecutor_<never>[], animation: $Animation_);
    }
    /**
     * Values that may be interpreted as {@link $KeyFrameAnimation}.
     */
    export type $KeyFrameAnimation_ = { kfExecutors?: $KFExecutor_<never>[], animation?: $Animation_,  } | [kfExecutors?: $KFExecutor_<never>[], animation?: $Animation_, ];
    export class $KeyFrames<T> extends $Record {
        keyframes(): $TreeSet<$FloatObjectPair<T>>;
        getValue(arg0: number): T;
        static of<T>(arg0: $IValueInterpolator_<T>, ...arg1: $FloatObjectPair<T>[]): $KeyFrames<T>;
        static of<T>(arg0: $IValueInterpolator_<T>, arg1: T, arg2: T): $KeyFrames<T>;
        interpolator(): $IValueInterpolator<T>;
        constructor(keyframes: $TreeSet<$FloatObjectPair<T>>, interpolator: $IValueInterpolator_<T>);
    }
    /**
     * Values that may be interpreted as {@link $KeyFrames}.
     */
    export type $KeyFrames_<T> = { keyframes?: $TreeSet<$FloatObjectPair<any>>, interpolator?: $IValueInterpolator_<any>,  } | [keyframes?: $TreeSet<$FloatObjectPair<any>>, interpolator?: $IValueInterpolator_<any>, ];
}
