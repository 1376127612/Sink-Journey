import { $WindowBounds_, $WindowBounds, $ModularUIWindow } from "@package/com/lowdragmc/lowdraglib2/gui/ui/window";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Editor, $View, $EditorLayout, $EditorLayout_, $SplittableWindow } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/floating" {
    export class $FloatingViewManager {
        restore(arg0: $List_<$FloatingLayout_>): void;
        appendScaleMenu(arg0: $TreeBuilder$Menu, arg1: $FloatingViewWindow): void;
        closeWindow(arg0: $FloatingViewWindow): void;
        restoreScales(arg0: $Map_<string, number>): void;
        captureScales(): $Map<string, number>;
        captureBounds(): $Map<string, $WindowBounds>;
        restoreBounds(arg0: $Map_<string, $WindowBounds_>): void;
        closeAll(): void;
        capture(): $List<$FloatingLayout>;
        isFloating(arg0: $View): boolean;
        allViews(): $List<$View>;
        windowOf(arg0: $View): $FloatingViewWindow;
        floatView(arg0: $View): boolean;
        dockBack(arg0: $View): void;
        setWindowScale(arg0: $FloatingViewWindow, arg1: number): void;
        constructor(arg0: $Editor);
    }
    export class $FloatingLayout extends $Record {
        x(): number;
        y(): number;
        layout(): $EditorLayout;
        width(): number;
        static deserialize(arg0: $CompoundTag_): $FloatingLayout;
        serialize(): $CompoundTag;
        viewNames(): $List<string>;
        guiScale(): number;
        height(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EditorLayout_);
        constructor(x: number, y: number, width: number, height: number, layout: $EditorLayout_, guiScale: number);
    }
    /**
     * Values that may be interpreted as {@link $FloatingLayout}.
     */
    export type $FloatingLayout_ = { layout?: $EditorLayout_, height?: number, y?: number, x?: number, guiScale?: number, width?: number,  } | [layout?: $EditorLayout_, height?: number, y?: number, x?: number, guiScale?: number, width?: number, ];
    export class $FloatingViewWindow extends $ModularUIWindow {
        dock(arg0: $View): void;
        isEmpty(): boolean;
        getRoot(): $FloatingViewRoot;
        rootWindow(): $SplittableWindow;
        views(): $List<$View>;
        getEditor(): $Editor;
        static MIN_WIDTH: number;
        static MIN_HEIGHT: number;
        constructor(arg0: $Editor, arg1: $Component_);
        get empty(): boolean;
        get root(): $FloatingViewRoot;
        get editor(): $Editor;
    }
}
