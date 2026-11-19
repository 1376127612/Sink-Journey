import { $IntComparator } from "@package/it/unimi/dsi/fastutil/ints";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/navigation" {
    export class $ScreenRectangle extends $Record {
        overlapsInAxis(rectangle: $ScreenRectangle_, axis: $ScreenAxis_): boolean;
        getCenterInAxis(axis: $ScreenAxis_): number;
        bottom(): number;
        getLength(axis: $ScreenAxis_): number;
        position(): $ScreenPosition;
        static of(axis: $ScreenAxis_, primaryPosition: number, secondaryPosition: number, primaryLength: number, secondaryLength: number): $ScreenRectangle;
        static empty(): $ScreenRectangle;
        top(): number;
        left(): number;
        right(): number;
        step(direction: $ScreenDirection_): $ScreenRectangle;
        width(): number;
        containsPoint(x: number, y: number): boolean;
        intersection(rectangle: $ScreenRectangle_): $ScreenRectangle;
        overlaps(rectangle: $ScreenRectangle_): boolean;
        getBoundInDirection(direction: $ScreenDirection_): number;
        height(): number;
        getBorder(direction: $ScreenDirection_): $ScreenRectangle;
        constructor(x: number, y: number, width: number, height: number);
        constructor(arg0: $ScreenPosition_, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenRectangle}.
     */
    export type $ScreenRectangle_ = { position?: $ScreenPosition_, height?: number, width?: number,  } | [position?: $ScreenPosition_, height?: number, width?: number, ];
    export class $FocusNavigationEvent$InitialFocus implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        constructor();
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        direction(): $ScreenDirection;
        constructor(arg0: $ScreenDirection_);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$ArrowNavigation}.
     */
    export type $FocusNavigationEvent$ArrowNavigation_ = { direction?: $ScreenDirection_,  } | [direction?: $ScreenDirection_, ];
    export class $ScreenAxis extends $Enum<$ScreenAxis> {
        getPositive(): $ScreenDirection;
        static values(): $ScreenAxis[];
        static valueOf(arg0: string): $ScreenAxis;
        getNegative(): $ScreenDirection;
        getDirection(isPositive: boolean): $ScreenDirection;
        orthogonal(): $ScreenAxis;
        static VERTICAL: $ScreenAxis;
        static HORIZONTAL: $ScreenAxis;
        get positive(): $ScreenDirection;
        get negative(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAxis}.
     */
    export type $ScreenAxis_ = "horizontal" | "vertical";
    export class $ScreenPosition extends $Record {
        getCoordinate(axis: $ScreenAxis_): number;
        static of(axis: $ScreenAxis_, primaryPosition: number, secondaryPosition: number): $ScreenPosition;
        x(): number;
        y(): number;
        step(direction: $ScreenDirection_): $ScreenPosition;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenPosition}.
     */
    export type $ScreenPosition_ = { y?: number, x?: number,  } | [y?: number, x?: number, ];
    export class $CommonInputs {
        static selected(key: number): boolean;
        constructor();
    }
    export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent {
        forward(): boolean;
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        constructor(arg0: boolean);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$TabNavigation}.
     */
    export type $FocusNavigationEvent$TabNavigation_ = { forward?: boolean,  } | [forward?: boolean, ];
    export class $ScreenDirection extends $Enum<$ScreenDirection> {
        getAxis(): $ScreenAxis;
        getOpposite(): $ScreenDirection;
        static values(): $ScreenDirection[];
        static valueOf(arg0: string): $ScreenDirection;
        isAfter(first: number, second: number): boolean;
        isBefore(first: number, second: number): boolean;
        isPositive(): boolean;
        coordinateValueComparator(): $IntComparator;
        static DOWN: $ScreenDirection;
        static LEFT: $ScreenDirection;
        static RIGHT: $ScreenDirection;
        static UP: $ScreenDirection;
        get axis(): $ScreenAxis;
        get opposite(): $ScreenDirection;
        get positive(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenDirection}.
     */
    export type $ScreenDirection_ = "up" | "down" | "left" | "right";
    export class $FocusNavigationEvent {
    }
    export interface $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent}.
     */
    export type $FocusNavigationEvent_ = (() => $ScreenDirection_);
}
