import { $Function_ } from "@package/java/util/function";
import { $CommandStringDisplayable } from "@package/com/blamejared/crafttweaker/api/bracket";

declare module "@package/com/blamejared/crafttweaker/api/util/random" {
    export class $Percentaged<T> implements $CommandStringDisplayable {
        getPercentage(): number;
        getCommandString(): string;
        getData(): T;
        constructor(arg0: T, arg1: number, arg2: $Function_<T, string>);
        get percentage(): number;
        get commandString(): string;
        get data(): T;
    }
}
