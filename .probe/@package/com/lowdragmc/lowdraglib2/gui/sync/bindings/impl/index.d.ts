import { $SyncValue } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $Consumer_, $Consumer, $Supplier_, $Function_, $Supplier } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $SyncStrategy_, $IBinding, $SyncStrategy, $IDataSource, $IDataProvider } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Type } from "@package/java/lang/reflect";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ITickable } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings/impl" {
    export class $SupplierDataSource<T> implements $IDataProvider<T>, $ITickable {
        getValue(): T;
        map<D>(arg0: $Function_<T, D>): $SupplierDataSource<D>;
        static of<T>(arg0: $Supplier_<T>): $SupplierDataSource<T>;
        frequency(): number;
        frequency(arg0: number): $SupplierDataSource<T>;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        tick(): void;
        checkUpdate(): void;
        getSupplier(): $Supplier<T>;
        registerListener(arg0: $Consumer_<T>, arg1: boolean): $ISubscription;
        get value(): T;
        get supplier(): $Supplier<T>;
    }
    export class $IPausable {
    }
    export interface $IPausable {
        resume(): void;
        isPaused(): boolean;
        pause(): void;
        togglePause(): void;
        get paused(): boolean;
    }
    export class $DataBindingBuilder<T> {
        name(): string;
        name(arg0: string): $DataBindingBuilder<T>;
        type(arg0: $Type): $DataBindingBuilder<T>;
        data(arg0: $Supplier_<T>, arg1: $Consumer_<T>): $DataBindingBuilder<T>;
        static component(arg0: $Supplier_<$Component>, arg1: $Consumer_<$Component>): $DataBindingBuilder<$Component>;
        static create<T>(arg0: $Supplier_<T>, arg1: $Consumer_<T>): $DataBindingBuilder<T>;
        static block(arg0: $Supplier_<$Block>, arg1: $Consumer_<$Block>): $DataBindingBuilder<$Block>;
        initialValue(arg0: T): $DataBindingBuilder<T>;
        getter(arg0: $Supplier_<T>): $DataBindingBuilder<T>;
        setter(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        build(): $SimpleBinding<T>;
        build(arg0: boolean): $SimpleBinding<T>;
        static string(arg0: $Supplier_<string>, arg1: $Consumer_<string>): $DataBindingBuilder<string>;
        static tag(arg0: $Supplier_<$Tag>, arg1: $Consumer_<$Tag>): $DataBindingBuilder<$Tag>;
        static bool(arg0: $Supplier_<boolean>, arg1: $Consumer_<boolean>): $DataBindingBuilder<boolean>;
        static intVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static byteValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static charVal(arg0: $Supplier_<string>, arg1: $Consumer_<string>): $DataBindingBuilder<string>;
        static boolC2S(arg0: $Consumer_<boolean>): $DataBindingBuilder<boolean>;
        static charValS2C(arg0: $Supplier_<string>): $DataBindingBuilder<string>;
        static longValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static stringS2C(arg0: $Supplier_<string>): $DataBindingBuilder<string>;
        static boolS2C(arg0: $Supplier_<boolean>): $DataBindingBuilder<boolean>;
        static blockC2S(arg0: $Consumer_<$Block>): $DataBindingBuilder<$Block>;
        static byteValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static blockS2C(arg0: $Supplier_<$Block>): $DataBindingBuilder<$Block>;
        static shortVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static intValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static longValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static charValC2S(arg0: $Consumer_<string>): $DataBindingBuilder<string>;
        static stringC2S(arg0: $Consumer_<string>): $DataBindingBuilder<string>;
        static byteVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static tagS2C(arg0: $Supplier_<$Tag>): $DataBindingBuilder<$Tag>;
        static enumValS2C<T extends $Enum<never>>(arg0: $Class<T>, arg1: $Supplier_<T>): $DataBindingBuilder<T>;
        static enumValC2S<T extends $Enum<never>>(arg0: $Class<T>, arg1: $Consumer_<T>): $DataBindingBuilder<T>;
        syncType(arg0: $Type): $DataBindingBuilder<T>;
        syncType(arg0: $Class<never>): $DataBindingBuilder<T>;
        static tagC2S(arg0: $Consumer_<$Tag>): $DataBindingBuilder<$Tag>;
        static doubleVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static floatVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static fluidStack(arg0: $Supplier_<$FluidStack>, arg1: $Consumer_<$FluidStack>): $DataBindingBuilder<$FluidStack>;
        onServerSyncReceived(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        onRemoteSyncReceived(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static itemStack(arg0: $Supplier_<$ItemStack>, arg1: $Consumer_<$ItemStack>): $DataBindingBuilder<$ItemStack>;
        static enumVal<T extends $Enum<never>>(arg0: $Class<T>, arg1: $Supplier_<T>, arg2: $Consumer_<T>): $DataBindingBuilder<T>;
        static fluidStackS2C(arg0: $Supplier_<$FluidStack>): $DataBindingBuilder<$FluidStack>;
        s2cStrategy(arg0: $SyncStrategy_): $DataBindingBuilder<T>;
        c2sStrategy(arg0: $SyncStrategy_): $DataBindingBuilder<T>;
        remoteSetter(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static intValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        onAfterSync(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static fluidStackC2S(arg0: $Consumer_<$FluidStack>): $DataBindingBuilder<$FluidStack>;
        remoteGetter(arg0: $Supplier_<T>): $DataBindingBuilder<T>;
        static itemStackC2S(arg0: $Consumer_<$ItemStack>): $DataBindingBuilder<$ItemStack>;
        static doubleValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        onBeforeSync(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static shortValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static shortValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        onSyncReceived(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static itemStackS2C(arg0: $Supplier_<$ItemStack>): $DataBindingBuilder<$ItemStack>;
        static componentS2C(arg0: $Supplier_<$Component>): $DataBindingBuilder<$Component>;
        static componentC2S(arg0: $Consumer_<$Component>): $DataBindingBuilder<$Component>;
        static floatValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static doubleValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static floatValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static longVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
    }
    export class $SimpleBinding<T> implements $IBinding<T> {
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        setRemoteDataSource(arg0: $IDataSource<T>): void;
        getRemoteDataSource(): $IDataSource<T>;
        registerPreSyncListener(arg0: $Consumer_<T>): $ISubscription;
        registerPostSyncListener(arg0: $Consumer_<T>): $ISubscription;
        getSyncValue(): $SyncValue<T>;
        s2cStrategy(): $SyncStrategy;
        c2sStrategy(): $SyncStrategy;
        setServerDataSource(arg0: $IDataSource<T>): void;
        getServerDataSource(): $IDataSource<T>;
        setValueProvider(arg0: $Supplier_<T>): void;
        acceptS2C(): boolean;
        acceptC2S(): boolean;
        syncValue: $SyncValue<T>;
        isRemote: boolean;
        constructor(arg0: boolean, arg1: string, arg2: $Type, arg3: T, arg4: $SyncStrategy_, arg5: $SyncStrategy_);
        set valueProvider(value: $Supplier_<T>);
    }
    export class $ScrollDataSource<T> implements $IDataProvider<T>, $ITickable, $IPausable {
        getValue(): T;
        map<D>(arg0: $Function_<T, D>): $ScrollDataSource<D>;
        static of<T>(arg0: $List_<T>): $ScrollDataSource<T>;
        resume(): void;
        frequency(): number;
        frequency(arg0: number): $ScrollDataSource<T>;
        getCounter(): number;
        getData(): $List<T>;
        getListeners(): $List<$Consumer<T>>;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        tick(): void;
        setCurrent(arg0: T): void;
        setCounter(arg0: number): void;
        setPaused(arg0: boolean): void;
        checkUpdate(): void;
        isPaused(): boolean;
        pause(): void;
        getLastValue(): T;
        getCurrent(): T;
        setLastValue(arg0: T): void;
        registerListener(arg0: $Consumer_<T>, arg1: boolean): $ISubscription;
        togglePause(): void;
        get value(): T;
        get data(): $List<T>;
        get listeners(): $List<$Consumer<T>>;
    }
}
