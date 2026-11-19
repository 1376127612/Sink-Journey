import { $Object, $Exception } from "@package/java/lang";

declare module "@package/de/ambertation/wunderlib/general" {
    export class $Logger {
        info(arg0: string): void;
        info(arg0: string, ...arg1: $Object[]): void;
        debug(arg0: string, ...arg1: $Object[]): void;
        debug(arg0: string): void;
        error(arg0: string): void;
        error(arg0: string, arg1: $Object, arg2: $Exception): void;
        error(arg0: string, arg1: $Exception): void;
        warn(arg0: string): void;
        warn(arg0: string, ...arg1: $Object[]): void;
        warn(arg0: string, arg1: $Object, arg2: $Exception): void;
        warn(arg0: string, arg1: $Exception): void;
        constructor();
    }
}
