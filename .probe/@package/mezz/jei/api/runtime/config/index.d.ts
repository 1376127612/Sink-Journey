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
        getCategories(): $List<$IJeiConfigCategory>;
        getPath(): $Path;
        get categories(): $List<$IJeiConfigCategory>;
        get path(): $Path;
    }
    /**
     * @deprecated
     */
    export class $IJeiConfigValue<T> {
    }
    export interface $IJeiConfigValue<T> {
        getSerializer(): $IJeiConfigValueSerializer<T>;
        getLocalizedDescription(): $Component;
        getDefaultValue(): T;
        getName(): string;
        getValue(): T;
        set(arg0: T): boolean;
        /**
         * @deprecated
         */
        getDescription(): string;
        addListener(arg0: $Consumer_<T>): void;
        getLocalizedName(): $Component;
        get serializer(): $IJeiConfigValueSerializer<T>;
        get localizedDescription(): $Component;
        get defaultValue(): T;
        get name(): string;
        get value(): T;
        get description(): string;
        get localizedName(): $Component;
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
        getAllValidValues(): ($Collection<T>) | undefined;
        isValid(arg0: T): boolean;
        deserialize(arg0: string): $IJeiConfigValueSerializer$IDeserializeResult<T>;
        serialize(arg0: T): string;
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
        getConfigValues(): $Collection<$IJeiConfigValue<never>>;
        getName(): string;
        get configValues(): $Collection<$IJeiConfigValue<never>>;
        get name(): string;
    }
}
