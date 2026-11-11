import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        isUndefined(): boolean;
        static percent(arg0: number): $StyleLength;
        static undefined(): $StyleLength;
        static points(arg0: number): $StyleLength;
        isAuto(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleLength;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        isUndefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        static undefined(): $StyleSizeLength;
        static points(arg0: number): $StyleSizeLength;
        isAuto(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleSizeLength;
        isStretch(): boolean;
        static ofStretch(): $StyleSizeLength;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        asYogaValue(): $YogaValue;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static ofMaxContent(): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get auto(): boolean;
        get stretch(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
    }
}
