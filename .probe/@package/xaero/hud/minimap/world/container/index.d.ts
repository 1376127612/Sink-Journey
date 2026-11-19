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
        getSession(): $MinimapSession;
        addWorld(arg0: $MinimapWorld): void;
        addWorld(arg0: string): $MinimapWorld;
        getThirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        removeWorld(arg0: string): void;
        getFullWorldName(arg0: string, arg1: string): string;
        getWorldsCopy(): $List<$MinimapWorld>;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getEquivalentDimId(): $ResourceLocation;
        getDirectoryPath(): $Path;
        getLastNode(): string;
        /**
         * @deprecated
         */
        getServerWaypointManager(): $ServerWaypointManager;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        getEquivalentDimKey(): $ResourceKey<$Level>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        getSubName(): string;
        setPath(arg0: $XaeroPath): void;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get session(): $MinimapSession;
        get thirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get worldsCopy(): $List<$MinimapWorld>;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get equivalentDimId(): $ResourceLocation;
        get directoryPath(): $Path;
        get lastNode(): string;
        get serverWaypointManager(): $ServerWaypointManager;
        get equivalentDimKey(): $ResourceKey<$Level>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get worlds(): $Iterable<$MinimapWorld>;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
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
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        getConfig(): $RootConfig;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get configLoaded(): boolean;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get config(): $RootConfig;
    }
}
