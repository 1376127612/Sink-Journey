import { $LanguageEntry, $LanguageListWidget } from "@package/com/euphony/neo_language_reload/gui";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $WidgetTooltipHolder, $ObjectSelectionList, $ObjectSelectionList$Entry, $Button$OnPress_, $OptionsList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $LanguageSelectionListWidgetAccessor } from "@package/com/euphony/neo_language_reload/mixin";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ILanguageOptionsScreen } from "@package/com/euphony/neo_language_reload/access";
import { $List } from "@package/java/util";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LanguageManager, $LanguageInfo_ } from "@package/net/minecraft/client/resources/language";
import { $Font } from "@package/net/minecraft/client/gui";
export * as controls from "@package/net/minecraft/client/gui/screens/options/controls";

declare module "@package/net/minecraft/client/gui/screens/options" {
    export class $ChatOptionsScreen extends $OptionsSubScreen {
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
    export class $SkinCustomizationScreen extends $OptionsSubScreen {
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
    export class $OptionsSubScreen extends $Screen {
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
        constructor(lastScreen: $Screen, options: $Options, title: $Component_);
    }
    export class $AccessibilityOptionsScreen extends $OptionsSubScreen {
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
        static TITLE: $Component;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $MouseSettingsScreen extends $OptionsSubScreen {
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
    export class $LanguageSelectScreen extends $OptionsSubScreen implements $ILanguageOptionsScreen {
        languagereload_focusList(arg0: $LanguageListWidget): void;
        languagereload_focusEntry(arg0: $LanguageEntry): void;
        wrapOperation$ded000$chloride$redirect$resourcesReload(arg0: $Minecraft, arg1: $Operation_<any>): $CompletableFuture<any>;
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
        constructor(lastScreen: $Screen, options: $Options, languageManager: $LanguageManager);
    }
    export class $FontOptionsScreen extends $OptionsSubScreen {
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
    export class $LanguageSelectScreen$LanguageSelectionList extends $ObjectSelectionList<$LanguageSelectScreen$LanguageSelectionList$Entry> implements $LanguageSelectionListWidgetAccessor {
        static languagereload_init$neo_language_reload_$md$796745$0(arg0: $LanguageSelectScreen, arg1: $Minecraft): $LanguageSelectScreen$LanguageSelectionList;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(minecraft: $LanguageSelectScreen, arg1: $Minecraft);
    }
    export class $UnsupportedGraphicsWarningScreen$ButtonOption {
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $UnsupportedGraphicsWarningScreen extends $Screen {
        init(): void;
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
    }
    export class $SoundOptionsScreen extends $OptionsSubScreen {
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
    export class $OnlineOptionsScreen extends $OptionsSubScreen {
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
    export class $OptionsScreen extends $Screen {
        static createDifficultyButton(x: number, y: number, name: string, minecraft: $Minecraft): $CycleButton<$Difficulty>;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TELEMETRY: $Component;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $VideoSettingsScreen extends $OptionsSubScreen {
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
        constructor(lastScreen: $Screen, minecraft: $Minecraft, options: $Options);
    }
    export class $LanguageSelectScreen$LanguageSelectionList$Entry extends $ObjectSelectionList$Entry<$LanguageSelectScreen$LanguageSelectionList$Entry> {
        constructor(code: $LanguageSelectScreen$LanguageSelectionList, languageInfo: string, arg2: $LanguageInfo_);
    }
}
