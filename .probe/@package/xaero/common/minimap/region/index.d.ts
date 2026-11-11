import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        bindTexture(arg0: number): number;
        setBlockTextureUpload(arg0: boolean): void;
        getX(): number;
        getZ(): number;
        setChanged(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        getTile(arg0: number, arg1: number): $MinimapTile;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        isChanged(): boolean;
        getLevelsBuffered(): number;
        setHasSomething(arg0: boolean): void;
        updateBuffers(arg0: number): void;
        recycleTiles(): void;
        getGlTexture(arg0: number): number;
        setGlTexture(arg0: number, arg1: number): void;
        isHasSomething(): boolean;
        setLevelsBuffered(arg0: number): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        isRefreshRequired(arg0: number): boolean;
        isBlockTextureUpload(): boolean;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntBuffer, arg7: number): void;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        isSuccess(): boolean;
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        getX(): number;
        getZ(): number;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setSuccess(arg0: boolean): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isChunkGrid(): boolean;
        recycle(): void;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getHeight(arg0: number, arg1: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHighlights(): number[];
        hasTerrain(): boolean;
        setHighlights(arg0: number[]): void;
        setHasSomething(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setHasTerrain(arg0: boolean): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        isHasSomething(): boolean;
        setWasTransfered(arg0: boolean): void;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get z(): number;
        get chunkGrid(): boolean;
    }
}
