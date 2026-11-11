import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        allowMerge(): boolean;
        matchOwner(owner: $UndoOwner): boolean;
        commit(): void;
        getOwner(): $UndoOwner;
        hasData(): boolean;
        undo(): void;
        redo(): void;
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
        endUpdate(): void;
        isInUpdate(): boolean;
        getOwner(tag: string, data: $Object): $UndoOwner;
        commitState(owner: $UndoOwner): number;
        beginUpdate(label: $CharSequence): void;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        isInUndo(): boolean;
        undo(owners: $UndoOwner[], count: number): number;
        redo(owners: $UndoOwner[], count: number): number;
        hasOperation(owner: $UndoOwner): boolean;
        countRedos(owners: $UndoOwner[]): number;
        countUndos(owners: $UndoOwner[]): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        getUpdateNestingLevel(): number;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        setUndoLabel(label: $CharSequence): void;
        getHistorySize(): number;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        suggestUndoLabel(label: $CharSequence): void;
        saveInstanceState(p: $Parcel): void;
        setHistorySize(size: number): void;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        static MERGE_MODE_ANY: number;
        static MERGE_MODE_UNIQUE: number;
        static MERGE_MODE_NONE: number;
        constructor();
        get inUpdate(): boolean;
        get inUndo(): boolean;
        get updateNestingLevel(): number;
    }
}
