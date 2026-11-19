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
        notEqual(val: number): boolean;
        notEqual(val: $SignedWord): boolean;
        greaterOrEqual(val: number): boolean;
        greaterOrEqual(val: $SignedWord): boolean;
        add(val: number): $SignedWord;
        add(val: $SignedWord): $SignedWord;
        shiftLeft(n: number): $SignedWord;
        shiftLeft(n: $UnsignedWord): $SignedWord;
        equal(val: $SignedWord): boolean;
        equal(val: number): boolean;
        multiply(val: $SignedWord): $SignedWord;
        multiply(val: number): $SignedWord;
        or(val: number): $SignedWord;
        or(val: $SignedWord): $SignedWord;
        and(val: number): $SignedWord;
        and(val: $SignedWord): $SignedWord;
        not(): $SignedWord;
        xor(val: $SignedWord): $SignedWord;
        xor(val: number): $SignedWord;
        subtract(val: $SignedWord): $SignedWord;
        subtract(val: number): $SignedWord;
        greaterThan(val: $SignedWord): boolean;
        greaterThan(val: number): boolean;
        lessThan(val: $SignedWord): boolean;
        lessThan(val: number): boolean;
        signedShiftRight(n: $UnsignedWord): $SignedWord;
        signedShiftRight(n: number): $SignedWord;
        signedDivide(val: number): $SignedWord;
        signedDivide(val: $SignedWord): $SignedWord;
        signedRemainder(val: number): $SignedWord;
        signedRemainder(val: $SignedWord): $SignedWord;
        lessOrEqual(val: number): boolean;
        lessOrEqual(val: $SignedWord): boolean;
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
