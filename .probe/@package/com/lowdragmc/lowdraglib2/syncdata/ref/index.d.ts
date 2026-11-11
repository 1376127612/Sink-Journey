import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $Predicate_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/ref" {
    export class $IRef<TYPE> {
    }
    export interface $IRef<TYPE> {
        update(): void;
        getKey(): $ManagedKey;
        getAccessor(): $IAccessor<TYPE>;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        clearPersistedDirty(): void;
        getPersistedPrefixName(): string;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        setPersistedPrefixName(arg0: string): void;
        readRaw(): TYPE;
        writeRaw(arg0: TYPE): void;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        markAsDirty(): void;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        isPersistedDirty(): boolean;
        getPersistedKey(): string;
        isSyncDirty(): boolean;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        clearSyncDirty(): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        set conditionalSynced(value: $Predicate_<TYPE>);
        set onPersistedListener(value: $BooleanConsumer_);
        set onSyncListener(value: $BooleanConsumer_);
        get persistedDirty(): boolean;
        get persistedKey(): string;
        get syncDirty(): boolean;
    }
}
