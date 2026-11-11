import { $IPlaceable, $VerticalAlignment_, $HorizontalAlignment_ } from "@package/mezz/jei/api/gui/placement";
import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Component_, $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $RecipeSlotUnderMouse, $IJeiInputHandler, $IJeiGuiEventListener_, $IJeiInputHandler_ } from "@package/mezz/jei/api/gui/inputs";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ScreenPosition_, $ScreenRectangle, $ScreenPosition } from "@package/net/minecraft/client/gui/navigation";
import { $IRecipeSlotDrawablesView, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/mezz/jei/api/gui/widgets" {
    export class $IScrollBoxWidget {
    }
    export interface $IScrollBoxWidget extends $IRecipeWidget, $IJeiInputHandler {
        setContents(arg0: $List_<$FormattedText>): $IScrollBoxWidget;
        setContents(arg0: $IDrawable): $IScrollBoxWidget;
        getContentAreaHeight(): number;
        setScrollbarVisibility(arg0: $ScrollbarVisibility_): $IScrollBoxWidget;
        getContentAreaWidth(): number;
        get contentAreaHeight(): number;
        set scrollbarVisibility(value: $ScrollbarVisibility_);
        get contentAreaWidth(): number;
    }
    export class $IRecipeWidgetBuilder<THIS extends $IRecipeWidgetBuilder<THIS>> {
    }
    export interface $IRecipeWidgetBuilder<THIS extends $IRecipeWidgetBuilder<THIS>> extends $IPlaceable<THIS> {
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): THIS;
        setPosition(arg0: number, arg1: number): THIS;
        getWidth(): number;
        setTooltip(arg0: $FormattedText): THIS;
        setTooltip(arg0: $IRecipeWidgetTooltipCallback_): THIS;
        setTooltip(arg0: $Collection_<$FormattedText>): THIS;
        setTooltip(arg0: $TooltipComponent): THIS;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $ICycleButtonWidget<T> {
    }
    export interface $ICycleButtonWidget<T> extends $IButtonWidget<$ICycleButtonWidget<T>> {
        getValue(): T;
        setValue(arg0: T): $ICycleButtonWidget<T>;
        setMessage(arg0: $Function_<T, $Component>): $ICycleButtonWidget<T>;
        setIcon(arg0: $Function_<T, $IDrawable>): $ICycleButtonWidget<T>;
        set message(value: $Function_<T, $Component>);
        set icon(value: $Function_<T, $IDrawable>);
    }
    /**
     * @deprecated
     */
    export class $ISlottedWidgetFactory<R> {
    }
    export interface $ISlottedWidgetFactory<R> {
        /**
         * @deprecated
         */
        createWidgetForSlots(arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List_<$IRecipeSlotDrawable>): void;
    }
    /**
     * Values that may be interpreted as {@link $ISlottedWidgetFactory}.
     */
    export type $ISlottedWidgetFactory_<R> = ((arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<$IRecipeSlotDrawable>) => void);
    export class $IButtonWidget<THIS extends $IButtonWidget<THIS>> {
    }
    export interface $IButtonWidget<THIS extends $IButtonWidget<THIS>> extends $IRecipeWidgetBuilder<THIS> {
        setActive(arg0: boolean): THIS;
        setMessage(arg0: $Component_): THIS;
        setIcon(arg0: $IDrawable): THIS;
        setVisible(arg0: boolean): THIS;
        set active(value: boolean);
        set message(value: $Component_);
        set icon(value: $IDrawable);
        set visible(value: boolean);
    }
    export class $IScrollGridWidget {
    }
    export interface $IScrollGridWidget extends $ISlottedRecipeWidget, $IPlaceable<$IScrollGridWidget> {
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $IScrollGridWidget;
        setPosition(arg0: number, arg1: number): $IScrollGridWidget;
        getWidth(): number;
        setSlots(arg0: $List_<$IRecipeSlotDrawable>): $IScrollGridWidget;
        getHeight(): number;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        getScreenRectangle(): $ScreenRectangle;
        setScrollbarVisibility(arg0: $ScrollbarVisibility_): $IScrollGridWidget;
        get width(): number;
        set slots(value: $List_<$IRecipeSlotDrawable>);
        get height(): number;
        get screenRectangle(): $ScreenRectangle;
        set scrollbarVisibility(value: $ScrollbarVisibility_);
    }
    export class $IRecipeExtrasBuilder {
    }
    export interface $IRecipeExtrasBuilder {
        /**
         * @deprecated
         */
        addAnimatedRecipeFlame(arg0: number): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addAnimatedRecipeFlame(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        addAnimatedRecipeArrow(arg0: number): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addAnimatedRecipeArrow(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        addText(arg0: $List_<$FormattedText>, arg1: number, arg2: number, arg3: number, arg4: number): $ITextWidget;
        /**
         * @deprecated
         */
        addText(arg0: $FormattedText, arg1: number, arg2: number, arg3: number, arg4: number): $ITextWidget;
        addText(arg0: $List_<$FormattedText>, arg1: number, arg2: number): $ITextWidget;
        addText(arg0: $FormattedText, arg1: number, arg2: number): $ITextWidget;
        addWidget(arg0: $IRecipeWidget_): void;
        addButton(arg0: number, arg1: number, arg2: $Runnable_): $IButtonWidget<never>;
        getRecipeSlots(): $IRecipeSlotDrawablesView;
        addAnimatedRecipeFlameWidget(arg0: number): $IDrawableWidget;
        addAnimatedRecipeArrowWidget(arg0: number): $IDrawableWidget;
        /**
         * @deprecated
         */
        addDrawable(arg0: $IDrawable, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        addDrawable(arg0: $IDrawable): $IPlaceable<never>;
        addScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        addInputHandler(arg0: $IJeiInputHandler_): void;
        /**
         * @deprecated
         */
        addRecipeArrow(): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addRecipeArrow(arg0: number, arg1: number): void;
        addSlottedWidget(arg0: $ISlottedRecipeWidget, arg1: $List_<$IRecipeSlotDrawable>): void;
        addRecipePlusSignWidget(): $IDrawableWidget;
        addRecipeArrowWidget(): $IDrawableWidget;
        addGuiEventListener(arg0: $IJeiGuiEventListener_): void;
        addScrollGridWidget(arg0: $List_<$IRecipeSlotDrawable>, arg1: number, arg2: number): $IScrollGridWidget;
        addTooltipArea(arg0: number, arg1: number, arg2: number, arg3: number): $IDrawableWidget;
        /**
         * @deprecated
         */
        addRecipePlusSign(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        addRecipePlusSign(): $IPlaceable<never>;
        addDrawableWidget(arg0: $IDrawable): $IDrawableWidget;
        addCycleButton<T>(arg0: $List_<T>, arg1: T, arg2: number, arg3: number, arg4: $Consumer_<T>): $ICycleButtonWidget<T>;
        get recipeSlots(): $IRecipeSlotDrawablesView;
    }
    export class $ScrollbarVisibility extends $Enum<$ScrollbarVisibility> {
        static values(): $ScrollbarVisibility[];
        static valueOf(arg0: string): $ScrollbarVisibility;
        static DISABLED: $ScrollbarVisibility;
        static AUTO_HIDE: $ScrollbarVisibility;
        static ENABLED: $ScrollbarVisibility;
        static DEFAULT: $ScrollbarVisibility;
    }
    /**
     * Values that may be interpreted as {@link $ScrollbarVisibility}.
     */
    export type $ScrollbarVisibility_ = "default" | "enabled" | "auto_hide" | "disabled";
    export class $IDrawableWidget {
    }
    export interface $IDrawableWidget extends $IRecipeWidgetBuilder<$IDrawableWidget> {
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $IDrawableWidget;
        setPosition(arg0: number, arg1: number): $IDrawableWidget;
        getWidth(): number;
        setTooltip(arg0: $Collection_<$FormattedText>): $IDrawableWidget;
        setTooltip(arg0: $TooltipComponent): $IDrawableWidget;
        setTooltip(arg0: $FormattedText): $IDrawableWidget;
        setTooltip(arg0: $IRecipeWidgetTooltipCallback_): $IDrawableWidget;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $ITextWidget {
    }
    export interface $ITextWidget extends $IRecipeWidgetBuilder<$ITextWidget> {
        /**
         * @deprecated
         */
        alignVerticalCenter(): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalBottom(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalLeft(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalCenter(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalRight(): $ITextWidget;
        setColor(arg0: number): $ITextWidget;
        setShadow(arg0: boolean): $ITextWidget;
        setPosition(arg0: number, arg1: number): $ITextWidget;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $ITextWidget;
        setTextAlignment(arg0: $HorizontalAlignment_): $ITextWidget;
        setTextAlignment(arg0: $VerticalAlignment_): $ITextWidget;
        getWidth(): number;
        setTooltip(arg0: $FormattedText): $ITextWidget;
        setTooltip(arg0: $IRecipeWidgetTooltipCallback_): $ITextWidget;
        setTooltip(arg0: $TooltipComponent): $ITextWidget;
        setTooltip(arg0: $Collection_<$FormattedText>): $ITextWidget;
        getHeight(): number;
        setLineSpacing(arg0: number): $ITextWidget;
        setFont(arg0: $Font): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalTop(): $ITextWidget;
        set color(value: number);
        set shadow(value: boolean);
        get width(): number;
        get height(): number;
        set lineSpacing(value: number);
        set font(value: $Font);
    }
    export class $IRecipeWidget {
    }
    export interface $IRecipeWidget {
        getPosition(): $ScreenPosition;
        tick(): void;
        /**
         * @deprecated
         */
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: number, arg2: number): void;
        drawWidget(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getScreenRectangle(): $ScreenRectangle;
        get position(): $ScreenPosition;
        get screenRectangle(): $ScreenRectangle;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeWidget}.
     */
    export type $IRecipeWidget_ = (() => $ScreenPosition_);
    export class $ISlottedRecipeWidget {
    }
    export interface $ISlottedRecipeWidget extends $IRecipeWidget {
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
    }
    export class $IRecipeWidgetTooltipCallback {
    }
    export interface $IRecipeWidgetTooltipCallback {
        onTooltip(arg0: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeWidgetTooltipCallback}.
     */
    export type $IRecipeWidgetTooltipCallback_ = ((arg0: $ITooltipBuilder) => void);
    /**
     * @deprecated
     */
    export class $IScrollGridWidgetFactory<R> {
    }
    export interface $IScrollGridWidgetFactory<R> extends $ISlottedWidgetFactory<R> {
        setPosition(arg0: number, arg1: number): void;
        getArea(): $ScreenRectangle;
        get area(): $ScreenRectangle;
    }
}
