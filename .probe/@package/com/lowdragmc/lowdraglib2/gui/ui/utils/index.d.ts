import { $Function_, $Function } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Stack } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $SerializableRecordAction, $EditAction } from "@package/com/lowdragmc/lowdraglib2/configurator";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/utils" {
    export class $HistoryStack implements $IHistoryStack {
        undo(): void;
        redo(): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: $Object, arg3: boolean): void;
        clearHistory(): void;
        getUndoStack(): $Stack<$IHistoryStack$HistoryItem>;
        getCurrentHistory(): $IHistoryStack$HistoryItem;
        jumpToHistory(arg0: $IHistoryStack$HistoryItem_): void;
        getMaxHistoryCount(): number;
        getRedoStack(): $Stack<$IHistoryStack$HistoryItem>;
        setMaxHistoryCount(arg0: number): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: boolean): void;
        pushHistory(arg0: $Component_, arg1: $EditAction): void;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T, arg2: $Object): $SerializableRecordAction<T>;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T): $SerializableRecordAction<T>;
        static MAX_HISTORY_COUNT: number;
        constructor();
        get undoStack(): $Stack<$IHistoryStack$HistoryItem>;
        get currentHistory(): $IHistoryStack$HistoryItem;
        get redoStack(): $Stack<$IHistoryStack$HistoryItem>;
    }
    export class $IHistoryStack$HistoryItem extends $Record {
        name(): $Component;
        source(): $Object;
        action(): $EditAction;
        constructor(name: $Component_, action: $EditAction, source: $Object);
    }
    /**
     * Values that may be interpreted as {@link $IHistoryStack$HistoryItem}.
     */
    export type $IHistoryStack$HistoryItem_ = { source?: $Object, action?: $EditAction, name?: $Component_,  } | [source?: $Object, action?: $EditAction, name?: $Component_, ];
    export class $ModularUITooltipComponent implements $TooltipComponent {
        modularUI: $ModularUI;
        constructor(arg0: $ModularUI);
        constructor(arg0: $UIElement);
    }
    export class $UIElementProvider<T> {
        static text<T>(arg0: $Function_<T, $Component>): $UIElementProvider<T>;
        static optionalIconText<T>(arg0: $Function_<T, $IGuiTexture>, arg1: $Function_<T, $Component>): $UIElementProvider<T>;
        static iconText<T>(arg0: $Function_<T, $IGuiTexture>, arg1: $Function_<T, $Component>): $UIElementProvider<T>;
    }
    export interface $UIElementProvider<T> extends $Function<T, $UIElement> {
        apply(arg0: T): $UIElement;
        createUI(arg0: T): $UIElement;
    }
    /**
     * Values that may be interpreted as {@link $UIElementProvider}.
     */
    export type $UIElementProvider_<T> = ((arg0: T) => $UIElement);
    export class $IHistoryStack {
    }
    export interface $IHistoryStack {
        undo(): void;
        redo(): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: boolean): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: $Object, arg3: boolean): void;
        pushHistory(arg0: $Component_, arg1: $EditAction): void;
        jumpToHistory(arg0: $IHistoryStack$HistoryItem_): void;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T, arg2: $Object): $SerializableRecordAction<T>;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T): $SerializableRecordAction<T>;
    }
}
