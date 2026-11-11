import { $FloatingViewManager } from "@package/com/lowdragmc/lowdraglib2/editor/ui/floating";
import { $File, $File_ } from "@package/java/io";
import { $EditorKeymapDispatcher, $Keymap } from "@package/com/lowdragmc/lowdraglib2/editor/keymap";
import { $ModularUIWindow } from "@package/com/lowdragmc/lowdraglib2/gui/ui/window";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $InspectorView, $HistoryView, $ResourceView } from "@package/com/lowdragmc/lowdraglib2/editor/ui/view";
import { $IProject } from "@package/com/lowdragmc/lowdraglib2/editor/project";
import { $TreeNode, $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $List, $LinkedHashMap, $Map_, $List_, $Map } from "@package/java/util";
import { $EditorSettings } from "@package/com/lowdragmc/lowdraglib2/editor/settings";
import { $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $Tab, $SplitView, $Button, $Menu, $TabView } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Supplier_, $Consumer_, $Predicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $YogaEdge_ } from "@package/org/appliedenergistics/yoga";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Style, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ViewMenu, $FileMenu } from "@package/com/lowdragmc/lowdraglib2/editor/ui/menu";
import { $Record, $Runnable_ } from "@package/java/lang";
export * as view from "@package/com/lowdragmc/lowdraglib2/editor/ui/view";
export * as menu from "@package/com/lowdragmc/lowdraglib2/editor/ui/menu";
export * as floating from "@package/com/lowdragmc/lowdraglib2/editor/ui/floating";
export * as resource from "@package/com/lowdragmc/lowdraglib2/editor/ui/resource";
export * as browser from "@package/com/lowdragmc/lowdraglib2/editor/ui/browser";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui" {
    export class $SplittableWindow$LayoutConfig extends $Record {
        first(): $SplittableWindow$LayoutConfig;
        second(): $SplittableWindow$LayoutConfig;
        static deserialize(arg0: $CompoundTag_): $SplittableWindow$LayoutConfig;
        serialize(): $CompoundTag;
        vertical(): boolean;
        percentage(): number;
        anchorId(): string;
        constructor(anchorId: string, vertical: boolean, percentage: number, first: $SplittableWindow$LayoutConfig_, second: $SplittableWindow$LayoutConfig_);
    }
    /**
     * Values that may be interpreted as {@link $SplittableWindow$LayoutConfig}.
     */
    export type $SplittableWindow$LayoutConfig_ = { vertical?: boolean, anchorId?: string, percentage?: number, first?: $SplittableWindow$LayoutConfig_, second?: $SplittableWindow$LayoutConfig_,  } | [vertical?: boolean, anchorId?: string, percentage?: number, first?: $SplittableWindow$LayoutConfig_, second?: $SplittableWindow$LayoutConfig_, ];
    export class $EditorLayout extends $Record {
        slots(): $List<$EditorLayout$SlotEntry>;
        static deserialize(arg0: $CompoundTag_): $EditorLayout;
        serialize(): $CompoundTag;
        layoutConfig(): $SplittableWindow$LayoutConfig;
        findSlotForView(arg0: string): $EditorLayout$SlotEntry;
        static captureSlots(arg0: $SplittableWindow): $List<$EditorLayout$SlotEntry>;
        constructor(layoutConfig: $SplittableWindow$LayoutConfig_, slots: $List_<$EditorLayout$SlotEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout}.
     */
    export type $EditorLayout_ = { slots?: $List_<$EditorLayout$SlotEntry_>, layoutConfig?: $SplittableWindow$LayoutConfig_,  } | [slots?: $List_<$EditorLayout$SlotEntry_>, layoutConfig?: $SplittableWindow$LayoutConfig_, ];
    export class $View extends $UIElement {
        getName(): string;
        setName(arg0: string): void;
        getIcon(): $IGuiTexture;
        setIcon(arg0: $IGuiTexture_): void;
        getWindow(): $SplittableWindow;
        setCanRemove(arg0: boolean): void;
        getViewContainer(): $ViewContainer;
        setFloatable(arg0: boolean): void;
        setDynamicName(arg0: $Supplier_<$Component>): void;
        isFloatable(): boolean;
        isCanRemove(): boolean;
        setOnRemove(arg0: $Runnable_): void;
        getEditor(): $Editor;
        createTab(): $Tab;
        getViewNameComponent(): $Component;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: string, arg1: $IGuiTexture_);
        constructor(arg0: string);
        constructor();
        get window(): $SplittableWindow;
        get viewContainer(): $ViewContainer;
        set dynamicName(value: $Supplier_<$Component>);
        set onRemove(value: $Runnable_);
        get editor(): $Editor;
        get viewNameComponent(): $Component;
    }
    export class $EditorHost {
    }
    export interface $EditorHost {
        getHostedEditor(): $Editor;
        get hostedEditor(): $Editor;
    }
    /**
     * Values that may be interpreted as {@link $EditorHost}.
     */
    export type $EditorHost_ = (() => $Editor);
    export class $ViewContainer extends $UIElement {
        expand(): void;
        removeView(arg0: $View): void;
        addView(arg0: $View): $ViewContainer;
        getWindow(): $SplittableWindow;
        isCollapse(): boolean;
        collapse(): void;
        selectView(arg0: $View): void;
        getAllViews(): $List<$View>;
        isViewSelected(arg0: $View): boolean;
        hasView(arg0: $View): boolean;
        addViewAt(arg0: $View, arg1: number): $ViewContainer;
        addViews(...arg0: $View[]): $ViewContainer;
        isEmptyWindow(): boolean;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        collapseButton: $Button;
        static EMPTY_LAYOUT: $Layout;
        tabView: $TabView;
        constructor();
        get window(): $SplittableWindow;
        get allViews(): $List<$View>;
        get emptyWindow(): boolean;
    }
    export class $EditorWindow extends $UIElement {
        static open(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>): $EditorWindow;
        getEditors(): $LinkedHashMap<$Editor, $UIElement>;
        showEditor(arg0: $Editor): void;
        show(): void;
        static show(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>): $EditorWindow;
        closeWindow(): void;
        createNewEditor(arg0: $Supplier_<$Editor>): $Editor;
        canMinimize(): boolean;
        removeEditor(arg0: $Editor): void;
        isMaximized(): boolean;
        retoreWindow(): void;
        maximizeWindow(): void;
        minimizeWindow(): void;
        setGameWindowReopener(arg0: $BooleanSupplier_): $EditorWindow;
        static osWindowOf(arg0: $ResourceLocation_): $EditorOsWindow;
        getOsWindow(): $EditorOsWindow;
        toggleMaximized(): void;
        isInOsWindow(): boolean;
        hostAsScreen(): void;
        hasMultipleEditors(): boolean;
        dockIntoGameWindow(): boolean;
        prefersOsWindow(): boolean;
        static openDefault(arg0: $Supplier_<$Editor>): $EditorWindow;
        popOutToOsWindow(): boolean;
        isShowingMaximized(): boolean;
        getCurrentEditor(): $Editor;
        editorButtonContainer: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static DEFAULT_ID: $ResourceLocation;
        editorContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        static HOST_TOGGLE_ID: string;
        window: $UIElement;
        windowID: $ResourceLocation;
        constructor(arg0: $Supplier_<$Editor>);
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>);
        get editors(): $LinkedHashMap<$Editor, $UIElement>;
        get maximized(): boolean;
        set gameWindowReopener(value: $BooleanSupplier_);
        get osWindow(): $EditorOsWindow;
        get inOsWindow(): boolean;
        get showingMaximized(): boolean;
        get currentEditor(): $Editor;
    }
    export class $EditorOsWindow extends $ModularUIWindow {
        syncDragArea(): void;
        getEditorWindow(): $EditorWindow;
        static MIN_WIDTH: number;
        static MIN_HEIGHT: number;
        constructor(arg0: $EditorWindow);
        get editorWindow(): $EditorWindow;
    }
    export class $EditorLayout$SlotEntry extends $Record {
        path(): string;
        static deserialize(arg0: $CompoundTag_): $EditorLayout$SlotEntry;
        serialize(): $CompoundTag;
        viewNames(): $List<string>;
        selectedViewName(): string;
        constructor(path: string, viewNames: $List_<string>, selectedViewName: string);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout$SlotEntry}.
     */
    export type $EditorLayout$SlotEntry_ = { selectedViewName?: string, viewNames?: $List_<string>, path?: string,  } | [selectedViewName?: string, viewNames?: $List_<string>, path?: string, ];
    export class $Editor extends $UIElement implements $EditorHost {
        exit(arg0: $Runnable_): void;
        exit(): void;
        close(): void;
        getTitle(): $Component;
        getIcon(): $UIElement;
        getTop(): $UIElement;
        getMenuContainer(): $UIElement;
        getWindow(): $EditorWindow;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu, arg3: boolean): void;
        openMenu(arg0: $UIElement, arg1: number, arg2: number, arg3: $TreeBuilder$Menu): void;
        openMenu<T, C>(arg0: number, arg1: number, arg2: $TreeNode<T, C>, arg3: $UIElementProvider_<T>): $Menu<T, C>;
        openMenu<T, C>(arg0: $UIElement, arg1: number, arg2: number, arg3: $TreeNode<T, C>, arg4: $UIElementProvider_<T>): $Menu<T, C>;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu): void;
        openMenu(arg0: $UIElement, arg1: number, arg2: number, arg3: $TreeBuilder$Menu, arg4: boolean): void;
        placeView(arg0: $View, arg1: $Supplier_<$ViewContainer>): void;
        redockView(arg0: $View): void;
        getKeymap(): $Keymap;
        saveProject(arg0: $Runnable_, arg1: boolean): void;
        saveProject(arg0: $Runnable_): void;
        getAllViews(): $List<$View>;
        saveAsProject(arg0: $Runnable_): void;
        saveAsProject(arg0: $File_, arg1: $Runnable_): void;
        captureLayout(): $EditorLayout;
        applyLayout(arg0: $EditorLayout_): void;
        getHostedEditor(): $Editor;
        getCurrentProject(): $IProject;
        askToSaveProject(arg0: $Runnable_): void;
        getFloatingViews(): $FloatingViewManager;
        getLeftWindow(): $SplittableWindow;
        getSavedLayout(): $EditorLayout;
        openSettingsPanel(): void;
        getResourceView(): $ResourceView;
        getTopPlaceholder(): $UIElement;
        getCloseButton(): $Button;
        getButtonContainer(): $UIElement;
        getHistoryView(): $HistoryView;
        getViewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        getRightWindow(): $SplittableWindow;
        loadProject(arg0: $IProject, arg1: $File_): void;
        getViewMenu(): $ViewMenu;
        getBottomWindow(): $SplittableWindow;
        getEditorSettings(): $EditorSettings;
        static emptyEditor(): $Editor;
        getCenterWindow(): $SplittableWindow;
        getInspectorView(): $InspectorView;
        getMainView(): $UIElement;
        getFileMenu(): $FileMenu;
        getRootWindow(): $SplittableWindow;
        getCurrentProjectFile(): $File;
        getKeymapDispatcher(): $EditorKeymapDispatcher;
        closeCurrentProject(arg0: boolean, arg1: $Runnable_): void;
        getActiveViewContainer(): $ViewContainer;
        isCurrentProjectDirty(): boolean;
        static SETTINGS_HEIGHT: number;
        static ANCHOR_CENTER: string;
        static ANCHOR_BOTTOM: string;
        keymap: $Keymap;
        resourceView: $ResourceView;
        static EMPTY_LAYOUT: $Layout;
        topPlaceholder: $UIElement;
        icon: $UIElement;
        menuContainer: $UIElement;
        buttonContainer: $UIElement;
        inspectorView: $InspectorView;
        static ANCHOR_RIGHT: string;
        rightWindow: $SplittableWindow;
        top: $UIElement;
        closeButton: $Button;
        static ANCHOR_LEFT: string;
        fileMenu: $FileMenu;
        leftWindow: $SplittableWindow;
        static CODEC: $Codec<$UIElement>;
        historyView: $HistoryView;
        static ANCHOR_ROOT: string;
        viewMenu: $ViewMenu;
        centerWindow: $SplittableWindow;
        editorSettings: $EditorSettings;
        static SETTINGS_WIDTH: number;
        rootWindow: $SplittableWindow;
        bottomWindow: $SplittableWindow;
        mainView: $UIElement;
        constructor();
        get title(): $Component;
        get window(): $EditorWindow;
        get allViews(): $List<$View>;
        get hostedEditor(): $Editor;
        get currentProject(): $IProject;
        get floatingViews(): $FloatingViewManager;
        get savedLayout(): $EditorLayout;
        get viewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        get currentProjectFile(): $File;
        get keymapDispatcher(): $EditorKeymapDispatcher;
        get activeViewContainer(): $ViewContainer;
        get currentProjectDirty(): boolean;
    }
    export class $SplittableWindow extends $UIElement {
        getFirst(): $SplittableWindow;
        getSecond(): $SplittableWindow;
        isSplit(): boolean;
        maximize(): void;
        getLeftTop(): $ViewContainer;
        getViewContainer(): $ViewContainer;
        getAllViews(): $List<$View>;
        toggleMaximize(): void;
        getLayoutConfig(): $SplittableWindow$LayoutConfig;
        restoreMaximized(): void;
        getLeftBottom(): $ViewContainer;
        trimEmptySplits(): boolean;
        getRightTop(): $ViewContainer;
        getAnchorId(): string;
        isMaximized(): boolean;
        getRootWindow(): $SplittableWindow;
        setImmortal(arg0: boolean): $SplittableWindow;
        setAnchorId(arg0: string): $SplittableWindow;
        splitNew(arg0: $YogaEdge_): $Pair<$SplittableWindow, $SplittableWindow>;
        splitStyle(arg0: $Consumer_<$SplittableWindow$SplitStyle>): $SplittableWindow;
        splitWith(arg0: $YogaEdge_, arg1: $SplittableWindow): $Pair<$SplittableWindow, $SplittableWindow>;
        hasAnyView(): boolean;
        isImmortal(): boolean;
        rebuildFromLayoutConfig(arg0: $SplittableWindow$LayoutConfig_, arg1: $Map_<string, $SplittableWindow>): void;
        setParentWindow(arg0: $SplittableWindow): $SplittableWindow;
        removeSplitWindow(arg0: $SplittableWindow): void;
        acceptsView(arg0: $View): boolean;
        getSplitStyle(): $SplittableWindow$SplitStyle;
        applyLayoutConfig(arg0: $SplittableWindow$LayoutConfig_): $SplittableWindow;
        setViewFilter(arg0: $Predicate_<$View>): $SplittableWindow;
        getSplitView(): $SplitView;
        getMaximizedWindow(): $SplittableWindow;
        getParentWindow(): $SplittableWindow;
        getRightBottom(): $ViewContainer;
        setViewContainer(arg0: $ViewContainer): $SplittableWindow;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: $SplittableWindow, arg1: $ViewContainer);
        constructor(arg0: $SplittableWindow);
        constructor();
        get first(): $SplittableWindow;
        get second(): $SplittableWindow;
        get split(): boolean;
        get leftTop(): $ViewContainer;
        get allViews(): $List<$View>;
        get layoutConfig(): $SplittableWindow$LayoutConfig;
        get leftBottom(): $ViewContainer;
        get rightTop(): $ViewContainer;
        get maximized(): boolean;
        get rootWindow(): $SplittableWindow;
        set viewFilter(value: $Predicate_<$View>);
        get splitView(): $SplitView;
        get maximizedWindow(): $SplittableWindow;
        get rightBottom(): $ViewContainer;
    }
    export class $SplittableWindow$SplitStyle extends $Style {
        static init(): void;
        percentage(): number;
        percentage(arg0: number): $SplittableWindow$SplitStyle;
        minPercentage(arg0: number): $SplittableWindow$SplitStyle;
        minPercentage(): number;
        maxPercentage(arg0: number): $SplittableWindow$SplitStyle;
        maxPercentage(): number;
        holder: $UIElement;
        constructor(arg0: $SplittableWindow);
    }
}
