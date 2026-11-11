import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $ModuleSession, $HudModule } from "@package/xaero/hud/module";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getProcessor(): $MinimapProcessor;
        getMc(): $Minecraft;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWaypointSession(): $WaypointSession;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getRadarSession(): $RadarSession;
        getWorldManager(): $MinimapWorldManager;
        getHideMinimapUnderScreen(): boolean;
        getHideMinimapUnderF3(): boolean;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getWorldState(): $MinimapWorldState;
        getDimensionHelper(): $MinimapDimensionHelper;
        getConfiguredWidth(): number;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get processor(): $MinimapProcessor;
        get mc(): $Minecraft;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get waypointSession(): $WaypointSession;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get radarSession(): $RadarSession;
        get worldManager(): $MinimapWorldManager;
        get hideMinimapUnderScreen(): boolean;
        get hideMinimapUnderF3(): boolean;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get worldState(): $MinimapWorldState;
        get dimensionHelper(): $MinimapDimensionHelper;
        get configuredWidth(): number;
    }
}
