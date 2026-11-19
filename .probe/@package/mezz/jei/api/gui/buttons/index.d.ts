import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $IJeiUserInput } from "@package/mezz/jei/api/gui/inputs";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/mezz/jei/api/gui/buttons" {
    export class $IButtonState {
    }
    export interface $IButtonState {
        setIcon(arg0: $IDrawable): void;
        setVisible(arg0: boolean): void;
        setActive(arg0: boolean): void;
        setForcePressed(arg0: boolean): void;
        set icon(value: $IDrawable);
        set visible(value: boolean);
        set active(value: boolean);
        set forcePressed(value: boolean);
    }
    export class $IIconButtonController {
    }
    export interface $IIconButtonController {
        getTooltips(arg0: $ITooltipBuilder): void;
        drawExtras(arg0: $GuiGraphics, arg1: $Rect2i, arg2: number, arg3: number, arg4: number): void;
        updateState(arg0: $IButtonState): void;
        initState(arg0: $IButtonState): void;
        onPress(arg0: $IJeiUserInput): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IIconButtonController}.
     */
    export type $IIconButtonController_ = ((arg0: $IJeiUserInput) => boolean);
}
