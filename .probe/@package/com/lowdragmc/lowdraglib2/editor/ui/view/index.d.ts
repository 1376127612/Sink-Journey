import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $BiMap } from "@package/com/google/common/collect";
import { $List, $Stack, $Map, $Set, $Collection_ } from "@package/java/util";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $SerializableRecordAction, $EditAction } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $IHistoryStack, $IHistoryStack$HistoryItem, $IHistoryStack$HistoryItem_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $Tab, $ScrollerView, $TabView, $Inspector } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $AssetBrowser } from "@package/com/lowdragmc/lowdraglib2/editor/ui/browser";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $Runnable_, $Enum, $Object } from "@package/java/lang";
import { $Resource, $Resources, $ResourceInstance } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Editor, $View } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/view" {
    export class $ResourceTabLayout$Placement extends $Enum<$ResourceTabLayout$Placement> {
        static values(): $ResourceTabLayout$Placement[];
        static valueOf(arg0: string): $ResourceTabLayout$Placement;
        static byName(arg0: string): $ResourceTabLayout$Placement;
        styleName(): string;
        static LEFT: $ResourceTabLayout$Placement;
        static TOP: $ResourceTabLayout$Placement;
        static RIGHT: $ResourceTabLayout$Placement;
        static BOTTOM: $ResourceTabLayout$Placement;
        isColumn: boolean;
        isLeading: boolean;
    }
    /**
     * Values that may be interpreted as {@link $ResourceTabLayout$Placement}.
     */
    export type $ResourceTabLayout$Placement_ = "left" | "right" | "top" | "bottom";
    export class $ResourceTabLayout {
        clearStripSize(): void;
        setStripSize(arg0: number): void;
        setPlacement(arg0: $ResourceTabLayout$Placement_): void;
        getStripSize(): number;
        hasStripSize(): boolean;
        getPlacement(): $ResourceTabLayout$Placement;
        setOrder(arg0: $Collection_<string>): void;
        getHidden(): $Set<string>;
        reset(): void;
        isHidden(arg0: string): boolean;
        static deserialize(arg0: $CompoundTag_): $ResourceTabLayout;
        serialize(): $CompoundTag;
        getOrder(): $List<string>;
        setHidden(arg0: string, arg1: boolean): void;
        static DEFAULT_STRIP_SIZE: number;
        static MAX_STRIP_SIZE: number;
        constructor();
    }
    export class $ResourceView extends $View {
        resetTabLayout(): void;
        getTabLayout(): $ResourceTabLayout;
        getAssetBrowserTab(): $Tab;
        isResourceHidden(arg0: $Resource<never>): boolean;
        setStripSize(arg0: number): void;
        static placementClass(arg0: $ResourceTabLayout$Placement_): string;
        setResourceHidden(arg0: $Resource<never>, arg1: boolean): void;
        getStripSeam(): number;
        fitStripSize(): void;
        getResourceTabs(): $BiMap<$Resource<never>, $Tab>;
        orderedResources(): $List<$Resource<never>>;
        isOverResizeHandle(arg0: number, arg1: number): boolean;
        selectResourceInstance(arg0: $Resource<never>): void;
        getSelectedResourceInstance(): $ResourceInstance<never>;
        getResourceInstance<T>(arg0: $Resource<never>): $ResourceInstance<T>;
        setPlacement(arg0: $ResourceTabLayout$Placement_): void;
        getStripSize(): number;
        isColumnStrip(): boolean;
        getPlacement(): $ResourceTabLayout$Placement;
        removeResource(arg0: $Resource<never>): void;
        addResourceInstance(arg0: $ResourceInstance<never>): void;
        getMinimumStripSize(): number;
        addResourceInstances(...arg0: $ResourceInstance<never>[]): void;
        toggleResourceHidden(arg0: $Resource<never>): void;
        loadResources(arg0: $Resources): void;
        getAssetBrowser(): $AssetBrowser;
        clear(): void;
        getResources(): $Map<$Resource<never>, $ResourceInstance<never>>;
        allTabs(): $List<$Tab>;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        static RESIZE_GRAB_OUTSIDE: number;
        pinnedTabSeparator: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        static CLASS_ROOT: string;
        static CLASS_DROP_PLACEHOLDER: string;
        tabView: $TabView;
        static RESIZE_GRAB_INSIDE: number;
        constructor(arg0: $Editor);
        get tabLayout(): $ResourceTabLayout;
        get assetBrowserTab(): $Tab;
        get stripSeam(): number;
        get resourceTabs(): $BiMap<$Resource<never>, $Tab>;
        get selectedResourceInstance(): $ResourceInstance<never>;
        get columnStrip(): boolean;
        get minimumStripSize(): number;
        get assetBrowser(): $AssetBrowser;
        get resources(): $Map<$Resource<never>, $ResourceInstance<never>>;
    }
    export class $InspectorView extends $View {
        clear(): void;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        inspector: $Inspector;
        constructor(arg0: $Editor);
    }
    export class $HistoryView extends $View implements $IHistoryStack {
        undo(): void;
        redo(): void;
        getRedoStack(): $Stack<$IHistoryStack$HistoryItem>;
        getCurrentHistory(): $IHistoryStack$HistoryItem;
        getMaxHistoryCount(): number;
        jumpToHistory(arg0: $IHistoryStack$HistoryItem_): void;
        setMaxHistoryCount(arg0: number): void;
        getUndoStack(): $Stack<$IHistoryStack$HistoryItem>;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: boolean): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: $Object, arg3: boolean): void;
        pushHistory(arg0: $Component_, arg1: $EditAction): void;
        clearHistory(): void;
        clearRedo(): void;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T): $SerializableRecordAction<T>;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T, arg2: $Object): $SerializableRecordAction<T>;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        static MAX_HISTORY_COUNT: number;
        constructor(arg0: $Editor);
        get redoStack(): $Stack<$IHistoryStack$HistoryItem>;
        get currentHistory(): $IHistoryStack$HistoryItem;
        get undoStack(): $Stack<$IHistoryStack$HistoryItem>;
    }
}
