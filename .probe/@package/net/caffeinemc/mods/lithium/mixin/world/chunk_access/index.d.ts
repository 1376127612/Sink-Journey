import { $ChunkResult } from "@package/net/minecraft/server/level";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/caffeinemc/mods/lithium/mixin/world/chunk_access" {
    export class $GenerationChunkHolderAccessor {
    }
    export interface $GenerationChunkHolderAccessor {
        invokeCannotBeLoaded(arg0: $ChunkStatus_): boolean;
        lithium$getChunkFuturesByStatus(): $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
    }
}
