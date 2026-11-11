import { $Consumer } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EditBox, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/org/cyclops/cyclopscore/client/gui/component/input" {
    export class $WidgetTextFieldExtended extends $EditBox {
        setListener(arg0: $IInputListener_): void;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        highlightPos: number;
        static UNSET_FG_COLOR: number;
        focused: boolean;
        static FORWARDS: number;
        maxLength: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: boolean);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_);
        set listener(value: $IInputListener_);
    }
    export class $IInputListener {
    }
    export interface $IInputListener {
        onChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $IInputListener}.
     */
    export type $IInputListener_ = (() => void);
}
