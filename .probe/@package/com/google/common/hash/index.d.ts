import { $Serializable } from "@package/java/io";
import { $Charset } from "@package/java/nio/charset";
import { $CharSequence } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/google/common/hash" {
    export class $PrimitiveSink {
    }
    export interface $PrimitiveSink {
        putString(charSequence: $CharSequence, charset: $Charset): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putBytes(bytes: number[], off: number, len: number): $PrimitiveSink;
        putBytes(bytes: number[]): $PrimitiveSink;
        putUnencodedChars(charSequence: $CharSequence): $PrimitiveSink;
        putBoolean(b: boolean): $PrimitiveSink;
        putByte(b: number): $PrimitiveSink;
        putShort(s: number): $PrimitiveSink;
        putChar(c: string): $PrimitiveSink;
        putInt(i: number): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putDouble(d: number): $PrimitiveSink;
    }
    export class $HashFunction {
    }
    export interface $HashFunction {
        hashString(input: $CharSequence, charset: $Charset): $HashCode;
        newHasher(expectedInputSize: number): $Hasher;
        newHasher(): $Hasher;
        hashInt(input: number): $HashCode;
        hashObject<T>(instance: T, funnel: $Funnel_<T>): $HashCode;
        hashLong(input: number): $HashCode;
        hashBytes(input: $ByteBuffer): $HashCode;
        hashBytes(input: number[]): $HashCode;
        hashBytes(input: number[], off: number, len: number): $HashCode;
        hashUnencodedChars(input: $CharSequence): $HashCode;
        bits(): number;
    }
    export class $HashCode {
        asLong(): number;
        static fromBytes(bytes: number[]): $HashCode;
        padToLong(): number;
        static fromLong(hash: number): $HashCode;
        static fromInt(hash: number): $HashCode;
        bits(): number;
        static fromString(string: string): $HashCode;
        asBytes(): number[];
        asInt(): number;
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
    }
    export class $Funnel<T> {
    }
    export interface $Funnel<T> extends $Serializable {
        funnel(from: T, into: $PrimitiveSink): void;
    }
    /**
     * Values that may be interpreted as {@link $Funnel}.
     */
    export type $Funnel_<T> = ((from: T, into: $PrimitiveSink) => void);
    export class $Hasher {
    }
    export interface $Hasher extends $PrimitiveSink {
        putString(charSequence: $CharSequence, charset: $Charset): $Hasher;
        putBytes(bytes: number[], off: number, len: number): $Hasher;
        putBytes(bytes: $ByteBuffer): $Hasher;
        putBytes(bytes: number[]): $Hasher;
        putUnencodedChars(charSequence: $CharSequence): $Hasher;
        /**
         * @deprecated
         */
        hashCode(): number;
        putBoolean(b: boolean): $Hasher;
        putByte(b: number): $Hasher;
        putShort(s: number): $Hasher;
        putChar(c: string): $Hasher;
        putInt(i: number): $Hasher;
        putLong(l: number): $Hasher;
        putFloat(f: number): $Hasher;
        putDouble(d: number): $Hasher;
        hash(): $HashCode;
        putObject<T>(instance: T, funnel: $Funnel_<T>): $Hasher;
    }
}
