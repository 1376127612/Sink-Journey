
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        isUsingConfigProfilePermission(): boolean;
        getEnforcedConfigProfilePermission(): string;
        hasServerProfileEditPermission(): boolean;
        constructor();
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
        set cachedHasServerProfileEditPermission(value: boolean);
        get usingConfigProfilePermission(): boolean;
        get enforcedConfigProfilePermission(): string;
    }
}
