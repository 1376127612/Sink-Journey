import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $ClientOptionValueRedirectorManager } from "@package/xaero/lib/client/config/option/value/redirect";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
import { $ClientConfigChangeListener } from "@package/xaero/lib/client/config/listener";
import { $SyncedConfigManager } from "@package/xaero/lib/client/config/sync";
export * as sync from "@package/xaero/lib/client/config/sync";
export * as option from "@package/xaero/lib/client/config/option";
export * as listener from "@package/xaero/lib/client/config/listener";
export * as channel from "@package/xaero/lib/client/config/channel";

declare module "@package/xaero/lib/client/config" {
    export class $ClientConfigManager {
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigOption<T>): T;
        setChannel(arg0: $ConfigChannel): void;
        getChangeListener(): $ClientConfigChangeListener;
        getCurrentProfile(): $ConfigProfile;
        postLoad(): void;
        getServerSynced(): $SyncedConfigManager;
        getProfileManager(): $ConfigProfileManager;
        getRedirectorManager(): $ClientOptionValueRedirectorManager;
        getPrimaryConfigManager(): $SingleConfigManager<$Config>;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): boolean;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigOption<T>): boolean;
        getEffective<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ConfigOption<T>): T;
        get changeListener(): $ClientConfigChangeListener;
        get currentProfile(): $ConfigProfile;
        get serverSynced(): $SyncedConfigManager;
        get profileManager(): $ConfigProfileManager;
        get redirectorManager(): $ClientOptionValueRedirectorManager;
        get primaryConfigManager(): $SingleConfigManager<$Config>;
    }
}
