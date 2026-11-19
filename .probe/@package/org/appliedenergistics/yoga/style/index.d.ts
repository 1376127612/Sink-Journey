import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        inexactEquals(arg0: $StyleLength): boolean;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        asYogaValue(): $YogaValue;
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static undefined(): $StyleLength;
        static percent(arg0: number): $StyleLength;
        static points(arg0: number): $StyleLength;
        isUndefined(): boolean;
        static ofAuto(): $StyleLength;
        isAuto(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static ofMaxContent(): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        static ofStretch(): $StyleSizeLength;
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static undefined(): $StyleSizeLength;
        static percent(arg0: number): $StyleSizeLength;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        static points(arg0: number): $StyleSizeLength;
        isUndefined(): boolean;
        static ofAuto(): $StyleSizeLength;
        isAuto(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        isStretch(): boolean;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
        get auto(): boolean;
        get stretch(): boolean;
    }
}
