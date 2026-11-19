
declare module "@package/com/alessandro/astages/api/feature" {
    export class $AChangeable {
    }
    export interface $AChangeable {
        setChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $AChangeable}.
     */
    export type $AChangeable_ = (() => void);
    export class $AMarkable {
    }
    export interface $AMarkable {
        markAsDirty(): void;
    }
    /**
     * Values that may be interpreted as {@link $AMarkable}.
     */
    export type $AMarkable_ = (() => void);
}
