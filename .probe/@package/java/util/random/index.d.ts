import { $IntStream, $DoubleStream, $LongStream } from "@package/java/util/stream";

declare module "@package/java/util/random" {
    export class $RandomGenerator {
        static getDefault(): $RandomGenerator;
        static of(arg0: string): $RandomGenerator;
        static get default(): $RandomGenerator;
    }
    export interface $RandomGenerator {
        nextDouble(arg0: number): number;
        nextDouble(arg0: number, arg1: number): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(arg0: number): number;
        nextInt(arg0: number, arg1: number): number;
        nextBytes(arg0: number[]): void;
        nextBoolean(): boolean;
        nextLong(): number;
        nextLong(arg0: number, arg1: number): number;
        nextLong(arg0: number): number;
        nextFloat(): number;
        nextFloat(arg0: number): number;
        nextFloat(arg0: number, arg1: number): number;
        ints(arg0: number, arg1: number, arg2: number): $IntStream;
        ints(arg0: number, arg1: number): $IntStream;
        ints(): $IntStream;
        ints(arg0: number): $IntStream;
        longs(arg0: number, arg1: number, arg2: number): $LongStream;
        longs(arg0: number): $LongStream;
        longs(arg0: number, arg1: number): $LongStream;
        longs(): $LongStream;
        doubles(): $DoubleStream;
        doubles(arg0: number, arg1: number): $DoubleStream;
        doubles(arg0: number): $DoubleStream;
        doubles(arg0: number, arg1: number, arg2: number): $DoubleStream;
        nextGaussian(): number;
        nextGaussian(arg0: number, arg1: number): number;
        isDeprecated(): boolean;
        nextExponential(): number;
        get deprecated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RandomGenerator}.
     */
    export type $RandomGenerator_ = (() => number);
}
