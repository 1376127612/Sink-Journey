import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        undo(): void;
        redo(): void;
        matchOwner(owner: $UndoOwner): boolean;
        allowMerge(): boolean;
        commit(): void;
        getOwner(): $UndoOwner;
        hasData(): boolean;
        getOwnerData(): DATA;
        constructor(owner: $UndoOwner);
        get owner(): $UndoOwner;
        get ownerData(): DATA;
    }
    export class $UndoOwner {
        getTag(): string;
        getData(): $Object;
        get tag(): string;
        get data(): $Object;
    }
    export class $UndoManager {
        undo(owners: $UndoOwner[], count: number): number;
        redo(owners: $UndoOwner[], count: number): number;
        hasOperation(owner: $UndoOwner): boolean;
        countUndos(owners: $UndoOwner[]): number;
        countRedos(owners: $UndoOwner[]): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        beginUpdate(label: $CharSequence): void;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        commitState(owner: $UndoOwner): number;
        endUpdate(): void;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        getUpdateNestingLevel(): number;
        isInUpdate(): boolean;
        getOwner(tag: string, data: $Object): $UndoOwner;
        isInUndo(): boolean;
        saveInstanceState(p: $Parcel): void;
        setHistorySize(size: number): void;
        getHistorySize(): number;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        suggestUndoLabel(label: $CharSequence): void;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        setUndoLabel(label: $CharSequence): void;
        static MERGE_MODE_ANY: number;
        static MERGE_MODE_UNIQUE: number;
        static MERGE_MODE_NONE: number;
        constructor();
        get updateNestingLevel(): number;
        get inUpdate(): boolean;
        get inUndo(): boolean;
    }
}
