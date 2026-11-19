import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $ManagedFieldHolder, $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $Field, $Type } from "@package/java/lang/reflect";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $IManagedStorage, $IFieldUpdateListener_ } from "@package/com/lowdragmc/lowdraglib2/syncdata/storage";
export * as rpc from "@package/com/lowdragmc/lowdraglib2/syncdata/rpc";
export * as holder from "@package/com/lowdragmc/lowdraglib2/syncdata/holder";
export * as field from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
export * as accessor from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
export * as storage from "@package/com/lowdragmc/lowdraglib2/syncdata/storage";
export * as ref from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata" {
    export class $IPersistedSerializable {
    }
    export interface $IPersistedSerializable extends $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
    }
    export class $IManaged {
    }
    export interface $IManaged {
        addSyncUpdateListener<T>(arg0: string, arg1: $IFieldUpdateListener_<T>): $ISubscription;
        onPersistedMarkChanged(arg0: $IRef<never>, arg1: boolean): void;
        markDirty(arg0: string): void;
        getFieldHolder(): $ManagedFieldHolder;
        onSyncMarkChanged(arg0: $IRef<never>, arg1: boolean): void;
        notifyPersistence(): void;
        getSyncStorage(): $IManagedStorage;
        get fieldHolder(): $ManagedFieldHolder;
        get syncStorage(): $IManagedStorage;
    }
    export class $SyncValueHolder<T> {
        static getValueField(): $Field;
        getValue(): T;
        setValue(arg0: T): void;
        managedKey: $ManagedKey;
        ref: $IRef<never>;
        type: $Type;
        constructor(arg0: string, arg1: $Type, arg2: T);
        static get valueField(): $Field;
    }
    export class $IContentChangeAware {
    }
    export interface $IContentChangeAware {
        setOnContentsChanged(arg0: $Runnable_): void;
        getOnContentsChanged(): $Runnable;
    }
    export class $ISubscription {
    }
    export interface $ISubscription {
        andThen(arg0: $ISubscription_): $ISubscription;
        unsubscribe(): void;
    }
    /**
     * Values that may be interpreted as {@link $ISubscription}.
     */
    export type $ISubscription_ = (() => void);
}
