import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $IntStream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Record, $StringBuilder } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $DensityFunction$SimpleFunction, $DensityFunction$FunctionContext, $DensityFunction$Visitor_, $DensityFunction$ContextProvider, $DensityFunction } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource, $KeyDispatchDataCodec } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/synth" {
    /**
     * This samples the sum of two individual samplers of perlin noise octaves.
     * The input coordinates are scaled by `#INPUT_FACTOR`, and the result is scaled by `#valueFactor`.
     */
    export class $NormalNoise {
        parityConfigString(builder: $StringBuilder): void;
        /**
         * @deprecated
         */
        static createLegacyNetherBiome(random: $RandomSource, parameters: $NormalNoise$NoiseParameters_): $NormalNoise;
        parameters(): $NormalNoise$NoiseParameters;
        getValue(x: number, arg1: number, y: number): number;
        static create(random: $RandomSource, parameters: $NormalNoise$NoiseParameters_): $NormalNoise;
        static create(random: $RandomSource, firstOctave: number, ...amplitudes: number[]): $NormalNoise;
        maxValue(): number;
    }
    /**
     * This class wraps three individual perlin noise octaves samplers.
     * It computes the octaves of the main noise, and then uses that as a linear interpolation value between the minimum and maximum limit noises.
     */
    export class $BlendedNoise implements $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        parityConfigString(builder: $StringBuilder): void;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        static createUnseeded(xzScale: number, arg1: number, yScale: number, arg3: number, xzFactor: number): $BlendedNoise;
        minValue(): number;
        withNewRandom(random: $RandomSource): $BlendedNoise;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$BlendedNoise>;
        constructor(random: $RandomSource, xzScale: number, arg2: number, yScale: number, arg4: number, xzFactor: number);
    }
    /**
     * This class generates multiple octaves of perlin noise. Each individual octave is an instance of `ImprovedNoise`.
     * Mojang uses the term 'Perlin' to describe octaves or fBm (Fractal Brownian Motion) noise.
     */
    export class $PerlinNoise {
        parityConfigString(builder: $StringBuilder): void;
        /**
         * @deprecated
         */
        static createLegacyForLegacyNetherBiome(random: $RandomSource, firstOctave: number, amplitudes: $DoubleList): $PerlinNoise;
        static wrap(multiplier: number): number;
        /**
         * @deprecated
         */
        getValue(x: number, arg1: number, y: number, arg3: number, z: number, arg5: boolean): number;
        getValue(x: number, arg1: number, y: number): number;
        static create(random: $RandomSource, firstOctave: number, amplitudes: $DoubleList): $PerlinNoise;
        static create(random: $RandomSource, octaves: $IntStream): $PerlinNoise;
        static create(random: $RandomSource, octaves: $List_<number>): $PerlinNoise;
        static create(random: $RandomSource, firstOctave: number, firstAmplitude: number, ...arg3: number[]): $PerlinNoise;
        /**
         * @return A single octave of Perlin noise.
         */
        getOctaveNoise(octave: number): $ImprovedNoise;
        maxBrokenValue(multiplier: number): number;
        /**
         * @deprecated
         */
        static createLegacyForBlendedNoise(random: $RandomSource, octaves: $IntStream): $PerlinNoise;
    }
    export interface $NormalNoise$NoiseParameters extends RegistryMarked<RegistryTypes.WorldgenNoiseTag, RegistryTypes.WorldgenNoise> {}
    /**
     * Generates a single octave of Perlin noise.
     */
    export class $ImprovedNoise {
        /**
         * @deprecated
         */
        noise(x: number, arg1: number, y: number, arg3: number, z: number): number;
        noise(x: number, arg1: number, y: number): number;
        parityConfigString(builder: $StringBuilder): void;
        noiseWithDerivative(x: number, arg1: number, y: number, arg3: number[]): number;
        zo: number;
        yo: number;
        xo: number;
        constructor(random: $RandomSource);
    }
    /**
     * This class generates multiple octaves of simplex noise. Each individual octave is an instance of `SimplexNoise`.
     * Mojang uses the term 'Perlin' to describe octaves or fBm (Fractal Brownian Motion) noise and this class does not actually generate Perlin noise.
     */
    export class $PerlinSimplexNoise {
        getValue(x: number, arg1: number, y: boolean): number;
        constructor(random: $RandomSource, octaves: $List_<number>);
    }
    export class $NormalNoise$NoiseParameters extends $Record {
        amplitudes(): $DoubleList;
        firstOctave(): number;
        static CODEC: $Codec<$Holder<$NormalNoise$NoiseParameters>>;
        static DIRECT_CODEC: $Codec<$NormalNoise$NoiseParameters>;
        constructor(arg0: number, arg1: $DoubleList);
        constructor(firstOctave: number, amplitude: number, ...arg2: number[]);
        constructor(firstOctave: number, amplitudes: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $NormalNoise$NoiseParameters}.
     */
    export type $NormalNoise$NoiseParameters_ = RegistryTypes.WorldgenNoise | { firstOctave?: number, amplitudes?: $DoubleList,  } | [firstOctave?: number, amplitudes?: $DoubleList, ];
    export class $NoiseUtils {
        /**
         * Takes an input value and biases it using a sine function towards two larger magnitude values.
         */
        static biasTowardsExtreme(value: number, arg1: number): number;
        static parityNoiseOctaveConfigString(builder: $StringBuilder, xo: number, arg2: number, yo: number, arg4: number[]): void;
        static parityNoiseOctaveConfigString(builder: $StringBuilder, xo: number, arg2: number, yo: number, arg4: number[]): void;
        constructor();
    }
    /**
     * A generator for a single octave of Simplex noise.
     */
    export class $SimplexNoise {
        getValue(x: number, arg1: number): number;
        getValue(x: number, arg1: number, y: number): number;
        zo: number;
        yo: number;
        xo: number;
        constructor(random: $RandomSource);
    }
}
