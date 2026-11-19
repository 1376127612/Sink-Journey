import { $Int2ObjectOpenHashMap, $Int2IntFunction, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Consumer } from "@package/java/util/function";
import { $IntervalSet } from "@package/org/antlr/v4/runtime/misc";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Runnable_, $Record, $StringBuilder } from "@package/java/lang";
import { $LabelPositionHolder } from "@package/ca/teamdman/sfm/common/label";
import { $LinkedList, $ArrayDeque } from "@package/java/util";
import { $ISFMTextEditScreen } from "@package/ca/teamdman/sfm/client/screen/text_editor";
export * as action from "@package/ca/teamdman/sfm/client/text_editor/action";

declare module "@package/ca/teamdman/sfm/client/text_editor" {
    export class $ISFMTextEditScreenOpenContext {
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_MESSAGE: $LocalizationEntry;
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_NO_BUTTON: $LocalizationEntry;
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_TITLE: $LocalizationEntry;
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_YES_BUTTON: $LocalizationEntry;
    }
    export interface $ISFMTextEditScreenOpenContext {
        onSaveAndClose(arg0: string): void;
        initialValue(): string;
        onTryClose(arg0: string, arg1: $Runnable_): void;
        saveWriter(): $Consumer<string>;
        labelPositionHolder(): $LabelPositionHolder;
    }
    export class $Caret extends $Record {
        lineIndex(): number;
        moveUpOneLine(arg0: $Int2IntFunction_): $Caret;
        compareTo(arg0: $Caret_): number;
        moveDownOneLine(arg0: $Int2IntFunction_, arg1: number): $Caret;
        moveRightOneCharacter(arg0: $Int2IntFunction_, arg1: number): $Caret;
        moveLeftOneCharacter(arg0: $Int2IntFunction_): $Caret;
        gapIndex(): number;
        constructor(lineIndex: number, gapIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $Caret}.
     */
    export type $Caret_ = { gapIndex?: number, lineIndex?: number,  } | [gapIndex?: number, lineIndex?: number, ];
    export class $TextEditContext extends $Record {
        lineLengths(): $Int2IntFunction;
        deleteSelectedText(): void;
        multiCursor(): $MultiCursor;
        lines(): $LinkedList<$StringBuilder>;
        copy(): $TextEditContext;
        getContent(): string;
        assertInvariants(): void;
        getCharacterCount(): number;
        selectedCharactersByLine(): $Int2ObjectOpenHashMap<$IntervalSet>;
        insertTextAtCursors(arg0: string): void;
        constructor(multiCursor: $MultiCursor_, lines: $LinkedList<$StringBuilder>);
        constructor(arg0: string);
        constructor();
        get content(): string;
        get characterCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextEditContext}.
     */
    export type $TextEditContext_ = { multiCursor?: $MultiCursor_, lines?: $LinkedList<$StringBuilder>,  } | [multiCursor?: $MultiCursor_, lines?: $LinkedList<$StringBuilder>, ];
    export class $Cursor extends $Record {
        getEnd(): $Caret;
        growSelectionLeft(arg0: $Int2IntFunction_): $Cursor;
        growSelectionRight(arg0: $Int2IntFunction_, arg1: number): $Cursor;
        hasSelection(): boolean;
        tail(): $Caret;
        head(): $Caret;
        getBeginning(): $Caret;
        isHeadOnLeft(): boolean;
        constructor(arg0: number);
        constructor(tail: $Caret_, head: $Caret_);
        get end(): $Caret;
        get beginning(): $Caret;
        get headOnLeft(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Cursor}.
     */
    export type $Cursor_ = { tail?: $Caret_, head?: $Caret_,  } | [tail?: $Caret_, head?: $Caret_, ];
    export interface $ISFMTextEditorRegistration extends RegistryMarked<RegistryTypes.SfmTextEditorTag, RegistryTypes.SfmTextEditor> {}
    export class $ISFMTextEditorRegistration {
    }
    export interface $ISFMTextEditorRegistration {
        createScreen(arg0: $ISFMTextEditScreenOpenContext): $ISFMTextEditScreen;
    }
    /**
     * Values that may be interpreted as {@link $ISFMTextEditorRegistration}.
     */
    export type $ISFMTextEditorRegistration_ = RegistryTypes.SfmTextEditor | ((arg0: $ISFMTextEditScreenOpenContext) => $ISFMTextEditScreen);
    export class $MultiCursor extends $Record {
        cursors(): $ArrayDeque<$Cursor>;
        addCursor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        constructor();
        constructor(cursors: $ArrayDeque<$Cursor_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiCursor}.
     */
    export type $MultiCursor_ = { cursors?: $ArrayDeque<$Cursor_>,  } | [cursors?: $ArrayDeque<$Cursor_>, ];
}
