import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        setSortType(arg0: $WaypointsSort_): void;
        getSortType(): $WaypointsSort;
        setLoaded(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        isSortReversed(): boolean;
        toggleSortReversed(): void;
        setSortReversed(arg0: boolean): void;
        toggleSortType(): void;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        getServerTeleportCommandFormat(): string;
        setUsingMultiworldDetection(arg0: boolean): void;
        isTeleportationEnabled(): boolean;
        isIgnoreServerLevelId(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        getDefaultMultiworldId(): string;
        resetSubWorldConnections(arg0: boolean): void;
        isUsingMultiworldDetection(): boolean;
        setTeleportationEnabled(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        setDefaultMultiworldId(arg0: string): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getServerTeleportCommandRotationFormat(): string;
        isLoaded(): boolean;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
