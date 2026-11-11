import { $WindowBounds_, $WindowBounds, $ModularUIWindow } from "@package/com/lowdragmc/lowdraglib2/gui/ui/window";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Editor, $View, $EditorLayout, $EditorLayout_, $SplittableWindow } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/floating" {
    export class $FloatingViewManager {
        closeAll(): void;
        isFloating(arg0: $View): boolean;
        capture(): $List<$FloatingLayout>;
        restore(arg0: $List_<$FloatingLayout_>): void;
        allViews(): $List<$View>;
        captureBounds(): $Map<string, $WindowBounds>;
        captureScales(): $Map<string, number>;
        closeWindow(arg0: $FloatingViewWindow): void;
        restoreScales(arg0: $Map_<string, number>): void;
        restoreBounds(arg0: $Map_<string, $WindowBounds_>): void;
        windowOf(arg0: $View): $FloatingViewWindow;
        floatView(arg0: $View): boolean;
        dockBack(arg0: $View): void;
        appendScaleMenu(arg0: $TreeBuilder$Menu, arg1: $FloatingViewWindow): void;
        setWindowScale(arg0: $FloatingViewWindow, arg1: number): void;
        constructor(arg0: $Editor);
    }
    export class $FloatingLayout extends $Record {
        x(): number;
        y(): number;
        layout(): $EditorLayout;
        static deserialize(arg0: $CompoundTag_): $FloatingLayout;
        width(): number;
        serialize(): $CompoundTag;
        height(): number;
        guiScale(): number;
        viewNames(): $List<string>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EditorLayout_);
        constructor(x: number, y: number, width: number, height: number, layout: $EditorLayout_, guiScale: number);
    }
    /**
     * Values that may be interpreted as {@link $FloatingLayout}.
     */
    export type $FloatingLayout_ = { x?: number, guiScale?: number, width?: number, layout?: $EditorLayout_, height?: number, y?: number,  } | [x?: number, guiScale?: number, width?: number, layout?: $EditorLayout_, height?: number, y?: number, ];
    export class $FloatingViewWindow extends $ModularUIWindow {
        isEmpty(): boolean;
        getRoot(): $FloatingViewRoot;
        views(): $List<$View>;
        rootWindow(): $SplittableWindow;
        getEditor(): $Editor;
        dock(arg0: $View): void;
        static MIN_WIDTH: number;
        static MIN_HEIGHT: number;
        constructor(arg0: $Editor, arg1: $Component_);
        get empty(): boolean;
        get root(): $FloatingViewRoot;
        get editor(): $Editor;
    }
}
