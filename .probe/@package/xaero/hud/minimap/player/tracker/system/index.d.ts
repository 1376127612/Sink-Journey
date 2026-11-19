import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $Iterator, $UUID } from "@package/java/util";

declare module "@package/xaero/hud/minimap/player/tracker/system" {
    export class $IRenderedPlayerTracker<P> {
    }
    export interface $IRenderedPlayerTracker<P> {
        getTrackedPlayerIterator(): $Iterator<P>;
        getReader(): $ITrackedPlayerReader<P>;
        get trackedPlayerIterator(): $Iterator<P>;
        get reader(): $ITrackedPlayerReader<P>;
    }
    export class $ITrackedPlayerReader<P> {
    }
    export interface $ITrackedPlayerReader<P> {
        getZ(arg0: P): number;
        getId(arg0: P): $UUID;
        getDimension(arg0: P): $ResourceKey<$Level>;
        getX(arg0: P): number;
        getY(arg0: P): number;
    }
    export class $RenderedPlayerTrackerManager {
        getAllSystems(): $Iterable<$IRenderedPlayerTracker<never>>;
        register(arg0: string, arg1: $IRenderedPlayerTracker<never>): void;
        get allSystems(): $Iterable<$IRenderedPlayerTracker<never>>;
    }
}
