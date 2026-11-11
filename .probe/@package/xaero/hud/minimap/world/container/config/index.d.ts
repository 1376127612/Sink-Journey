import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        isUsingDefaultTeleportCommand(): boolean;
        getServerTeleportCommandFormat(): string;
        setUsingMultiworldDetection(arg0: boolean): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getServerTeleportCommandRotationFormat(): string;
        setLoaded(arg0: boolean): void;
        getSortType(): $WaypointsSort;
        setSortType(arg0: $WaypointsSort_): void;
        isIgnoreHeightmaps(): boolean;
        setTeleportationEnabled(arg0: boolean): void;
        resetSubWorldConnections(arg0: boolean): void;
        isUsingMultiworldDetection(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        setIgnoreHeightmaps(arg0: boolean): void;
        getDefaultMultiworldId(): string;
        isIgnoreServerLevelId(): boolean;
        setDefaultMultiworldId(arg0: string): void;
        setIgnoreServerLevelId(arg0: boolean): void;
        isSortReversed(): boolean;
        isTeleportationEnabled(): boolean;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        toggleSortType(): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
