import { $Consumer_ } from "@package/java/util/function";
import { $Path } from "@package/java/nio/file";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Collection, $Collection_, $List } from "@package/java/util";

declare module "@package/mezz/jei/api/runtime/config" {
    /**
     * @deprecated
     */
    export class $IJeiConfigFile {
    }
    export interface $IJeiConfigFile {
        getPath(): $Path;
        getCategories(): $List<$IJeiConfigCategory>;
        get path(): $Path;
        get categories(): $List<$IJeiConfigCategory>;
    }
    /**
     * @deprecated
     */
    export class $IJeiConfigValue<T> {
    }
    export interface $IJeiConfigValue<T> {
        getDefaultValue(): T;
        getName(): string;
        getValue(): T;
        set(arg0: T): boolean;
        /**
         * @deprecated
         */
        getDescription(): string;
        getLocalizedName(): $Component;
        addListener(arg0: $Consumer_<T>): void;
        getSerializer(): $IJeiConfigValueSerializer<T>;
        getLocalizedDescription(): $Component;
        get defaultValue(): T;
        get name(): string;
        get value(): T;
        get description(): string;
        get localizedName(): $Component;
        get serializer(): $IJeiConfigValueSerializer<T>;
        get localizedDescription(): $Component;
    }
    /**
     * @deprecated
     */
    export class $IJeiConfigManager {
    }
    export interface $IJeiConfigManager {
        getConfigFiles(): $Collection<$IJeiConfigFile>;
        get configFiles(): $Collection<$IJeiConfigFile>;
    }
    /**
     * Values that may be interpreted as {@link $IJeiConfigManager}.
     */
    export type $IJeiConfigManager_ = (() => $Collection_<$IJeiConfigFile>);
    /**
     * @deprecated
     */
    export class $IJeiConfigValueSerializer<T> {
    }
    export interface $IJeiConfigValueSerializer<T> {
        deserialize(arg0: string): $IJeiConfigValueSerializer$IDeserializeResult<T>;
        isValid(arg0: T): boolean;
        serialize(arg0: T): string;
        getAllValidValues(): ($Collection<T>) | undefined;
        getValidValuesDescription(): string;
        get allValidValues(): ($Collection<T>) | undefined;
        get validValuesDescription(): string;
    }
    /**
     * @deprecated
     */
    export class $IJeiConfigCategory {
    }
    export interface $IJeiConfigCategory {
        getName(): string;
        getConfigValues(): $Collection<$IJeiConfigValue<never>>;
        get name(): string;
        get configValues(): $Collection<$IJeiConfigValue<never>>;
    }
}
