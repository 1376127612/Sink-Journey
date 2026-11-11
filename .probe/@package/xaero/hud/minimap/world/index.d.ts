import { $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HudMod } from "@package/xaero/common";
import { $HashMap } from "@package/java/util";
import { $WaypointSet } from "@package/xaero/hud/minimap/waypoint/set";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as connection from "@package/xaero/hud/minimap/world/connection";
export * as io from "@package/xaero/hud/minimap/world/io";
export * as container from "@package/xaero/hud/minimap/world/container";
export * as state from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/world" {
    export class $MinimapDimensionHelper {
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionDivision(arg0: $MinimapWorld): number;
        constructor();
    }
    export class $MinimapWorldManager {
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        hasCustomWaypoints(): boolean;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        getAutoWorld(): $MinimapWorld;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        getCurrentWorld(): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        containerExists(arg0: $XaeroPath): boolean;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get autoWorld(): $MinimapWorld;
        get currentRootContainer(): $MinimapWorldRootContainer;
        get autoRootContainer(): $MinimapWorldRootContainer;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getContainer(): $MinimapWorldContainer;
        getFullPath(): $XaeroPath;
        getDimId(): $ResourceKey<$Level>;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        setContainer(arg0: $MinimapWorldContainer): void;
        requestRemovalOnSave(arg0: string): void;
        hasSomethingToRemoveOnSave(): boolean;
        getWaypointSet(arg0: string): $WaypointSet;
        getRootConfig(): $RootConfig;
        setSlimeChunkSeed(arg0: number): void;
        getSlimeChunkSeed(): number;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        setCurrentWaypointSetId(arg0: string): void;
        getCurrentWaypointSetId(): string;
        getCurrentWaypointSet(): $WaypointSet;
        getLocalWorldKey(): $XaeroPath;
        getSetCount(): number;
        cleanupOnSave(arg0: $Path_): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        addWaypointSet(arg0: string): void;
        removeWaypointSet(arg0: string): $WaypointSet;
        static DEFAULT_SET: string;
        get fullPath(): $XaeroPath;
        get rootConfig(): $RootConfig;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get localWorldKey(): $XaeroPath;
        get setCount(): number;
    }
}
