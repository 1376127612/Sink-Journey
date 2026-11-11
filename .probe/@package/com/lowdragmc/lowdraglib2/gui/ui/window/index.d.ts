import { $Record } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/window" {
    export class $WindowBounds extends $Record {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        atLeastMinimum(): $WindowBounds;
        offsetBy(arg0: number, arg1: number): $WindowBounds;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowBounds}.
     */
    export type $WindowBounds_ = { height?: number, width?: number, y?: number, x?: number,  } | [height?: number, width?: number, y?: number, x?: number, ];
}
