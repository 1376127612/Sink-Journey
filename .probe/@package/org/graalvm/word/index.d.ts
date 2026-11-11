import { $Object } from "@package/java/lang";

declare module "@package/org/graalvm/word" {
    export class $WordBase {
    }
    export interface $WordBase {
        /**
         * @deprecated
         */
        equals(o: $Object): boolean;
        rawValue(): number;
    }
    export class $SignedWord {
    }
    export interface $SignedWord extends $ComparableWord {
        add(val: $SignedWord): $SignedWord;
        add(val: number): $SignedWord;
        shiftLeft(n: $UnsignedWord): $SignedWord;
        shiftLeft(n: number): $SignedWord;
        equal(val: $SignedWord): boolean;
        equal(val: number): boolean;
        multiply(val: $SignedWord): $SignedWord;
        multiply(val: number): $SignedWord;
        or(val: number): $SignedWord;
        or(val: $SignedWord): $SignedWord;
        and(val: number): $SignedWord;
        and(val: $SignedWord): $SignedWord;
        not(): $SignedWord;
        subtract(val: number): $SignedWord;
        subtract(val: $SignedWord): $SignedWord;
        xor(val: number): $SignedWord;
        xor(val: $SignedWord): $SignedWord;
        lessThan(val: number): boolean;
        lessThan(val: $SignedWord): boolean;
        greaterThan(val: $SignedWord): boolean;
        greaterThan(val: number): boolean;
        notEqual(val: $SignedWord): boolean;
        notEqual(val: number): boolean;
        greaterOrEqual(val: number): boolean;
        greaterOrEqual(val: $SignedWord): boolean;
        signedShiftRight(n: number): $SignedWord;
        signedShiftRight(n: $UnsignedWord): $SignedWord;
        signedDivide(val: $SignedWord): $SignedWord;
        signedDivide(val: number): $SignedWord;
        signedRemainder(val: $SignedWord): $SignedWord;
        signedRemainder(val: number): $SignedWord;
        lessOrEqual(val: $SignedWord): boolean;
        lessOrEqual(val: number): boolean;
    }
    export class $PointerBase {
    }
    export interface $PointerBase extends $ComparableWord {
        isNull(): boolean;
        isNonNull(): boolean;
        get null(): boolean;
        get nonNull(): boolean;
    }
}
