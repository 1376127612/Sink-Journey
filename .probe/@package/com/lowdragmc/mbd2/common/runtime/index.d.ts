import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $AutoWorldIO, $CapabilityIO, $ToggleAutoIO } from "@package/com/lowdragmc/mbd2/common/trait";
import { $Supplier_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IManaged } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $IO, $IO_ } from "@package/com/lowdragmc/mbd2/api/capability/recipe";
import { $ConfigMachineSettings$SignalConnection } from "@package/com/lowdragmc/mbd2/common/machine/definition/config";
import { $Runnable_, $Enum, $Object, $Class } from "@package/java/lang";
import { $List, $Collection } from "@package/java/util";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/lowdragmc/mbd2/common/runtime" {
    export class $RuntimeAutoIO {
        intervalTicks(): number;
        slot(arg0: $Direction_, arg1: $Direction_): $RuntimeValue<$IO>;
        setAll(arg0: $IO_): void;
        clearAll(): void;
        getIO(arg0: $Direction_, arg1: $Direction_): $IO;
        top: $RuntimeValue<$IO>;
        left: $RuntimeValue<$IO>;
        enable: $RuntimeValue<boolean>;
        bottom: $RuntimeValue<$IO>;
        back: $RuntimeValue<$IO>;
        interval: $RuntimeValue<number>;
        front: $RuntimeValue<$IO>;
        right: $RuntimeValue<$IO>;
        constructor(arg0: $RuntimeValueStorage, arg1: string, arg2: $Supplier_<$ToggleAutoIO>);
        set all(value: $IO_);
    }
    export class $IRuntimeValueHolder {
        static RUNTIME_VALUES: string;
    }
    export interface $IRuntimeValueHolder extends $IManaged {
        getRuntimeValues(): $RuntimeValueStorage;
        runtimeValueMachine(): $MBDMachine;
        markRuntimeValuesDirty(): void;
        get runtimeValues(): $RuntimeValueStorage;
    }
    export class $RuntimeValueStorage implements $INBTSerializable<$CompoundTag> {
        getHolder(): $IRuntimeValueHolder;
        isOverridden(arg0: string): boolean;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        ofString(arg0: string, arg1: $Supplier_<string>): $RuntimeValue<string>;
        ofFloat(arg0: string, arg1: $Supplier_<number>): $RuntimeValue<number>;
        static enumCodec<E extends $Enum<E>>(arg0: $Class<E>): $Codec<E>;
        ofEnum<E extends $Enum<E>>(arg0: string, arg1: $Class<E>, arg2: $Supplier_<E>): $RuntimeValue<E>;
        authored(arg0: string): $Object;
        ofInt(arg0: string, arg1: $Supplier_<number>): $RuntimeValue<number>;
        ofBool(arg0: string, arg1: $Supplier_<boolean>): $RuntimeValue<boolean>;
        ofDouble(arg0: string, arg1: $Supplier_<number>): $RuntimeValue<number>;
        ofStringList(arg0: string, arg1: $Supplier_<$List<string>>): $RuntimeValue<$List<string>>;
        ofLong(arg0: string, arg1: $Supplier_<number>): $RuntimeValue<number>;
        slot(arg0: string): $RuntimeValue<never>;
        get(arg0: string): $Object;
        clear(arg0: string): void;
        of<T>(arg0: string, arg1: $Class<T>, arg2: $Codec<T>, arg3: $Supplier_<T>): $RuntimeValue<T>;
        set(arg0: string, arg1: $Object): void;
        slots(): $Collection<$RuntimeValue<never>>;
        clearAll(): void;
        ofAABB(arg0: string, arg1: $Supplier_<$AABB>): $RuntimeValue<$AABB>;
        static STRING_LIST_CODEC: $Codec<$List<string>>;
        static AABB_CODEC: $Codec<$AABB>;
        static STRING_LIST_TYPE: $Class<$List<string>>;
        constructor(arg0: $IRuntimeValueHolder);
        get holder(): $IRuntimeValueHolder;
    }
    export class $RuntimeValue<T> {
        isOverridden(): boolean;
        authored(): T;
        get(): T;
        clear(): void;
        getKey(): string;
        set(arg0: T): void;
        setValue(arg0: $Object): void;
        onChanged(arg0: $Runnable_): $RuntimeValue<T>;
        get overridden(): boolean;
        get key(): string;
        set value(value: $Object);
    }
    export class $RuntimeSignalConnection {
        slot(arg0: $Direction_, arg1: $Direction_): $RuntimeValue<boolean>;
        getConnection(arg0: $Direction_, arg1: $Direction_): boolean;
        clearAll(): void;
        top: $RuntimeValue<boolean>;
        left: $RuntimeValue<boolean>;
        bottom: $RuntimeValue<boolean>;
        back: $RuntimeValue<boolean>;
        front: $RuntimeValue<boolean>;
        right: $RuntimeValue<boolean>;
        constructor(arg0: $RuntimeValueStorage, arg1: string, arg2: $Supplier_<$ConfigMachineSettings$SignalConnection>);
    }
    export class $RuntimeAutoWorldIO {
        intervalTicks(): number;
        getRotatedRange(arg0: $Direction_): $AABB;
        clearAll(): void;
        enable: $RuntimeValue<boolean>;
        range: $RuntimeValue<$AABB>;
        interval: $RuntimeValue<number>;
        speed: $RuntimeValue<number>;
        constructor(arg0: $RuntimeValueStorage, arg1: string, arg2: $Supplier_<$AutoWorldIO>);
    }
    export class $RuntimeCapabilityIO {
        slot(arg0: $Direction_, arg1: $Direction_): $RuntimeValue<$IO>;
        setAll(arg0: $IO_): void;
        clearAll(): void;
        getIO(arg0: $Direction_, arg1: $Direction_): $IO;
        internal: $RuntimeValue<$IO>;
        top: $RuntimeValue<$IO>;
        left: $RuntimeValue<$IO>;
        bottom: $RuntimeValue<$IO>;
        back: $RuntimeValue<$IO>;
        front: $RuntimeValue<$IO>;
        right: $RuntimeValue<$IO>;
        constructor(arg0: $RuntimeValueStorage, arg1: string, arg2: $Supplier_<$CapabilityIO>);
        set all(value: $IO_);
    }
}
