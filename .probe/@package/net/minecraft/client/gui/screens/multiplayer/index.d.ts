import { $ServerLinks_ } from "@package/net/minecraft/server";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AutoCloseable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerNarration(): $Component;
        getServerData(): $LanServer;
        get serverNarration(): $Component;
        get serverData(): $LanServer;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen {
        setSelected(selected: $ServerSelectionList$Entry): void;
        getPinger(): $ServerStatusPinger;
        getServers(): $ServerList;
        joinSelectedServer(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
        set selected(value: $ServerSelectionList$Entry);
        get pinger(): $ServerStatusPinger;
        get servers(): $ServerList;
    }
    export class $SafetyScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        message: $Component;
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
        constructor(previous: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(title: $Component_, connection: $Connection);
    }
    export class $WarningScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        message: $Component;
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
    }
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> {
        removed(): void;
        setSelected(entry: $ServerSelectionList$Entry | null): void;
        updateNetworkServers(lanServers: $List_<$LanServer>): void;
        updateOnlineServers(servers: $ServerList): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(screen: $JoinMultiplayerScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        set selected(value: $ServerSelectionList$Entry | null);
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $ServerData;
        updateServerList(): void;
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $ServerLinksScreen extends $Screen {
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
        constructor(lastScreen: $Screen, links: $ServerLinks_);
    }
}
