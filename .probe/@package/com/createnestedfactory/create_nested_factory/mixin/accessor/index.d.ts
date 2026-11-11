import { $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $BlockEventData, $BlockEventData_ } from "@package/net/minecraft/world/level";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ObjectLinkedOpenHashSet } from "@package/it/unimi/dsi/fastutil/objects";

declare module "@package/com/createnestedfactory/create_nested_factory/mixin/accessor" {
    export class $ServerLevelBlockEventsAccessor {
    }
    export interface $ServerLevelBlockEventsAccessor {
        createNestedFactory$getBlockEvents(): $ObjectLinkedOpenHashSet<$BlockEventData>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelBlockEventsAccessor}.
     */
    export type $ServerLevelBlockEventsAccessor_ = (() => $ObjectLinkedOpenHashSet<$BlockEventData_>);
    export class $LevelTicksAccessor<T> {
    }
    export interface $LevelTicksAccessor<T> {
        createNestedFactory$getAllContainers(): $Long2ObjectMap<$LevelChunkTicks<T>>;
    }
    /**
     * Values that may be interpreted as {@link $LevelTicksAccessor}.
     */
    export type $LevelTicksAccessor_<T> = (() => $Long2ObjectMap<$LevelChunkTicks<T>>);
}
