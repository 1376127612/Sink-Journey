
declare module "@package/com/blamejared/crafttweaker/api/bracket" {
    export class $CommandStringDisplayable {
    }
    export interface $CommandStringDisplayable {
        getCommandString(): string;
        get commandString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CommandStringDisplayable}.
     */
    export type $CommandStringDisplayable_ = (() => string);
}
