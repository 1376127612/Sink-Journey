import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        spacing(columnSpacing: number): $GridLayout;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        rowSpacing(columnSpacing: number): $GridLayout;
        columnSpacing(columnSpacing: number): $GridLayout;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        getGrid(): $GridLayout;
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        defaultChildLayoutSetting(): $LayoutSettings;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        newChildLayoutSettings(): $LayoutSettings;
        setMinHeight(minHeight: number): $FrameLayout;
        setMinWidth(minHeight: number): $FrameLayout;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        constructor();
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        set minHeight(value: number);
        set minWidth(value: number);
    }
    export class $LinearLayout implements $Layout {
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        getY(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getWidth(): number;
        getX(): number;
        static horizontal(): $LinearLayout;
        static vertical(): $LinearLayout;
        spacing(spacing: number): $LinearLayout;
        setY(x: number): void;
        setX(x: number): void;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        getHeight(): number;
        defaultCellSetting(): $LayoutSettings;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getY(): number;
        getWidth(): number;
        getX(): number;
        setY(x: number): void;
        setX(x: number): void;
        getHeight(): number;
        arrangeElements(): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(x: number, y: number, width: number, height: number);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        setPosition(x: number, y: number): void;
        getY(): number;
        getWidth(): number;
        getX(): number;
        setY(x: number): void;
        setX(x: number): void;
        getRectangle(): $ScreenRectangle;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getHeight(): number;
        get width(): number;
        get rectangle(): $ScreenRectangle;
        get height(): number;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyBottom(): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        copy(): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        paddingVertical(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        getY(): number;
        static width(height: number): $SpacerElement;
        getWidth(): number;
        static height(height: number): $SpacerElement;
        getX(): number;
        setY(x: number): void;
        setX(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getHeight(): number;
        setPosition(width: number, height: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        defaultChildLayoutSetting(): $LayoutSettings;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        newChildLayoutSettings(): $LayoutSettings;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        copy(): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(padding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(padding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings$LayoutSettingsImpl;
        align(xAlignment: number, yAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        paddingTop(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyBottom(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        constructor();
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getY(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getWidth(): number;
        getX(): number;
        getContentHeight(): number;
        setY(footerHeight: number): void;
        setX(footerHeight: number): void;
        arrangeElements(): void;
        getHeight(): number;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        setHeaderHeight(footerHeight: number): void;
        setFooterHeight(footerHeight: number): void;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(child: T): T;
        getHeaderHeight(): number;
        getFooterHeight(): number;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        constructor(screen: $Screen, height: number);
        constructor(screen: $Screen);
        get width(): number;
        get contentHeight(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
