import { $CodeEditor } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor";
import { $Codec } from "@package/com/mojang/serialization";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $FloatRect } from "@package/dev/vfyjxf/taffy/geometry";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $UIHierarchy } from "@package/com/lowdragmc/lowdraglib2/gui/editor/view";
import { $ScrollerView, $TabView, $Inspector, $Label, $Toggle } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/debugger" {
    export class $UIDebugger extends $UIElement {
        isFocusMode(): boolean;
        isRenderUIShaping(): boolean;
        pickHovered(): void;
        focusElement(arg0: $UIElement): void;
        setRenderUIShaping(arg0: boolean): void;
        setFloating(arg0: boolean): $UIDebugger;
        renderHostOverlay(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getShapingElement(): $UIElement;
        setFocusMode(arg0: boolean): void;
        isFloating(): boolean;
        container: $UIElement;
        border: $LayoutPanel;
        padding: $LayoutPanel;
        margin: $LayoutPanel;
        computedView: $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        modularUI: $ModularUI;
        static EMPTY_LAYOUT: $Layout;
        hierarchy: $UIHierarchy;
        windowModeToggle: $Toggle;
        inspector: $Inspector;
        title: $Label;
        content: $Label;
        titleBar: $UIElement;
        codeEditor: $CodeEditor;
        historyStack: $HistoryStack;
        tabView: $TabView;
        constructor(arg0: $ModularUI);
        get shapingElement(): $UIElement;
    }
    export class $LayoutPanel extends $UIElement {
        addCenter(arg0: $UIElement): $LayoutPanel;
        setValue(arg0: $FloatRect): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: number);
        set value(value: $FloatRect);
    }
}
