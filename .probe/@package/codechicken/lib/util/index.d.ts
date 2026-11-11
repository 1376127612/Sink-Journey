
declare module "@package/codechicken/lib/util" {
    export class $Copyable<T> {
    }
    export interface $Copyable<T> {
        copy(): T;
    }
    /**
     * Values that may be interpreted as {@link $Copyable}.
     */
    export type $Copyable_<T> = (() => T);
}
