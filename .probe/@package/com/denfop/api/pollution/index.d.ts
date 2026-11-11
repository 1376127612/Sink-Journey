import { $ChunkPos } from "@package/net/minecraft/world/level";
export * as soil from "@package/com/denfop/api/pollution/soil";
export * as air from "@package/com/denfop/api/pollution/air";

declare module "@package/com/denfop/api/pollution" {
    export class $PollutionMechanism {
    }
    export interface $PollutionMechanism {
        getPollution(): number;
        getChunkPos(): $ChunkPos;
        get pollution(): number;
        get chunkPos(): $ChunkPos;
    }
}
