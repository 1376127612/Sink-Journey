
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        hasServerProfileEditPermission(): boolean;
        isUsingConfigProfilePermission(): boolean;
        getEnforcedConfigProfilePermission(): string;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        constructor();
        get usingConfigProfilePermission(): boolean;
        get enforcedConfigProfilePermission(): string;
        set cachedHasServerProfileEditPermission(value: boolean);
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
    }
}
