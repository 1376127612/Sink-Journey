import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        size(): number;
        isClosed(): boolean;
        getSelected(): number;
        setActive(arg0: boolean): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getRenderY(): number;
        setClosed(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        selectId(arg0: number, arg1: boolean): void;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        getRenderYWithOffset(): number;
        getXWithOffset(): number;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static LINE_HEIGHT: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        focused: boolean;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        get selected(): number;
        get renderY(): number;
        get renderYWithOffset(): number;
        get XWithOffset(): number;
    }
}
