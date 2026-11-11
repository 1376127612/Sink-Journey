import { $Consumer_ } from "@package/java/util/function";
import { $Collection, $Collection_ } from "@package/java/util";

declare module "@package/mezz/jei/api/search" {
    export class $ISearchStorageBuilder<T> {
    }
    export interface $ISearchStorageBuilder<T> {
        put(arg0: string, arg1: T): void;
        build(): $ISearchStorage<T>;
    }
    export class $ISearchStorageFactory {
    }
    export interface $ISearchStorageFactory {
        createSearchStorage<T>(): $ISearchStorage<T>;
    }
    /**
     * Values that may be interpreted as {@link $ISearchStorageFactory}.
     */
    export type $ISearchStorageFactory_ = (() => $ISearchStorage<any>);
    export class $ISearchStorageBuilderFactory {
    }
    export interface $ISearchStorageBuilderFactory {
        create<T>(): $ISearchStorageBuilder<T>;
        create<T>(arg0: string): $ISearchStorageBuilder<T>;
        supportsDeletion(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ISearchStorageBuilderFactory}.
     */
    export type $ISearchStorageBuilderFactory_ = (() => $ISearchStorageBuilder<any>);
    export class $ISearchStorage<T> {
    }
    export interface $ISearchStorage<T> {
        put(arg0: string, arg1: T): void;
        removeAll(arg0: $Collection_<T>): boolean;
        getSearchResults(arg0: string, arg1: $Consumer_<$Collection<T>>): void;
        getAllElements(arg0: $Consumer_<$Collection<T>>): void;
        statistics(): string;
        supportsDeletion(): boolean;
    }
}
