import { $PrintWriter } from "@package/java/io";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $EntityRadarBackwardsCompatibilityConfig } from "@package/xaero/hud/minimap/radar/category";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $WaypointWorld, $WaypointsManager } from "@package/xaero/common/minimap/waypoints";
import { $KeyMapping } from "@package/net/minecraft/client";

declare module "@package/xaero/common/settings" {
    export class $ModSettings {
        /**
         * @deprecated
         */
        getMinimap(): boolean;
        writeSettings(arg0: $PrintWriter): void;
        static getTranslation(arg0: boolean): string;
        removeLegacySlimeChunksSeed(arg0: $XaeroPath): number;
        getEntityRadarBackwardsCompatibilityConfig(): $EntityRadarBackwardsCompatibilityConfig;
        loadSettings(arg0: boolean): void;
        saveSettings(): void;
        resetEntityRadarBackwardsCompatibilityConfig(): void;
        resetServerSettings(): void;
        static canEditIngameSettings(): boolean;
        getUIScale(arg0: number, arg1: number, arg2: number): number;
        showWaypointsDisabled(): boolean;
        deathpointsDisabled(): boolean;
        getMinimapScale(): number;
        getAutoUIScale(): number;
        /**
         * @deprecated
         */
        getSlimeChunks(arg0: $WaypointsManager): boolean;
        /**
         * @deprecated
         */
        getSlimeChunks(arg0: $MinimapSession): boolean;
        /**
         * @deprecated
         */
        saveWaypoints(arg0: $WaypointWorld, arg1: boolean): void;
        /**
         * @deprecated
         */
        saveWaypoints(arg0: $WaypointWorld): void;
        isIgnoreHeightmaps(): boolean;
        minimapDisabled(): boolean;
        caveMapsDisabled(): boolean;
        foundOldRadarSettings(): boolean;
        /**
         * @deprecated
         */
        getLegacySlimeChunksSeed(arg0: $XaeroPath): number;
        removeLoadedWaypointLines(): void;
        loadDefaultSettings(arg0: boolean): void;
        getLoadedWaypointLines(): string;
        /**
         * @deprecated
         */
        waypointsGUI(arg0: $WaypointsManager): boolean;
        waypointsGUI(arg0: $MinimapSession): boolean;
        /**
         * @deprecated
         */
        getSlimeChunksSeed(arg0: $XaeroPath): number;
        /**
         * @deprecated
         */
        setSlimeChunksSeed(arg0: number, arg1: $XaeroPath): void;
        /**
         * @deprecated
         */
        saveAllWaypoints(arg0: $WaypointsManager): void;
        /**
         * @deprecated
         */
        isKeyRepeat(arg0: $KeyMapping): boolean;
        static setServerSettings(): void;
        readSetting(arg0: string[]): void;
        /**
         * @deprecated
         */
        static keyLargeMap: $KeyMapping;
        /**
         * @deprecated
         */
        static keyReverseEntityRadar: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleMap: $KeyMapping;
        /**
         * @deprecated
         */
        static keyBindZoom1: $KeyMapping;
        /**
         * @deprecated
         */
        static keyAllSets: $KeyMapping;
        /**
         * @deprecated
         */
        static keyManualCaveMode: $KeyMapping;
        showTimeLegacy: number;
        needsLegacySlimeSeedResave: boolean;
        /**
         * @deprecated
         */
        static keyToggleTrackedPlayersInWorld: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleMapWaypoints: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleGrid: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleSlimes: $KeyMapping;
        static defaultSettings: number;
        /**
         * @deprecated
         */
        static keyInstantWaypoint: $KeyMapping;
        showLightLevelLegacy: number;
        showCoordsLegacy: boolean;
        /**
         * @deprecated
         */
        static keyLightOverlay: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleTrackedPlayers: $KeyMapping;
        static format: string;
        /**
         * @deprecated
         */
        static newWaypoint: $KeyMapping;
        displayWeatherInfoLegacy: boolean;
        /**
         * @deprecated
         */
        static keyBindZoom: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleWaypoints: $KeyMapping;
        static serverSettings: number;
        /**
         * @deprecated
         */
        static keyWaypoints: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleTrackedPlayersOnMap: $KeyMapping;
        showBiomeLegacy: boolean;
        showDimensionNameLegacy: boolean;
        showAnglesLegacy: boolean;
        /**
         * @deprecated
         */
        static keyTogglePacChunkClaims: $KeyMapping;
        /**
         * @deprecated
         */
        static keySwitchSet: $KeyMapping;
        /**
         * @deprecated
         */
        static keyAlternativeListPlayers: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleRadar: $KeyMapping;
        constructor(arg0: $IXaeroMinimap);
        get minimap(): boolean;
        get entityRadarBackwardsCompatibilityConfig(): $EntityRadarBackwardsCompatibilityConfig;
        get minimapScale(): number;
        get autoUIScale(): number;
        get ignoreHeightmaps(): boolean;
        get loadedWaypointLines(): string;
    }
}
