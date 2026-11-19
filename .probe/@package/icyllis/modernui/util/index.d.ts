import { $Instant } from "@package/java/time";
import { $Function_, $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $Object, $ClassLoader, $CharSequence, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_, $Map_, $Map, $Map$Entry, $Collection, $Set } from "@package/java/util";

declare module "@package/icyllis/modernui/util" {
    export class $Parcelable {
    }
    export interface $Parcelable {
        writeToParcel(arg0: $Parcel, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Parcelable}.
     */
    export type $Parcelable_ = ((arg0: $Parcel, arg1: number) => void);
    export class $Parcel {
        readByteArray(): number[];
        writeByteArray(b: number[], off: number, len: number): void;
        writeByteArray(b: number[]): void;
        writeArray(a: $Object[]): void;
        writeUUID(value: $UUID_): void;
        readUUID(): $UUID;
        writeIntArray(value: number[]): void;
        readBooleanArray(): boolean[];
        readDoubleArray(): number[];
        readFloatArray(): number[];
        writeFloatArray(value: number[]): void;
        readParcelable<T>(loader: $ClassLoader, clazz: $Class<T>): T;
        position(newPosition: number): void;
        position(): number;
        limit(): number;
        limit(newLimit: number): void;
        writeInt(v: number): void;
        readInt(): number;
        capacity(): number;
        writeBytes(src: number[], off: number, len: number): void;
        writeBytes(src: number[]): void;
        readBytes(dst: number[], off: number, len: number): void;
        readBytes(dst: number[]): void;
        writeChar(v: number): void;
        readChar(): string;
        writeFloat(v: number): void;
        readFloat(): number;
        readLong(): number;
        readByte(): number;
        readString(): string;
        writeString(s: string): void;
        writeShort(v: number): void;
        readBoolean(): boolean;
        readShort(): number;
        readDouble(): number;
        writeBoolean(b: boolean): void;
        writeByte(v: number): void;
        writeLong(v: number): void;
        writeDouble(v: number): void;
        readValue<T>(loader: $ClassLoader, clazz: $Class<T>, elemType: $Class<never>): T;
        writeValue(v: $Object): void;
        readIntArray(): number[];
        readCharSequence(): $CharSequence;
        writeCharSequence(cs: $CharSequence): void;
        readLongArray(): number[];
        writeLongArray(value: number[]): void;
        readInstant(): $Instant;
        writeInstant(value: $Instant): void;
        readArray<T>(loader: $ClassLoader, clazz: $Class<T>): T[];
        writeString8(s: string): void;
        writeList(list: $List_<never>): void;
        freeData(): void;
        readShortArray(): number[];
        writeDoubleArray(value: number[]): void;
        writeShortArray(value: number[]): void;
        readParcelableCreator<T>(loader: $ClassLoader, clazz: $Class<T>): $Parcelable$Creator<T>;
        writeParcelableCreator(p: $Parcelable_): void;
        writeDataSet(source: $DataSet): void;
        readDataSet(loader: $ClassLoader): $DataSet;
        readString8(): string;
        writeBooleanArray(value: boolean[]): void;
        readParcelable0<T>(loader: $ClassLoader, clazz: $Class<T>): T;
        writeString16(s: string): void;
        readCharArray(): string[];
        writeCharArray(value: string[]): void;
        writeParcelable(p: $Parcelable_, parcelableFlags: number): void;
        readString16(): string;
        constructor();
    }
    export class $Parcelable$Creator<T> {
    }
    export interface $Parcelable$Creator<T> {
        createFromParcel(arg0: $Parcel): T;
    }
    /**
     * Values that may be interpreted as {@link $Parcelable$Creator}.
     */
    export type $Parcelable$Creator_<T> = ((arg0: $Parcel) => T);
    export class $DataSet implements $Map<string, $Object>, $Parcelable {
        getIntArray(key: string): number[];
        getLongArray(key: string): number[];
        getByteArray(key: string): number[];
        putIntArray(key: string, value: number[]): void;
        putLongArray(key: string, value: number[]): void;
        getFloatArray(key: string): number[];
        getDoubleArray(key: string): number[];
        getShortArray(key: string): number[];
        putUUID(key: string, value: $UUID_): void;
        putString(key: string, value: string): void;
        writeToParcel(dest: $Parcel, flags: number): void;
        putList(key: string, value: $List_<never>): void;
        remove(key: $Object): $Object;
        size(): number;
        get(key: $Object): $Object;
        put(key: string, value: $Object): $Object;
        values(): $Collection<$Object>;
        getBoolean(key: string): boolean;
        getBoolean(key: string, defaultValue: boolean): boolean;
        putBoolean(key: string, value: boolean): void;
        getByte(key: string): number;
        getByte(key: string, defaultValue: number): number;
        putByte(key: string, value: number): void;
        getShort(key: string): number;
        getShort(key: string, defaultValue: number): number;
        putShort(key: string, value: number): void;
        getChar(key: string, defaultValue: string): string;
        getChar(key: string): string;
        getInt(key: string, defaultValue: number): number;
        getInt(key: string): number;
        putInt(key: string, value: number): void;
        getLong(key: string): number;
        getLong(key: string, defaultValue: number): number;
        putLong(key: string, value: number): void;
        getFloat(key: string, defaultValue: number): number;
        getFloat(key: string): number;
        putFloat(key: string, value: number): void;
        getDouble(key: string): number;
        getDouble(key: string, defaultValue: number): number;
        putDouble(key: string, value: number): void;
        clear(): void;
        getValue<T>(key: string): T;
        getValue<T>(key: string, clazz: $Class<T>): T;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<string, $Object>>;
        putAll(map: $Map_<string, never>): void;
        putIfAbsent(key: string, value: $Object): $Object;
        containsKey(key: $Object): boolean;
        keySet(): $Set<string>;
        containsValue(value: $Object): boolean;
        getOrDefault(key: $Object, defaultValue: $Object): $Object;
        removeFirst(): $Object;
        removeLast(): $Object;
        putByteArray(key: string, value: number[]): void;
        getString(key: string, defaultValue: string): string;
        getString(key: string): string;
        getUUID(key: string, defaultValue: $UUID_): $UUID;
        getUUID(key: string): $UUID;
        getList<T>(key: string): $List<T>;
        getDataSet(key: string): $DataSet;
        putDataSet(key: string, value: $DataSet): void;
        putShortArray(key: string, value: number[]): void;
        putFloatArray(key: string, value: number[]): void;
        putDoubleArray(key: string, value: number[]): void;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: string, arg1: $Object, arg2: $Object): boolean;
        replace(arg0: string, arg1: $Object): $Object;
        replaceAll(arg0: $BiFunction_<string, $Object, $Object>): void;
        merge(arg0: string, arg1: $Object, arg2: $BiFunction_<$Object, $Object, $Object>): $Object;
        compute(arg0: string, arg1: $BiFunction_<string, $Object, $Object>): $Object;
        forEach(arg0: $BiConsumer_<string, $Object>): void;
        computeIfAbsent(arg0: string, arg1: $Function_<string, $Object>): $Object;
        computeIfPresent(arg0: string, arg1: $BiFunction_<string, $Object, $Object>): $Object;
        static CREATOR: $Parcelable$ClassLoaderCreator<$DataSet>;
        constructor();
        get empty(): boolean;
    }
    export class $Parcelable$ClassLoaderCreator<T> {
    }
    export interface $Parcelable$ClassLoaderCreator<T> extends $Parcelable$Creator<T> {
        createFromParcel(source: $Parcel): T;
        createFromParcel(arg0: $Parcel, arg1: $ClassLoader): T;
    }
    /**
     * Values that may be interpreted as {@link $Parcelable$ClassLoaderCreator}.
     */
    export type $Parcelable$ClassLoaderCreator_<T> = ((arg0: $Parcel, arg1: $ClassLoader) => T);
}
