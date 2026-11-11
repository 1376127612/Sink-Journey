import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $WidgetTooltipHolder, $OptionsList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $KeyMapping, $Options } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";

declare module "@package/net/minecraft/client/gui/screens/options/controls" {
    export class $KeyBindsList extends $ContainerObjectSelectionList<$KeyBindsList$Entry> {
        refreshEntries(): void;
        resetMappingAndUpdateButtons(): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(keyBindsScreen: $KeyBindsScreen, minecraft: $Minecraft);
    }
    export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
        constructor();
    }
    export class $ControlsScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        list: $OptionsList;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $KeyBindsList$CategoryEntry extends $KeyBindsList$Entry {
        constructor(name: $KeyBindsList, arg1: $Component_);
    }
    export class $KeyBindsList$KeyEntry extends $KeyBindsList$Entry {
    }
    export class $KeyBindsScreen extends $OptionsSubScreen {
        selectedKey: $KeyMapping;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        list: $OptionsList;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        lastKeySelection: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
}
