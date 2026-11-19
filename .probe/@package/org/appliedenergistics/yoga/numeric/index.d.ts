
declare module "@package/org/appliedenergistics/yoga/numeric" {
    export class $FloatOptional {
        isGreaterThan(arg0: $FloatOptional): boolean;
        inexactEquals(arg0: $FloatOptional): boolean;
        maxOrDefined(arg0: $FloatOptional): $FloatOptional;
        isLessThanOrEqual(arg0: $FloatOptional): boolean;
        isGreaterThanOrEqual(arg0: $FloatOptional): boolean;
        compareTo(arg0: $FloatOptional): number;
        getValue(): number;
        add(arg0: $FloatOptional): $FloatOptional;
        static of(arg0: number): $FloatOptional;
        static of(): $FloatOptional;
        unwrap(): number;
        isDefined(): boolean;
        unwrapOrDefault(arg0: number): number;
        isUndefined(): boolean;
        isLessThan(arg0: $FloatOptional): boolean;
        get value(): number;
        get defined(): boolean;
        get undefined(): boolean;
    }
}
