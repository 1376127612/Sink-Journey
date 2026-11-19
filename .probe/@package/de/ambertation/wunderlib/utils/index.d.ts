import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/de/ambertation/wunderlib/utils" {
    export class $Version {
        isLargerThan(arg0: $Version): boolean;
        isLargerThan(arg0: string): boolean;
        isLargerOrEqualVersion(arg0: $Version): boolean;
        isLargerOrEqualVersion(arg0: string): boolean;
        static fromInt(arg0: number): $Version;
        isLessOrEqualVersion(arg0: string): boolean;
        isLessOrEqualVersion(arg0: $Version): boolean;
        static major(arg0: number): number;
        static minor(arg0: number): number;
        static patch(arg0: number): number;
        toInt(): number;
        isLessThan(arg0: string): boolean;
        isLessThan(arg0: $Version): boolean;
        static ZERO: $Version;
        version: string;
        constructor(arg0: string);
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $Version$ModVersionProvider {
    }
    export interface $Version$ModVersionProvider {
        getModID(): string;
        mk(arg0: string): $ResourceLocation;
        getNamespace(): string;
        getModVersion(): $Version;
        get modID(): string;
        get namespace(): string;
        get modVersion(): $Version;
    }
}
