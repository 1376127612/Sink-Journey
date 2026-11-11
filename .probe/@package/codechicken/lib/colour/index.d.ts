import { $Copyable } from "@package/codechicken/lib/util";

declare module "@package/codechicken/lib/colour" {
    export class $Colour implements $Copyable<$Colour> {
        equals(arg0: $Colour): boolean;
        scale(arg0: number): $Colour;
        add(arg0: $Colour): $Colour;
        b(): number;
        a(): number;
        set(arg0: $Colour): $Colour;
        set(arg0: number): $Colour;
        set(arg0: number, arg1: number, arg2: number, arg3: number): $Colour;
        set(arg0: number, arg1: number, arg2: number, arg3: number): $Colour;
        set(arg0: number, arg1: number, arg2: number, arg3: number): $Colour;
        set(arg0: number[]): $Colour;
        set(arg0: number[]): $Colour;
        g(): number;
        copy(): $Colour;
        r(): number;
        multiply(arg0: $Colour): $Colour;
        sub(arg0: $Colour): $Colour;
        interpolate(arg0: $Colour, arg1: number): $Colour;
        static unpack(arg0: number): number[];
        pack(): number;
        static pack(arg0: number[]): number;
        invert(): $Colour;
        rgba(): number;
        argb(): number;
        rgb(): number;
        packArray(): number[];
        getARGB(): number[];
        getRGBA(): number[];
        static packARGB(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static packARGB(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static packARGB(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static packARGB(arg0: number[]): number;
        static packRGBA(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static packRGBA(arg0: number[]): number;
        static packRGBA(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static packRGBA(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static flipABGR(arg0: number): number;
        multiplyC(arg0: number): $Colour;
        aF(): number;
        aF(arg0: number): $Colour;
        aF(arg0: number): $Colour;
        bF(arg0: number): $Colour;
        bF(): number;
        bF(arg0: number): $Colour;
        rF(): number;
        rF(arg0: number): $Colour;
        rF(arg0: number): $Colour;
        gF(arg0: number): $Colour;
        gF(arg0: number): $Colour;
        gF(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Colour);
        get ARGB(): number[];
        get RGBA(): number[];
    }
    export class $ColourRGBA extends $Colour {
        static multiply(arg0: number, arg1: number): number;
        static pack(arg0: $Colour): number;
        static multiplyC(arg0: number, arg1: number): number;
        constructor(arg0: $ColourRGBA);
        constructor(arg0: number[]);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number);
    }
}
