import { $ControlsHandler } from "@package/xaero/common/controls";
import { $HudPresetManager } from "@package/xaero/hud/preset";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $PushboxManager } from "@package/xaero/hud/pushbox";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HudMod } from "@package/xaero/common";
import { $ModuleSessionHandler, $ModuleSession, $HudModule, $ModuleManager } from "@package/xaero/hud/module";
import { $OldSystemCompatibility } from "@package/xaero/hud/compat";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $HudEventHandler } from "@package/xaero/hud/event";
import { $KeyMappingTickHandler } from "@package/xaero/hud/controls/key";
export * as minimap from "@package/xaero/hud/minimap";
export * as controls from "@package/xaero/hud/controls";
export * as category from "@package/xaero/hud/category";
export * as render from "@package/xaero/hud/render";
export * as module from "@package/xaero/hud/module";
export * as pushbox from "@package/xaero/hud/pushbox";
export * as preset from "@package/xaero/hud/preset";
export * as compat from "@package/xaero/hud/compat";
export * as event from "@package/xaero/hud/event";
export * as path from "@package/xaero/hud/path";
export * as packet from "@package/xaero/hud/packet";
export * as io from "@package/xaero/hud/io";

declare module "@package/xaero/hud" {
    export class $Hud {
        getPresetManager(): $HudPresetManager;
        getPushboxManager(): $PushboxManager;
        getSessionHandler(): $ModuleSessionHandler;
        getModuleManager(): $ModuleManager;
        getEventHandler(): $HudEventHandler;
        getOldSystemCompatibility(): $OldSystemCompatibility;
        constructor(arg0: $ModuleManager, arg1: $PushboxManager, arg2: $HudPresetManager, arg3: $HudEventHandler, arg4: $ModuleSessionHandler, arg5: $OldSystemCompatibility);
        get presetManager(): $HudPresetManager;
        get pushboxManager(): $PushboxManager;
        get sessionHandler(): $ModuleSessionHandler;
        get moduleManager(): $ModuleManager;
        get eventHandler(): $HudEventHandler;
        get oldSystemCompatibility(): $OldSystemCompatibility;
    }
    export class $HudSession {
        init(arg0: $ClientPacketListener): void;
        /**
         * @deprecated
         */
        getControls(): $ControlsHandler;
        getSession<MS extends $ModuleSession<MS>>(arg0: $HudModule<MS>): MS;
        static getCurrentSession(): $HudSession;
        getKeyMappingTickHandler(): $KeyMappingTickHandler;
        /**
         * @deprecated
         */
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        static getForPlayer(arg0: $LocalPlayer): $HudSession;
        getHudMod(): $HudMod;
        tryCleanup(): void;
        constructor(arg0: $HudMod);
        get controls(): $ControlsHandler;
        static get currentSession(): $HudSession;
        get keyMappingTickHandler(): $KeyMappingTickHandler;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get hudMod(): $HudMod;
    }
}
