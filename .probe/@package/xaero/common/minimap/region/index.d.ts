import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        setChanged(arg0: boolean): void;
        getZ(): number;
        getGlTexture(arg0: number): number;
        isHasSomething(): boolean;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setGlTexture(arg0: number, arg1: number): void;
        recycleTiles(): void;
        updateBuffers(arg0: number): void;
        setHasSomething(arg0: boolean): void;
        getLevelsBuffered(): number;
        isRefreshRequired(arg0: number): boolean;
        setLevelsBuffered(arg0: number): void;
        setBlockTextureUpload(arg0: boolean): void;
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        bindTexture(arg0: number): number;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        isChanged(): boolean;
        getX(): number;
        getTile(arg0: number, arg1: number): $MinimapTile;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntBuffer, arg7: number): void;
        getLevelToRefresh(arg0: number): number;
        isBlockTextureUpload(): boolean;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        setSuccess(arg0: boolean): void;
        getZ(): number;
        getHeight(arg0: number, arg1: number): number;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isSuccess(): boolean;
        isHasSomething(): boolean;
        setHasTerrain(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasSomething(arg0: boolean): void;
        setWasTransfered(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        getHighlights(): number[];
        getHighlightVersion(): number;
        setHighlightVersion(arg0: number): void;
        isChunkGrid(): boolean;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        hasTerrain(): boolean;
        recycle(): void;
        getX(): number;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get chunkGrid(): boolean;
        get x(): number;
    }
}
