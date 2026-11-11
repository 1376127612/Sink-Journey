import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/codechicken/lib/model" {
    export class $CachedFormat {
        static lookup(arg0: $VertexFormat): $CachedFormat;
        lightMapIndex: number;
        hasPosition: boolean;
        static BLOCK: $CachedFormat;
        format: $VertexFormat;
        colorIndex: number;
        hasOverlay: boolean;
        overlayIndex: number;
        hasColor: boolean;
        hasLightMap: boolean;
        hasNormal: boolean;
        positionIndex: number;
        elementCount: number;
        hasUV: boolean;
        uvIndex: number;
        normalIndex: number;
    }
}
