import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/hellfirepvp/astralsorcery/client/screen/base" {
    export class $FixedSizeScreen extends $Screen {
        getScreenHeight(): number;
        getScreenWidth(): number;
        getScreenLeft(): number;
        getScreenTop(): number;
        getScreenRectangle(): $ScreenRectangle;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get screenHeight(): number;
        get screenWidth(): number;
        get screenLeft(): number;
        get screenTop(): number;
        get screenRectangle(): $ScreenRectangle;
    }
}
