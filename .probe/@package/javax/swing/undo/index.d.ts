
declare module "@package/javax/swing/undo" {
    export class $UndoableEdit {
    }
    export interface $UndoableEdit {
        addEdit(arg0: $UndoableEdit): boolean;
        replaceEdit(arg0: $UndoableEdit): boolean;
        isSignificant(): boolean;
        getPresentationName(): string;
        getUndoPresentationName(): string;
        getRedoPresentationName(): string;
        undo(): void;
        redo(): void;
        die(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        get significant(): boolean;
        get presentationName(): string;
        get undoPresentationName(): string;
        get redoPresentationName(): string;
    }
}
