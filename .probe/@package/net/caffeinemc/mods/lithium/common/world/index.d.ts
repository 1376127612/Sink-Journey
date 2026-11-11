import { $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LongOpenHashSet, $Long2ReferenceOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ArrayList } from "@package/java/util";
import { $AbortableIterationConsumer$Continuation } from "@package/net/minecraft/util";
import { $BlockCachingEntity_, $EntityPushablePredicate } from "@package/net/caffeinemc/mods/lithium/common/entity/pushable";
import { $ReferenceOpenHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $SectionedEntityMovementTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $ChunkSectionChangeCallback, $SectionedBlockChangeTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/block";
import { $LithiumInterner } from "@package/net/caffeinemc/mods/lithium/common/util/deduplication";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $EntityAccess } from "@package/net/minecraft/world/level/entity";
export * as chunk from "@package/net/caffeinemc/mods/lithium/common/world/chunk";
export * as interests from "@package/net/caffeinemc/mods/lithium/common/world/interests";
export * as block_pattern_matching from "@package/net/caffeinemc/mods/lithium/common/world/block_pattern_matching";
export * as blockentity from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
export * as listeners from "@package/net/caffeinemc/mods/lithium/common/world/listeners";

declare module "@package/net/caffeinemc/mods/lithium/common/world" {
    export class $LithiumData$Data extends $Record {
        blockChangeTrackers(): $LithiumInterner<$SectionedBlockChangeTracker>;
        entityMovementTrackers(): $LithiumInterner<$SectionedEntityMovementTracker<never, never>>;
        chunkSectionChangeCallbacks(): $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>;
        activeNavigations(): $ReferenceOpenHashSet<$PathNavigation>;
        gameEventDispatchers(): $GameEventDispatcherStorage;
        ominousBanner(): $ItemStack;
        constructor(arg0: $HolderLookup$Provider);
        constructor(gameEventDispatchers: $GameEventDispatcherStorage_, ominousBanner: $ItemStack_, activeNavigations: $ReferenceOpenHashSet<$PathNavigation>, blockChangeTrackers: $LithiumInterner<$SectionedBlockChangeTracker>, entityMovementTrackers: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, chunkSectionChangeCallbacks: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>);
    }
    /**
     * Values that may be interpreted as {@link $LithiumData$Data}.
     */
    export type $LithiumData$Data_ = { gameEventDispatchers?: $GameEventDispatcherStorage_, blockChangeTrackers?: $LithiumInterner<$SectionedBlockChangeTracker>, ominousBanner?: $ItemStack_, chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>, entityMovementTrackers?: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, activeNavigations?: $ReferenceOpenHashSet<$PathNavigation>,  } | [gameEventDispatchers?: $GameEventDispatcherStorage_, blockChangeTrackers?: $LithiumInterner<$SectionedBlockChangeTracker>, ominousBanner?: $ItemStack_, chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>, entityMovementTrackers?: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, activeNavigations?: $ReferenceOpenHashSet<$PathNavigation>, ];
    export class $ChunkAwareEntityIterable<T extends $EntityAccess> {
    }
    export interface $ChunkAwareEntityIterable<T extends $EntityAccess> {
        lithium$IterateEntitiesInTrackedSections(): $Iterable<T>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkAwareEntityIterable}.
     */
    export type $ChunkAwareEntityIterable_<T> = (() => $Iterable_<T>);
    export class $LithiumData {
    }
    export interface $LithiumData {
        lithium$getData(): $LithiumData$Data;
    }
    /**
     * Values that may be interpreted as {@link $LithiumData}.
     */
    export type $LithiumData_ = (() => $LithiumData$Data_);
    export class $ClimbingMobCachingSection {
    }
    export interface $ClimbingMobCachingSection {
        lithium$collectPushableEntities(arg0: $Level_, arg1: $Entity, arg2: $AABB_, arg3: $EntityPushablePredicate<$Entity>, arg4: $ArrayList<$Entity>): $AbortableIterationConsumer$Continuation;
        lithium$onEntityModifiedCachedBlock(arg0: $BlockCachingEntity_, arg1: $BlockState_): void;
    }
    export class $ChunkView {
    }
    export interface $ChunkView {
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
    }
    /**
     * Values that may be interpreted as {@link $ChunkView}.
     */
    export type $ChunkView_ = ((arg0: number, arg1: number) => $ChunkAccess);
    export class $ServerWorldExtended {
    }
    export interface $ServerWorldExtended {
        lithium$setNavigationInactive(arg0: $Mob): void;
        lithium$setNavigationActive(arg0: $Mob): void;
    }
    export class $ChunkRandomSource {
    }
    export interface $ChunkRandomSource {
        lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRandomSource}.
     */
    export type $ChunkRandomSource_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos) => void);
    export class $GameEventDispatcherStorage extends $Record {
        get(arg0: number): $Int2ObjectMap<$GameEventListenerRegistry>;
        replace(arg0: number, arg1: $Int2ObjectMap<$GameEventListenerRegistry>): void;
        storage(): $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>;
        addChunk(arg0: number, arg1: $Int2ObjectMap<$GameEventListenerRegistry>): void;
        removeChunk(arg0: number): void;
        loadedChunks(): $LongOpenHashSet;
        constructor();
        constructor(storage: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks: $LongOpenHashSet);
    }
    /**
     * Values that may be interpreted as {@link $GameEventDispatcherStorage}.
     */
    export type $GameEventDispatcherStorage_ = { storage?: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks?: $LongOpenHashSet,  } | [storage?: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks?: $LongOpenHashSet, ];
}
