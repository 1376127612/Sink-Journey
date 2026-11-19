import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $GlobalPos } from "@package/net/minecraft/core";
import { $Chunk3D } from "@package/mekanism/api";

declare module "@package/mekanism/common/tile/interfaces" {
    export class $ITileWrapper {
    }
    export interface $ITileWrapper {
        getTileChunk(): $Chunk3D;
        getTileGlobalPos(): $GlobalPos;
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        get tileChunk(): $Chunk3D;
        get tileGlobalPos(): $GlobalPos;
        get level(): $Level;
        get blockPos(): $BlockPos;
    }
}
