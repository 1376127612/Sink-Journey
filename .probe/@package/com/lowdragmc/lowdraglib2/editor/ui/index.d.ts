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
        anchorId(): string;
        vertical(): boolean;
        percentage(): number;
        constructor(anchorId: string, vertical: boolean, percentage: number, first: $SplittableWindow$LayoutConfig_, second: $SplittableWindow$LayoutConfig_);
    }
    /**
     * Values that may be interpreted as {@link $SplittableWindow$LayoutConfig}.
     */
    export type $SplittableWindow$LayoutConfig_ = { percentage?: number, first?: $SplittableWindow$LayoutConfig_, second?: $SplittableWindow$LayoutConfig_, vertical?: boolean, anchorId?: string,  } | [percentage?: number, first?: $SplittableWindow$LayoutConfig_, second?: $SplittableWindow$LayoutConfig_, vertical?: boolean, anchorId?: string, ];
    export class $EditorLayout extends $Record {
        findSlotForView(arg0: string): $EditorLayout$SlotEntry;
        layoutConfig(): $SplittableWindow$LayoutConfig;
        static captureSlots(arg0: $SplittableWindow): $List<$EditorLayout$SlotEntry>;
        slots(): $List<$EditorLayout$SlotEntry>;
        static deserialize(arg0: $CompoundTag_): $EditorLayout;
        serialize(): $CompoundTag;
        constructor(layoutConfig: $SplittableWindow$LayoutConfig_, slots: $List_<$EditorLayout$SlotEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout}.
     */
    export type $EditorLayout_ = { slots?: $List_<$EditorLayout$SlotEntry_>, layoutConfig?: $SplittableWindow$LayoutConfig_,  } | [slots?: $List_<$EditorLayout$SlotEntry_>, layoutConfig?: $SplittableWindow$LayoutConfig_, ];
    export class $View extends $UIElement {
        getIcon(): $IGuiTexture;
        getWindow(): $SplittableWindow;
        setIcon(arg0: $IGuiTexture_): void;
        isFloatable(): boolean;
        setDynamicName(arg0: $Supplier_<$Component>): void;
        setOnRemove(arg0: $Runnable_): void;
        setFloatable(arg0: boolean): void;
        isCanRemove(): boolean;
        setCanRemove(arg0: boolean): void;
        getViewNameComponent(): $Component;
        getViewContainer(): $ViewContainer;
        getName(): string;
        setName(arg0: string): void;
        createTab(): $Tab;
        getEditor(): $Editor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $IGuiTexture_);
        constructor();
        get window(): $SplittableWindow;
        set dynamicName(value: $Supplier_<$Component>);
        set onRemove(value: $Runnable_);
        get viewNameComponent(): $Component;
        get viewContainer(): $ViewContainer;
        get editor(): $Editor;
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
        getWindow(): $SplittableWindow;
        addView(arg0: $View): $ViewContainer;
        isEmptyWindow(): boolean;
        isViewSelected(arg0: $View): boolean;
        getAllViews(): $List<$View>;
        expand(): void;
        isCollapse(): boolean;
        selectView(arg0: $View): void;
        collapse(): void;
        removeView(arg0: $View): void;
        addViews(...arg0: $View[]): $ViewContainer;
        addViewAt(arg0: $View, arg1: number): $ViewContainer;
        hasView(arg0: $View): boolean;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        collapseButton: $Button;
        static EMPTY_LAYOUT: $Layout;
        tabView: $TabView;
        constructor();
        get window(): $SplittableWindow;
        get emptyWindow(): boolean;
        get allViews(): $List<$View>;
    }
    export class $EditorWindow extends $UIElement {
        show(): void;
        static show(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>): $EditorWindow;
        prefersOsWindow(): boolean;
        popOutToOsWindow(): boolean;
        static openDefault(arg0: $Supplier_<$Editor>): $EditorWindow;
        isInOsWindow(): boolean;
        canMinimize(): boolean;
        isMaximized(): boolean;
        hasMultipleEditors(): boolean;
        dockIntoGameWindow(): boolean;
        minimizeWindow(): void;
        createNewEditor(arg0: $Supplier_<$Editor>): $Editor;
        hostAsScreen(): void;
        maximizeWindow(): void;
        retoreWindow(): void;
        toggleMaximized(): void;
        isShowingMaximized(): boolean;
        getOsWindow(): $EditorOsWindow;
        closeWindow(): void;
        removeEditor(arg0: $Editor): void;
        getCurrentEditor(): $Editor;
        static open(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>): $EditorWindow;
        showEditor(arg0: $Editor): void;
        static osWindowOf(arg0: $ResourceLocation_): $EditorOsWindow;
        getEditors(): $LinkedHashMap<$Editor, $UIElement>;
        setGameWindowReopener(arg0: $BooleanSupplier_): $EditorWindow;
        editorButtonContainer: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static DEFAULT_ID: $ResourceLocation;
        editorContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        static HOST_TOGGLE_ID: string;
        window: $UIElement;
        windowID: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>);
        constructor(arg0: $Supplier_<$Editor>);
        get inOsWindow(): boolean;
        get maximized(): boolean;
        get showingMaximized(): boolean;
        get osWindow(): $EditorOsWindow;
        get currentEditor(): $Editor;
        get editors(): $LinkedHashMap<$Editor, $UIElement>;
        set gameWindowReopener(value: $BooleanSupplier_);
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
        selectedViewName(): string;
        path(): string;
        static deserialize(arg0: $CompoundTag_): $EditorLayout$SlotEntry;
        serialize(): $CompoundTag;
        viewNames(): $List<string>;
        constructor(path: string, viewNames: $List_<string>, selectedViewName: string);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout$SlotEntry}.
     */
    export type $EditorLayout$SlotEntry_ = { path?: string, selectedViewName?: string, viewNames?: $List_<string>,  } | [path?: string, selectedViewName?: string, viewNames?: $List_<string>, ];
    export class $Editor extends $UIElement implements $EditorHost {
        openMenu(arg0: $UIElement, arg1: number, arg2: number, arg3: $TreeBuilder$Menu, arg4: boolean): void;
        openMenu(arg0: $UIElement, arg1: number, arg2: number, arg3: $TreeBuilder$Menu): void;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu, arg3: boolean): void;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu): void;
        openMenu<T, C>(arg0: number, arg1: number, arg2: $TreeNode<T, C>, arg3: $UIElementProvider_<T>): $Menu<T, C>;
        openMenu<T, C>(arg0: $UIElement, arg1: number, arg2: number, arg3: $TreeNode<T, C>, arg4: $UIElementProvider_<T>): $Menu<T, C>;
        getIcon(): $UIElement;
        getKeymapDispatcher(): $EditorKeymapDispatcher;
        getCurrentProjectFile(): $File;
        isCurrentProjectDirty(): boolean;
        closeCurrentProject(arg0: boolean, arg1: $Runnable_): void;
        getActiveViewContainer(): $ViewContainer;
        getWindow(): $EditorWindow;
        getMenuContainer(): $UIElement;
        getAllViews(): $List<$View>;
        saveAsProject(arg0: $Runnable_): void;
        saveAsProject(arg0: $File_, arg1: $Runnable_): void;
        saveProject(arg0: $Runnable_): void;
        saveProject(arg0: $Runnable_, arg1: boolean): void;
        getHostedEditor(): $Editor;
        getCurrentProject(): $IProject;
        applyLayout(arg0: $EditorLayout_): void;
        getFloatingViews(): $FloatingViewManager;
        askToSaveProject(arg0: $Runnable_): void;
        captureLayout(): $EditorLayout;
        getFileMenu(): $FileMenu;
        getButtonContainer(): $UIElement;
        loadProject(arg0: $IProject, arg1: $File_): void;
        getCloseButton(): $Button;
        getTopPlaceholder(): $UIElement;
        getMainView(): $UIElement;
        getRootWindow(): $SplittableWindow;
        getViewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        getEditorSettings(): $EditorSettings;
        getLeftWindow(): $SplittableWindow;
        getCenterWindow(): $SplittableWindow;
        getResourceView(): $ResourceView;
        getBottomWindow(): $SplittableWindow;
        getViewMenu(): $ViewMenu;
        getRightWindow(): $SplittableWindow;
        getSavedLayout(): $EditorLayout;
        static emptyEditor(): $Editor;
        getHistoryView(): $HistoryView;
        getInspectorView(): $InspectorView;
        openSettingsPanel(): void;
        exit(arg0: $Runnable_): void;
        exit(): void;
        close(): void;
        getTitle(): $Component;
        placeView(arg0: $View, arg1: $Supplier_<$ViewContainer>): void;
        redockView(arg0: $View): void;
        getKeymap(): $Keymap;
        getTop(): $UIElement;
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
        get keymapDispatcher(): $EditorKeymapDispatcher;
        get currentProjectFile(): $File;
        get currentProjectDirty(): boolean;
        get activeViewContainer(): $ViewContainer;
        get window(): $EditorWindow;
        get allViews(): $List<$View>;
        get hostedEditor(): $Editor;
        get currentProject(): $IProject;
        get floatingViews(): $FloatingViewManager;
        get viewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        get savedLayout(): $EditorLayout;
        get title(): $Component;
    }
    export class $SplittableWindow extends $UIElement {
        rebuildFromLayoutConfig(arg0: $SplittableWindow$LayoutConfig_, arg1: $Map_<string, $SplittableWindow>): void;
        maximize(): void;
        isMaximized(): boolean;
        setViewFilter(arg0: $Predicate_<$View>): $SplittableWindow;
        getRightBottom(): $ViewContainer;
        setViewContainer(arg0: $ViewContainer): $SplittableWindow;
        applyLayoutConfig(arg0: $SplittableWindow$LayoutConfig_): $SplittableWindow;
        getSplitStyle(): $SplittableWindow$SplitStyle;
        setParentWindow(arg0: $SplittableWindow): $SplittableWindow;
        getMaximizedWindow(): $SplittableWindow;
        removeSplitWindow(arg0: $SplittableWindow): void;
        getParentWindow(): $SplittableWindow;
        acceptsView(arg0: $View): boolean;
        getSplitView(): $SplitView;
        getAllViews(): $List<$View>;
        setImmortal(arg0: boolean): $SplittableWindow;
        setAnchorId(arg0: string): $SplittableWindow;
        toggleMaximize(): void;
        getViewContainer(): $ViewContainer;
        getLayoutConfig(): $SplittableWindow$LayoutConfig;
        trimEmptySplits(): boolean;
        getAnchorId(): string;
        getRightTop(): $ViewContainer;
        getLeftBottom(): $ViewContainer;
        restoreMaximized(): void;
        getRootWindow(): $SplittableWindow;
        getFirst(): $SplittableWindow;
        getSecond(): $SplittableWindow;
        getLeftTop(): $ViewContainer;
        splitNew(arg0: $YogaEdge_): $Pair<$SplittableWindow, $SplittableWindow>;
        splitStyle(arg0: $Consumer_<$SplittableWindow$SplitStyle>): $SplittableWindow;
        hasAnyView(): boolean;
        isImmortal(): boolean;
        splitWith(arg0: $YogaEdge_, arg1: $SplittableWindow): $Pair<$SplittableWindow, $SplittableWindow>;
        isSplit(): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: $SplittableWindow, arg1: $ViewContainer);
        constructor();
        constructor(arg0: $SplittableWindow);
        get maximized(): boolean;
        set viewFilter(value: $Predicate_<$View>);
        get rightBottom(): $ViewContainer;
        get maximizedWindow(): $SplittableWindow;
        get splitView(): $SplitView;
        get allViews(): $List<$View>;
        get layoutConfig(): $SplittableWindow$LayoutConfig;
        get rightTop(): $ViewContainer;
        get leftBottom(): $ViewContainer;
        get rootWindow(): $SplittableWindow;
        get first(): $SplittableWindow;
        get second(): $SplittableWindow;
        get leftTop(): $ViewContainer;
        get split(): boolean;
    }
    export class $SplittableWindow$SplitStyle extends $Style {
        minPercentage(): number;
        minPercentage(arg0: number): $SplittableWindow$SplitStyle;
        maxPercentage(): number;
        maxPercentage(arg0: number): $SplittableWindow$SplitStyle;
        static init(): void;
        percentage(): number;
        percentage(arg0: number): $SplittableWindow$SplitStyle;
        holder: $UIElement;
        constructor(arg0: $SplittableWindow);
    }
}
