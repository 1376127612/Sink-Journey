import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/server/sync";
export * as listener from "@package/xaero/lib/common/config/server/listener";

declare module "@package/xaero/lib/common/config/server" {
    export class $ServerConfigManager {
        hasServerProfileEditPermission(arg0: $ServerPlayerData): boolean;
        getEnforcedProfileForPlayer(arg0: $ServerPlayerData): $ConfigProfile;
        getPermissionBasedProfileId(arg0: $ServerPlayerData): string;
        setDefaultEnforcedProfileId(arg0: string): void;
        postLoad(): void;
        getChangeListener(): $ServerConfigChangeListener;
        getProfileManager(): $ConfigProfileManager;
        getEffective<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        usesDefaultEnforcedProfile(arg0: $ServerPlayer): boolean;
        usesDefaultEnforcedProfile(arg0: $ServerPlayerData): boolean;
        getPermissionBasedProfile(arg0: $ServerPlayerData): $ConfigProfile;
        getDefaultEnforcedProfile(): $ConfigProfile;
        getRedirectorManager(): $OptionValueRedirectorManager;
        setChangeListener(arg0: $ServerConfigChangeListener): void;
        getChannel(): $ConfigChannel;
        setChannel(arg0: $ConfigChannel): void;
        getServer(): $MinecraftServer;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        setServer(arg0: $MinecraftServer): void;
        set defaultEnforcedProfileId(value: string);
        get profileManager(): $ConfigProfileManager;
        get defaultEnforcedProfile(): $ConfigProfile;
        get redirectorManager(): $OptionValueRedirectorManager;
    }
}
