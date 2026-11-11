import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ThirdPartyWaypointManager } from "@package/xaero/hud/minimap/waypoint/thirdparty";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        setPath(arg0: $XaeroPath): void;
        getSession(): $MinimapSession;
        getSubName(): string;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getEquivalentDimKey(): $ResourceKey<$Level>;
        /**
         * @deprecated
         */
        getServerWaypointManager(): $ServerWaypointManager;
        getThirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        getLastNode(): string;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getWorldsCopy(): $List<$MinimapWorld>;
        getFullWorldName(arg0: string, arg1: string): string;
        getDirectoryPath(): $Path;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        removeWorld(arg0: string): void;
        getEquivalentDimId(): $ResourceLocation;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get session(): $MinimapSession;
        get subName(): string;
        get worlds(): $Iterable<$MinimapWorld>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get equivalentDimKey(): $ResourceKey<$Level>;
        get serverWaypointManager(): $ServerWaypointManager;
        get thirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get lastNode(): string;
        get worldsCopy(): $List<$MinimapWorld>;
        get directoryPath(): $Path;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get equivalentDimId(): $ResourceLocation;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        updateConnectionsField(arg0: $WaypointSession): void;
        updateDimensionType(arg0: $ClientLevel): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
