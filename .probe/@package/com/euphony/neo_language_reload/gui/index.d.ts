import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ObjectSelectionList$Entry, $ObjectSelectionList, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $LanguageInfo_, $LanguageInfo } from "@package/net/minecraft/client/resources/language";
import { $Minecraft } from "@package/net/minecraft/client";
import { $LinkedList } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";
import { $LanguageSelectScreen } from "@package/net/minecraft/client/gui/screens/options";

declare module "@package/com/euphony/neo_language_reload/gui" {
    export class $LanguageListWidget extends $ObjectSelectionList<$LanguageEntry> {
        updateScroll(): void;
        getRowHeight(): number;
        getScreen(): $LanguageSelectScreen;
        getEntryAtPosition(arg0: number, arg1: number): $LanguageEntry;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(arg0: $Minecraft, arg1: $LanguageSelectScreen, arg2: number, arg3: number, arg4: $Component_);
        get rowHeight(): number;
        get screen(): $LanguageSelectScreen;
    }
    export class $LanguageEntry extends $ObjectSelectionList$Entry<$LanguageEntry> {
        getParent(): $LanguageListWidget;
        getLanguage(): $LanguageInfo;
        getCode(): string;
        setParent(arg0: $LanguageListWidget): void;
        toggle(): void;
        moveDown(): void;
        moveUp(): void;
        constructor(arg0: $Runnable_, arg1: string, arg2: $LanguageInfo_, arg3: $LinkedList<string>);
        get language(): $LanguageInfo;
        get code(): string;
    }
}
