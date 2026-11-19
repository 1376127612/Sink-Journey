import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        setDefaults(): void;
        getChangeListener(): $IConfigChangeListener;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        getChangeCount(): number;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        setChangeListener(arg0: $IConfigChangeListener): void;
        isAllowNullValues(): boolean;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        clearDirtyOptions(): void;
        copyOptionsFrom(arg0: $Config): void;
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        postSave(): void;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
        get changeCount(): number;
        get allowNullValues(): boolean;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        set optionDefault(value: $ConfigOption<T>);
    }
}
