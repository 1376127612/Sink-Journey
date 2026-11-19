import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/common/minimap/element/render/over";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as region from "@package/xaero/common/minimap/region";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    export class $MinimapProcessor {
        getSession(): $MinimapSession;
        onClientTick(): void;
        getForcedFairPlay(): boolean;
        onPlayerTick(): void;
        getRadarSession(): $RadarSession;
        isEnlargedMap(): boolean;
        getMinimapWriter(): $MinimapWriter;
        setToResetImage(arg0: boolean): void;
        isToResetImage(): boolean;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        serverHasMod(): boolean;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        updateMinimapItem(): void;
        static hasMinimapItem(arg0: $Player): boolean;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        isCaveModeDisplayed(): boolean;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        setServerModNetworkVersion(arg0: number): void;
        updateZoom(): void;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        getNoMinimapMessageReceived(): boolean;
        toggleManualCaveMode(): void;
        getMinimapItem(): $Item;
        getMinimapSize(): number;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        getMinimapBufferSize(arg0: number): number;
        setLastMapDimensionScale(arg0: number): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        cleanup(): void;
        getMinimapInterface(): $MinimapInterface;
        checkFBO(): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        isConsideringNetherFairPlayMessage(): boolean;
        getTargetZoom(): number;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getServerModNetworkVersion(): number;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get session(): $MinimapSession;
        get forcedFairPlay(): boolean;
        get radarSession(): $RadarSession;
        get minimapWriter(): $MinimapWriter;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        set fairPlayOnlyMessageReceived(value: boolean);
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get caveModeDisplayed(): boolean;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get FBOBufferSize(): number;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get minimapInterface(): $MinimapInterface;
        get targetZoom(): number;
        get entityRadar(): $MinimapRadar;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        /**
         * @deprecated
         */
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
    }
}
