import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $WidgetTooltipHolder, $ObjectSelectionList } from "@package/net/minecraft/client/gui/components";
import { $LanguageInfo, $LanguageInfo_ } from "@package/net/minecraft/client/resources/language";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Runnable_ } from "@package/java/lang";
import { $LinkedList } from "@package/java/util";
import { $LanguageSelectScreen } from "@package/net/minecraft/client/gui/screens/options";

declare module "@package/com/euphony/neo_language_reload/gui" {
    export class $LanguageListWidget extends $ObjectSelectionList<$LanguageEntry> {
        getEntryAtPosition(arg0: number, arg1: number): $LanguageEntry;
        updateScroll(): void;
        getScreen(): $LanguageSelectScreen;
        getRowHeight(): number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        static SCROLLER_SPRITE: $ResourceLocation;
        focused: boolean;
        hovered: $LanguageEntry;
        height: number;
        constructor(arg0: $Minecraft, arg1: $LanguageSelectScreen, arg2: number, arg3: number, arg4: $Component_);
        get screen(): $LanguageSelectScreen;
        get rowHeight(): number;
    }
    export class $LanguageEntry extends $ObjectSelectionList$Entry<$LanguageEntry> {
        toggle(): void;
        getParent(): $LanguageListWidget;
        getLanguage(): $LanguageInfo;
        setParent(arg0: $LanguageListWidget): void;
        getCode(): string;
        moveUp(): void;
        moveDown(): void;
        constructor(arg0: $Runnable_, arg1: string, arg2: $LanguageInfo_, arg3: $LinkedList<string>);
        get language(): $LanguageInfo;
        get code(): string;
    }
}
