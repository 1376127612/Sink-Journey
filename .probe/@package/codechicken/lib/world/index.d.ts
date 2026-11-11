import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";

declare module "@package/codechicken/lib/world" {
    export class $IChunkLoadTile {
    }
    export interface $IChunkLoadTile {
        onChunkLoad(arg0: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $IChunkLoadTile}.
     */
    export type $IChunkLoadTile_ = ((arg0: $LevelChunk) => void);
}
