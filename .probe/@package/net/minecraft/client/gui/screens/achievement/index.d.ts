import { $Function_, $ToLongFunction_, $ToIntFunction_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $WidgetTooltipHolder, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Comparator, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $StatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/achievement" {
    export class $StatsScreen extends $Screen {
        onStatsUpdated(): void;
        initButtons(): void;
        initLists(): void;
        setActiveList(activeList: $ObjectSelectionList<never> | null): void;
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
        constructor(lastScreen: $Screen, stats: $StatsCounter);
        set activeList(value: $ObjectSelectionList<never> | null);
    }
    export class $StatsScreen$ItemStatisticsList extends $ObjectSelectionList<$StatsScreen$ItemStatisticsList$ItemRow> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $StatsScreen$GeneralStatisticsList extends $ObjectSelectionList<$StatsScreen$GeneralStatisticsList$Entry> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $StatsScreen$GeneralStatisticsList$Entry extends $ObjectSelectionList$Entry<$StatsScreen$GeneralStatisticsList$Entry> {
    }
    export class $StatsScreen$ItemStatisticsList$ItemRow extends $ObjectSelectionList$Entry<$StatsScreen$ItemStatisticsList$ItemRow> {
    }
    export class $StatsScreen$MobsStatisticsList$MobRow extends $ObjectSelectionList$Entry<$StatsScreen$MobsStatisticsList$MobRow> {
    }
    export class $StatsScreen$ItemStatisticsList$ItemRowComparator implements $Comparator<$StatsScreen$ItemStatisticsList$ItemRow> {
        reversed(): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>, arg1: $Comparator<U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing(arg0: $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingInt(arg0: $ToIntFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingLong(arg0: $ToLongFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
    }
    export class $StatsScreen$MobsStatisticsList extends $ObjectSelectionList<$StatsScreen$MobsStatisticsList$MobRow> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
}
