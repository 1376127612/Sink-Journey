import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $IManaged, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/storage" {
    export class $FieldManagedStorage implements $IManagedStorage {
        addSyncUpdateListener<T>(arg0: $ManagedKey, arg1: $IFieldUpdateListener_<T>): $ISubscription;
        hasDirtyPersistedFields(): boolean;
        requireInit(): void;
        getManaged(): $IManaged[];
        getFieldByKey(arg0: $ManagedKey): $IRef<never>;
        removeAllSyncUpdateListener(arg0: $ManagedKey): void;
        getSyncMarkCount(): number;
        hasDirtySyncFields(): boolean;
        getSyncFields(): $IRef<never>[];
        hasSyncListener(arg0: $ManagedKey): boolean;
        getNonLazyFields(): $IRef<never>[];
        getPersistedFields(): $IRef<never>[];
        notifyFieldUpdate<T>(arg0: $ManagedKey, arg1: T): $Stream<$Consumer<any>>;
        markAllDirty(): void;
        markDirty(arg0: $ManagedKey): void;
        constructor(arg0: $IManaged);
        get managed(): $IManaged[];
        get syncMarkCount(): number;
        get syncFields(): $IRef<never>[];
        get nonLazyFields(): $IRef<never>[];
        get persistedFields(): $IRef<never>[];
    }
    export class $IManagedStorage {
    }
    export interface $IManagedStorage {
        addSyncUpdateListener<T>(arg0: $ManagedKey, arg1: $IFieldUpdateListener_<T>): $ISubscription;
        markAllDirty(): void;
        markDirty(arg0: $ManagedKey): void;
        hasDirtyPersistedFields(): boolean;
        requireInit(): void;
        getManaged(): $IManaged[];
        getFieldByKey(arg0: $ManagedKey): $IRef<never>;
        removeAllSyncUpdateListener(arg0: $ManagedKey): void;
        getSyncMarkCount(): number;
        hasDirtySyncFields(): boolean;
        getSyncFields(): $IRef<never>[];
        hasSyncListener(arg0: $ManagedKey): boolean;
        getNonLazyFields(): $IRef<never>[];
        getPersistedFields(): $IRef<never>[];
        notifyFieldUpdate<T>(arg0: $ManagedKey, arg1: T): $Stream<$Consumer<any>>;
        get managed(): $IManaged[];
        get syncMarkCount(): number;
        get syncFields(): $IRef<never>[];
        get nonLazyFields(): $IRef<never>[];
        get persistedFields(): $IRef<never>[];
    }
    export class $IFieldUpdateListener<T> {
    }
    export interface $IFieldUpdateListener<T> {
        onFieldUpdated(arg0: $ManagedKey, arg1: T): $Consumer<T>;
    }
    /**
     * Values that may be interpreted as {@link $IFieldUpdateListener}.
     */
    export type $IFieldUpdateListener_<T> = ((arg0: $ManagedKey, arg1: T) => $Consumer_<T>);
}
