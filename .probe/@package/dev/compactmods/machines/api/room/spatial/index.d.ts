import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Stream } from "@package/java/util/stream";
import { $AABB, $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/dev/compactmods/machines/api/room/spatial" {
    export class $IRoomBoundaries {
    }
    export interface $IRoomBoundaries {
        innerChunkPositions(): $Stream<$ChunkPos>;
        innerBounds(): $AABB;
        defaultSpawn(): $Vec3;
        outerBounds(): $AABB;
    }
    /**
     * Values that may be interpreted as {@link $IRoomBoundaries}.
     */
    export type $IRoomBoundaries_ = (() => $AABB_);
}
