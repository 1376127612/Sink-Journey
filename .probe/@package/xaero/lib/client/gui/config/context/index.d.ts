import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        hasPermission(arg0: $ConfigChannel): boolean;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        getScreenTitleFormat(): string;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getDropdownNarration(): $Component;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        isAutoDefaultProfile(): boolean;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        getSyncMessage(): $Component;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        reset(arg0: $ConfigChannel): void;
        isClientSide(): boolean;
        get screenTitleFormat(): string;
        get dropdownNarration(): $Component;
        get autoDefaultProfile(): boolean;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
        get clientSide(): boolean;
    }
}
